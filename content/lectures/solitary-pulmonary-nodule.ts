import type { Lecture } from '../../lib/types';

export const solitaryPulmonaryNodule: Lecture = {
  id: 'solitary-pulmonary-nodule',
  title: 'The Solitary Pulmonary Nodule',
  system: 'respiratory',
  source: 'L12 — Pulmonary Neoplasms',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L12 Pulmonary Neoplasm' },
    { kind: 'investigation', label: 'Lung nodule' },
    { kind: 'exam', label: 'Benign vs malignant' },
  ],

  highYield: [
    '**A solitary pulmonary nodule ("coin lesion") is a single, rounded lung opacity ≤3 cm surrounded by aerated lung (a mass is >3 cm).** It is a common incidental finding, and the central task is to estimate the probability of MALIGNANCY versus a benign cause — because early lung cancer here is potentially curable, but most small nodules are benign.',
    '**Common benign causes: infectious granulomas (old TB, fungal), hamartoma, and resolved infection; common malignant causes: primary lung carcinoma and a solitary metastasis.** The work-up weighs clinical risk (age, smoking, prior cancer) against imaging features.',
    '**Features favouring BENIGN: small size, smooth well-defined margins, and certain CALCIFICATION patterns (central, laminated/"popcorn" [hamartoma], or diffuse) and stability over ≥2 years.** Features favouring MALIGNANT: larger size, SPICULATED/irregular margins, upper-lobe location, and GROWTH on serial imaging.',
    '**Growth rate and prior imaging are decisive: a nodule stable for ≥2 years is very likely benign, whereas one that grows needs tissue diagnosis.** Comparing with old films/CT is often the single most useful step. **PET-CT** assesses metabolic activity (malignant nodules are usually FDG-avid), and biopsy/resection provides the definitive diagnosis.',
    '**Management follows risk: low-risk small nodules → CT surveillance; higher-risk/growing nodules → PET-CT and biopsy or resection.** This applies the "benign vs malignant" reasoning to a very common problem and connects to lung-cancer diagnosis ([[non-small-cell-lung-carcinoma]], [[small-cell-and-other-lung-tumors]]) and CT characterisation ([[chest-ct-imaging-patterns]]).',
  ],

  mechanism: {
    title: 'Coin lesion ≤3 cm: weigh benign vs malignant by risk + imaging + growth',
    steps: [
      { id: 's1', label: 'Solitary nodule = single opacity ≤3 cm in aerated lung (>3 cm = mass)', emphasis: 'key' },
      { id: 's2', label: 'Benign: granuloma (TB/fungal), hamartoma; malignant: primary/metastasis', emphasis: 'key' },
      { id: 's3', label: 'Benign clues: small, smooth, benign calcification, stable ≥2 yr', emphasis: 'key' },
      { id: 's4', label: 'Malignant clues: large, spiculated, upper lobe, GROWING', emphasis: 'danger' },
      { id: 's5', label: 'Compare old imaging; PET-CT + biopsy/resection if higher risk', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Small smooth nodule with "popcorn" calcification, stable for years', mechanism: 'Benign (hamartoma / old granuloma)', significance: 'key' },
    { sign: 'Spiculated, irregular upper-lobe nodule that is growing', mechanism: 'Suspicious for malignancy', significance: 'key' },
    { sign: 'FDG-avid nodule on PET-CT', mechanism: 'Metabolically active — higher malignancy probability', significance: 'supportive' },
    { sign: 'Nodule unchanged on imaging ≥2 years', mechanism: 'Very likely benign', significance: 'key' },
    { sign: 'Calcified granuloma from prior TB/fungal infection', mechanism: 'Common benign nodule in endemic areas', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The size cut-off defining a nodule vs a mass', meaning: '≤3 cm = nodule; >3 cm = mass' },
    { clue: 'The imaging features favouring a benign nodule', meaning: 'Small, smooth margins, benign calcification, ≥2-year stability' },
    { clue: 'The features favouring malignancy', meaning: 'Large, spiculated margins, upper lobe, growth' },
    { clue: 'The single most useful early step', meaning: 'Comparison with previous imaging (assess growth/stability)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'A solitary nodule is a common incidental finding where the reasoning (benign vs malignant, by risk + imaging + growth) determines whether to observe or biopsy — early lung cancer here is curable ([[non-small-cell-lung-carcinoma]]). In endemic areas many nodules are old TB/fungal granulomas ([[tuberculosis-pathology]], [[fungal-lung-infections]]); CT characterises them ([[chest-ct-imaging-patterns]]).' },
  ],

  mnemonics: [
    { hook: 'Benign nodule = "small, smooth, calcified, stable ≥2 yr"; Malignant = "big, spiculated, growing"', expansion: ['Popcorn calcification = hamartoma', 'Compare old films first'] },
    { hook: 'Coin lesion work-up: "old imaging → PET → biopsy" (by risk)', expansion: ['Low risk = surveillance', 'Higher risk = tissue diagnosis'] },
  ],

  traps: [
    {
      questionCategory: 'Assessing a solitary pulmonary nodule',
      wrongInstinct: 'Every solitary pulmonary nodule must be biopsied immediately to exclude cancer',
      rightAnswer: 'Management is risk-stratified: a small, smooth, benignly-calcified nodule that is STABLE for ≥2 years is very likely benign and can be observed, whereas larger, spiculated or GROWING nodules warrant PET-CT and biopsy/resection — comparison with old imaging is often the key step',
      why: 'Biopsying every nodule over-investigates the many benign granulomas/hamartomas; using size, margins, calcification and especially growth to stratify risk targets invasive work-up to the nodules that need it.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which feature of a solitary pulmonary nodule most strongly favours a benign cause?',
      options: [
        { id: 'a', text: 'Spiculated margins' },
        { id: 'b', text: 'Stability in size for more than two years' },
        { id: 'c', text: 'Upper-lobe location' },
        { id: 'd', text: 'Rapid growth' },
      ],
      answerId: 'b',
      explanation: 'A nodule that has been stable in size for at least two years is very likely benign. Spiculated margins, upper-lobe location and growth all raise concern for malignancy and prompt further evaluation.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'The single most useful initial step in evaluating a newly noted solitary pulmonary nodule is often to:',
      options: [
        { id: 'a', text: 'Proceed directly to surgical resection' },
        { id: 'b', text: 'Compare with any previous chest imaging to assess growth/stability' },
        { id: 'c', text: 'Start empirical chemotherapy' },
        { id: 'd', text: 'Ignore it if the patient is asymptomatic' },
      ],
      answerId: 'b',
      explanation: 'Reviewing previous imaging to determine whether the nodule is new or growing (versus stable) is frequently the most informative early step, since long-term stability strongly suggests a benign lesion and avoids unnecessary invasive testing.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default solitaryPulmonaryNodule;
