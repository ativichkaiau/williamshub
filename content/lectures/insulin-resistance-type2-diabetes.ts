import type { Lecture } from '../../lib/types';

export const insulinResistanceType2Diabetes: Lecture = {
  id: 'insulin-resistance-type2-diabetes',
  title: 'Insulin Resistance & Type 2 Diabetes',
  system: 'endocrine',
  source: 'L7 — Clinical Pathology in Diabetes Mellitus',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L7 Clinical Pathology in DM' },
    { kind: 'disease', label: 'Type 2 diabetes' },
    { kind: 'mechanism', label: 'Insulin resistance + beta-cell failure' },
    { kind: 'exam', label: 'Ominous octet' },
  ],

  highYield: [
    '**Type 2 diabetes mellitus (T2DM)** is a progressive combination of **insulin resistance** and eventual **beta-cell failure**. Early compensatory hyperinsulinemia can keep glucose near normal for years.',
    '**Visceral ("apple-shaped") adiposity** is metabolically active: excess free fatty acids and inflammatory adipokines impair insulin signaling in liver and muscle. Gluteofemoral ("pear-shaped") subcutaneous fat is less strongly linked to insulin resistance.',
    'The natural history is **rising insulin resistance -> compensatory hyperinsulinemia -> beta-cell stress from lipotoxicity/oxidative stress -> falling insulin secretion -> fasting and postprandial hyperglycemia**.',
    'The **ominous octet** extends beyond muscle, liver, and beta cells: increased glucagon, increased lipolysis, reduced incretin effect, increased renal glucose reabsorption, and CNS neurotransmitter dysfunction all sustain hyperglycemia.',
    '**Metabolic syndrome = any 3 of 5**: increased waist circumference, high triglycerides, low HDL, elevated blood pressure, and elevated fasting glucose. It signals high T2DM and cardiovascular risk.',
  ],

  mechanism: {
    title: 'Visceral adiposity to progressive type 2 diabetes',
    steps: [
      { id: 's1', label: 'Visceral fat -> free fatty acids + inflammatory adipokines', emphasis: 'key' },
      { id: 's2', label: 'Muscle/liver insulin resistance -> compensatory hyperinsulinemia' },
      { id: 's3', label: 'Lipotoxicity + oxidative stress -> beta-cell failure' },
      { id: 's4', label: 'Persistent fasting and post-meal hyperglycemia', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Central obesity with high triglycerides, hypertension, and low HDL', mechanism: 'Insulin resistance / metabolic syndrome', significance: 'key' },
    { sign: 'Acanthosis nigricans', mechanism: 'Hyperinsulinemia stimulates growth-factor receptors in skin', significance: 'supportive' },
    { sign: 'Gradual asymptomatic hyperglycemia', mechanism: 'Long compensatory phase before beta-cell reserve fails', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Waist circumference, triglycerides, HDL, blood pressure, fasting glucose', meaning: 'Assess the five metabolic-syndrome components' },
    { clue: 'Fasting glucose, HbA1c, or 2-hour OGTT', meaning: 'Detect prediabetes and T2DM' },
    { clue: 'Renal, retinal, neurologic, and cardiovascular assessment', meaning: 'Complications may already be present at diagnosis' },
  ],

  treatment: [
    { logic: 'Reduce visceral adiposity and improve insulin sensitivity', detail: 'Nutrition, activity, and weight loss target the upstream driver.' },
    { logic: 'Match medication to the defective organ pathway', detail: 'Metformin, incretin therapy, SGLT2 inhibition, insulin, and other classes act at different octet nodes.' },
    { logic: 'Treat total cardiovascular risk', detail: 'Blood pressure, lipids, smoking, and glycemia all matter.' },
  ],

  mnemonics: [
    { hook: 'Type 2 = Resistance first, Reserve fails later', expansion: ['Hyperinsulinemia precedes relative insulin deficiency'] },
    { hook: 'Metabolic syndrome: Waist, TG, HDL, Pressure, Glucose - pick 3', expansion: ['Central adiposity is the visual clue'] },
  ],

  traps: [
    {
      questionCategory: 'Natural history of T2DM',
      wrongInstinct: 'Hyperglycemia begins as soon as insulin resistance develops',
      rightAnswer: 'Beta cells initially compensate with hyperinsulinemia; glucose rises when compensation becomes inadequate',
      why: 'Insulin resistance precedes clinical diabetes, often by years.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which event most directly explains the transition from compensated insulin resistance to overt type 2 diabetes?',
      options: [
        { id: 'a', text: 'Progressive beta-cell failure' },
        { id: 'b', text: 'Complete autoimmune beta-cell destruction' },
        { id: 'c', text: 'Loss of renal glucose reabsorption' },
        { id: 'd', text: 'Reduced adipose lipolysis' },
      ],
      answerId: 'a',
      explanation: 'Compensatory hyperinsulinemia initially offsets insulin resistance. Overt T2DM appears as beta-cell reserve progressively fails.',
      tests: 'mechanism',
    },
  ],
};

export default insulinResistanceType2Diabetes;
