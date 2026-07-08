/**
 * Offline question-bank generator.
 *
 * For every module it authors exam-style MCQs (recall / mechanism / trap /
 * clinical + cross-module INTEGRATION questions) using an OpenAI model when a key
 * is set, always merged with the deterministic baseline. Writes:
 *   • content/questions.generated.ts  — the AI layer (empty without a key)
 *   • public/question-bank.json        — static full bank mirror
 *
 * Hub also exposes GET /api/question-bank for WilliamsPod:
 *   • /api/question-bank?summary=1
 *   • /api/question-bank?subject=HEN-2
 *
 *     npm run questions:generate        # OPENAI_API_KEY optional (.env.local or env)
 *
 * The running app never calls this — it stays static / zero-backend.
 */

import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { lectures, lectureById } from '../content';
import { getIntegrations } from '../lib/integrations/resolve';
import { authoredQuestions, mergeBank } from '../lib/questions/bank';
import { deterministicQuestions } from '../lib/questions/deterministic';
import { generateAiQuestions, type LinkedModule } from '../lib/questions/aiService';
import type { ModuleIntegration } from '../lib/integrations/types';
import type { QuestionBank } from '../lib/questions/types';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const key = process.env.OPENAI_API_KEY ?? '';

function linkedFor(moduleId: string): LinkedModule[] {
  const b = getIntegrations(moduleId);
  const pick = (edges: ModuleIntegration[], relation: string): LinkedModule[] =>
    edges.slice(0, 2).map((e) => ({ id: e.targetId, title: lectureById[e.targetId]?.title ?? e.targetId, relation }));
  return [
    ...pick(b.prerequisite, 'prerequisite'),
    ...pick(b.vertical, 'clinical application'),
    ...pick(b.forward, 'applied later in'),
    ...pick(b.horizontal, 'same-block peer'),
  ].filter((l) => !!lectureById[l.id]);
}

async function main() {
  const aiBank: QuestionBank = {};

  if (key) {
    const model = process.env.OPENAI_MODEL ?? 'gpt-4o-mini';
    console.log(`Generating AI questions for ${lectures.length} modules (${model})…`);
    const CONCURRENCY = 4;
    let done = 0;
    for (let i = 0; i < lectures.length; i += CONCURRENCY) {
      await Promise.all(
        lectures.slice(i, i + CONCURRENCY).map(async (l) => {
          const qs = await generateAiQuestions(l, { linked: linkedFor(l.id) }, key, model);
          if (qs.length) aiBank[l.id] = qs;
          done++;
        }),
      );
      if (done % 40 === 0 || done >= lectures.length) console.log(`  ${done}/${lectures.length}`);
    }
  } else {
    console.log('No OPENAI_API_KEY set — baking the deterministic bank only. Set the key to enrich with AI.');
  }

  // 1) AI layer → content/questions.generated.ts
  const header =
    "// AI-generated question bank — regenerate with `npm run questions:generate`.\n" +
    '// Do not edit by hand.\n\n' +
    "import type { QuestionBank } from '../lib/questions/types';\n\n" +
    'export const aiQuestions: QuestionBank = ';
  writeFileSync(join(root, 'content/questions.generated.ts'), header + JSON.stringify(aiBank) + ';\n');

  // 2) Full bank → public/question-bank.json (authored + AI + deterministic)
  const bank: QuestionBank = {};
  let total = 0;
  for (const l of lectures) {
    const merged = mergeBank([authoredQuestions(l.id), aiBank[l.id] ?? [], deterministicQuestions(l.id)]);
    if (merged.length) {
      bank[l.id] = merged;
      total += merged.length;
    }
  }
  mkdirSync(join(root, 'public'), { recursive: true });
  writeFileSync(
    join(root, 'public/question-bank.json'),
    JSON.stringify({ modules: Object.keys(bank).length, count: total, bank }),
  );

  const aiCount = Object.values(aiBank).reduce((n, q) => n + q.length, 0);
  console.log(`question-bank.json: ${Object.keys(bank).length} modules, ${total} questions (${aiCount} AI).`);
}

main();
