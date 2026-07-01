import type { Lecture } from '../../lib/types';
import { THYROID_MALIGNANCY } from '../../lib/figures';

export const thyroidNeoplasms: Lecture = {
  id: 'thyroid-neoplasms',
  title: 'Thyroid Neoplasms',
  system: 'endocrine',
  source: 'L6 — Thyroid & Parathyroid Pathology',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L6 Thyroid & Parathyroid' },
    { kind: 'disease', label: 'Thyroid cancer' },
    { kind: 'mechanism', label: 'Cell of origin' },
    { kind: 'exam', label: 'Papillary / medullary' },
  ],

  highYield: [
    '**Follicular adenoma = the most common BENIGN thyroid tumor** — a solitary encapsulated nodule; may be functional (**toxic adenoma**) or non-functional; driven by **TSH-receptor pathway (GNAS) somatic mutations**.',
    '**Papillary carcinoma = the most common thyroid CANCER (85%)** — from follicular cells. **Diagnosed by nuclear features on FNA: "Orphan-Annie eye" empty nuclei, nuclear grooves, pseudoinclusions, and psammoma bodies.** Risk factors: **ionizing radiation (before age 20), Hashimoto, FAP**. Presents as a **cold nodule**; spreads via **lymphatics**; **excellent prognosis**.',
    '**Follicular carcinoma (5–15%)** — also follicular cells; **defined by capsular and/or vascular (angio-) invasion** (so FNA cannot distinguish it from adenoma — the whole capsule must be examined). Spreads **hematogenously** (bone, lung).',
    '**Medullary carcinoma (5%)** arises from **parafollicular C cells → secretes calcitonin**; histology shows nests of polygonal/spindle cells with **amyloid stroma** (from calcitonin). May be **sporadic or part of MEN 2 (RET)**.',
    '**Anaplastic (undifferentiated) carcinoma (<5%)** — **elderly (>60), the most aggressive**, with rapid invasion/metastasis; histology shows **giant and spindle cells**. Poor prognosis.',
  ],

  mechanism: {
    title: 'Name the tumor by cell of origin and its signature feature',
    steps: [
      { id: 's1', label: 'Follicular cell + nuclear features → papillary (commonest)', emphasis: 'key' },
      { id: 's2', label: 'Follicular cell + capsular/vascular invasion → follicular ca' },
      { id: 's3', label: 'C cell + calcitonin + amyloid → medullary (MEN 2/RET)' },
      { id: 's4', label: 'Elderly + giant/spindle cells → anaplastic (lethal)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Cold thyroid nodule with Orphan-Annie nuclei + psammoma bodies', mechanism: 'Papillary carcinoma', significance: 'key' },
    { sign: 'Thyroid tumor with amyloid stroma + high calcitonin', mechanism: 'Medullary carcinoma (C cells)', significance: 'key' },
    { sign: 'Rapidly enlarging invasive neck mass in an elderly patient', mechanism: 'Anaplastic carcinoma', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'FNA cytology (nuclear features)', meaning: 'Diagnoses papillary; cannot diagnose follicular ca' },
    { clue: 'Serum calcitonin', meaning: 'Medullary carcinoma marker' },
    { clue: 'RET testing if medullary', meaning: 'MEN 2 association' },
  ],

  treatment: [
    { logic: 'Papillary/follicular: thyroidectomy ± radioiodine', detail: 'Generally good outcomes.' },
    { logic: 'Medullary: total thyroidectomy (radioiodine ineffective — C cells)', detail: 'Screen/treat MEN 2 components.' },
    { logic: 'Anaplastic: palliative/multimodal', detail: 'Rarely curable.' },
  ],

  mnemonics: [
    { hook: 'Papillary = Palpable nodes (lymphatic), Psammoma, "Orphan-Annie" nuclei — best px', expansion: ['Radiation, Hashimoto, FAP'] },
    { hook: 'Medullary = C cells → Calcitonin → aMyloid; think MEN 2/RET', expansion: ['Amyloid = calcitonin deposits'] },
  ],

  traps: [
    {
      questionCategory: 'Why FNA cannot diagnose follicular carcinoma',
      wrongInstinct: 'FNA can distinguish follicular adenoma from follicular carcinoma',
      rightAnswer: 'It cannot — the diagnosis of follicular carcinoma requires seeing CAPSULAR or VASCULAR invasion, which needs the whole capsule (surgical excision), not a cytology sample',
      why: 'Papillary carcinoma is defined by nuclear features (visible on FNA), but follicular carcinoma is defined by invasion, which FNA cannot assess.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A thyroid nodule biopsy shows nests of cells with an amyloid-containing stroma; serum calcitonin is elevated. From which cell does this tumor arise, and what syndrome should be considered?',
      options: [
        { id: 'a', text: 'Follicular cells; FAP' },
        { id: 'b', text: 'Parafollicular C cells; MEN 2' },
        { id: 'c', text: 'B lymphocytes; Hashimoto' },
        { id: 'd', text: 'Spindle cells; MEN 1' },
      ],
      answerId: 'b',
      explanation: 'Medullary thyroid carcinoma arises from parafollicular C cells, secretes calcitonin (deposited as amyloid), and may be part of MEN 2 (RET proto-oncogene).',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Thyroid carcinomas compared', svg: THYROID_MALIGNANCY, caption: 'Papillary (commonest, nuclear features), follicular (invasion), medullary (calcitonin/amyloid, MEN 2), anaplastic (elderly, lethal).' },
  ],
};

export default thyroidNeoplasms;
