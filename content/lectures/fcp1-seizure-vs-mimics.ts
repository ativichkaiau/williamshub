import type { Lecture } from '../../lib/types';

export const fcp1SeizureVsMimics: Lecture = {
  id: 'fcp1-seizure-vs-mimics',
  title: 'Seizure vs Its Mimics',
  system: 'clinical',
  source: 'L26 — Seizures & Abnormal Movements',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L26 Seizures' },
    { kind: 'disease', label: 'Syncope · PNES · seizure' },
    { kind: 'exam', label: 'Witness account' },
    { kind: 'investigation', label: 'ECG · video-EEG' },
  ],

  highYield: [
    'Transient loss of consciousness has three big buckets: **epileptic seizure**, **syncope**, and **psychogenic non-epileptic seizure (PNES)**. The patient is often amnesic, so the **witness / collateral history is the single most useful test**. Classify the event before classifying the epilepsy — see [[fcp1-seizure-classification]].',
    '**Favouring a seizure:** an **aura**, **cyanosis**, a **sustained rhythmic** convulsion lasting **>1–2 min**, **lateral tongue-biting**, incontinence, and a genuine **post-ictal** period (confusion for minutes to hours, or focal **Todd paresis**).',
    '**Favouring syncope:** a clear **trigger** (prolonged standing, pain, heat, micturition), an autonomic **prodrome** (light-headed, warmth, tunnel vision, nausea, **pallor + sweating**), a **brief** (<20 s) collapse with **rapid, clear recovery**. A few **brief myoclonic jerks** (convulsive syncope) can occur and are **NOT** epilepsy — details of the collapse overlap [[fcp1-syncope-approach]].',
    '**Favouring PNES:** longer **waxing-and-waning** episodes, **eyes closed** or resisted eye-opening, **side-to-side** head or pelvic-thrusting movements, **asynchronous / out-of-phase** limb movements, preserved awareness during bilateral shaking, **ictal weeping**, and **no post-ictal confusion**. Often a background of psychological trauma; **video-EEG** is the definitive test.',
    '**Red flags for cardiac syncope** (do an ECG in every transient loss of consciousness): syncope **on exertion** or supine, **no prodrome**, preceding **palpitations**, structural heart disease, or a **family history of sudden death** — these need urgent cardiac work-up, not an EEG.',
  ],

  mechanism: {
    title: 'Sorting a transient loss of consciousness',
    steps: [
      { id: 's1', label: 'Take a detailed before / during / after account from a witness', emphasis: 'key' },
      { id: 's2', label: 'Trigger + autonomic prodrome + brief LOC → syncope', emphasis: 'normal' },
      { id: 's3', label: 'Aura, sustained convulsion, tongue-bite, post-ictal state → seizure', emphasis: 'key' },
      { id: 's4', label: 'Long, fluctuating, asynchronous, eyes-closed, no post-ictal → PNES', emphasis: 'normal' },
      { id: 's5', label: 'Exertional / no-warning collapse → assume cardiac, get an ECG', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Lateral tongue-biting', mechanism: 'Forceful tonic jaw closure in a true convulsion; tip-biting is less specific', significance: 'key' },
    { sign: 'Prolonged post-ictal confusion', mechanism: 'Cortical recovery after a seizure; absent in syncope and PNES', significance: 'key' },
    { sign: 'Resisted eye-opening / eyes held shut during the event', mechanism: 'A common sign of a psychogenic non-epileptic event', significance: 'supportive' },
    { sign: 'Pallor and sweating before collapse', mechanism: 'Autonomic (vasovagal) prodrome pointing to reflex syncope', significance: 'supportive' },
  ],

  investigations: [
    { clue: '12-lead ECG in every transient loss of consciousness', meaning: 'Screens for arrhythmia substrate (long QT, block, pre-excitation) — the cannot-miss cause' },
    { clue: 'EEG', meaning: 'Supports epilepsy if epileptiform; a normal interictal EEG does not exclude a seizure' },
    { clue: 'Video-EEG capturing a typical event', meaning: 'Definitive for PNES — clinical event with no epileptiform correlate' },
    { clue: 'Orthostatic blood pressure / tilt features, glucose', meaning: 'Support orthostatic or reflex syncope and exclude hypoglycaemia' },
  ],

  treatment: [
    { logic: 'Match the work-up to the most likely mechanism', detail: 'Seizure → EEG and (if focal or first adult event) MRI; syncope → ECG-led cardiac assessment; PNES → confirm with video-EEG then psychological therapy, avoiding needless anti-seizure drugs.' },
    { logic: 'Give safety advice while the cause is being confirmed', detail: 'Driving restriction, avoid swimming/heights alone, and recovery-position education for witnesses.' },
  ],

  mnemonics: [
    { hook: 'Before, During, After — the witness triad', expansion: ['Before: trigger vs aura', 'During: rhythmic + cyanosis vs asynchronous + eyes shut', 'After: confused (seizure) vs instantly clear (syncope)'] },
  ],

  traps: [
    {
      questionCategory: 'Convulsive syncope',
      wrongInstinct: 'The witness saw jerking, so it must be epilepsy',
      rightAnswer: 'Brief jerks during a faint (convulsive syncope) are common and do not indicate epilepsy — weigh the trigger, prodrome and rapid recovery',
      why: 'Cerebral hypoperfusion can release a few myoclonic jerks; the overall pattern, not the jerks alone, makes the diagnosis.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 19-year-old collapsed after standing in a hot assembly. She felt hot, nauseated and saw spots, then went pale and limp with a few brief arm jerks, recovering fully within 20 seconds. The most likely diagnosis is:',
      options: [
        { id: 'a', text: 'Generalised tonic-clonic seizure' },
        { id: 'b', text: 'Reflex (vasovagal) syncope' },
        { id: 'c', text: 'Focal impaired-awareness seizure' },
        { id: 'd', text: 'Psychogenic non-epileptic seizure' },
      ],
      answerId: 'b',
      explanation: 'A postural/heat trigger, an autonomic prodrome, pallor, a brief collapse and rapid clear recovery indicate reflex syncope. The brief jerks are convulsive syncope, not epilepsy, and there is no post-ictal confusion.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'A young woman has frequent prolonged episodes of shaking with eyes held tightly closed, side-to-side head movements and asynchronous limb activity lasting several minutes, with no post-ictal confusion and normal routine EEGs. The best confirmatory investigation is:',
      options: [
        { id: 'a', text: 'Serum prolactin one hour after an event' },
        { id: 'b', text: 'Repeat sleep-deprived routine EEG' },
        { id: 'c', text: 'Video-EEG capturing a typical event' },
        { id: 'd', text: 'CT brain with contrast' },
      ],
      answerId: 'c',
      explanation: 'The semiology suggests a psychogenic non-epileptic seizure. Video-EEG that records a typical event with no epileptiform correlate is the definitive test; routine interictal EEG and prolactin are unreliable.',
      tests: 'investigation',
    },
  ],
};

export default fcp1SeizureVsMimics;
