import type { Lecture } from '../../lib/types';

export const glucoseSpecimensMonitoring: Lecture = {
  id: 'glucose-specimens-monitoring',
  title: 'Glucose Specimens, SMBG & CGM',
  system: 'endocrine',
  source: 'L10 — Investigations in Diabetes Mellitus',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L10 Diabetes Investigations' },
    { kind: 'investigation', label: 'Plasma glucose / SMBG / CGM' },
    { kind: 'mechanism', label: 'Preanalytic glycolysis' },
    { kind: 'exam', label: 'Gray-top tube and meter limitations' },
  ],

  highYield: [
    'Cells continue glycolysis after collection, lowering measured glucose by roughly **5-10 mg/dL per hour** if blood is left unseparated. Separate plasma/serum promptly; a **gray-top fluoride-oxalate tube** inhibits glycolysis and provides anticoagulation.',
    'Fasting plasma glucose requires an **8-12 hour fast**. The **hexokinase method** is the reference enzymatic method; glucose oxidase-peroxidase generates H2O2 and a measurable color signal.',
    '**Portable glucose meters are for monitoring, not diagnosis or population screening.** Accuracy falls at very low/high glucose, and errors arise from poor strip insertion, too little blood, contaminated fingers, dehydration, and abnormal hematocrit.',
    '**SMBG** provides point-in-time capillary values for day-to-day insulin adjustment. **CGM** measures interstitial glucose continuously, revealing trends, time in range, and hidden excursions.',
    'Interstitial glucose **lags behind blood glucose**. If symptoms and CGM disagree, confirm with capillary testing. Urine glucose is also unreliable for real-time control because it becomes positive only above the renal threshold (about **180 mg/dL**) and has multiple interferences.',
  ],

  mechanism: {
    title: 'From collection to a trustworthy glucose result',
    steps: [
      { id: 's1', label: 'Collect plasma specimen and stop cellular glycolysis', emphasis: 'key' },
      { id: 's2', label: 'Measure enzymatically with hexokinase or glucose oxidase' },
      { id: 's3', label: 'Use SMBG for point values; CGM for trends' },
      { id: 's4', label: 'Confirm discordant point-of-care data in the laboratory' },
    ],
  },

  examFindings: [
    { sign: 'Unexpectedly low laboratory glucose after delayed separation', mechanism: 'Ongoing leukocyte/RBC glycolysis in the tube', significance: 'key' },
    { sign: 'Very high meter result after handling fruit', mechanism: 'Sugar contamination on the fingertip', significance: 'supportive' },
    { sign: 'Hypoglycemic symptoms despite a normal CGM reading during rapid change', mechanism: 'Interstitial sensor lag', significance: 'key' },
  ],

  investigations: [
    { clue: 'Laboratory plasma glucose', meaning: 'Use for diagnosis' },
    { clue: 'SMBG', meaning: 'Immediate capillary value for treatment decisions' },
    { clue: 'CGM time in range and trend arrows', meaning: 'Reveal longitudinal patterns and unseen highs/lows' },
  ],

  treatment: [
    { logic: 'Separate cells promptly or use appropriate antiglycolytic collection', detail: 'Protect the preanalytic integrity of the glucose result.' },
    { logic: 'Repeat and confirm when a meter/CGM conflicts with the patient', detail: 'Treat the clinical emergency while verifying device error.' },
    { logic: 'Use CGM and SMBG as complementary tools', detail: 'Trends and point values answer different questions.' },
  ],

  mnemonics: [
    { hook: 'Gray stops glucose going away', expansion: ['Fluoride inhibits glycolysis', 'Oxalate anticoagulates'] },
    { hook: 'CGM is continuous but compartment-delayed', expansion: ['Interstitial glucose lags blood'] },
  ],

  traps: [
    {
      questionCategory: 'Using a portable glucose meter for diagnosis',
      wrongInstinct: 'A home meter value alone can establish diabetes',
      rightAnswer: 'Portable meters guide monitoring; diagnosis requires accepted laboratory plasma glucose or standardized HbA1c testing',
      why: 'Point-of-care meter error is too variable for formal diagnosis and screening.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Why can glucose be falsely low when whole blood remains at room temperature before plasma separation?',
      options: [
        { id: 'a', text: 'Blood cells continue consuming glucose by glycolysis' },
        { id: 'b', text: 'Fluoride converts glucose to lactate' },
        { id: 'c', text: 'Albumin binds all circulating glucose' },
        { id: 'd', text: 'The kidney clears glucose from the tube' },
      ],
      answerId: 'a',
      explanation: 'RBCs and WBCs remain metabolically active in vitro and consume glucose; prompt separation or an antiglycolytic tube limits the fall.',
      tests: 'investigation',
    },
  ],
};

export default glucoseSpecimensMonitoring;
