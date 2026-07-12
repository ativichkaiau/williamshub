import type { Lecture } from '../../lib/types';

export const hhlLeukocyteQuantitative: Lecture = {
  id: 'hhl-leukocyte-quantitative',
  title: 'Neutrophilia, Neutropenia & Leukemoid Reaction',
  system: 'heme',
  source: 'L4 — White Blood Cells: Morphology & Non-neoplastic',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L4 WBC non-neoplastic' },
    { kind: 'disease', label: 'Neutropenia · leukemoid' },
    { kind: 'investigation', label: 'LAP · ANC' },
    { kind: 'treatment', label: 'Febrile neutropenia' },
  ],

  highYield: [
    '**Neutrophilia** (>7.5 × 10⁹/L): **bacterial infection, tissue necrosis, corticosteroids** (demargination + reduced egress), **stress/adrenaline** (demargination).',
    '**Febrile neutropenia** (fever + ANC <0.5 × 10⁹/L) is a **medical emergency** → take cultures then give **empirical broad-spectrum antibiotics within 1 hour**.',
    '**Lymphocytosis** → **viral infection, pertussis** (marked mature lymphocytes); **eosinophilia = NAACP** (Neoplasm, Allergy/Asthma, Addison, Connective-tissue, Parasites).',
    '**Leukemoid reaction vs CML**: both give very high neutrophils, but **leukocyte alkaline phosphatase (LAP) is HIGH in a leukemoid (reactive) reaction and LOW in CML** (Philadelphia chromosome/BCR-ABL, basophilia).',
  ],

  mechanism: {
    title: 'Quantify the WBC lines → reaction vs emergency vs malignancy',
    steps: [
      { id: 's1', label: 'Neutrophilia: infection, steroids, stress/demargination', emphasis: 'key' },
      { id: 's2', label: 'Neutropenia <0.5 + fever = febrile neutropenia → empirical antibiotics within 1 h', emphasis: 'danger' },
      { id: 's3', label: 'Lymphocytosis (viral, pertussis); eosinophilia (NAACP)' },
      { id: 's4', label: 'Leukemoid reaction (LAP high) vs CML (LAP low, Ph+)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Neutrophilia after corticosteroids', mechanism: 'Demargination + reduced tissue egress', significance: 'supportive' },
    { sign: 'Fever with ANC <0.5 × 10⁹/L', mechanism: 'Febrile neutropenia — high risk of overwhelming sepsis', significance: 'key' },
    { sign: 'Marked mature lymphocytosis in a coughing child', mechanism: 'Pertussis/viral infection', significance: 'supportive' },
    { sign: 'Eosinophilia', mechanism: 'NAACP — allergy, parasites, Addison, connective-tissue disease, neoplasia', significance: 'key' },
    { sign: 'WBC >50 × 10⁹/L with left shift but HIGH LAP', mechanism: 'Leukemoid (reactive) reaction, not leukaemia', significance: 'key' },
  ],

  investigations: [
    { clue: 'Very high neutrophilia (>50 × 10⁹/L) — check the LAP score', meaning: 'HIGH LAP = leukemoid reaction; LOW LAP = CML' },
    { clue: 'Neutropenia + fever', meaning: 'Blood cultures then immediate empirical broad-spectrum antibiotics — do not wait' },
    { clue: 'Eosinophilia in a Thai patient', meaning: 'Screen for helminths (stool O&P) among the NAACP causes' },
    { clue: 'Basophilia + neutrophilia + splenomegaly', meaning: 'Suspect CML (BCR-ABL) rather than a reaction' },
  ],

  treatment: [
    { logic: 'Febrile neutropenia is an emergency', detail: 'Fever + ANC <0.5 × 10⁹/L → cultures, then empirical broad-spectrum antibiotics within 1 hour; do not delay for results.' },
    { logic: 'Distinguish reactive from malignant', detail: 'LAP and BCR-ABL separate a leukemoid reaction (treat the infection) from CML (treat the leukaemia).' },
  ],

  mnemonics: [
    { hook: 'Eosinophilia = NAACP', expansion: ['Neoplasia (Hodgkin, CML)', 'Allergy/Asthma', 'Addison\'s disease', 'Connective-tissue disease/vasculitis', 'Parasites (helminths)'] },
    { hook: 'LAP: Leukemoid is Loaded (high LAP); CML is Low', expansion: ['Leukemoid = reactive, high LAP', 'CML = low LAP, Philadelphia chromosome (BCR-ABL), basophilia', 'Both produce very high neutrophil counts'] },
  ],

  traps: [
    {
      questionCategory: 'Leukemoid reaction vs CML',
      wrongInstinct: 'A very high neutrophil count with a left shift must be leukaemia (CML)',
      rightAnswer: 'A leukemoid reaction is reactive — LAP is HIGH; CML has LOW LAP with BCR-ABL and basophilia',
      why: 'Leukocyte alkaline phosphatase is high in reactive (leukemoid) neutrophilia and low in CML — the classic discriminator.',
    },
    {
      questionCategory: 'Neutropenic fever',
      wrongInstinct: 'Wait for culture results before starting antibiotics in a febrile neutropenic patient',
      rightAnswer: 'Febrile neutropenia is an emergency — take cultures, then give empirical broad-spectrum antibiotics within an hour',
      why: 'Neutropenic patients can deteriorate to septic shock rapidly; empirical antibiotics cannot wait for microbiology.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient has a white-cell count of 80 × 10⁹/L with a marked neutrophil left shift; the leukocyte alkaline phosphatase (LAP) score is high. This favours:',
      options: [
        { id: 'a', text: 'Chronic myeloid leukaemia' },
        { id: 'b', text: 'A leukemoid (reactive) reaction' },
        { id: 'c', text: 'Acute lymphoblastic leukaemia' },
        { id: 'd', text: 'Myelofibrosis' },
      ],
      answerId: 'b',
      explanation: 'A high LAP indicates a reactive leukemoid reaction; CML characteristically has a LOW LAP with the Philadelphia chromosome (BCR-ABL) and basophilia.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A patient on chemotherapy presents with fever and an absolute neutrophil count of 0.3 × 10⁹/L. The most appropriate immediate action is:',
      options: [
        { id: 'a', text: 'Observe and repeat the count in 24 hours' },
        { id: 'b', text: 'Take cultures then start empirical broad-spectrum antibiotics' },
        { id: 'c', text: 'Give a blood transfusion' },
        { id: 'd', text: 'Await blood-culture results before treating' },
      ],
      answerId: 'b',
      explanation: 'Fever with an ANC <0.5 × 10⁹/L is febrile neutropenia — a medical emergency needing blood cultures followed immediately by empirical broad-spectrum antibiotics.',
      tests: 'treatment',
    },
  ],
};

export default hhlLeukocyteQuantitative;
