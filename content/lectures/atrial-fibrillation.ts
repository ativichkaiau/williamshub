import type { Lecture } from '../../lib/types';

export const atrialFibrillation: Lecture = {
  id: 'atrial-fibrillation',
  title: 'Atrial Fibrillation (AF)',
  system: 'cardiovascular',
  source: 'L1/L2 — Arrhythmias & Abnormal ECG (MedCMU)',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L1 Arrhythmias' },
    { kind: 'disease', label: 'Atrial fibrillation' },
    { kind: 'mechanism', label: 'Re-entrant wavelets' },
    { kind: 'exam', label: 'Irregularly irregular pulse' },
    { kind: 'treatment', label: 'Rate / rhythm / anticoagulation' },
  ],

  highYield: [
    'Most common sustained arrhythmia; prevalence rises with **age**.',
    'ECG: **irregularly irregular**, **no discrete P waves**, fibrillatory baseline, irregular QRS.',
    'Mechanism: multiple **re-entrant wavelets** / rapid ectopic firing (often pulmonary-vein foci).',
    'Three types: **paroxysmal** (self-terminates), **persistent** (needs cardioversion), **permanent** (cannot convert).',
    'Consequences: loss of atrial kick, **LA thrombus → embolic stroke**, tachycardia-induced cardiomyopathy, ~1.5× mortality.',
  ],

  mechanism: {
    title: 'Disorganized atrial activation → irregular ventricular response',
    steps: [
      { id: 's1', label: 'Trigger (PV ectopy)' },
      { id: 's2', label: 'Multiple re-entrant wavelets in atria', emphasis: 'key' },
      { id: 's3', label: 'No organized atrial contraction (no P wave)' },
      { id: 's4', label: 'AV node bombarded irregularly' },
      { id: 's5', label: 'Irregularly irregular ventricular response' },
    ],
    branches: [
      {
        fromId: 's3',
        title: 'Stasis',
        steps: [
          { id: 'c1', label: 'Stasis in LA appendage' },
          { id: 'c2', label: 'Thrombus → embolic stroke', emphasis: 'danger' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'Irregularly irregular pulse', mechanism: 'Random AV conduction of chaotic atrial activity', significance: 'key' },
    { sign: 'Pulse deficit (apical rate > radial rate)', mechanism: 'Some beats too weak to transmit a palpable pulse', significance: 'key' },
    { sign: 'Absent a-wave in JVP', mechanism: 'No coordinated atrial contraction', significance: 'supportive' },
    { sign: 'Signs of embolic event or heart failure', mechanism: 'Thrombo-embolism; loss of atrial kick + tachycardia', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'ECG: irregularly irregular, absent P, fibrillatory waves', meaning: 'Diagnostic' },
    { clue: 'Echo (TEE before cardioversion)', meaning: 'LA size, valve disease, LAA thrombus, LV function' },
    { clue: 'TFT / electrolytes', meaning: 'Thyrotoxicosis and other precipitants' },
  ],

  treatment: [
    { logic: 'Rate control: beta-blocker, non-DHP CCB (verapamil/diltiazem), digoxin', detail: 'Slow the AV node to control ventricular rate.' },
    { logic: 'Rhythm control: cardioversion (electrical/pharmacologic), amiodarone/flecainide', detail: 'Anticoagulate (TEE or ≥3 wks) before cardioversion.' },
    { logic: 'Anticoagulation by CHA₂DS₂-VASc', detail: 'The main driver of mortality/stroke benefit.' },
    { logic: 'Caution: avoid AV-nodal blockers in AF + WPW pre-excitation', detail: 'They funnel conduction down the accessory pathway → VF risk.' },
  ],

  mnemonics: [
    { hook: 'AF = Rate, Rhythm, Risk', expansion: ['Rate control (BB/CCB/digoxin)', 'Rhythm control (cardiovert/amiodarone)', 'Risk of stroke → CHA₂DS₂-VASc anticoagulation'] },
  ],

  traps: [
    {
      questionCategory: 'Rhythm identification',
      wrongInstinct: 'Irregular, so it must be atrial flutter with variable block',
      rightAnswer: 'AF = irregularly irregular with NO P waves; flutter = regular sawtooth (often 2:1/4:1)',
      why: 'Flutter has organized sawtooth F waves and is usually regular; AF has no organized atrial activity at all.',
    },
    {
      questionCategory: 'Drug choice in pre-excited AF (WPW)',
      wrongInstinct: 'Give an AV-nodal blocker (verapamil / digoxin / adenosine)',
      rightAnswer: 'Avoid AV-nodal blockers; use procainamide or cardiovert',
      why: 'Blocking the AV node funnels conduction down the accessory pathway → very fast ventricular rate → VF.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An ECG shows an irregularly irregular narrow-complex rhythm with no P waves. The apical rate is 110 but the radial pulse is 88. What explains the apical–radial difference?',
      options: [
        { id: 'a', text: 'Measurement error' },
        { id: 'b', text: 'Pulse deficit — some weak beats do not generate a palpable radial pulse' },
        { id: 'c', text: 'Second-degree AV block' },
        { id: 'd', text: 'Ventricular bigeminy' },
      ],
      answerId: 'b',
      explanation: 'In AF, irregular diastolic filling means some beats are too weak to transmit to the radial artery, so the apical (auscultated) rate exceeds the radial rate — a pulse deficit.',
      tests: 'exam',
    },
  ],
};

export default atrialFibrillation;
