import type { Lecture } from '../../lib/types';

export const hhlMolecularDiagnosticsHeme: Lecture = {
  id: 'hhl-molecular-diagnostics-heme',
  title: 'Molecular Diagnostics of Hematologic Neoplasms',
  system: 'heme',
  source: 'L18 — Molecular Basis in Hematology',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L18 Molecular' },
    { kind: 'disease', label: 'Leukemia / MPN markers' },
    { kind: 'investigation', label: 'BCR-ABL · JAK2 · PML-RARA' },
    { kind: 'treatment', label: 'Targeted therapy' },
  ],

  highYield: [
    '**BCR-ABL1 (t(9;22), Philadelphia)** defines **CML** and predicts response to **tyrosine-kinase inhibitors**; quantitative RT-PCR tracks MRD. See [[hhl-molecular-techniques]].',
    '**JAK2 V617F** is the key clue to **BCR-ABL–negative myeloproliferative neoplasms** (polycythemia vera, essential thrombocythemia, primary myelofibrosis).',
    '**PML-RARA t(15;17)** diagnoses **acute promyelocytic leukemia (APL)** — an emergency, because it identifies the patient who responds to **ATRA/arsenic** and is at risk of **DIC**.',
    '**AML prognosis is molecular**: **NPM1 mutation = favorable**, **FLT3-ITD = adverse**; **IGH/TCR rearrangement** studies prove **clonality** (neoplastic vs reactive).',
    '**Thalassemia/hemoglobinopathy genotyping** is very high-yield in **Thailand** — identify α- and β-globin mutations for **antenatal diagnosis** (e.g. prevent Hb Bart\'s hydrops).',
  ],

  mechanism: {
    title: 'Genotype drives diagnosis, prognosis and therapy',
    steps: [
      { id: 's1', label: 'Detect the lesion (fusion, point mutation, or globin genotype)' },
      { id: 's2', label: 'Assign/confirm diagnosis (BCR-ABL = CML; PML-RARA = APL)', emphasis: 'key' },
      { id: 's3', label: 'Stratify prognosis (NPM1 favorable vs FLT3-ITD adverse)' },
      { id: 's4', label: 'Select targeted therapy (TKI for BCR-ABL; ATRA for PML-RARA)', emphasis: 'key' },
      { id: 's5', label: 'Monitor MRD by quantitative PCR → detect relapse early' },
    ],
  },

  examFindings: [
    { sign: 'BCR-ABL1 transcript positive', mechanism: 'Philadelphia t(9;22) — defines CML, target for a TKI', significance: 'key' },
    { sign: 'JAK2 V617F positive with erythrocytosis', mechanism: 'Clonal MPN (e.g. polycythemia vera), not secondary', significance: 'key' },
    { sign: 'PML-RARA / t(15;17) detected', mechanism: 'APL — start ATRA and watch for DIC', significance: 'key' },
    { sign: 'Clonal IGH or TCR gene rearrangement', mechanism: 'Monoclonal lymphoid population = neoplastic, not reactive', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Erythrocytosis with a LOW erythropoietin and JAK2 V617F', meaning: 'Polycythemia vera (clonal), not secondary polycythemia' },
    { clue: 'Rising BCR-ABL transcript on quantitative PCR during TKI therapy', meaning: 'Loss of molecular response — possible resistance/relapse' },
    { clue: 'New AML with promyelocytes and coagulopathy', meaning: 'Test urgently for PML-RARA — APL needs ATRA and DIC support' },
    { clue: 'A couple both carrying β-thalassemia or α0 mutations', meaning: 'Offer antenatal genotyping (risk of severe thalassemia / Hb Bart\'s)' },
  ],

  treatment: [
    { logic: 'Let the genotype pick the drug', detail: 'BCR-ABL → tyrosine-kinase inhibitor; PML-RARA → ATRA ± arsenic; therapy is aimed at the molecular lesion.' },
    { logic: 'Use molecular prognosis to guide transplant', detail: 'FLT3-ITD (adverse) pushes toward transplant; NPM1-mutated/FLT3-wildtype (favorable) may not.' },
    { logic: 'Prevent severe thalassemia through carrier genotyping', detail: 'Antenatal diagnosis prevents transfusion-dependent disease — a Thai public-health priority.' },
  ],

  mnemonics: [
    { hook: 'Ph = CML, JAK2 = MPN, t(15;17) = APL', expansion: ['BCR-ABL1 → CML → TKI', 'JAK2 V617F → PV/ET/PMF', 'PML-RARA → APL → ATRA'] },
    { hook: 'AML prognosis: NPM1 nice, FLT3-ITD fearsome', expansion: ['NPM1 mutation → favorable', 'FLT3-ITD → adverse', 'Drives the transplant decision'] },
  ],

  traps: [
    {
      questionCategory: 'Primary vs secondary erythrocytosis',
      wrongInstinct: 'A high hematocrit with a HIGH erythropoietin is polycythemia vera',
      rightAnswer: 'Polycythemia vera is JAK2-mutated with a LOW/suppressed erythropoietin; a high EPO points to secondary causes',
      why: 'Clonal marrow drive suppresses EPO; a hypoxic or tumor drive raises it.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with a high hematocrit has a suppressed erythropoietin. Which molecular test best confirms the likely diagnosis?',
      options: [
        { id: 'a', text: 'BCR-ABL1' },
        { id: 'b', text: 'JAK2 V617F' },
        { id: 'c', text: 'PML-RARA' },
        { id: 'd', text: 'FLT3-ITD' },
      ],
      answerId: 'b',
      explanation: 'Erythrocytosis with a low EPO suggests polycythemia vera, confirmed in most cases by the JAK2 V617F mutation.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'Detecting PML-RARA t(15;17) in an acute leukemia is critical mainly because it:',
      options: [
        { id: 'a', text: 'Confirms chronic myeloid leukemia' },
        { id: 'b', text: 'Identifies APL, which responds to all-trans retinoic acid' },
        { id: 'c', text: 'Indicates a favorable form of CLL' },
        { id: 'd', text: 'Excludes disseminated intravascular coagulation' },
      ],
      answerId: 'b',
      explanation: 'PML-RARA defines acute promyelocytic leukemia, treated with ATRA (± arsenic) and carrying a high DIC risk — making rapid identification essential.',
      tests: 'treatment',
    },
  ],
};

export default hhlMolecularDiagnosticsHeme;
