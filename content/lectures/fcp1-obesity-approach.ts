import type { Lecture } from '../../lib/types';

export const fcp1ObesityApproach: Lecture = {
  id: 'fcp1-obesity-approach',
  title: 'Approach to Obesity',
  system: 'clinical',
  source: 'L7 — Obesity & Weight Loss',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L7 Obesity & Weight Loss' },
    { kind: 'disease', label: 'Primary vs secondary' },
    { kind: 'investigation', label: 'BMI · waist · metabolic screen' },
    { kind: 'treatment', label: 'Lifestyle → drugs → surgery' },
  ],

  highYield: [
    '**Define it objectively:** **BMI = weight in kg divided by height in metres squared**. WHO cut-offs: overweight 25–29.9, obese 30 or more (class I 30–34.9, II 35–39.9, III 40 or more). **Asian cut-offs are lower** (overweight from 23, obese from 25) — important for Thai patients, who develop metabolic risk at a lower BMI.',
    '**Central (visceral) fat matters more than BMI alone.** Waist circumference (raised at 90 cm or more in Asian men, 80 cm or more in Asian women) and waist-hip ratio predict cardiometabolic risk better than weight. Contrast the mirror-image problem of unintentional loss → [[fcp1-weight-loss-approach]].',
    '**Primary (energy imbalance, polygenic, environmental) is common; screen for the uncommon SECONDARY causes:** hypothyroidism → [[fcp1-hypothyroidism]] and → [[fcp1-thyroid-approach]], Cushing syndrome, PCOS, hypothalamic damage; **drug-induced** (corticosteroids, antipsychotics, insulin/sulfonylureas, some antidepressants); and genetic/syndromic (Prader-Willi, MC4R). Suspect secondary when gain is rapid or accompanied by specific features.',
    '**Obesity is a disease because of its complications:** type 2 diabetes and insulin resistance, hypertension, dyslipidaemia (together the **metabolic syndrome**), obstructive sleep apnoea, **NAFLD**, cardiovascular disease, osteoarthritis, GORD, several cancers, and infertility/PCOS. Evaluation is really complication screening plus a search for a secondary cause.',
    '**Evaluation:** history (diet, activity, drugs, sleep, mood, secondary clues), BMI + waist + BP, look for Cushingoid or hypothyroid signs, and baseline labs — fasting glucose/HbA1c, lipids, TFT and LFTs. Manage risk, not just weight.',
  ],

  mechanism: {
    title: 'Evaluating the patient with obesity',
    steps: [
      { id: 's1', label: 'Measure BMI + waist (use Asian cut-offs where relevant)', emphasis: 'key' },
      { id: 's2', label: 'Primary (energy imbalance) vs secondary (endocrine/drug/genetic)', emphasis: 'normal' },
      { id: 's3', label: 'Screen secondary clues: hypothyroid, Cushing, culprit drugs', emphasis: 'normal' },
      { id: 's4', label: 'Assess complications: diabetes, metabolic syndrome, OSA, NAFLD, CVD', emphasis: 'key' },
      { id: 's5', label: 'Risk-stratify and target: lifestyle → pharmacotherapy → surgery', emphasis: 'normal' },
    ],
  },

  examFindings: [
    { sign: 'Central obesity + purple striae + proximal muscle weakness', mechanism: 'Cortisol excess (Cushing syndrome)', significance: 'key' },
    { sign: 'Acanthosis nigricans (velvety neck/axillary pigmentation)', mechanism: 'Insulin resistance', significance: 'key' },
    { sign: 'Large neck circumference + daytime somnolence, snoring', mechanism: 'Obstructive sleep apnoea', significance: 'supportive' },
    { sign: 'Dry skin, bradycardia, delayed reflexes', mechanism: 'Hypothyroidism as a contributor → [[fcp1-hypothyroidism]]', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Raised fasting glucose or HbA1c', meaning: 'Type 2 diabetes / metabolic syndrome' },
    { clue: 'Elevated ALT with fatty liver on ultrasound', meaning: 'Non-alcoholic fatty liver disease' },
    { clue: 'Raised TSH', meaning: 'Hypothyroidism contributing to weight gain' },
    { clue: 'Failure to suppress on 1 mg overnight dexamethasone', meaning: 'Screen positive for Cushing syndrome' },
  ],

  treatment: [
    { logic: 'Lifestyle change is first-line for everyone', detail: 'Diet, physical activity and behavioural support; a sustained 5–10% loss already improves blood pressure, glycaemia and lipids.' },
    { logic: 'Add pharmacotherapy when BMI is 30 or more (or 27 with a complication)', detail: 'Options include GLP-1 receptor agonists and orlistat, alongside lifestyle measures.' },
    { logic: 'Consider bariatric surgery for BMI 40 or more (or 35 with a complication)', detail: 'Most effective durable therapy; also treat any secondary cause identified.' },
  ],

  mnemonics: [
    { hook: 'BMI + WAIST, then screen SECONDARY, then COMPLICATIONS', expansion: ['Asian cut-offs are lower (obese from 25)', '5–10% loss already helps comorbidities'] },
  ],

  traps: [
    {
      questionCategory: 'Missing a secondary cause',
      wrongInstinct: 'All obesity is lifestyle — no need to investigate',
      rightAnswer: 'Rapid weight gain with striae, proximal weakness or hypertension should prompt screening for Cushing syndrome and hypothyroidism',
      why: 'A treatable endocrine cause changes management entirely and is missed if every patient is labelled primary.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 40-year-old Thai man has a BMI of 26 kg/m2 and a waist circumference of 96 cm. Using the recommendations most appropriate to his population, he is best classified as:',
      options: [
        { id: 'a', text: 'Normal weight with no increased risk' },
        { id: 'b', text: 'Obese with central adiposity and raised cardiometabolic risk' },
        { id: 'c', text: 'Underweight' },
        { id: 'd', text: 'Overweight only if the BMI reaches 30' },
      ],
      answerId: 'b',
      explanation: 'Asian BMI cut-offs classify 25 or more as obese and a waist of 90 cm or more (men) as central adiposity, so this patient is obese with increased cardiometabolic risk despite a BMI that would be only overweight by standard cut-offs.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'A woman with rapid central weight gain, purple abdominal striae, proximal muscle weakness and new hypertension should first be screened for:',
      options: [
        { id: 'a', text: 'Primary (lifestyle) obesity — no tests needed' },
        { id: 'b', text: 'Cushing syndrome' },
        { id: 'c', text: 'Anorexia nervosa' },
        { id: 'd', text: 'Iron deficiency' },
      ],
      answerId: 'b',
      explanation: 'Central obesity with purple striae, proximal myopathy and hypertension are classic for cortisol excess. Screening (for example an overnight dexamethasone suppression test) for Cushing syndrome is indicated.',
      tests: 'investigation',
    },
  ],
};

export default fcp1ObesityApproach;
