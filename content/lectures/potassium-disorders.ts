import type { Lecture } from '../../lib/types';

export const potassiumDisorders: Lecture = {
  id: 'potassium-disorders',
  title: 'Potassium Disorders (Hypo/Hyperkalaemia)',
  system: 'renal',
  source: 'L15 — Fluid & Electrolyte Disorders (Clinical)',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L15 Potassium' },
    { kind: 'mechanism', label: 'Shift vs total-body; ECG' },
    { kind: 'exam', label: 'Hyperkalaemia emergency management' },
  ],

  highYield: [
    '**Serum potassium reflects both TOTAL-BODY balance (intake vs renal excretion) and TRANSCELLULAR SHIFTS between cells and plasma (driven by insulin, β-agonists and pH). Because only ~2% of body potassium is extracellular, small shifts change serum levels markedly — this is why insulin/salbutamol lower serum potassium (shift IN) and acidosis raises it (shift OUT).**',
    '**HYPERKALAEMIA causes: reduced excretion (AKI/CKD, potassium-sparing diuretics, ACEi/ARB, hypoaldosteronism/Addison), SHIFT out of cells (acidosis, insulin deficiency, tissue breakdown — rhabdomyolysis, tumour lysis, haemolysis), and spurious (haemolysed sample). It is life-threatening because of CARDIAC ARRHYTHMIA: ECG shows PEAKED T-WAVES → PR prolongation/flat P → WIDE QRS → sine wave/arrest. Severe/ECG-positive hyperkalaemia is a medical EMERGENCY.**',
    '**Emergency hyperkalaemia management has three steps: (1) STABILISE the myocardium with IV CALCIUM (gluconate/chloride) — it does NOT lower potassium but protects the heart; (2) SHIFT potassium into cells with INSULIN + glucose (and nebulised salbutamol, ± bicarbonate if acidotic); (3) REMOVE potassium from the body — diuretics, cation-exchange/binders, and DIALYSIS if refractory or in renal failure. Also stop offending drugs and treat the cause.**',
    '**HYPOKALAEMIA causes: renal loss (DIURETICS — loop/thiazide, hyperaldosteronism, vomiting via renal loss + alkalosis, tubular disorders), GI loss (diarrhoea), and SHIFT into cells (insulin, β-agonists, alkalosis). It causes weakness, ileus, and arrhythmia (U waves, flattened T, ST depression), potentiates DIGOXIN toxicity, and is often accompanied by (and refractory until you correct) HYPOMAGNESAEMIA. Treat with potassium replacement (and magnesium) plus the cause.**',
    '**The take-home: potassium = total-body balance + cellular SHIFT (insulin/β-agonist/pH). HYPERkalaemia (renal failure, drugs, acidosis, tissue breakdown) → peaked T-waves → EMERGENCY: CALCIUM (protect) → INSULIN/glucose + salbutamol (shift) → remove/dialysis. HYPOkalaemia (diuretics/GI/shift) → U waves, digoxin toxicity; replace K+ and correct MAGNESIUM.** Sodium/water is [[sodium-water-disorders]]; diuretics are [[loop-thiazide-diuretics]]/[[potassium-sparing-osmotic-diuretics]]; overview [[fluid-electrolyte-disorders]].',
  ],

  mechanism: {
    title: 'Potassium = total-body + cellular shift; hyperkalaemia (renal failure/drugs/acidosis/breakdown) → peaked T → emergency (calcium→insulin/salbutamol→remove/dialysis); hypokalaemia → U waves, digoxin, fix magnesium',
    steps: [
      { id: 's1', label: 'Serum K reflects total-body balance + transcellular shift (insulin/β-agonist/pH)', emphasis: 'key' },
      { id: 's2', label: 'Hyperkalaemia: renal failure, K-sparing/ACEi, acidosis, tissue breakdown → peaked T-waves', emphasis: 'danger' },
      { id: 's3', label: 'Emergency: calcium (protect heart) → insulin/glucose + salbutamol (shift) → remove/dialysis', emphasis: 'danger' },
      { id: 's4', label: 'Hypokalaemia: diuretics/GI loss/shift → U waves, weakness, digoxin toxicity', emphasis: 'key' },
      { id: 's5', label: 'Correct hypomagnesaemia — hypokalaemia is refractory until magnesium is replaced', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Peaked T-waves progressing to a widened QRS', mechanism: 'Hyperkalaemia (cardiac emergency)', significance: 'key' },
    { sign: 'Hyperkalaemia after ACE inhibitor + spironolactone in CKD', mechanism: 'Reduced renal potassium excretion', significance: 'key' },
    { sign: 'Hyperkalaemia with rhabdomyolysis or tumour lysis', mechanism: 'Potassium shift/release from cells', significance: 'key' },
    { sign: 'U waves, flattened T-waves and weakness on a thiazide', mechanism: 'Hypokalaemia', significance: 'key' },
    { sign: 'Hypokalaemia that will not correct despite replacement', mechanism: 'Concurrent hypomagnesaemia', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The first drug in emergency hyperkalaemia (protects the heart)', meaning: 'IV calcium (gluconate/chloride)' },
    { clue: 'The step that shifts potassium into cells', meaning: 'Insulin + glucose (± salbutamol)' },
    { clue: 'The ECG hallmark of hyperkalaemia', meaning: 'Peaked T-waves (then wide QRS)' },
    { clue: 'The electrolyte to replace alongside potassium in refractory hypokalaemia', meaning: 'Magnesium' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Potassium disorders are common and can be rapidly fatal via arrhythmia, so the framework — total-body balance plus transcellular shift — explains causes and treatment. Emergency hyperkalaemia follows a fixed sequence: calcium to stabilise the myocardium, insulin/glucose and salbutamol to shift potassium into cells, then removal (diuretics, binders, dialysis) and stopping culprit drugs. Hypokalaemia (diuretics, GI loss, shift) causes weakness/arrhythmia, potentiates digoxin, and needs magnesium replacement to correct. Sodium/water is [[sodium-water-disorders]]; potassium-sparing diuretics are [[potassium-sparing-osmotic-diuretics]]; overview [[fluid-electrolyte-disorders]].' },
  ],

  mnemonics: [
    { hook: 'Hyperkalaemia = "C-BIG-K-Drop": Calcium, Bicarb, Insulin/Glucose, Kayexalate/binders, Dialysis (+ salbutamol)', expansion: ['Calcium protects (doesn’t lower K)', 'Peaked T → wide QRS → arrest'] },
    { hook: '"HypoK → U waves + digoxin toxicity; replace Mg too"', expansion: ['Diuretics/GI/shift causes', 'Refractory until Mg corrected'] },
  ],

  traps: [
    {
      questionCategory: 'Role of calcium in hyperkalaemia',
      wrongInstinct: 'IV calcium is given in hyperkalaemia to lower the serum potassium level',
      rightAnswer: 'IV CALCIUM does NOT lower serum potassium — it STABILISES the cardiac membrane (raising the threshold potential) to prevent arrhythmia, buying time; the potassium is actually LOWERED by SHIFTING it into cells (insulin/glucose, salbutamol) and then REMOVING it from the body (diuretics, binders, dialysis), so calcium is the first protective step but must be followed by shifting and removal',
      why: 'Believing calcium "treats" the potassium leads to stopping after giving it, leaving a dangerously high potassium that will re-manifest; calcium only protects the heart while the shifting/removal steps actually correct the level.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'In a patient with severe hyperkalaemia and peaked T-waves, what is the role of intravenous calcium gluconate?',
      options: [
        { id: 'a', text: 'It rapidly lowers the serum potassium' },
        { id: 'b', text: 'It stabilises the cardiac membrane to prevent arrhythmia (without lowering potassium)' },
        { id: 'c', text: 'It shifts potassium into cells' },
        { id: 'd', text: 'It removes potassium via the gut' },
      ],
      answerId: 'b',
      explanation: 'Calcium stabilises the myocardium (raising the threshold potential) to prevent lethal arrhythmia but does not lower potassium; the level is reduced by shifting potassium into cells (insulin/glucose, salbutamol) and removing it (diuretics, binders, dialysis).',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'A patient on a thiazide has persistent hypokalaemia despite potassium replacement. What should also be checked and corrected?',
      options: [
        { id: 'a', text: 'Serum magnesium (hypomagnesaemia)' },
        { id: 'b', text: 'Serum calcium only' },
        { id: 'c', text: 'Serum phosphate only' },
        { id: 'd', text: 'Serum chloride only' },
      ],
      answerId: 'a',
      explanation: 'Hypomagnesaemia promotes renal potassium wasting and makes hypokalaemia refractory to replacement; correcting magnesium is often necessary before potassium will normalise, so magnesium should be checked and replaced alongside potassium.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default potassiumDisorders;
