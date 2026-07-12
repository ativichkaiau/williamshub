import type { Lecture } from '../../lib/types';

export const fcp1SeizureClassification: Lecture = {
  id: 'fcp1-seizure-classification',
  title: 'Seizure Classification',
  system: 'clinical',
  source: 'L26 — Seizures & Abnormal Movements',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L26 Seizures' },
    { kind: 'disease', label: 'Focal · generalised · epilepsy' },
    { kind: 'mechanism', label: 'Cortical hypersynchrony' },
    { kind: 'investigation', label: 'EEG · MRI · glucose' },
  ],

  highYield: [
    'A seizure is a transient event from **abnormal, excessive, synchronous** cortical activity. The **ILAE** classification starts with **onset**: **focal** (one hemisphere), **generalised** (both from onset), or **unknown**. First separate seizure from its mimics — see [[fcp1-seizure-vs-mimics]].',
    '**Focal** seizures are sub-classed by **awareness** (aware vs **impaired awareness**) and by **motor vs non-motor** onset; an **aura** IS a focal aware seizure. A focal seizure may evolve to a **focal to bilateral tonic-clonic** seizure. Temporal-lobe clues: rising epigastric aura, **automatisms** (lip-smacking, fumbling), post-ictal confusion.',
    '**Generalised** seizures: **motor** (tonic-clonic, myoclonic, tonic, atonic) or **non-motor (absence)**. Discriminators favouring a true seizure: **lateral tongue-biting**, cyanosis, a sustained rhythmic convulsion, and a **post-ictal** phase (confusion, or focal **Todd paresis**).',
    '**Epilepsy** = an enduring tendency to **recurrent unprovoked** seizures (operationally **2 unprovoked seizures >24 h apart**, or 1 with high recurrence risk, or a syndrome). A single **provoked / acute symptomatic** seizure (hypoglycaemia, hyponatraemia, alcohol withdrawal, drugs, eclampsia) is **NOT** epilepsy — treat the cause. Paediatric patterns: see [[fcp1-pediatric-seizures]].',
    '**Status epilepticus** = a seizure **>5 minutes**, or repeated seizures without recovery between them — a **medical emergency** that needs immediate benzodiazepines and airway/glucose attention. Prolonged altered consciousness afterwards overlaps the [[fcp1-consciousness-coma-approach]].',
  ],

  mechanism: {
    title: 'From cortical discharge to clinical seizure',
    steps: [
      { id: 's1', label: 'Loss of excitation-inhibition balance → hypersynchronous neuronal firing', emphasis: 'key' },
      { id: 's2', label: 'Focal onset (one region) vs generalised onset (bilateral networks)', emphasis: 'key' },
      { id: 's3', label: 'Focal: classify by awareness + motor/non-motor; may spread bilaterally', emphasis: 'normal' },
      { id: 's4', label: 'Recurrent unprovoked seizures → epilepsy; provoked seizure → treat cause', emphasis: 'normal' },
      { id: 's5', label: 'Seizure >5 min = status epilepticus → emergency treatment', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Lateral tongue-biting + post-ictal confusion', mechanism: 'Sustained motor seizure with a genuine post-ictal state', significance: 'key' },
    { sign: 'Automatisms (lip-smacking, fumbling) with impaired awareness', mechanism: 'Focal impaired-awareness seizure, often temporal lobe', significance: 'key' },
    { sign: 'Todd paresis (transient focal weakness after a seizure)', mechanism: 'Post-ictal exhaustion of the seizing cortex; localises onset', significance: 'supportive' },
    { sign: 'Brief absence with behavioural arrest, no post-ictal phase', mechanism: 'Generalised non-motor (absence) seizure', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Capillary glucose and electrolytes (Na, Ca), first seizure', meaning: 'Excludes a provoked / acute symptomatic seizure before labelling epilepsy' },
    { clue: 'EEG (interictal epileptiform discharges)', meaning: 'Supports epilepsy and helps classify; a normal EEG does NOT exclude it' },
    { clue: 'MRI brain in focal onset, new focal deficit, or first adult seizure', meaning: 'Seeks a structural lesion (tumour, malformation, sclerosis)' },
    { clue: 'Prolactin / lactate rise shortly after a convulsion', meaning: 'Supportive of an epileptic (vs psychogenic) event, but non-specific' },
  ],

  treatment: [
    { logic: 'Treat status epilepticus immediately', detail: 'ABC, oxygen, check glucose; IV or IM benzodiazepine (lorazepam / midazolam) then a loading anti-seizure drug if it continues. Do not wait for it to stop on its own.' },
    { logic: 'Decide about starting an anti-seizure drug after a first seizure', detail: 'Usually withheld after a single provoked or low-risk seizure; started when recurrence risk is high (epileptiform EEG, structural lesion, or a second unprovoked seizure).' },
  ],

  mnemonics: [
    { hook: 'Onset first: Focal, Generalised, Unknown', expansion: ['Focal → then awareness + motor/non-motor', 'Generalised → motor vs absence', 'Provoked seizure is not epilepsy'] },
  ],

  traps: [
    {
      questionCategory: 'Provoked vs unprovoked',
      wrongInstinct: 'Any convulsion means the patient has epilepsy and needs lifelong drugs',
      rightAnswer: 'An acute symptomatic (provoked) seizure — e.g. hypoglycaemia or alcohol withdrawal — is treated by correcting the cause, not by diagnosing epilepsy',
      why: 'Epilepsy requires an enduring tendency to unprovoked seizures; provoked events do not meet that definition.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 24-year-old has episodes of a rising epigastric sensation followed by staring and lip-smacking, during which she is unresponsive and afterwards confused for several minutes. The seizure type is best classified as:',
      options: [
        { id: 'a', text: 'Generalised absence seizure' },
        { id: 'b', text: 'Focal impaired-awareness seizure' },
        { id: 'c', text: 'Psychogenic non-epileptic event' },
        { id: 'd', text: 'Generalised myoclonic seizure' },
      ],
      answerId: 'b',
      explanation: 'An aura (epigastric rising), automatisms (lip-smacking), impaired awareness and post-ictal confusion indicate a focal impaired-awareness seizure, typically of temporal-lobe origin. Absence seizures are brief with no aura or post-ictal confusion.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'A patient has been convulsing continuously for 8 minutes in the emergency department. The most appropriate immediate action is:',
      options: [
        { id: 'a', text: 'Arrange an urgent EEG before any treatment' },
        { id: 'b', text: 'Observe, as most seizures stop spontaneously' },
        { id: 'c', text: 'Secure ABC, check glucose and give a benzodiazepine' },
        { id: 'd', text: 'Start a long-term oral anti-seizure drug' },
      ],
      answerId: 'c',
      explanation: 'A seizure lasting more than 5 minutes is status epilepticus, a medical emergency. Management is airway/breathing/circulation, oxygen, a glucose check and a first-line benzodiazepine, not delaying for an EEG.',
      tests: 'treatment',
    },
  ],
};

export default fcp1SeizureClassification;
