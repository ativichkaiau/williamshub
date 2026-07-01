import type { Lecture } from '../../lib/types';

export const craniopharyngioma: Lecture = {
  id: 'craniopharyngioma',
  title: 'Craniopharyngioma & Suprasellar Tumors',
  system: 'endocrine',
  source: 'L1 — Pituitary & Hypothalamus Pathology',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L1 Pituitary Pathology' },
    { kind: 'disease', label: 'Craniopharyngioma' },
    { kind: 'mechanism', label: 'Rathke-pouch remnant' },
    { kind: 'exam', label: 'Wet keratin / calcification' },
  ],

  highYield: [
    '**Craniopharyngioma** arises from **vestigial remnants of Rathke pouch** — a benign, slow-growing **suprasellar** tumor (1–5% of intracranial tumors) with a **bimodal age distribution**: children 5–15 y and adults ≥65 y.',
    'Presents with **headache and visual disturbance** (chiasm compression → bitemporal hemianopsia); children may show **growth retardation and GH deficiency** from pituitary hypofunction.',
    '**Adamantinomatous** variant (children): cystic/calcified; nests of stratified squamous epithelium with **peripheral palisading**, a stellate reticulum, and the diagnostic **"wet keratin"** (compact lamellar keratin); **dystrophic calcification** and **cholesterol clefts** are common.',
    '**Papillary** variant (adults): solid sheets + papillae of well-differentiated **non-keratinizing** squamous epithelium — **NO palisading, NO wet keratin, NO calcification.**',
    'Gross: **cystic tumor** often containing dark "machinery-oil" fluid rich in cholesterol. Calcification on imaging in a suprasellar mass in a child strongly suggests the adamantinomatous type.',
  ],

  mechanism: {
    title: 'Rathke-pouch remnant → suprasellar squamous tumor',
    steps: [
      { id: 's1', label: 'Remnant of Rathke pouch persists', emphasis: 'key' },
      { id: 's2', label: 'Grows in suprasellar region → compresses chiasm & pituitary' },
      { id: 's3', label: 'Adamantinomatous: wet keratin + calcification (child)' },
      { id: 's4', label: 'Papillary: non-keratinizing squamous, no calcification (adult)' },
    ],
  },

  examFindings: [
    { sign: 'Child with short stature, headache, and bitemporal hemianopsia + calcified suprasellar cyst', mechanism: 'Adamantinomatous craniopharyngioma', significance: 'key' },
    { sign: '"Wet keratin" and cholesterol clefts on histology', mechanism: 'Adamantinomatous variant', significance: 'key' },
    { sign: 'Machinery-oil cyst fluid', mechanism: 'Cholesterol-rich craniopharyngioma cyst', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'MRI/CT: suprasellar cystic mass with calcification', meaning: 'Craniopharyngioma (esp. adamantinomatous)' },
    { clue: 'Pituitary hormone panel + growth curve', meaning: 'Hypopituitarism / GH deficiency' },
    { clue: 'Histology: wet keratin, palisading vs papillae', meaning: 'Adamantinomatous vs papillary subtype' },
  ],

  treatment: [
    { logic: 'Surgical resection ± radiation', detail: 'Slow-growing but can recur.' },
    { logic: 'Hormone replacement for hypopituitarism', detail: 'Including GH in affected children.' },
  ],

  mnemonics: [
    { hook: 'Craniopharyngioma = Rathke remnant, calcified, "wet keratin", machinery-oil cyst', expansion: ['Bimodal age: kids + elderly'] },
  ],

  traps: [
    {
      questionCategory: 'Suprasellar mass in a child',
      wrongInstinct: 'A sellar/suprasellar tumor in a child must be a pituitary adenoma',
      rightAnswer: 'A calcified cystic suprasellar mass in a child is a craniopharyngioma (Rathke-pouch remnant); pituitary adenomas are rare in children and usually not calcified',
      why: 'Calcification + cystic change + childhood age points to craniopharyngioma, not adenoma.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 9-year-old has headaches, poor growth, and bitemporal vision loss. Imaging shows a calcified cystic suprasellar mass; histology shows squamous nests with peripheral palisading and compact lamellar "wet" keratin. The diagnosis is:',
      options: [
        { id: 'a', text: 'Prolactinoma' },
        { id: 'b', text: 'Adamantinomatous craniopharyngioma' },
        { id: 'c', text: 'Pituitary carcinoma' },
        { id: 'd', text: 'Meningioma' },
      ],
      answerId: 'b',
      explanation: 'Craniopharyngioma arises from Rathke-pouch remnants; the adamantinomatous variant (children) shows peripheral palisading, wet keratin, cholesterol clefts, and calcification, and compresses the chiasm and pituitary.',
      tests: 'exam',
    },
  ],
};

export default craniopharyngioma;
