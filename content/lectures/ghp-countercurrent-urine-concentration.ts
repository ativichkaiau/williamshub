import type { Lecture } from '../../lib/types';

export const ghpCountercurrentUrineConcentration: Lecture = {
  id: 'ghp-countercurrent-urine-concentration',
  title: 'Countercurrent Multiplier & Urine Concentration',
  system: 'renal',
  source: 'Ch 28 — Regulation of Extracellular Fluid Osmolarity & Sodium',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'Ch 28 Osmolarity & Sodium' },
    { kind: 'mechanism', label: 'Countercurrent multiplication' },
    { kind: 'exam', label: 'Medullary gradient' },
  ],

  highYield: [
    '**Concentrating urine needs three things: a hyperosmotic medulla, ADH, and a collecting duct that runs through it.** Remove any one and concentration fails. The medullary gradient runs from **~300 mOsm/L** at the corticomedullary junction to about **1200–1400** at the papilla, and that gradient is the osmotic engine that pulls water out of the collecting duct.',
    '**The single effect is the thick ascending limb, and countercurrent flow multiplies it along the axis.** Active **NKCC2** transport can only generate a **~200 mOsm/L** difference between limb and interstitium at any one level. Because the descending and ascending limbs run in **opposite directions**, that modest single effect is repeated and stacked down the loop, multiplying to the full **1200** gradient. Longer loops multiply further, which is why **juxtamedullary** nephrons do the concentrating.',
    '**Urea contributes up to half the medullary gradient, and it is recycled deliberately.** ADH increases **UT-A1** urea permeability in the **inner medullary collecting duct**, so urea entering the interstitium adds osmoles without needing active transport. Urea then re-enters the loop and recirculates. This is why **malnourished** patients, with little urea to work with, concentrate urine poorly despite normal ADH.',
    '**The vasa recta preserve the gradient by being countercurrent exchangers, not multipliers.** They dip into and out of the medulla in parallel hairpins, so solute entering the descending limb diffuses straight back out of the ascending limb — the gradient is **passively preserved** rather than washed away. Their flow is deliberately **low**; increasing medullary flow washes out the gradient and impairs concentration.',
    '**Free water clearance turns all this into a number.** **CH₂O = V − Cosm**, where **Cosm = (Uosm × V) ÷ Posm**. A **positive** value means dilute urine and net water excretion; a **negative** value (often written TcH₂O) means concentrated urine and net water conservation. It separates the water problem from the solute problem cleanly.',
    '**Concentrating ability fails by predictable routes, and each maps to one of the three requirements.** No ADH → **central diabetes insipidus**; unresponsive duct → **nephrogenic**; washed-out gradient → **loop diuretics**, osmotic diuresis or high medullary flow; damaged medulla → chronic disease. This is why loss of concentrating ability is one of the earliest signs in [[chronic-kidney-disease]].',
  ],

  mechanism: {
    title: 'Stacking a small gradient into a large one',
    steps: [
      { id: 's1', label: 'Thick ascending limb pumps NaCl out, water cannot follow', emphasis: 'key' },
      { id: 's2', label: 'Single effect: ~200 mOsm/L difference at any one level' },
      { id: 's3', label: 'Countercurrent flow repeats the effect down the loop axis', emphasis: 'key' },
      { id: 's4', label: 'Gradient multiplies to ~1200 mOsm/L at the papilla' },
      { id: 's5', label: 'ADH-driven urea recycling adds up to half the gradient' },
      { id: 's6', label: 'Vasa recta exchange passively, preserving rather than washing out the gradient', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Large volumes of dilute urine despite dehydration', mechanism: 'Absent ADH or an unresponsive collecting duct', significance: 'key' },
    { sign: 'Poor concentrating ability in severe malnutrition', mechanism: 'Insufficient urea to build the medullary gradient', significance: 'key' },
    { sign: 'Loss of concentrating ability as an early sign of chronic kidney disease', mechanism: 'Medullary architecture and gradient are damaged before GFR falls markedly', significance: 'key' },
    { sign: 'Isosthenuria — urine fixed near plasma osmolality', mechanism: 'The gradient can neither concentrate nor dilute', significance: 'key' },
    { sign: 'Impaired concentration during loop diuretic therapy', mechanism: 'NKCC2 blockade abolishes the single effect that builds the gradient', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Urine osmolality above 800 mOsm/kg after water deprivation', meaning: 'Intact ADH release, medullary gradient and duct responsiveness' },
    { clue: 'Dilute urine after deprivation that concentrates with desmopressin', meaning: 'Central diabetes insipidus' },
    { clue: 'Dilute urine after deprivation that does not respond to desmopressin', meaning: 'Nephrogenic diabetes insipidus' },
    { clue: 'Positive free water clearance', meaning: 'Net excretion of solute-free water — dilute urine' },
    { clue: 'Urine osmolality fixed near 300 mOsm/kg', meaning: 'Isosthenuria from a lost medullary gradient' },
  ],

  treatment: [
    {
      logic: 'Identify which of the three requirements has failed before treating',
      detail: 'Absent hormone responds to **desmopressin**; an unresponsive duct does not. A **washed-out gradient** responds to neither and needs the osmotic diuresis or diuretic removed — the reasoning that separates the diabetes insipidus subtypes in [[adh-water-regulation]].',
    },
    {
      logic: 'Expect osmotic diuresis to defeat concentration regardless of ADH',
      detail: 'A large non-reabsorbable solute load — glucose, mannitol, urea — holds water in the tubule and raises **medullary flow**, washing out the gradient. Urine volume stays high with a urine osmolality near plasma even when ADH is maximal.',
    },
  ],

  mnemonics: [
    { hook: 'Gradient, hormone, duct — all three or nothing', expansion: ['Hyperosmotic medulla', 'ADH present', 'Collecting duct able to respond'] },
    { hook: 'Multiplier makes it, exchanger keeps it', expansion: ['Loop of Henle = countercurrent multiplier (active)', 'Vasa recta = countercurrent exchanger (passive)'] },
  ],

  traps: [
    {
      questionCategory: 'Role of the vasa recta',
      wrongInstinct: 'The vasa recta actively generate the medullary gradient',
      rightAnswer: 'They passively preserve it by countercurrent exchange; the loop generates it',
      why: 'Multiplication requires active transport; exchange requires only hairpin geometry',
    },
    {
      questionCategory: 'Why a malnourished patient cannot concentrate',
      wrongInstinct: 'ADH secretion must be impaired',
      rightAnswer: 'Insufficient urea limits the medullary gradient even with normal ADH',
      why: 'Urea supplies up to half the osmoles of the inner medulla',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Active transport in the thick ascending limb can generate only a 200 mOsm/L gradient at any level, yet the papilla reaches 1200 mOsm/L. What accounts for the difference?',
      options: [
        { id: 'a', text: 'Active transport in the thin descending limb adds further solute' },
        { id: 'b', text: 'Countercurrent flow repeats and stacks the single effect along the loop axis' },
        { id: 'c', text: 'The vasa recta actively pump solute into the interstitium' },
        { id: 'd', text: 'ADH directly increases sodium transport in the loop' },
      ],
      answerId: 'b',
      explanation: 'The 200 mOsm/L single effect is multiplied because descending and ascending limbs run in opposite directions, so the effect is repeated at successive levels and accumulates down the corticomedullary axis.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A severely malnourished patient cannot concentrate urine despite normal ADH secretion and intact tubules. Why?',
      options: [
        { id: 'a', text: 'Aquaporin-2 cannot be synthesised' },
        { id: 'b', text: 'Insufficient urea is available to contribute to the medullary osmotic gradient' },
        { id: 'c', text: 'The vasa recta are absent' },
        { id: 'd', text: 'Glomerular filtration has ceased' },
      ],
      answerId: 'b',
      explanation: 'Urea supplies up to half the inner medullary osmolality and is recycled under ADH control. With little protein intake there is insufficient urea to build the gradient, so concentrating ability falls even with normal hormone and tubules.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A patient has a urine osmolality fixed at about 300 mOsm/kg regardless of hydration. What does this indicate?',
      options: [
        { id: 'a', text: 'Isosthenuria from loss of the medullary gradient' },
        { id: 'b', text: 'Excessive ADH secretion' },
        { id: 'c', text: 'Normal renal concentrating function' },
        { id: 'd', text: 'Complete obstruction of the ureters' },
      ],
      answerId: 'a',
      explanation: 'Urine fixed at plasma osmolality means the kidney can neither concentrate nor dilute. This isosthenuria reflects loss of the medullary gradient and diluting capacity, characteristically seen as chronic kidney disease advances.',
      tests: 'investigation',
    },
  ],
};

export default ghpCountercurrentUrineConcentration;
