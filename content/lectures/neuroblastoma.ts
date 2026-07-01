import type { Lecture } from '../../lib/types';

export const neuroblastoma: Lecture = {
  id: 'neuroblastoma',
  title: 'Neuroblastoma',
  system: 'endocrine',
  source: 'L3 — Adrenal Pathology & MEN',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L3 Adrenal Pathology' },
    { kind: 'disease', label: 'Neuroblastoma' },
    { kind: 'mechanism', label: 'Neural-crest tumor' },
    { kind: 'exam', label: 'Homer-Wright / VMA-HVA' },
  ],

  highYield: [
    '**Neuroblastoma = malignant tumor of primitive neural-crest cells** of the sympathetic nervous system. It is **the most common extracranial solid tumor of childhood** and the most common tumor of **infancy** (usually <2 y).',
    'Arises anywhere along sympathetic ganglia + adrenal medulla — **adrenal (~40%)** most common, then paravertebral abdomen and posterior mediastinum. Presents as a **large abdominal mass** that often **crosses the midline**, ± fever/weight loss.',
    '**Histology = a "small round blue cell" tumor** — small primitive cells with dark nuclei and scant cytoplasm, growing in sheets, with diagnostic **Homer-Wright rosettes** (cells around a central neuropil).',
    '**Catecholamine metabolites are elevated (~90%): urinary VMA and HVA**; also ↑ **neuron-specific enolase (NSE)** and LDH. Unlike pheochromocytoma, sustained hypertension is uncommon.',
    '**Metastatic signs**: bone pain, **periorbital metastases (proptosis + "raccoon eyes"/ecchymosis)**, and **"blueberry-muffin" skin lesions**. **N-myc (MYCN) amplification = poor prognosis**; paradoxically, some infant tumors spontaneously regress/mature.',
  ],

  mechanism: {
    title: 'Neural-crest cells → sympathetic small-round-blue-cell tumor',
    steps: [
      { id: 's1', label: 'Primitive neural-crest cells proliferate', emphasis: 'key' },
      { id: 's2', label: 'Adrenal medulla / sympathetic chain mass (crosses midline)' },
      { id: 's3', label: 'Secretes catecholamines → ↑VMA + HVA' },
      { id: 's4', label: 'MYCN amplification → aggressive disease', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Infant with a firm abdominal mass crossing the midline', mechanism: 'Adrenal/sympathetic neuroblastoma', significance: 'key' },
    { sign: 'Homer-Wright rosettes; small round blue cells', mechanism: 'Neuroblastic differentiation', significance: 'key' },
    { sign: 'Proptosis with periorbital ecchymosis ("raccoon eyes")', mechanism: 'Orbital metastasis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Urinary VMA and HVA (catecholamine metabolites)', meaning: 'Elevated in ~90%' },
    { clue: 'NSE and LDH', meaning: 'Tumor markers / burden' },
    { clue: 'MYCN (N-myc) amplification status', meaning: 'Key prognostic factor' },
  ],

  treatment: [
    { logic: 'Risk-stratified: surgery ± chemo ± radiation', detail: 'Low-risk infant tumors may regress.' },
    { logic: 'High-risk (MYCN-amplified): intensive multimodal therapy', detail: 'Worse prognosis.' },
  ],

  mnemonics: [
    { hook: 'Neuroblastoma: kid + abdominal mass crossing midline + VMA/HVA + Homer-Wright', expansion: ['N-myc = bad'] },
    { hook: 'Both pheo and neuroblastoma raise VMA — age/histology separate them', expansion: ['Pheo = adult HTN; neuroblastoma = infant mass'] },
  ],

  traps: [
    {
      questionCategory: 'Wilms tumor vs neuroblastoma',
      wrongInstinct: 'A child’s abdominal mass is a Wilms tumor',
      rightAnswer: 'Neuroblastoma typically CROSSES the midline, elevates VMA/HVA, and shows Homer-Wright rosettes; Wilms tumor is intrarenal, usually does not cross midline, and does not raise catecholamines',
      why: 'The midline-crossing and catecholamine metabolites distinguish the sympathetic neuroblastoma from a renal Wilms tumor.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An 18-month-old has a large abdominal mass crossing the midline, elevated urinary VMA and HVA, and biopsy showing small round blue cells forming Homer-Wright rosettes. The diagnosis is:',
      options: [
        { id: 'a', text: 'Wilms tumor' },
        { id: 'b', text: 'Neuroblastoma' },
        { id: 'c', text: 'Pheochromocytoma' },
        { id: 'd', text: 'Hepatoblastoma' },
      ],
      answerId: 'b',
      explanation: 'Neuroblastoma — the most common extracranial solid tumor of childhood — is a neural-crest small round blue cell tumor with Homer-Wright rosettes and elevated VMA/HVA; MYCN amplification predicts poor prognosis.',
      tests: 'exam',
    },
  ],
};

export default neuroblastoma;
