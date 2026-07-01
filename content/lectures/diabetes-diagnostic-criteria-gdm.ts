import type { Lecture } from '../../lib/types';

export const diabetesDiagnosticCriteriaGdm: Lecture = {
  id: 'diabetes-diagnostic-criteria-gdm',
  title: 'Diabetes Diagnosis, Screening & GDM',
  system: 'endocrine',
  source: 'L10 — Investigations in Diabetes Mellitus',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L10 Diabetes Investigations' },
    { kind: 'investigation', label: 'FPG / HbA1c / OGTT' },
    { kind: 'disease', label: 'Prediabetes and GDM' },
    { kind: 'exam', label: 'Diagnostic thresholds' },
  ],

  highYield: [
    'Diabetes is diagnosed by any of: **FPG >=126 mg/dL**, **HbA1c >=6.5%**, **2-hour plasma glucose >=200 mg/dL during a 75-g OGTT**, or **random plasma glucose >=200 mg/dL with classic symptoms or hyperglycemic crisis**.',
    'In an asymptomatic patient without unequivocal hyperglycemia, **confirm an abnormal result** with repeat testing. Prediabetes: **FPG 100-125 mg/dL, HbA1c 5.7-6.4%, or 2-hour OGTT 140-199 mg/dL**.',
    'Screen adults with risk factors such as overweight/obesity (**BMI >=23 kg/m2 in Asian populations**), family history, hypertension, dyslipidemia, cardiovascular disease, or prior GDM. The lecture notes routine age-based screening from 35 years in Thai guidance and repeat screening every 1-3 years.',
    'For one-step GDM diagnosis, perform a fasting **75-g OGTT at 24-28 weeks**. GDM is diagnosed if **any one** value reaches: fasting **92**, 1-hour **180**, or 2-hour **153 mg/dL**.',
    'The two-step approach uses a nonfasting **50-g 1-hour challenge** (positive at >=140 mg/dL), then a fasting **100-g 3-hour OGTT**. Diagnose if **2 or more** reach fasting 95, 1-hour 180, 2-hour 155, or 3-hour 140 mg/dL.',
  ],

  mechanism: {
    title: 'Screen risk -> confirm dysglycemia -> classify context',
    steps: [
      { id: 's1', label: 'Identify symptoms or high-risk asymptomatic patient' },
      { id: 's2', label: 'Use FPG, HbA1c, OGTT, or symptomatic random glucose', emphasis: 'key' },
      { id: 's3', label: 'Confirm if asymptomatic and hyperglycemia is not unequivocal' },
      { id: 's4', label: 'Apply pregnancy-specific OGTT thresholds for GDM' },
    ],
  },

  examFindings: [
    { sign: 'Polyuria, polydipsia, and weight loss with random glucose 220 mg/dL', mechanism: 'Classic symptoms plus random glucose >=200 establish diabetes', significance: 'key' },
    { sign: 'FPG 120 mg/dL without symptoms', mechanism: 'Impaired fasting glucose / prediabetes, not diabetes', significance: 'key' },
    { sign: '25-week 75-g OGTT with fasting glucose 94 mg/dL', mechanism: 'One abnormal one-step threshold is enough for GDM', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'FPG / HbA1c / 75-g 2-hour OGTT', meaning: 'Accepted nonpregnant diagnostic routes' },
    { clue: 'Random plasma glucose >=200 mg/dL plus classic symptoms/crisis', meaning: 'Diagnostic without waiting for a fasting test' },
    { clue: 'Pregnancy-specific 75-g or staged 50-g -> 100-g pathway', meaning: 'Screen and diagnose GDM' },
  ],

  treatment: [
    { logic: 'Repeat an abnormal test in an asymptomatic patient', detail: 'Do not label diabetes from a single borderline result without confirmation.' },
    { logic: 'Act immediately when symptoms/crisis make hyperglycemia unequivocal', detail: 'Confirmation must not delay emergency treatment.' },
    { logic: 'Repeat GDM screening at 24-28 weeks after a negative early high-risk screen', detail: 'Insulin resistance rises later in pregnancy.' },
  ],

  mnemonics: [
    { hook: 'Diabetes: 126 fasting, 6.5 A1c, 200 at 2 hours, or symptomatic random 200', expansion: ['Four routes'] },
    { hook: 'One-step GDM = 92, 180, 153 - one is enough', expansion: ['Fasting', '1 hour', '2 hours'] },
  ],

  traps: [
    {
      questionCategory: 'Confirming diabetes',
      wrongInstinct: 'Any single abnormal screening value permanently establishes diabetes',
      rightAnswer: 'Confirm an abnormal result in an asymptomatic patient unless hyperglycemia is unequivocal; symptomatic random glucose >=200 or crisis is diagnostic',
      why: 'Biologic and preanalytic variation matter when the clinical picture is not definitive.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An asymptomatic adult has a fasting plasma glucose of 120 mg/dL. How should this be classified?',
      options: [
        { id: 'a', text: 'Normal fasting glucose' },
        { id: 'b', text: 'Prediabetes (impaired fasting glucose)' },
        { id: 'c', text: 'Diabetes mellitus' },
        { id: 'd', text: 'Hyperosmolar state' },
      ],
      answerId: 'b',
      explanation: 'FPG 100-125 mg/dL is impaired fasting glucose/prediabetes; diabetes begins at 126 mg/dL and generally requires confirmation if asymptomatic.',
      tests: 'investigation',
    },
  ],
};

export default diabetesDiagnosticCriteriaGdm;
