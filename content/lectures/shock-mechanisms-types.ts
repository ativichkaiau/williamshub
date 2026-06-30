import type { Lecture } from '../../lib/types';

export const shockMechanismsTypes: Lecture = {
  id: 'shock-mechanisms-types',
  title: 'Shock — Mechanisms & Types',
  system: 'cardiovascular',
  source: 'L17 — Shock',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L17 Shock' },
    { kind: 'disease', label: 'Shock' },
    { kind: 'mechanism', label: '↓ tissue perfusion' },
    { kind: 'exam', label: 'Warm vs cold' },
  ],

  highYield: [
    'Shock = acute critical **reduction in tissue perfusion**; hypotension, altered mentation, oliguria, **metabolic (lactic) acidosis**.',
    'Three core mechanisms: **hypovolemia, cardiac insufficiency (pump), altered vascular resistance (distributive)**.',
    'Types: **hypovolemic** (hemorrhage/fluid loss), **cardiogenic** (pump failure), **distributive** (septic, anaphylactic, neurogenic), **obstructive** (tamponade, PE, tension pneumo).',
    '**Cold shock** (vasoconstricted: hypovolemic, cardiogenic) vs **warm shock** (vasodilated: early septic, neurogenic, anaphylactic).',
    'First step: identify the cause; restore perfusion (fluids ± vasopressors).',
  ],

  mechanism: {
    title: '↓ perfusion → anaerobic metabolism → organ failure',
    steps: [
      { id: 's1', label: 'Insult (volume / pump / vascular)' },
      { id: 's2', label: '↓ tissue perfusion', emphasis: 'key' },
      { id: 's3', label: 'Anaerobic metabolism (↑lactate)' },
      { id: 's4', label: 'End-organ dysfunction → death if uncorrected', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Hypotension + tachycardia + ↑lactate + oliguria + altered mentation', mechanism: 'Global hypoperfusion', significance: 'key' },
    { sign: 'Cold/clammy (hypovolemic/cardiogenic) vs warm/flushed (distributive)', mechanism: 'High vs low SVR', significance: 'key' },
    { sign: 'Cause-specific clues (↑JVP, bleeding, rash, fever)', mechanism: 'Points to the type', significance: 'key' },
  ],

  investigations: [
    { clue: 'Lactate, ABG', meaning: 'Hypoperfusion / acidosis' },
    { clue: 'Hemodynamics (CVP / PCWP / CO)', meaning: 'Distinguish shock types' },
    { clue: 'Echo, cultures, focused workup', meaning: 'Identify the cause' },
  ],

  treatment: [
    { logic: 'Cause-directed resuscitation', detail: 'Fluids (hypovolemic/septic), stop bleeding, reperfuse MI, relieve obstruction.' },
    { logic: 'Vasopressors/inotropes as needed', detail: 'Restore MAP & perfusion.' },
  ],

  mnemonics: [
    { hook: '4 shocks: Hypovolemic, Cardiogenic, Distributive, Obstructive', expansion: ['Plus 3 mechanisms: volume, pump, vascular tone'] },
    { hook: 'Cold = vasoconstricted; Warm = vasodilated', expansion: ['Cold: hypovolemic/cardiogenic', 'Warm: septic/neurogenic/anaphylactic'] },
  ],

  traps: [
    {
      questionCategory: 'Warm vs cold shock',
      wrongInstinct: 'All shock presents cold and clammy',
      rightAnswer: 'Distributive shock (early septic, neurogenic, anaphylactic) is WARM/vasodilated; hypovolemic & cardiogenic are cold/vasoconstricted',
      why: 'Distributive shock has low SVR (warm, flushed, bounding pulses); hypovolemic/cardiogenic compensate with vasoconstriction (cold, clammy).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A febrile patient is hypotensive but warm, flushed, with bounding pulses and a wide pulse pressure. Type of shock?',
      options: [
        { id: 'a', text: 'Hypovolemic' },
        { id: 'b', text: 'Cardiogenic' },
        { id: 'c', text: 'Distributive (septic)' },
        { id: 'd', text: 'Obstructive' },
      ],
      answerId: 'c',
      explanation: 'Warm, flushed skin with bounding pulses and a wide pulse pressure reflects low systemic vascular resistance — distributive (here septic) shock.',
      tests: 'exam',
    },
  ],
};

export default shockMechanismsTypes;
