import type { Lecture } from '../../lib/types';

export const ifhMotivationalInterviewing: Lecture = {
  id: 'ifh-motivational-interviewing',
  title: 'Motivational Interviewing',
  system: 'community',
  source: 'L7 — Counselling, Health Promotion & Motivational Interviewing',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Family Health' },
    { kind: 'lecture', label: 'L7 Counselling & Health Promotion' },
    { kind: 'mechanism', label: 'MI spirit (PACE) · OARS' },
    { kind: 'treatment', label: 'Change talk · roll with resistance' },
    { kind: 'exam', label: 'The righting reflex' },
  ],

  highYield: [
    '**Motivational interviewing (Miller & Rollnick) is a collaborative, guiding style** that strengthens a person’s **own** motivation to change — you **evoke** reasons from the patient, you do not install them.',
    '**MI spirit = PACE:** **P**artnership (work with, not on, the patient), **A**cceptance (worth, empathy, autonomy, affirmation), **C**ompassion (their welfare first), **E**vocation (draw motivation out — the answers are in the patient).',
    '**Core skills = OARS:** **O**pen questions, **A**ffirmations, **R**eflective listening (the workhorse), **S**ummaries. These are the tools you actually use in the room ([[ifh-clinical-communication-skills]]).',
    '**Resist the “righting reflex.”** The urge to fix the patient by listing all the reasons they should change provokes **sustain talk** and argument — with an ambivalent patient, whoever voices the arguments for change is the one who gets talked out of them.',
    '**Build motivation by three moves: develop discrepancy** (between current behaviour and the patient’s own goals/values), **roll with resistance** (dance, don’t wrestle — resistance is a signal to change your approach), and **support self-efficacy** — then selectively reflect and reinforce **change talk** to guide the patient toward their own stage of readiness ([[ifh-behavior-change-stages]]).',
  ],

  mechanism: {
    title: 'Engage (PACE + OARS) → focus → evoke change talk → develop discrepancy → plan',
    steps: [
      { id: 's1', label: 'Engage with MI spirit (PACE) using OARS' },
      { id: 's2', label: 'Focus on one target behaviour' },
      { id: 's3', label: 'Evoke the patient’s own change talk', emphasis: 'key' },
      { id: 's4', label: 'Develop discrepancy; roll with resistance (don’t argue)', emphasis: 'key' },
      { id: 's5', label: 'Support self-efficacy → plan when the patient is ready', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Motivation is evoked from the patient, not installed by the clinician', mechanism: 'People are more persuaded by their own arguments than by ours', significance: 'key' },
    { sign: 'Resist the righting reflex — arguing for change breeds sustain talk', mechanism: 'An ambivalent patient defends the side the clinician does not voice', significance: 'key' },
    { sign: 'Reflective listening is the core OARS skill', mechanism: 'Reflecting meaning shows empathy and keeps the patient exploring', significance: 'supportive' },
    { sign: 'Develop discrepancy between behaviour and the patient’s own goals', mechanism: 'The felt gap between values and behaviour is what motivates change', significance: 'key' },
  ],

  investigations: [
    { clue: 'The doctor lists every reason to quit; the patient defends smoking harder', meaning: 'The righting reflex evoked sustain talk — switch to eliciting the patient’s own reasons' },
    { clue: '“I suppose that cough has been scaring me a bit lately.”', meaning: 'Change talk (a reason/desire) → reflect and amplify it rather than move on' },
    { clue: 'The patient argues back and digs in when pushed to change', meaning: 'A cue to roll with resistance — change your approach, do not increase the pressure' },
    { clue: '“Part of me wants to stop, but part of me really enjoys it.”', meaning: 'Ambivalence → explore both sides with reflections and develop discrepancy' },
  ],

  treatment: [
    { logic: 'Evoke, don’t install', detail: 'Use OARS to draw out the patient’s own reasons; selectively reflect and reinforce change talk so the patient hears themselves argue for change.' },
    { logic: 'Roll with resistance', detail: 'Do not confront or argue; reflect, reframe and emphasise autonomy — treat resistance as a signal to change approach, not to push harder.' },
    { logic: 'Support self-efficacy and autonomy', detail: 'Affirm genuine strengths and past successes; the decision and responsibility to change remain the patient’s.' },
  ],

  mnemonics: [
    { hook: 'MI spirit = PACE', expansion: ['Partnership', 'Acceptance', 'Compassion', 'Evocation'] },
    { hook: 'OARS row the conversation forward', expansion: ['Open questions', 'Affirmations', 'Reflective listening', 'Summaries'] },
  ],

  traps: [
    {
      questionCategory: 'Where the motivation comes from',
      wrongInstinct: 'Persuade the patient by clearly explaining all the reasons they must change',
      rightAnswer: 'Elicit the patient’s OWN reasons for change (evocation); the righting reflex backfires',
      why: 'In MI, arguing for change makes an ambivalent patient argue against it — motivation has to come out of the patient, not be pushed in.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which set of terms best captures the “spirit” of motivational interviewing?',
      options: [
        { id: 'a', text: 'Partnership, Acceptance, Compassion, Evocation' },
        { id: 'b', text: 'Ask, Advise, Assess, Assist' },
        { id: 'c', text: 'Feedback, Responsibility, Advice, Menu' },
        { id: 'd', text: 'Sensitivity, Specificity, Prevalence, Predictive value' },
      ],
      answerId: 'a',
      explanation: 'The MI spirit is PACE: Partnership, Acceptance, Compassion and Evocation. The other options are the 5A’s, FRAMES, and screening-test metrics respectively.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'During a consultation a clinician feels a strong urge to list all the reasons a hesitant patient should stop drinking. In motivational interviewing, this urge is best described as:',
      options: [
        { id: 'a', text: 'Developing discrepancy, which should be encouraged' },
        { id: 'b', text: 'The righting reflex, which should be resisted' },
        { id: 'c', text: 'A summary, one of the core OARS skills' },
        { id: 'd', text: 'Supporting self-efficacy' },
      ],
      answerId: 'b',
      explanation: 'The impulse to set the patient right by supplying the arguments for change is the “righting reflex.” It tends to evoke sustain talk and resistance, so the MI clinician resists it and instead elicits the patient’s own reasons.',
      tests: 'mechanism',
    },
  ],
};

export default ifhMotivationalInterviewing;
