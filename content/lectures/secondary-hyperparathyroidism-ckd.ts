import type { Lecture } from '../../lib/types';

export const secondaryHyperparathyroidismCkd: Lecture = {
  id: 'secondary-hyperparathyroidism-ckd',
  title: 'Secondary Hyperparathyroidism in CKD',
  system: 'endocrine',
  source: 'L9 — Drugs Used in Parathyroid Diseases',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L9 Parathyroid Drugs' },
    { kind: 'disease', label: 'Secondary hyperparathyroidism' },
    { kind: 'mechanism', label: 'Phosphate retention + low calcitriol' },
    { kind: 'exam', label: 'High PTH, low/normal calcium' },
  ],

  highYield: [
    '**Secondary hyperparathyroidism** is adaptive parathyroid hyperplasia and hyperfunction in response to chronic hypocalcemic stimuli, especially vitamin D deficiency, calcium deficiency, phosphate disorders, and **chronic kidney disease (CKD)**.',
    'CKD causes **phosphate retention** and impaired renal **calcitriol production**. High phosphate plus reduced intestinal calcium absorption lowers ionized calcium, driving sustained PTH release and gland hyperplasia.',
    'The typical CKD pattern is **high PTH, calcium normal or low, and phosphate high or normal**. Contrast primary hyperparathyroidism: high PTH, **high calcium, low phosphate**.',
    'Treatment begins with **phosphate control**: dietary restriction and phosphate-binding agents. This removes an upstream stimulus to PTH secretion.',
    '**Calcitriol** suppresses PTH but must be monitored for hypercalcemia. **Cinacalcet** sensitizes the calcium-sensing receptor and lowers PTH; dialysis-dependent patients may need calcitriol, calcium support/dialysate adjustment, aluminum-free phosphate binders, and cinacalcet.',
  ],

  mechanism: {
    title: 'CKD mineral disturbance to parathyroid hyperplasia',
    steps: [
      { id: 's1', label: 'CKD -> phosphate retention + reduced calcitriol', emphasis: 'key' },
      { id: 's2', label: 'Hyperphosphatemia + reduced gut calcium absorption' },
      { id: 's3', label: 'Low/normal calcium -> chronic PTH stimulation' },
      { id: 's4', label: 'Parathyroid hyperplasia + renal bone disease', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'High PTH with low/normal calcium in CKD', mechanism: 'Appropriate secondary response to mineral imbalance', significance: 'key' },
    { sign: 'Bone pain or fracture in advanced CKD', mechanism: 'CKD-mineral and bone disorder with sustained PTH excess', significance: 'supportive' },
    { sign: 'Hypercalcemia after calcitriol escalation', mechanism: 'Vitamin D increases intestinal calcium absorption', significance: 'key' },
  ],

  investigations: [
    { clue: 'Serial calcium, phosphate, PTH, and alkaline phosphatase', meaning: 'Define severity and follow treatment' },
    { clue: 'Kidney function and dialysis status', meaning: 'Determine the driver and therapeutic context' },
    { clue: 'Calcium after calcitriol initiation or escalation', meaning: 'Detect treatment-induced hypercalcemia' },
  ],

  treatment: [
    { logic: 'Lower phosphate intake and use phosphate binders', detail: 'Phosphate control is foundational.' },
    { logic: 'Use calcitriol selectively to suppress PTH', detail: 'Monitor calcium closely.' },
    { logic: 'Use cinacalcet when additional PTH suppression is needed', detail: 'It raises CaSR sensitivity to extracellular calcium.' },
  ],

  mnemonics: [
    { hook: 'CKD: Phosphate up, Calcitriol down, PTH up', expansion: ['Calcium trends low or normal'] },
    { hook: 'Primary has high calcium; secondary is responding to low/normal calcium', expansion: ['Use calcium to separate the patterns'] },
  ],

  traps: [
    {
      questionCategory: 'Primary versus secondary hyperparathyroidism',
      wrongInstinct: 'A high PTH level always means primary hyperparathyroidism',
      rightAnswer: 'In CKD, high PTH with low/normal calcium and high/normal phosphate indicates secondary hyperparathyroidism',
      why: 'PTH must be interpreted with calcium, phosphate, and renal function.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which laboratory pattern best fits CKD-associated secondary hyperparathyroidism?',
      options: [
        { id: 'a', text: 'High PTH, high calcium, low phosphate' },
        { id: 'b', text: 'High PTH, low/normal calcium, high/normal phosphate' },
        { id: 'c', text: 'Low PTH, low calcium, high phosphate' },
        { id: 'd', text: 'Low PTH, high calcium, low phosphate' },
      ],
      answerId: 'b',
      explanation: 'CKD retains phosphate and reduces calcitriol, keeping calcium low/normal and stimulating secondary PTH elevation.',
      tests: 'investigation',
    },
  ],
};

export default secondaryHyperparathyroidismCkd;
