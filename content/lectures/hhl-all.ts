import type { Lecture } from '../../lib/types';

export const hhlAll: Lecture = {
  id: 'hhl-all',
  title: 'Acute Lymphoblastic Leukemia',
  system: 'heme',
  source: 'L15 — Acute Leukemia',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L15 Acute Leukemia' },
    { kind: 'disease', label: 'ALL' },
    { kind: 'mechanism', label: 'Lymphoblast maturation arrest' },
    { kind: 'investigation', label: 'TdT+ · flow cytometry' },
  ],

  highYield: [
    '**ALL = malignant lymphoBLASTS**; the **commonest childhood cancer** (peak 2–5 y). Lymphoblasts are **TdT+** (terminal deoxynucleotidyl transferase) and **MPO-negative**.',
    '**B-ALL** (commoner) vs **T-ALL** — T-ALL is classically an **adolescent/young male with a mediastinal (thymic) mass** ± airway/SVC compromise.',
    '**Sanctuary sites: CNS and testes** — need **CNS-directed prophylaxis** (intrathecal chemo) because systemic chemo penetrates poorly; relapse hides there.',
    'Cytogenetics: **hyperdiploidy and t(12;21) ETV6-RUNX1 = GOOD** prognosis in children; **t(9;22) BCR-ABL (Philadelphia)** and infant **KMT2A/MLL** = **POOR** (Ph-ALL adds a TKI).',
    'Marrow-failure presentation (anaemia, infection, bleeding) + bone pain and hepatosplenomegaly; **overall high paediatric cure rates**. See [[hhl-acute-leukemia-approach]].',
  ],

  mechanism: {
    title: 'Lymphoblast arrest → marrow failure + sanctuary-site spread',
    steps: [
      { id: 's1', label: 'Transformed lymphoid progenitor → clonal lymphoblasts (TdT+)', emphasis: 'key' },
      { id: 's2', label: 'Marrow replacement → anaemia/neutropenia/thrombocytopenia' },
      { id: 's3', label: 'B-ALL vs T-ALL (T = mediastinal/thymic mass)', emphasis: 'key' },
      { id: 's4', label: 'Seeds CNS + testicular sanctuary sites', emphasis: 'key' },
      { id: 's5', label: 'T-ALL mediastinal mass → airway / SVC compression', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'TdT-positive, MPO-negative blasts', mechanism: 'Lymphoblasts (ALL, not AML)', significance: 'key' },
    { sign: 'Child with bone pain, bruising, hepatosplenomegaly / lymphadenopathy', mechanism: 'Marrow failure + tissue infiltration', significance: 'key' },
    { sign: 'Anterior mediastinal mass in an adolescent male', mechanism: 'T-ALL (thymic involvement)', significance: 'key' },
    { sign: 'Cranial nerve palsy or testicular enlargement at relapse', mechanism: 'Sanctuary-site (CNS/testis) disease', significance: 'supportive' },
    { sign: 'Marked leucocytosis with circulating blasts', mechanism: 'Leukaemic phase', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'TdT+ blasts, CD10/CD19 (B) or CD3 (T), MPO−', meaning: 'ALL (not AML)' },
    { clue: 't(12;21) ETV6-RUNX1 or hyperdiploidy in a child', meaning: 'Favourable-risk ALL' },
    { clue: 't(9;22) BCR-ABL', meaning: 'Philadelphia-positive ALL (poor risk; add a TKI)' },
    { clue: 'Blasts in the CSF', meaning: 'CNS involvement (needs intrathecal therapy)' },
  ],

  treatment: [
    { logic: 'Multi-phase chemotherapy WITH CNS-directed prophylaxis', detail: 'Induction–consolidation–maintenance over ~2–3 years; intrathecal chemo ± cranial radiotherapy because the CNS is a sanctuary site.' },
    { logic: 'Risk-adapt by cytogenetics / MRD', detail: 'Add a TKI for Ph+ ALL; transplant or immunotherapy (blinatumomab, CAR-T) for high-risk/relapsed disease. See [[hhl-targeted-therapy-classes]].' },
  ],

  mnemonics: [
    { hook: 'ALL: kids, TdT+, treat the CNS + testes (sanctuaries)', expansion: ['T-ALL = Teenage boy, Thymic (mediastinal) mass', 't(12;21) good, t(9;22) bad'] },
    { hook: 'TdT+ = immature Lymphoblast (ALL); MPO+ = AML', expansion: ['Commonest childhood cancer', 'Good overall cure rates'] },
  ],

  traps: [
    {
      questionCategory: 'Why CNS-directed therapy is needed',
      wrongInstinct: 'Systemic chemotherapy alone clears all disease in ALL',
      rightAnswer: 'The CNS (and testis) are pharmacological SANCTUARIES needing dedicated intrathecal/CNS prophylaxis',
      why: 'Without CNS prophylaxis, relapse emerges in these sites despite marrow remission.',
    },
    {
      questionCategory: 'Mediastinal mass with blasts',
      wrongInstinct: 'An anterior mediastinal mass with blasts in a teenager is AML',
      rightAnswer: 'Think T-ALL (TdT+, CD3+), which classically presents as a thymic mediastinal mass',
      why: 'T-ALL, not AML, is the leukaemia of the adolescent mediastinal mass.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 4-year-old presents with pancytopenia and bone pain; marrow blasts are TdT-positive and myeloperoxidase-negative. Diagnosis?',
      options: [
        { id: 'a', text: 'Acute lymphoblastic leukaemia' },
        { id: 'b', text: 'Acute myeloid leukaemia' },
        { id: 'c', text: 'Chronic myeloid leukaemia' },
        { id: 'd', text: 'Multiple myeloma' },
      ],
      answerId: 'a',
      explanation: 'TdT-positive, MPO-negative blasts in a young child indicate ALL, the commonest childhood cancer. TdT is a marker of immature lymphoblasts.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'Which cytogenetic finding carries the BEST prognosis in childhood ALL?',
      options: [
        { id: 'a', text: 't(9;22) BCR-ABL' },
        { id: 'b', text: 'Infant KMT2A (MLL) rearrangement' },
        { id: 'c', text: 't(12;21) ETV6-RUNX1' },
        { id: 'd', text: 'Hypodiploidy' },
      ],
      answerId: 'c',
      explanation: 't(12;21) ETV6-RUNX1 (and hyperdiploidy) confer a favourable prognosis in paediatric ALL, whereas t(9;22), infant MLL rearrangements and hypodiploidy are adverse.',
      tests: 'disease',
    },
  ],
};

export default hhlAll;
