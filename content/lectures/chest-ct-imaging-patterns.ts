import type { Lecture } from '../../lib/types';

export const chestCtImagingPatterns: Lecture = {
  id: 'chest-ct-imaging-patterns',
  title: 'Chest CT & Imaging Patterns',
  system: 'respiratory',
  source: 'L18 — Chest Radiology',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L18 Chest Radiology' },
    { kind: 'investigation', label: 'CT chest' },
    { kind: 'exam', label: 'CT patterns' },
  ],

  highYield: [
    '**Computed tomography (CT) gives cross-sectional detail far beyond the chest X-ray and is the next step when the CXR is abnormal or non-diagnostic.** Different protocols answer different questions: **high-resolution CT (HRCT)** for interstitial/parenchymal disease, **CT pulmonary angiography (CTPA)** for pulmonary embolism, and **contrast CT** for masses, nodes and staging.',
    '**Learn the pattern vocabulary. GROUND-GLASS opacity = hazy increased density without obscuring vessels (partial airspace filling — infection, oedema, early ILD, COVID-19). CONSOLIDATION = dense opacification with air bronchograms (airspace filling — pneumonia). "TREE-IN-BUD" = small centrilobular nodules on branching lines (small-airway infection, e.g. endobronchial TB).**',
    '**Fibrosis patterns: HONEYCOMBING and traction bronchiectasis with subpleural/basal predominance = the UIP pattern of idiopathic pulmonary fibrosis ([[pulmonary-fibrosis-pneumoconioses]]); a "crazy-paving" pattern (ground-glass + septal thickening) has its own differential.** RETICULAR (net-like) opacities suggest interstitial disease; NODULES may be infective, granulomatous or neoplastic.',
    '**CT is decisive for several diagnoses: CTPA is the test of choice for pulmonary embolism ([[pulmonary-embolism-edema]]); CT characterises and stages lung cancer and lymph nodes ([[non-small-cell-lung-carcinoma]]); and it detects and characterises the solitary pulmonary nodule ([[solitary-pulmonary-nodule]])** (size, margins, calcification, growth). It also finds effusions, pneumothorax and mediastinal masses missed or under-called on CXR.',
    '**Principle: start with the chest X-ray ([[chest-radiograph-interpretation]]), then use CT to answer a specific question — parenchyma (HRCT), clot (CTPA), or mass/staging (contrast CT) — correlating the imaging pattern with the clinical picture.** CT involves more radiation and cost, so it is targeted, not a first-line screen.',
  ],

  mechanism: {
    title: 'CT protocols answer specific questions; recognise key parenchymal patterns',
    steps: [
      { id: 's1', label: 'CXR first; CT for detail — HRCT (parenchyma), CTPA (PE), contrast (mass/stage)', emphasis: 'key' },
      { id: 's2', label: 'Ground-glass (partial filling) vs consolidation (dense + air bronchograms)', emphasis: 'key' },
      { id: 's3', label: 'Tree-in-bud = small-airway infection; honeycombing = UIP/fibrosis', emphasis: 'key' },
      { id: 's4', label: 'CTPA = PE test of choice; contrast CT stages cancer/nodes' },
      { id: 's5', label: 'Characterises solitary nodules (size/margins/calcification/growth)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Bilateral peripheral ground-glass opacities', mechanism: 'Partial airspace filling (infection/oedema/ILD/COVID-19)', significance: 'key' },
    { sign: 'Subpleural, basal honeycombing with traction bronchiectasis', mechanism: 'UIP pattern (idiopathic pulmonary fibrosis)', significance: 'key' },
    { sign: 'Tree-in-bud nodularity', mechanism: 'Small-airway (endobronchial) infection', significance: 'supportive' },
    { sign: 'Filling defect in the pulmonary arteries on CTPA', mechanism: 'Pulmonary embolism', significance: 'key' },
    { sign: 'Consolidation with air bronchograms', mechanism: 'Airspace filling (pneumonia)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The CT protocol for pulmonary embolism', meaning: 'CT pulmonary angiography (CTPA)' },
    { clue: 'The CT protocol for interstitial lung disease', meaning: 'High-resolution CT (HRCT)' },
    { clue: 'The CT pattern of idiopathic pulmonary fibrosis', meaning: 'Subpleural/basal honeycombing (UIP)' },
    { clue: 'The hazy density that does not obscure vessels', meaning: 'Ground-glass opacity' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'CT is the problem-solving tool after the CXR ([[chest-radiograph-interpretation]]) — CTPA diagnoses PE ([[pulmonary-embolism-edema]]), HRCT characterises fibrosis ([[pulmonary-fibrosis-pneumoconioses]]), and contrast CT stages cancer ([[non-small-cell-lung-carcinoma]]) and characterises the solitary nodule ([[solitary-pulmonary-nodule]]). Recognising ground-glass, consolidation, tree-in-bud and honeycombing turns imaging into diagnosis.' },
  ],

  mnemonics: [
    { hook: 'CT protocols: "HRCT = parenchyma; CTPA = clot; contrast = mass/stage"', expansion: ['Ground-glass = partial filling', 'Consolidation = dense + air bronchograms'] },
    { hook: 'Patterns: "Tree-in-bud = airways infection; Honeycomb = fibrosis (UIP)"', expansion: ['Reticular = interstitial', 'Crazy-paving = ground-glass + septal lines'] },
  ],

  traps: [
    {
      questionCategory: 'Choosing the right CT for pulmonary embolism',
      wrongInstinct: 'A standard high-resolution CT (HRCT) is the test of choice to diagnose pulmonary embolism',
      rightAnswer: 'Pulmonary embolism is diagnosed with CT PULMONARY ANGIOGRAPHY (CTPA), a contrast-timed protocol to opacify the pulmonary arteries — HRCT (a non-contrast parenchymal protocol) is for interstitial lung disease, not clot',
      why: 'The CT protocol must match the question: CTPA times contrast to see arterial filling defects, whereas HRCT optimises lung-parenchyma detail; using the wrong protocol will not answer the clinical question.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The imaging investigation of choice to diagnose a suspected pulmonary embolism is:',
      options: [
        { id: 'a', text: 'High-resolution CT (HRCT)' },
        { id: 'b', text: 'CT pulmonary angiography (CTPA)' },
        { id: 'c', text: 'Plain chest X-ray alone' },
        { id: 'd', text: 'Abdominal ultrasound' },
      ],
      answerId: 'b',
      explanation: 'CT pulmonary angiography opacifies the pulmonary arteries to reveal filling defects (clot) and is the test of choice for pulmonary embolism. HRCT is a parenchymal protocol used for interstitial lung disease.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'Subpleural, basal-predominant honeycombing with traction bronchiectasis on high-resolution CT is characteristic of:',
      options: [
        { id: 'a', text: 'Pneumonia' },
        { id: 'b', text: 'The usual interstitial pneumonia (UIP) pattern of idiopathic pulmonary fibrosis' },
        { id: 'c', text: 'Pulmonary embolism' },
        { id: 'd', text: 'Pneumothorax' },
      ],
      answerId: 'b',
      explanation: 'Honeycombing with traction bronchiectasis in a subpleural, basal distribution is the UIP pattern seen in idiopathic pulmonary fibrosis; recognising it on HRCT can establish the diagnosis without biopsy.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default chestCtImagingPatterns;
