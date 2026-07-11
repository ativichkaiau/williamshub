import type { Lecture } from '../../lib/types';

export const hrp2BreastCarcinomaTypes: Lecture = {
  id: 'hrp2-breast-carcinoma-types',
  title: 'Breast Carcinoma: Types & Receptors',
  system: 'repro',
  source: 'L9 — Pathology of the Breast',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'L9 Breast' },
    { kind: 'disease', label: 'DCIS · invasive carcinoma' },
    { kind: 'mechanism', label: 'In-situ → invasive' },
    { kind: 'investigation', label: 'ER/PR/HER2' },
  ],

  highYield: [
    '**In-situ:** **DCIS** (malignant ductal cells within the basement membrane; **microcalcifications**; **comedo** type has central necrosis) → progresses to invasive if untreated. **LCIS** is a **risk marker for bilateral** cancer, not a direct precursor.',
    '**Invasive ductal (NST)** is commonest, forming a **hard, irregular, fixed** mass ± skin/nipple retraction. **Invasive lobular** grows in **single-file** with **E-cadherin loss** → often **bilateral/multifocal** and harder to detect.',
    '**Paget disease of the nipple** = eczematous, crusting nipple from DCIS spreading into the epidermis — always look for an underlying carcinoma. **Inflammatory carcinoma** (peau d’orange, dermal lymphatic invasion) is aggressive.',
    '**The molecular classes guide therapy & prognosis:** **luminal (ER/PR+)** → endocrine therapy, best prognosis; **HER2-enriched** → trastuzumab; **triple-negative (ER−/PR−/HER2−)** → chemotherapy, worst prognosis, common in **BRCA1**. Spread first to **axillary nodes** (main prognostic factor).',
  ],

  mechanism: {
    title: 'Normal → in-situ → invasive → metastatic; typed by receptors',
    steps: [
      { id: 's1', label: 'DCIS/LCIS: malignant cells within basement membrane', emphasis: 'key' },
      { id: 's2', label: 'Invasion through basement membrane', emphasis: 'danger' },
      { id: 's3', label: 'Ductal (mass) vs lobular (single-file, E-cadherin loss)', emphasis: 'key' },
      { id: 's4', label: 'ER/PR/HER2 status defines therapy + prognosis', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Microcalcifications on mammography → DCIS', mechanism: 'Necrotic debris calcifies', significance: 'key' },
    { sign: 'Single-file, E-cadherin loss → invasive lobular', mechanism: 'Adhesion molecule loss', significance: 'key' },
    { sign: 'Eczematous nipple → Paget disease', mechanism: 'DCIS in nipple epidermis', significance: 'supportive' },
    { sign: 'Axillary node status = main prognostic factor', mechanism: 'First site of spread', significance: 'key' },
  ],

  investigations: [
    { clue: 'Clustered microcalcifications on screening mammography', meaning: 'DCIS → biopsy' },
    { clue: 'ER+/PR+/HER2− invasive carcinoma', meaning: 'Luminal type → endocrine therapy, good prognosis' },
    { clue: 'ER−/PR−/HER2− carcinoma in a BRCA1 carrier', meaning: 'Triple-negative → chemotherapy, poor prognosis' },
    { clue: 'Red, swollen breast with peau d’orange', meaning: 'Inflammatory carcinoma (dermal lymphatic invasion)' },
  ],

  treatment: [
    { logic: 'Receptor-directed systemic therapy', detail: 'ER/PR+ → tamoxifen/aromatase inhibitor; HER2+ → trastuzumab; triple-negative → chemotherapy. Surgery ± radiotherapy for local control; assess axillary nodes.' },
  ],

  mnemonics: [
    { hook: 'Ductal = mass; Lobular = single-file (E-cadherin lost, bilateral)', expansion: ['Luminal → endocrine; HER2 → trastuzumab; triple-neg → chemo (BRCA1)'] },
  ],

  traps: [
    {
      questionCategory: 'LCIS significance',
      wrongInstinct: 'Lobular carcinoma in situ is a direct precursor requiring wide excision like DCIS',
      rightAnswer: 'LCIS is mainly a risk marker for future (often bilateral) invasive cancer, not a localised precursor',
      why: 'Unlike DCIS, LCIS signals generalised increased risk in both breasts rather than a lesion to excise with margins.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An invasive breast carcinoma shows cells infiltrating in single-file lines with loss of E-cadherin. This is:',
      options: [
        { id: 'a', text: 'Invasive ductal carcinoma (NST)' },
        { id: 'b', text: 'Invasive lobular carcinoma' },
        { id: 'c', text: 'Medullary carcinoma' },
        { id: 'd', text: 'Ductal carcinoma in situ' },
      ],
      answerId: 'b',
      explanation: 'Loss of E-cadherin produces the discohesive single-file growth of invasive lobular carcinoma, which is frequently bilateral/multifocal.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'The single most important prognostic factor in operable invasive breast cancer is:',
      options: [
        { id: 'a', text: 'Tumour grade' },
        { id: 'b', text: 'Axillary lymph node status' },
        { id: 'c', text: 'Patient age' },
        { id: 'd', text: 'Tumour laterality' },
      ],
      answerId: 'b',
      explanation: 'Axillary lymph node involvement (the first site of spread) is the strongest prognostic factor and guides staging and adjuvant therapy.',
      tests: 'exam',
    },
  ],
};

export default hrp2BreastCarcinomaTypes;
