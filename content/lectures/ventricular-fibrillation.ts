import type { Lecture } from '../../lib/types';

export const ventricularFibrillation: Lecture = {
  id: 'ventricular-fibrillation',
  title: 'Ventricular Fibrillation (VF)',
  system: 'cardiovascular',
  source: 'L1 — Cardiac Arrhythmias',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L1 Arrhythmias' },
    { kind: 'disease', label: 'Ventricular fibrillation' },
    { kind: 'mechanism', label: 'Re-entry' },
    { kind: 'exam', label: 'Pulseless arrest' },
    { kind: 'treatment', label: 'Defibrillation' },
  ],

  highYield: [
    'Lethal, disorganized ventricular activity → **no effective contraction → cardiac arrest**; major cause of **sudden cardiac death**.',
    'ECG: **no distinct P, QRS, or T** — chaotic baseline.',
    'Mechanism: **re-entry** (long pathway, slow conduction, short refractory period); can be initiated by an **R-on-T** PVC.',
    'Only effective treatment = **immediate electrical defibrillation (unsynchronized DC shock) + CPR**.',
    'Recurrence prevention: **ICD**.',
  ],

  mechanism: {
    title: 'Re-entry → no synchronized contraction → arrest',
    steps: [
      { id: 's1', label: 'Trigger (R-on-T PVC, ischemia, shock)' },
      { id: 's2', label: 'Multiple re-entrant circuits', emphasis: 'key' },
      { id: 's3', label: 'No synchronized ventricular contraction' },
      { id: 's4', label: 'No cardiac output → cardiac arrest', emphasis: 'danger' },
      { id: 's5', label: 'Death if untreated' },
    ],
    branches: [
      {
        fromId: 's2',
        title: 'Re-entry conditions',
        steps: [
          { id: 'r1', label: 'Long pathway' },
          { id: 'r2', label: 'Slow conduction' },
          { id: 'r3', label: 'Short refractory period' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'Unresponsive, pulseless, apneic', mechanism: 'No cardiac output — clinical cardiac arrest', significance: 'key' },
    { sign: 'No heart sounds, no blood pressure', mechanism: 'No effective ventricular contraction', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Rhythm check: chaotic shockable rhythm', meaning: 'Recognize fast — time to defibrillation drives survival' },
    { clue: 'Post-arrest: ischemia workup, electrolytes, QT', meaning: 'Find the trigger / substrate' },
    { clue: 'ICD evaluation', meaning: 'Secondary prevention of recurrence' },
  ],

  treatment: [
    { logic: 'Immediate UNSYNCHRONIZED defibrillation + high-quality CPR', detail: 'Defibrillate ASAP once a shockable rhythm is recognized to maximize survival.' },
    { logic: 'ACLS: epinephrine, amiodarone', detail: 'Per arrest algorithm between shocks.' },
    { logic: 'AED (external) for early response; ICD long-term', detail: 'AED for public access; ICD prevents recurrent SCD.' },
  ],

  mnemonics: [
    { hook: 'VF = Shock first, ask later', expansion: ['No pulse + shockable chaotic rhythm → immediate UNSYNCHRONIZED defibrillation', 'Synchronization is impossible — there is no QRS to sync to'] },
    { hook: 'Re-entry recipe: Long, Slow, Short', expansion: ['Long pathway', 'Slow conduction', 'Short refractory period'] },
  ],

  traps: [
    {
      questionCategory: 'Shock type',
      wrongInstinct: 'Synchronized cardioversion',
      rightAnswer: 'Unsynchronized defibrillation',
      why: 'VF has no organized QRS to synchronize to, so the shock must be unsynchronized. Synchronized cardioversion is for organized rhythms (VT-with-pulse, AF, flutter).',
    },
    {
      questionCategory: 'What initiates VF',
      wrongInstinct: 'Any single PVC causes VF',
      rightAnswer: 'A PVC on the T wave (R-on-T) in the vulnerable period can trigger VF',
      why: 'The mid-T-wave vulnerable period has maximal dispersion of refractoriness; a stimulus there can ignite re-entry.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A monitored patient collapses; the rhythm is a chaotic baseline with no identifiable QRS complexes and no pulse. Immediate treatment?',
      options: [
        { id: 'a', text: 'Synchronized cardioversion' },
        { id: 'b', text: 'Unsynchronized defibrillation + CPR' },
        { id: 'c', text: 'IV adenosine' },
        { id: 'd', text: 'Vagal maneuvers' },
      ],
      answerId: 'b',
      explanation: 'Pulseless VF is treated with immediate unsynchronized defibrillation and CPR. There is no organized QRS to synchronize to, so synchronized cardioversion is not possible.',
      tests: 'treatment',
    },
  ],

  figures: [
    { title: 'Ventricular fibrillation', ecg: 'vf', caption: 'Chaotic baseline — no P, QRS, or T. Defibrillate.' },
  ],
};

export default ventricularFibrillation;
