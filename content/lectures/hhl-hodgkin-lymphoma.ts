import type { Lecture } from '../../lib/types';

export const hhlHodgkinLymphoma: Lecture = {
  id: 'hhl-hodgkin-lymphoma',
  title: 'Hodgkin Lymphoma',
  system: 'heme',
  source: 'L10 — Pathology of Lymph Node & Lymphoma',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L10 Node & Lymphoma' },
    { kind: 'disease', label: 'Hodgkin lymphoma' },
    { kind: 'mechanism', label: 'Reed–Sternberg cell' },
    { kind: 'investigation', label: 'CD15 · CD30' },
  ],

  highYield: [
    'The **Reed–Sternberg (RS) cell** is diagnostic: large **binucleate "owl-eye"** cell, **CD15+ CD30+, CD20−** in classical HL. RS cells are the **minority** — most of the mass is a **reactive** inflammatory infiltrate.',
    '**Spreads contiguously** node-to-node (predictable) — contrast the non-contiguous spread of [[hhl-non-hodgkin-lymphoma]]. **B symptoms** (fever, drenching night sweats, >10% weight loss) upstage; **bimodal age**.',
    '**Classical subtypes**: **nodular sclerosis** (commonest, young women, mediastinal, **lacunar cells** + fibrous bands); **mixed cellularity** (**EBV**, older/HIV, more RS cells); **lymphocyte-rich** (best prognosis); **lymphocyte-depleted** (worst, elderly/HIV).',
    '**NLPHL** is distinct: **"popcorn" (L&H) cells**, **CD20+ CD15− CD30−**, indolent, may transform to DLBCL.',
    '**Ann Arbor** staging; generally **curable** with chemotherapy (ABVD) ± radiotherapy.',
  ],

  mechanism: {
    title: 'Germinal-centre B cell → Reed–Sternberg cell → inflammatory milieu',
    steps: [
      { id: 's1', label: 'Crippled germinal-centre B cell escapes apoptosis (often EBV-driven)', emphasis: 'key' },
      { id: 's2', label: 'Becomes Reed–Sternberg cell (CD15+ CD30+, NF-κB active)', emphasis: 'key' },
      { id: 's3', label: 'RS cells secrete cytokines → recruit reactive cells + B symptoms' },
      { id: 's4', label: 'Contiguous node-to-node spread', emphasis: 'key' },
      { id: 's5', label: 'Bulky mediastinal mass → SVC obstruction', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Painless cervical/supraclavicular lymphadenopathy', mechanism: 'Nodal Hodgkin lymphoma', significance: 'key' },
    { sign: 'Binucleate owl-eye RS cell, CD15+/CD30+', mechanism: 'Diagnostic malignant cell of classical HL', significance: 'key' },
    { sign: 'Lacunar cells with broad collagen bands', mechanism: 'Nodular sclerosis subtype', significance: 'supportive' },
    { sign: 'Pel–Ebstein fever, night sweats, weight loss', mechanism: 'Cytokine-driven B symptoms', significance: 'supportive' },
    { sign: 'Nodal pain after alcohol', mechanism: 'Classic (rare) Hodgkin association', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Owl-eye binucleate cell, CD15+ CD30+ CD20−', meaning: 'Classical Reed–Sternberg cell (classical HL)' },
    { clue: '"Popcorn" cell, CD20+ CD15− CD30−', meaning: 'NLPHL' },
    { clue: 'Lacunar cells + collagen bands, young woman with mediastinal mass', meaning: 'Nodular sclerosis HL' },
    { clue: 'Contiguous single-axis nodal spread on staging', meaning: 'Favours Hodgkin over non-Hodgkin' },
  ],

  treatment: [
    { logic: 'Stage-directed ABVD chemotherapy ± involved-field radiotherapy', detail: 'Highly curable even when advanced; PET-adapted therapy tailors intensity.' },
    { logic: 'Minimise long-term toxicity', detail: 'Balance cure against late effects — secondary malignancy, cardiac disease, pulmonary fibrosis (bleomycin), infertility.' },
  ],

  mnemonics: [
    { hook: 'Reed–Sternberg = 2 owl eyes, CD15 & CD30 (15+30=45)', expansion: ['Binucleate owl-eye cell', 'Classical HL is CD20-negative', 'RS cells are the minority; bulk is reactive'] },
    { hook: 'Nodular Sclerosis = young Women, commonest', expansion: ['Mixed Cellularity = EBV', 'Lymphocyte-Depleted = worst / HIV', 'Lymphocyte-Rich = best prognosis'] },
  ],

  traps: [
    {
      questionCategory: 'Which cell is the malignant one',
      wrongInstinct: 'The abundant lymphocytes and eosinophils in the node are the tumour',
      rightAnswer: 'The MINORITY Reed–Sternberg cells are neoplastic; the surrounding infiltrate is reactive',
      why: 'Hodgkin has a low malignant-cell burden — the diagnosis rests on finding RS cells amid a reactive background.',
    },
    {
      questionCategory: 'Hodgkin vs non-Hodgkin spread',
      wrongInstinct: 'Pattern of spread does not help distinguish them',
      rightAnswer: 'Hodgkin spreads CONTIGUOUSLY node-to-node (radiotherapy-amenable); NHL spreads non-contiguously/extranodally',
      why: 'Contiguity is a classic discriminator and shapes staging and therapy.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A lymph node biopsy shows scattered large binucleate "owl-eye" cells that are CD15+, CD30+ and CD20−. Diagnosis?',
      options: [
        { id: 'a', text: 'Classical Hodgkin lymphoma' },
        { id: 'b', text: 'Follicular lymphoma' },
        { id: 'c', text: 'Nodular lymphocyte-predominant Hodgkin lymphoma' },
        { id: 'd', text: 'Reactive follicular hyperplasia' },
      ],
      answerId: 'a',
      explanation: 'CD15+/CD30+/CD20− binucleate Reed–Sternberg cells define classical Hodgkin lymphoma. NLPHL "popcorn" cells are CD20+ and CD15−/CD30−.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A young woman has an anterior mediastinal mass; biopsy shows lacunar cells and broad bands of collagen. Which subtype?',
      options: [
        { id: 'a', text: 'Mixed cellularity' },
        { id: 'b', text: 'Lymphocyte-depleted' },
        { id: 'c', text: 'Nodular sclerosis' },
        { id: 'd', text: 'Nodular lymphocyte-predominant' },
      ],
      answerId: 'c',
      explanation: 'Nodular sclerosis — the commonest subtype — classically affects young women with a mediastinal mass and shows lacunar cells within fibrous (collagen) bands.',
      tests: 'disease',
    },
  ],
};

export default hhlHodgkinLymphoma;
