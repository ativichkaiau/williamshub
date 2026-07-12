import type { Lecture } from '../../lib/types';

export const ifhAddictionManagement: Lecture = {
  id: 'ifh-addiction-management',
  title: 'Managing Addiction',
  system: 'community',
  source: 'L9 — Addiction and Health',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Family Health' },
    { kind: 'lecture', label: 'L9 Addiction & Health' },
    { kind: 'treatment', label: 'SBIRT · harm reduction' },
    { kind: 'mechanism', label: 'Brief intervention → refer' },
    { kind: 'disease', label: 'Chronic relapsing course' },
  ],

  highYield: [
    '**SBIRT is the primary-care framework: Screening, Brief Intervention, Referral to Treatment.** The **brief intervention** is a short, structured conversation — often delivered with **FRAMES** (Feedback, Responsibility, Advice, Menu, Empathy, Self-efficacy) — that follows a positive screen from [[ifh-addiction-screening]].',
    '**Harm reduction meets the patient where they are.** It **reduces harm without requiring abstinence** — needle/syringe exchange, opioid substitution, nicotine replacement, and safer-use advice. Pragmatic and non-judgmental, it keeps people alive and engaged.',
    '**Pharmacotherapy overview by substance:** **Alcohol** — naltrexone, acamprosate, disulfiram (and benzodiazepines for withdrawal); **Opioids** — methadone or buprenorphine (opioid agonist therapy); **Tobacco** — NRT, varenicline, bupropion. Refer moderate–severe cases for specialist and rehab care.',
    '**Set the goal WITH the patient** and use the stage-matched, autonomy-supporting spirit of [[ifh-motivational-interviewing]] and the [[ifh-behavior-change-stages]] — abstinence for some, harm reduction for others. Brief opportunistic input mirrors the [[ifh-brief-counselling-5a]].',
    '**Relapse is expected, not failure.** Addiction is a **chronic relapsing condition** (see [[ifh-addiction-neurobiology]]) — the physician’s job is **continuity and non-abandonment**, re-engaging after a relapse rather than discharging the patient.',
  ],

  mechanism: {
    title: 'SBIRT: screen → brief intervention → shared goal → pharmacotherapy/harm reduction → refer → continuity',
    steps: [
      { id: 's1', label: 'Positive screen → deliver a brief intervention (SBIRT)', emphasis: 'key' },
      { id: 's2', label: 'Agree the goal WITH the patient: abstinence or harm reduction', emphasis: 'key' },
      { id: 's3', label: 'Offer pharmacotherapy where indicated (NRT, naltrexone, methadone/buprenorphine)' },
      { id: 's4', label: 'Refer moderate–severe SUD to specialist / rehab' },
      { id: 's5', label: 'Provide continuity; treat relapse as expected, not failure', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'SBIRT = Screening, Brief Intervention, Referral to Treatment', mechanism: 'The structured primary-care pathway from detecting to acting on substance use', significance: 'key' },
    { sign: 'Harm reduction reduces harm without demanding abstinence', mechanism: 'Meets patients where they are, keeping them alive and engaged with services', significance: 'key' },
    { sign: 'Relapse is part of the chronic relapsing course', mechanism: 'Expected in the disease model — a cue to re-engage and adjust, not to discharge', significance: 'key' },
    { sign: 'Opioid agonist therapy is evidence-based treatment', mechanism: 'Methadone/buprenorphine stabilise the patient — not "swapping one addiction for another"', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A person who injects drugs is not ready to stop', meaning: 'Offer harm reduction — needle exchange and safer-use advice — rather than withholding all help' },
    { clue: 'A smoker says they are ready to quit now', meaning: 'Offer pharmacotherapy (NRT/varenicline) plus a brief intervention (see [[ifh-brief-counselling-5a]])' },
    { clue: 'A patient relapses after three months of abstinence', meaning: 'Expected in a chronic relapsing condition → re-engage and adjust the plan, do not discharge' },
    { clue: 'A patient with severe alcohol use disorder and prior withdrawal seizures', meaning: 'Refer for medically-supervised detox and specialist care rather than managing alone' },
  ],

  treatment: [
    { logic: 'Deliver a brief intervention and agree a shared goal', detail: 'Use SBIRT/FRAMES after a positive screen; decide abstinence vs harm reduction with the patient using motivational interviewing.' },
    { logic: 'Offer pharmacotherapy and harm-reduction options; refer when needed', detail: 'Substance-specific medication (NRT, naltrexone, methadone/buprenorphine) plus harm-reduction services; refer moderate–severe SUD to specialist/rehab.' },
    { logic: 'Maintain continuity through relapse', detail: 'Non-abandonment is the core role — relapse is expected, so re-engage, review, and adjust rather than closing the case.' },
  ],

  mnemonics: [
    { hook: 'SBIRT', expansion: ['Screening', 'Brief Intervention', 'Referral to Treatment'] },
    { hook: 'FRAMES (the brief intervention)', expansion: ['Feedback', 'Responsibility', 'Advice', 'Menu of options', 'Empathy', 'Self-efficacy'] },
  ],

  traps: [
    {
      questionCategory: 'Handling relapse',
      wrongInstinct: 'A relapse proves the patient has failed and should be discharged from care',
      rightAnswer: 'Relapse is expected in a chronic relapsing condition — re-engage the patient and adjust the plan',
      why: 'Discharging on relapse abandons the patient and ignores the disease model; continuity and non-abandonment are the physician’s core role.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'What does the "BI" in the SBIRT framework stand for?',
      options: [
        { id: 'a', text: 'Biochemical Investigation' },
        { id: 'b', text: 'Brief Intervention' },
        { id: 'c', text: 'Baseline Interview' },
        { id: 'd', text: 'Behavioural Inpatient' },
      ],
      answerId: 'b',
      explanation: 'SBIRT = Screening, Brief Intervention, Referral to Treatment. The brief intervention is a short structured conversation following a positive screen.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'A patient in recovery relapses to alcohol after several months. What is the most appropriate response?',
      options: [
        { id: 'a', text: 'Discharge them from the clinic for non-compliance' },
        { id: 'b', text: 'Re-engage them and adjust the treatment plan' },
        { id: 'c', text: 'Tell them addiction is a moral choice' },
        { id: 'd', text: 'Stop all pharmacotherapy permanently' },
      ],
      answerId: 'b',
      explanation: 'Relapse is expected in a chronic relapsing condition. Continuity and non-abandonment mean re-engaging and adapting the plan, not discharging the patient.',
      tests: 'treatment',
    },
  ],
};

export default ifhAddictionManagement;
