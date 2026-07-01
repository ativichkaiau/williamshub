import type { Lecture } from '../../lib/types';

export const dkaHhsRecognition: Lecture = {
  id: 'dka-hhs-recognition',
  title: 'DKA & HHS: Recognition and Diagnosis',
  system: 'endocrine',
  source: 'L11 — DKA & Thyroid Storm',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L11 Endocrine Emergencies' },
    { kind: 'disease', label: 'DKA / HHS' },
    { kind: 'mechanism', label: 'Insulin deficiency and counterregulation' },
    { kind: 'exam', label: 'Ketosis vs hyperosmolality' },
  ],

  highYield: [
    '**DKA requires all three**: diabetes/hyperglycemia (**glucose >=200 mg/dL or prior diabetes**), ketosis (**BHB >=3 mmol/L or urine ketones >=2+**), and metabolic acidosis (**pH <7.3 and/or bicarbonate <18 mmol/L**). About 10% can be euglycemic.',
    'Absolute insulin deficiency plus glucagon/catecholamine/cortisol/GH drives hepatic glucose output and **lipolysis -> free fatty acids -> ketone production -> high-anion-gap acidosis**. Hyperglycemia causes glycosuria, osmotic diuresis, electrolyte loss, and dehydration.',
    'DKA develops over hours to days with polyuria/polydipsia, dehydration, nausea/vomiting, abdominal pain, **Kussmaul respiration**, and fruity breath. Infection is the most common trigger; new diabetes and insulin omission are also major triggers.',
    '**HHS requires glucose >=600 mg/dL**, calculated effective osmolality >300 mOsm/kg or total osmolality >320, **BHB <3 / urine ketones <2+**, **pH >=7.3**, and **bicarbonate >=15 mmol/L**.',
    'HHS reflects relative insulin deficiency: enough insulin remains to limit ketogenesis, but not hyperglycemia. It evolves over days to a week, causing more severe dehydration and hyperosmolar neurologic dysfunction (drowsiness, delirium, seizures, focal deficits, coma). About one-third of crises have mixed DKA/HHS features.',
  ],

  mechanism: {
    title: 'Degree of insulin deficiency determines the crisis phenotype',
    steps: [
      { id: 's1', label: 'Illness or insulin omission -> insulin deficiency + counterregulation', emphasis: 'key' },
      { id: 's2', label: 'Both: hepatic glucose output -> osmotic diuresis + dehydration' },
      { id: 's3', label: 'Absolute deficiency -> lipolysis -> BHB -> DKA acidosis' },
      { id: 's4', label: 'Relative deficiency -> extreme glucose/osmolality -> HHS brain dysfunction', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Kussmaul breathing with fruity breath and abdominal pain', mechanism: 'Respiratory compensation plus ketones in DKA', significance: 'key' },
    { sign: 'Profound dehydration with delirium or focal neurologic signs', mechanism: 'Hyperosmolar neuronal dehydration in HHS', significance: 'key' },
    { sign: 'Normal/high serum K despite total-body K depletion', mechanism: 'Acidosis and insulin lack shift K out of cells while urine loses K', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Glucose, blood BHB, venous pH/bicarbonate, electrolytes, anion gap', meaning: 'Establish DKA and grade severity' },
    { clue: 'Glucose, calculated effective/total osmolality, BHB, pH/bicarbonate', meaning: 'Establish HHS and detect mixed crisis' },
    { clue: 'Cultures/urinalysis, ECG/troponin, medication history, other trigger workup', meaning: 'Find infection, ischemia, omission, or another precipitant' },
  ],

  treatment: [
    { logic: 'Diagnose by the defining laboratory triad/pentad', detail: 'Do not let a glucose below 200 exclude euglycemic DKA.' },
    { logic: 'Search for the precipitating cause at presentation', detail: 'The crisis will recur or fail to resolve if the trigger persists.' },
    { logic: 'Identify mixed DKA/HHS', detail: 'Marked hyperosmolality and ketoacidosis can coexist and increase risk.' },
  ],

  mnemonics: [
    { hook: 'DKA = Diabetes + Ketosis + Acidosis', expansion: ['All three must be present'] },
    { hook: 'HHS = 600 glucose, Hyperosmolar, Hardly ketotic', expansion: ['Often altered consciousness'] },
  ],

  traps: [
    {
      questionCategory: 'Recognizing euglycemic DKA',
      wrongInstinct: 'Glucose below 200 mg/dL rules out DKA',
      rightAnswer: 'Ketosis plus metabolic acidosis can be DKA even with glucose below 200 mg/dL',
      why: 'The diagnosis depends on all three components, and euglycemic DKA is a recognized presentation.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with diabetes has glucose 180 mg/dL, BHB 4.5 mmol/L, pH 7.20, and bicarbonate 12 mmol/L. What is the best diagnosis?',
      options: [
        { id: 'a', text: 'Euglycemic DKA' },
        { id: 'b', text: 'HHS' },
        { id: 'c', text: 'Uncomplicated hyperglycemia' },
        { id: 'd', text: 'No diabetic emergency because glucose is below 200' },
      ],
      answerId: 'a',
      explanation: 'The patient has diabetes, significant ketonemia, and metabolic acidosis. DKA can occur with glucose below 200 mg/dL.',
      tests: 'investigation',
    },
  ],
};

export default dkaHhsRecognition;
