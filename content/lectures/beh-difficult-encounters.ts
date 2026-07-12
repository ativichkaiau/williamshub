import type { Lecture } from '../../lib/types';

export const behDifficultEncounters: Lecture = {
  id: 'beh-difficult-encounters',
  title: 'Difficult Encounters & Breaking Bad News',
  system: 'community',
  source: 'L2 — Doctor-Patient Relationship & Communication',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Behavioral Science' },
    { kind: 'lecture', label: 'L2 Difficult Encounters' },
    { kind: 'mechanism', label: 'SPIKES protocol' },
    { kind: 'exam', label: 'Angry · somatizing patient' },
    { kind: 'treatment', label: 'Shared decision-making' },
  ],

  highYield: [
    '**A “difficult encounter” usually reflects the situation or system, not a “difficult patient.”** Naming the pattern — **angry, demanding, silent/withdrawn, or somatizing** — guides the response. Good communication technique ([[beh-communication-skills]]) and a stable relationship ([[beh-doctor-patient-relationship]]) defuse most of them.',
    '**The angry or hostile patient:** do not become defensive. **Stay calm, acknowledge and legitimise the anger, name the emotion, set clear limits, and ensure safety first.** If agitation escalates toward threat, shift to de-escalation and safe management ([[beh-aggression-violence]]).',
    '**The somatizing patient** presents recurrent physical symptoms with little organic explanation. The approach is **regular scheduled visits (not symptom-triggered), validating that the distress is real, minimising unnecessary tests and referrals, and shifting the goal from cure to care** ([[beh-other-major-disorders]]).',
    '**Breaking bad news follows SPIKES:** **S**etting up, assessing **P**erception, obtaining the **I**nvitation (ask how much they want to know), giving **K**nowledge after a warning shot, addressing **E**motions with empathy, and agreeing **S**trategy & summary. **Ask before you tell, fire a warning shot, and respond to emotion before logistics** ([[beh-death-dying]], [[beh-grief-bereavement]]).',
    '**Shared decision-making** blends the clinician’s **evidence and options** with the **patient’s values and preferences** to reach a joint choice. It sits between old-style **paternalism** (doctor decides) and bare **informed choice** (patient left alone), and it respects autonomy while keeping the doctor engaged.',
  ],

  mechanism: {
    title: 'SPIKES — a six-step protocol for breaking bad news',
    steps: [
      { id: 's1', label: 'Setting — privacy, sit down, no interruptions, support person present' },
      { id: 's2', label: 'Perception — ask what the patient already understands' },
      { id: 's3', label: 'Invitation — ask how much they want to know', emphasis: 'key' },
      { id: 's4', label: 'Knowledge — give a warning shot, then clear information in small chunks', emphasis: 'key' },
      { id: 's5', label: 'Emotions — respond to feelings with empathy before moving on', emphasis: 'key' },
      { id: 's6', label: 'Strategy & summary — agree the plan and next steps' },
    ],
  },

  examFindings: [
    { sign: 'A “difficult encounter” is usually about the situation, not a bad patient', mechanism: 'Reframing it depersonalises the tension and directs technique', significance: 'key' },
    { sign: 'In SPIKES you ask before you tell and give a warning shot', mechanism: 'Invitation and the warning shot let the patient brace before the news', significance: 'key' },
    { sign: 'Emotions are addressed with empathy before strategy in SPIKES', mechanism: 'Distress blocks retention, so respond to feeling before logistics', significance: 'key' },
    { sign: 'The somatizing patient needs scheduled visits and validation, not more tests', mechanism: 'Regular non-contingent care reduces symptom-driven attendance and iatrogenic harm', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A patient shouts angrily at reception about a delay', meaning: 'Acknowledge and name the anger, stay calm, set limits and ensure safety ([[beh-aggression-violence]])' },
    { clue: 'Before disclosing a cancer diagnosis, asking “How much would you like me to tell you?”', meaning: 'The Invitation step of SPIKES — consent to the amount of information' },
    { clue: 'Years of shifting unexplained pains with repeatedly normal investigations', meaning: 'Somatization — plan regular visits and a care (not cure) goal' },
    { clue: 'A clinician lays out the options with risks and benefits and asks the patient’s preference', meaning: 'Shared decision-making — evidence plus values reaching a joint choice' },
  ],

  treatment: [
    { logic: 'Use SPIKES for any bad news', detail: 'Set up privately, check perception, get an invitation, warn then inform in chunks, respond to emotion with empathy, and close with a shared plan.' },
    { logic: 'In an angry encounter, name the emotion and set limits', detail: 'Stay non-defensive, validate the feeling, define acceptable behaviour, and put safety first before problem-solving.' },
    { logic: 'Make decisions with the patient, not for them', detail: 'Offer the evidence and options, elicit values and preferences, and decide together — the middle path between paternalism and abandonment.' },
  ],

  mnemonics: [
    { hook: '“SPIKES” — breaking bad news', expansion: ['Setting', 'Perception', 'Invitation', 'Knowledge', 'Emotions (empathy)', 'Strategy & summary'] },
  ],

  traps: [
    {
      questionCategory: 'Shared decision-making versus paternalism',
      wrongInstinct: 'The most respectful approach is to present the facts and leave the choice entirely to the patient',
      rightAnswer: 'Shared decision-making combines the clinician’s evidence with the patient’s values to reach a joint decision',
      why: 'Dumping options on a patient without guidance is abandonment, not autonomy; the doctor stays engaged and decides with the patient.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'In the SPIKES protocol, what should the clinician do immediately after delivering the medical facts (Knowledge)?',
      options: [
        { id: 'a', text: 'Move straight to the treatment strategy and logistics' },
        { id: 'b', text: 'Respond to the patient’s emotions with empathy' },
        { id: 'c', text: 'End the consultation to give privacy' },
        { id: 'd', text: 'Order confirmatory investigations' },
      ],
      answerId: 'b',
      explanation: 'In SPIKES, Emotions come before Strategy: after giving knowledge you address the patient’s emotional response with empathy, because distress blocks retention of any plan discussed too soon.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A clinician presents the evidence and options, elicits the patient’s values, and reaches a decision together with them. This approach is best described as:',
      options: [
        { id: 'a', text: 'Paternalism' },
        { id: 'b', text: 'Activity–passivity' },
        { id: 'c', text: 'Shared decision-making' },
        { id: 'd', text: 'Informed abandonment' },
      ],
      answerId: 'c',
      explanation: 'Shared decision-making integrates the clinician’s evidence and options with the patient’s values and preferences to reach a joint choice — distinct from paternalism (doctor decides) and from leaving the patient to choose unsupported.',
      tests: 'treatment',
    },
  ],
};

export default behDifficultEncounters;
