import type { Lecture } from '../../lib/types';

export const renalCalciumPhosphateHandling: Lecture = {
  id: 'renal-calcium-phosphate-handling',
  title: 'Renal Handling of Ca²⁺, PO₄, Mg²⁺, Cl⁻ & Urate',
  system: 'renal',
  source: 'L7 — Renal Handling of Electrolytes',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L7 Electrolytes' },
    { kind: 'mechanism', label: 'PTH & vitamin D' },
    { kind: 'exam', label: 'CKD-mineral bone' },
  ],

  highYield: [
    '**Chloride follows sodium.** Cl⁻ is reabsorbed alongside Na⁺ throughout the nephron — paracellularly in the PCT, via NKCC2 in the thick ascending limb, and via the Na⁺/Cl⁻ cotransporter (NCC, the thiazide target) in the DCT. Its handling largely tracks Na⁺ and acid–base status (it trades with HCO₃⁻).',
    '**Calcium: ~98–99% of filtered Ca²⁺ is reabsorbed, most passively (paracellular) in the PCT and thick ascending limb, with fine regulation in the DCT.** **PTH increases distal Ca²⁺ reabsorption** (and, with **active vitamin D / calcitriol**, raises serum Ca²⁺). Loop diuretics (blocking the lumen-positive gradient in the thick ascending limb) INCREASE Ca²⁺ excretion (used in hypercalcaemia); **thiazides DECREASE** Ca²⁺ excretion (used to prevent Ca²⁺ stones).',
    '**Phosphate is reabsorbed in the PCT via Na⁺-phosphate cotransporters, and PTH is phosphaturic — it INHIBITS this reabsorption**, dumping phosphate in urine. **FGF23** (from bone) is the other major phosphaturic hormone and suppresses calcitriol. So PTH raises Ca²⁺ but lowers phosphate; the kidney is the main site where phosphate balance is set.',
    '**The kidney activates vitamin D:** the PCT enzyme **1α-hydroxylase** converts 25-OH-vitamin D to active **1,25-(OH)₂-vitamin D (calcitriol)**, stimulated by PTH and low phosphate. This is why chronic kidney disease impairs vitamin D activation → hypocalcaemia → secondary hyperparathyroidism (part of CKD-mineral and bone disorder).',
    '**In chronic kidney disease, falling GFR reduces phosphate excretion → hyperphosphataemia**, and reduced calcitriol → hypocalcaemia; together these drive **secondary hyperparathyroidism** and renal bone disease. **Magnesium** is reabsorbed mainly (paracellularly) in the thick ascending limb, so loop diuretics also waste Mg²⁺. **Urate** is filtered, then largely reabsorbed in the PCT (via URAT1); volume depletion and certain drugs raise urate and can precipitate gout.',
  ],

  mechanism: {
    title: 'Cl⁻ follows Na⁺; PTH/vit D tune Ca²⁺↑ & PO₄↓; CKD disrupts both',
    steps: [
      { id: 's1', label: 'Cl⁻ reabsorbed with Na⁺ (paracellular, NKCC2, NCC)', emphasis: 'key' },
      { id: 's2', label: 'Ca²⁺: mostly passive (PCT/TAL); PTH ↑ distal reabsorption', emphasis: 'key' },
      { id: 's3', label: 'PTH is phosphaturic — inhibits PCT Na⁺-phosphate cotransport', emphasis: 'key' },
      { id: 's4', label: 'PCT 1α-hydroxylase makes active vitamin D (calcitriol)' },
      { id: 's5', label: 'CKD: ↓PO₄ excretion + ↓calcitriol → secondary hyperparathyroidism', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Thiazides reduce urinary Ca²⁺ (used for Ca²⁺ stones)', mechanism: 'Enhanced distal Ca²⁺ reabsorption', significance: 'key' },
    { sign: 'Loop diuretics increase urinary Ca²⁺ (used in hypercalcaemia)', mechanism: 'Loss of the lumen-positive gradient in the thick ascending limb', significance: 'key' },
    { sign: 'Phosphaturia with high PTH', mechanism: 'PTH inhibits PCT Na⁺-phosphate cotransport', significance: 'key' },
    { sign: 'Hyperphosphataemia + hypocalcaemia in CKD', mechanism: '↓GFR (less PO₄ excretion) + ↓calcitriol', significance: 'key' },
    { sign: 'Hypomagnesaemia on chronic loop diuretics', mechanism: 'Mg²⁺ reabsorption occurs in the thick ascending limb', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The hormone that raises serum Ca²⁺ but causes phosphaturia', meaning: 'Parathyroid hormone (PTH)' },
    { clue: 'The renal enzyme that activates vitamin D', meaning: '1α-hydroxylase (proximal tubule)' },
    { clue: 'The diuretic that lowers urinary calcium', meaning: 'Thiazide (increases distal Ca²⁺ reabsorption)' },
    { clue: 'Why CKD causes secondary hyperparathyroidism', meaning: 'Phosphate retention + reduced calcitriol → hypocalcaemia → ↑PTH' },
  ],

  treatment: [
    { logic: 'Why these electrolytes matter', detail: 'This is the renal arm of calcium–phosphate endocrinology (PTH/vitamin D — overlaps HEN-1) and the basis of CKD-mineral bone disorder, stone disease and gout. The transport builds on [[tubular-reabsorption-secretion]]; diuretic effects parallel [[renal-potassium-handling]]. Urate and crystals appear on [[urine-microscopy-sediment]]; phosphate is also a urinary buffer for acid ([[renal-acid-excretion]]).' },
  ],

  mnemonics: [
    { hook: 'PTH: "Calcium Up, Phosphate Down (Peed out)"', expansion: ['↑ distal Ca²⁺ reabsorption', '↓ PCT phosphate reabsorption (phosphaturic)', 'Activates vitamin D via 1α-hydroxylase'] },
    { hook: 'Diuretics & calcium: "Loops Lose Ca²⁺, thiazides Take it back"', expansion: ['Loop → hypercalciuria (treat hypercalcaemia)', 'Thiazide → hypocalciuria (prevent Ca²⁺ stones)'] },
  ],

  traps: [
    {
      questionCategory: 'Diuretic effects on urinary calcium',
      wrongInstinct: 'All diuretics increase calcium excretion because they increase urine flow',
      rightAnswer: 'LOOP diuretics increase urinary calcium (used to treat hypercalcaemia), whereas THIAZIDES DECREASE urinary calcium (used to prevent calcium stones) — opposite effects',
      why: 'Loop diuretics abolish the lumen-positive potential in the thick ascending limb that drives paracellular Ca²⁺ reabsorption, while thiazides enhance distal Ca²⁺ reabsorption; the divergence is a classic exam point.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Parathyroid hormone has which combination of effects on the kidney?',
      options: [
        { id: 'a', text: 'Increases calcium reabsorption and increases phosphate excretion' },
        { id: 'b', text: 'Decreases calcium reabsorption and decreases phosphate excretion' },
        { id: 'c', text: 'Increases both calcium and phosphate reabsorption' },
        { id: 'd', text: 'Has no renal effect' },
      ],
      answerId: 'a',
      explanation: 'PTH increases distal calcium reabsorption (raising serum Ca²⁺) while inhibiting proximal phosphate reabsorption (phosphaturia). It also stimulates 1α-hydroxylase to activate vitamin D.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'In advanced chronic kidney disease, secondary hyperparathyroidism develops largely because of:',
      options: [
        { id: 'a', text: 'Phosphate retention and reduced calcitriol, causing hypocalcaemia' },
        { id: 'b', text: 'Excess vitamin D activation' },
        { id: 'c', text: 'Increased renal phosphate excretion' },
        { id: 'd', text: 'Hypercalcaemia suppressing the parathyroids' },
      ],
      answerId: 'a',
      explanation: 'A failing kidney excretes less phosphate (hyperphosphataemia) and activates less vitamin D (low calcitriol); the resulting hypocalcaemia drives the parathyroids to hypersecrete PTH — the mechanism of CKD-mineral and bone disorder.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default renalCalciumPhosphateHandling;
