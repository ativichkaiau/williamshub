import type { Lecture } from '../../lib/types';
import { BODY_FLUID_COMPARTMENTS } from '../../lib/figures';

export const bodyFluidCompartmentsRenal: Lecture = {
  id: 'body-fluid-compartments-renal',
  title: 'Body Fluid Compartments & Composition',
  system: 'renal',
  source: 'L6 — Body Fluids & Water Balance',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L6 Body Fluids' },
    { kind: 'mechanism', label: 'ICF vs ECF' },
    { kind: 'exam', label: 'Osmolality' },
  ],

  highYield: [
    '**Total body water is ~60% of body weight, split by the "60–40–20" rule:** ~60% TBW → **~40% intracellular fluid (ICF)** and **~20% extracellular fluid (ECF)**. The ECF is further split ~¾ interstitial : ~¼ plasma (roughly the "3:1" rule). Fat is water-poor, so obese and female bodies have a lower %TBW.',
    '**The compartments differ sharply in composition, set by the Na⁺/K⁺-ATPase:** **ICF is high K⁺ (and Mg²⁺, phosphate, protein)**; **ECF is high Na⁺ (and Cl⁻, HCO₃⁻)**. Na⁺ is the main ECF cation and the principal determinant of ECF *volume*; K⁺ is the main ICF cation. Plasma differs from interstitial fluid mainly by its **protein** content (which sets oncotic pressure).',
    '**Osmolality (~285–295 mOsm/kg) is equal across all compartments** because water moves freely to abolish osmotic gradients. Therefore whole-body osmolality is governed by **water balance (ADH/thirst)**, while ECF **volume** is governed by **Na⁺ balance** — a key conceptual split: "sodium fills the tank, water sets the concentration."',
    '**Water shifts follow tonicity.** Adding **isotonic** fluid expands ECF only (no shift). **Hypotonic** gain (e.g. water intoxication) lowers osmolality → water moves INTO cells (cells swell — dangerous in the brain). **Hypertonic** gain raises osmolality → water moves OUT of cells (cells shrink). This is why the *type* of fluid lost or gained matters as much as the amount.',
    '**Disturbances usually begin in the ECF/plasma** (the compartment we sample and infuse). Volume depletion (haemorrhage, GI/renal losses) and volume overload (heart/renal failure) are ECF problems corrected by the kidney adjusting Na⁺ and water; the ICF is defended by regulating osmolality.',
  ],

  mechanism: {
    title: '60–40–20 split; Na⁺/K⁺ set composition; water follows osmolality',
    steps: [
      { id: 's1', label: 'TBW ~60% → ICF ~40% + ECF ~20% (ECF = interstitium + plasma)', emphasis: 'key' },
      { id: 's2', label: 'ICF high K⁺; ECF high Na⁺ (Na⁺/K⁺-ATPase maintains it)', emphasis: 'key' },
      { id: 's3', label: 'Osmolality equal across compartments (~285–295 mOsm/kg)', emphasis: 'key' },
      { id: 's4', label: 'Na⁺ balance → ECF volume; water balance → osmolality' },
      { id: 's5', label: 'Tonicity of a fluid load determines the ICF↔ECF water shift' },
    ],
  },

  examFindings: [
    { sign: 'ICF is the high-potassium compartment', mechanism: 'Na⁺/K⁺-ATPase pumps K⁺ in, Na⁺ out', significance: 'key' },
    { sign: 'ECF is the high-sodium compartment', mechanism: 'Na⁺ is the dominant ECF cation', significance: 'key' },
    { sign: 'Cell swelling in acute hyponatraemia/water intoxication', mechanism: 'Low ECF osmolality drives water into cells', significance: 'key' },
    { sign: 'Plasma differs from interstitial fluid by protein', mechanism: 'Capillary wall retains albumin (oncotic pressure)', significance: 'supportive' },
    { sign: 'Lower %TBW in obesity and in females', mechanism: 'Adipose tissue is relatively water-poor', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Approximate fraction of body weight that is water', meaning: '~60% (TBW)' },
    { clue: 'The dominant intracellular vs extracellular cations', meaning: 'K⁺ (ICF) and Na⁺ (ECF)' },
    { clue: 'The determinant of ECF volume', meaning: 'Total body sodium' },
    { clue: 'The determinant of plasma osmolality', meaning: 'Water balance (mainly, and plasma Na⁺)' },
  ],

  treatment: [
    { logic: 'Why compartments matter', detail: 'Choosing IV fluids depends on which compartment to expand and the tonicity to use. Na⁺ (volume) is regulated by RAAS/ANP and water (osmolality) by ADH — see [[volume-water-balance-hormones]] and [[adh-water-regulation]]. Dysnatraemias are osmolality problems; the composition here reflects the Na⁺/K⁺-ATPase central to [[tubular-reabsorption-secretion]]. (Overlaps EHP body-fluid teaching from a renal angle.)' },
  ],

  mnemonics: [
    { hook: '"60–40–20": TBW 60%, ICF 40%, ECF 20% of body weight', expansion: ['ECF = ¾ interstitial + ¼ plasma', 'Fat is water-poor → lower %TBW'] },
    { hook: '"Sodium fills the tank; water sets the concentration"', expansion: ['Na⁺ balance → ECF VOLUME', 'Water balance → OSMOLALITY'] },
  ],

  traps: [
    {
      questionCategory: 'What determines ECF volume vs osmolality',
      wrongInstinct: 'Sodium concentration reflects how much salt is in the body',
      rightAnswer: 'ECF VOLUME is set by total body SODIUM; plasma sodium CONCENTRATION (osmolality) is set by WATER balance — so hyponatraemia is usually a water problem, not a salt-deficiency problem',
      why: 'Because water moves freely to keep osmolality equal, the [Na⁺] you measure reflects the water-to-sodium ratio, not sodium content; separating volume (Na⁺) from concentration (water) is essential for diagnosing fluid disorders.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Using the standard approximation, the intracellular and extracellular fluid compartments make up what fraction of body weight?',
      options: [
        { id: 'a', text: 'ICF ~20%, ECF ~40%' },
        { id: 'b', text: 'ICF ~40%, ECF ~20%' },
        { id: 'c', text: 'ICF ~30%, ECF ~30%' },
        { id: 'd', text: 'ICF ~50%, ECF ~10%' },
      ],
      answerId: 'b',
      explanation: 'Total body water is ~60% of body weight, divided into ~40% intracellular and ~20% extracellular (of which about three-quarters is interstitial and one-quarter plasma) — the 60–40–20 rule.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Rapidly infusing a large volume of pure (hypotonic) water lowers plasma osmolality and causes:',
      options: [
        { id: 'a', text: 'Water to move out of cells, shrinking them' },
        { id: 'b', text: 'Water to move into cells, causing them to swell' },
        { id: 'c', text: 'No net water movement' },
        { id: 'd', text: 'Selective expansion of plasma only' },
      ],
      answerId: 'b',
      explanation: 'A fall in ECF osmolality creates a gradient that drives water into the relatively hypertonic cells, causing them to swell — dangerous in the brain (cerebral oedema of acute hyponatraemia/water intoxication).',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Body fluid compartments', svg: BODY_FLUID_COMPARTMENTS, caption: 'The 60–40–20 split, ICF vs ECF composition, and how osmolality equalises across compartments.' },
  ],
};

export default bodyFluidCompartmentsRenal;
