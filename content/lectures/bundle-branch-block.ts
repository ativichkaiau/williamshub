import type { Lecture } from '../../lib/types';

export const bundleBranchBlock: Lecture = {
  id: 'bundle-branch-block',
  title: 'Bundle Branch Block (RBBB vs LBBB)',
  system: 'cardiovascular',
  source: 'L2 — Abnormal ECG (Cardiology, MedCMU)',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L2 Abnormal ECG' },
    { kind: 'disease', label: 'Bundle branch block' },
    { kind: 'mechanism', label: 'Conduction delay' },
    { kind: 'exam', label: 'V1/V6 morphology' },
    { kind: 'investigation', label: 'Wide QRS' },
  ],

  highYield: [
    'BBB = **QRS ≥120 ms** from delayed ventricular activation via the non-blocked bundle.',
    '**RBBB**: **rSR′ (“M”) in V1**, wide slurred S in V6/I — **MaRRoW**.',
    '**LBBB**: broad/notched R (“M”) in V6/I, deep QS in V1 — **WiLLiaM**.',
    'Abnormal depolarization → **secondary (discordant) ST-T changes**.',
    '**New LBBB + ischemic symptoms = STEMI-equivalent**; LBBB obscures usual MI criteria (use Sgarbossa).',
  ],

  mechanism: {
    title: 'One bundle blocked → sequential (not simultaneous) activation',
    steps: [
      { id: 's1', label: 'Bundle branch blocked', emphasis: 'key' },
      { id: 's2', label: 'Impulse travels down the intact bundle first' },
      { id: 's3', label: 'Spreads cell-to-cell to the blocked side (slow)' },
      { id: 's4', label: 'Widened QRS (≥120 ms)' },
      { id: 's5', label: 'Characteristic V1/V6 morphology + secondary ST-T changes' },
    ],
  },

  examFindings: [
    { sign: 'Wide QRS ≥120 ms', mechanism: 'The defining criterion — delayed sequential activation', significance: 'key' },
    { sign: 'RBBB: rSR′ in V1, wide S in V6/I', mechanism: 'Late right-ventricular activation (MaRRoW)', significance: 'key' },
    { sign: 'LBBB: broad notched R in V6/I, QS in V1', mechanism: 'Late left-ventricular activation (WiLLiaM)', significance: 'key' },
    { sign: 'Variable splitting of heart sounds', mechanism: 'Asynchronous ventricular contraction', significance: 'supportive' },
  ],

  investigations: [
    { clue: '12-lead ECG: QRS duration + V1/V6 morphology', meaning: 'Diagnostic; classify RBBB vs LBBB' },
    { clue: 'New LBBB with symptoms → ACS pathway; apply Sgarbossa criteria', meaning: 'MI can hide behind LBBB' },
    { clue: 'Echo / clinical', meaning: 'Structural cause / conduction disease' },
  ],

  treatment: [
    { logic: 'BBB itself usually needs no specific treatment', detail: 'It is an ECG finding, not a disease.' },
    { logic: 'Identify the cause (ischemia, conduction disease)', detail: 'New LBBB + symptoms → treat as ACS.' },
    { logic: 'Bifascicular/trifascicular block with syncope → consider pacing', detail: 'Risk of progression to complete heart block.' },
  ],

  mnemonics: [
    { hook: 'WiLLiaM MaRRoW', expansion: ['LBBB: W in V1, M in V6 (WiLLiaM)', 'RBBB: M in V1, W in V6 (MaRRoW)'] },
  ],

  traps: [
    {
      questionCategory: 'Which BBB',
      wrongInstinct: 'rSR′ in V1 = LBBB',
      rightAnswer: 'rSR′ (M-shape) in V1 = RBBB (MaRRoW)',
      why: 'RBBB makes the “M” in V1; LBBB makes the “M” in V6. WiLLiaM MaRRoW keeps them straight.',
    },
    {
      questionCategory: 'Chest pain + new LBBB',
      wrongInstinct: 'Can’t diagnose MI with LBBB, so just observe',
      rightAnswer: 'New LBBB + ischemic symptoms = STEMI-equivalent → activate ACS pathway',
      why: 'New LBBB can represent acute proximal LAD occlusion; use Sgarbossa criteria rather than dismissing it.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'QRS is 140 ms with an rSR′ (“M”) pattern in V1 and a wide slurred S wave in V6. Which conduction abnormality?',
      options: [
        { id: 'a', text: 'LBBB' },
        { id: 'b', text: 'RBBB' },
        { id: 'c', text: 'Left anterior fascicular block' },
        { id: 'd', text: 'WPW pre-excitation' },
      ],
      answerId: 'b',
      explanation: 'rSR′ (“M”) in V1 with a wide S in V6 is RBBB — MaRRoW (M in V1, W in V6). LBBB would show the “M” in V6 and a QS in V1 (WiLLiaM).',
      tests: 'exam',
    },
  ],
};

export default bundleBranchBlock;
