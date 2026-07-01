import type { Lecture } from '../../lib/types';
import { RAIU_PATTERNS } from '../../lib/figures';

export const hyperthyroidismGraves: Lecture = {
  id: 'hyperthyroidism-graves',
  title: 'Hyperthyroidism & Graves Disease',
  system: 'endocrine',
  source: 'L6 — Thyroid & Parathyroid Pathology',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L6 Thyroid & Parathyroid' },
    { kind: 'disease', label: 'Thyrotoxicosis' },
    { kind: 'mechanism', label: 'TSH-receptor autoantibody' },
    { kind: 'exam', label: 'Graves triad / RAIU' },
  ],

  highYield: [
    '**Hyperthyroidism = thyroid hyperfunction (↑free T3/T4)**; **thyrotoxicosis** is the resulting hypermetabolic state. Signs: **heat intolerance, weight loss despite increased appetite, tremor, anxiety/insomnia, diarrhea**, warm moist skin.',
    '**Cardiac features are the earliest and most consistent**: tachycardia, palpitations, and (classically) **atrial fibrillation** and high-output heart failure. Also proximal myopathy and **osteoporosis** from bone resorption.',
    '**Graves disease = the most common cause of endogenous hyperthyroidism** (women 20–40, F:M ≈ 10:1). Cause: **autoantibodies against the TSH receptor** that stimulate hormone synthesis (genes CTLA4, PTPN22, HLA-DR3).',
    '**Graves triad**: (1) hyperthyroidism with **diffuse goiter**, (2) **infiltrative ophthalmopathy → exophthalmos** (GAG/hyaluronic acid + T-cell infiltrate behind the orbit), and (3) **infiltrative dermopathy → pretibial myxedema** (non-pitting). Histology: **tall columnar follicular cells** with **scalloped ("scalloping") colloid**.',
    '**Radioactive iodine uptake (RAIU) localizes the cause**: **diffusely increased = Graves**; **focal increase in a solitary nodule = toxic adenoma**; **decreased uptake = thyroiditis** (or exogenous hormone). Labs: **low TSH + high free T4/T3**.',
  ],

  mechanism: {
    title: 'TSH-receptor antibody → autonomous hormone excess',
    steps: [
      { id: 's1', label: 'Anti-TSH-receptor Ab stimulates the gland', emphasis: 'key' },
      { id: 's2', label: '↑T3/T4, ↓TSH → hypermetabolic thyrotoxicosis' },
      { id: 's3', label: 'Diffuse goiter + exophthalmos + pretibial myxedema' },
      { id: 's4', label: 'Cardiac: tachycardia → atrial fibrillation', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Exophthalmos + diffuse goiter + pretibial myxedema', mechanism: 'Graves triad (TSH-receptor antibody)', significance: 'key' },
    { sign: 'New atrial fibrillation with weight loss and tremor', mechanism: 'Thyrotoxic cardiac effect', significance: 'key' },
    { sign: 'Lid lag and staring gaze', mechanism: 'Sympathetic overstimulation of the superior tarsal muscle', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'TSH (low) + free T4/T3 (high)', meaning: 'Confirms thyrotoxicosis' },
    { clue: 'TSH-receptor antibody (TRAb)', meaning: 'Confirms Graves disease' },
    { clue: 'RAIU pattern (diffuse vs nodular vs low)', meaning: 'Graves vs toxic adenoma vs thyroiditis' },
  ],

  treatment: [
    { logic: 'Antithyroid drugs (methimazole/PTU)', detail: 'PTU preferred in first-trimester pregnancy/thyroid storm.' },
    { logic: 'Radioiodine ablation or surgery', detail: 'Definitive options.' },
    { logic: 'β-blocker for symptom control', detail: 'Controls tremor, tachycardia, AF.' },
  ],

  mnemonics: [
    { hook: 'Graves = diffuse goiter + exophthalmos + pretibial myxedema (TSH-R Ab)', expansion: ['Tall columnar, scalloped colloid'] },
    { hook: 'RAIU: Diffuse = Graves, Focal = toxic adenoma, Down = thyroiditis', expansion: ['Low TSH, high T4'] },
  ],

  traps: [
    {
      questionCategory: 'Distinguishing hyperthyroid causes',
      wrongInstinct: 'All hyperthyroidism has increased radioiodine uptake',
      rightAnswer: 'Thyroiditis (and exogenous thyroid hormone) causes hyperthyroidism with LOW uptake — preformed hormone leaks out; Graves and toxic adenoma have high uptake',
      why: 'The RAIU pattern separates gland-driven overproduction (high uptake) from hormone leakage/exogenous sources (low uptake).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 30-year-old woman has weight loss, palpitations, a diffuse goiter, exophthalmos, and pretibial non-pitting edema. TSH is low and radioiodine uptake is diffusely increased. What is the mechanism?',
      options: [
        { id: 'a', text: 'Autoantibody against the TSH receptor (Graves disease)' },
        { id: 'b', text: 'Autonomous nodule secreting T4' },
        { id: 'c', text: 'Viral destruction of follicles' },
        { id: 'd', text: 'Iodine deficiency' },
      ],
      answerId: 'a',
      explanation: 'Graves disease is caused by stimulating anti-TSH-receptor antibodies, producing diffuse goiter, ophthalmopathy, dermopathy, and diffusely increased radioiodine uptake with suppressed TSH.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Radioiodine uptake patterns', svg: RAIU_PATTERNS, caption: 'Diffuse uptake = Graves; focal hot nodule = toxic adenoma; low uptake = thyroiditis or exogenous hormone.' },
  ],
};

export default hyperthyroidismGraves;
