import type { Lecture } from '../../lib/types';

export const hypopituitarism: Lecture = {
  id: 'hypopituitarism',
  title: 'Hypopituitarism',
  system: 'endocrine',
  source: 'L1 — Pituitary & Hypothalamus Pathology',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L1 Pituitary Pathology' },
    { kind: 'disease', label: 'Hypopituitarism' },
    { kind: 'mechanism', label: 'Loss of anterior hormones' },
    { kind: 'exam', label: 'Sheehan / apoplexy' },
  ],

  highYield: [
    '**Hypopituitarism = ↓ anterior pituitary hormone secretion.** Symptomatic loss usually needs destruction of **~75%+** of the gland. Major causes: **traumatic brain injury / subarachnoid hemorrhage (most common)**, tumors/mass lesions, surgery or radiation, and **pituitary apoplexy**.',
    '**Sheehan syndrome = postpartum ischemic necrosis of the anterior pituitary.** The gland enlarges in pregnancy (physiologic hyperplasia) → relatively hypoxic; obstetric hemorrhage/shock → infarction. **Earliest clue: failure to lactate**, then amenorrhea and loss of pubic/axillary hair.',
    '**Empty sella syndrome**: CSF herniates through a defective diaphragma sella and flattens the gland (*primary*), or the gland is lost after surgery (*secondary*). **Rathke cleft cyst** = a benign cyst of Rathke-pouch remnants.',
    '**Pituitary apoplexy** = sudden hemorrhage/infarction of the pituitary → acute excruciating headache + visual and cranial-nerve deficits ± cardiovascular collapse — an emergency.',
    'The posterior pituitary is spared here; posterior deficiency causes **diabetes insipidus** (separate topic). Deficiencies tend to appear in the order **GH → gonadotropins → TSH → ACTH** (ACTH/cortisol loss is the life-threatening one).',
  ],

  mechanism: {
    title: 'Destroy the anterior pituitary → target-gland hormones fall',
    steps: [
      { id: 's1', label: 'Insult: TBI/SAH, tumor, surgery/RT, infarction', emphasis: 'key' },
      { id: 's2', label: 'Sheehan: postpartum hemorrhage → gland infarcts' },
      { id: 's3', label: 'Lose GH → gonadotropins → TSH → ACTH' },
      { id: 's4', label: 'ACTH/cortisol loss → adrenal crisis risk', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'New mother who cannot breastfeed, then amenorrhea + loss of body hair', mechanism: 'Sheehan syndrome', significance: 'key' },
    { sign: 'Incidental flattened "empty" sella with intact function', mechanism: 'Primary empty sella (CSF herniation)', significance: 'supportive' },
    { sign: 'Fatigue, cold intolerance, hypotension, hyponatremia after head injury', mechanism: 'Panhypopituitarism (secondary hypothyroid + hypoadrenal)', significance: 'key' },
  ],

  investigations: [
    { clue: 'Low target hormone with LOW/inappropriately-normal pituitary hormone', meaning: 'Central (secondary) deficiency' },
    { clue: '8 AM cortisol + ACTH (or stimulation test)', meaning: 'Secondary adrenal insufficiency — treat first' },
    { clue: 'MRI pituitary', meaning: 'Mass, empty sella, Rathke cyst, hemorrhage' },
  ],

  treatment: [
    { logic: 'Replace hormones — GLUCOCORTICOID before levothyroxine', detail: 'Starting thyroxine first can precipitate adrenal crisis.' },
    { logic: 'Then thyroxine, sex steroids, GH as needed', detail: 'Tailored replacement.' },
    { logic: 'Apoplexy: stress-dose steroids + surgery', detail: 'Emergency.' },
  ],

  mnemonics: [
    { hook: 'Sheehan: the breast that will not fill is the first clue', expansion: ['Postpartum → no lactation → amenorrhea → hypothyroid/hypoadrenal'] },
    { hook: 'Replace steroid BEFORE thyroxine', expansion: ['Avoid precipitating adrenal crisis'] },
  ],

  traps: [
    {
      questionCategory: 'Order of hormone replacement in panhypopituitarism',
      wrongInstinct: 'Start levothyroxine for the low T4 right away',
      rightAnswer: 'Give glucocorticoid first; thyroid hormone raises metabolic clearance of cortisol and can trigger an adrenal crisis if cortisol is not replaced',
      why: 'A classic sequencing trap — the low-cortisol state must be covered before thyroid replacement is started.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A woman who had a severe postpartum hemorrhage cannot breastfeed and later develops amenorrhea, fatigue, and loss of axillary/pubic hair. What is the diagnosis?',
      options: [
        { id: 'a', text: 'Prolactinoma' },
        { id: 'b', text: 'Sheehan syndrome' },
        { id: 'c', text: 'Primary hypothyroidism' },
        { id: 'd', text: 'SIADH' },
      ],
      answerId: 'b',
      explanation: 'Sheehan syndrome is postpartum ischemic necrosis of the anterior pituitary; failure of lactation is the earliest sign, followed by loss of other anterior hormones.',
      tests: 'exam',
    },
  ],
};

export default hypopituitarism;
