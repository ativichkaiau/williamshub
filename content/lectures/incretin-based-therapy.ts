import type { Lecture } from '../../lib/types';

export const incretinBasedTherapy: Lecture = {
  id: 'incretin-based-therapy',
  title: 'Incretin-based Therapy',
  system: 'endocrine',
  source: 'L12 — Drugs Used in Diabetes',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L12 Diabetes Drugs' },
    { kind: 'treatment', label: 'GLP-1 RA / DPP-4 inhibitor' },
    { kind: 'mechanism', label: 'Glucose-dependent incretin effect' },
    { kind: 'exam', label: 'Weight and adverse effects' },
  ],

  highYield: [
    '**GLP-1 receptor agonists** (dulaglutide, exenatide, liraglutide, semaglutide) amplify **glucose-dependent insulin secretion**, reduce glucagon, slow gastric emptying, and increase satiety. **Tirzepatide** activates both GLP-1 and GIP pathways.',
    'GLP-1-based therapy lowers post-meal glucose and produces substantial **weight loss**. The lecture prioritizes it in T2DM with **atherosclerotic cardiovascular risk** and in **MASLD/MASH**.',
    'Common GLP-1 RA adverse effects are **nausea, vomiting, and diarrhea**; pancreatitis is an important concern. Avoid/caution with a personal or family history of **medullary thyroid carcinoma or MEN2**.',
    '**DPP-4 inhibitors** (alogliptin, linagliptin, saxagliptin, sitagliptin) prevent endogenous GLP-1 degradation, producing glucose-dependent increases in insulin and reductions in glucagon.',
    'DPP-4 inhibitors have **intermediate glucose-lowering efficacy and neutral weight effect**. Important concerns in the lecture are pancreatitis and severe joint pain. Do not expect the weight loss produced by a GLP-1 RA.',
  ],

  mechanism: {
    title: 'Enhance the meal-triggered incretin signal',
    steps: [
      { id: 's1', label: 'Food -> endogenous GLP-1/GIP signal' },
      { id: 's2', label: 'GLP-1 RA activates receptor or DPP-4i prevents GLP-1 breakdown', emphasis: 'key' },
      { id: 's3', label: 'Glucose-dependent insulin up + glucagon down' },
      { id: 's4', label: 'GLP-1 RA: satiety + slower gastric emptying -> weight loss' },
    ],
  },

  examFindings: [
    { sign: 'Nausea with marked weight loss after a weekly injection', mechanism: 'GLP-1 receptor agonist effect', significance: 'key' },
    { sign: 'Severe persistent abdominal pain', mechanism: 'Possible pancreatitis on incretin-based therapy', significance: 'key' },
    { sign: 'Weight-neutral oral incretin therapy', mechanism: 'DPP-4 inhibitor rather than GLP-1 receptor agonist', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Weight and HbA1c', meaning: 'Track the two major therapeutic outcomes' },
    { clue: 'History of pancreatitis', meaning: 'Identify a key caution before therapy' },
    { clue: 'Personal/family history of medullary thyroid carcinoma or MEN2', meaning: 'Screen before GLP-1 receptor agonist use' },
  ],

  treatment: [
    { logic: 'Prioritize a GLP-1 RA when weight loss, ASCVD risk, or MASLD/MASH matters', detail: 'Match the class to the patient-level outcome.' },
    { logic: 'Use a DPP-4 inhibitor when a weight-neutral oral incretin option is desired', detail: 'Expect more modest glucose lowering.' },
    { logic: 'Escalate GLP-1 therapy gradually', detail: 'GI tolerability often determines adherence.' },
  ],

  mnemonics: [
    { hook: 'GLP-1: Glucose-dependent insulin, Less glucagon, Pounds fall', expansion: ['Plus slower gastric emptying'] },
    { hook: '-glutide injects the signal; -gliptin protects it', expansion: ['GLP-1 RA', 'DPP-4 inhibitor'] },
  ],

  traps: [
    {
      questionCategory: 'GLP-1 RA versus DPP-4 inhibitor',
      wrongInstinct: 'Both incretin classes produce the same weight loss',
      rightAnswer: 'GLP-1 receptor agonists produce meaningful weight loss; DPP-4 inhibitors are generally weight neutral',
      why: 'Direct pharmacologic receptor agonism is stronger than preservation of endogenous GLP-1.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which diabetes drug class increases glucose-dependent insulin secretion, slows gastric emptying, and commonly causes weight loss?',
      options: [
        { id: 'a', text: 'GLP-1 receptor agonists' },
        { id: 'b', text: 'Sulfonylureas' },
        { id: 'c', text: 'Thiazolidinediones' },
        { id: 'd', text: 'Alpha-glucosidase inhibitors' },
      ],
      answerId: 'a',
      explanation: 'GLP-1 receptor agonists combine glucose-dependent islet effects with satiety and delayed gastric emptying, producing weight loss.',
      tests: 'mechanism',
    },
  ],
};

export default incretinBasedTherapy;
