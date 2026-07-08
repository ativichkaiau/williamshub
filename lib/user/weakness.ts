// Weakness signal — a personal, client-only read of which modules you actually
// miss, folded out of the repair queue + quiz history. Used to (1) light up the
// links to weak modules in the Active-Integration map and (2) bias practice decks
// toward the integration questions that bridge your weakest links.
//
// Personal data → localStorage only; never in the content bundle. All reads are
// SSR-safe (readJSON guards on window), so callers must fill this in useEffect
// after mount to avoid hydration mismatch.

import { getRepairQueue } from '../repair/store';
import { getQuizStats } from './activity';
import type { RepairPriority } from '../repair/types';

const PRIORITY_WEIGHT: Record<RepairPriority, number> = {
  low: 0.4,
  medium: 0.7,
  high: 1,
  critical: 1.3,
};

const MIN_ANSWERED = 2; // don't judge a module on a single question
const WEAK_ACCURACY = 0.6; // below this = shaky

export interface Weakness {
  moduleId: string;
  score: number; // higher = weaker / needs work more
  openRepairs: number;
  quizAccuracy: number | null; // null if not enough answers
  answered: number;
}

/** moduleId → weakness, aggregated from open repairs + quiz accuracy. */
export function getWeaknessMap(): Map<string, Weakness> {
  const map = new Map<string, Weakness>();
  const get = (id: string): Weakness => {
    let w = map.get(id);
    if (!w) {
      w = { moduleId: id, score: 0, openRepairs: 0, quizAccuracy: null, answered: 0 };
      map.set(id, w);
    }
    return w;
  };

  // Open repair items are the strongest signal — you (or WilliamsPod) already
  // flagged these as things to fix. Weight by priority.
  for (const item of getRepairQueue()) {
    if (item.completed_at) continue;
    const w = get(item.module_id);
    w.openRepairs += 1;
    w.score += PRIORITY_WEIGHT[item.priority] ?? 0.7;
  }

  // Quiz accuracy — modules you get wrong in practice, once there's enough signal.
  const stats = getQuizStats();
  for (const [id, answers] of Object.entries(stats)) {
    const answered = Object.keys(answers).length;
    if (answered < MIN_ANSWERED) continue;
    const correct = Object.values(answers).filter(Boolean).length;
    const accuracy = correct / answered;
    const w = get(id);
    w.answered = answered;
    w.quizAccuracy = accuracy;
    if (accuracy < WEAK_ACCURACY) {
      // Scale by how far below the bar, plus a floor so any weak module registers.
      w.score += (WEAK_ACCURACY - accuracy) * 2 + 0.3;
    }
  }

  return map;
}

/** Set of module ids currently considered weak (score ≥ threshold). */
export function getWeakModules(threshold = 0.5): Set<string> {
  const set = new Set<string>();
  for (const [id, w] of getWeaknessMap()) {
    if (w.score >= threshold) set.add(id);
  }
  return set;
}

/** True if any of the given modules is weak — for "does this link touch a weak spot". */
export function intersectsWeak(moduleIds: readonly string[] | undefined, weak: Set<string>): boolean {
  if (!moduleIds || weak.size === 0) return false;
  return moduleIds.some((id) => weak.has(id));
}
