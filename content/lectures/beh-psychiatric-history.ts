import type { Lecture } from '../../lib/types';

export const behPsychiatricHistory: Lecture = {
  id: 'beh-psychiatric-history',
  title: 'The Psychiatric Interview & History',
  system: 'community',
  source: 'L3 — Psychiatric Assessment & Psychological Testing',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Behavioral Science' },
    { kind: 'lecture', label: 'L3 Psychiatric Assessment' },
    { kind: 'exam', label: 'CC · HPI · developmental history' },
    { kind: 'mechanism', label: 'Rapport → history → premorbid personality' },
  ],

  highYield: [
    '**The psychiatric history is the subjective, longitudinal story; the [[beh-mental-status-exam]] is the objective here-and-now snapshot.** Together they form the psychiatric database — the history is what is **reported**, the MSE is what is **observed** during the same interview.',
    '**Core components:** identifying data, **chief complaint** (in the patient’s own words), **HPI** (onset, course, precipitants, biopsychosocial context), past psychiatric history, medical and **substance** history, family history, **personal/developmental history**, and **premorbid personality**. Rapport-building is the technique that makes all of this obtainable — see [[beh-communication-skills]] and [[beh-doctor-patient-relationship]].',
    '**Premorbid personality = the baseline self before the illness.** A clear **change from baseline** (a once-sociable person becoming withdrawn) is often more diagnostic than any single symptom, and separates a disorder from a lifelong trait — contrast with [[beh-personality-trait-theory]].',
    '**Collateral (corroborative) history is essential in psychiatry.** Patients may lack insight, minimise, or be unable to report; family, records, and referrer accounts complete a picture the patient alone cannot give.',
    '**Screen safety early.** Every psychiatric assessment includes risk to self and others — suicidal ideation, self-harm, and risk to others — assessed sensitively, not left to the end (see [[beh-suicide-assessment]]).',
  ],

  mechanism: {
    title: 'Rapport → CC & HPI → past & family history → developmental history → premorbid personality',
    steps: [
      { id: 's1', label: 'Establish rapport and a safe, private setting' },
      { id: 's2', label: 'Chief complaint in the patient’s own words', emphasis: 'key' },
      { id: 's3', label: 'HPI — onset, course, precipitants, biopsychosocial context', emphasis: 'key' },
      { id: 's4', label: 'Past psychiatric, medical, substance & family history' },
      { id: 's5', label: 'Personal/developmental history + premorbid personality', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'The history is the reported story; the MSE is the observed exam', mechanism: 'History is subjective and longitudinal; the MSE is an objective cross-section of the present state', significance: 'key' },
    { sign: 'Premorbid personality anchors what counts as a change', mechanism: 'A departure from the patient’s stable baseline flags illness rather than trait', significance: 'key' },
    { sign: 'Developmental history reveals the longitudinal trajectory', mechanism: 'Birth, childhood, schooling, work, and relationships expose vulnerability and onset', significance: 'supportive' },
    { sign: 'Collateral sources are part of the routine, not a last resort', mechanism: 'Impaired insight makes self-report incomplete; corroboration corrects it', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A patient reports hearing voices for two weeks after losing their job', meaning: 'HPI material — captures onset, duration, and a possible precipitant' },
    { clue: 'A mother and an uncle both had “nervous breakdowns” needing admission', meaning: 'Family history — suggests genetic and familial loading' },
    { clue: 'Once outgoing and reliable, now withdrawn and erratic over six months', meaning: 'A change from premorbid personality — more telling than any single symptom' },
    { clue: 'The patient insists all is fine while the spouse describes months of decline', meaning: 'Impaired insight → collateral history is needed to complete the picture' },
  ],

  treatment: [
    { logic: 'Open wide, then narrow down', detail: 'Begin with open-ended questions to build rapport and let the story emerge, then use focused closed questions to fill gaps and test hypotheses.' },
    { logic: 'Always seek corroboration', detail: 'Actively gather collateral from family, records, and the referrer; treat the patient’s account as one source among several, especially when insight is impaired.' },
  ],

  mnemonics: [
    { hook: 'History = the reported story; MSE = the observed exam', expansion: ['History is subjective and covers the whole life', 'MSE is objective and covers the here and now'] },
    { hook: 'Every history screens PADS: Personal/developmental, Alcohol/substances, Danger (risk), Support', expansion: ['Developmental history frames the trajectory', 'Substances and risk are never skipped'] },
  ],

  traps: [
    {
      questionCategory: 'HPI vs past psychiatric history',
      wrongInstinct: 'All previous episodes belong in the history of present illness',
      rightAnswer: 'The HPI is the current episode; earlier discrete episodes and treatments go in the past psychiatric history',
      why: 'Separating the current episode from the longitudinal course is what clarifies the diagnosis and pattern.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A previously sociable, dependable clerk has become suspicious, withdrawn, and unreliable over six months. Which element of the psychiatric history makes this change most diagnostically meaningful?',
      options: [
        { id: 'a', text: 'The identifying data' },
        { id: 'b', text: 'The premorbid personality' },
        { id: 'c', text: 'The chief complaint' },
        { id: 'd', text: 'The past medical history' },
      ],
      answerId: 'b',
      explanation: 'Knowing the premorbid personality (the stable baseline self) is what lets you recognise a clear change from baseline, which often carries more diagnostic weight than any single symptom.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A patient with early psychosis reports that nothing is wrong, but the family describes months of deterioration. What is the best next step in completing the assessment?',
      options: [
        { id: 'a', text: 'Accept the patient’s account as definitive' },
        { id: 'b', text: 'Defer the assessment until insight improves' },
        { id: 'c', text: 'Obtain collateral (corroborative) history' },
        { id: 'd', text: 'Rely solely on the mental status examination' },
      ],
      answerId: 'c',
      explanation: 'Impaired insight makes self-report incomplete. Collateral history from family, records, and the referrer is a routine part of psychiatric assessment and corrects the gaps that self-report leaves.',
      tests: 'investigation',
    },
  ],
};

export default behPsychiatricHistory;
