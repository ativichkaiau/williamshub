import type { Lecture } from '../../lib/types';

export const atrialFlutter: Lecture = {
  id: 'atrial-flutter',
  title: 'Atrial Flutter',
  system: 'cardiovascular',
  source: 'L1 — Cardiac Arrhythmias',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L1 Arrhythmias' },
    { kind: 'disease', label: 'Atrial flutter' },
    { kind: 'mechanism', label: 'Macro-reentry' },
    { kind: 'exam', label: 'Regular ~150 tachycardia' },
    { kind: 'investigation', label: 'Sawtooth waves' },
  ],

  highYield: [
    'Regular atrial rhythm, rate **250–350/min**.',
    'Caused by **macro-reentry in the right atrium** (typically counterclockwise, cavotricuspid-isthmus dependent).',
    'ECG: **sawtooth** flutter (F) waves; ventricular rate often **2:1 (~150)** or 4:1.',
    'Usually a **regular** ventricular response (contrast with AF).',
    'Treatment: rate control, **low-energy cardioversion**, CTI ablation (high cure); anticoagulate as for AF.',
  ],

  mechanism: {
    title: 'Right-atrial macro-reentry → sawtooth + ratioed conduction',
    steps: [
      { id: 's1', label: 'Macro-reentrant circuit in RA (around tricuspid annulus, CTI-dependent)', emphasis: 'key' },
      { id: 's2', label: 'Atrial rate 250–350' },
      { id: 's3', label: 'Sawtooth F waves' },
      { id: 's4', label: 'AV node filters (2:1 / 4:1)' },
      { id: 's5', label: 'Regular ventricular rate (~150 if 2:1)' },
    ],
  },

  examFindings: [
    { sign: 'Regular tachycardia ~150/min', mechanism: 'Classic 2:1 AV conduction of a ~300/min atrial rate', significance: 'key' },
    { sign: 'Flutter (regular) waves in the neck veins', mechanism: 'Organized rapid atrial contraction', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'ECG: sawtooth F waves (best in II, III, aVF); atrial ~300, ventricular ~150', meaning: 'Diagnostic — typical flutter' },
    { clue: 'Vagal maneuvers / adenosine', meaning: 'Transiently ↑AV block to unmask flutter waves' },
    { clue: 'Echo', meaning: 'Structural disease / thrombus' },
  ],

  treatment: [
    { logic: 'Rate control (BB / non-DHP CCB) and cardioversion', detail: 'Flutter responds to low-energy synchronized shock.' },
    { logic: 'Cavotricuspid isthmus ablation', detail: 'High cure rate for typical flutter.' },
    { logic: 'Anticoagulate by stroke risk', detail: 'Same thrombo-embolic considerations as AF.' },
  ],

  mnemonics: [
    { hook: 'Flutter = 300 ÷ block', expansion: ['Atrial rate ~300', '2:1 → 150, 4:1 → 75', 'Sawtooth in the inferior leads'] },
  ],

  traps: [
    {
      questionCategory: 'Regular narrow tachycardia at ~150',
      wrongInstinct: 'Always call it sinus tachycardia or PSVT',
      rightAnswer: 'Consider atrial flutter with 2:1 block (atrial ~300)',
      why: 'A suspiciously fixed ~150/min should prompt a search for flutter waves; vagal maneuvers/adenosine unmask them.',
    },
    {
      questionCategory: 'AF vs flutter',
      wrongInstinct: 'Both are “irregular atrial arrhythmias”',
      rightAnswer: 'Flutter is usually REGULAR (organized macro-reentry, sawtooth); AF is irregularly irregular (no P)',
      why: 'Degree of organization separates them — flutter is a single reentrant circuit, AF is chaotic.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A regular narrow-complex tachycardia at exactly 150/min. Carotid sinus massage transiently slows the rate and reveals sawtooth waves at 300/min in the inferior leads. Diagnosis?',
      options: [
        { id: 'a', text: 'Sinus tachycardia' },
        { id: 'b', text: 'Atrial flutter with 2:1 block' },
        { id: 'c', text: 'AVNRT' },
        { id: 'd', text: 'Atrial fibrillation' },
      ],
      answerId: 'b',
      explanation: 'A fixed ~150/min that transiently slows to reveal 300/min sawtooth F waves is atrial flutter conducting 2:1. Increasing AV block (vagal/adenosine) exposes the flutter waves.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Atrial flutter (sawtooth)', ecg: 'flutter', caption: 'Sawtooth F waves with ratioed (here 2:1) AV conduction.' },
  ],
};

export default atrialFlutter;
