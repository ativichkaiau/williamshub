/**
 * Build-time content verification. Runs before every build (npm `prebuild`).
 *
 * Two tiers:
 *   1. Placement warnings (NON-FATAL) — sources with no subject / no lecture
 *      number / colliding set slugs. Historical drift; resolve via
 *      content/placement-overrides.ts.
 *   2. Integrity + markup errors (FATAL, exit 1) — things that render broken or
 *      break navigation, so they must never ship:
 *        • unsupported inline markup (only **bold**, *italic*, [[id]] render —
 *          see components/Rich.tsx). Rejects _italic_, [[id|alias]],
 *          **…[[id]]…** (link inside bold), and [[Not-Kebab]] link ids.
 *        • duplicate module ids, unresolved [[cross-links]], and quiz answerIds
 *          that don't point at a real option.
 *
 *     npm run content:verify
 */

import { lectures } from '../content';
import { contentIssues, type ContentIssue } from '../lib/content/placement';

// ── Tier 1: placement warnings (non-fatal) ──────────────────────────────────
const issues = contentIssues(lectures);
if (issues.length === 0) {
  console.log(`content:verify — ${lectures.length} modules, placement clean.`);
} else {
  const byKind = issues.reduce<Record<string, ContentIssue[]>>((acc, i) => {
    (acc[i.kind] ??= []).push(i);
    return acc;
  }, {});
  console.warn(`content:verify — ${issues.length} placement warning(s) across ${lectures.length} modules:`);
  for (const [kind, list] of Object.entries(byKind)) {
    console.warn(`  • ${kind}: ${list.length}`);
    for (const i of list.slice(0, 8)) console.warn(`      ${i.moduleId} — ${i.detail}`);
    if (list.length > 8) console.warn(`      …and ${list.length - 8} more`);
  }
  console.warn('  (non-fatal — add entries to content/placement-overrides.ts to resolve)');
}

// ── Tier 2: integrity + markup errors (fatal) ───────────────────────────────
type Fatal = { moduleId: string; kind: string; detail: string };
const fatals: Fatal[] = [];

const ids = new Set<string>();
const dups = new Set<string>();
for (const l of lectures) {
  if (ids.has(l.id)) dups.add(l.id);
  ids.add(l.id);
}
for (const id of dups) fatals.push({ moduleId: id, kind: 'duplicate-id', detail: 'id appears more than once' });

/** Every human-readable string reachable in a module. */
function strings(value: unknown): string[] {
  if (typeof value === 'string') return [value];
  if (Array.isArray(value)) return value.flatMap(strings);
  if (value && typeof value === 'object') return Object.values(value).flatMap(strings);
  return [];
}

const BOLD = /\*\*[^*]+\*\*/g; // a bold span; if it contains [[ the link is trapped inside and won't render
const UNDERSCORE = /(?<![A-Za-z0-9_])_[^_\n]+?_(?![A-Za-z0-9_])/; // _italic_ (unsupported)
const ALIAS = /\[\[[a-z0-9-]+\|/; // [[id|alias]] (unsupported)
const BAD_ID = /\[\[(?![a-z0-9-]+\]\])[^\]]{1,60}\]\]/; // [[ inner that isn't lowercase-kebab ]]
const LINK = /\[\[([a-z0-9-]+)\]\]/g; // a well-formed link → target must exist

for (const l of lectures) {
  for (const s of strings(l)) {
    for (const span of s.match(BOLD) ?? []) {
      if (span.includes('[[')) fatals.push({ moduleId: l.id, kind: 'bold-wrapped-link', detail: span.slice(0, 60) });
    }
    if (UNDERSCORE.test(s)) fatals.push({ moduleId: l.id, kind: 'underscore-italic', detail: s.slice(0, 60) });
    if (ALIAS.test(s)) fatals.push({ moduleId: l.id, kind: 'alias-link', detail: s.slice(0, 60) });
    if (BAD_ID.test(s)) fatals.push({ moduleId: l.id, kind: 'bad-link-id', detail: s.slice(0, 60) });
    for (const m of s.matchAll(LINK)) {
      if (!ids.has(m[1])) fatals.push({ moduleId: l.id, kind: 'unresolved-link', detail: `[[${m[1]}]]` });
    }
  }
  for (const q of l.quiz ?? []) {
    if (!q.options.some((o) => o.id === q.answerId)) {
      fatals.push({ moduleId: l.id, kind: 'bad-answer-id', detail: `${q.id}: answerId "${q.answerId}" not an option` });
    }
  }
}

if (fatals.length > 0) {
  const byKind = fatals.reduce<Record<string, Fatal[]>>((acc, f) => {
    (acc[f.kind] ??= []).push(f);
    return acc;
  }, {});
  console.error(`\ncontent:verify — ${fatals.length} FATAL content error(s):`);
  for (const [kind, list] of Object.entries(byKind)) {
    console.error(`  ✗ ${kind}: ${list.length}`);
    for (const f of list.slice(0, 10)) console.error(`      ${f.moduleId} — ${f.detail}`);
    if (list.length > 10) console.error(`      …and ${list.length - 10} more`);
  }
  console.error('\n  Only **bold**, *italic* and [[module-id]] render (see components/Rich.tsx). Fix the above and rebuild.');
  process.exit(1);
}

console.log(`content:verify — integrity clean: ${ids.size} unique ids, all cross-links resolve, all quiz answers valid.`);
