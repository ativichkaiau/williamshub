import type { Lecture } from '../../lib/types';
import { HYPOTHALAMIC_PITUITARY_AXIS, VISUAL_FIELD_DEFECTS } from '../../lib/figures';

export const pituitaryAdenomasHyperpituitarism: Lecture = {
  id: 'pituitary-adenomas-hyperpituitarism',
  title: 'Pituitary Adenomas & Hyperpituitarism',
  system: 'endocrine',
  source: 'L1 — Pituitary & Hypothalamus Pathology',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L1 Pituitary Pathology' },
    { kind: 'disease', label: 'Pituitary adenoma' },
    { kind: 'mechanism', label: 'Hormone excess + mass effect' },
    { kind: 'exam', label: 'Prolactinoma / acromegaly' },
  ],

  highYield: [
    '**Pituitary adenoma = the most common cause of hyperpituitarism** — a benign anterior-pituitary tumor. **Micro**adenoma <1 cm, **macro**adenoma >1 cm (produces mass effect). Classified as **functional** (hormone excess) or **non-functional**; some cosecrete **GH + PRL**.',
    '**Lactotroph (prolactinoma) = the MOST COMMON functional adenoma** → hyperprolactinemia: **amenorrhea, galactorrhea, loss of libido, infertility**. PRL shown in secretory granules by IHC. First-line treatment is a **dopamine agonist**, not surgery.',
    '**Somatotroph (GH) adenoma = 2nd most common** → **gigantism** if before growth-plate fusion (children), **acromegaly** if after epiphyseal closure (adults): acral/soft-tissue/organ enlargement, prognathism, plus DM, HTN, carpal tunnel.',
    '**Mass effect**: compression of the decussating fibers at the **optic chiasm → bitemporal hemianopsia**; ↑ICP; **pituitary apoplexy** (acute hemorrhage into an adenoma) = sudden severe headache + visual/CN deficit = **neurosurgical emergency**.',
    '**Corticotroph (ACTH) adenoma** → Cushing disease (usually a basophilic microadenoma) — covered with the adrenal/Cushing lectures. Gonadotroph and thyrotroph adenomas are rare; ~25–30% of adenomas are non-functioning (present with mass effect).',
  ],

  mechanism: {
    title: 'Adenoma cell type → the hormone syndrome (or silent mass)',
    steps: [
      { id: 's1', label: 'Lactotroph → PRL → amenorrhea/galactorrhea (MC functional)', emphasis: 'key' },
      { id: 's2', label: 'Somatotroph → GH → gigantism (child) / acromegaly (adult)' },
      { id: 's3', label: 'Corticotroph → ACTH → Cushing disease' },
      { id: 's4', label: 'Macroadenoma → optic chiasm → bitemporal hemianopsia', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Young woman: amenorrhea + galactorrhea + ↑prolactin', mechanism: 'Prolactinoma (lactotroph adenoma)', significance: 'key' },
    { sign: 'Coarse features, enlarged hands/feet, prognathism, ring/shoe no longer fits', mechanism: 'Acromegaly (adult GH excess)', significance: 'key' },
    { sign: 'Bitemporal hemianopsia', mechanism: 'Chiasmal compression by a macroadenoma', significance: 'key' },
    { sign: 'Sudden thunderclap headache + ophthalmoplegia in a known adenoma', mechanism: 'Pituitary apoplexy — emergency', significance: 'key' },
  ],

  investigations: [
    { clue: 'Serum prolactin (very high, >200 with a macroadenoma)', meaning: 'Prolactinoma vs stalk effect' },
    { clue: 'IGF-1 + oral glucose GH suppression (GH not suppressed)', meaning: 'Confirms acromegaly' },
    { clue: 'MRI pituitary + formal visual fields', meaning: 'Size, chiasm compression' },
    { clue: 'Immunohistochemistry for the secreted hormone', meaning: 'Classifies the adenoma cell type' },
  ],

  treatment: [
    { logic: 'Prolactinoma: dopamine agonist FIRST (cabergoline/bromocriptine)', detail: 'Medical therapy shrinks it — surgery is not first-line.' },
    { logic: 'GH adenoma: transsphenoidal surgery ± octreotide/pegvisomant', detail: 'Somatostatin analog or GH-receptor antagonist.' },
    { logic: 'Apoplexy: steroids + urgent decompression', detail: 'Neurosurgical emergency.' },
  ],

  mnemonics: [
    { hook: 'Acromegaly = A-B-C-D-E-F', expansion: ['Arthralgia', 'BP↑', 'Carpal tunnel', 'Diabetes', 'Enlarged organs', 'visual Field defect'] },
    { hook: 'Prolactinoma is the MC functional adenoma — treat with a dopamine agonist', expansion: ['Dopamine normally inhibits PRL'] },
  ],

  traps: [
    {
      questionCategory: 'First-line treatment of a prolactinoma',
      wrongInstinct: 'It is a tumor, so resect it surgically first',
      rightAnswer: 'A dopamine agonist (cabergoline/bromocriptine) is first-line — it lowers prolactin AND shrinks the tumor; surgery is reserved for failure/apoplexy',
      why: 'Lactotrophs are dopamine-responsive, so unlike most tumors the prolactinoma is managed medically before surgery.',
    },
    {
      questionCategory: 'Visual field pattern',
      wrongInstinct: 'A pituitary mass causes homonymous hemianopsia',
      rightAnswer: 'It causes BItemporal hemianopsia — the chiasm crossing fibers (nasal retina) are compressed',
      why: 'Homonymous defects come from retrochiasmal (tract/radiation) lesions; the chiasm gives the classic bitemporal (tunnel) pattern.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 28-year-old woman has 8 months of amenorrhea and milky nipple discharge. Prolactin is markedly elevated and MRI shows a 6-mm pituitary lesion. What is the best initial treatment?',
      options: [
        { id: 'a', text: 'Transsphenoidal resection' },
        { id: 'b', text: 'Cabergoline (dopamine agonist)' },
        { id: 'c', text: 'Octreotide' },
        { id: 'd', text: 'Radiotherapy' },
      ],
      answerId: 'b',
      explanation: 'A prolactinoma — the most common functional pituitary adenoma — is treated first with a dopamine agonist (cabergoline/bromocriptine), which both normalizes prolactin and shrinks the tumor. Surgery is reserved for drug failure or apoplexy.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A 45-year-old man has enlarging hands, a protruding jaw, and new hypertension and diabetes. Which single test best confirms the diagnosis?',
      options: [
        { id: 'a', text: 'Random growth hormone level' },
        { id: 'b', text: 'IGF-1 with an oral glucose GH-suppression test' },
        { id: 'c', text: 'Serum prolactin' },
        { id: 'd', text: 'Dexamethasone suppression test' },
      ],
      answerId: 'b',
      explanation: 'Acromegaly is confirmed by an elevated IGF-1 plus failure of GH to suppress after an oral glucose load. A single random GH is unreliable because of pulsatile secretion.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Hypothalamic–pituitary axes', svg: HYPOTHALAMIC_PITUITARY_AXIS, caption: 'Each cell type → its hormone syndrome. Prolactin is uniquely under dopaminergic inhibition; mass effect hits the optic chiasm.' },
    { title: 'Mass effect on the visual pathway', svg: VISUAL_FIELD_DEFECTS, caption: 'A pituitary macroadenoma compresses the optic chiasm → bitemporal hemianopsia.' },
  ],
};

export default pituitaryAdenomasHyperpituitarism;
