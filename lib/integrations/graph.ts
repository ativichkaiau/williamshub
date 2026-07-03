// Build-time knowledge-graph index over the existing lecture content.
// Pure + memoised at module load; no I/O, no DB. Everything here is derived from
// content/index.ts (the lectures) and content/curriculum.ts (year/subject map).

import { lectures, lectureById } from '../../content';
import { subjectOfSource, subjectByCode } from '../../content/curriculum';
import type { Lecture } from '../types';
import type { ModuleNode } from './types';

// Organ-system (clinical) blocks. Everything else — pathology, pharmacology,
// microbiology, physiology, histology, molecular, research — is "foundational"
// (basic science). Used to classify vertical (basic ↔ clinical) integrations.
const SYSTEM_BLOCK_PREFIXES = [
  'HCVS',
  'HRS',
  'HGB',
  'HRP',
  'HRU',
  'HNS',
  'HEN',
  'HMS',
  'HSC',
  'HHL',
];

function isFoundationalCode(code: string | null): boolean {
  if (!code) return false;
  return !SYSTEM_BLOCK_PREFIXES.some((p) => code.toUpperCase().startsWith(p));
}

function lectureNoOf(source: string): number | null {
  const m = source.match(/^L(\d+)/i);
  return m ? parseInt(m[1], 10) : null;
}

/** Build a graph node from a lecture (subject/year resolved via the curriculum). */
export function toModuleNode(l: Lecture): ModuleNode {
  const subjectCode = subjectOfSource[l.source] ?? null;
  const subject = subjectCode ? subjectByCode[subjectCode] : undefined;
  return {
    id: l.id,
    title: l.title,
    system: l.system,
    source: l.source,
    subjectCode,
    subjectName: subject?.name ?? null,
    year: subject?.year ?? null,
    lectureNo: lectureNoOf(l.source),
    foundational: isFoundationalCode(subjectCode),
  };
}

// --- Wikilink extraction -----------------------------------------------------

const WIKILINK_RE = /\[\[([a-z0-9-]+)\]\]/g;

/** Every module id this lecture links to via [[id]] in its authored prose. */
export function extractWikilinks(l: Lecture): string[] {
  const buckets: string[] = [
    ...l.highYield,
    l.mechanism.title,
    ...l.mechanism.steps.map((s) => `${s.label} ${s.detail ?? ''}`),
    ...l.treatment.map((t) => `${t.logic} ${t.detail ?? ''}`),
    ...l.investigations.map((iv) => `${iv.clue} ${iv.meaning}`),
  ];
  const out = new Set<string>();
  for (const text of buckets) {
    for (const m of text.matchAll(WIKILINK_RE)) {
      if (m[1] !== l.id) out.add(m[1]); // ignore self-links
    }
  }
  return [...out];
}

// --- Memoised indices --------------------------------------------------------

/** All nodes, keyed by id. */
export const moduleNodes: Record<string, ModuleNode> = Object.fromEntries(
  lectures.map((l) => [l.id, toModuleNode(l)]),
);

/** Outgoing curated wikilinks: id → [linked ids that exist]. */
export const wikilinkOut: Record<string, string[]> = Object.fromEntries(
  lectures.map((l) => [l.id, extractWikilinks(l).filter((t) => lectureById[t])]),
);

/** Incoming curated wikilinks (reverse edges): id → [ids that link to it]. */
export const wikilinkIn: Record<string, string[]> = (() => {
  const rev: Record<string, Set<string>> = {};
  for (const [from, tos] of Object.entries(wikilinkOut)) {
    for (const to of tos) (rev[to] ??= new Set()).add(from);
  }
  return Object.fromEntries(Object.entries(rev).map(([k, v]) => [k, [...v]]));
})();

/** Tag index over discriminating tags (mechanism/disease/exam/investigation/treatment).
 *  'system' and 'lecture' tags are excluded — too broad to imply a real link. */
const MEANINGFUL_TAG_KINDS = new Set(['mechanism', 'disease', 'exam', 'investigation', 'treatment']);

function tagKey(kind: string, label: string): string {
  return `${kind}:${label.trim().toLowerCase()}`;
}

/** tagKey → [module ids carrying it]. */
export const tagIndex: Record<string, string[]> = (() => {
  const idx: Record<string, Set<string>> = {};
  for (const l of lectures) {
    for (const t of l.tags) {
      if (!MEANINGFUL_TAG_KINDS.has(t.kind)) continue;
      (idx[tagKey(t.kind, t.label)] ??= new Set()).add(l.id);
    }
  }
  return Object.fromEntries(Object.entries(idx).map(([k, v]) => [k, [...v]]));
})();

/** Modules that share ≥1 meaningful tag with `id`, ranked by shared-tag count. */
export function sharedTagModules(id: string): { id: string; shared: number }[] {
  const l = lectureById[id];
  if (!l) return [];
  const counts: Record<string, number> = {};
  for (const t of l.tags) {
    if (!MEANINGFUL_TAG_KINDS.has(t.kind)) continue;
    for (const other of tagIndex[tagKey(t.kind, t.label)] ?? []) {
      if (other !== id) counts[other] = (counts[other] ?? 0) + 1;
    }
  }
  return Object.entries(counts)
    .map(([oid, shared]) => ({ id: oid, shared }))
    .sort((a, b) => b.shared - a.shared);
}

export function getNode(id: string): ModuleNode | undefined {
  return moduleNodes[id];
}

// --- Cross-subject term index ------------------------------------------------
// Links related concepts ACROSS subjects/blocks (e.g. an organism → the disease,
// drug and pathology modules in other subjects). Built from significant terms in
// the title + tag labels; generic words are dropped so matches are meaningful.

const TERM_STOPWORDS = new Set([
  'and', 'the', 'for', 'with', 'from', 'into', 'over', 'under', 'vs',
  'disease', 'diseases', 'disorder', 'disorders', 'syndrome', 'syndromes',
  'acute', 'chronic', 'clinical', 'overview', 'introduction', 'intro', 'basic',
  'human', 'system', 'systems', 'mechanism', 'mechanisms', 'approach', 'management',
  'principles', 'general', 'other', 'part', 'type', 'types', 'cell', 'cells',
  'tract', 'function', 'functions', 'used', 'related', 'common', 'primary',
]);

function terms(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ' ')
    .split(/[\s-]+/)
    .filter((w) => w.length >= 4 && !TERM_STOPWORDS.has(w));
}

function moduleTerms(id: string): Set<string> {
  const l = lectureById[id];
  const out = new Set<string>();
  if (!l) return out;
  for (const t of terms(l.title)) out.add(t);
  for (const tag of l.tags) for (const t of terms(tag.label)) out.add(t);
  return out;
}

/** term → module ids that carry it (from title + tag labels). */
export const termIndex: Record<string, string[]> = (() => {
  const idx: Record<string, Set<string>> = {};
  for (const l of lectures) {
    for (const t of moduleTerms(l.id)) (idx[t] ??= new Set()).add(l.id);
  }
  return Object.fromEntries(Object.entries(idx).map(([k, v]) => [k, [...v]]));
})();

/**
 * Modules in a DIFFERENT subject that share significant terms, ranked by a
 * rarity-weighted score. A rare shared term (an organism, drug or disease name —
 * e.g. "staphylococcus", "lupus") counts strongly even alone; generic terms
 * count little, and near-ubiquitous ones are ignored. This surfaces genuine
 * cross-block links (organism ↔ disease ↔ drug ↔ pathology) without flooding.
 */
export function crossSubjectCandidates(id: string): { id: string; score: number }[] {
  const node = moduleNodes[id];
  if (!node) return [];
  const scores: Record<string, number> = {};
  const maxWeight: Record<string, number> = {};
  for (const term of moduleTerms(id)) {
    const carriers = termIndex[term] ?? [];
    if (carriers.length > 40) continue; // too generic to be meaningful
    const weight = carriers.length <= 3 ? 3 : carriers.length <= 8 ? 2 : 1;
    for (const other of carriers) {
      if (other === id) continue;
      const on = moduleNodes[other];
      if (!on || on.subjectCode === node.subjectCode) continue; // cross-subject only
      scores[other] = (scores[other] ?? 0) + weight;
      maxWeight[other] = Math.max(maxWeight[other] ?? 0, weight);
    }
  }
  return Object.entries(scores)
    // Require score ≥3 AND a specific anchor term (weight ≥2) — kills pure
    // common-word coincidences while keeping organism/drug/disease-name links.
    .filter(([oid, s]) => s >= 3 && (maxWeight[oid] ?? 0) >= 2)
    .map(([oid, score]) => ({ id: oid, score }))
    .sort((a, b) => b.score - a.score);
}
