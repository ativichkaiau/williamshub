import type { Lecture } from '../../lib/types';

export const fcp1TraumaSecondarySurvey: Lecture = {
  id: 'fcp1-trauma-secondary-survey',
  title: 'Trauma Secondary Survey & AMPLE History',
  system: 'clinical',
  source: 'L10 — Approach to the Trauma Patient',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L10 Trauma' },
    { kind: 'mechanism', label: 'Head-to-toe · AMPLE' },
    { kind: 'investigation', label: 'FAST · trauma imaging' },
    { kind: 'disease', label: 'Occult injuries' },
  ],

  highYield: [
    'The secondary survey begins **only after the primary survey (ABCDE) is complete and the patient is stabilising** — see [[fcp1-trauma-primary-survey]]. It is a **head-to-toe examination** plus a focused **AMPLE history**.',
    '**AMPLE** = **Allergies**, **Medications**, **Past history/Pregnancy**, **Last meal**, **Events/Environment** of the injury — the mechanism predicts the injury pattern.',
    'Examine every region: scalp and face, neck, chest, abdomen, pelvis (spring **once** only), perineum and rectum, back (log-roll) and all four limbs; add a full neurological exam and document the GCS.',
    '**Adjuncts: FAST** (free fluid → haemorrhage), **eFAST** (adds pneumothorax), the trauma series (CXR, pelvis) and **CT in the stable patient only** — an unstable patient does not go to the scanner. See [[fcp1-trauma-resuscitation]].',
    'Reassess continually and **return to the primary survey if the patient deteriorates**; a later "tertiary survey" catches injuries missed in the acute phase.',
  ],

  mechanism: {
    title: 'After ABCDE — systematic head-to-toe + AMPLE',
    steps: [
      { id: 's1', label: 'Primary survey complete, patient stabilising', emphasis: 'key' },
      { id: 's2', label: 'AMPLE history + mechanism of injury', emphasis: 'key' },
      { id: 's3', label: 'Head-to-toe exam incl. log-roll of the back', emphasis: 'normal' },
      { id: 's4', label: 'Adjuncts: FAST/eFAST, trauma imaging', emphasis: 'key' },
      { id: 's5', label: 'Deterioration → return to A and re-survey', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Raccoon eyes, Battle sign, CSF rhinorrhoea or otorrhoea', mechanism: 'Base-of-skull fracture', significance: 'key' },
    { sign: 'Seatbelt sign, abdominal distension and tenderness', mechanism: 'Intra-abdominal injury', significance: 'key' },
    { sign: 'Pelvic instability, perineal haematoma, blood at the urethral meatus', mechanism: 'Pelvic fracture with urethral injury — do not catheterise blindly', significance: 'key' },
    { sign: 'Positive FAST (free fluid in Morrison pouch)', mechanism: 'Intra-abdominal haemorrhage', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'FAST shows free fluid + hypotension', meaning: 'Intra-abdominal haemorrhage → laparotomy' },
    { clue: 'Blood at the urethral meatus or high-riding prostate', meaning: 'Urethral injury → retrograde urethrogram before any catheter' },
    { clue: 'Widened mediastinum on the trauma CXR', meaning: 'Possible traumatic aortic injury → CT angiography' },
    { clue: 'Stable patient with uncertain injuries', meaning: 'CT (the "pan-scan") for definitive assessment' },
  ],

  treatment: [
    { logic: 'Let stability decide the destination', detail: 'A haemodynamically normal patient can go to CT; an unstable patient with a positive FAST goes to theatre, not the scanner.' },
    { logic: 'Splint and protect while you complete the survey', detail: 'Pelvic binder, limb splints and C-spine precautions stay on until the relevant injuries are excluded.' },
  ],

  mnemonics: [
    { hook: 'AMPLE — Allergies, Medications, Past/Pregnancy, Last meal, Events', expansion: ['Taken after ABCDE', 'Mechanism predicts the injury', 'Log-roll to examine the back'] },
  ],

  traps: [
    {
      questionCategory: 'Pelvic trauma',
      wrongInstinct: 'Repeatedly spring the pelvis and pass a urinary catheter to check for blood',
      rightAnswer: 'Spring the pelvis once only, and exclude urethral injury (blood at the meatus) before catheterising',
      why: 'Repeated springing dislodges clot; blind catheterisation can complete a partial urethral tear.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A stab-wound patient is stable after ABCDE. During the secondary survey a FAST scan shows fluid in the hepatorenal recess and the BP is now 90/60 and falling. The best next step is:',
      options: [
        { id: 'a', text: 'CT abdomen with contrast' },
        { id: 'b', text: 'Immediate laparotomy' },
        { id: 'c', text: 'Repeat the FAST in one hour' },
        { id: 'd', text: 'Discharge with next-day review' },
      ],
      answerId: 'b',
      explanation: 'A positive FAST with haemodynamic instability indicates intra-abdominal haemorrhage — the patient needs theatre, not the CT scanner.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'In the AMPLE history taken during the secondary survey, the "E" stands for:',
      options: [
        { id: 'a', text: 'Examination findings' },
        { id: 'b', text: 'Events and environment of the injury' },
        { id: 'c', text: 'Estimated blood loss' },
        { id: 'd', text: 'ECG changes' },
      ],
      answerId: 'b',
      explanation: 'AMPLE = Allergies, Medications, Past history/Pregnancy, Last meal, and Events/Environment of the injury, which frames the likely injury pattern.',
      tests: 'lecture',
    },
  ],
};

export default fcp1TraumaSecondarySurvey;
