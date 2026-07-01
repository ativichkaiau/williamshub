import type { Lecture } from '../../lib/types';

export const sglt2AlphaGlucosidaseSelection: Lecture = {
  id: 'sglt2-alpha-glucosidase-selection',
  title: 'SGLT2, Alpha-glucosidase & Drug Selection',
  system: 'endocrine',
  source: 'L12 — Drugs Used in Diabetes',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L12 Diabetes Drugs' },
    { kind: 'treatment', label: 'SGLT2 / alpha-glucosidase inhibitors' },
    { kind: 'mechanism', label: 'Glucosuria / delayed carbohydrate absorption' },
    { kind: 'exam', label: 'Comorbidity-based selection' },
  ],

  highYield: [
    '**SGLT2 inhibitors** (canagliflozin, dapagliflozin, empagliflozin, ertugliflozin) inhibit proximal-nephron glucose reabsorption, causing **glucosuria**.',
    'They are prioritized in T2DM with **heart failure** and are important options in **CKD** and patients with cardiovascular risk. They offer intermediate weight loss in the lecture comparison.',
    'SGLT2 adverse effects follow the mechanism: **genitourinary infection, polyuria, volume depletion, hypotension, and dizziness**.',
    '**Alpha-glucosidase inhibitors** (acarbose, miglitol) delay intestinal carbohydrate digestion and absorption, primarily reducing **postprandial glucose**. Fermentation of unabsorbed carbohydrate causes **flatulence and diarrhea**.',
    'Choose therapy by outcomes, not HbA1c alone: **ASCVD/high risk -> GLP-1 RA or SGLT2i; heart failure -> SGLT2i; CKD -> SGLT2i or GLP-1 RA; MASLD/MASH -> GLP-1 RA or TZD**. For glucose lowering, insulin and GLP-1 RA have very high efficacy; metformin/TZD/SGLT2i/SU are high; DPP-4i are intermediate.',
  ],

  mechanism: {
    title: 'Target the kidney or the intestinal carbohydrate peak',
    steps: [
      { id: 's1', label: 'SGLT2i blocks proximal-tubule glucose reabsorption', emphasis: 'key' },
      { id: 's2', label: 'Glucosuria -> lower glucose + osmotic diuresis' },
      { id: 's3', label: 'Alpha-glucosidase inhibition delays carbohydrate digestion' },
      { id: 's4', label: 'Lower post-meal peak but more distal fermentation/GI gas' },
    ],
  },

  examFindings: [
    { sign: 'Genital infection with polyuria and dizziness after a -gliflozin', mechanism: 'Glucosuria plus osmotic diuresis from SGLT2 inhibition', significance: 'key' },
    { sign: 'Flatulence after a drug targeting post-meal glucose', mechanism: 'Alpha-glucosidase inhibition leaves carbohydrate for colonic fermentation', significance: 'supportive' },
    { sign: 'T2DM with heart failure', mechanism: 'Comorbidity pattern favoring an SGLT2 inhibitor', significance: 'key' },
  ],

  investigations: [
    { clue: 'Renal function and volume status before SGLT2i', meaning: 'Guide safe initiation and monitor osmotic-diuretic effects' },
    { clue: 'History/examination for recurrent genitourinary infection', meaning: 'Assess class-specific tolerability' },
    { clue: 'ASCVD, HF, CKD, MASLD/MASH, weight, and hypoglycemia priorities', meaning: 'Select therapy by patient outcome rather than glucose alone' },
  ],

  treatment: [
    { logic: 'Prioritize SGLT2 inhibition in T2DM with heart failure', detail: 'The cardiorenal indication drives the choice.' },
    { logic: 'Use alpha-glucosidase inhibition for a postprandial target', detail: 'Counsel that GI gas/diarrhea are mechanism-linked.' },
    { logic: 'Choose the regimen around comorbidity, weight, efficacy, safety, and cost', detail: 'No single glucose-lowering hierarchy fits every patient.' },
  ],

  mnemonics: [
    { hook: '-gliflozin makes glucose flow in urine', expansion: ['GU infection', 'Polyuria', 'Volume depletion'] },
    { hook: 'Acarbose slows carbs; colon gas follows', expansion: ['Postprandial effect'] },
  ],

  traps: [
    {
      questionCategory: 'Selecting therapy when a major comorbidity is present',
      wrongInstinct: 'Always choose the drug with the largest HbA1c reduction',
      rightAnswer: 'In heart failure, CKD, or ASCVD, prioritize agents with outcome benefit even when another class lowers HbA1c more',
      why: 'Modern diabetes pharmacotherapy treats cardiorenal risk as well as glucose.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with T2DM and heart failure needs another glucose-lowering drug. Which class is specifically prioritized in the lecture algorithm?',
      options: [
        { id: 'a', text: 'SGLT2 inhibitor' },
        { id: 'b', text: 'Sulfonylurea' },
        { id: 'c', text: 'Thiazolidinedione' },
        { id: 'd', text: 'Alpha-glucosidase inhibitor' },
      ],
      answerId: 'a',
      explanation: 'SGLT2 inhibitors are prioritized for T2DM with heart failure. TZDs can worsen fluid retention and are a poor fit.',
      tests: 'treatment',
    },
  ],
};

export default sglt2AlphaGlucosidaseSelection;
