import type { Lecture } from '../../lib/types';

export const insulinSecretagogues: Lecture = {
  id: 'insulin-secretagogues',
  title: 'Insulin Secretagogues',
  system: 'endocrine',
  source: 'L12 — Drugs Used in Diabetes',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L12 Diabetes Drugs' },
    { kind: 'treatment', label: 'Sulfonylureas / meglitinides' },
    { kind: 'mechanism', label: 'Beta-cell KATP-channel closure' },
    { kind: 'exam', label: 'Hypoglycemia and weight gain' },
  ],

  highYield: [
    '**Sulfonylureas** (glimepiride, glipizide, glyburide) and **meglitinides** (nateglinide, repaglinide) stimulate endogenous insulin secretion.',
    'Both close **ATP-sensitive K+ channels on the pancreatic beta-cell membrane**, causing depolarization, calcium entry, and insulin-granule exocytosis.',
    'They require functioning beta cells, so they are used in **T2DM**, not as replacement for the absolute insulin deficiency of T1DM.',
    'The class-defining adverse effects are **hypoglycemia and weight gain**. Sulfonylureas can also cause sulfonamide-related hypersensitivity.',
    'Drug accumulation increases hypoglycemia risk. The lecture emphasizes caution with **hepatic impairment** (glyburide/glipizide) and **renal insufficiency** (especially glyburide).',
  ],

  mechanism: {
    title: 'KATP closure to insulin exocytosis',
    steps: [
      { id: 's1', label: 'Secretagogue binds beta-cell KATP-channel complex', emphasis: 'key' },
      { id: 's2', label: 'K+ channel closes -> membrane depolarization' },
      { id: 's3', label: 'Voltage-gated Ca2+ entry -> insulin release' },
      { id: 's4', label: 'Insulin excess -> hypoglycemia + weight gain', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Prolonged hypoglycemia in renal impairment', mechanism: 'Accumulation of a secretagogue, especially glyburide', significance: 'key' },
    { sign: 'Weight gain after adding a diabetes tablet', mechanism: 'Increased endogenous insulin from a sulfonylurea/meglitinide', significance: 'supportive' },
    { sign: 'No useful response in T1DM', mechanism: 'There are too few functioning beta cells to stimulate', significance: 'key' },
  ],

  investigations: [
    { clue: 'Renal and hepatic function before and during therapy', meaning: 'Estimate accumulation and hypoglycemia risk' },
    { clue: 'Glucose monitoring', meaning: 'Detect symptomatic and asymptomatic hypoglycemia' },
    { clue: 'Medication/meal history during a low glucose episode', meaning: 'Identify secretagogue-food mismatch' },
  ],

  treatment: [
    { logic: 'Use only when endogenous beta-cell function remains', detail: 'These drugs release insulin; they do not replace it.' },
    { logic: 'Choose cautiously in renal or hepatic impairment', detail: 'Avoid prolonged drug exposure and hypoglycemia.' },
    { logic: 'Coordinate dosing with meals', detail: 'Secretagogue action without carbohydrate intake increases hypoglycemia risk.' },
  ],

  mnemonics: [
    { hook: 'Secretagogues Shut K channels', expansion: ['Depolarize', 'Calcium in', 'Insulin out'] },
    { hook: 'More insulin = lower glucose, higher weight', expansion: ['Hypoglycemia + weight gain'] },
  ],

  traps: [
    {
      questionCategory: 'Why secretagogues do not treat T1DM',
      wrongInstinct: 'Any drug that increases insulin can replace injected insulin',
      rightAnswer: 'Secretagogues can only release insulin from functioning beta cells; T1DM has absolute beta-cell failure',
      why: 'The mechanism depends on a cellular reserve that T1DM lacks.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Sulfonylureas increase insulin secretion by which beta-cell action?',
      options: [
        { id: 'a', text: 'Closing ATP-sensitive K+ channels' },
        { id: 'b', text: 'Opening ATP-sensitive K+ channels' },
        { id: 'c', text: 'Inhibiting SGLT2' },
        { id: 'd', text: 'Activating PPAR-gamma' },
      ],
      answerId: 'a',
      explanation: 'KATP-channel closure depolarizes the beta cell, opens voltage-gated calcium channels, and triggers insulin exocytosis.',
      tests: 'mechanism',
    },
  ],
};

export default insulinSecretagogues;
