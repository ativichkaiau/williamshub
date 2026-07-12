import type { Lecture } from '../../lib/types';

export const hhlMpn: Lecture = {
  id: 'hhl-mpn',
  title: 'Myeloproliferative Neoplasms',
  system: 'heme',
  source: 'L13 — Myeloproliferative Neoplasms, MM & CLL',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L13 MPN · MM · CLL' },
    { kind: 'disease', label: 'Myeloproliferative neoplasms' },
    { kind: 'mechanism', label: 'JAK2 / BCR-ABL kinase' },
    { kind: 'investigation', label: 'LAP · JAK2 · EPO' },
  ],

  highYield: [
    '**MPN = clonal proliferation of MATURE myeloid lines** — cells differentiate (contrast the blasts of acute leukaemia). Four classics: **CML, PV, ET, PMF**.',
    '**CML: t(9;22) BCR-ABL (Philadelphia)** — constitutive tyrosine kinase; **massive leucocytosis with the FULL maturation spectrum** + **basophilia**, **LOW leukocyte alkaline phosphatase (LAP)**, big spleen; risk of **blast crisis**. Treat with a TKI — see [[hhl-tki-cml]].',
    '**Polycythaemia vera: JAK2 V617F** — **↑ red cell mass with LOW EPO**; aquagenic **pruritus**, **erythromelalgia**, plethora, **thrombosis (Budd–Chiari)**; treat with **phlebotomy** ± hydroxyurea + aspirin.',
    '**Essential thrombocythaemia: ↑ platelets** (JAK2/CALR/MPL) → thrombosis and paradoxical bleeding.',
    '**Primary myelofibrosis**: marrow fibrosis → **teardrop cells (dacrocytes)** + **leukoerythroblastic** film, **"dry tap"** on aspiration, massive splenomegaly from **extramedullary haematopoiesis**.',
  ],

  mechanism: {
    title: 'Constitutive kinase signalling → clonal mature myeloid expansion',
    steps: [
      { id: 's1', label: 'Acquired driver: BCR-ABL (CML) or JAK2 V617F (PV/ET/PMF)', emphasis: 'key' },
      { id: 's2', label: 'Growth-factor-independent proliferation of a MATURE myeloid line', emphasis: 'key' },
      { id: 's3', label: 'CML → granulocytes (low LAP); PV → red cells (low EPO); ET → platelets' },
      { id: 's4', label: 'PMF → marrow fibrosis → extramedullary haematopoiesis, teardrop cells' },
      { id: 's5', label: 'Progression to blast crisis / acute leukaemia', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Massive splenomegaly', mechanism: 'CML infiltration or PMF extramedullary haematopoiesis', significance: 'key' },
    { sign: 'Leucocytosis with full myeloid maturation + basophilia, LOW LAP', mechanism: 'CML (t9;22)', significance: 'key' },
    { sign: 'Raised Hb/Hct with LOW EPO', mechanism: 'Polycythaemia vera (autonomous red-cell production)', significance: 'key' },
    { sign: 'Aquagenic pruritus + erythromelalgia', mechanism: 'PV (histamine + platelet-mediated)', significance: 'supportive' },
    { sign: 'Teardrop cells + leukoerythroblastic film, dry tap', mechanism: 'Primary myelofibrosis', significance: 'key' },
  ],

  investigations: [
    { clue: 't(9;22) BCR-ABL with LOW LAP score', meaning: 'CML (a reactive leukemoid reaction has HIGH LAP)' },
    { clue: 'JAK2 V617F + raised red-cell mass + low EPO', meaning: 'Polycythaemia vera' },
    { clue: 'Persistent isolated thrombocytosis, JAK2/CALR, no reactive cause', meaning: 'Essential thrombocythaemia' },
    { clue: 'Teardrop cells, leukoerythroblastic film, "dry tap"', meaning: 'Primary myelofibrosis' },
  ],

  treatment: [
    { logic: 'CML: BCR-ABL tyrosine kinase inhibitor (imatinib)', detail: 'Aim for molecular remission; monitor the BCR-ABL transcript. See [[hhl-tki-cml]].' },
    { logic: 'PV: phlebotomy to target haematocrit + low-dose aspirin ± hydroxyurea', detail: 'The goal is to lower red-cell mass and cut thrombosis risk.' },
    { logic: 'ET / PMF: risk-adapted therapy', detail: 'Aspirin/cytoreduction; JAK inhibitor (ruxolitinib) for PMF splenomegaly and symptoms.' },
  ],

  mnemonics: [
    { hook: 'CML = Philadelphia (9;22), LAP LOW', expansion: ['Reactive leukemoid reaction = LAP HIGH', 'Basophilia in CML', 'Blast crisis is the feared endpoint'] },
    { hook: 'PV: high red cells, LOW EPO, itch after a warm shower', expansion: ['Erythromelalgia', 'Budd–Chiari thrombosis', 'Treat with phlebotomy'] },
  ],

  traps: [
    {
      questionCategory: 'CML vs leukemoid reaction',
      wrongInstinct: 'A huge neutrophil count with a left shift is a severe infection (leukemoid reaction)',
      rightAnswer: 'LOW LAP + basophilia + t(9;22) points to CML; a leukemoid reaction has HIGH LAP',
      why: 'The LAP score and the Philadelphia chromosome separate clonal CML from a reactive response.',
    },
    {
      questionCategory: 'Primary vs secondary polycythaemia',
      wrongInstinct: 'A high haematocrit means hypoxia-driven secondary polycythaemia with a high EPO',
      rightAnswer: 'PV has LOW EPO (autonomous) with JAK2 V617F',
      why: 'EPO is SUPPRESSED in the primary clonal disease but ELEVATED in secondary/hypoxic causes.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient has WBC 200 × 10⁹/L with the full spectrum of granulocyte maturation, basophilia and splenomegaly; the LAP score is low. Which test confirms the diagnosis?',
      options: [
        { id: 'a', text: 'BCR-ABL / t(9;22)' },
        { id: 'b', text: 'JAK2 V617F' },
        { id: 'c', text: 'Serum erythropoietin' },
        { id: 'd', text: 'PML-RARA / t(15;17)' },
      ],
      answerId: 'a',
      explanation: 'Leucocytosis with full maturation, basophilia, splenomegaly and a LOW LAP is CML — confirmed by the BCR-ABL fusion of t(9;22). A high LAP would suggest a reactive leukemoid reaction.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A man has haematocrit 60%, aquagenic pruritus and a portal vein thrombosis. Which finding best supports polycythaemia vera?',
      options: [
        { id: 'a', text: 'High serum erythropoietin' },
        { id: 'b', text: 'Low erythropoietin with JAK2 V617F' },
        { id: 'c', text: 'Philadelphia chromosome' },
        { id: 'd', text: 'Teardrop cells on the film' },
      ],
      answerId: 'b',
      explanation: 'PV is an autonomous clonal disease: EPO is LOW and JAK2 V617F is present. A high EPO indicates a secondary (hypoxic/tumour) cause; teardrop cells suggest myelofibrosis.',
      tests: 'disease',
    },
  ],
};

export default hhlMpn;
