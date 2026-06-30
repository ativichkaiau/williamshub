import type { Lecture } from '../../lib/types';
import { WIGGERS_CYCLE, PV_LOOP_NORMAL } from '../../lib/figures';

export const heartFailureOverview: Lecture = {
  id: 'heart-failure-overview',
  title: 'Heart Failure — Overview & Classification',
  system: 'cardiovascular',
  source: 'L12 — Heart Failure',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L12 Heart Failure' },
    { kind: 'disease', label: 'Heart failure' },
    { kind: 'mechanism', label: 'Forward & backward failure' },
    { kind: 'exam', label: 'Hepatojugular reflux' },
  ],

  highYield: [
    'HF = clinical syndrome: **inadequate CO for tissue demands, or only at elevated filling pressure**.',
    '**Forward failure** (↓CO: fatigue, hypoperfusion) vs **backward failure** (venous congestion: edema, rales).',
    'Signs: cardiomegaly, **pulmonary rales**, ↑JVP, **hepatojugular reflux**, congestive hepatomegaly, edema/effusion/ascites.',
    '**CO = SV × HR.** Dysfunction mechanisms: pump failure, obstruction, regurgitation, conduction, disruption.',
    'Classified by EF: **HFrEF ≤40 (systolic)**, HFmrEF 40–49, **HFpEF ≥50 (diastolic)**; ACC stages A–D.',
  ],

  mechanism: {
    title: 'Pump can’t meet demand → forward + backward failure',
    steps: [
      { id: 's1', label: 'Cardiac dysfunction' },
      { id: 's2', label: '↓ cardiac output', emphasis: 'key' },
      { id: 's3', label: 'Forward failure (hypoperfusion) + backward failure (congestion)', emphasis: 'key' },
      { id: 's4', label: 'Symptoms (dyspnea) + signs (edema, rales)' },
    ],
  },

  examFindings: [
    { sign: 'Pulmonary rales + ↑JVP + positive hepatojugular reflux', mechanism: 'Pulmonary & systemic venous congestion', significance: 'key' },
    { sign: 'Peripheral edema, congestive hepatomegaly, ascites', mechanism: 'Systemic venous backpressure', significance: 'key' },
    { sign: 'Displaced apex / gallop', mechanism: 'Ventricular dysfunction', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Echo: ejection fraction', meaning: 'Classifies HFrEF / HFmrEF / HFpEF — diagnostic' },
    { clue: 'BNP / NT-proBNP', meaning: 'Raised when the heart is stretched' },
    { clue: 'CXR: cardiomegaly, pulmonary edema', meaning: 'Supportive' },
  ],

  treatment: [
    { logic: 'Treat the underlying cause + congestion (diuretics)', detail: 'Symptom relief.' },
    { logic: 'Disease-modifying therapy depends on the EF type', detail: 'See HFrEF / HFpEF modules.' },
  ],

  mnemonics: [
    { hook: 'HF: Forward (low output) + Backward (congestion)', expansion: ['Forward = fatigue/hypoperfusion', 'Backward = edema/rales'] },
    { hook: 'EF splits it: ≤40 HFrEF (systolic), ≥50 HFpEF (diastolic)', expansion: ['40–49 = mildly reduced'] },
  ],

  traps: [
    {
      questionCategory: 'HFrEF vs HFpEF',
      wrongInstinct: 'All heart failure has a low ejection fraction',
      rightAnswer: 'HFpEF (≥50%) has a PRESERVED EF — failure is diastolic (stiff ventricle)',
      why: 'About half of HF has preserved EF; the problem is impaired filling (diastolic dysfunction), not pump weakness — the EF can be normal.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which finding best confirms systemic venous congestion in heart failure?',
      options: [
        { id: 'a', text: 'Ejection systolic murmur' },
        { id: 'b', text: 'Positive hepatojugular reflux with raised JVP' },
        { id: 'c', text: 'Low BNP' },
        { id: 'd', text: 'Bradycardia' },
      ],
      answerId: 'b',
      explanation: 'A positive hepatojugular reflux with elevated JVP demonstrates systemic venous congestion (backward right-heart failure).',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Wiggers cardiac cycle', svg: WIGGERS_CYCLE, caption: 'Aortic/LV/LA pressures, LV volume, ECG, and heart sounds across one cycle.' },
    { title: 'LV pressure-volume loop', svg: PV_LOOP_NORMAL, caption: 'Filling → isovolumic contraction → ejection → isovolumic relaxation.' },
  ],
};

export default heartFailureOverview;
