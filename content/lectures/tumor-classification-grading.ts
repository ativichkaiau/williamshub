import type { Lecture } from '../../lib/types';

export const tumorClassificationGrading: Lecture = {
  id: 'tumor-classification-grading',
  title: 'MSK Tumor Classification & Grading',
  system: 'msk',
  source: 'L8 — Musculoskeletal Tumors',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'MSK' },
    { kind: 'lecture', label: 'L8 Musculoskeletal Tumors' },
    { kind: 'disease', label: 'Sarcoma basics' },
    { kind: 'mechanism', label: 'Nomenclature & grade' },
    { kind: 'exam', label: 'Benign vs malignant' },
  ],

  highYield: [
    '**Nomenclature** = cell of origin + behavior: **benign = “-oma”** (lipoma, osteoma, chondroma); **malignant = “-sarcoma”** (liposarcoma, osteosarcoma, leiomyosarcoma). Prefixes: **lipo-** fat, **osteo-** bone, **chondro-** cartilage, **rhabdomyo-** skeletal muscle, **leiomyo-** smooth muscle, **angio-** vessel, **schwanno-** nerve sheath.',
    '**Behavior categories**: **benign** (circumscribed, cured by excision, no metastasis), **intermediate** (locally aggressive/recurs, rarely metastasizes — e.g. desmoid fibromatosis), **malignant** (destructive, recurs, metastasizes).',
    'Soft-tissue tumors are far more often **benign (superficial, <5 cm)**; sarcomas favor the **extremities**. Bone: **metastasis is the most common malignant bone tumor overall**.',
    '**Grade drives prognosis** (metastatic risk). **Soft-tissue sarcomas: FNCLCC grade (1–3)** = differentiation + mitotic count + necrosis. Bone tumors: **Enneking/MSTS** or AJCC staging.',
    'Poor-prognosis features: **older age, large size, deep location, high grade, metastasis (nodal/distant), advanced stage**.',
  ],

  mechanism: {
    title: 'Name → cell of origin & behavior; grade → risk',
    steps: [
      { id: 's1', label: '“-oma” benign vs “-sarcoma” malignant', emphasis: 'key' },
      { id: 's2', label: 'Prefix gives the tissue of origin' },
      { id: 's3', label: 'Behavior: benign / intermediate / malignant' },
      { id: 's4', label: 'FNCLCC grade (differentiation + mitoses + necrosis)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Locally aggressive tumor that recurs but rarely spreads', mechanism: 'Intermediate (e.g. desmoid fibromatosis)', significance: 'key' },
    { sign: 'High mitotic count + necrosis on biopsy', mechanism: 'High FNCLCC grade → worse prognosis', significance: 'key' },
    { sign: 'Deep, large extremity mass', mechanism: 'Soft-tissue sarcoma concern', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Histology + immunostains (cell of origin)', meaning: 'Tumor type' },
    { clue: 'FNCLCC grade / Enneking stage', meaning: 'Metastatic risk & management' },
    { clue: 'Imaging + biopsy', meaning: 'Depth, size, extension' },
  ],

  treatment: [
    { logic: 'Wide surgical excision is the backbone', detail: 'Adjuvant chemo/RT for high grade.' },
    { logic: 'Grade guides adjuvant therapy', detail: 'High-grade sarcomas need systemic treatment.' },
  ],

  mnemonics: [
    { hook: '-oma = benign; -sarcoma = malignant (mesenchymal)', expansion: ['Prefix = tissue of origin'] },
    { hook: 'FNCLCC grade = Differentiation + Mitoses + Necrosis', expansion: ['Most important prognostic factor'] },
  ],

  traps: [
    {
      questionCategory: 'Intermediate tumor behavior',
      wrongInstinct: 'A locally aggressive, recurring tumor must be malignant and will metastasize',
      rightAnswer: 'Intermediate tumors (e.g. desmoid fibromatosis) are locally aggressive and recur but rarely or never metastasize — distinct from malignant sarcomas',
      why: 'Local aggressiveness alone does not equal malignancy; the intermediate category captures tumors that invade/recur locally without significant metastatic potential.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'For soft-tissue sarcomas, which grading system — based on tumor differentiation, mitotic count, and necrosis — is the most important predictor of prognosis and metastatic risk?',
      options: [
        { id: 'a', text: 'Gleason score' },
        { id: 'b', text: 'FNCLCC grade' },
        { id: 'c', text: 'Breslow thickness' },
        { id: 'd', text: 'TNM only' },
      ],
      answerId: 'b',
      explanation: 'The FNCLCC system grades soft-tissue sarcomas (grade 1–3) using tumor differentiation, mitotic count, and percentage necrosis — the key determinant of prognosis and need for adjuvant therapy.',
      tests: 'exam',
    },
  ],
};

export default tumorClassificationGrading;
