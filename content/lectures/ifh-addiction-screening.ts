import type { Lecture } from '../../lib/types';

export const ifhAddictionScreening: Lecture = {
  id: 'ifh-addiction-screening',
  title: 'Screening for Substance Use',
  system: 'community',
  source: 'L9 — Addiction and Health',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Family Health' },
    { kind: 'lecture', label: 'L9 Addiction & Health' },
    { kind: 'investigation', label: 'CAGE · AUDIT · ASSIST' },
    { kind: 'mechanism', label: 'Screen → score → readiness' },
    { kind: 'exam', label: 'Red flags' },
  ],

  highYield: [
    '**CAGE** is the fast 4-item alcohol screen: **C**ut down, **A**nnoyed, **G**uilty, **E**ye-opener. **≥2 "yes" is a positive screen** for problem drinking — quick, but a screen, not a diagnosis.',
    '**AUDIT** (WHO, 10 items, 0–40) grades alcohol risk; **≥8 = hazardous use**. **AUDIT-C** is the 3-item short form. **ASSIST** (WHO) screens **all substances** at once — tobacco, alcohol, cannabis, methamphetamine, etc. — and returns a **risk score (low/moderate/high)** that maps to a matched response.',
    '**Know the red flags** even without a formal tool: recurrent injuries/falls, requests for early refills, work or relationship breakdown, and biochemical clues like a **raised GGT** and **macrocytosis (high MCV)** in heavy drinkers.',
    '**Assess readiness, not just severity.** A positive screen opens a conversation — pair it with the [[ifh-behavior-change-stages]] to gauge where the patient is, and use the spirit and OARS of [[ifh-motivational-interviewing]] to explore it.',
    '**The interview must be non-stigmatizing.** Normalise the questions ("I ask everyone…"), ask permission, and stay non-judgmental — the same principle underlying [[ifh-screening-principles]] and the humane framing from [[ifh-addiction-neurobiology]]. Defensiveness rises the moment a patient feels judged.',
  ],

  mechanism: {
    title: 'Ask everyone → pick the tool → score the risk → assess readiness → match the response',
    steps: [
      { id: 's1', label: 'Ask everyone — universal, non-judgmental screening', emphasis: 'key' },
      { id: 's2', label: 'Pick the tool: CAGE/AUDIT for alcohol, ASSIST for multiple substances', emphasis: 'key' },
      { id: 's3', label: 'Score → risk level (CAGE ≥2, AUDIT ≥8 = hazardous)' },
      { id: 's4', label: 'Assess readiness to change (stage the patient)' },
      { id: 's5', label: 'Match the intervention to risk + readiness', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'CAGE ≥2 is a positive screen for problem drinking', mechanism: 'Two or more affirmative items flag likely alcohol misuse warranting fuller assessment', significance: 'key' },
    { sign: 'AUDIT ≥8 indicates hazardous alcohol use', mechanism: 'The 10-item WHO score grades severity across consumption, dependence, and harm', significance: 'key' },
    { sign: 'ASSIST screens multiple substances and yields a risk-matched response', mechanism: 'One tool covers tobacco, alcohol, cannabis, stimulants, etc., stratifying low/moderate/high risk', significance: 'supportive' },
    { sign: 'A normalising, non-judgmental opening gets more honest answers', mechanism: 'Reducing anticipated stigma lowers defensiveness and under-reporting', significance: 'key' },
  ],

  investigations: [
    { clue: 'Patient admits morning "eye-openers" and feeling guilty about drinking', meaning: 'Two CAGE items positive → a positive screen → move to fuller assessment' },
    { clue: 'Routine bloods show a raised GGT and high MCV', meaning: 'Biochemical red flags suggesting sustained heavy alcohol use' },
    { clue: 'A patient uses several substances, not just alcohol', meaning: 'Use ASSIST — it screens across all substances rather than alcohol alone' },
    { clue: 'A positive CAGE in a patient with no interest in changing', meaning: 'A screen is not a diagnosis — stage their readiness and keep the door open, do not force action' },
  ],

  treatment: [
    { logic: 'Screen with the right tool, non-judgmentally', detail: 'CAGE/AUDIT for alcohol, ASSIST for multiple substances; a positive screen triggers assessment and a brief intervention — the SBIRT flow in [[ifh-addiction-management]].' },
    { logic: 'Match the next step to readiness', detail: 'Use motivational interviewing (see [[ifh-motivational-interviewing]]) to elicit change talk rather than lecturing, and align the plan with the patient’s stage of change.' },
  ],

  mnemonics: [
    { hook: 'CAGE', expansion: ['Cut down', 'Annoyed', 'Guilty', 'Eye-opener — ≥2 is a positive screen'] },
    { hook: 'AUDIT = Alcohol; ASSIST = All Substances', expansion: ['AUDIT: 10-item alcohol tool, ≥8 hazardous', 'ASSIST: multi-substance WHO tool with risk-matched response'] },
  ],

  traps: [
    {
      questionCategory: 'Screen vs diagnosis',
      wrongInstinct: 'A positive CAGE or AUDIT diagnoses alcohol dependence',
      rightAnswer: 'CAGE, AUDIT and ASSIST are screening tools — a positive result flags risk and prompts assessment, it does not diagnose',
      why: 'Diagnosis needs a full clinical assessment against DSM-5 criteria; treating a positive screen as a diagnosis over-labels and can alienate the patient.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'On the CAGE questionnaire, how many affirmative answers constitute a positive screen for problem drinking?',
      options: [
        { id: 'a', text: 'Any one item' },
        { id: 'b', text: 'Two or more items' },
        { id: 'c', text: 'All four items' },
        { id: 'd', text: 'CAGE does not use a cut-off' },
      ],
      answerId: 'b',
      explanation: 'A score of ≥2 on CAGE (Cut down, Annoyed, Guilty, Eye-opener) is a positive screen prompting fuller assessment for alcohol misuse.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'Which tool is most appropriate to screen a patient who may be using several different substances, not only alcohol?',
      options: [
        { id: 'a', text: 'CAGE' },
        { id: 'b', text: 'AUDIT' },
        { id: 'c', text: 'ASSIST' },
        { id: 'd', text: 'AUDIT-C' },
      ],
      answerId: 'c',
      explanation: 'The WHO ASSIST screens across multiple substances (tobacco, alcohol, cannabis, stimulants, etc.) and returns a risk-matched response; CAGE, AUDIT and AUDIT-C are alcohol-specific.',
      tests: 'investigation',
    },
  ],
};

export default ifhAddictionScreening;
