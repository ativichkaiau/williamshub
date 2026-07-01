import type { Lecture } from '../../lib/types';

export const alteredMentalStatusComa: Lecture = {
  id: 'altered-mental-status-coma',
  title: 'Altered Mental Status & Coma',
  system: 'neuro',
  source: 'L6 — Metabolic & Regulatory Disorders',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L6 Metabolic & Regulatory' },
    { kind: 'disease', label: 'Coma' },
    { kind: 'mechanism', label: 'ARAS' },
    { kind: 'exam', label: 'GCS / 3 categories' },
  ],

  highYield: [
    'Consciousness has two axes: **arousal (level — alert → drowsy → stupor → coma; GCS)** and **content (cognition)**. Coma needs either **bilateral hemispheric dysfunction** or a **brainstem ARAS lesion**.',
    '**Ascending reticular activating system (ARAS)** drives wakefulness via **histamine, noradrenaline, serotonin, dopamine, acetylcholine, orexin**; **paramedian rostral-midbrain tegmental lesions → coma**.',
    'Approach to altered mental status — **three buckets**: **(1) focal/lateralizing brainstem or cerebral signs** (infarct, tumor, injury); **(2) meningeal irritation ± fever** (meningitis, encephalitis, SAH — WBC/RBC in CSF); **(3) no focal signs** (metabolic/toxic).',
    'Bucket 3 (**most common**): **metabolic** (uremia, liver failure, electrolytes, hypo-/hyperglycemia), **intoxication**, and **non-convulsive status epilepticus**.',
    'Practical rule: **check glucose and vital signs first**, look for focal signs and meningismus, then pursue metabolic/toxic/EEG workup.',
  ],

  mechanism: {
    title: 'Localize the coma → sort the cause',
    steps: [
      { id: 's1', label: 'Bilateral cortex OR brainstem ARAS must be hit', emphasis: 'key' },
      { id: 's2', label: 'Focal signs? → structural (infarct/tumor/bleed)' },
      { id: 's3', label: 'Meningism ± fever? → meningitis/encephalitis/SAH' },
      { id: 's4', label: 'No focal signs → metabolic/toxic/status epilepticus' },
    ],
  },

  examFindings: [
    { sign: 'Symmetric exam, preserved brainstem reflexes, no focal signs', mechanism: 'Metabolic/toxic encephalopathy', significance: 'key' },
    { sign: 'Focal weakness, gaze deviation, or cranial-nerve signs', mechanism: 'Structural (stroke/mass) cause', significance: 'key' },
    { sign: 'Neck stiffness ± fever', mechanism: 'Meningitis / SAH (CSF pleocytosis or blood)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Bedside glucose + vitals immediately', meaning: 'Reversible hypo/hyperglycemia, hypoxia' },
    { clue: 'CT head; LP if meningism (after imaging)', meaning: 'Structural lesion; meningitis/SAH' },
    { clue: 'Metabolic panel, ammonia, tox screen, EEG', meaning: 'Metabolic/toxic causes; NCSE' },
  ],

  treatment: [
    { logic: 'Protect airway; correct glucose/oxygen; give thiamine before glucose in at-risk patients', detail: 'Reverse the treatable fast.' },
    { logic: 'Treat by category (surgical, antimicrobial, metabolic, anticonvulsant)', detail: 'The three-bucket triage directs therapy.' },
  ],

  mnemonics: [
    { hook: 'Coma = both hemispheres OR the brainstem ARAS', expansion: ['One hemisphere alone does not cause coma'] },
    { hook: '3 buckets: Focal · Meningeal · Metabolic/toxic', expansion: ['Structural vs infective/SAH vs diffuse'] },
  ],

  traps: [
    {
      questionCategory: 'Coma from a single lesion',
      wrongInstinct: 'A single unilateral hemispheric stroke explains the coma',
      rightAnswer: 'Coma requires bilateral hemispheric dysfunction or a brainstem (ARAS) lesion — a unilateral hemisphere lesion alone does not cause coma unless it raises ICP and compresses the brainstem',
      why: 'Wakefulness depends on the brainstem ARAS projecting to both hemispheres; one hemisphere can be lost without coma unless mass effect secondarily compresses the brainstem.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A comatose patient has symmetric pupils, intact brainstem reflexes, no focal weakness, and no meningismus. The most likely category of cause is:',
      options: [
        { id: 'a', text: 'Focal structural lesion (stroke/tumor)' },
        { id: 'b', text: 'Metabolic/toxic encephalopathy' },
        { id: 'c', text: 'Bacterial meningitis' },
        { id: 'd', text: 'Subarachnoid hemorrhage' },
      ],
      answerId: 'b',
      explanation: 'A non-focal, symmetric exam with preserved brainstem reflexes and no meningismus points to a diffuse metabolic or toxic encephalopathy — the third and most common category of altered mental status.',
      tests: 'exam',
    },
  ],
};

export default alteredMentalStatusComa;
