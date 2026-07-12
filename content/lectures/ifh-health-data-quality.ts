import type { Lecture } from '../../lib/types';

export const ifhHealthDataQuality: Lecture = {
  id: 'ifh-health-data-quality',
  title: 'Health Data for Quality Improvement',
  system: 'community',
  source: 'L11 — Health Data for Quality Improvement',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Family Health' },
    { kind: 'lecture', label: 'L11 Health Data & QI' },
    { kind: 'mechanism', label: 'PDSA cycle' },
    { kind: 'investigation', label: 'Donabedian indicators' },
    { kind: 'treatment', label: 'Model for Improvement' },
  ],

  highYield: [
    '**Data has types and sources:** administrative/claims, **EHR/medical records**, disease **registries**, vital statistics, surveys, and surveillance — structured (coded) and unstructured (free text). Good QI starts from knowing where the numbers come from.',
    '**Donabedian classifies indicators into structure, process, and outcome.** **Structure** = resources (staff, equipment); **Process** = what is done (% screened); **Outcome** = the result (% with HbA1c controlled). Displaying them on a **dashboard** turns data into monitoring.',
    '**PDSA is the engine of continuous QI: Plan → Do → Study → Act.** Run **small, rapid tests of change**, study the data against the aim, then adopt, adapt, or abandon — and iterate. Small tests beat big-bang rollouts.',
    '**Frame improvement with the Model for Improvement:** three questions — *What are we trying to accomplish? How will we know a change is an improvement? What change can we make?* — plus PDSA cycles. It drives **data-driven decisions** in primary care instead of anecdote.',
    '**QI ≠ research.** **QI seeks local improvement** through iterative PDSA; **research seeks generalizable knowledge**. They differ in aim, method, and oversight — though QI still needs proper data governance, covered in [[ifh-health-data-governance]]. QI operationalises the systems thinking behind [[ifh-family-medicine-principles]].',
  ],

  mechanism: {
    title: 'Aim → indicators (Donabedian) → Plan-Do-Study-Act → iterate = continuous QI',
    steps: [
      { id: 's1', label: 'Set an aim — what are we trying to improve?', emphasis: 'key' },
      { id: 's2', label: 'Pick indicators (structure / process / outcome); show on a dashboard', emphasis: 'key' },
      { id: 's3', label: 'Plan a small change, then Do — test it on a small scale' },
      { id: 's4', label: 'Study the data vs the aim; Act — adopt, adapt, or abandon', emphasis: 'key' },
      { id: 's5', label: 'Iterate — repeated PDSA cycles = continuous quality improvement' },
    ],
  },

  examFindings: [
    { sign: 'Donabedian indicators are structure, process, or outcome', mechanism: 'Resources (structure) → what is done (process) → the result (outcome)', significance: 'key' },
    { sign: 'PDSA = Plan, Do, Study, Act — the iterative QI engine', mechanism: 'Small tests of change studied against the aim, then scaled or dropped', significance: 'key' },
    { sign: 'QI seeks local improvement; research seeks generalizable knowledge', mechanism: 'Different aims and oversight — do not treat a PDSA project as a research trial', significance: 'supportive' },
    { sign: 'Small, rapid tests of change beat big-bang rollouts', mechanism: 'They limit risk and generate fast, usable learning', significance: 'supportive' },
  ],

  investigations: [
    { clue: '"Percentage of diabetic patients with HbA1c below 7%"', meaning: 'An outcome indicator — it measures the end result of care' },
    { clue: '"Proportion of eligible patients screened for hypertension"', meaning: 'A process indicator — it measures what was done, not the result' },
    { clue: '"Number of nurses per 1,000 registered patients"', meaning: 'A structure indicator — it measures the resources in place' },
    { clue: 'A team tests a new recall letter on 10 patients, reviews it, then adjusts', meaning: 'One PDSA cycle — a small test of change before wider rollout' },
  ],

  treatment: [
    { logic: 'Use the Model for Improvement plus PDSA', detail: 'Answer the three questions (aim, measure, change) and run small PDSA cycles rather than attempting one large untested change.' },
    { logic: 'Drive decisions with indicators and dashboards', detail: 'Choose structure/process/outcome indicators, visualise them, and let the data — not anecdote — guide what to change next.' },
  ],

  mnemonics: [
    { hook: 'PDSA', expansion: ['Plan', 'Do', 'Study', 'Act — then repeat'] },
    { hook: 'Donabedian: S-P-O', expansion: ['Structure (resources)', 'Process (what is done)', 'Outcome (the result)'] },
  ],

  traps: [
    {
      questionCategory: 'QI vs research',
      wrongInstinct: 'A PDSA quality-improvement project is just research and must be judged by generalizability',
      rightAnswer: 'QI aims for local improvement through iterative PDSA; research aims for generalizable knowledge — different aims, methods, and oversight',
      why: 'Judging a local QI cycle by research standards misses its point; conversely, generalizable research needs formal design and ethics that a rapid PDSA does not.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'In the PDSA cycle for quality improvement, what does the sequence stand for?',
      options: [
        { id: 'a', text: 'Plan, Do, Study, Act' },
        { id: 'b', text: 'Predict, Design, Sample, Analyse' },
        { id: 'c', text: 'Prepare, Deliver, Score, Audit' },
        { id: 'd', text: 'Plan, Diagnose, Solve, Assess' },
      ],
      answerId: 'a',
      explanation: 'PDSA = Plan, Do, Study, Act — the iterative engine of continuous quality improvement, run as small tests of change.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'The indicator "percentage of eligible patients screened for hypertension" is which type of Donabedian measure?',
      options: [
        { id: 'a', text: 'Structure indicator' },
        { id: 'b', text: 'Process indicator' },
        { id: 'c', text: 'Outcome indicator' },
        { id: 'd', text: 'Balancing indicator' },
      ],
      answerId: 'b',
      explanation: 'It measures what was done (the screening activity), so it is a process indicator. Resources are structure; the resulting health status is outcome.',
      tests: 'investigation',
    },
  ],
};

export default ifhHealthDataQuality;
