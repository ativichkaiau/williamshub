import type { Lecture } from '../../lib/types';

export const prematureContractions: Lecture = {
  id: 'premature-contractions',
  title: 'Premature Contractions (PAC & PVC)',
  system: 'cardiovascular',
  source: 'L1 — Cardiac Arrhythmias',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L1 Arrhythmias' },
    { kind: 'disease', label: 'Premature beats' },
    { kind: 'mechanism', label: 'Ectopic focus' },
    { kind: 'exam', label: 'Skipped beat' },
    { kind: 'investigation', label: 'Compensatory pause' },
  ],

  highYield: [
    'Extrasystoles from **ectopic foci** (ischemia, calcified plaque, drugs, nicotine/caffeine, catheter irritation).',
    '**PAC**: early **abnormal P** + normal **narrow QRS**; usually a **non-compensatory (incomplete) pause** (resets SA node).',
    '**PVC**: early **wide, bizarre QRS**, **no preceding P**; followed by a **full compensatory pause** (SA node not reset).',
    'Usually **benign**; symptomatic PVCs → beta-blocker (same agents as VT).',
    'Danger: a PVC on the **T wave (“R-on-T”)** can trigger VT/VF — the vulnerable period.',
  ],

  mechanism: {
    title: 'Ectopic focus fires early → reset vs compensatory pause',
    steps: [
      { id: 's1', label: 'Ectopic focus fires before the next sinus beat', emphasis: 'key' },
    ],
    branches: [
      {
        fromId: 's1',
        title: 'PAC',
        steps: [
          { id: 'a1', label: 'Atrial focus → early abnormal P' },
          { id: 'a2', label: 'Conducts normally → narrow QRS' },
          { id: 'a3', label: 'Resets SA node → non-compensatory pause' },
        ],
      },
      {
        fromId: 's1',
        title: 'PVC',
        steps: [
          { id: 'v1', label: 'Ventricular focus → no P, wide bizarre QRS' },
          { id: 'v2', label: 'SA node NOT reset → full compensatory pause' },
        ],
      },
      {
        fromId: 's1',
        title: 'Lethal variant',
        steps: [
          { id: 'd1', label: 'PVC on preceding T wave (R-on-T)' },
          { id: 'd2', label: 'Triggers VT / VF', emphasis: 'danger' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'Palpitations / “skipped beat”', mechanism: 'Premature beat then a pause felt as a skip', significance: 'key' },
    { sign: 'Early beat followed by a pause on pulse', mechanism: 'Extrasystole + compensatory pause', significance: 'supportive' },
    { sign: 'PVC beat may not transmit a palpable pulse', mechanism: 'Reduced stroke volume of the premature ventricular beat', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'ECG: PAC = early abnormal P + narrow QRS; PVC = early wide QRS, no P', meaning: 'Diagnostic; note pause type' },
    { clue: 'Holter', meaning: 'PVC burden; bigeminy / couplets' },
    { clue: 'Electrolytes, ischemia, stimulant use', meaning: 'Reversible triggers' },
  ],

  treatment: [
    { logic: 'Usually reassurance; remove triggers (caffeine, nicotine)', detail: 'Most are benign in a structurally normal heart.' },
    { logic: 'Symptomatic PVCs → beta-blocker', detail: 'Treat underlying ischemia / electrolyte disturbance.' },
    { logic: 'High burden or structural disease → further workup', detail: 'Risk stratify for VT.' },
  ],

  mnemonics: [
    { hook: 'PAC resets, PVC doesn’t', expansion: ['PAC → narrow QRS, non-compensatory pause (SA reset)', 'PVC → wide QRS, FULL compensatory pause (SA not reset)'] },
  ],

  traps: [
    {
      questionCategory: 'Type of pause',
      wrongInstinct: 'All premature beats give a full compensatory pause',
      rightAnswer: 'PVC = full compensatory pause; PAC usually resets the SA node (non-compensatory)',
      why: 'A PVC does not reset the SA node, so the next sinus beat arrives “on schedule” → full compensatory pause; a PAC depolarizes and resets it.',
    },
    {
      questionCategory: 'Which is dangerous',
      wrongInstinct: 'A single PVC always needs antiarrhythmics',
      rightAnswer: 'Most PVCs are benign; the danger is R-on-T triggering VT/VF',
      why: 'Isolated PVCs in a normal heart rarely need treatment; the lethal scenario is a PVC landing on the T-wave vulnerable period.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An early, wide, bizarre QRS with no preceding P wave is followed by a pause such that the R–R spanning it equals two normal cycles. What is this?',
      options: [
        { id: 'a', text: 'PAC with non-compensatory pause' },
        { id: 'b', text: 'PVC with full compensatory pause' },
        { id: 'c', text: 'Junctional escape beat' },
        { id: 'd', text: 'Sinus arrest' },
      ],
      answerId: 'b',
      explanation: 'A wide premature QRS with no P and a full compensatory pause (the SA node keeps its timing) is a PVC. A PAC would have an early abnormal P, a narrow QRS, and usually reset the SA node.',
      tests: 'exam',
    },
  ],
};

export default prematureContractions;
