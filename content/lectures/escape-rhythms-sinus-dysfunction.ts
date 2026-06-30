import type { Lecture } from '../../lib/types';

export const escapeRhythmsSinusDysfunction: Lecture = {
  id: 'escape-rhythms-sinus-dysfunction',
  title: 'Escape Rhythms & Sinus Node Dysfunction',
  system: 'cardiovascular',
  source: 'L2 — Abnormal ECG',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L2 Abnormal ECG' },
    { kind: 'disease', label: 'Sinus node dysfunction' },
    { kind: 'mechanism', label: 'Pacemaker hierarchy' },
    { kind: 'exam', label: 'Bradycardia' },
    { kind: 'treatment', label: 'Atropine / pacemaker' },
  ],

  highYield: [
    'Pacemaker hierarchy (overdrive suppression): **SA 60–100 → junctional 40–60 → ventricular 20–40 bpm**.',
    'A slower escape pacemaker takes over **only when the faster one fails** — **narrow QRS (junctional)** vs **wide QRS (ventricular)**.',
    '**Sinus bradycardia**: sinus rhythm <60/min (P before every QRS).',
    '**Sinus arrest/pause**: SA node fails to fire → dropped P (and QRS) → pause; an escape rhythm may rescue it.',
    'Symptomatic → **atropine** acutely, **pacemaker** long-term.',
  ],

  mechanism: {
    title: 'SA node fails → backup pacemaker escapes',
    steps: [
      { id: 's1', label: 'SA node slows / stops', emphasis: 'key' },
      { id: 's2', label: 'Faster pacemaker no longer suppresses lower ones' },
    ],
    branches: [
      {
        fromId: 's2',
        title: 'Junctional escape',
        steps: [
          { id: 'j1', label: 'AV junction fires 40–60' },
          { id: 'j2', label: 'Narrow QRS, absent/inverted P' },
        ],
      },
      {
        fromId: 's2',
        title: 'Ventricular escape',
        steps: [
          { id: 'v1', label: 'Ventricular focus fires 20–40' },
          { id: 'v2', label: 'Wide QRS — slow & unreliable', emphasis: 'key' },
        ],
      },
      {
        fromId: 's2',
        title: 'No backup',
        steps: [
          { id: 'n1', label: 'No escape → asystole / syncope', emphasis: 'danger' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'Bradycardia', mechanism: 'Slow sinus rate or slow escape pacemaker', significance: 'key' },
    { sign: 'Syncope / dizziness (Stokes–Adams if asystolic)', mechanism: 'Cerebral hypoperfusion during a long pause', significance: 'supportive' },
    { sign: 'Cannon A waves if AV dissociation present', mechanism: 'Atria contracting against closed valves', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'ECG: sinus brady = sinus P <60; sinus pause = absent P–QRS with a pause', meaning: 'Define the bradyarrhythmia' },
    { clue: 'Escape beat: late narrow (junctional) or wide (ventricular)', meaning: 'Localizes the backup pacemaker' },
    { clue: 'Holter / loop recorder; check drugs, TSH, electrolytes, ischemia', meaning: 'Intermittent symptoms & reversible causes' },
  ],

  treatment: [
    { logic: 'Asymptomatic → observe, remove offending drugs', detail: 'BB / CCB / digoxin, ↑vagal tone, hypothyroidism.' },
    { logic: 'Symptomatic bradycardia → atropine (± isoproterenol), transcutaneous pacing', detail: 'Acute stabilization.' },
    { logic: 'Sick sinus syndrome / persistent symptoms → permanent pacemaker', detail: 'Definitive therapy.' },
    { logic: 'Never suppress a slow escape rhythm', detail: 'It may be the only thing maintaining cardiac output.' },
  ],

  mnemonics: [
    { hook: '60–40–20: the pacemaker ladder', expansion: ['SA 60–100', 'Junctional (AV) 40–60, narrow QRS', 'Ventricular 20–40, wide QRS'] },
  ],

  traps: [
    {
      questionCategory: 'Don’t treat the escape',
      wrongInstinct: 'Suppress the slow wide-complex escape beats',
      rightAnswer: 'Protect the escape rhythm; treat the underlying bradycardia (atropine / pacing)',
      why: 'A ventricular escape rhythm is a life-saving backup — abolishing it causes asystole. Support the rate instead.',
    },
    {
      questionCategory: 'Narrow vs wide escape',
      wrongInstinct: 'All escape rhythms look the same',
      rightAnswer: 'Junctional escape = narrow QRS (40–60); ventricular escape = wide QRS (20–40)',
      why: 'QRS width localizes the backup pacemaker — the junction conducts via His-Purkinje (narrow); the ventricle does not (wide, slow).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'After a 4-second sinus pause, a beat appears with a wide QRS at a rate of ~30/min. What is this rescue beat?',
      options: [
        { id: 'a', text: 'Junctional escape' },
        { id: 'b', text: 'Ventricular escape rhythm' },
        { id: 'c', text: 'PVC' },
        { id: 'd', text: 'Sinus beat' },
      ],
      answerId: 'b',
      explanation: 'A wide QRS at 20–40/min emerging after the sinus fails is a ventricular escape rhythm — the lowest, slowest backup pacemaker. A junctional escape would be narrow at 40–60.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Sinus bradycardia', ecg: 'sinus-brady', caption: 'Sinus rhythm <60/min; a P before every QRS.' },
  ],
};

export default escapeRhythmsSinusDysfunction;
