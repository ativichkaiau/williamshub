import type { Lecture } from '../../lib/types';

export const ghpLoopDistalCollectingTransport: Lecture = {
  id: 'ghp-loop-distal-collecting-transport',
  title: 'Loop of Henle, Distal Tubule & Collecting Duct',
  system: 'renal',
  source: 'Ch 27 — Urine Formation II — Tubular Processing of the Filtrate',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'Ch 27 Tubular Processing' },
    { kind: 'mechanism', label: 'Segment-specific transporters' },
    { kind: 'exam', label: 'Diuretic target sites' },
  ],

  highYield: [
    '**Each segment has one signature transporter, and every diuretic is defined by which one it blocks.** Thick ascending limb: **NKCC2** (loop diuretics). Early distal tubule: **NCC**, the Na⁺-Cl⁻ cotransporter (thiazides). Collecting duct principal cell: **ENaC** (amiloride) under **aldosterone** control. Learn the four and the pharmacology of [[loop-thiazide-diuretics]] becomes deduction rather than memorisation.',
    '**The descending and ascending limbs have opposite permeabilities, and that asymmetry is the whole trick.** The **thin descending** limb is water-permeable but solute-impermeable, so fluid entering it **concentrates**. The **thick ascending** limb is water-**impermeable** but pumps NaCl out — so it **dilutes** the fluid. The ascending limb is therefore called the **diluting segment**, and it is what allows dilute urine to be made at all.',
    '**NKCC2 moves four ions and generates a positive lumen, which drives a second wave of reabsorption.** It carries **1 Na⁺, 1 K⁺ and 2 Cl⁻** inward; potassium then leaks back into the lumen, leaving it **electropositive**. That charge drives **paracellular** reabsorption of **Ca²⁺ and Mg²⁺**. This is why loop diuretics cause **hypocalcaemia and hypomagnesaemia**, while thiazides — acting distally — actually **retain** calcium.',
    '**The distinction between thiazide and loop effects on calcium is a favourite and follows from site.** Loop agents abolish the lumen-positive potential and so **lose** calcium — useful in hypercalcaemia. Thiazides block NCC, lowering intracellular sodium and enhancing basolateral **Na⁺/Ca²⁺ exchange**, so calcium is **reabsorbed** — useful in calcium stones and a cause of hypercalcaemia.',
    '**The collecting duct is where the final decisions are made, and it has two cell types.** **Principal cells** reabsorb Na⁺ through **ENaC** and secrete K⁺, both under **aldosterone**; water follows only if **ADH** has inserted **aquaporin-2**. **Intercalated cells** handle acid–base, secreting H⁺ (type A) or bicarbonate (type B). Sodium and water handling are therefore **separable** here in a way they never are proximally.',
    '**Aldosterone and ADH act on the same segment but answer different questions.** Aldosterone answers *how much sodium*, and by driving ENaC it simultaneously creates the electrical gradient that drives **potassium and hydrogen secretion** — which is why hyperaldosteronism gives hypokalaemia and metabolic alkalosis. ADH answers *how much water*, as developed in [[adh-water-regulation]].',
  ],

  mechanism: {
    title: 'Concentrate, dilute, then decide',
    steps: [
      { id: 's1', label: 'Thin descending limb: water leaves → luminal fluid concentrates', emphasis: 'key' },
      { id: 's2', label: 'Thick ascending limb: NKCC2 pumps NaCl out, water cannot follow', emphasis: 'key' },
      { id: 's3', label: 'K⁺ backleak makes the lumen positive → paracellular Ca²⁺ and Mg²⁺ reabsorption' },
      { id: 's4', label: 'Fluid reaching the distal tubule is hypo-osmotic (~100 mOsm/L)', emphasis: 'key' },
      { id: 's5', label: 'NCC reabsorbs NaCl distally; ENaC does so in the collecting duct under aldosterone' },
      { id: 's6', label: 'Water leaves only if ADH has inserted aquaporin-2', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Hypokalaemia and metabolic alkalosis with hyperaldosteronism', mechanism: 'ENaC-driven lumen negativity promotes K⁺ and H⁺ secretion', significance: 'key' },
    { sign: 'Hypocalcaemia and hypomagnesaemia on a loop diuretic', mechanism: 'Loss of the lumen-positive potential that drives paracellular divalent reabsorption', significance: 'key' },
    { sign: 'Hypercalcaemia on a thiazide', mechanism: 'Enhanced distal calcium reabsorption via basolateral Na⁺/Ca²⁺ exchange', significance: 'key' },
    { sign: 'Dilute urine despite dehydration in nephrogenic diabetes insipidus', mechanism: 'Collecting duct unresponsive to ADH, so aquaporin-2 is not inserted', significance: 'key' },
    { sign: 'Hyperkalaemia with a potassium-sparing diuretic', mechanism: 'ENaC blockade removes the gradient driving potassium secretion', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Tubular fluid osmolality ~100 mOsm/L entering the distal tubule', meaning: 'Normal function of the diluting segment' },
    { clue: 'Urine osmolality below plasma in a dehydrated patient', meaning: 'ADH deficiency or collecting duct resistance' },
    { clue: 'Hypokalaemic metabolic alkalosis with hypertension', meaning: 'Mineralocorticoid excess acting on principal cells' },
    { clue: 'Hypokalaemic alkalosis with low blood pressure', meaning: 'A tubular transporter defect such as Bartter or Gitelman rather than aldosterone excess' },
    { clue: 'Urine calcium high on a loop agent and low on a thiazide', meaning: 'Opposite calcium handling at the two diuretic sites' },
  ],

  treatment: [
    {
      logic: 'Pick the diuretic by the transporter, and accept its electrolyte signature',
      detail: 'Loop agents give the largest natriuresis because **NKCC2** handles ~25% of filtered sodium, but they waste **Ca²⁺ and Mg²⁺**. Thiazides are weaker yet **retain calcium**. Neither is interchangeable, and the electrolyte consequences are predictable from the site.',
    },
    {
      logic: 'Separate the sodium question from the water question',
      detail: 'Because aldosterone controls **ENaC** and ADH controls **aquaporin-2**, the collecting duct can retain salt while excreting water or the reverse. Treating hyponatraemia therefore requires knowing which of the two systems is active, not simply giving or withholding fluid.',
    },
  ],

  mnemonics: [
    { hook: 'NKCC2, NCC, ENaC — loop, thiazide, amiloride', expansion: ['Thick ascending: NKCC2', 'Early distal: NCC', 'Collecting duct: ENaC under aldosterone'] },
    { hook: 'Loops Lose calcium, thiazides Take it back', expansion: ['Loop: lumen-positive potential lost → Ca²⁺ excreted', 'Thiazide: Na⁺/Ca²⁺ exchange enhanced → Ca²⁺ retained'] },
  ],

  traps: [
    {
      questionCategory: 'Calcium handling by diuretics',
      wrongInstinct: 'All diuretics increase calcium excretion because they increase urine flow',
      rightAnswer: 'Loop agents waste calcium; thiazides retain it',
      why: 'The effect follows the transporter blocked, not the diuresis itself',
    },
    {
      questionCategory: 'Which limb dilutes',
      wrongInstinct: 'The descending limb dilutes the fluid because water is reabsorbed there',
      rightAnswer: 'The descending limb concentrates it; the thick ascending limb dilutes it',
      why: 'Removing water concentrates; removing solute without water dilutes',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient on a loop diuretic develops hypocalcaemia and hypomagnesaemia. What is the mechanism?',
      options: [
        { id: 'a', text: 'Direct inhibition of a calcium pump in the distal tubule' },
        { id: 'b', text: 'Loss of the lumen-positive potential that drives paracellular divalent cation reabsorption' },
        { id: 'c', text: 'Increased parathyroid hormone secretion' },
        { id: 'd', text: 'Reduced vitamin D activation' },
      ],
      answerId: 'b',
      explanation: 'NKCC2 activity plus potassium backleak makes the thick ascending limb lumen electropositive, which drives paracellular Ca²⁺ and Mg²⁺ reabsorption. Blocking NKCC2 abolishes that potential, so both are lost in the urine.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which segment is responsible for producing hypo-osmotic tubular fluid, and why?',
      options: [
        { id: 'a', text: 'Thin descending limb, because water is reabsorbed there' },
        { id: 'b', text: 'Thick ascending limb, because NaCl is reabsorbed while water cannot follow' },
        { id: 'c', text: 'Proximal tubule, because two-thirds of filtrate is reabsorbed' },
        { id: 'd', text: 'Collecting duct, because ADH acts there' },
      ],
      answerId: 'b',
      explanation: 'The thick ascending limb is water-impermeable but actively pumps NaCl out, so solute leaves without water and the fluid becomes dilute — hence its name, the diluting segment.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'Aldosterone excess produces hypokalaemia and metabolic alkalosis. What links the two?',
      options: [
        { id: 'a', text: 'ENaC-mediated sodium reabsorption makes the lumen electronegative, favouring both K⁺ and H⁺ secretion' },
        { id: 'b', text: 'Aldosterone directly inhibits the Na⁺/K⁺-ATPase' },
        { id: 'c', text: 'Aldosterone blocks bicarbonate reabsorption in the proximal tubule' },
        { id: 'd', text: 'Aldosterone increases aquaporin-2 insertion' },
      ],
      answerId: 'a',
      explanation: 'Aldosterone drives sodium entry through ENaC in principal cells, leaving the lumen negative. That electrical gradient promotes secretion of both potassium and hydrogen ions, producing hypokalaemia and alkalosis together.',
      tests: 'mechanism',
    },
  ],
};

export default ghpLoopDistalCollectingTransport;
