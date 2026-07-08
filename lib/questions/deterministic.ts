// Deterministic, always-on question generator. Builds usable MCQs from a module's
// traps, exam findings and its Active-Integration links — no AI, no network. This
// is the baseline the optional AI pass (scripts/generate-questions) enriches.

import { lectureById, lecturesBySubject } from '../../content';
import { moduleNodes } from '../integrations/graph';
import { getIntegrations } from '../integrations/resolve';
import type { BankQuestion, QuestionKind } from './types';

const OPT_IDS = ['a', 'b', 'c', 'd'];

/** Strip Rich markup so options/stems read cleanly. */
function plain(s: string): string {
  return s.replace(/\*\*/g, '').replace(/\[\[([a-z0-9-]+)\]\]/g, (_, id) => id.replace(/-/g, ' ')).trim();
}

/**
 * Assemble options from a correct answer + distractor pool, deduped, ≥3 total,
 * with the correct answer placed deterministically (rotated by `seed`).
 */
function assemble(correct: string, pool: string[], seed: number): { options: { id: string; text: string }[]; answerId: string } | null {
  const c = plain(correct);
  const distractors: string[] = [];
  const seen = new Set([c.toLowerCase()]);
  for (const raw of pool) {
    const d = plain(raw);
    if (!d || seen.has(d.toLowerCase())) continue;
    seen.add(d.toLowerCase());
    distractors.push(d);
    if (distractors.length === 3) break;
  }
  if (distractors.length < 2) return null; // need at least a 3-option MCQ
  const arr = [...distractors];
  const pos = seed % (arr.length + 1);
  arr.splice(pos, 0, c);
  return { options: arr.map((text, i) => ({ id: OPT_IDS[i], text })), answerId: OPT_IDS[pos] };
}

function q(moduleId: string, kind: QuestionKind, n: number, fields: Omit<BankQuestion, 'id' | 'moduleId' | 'kind' | 'origin'>): BankQuestion {
  return { id: `${moduleId}~d-${kind}-${n}`, moduleId, kind, origin: 'deterministic', ...fields };
}

export function deterministicQuestions(moduleId: string): BankQuestion[] {
  const l = lectureById[moduleId];
  if (!l) return [];
  const out: BankQuestion[] = [];
  const subjectCode = moduleNodes[moduleId]?.subjectCode ?? null;

  // Distractor pool from within the lecture (other traps / exam mechanisms).
  const localPool = [
    ...l.traps.map((t) => t.rightAnswer),
    ...l.traps.map((t) => t.wrongInstinct),
    ...l.examFindings.map((e) => e.mechanism),
  ];

  // 1) Trap → "recognise the right instinct" MCQ.
  l.traps.forEach((t, i) => {
    const built = assemble(t.rightAnswer, [t.wrongInstinct, ...localPool], i + 1);
    if (!built) return;
    out.push(
      q(moduleId, 'trap', i, {
        stem: `Regarding ${plain(t.questionCategory).toLowerCase()} — which is correct?`,
        options: built.options,
        answerId: built.answerId,
        explanation: plain(t.why),
      }),
    );
  });

  // 2) Key exam findings → "what explains this sign?"
  const keyFindings = l.examFindings.filter((e) => e.significance === 'key');
  keyFindings.slice(0, 2).forEach((e, i) => {
    const built = assemble(
      e.mechanism,
      l.examFindings.filter((x) => x.mechanism !== e.mechanism).map((x) => x.mechanism),
      i + 2,
    );
    if (!built) return;
    out.push(
      q(moduleId, 'clinical', i, {
        stem: `What best explains the finding: “${plain(e.sign)}”?`,
        options: built.options,
        answerId: built.answerId,
        explanation: `${plain(e.sign)} → ${plain(e.mechanism)}.`,
      }),
    );
  });

  // 3) Integration questions from the graph (cross-module / cross-subject).
  const bundle = getIntegrations(moduleId);
  const linkedIds = new Set<string>([
    moduleId,
    ...bundle.prerequisite.map((x) => x.targetId),
    ...bundle.forward.map((x) => x.targetId),
    ...bundle.horizontal.map((x) => x.targetId),
    ...bundle.vertical.map((x) => x.targetId),
  ]);
  const otherTitles = (subjectCode ? lecturesBySubject[subjectCode] ?? [] : [])
    .filter((m) => !linkedIds.has(m.id))
    .map((m) => m.title);

  const integrationQ = (
    edge: { targetId: string; reason: string } | undefined,
    stem: string,
    n: number,
  ) => {
    if (!edge) return;
    const correct = lectureById[edge.targetId]?.title;
    if (!correct || otherTitles.length < 2) return;
    const built = assemble(correct, otherTitles, n + 1);
    if (!built) return;
    out.push(
      q(moduleId, 'integration', n, {
        stem,
        options: built.options,
        answerId: built.answerId,
        explanation: plain(edge.reason),
        linkedModuleIds: [edge.targetId],
      }),
    );
  };

  integrationQ(bundle.vertical[0], `Which is a clinical application of “${l.title}”?`, 0);
  integrationQ(bundle.prerequisite[0], `Which should you review before “${l.title}”?`, 1);

  return out.slice(0, 8);
}
