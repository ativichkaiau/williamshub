import type { Lecture } from '../../lib/types';

export const diureticsPharmacology: Lecture = {
  id: 'diuretics-pharmacology',
  title: 'Diuretics',
  system: 'renal',
  source: 'L12 — Diuretics',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L12 Diuretics' },
    { kind: 'mechanism', label: 'Site of action along the nephron' },
    { kind: 'exam', label: 'Loop vs thiazide vs K-sparing' },
  ],

  highYield: [
    'Diuretics increase urine output by blocking sodium reabsorption at specific NEPHRON sites; where they act sets their potency and electrolyte effects. LOOP DIURETICS (furosemide) block the Na-K-2Cl cotransporter in the THICK ASCENDING LIMB — the most POWERFUL diuretics (used in fluid overload/heart failure/pulmonary oedema, and they work even in renal impairment). They also abolish the medullary gradient (↓concentrating ability).',
    'THIAZIDES (hydrochlorothiazide) block the Na-Cl cotransporter in the DISTAL CONVOLUTED TUBULE — moderate diuretics, first-line for HYPERTENSION; less effective at low GFR. POTASSIUM-SPARING diuretics act at the collecting duct: SPIRONOLACTONE/eplerenone (ALDOSTERONE antagonists) and amiloride/triamterene (ENaC blockers) — weak diuretics used to spare potassium, in heart failure and hyperaldosteronism.',
    'ELECTROLYTE effects are high-yield: LOOP and THIAZIDE diuretics cause HYPOkalaemia and metabolic alkalosis; loops cause hypocalcaemia/hypomagnesaemia (thiazides cause HYPERcalcaemia — used in stone prevention). POTASSIUM-SPARING diuretics cause HYPERkalaemia. Loops: ototoxicity and hyperuricaemia (gout); thiazides: hyperglycaemia, hyperlipidaemia, hyperuricaemia; spironolactone: gynaecomastia.',
    'Other agents: CARBONIC ANHYDRASE INHIBITORS (acetazolamide — proximal tubule; glaucoma, altitude sickness; cause a metabolic ACIDOSIS) and OSMOTIC diuretics (MANNITOL — raised ICP/glaucoma). "Sequential nephron blockade" (combining classes) overcomes diuretic resistance. Match the drug to the goal: loops for oedema, thiazides for hypertension, spironolactone for heart failure/hyperaldosteronism.',
    '**The take-home: LOOP (thick ascending limb NKCC2; strongest, oedema, ↓K/Ca) > THIAZIDE (DCT NCC; hypertension, ↓K but ↑Ca) > K-SPARING (collecting duct; spironolactone anti-aldosterone / amiloride ENaC; ↑K); acetazolamide (PCT, acidosis), mannitol (osmotic). Loop/thiazide → hypokalaemia; K-sparing → hyperkalaemia.** The nephron transport is HRU-1 physiology; electrolyte consequences link to [[fluid-electrolyte-disorders]]; use in CKD/heart failure to [[chronic-kidney-disease]].',
  ],

  mechanism: {
    title: 'Loop (TAL NKCC2, strongest, ↓K/Ca) > thiazide (DCT NCC, HTN, ↓K/↑Ca) > K-sparing (CD, ↑K); acetazolamide (PCT, acidosis); mannitol (osmotic)',
    steps: [
      { id: 's1', label: 'Loop (furosemide): thick ascending limb Na-K-2Cl — most powerful (oedema; works in CKD)', emphasis: 'key' },
      { id: 's2', label: 'Thiazide: distal tubule Na-Cl — first-line for hypertension (less effective at low GFR)', emphasis: 'key' },
      { id: 's3', label: 'K-sparing: collecting duct — spironolactone (anti-aldosterone), amiloride (ENaC)', emphasis: 'key' },
      { id: 's4', label: 'Loop/thiazide → HYPOkalaemia; K-sparing → HYPERkalaemia; loop ↓Ca, thiazide ↑Ca', emphasis: 'key' },
      { id: 's5', label: 'Acetazolamide (PCT → acidosis, glaucoma/altitude); mannitol (osmotic, raised ICP)' },
    ],
  },

  examFindings: [
    { sign: 'Powerful diuresis in pulmonary oedema / heart failure', mechanism: 'Loop diuretic (thick ascending limb)', significance: 'key' },
    { sign: 'First-line diuretic for hypertension', mechanism: 'Thiazide (distal convoluted tubule)', significance: 'key' },
    { sign: 'Hypokalaemia and metabolic alkalosis on a diuretic', mechanism: 'Loop or thiazide diuretic', significance: 'key' },
    { sign: 'Hyperkalaemia on a diuretic', mechanism: 'Potassium-sparing diuretic (spironolactone/amiloride)', significance: 'key' },
    { sign: 'Gynaecomastia in a man on a diuretic', mechanism: 'Spironolactone (anti-androgen effect)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The most potent class of diuretic and its site', meaning: 'Loop diuretics (thick ascending limb, Na-K-2Cl)' },
    { clue: 'The diuretic class that is first-line for hypertension', meaning: 'Thiazides (distal convoluted tubule)' },
    { clue: 'The diuretics that cause hyperkalaemia', meaning: 'Potassium-sparing (spironolactone, amiloride/triamterene)' },
    { clue: 'The diuretic effect on calcium (loop vs thiazide)', meaning: 'Loops lower calcium; thiazides raise it (stone prevention)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Choosing a diuretic by nephron site matches drug to purpose and predicts electrolyte harm: loops for oedema/heart failure (and they work in CKD), thiazides for hypertension (and calcium-stone prevention), potassium-sparing agents for heart failure/hyperaldosteronism and to offset hypokalaemia. Watch hypokalaemia (loop/thiazide) vs hyperkalaemia (K-sparing) and the metabolic effects. Electrolyte consequences feed [[fluid-electrolyte-disorders]] and acid-base ([[acid-base-disorders]]); use in CKD/heart failure links to [[chronic-kidney-disease]].' },
  ],

  mnemonics: [
    { hook: 'Sites: "Loop = ascending limb (strong); Thiazide = distal tubule; Spironolactone = collecting duct"', expansion: ['Loop/thiazide → ↓K', 'K-sparing → ↑K'] },
    { hook: '"Loops Lose calcium; thiazides reTain calcium (stones)"', expansion: ['Spironolactone → gynaecomastia', 'Acetazolamide → acidosis'] },
  ],

  traps: [
    {
      questionCategory: 'Potassium effects of diuretic classes',
      wrongInstinct: 'All diuretics lower potassium',
      rightAnswer: 'LOOP and THIAZIDE diuretics cause HYPOkalaemia (increased distal Na delivery drives K⁺ loss), but POTASSIUM-SPARING diuretics (spironolactone/eplerenone, amiloride/triamterene) cause HYPERkalaemia by blocking aldosterone/ENaC in the collecting duct — so the direction of the potassium change depends on the class, and combining a K-sparing agent with ACEi/ARB compounds hyperkalaemia risk',
      why: 'Getting the potassium direction right per class is essential to avoid dangerous hypo- or hyperkalaemia, and to use them together rationally (e.g. adding spironolactone to offset loop-induced hypokalaemia).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Furosemide produces powerful diuresis by inhibiting the Na-K-2Cl cotransporter in the:',
      options: [
        { id: 'a', text: 'Proximal convoluted tubule' },
        { id: 'b', text: 'Thick ascending limb of the loop of Henle' },
        { id: 'c', text: 'Distal convoluted tubule' },
        { id: 'd', text: 'Collecting duct' },
      ],
      answerId: 'b',
      explanation: 'Loop diuretics such as furosemide block the Na-K-2Cl cotransporter in the thick ascending limb, the most powerful diuretic action; they also dissipate the medullary concentration gradient. Thiazides act in the distal convoluted tubule and potassium-sparing agents in the collecting duct.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which diuretic is most likely to cause hyperkalaemia?',
      options: [
        { id: 'a', text: 'Furosemide (loop)' },
        { id: 'b', text: 'Spironolactone (aldosterone antagonist)' },
        { id: 'c', text: 'Hydrochlorothiazide' },
        { id: 'd', text: 'Acetazolamide' },
      ],
      answerId: 'b',
      explanation: 'Potassium-sparing diuretics such as spironolactone (an aldosterone antagonist) cause hyperkalaemia by reducing potassium secretion in the collecting duct. Loop and thiazide diuretics instead cause hypokalaemia. Combining spironolactone with ACE inhibitors/ARBs further raises hyperkalaemia risk.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default diureticsPharmacology;
