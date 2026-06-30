import type { Lecture } from '../../lib/types';

export const cardiacArrest: Lecture = {
  id: 'cardiac-arrest',
  title: 'Cardiac Arrest & Reversible Causes',
  system: 'cardiovascular',
  source: 'L11 — Cardiogenic Shock',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L11 Cardiogenic Shock' },
    { kind: 'disease', label: 'Cardiac arrest' },
    { kind: 'mechanism', label: 'Hs & Ts' },
    { kind: 'treatment', label: 'CPR / defibrillation' },
  ],

  highYield: [
    'Cardiac arrest = **sudden loss of effective cardiac output** (the heart stops pumping).',
    'Reversible causes = **5 H’s** (Hypovolemia, Hypoxia, H⁺/acidosis, Hypo/Hyperkalemia, Hypothermia) and **5 T’s** (Tension pneumothorax, Tamponade, Toxins, Thrombosis-pulmonary [PE], Thrombosis-coronary [MI]).',
    'Management: **high-quality CPR**, identify/treat reversible causes, achieve **ROSC**.',
    '**Shockable (VF/pVT) → defibrillate**; **non-shockable (PEA/asystole) → CPR + epinephrine + reverse the cause** (do NOT shock).',
  ],

  mechanism: {
    title: 'Find & fix the reversible cause (Hs & Ts)',
    steps: [
      { id: 's1', label: 'Cardiac arrest' },
      { id: 's2', label: 'CPR + rhythm check', emphasis: 'key' },
      { id: 's3', label: 'Identify reversible cause (5H / 5T)' },
      { id: 's4', label: 'Treat cause → ROSC' },
    ],
    branches: [
      { fromId: 's2', title: 'Shockable', steps: [{ id: 'sh1', label: 'VF / pVT → defibrillate' }] },
      { fromId: 's2', title: 'Non-shockable', steps: [{ id: 'ns1', label: 'PEA / asystole → epinephrine + reverse Hs/Ts', emphasis: 'danger' }] },
    ],
  },

  examFindings: [
    { sign: 'Unresponsive, pulseless, apneic', mechanism: 'No cardiac output', significance: 'key' },
    { sign: 'Distended neck veins ± unilateral absent breath sounds', mechanism: 'Tension pneumothorax / tamponade clue', significance: 'key' },
    { sign: 'Context clues to the H/T cause', mechanism: 'Guides reversible-cause treatment', significance: 'key' },
  ],

  investigations: [
    { clue: 'Rhythm (shockable vs non-shockable)', meaning: 'Determines defibrillation' },
    { clue: 'Point-of-care: ultrasound, K⁺, ABG, glucose, temperature', meaning: 'Detect Hs & Ts' },
  ],

  treatment: [
    { logic: 'CPR + ACLS; defibrillate shockable rhythms; epinephrine', detail: 'Core resuscitation.' },
    { logic: 'Treat the specific H/T', detail: 'Needle decompression, pericardiocentesis, thrombolysis, correct K⁺/temperature.' },
  ],

  mnemonics: [
    { hook: 'Reversible arrest: 5 Hs & 5 Ts', expansion: ['Hypovolemia, Hypoxia, H⁺, Hypo/Hyperkalemia, Hypothermia', 'Tension pneumo, Tamponade, Toxins, Thrombosis (PE & coronary)'] },
  ],

  traps: [
    {
      questionCategory: 'PEA / asystole management',
      wrongInstinct: 'Defibrillate a PEA or asystole arrest',
      rightAnswer: 'Non-shockable (PEA/asystole) → CPR + epinephrine + reverse the Hs/Ts (do NOT shock)',
      why: 'Only VF and pulseless VT are shockable; PEA and asystole need CPR, epinephrine, and correction of the underlying reversible cause.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient in PEA arrest has distended neck veins and absent breath sounds on one side after central-line placement. Which reversible cause should you treat immediately?',
      options: [
        { id: 'a', text: 'Hypovolemia' },
        { id: 'b', text: 'Tension pneumothorax' },
        { id: 'c', text: 'Hyperkalemia' },
        { id: 'd', text: 'Coronary thrombosis' },
      ],
      answerId: 'b',
      explanation: 'Distended neck veins with unilateral absent breath sounds after a central-line attempt indicates tension pneumothorax — needle decompression is the immediate reversible-cause treatment.',
      tests: 'exam',
    },
  ],
};

export default cardiacArrest;
