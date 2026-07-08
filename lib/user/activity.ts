// Study activity: which modules you've opened (coverage), a day streak, and
// quiz results (deduped per question). localStorage only — feeds the dashboard.

import { readJSON, writeJSON, todayKey } from './store';

const VISITED = 'wh-visited';
const STREAK = 'wh-streak';
const QUIZ = 'wh-quiz';

// ── Coverage ──────────────────────────────────────────────────────────────
export function getVisited(): string[] {
  return readJSON<string[]>(VISITED, []);
}

export function markVisited(id: string): void {
  const v = getVisited();
  if (!v.includes(id)) writeJSON(VISITED, [...v, id]);
}

// ── Streak ────────────────────────────────────────────────────────────────
export interface Streak {
  last: string; // YYYY-MM-DD of last active day
  count: number; // current consecutive-day streak
  best: number; // best streak ever
}

export function getStreak(): Streak {
  return readJSON<Streak>(STREAK, { last: '', count: 0, best: 0 });
}

/** Record activity for today; extends the streak if yesterday was active. */
export function touchStreak(): Streak {
  const s = getStreak();
  const today = todayKey();
  if (s.last === today) return s;
  const yest = new Date();
  yest.setDate(yest.getDate() - 1);
  const count = s.last === todayKey(yest) ? s.count + 1 : 1;
  const next: Streak = { last: today, count, best: Math.max(s.best ?? 0, count) };
  writeJSON(STREAK, next);
  return next;
}

// ── Quiz results (moduleId → questionId → correct) ──────────────────────────
export type QuizStats = Record<string, Record<string, boolean>>;

export function getQuizStats(): QuizStats {
  return readJSON<QuizStats>(QUIZ, {});
}

export function recordQuizAnswer(moduleId: string, questionId: string, correct: boolean): void {
  const stats = getQuizStats();
  (stats[moduleId] ??= {})[questionId] = correct;
  writeJSON(QUIZ, stats);
}

/** Aggregate answered/correct across a set of module ids. */
export function quizTally(stats: QuizStats, moduleIds: Iterable<string>): { correct: number; answered: number } {
  let correct = 0;
  let answered = 0;
  for (const id of moduleIds) {
    const m = stats[id];
    if (!m) continue;
    for (const ok of Object.values(m)) {
      answered++;
      if (ok) correct++;
    }
  }
  return { correct, answered };
}
