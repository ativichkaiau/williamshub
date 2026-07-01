import type { Lecture } from '../../lib/types';

export const diabetesKetoneAlbuminuriaTests: Lecture = {
  id: 'diabetes-ketone-albuminuria-tests',
  title: 'Ketones, Albuminuria & Metabolic Complications',
  system: 'endocrine',
  source: 'L10 — Investigations in Diabetes Mellitus',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L10 Diabetes Investigations' },
    { kind: 'investigation', label: 'BHB / urine ACR' },
    { kind: 'disease', label: 'DKA, HHS, diabetic nephropathy' },
    { kind: 'exam', label: 'Nitroprusside limitation' },
  ],

  highYield: [
    'The principal ketones are **beta-hydroxybutyrate (BHB, ~78%)**, acetoacetate (~20%), and acetone (~2%). In suspected DKA, **blood BHB** best reflects current ketosis and should be interpreted with bicarbonate and pH.',
    'Urine nitroprusside strips detect mainly **acetoacetate, not BHB**, so they can underestimate severe/evolving DKA and are unreliable for monitoring response. Check ketones during acute illness, persistent marked hyperglycemia, pregnancy, or symptoms such as nausea, vomiting, and abdominal pain.',
    '**DKA = hyperglycemia + ketosis + metabolic acidosis** (low pH/bicarbonate, high anion gap). **HHS = extreme hyperglycemia, effective osmolality >320 mOsm/kg in the lecture comparison, severe dehydration, and minimal ketosis/acidosis**, often with altered mental status.',
    'Urine **albumin-to-creatinine ratio (ACR)** in a spot sample is the preferred practical screen for diabetic kidney injury. **ACR 30-300 mg/g** is moderately increased albuminuria; >300 mg/g is severely increased/overt albuminuria.',
    'Confirm albuminuria because it is transiently raised by exercise, infection/UTI, fever, heart failure, marked hyperglycemia, pregnancy, severe hypertension, or hematuria. The lecture algorithm uses **2 of 3 positive samples over 3-6 months**.',
  ],

  mechanism: {
    title: 'Use the marker that matches the complication',
    steps: [
      { id: 's1', label: 'Insulin lack -> lipolysis -> BHB-predominant ketosis', emphasis: 'key' },
      { id: 's2', label: 'BHB + pH/bicarbonate define and follow DKA' },
      { id: 's3', label: 'Chronic glomerular injury leaks albumin' },
      { id: 's4', label: 'Persistent ACR elevation -> diabetic kidney risk' },
    ],
  },

  examFindings: [
    { sign: 'Kussmaul breathing, abdominal pain, fruity breath', mechanism: 'Ketotic high-anion-gap metabolic acidosis', significance: 'key' },
    { sign: 'Profound dehydration and altered consciousness without marked ketones', mechanism: 'HHS with hyperosmolar neuronal dehydration', significance: 'key' },
    { sign: 'Single elevated ACR during a UTI', mechanism: 'Possible transient albuminuria requiring repeat confirmation', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Blood BHB + venous pH/bicarbonate + electrolytes', meaning: 'Diagnose and monitor DKA' },
    { clue: 'Glucose + calculated osmolality + mental status', meaning: 'Recognize HHS' },
    { clue: 'Spot urine ACR, repeated if >=30 mg/g', meaning: 'Screen and confirm diabetic kidney disease' },
  ],

  treatment: [
    { logic: 'Prefer blood BHB over urine ketones when DKA is suspected', detail: 'The urine strip misses the predominant ketone.' },
    { logic: 'Treat DKA/HHS as emergencies while trending the defining marker', detail: 'BHB/acidosis for DKA; osmolality and hydration for HHS.' },
    { logic: 'Confirm albuminuria after transient causes resolve', detail: 'One positive sample is not enough to establish chronic kidney injury.' },
  ],

  mnemonics: [
    { hook: 'BHB is the Big ketone in DKA', expansion: ['Urine nitroprusside misses it'] },
    { hook: 'DKA = Ketones + Acidosis; HHS = Hyperosmolar + Hydration loss', expansion: ['Different defining laboratory axis'] },
  ],

  traps: [
    {
      questionCategory: 'Using urine ketones to follow DKA',
      wrongInstinct: 'A urine nitroprusside strip quantifies the major circulating ketone',
      rightAnswer: 'It detects acetoacetate but not BHB; use blood BHB with acid-base data for diagnosis and monitoring',
      why: 'BHB predominates in DKA, so urine strips can understate the active ketone burden.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Why can a urine nitroprusside ketone test underestimate DKA severity?',
      options: [
        { id: 'a', text: 'It does not detect beta-hydroxybutyrate' },
        { id: 'b', text: 'It detects only glucose' },
        { id: 'c', text: 'It is positive only when pH is normal' },
        { id: 'd', text: 'It detects albumin rather than ketones' },
      ],
      answerId: 'a',
      explanation: 'Nitroprusside detects mainly acetoacetate. BHB is the dominant ketone in DKA, so direct blood BHB is preferred.',
      tests: 'investigation',
    },
  ],
};

export default diabetesKetoneAlbuminuriaTests;
