import type { Lecture } from '../../lib/types';

export const behAbuseNeglect: Lecture = {
  id: 'beh-abuse-neglect',
  title: 'Abuse & Neglect: Recognition & Reporting',
  system: 'community',
  source: 'L14 — Abuse, Suicide & Violence',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Behavioral Science' },
    { kind: 'lecture', label: 'L14 Abuse & Neglect' },
    { kind: 'mechanism', label: 'Recognize → report' },
    { kind: 'exam', label: 'Red flags' },
    { kind: 'treatment', label: 'Mandatory reporting' },
  ],

  highYield: [
    '**Abuse spans the lifespan and takes several forms:** physical, sexual, and emotional/psychological abuse, plus **neglect** (failure to provide for basic needs). The main patterns are **child abuse/neglect, intimate-partner violence (IPV), and elder abuse** ([[beh-family-psychopathology]]).',
    '**The cardinal red flag is a history that does not fit the injury** — a mechanism implausible for the injury or the patient’s developmental stage, a **delayed or evasive presentation**, changing stories, injuries at **different stages of healing**, or patterned injuries.',
    '**In children, certain findings are highly suspicious:** any significant injury in a **non-ambulatory infant** ("cruise before bruise"), patterned bruises or burns, posterior rib or metaphyseal-corner fractures, and abusive head trauma. Failure to thrive can reflect neglect.',
    '**Always interview the possible victim alone,** separated from the accompanying person. A partner or caregiver who answers for the patient, refuses to leave, or is controlling is itself a red flag; **strangulation** in IPV is a high-lethality marker ([[beh-aggression-violence]]).',
    '**Child abuse and elder/vulnerable-adult abuse are typically MANDATORY reports;** competent-adult IPV is usually **patient-directed** (respect autonomy) while you provide safety planning and resources. Ensure immediate safety and document objectively ([[beh-suicide-assessment]], [[beh-mood-anxiety-disorders]]).',
  ],

  mechanism: {
    title: 'Clinical approach to suspected abuse: recognize → separate & assess → document → report/refer',
    steps: [
      { id: 's1', label: 'Recognize red flags (history–injury mismatch, delay, fear)', emphasis: 'key' },
      { id: 's2', label: 'Interview the patient alone, non-judgmentally', emphasis: 'key' },
      { id: 's3', label: 'Assess immediate safety and danger' },
      { id: 's4', label: 'Document objectively (verbatim quotes, body map, photos)', emphasis: 'key' },
      { id: 's5', label: 'Report where mandated & connect to safety resources', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'An injury inconsistent with the stated mechanism or a delayed presentation is a key red flag', mechanism: 'A story that does not fit the injury or the timeline suggests the true cause is being concealed', significance: 'key' },
    { sign: 'Any significant injury in a non-ambulatory infant is highly suspicious for abuse', mechanism: 'An infant who cannot yet move independently cannot plausibly self-injure ("cruise before bruise")', significance: 'key' },
    { sign: 'The possible victim must be interviewed alone', mechanism: 'A perpetrator present in the room prevents honest disclosure and enables coercion', significance: 'key' },
    { sign: 'Child and elder/vulnerable-adult abuse are usually mandatory reports; competent-adult IPV is patient-directed', mechanism: 'Vulnerable persons need protective reporting, while competent adults retain autonomy over disclosure', significance: 'key' },
  ],

  investigations: [
    { clue: 'A spiral femur fracture in a 3-month-old said to have "rolled off the couch"', meaning: 'Mechanism implausible for the child’s development — suspected child abuse' },
    { clue: 'A partner insists on answering every question and refuses to leave the room', meaning: 'Controlling behaviour and an IPV red flag — interview the patient alone' },
    { clue: 'Unexplained bank withdrawals and missing funds affecting a dependent older adult', meaning: 'Financial exploitation — a form of elder abuse' },
    { clue: 'Multiple fractures at different stages of healing on radiographs', meaning: 'Repeated injury over time, suspicious for ongoing abuse' },
  ],

  treatment: [
    { logic: 'Ensure safety and interview privately', detail: 'Address immediate danger first, then speak with the patient alone, non-judgmentally, and validate their disclosure.' },
    { logic: 'Document objectively', detail: 'Record the patient’s own words in quotation marks, use body maps and photographs, and describe injuries factually without speculation.' },
    { logic: 'Report per mandate and connect to resources', detail: 'File mandated reports for children and vulnerable adults; for competent adults, provide safety planning and referral while respecting autonomy.' },
  ],

  mnemonics: [
    { hook: 'Abuse red flags — the "3 D’s and a P"', expansion: ['Discrepant history (does not fit the injury)', 'Delay in seeking care', 'Different stages of healing', 'Patterned or implausible injuries'] },
  ],

  traps: [
    {
      questionCategory: 'Reporting duties by victim type',
      wrongInstinct: 'You must report all suspected abuse, including a competent adult’s intimate-partner violence, over the patient’s objection',
      rightAnswer: 'Child and vulnerable-adult abuse are mandatory reports, but competent-adult IPV is generally patient-directed',
      why: 'Mandatory reporting protects those who cannot protect themselves; competent adults retain autonomy while being offered safety resources.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which finding is MOST concerning for physical child abuse?',
      options: [
        { id: 'a', text: 'A bruised shin in an active 4-year-old' },
        { id: 'b', text: 'A femur fracture in a 3-month-old who "rolled off the couch"' },
        { id: 'c', text: 'A grazed knee in a 6-year-old who fell while running' },
        { id: 'd', text: 'A single small forehead bruise in a toddler learning to walk' },
      ],
      answerId: 'b',
      explanation: 'A significant fracture in a non-ambulatory infant with an implausible mechanism is highly suspicious for abuse ("cruise before bruise"). The other injuries fit normal activity and development.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A competent adult discloses intimate-partner violence but does not want it reported. The most appropriate action is to:',
      options: [
        { id: 'a', text: 'Report to authorities immediately against her wishes' },
        { id: 'b', text: 'Respect her autonomy while offering safety planning and resources' },
        { id: 'c', text: 'Take no further action of any kind' },
        { id: 'd', text: 'Inform the partner of the disclosure' },
      ],
      answerId: 'b',
      explanation: 'For a competent adult, IPV is generally patient-directed: respect autonomy while assessing danger and offering safety planning and referrals. Mandatory reporting applies to children and vulnerable adults.',
      tests: 'treatment',
    },
  ],
};

export default behAbuseNeglect;
