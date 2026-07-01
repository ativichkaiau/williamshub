import type { Lecture } from '../../lib/types';

export const thyroiditis: Lecture = {
  id: 'thyroiditis',
  title: 'Thyroiditis',
  system: 'endocrine',
  source: 'L6 — Thyroid & Parathyroid Pathology',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L6 Thyroid & Parathyroid' },
    { kind: 'disease', label: 'Thyroiditis' },
    { kind: 'mechanism', label: 'Autoimmune / viral / fibrotic' },
    { kind: 'exam', label: 'Hashimoto / De Quervain' },
  ],

  highYield: [
    '**Hashimoto (chronic lymphocytic) thyroiditis = the most common cause of hypothyroidism** in iodine-sufficient areas (age 45–65, F:M ≈ 10–20:1). Autoimmune loss of self-tolerance with **anti-thyroid-peroxidase (anti-TPO), anti-thyroglobulin, and anti-microsomal antibodies** (genes CTLA4, PTPN22).',
    '**Hashimoto pathology**: painless diffuse enlargement, **marked lymphocytic infiltrate with germinal centers** and **Hürthle (oncocytic) cell change**. Usually hypothyroid, sometimes an early **"Hashitoxicosis"** (follicle rupture). **Increased risk of thyroid B-cell lymphoma (marginal zone) and papillary carcinoma**, and other autoimmune diseases.',
    '**Subacute granulomatous (De Quervain) thyroiditis** = a **PAINFUL** thyroid triggered by a **viral URI** (age 40–50). Course: transient **hyperthyroid → hypothyroid → euthyroid**. Histology: **non-caseating granulomas with multinucleated giant cells** engulfing colloid.',
    '**Subacute lymphocytic (painless/postpartum) thyroiditis** = a variant of autoimmune thyroiditis (middle-aged women/**postpartum**) with anti-TPO antibodies → mild hyperthyroidism + small goiter, self-limited.',
    '**Riedel thyroiditis** = rare extensive **fibrosis** of the thyroid and neck (part of IgG4/systemic fibrosis) → a **hard, fixed mass that mimics carcinoma**.',
  ],

  mechanism: {
    title: 'Sort by mechanism, pain, and hormone course',
    steps: [
      { id: 's1', label: 'Hashimoto: autoimmune → painless → hypothyroid', emphasis: 'key' },
      { id: 's2', label: 'De Quervain: post-viral → PAINFUL → hyper→hypo→euthyroid' },
      { id: 's3', label: 'Painless/postpartum: autoimmune, self-limited' },
      { id: 's4', label: 'Riedel: rock-hard fibrotic mass mimics cancer', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Painless goiter + hypothyroidism + anti-TPO antibodies', mechanism: 'Hashimoto thyroiditis', significance: 'key' },
    { sign: 'Tender/painful thyroid after a viral URI', mechanism: 'Subacute granulomatous (De Quervain)', significance: 'key' },
    { sign: 'Germinal centers + Hürthle cells on histology', mechanism: 'Hashimoto thyroiditis', significance: 'supportive' },
    { sign: 'Hard fixed thyroid mass simulating cancer', mechanism: 'Riedel (fibrosing) thyroiditis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Anti-TPO / anti-thyroglobulin antibodies', meaning: 'Autoimmune (Hashimoto / painless) thyroiditis' },
    { clue: 'Pain + recent URI + elevated ESR', meaning: 'De Quervain thyroiditis' },
    { clue: 'Low radioiodine uptake in the hyperthyroid phase', meaning: 'Hormone leak, not overproduction' },
  ],

  treatment: [
    { logic: 'Hashimoto: levothyroxine for hypothyroidism', detail: 'Lifelong replacement.' },
    { logic: 'De Quervain: NSAIDs/steroids for pain; usually self-limited', detail: 'Recovers to euthyroid.' },
    { logic: 'Riedel: steroids/tamoxifen, surgery for compression', detail: 'IgG4-related.' },
  ],

  mnemonics: [
    { hook: 'Hashimoto = Hypothyroid, Hürthle cells, germinal centers, anti-TPO', expansion: ['Risk: lymphoma + papillary ca'] },
    { hook: 'De Quervain = painful, post-viral, Granulomas (giant cells)', expansion: ['Hyper → hypo → euthyroid'] },
  ],

  traps: [
    {
      questionCategory: 'Painful vs painless thyroiditis',
      wrongInstinct: 'All thyroiditis is painless and autoimmune',
      rightAnswer: 'Subacute granulomatous (De Quervain) thyroiditis is PAINFUL and post-viral with granulomas; Hashimoto and the postpartum/painless variant are painless and autoimmune',
      why: 'Pain plus a preceding viral illness and granulomatous histology is the De Quervain signature, distinct from the painless autoimmune types.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 50-year-old woman has painless goiter, fatigue, and hypothyroidism; biopsy shows dense lymphocytic infiltrate with germinal centers and Hürthle cell change. Which antibody is most characteristic?',
      options: [
        { id: 'a', text: 'TSH-receptor antibody' },
        { id: 'b', text: 'Anti-thyroid peroxidase (anti-TPO)' },
        { id: 'c', text: 'Anti-mitochondrial antibody' },
        { id: 'd', text: 'Anti-centromere antibody' },
      ],
      answerId: 'b',
      explanation: 'Hashimoto thyroiditis — the most common cause of hypothyroidism in iodine-sufficient areas — shows lymphocytic infiltrate with germinal centers and Hürthle cells, with anti-TPO (and anti-thyroglobulin) antibodies.',
      tests: 'exam',
    },
  ],
};

export default thyroiditis;
