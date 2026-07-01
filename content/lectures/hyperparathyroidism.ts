import type { Lecture } from '../../lib/types';

export const hyperparathyroidism: Lecture = {
  id: 'hyperparathyroidism',
  title: 'Hyperparathyroidism',
  system: 'endocrine',
  source: 'L6 — Thyroid & Parathyroid Pathology',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L6 Thyroid & Parathyroid' },
    { kind: 'disease', label: 'Hyperparathyroidism' },
    { kind: 'mechanism', label: 'PTH excess → hypercalcemia' },
    { kind: 'exam', label: 'Stones, bones, groans, moans' },
  ],

  highYield: [
    '**Primary hyperparathyroidism = autonomous PTH excess → hypercalcemia.** Most common cause = a **sporadic solitary parathyroid adenoma (~85–95%)** (molecular: **cyclin D1** overexpression, **MEN1** mutations); then **primary (chief-cell) hyperplasia of all four glands** (sporadic or MEN1); **carcinoma is rare (~1%)**.',
    '**Classic clinical tetrad — "stones, bones, abdominal groans, and psychic moans"**: kidney **stones**, **bone** disease, GI/abdominal symptoms (constipation, peptic ulcer, pancreatitis), and neuropsychiatric changes — from **hypercalcemia**.',
    '**Bone morphology**: osteoporosis (↑osteoclast/**dissecting osteitis**), **brown tumors** (microfractures → hemorrhage → macrophages + reparative fibrous tissue), and severe disease → **osteitis fibrosa cystica (von Recklinghausen disease of bone)**.',
    '**PTH-induced hypercalcemia → calcification**: **nephrolithiasis** and **nephrocalcinosis**, plus **metastatic calcification** of stomach, lungs, myocardium, and vessels.',
    '**Secondary hyperparathyroidism** = compensatory PTH rise to **hypocalcemia (chronic renal failure)**. **PTH-related peptide (PTHrP)** causes **paraneoplastic (humoral) hypercalcemia** — squamous lung, breast, head/neck cancers, and multiple myeloma — with LOW actual PTH.',
  ],

  mechanism: {
    title: 'Excess PTH → hypercalcemia → multi-organ effects',
    steps: [
      { id: 's1', label: 'Adenoma (commonest) → autonomous PTH', emphasis: 'key' },
      { id: 's2', label: '↑PTH → ↑Ca²⁺ (bone resorption + renal Ca reabsorption)' },
      { id: 's3', label: 'Stones + bones + groans + psychic moans' },
      { id: 's4', label: 'Severe: osteitis fibrosa cystica / brown tumors', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Hypercalcemia + high PTH + kidney stones + bone pain', mechanism: 'Primary hyperparathyroidism (adenoma)', significance: 'key' },
    { sign: 'Brown tumor / osteitis fibrosa cystica on imaging', mechanism: 'PTH-driven bone resorption', significance: 'key' },
    { sign: 'Hypercalcemia with LOW PTH in a cancer patient', mechanism: 'PTHrP-mediated (humoral) hypercalcemia of malignancy', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Serum calcium + PTH together', meaning: 'High Ca + high PTH = primary; high Ca + low PTH = PTHrP/malignancy' },
    { clue: 'Renal function + phosphate', meaning: 'Distinguish secondary (renal failure)' },
    { clue: 'Sestamibi scan / neck ultrasound', meaning: 'Localize the adenoma' },
  ],

  treatment: [
    { logic: 'Primary (adenoma): parathyroidectomy', detail: 'Curative for a single adenoma.' },
    { logic: 'Acute hypercalcemia: IV saline + then bisphosphonate/calcitonin', detail: 'Hydrate first.' },
    { logic: 'Secondary (renal): phosphate binders, vit D, cinacalcet', detail: 'Treat the underlying hypocalcemia driver.' },
  ],

  mnemonics: [
    { hook: 'Hyperparathyroid = Stones, Bones, abdominal Groans, psychic Moans', expansion: ['All from hypercalcemia'] },
    { hook: 'High Ca + high PTH = primary; high Ca + LOW PTH = malignancy (PTHrP)', expansion: ['Check them together'] },
  ],

  traps: [
    {
      questionCategory: 'Hypercalcemia of malignancy vs primary hyperparathyroidism',
      wrongInstinct: 'Any hypercalcemia means overactive parathyroid glands',
      rightAnswer: 'Malignancy causes hypercalcemia via PTHrP with SUPPRESSED (low) PTH; primary hyperparathyroidism has HIGH PTH — you must measure PTH to tell them apart',
      why: 'PTHrP mimics PTH at the receptor but is a different molecule, so measured PTH is low — the opposite of primary disease.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient has hypercalcemia, kidney stones, bone pain, and constipation. Serum PTH is elevated. What is the most likely underlying lesion?',
      options: [
        { id: 'a', text: 'Squamous cell lung carcinoma secreting PTHrP' },
        { id: 'b', text: 'Solitary parathyroid adenoma' },
        { id: 'c', text: 'Vitamin D deficiency' },
        { id: 'd', text: 'Chronic renal failure' },
      ],
      answerId: 'b',
      explanation: 'Hypercalcemia with an elevated PTH and the "stones, bones, groans, and psychic moans" picture is primary hyperparathyroidism, most often a solitary parathyroid adenoma. Malignancy (PTHrP) would suppress PTH.',
      tests: 'exam',
    },
  ],
};

export default hyperparathyroidism;
