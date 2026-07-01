import type { Lecture } from '../../lib/types';

export const insulinTherapyRegimens: Lecture = {
  id: 'insulin-therapy-regimens',
  title: 'Insulin Therapy & Regimens',
  system: 'endocrine',
  source: 'L12 — Drugs Used in Diabetes',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L12 Diabetes Drugs' },
    { kind: 'treatment', label: 'Insulin' },
    { kind: 'mechanism', label: 'Glucose disposal and ketogenesis suppression' },
    { kind: 'exam', label: 'Basal-bolus and hypoglycemia' },
  ],

  highYield: [
    'Insulin binds its receptor and triggers a signaling cascade that increases **GLUT4 translocation in skeletal muscle and adipose tissue**. It increases glucose disposal and storage while reducing hepatic glucose production.',
    'Its critical metabolic actions are **increased peripheral glucose uptake**, increased glycogen/protein/triglyceride synthesis, and **suppression of lipolysis and ketogenesis**.',
    '**T1DM requires insulin.** In T2DM, consider basal insulin when catabolism or severe hyperglycemia is present, especially **HbA1c >10% or glucose >=300 mg/dL** in the lecture algorithm.',
    'A physiologic regimen combines **basal insulin** for fasting/inter-meal needs with **prandial rapid/short-acting insulin** for meals. NPH/regular and analog premixes trade flexibility for convenience.',
    'The major toxicity is **hypoglycemia**: adrenergic symptoms (tachycardia, palpitations, sweating, hunger) can progress to confusion, seizure, and coma. Repeated injections at one site can cause **lipodystrophy**.',
  ],

  mechanism: {
    title: 'Receptor signaling to glucose uptake and ketone suppression',
    steps: [
      { id: 's1', label: 'Insulin binds receptor -> intracellular signaling', emphasis: 'key' },
      { id: 's2', label: 'GLUT4 moves to muscle/adipose membrane -> glucose uptake' },
      { id: 's3', label: 'Liver lowers glucose output; adipose lowers lipolysis' },
      { id: 's4', label: 'Excess relative to intake/activity -> hypoglycemia', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Sweating, tremor, palpitations, hunger, then confusion', mechanism: 'Adrenergic followed by neuroglycopenic hypoglycemia', significance: 'key' },
    { sign: 'Subcutaneous lumps or dents at injection sites', mechanism: 'Insulin-associated lipohypertrophy/lipoatrophy from poor site rotation', significance: 'supportive' },
    { sign: 'Weight loss, ketosis, and glucose >=300 mg/dL in T2DM', mechanism: 'Marked insulin deficiency requiring insulin initiation', significance: 'key' },
  ],

  investigations: [
    { clue: 'Continuous glucose monitoring or structured capillary glucose', meaning: 'Match basal and meal doses to glucose patterns' },
    { clue: 'HbA1c', meaning: 'Assess overall regimen effectiveness' },
    { clue: 'Injection-site inspection', meaning: 'Detect lipodystrophy that makes absorption erratic' },
  ],

  treatment: [
    { logic: 'Use basal-bolus therapy to mimic physiology in T1DM', detail: 'Basal covers fasting needs; prandial insulin covers meals.' },
    { logic: 'Rotate injection sites', detail: 'Prevents lipodystrophy and unpredictable absorption.' },
    { logic: 'Teach hypoglycemia recognition and rescue', detail: 'Dose, food, activity, illness, and monitoring must be coordinated.' },
  ],

  mnemonics: [
    { hook: 'Basal between; bolus with bites', expansion: ['Background insulin', 'Meal insulin'] },
    { hook: 'Insulin stores: glucose, fat, and protein', expansion: ['It also shuts down ketogenesis'] },
  ],

  traps: [
    {
      questionCategory: 'Role of basal versus prandial insulin',
      wrongInstinct: 'Basal insulin should be increased to correct every post-meal spike',
      rightAnswer: 'Basal insulin controls fasting/inter-meal glucose; prandial insulin targets meal excursions',
      why: 'Using basal insulin to chase meals causes overnight or fasting hypoglycemia.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which insulin component primarily covers fasting and between-meal glucose production?',
      options: [
        { id: 'a', text: 'Basal insulin' },
        { id: 'b', text: 'Prandial insulin' },
        { id: 'c', text: 'Correction insulin only' },
        { id: 'd', text: 'Inhaled insulin only' },
      ],
      answerId: 'a',
      explanation: 'Basal insulin restrains background hepatic glucose output; prandial insulin covers carbohydrate absorbed from meals.',
      tests: 'treatment',
    },
  ],
};

export default insulinTherapyRegimens;
