import type { Lecture } from '../../lib/types';

export const type1DiabetesPathogenesis: Lecture = {
  id: 'type1-diabetes-pathogenesis',
  title: 'Type 1 Diabetes: Autoimmune Beta-cell Failure',
  system: 'endocrine',
  source: 'L7 — Clinical Pathology in Diabetes Mellitus',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L7 Clinical Pathology in DM' },
    { kind: 'disease', label: 'Type 1 diabetes' },
    { kind: 'mechanism', label: 'Autoimmune beta-cell destruction' },
    { kind: 'exam', label: 'Islet autoantibodies' },
  ],

  highYield: [
    '**Type 1 diabetes mellitus (T1DM)** is immune-mediated destruction of pancreatic **beta cells**, producing **absolute insulin deficiency** and lifelong dependence on exogenous insulin.',
    'Genetic susceptibility (especially high-risk **HLA alleles**) plus environmental influences initiates islet autoimmunity. Useful markers include **GAD65, insulin autoantibody (IAA), and ZnT8 antibody**.',
    'Progression occurs in stages: **stage 1 = multiple autoantibodies with normoglycemia**; **stage 2 = autoantibodies plus dysglycemia**; **stage 3 = symptomatic, overt diabetes**.',
    'Without insulin, the liver increases glucose output, adipose tissue releases free fatty acids, and hepatic ketogenesis accelerates. The result is **hyperglycemia plus risk of diabetic ketoacidosis (DKA)**.',
    'The classic presentation is **polyuria, polydipsia, polyphagia, and weight loss**. Diagnosis uses standard diabetes thresholds; the mechanism and antibody pattern distinguish T1DM from T2DM.',
  ],

  mechanism: {
    title: 'Islet autoimmunity to absolute insulin deficiency',
    steps: [
      { id: 's1', label: 'HLA susceptibility + environmental trigger' },
      { id: 's2', label: 'Islet autoantibodies and T-cell beta-cell injury', emphasis: 'key' },
      { id: 's3', label: 'Progressive beta-cell loss -> absolute insulin deficiency' },
      { id: 's4', label: 'Hyperglycemia + lipolysis + ketogenesis -> DKA risk', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Polyuria, polydipsia, polyphagia, and weight loss', mechanism: 'Glucosuria with osmotic diuresis plus cellular fuel starvation', significance: 'key' },
    { sign: 'Ketonemia or DKA at first presentation', mechanism: 'Absolute insulin deficiency permits unopposed lipolysis and ketogenesis', significance: 'key' },
    { sign: 'GAD65, IAA, or ZnT8 antibody positivity', mechanism: 'Marker of autoimmune islet injury', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'GAD65, IAA, ZnT8, and other islet autoantibodies', meaning: 'Support autoimmune T1DM and may identify presymptomatic disease' },
    { clue: 'Plasma glucose / HbA1c', meaning: 'Establish dysglycemia or overt diabetes' },
    { clue: 'Blood ketones, bicarbonate, and pH when unwell', meaning: 'Detect DKA' },
  ],

  treatment: [
    { logic: 'Replace insulin from diagnosis', detail: 'T1DM has absolute deficiency; oral monotherapy cannot substitute for insulin.' },
    { logic: 'Teach sick-day and ketone rules', detail: 'Illness can rapidly precipitate DKA.' },
    { logic: 'Screen for chronic complications', detail: 'Risk increases with duration and glycemic exposure.' },
  ],

  mnemonics: [
    { hook: 'Type 1 = Autoantibodies, Absolute deficiency, Acidosis risk', expansion: ['GAD65 / IAA / ZnT8', 'Insulin is mandatory'] },
    { hook: 'Stages: antibodies -> dysglycemia -> symptoms', expansion: ['Stage 1', 'Stage 2', 'Stage 3'] },
  ],

  traps: [
    {
      questionCategory: 'Staging presymptomatic T1DM',
      wrongInstinct: 'Autoantibodies alone mean the patient already has clinical diabetes',
      rightAnswer: 'Multiple islet autoantibodies with normal glucose define stage 1 T1DM; overt symptomatic hyperglycemia is stage 3',
      why: 'Autoimmunity begins before dysglycemia and symptoms, so antibody status and glucose status must be read separately.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A child has two islet autoantibodies but normal fasting and post-load glucose. Which stage of type 1 diabetes is present?',
      options: [
        { id: 'a', text: 'Stage 1' },
        { id: 'b', text: 'Stage 2' },
        { id: 'c', text: 'Stage 3' },
        { id: 'd', text: 'Type 2 diabetes' },
      ],
      answerId: 'a',
      explanation: 'Stage 1 T1DM is islet autoimmunity with normoglycemia. Stage 2 adds dysglycemia; stage 3 is overt clinical diabetes.',
      tests: 'mechanism',
    },
  ],
};

export default type1DiabetesPathogenesis;
