import type { Lecture } from '../../lib/types';

export const cardiogenicShock: Lecture = {
  id: 'cardiogenic-shock',
  title: 'Cardiogenic Shock — Definition & Causes',
  system: 'cardiovascular',
  source: 'L11 — Cardiogenic Shock',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L11 Cardiogenic Shock' },
    { kind: 'disease', label: 'Cardiogenic shock' },
    { kind: 'mechanism', label: 'Pump failure' },
    { kind: 'exam', label: 'Cold + congested' },
  ],

  highYield: [
    'Shock = insufficient tissue perfusion; **cardiogenic = the heart cannot pump enough output**.',
    'Hypotension: **SBP <90**, **MAP <60**, or a fall in SBP **>30 mmHg**.',
    '**CO = HR × SV; MAP = CO × SVR.**',
    'Causes: **impaired contraction (MI = commonest**, cardiomyopathy, myocarditis, arrhythmia); **impaired outflow** (AS, HCM, PE); **impaired inflow** (MS, cardiac tamponade).',
    'Clinical: **cold, clammy, mottled**, hypotensive, ↓urine output, altered mentation, **↑lactate**.',
  ],

  mechanism: {
    title: 'Pump failure → ↓CO → hypoperfusion',
    steps: [
      { id: 's1', label: 'Cardiac insult (MI / CMP / outflow / inflow)' },
      { id: 's2', label: '↓ stroke volume → ↓ cardiac output', emphasis: 'key' },
      { id: 's3', label: '↓ MAP → tissue hypoperfusion (↑lactate, ↓urine, cold)', emphasis: 'danger' },
    ],
    branches: [
      {
        fromId: 's3',
        title: 'Compensation (inadequate)',
        steps: [{ id: 'c1', label: 'Baroreflex → ↑sympathetic (↑HR, vasoconstriction)' }],
      },
    ],
  },

  examFindings: [
    { sign: 'Cold, clammy, mottled skin; weak thready pulse', mechanism: 'Intense vasoconstriction + low output', significance: 'key' },
    { sign: 'Hypotension (SBP <90) + tachycardia', mechanism: 'Low CO with reflex sympathetic drive', significance: 'key' },
    { sign: '↓urine output, altered mentation, ↑lactate', mechanism: 'End-organ hypoperfusion', significance: 'key' },
  ],

  investigations: [
    { clue: 'Hemodynamics: ↓cardiac index (<2.2), ↑PCWP; lactate', meaning: 'Confirms low-output state' },
    { clue: 'Echo + ECG + troponin', meaning: 'Identify the cardiac cause (MI, tamponade, PE)' },
  ],

  treatment: [
    { logic: 'Treat the cause', detail: 'e.g. reperfuse an MI; drain tamponade.' },
    { logic: 'Hemodynamic support: inotropes/vasopressors (dobutamine, norepinephrine) ± mechanical support', detail: 'Restore perfusion.' },
    { logic: 'Metabolic correction', detail: 'Acid–base, electrolytes.' },
  ],

  mnemonics: [
    { hook: 'Cardiogenic shock = pump fails: MI, then Outflow (AS/HCM/PE) or Inflow (MS/tamponade)', expansion: ['Contraction problem most common (MI)', 'Then obstruction to outflow or inflow'] },
  ],

  traps: [
    {
      questionCategory: 'Type of shock',
      wrongInstinct: 'Hypotension + cold clammy skin must be hypovolemic shock',
      rightAnswer: 'Cold/clammy + ↑JVP + pulmonary edema + a cardiac cause = cardiogenic shock',
      why: 'Both cardiogenic and hypovolemic shock are cold (vasoconstricted), but cardiogenic shock has congestion (↑JVP, edema) and a cardiac cause; hypovolemia has LOW filling pressures.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'After a large anterior MI, a patient is hypotensive (SBP 80), cold and clammy, with raised JVP and pulmonary edema. Type of shock?',
      options: [
        { id: 'a', text: 'Hypovolemic' },
        { id: 'b', text: 'Cardiogenic' },
        { id: 'c', text: 'Septic' },
        { id: 'd', text: 'Neurogenic' },
      ],
      answerId: 'b',
      explanation: 'Pump failure after a large MI with hypotension, cold/clammy skin, and congestion (raised JVP, pulmonary edema) is cardiogenic shock.',
      tests: 'exam',
    },
  ],
};

export default cardiogenicShock;
