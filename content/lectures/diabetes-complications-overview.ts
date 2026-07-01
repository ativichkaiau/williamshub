import type { Lecture } from '../../lib/types';

export const diabetesComplicationsOverview: Lecture = {
  id: 'diabetes-complications-overview',
  title: 'Diabetes Complications: Acute & Chronic',
  system: 'endocrine',
  source: 'L7 — Clinical Pathology in Diabetes Mellitus',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L7 Clinical Pathology in DM' },
    { kind: 'disease', label: 'Diabetes complications' },
    { kind: 'mechanism', label: 'Endothelial injury and oxidative stress' },
    { kind: 'exam', label: 'Microvascular vs macrovascular' },
  ],

  highYield: [
    'Acute diabetic emergencies are **DKA**, **hyperglycemic hyperosmolar state (HHS)**, and **hypoglycemia**. DKA is classically linked to T1DM; HHS is classically linked to T2DM.',
    'Chronic hyperglycemia drives **endothelial dysfunction, inflammation, and oxidative stress**, progressively damaging small and large vessels.',
    '**Microvascular complications** are **retinopathy, nephropathy, and neuropathy**. Their risk tracks glycemic exposure and disease duration.',
    '**Macrovascular complications** reflect accelerated atherosclerosis: **myocardial infarction, ischemic stroke, and peripheral arterial disease**.',
    'Neuropathy plus ischemia and impaired host defense creates the diabetic-foot pathway: **loss of protective sensation -> unnoticed trauma -> ulcer/infection -> gangrene or amputation**.',
  ],

  mechanism: {
    title: 'Chronic hyperglycemia to end-organ damage',
    steps: [
      { id: 's1', label: 'Persistent hyperglycemia' },
      { id: 's2', label: 'Oxidative stress + inflammation + endothelial dysfunction', emphasis: 'key' },
      { id: 's3', label: 'Microvascular: retina, glomerulus, peripheral nerves' },
      { id: 's4', label: 'Macrovascular: coronary, cerebral, peripheral arteries', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Reduced monofilament sensation with a painless foot wound', mechanism: 'Peripheral neuropathy removes protective pain sensation', significance: 'key' },
    { sign: 'Albuminuria', mechanism: 'Diabetic glomerular microvascular injury', significance: 'key' },
    { sign: 'Retinal hemorrhages, exudates, or neovascularization', mechanism: 'Diabetic retinopathy', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Urine albumin-to-creatinine ratio and eGFR', meaning: 'Screen for diabetic kidney disease' },
    { clue: 'Dilated retinal examination', meaning: 'Detect retinopathy before visual loss' },
    { clue: 'Foot inspection, pulses, and 10-g monofilament testing', meaning: 'Identify ulcer, ischemic, and neuropathic risk' },
  ],

  treatment: [
    { logic: 'Prevent with durable glycemic control', detail: 'Particularly effective for reducing microvascular risk.' },
    { logic: 'Control blood pressure and atherosclerotic risk', detail: 'Reduces renal and macrovascular events.' },
    { logic: 'Build routine eye, kidney, and foot surveillance', detail: 'Early complications are often silent.' },
  ],

  mnemonics: [
    { hook: 'Micro = Retina, Renal, Nerves', expansion: ['Retinopathy', 'Nephropathy', 'Neuropathy'] },
    { hook: 'Macro = Heart, Head, Hindlimb', expansion: ['MI', 'Stroke', 'Peripheral arterial disease'] },
  ],

  traps: [
    {
      questionCategory: 'Classifying diabetic complications',
      wrongInstinct: 'Peripheral arterial disease is a microvascular complication because it affects the distal limb',
      rightAnswer: 'Peripheral arterial disease is macrovascular atherosclerosis; neuropathy is the microvascular contributor to the diabetic foot',
      why: 'Classify by the injured vessel/pathway, not by the anatomic size of the affected body part.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which set contains only chronic microvascular complications of diabetes?',
      options: [
        { id: 'a', text: 'Retinopathy, nephropathy, neuropathy' },
        { id: 'b', text: 'Myocardial infarction, stroke, neuropathy' },
        { id: 'c', text: 'DKA, HHS, hypoglycemia' },
        { id: 'd', text: 'Retinopathy, peripheral arterial disease, stroke' },
      ],
      answerId: 'a',
      explanation: 'Retinopathy, nephropathy, and neuropathy are the classic microvascular triad. MI, stroke, and PAD are macrovascular.',
      tests: 'exam',
    },
  ],
};

export default diabetesComplicationsOverview;
