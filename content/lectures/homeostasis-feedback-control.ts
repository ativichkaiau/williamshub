import type { Lecture } from '../../lib/types';
import { HOMEOSTASIS_FEEDBACK } from '../../lib/figures';

export const homeostasisFeedbackControl: Lecture = {
  id: 'homeostasis-feedback-control',
  title: 'Homeostasis & Feedback Control',
  system: 'physiology',
  source: 'L2 — Cellular Homeostasis',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'L2 Cellular Homeostasis' },
    { kind: 'mechanism', label: 'Feedback loops' },
    { kind: 'exam', label: 'Negative vs positive' },
  ],

  highYield: [
    '**Homeostasis = maintenance of a stable internal environment** (temperature, pH, glucose, ions, osmolarity, BP) within a narrow range despite external change — the central organising principle of physiology.',
    '**A control system has four parts:** a **sensor/receptor** (detects the variable), a **control centre** (compares it to a **set point**), an **effector** (produces a response), and the regulated **variable** itself, connected in a loop.',
    '**Negative feedback = the dominant mechanism:** the response **opposes/reverses** the change, driving the variable back toward the set point → **stability**. Examples: thermoregulation, blood glucose (insulin/glucagon), BP (baroreflex), plasma osmolality (ADH).',
    '**Positive feedback = the response AMPLIFIES the change** (a self-reinforcing loop), used for rapid, decisive events that need completion: **oxytocin in labour, the clotting cascade, the action-potential upstroke (Na⁺ influx), and the LH surge at ovulation**. It requires a stop signal to terminate.',
    '**Feedforward control** anticipates a change before it happens (e.g. heart rate rising at the start of exercise). Failure of homeostatic control underlies much disease (e.g. loss of glucose control → diabetes).',
  ],

  mechanism: {
    title: 'Sense → compare → correct',
    steps: [
      { id: 's1', label: 'Sensor detects the variable', emphasis: 'key' },
      { id: 's2', label: 'Control centre compares to set point' },
      { id: 's3', label: 'Effector responds', emphasis: 'key' },
      { id: 's4', label: 'Negative feedback OPPOSES change → stability', emphasis: 'key' },
      { id: 's5', label: 'Positive feedback AMPLIFIES (labour, clotting, AP)' },
    ],
  },

  examFindings: [
    { sign: 'Insulin lowering high blood glucose', mechanism: 'Negative feedback (opposes the rise)', significance: 'key' },
    { sign: 'Oxytocin intensifying labour contractions', mechanism: 'Positive feedback (amplifies until birth)', significance: 'key' },
    { sign: 'Na⁺ influx driving the AP upstroke', mechanism: 'Positive feedback (regenerative depolarisation)', significance: 'supportive' },
    { sign: 'Shivering when cold', mechanism: 'Negative feedback restoring core temperature', significance: 'supportive' },
    { sign: 'Heart rate rising at exercise onset', mechanism: 'Feedforward (anticipatory) control', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Feedback that returns a variable to its set point', meaning: 'Negative feedback' },
    { clue: 'Feedback that reinforces and accelerates a change', meaning: 'Positive feedback' },
    { clue: 'The reference value a control centre defends', meaning: 'Set point' },
    { clue: 'Component that produces the corrective response', meaning: 'Effector' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Nearly every regulated system (glucose, BP, osmolality, hormones) is a negative-feedback loop; disease often = a broken loop (diabetes, hypertension). Fluid regulation depends on it — see [[body-fluid-compartments]] and osmoregulation ([[osmolarity-tonicity-cell-volume]]).' },
  ],

  mnemonics: [
    { hook: 'Negative feedback = "No, go back" (opposes); Positive = "Push it further" (amplifies)', expansion: ['Most control is negative'] },
    { hook: 'Positive feedback = "Labour, Lightning (AP), cLotting, LH surge"', expansion: ['Needs a stop signal'] },
  ],

  traps: [
    {
      questionCategory: 'Positive feedback and homeostasis',
      wrongInstinct: 'Positive feedback maintains homeostasis by opposing change',
      rightAnswer: 'NEGATIVE feedback maintains homeostasis (opposes change); POSITIVE feedback amplifies a change to drive a process to completion (e.g. labour, clotting)',
      why: 'Positive feedback is destabilising by design and is used for discrete "all-the-way" events, not for maintaining a steady state.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which is an example of POSITIVE feedback?',
      options: [
        { id: 'a', text: 'Insulin secretion lowering blood glucose' },
        { id: 'b', text: 'Baroreceptor reflex correcting blood pressure' },
        { id: 'c', text: 'Oxytocin-driven intensification of uterine contractions during labour' },
        { id: 'd', text: 'Sweating to lower body temperature' },
      ],
      answerId: 'c',
      explanation: 'Oxytocin release intensifies contractions, which release more oxytocin — a self-amplifying positive-feedback loop that ends with delivery. The others are negative-feedback loops.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'In a homeostatic control system, the structure that compares the sensed value to the set point and coordinates the response is the:',
      options: [
        { id: 'a', text: 'Effector' },
        { id: 'b', text: 'Sensor (receptor)' },
        { id: 'c', text: 'Control centre' },
        { id: 'd', text: 'Regulated variable' },
      ],
      answerId: 'c',
      explanation: 'The control centre (integrator) compares the sensor\'s input to the set point and directs the effector. The sensor detects the variable; the effector produces the response.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Negative feedback loop', svg: HOMEOSTASIS_FEEDBACK, caption: 'Sensor → control centre (set point) → effector opposes the change → variable restored. Negative feedback stabilises; positive amplifies.' },
  ],
};

export default homeostasisFeedbackControl;
