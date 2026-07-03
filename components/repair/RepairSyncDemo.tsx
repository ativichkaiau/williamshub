'use client';

import { handleSyncEnvelope } from '../../lib/sync/williamsSync';
import type { PodTelemetryPayload } from '../../lib/sync/types';

// DEV-ONLY helper: simulate a WilliamsPod session arriving through WilliamsSync,
// so the repair queue can be exercised before WilliamsPod exists. The page only
// renders this outside production.
const SAMPLE: PodTelemetryPayload = {
  user_id: 'local',
  session_id: 'demo-session',
  generated_at: new Date().toISOString(),
  results: [
    { question_id: 'demo-q1', module_id: 'aortic-dissection', lecture_id: 'L5 — Vascular Disorders', subject_id: 'HCVS-2', correct: false, error_type: 'frame_error' },
    { question_id: 'demo-q2', module_id: 'staphylococcus-aureus', lecture_id: 'L10 — Gram-Positive Cocci I (Staphylococci)', subject_id: 'MHI', correct: false, error_type: 'trap_error' },
    { question_id: 'demo-q3', module_id: 'acute-inflammation', lecture_id: 'L5 — Inflammation & Repair', subject_id: 'BAP', correct: false, error_type: 'mechanism_error' },
    { question_id: 'demo-q4', module_id: 'mycobacterium-tuberculosis-leprae', lecture_id: 'L18 — Mycobacteria, Nocardia & Actinomyces', subject_id: 'MHI', correct: false, error_type: 'integration_error' },
    { question_id: 'demo-q5', module_id: 'diuretics-pharmacology', lecture_id: 'L12 — Diuretics', subject_id: 'HRU-2', correct: true },
  ],
};

export default function RepairSyncDemo() {
  return (
    <button
      type="button"
      onClick={() => {
        const r = handleSyncEnvelope({ kind: 'telemetry', payload: SAMPLE });
        window.alert(`WilliamsSync: queued ${r.queued} repair item(s).`);
        window.location.reload();
      }}
      className="clay-pill px-3 py-1.5 text-xs font-semibold text-slate-500 transition hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
    >
      ⤓ Simulate a WilliamsPod sync (dev)
    </button>
  );
}
