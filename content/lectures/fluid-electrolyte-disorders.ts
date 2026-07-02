import type { Lecture } from '../../lib/types';

export const fluidElectrolyteDisorders: Lecture = {
  id: 'fluid-electrolyte-disorders',
  title: 'Fluid & Electrolyte Disorders',
  system: 'renal',
  source: 'L15 — Fluid & Electrolyte Disorders (Clinical)',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L15 Fluid & Electrolytes' },
    { kind: 'mechanism', label: 'Na (water) & K balance' },
    { kind: 'exam', label: 'Hypo/hypernatraemia; hyperkalaemia' },
  ],

  highYield: [
    '**SODIUM disorders are really WATER problems: serum sodium reflects the ratio of sodium to water, so HYPOnatraemia = relative water EXCESS and HYPERnatraemia = relative water DEFICIT. Assess hyponatraemia by serum OSMOLALITY (exclude pseudo/hyperglycaemia) then VOLUME status (hypo-, eu-, hypervolaemic) — the framework that identifies the cause.**',
    '**HYPONATRAEMIA: HYPOvolaemic (diuretics, GI/renal losses), EUvolaemic (SIADH — inappropriate ADH, e.g. lung/CNS/drugs; also hypothyroid/adrenal), HYPERvolaemic (heart failure, cirrhosis, nephrotic/renal failure — high total body water). Danger is cerebral oedema (seizures); CORRECT SLOWLY — over-rapid correction causes OSMOTIC DEMYELINATION (central pontine myelinolysis). HYPERNATRAEMIA = water deficit (poor intake, diabetes insipidus, GI/renal water loss) → thirst/CNS signs; also correct slowly (cerebral oedema).**',
    '**POTASSIUM: HYPERkalaemia (reduced excretion — AKI/CKD, ACEi/ARB/K-sparing diuretics/trimethoprim; or shift — acidosis, cell lysis) is life-threatening via CARDIAC arrhythmia — ECG: PEAKED T waves → widened QRS → sine wave/arrest. Emergency treatment: CALCIUM gluconate (stabilise myocardium), INSULIN+glucose and salbutamol (shift K into cells), then REMOVE K (diuretics, binders, dialysis). HYPOkalaemia (diuretics, GI loss, alkalosis) → weakness, arrhythmia, U waves.**',
    '**CALCIUM/PHOSPHATE/MAGNESIUM: hypercalcaemia (hyperparathyroidism, malignancy → "stones, bones, groans, psychiatric moans"); hypocalcaemia (CKD, hypoparathyroidism, vitamin D deficiency → tetany, Chvostek/Trousseau). Volume disorders: hypovolaemia (tachycardia, low JVP, dry) vs fluid overload (oedema, raised JVP) guide fluid vs diuretic therapy. IV fluids: isotonic saline for resuscitation, maintenance for ongoing needs.**',
    '**The take-home: Na = water balance (hypoNa = water excess → assess osmolality + volume [SIADH euvolaemic]; hyperNa = water deficit) — correct BOTH SLOWLY (demyelination/oedema). HYPERkalaemia = ECG emergency → calcium, insulin+glucose/salbutamol, then remove K. Assess volume status to choose fluids vs diuretics.** Acid-base disorders are in [[acid-base-disorders]]; diuretic causes in [[diuretics-pharmacology]]; renal handling is HRU-1 physiology.',
  ],

  mechanism: {
    title: 'Na = water (hypoNa: osmolality+volume, SIADH euvolaemic; correct slowly) ; hyperK = ECG emergency (Ca, insulin+glucose, remove)',
    steps: [
      { id: 's1', label: 'HypoNa = water excess; assess osmolality then volume (hypo/eu[SIADH]/hyper)', emphasis: 'key' },
      { id: 's2', label: 'HyperNa = water deficit (poor intake, DI, water loss) → thirst/CNS', emphasis: 'key' },
      { id: 's3', label: 'Correct Na SLOWLY: fast hypoNa correction → osmotic demyelination (pontine)', emphasis: 'danger' },
      { id: 's4', label: 'Hyperkalaemia = cardiac emergency (peaked T → wide QRS → sine wave)', emphasis: 'danger' },
      { id: 's5', label: 'HyperK Rx: calcium (stabilise) → insulin+glucose/salbutamol (shift) → remove (diuretic/binder/dialysis)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Euvolaemic hyponatraemia with concentrated urine and low serum osmolality', mechanism: 'SIADH (inappropriate ADH)', significance: 'key' },
    { sign: 'Osmotic demyelination after rapid correction of hyponatraemia', mechanism: 'Over-rapid sodium correction (central pontine myelinolysis)', significance: 'key' },
    { sign: 'Peaked T waves progressing to a widened QRS', mechanism: 'Hyperkalaemia (cardiac emergency)', significance: 'key' },
    { sign: 'Muscle weakness with U waves on ECG', mechanism: 'Hypokalaemia', significance: 'key' },
    { sign: 'Tetany with Chvostek/Trousseau signs', mechanism: 'Hypocalcaemia', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'What serum sodium actually reflects', meaning: 'Water balance (Na:water ratio), not total body sodium' },
    { clue: 'The euvolaemic cause of hyponatraemia', meaning: 'SIADH' },
    { clue: 'The risk of correcting hyponatraemia too fast', meaning: 'Osmotic demyelination (central pontine myelinolysis)' },
    { clue: 'The first drug given in hyperkalaemia with ECG changes', meaning: 'Calcium gluconate (myocardial membrane stabilisation)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Sodium disorders are water-balance problems best solved by the osmolality-then-volume framework (SIADH is the euvolaemic hyponatraemia), and both hypo- and hypernatraemia must be corrected SLOWLY to avoid osmotic demyelination or cerebral oedema. Hyperkalaemia is an immediate cardiac emergency treated in a fixed order (calcium → insulin/glucose/salbutamol → removal). Volume assessment decides fluids vs diuretics. Acid-base interplay is in [[acid-base-disorders]]; diuretic-induced disturbances in [[diuretics-pharmacology]].' },
  ],

  mnemonics: [
    { hook: '"Sodium = water: low Na = too much water; high Na = too little water"', expansion: ['HypoNa: osmolality → volume', 'SIADH = euvolaemic'] },
    { hook: 'Hyperkalaemia "C-BIG-K-Drop": Calcium, Bicarb/Beta-agonist, Insulin+Glucose, Kayexalate/binders, Dialysis', expansion: ['ECG: peaked T → wide QRS', 'Correct Na slowly'] },
  ],

  traps: [
    {
      questionCategory: 'Rate of sodium correction',
      wrongInstinct: 'Symptomatic hyponatraemia should be corrected quickly back to normal',
      rightAnswer: 'Chronic hyponatraemia must be corrected SLOWLY (within recommended per-24-h limits) — over-rapid correction causes OSMOTIC DEMYELINATION SYNDROME (central pontine myelinolysis), which is devastating; only severe symptomatic hyponatraemia (seizures) gets cautious hypertonic saline, and even then the overall daily rise is limited. Hypernatraemia is likewise corrected slowly to avoid cerebral oedema',
      why: 'Because brain cells osmotically adapt to chronic sodium shifts, correcting too fast causes demyelination (hypoNa) or cerebral oedema (hyperNa); the rate of correction, not just the target, determines safety.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with small-cell lung cancer has euvolaemic hyponatraemia, low serum osmolality and inappropriately concentrated urine. The mechanism is:',
      options: [
        { id: 'a', text: 'Diabetes insipidus' },
        { id: 'b', text: 'Syndrome of inappropriate ADH secretion (SIADH)' },
        { id: 'c', text: 'Hypovolaemia from diuretics' },
        { id: 'd', text: 'Heart failure' },
      ],
      answerId: 'b',
      explanation: 'Euvolaemic hyponatraemia with low serum osmolality and inappropriately concentrated urine, especially with a small-cell lung cancer, is SIADH — excess ADH causing water retention. Correction must be slow to avoid osmotic demyelination.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The first drug to give in severe hyperkalaemia with ECG changes (to protect the heart) is:',
      options: [
        { id: 'a', text: 'Insulin with glucose' },
        { id: 'b', text: 'Intravenous calcium gluconate' },
        { id: 'c', text: 'A loop diuretic' },
        { id: 'd', text: 'Oral potassium binder' },
      ],
      answerId: 'b',
      explanation: 'Calcium gluconate is given first to stabilise the myocardial membrane (it does not lower potassium). Insulin/glucose and salbutamol then shift potassium into cells, and diuretics, binders or dialysis remove it from the body. This sequence treats the cardiac emergency while correcting the potassium.',
      tests: 'treatment',
    },
  ],

  figures: [],
};

export default fluidElectrolyteDisorders;
