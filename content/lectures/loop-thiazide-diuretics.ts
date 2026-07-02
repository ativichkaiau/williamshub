import type { Lecture } from '../../lib/types';

export const loopThiazideDiuretics: Lecture = {
  id: 'loop-thiazide-diuretics',
  title: 'Loop & Thiazide Diuretics',
  system: 'renal',
  source: 'L12 — Diuretics',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L12 Loop/Thiazide' },
    { kind: 'mechanism', label: 'NKCC2 vs NCC transporters' },
    { kind: 'exam', label: 'Calcium effects; hypokalaemia' },
  ],

  highYield: [
    '**LOOP diuretics (furosemide, bumetanide, torasemide) block the NA-K-2CL COTRANSPORTER (NKCC2) in the THICK ASCENDING LIMB — the site of the largest sodium reabsorption — so they are the most POTENT diuretics ("high-ceiling"). By abolishing the medullary concentration gradient they also impair urine concentration. Uses: fluid overload in HEART FAILURE, pulmonary oedema, CKD/nephrotic oedema, and hypercalcaemia. They INCREASE calcium excretion (lose the lumen-positive gradient).**',
    '**THIAZIDES (hydrochlorothiazide, chlortalidone, indapamide) block the NA-CL COTRANSPORTER (NCC) in the DISTAL CONVOLUTED TUBULE — a milder diuretic effect but effective ANTIHYPERTENSIVES (first-line in many). Distinctively, thiazides DECREASE calcium excretion (useful in calcium stones/osteoporosis) — the mirror image of loops ("loops lose calcium, thiazides retain calcium").**',
    '**Both act from the LUMEN (secreted via the proximal organic-anion transporter) and both increase distal sodium delivery, driving potassium and hydrogen secretion → HYPOKALAEMIA and metabolic ALKALOSIS. Shared adverse effects: hypokalaemia, hyponatraemia (thiazides especially), hypomagnesaemia, hyperuricaemia (gout), and volume depletion. Thiazides additionally cause hyperGLYCAEMIA and hyperLIPIDAEMIA; loops cause OTOTOXICITY (dose-related) and are sulfonamide-related.**',
    '**Key contrasts: potency (loop >> thiazide); site (thick ascending limb vs distal tubule); calcium (loops waste, thiazides retain); efficacy in low GFR (loops still work in CKD, thiazides lose efficacy at low GFR). Thiazides are for hypertension/mild oedema; loops for significant fluid overload. Monitor electrolytes and renal function.**',
    '**The take-home: LOOP (NKCC2, thick ascending limb) = most potent, for fluid OVERLOAD, WASTES calcium, ototoxic; THIAZIDE (NCC, distal tubule) = antihypertensive, RETAINS calcium, causes hyperglycaemia/uricaemia. Both → HYPOKALAEMIA + metabolic alkalosis; loops work in CKD, thiazides do not.** Potassium-sparing/osmotic agents are [[potassium-sparing-osmotic-diuretics]]; the diuretics overview is [[diuretics-pharmacology]]; electrolytes are [[potassium-disorders]].',
  ],

  mechanism: {
    title: 'Loop (NKCC2, thick ascending limb; potent; wastes Ca; ototoxic) vs thiazide (NCC, distal tubule; antihypertensive; retains Ca; hyperglycaemia); both → hypokalaemia/alkalosis',
    steps: [
      { id: 's1', label: 'Loop blocks NKCC2 in thick ascending limb → most potent diuresis', emphasis: 'key' },
      { id: 's2', label: 'Thiazide blocks NCC in distal tubule → milder; first-line antihypertensive', emphasis: 'key' },
      { id: 's3', label: 'Loops INCREASE calcium excretion; thiazides DECREASE it', emphasis: 'key' },
      { id: 's4', label: 'Both ↑distal Na delivery → K+/H+ loss → hypokalaemia + metabolic alkalosis', emphasis: 'danger' },
      { id: 's5', label: 'Loops work in CKD; thiazides lose efficacy at low GFR', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Rapid diuresis in acute pulmonary oedema', mechanism: 'Loop diuretic (NKCC2 blockade)', significance: 'key' },
    { sign: 'Hypokalaemia with metabolic alkalosis on a diuretic', mechanism: 'Increased distal Na delivery → K+/H+ secretion', significance: 'key' },
    { sign: 'Reduced urinary calcium (helpful in calcium stones)', mechanism: 'Thiazide (decreases calcium excretion)', significance: 'key' },
    { sign: 'Increased urinary calcium used to treat hypercalcaemia', mechanism: 'Loop diuretic (increases calcium excretion)', significance: 'supportive' },
    { sign: 'New hyperglycaemia, hyperuricaemia and hyponatraemia on an antihypertensive', mechanism: 'Thiazide adverse effects', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The transporter blocked by loop diuretics', meaning: 'Na-K-2Cl cotransporter (NKCC2)' },
    { clue: 'The transporter blocked by thiazides', meaning: 'Na-Cl cotransporter (NCC)' },
    { clue: 'The diuretic that lowers urinary calcium', meaning: 'Thiazide' },
    { clue: 'The shared electrolyte/acid–base effect', meaning: 'Hypokalaemia with metabolic alkalosis' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Loop and thiazide diuretics are among the most-used drugs, and their contrasts guide prescribing: loops (potent, work in CKD, waste calcium, ototoxic) for significant fluid overload and hypercalcaemia; thiazides (antihypertensive, retain calcium, but hyperglycaemia/uricaemia and ineffective at low GFR) for hypertension and mild oedema/stone prevention. Both cause hypokalaemia and metabolic alkalosis, so electrolytes and renal function are monitored. Potassium-sparing/osmotic agents are [[potassium-sparing-osmotic-diuretics]]; overview [[diuretics-pharmacology]].' },
  ],

  mnemonics: [
    { hook: '"Loops Lose calcium (and are the Largest/most potent); thiazides reTain calcium"', expansion: ['Loop = NKCC2 (thick ascending limb)', 'Thiazide = NCC (distal tubule)'] },
    { hook: 'Both cause "hypo-K + alkalosis"; thiazide adds "hyperGLUC" (glucose/urate/lipid/Ca)', expansion: ['Loops work in CKD', 'Thiazides fail at low GFR'] },
  ],

  traps: [
    {
      questionCategory: 'Calcium handling of loops vs thiazides',
      wrongInstinct: 'Loop and thiazide diuretics have the same effect on calcium excretion',
      rightAnswer: 'They are OPPOSITE: LOOP diuretics INCREASE urinary calcium (by abolishing the lumen-positive potential in the thick ascending limb that drives calcium reabsorption) — useful in hypercalcaemia — whereas THIAZIDES DECREASE urinary calcium — useful in recurrent calcium stones and osteoporosis; "loops lose calcium, thiazides retain calcium"',
      why: 'This opposite calcium handling determines drug choice — a loop for hypercalcaemia, a thiazide for calcium-stone prevention — so confusing them leads to the wrong prescription.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A thiazide diuretic and a loop diuretic differ in their effect on urinary calcium in that:',
      options: [
        { id: 'a', text: 'Both increase calcium excretion equally' },
        { id: 'b', text: 'Loops increase calcium excretion; thiazides decrease it' },
        { id: 'c', text: 'Both decrease calcium excretion equally' },
        { id: 'd', text: 'Neither affects calcium excretion' },
      ],
      answerId: 'b',
      explanation: 'Loop diuretics increase urinary calcium (helpful in hypercalcaemia) by abolishing the gradient driving calcium reabsorption in the thick ascending limb, whereas thiazides decrease urinary calcium (helpful in calcium stones/osteoporosis) — "loops lose, thiazides retain" calcium.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Why do both loop and thiazide diuretics tend to cause hypokalaemia and metabolic alkalosis?',
      options: [
        { id: 'a', text: 'They directly block potassium channels in muscle' },
        { id: 'b', text: 'They increase sodium delivery to the distal nephron, enhancing potassium and hydrogen secretion' },
        { id: 'c', text: 'They stimulate gut potassium loss' },
        { id: 'd', text: 'They inhibit aldosterone' },
      ],
      answerId: 'b',
      explanation: 'By blocking sodium reabsorption upstream, both classes increase sodium delivery to the distal nephron/collecting duct, where enhanced sodium reabsorption drives potassium and hydrogen secretion — producing hypokalaemia and metabolic alkalosis.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default loopThiazideDiuretics;
