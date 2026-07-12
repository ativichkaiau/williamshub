import type { Lecture } from '../../lib/types';

export const hhlAml: Lecture = {
  id: 'hhl-aml',
  title: 'Acute Myeloid Leukemia',
  system: 'heme',
  source: 'L15 — Acute Leukemia',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L15 Acute Leukemia' },
    { kind: 'disease', label: 'AML' },
    { kind: 'mechanism', label: 'Myeloblast maturation arrest' },
    { kind: 'investigation', label: 'Auer rods · MPO' },
  ],

  highYield: [
    '**AML = clonal myeloBLASTS with maturation arrest**; diagnosis at **≥20% blasts** in blood/marrow. Predominantly **ADULTS** (median ~65 y).',
    '**Auer rods** (crystallised MPO, needle-like) are **pathognomonic**; blasts are **myeloperoxidase (MPO) positive**; markers CD13/CD33/CD117.',
    '**Acute promyelocytic leukaemia (APL, M3): t(15;17) PML-RARA** — hypergranular promyelocytes packed with Auer rods; causes **DIC (life-threatening bleeding)**; treat with **ATRA** (all-trans retinoic acid) ± arsenic — **differentiation therapy**. See [[hhl-targeted-therapy-classes]].',
    '**Monocytic subtypes** → **gum (gingival) infiltration** and skin involvement; **myeloid sarcoma / chloroma** = extramedullary mass.',
    'Presents with **marrow failure** — anaemia, neutropenia (infection), thrombocytopenia (bleeding). See [[hhl-acute-leukemia-approach]].',
  ],

  mechanism: {
    title: 'Myeloblast maturation arrest → marrow failure (± APL bleeding)',
    steps: [
      { id: 's1', label: 'Oncogenic hit in a myeloid progenitor → maturation arrest', emphasis: 'key' },
      { id: 's2', label: 'Blasts (≥20%) fill marrow; MPO+ / Auer rods', emphasis: 'key' },
      { id: 's3', label: 'Crowding → pancytopenia (anaemia, neutropenia, thrombocytopenia)' },
      { id: 's4', label: 'APL t(15;17) promyelocytes release procoagulant → DIC', emphasis: 'danger' },
      { id: 's5', label: 'ATRA drives promyelocyte differentiation (APL)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Needle-like Auer rods within blasts', mechanism: 'Crystallised myeloperoxidase — pathognomonic of AML', significance: 'key' },
    { sign: 'MPO-positive blasts', mechanism: 'Myeloid lineage (vs lymphoid)', significance: 'key' },
    { sign: 'Bleeding / DIC with hypergranular promyelocytes', mechanism: 'APL (t15;17) procoagulant release', significance: 'key' },
    { sign: 'Gingival hypertrophy / infiltration', mechanism: 'Monocytic AML tissue infiltration', significance: 'supportive' },
    { sign: 'Chloroma (green extramedullary mass)', mechanism: 'Myeloid sarcoma', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Auer rods + MPO+ blasts ≥20%', meaning: 'Acute myeloid leukaemia' },
    { clue: 't(15;17) PML-RARA, hypergranular promyelocytes, DIC', meaning: 'APL — start ATRA urgently' },
    { clue: 'Flow: CD13/CD33/CD117+, MPO+, TdT−', meaning: 'Myeloid lineage (lymphoblasts are TdT+)' },
    { clue: 'Falling fibrinogen + rising D-dimer + schistocytes', meaning: 'DIC (think APL) complicating acute leukaemia' },
  ],

  treatment: [
    { logic: 'APL is a special case', detail: 'ATRA + arsenic trioxide (differentiation therapy) — highly curable; do NOT wait, and support the DIC (fibrinogen/platelets). See [[hhl-targeted-therapy-classes]].' },
    { logic: 'Non-APL AML', detail: 'Intensive induction ("7+3" cytarabine + anthracycline) ± targeted agents (FLT3, IDH); allogeneic transplant for high-risk disease.' },
    { logic: 'Supportive / emergency care', detail: 'Manage tumour lysis, febrile neutropenia and transfusion needs. See [[hhl-acute-leukemia-approach]].' },
  ],

  mnemonics: [
    { hook: 'Auer rods + MPO = AML; APL = M3, t(15;17), ATRA', expansion: ['APL bleeds (DIC)', 'Gum infiltration = monocytic', 'AML is a disease of adults'] },
    { hook: 'APL: Add Retinoic acid (ATRA) to release the block', expansion: ['Differentiation therapy', 'Watch for differentiation syndrome'] },
  ],

  traps: [
    {
      questionCategory: 'Urgency of APL management',
      wrongInstinct: 'Wait for full cytogenetics before treating a suspected APL',
      rightAnswer: 'Start ATRA immediately on morphological suspicion — APL\'s DIC is rapidly fatal and ATRA reverses the block',
      why: 'The coagulopathy can kill before results return; empirical ATRA is the emergency move.',
    },
    {
      questionCategory: 'AML vs ALL lineage',
      wrongInstinct: 'The presence of blasts alone tells you it is ALL',
      rightAnswer: 'Auer rods / MPO+ = myeloid (AML); TdT+ lymphoblasts = ALL',
      why: 'Lineage markers, not blast morphology alone, separate them and dictate very different therapy.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An adult with pancytopenia has 40% marrow blasts containing pink, needle-like inclusions that stain positive for myeloperoxidase. Diagnosis?',
      options: [
        { id: 'a', text: 'Acute myeloid leukaemia' },
        { id: 'b', text: 'Acute lymphoblastic leukaemia' },
        { id: 'c', text: 'Chronic lymphocytic leukaemia' },
        { id: 'd', text: 'Chronic myeloid leukaemia' },
      ],
      answerId: 'a',
      explanation: 'MPO-positive blasts with Auer rods (the needle-like inclusions) are diagnostic of AML; lymphoblasts of ALL are MPO-negative and TdT-positive.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A patient has hypergranular promyelocytes, t(15;17) and bleeding with a low fibrinogen. Which specific therapy is indicated?',
      options: [
        { id: 'a', text: 'Rituximab (anti-CD20)' },
        { id: 'b', text: 'All-trans retinoic acid (ATRA)' },
        { id: 'c', text: 'Imatinib' },
        { id: 'd', text: 'Watchful waiting' },
      ],
      answerId: 'b',
      explanation: 'This is APL (t(15;17), PML-RARA) with DIC. ATRA differentiates the promyelocytes and reverses the coagulopathy; it is started urgently on suspicion.',
      tests: 'treatment',
    },
  ],
};

export default hhlAml;
