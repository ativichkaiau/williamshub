// WilliamsSync client service — the working ingestion path for the static app.
// WilliamsPod → (this) → localStorage repair store → RepairQueuePanel. SSR-safe.
//
// The future server path (multi-device sync) is app/api/williamssync/route.ts;
// both share the same WilliamsSyncEnvelope contract, so swapping in a backend is
// additive and doesn't change callers.

import { addRepairItems, ERROR_TYPE_META, makeRepairItem } from '../repair/store';
import type { RepairQueueItem } from '../repair/types';
import type {
  MistakeClassification,
  PodTelemetryPayload,
  QuestionPerformanceSummary,
  RepairRecommendationPayload,
  WilliamsSyncEnvelope,
  WilliamsSyncResult,
} from './types';

const PERF_STORAGE_KEY = 'wh-pod-performance';

/** Raw Pod session → repair items for each classified incorrect answer. */
export function ingestPodTelemetry(payload: PodTelemetryPayload): WilliamsSyncResult {
  const items: RepairQueueItem[] = payload.results
    .filter((r) => !r.correct && r.error_type)
    .map((r) =>
      makeRepairItem({
        user_id: payload.user_id,
        module_id: r.module_id,
        lecture_id: r.lecture_id,
        subject_id: r.subject_id,
        error_type: r.error_type!,
        source_question_id: r.question_id,
      }),
    );
  addRepairItems(items);
  return { ok: true, kind: 'telemetry', queued: items.length };
}

/** Pre-classified mistakes → repair items. */
export function ingestMistakeClassifications(list: MistakeClassification[]): WilliamsSyncResult {
  const items = list.map((m) =>
    makeRepairItem({
      module_id: m.module_id,
      lecture_id: m.lecture_id,
      subject_id: m.subject_id,
      error_type: m.error_type,
      source_question_id: m.question_id,
    }),
  );
  addRepairItems(items);
  return { ok: true, kind: 'mistakes', queued: items.length };
}

/** Ready-made repair recommendations → repair items (honour any provided fields). */
export function ingestRepairRecommendations(list: RepairRecommendationPayload[]): WilliamsSyncResult {
  const items = list.map((r) =>
    makeRepairItem({
      module_id: r.module_id,
      lecture_id: r.lecture_id,
      subject_id: r.subject_id,
      error_type: r.error_type,
      priority: r.priority,
      recommended_action: r.recommended_action ?? ERROR_TYPE_META[r.error_type].action,
      source_question_id: r.source_question_id ?? null,
    }),
  );
  addRepairItems(items);
  return { ok: true, kind: 'repairs', queued: items.length };
}

/** Performance summaries → a lightweight local store (for future trend views). */
export function ingestQuestionPerformance(list: QuestionPerformanceSummary[]): WilliamsSyncResult {
  if (typeof window !== 'undefined') {
    try {
      const prev: Record<string, QuestionPerformanceSummary> = JSON.parse(
        window.localStorage.getItem(PERF_STORAGE_KEY) ?? '{}',
      );
      for (const s of list) prev[s.module_id] = s;
      window.localStorage.setItem(PERF_STORAGE_KEY, JSON.stringify(prev));
    } catch {
      /* non-fatal */
    }
  }
  return { ok: true, kind: 'performance', queued: 0 };
}

/** Single entry point: dispatch a tagged envelope to the right ingester. */
export function handleSyncEnvelope(env: WilliamsSyncEnvelope): WilliamsSyncResult {
  switch (env.kind) {
    case 'telemetry':
      return ingestPodTelemetry(env.payload);
    case 'mistakes':
      return ingestMistakeClassifications(env.payload);
    case 'repairs':
      return ingestRepairRecommendations(env.payload);
    case 'performance':
      return ingestQuestionPerformance(env.payload);
    default:
      return { ok: false, kind: (env as WilliamsSyncEnvelope).kind, queued: 0, note: 'unknown envelope kind' };
  }
}
