import type { Lecture } from '../../lib/types';
import { COUNTERCURRENT_MULTIPLIER } from '../../lib/figures';

export const urineConcentrationCountercurrent: Lecture = {
  id: 'urine-concentration-countercurrent',
  title: 'Urine Concentration: The Countercurrent Mechanism',
  system: 'renal',
  source: 'L4 — Urinary Concentration & Dilution',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L4 Concentration & Dilution' },
    { kind: 'mechanism', label: 'Countercurrent multiplier' },
    { kind: 'exam', label: 'Medullary gradient' },
  ],

  highYield: [
    '**To concentrate urine (conserve water) the kidney builds a hypertonic medullary interstitium** — from ~300 mOsm/kg at the corticomedullary junction to ~1200 mOsm/kg at the papilla. The **loop of Henle** creates this gradient by a **countercurrent multiplier**; the collecting duct then uses it to reabsorb water.',
    '**The two limbs of the loop have opposite permeabilities — that is the whole trick:** the **thin descending limb is permeable to water but not to salt**, so water leaves and luminal fluid concentrates; the **thick ascending limb is water-impermeable but actively pumps out Na⁺/K⁺/2Cl⁻ (via NKCC2)**, so it dilutes the fluid and salts up the interstitium. Because the limbs run in opposite directions, a modest single-step gradient is "multiplied" along the loop\'s length.',
    '**The thick ascending limb is the "diluting segment"** — it removes solute without water, so tubular fluid leaving the loop is hypotonic (~100 mOsm) regardless of hydration. This is also where **loop diuretics** act (blocking NKCC2 abolishes the gradient → large diuresis).',
    '**Urea recycling contributes about half the medullary gradient.** ADH makes the inner-medullary collecting duct permeable to urea, which diffuses into the interstitium and is trapped there, adding osmoles. This is why a high-protein state concentrates urine better and why urea (up to ~600 mmol/L in the medulla) is not merely waste but a concentrating tool.',
    '**The vasa recta preserve the gradient by countercurrent exchange:** these hairpin capillaries run alongside the loop; blood descending picks up solute and ascending gives it back, so they supply the medulla with oxygen and remove reabsorbed water **without washing out** the osmotic gradient. Excessive medullary blood flow dissipates the gradient.',
  ],

  mechanism: {
    title: 'Loop multiplies a gradient; urea adds to it; vasa recta preserve it',
    steps: [
      { id: 's1', label: 'Thin descending limb: water out, salt stays → fluid concentrates', emphasis: 'key' },
      { id: 's2', label: 'Thick ascending limb: NKCC2 pumps salt out, water-tight → dilutes', emphasis: 'key' },
      { id: 's3', label: 'Opposite flow "multiplies" the step into a 300→1200 mOsm gradient', emphasis: 'key' },
      { id: 's4', label: 'Urea recycling (ADH-dependent) adds ~half the gradient' },
      { id: 's5', label: 'Vasa recta = countercurrent exchanger — preserves the gradient' },
    ],
  },

  examFindings: [
    { sign: 'Medullary osmolality rising ~300 → ~1200 mOsm/kg', mechanism: 'Countercurrent multiplication + urea trapping', significance: 'key' },
    { sign: 'Hypotonic fluid (~100 mOsm) leaving the loop', mechanism: 'Thick ascending limb = diluting segment', significance: 'key' },
    { sign: 'Loop diuretics cause a large diuresis', mechanism: 'NKCC2 block abolishes the medullary gradient', significance: 'key' },
    { sign: 'Reduced concentrating ability in protein malnutrition', mechanism: 'Less urea → smaller medullary gradient', significance: 'supportive' },
    { sign: 'Loss of gradient with high medullary blood flow', mechanism: 'Vasa recta wash-out', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The nephron segment that generates the medullary gradient', meaning: 'The loop of Henle (countercurrent multiplier)' },
    { clue: 'The transporter blocked by loop diuretics', meaning: 'NKCC2 (Na⁺/K⁺/2Cl⁻) in the thick ascending limb' },
    { clue: 'The solute contributing ~half the medullary osmolality', meaning: 'Urea (recycled, ADH-dependent)' },
    { clue: 'The vessels that preserve the gradient by countercurrent exchange', meaning: 'The vasa recta' },
  ],

  treatment: [
    { logic: 'Why concentration matters', detail: 'The gradient built here is what [[adh-water-regulation]] exploits to make concentrated urine; losing it (loop diuretics, medullary washout, low urea) causes dilute urine and polyuria. The transport that builds it is Na⁺-coupled ([[tubular-reabsorption-secretion]]). Concentrating ability is tested on urine specific gravity/osmolality ([[urinalysis-physical-chemical]]).' },
  ],

  mnemonics: [
    { hook: 'Descending = "Down goes water"; Ascending = "salt Ascends out" (water-tight)', expansion: ['Thin descending: H₂O permeable, salt impermeable', 'Thick ascending: salt out (NKCC2), water impermeable = diluting segment'] },
    { hook: 'Urea does "half the work"; vasa recta "keep the change"', expansion: ['Urea recycling ≈ 50% of the gradient', 'Vasa recta exchange prevents washout'] },
  ],

  traps: [
    {
      questionCategory: 'Which limb is the diluting segment',
      wrongInstinct: 'The descending limb dilutes the urine because water is leaving',
      rightAnswer: 'The THICK ASCENDING limb is the diluting segment: it pumps NaCl out while remaining water-impermeable, so the fluid LEAVING it is dilute (hypotonic ~100 mOsm)',
      why: 'The descending limb concentrates the luminal fluid (water leaves); dilution requires removing solute WITHOUT water, which only the water-impermeable thick ascending limb does — hence its diuretic-target status.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The high osmolality of the renal medullary interstitium is generated chiefly by the:',
      options: [
        { id: 'a', text: 'Proximal convoluted tubule' },
        { id: 'b', text: 'Countercurrent multiplier of the loop of Henle' },
        { id: 'c', text: 'Glomerulus' },
        { id: 'd', text: 'Bladder' },
      ],
      answerId: 'b',
      explanation: 'The loop of Henle multiplies a small transverse gradient into a large corticopapillary gradient by combining water reabsorption (descending limb) with active NaCl reabsorption (water-impermeable ascending limb); urea recycling adds the rest.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Loop diuretics produce a powerful diuresis because, by blocking NKCC2 in the thick ascending limb, they:',
      options: [
        { id: 'a', text: 'Increase glomerular filtration rate' },
        { id: 'b', text: 'Dissipate the medullary osmotic gradient needed to reabsorb water' },
        { id: 'c', text: 'Directly inhibit ADH release' },
        { id: 'd', text: 'Damage the podocytes' },
      ],
      answerId: 'b',
      explanation: 'NKCC2 pumps salt into the medulla to build the concentrating gradient. Blocking it both prevents salt reabsorption and collapses the medullary gradient, so the collecting duct can no longer reabsorb water — hence the large diuresis.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Countercurrent multiplier', svg: COUNTERCURRENT_MULTIPLIER, caption: 'Opposite limb permeabilities build the medullary gradient; urea recycling and vasa recta exchange sustain it.' },
  ],
};

export default urineConcentrationCountercurrent;
