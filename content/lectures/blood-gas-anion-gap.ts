import type { Lecture } from '../../lib/types';

export const bloodGasAnionGap: Lecture = {
  id: 'blood-gas-anion-gap',
  title: 'Blood Gas Interpretation & Anion Gap',
  system: 'renal',
  source: 'L18 — Blood Gas & Anion Gap',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L18 Blood Gas' },
    { kind: 'mechanism', label: 'Systematic ABG reading' },
    { kind: 'exam', label: 'Step-wise interpretation; delta-delta' },
  ],

  highYield: [
    '**A blood gas is read SYSTEMATICALLY. STEP 1: look at the pH — is it ACIDAEMIC (<7.35) or ALKALAEMIC (>7.45)? STEP 2: decide whether the primary problem is RESPIRATORY (CO₂) or METABOLIC (HCO₃⁻) by seeing which one moves in the SAME direction as the pH change. STEP 3: assess COMPENSATION (is it appropriate, or is there a mixed disorder?).**',
    '**Pattern recognition: ACIDOSIS with HIGH CO₂ = respiratory acidosis; acidosis with LOW HCO₃⁻ = metabolic acidosis. ALKALOSIS with LOW CO₂ = respiratory alkalosis; alkalosis with HIGH HCO₃⁻ = metabolic alkalosis. Compensation moves the OTHER value in the same direction to defend pH (e.g. metabolic acidosis → low CO₂ from hyperventilation) but never fully normalises the pH.**',
    '**STEP 4: for any metabolic acidosis, calculate the ANION GAP (Na − [Cl + HCO₃]; correct for albumin). A HIGH gap = added acid (MUDPILES); a NORMAL gap = bicarbonate loss (diarrhoea/RTA). STEP 5: DELTA-DELTA — compare the rise in anion gap with the fall in bicarbonate; a mismatch reveals a CONCURRENT normal-gap acidosis or metabolic alkalosis hiding behind the high-gap acidosis.**',
    '**A blood gas also reports OXYGENATION (pO₂, SaO₂) — separate from acid-base — used to assess respiratory failure: TYPE 1 (hypoxaemia with normal/low CO₂) vs TYPE 2 (hypoxaemia WITH high CO₂/hypoventilation). Lactate flags tissue hypoperfusion (a cause of high-gap acidosis). Always integrate the numbers with the clinical picture.**',
    '**The take-home: read the ABG in steps — pH (acid/alkalaemia) → primary respiratory (CO₂) vs metabolic (HCO₃) → compensation appropriate? → anion gap for metabolic acidosis (high = MUDPILES, normal = HCO₃ loss) → delta-delta for hidden mixed disorders; also check oxygenation (type 1 vs 2 respiratory failure).** The underlying disorders are in [[acid-base-disorders]]; electrolytes in [[fluid-electrolyte-disorders]]; the compensation physiology is HRU-1/respiratory.',
  ],

  mechanism: {
    title: 'Stepwise: pH → respiratory(CO₂)/metabolic(HCO₃) primary → compensation → anion gap → delta-delta → oxygenation (type 1 vs 2)',
    steps: [
      { id: 's1', label: 'Step 1: pH — acidaemia (<7.35) or alkalaemia (>7.45)?', emphasis: 'key' },
      { id: 's2', label: 'Step 2: primary = whichever of CO₂ (respiratory) or HCO₃ (metabolic) matches the pH change', emphasis: 'key' },
      { id: 's3', label: 'Step 3: is compensation appropriate? (never fully normalises pH; else MIXED)', emphasis: 'key' },
      { id: 's4', label: 'Step 4: metabolic acidosis → anion gap (high = MUDPILES; normal = HCO₃ loss)', emphasis: 'key' },
      { id: 's5', label: 'Step 5: delta-delta for hidden disorders; check oxygenation (type 1 vs type 2 failure)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'pH 7.20, HCO₃⁻ 10, appropriate low CO₂', mechanism: 'Compensated metabolic acidosis (check anion gap)', significance: 'key' },
    { sign: 'pH 7.28, high CO₂ in a sedated/COPD patient', mechanism: 'Respiratory acidosis (hypoventilation)', significance: 'key' },
    { sign: 'High anion gap with a bicarbonate fall that does not match', mechanism: 'Delta-delta mismatch — a second (mixed) disorder', significance: 'key' },
    { sign: 'Hypoxaemia with a raised CO₂', mechanism: 'Type 2 respiratory failure (hypoventilation)', significance: 'key' },
    { sign: 'Raised lactate with a high-anion-gap acidosis', mechanism: 'Tissue hypoperfusion (lactic acidosis)', significance: 'key' },
  ],

  investigations: [
    { clue: 'The first step in reading a blood gas', meaning: 'Assess the pH (acidaemia vs alkalaemia)' },
    { clue: 'How to identify the primary disorder', meaning: 'See whether CO₂ (respiratory) or HCO₃⁻ (metabolic) matches the pH change' },
    { clue: 'The calculation revealing a hidden second acid-base disorder', meaning: 'The delta-delta (Δ anion gap vs Δ bicarbonate)' },
    { clue: 'The distinction between type 1 and type 2 respiratory failure', meaning: 'Type 1 = hypoxaemia with normal/low CO₂; type 2 = hypoxaemia with high CO₂' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'A disciplined stepwise ABG read (pH → primary → compensation → anion gap → delta-delta → oxygenation) prevents missed mixed disorders and directs treatment at the true cause, while the oxygenation data classify respiratory failure (type 1 vs 2) and guide oxygen/ventilation. It operationalises the disorders of [[acid-base-disorders]] and connects to the electrolyte problems of [[fluid-electrolyte-disorders]]; lactate and toxic-alcohol high-gap acidoses tie to resuscitation and antidotes (BCP — [[antidotes-principles]]).' },
  ],

  mnemonics: [
    { hook: 'ABG steps: "pH → primary (CO₂ vs HCO₃) → compensation → anion gap → delta-delta"', expansion: ['Same-direction value = primary', 'Compensation never normalises pH'] },
    { hook: 'Respiratory failure: "Type 1 = O₂ low (CO₂ ok); Type 2 = O₂ low + CO₂ high"', expansion: ['Type 2 = hypoventilation', 'Lactate = hypoperfusion'] },
  ],

  traps: [
    {
      questionCategory: 'Identifying the primary disorder in a mixed picture',
      wrongInstinct: 'You can identify the acid-base problem just from the bicarbonate or CO₂ alone',
      rightAnswer: 'The PRIMARY disorder is identified by which value — CO₂ (respiratory) or HCO₃⁻ (metabolic) — moves in the SAME direction as the pH deviation; the OTHER value should move the same way as compensation. Reading HCO₃⁻ or CO₂ in isolation (without the pH and without checking that compensation is appropriate) misclassifies the disorder and misses mixed pictures revealed by the anion gap and delta-delta',
      why: 'Only the combination of pH, the two values and the compensation check (plus anion gap/delta-delta) correctly identifies simple vs mixed disorders — isolated numbers are ambiguous and lead to the wrong diagnosis and treatment.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'When interpreting a blood gas, the primary acid-base disorder is identified by determining which value moves in the same direction as the pH change. Those two candidate values are:',
      options: [
        { id: 'a', text: 'Sodium and potassium' },
        { id: 'b', text: 'pCO₂ (respiratory) and bicarbonate (metabolic)' },
        { id: 'c', text: 'pO₂ and lactate' },
        { id: 'd', text: 'Chloride and albumin' },
      ],
      answerId: 'b',
      explanation: 'After assessing the pH, you identify the primary disorder by seeing whether pCO₂ (respiratory) or HCO₃⁻ (metabolic) has changed in the same direction as the pH deviation; the other value then reflects compensation. Oxygenation (pO₂) is assessed separately for respiratory failure.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient is hypoxaemic with a raised pCO₂. This defines:',
      options: [
        { id: 'a', text: 'Type 1 respiratory failure' },
        { id: 'b', text: 'Type 2 respiratory failure (hypoventilation)' },
        { id: 'c', text: 'Metabolic alkalosis' },
        { id: 'd', text: 'Normal oxygenation' },
      ],
      answerId: 'b',
      explanation: 'Type 2 respiratory failure is hypoxaemia accompanied by a raised pCO₂ (hypoventilation — e.g. COPD, sedation, neuromuscular disease), whereas type 1 is hypoxaemia with a normal or low CO₂. This distinction, taken from the blood gas, guides oxygen and ventilatory management.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default bloodGasAnionGap;
