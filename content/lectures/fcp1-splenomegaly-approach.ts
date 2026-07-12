import type { Lecture } from '../../lib/types';

export const fcp1SplenomegalyApproach: Lecture = {
  id: 'fcp1-splenomegaly-approach',
  title: 'Approach to Splenomegaly — Confirm It, Then Categorise It',
  system: 'clinical',
  source: 'L22 — Lymphadenopathy & Splenomegaly',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L22 Lymphadenopathy & Splenomegaly' },
    { kind: 'disease', label: 'Infective · congestive · haematologic' },
    { kind: 'exam', label: 'Spleen vs left kidney' },
    { kind: 'investigation', label: 'Smear · ultrasound · malaria film' },
  ],

  highYield: [
    'The spleen is normally impalpable, so a **palpable spleen means roughly two to three times enlargement**. First **confirm it is the spleen**: it has a **notch, moves with respiration, is dull to percussion, and you cannot get above it** — unlike the ballotable, resonant left kidney. See [[hhl-spleen-thymus-malt]].',
    'Sort causes into four buckets: **infective** (EBV, malaria, typhoid, TB, endocarditis, visceral leishmaniasis), **congestive** (portal hypertension from cirrhosis, portal/splenic vein thrombosis, heart failure), **haematologic** (hemolysis, thalassemia — see [[hhl-alpha-beta-thalassemia]] — myeloproliferative disease, lymphoma, leukemia), and **infiltrative** (amyloid, Gaucher).',
    '**Massive splenomegaly** (crossing the midline or reaching the pelvis) narrows the differential sharply to **chronic myeloid leukemia, myelofibrosis, chronic malaria or visceral leishmaniasis (kala-azar), and thalassemia major**.',
    '**Hypersplenism** causes **sequestration cytopenias** in one or more lineages; check the CBC and smear. Splenomegaly with generalised lymphadenopathy points toward lymphoma — see [[fcp1-lymphadenopathy-approach]] and [[hhl-non-hodgkin-lymphoma]].',
    '**An acutely enlarged spleen can rupture** — as in EBV mononucleosis — so **advise avoiding contact sport and abdominal trauma** while it is enlarged. In endemic areas, febrile splenomegaly demands a malaria film. Hemolytic causes link to [[fcp1-anemia-approach-workup]] and [[hhl-aiha]].',
  ],

  mechanism: {
    title: 'Confirm the spleen, then categorise the cause',
    steps: [
      { id: 's1', label: 'Confirm true splenomegaly vs left kidney (notch, moves with respiration, dull, cannot get above)', emphasis: 'key' },
      { id: 's2', label: 'Categorise: infective / congestive / haematologic / infiltrative', emphasis: 'key' },
      { id: 's3', label: 'Massive spleen → CML, myelofibrosis, chronic malaria, kala-azar, thalassemia', emphasis: 'key' },
      { id: 's4', label: 'Check for hypersplenism (cytopenias) and associated nodes/liver disease', emphasis: 'normal' },
      { id: 's5', label: 'Acutely enlarged spleen risks rupture (EBV) → avoid trauma/contact sport', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'LUQ mass with a notch, moving with respiration, dull to percussion, cannot get above it', mechanism: 'Confirms spleen rather than left kidney', significance: 'key' },
    { sign: 'Massive spleen crossing the midline into the pelvis', mechanism: 'CML, myelofibrosis, or chronic infection (malaria, kala-azar)', significance: 'key' },
    { sign: 'Splenomegaly with stigmata of chronic liver disease', mechanism: 'Congestive — portal hypertension', significance: 'key' },
    { sign: 'Splenomegaly with generalised lymphadenopathy and B symptoms', mechanism: 'Lymphoma or leukemia', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'CBC with peripheral smear and reticulocyte count', meaning: 'Reveals cytopenias (hypersplenism), blasts, malaria parasites, or a leukoerythroblastic picture' },
    { clue: 'Abdominal ultrasound', meaning: 'Confirms splenic size and looks for portal hypertension or focal lesions' },
    { clue: 'Malaria film/RDT, EBV and other serologies, blood cultures', meaning: 'Works up febrile/infective splenomegaly' },
    { clue: 'LFTs and, if a myeloproliferative or lymphoma is suspected, bone marrow examination', meaning: 'Distinguishes congestive from primary haematologic causes' },
  ],

  treatment: [
    { logic: 'Treat the underlying cause', detail: 'Antimalarials for malaria, treat the haematologic disorder or liver disease; splenectomy is reserved for specific indications rather than being routine.' },
    { logic: 'Advise avoiding contact sport and abdominal trauma while the spleen is enlarged', detail: 'Splenic rupture is a real risk, particularly in EBV mononucleosis.' },
  ],

  mnemonics: [
    { hook: 'Spleen vs kidney', expansion: ['Spleen: notch, moves with respiration, dull, cannot get above it', 'Kidney: ballotable, resonant, can get above it'] },
    { hook: 'Massive spleen = CML, Myelofibrosis, Malaria/kala-azar, thalassemia', expansion: ['A midline-crossing spleen narrows the differential'] },
  ],

  traps: [
    {
      questionCategory: 'Distinguishing the LUQ mass',
      wrongInstinct: 'Call any left upper quadrant mass a spleen (or reflexively a kidney)',
      rightAnswer: 'The spleen has a notch, moves with respiration, is dull to percussion, and you cannot palpate above it; the kidney is ballotable and resonant',
      why: 'These bedside signs separate spleen from left kidney and completely change the differential and workup.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'You palpate a left upper quadrant mass. Which combination best confirms that it is the spleen rather than the left kidney?',
      options: [
        { id: 'a', text: 'Ballotable, resonant to percussion, able to get above it' },
        { id: 'b', text: 'Dull to percussion, moves with respiration, has a notch, cannot get above it' },
        { id: 'c', text: 'Pulsatile and expansile' },
        { id: 'd', text: 'Fixed, non-tender and resonant' },
      ],
      answerId: 'b',
      explanation: 'A splenic mass is dull to percussion, descends on inspiration, may have a palpable notch, and you cannot get above it — unlike the ballotable, resonant kidney.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A 45-year-old has a massive spleen reaching the pelvis, a very high white cell count with a full spectrum of granulocyte precursors and basophilia on the smear. The most likely diagnosis is:',
      options: [
        { id: 'a', text: 'Chronic myeloid leukemia' },
        { id: 'b', text: 'Iron deficiency anemia' },
        { id: 'c', text: 'Infectious mononucleosis' },
        { id: 'd', text: 'Immune thrombocytopenia' },
      ],
      answerId: 'a',
      explanation: 'Massive splenomegaly with a markedly raised white count, a left-shifted granulocyte series and basophilia is characteristic of chronic myeloid leukemia.',
      tests: 'disease',
    },
  ],
};

export default fcp1SplenomegalyApproach;
