import type { Lecture } from '../../lib/types';

export const hypothyroidismGoiter: Lecture = {
  id: 'hypothyroidism-goiter',
  title: 'Hypothyroidism & Goiter',
  system: 'endocrine',
  source: 'L6 — Thyroid & Parathyroid Pathology',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L6 Thyroid & Parathyroid' },
    { kind: 'disease', label: 'Hypothyroidism / goiter' },
    { kind: 'mechanism', label: '↓Hormone → ↑TSH hyperplasia' },
    { kind: 'exam', label: 'Cretinism / colloid goiter' },
  ],

  highYield: [
    '**Hypothyroidism = deranged production of thyroid hormone.** In infancy/childhood it causes **cretinism** (impaired brain development, short stature); in the older child/adult it causes **myxedema**.',
    '**Myxedema features (everything slows)**: fatigue, cold intolerance, weight gain, slow speech/mentation, **constipation** (↓sympathetic), cool pale skin (↓peripheral flow), reduced cardiac output → dyspnea/exercise intolerance.',
    '**Diffuse nontoxic (simple/colloid) goiter = enlargement WITHOUT nodularity**, often **endemic** from **iodine deficiency** or **goitrogens** (cabbage, cauliflower, Brussels sprouts, turnips, cassava). Impaired hormone synthesis → **compensatory ↑TSH → follicular hypertrophy/hyperplasia** → goiter; most patients remain **euthyroid**.',
    '**Multinodular goiter arises from a long-standing simple goiter** → causes **mass effects** (compression, dysphagia). Patients are usually euthyroid/subclinically hyperthyroid; **malignancy risk is low (<5%, not zero)** and a **dominant nodule can mimic a neoplasm**.',
    'Most common cause of hypothyroidism overall is **Hashimoto thyroiditis** (autoimmune) — detailed in the thyroiditis module; iodine deficiency dominates in endemic regions.',
  ],

  mechanism: {
    title: 'Low hormone → ↑TSH drives compensatory goiter',
    steps: [
      { id: 's1', label: '↓Thyroid hormone synthesis (iodine lack / autoimmune)', emphasis: 'key' },
      { id: 's2', label: '↑TSH → follicular hypertrophy & hyperplasia → goiter' },
      { id: 's3', label: 'Usually euthyroid; severe cases → hypothyroid' },
      { id: 's4', label: 'Long-standing → multinodular goiter + mass effect', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Cold intolerance, weight gain, constipation, slow mentation', mechanism: 'Myxedema (adult hypothyroidism)', significance: 'key' },
    { sign: 'Diffusely enlarged thyroid in an iodine-poor region, euthyroid', mechanism: 'Simple (colloid) goiter — compensatory TSH', significance: 'key' },
    { sign: 'Nodular thyroid causing dysphagia/compression', mechanism: 'Multinodular goiter mass effect', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'TSH (high) + free T4 (low)', meaning: 'Primary hypothyroidism' },
    { clue: 'Dietary iodine / goitrogen history', meaning: 'Endemic colloid goiter' },
    { clue: 'Ultrasound of a dominant nodule', meaning: 'Exclude neoplasm within a multinodular goiter' },
  ],

  treatment: [
    { logic: 'Levothyroxine replacement', detail: 'Titrate to normalize TSH.' },
    { logic: 'Iodine supplementation / avoid goitrogens (endemic)', detail: 'Prevents/limits simple goiter.' },
    { logic: 'Surgery for compressive multinodular goiter', detail: 'Or a suspicious dominant nodule.' },
  ],

  mnemonics: [
    { hook: 'Hypothyroid = everything SLOW; cretinism (infant) vs myxedema (adult)', expansion: ['Cold, constipated, weight gain'] },
    { hook: 'Colloid goiter = iodine lack → ↑TSH → hyperplasia (usually euthyroid)', expansion: ['Goitrogens: cabbage family, cassava'] },
  ],

  traps: [
    {
      questionCategory: 'Thyroid status in a simple goiter',
      wrongInstinct: 'A big goiter must mean the patient is hypothyroid',
      rightAnswer: 'Most simple/colloid goiters are EUTHYROID — the compensatory TSH-driven hyperplasia maintains adequate hormone output; hypothyroidism appears only if the underlying defect is severe',
      why: 'The goiter itself is the compensation, so gland size does not equal functional status.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A euthyroid patient from an iodine-deficient region has a diffusely enlarged thyroid without nodules. What is the mechanism of the enlargement?',
      options: [
        { id: 'a', text: 'TSH-receptor stimulating antibody' },
        { id: 'b', text: 'Compensatory TSH rise causing follicular hypertrophy and hyperplasia' },
        { id: 'c', text: 'Viral follicular destruction' },
        { id: 'd', text: 'Malignant transformation' },
      ],
      answerId: 'b',
      explanation: 'Iodine deficiency impairs hormone synthesis; the compensatory rise in TSH drives follicular hypertrophy and hyperplasia (diffuse nontoxic/colloid goiter), usually keeping the patient euthyroid.',
      tests: 'exam',
    },
  ],
};

export default hypothyroidismGoiter;
