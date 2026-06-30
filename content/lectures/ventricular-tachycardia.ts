import type { Lecture } from '../../lib/types';

export const ventricularTachycardia: Lecture = {
  id: 'ventricular-tachycardia',
  title: 'Ventricular Tachycardia (VT)',
  system: 'cardiovascular',
  source: 'L1/L2 — Arrhythmias & Abnormal ECG (MedCMU)',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L1 Arrhythmias' },
    { kind: 'disease', label: 'Ventricular tachycardia' },
    { kind: 'mechanism', label: 'Scar re-entry' },
    { kind: 'exam', label: 'Wide-complex tachycardia' },
    { kind: 'treatment', label: 'Cardioversion / amiodarone' },
  ],

  highYield: [
    '≥3 consecutive ventricular beats, **wide QRS**, rate **>100** (often 120–200).',
    '**Monomorphic VT**: uniform QRS; commonest mechanism = **re-entry around an MI scar**.',
    '**Polymorphic VT**: varying QRS, usually >200/min; **Torsades de Pointes** is the prototype (long QT).',
    '**Hemodynamic status drives acute therapy** — unstable → synchronized DC cardioversion.',
    'A **regular wide-complex tachycardia is VT until proven otherwise.**',
  ],

  mechanism: {
    title: 'Scar re-entry (mono) vs repolarization heterogeneity (poly / TdP)',
    steps: [
      { id: 's1', label: 'Ventricular origin → wide QRS tachycardia', emphasis: 'key' },
    ],
    branches: [
      {
        fromId: 's1',
        title: 'Monomorphic',
        steps: [
          { id: 'm1', label: 'Re-entry around an MI scar' },
          { id: 'm2', label: 'Stable uniform QRS' },
        ],
      },
      {
        fromId: 's1',
        title: 'Polymorphic / TdP',
        steps: [
          { id: 'p1', label: 'Prolonged QT / dispersion of repolarization' },
          { id: 'p2', label: 'Triggered activity (EADs)' },
          { id: 'p3', label: 'Twisting polymorphic QRS', emphasis: 'danger' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'Hemodynamic compromise (hypotension, ↓consciousness)', mechanism: 'Loss of coordinated filling/ejection at high rate', significance: 'key' },
    { sign: 'Cannon A waves / variable S1 (AV dissociation)', mechanism: 'Independent atrial & ventricular activity — favors VT over SVT', significance: 'key' },
    { sign: 'May be pulseless', mechanism: 'Degeneration toward arrest', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'ECG: wide regular tachycardia; AV dissociation, capture & fusion beats', meaning: 'Favor VT over SVT-with-aberrancy' },
    { clue: 'For TdP: QT, K⁺, Mg²⁺, QT-prolonging drugs', meaning: 'Identify the reversible driver' },
    { clue: 'Echo / ischemia workup', meaning: 'Scar substrate for re-entry' },
  ],

  treatment: [
    { logic: 'Unstable / pulseless → synchronized cardioversion (defibrillate if pulseless)', detail: 'Hemodynamics override drugs.' },
    { logic: 'Stable monomorphic VT: IV amiodarone / procainamide / lidocaine', detail: 'Pharmacologic termination is <30% effective for monomorphic VT.' },
    { logic: 'TdP: IV magnesium, correct K⁺, stop offending drugs', detail: 'Overdrive pacing / isoproterenol if needed.' },
    { logic: 'Long term: treat substrate; ICD for secondary prevention', detail: 'Prevents sudden cardiac death.' },
  ],

  mnemonics: [
    { hook: 'Wide + regular = VT until proven otherwise', expansion: ['Don’t assume SVT with aberrancy', 'AV dissociation, capture & fusion beats confirm VT'] },
    { hook: 'Torsades → Magnesium', expansion: ['Polymorphic VT with long QT', 'IV Mg, fix K⁺, stop QT-prolonging drugs'] },
  ],

  traps: [
    {
      questionCategory: 'Wide-complex tachycardia call',
      wrongInstinct: 'Call it SVT with bundle branch block and give verapamil',
      rightAnswer: 'Treat regular wide-complex tachycardia as VT until proven otherwise',
      why: 'Misdiagnosing VT as SVT and giving a CCB can cause collapse; AV dissociation / capture / fusion beats point to VT.',
    },
    {
      questionCategory: 'Polymorphic VT drug',
      wrongInstinct: 'Give amiodarone (it prolongs QT)',
      rightAnswer: 'TdP → magnesium + correct electrolytes; avoid QT-prolonging drugs',
      why: 'Torsades is driven by a long QT; QT-prolonging antiarrhythmics worsen it — magnesium is first-line.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A stable patient has a regular wide-complex tachycardia at 170/min with visible AV dissociation and occasional fusion beats. Most likely diagnosis?',
      options: [
        { id: 'a', text: 'SVT with aberrancy' },
        { id: 'b', text: 'Monomorphic ventricular tachycardia' },
        { id: 'c', text: 'Atrial flutter with aberrancy' },
        { id: 'd', text: 'Sinus tachycardia' },
      ],
      answerId: 'b',
      explanation: 'AV dissociation plus capture and fusion beats are hallmarks of VT. A regular wide-complex tachycardia should be treated as VT until proven otherwise.',
      tests: 'exam',
    },
  ],
};

export default ventricularTachycardia;
