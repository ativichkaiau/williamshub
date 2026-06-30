import type { Lecture } from '../../lib/types';

export const htnClassification: Lecture = {
  id: 'htn-classification',
  title: 'Hypertension — Definition & Classification',
  system: 'cardiovascular',
  source: 'L16 — Hypertension',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L16 Hypertension' },
    { kind: 'disease', label: 'Hypertension' },
    { kind: 'mechanism', label: 'Office vs out-of-office' },
    { kind: 'investigation', label: 'HBPM / ABPM' },
  ],

  highYield: [
    'Thresholds differ: **2017 ACC/AHA ≥130/80**; **2021 ESC / Thai ≥140/90**.',
    'Measurement: **office BP**, **home (HBPM)**, **ambulatory (ABPM)** — out-of-office is more physiologic.',
    '**White coat HTN** (high office, normal out-of-office); **masked HTN** (normal office, high out-of-office); sustained HTN.',
    '**Isolated systolic HTN** (elderly): **arterial stiffness**, wide pulse pressure.',
    '**Primary (essential) ~90%** vs **secondary ~10%**.',
  ],

  mechanism: {
    title: 'Classify by office vs out-of-office BP',
    steps: [{ id: 's1', label: 'Measure BP (office / HBPM / ABPM)', emphasis: 'key' }],
    branches: [
      { fromId: 's1', title: 'Both high', steps: [{ id: 'a1', label: 'Sustained hypertension' }] },
      { fromId: 's1', title: 'Office only', steps: [{ id: 'b1', label: 'White coat HTN' }] },
      { fromId: 's1', title: 'Out-of-office only', steps: [{ id: 'c1', label: 'Masked HTN', emphasis: 'key' }] },
    ],
  },

  examFindings: [
    { sign: 'Wide pulse pressure (≥60) in the elderly', mechanism: 'Arterial stiffness → isolated systolic HTN', significance: 'key' },
    { sign: 'Usually asymptomatic', mechanism: '“Silent” until target-organ damage', significance: 'key' },
    { sign: 'Clues to a secondary cause', mechanism: 'Bruit, hypokalemia, episodic symptoms', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'HBPM / ABPM', meaning: 'Confirm; detect white-coat & masked HTN' },
    { clue: 'Basic workup for secondary causes & TOD', meaning: 'Electrolytes, renal function, urine, ECG' },
  ],

  treatment: [
    { logic: 'Lifestyle for all (salt restriction, exercise, weight, ↑K⁺, ↓alcohol)', detail: 'First-line and adjunct.' },
    { logic: 'Drug therapy by threshold & cardiovascular risk', detail: 'See antihypertensive modules.' },
  ],

  mnemonics: [
    { hook: 'ACC/AHA ≥130/80; ESC/Thai ≥140/90', expansion: ['Non-unified definitions'] },
    { hook: 'White coat = office-only; Masked = hidden (normal office)', expansion: ['Confirm with HBPM/ABPM'] },
  ],

  traps: [
    {
      questionCategory: 'Masked vs white coat',
      wrongInstinct: 'Normal office BP rules out hypertension',
      rightAnswer: 'Masked HTN = normal office but high home/ambulatory BP — still at risk',
      why: 'Masked hypertension has normal clinic readings but elevated out-of-office BP, carrying cardiovascular risk — confirm with HBPM/ABPM.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: "A patient's clinic BP is normal but home and ambulatory readings are consistently ≥135/85. This pattern is?",
      options: [
        { id: 'a', text: 'White coat hypertension' },
        { id: 'b', text: 'Masked hypertension' },
        { id: 'c', text: 'Sustained hypertension' },
        { id: 'd', text: 'Normotension' },
      ],
      answerId: 'b',
      explanation: 'Normal office BP with elevated out-of-office (home/ambulatory) BP defines masked hypertension — it carries real cardiovascular risk despite normal clinic readings.',
      tests: 'exam',
    },
  ],
};

export default htnClassification;
