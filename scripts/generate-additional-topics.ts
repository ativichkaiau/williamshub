/**
 * Offline Additional-Topics generator.
 *
 * For EVERY subject it authors 16–20 extra, exam-relevant modules that are NOT
 * already in the core lecture list — same structure as core modules, but plain
 * (no ** highlighter markup). Writes:
 *   • content/additional-topics.generated.ts  — the modules + source→subject map
 *
 * Requires an OpenAI key (rich medical content can't be produced deterministically).
 * Without a key it exits WITHOUT overwriting, so any hand-seeded starter is kept.
 * The running app never calls this — it stays static / zero-backend.
 *
 *     OPENAI_API_KEY=sk-... npm run additional:generate
 */

import { writeFileSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { lecturesBySubject } from '../content';
import { subjectByCode } from '../content/curriculum';
import { generateAdditionalTopics, type SubjectSpec } from '../lib/additional/aiService';
import type { Lecture, SystemId } from '../lib/types';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const TARGET_PER_SUBJECT = 18; // within the requested 16–20 band
const BATCH_SIZE = 6; // substantive modules per API call, to stay under the token cap
const CONCURRENCY = 3; // gpt-4o is slower / more rate-limited than the mini model

function loadLocalEnv() {
  for (const name of ['.env.local', '.env']) {
    try {
      const raw = readFileSync(join(root, name), 'utf8');
      for (const line of raw.split('\n')) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;
        const eq = trimmed.indexOf('=');
        if (eq === -1) continue;
        const key = trimmed.slice(0, eq).trim();
        let value = trimmed.slice(eq + 1).trim();
        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
          value = value.slice(1, -1);
        }
        if (!process.env[key]) process.env[key] = value;
      }
    } catch {
      /* no env file — fine */
    }
  }
}

function modalSystem(mods: Lecture[]): SystemId {
  const counts: Record<string, number> = {};
  for (const m of mods) counts[m.system] = (counts[m.system] ?? 0) + 1;
  const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0];
  return (top as SystemId) ?? 'pathology';
}

/** Generate one subject in small batches (so each rich response fits the token
 *  cap), feeding accumulated titles forward so batches don't duplicate. */
async function generateForSubject(spec: SubjectSpec, apiKey: string, model: string): Promise<Lecture[]> {
  const out: Lecture[] = [];
  const seenIds = new Set<string>();
  const titles = [...spec.existingTitles];
  const batches = Math.ceil(spec.count / BATCH_SIZE);
  for (let b = 0; b < batches && out.length < spec.count; b++) {
    const want = Math.min(BATCH_SIZE, spec.count - out.length);
    const mods = await generateAdditionalTopics({ ...spec, count: want, existingTitles: titles }, apiKey, model);
    for (const m of mods) {
      if (seenIds.has(m.id)) continue;
      seenIds.add(m.id);
      titles.push(m.title);
      out.push(m);
    }
    if (mods.length === 0) break; // a failed batch — stop retrying this subject
  }
  return out;
}

/** Run tasks with a small concurrency cap. */
async function pool<T, R>(items: T[], limit: number, fn: (t: T) => Promise<R>): Promise<R[]> {
  const results: R[] = new Array(items.length);
  let next = 0;
  async function worker() {
    while (next < items.length) {
      const i = next++;
      results[i] = await fn(items[i]);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
}

async function main() {
  loadLocalEnv();
  const apiKey = process.env.OPENAI_API_KEY ?? '';
  const model = process.env.OPENAI_MODEL ?? 'gpt-4o';

  if (!apiKey) {
    console.warn('additional:generate — no OPENAI_API_KEY found (.env.local or env).');
    console.warn('  Skipping generation and KEEPING the existing content/additional-topics.generated.ts.');
    console.warn('  Set OPENAI_API_KEY and re-run to fill all subjects with 16–20 topics each.');
    return;
  }

  // Build one spec per subject from its CORE modules (exclude any prior Additional
  // Topics so we dedupe against the real curriculum and regenerate cleanly).
  const specs: SubjectSpec[] = Object.entries(lecturesBySubject)
    .map(([code, mods]) => {
      const core = mods.filter((m) => !m.source.startsWith('Additional Topics'));
      const subject = subjectByCode[code];
      return {
        code,
        name: subject?.name ?? code,
        system: modalSystem(core),
        existingTitles: core.map((m) => m.title),
        count: TARGET_PER_SUBJECT,
      } satisfies SubjectSpec;
    })
    .sort((a, b) => a.code.localeCompare(b.code));

  console.log(`additional:generate — ${specs.length} subjects, target ${TARGET_PER_SUBJECT} each, model=${model}.`);

  const perSubject = await pool(specs, CONCURRENCY, async (spec) => {
    const mods = await generateForSubject(spec, apiKey, model);
    console.log(`  ${spec.code.padEnd(8)} ${mods.length} modules`);
    return { spec, mods };
  });

  // De-duplicate ids globally (defensive) and collect the source→subject map.
  const all: Lecture[] = [];
  const seen = new Set<string>();
  const subjectsMap: Record<string, string> = {};
  for (const { spec, mods } of perSubject) {
    if (mods.length === 0) continue;
    subjectsMap[`Additional Topics — ${spec.code}`] = spec.code;
    for (const m of mods) {
      if (seen.has(m.id)) continue;
      seen.add(m.id);
      all.push(m);
    }
  }

  if (all.length === 0) {
    console.warn('additional:generate — produced 0 modules; keeping the existing file untouched.');
    return;
  }

  const iso = new Date().toISOString();
  const file =
    `// AUTO-GENERATED by scripts/generate-additional-topics.ts — do not edit by hand.\n` +
    `// generator=openai model=${model} subjects=${Object.keys(subjectsMap).length} modules=${all.length} generated=${iso}\n` +
    `//\n` +
    `// Additional (supplementary) topics per subject — same structure as core\n` +
    `// modules, plain text (no ** highlighter markup), ids namespaced with 'add-'.\n\n` +
    `import type { Lecture } from '../lib/types';\n\n` +
    `export const additionalTopics: Lecture[] = ${JSON.stringify(all, null, 2)};\n\n` +
    `export const additionalTopicSubjects: Record<string, string> = ${JSON.stringify(subjectsMap, null, 2)};\n`;

  writeFileSync(join(root, 'content', 'additional-topics.generated.ts'), file);
  console.log(`additional:generate — wrote ${all.length} modules across ${Object.keys(subjectsMap).length} subjects.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
