// The full per-module question bank the Hub practises and WilliamsPod imports:
//   authored quiz  +  AI-generated (if baked)  +  deterministic (always on).
// Pure + server/build-time. Personal data never enters here.

import { lectureById } from '../../content';
import { aiQuestions } from '../../content/questions.generated';
import { deterministicQuestions } from './deterministic';
import type { BankQuestion } from './types';

/** Turn a lecture's hand-authored quiz into bank questions. */
export function authoredQuestions(moduleId: string): BankQuestion[] {
  const l = lectureById[moduleId];
  if (!l) return [];
  return l.quiz.map((qq) => ({
    id: `${moduleId}~a-${qq.id}`,
    moduleId,
    stem: qq.stem,
    options: qq.options,
    answerId: qq.answerId,
    explanation: qq.explanation,
    kind: 'recall' as const,
    origin: 'authored' as const,
  }));
}

/** Merge question lists in priority order, dropping malformed + duplicate stems. */
export function mergeBank(lists: BankQuestion[][]): BankQuestion[] {
  const seen = new Set<string>();
  const merged: BankQuestion[] = [];
  for (const list of lists) {
    for (const question of list) {
      if (!question.options.some((o) => o.id === question.answerId)) continue;
      const key = question.stem.trim().toLowerCase();
      if (!key || seen.has(key)) continue;
      seen.add(key);
      merged.push(question);
    }
  }
  return merged;
}

// Per-process memo — pure, and called many times per build (practice launchers,
// per-lecture / per-block / per-module sessions, the bank export).
const _bankCache = new Map<string, BankQuestion[]>();

/** Full bank for a module: authored + AI (if generated) + deterministic. */
export function getModuleBank(moduleId: string): BankQuestion[] {
  const hit = _bankCache.get(moduleId);
  if (hit) return hit;
  const merged = mergeBank([authoredQuestions(moduleId), aiQuestions[moduleId] ?? [], deterministicQuestions(moduleId)]);
  _bankCache.set(moduleId, merged);
  return merged;
}

export function bankSize(moduleId: string): number {
  return getModuleBank(moduleId).length;
}
