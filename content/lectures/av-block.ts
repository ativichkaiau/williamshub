import type { Lecture } from '../../lib/types';

export const avBlock: Lecture = {
  id: 'av-block',
  title: 'Atrioventricular (AV) Block',
  system: 'cardiovascular',
  source: 'L1/L2 — Arrhythmias & Abnormal ECG (MedCMU)',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L1 Arrhythmias' },
    { kind: 'lecture', label: 'L2 Abnormal ECG' },
    { kind: 'disease', label: 'Heart block' },
    { kind: 'mechanism', label: 'Conduction block' },
    { kind: 'investigation', label: 'ECG' },
    { kind: 'treatment', label: 'Pacemaker' },
  ],

  highYield: [
    '**1° AV block**: PR **>200 ms**, every P conducts (1:1) — usually benign.',
    '**2° Mobitz I (Wenckebach)**: progressive PR lengthening → dropped QRS; block at the **AV node** — usually benign.',
    '**2° Mobitz II**: constant PR → sudden dropped QRS; block **infranodal (His–Purkinje)** — high risk of progression.',
    '**3° (complete)**: AV dissociation — Ps and QRSs independent, atrial rate > ventricular escape.',
    '**Mobitz II and complete block → pacemaker.** Atropine helps nodal blocks, not infranodal ones.',
  ],

  mechanism: {
    title: 'Where the block sits decides the danger',
    steps: [
      { id: 's1', label: 'SA node impulse' },
      { id: 's2', label: 'AV node / His–Purkinje' },
    ],
    branches: [
      {
        fromId: 's2',
        title: 'AV-nodal (benign)',
        steps: [
          { id: 'n1', label: 'Decremental conduction → PR >200 ms (1°)' },
          { id: 'n2', label: 'Progressive PR lengthening' },
          { id: 'n3', label: 'Dropped QRS (Mobitz I)' },
        ],
      },
      {
        fromId: 's2',
        title: 'Infranodal (unstable)',
        steps: [
          { id: 'i1', label: 'All-or-none His–Purkinje' },
          { id: 'i2', label: 'Fixed PR, sudden dropped QRS (Mobitz II)', emphasis: 'key' },
          { id: 'i3', label: 'Complete block — AV dissociation (3°)', emphasis: 'danger' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'Cannon A waves in the JVP (complete block)', mechanism: 'Atria contract against closed AV valves during AV dissociation', significance: 'key' },
    { sign: 'Variable-intensity S1 (complete block)', mechanism: 'Changing AV timing alters valve position at systole', significance: 'supportive' },
    { sign: 'Bradycardia ± syncope (Stokes–Adams)', mechanism: 'Slow/unreliable escape rhythm', significance: 'supportive' },
  ],

  investigations: [
    { clue: '1°: PR >200 ms, constant, every P → QRS', meaning: 'Delay only — no dropped beats' },
    { clue: 'Mobitz I: PR lengthens progressively until a P is not conducted', meaning: 'Grouped beating; AV-nodal' },
    { clue: 'Mobitz II: constant PR with intermittent non-conducted P (often wide QRS)', meaning: 'Infranodal — unstable' },
    { clue: '3°: regular P–P and R–R with no relationship; atrial rate > ventricular', meaning: 'Complete AV dissociation' },
  ],

  treatment: [
    { logic: '1° and asymptomatic Mobitz I → observe', detail: 'No specific treatment; look for reversible causes.' },
    { logic: 'Symptomatic bradycardia → atropine (± isoproterenol)', detail: 'Works best for AV-nodal block; infranodal block often will not respond.' },
    { logic: 'Mobitz II and complete block → permanent pacemaker', detail: 'Infranodal and unstable; also treat reversible causes (drugs: BB/CCB/digoxin, ischemia, hyperkalemia).' },
  ],

  mnemonics: [
    { hook: 'Longer, longer, longer, DROP → Wenckebach', expansion: ['Mobitz I: PR stretches each beat, then a QRS drops', 'If some Ps don’t get through but PR stays the same → Mobitz II'] },
    { hook: 'II and III need a PPM', expansion: ['Mobitz II and complete block are infranodal & unstable → pacemaker', 'Atropine helps nodal (1°, Mobitz I), not infranodal (II, 3°)'] },
  ],

  traps: [
    {
      questionCategory: 'Distinguishing Mobitz I vs II',
      wrongInstinct: 'Both are “second-degree”, so treat them the same',
      rightAnswer: 'Mobitz I = progressive PR (AV node, benign); Mobitz II = fixed PR (infranodal, pacemaker)',
      why: 'The PR behaviour localizes the block — nodal blocks lengthen PR and are stable; infranodal blocks keep PR fixed and drop suddenly, risking complete block.',
    },
    {
      questionCategory: 'Drug response',
      wrongInstinct: 'Give atropine for any AV block',
      rightAnswer: 'Atropine helps AV-nodal (1°, Mobitz I); not infranodal (Mobitz II, 3°)',
      why: 'Atropine reduces vagal tone at the AV node; infranodal His–Purkinje block will not respond and needs pacing.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'ECG shows a constant PR interval with intermittent sudden failure of a P wave to conduct, and the QRS is wide. Which block, and what is the definitive treatment?',
      options: [
        { id: 'a', text: 'Mobitz I — observe' },
        { id: 'b', text: 'Mobitz II — permanent pacemaker' },
        { id: 'c', text: 'First-degree — atropine' },
        { id: 'd', text: 'Sinus pause — IV fluids' },
      ],
      answerId: 'b',
      explanation: 'Fixed PR with sudden non-conducted P waves and a wide QRS is Mobitz II — an infranodal, unstable block that warrants a permanent pacemaker. Atropine typically fails for infranodal block.',
      tests: 'treatment',
    },
  ],
};

export default avBlock;
