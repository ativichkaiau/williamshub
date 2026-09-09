import type { Lecture } from '../../lib/types';

export const ghpBodyFluidCompartmentsMeasurement: Lecture = {
  id: 'ghp-body-fluid-compartments-measurement',
  title: 'Body Fluid Compartments & Their Measurement',
  system: 'renal',
  source: 'Ch 25 — The Body Fluid Compartments; Edema',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'Ch 25 Body Fluids & Edema' },
    { kind: 'mechanism', label: 'Indicator dilution' },
    { kind: 'exam', label: '60-40-20 rule' },
  ],

  highYield: [
    '**Learn the 60-40-20 rule and almost every fluid calculation follows.** Total body water is about **60%** of body weight in a lean adult male (~42 L in 70 kg): **40%** intracellular (~28 L) and **20%** extracellular (~14 L). The ECF then splits into **interstitial ~3/4 (11 L)** and **plasma ~1/4 (3 L)**. Women and the obese have a **lower** percentage because **fat is relatively water-poor**; neonates are much **higher** (~75%).',
    '**Plasma and interstitial fluid have nearly identical small-ion composition — the protein is the exception.** The capillary wall is freely permeable to Na⁺, Cl⁻ and HCO₃⁻ but not to protein, so the only major difference is plasma’s **protein content**, which generates the colloid osmotic pressure central to [[ghp-starling-forces-filtration]]. A small **Gibbs–Donnan** effect makes plasma cation concentration marginally higher.',
    '**Intracellular fluid is a different world: the pumps make it so.** ICF is rich in **K⁺, Mg²⁺, phosphate and protein** and poor in **Na⁺ and Cl⁻**, maintained by the **Na⁺/K⁺-ATPase**. This is why plasma potassium is a poor guide to total body potassium — 98% of it is inside cells, the point that dominates [[potassium-disorders]].',
    '**Every compartment is measured the same way: the indicator-dilution principle.** Give a known amount of a marker, let it distribute, measure its concentration: **Volume = amount given ÷ concentration** (correcting for anything excreted). The compartment you measure is decided entirely by **which barrier the marker cannot cross**.',
    '**Match the marker to the compartment — this is the examinable table.** **Total body water:** ³H₂O, D₂O, antipyrine. **ECF:** inulin, sucrose, mannitol, sulfate, thiosulfate. **Plasma:** ¹²⁵I-albumin or Evans blue (they stay in the vessel). There is **no direct marker for ICF or interstitial fluid** — both are obtained by **subtraction**: ICF = TBW − ECF, and interstitial = ECF − plasma.',
    '**Blood volume needs the haematocrit, because plasma markers only measure plasma.** Total blood volume = **plasma volume ÷ (1 − haematocrit)**. Blood volume is roughly **7%** of body weight (~5 L), of which about **3 L** is plasma and **2 L** red cells — the reservoir whose distribution is discussed in [[ghp-venous-pressure-blood-reservoir]].',
  ],

  mechanism: {
    title: 'Measuring a space you cannot enter',
    steps: [
      { id: 's1', label: 'Inject a known quantity of an indicator', emphasis: 'key' },
      { id: 's2', label: 'Indicator distributes only where its barrier permits', emphasis: 'key' },
      { id: 's3', label: 'Allow equilibration; sample plasma concentration' },
      { id: 's4', label: 'Volume = amount injected ÷ concentration, minus losses', emphasis: 'key' },
      { id: 's5', label: 'ICF and interstitial volume obtained only by subtraction' },
      { id: 's6', label: 'Blood volume = plasma volume ÷ (1 − haematocrit)' },
    ],
  },

  examFindings: [
    { sign: 'Lower total body water percentage in an obese patient', mechanism: 'Adipose tissue holds relatively little water', significance: 'key' },
    { sign: 'Total body water ~75% of weight in a neonate', mechanism: 'Higher water fraction and relatively larger ECF in infancy', significance: 'supportive' },
    { sign: 'Plasma K⁺ normal despite large total-body potassium depletion', mechanism: '98% of body potassium is intracellular', significance: 'key' },
    { sign: 'Plasma and interstitial electrolytes near-identical on assay', mechanism: 'Capillary wall is freely permeable to small ions', significance: 'supportive' },
    { sign: 'Evans blue remains confined to the vascular space', mechanism: 'It binds albumin, which does not cross the capillary wall', significance: 'key' },
  ],

  investigations: [
    { clue: 'Inulin distribution volume of about 14 L', meaning: 'Extracellular fluid volume in a 70 kg adult' },
    { clue: 'D₂O distribution volume of about 42 L', meaning: 'Total body water' },
    { clue: 'Radioiodinated albumin volume of about 3 L', meaning: 'Plasma volume' },
    { clue: 'TBW minus ECF calculated as 28 L', meaning: 'Intracellular volume — obtainable only by subtraction' },
    { clue: 'Plasma volume 3 L with haematocrit 0.40', meaning: 'Blood volume 5 L (3 ÷ 0.6)' },
  ],

  treatment: [
    {
      logic: 'Choose the fluid by the compartment you intend to fill',
      detail: 'Isotonic saline stays largely **extracellular**, so it expands plasma and interstitium; **5% dextrose** behaves as free water once the glucose is metabolised and distributes across **total body water**, so only about a third stays extracellular and very little remains intravascular.',
    },
    {
      logic: 'Interpret plasma concentration as a ratio, not a quantity',
      detail: 'Plasma sodium reports the **ratio of solute to water**, not sodium content — the distinction that makes sense of [[osmolarity-tonicity-cell-volume]]. A patient can be sodium-overloaded and hyponatraemic at once.',
    },
  ],

  mnemonics: [
    { hook: '60-40-20, then quarters', expansion: ['60% TBW', '40% intracellular', '20% extracellular', 'ECF splits 3/4 interstitial, 1/4 plasma'] },
    { hook: 'Big markers stay in, small markers spread out', expansion: ['Albumin/Evans blue → plasma', 'Inulin/mannitol → ECF', 'Heavy water → total body water'] },
  ],

  traps: [
    {
      questionCategory: 'Measuring intracellular volume',
      wrongInstinct: 'Use a marker that enters cells to measure ICF directly',
      rightAnswer: 'ICF cannot be measured directly; it is TBW minus ECF',
      why: 'No indicator distributes into cells while remaining measurable and confined',
    },
    {
      questionCategory: 'Where infused fluid goes',
      wrongInstinct: 'A litre of 5% dextrose expands the circulation by a litre',
      rightAnswer: 'It distributes across total body water, leaving only about 1/12 in plasma',
      why: 'Once glucose is metabolised it is effectively free water, not an ECF expander',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 70 kg man is given inulin, which distributes to a volume of 14 L. Which compartment has been measured?',
      options: [
        { id: 'a', text: 'Total body water' },
        { id: 'b', text: 'Extracellular fluid' },
        { id: 'c', text: 'Plasma volume' },
        { id: 'd', text: 'Intracellular fluid' },
      ],
      answerId: 'b',
      explanation: 'Inulin crosses the capillary wall but not cell membranes, so it distributes through plasma and interstitium — the ECF, about 20% of body weight, or 14 L in a 70 kg adult.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'Plasma volume is measured at 3 L and the haematocrit is 0.40. What is the total blood volume?',
      options: [
        { id: 'a', text: '3.6 L' },
        { id: 'b', text: '4.2 L' },
        { id: 'c', text: '5.0 L' },
        { id: 'd', text: '7.5 L' },
      ],
      answerId: 'c',
      explanation: 'Blood volume = plasma volume ÷ (1 − haematocrit) = 3 ÷ 0.60 = 5 L. A plasma marker measures only the plasma fraction, so the haematocrit is needed to recover whole blood volume.',
      tests: 'investigation',
    },
    {
      id: 'q3',
      stem: 'Why is plasma potassium a poor indicator of total body potassium stores?',
      options: [
        { id: 'a', text: 'Potassium is not filtered by the glomerulus' },
        { id: 'b', text: 'About 98% of body potassium is intracellular' },
        { id: 'c', text: 'Potassium binds strongly to plasma proteins' },
        { id: 'd', text: 'Potassium is confined to the interstitial compartment' },
      ],
      answerId: 'b',
      explanation: 'The Na⁺/K⁺-ATPase keeps the overwhelming majority of potassium inside cells, so large total-body deficits can coexist with a normal plasma level, and shifts between compartments change plasma K⁺ without changing body content.',
      tests: 'mechanism',
    },
  ],
};

export default ghpBodyFluidCompartmentsMeasurement;
