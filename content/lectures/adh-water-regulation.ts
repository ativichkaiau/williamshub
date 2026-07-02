import type { Lecture } from '../../lib/types';

export const adhWaterRegulation: Lecture = {
  id: 'adh-water-regulation',
  title: 'ADH, Aquaporins & Water Balance',
  system: 'renal',
  source: 'L4 — Urinary Concentration & Dilution',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L4 Concentration & Dilution' },
    { kind: 'mechanism', label: 'Aquaporin-2' },
    { kind: 'disease', label: 'Diabetes insipidus' },
  ],

  highYield: [
    '**Antidiuretic hormone (ADH / vasopressin) is the final regulator of urine concentration.** Made in the hypothalamus (supraoptic/paraventricular nuclei), stored in and released from the posterior pituitary, it controls how much of the medullary gradient the collecting duct is allowed to use — i.e. how much water is reabsorbed.',
    '**Mechanism: ADH → V2 receptor → cAMP → insertion of aquaporin-2 (AQP2) water channels** into the apical membrane of collecting-duct principal cells. Water then flows down the osmotic gradient into the hypertonic medulla → **concentrated, low-volume urine (antidiuresis)**. Without ADH, the collecting duct is water-impermeable → large volumes of **dilute urine (water diuresis)**.',
    '**ADH release is driven mainly by plasma osmolality:** hypothalamic **osmoreceptors** detect a rise of just ~1–2% and trigger ADH (and thirst). A large fall in blood volume/pressure (sensed by baroreceptors) is a second, stronger but less sensitive stimulus. So water deprivation → ↑osmolality → ADH → concentrated urine; water excess → ↓osmolality → ADH off → dilute urine.',
    '**Diabetes insipidus (DI) = failure of the ADH system → copious dilute urine + thirst.** **Central DI** = insufficient ADH (responds to desmopressin); **nephrogenic DI** = kidney unresponsive to ADH (lithium, hypercalcaemia, hereditary V2/AQP2 defects; does not respond to desmopressin). Contrast with **SIADH** (too much ADH → water retention, dilute plasma, **hyponatraemia**).',
    '**The kidney can produce urine from ~50 up to ~1200 mOsm/kg** — dilute when ADH is off and the diluting segment works, concentrated when ADH is high and the medullary gradient is intact. Both an adequate gradient (loop) AND ADH action (collecting duct) are required to concentrate; failure of either causes polyuria.',
  ],

  mechanism: {
    title: 'Osmolality → ADH → AQP2 → water reabsorption',
    steps: [
      { id: 's1', label: 'Osmoreceptors sense ↑plasma osmolality (~1–2%)', emphasis: 'key' },
      { id: 's2', label: 'ADH released from posterior pituitary → V2 receptor → cAMP', emphasis: 'key' },
      { id: 's3', label: 'AQP2 inserted in collecting-duct apical membrane', emphasis: 'key' },
      { id: 's4', label: 'Water flows into hypertonic medulla → concentrated urine (antidiuresis)' },
      { id: 's5', label: 'No ADH → water-impermeable duct → dilute urine (water diuresis)' },
    ],
  },

  examFindings: [
    { sign: 'Concentrated, low-volume urine after water deprivation', mechanism: 'High ADH → AQP2 → water reabsorption', significance: 'key' },
    { sign: 'Large volumes of dilute urine + intense thirst', mechanism: 'Diabetes insipidus (ADH deficiency or resistance)', significance: 'key' },
    { sign: 'Hyponatraemia with inappropriately concentrated urine', mechanism: 'SIADH (excess ADH → water retention)', significance: 'key' },
    { sign: 'Nephrogenic DI on lithium or in hypercalcaemia', mechanism: 'Collecting duct unresponsive to ADH', significance: 'supportive' },
    { sign: 'Desmopressin concentrates urine in central but not nephrogenic DI', mechanism: 'Distinguishes ADH deficiency from resistance', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The channel ADH inserts to reabsorb water', meaning: 'Aquaporin-2 (AQP2) in the collecting duct' },
    { clue: 'The receptor mediating ADH\'s renal water effect', meaning: 'The V2 receptor (cAMP)' },
    { clue: 'The main stimulus for ADH release', meaning: 'A rise in plasma osmolality (osmoreceptors)' },
    { clue: 'The water-test distinguishing central from nephrogenic DI', meaning: 'Response of urine osmolality to desmopressin (responds = central)' },
  ],

  treatment: [
    { logic: 'Why ADH matters', detail: 'ADH exploits the medullary gradient built in [[urine-concentration-countercurrent]]; both are needed to concentrate. It is the water arm of whole-body [[volume-water-balance-hormones]] and links to endocrine control of osmolality. Excess (SIADH) and deficiency (DI) are common causes of dysnatraemia; nephrogenic DI is a classic lithium and hypercalcaemia effect ([[renal-calcium-phosphate-handling]]).' },
  ],

  mnemonics: [
    { hook: 'ADH = "Add Aquaporins → Duct Holds water"', expansion: ['V2 → cAMP → AQP2 insertion', 'No ADH → dilute urine'] },
    { hook: 'DI = Dilute Insipid urine; SIADH = Soaked (water retained, low Na⁺)', expansion: ['Central DI responds to desmopressin', 'Nephrogenic DI does not', 'SIADH → hyponatraemia'] },
  ],

  traps: [
    {
      questionCategory: 'Central vs nephrogenic diabetes insipidus',
      wrongInstinct: 'All diabetes insipidus improves with desmopressin (ADH)',
      rightAnswer: 'Only CENTRAL DI (ADH deficiency) responds to desmopressin by concentrating the urine; NEPHROGENIC DI (kidney unresponsive to ADH, e.g. lithium, hypercalcaemia) does not respond',
      why: 'The desmopressin response localises the lesion: if giving ADH works, the problem was a lack of ADH (central); if it fails, the receptor/channel machinery is the problem (nephrogenic).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'ADH increases water reabsorption in the collecting duct by:',
      options: [
        { id: 'a', text: 'Opening ENaC sodium channels' },
        { id: 'b', text: 'Inserting aquaporin-2 water channels into the apical membrane' },
        { id: 'c', text: 'Blocking the Na⁺/K⁺/2Cl⁻ cotransporter' },
        { id: 'd', text: 'Increasing GFR' },
      ],
      answerId: 'b',
      explanation: 'ADH binds the V2 receptor, raising cAMP and driving insertion of aquaporin-2 channels into the apical membrane of principal cells; water then follows the osmotic gradient into the hypertonic medulla, concentrating the urine.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient passes large volumes of dilute urine that fails to concentrate after desmopressin. This indicates:',
      options: [
        { id: 'a', text: 'Central diabetes insipidus' },
        { id: 'b', text: 'Nephrogenic diabetes insipidus' },
        { id: 'c', text: 'SIADH' },
        { id: 'd', text: 'Normal water handling' },
      ],
      answerId: 'b',
      explanation: 'Failure to concentrate the urine despite exogenous ADH (desmopressin) means the collecting duct cannot respond — nephrogenic DI (e.g. lithium, hypercalcaemia, hereditary V2/AQP2 defects). Central DI would respond to desmopressin.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default adhWaterRegulation;
