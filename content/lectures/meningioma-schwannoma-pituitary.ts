import type { Lecture } from '../../lib/types';

export const meningiomaSchwannomaPituitary: Lecture = {
  id: 'meningioma-schwannoma-pituitary',
  title: 'Meningioma, Schwannoma & Pituitary Adenoma',
  system: 'neuro',
  source: 'L10 — CNS Neoplasms',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L10 CNS Neoplasms' },
    { kind: 'disease', label: 'Extra-axial tumors' },
    { kind: 'mechanism', label: 'Compression' },
    { kind: 'exam', label: 'Psammoma / Antoni' },
  ],

  highYield: [
    '**Meningioma = most common primary brain tumor overall**; arises from **arachnoid cap (meningothelial) cells**, is **extra-axial and dura-based**, slow-growing, and **compresses** (rather than invades) brain. Adults, **female 2:1**; risks = prior **radiation** and **NF2**.',
    'Meningioma histology: **whorls and psammoma bodies**; most are **WHO grade 1 (benign, surgically curable)**.',
    '**Schwannoma** = benign Schwann-cell tumor of nerve roots; the **vestibular schwannoma (acoustic neuroma) at the cerebellopontine angle (CN VIII)** causes SNHL, tinnitus, imbalance. **Bilateral vestibular schwannomas = NF2.**',
    'Schwannoma histology: **Antoni A** (dense, palisading — **Verocay bodies**) and **Antoni B** (loose, myxoid); S100-positive, encapsulated, pushes (doesn’t invade) the nerve.',
    '**Pituitary adenoma (PitNET)**: functioning → endocrine syndromes (**GH+prolactin cosecretion common**); nonfunctioning → mass effect (**bitemporal hemianopia**, hypopituitarism). Adults 35–60 y.',
  ],

  mechanism: {
    title: 'Extra-axial masses harm by compressing adjacent structures',
    steps: [
      { id: 's1', label: 'Meningioma: dura-based, compresses cortex', emphasis: 'key' },
      { id: 's2', label: 'Schwannoma: CN VIII at CPA → hearing/balance loss' },
      { id: 's3', label: 'Pituitary adenoma: presses optic chiasm / secretes hormone' },
      { id: 's4', label: 'Bilateral vestibular schwannoma → NF2', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Slow-growing dura-based mass with a “tail” on MRI', mechanism: 'Meningioma', significance: 'key' },
    { sign: 'Unilateral SNHL + tinnitus + imbalance', mechanism: 'Vestibular schwannoma (CN VIII, CPA)', significance: 'key' },
    { sign: 'Bitemporal hemianopia', mechanism: 'Pituitary adenoma compressing the chiasm', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'MRI (extra-axial dural mass; CPA mass; sellar mass)', meaning: 'Localizes the extra-axial tumor' },
    { clue: 'Histology (psammoma bodies; Antoni A/B, Verocay; S100)', meaning: 'Meningioma vs schwannoma' },
    { clue: 'Pituitary hormone panel + visual fields', meaning: 'Functioning vs mass-effect adenoma' },
  ],

  treatment: [
    { logic: 'Surgical resection (curative for grade 1 meningioma/schwannoma)', detail: 'Radiosurgery for some vestibular schwannomas.' },
    { logic: 'Prolactinoma: dopamine agonist (cabergoline) first', detail: 'Medical therapy before surgery.' },
  ],

  mnemonics: [
    { hook: 'Meningioma = dura-based, Psammoma bodies, female, most common primary', expansion: ['Compresses, doesn’t invade'] },
    { hook: 'Schwannoma = Antoni A/B + Verocay; bilateral CN VIII = NF2', expansion: ['S100+, acoustic neuroma'] },
  ],

  traps: [
    {
      questionCategory: 'Bilateral acoustic neuromas',
      wrongInstinct: 'Bilateral vestibular schwannomas are just sporadic tumors',
      rightAnswer: 'Bilateral vestibular schwannomas are essentially diagnostic of neurofibromatosis type 2 (NF2)',
      why: 'Sporadic schwannomas are unilateral; bilateral CN VIII schwannomas signal the NF2 tumor-suppressor syndrome and warrant genetic evaluation.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A dura-based, well-demarcated extra-axial mass in a middle-aged woman shows cellular whorls and psammoma bodies on histology. The diagnosis is:',
      options: [
        { id: 'a', text: 'Glioblastoma' },
        { id: 'b', text: 'Meningioma' },
        { id: 'c', text: 'Schwannoma' },
        { id: 'd', text: 'Metastasis' },
      ],
      answerId: 'b',
      explanation: 'A dura-based extra-axial tumor with whorls and psammoma bodies, more common in women, is a meningioma — the most common primary brain tumor, usually benign (WHO grade 1).',
      tests: 'exam',
    },
  ],
};

export default meningiomaSchwannomaPituitary;
