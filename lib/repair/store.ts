// Client-side repair-queue store (localStorage). This is the single source of
// truth the RepairQueuePanel reads and WilliamsSync writes to. All functions are
// SSR-safe (no-op on the server) so importing them anywhere is harmless.

import type { ErrorType, RepairPriority, RepairQueueItem, RepairReason } from './types';

export const REPAIR_STORAGE_KEY = 'wh-repair-queue';

export const PRIORITY_WEIGHT: Record<RepairPriority, number> = {
  critical: 3,
  high: 2,
  medium: 1,
  low: 0,
};

/** Per-error-type display + sensible defaults. Actions reference concept modes. */
export const ERROR_TYPE_META: Record<
  ErrorType,
  { label: string; dot: string; text: string; priority: RepairPriority; reason: RepairReason; action: string }
> = {
  recall_error: { label: 'Recall', dot: 'bg-amber-500', text: 'text-amber-600 dark:text-amber-400', priority: 'high', reason: 'missed_high_yield', action: 'Re-drill the high-yield facts (Quick Review mode).' },
  mechanism_error: { label: 'Mechanism', dot: 'bg-teal-500', text: 'text-teal-600 dark:text-teal-400', priority: 'high', reason: 'weak_mechanism', action: 'Re-trace the cause→effect chain (Mechanism mode).' },
  frame_error: { label: 'Frame', dot: 'bg-rose-500', text: 'text-rose-600 dark:text-rose-400', priority: 'critical', reason: 'misread_question_frame', action: 'You answered the wrong question category — study the traps (Trap mode).' },
  trap_error: { label: 'Trap', dot: 'bg-rose-500', text: 'text-rose-600 dark:text-rose-400', priority: 'high', reason: 'fell_for_distractor', action: 'Study the distractors and discriminators (Trap mode).' },
  overthinking_error: { label: 'Overthinking', dot: 'bg-orange-500', text: 'text-orange-600 dark:text-orange-400', priority: 'medium', reason: 'second_guessed', action: 'Trust the first-pass answer; re-read the take-home.' },
  timing_error: { label: 'Timing', dot: 'bg-yellow-500', text: 'text-yellow-600 dark:text-yellow-400', priority: 'medium', reason: 'ran_out_of_time', action: 'Speed-review with Quick Review / OnePager mode.' },
  confidence_error: { label: 'Confidence', dot: 'bg-violet-500', text: 'text-violet-600 dark:text-violet-400', priority: 'low', reason: 'low_confidence', action: 'Reinforce with active recall until the answer feels automatic.' },
  integration_error: { label: 'Integration', dot: 'bg-indigo-500', text: 'text-indigo-600 dark:text-indigo-400', priority: 'high', reason: 'missed_cross_link', action: 'Review the Active Integration links (cross-module / cross-subject).' },
};

export function getRepairQueue(): RepairQueueItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(REPAIR_STORAGE_KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? (parsed as RepairQueueItem[]) : [];
  } catch {
    return [];
  }
}

function save(items: RepairQueueItem[]): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(REPAIR_STORAGE_KEY, JSON.stringify(items));
  } catch {
    /* storage unavailable — non-fatal */
  }
}

/** A stable-ish key so the same mistake isn't queued twice. */
function dedupeKey(i: Pick<RepairQueueItem, 'module_id' | 'error_type' | 'source_question_id'>): string {
  return `${i.module_id}|${i.error_type}|${i.source_question_id ?? ''}`;
}

/** Add items, skipping ones already queued (by module + error type + question). */
export function addRepairItems(items: RepairQueueItem[]): RepairQueueItem[] {
  const existing = getRepairQueue();
  const seen = new Set(existing.map(dedupeKey));
  const merged = [...existing];
  for (const it of items) {
    if (seen.has(dedupeKey(it))) continue;
    seen.add(dedupeKey(it));
    merged.push(it);
  }
  save(merged);
  return merged;
}

export function completeRepairItem(id: string): RepairQueueItem[] {
  const next = getRepairQueue().map((i) =>
    i.id === id ? { ...i, completed_at: i.completed_at ?? new Date().toISOString() } : i,
  );
  save(next);
  return next;
}

export function reopenRepairItem(id: string): RepairQueueItem[] {
  const next = getRepairQueue().map((i) => (i.id === id ? { ...i, completed_at: null } : i));
  save(next);
  return next;
}

export function clearCompleted(): RepairQueueItem[] {
  const next = getRepairQueue().filter((i) => !i.completed_at);
  save(next);
  return next;
}

/** Open items first, then by priority (critical→low), then newest first. */
export function sortRepairQueue(items: RepairQueueItem[]): RepairQueueItem[] {
  return [...items].sort(
    (a, b) =>
      Number(!!a.completed_at) - Number(!!b.completed_at) ||
      PRIORITY_WEIGHT[b.priority] - PRIORITY_WEIGHT[a.priority] ||
      b.created_at.localeCompare(a.created_at),
  );
}

/** Build a well-formed item from a partial (fills id/created/defaults). */
export function makeRepairItem(
  input: Partial<RepairQueueItem> & Pick<RepairQueueItem, 'module_id' | 'lecture_id' | 'subject_id' | 'error_type'>,
): RepairQueueItem {
  const meta = ERROR_TYPE_META[input.error_type];
  return {
    id: input.id ?? `rq_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`,
    user_id: input.user_id ?? 'local',
    module_id: input.module_id,
    lecture_id: input.lecture_id,
    subject_id: input.subject_id,
    reason: input.reason ?? meta.reason,
    error_type: input.error_type,
    priority: input.priority ?? meta.priority,
    recommended_action: input.recommended_action ?? meta.action,
    source_question_id: input.source_question_id ?? null,
    created_at: input.created_at ?? new Date().toISOString(),
    completed_at: input.completed_at ?? null,
  };
}
