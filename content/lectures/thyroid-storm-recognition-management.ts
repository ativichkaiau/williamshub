import type { Lecture } from '../../lib/types';

export const thyroidStormRecognitionManagement: Lecture = {
  id: 'thyroid-storm-recognition-management',
  title: 'Thyroid Storm: Recognition & Management',
  system: 'endocrine',
  source: 'L11 — DKA & Thyroid Storm',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L11 Endocrine Emergencies' },
    { kind: 'disease', label: 'Thyroid storm' },
    { kind: 'mechanism', label: 'Thyroid excess + sympathetic amplification' },
    { kind: 'exam', label: 'Clinical diagnosis and drug sequence' },
  ],

  highYield: [
    '**Thyroid storm is a life-threatening clinical decompensation of thyrotoxicosis**, not simply an extremely high T4/T3 value. Hormone concentration does not correlate reliably with severity; diagnose from fever, CNS change, cardiovascular dysfunction, GI/hepatic features, and the clinical context.',
    'Common triggers include **infection (most common)**, antithyroid-drug withdrawal, surgery, radioactive iodine/iodine load, DKA/hypoglycemia, heart failure/MI, stroke, trauma, pregnancy/parturition, and excess thyroid hormone.',
    'The **Burch-Wartofsky score** assigns points for temperature, CNS effects, GI/hepatic dysfunction, tachycardia, heart failure, atrial fibrillation, and a precipitant. **>=45 strongly suggests storm; 25-44 suggests impending storm; <25 makes it unlikely.**',
    'Treat immediately in ICU: **thioamide first** to block synthesis, then **iodide at least 1 hour later** to block release. PTU also blocks peripheral T4 -> T3 at high dose; methimazole is another synthesis-blocking option.',
    'Add **glucocorticoid** (reduces T4 -> T3 and covers adrenal stress), **beta-blocker** for adrenergic/cardiac effects, and supportive care. Cholestyramine reduces enterohepatic hormone recycling. Always treat the precipitating cause.',
  ],

  mechanism: {
    title: 'Block synthesis, then release, then peripheral effects',
    steps: [
      { id: 's1', label: 'Trigger + thyrotoxicosis -> sympathetic/cellular amplification', emphasis: 'danger' },
      { id: 's2', label: 'Thioamide blocks organification and coupling', emphasis: 'key' },
      { id: 's3', label: 'At least 1 hour later: iodide blocks hormone release' },
      { id: 's4', label: 'Steroid + beta-blocker + support + trigger control' },
    ],
  },

  examFindings: [
    { sign: 'Fever, HR >=130, agitation/delirium, heart failure, or GI/hepatic dysfunction', mechanism: 'Multiorgan decompensation distinguishes storm from uncomplicated thyrotoxicosis', significance: 'key' },
    { sign: 'Diffuse goiter with bruit, exophthalmos, warm moist skin, tremor', mechanism: 'Underlying Graves thyrotoxicosis', significance: 'supportive' },
    { sign: 'Severe storm despite only modest FT4/FT3 elevation', mechanism: 'Severity is clinical and tissue-response driven, not concentration driven', significance: 'key' },
  ],

  investigations: [
    { clue: 'TSH, free T4/free T3', meaning: 'Confirm thyrotoxicosis but do not grade storm severity' },
    { clue: 'Burch-Wartofsky or Japanese Thyroid Association criteria', meaning: 'Structure the clinical diagnosis' },
    { clue: 'CBC, liver tests, glucose/calcium, ECG, cultures and trigger workup', meaning: 'Assess organ injury, rhythm, and precipitating illness' },
  ],

  treatment: [
    { logic: 'Give thioamide, then iodide at least 1 hour later', detail: 'Block synthesis before supplying a large iodine load.' },
    { logic: 'Add glucocorticoid and beta-blockade with ICU support', detail: 'Reduce T3 generation, adrenergic toxicity, fever, dehydration, and organ failure.' },
    { logic: 'Treat infection or other precipitant', detail: 'Trigger control is part of definitive storm management.' },
  ],

  mnemonics: [
    { hook: 'Storm sequence: Synthesis, Secretion, Symptoms, Source', expansion: ['Thioamide', 'Iodide', 'Steroid/beta-blocker/support', 'Treat trigger'] },
    { hook: 'Score 45 = storm alive', expansion: ['25-44 impending', '<25 unlikely'] },
  ],

  traps: [
    {
      questionCategory: 'Diagnosing and sequencing therapy in thyroid storm',
      wrongInstinct: 'Wait for a very high free T4, then give iodide before the thioamide',
      rightAnswer: 'Treat on clinical multiorgan decompensation; give thioamide first and iodide at least 1 hour later',
      why: 'Hormone level does not grade severity, and iodide must follow synthesis blockade.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A thyrotoxic patient has fever, agitation, HR 145/min, and pulmonary edema. What is the correct early antithyroid sequence?',
      options: [
        { id: 'a', text: 'Thioamide, then iodide at least 1 hour later' },
        { id: 'b', text: 'Iodide, then thioamide the next day' },
        { id: 'c', text: 'Radioactive iodine alone' },
        { id: 'd', text: 'Levothyroxine, then propranolol' },
      ],
      answerId: 'a',
      explanation: 'In thyroid storm, block new synthesis with a thioamide before giving iodide to acutely block hormone release.',
      tests: 'treatment',
    },
  ],
};

export default thyroidStormRecognitionManagement;
