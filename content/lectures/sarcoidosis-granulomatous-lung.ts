import type { Lecture } from '../../lib/types';

export const sarcoidosisGranulomatousLung: Lecture = {
  id: 'sarcoidosis-granulomatous-lung',
  title: 'Sarcoidosis & Granulomatous Lung Disease',
  system: 'respiratory',
  source: 'L5 — Pathology of Restrictive Lung Diseases',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L5 Restrictive Lung' },
    { kind: 'disease', label: 'Sarcoidosis' },
    { kind: 'exam', label: 'Non-caseating granuloma' },
  ],

  highYield: [
    '**Sarcoidosis is a multisystem disease of NON-caseating (non-necrotising) granulomas of unknown cause**, classically in **young adults, more often women and (in many series) people of African descent**. The lung and hilar nodes are involved in the vast majority; it is a **diagnosis of exclusion** — you must first rule out infection (TB, fungi) and berylliosis.',
    '**The classic radiograph is BILATERAL HILAR LYMPHADENOPATHY**, often with reticular parenchymal opacities. Histology shows compact, non-caseating epithelioid granulomas; incidental inclusions include **asteroid bodies and Schaumann bodies** (not specific). Because granulomas are non-caseating and stains for organisms are negative, TB must be excluded.',
    '**Sarcoid granulomas are metabolically active: macrophages produce 1α-hydroxylase, converting vitamin D to calcitriol → HYPERCALCAEMIA/hypercalciuria, and secrete ACE (serum ACE may be raised).** These are supportive clues, not diagnostic. CD4:CD8 ratio in bronchoalveolar lavage is increased (Th1-driven).',
    '**Extrapulmonary features are wide:** skin (erythema nodosum, lupus pernio), eyes (uveitis), **Löfgren syndrome (erythema nodosum + bilateral hilar adenopathy + arthralgia/fever — good prognosis)**, cardiac (arrhythmia/block), neuro (facial nerve palsy), and parotid/lacrimal involvement. Many cases remit spontaneously; steroids are used for organ-threatening disease.',
    '**Contrast the two granuloma types:** sarcoid = **non-caseating** (no central necrosis, organisms absent); tuberculosis = **caseating** (central cheesy necrosis, AFB present). Getting this distinction right is the single highest-yield point — it separates an immunosuppression-treated disease from one that would be worsened by steroids.',
  ],

  mechanism: {
    title: 'Non-caseating granulomas; bilateral hilar nodes; ↑Ca²⁺/ACE',
    steps: [
      { id: 's1', label: 'Non-caseating granulomas, unknown cause (diagnosis of exclusion)', emphasis: 'key' },
      { id: 's2', label: 'Bilateral hilar lymphadenopathy = classic CXR', emphasis: 'key' },
      { id: 's3', label: 'Macrophage 1α-hydroxylase → hypercalcaemia; ↑serum ACE', emphasis: 'key' },
      { id: 's4', label: 'Löfgren: erythema nodosum + hilar nodes + arthralgia (good prognosis)' },
      { id: 's5', label: 'MUST exclude TB (caseating + AFB) before immunosuppressing', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Bilateral hilar lymphadenopathy on chest X-ray', mechanism: 'Sarcoidosis (granulomatous nodal involvement)', significance: 'key' },
    { sign: 'Non-caseating epithelioid granulomas, organisms absent', mechanism: 'Sarcoidosis histology', significance: 'key' },
    { sign: 'Hypercalcaemia + hypercalciuria', mechanism: 'Granuloma 1α-hydroxylase makes calcitriol', significance: 'key' },
    { sign: 'Erythema nodosum + hilar adenopathy + arthralgia', mechanism: 'Löfgren syndrome (favourable prognosis)', significance: 'supportive' },
    { sign: 'Raised serum ACE and BAL CD4:CD8 ratio', mechanism: 'Active granulomatous (Th1) inflammation', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The classic chest X-ray finding in sarcoidosis', meaning: 'Bilateral hilar lymphadenopathy' },
    { clue: 'The granuloma type of sarcoidosis', meaning: 'Non-caseating (non-necrotising)' },
    { clue: 'The mechanism of hypercalcaemia in sarcoidosis', meaning: 'Macrophage 1α-hydroxylase → calcitriol' },
    { clue: 'The disease that must be excluded before treating', meaning: 'Tuberculosis (caseating granulomas + AFB)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Many cases remit spontaneously; corticosteroids treat organ-threatening disease (eye, heart, CNS, hypercalcaemia). Steroids would be dangerous if the "granulomas" were actually TB — hence excluding [[tuberculosis-pathology]] first. Contrast the fibrosing pneumoconioses/IPF of [[pulmonary-fibrosis-pneumoconioses]]; hypercalcaemia links to renal calcium handling ([[renal-calcium-phosphate-handling]]).' },
  ],

  mnemonics: [
    { hook: 'Sarcoid = "non-caseating granulomas, bilateral hilar nodes, ↑Ca/ACE"', expansion: ['Young, often female/African descent', 'Diagnosis of exclusion', 'Asteroid + Schaumann bodies'] },
    { hook: 'Löfgren = "Erythema nodosum + Hilar nodes + Arthralgia" (good prognosis)', expansion: ['Acute presentation', 'Often self-limiting'] },
  ],

  traps: [
    {
      questionCategory: 'Distinguishing sarcoidosis from tuberculosis',
      wrongInstinct: 'A patient with lung granulomas and hilar nodes can be started on steroids for sarcoidosis',
      rightAnswer: 'Sarcoid granulomas are NON-caseating with no organisms; you must EXCLUDE tuberculosis (caseating granulomas, AFB-positive) first, because giving immunosuppressive steroids to a TB patient can cause disseminated infection',
      why: 'The two look similar radiographically but demand opposite treatments; the caseation/AFB distinction protects against immunosuppressing an occult infection.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A young woman has bilateral hilar lymphadenopathy, erythema nodosum and hypercalcaemia. Biopsy shows non-caseating granulomas with negative stains for organisms. The hypercalcaemia is due to:',
      options: [
        { id: 'a', text: 'Excess parathyroid hormone' },
        { id: 'b', text: 'Granuloma macrophage 1α-hydroxylase producing calcitriol' },
        { id: 'c', text: 'Bone metastases' },
        { id: 'd', text: 'Vitamin D deficiency' },
      ],
      answerId: 'b',
      explanation: 'In sarcoidosis, activated macrophages within granulomas express 1α-hydroxylase, converting 25-OH vitamin D to active calcitriol, which increases intestinal calcium absorption and causes hypercalcaemia/hypercalciuria.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'The single most important feature distinguishing sarcoidosis from tuberculosis on a lung biopsy is:',
      options: [
        { id: 'a', text: 'The presence of giant cells' },
        { id: 'b', text: 'Whether the granulomas are non-caseating (sarcoid) or caseating with acid-fast bacilli (TB)' },
        { id: 'c', text: 'The size of the granulomas' },
        { id: 'd', text: 'The presence of lymphocytes' },
      ],
      answerId: 'b',
      explanation: 'Sarcoid granulomas are non-caseating and organism-negative, whereas tuberculous granulomas show central caseous necrosis with acid-fast bacilli. This distinction is critical because their treatments (immunosuppression vs anti-TB drugs) are opposite.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default sarcoidosisGranulomatousLung;
