import type { Lecture } from '../../lib/types';

export const hfpefDiastolic: Lecture = {
  id: 'hfpef-diastolic',
  title: 'HFpEF — Diastolic Heart Failure',
  system: 'cardiovascular',
  source: 'L12 — Heart Failure',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L12 Heart Failure' },
    { kind: 'disease', label: 'HFpEF' },
    { kind: 'mechanism', label: 'Diastolic dysfunction' },
    { kind: 'exam', label: 'S4 gallop' },
  ],

  highYield: [
    '**HFpEF (diastolic HF)**: EF **≥50%** but **impaired filling** — stiff, non-compliant ventricle, **elevated LVEDP**.',
    'Classic substrate: **hypertensive heart disease → concentric LVH**; also ischemia, aging, fibrosis, impaired Ca²⁺ handling.',
    'Two components: **impaired relaxation** (active, early filling) and **reduced compliance** (passive, late filling).',
    'Exam: **S4 gallop**, sustained apex; congestion with a normal-size/thick LV.',
    'Poorly tolerates **tachycardia & AF** (loss of atrial kick + ↓filling time).',
  ],

  mechanism: {
    title: 'Pressure overload → concentric LVH → stiff ventricle',
    steps: [
      { id: 's1', label: 'Chronic hypertension (↑afterload)' },
      { id: 's2', label: 'Concentric LV hypertrophy', emphasis: 'key' },
      { id: 's3', label: 'Impaired relaxation + ↓ compliance' },
      { id: 's4', label: 'Impaired filling → ↑ LVEDP → pulmonary congestion (EF preserved)' },
    ],
  },

  examFindings: [
    { sign: 'S4 gallop', mechanism: 'Atrium contracting against a stiff ventricle', significance: 'key' },
    { sign: 'Sustained (non-displaced) apex + congestion', mechanism: 'Concentric LVH; backward failure', significance: 'key' },
    { sign: 'Preserved EF on echo with LVH', mechanism: 'Diastolic, not systolic, failure', significance: 'key' },
  ],

  investigations: [
    { clue: 'Echo: preserved EF, LVH, diastolic dysfunction (E/e′)', meaning: 'Diagnostic' },
    { clue: 'BNP (may be lower than HFrEF)', meaning: 'Supportive' },
    { clue: 'BP assessment', meaning: 'Hypertensive substrate' },
  ],

  treatment: [
    { logic: 'Control BP & comorbidities; cautious diuresis for congestion', detail: 'Avoid overdiuresis (filling-pressure dependent).' },
    { logic: 'Rate control / maintain sinus rhythm', detail: 'Atrial kick and filling time matter.' },
    { logic: 'SGLT2 inhibitors', detail: 'Reduce HF events in HFpEF.' },
  ],

  mnemonics: [
    { hook: 'HFpEF = Preserved EF, stiff LV, S4, Hypertension/LVH', expansion: ['Diastolic dysfunction', 'Concentric hypertrophy'] },
    { hook: 'Diastole = Relaxation (early) + Compliance (late)', expansion: ['Relaxation = active suction', 'Compliance = passive elasticity'] },
  ],

  traps: [
    {
      questionCategory: 'Gallop sound',
      wrongInstinct: 'A gallop in HF is always S3 (volume overload)',
      rightAnswer: 'HFpEF (stiff hypertrophied LV) gives an S4; S3 suggests volume overload / systolic HF',
      why: 'S4 = atrium contracting against a stiff ventricle (diastolic dysfunction/LVH); S3 = rapid filling into a dilated, volume-overloaded ventricle (systolic HF).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A hypertensive patient has dyspnea, an S4 gallop, a sustained apex, and echo showing concentric LVH with EF 60%. Type of heart failure?',
      options: [
        { id: 'a', text: 'HFrEF (systolic)' },
        { id: 'b', text: 'HFpEF (diastolic)' },
        { id: 'c', text: 'High-output failure' },
        { id: 'd', text: 'Isolated right-sided failure' },
      ],
      answerId: 'b',
      explanation: 'Preserved EF with concentric LVH, an S4, and a sustained apex in a hypertensive patient is HFpEF — diastolic dysfunction from a stiff hypertrophied ventricle.',
      tests: 'exam',
    },
  ],
};

export default hfpefDiastolic;
