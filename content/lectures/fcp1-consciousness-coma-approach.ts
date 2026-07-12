import type { Lecture } from '../../lib/types';

export const fcp1ConsciousnessComaApproach: Lecture = {
  id: 'fcp1-consciousness-coma-approach',
  title: 'Altered Consciousness & Coma: Approach',
  system: 'clinical',
  source: 'L28 — Cognitive Impairment & Disorders of Consciousness',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L28 Consciousness' },
    { kind: 'disease', label: 'Structural vs metabolic coma' },
    { kind: 'mechanism', label: 'ARAS + bilateral cortex' },
    { kind: 'investigation', label: 'GCS · glucose · CT' },
  ],

  highYield: [
    'Consciousness needs **arousal** (the brainstem **ascending reticular activating system, ARAS**) plus **awareness** (the cortex). **Coma** therefore means either **bilateral hemispheric** dysfunction OR a **brainstem ARAS lesion**. Quantify depth with the **Glasgow Coma Scale (GCS: Eye 4 / Verbal 5 / Motor 6, total 3–15)**; a **GCS ≤8** or a **falling** GCS threatens the airway. Delirium and dementia are the non-comatose end of this spectrum — see [[fcp1-delirium-vs-dementia]].',
    '**Airway and glucose come first.** Do **ABC**, then give the reversible coma cocktail as indicated — **DONT: Dextrose** (after a bedside glucose), **Oxygen, Naloxone, Thiamine**. A **capillary glucose** must be checked immediately in every unresponsive patient.',
    '**Split the cause into structural vs metabolic/toxic.** **Structural** (bleed, infarct, tumour, herniation): **focal or asymmetric** signs, **abnormal pupils**, gaze deviation — needs urgent **CT**. **Metabolic / toxic** (hypoglycaemia, Na, hepatic/uraemic, sedatives, hypoxia): usually **symmetric** exam with **preserved pupillary reflexes**, and **tremor, myoclonus or asterixis**.',
    '**Brainstem signs localise and warn.** Pupils: **fixed dilated** = uncal (CN III) herniation; **pinpoint reactive** = pontine or **opioid**; mid-position fixed = midbrain. Test corneal, **oculocephalic (doll eyes)** and gag. **Herniation red flags** — a **unilateral fixed dilated pupil**, the **Cushing response (hypertension + bradycardia + irregular breathing)** of raised ICP, or **decerebrate / decorticate posturing** — are neurosurgical emergencies. A convulsion that fails to wake the patient is non-convulsive status — link to [[fcp1-seizure-classification]].',
    '**Investigate along the two tracks:** glucose, Na/Ca, ABG, ammonia, tox screen, and an urgent **CT head**; do an **LP after CT** if meningitis or SAH is suspected. In a collapsed or hypotensive patient, also work the perfusion problem of [[fcp1-shock-classification]], and manage the multiply-injured patient with the [[fcp1-trauma-primary-survey]].',
  ],

  mechanism: {
    title: 'Resuscitate, localise, and split the cause',
    steps: [
      { id: 's1', label: 'ABC + immediate capillary glucose; consider oxygen, naloxone, thiamine', emphasis: 'danger' },
      { id: 's2', label: 'Score depth with GCS; GCS ≤8 or falling → protect the airway', emphasis: 'danger' },
      { id: 's3', label: 'Focal signs / abnormal pupils → structural → urgent CT head', emphasis: 'key' },
      { id: 's4', label: 'Symmetric exam + reactive pupils + asterixis → metabolic / toxic', emphasis: 'key' },
      { id: 's5', label: 'Fixed dilated pupil, Cushing response, posturing → herniation, call neurosurgery', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Unilateral fixed, dilated pupil', mechanism: 'Uncal herniation compressing the third cranial nerve — a structural emergency', significance: 'key' },
    { sign: 'Pinpoint but reactive pupils', mechanism: 'Pontine lesion or opioid effect', significance: 'key' },
    { sign: 'Asterixis / myoclonus with symmetric findings and reactive pupils', mechanism: 'Metabolic / toxic encephalopathy rather than a structural lesion', significance: 'supportive' },
    { sign: 'Hypertension with bradycardia and irregular respiration (Cushing response)', mechanism: 'Raised intracranial pressure — impending herniation', significance: 'key' },
  ],

  investigations: [
    { clue: 'Capillary glucose at the bedside', meaning: 'Hypoglycaemia is the fastest reversible cause of coma and must not be missed' },
    { clue: 'Urgent non-contrast CT head', meaning: 'Detects haemorrhage, large infarct, mass effect or herniation (the structural track)' },
    { clue: 'Electrolytes, ABG, ammonia, tox screen', meaning: 'Uncovers metabolic and toxic causes (Na, hypercapnia, hepatic, drugs)' },
    { clue: 'Lumbar puncture after CT when infection or SAH is suspected', meaning: 'Diagnoses meningitis / encephalitis or subarachnoid haemorrhage safely' },
  ],

  treatment: [
    { logic: 'Secure the airway and reverse the obvious', detail: 'Protect the airway if GCS ≤8; treat hypoglycaemia, give naloxone for opioid toxicity and thiamine before glucose in the malnourished / alcohol-dependent.' },
    { logic: 'Treat raised intracranial pressure and get the scan', detail: 'For herniation signs: head-up positioning, avoid hypoxia and hypotension, consider osmotherapy (hypertonic saline / mannitol) and call neurosurgery while arranging urgent CT.' },
    { logic: 'Correct the metabolic driver once identified', detail: 'Careful correction of sodium, glucose, oxygenation/ventilation and offending drugs reverses many toxic-metabolic comas.' },
  ],

  mnemonics: [
    { hook: 'AEIOU-TIPS for coma causes', expansion: ['Alcohol, Epilepsy/Electrolytes, Insulin (glucose), Opiates/Oxygen, Uraemia', 'Trauma, Infection, Poisons/Psychiatric, Stroke/Shock'] },
  ],

  traps: [
    {
      questionCategory: 'Reversible coma',
      wrongInstinct: 'Rush an unresponsive patient straight to CT for a presumed stroke',
      rightAnswer: 'Check a capillary glucose (and airway) first — hypoglycaemia can perfectly mimic a structural coma and reverses in minutes',
      why: 'Bedside glucose is instant and treatable; missing it while chasing imaging causes avoidable brain injury.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 60-year-old is brought in unresponsive. He has a GCS of 6, a right pupil that is fixed and dilated, and left-sided limb weakness. The pattern most strongly suggests:',
      options: [
        { id: 'a', text: 'A metabolic or toxic encephalopathy' },
        { id: 'b', text: 'A structural lesion with uncal herniation' },
        { id: 'c', text: 'Psychogenic unresponsiveness' },
        { id: 'd', text: 'Simple opioid overdose' },
      ],
      answerId: 'b',
      explanation: 'Focal, asymmetric signs (a unilateral fixed dilated pupil with contralateral weakness) indicate a structural cause with third-nerve compression from uncal herniation, needing urgent CT and neurosurgical input. Metabolic causes are usually symmetric with reactive pupils.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A 40-year-old is found drowsy and unresponsive with no witnesses. After ensuring the airway is patent, the single most important immediate step is to:',
      options: [
        { id: 'a', text: 'Perform a lumbar puncture' },
        { id: 'b', text: 'Give an intravenous benzodiazepine' },
        { id: 'c', text: 'Check a capillary blood glucose' },
        { id: 'd', text: 'Arrange an urgent MRI brain' },
      ],
      answerId: 'c',
      explanation: 'After airway/breathing/circulation, a bedside glucose is essential because hypoglycaemia is a rapidly reversible cause of coma that can mimic a structural lesion. LP and imaging follow once the reversible causes are addressed.',
      tests: 'treatment',
    },
  ],
};

export default fcp1ConsciousnessComaApproach;
