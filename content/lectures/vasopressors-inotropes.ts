import type { Lecture } from '../../lib/types';

export const vasopressorsInotropes: Lecture = {
  id: 'vasopressors-inotropes',
  title: 'Vasopressors & Inotropes',
  system: 'cardiovascular',
  source: 'L17 — Shock',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L17 Shock' },
    { kind: 'disease', label: 'Shock pharmacology' },
    { kind: 'mechanism', label: 'α1 / β1 receptors' },
    { kind: 'treatment', label: 'Vasopressor choice' },
  ],

  highYield: [
    'Catecholamines act on **α1 (vasoconstriction)** and **β1 (inotropy/chronotropy)**.',
    '**Norepinephrine (α1>β1)**: **first-line vasopressor in septic shock** (↑MAP, less arrhythmia than dopamine).',
    '**Epinephrine (α + β)**: **first-line for anaphylaxis** (IM 0.3–0.5 mg of 1:1000), CPR, refractory shock.',
    '**Dopamine** is dose-dependent: low → dopaminergic (renal); mid → β1 (inotropy); high → α1 (vasoconstriction); more tachyarrhythmia than NE.',
    '**Dobutamine (β1)** = inotrope for low-output states (cardiogenic shock, septic with myocardial depression).',
  ],

  mechanism: {
    title: 'α1 vasoconstriction + β1 inotropy',
    steps: [
      { id: 's1', label: 'α1 → vasoconstriction → ↑SVR → ↑MAP', emphasis: 'key' },
      { id: 's2', label: 'β1 → ↑contractility/HR → ↑CO', emphasis: 'key' },
    ],
    branches: [
      {
        fromId: 's1',
        title: 'Agent choice',
        steps: [{ id: 'a1', label: 'NE (septic) · EP (anaphylaxis/CPR) · dopamine (dose-dep.) · dobutamine (β1 inotrope)' }],
      },
    ],
  },

  examFindings: [
    { sign: 'NE: ↑MAP, reflex bradycardia; digital ischemia/gangrene with extravasation', mechanism: 'Potent α1 vasoconstriction', significance: 'key' },
    { sign: 'Epinephrine: ↑HR, tremor, hyperglycemia', mechanism: 'β-adrenergic effects', significance: 'key' },
    { sign: 'Dopamine: tachyarrhythmia', mechanism: 'β1 + ectopy', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'MAP, HR, lactate, urine output', meaning: 'Titrate to perfusion (MAP ≥65)' },
    { clue: 'Cause workup (sepsis, MI)', meaning: 'Directs agent choice' },
  ],

  treatment: [
    { logic: 'Septic shock: fluids first, then norepinephrine (MAP ≥65); add vasopressin; dobutamine if myocardial depression', detail: 'Surviving Sepsis approach.' },
    { logic: 'Anaphylaxis: IM epinephrine first', detail: '0.3–0.5 mg of 1:1000.' },
  ],

  mnemonics: [
    { hook: 'Septic shock → Norepinephrine first; Anaphylaxis → Epinephrine (IM)', expansion: ['NE = α1 vasopressor'] },
    { hook: 'Dopamine dose ladder: Dopaminergic → Beta → Alpha', expansion: ['Low renal, mid inotrope, high pressor'] },
  ],

  traps: [
    {
      questionCategory: 'First vasopressor in septic shock',
      wrongInstinct: 'Use dopamine first in septic shock',
      rightAnswer: 'Norepinephrine is first-line (better survival, fewer arrhythmias than dopamine)',
      why: 'Surviving Sepsis guidelines make norepinephrine the first-choice vasopressor; dopamine causes more tachyarrhythmia.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'After adequate fluid resuscitation, a patient in septic shock remains hypotensive. First-line vasopressor?',
      options: [
        { id: 'a', text: 'Dopamine' },
        { id: 'b', text: 'Norepinephrine' },
        { id: 'c', text: 'Dobutamine' },
        { id: 'd', text: 'Phenylephrine' },
      ],
      answerId: 'b',
      explanation: 'Norepinephrine is the first-line vasopressor in septic shock after fluids — it reliably raises MAP with a lower arrhythmia risk than dopamine.',
      tests: 'treatment',
    },
  ],
};

export default vasopressorsInotropes;
