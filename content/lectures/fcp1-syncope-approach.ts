import type { Lecture } from '../../lib/types';

export const fcp1SyncopeApproach: Lecture = {
  id: 'fcp1-syncope-approach',
  title: 'Approach to Syncope',
  system: 'clinical',
  source: 'L9 — Shock & Syncope',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L9 Shock & Syncope' },
    { kind: 'disease', label: 'Reflex · orthostatic · cardiac' },
    { kind: 'investigation', label: 'ECG in all · echo' },
    { kind: 'treatment', label: 'Risk-stratify & admit' },
  ],

  highYield: [
    '**Syncope is a transient loss of consciousness from global cerebral hypoperfusion, with rapid onset, short duration and spontaneous COMPLETE recovery.** Distinguish it from a seizure → [[fcp1-seizure-vs-mimics]], hypoglycaemia and vertigo. Unlike shock, perfusion is only briefly interrupted → [[fcp1-shock-classification]].',
    '**Three groups:** **reflex (neurally-mediated)** — the commonest and benign — vasovagal (triggered by pain, emotion or prolonged standing, with a prodrome of nausea, warmth and tunnel vision), situational (cough, micturition, defecation) and carotid sinus; **orthostatic hypotension** (a fall in systolic BP of 20 mmHg or more on standing) from volume depletion, drugs or autonomic failure; and **cardiac** — the most dangerous.',
    '**Cardiac syncope is the killer — arrhythmia** (heart block, ventricular tachycardia, long QT) or **structural** disease (aortic stenosis, hypertrophic cardiomyopathy, PE, tamponade). It carries a real risk of sudden death and must be actively excluded.',
    '**Red flags pointing to cardiac syncope:** syncope **on exertion or when supine**, **no prodrome / sudden collapse**, palpitations just beforehand, known structural heart disease or low ejection fraction, a **family history of sudden cardiac death**, and an **abnormal ECG** (heart block, long QT, Brugada, delta wave, ischaemia) → [[fcp1-chest-pain-cardiac]]. Any of these warrants admission and urgent workup.',
    '**Workup is history-led, with a 12-lead ECG in everyone.** Take a witness account, measure orthostatic blood pressure, and examine for the murmur of aortic stenosis or hypertrophic cardiomyopathy. Add echocardiography, ambulatory ECG or tilt-table testing selectively, and check for anaemia → [[fcp1-anemia-approach-workup]] or GI blood loss → [[fcp1-gi-bleed-upper]] where the story fits.',
  ],

  mechanism: {
    title: 'Sorting the transient loss of consciousness',
    steps: [
      { id: 's1', label: 'Transient global cerebral hypoperfusion → brief LOC with full recovery', emphasis: 'key' },
      { id: 's2', label: 'Reflex/vasovagal: clear trigger + prodrome (benign)', emphasis: 'normal' },
      { id: 's3', label: 'Orthostatic: postural BP drop (volume, drugs, autonomic failure)', emphasis: 'normal' },
      { id: 's4', label: 'Cardiac: arrhythmia or structural disease', emphasis: 'danger' },
      { id: 's5', label: 'Risk-stratify: red flags → admit + cardiac workup', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Exertional syncope with an ejection systolic murmur', mechanism: 'Aortic stenosis or hypertrophic cardiomyopathy', significance: 'key' },
    { sign: 'Fall in systolic BP of 20 mmHg or more on standing', mechanism: 'Orthostatic hypotension', significance: 'key' },
    { sign: 'Prodrome of nausea, warmth and tunnel vision after a trigger', mechanism: 'Vasovagal (reflex) syncope', significance: 'supportive' },
    { sign: 'Tongue-biting and prolonged post-event confusion', mechanism: 'Points to a seizure rather than syncope → [[fcp1-seizure-vs-mimics]]', significance: 'supportive' },
  ],

  investigations: [
    { clue: '12-lead ECG showing heart block, long QT, delta wave or Brugada pattern', meaning: 'Cardiac (arrhythmic) syncope — admit and monitor' },
    { clue: 'Orthostatic vital signs positive', meaning: 'Orthostatic hypotension — review drugs and volume status' },
    { clue: 'Echocardiogram showing aortic stenosis or a low ejection fraction', meaning: 'Structural cardiac cause' },
    { clue: 'Low haemoglobin', meaning: 'Anaemia or occult blood loss contributing to presyncope' },
  ],

  treatment: [
    { logic: 'Reflex syncope: reassurance and conservative measures', detail: 'Trigger avoidance, adequate hydration and salt, and counter-pressure manoeuvres; a benign prognosis.' },
    { logic: 'Orthostatic: review medications and restore volume', detail: 'Stop or reduce culprit drugs, encourage slow rising and consider compression garments.' },
    { logic: 'Cardiac: admit and treat the underlying disease', detail: 'Pacemaker or ICD for arrhythmia, and management of the structural lesion (for example aortic valve disease).' },
  ],

  mnemonics: [
    { hook: 'Exertional or no-warning syncope = think CARDIAC', expansion: ['ECG for everyone', 'Prodrome + trigger = reassuring vasovagal'] },
  ],

  traps: [
    {
      questionCategory: 'Exertional syncope',
      wrongInstinct: 'Dismiss a fainting episode during exercise as a simple vasovagal faint',
      rightAnswer: 'Syncope on exertion suggests aortic stenosis or hypertrophic cardiomyopathy and needs an ECG and echocardiogram before clearance',
      why: 'Exertional syncope is a red flag for a structural cardiac cause with a risk of sudden death, unlike a triggered vasovagal faint.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 68-year-old collapses while climbing stairs and is found to have a harsh ejection systolic murmur radiating to the carotids. The most appropriate next investigation is:',
      options: [
        { id: 'a', text: 'Reassurance and discharge as a vasovagal faint' },
        { id: 'b', text: 'Echocardiography to assess for aortic stenosis' },
        { id: 'c', text: 'A tilt-table test' },
        { id: 'd', text: 'An electroencephalogram (EEG)' },
      ],
      answerId: 'b',
      explanation: 'Exertional syncope with an ejection systolic murmur radiating to the carotids suggests aortic stenosis, a structural cause with a risk of sudden death. Echocardiography is the key next investigation after the ECG.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'Which feature most strongly favours a dangerous cardiac cause of syncope rather than a benign vasovagal faint?',
      options: [
        { id: 'a', text: 'A prodrome of nausea and sweating after prolonged standing' },
        { id: 'b', text: 'Sudden collapse during exertion with no warning and an abnormal ECG' },
        { id: 'c', text: 'Recovery within seconds after lying down' },
        { id: 'd', text: 'A clear emotional trigger such as venesection' },
      ],
      answerId: 'b',
      explanation: 'Exertional syncope with no prodrome and an abnormal ECG are red flags for cardiac syncope. Triggers, a prodrome and rapid positional recovery are typical of benign reflex (vasovagal) syncope.',
      tests: 'disease',
    },
  ],
};

export default fcp1SyncopeApproach;
