import type { Lecture } from '../../lib/types';

export const behSuicideAssessment: Lecture = {
  id: 'beh-suicide-assessment',
  title: 'Suicide Risk Assessment & Safety Planning',
  system: 'community',
  source: 'L14 — Abuse, Suicide & Violence',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Behavioral Science' },
    { kind: 'lecture', label: 'L14 Suicide Assessment' },
    { kind: 'mechanism', label: 'Ideation → intent → means' },
    { kind: 'exam', label: 'Risk & protective factors' },
    { kind: 'treatment', label: 'Safety planning' },
  ],

  highYield: [
    '**A previous suicide attempt is the single strongest predictor of eventual suicide.** Other major risk factors include depression and other psychiatric illness, hopelessness, substance use, chronic pain or illness, recent loss, social isolation, access to lethal means, and a family history of suicide ([[beh-mood-anxiety-disorders]]).',
    '**Protective factors lower risk:** social connectedness and support, responsibility to family or children, religious or cultural beliefs against suicide, help-seeking, reasons for living, and active engagement in care.',
    '**Asking directly about suicide does NOT plant the idea or increase risk — this is a myth.** Direct, non-judgmental questioning opens the conversation and reduces distress; avoiding it is what endangers patients.',
    '**Assess systematically: ideation → plan → intent → means → access.** A specific plan, clear intent, and available lethal means signal high acute risk. Watch warning signs: talking about death or being a burden, giving away possessions, withdrawal, increased substance use, and a sudden calm after a period of depression.',
    '**Safety planning and means restriction are core interventions.** Collaboratively identify warning signs, coping strategies, supports and crisis contacts, and restrict access to lethal means (one of the most effective measures); escalate to urgent evaluation or hospitalization for high or imminent risk. Never promise secrecy about imminent danger ([[beh-psychiatric-history]], [[beh-mental-status-exam]]).',
  ],

  mechanism: {
    title: 'Suicide risk assessment: ideation → plan → intent → means → safety',
    steps: [
      { id: 's1', label: 'Ask directly about suicidal thoughts (asking does NOT plant the idea)', emphasis: 'key' },
      { id: 's2', label: 'Explore ideation: frequency, intensity, duration' },
      { id: 's3', label: 'Assess plan, intent & access to lethal means', emphasis: 'key' },
      { id: 's4', label: 'Weigh risk against protective factors', emphasis: 'key' },
      { id: 's5', label: 'Act: safety plan, restrict means, escalate/hospitalize if high risk', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'A previous suicide attempt is the single strongest predictor of future suicide', mechanism: 'Past attempt marks both intent and capability, outweighing most other single factors', significance: 'key' },
    { sign: 'Asking directly about suicide does not increase risk or plant the idea', mechanism: 'Open questioning relieves distress and gives the clinician the information needed to intervene', significance: 'key' },
    { sign: 'Men die by suicide more often; women attempt more often', mechanism: 'Men more often use highly lethal means, raising case-fatality despite fewer attempts', significance: 'supportive' },
    { sign: 'Restricting access to lethal means is among the most effective preventive interventions', mechanism: 'Many suicidal crises are brief and impulsive, so limiting means buys life-saving time', significance: 'key' },
  ],

  investigations: [
    { clue: 'A patient describes a specific method, has the means at hand, and states clear intent', meaning: 'High acute risk requiring immediate safety measures' },
    { clue: 'A depressed patient suddenly appears calm and begins giving away belongings', meaning: 'Warning signs of possible imminent suicide' },
    { clue: 'Strong family responsibilities, firm religious objection to suicide, and engagement in treatment', meaning: 'Protective factors that lower overall risk' },
    { clue: 'A clinician avoids asking about suicide, fearing it will "give the patient ideas"', meaning: 'A myth — direct asking is safe and necessary' },
  ],

  treatment: [
    { logic: 'Ask directly and assess systematically', detail: 'Screen every at-risk patient, then move through ideation, plan, intent, means and access to gauge acute risk.' },
    { logic: 'Build a collaborative safety plan and restrict means', detail: 'Agree warning signs, coping steps, supports and crisis contacts, and reduce access to lethal means; means restriction is high-yield.' },
    { logic: 'Escalate imminent risk', detail: 'Arrange urgent psychiatric evaluation or hospitalization for high or imminent risk, and never promise to keep imminent danger secret.' },
  ],

  mnemonics: [
    { hook: 'SAD PERSONS risk factors', expansion: ['Sex (male, higher lethality)', 'Age (older, and adolescents/young adults)', 'Depression', 'Previous attempt', 'Ethanol/substance use', 'Rational thinking loss (psychosis)', 'Social support lacking', 'Organized plan', 'No spouse/isolation', 'Sickness (chronic illness)'] },
  ],

  traps: [
    {
      questionCategory: 'The myth that asking about suicide is harmful',
      wrongInstinct: 'Asking a patient about suicidal thoughts may plant the idea and increase risk',
      rightAnswer: 'Direct, compassionate questioning does not increase risk and is essential to assessment',
      why: 'Evidence shows asking reduces distress and enables intervention; avoiding the question is the real danger.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which of the following is the single strongest predictor of eventual death by suicide?',
      options: [
        { id: 'a', text: 'A previous suicide attempt' },
        { id: 'b', text: 'Male sex' },
        { id: 'c', text: 'Living alone' },
        { id: 'd', text: 'A family history of anxiety' },
      ],
      answerId: 'a',
      explanation: 'A prior suicide attempt is the strongest single predictor of future suicide. The other items raise risk but carry less predictive weight than a past attempt.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A student doctor hesitates to ask a low-mood patient about suicidal thoughts, worried the question could "give them the idea." The best guidance is:',
      options: [
        { id: 'a', text: 'Avoid the topic unless the patient raises it first' },
        { id: 'b', text: 'Ask directly; doing so does not increase risk and is essential' },
        { id: 'c', text: 'Ask only after obtaining family permission' },
        { id: 'd', text: 'Ask indirectly so the patient cannot tell what is meant' },
      ],
      answerId: 'b',
      explanation: 'Asking directly about suicide does not plant the idea or raise risk; it opens the conversation and allows assessment and intervention. This is a well-established myth to correct.',
      tests: 'treatment',
    },
  ],
};

export default behSuicideAssessment;
