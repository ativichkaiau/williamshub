import type { Lecture } from '../../lib/types';

export const sodiumWaterDisorders: Lecture = {
  id: 'sodium-water-disorders',
  title: 'Sodium & Water Disorders (Hypo/Hypernatraemia)',
  system: 'renal',
  source: 'L15 — Fluid & Electrolyte Disorders (Clinical)',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L15 Na/Water' },
    { kind: 'mechanism', label: 'Sodium = water problem' },
    { kind: 'exam', label: 'Volume + osmolality approach; ODS' },
  ],

  highYield: [
    '**The KEY concept: serum SODIUM concentration is a measure of WATER balance, not sodium content — hyponatraemia usually means too much WATER relative to solute, and hypernatraemia means too little water. So sodium disorders are approached through water handling (ADH) and VOLUME status, not by "giving/removing salt".**',
    '**HYPONATRAEMIA: first exclude pseudo/hyperosmolar causes (hyperglycaemia), confirm LOW serum osmolality, then classify by VOLUME status. HYPOVOLAEMIC (diuretics, GI/renal losses — urine Na helps localise); EUVOLAEMIC (SIADH — euvolaemic, low serum osmolality, inappropriately concentrated urine, urine Na >30; also hypothyroidism, adrenal insufficiency); HYPERVOLAEMIC (heart failure, cirrhosis, nephrotic/renal failure — oedematous, ADH driven by low effective circulating volume). Management targets the cause: fluid restriction (SIADH), saline (hypovolaemia), treat heart failure/cirrhosis.**',
    '**HYPERNATRAEMIA nearly always reflects a WATER DEFICIT with impaired access to water (the elderly, infants, impaired consciousness) or excess water loss — including DIABETES INSIPIDUS (central: ADH deficiency; nephrogenic: renal ADH resistance — lithium, hypercalcaemia), causing large volumes of dilute urine. It is corrected by replacing the water deficit (and treating the cause, e.g. desmopressin for central DI).**',
    '**RATE OF CORRECTION is a safety issue at BOTH ends. Correcting chronic HYPOnatraemia TOO FAST risks OSMOTIC DEMYELINATION SYNDROME (central pontine myelinolysis); correcting HYPERnatraemia too fast risks CEREBRAL OEDEMA. So chronic dysnatraemias are corrected SLOWLY (sodium change limited per 24 h), whereas acute symptomatic hyponatraemia (seizures) is treated urgently with hypertonic saline.**',
    '**The take-home: sodium concentration = WATER balance. HYPOnatraemia → check osmolality then VOLUME (hypovolaemic/euvolaemic-SIADH/hypervolaemic); HYPERnatraemia = water deficit ± diabetes insipidus. Correct chronic dysnatraemia SLOWLY — too-fast hyponatraemia correction → osmotic demyelination; too-fast hypernatraemia → cerebral oedema.** Potassium is [[potassium-disorders]]; the fluid/electrolyte overview is [[fluid-electrolyte-disorders]].',
  ],

  mechanism: {
    title: 'Sodium concentration = water balance; hyponatraemia by osmolality + volume (hypovolaemic/SIADH/hypervolaemic); hypernatraemia = water deficit ± DI; correct chronic dysnatraemia SLOWLY',
    steps: [
      { id: 's1', label: 'Serum Na = WATER balance, not sodium content (ADH + volume)', emphasis: 'key' },
      { id: 's2', label: 'Hyponatraemia: confirm low osmolality → classify by volume status', emphasis: 'key' },
      { id: 's3', label: 'Euvolaemic hyponatraemia = SIADH (concentrated urine, urine Na >30)', emphasis: 'key' },
      { id: 's4', label: 'Hypernatraemia = water deficit ± diabetes insipidus (dilute urine)', emphasis: 'key' },
      { id: 's5', label: 'Correct chronic dysnatraemia SLOWLY: too-fast hypoNa → osmotic demyelination', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Euvolaemic hyponatraemia with concentrated urine and urine Na >30', mechanism: 'SIADH', significance: 'key' },
    { sign: 'Hyponatraemia with oedema in heart failure or cirrhosis', mechanism: 'Hypervolaemic (low effective circulating volume → ADH)', significance: 'key' },
    { sign: 'Hypernatraemia with large-volume dilute urine', mechanism: 'Diabetes insipidus (central or nephrogenic)', significance: 'key' },
    { sign: 'Quadriparesis/dysarthria days after rapid hyponatraemia correction', mechanism: 'Osmotic demyelination syndrome', significance: 'key' },
    { sign: 'Hyponatraemia that corrects when hyperglycaemia is treated', mechanism: 'Hyperosmolar (translocational) hyponatraemia', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'What the serum sodium concentration actually reflects', meaning: 'Water balance (not sodium content)' },
    { clue: 'The cause of euvolaemic hyponatraemia', meaning: 'SIADH' },
    { clue: 'The cause of hypernatraemia with dilute urine', meaning: 'Diabetes insipidus' },
    { clue: 'The danger of correcting chronic hyponatraemia too fast', meaning: 'Osmotic demyelination (central pontine myelinolysis)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Because serum sodium reflects water balance, dysnatraemias are diagnosed through osmolality and volume status (hyponatraemia: hypovolaemic vs SIADH vs hypervolaemic; hypernatraemia: water deficit ± diabetes insipidus) and treated by correcting water, not just salt, plus the underlying cause. Crucially, chronic dysnatraemias are corrected slowly — too-rapid correction of hyponatraemia causes osmotic demyelination, and too-rapid correction of hypernatraemia causes cerebral oedema — while acute symptomatic hyponatraemia needs urgent hypertonic saline. Potassium is [[potassium-disorders]]; overview [[fluid-electrolyte-disorders]].' },
  ],

  mnemonics: [
    { hook: '"Sodium is a WATER problem" → check osmolality then VOLUME', expansion: ['Euvolaemic = SIADH', 'Hypernatraemia = water deficit/DI'] },
    { hook: '"Correct slow": too-fast hypoNa → demyelination; too-fast hyperNa → cerebral oedema', expansion: ['Acute symptomatic hypoNa → hypertonic saline', 'Limit Na change/24 h'] },
  ],

  traps: [
    {
      questionCategory: 'Rate of hyponatraemia correction',
      wrongInstinct: 'Severe hyponatraemia should be corrected back to normal as quickly as possible',
      rightAnswer: 'CHRONIC hyponatraemia must be corrected SLOWLY (limiting the rise in sodium per 24 hours) because over-rapid correction causes OSMOTIC DEMYELINATION SYNDROME (central pontine myelinolysis) — brain cells that adapted to low osmolality shrink when it rises too fast; only ACUTE, symptomatic hyponatraemia (seizures, coma) warrants urgent hypertonic saline, and even then correction is limited',
      why: 'Aggressive correction of chronic hyponatraemia trades a treatable electrolyte problem for irreversible neurological injury; the safe rate of correction is as important as the direction.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with euvolaemic hyponatraemia, low serum osmolality, inappropriately concentrated urine and urine sodium >30 mmol/L most likely has:',
      options: [
        { id: 'a', text: 'Diabetes insipidus' },
        { id: 'b', text: 'SIADH' },
        { id: 'c', text: 'Hypovolaemic hyponatraemia from diuretics' },
        { id: 'd', text: 'Heart failure' },
      ],
      answerId: 'b',
      explanation: 'SIADH causes euvolaemic hyponatraemia: excess ADH concentrates the urine inappropriately despite low serum osmolality, with urine sodium typically >30 mmol/L. It is managed by fluid restriction and treating the cause, after excluding hypothyroidism and adrenal insufficiency.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Correcting chronic hyponatraemia too rapidly risks which complication?',
      options: [
        { id: 'a', text: 'Cerebral oedema' },
        { id: 'b', text: 'Osmotic demyelination syndrome (central pontine myelinolysis)' },
        { id: 'c', text: 'Acute tubular necrosis' },
        { id: 'd', text: 'Hyperkalaemia' },
      ],
      answerId: 'b',
      explanation: 'Brain cells adapt to chronic hyponatraemia by losing osmoles; raising serum sodium too fast causes them to shrink, producing osmotic demyelination (central pontine myelinolysis). Chronic hyponatraemia is therefore corrected slowly, with limits on the sodium rise per 24 hours.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default sodiumWaterDisorders;
