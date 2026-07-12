import type { Lecture } from '../../lib/types';

export const fcp1NutritionalAssessment: Lecture = {
  id: 'fcp1-nutritional-assessment',
  title: 'Nutritional Assessment: The ABCD Approach',
  system: 'clinical',
  source: 'L4 — Nutritional Assessment',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L4 Nutritional Assessment' },
    { kind: 'mechanism', label: 'ABCD framework' },
    { kind: 'exam', label: 'BMI · MUAC · deficiency signs' },
    { kind: 'investigation', label: 'MUST · refeeding risk' },
  ],

  highYield: [
    '**Structure every nutritional assessment as “ABCD”: Anthropometry, Biochemical, Clinical, Dietary.** No single measure is sufficient — you combine them to judge nutritional status and risk.',
    '**Anthropometry:** **BMI** in adults (underweight <18.5, overweight ≥25), **mid-upper-arm circumference (MUAC)** as a quick field measure, and in children **weight-for-height/length and Z-scores** plotted on charts ([[fcp1-growth-assessment]]). **Unintentional loss of 5–10% of body weight** is significant ([[fcp1-weight-loss-approach]]).',
    '**Biochemical and clinical assessment add depth.** Bloods (electrolytes, micronutrients, and albumin/prealbumin — remembering albumin falls with inflammation, not just malnutrition) plus a clinical hunt for **deficiency signs** in the skin, hair, nails and mouth.',
    '**Take a focused dietary history:** actual intake and appetite, weight change over time, food restrictions or losses (vomiting, diarrhoea), and the social factors (poverty, isolation, alcohol) that drive them.',
    '**Screen and stratify with a validated tool** such as **MUST** in adults, and always ask: is this person at **refeeding risk**? Very low intake, very low BMI or alcohol dependence flag the danger before any feeding starts. Recognising over- and under-nutrition continues in [[fcp1-malnutrition-evaluation]].',
  ],

  mechanism: {
    title: 'The ABCD nutritional assessment',
    steps: [
      { id: 's1', label: 'Dietary history: intake, appetite and weight change' },
      { id: 's2', label: 'Anthropometry: BMI, MUAC, Z-scores (plot in children)', emphasis: 'key' },
      { id: 's3', label: 'Biochemical: micronutrients, electrolytes, albumin/prealbumin' },
      { id: 's4', label: 'Clinical: hunt for deficiency signs (skin, hair, nails, mouth)' },
      { id: 's5', label: 'Screen (MUST) & flag refeeding risk before feeding', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'BMI below 18.5, or a low MUAC', mechanism: 'Anthropometric thresholds identify underweight and acute malnutrition', significance: 'key' },
    { sign: 'Visible loss of muscle bulk (temporalis, deltoid) and fat stores', mechanism: 'Protein-energy undernutrition depletes muscle and subcutaneous fat', significance: 'key' },
    { sign: 'Angular cheilitis, glossitis or koilonychia', mechanism: 'Clinical signs of B-vitamin and iron deficiency states', significance: 'supportive' },
    { sign: 'Unintentional weight loss exceeding 5–10% of body weight', mechanism: 'A quantified marker of a clinically significant nutritional problem', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A child with a MUAC below the age threshold', meaning: 'Indicates acute malnutrition — assess fully and manage ([[fcp1-malnutrition-evaluation]])' },
    { clue: 'A low serum albumin in an unwell patient', meaning: 'Reflects inflammation/illness as much as nutrition — do not use it alone to diagnose malnutrition' },
    { clue: 'Microcytic anaemia with koilonychia', meaning: 'Suggests iron deficiency — pursue iron studies ([[fcp1-anemia-microcytic]])' },
    { clue: 'Negligible intake for several days plus a very low BMI', meaning: 'High refeeding risk — check phosphate, potassium and magnesium before and during feeding' },
  ],

  treatment: [
    { logic: 'Use the four ABCD strands together', detail: 'Anthropometry, biochemistry, clinical signs and diet each capture a different facet; a confident nutritional judgement needs the composite, not one number.' },
    { logic: 'Identify refeeding risk before you feed', detail: 'Screen for prolonged low intake, low BMI and alcohol use; in high-risk patients start feeding cautiously, give thiamine and replace electrolytes.' },
  ],

  mnemonics: [
    { hook: 'Nutritional assessment = ABCD: Anthropometry, Biochemical, Clinical, Dietary', expansion: ['Anthropometry — BMI, MUAC, Z-scores', 'Biochemical — micronutrients, electrolytes', 'Clinical — deficiency signs on exam', 'Dietary — intake, appetite, weight change'] },
  ],

  traps: [
    {
      questionCategory: 'Nutritional biomarkers',
      wrongInstinct: 'A low albumin confirms the patient is malnourished',
      rightAnswer: 'Albumin is a negative acute-phase reactant and falls with inflammation, so it is an unreliable stand-alone marker of nutrition',
      why: 'Sick, inflamed patients drop their albumin regardless of intake; nutritional status must be judged on the whole ABCD assessment, not albumin alone.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A nutrition assessment framework is summarised as “ABCD”. Which set of components does this represent?',
      options: [
        { id: 'a', text: 'Airway, Breathing, Circulation, Disability' },
        { id: 'b', text: 'Anthropometry, Biochemical, Clinical, Dietary' },
        { id: 'c', text: 'Albumin, BMI, Calories, Diet' },
        { id: 'd', text: 'Appetite, Bowels, Cravings, Digestion' },
      ],
      answerId: 'b',
      explanation: 'Nutritional assessment integrates Anthropometry, Biochemical tests, Clinical signs and Dietary history. Combining all four gives a reliable picture, whereas any single strand can mislead.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A frail patient has eaten almost nothing for a week and has a BMI of 14. Before starting nutritional support, the most important immediate concern is:',
      options: [
        { id: 'a', text: 'Overfeeding to restore weight as fast as possible' },
        { id: 'b', text: 'Refeeding syndrome, so check and replace phosphate, potassium and magnesium and give thiamine' },
        { id: 'c', text: 'That albumin is normal, so no risk exists' },
        { id: 'd', text: 'Delaying all feeding for several more days' },
      ],
      answerId: 'b',
      explanation: 'Prolonged near-starvation with a very low BMI is high risk for refeeding syndrome. Feeding must start cautiously with thiamine and close monitoring and replacement of phosphate, potassium and magnesium.',
      tests: 'treatment',
    },
  ],
};

export default fcp1NutritionalAssessment;
