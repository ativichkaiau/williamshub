import type { Lecture } from '../../lib/types';

export const fcp1LymphadenopathyApproach: Lecture = {
  id: 'fcp1-lymphadenopathy-approach',
  title: 'Approach to Lymphadenopathy — Benign vs Malignant, When to Biopsy',
  system: 'clinical',
  source: 'L22 — Lymphadenopathy & Splenomegaly',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L22 Lymphadenopathy & Splenomegaly' },
    { kind: 'disease', label: 'Reactive vs neoplastic nodes' },
    { kind: 'exam', label: 'Size · consistency · fixation' },
    { kind: 'investigation', label: 'Excisional biopsy' },
  ],

  highYield: [
    'First split **localised (one region)** from **generalised (two or more non-contiguous regions)**, then ask whether the node looks **reactive/benign or neoplastic**. Causes group as **infection, autoimmune, malignancy, and miscellaneous**. Reactive nodal histology is covered in [[hhl-lymphadenitis-reactive]].',
    '**Benign/reactive features:** **small (<1 cm), soft, tender, mobile**, short duration, and an obvious local infection. Most localised nodes in patients under 40 are reactive and self-limited.',
    '**Worrying/malignant features:** **>2 cm, hard or rubbery, fixed/matted, non-tender, painless and progressive**, especially with **B symptoms** (fever, drenching night sweats, weight loss) or hepatosplenomegaly — think lymphoma (see [[hhl-hodgkin-lymphoma]] and [[hhl-non-hodgkin-lymphoma]]) or metastasis.',
    '**A supraclavicular node is high-risk** for malignancy — left-sided (Virchow) suggests an abdominal/GI primary, right-sided a thoracic one. It warrants prompt investigation regardless of size.',
    '**Excisional biopsy — not FNA — is the test for suspected lymphoma** because diagnosis depends on intact nodal architecture. Biopsy a node that is persistent (beyond a few weeks), hard/fixed, supraclavicular, >2 cm, or unexplained. Cross-links: [[fcp1-splenomegaly-approach]], [[hhl-ebv-mononucleosis]].',
  ],

  mechanism: {
    title: 'Localise, characterise, then decide on biopsy',
    steps: [
      { id: 's1', label: 'Localised vs generalised; map the drainage territory', emphasis: 'key' },
      { id: 's2', label: 'Reactive/benign vs neoplastic features (size, consistency, fixation, tenderness)', emphasis: 'key' },
      { id: 's3', label: 'Screen for B symptoms and hepatosplenomegaly', emphasis: 'key' },
      { id: 's4', label: 'Supraclavicular / hard-fixed / >2 cm / progressive → excisional biopsy', emphasis: 'danger' },
      { id: 's5', label: 'Reactive-looking with an infective cause → treat and reassess in 2–4 weeks', emphasis: 'normal' },
    ],
  },

  examFindings: [
    { sign: 'Soft, tender, mobile node with a local infection', mechanism: 'Reactive/benign lymphadenopathy', significance: 'supportive' },
    { sign: 'Hard, fixed, matted, non-tender node >2 cm', mechanism: 'Malignancy — lymphoma or metastatic carcinoma', significance: 'key' },
    { sign: 'Supraclavicular node (Virchow on the left)', mechanism: 'High malignancy risk — abdominal or thoracic primary', significance: 'key' },
    { sign: 'Generalised nodes with hepatosplenomegaly and B symptoms', mechanism: 'Lymphoma or leukemia', significance: 'key' },
  ],

  investigations: [
    { clue: 'CBC with smear, LDH, ESR and targeted serologies (EBV, HIV)', meaning: 'Screens infective versus haematologic causes' },
    { clue: 'Persistent, hard, supraclavicular or unexplained node', meaning: 'Excisional lymph node biopsy for definitive histology' },
    { clue: 'CXR or CT of chest, abdomen and pelvis', meaning: 'Maps nodal disease and mediastinal/abdominal involvement (staging)' },
    { clue: 'FNA of a node', meaning: 'Useful for metastatic carcinoma or infection but inadequate to diagnose lymphoma' },
  ],

  treatment: [
    { logic: 'Treat obvious infection and observe reactive nodes, reassessing at 2–4 weeks', detail: 'Most localised lymphadenopathy in younger patients is benign and resolves; a clear reassessment interval prevents both over- and under-investigation.' },
    { logic: 'Biopsy and refer the red-flag node without delay', detail: 'Do not wait on a supraclavicular, hard-fixed, >2 cm, or B-symptom-associated node — arrange excisional biopsy.' },
  ],

  mnemonics: [
    { hook: 'Causes = MIAMI', expansion: ['Malignancy', 'Infection', 'Autoimmune', 'Miscellaneous/unusual', 'Iatrogenic'] },
    { hook: 'Biopsy triggers: Hard, Fixed, Supraclavicular, Painless, >2 cm', expansion: ['Any of these overrides watchful waiting'] },
  ],

  traps: [
    {
      questionCategory: 'Choosing the biopsy',
      wrongInstinct: 'Do a fine-needle aspirate to diagnose a suspected lymphoma',
      rightAnswer: 'Excisional biopsy — diagnosing and subtyping lymphoma needs intact nodal architecture',
      why: 'FNA lacks architecture and can miss or misclassify lymphoma; excisional biopsy is the standard for an unexplained or worrying node.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 55-year-old has a 3 cm hard, fixed left supraclavicular node, drenching night sweats and 6 kg of weight loss over two months. The most appropriate next step is:',
      options: [
        { id: 'a', text: 'A two-week course of antibiotics and review' },
        { id: 'b', text: 'Fine-needle aspiration only' },
        { id: 'c', text: 'Excisional lymph node biopsy' },
        { id: 'd', text: 'Reassurance and repeat examination in six months' },
      ],
      answerId: 'c',
      explanation: 'A hard, fixed supraclavicular node with B symptoms is highly suspicious for lymphoma or metastasis and needs excisional biopsy, which preserves the architecture needed for diagnosis.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'Which single feature of a lymph node most strongly suggests a malignant rather than a reactive cause?',
      options: [
        { id: 'a', text: 'Tenderness on palpation' },
        { id: 'b', text: 'A size under 1 cm' },
        { id: 'c', text: 'Softness and mobility' },
        { id: 'd', text: 'A hard, fixed, non-tender character' },
      ],
      answerId: 'd',
      explanation: 'Hard, fixed, non-tender nodes (especially >2 cm or supraclavicular) point to malignancy, whereas soft, tender, mobile nodes are typically reactive.',
      tests: 'exam',
    },
  ],
};

export default fcp1LymphadenopathyApproach;
