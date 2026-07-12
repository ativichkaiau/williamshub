import type { Lecture } from '../../lib/types';

export const behHumanisticTheory: Lecture = {
  id: 'beh-humanistic-theory',
  title: 'Humanistic Theory: Maslow & Rogers',
  system: 'community',
  source: 'L8 — Learning & Humanistic Theory',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Behavioral Science' },
    { kind: 'lecture', label: 'L8 Learning Theory' },
    { kind: 'mechanism', label: 'Maslow · Rogers' },
    { kind: 'exam', label: 'Self-actualization · UPR' },
    { kind: 'treatment', label: 'Person-centred care' },
  ],

  highYield: [
    '**Humanistic psychology is the “third force”** (after psychoanalysis and behaviourism). It emphasises **free will, holism, subjective experience and an innate drive toward growth** — a deliberate counter to the determinism of [[beh-freud-structural-topographic]] and [[beh-classical-operant-conditioning]].',
    '**Maslow’s hierarchy of needs** is a pyramid: **Physiological → Safety → Love/Belonging → Esteem → Self-actualization**. Lower **deficiency needs** are generally **prepotent** — they must be reasonably met before higher needs strongly motivate. **Self-actualization** (realising one’s full potential) is a **growth/being need** and is rarely fully achieved.',
    '**Rogers’ person-centred (client-centred) approach** holds that people have an **actualizing tendency** and thrive given three **core conditions** from the helper: **unconditional positive regard (UPR)**, accurate **empathy**, and **congruence** (genuineness).',
    '**Self-concept and incongruence:** distress arises when the **real self** and **ideal self** diverge, often because parents/society imposed **conditions of worth**. UPR reduces those conditions and lets the client move toward becoming a **fully functioning person**.',
    '**Clinical relevance:** these ideas underpin **patient-centred communication**, rapport and **motivational interviewing** — see [[beh-communication-skills]] and [[beh-doctor-patient-relationship]]. Unmet lower needs (pain, hunger, safety) must be addressed before a patient can engage in higher-order care.',
  ],

  mechanism: {
    title: 'Maslow’s hierarchy: Physiological → Safety → Belonging → Esteem → Self-actualization',
    steps: [
      { id: 's1', label: 'Physiological — food, water, sleep, homeostasis' },
      { id: 's2', label: 'Safety — security, shelter, stability' },
      { id: 's3', label: 'Love & belonging — intimacy, connection, acceptance' },
      { id: 's4', label: 'Esteem — competence, recognition, self-respect', emphasis: 'key' },
      { id: 's5', label: 'Self-actualization — realising full potential (growth need)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Lower deficiency needs are usually prepotent over higher needs', mechanism: 'Unmet physiological/safety needs dominate motivation until reasonably satisfied', significance: 'key' },
    { sign: 'Rogers’ three core conditions: UPR, empathy, congruence', mechanism: 'Together they create the non-judgemental climate in which the actualizing tendency operates', significance: 'key' },
    { sign: 'Distress reflects incongruence between real self and ideal self', mechanism: 'Conditions of worth force a gap between who one is and who one feels they must be', significance: 'key' },
    { sign: 'Self-actualization is a growth need, not a deficiency need', mechanism: 'It is never fully “satisfied” and expands as it is pursued, unlike lower needs', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A homeless patient cannot focus on managing diabetes while unsure where he will sleep', meaning: 'Unmet safety/physiological needs take priority over higher-order goals (Maslow)' },
    { clue: 'A therapist accepts a client fully regardless of what they disclose', meaning: 'Unconditional positive regard — a Rogerian core condition' },
    { clue: 'A high-achieving student feels worthless unless perfect, mirroring parental demands', meaning: 'Conditions of worth driving real-self/ideal-self incongruence' },
    { clue: 'A retiree pursues painting purely for personal growth, not reward', meaning: 'Movement toward self-actualization (a being/growth need)' },
  ],

  treatment: [
    { logic: 'Person-centred, non-directive stance', detail: 'Offer UPR, empathy and congruence rather than advice or interpretation, trusting the client’s own actualizing tendency to guide change.' },
    { logic: 'Meet basic needs first', detail: 'Address pain, hunger, safety and stability before expecting a patient to engage with education, adherence or psychological work — a practical use of Maslow’s hierarchy.' },
  ],

  mnemonics: [
    { hook: 'Please Stop Being Extra Selfish (bottom → top)', expansion: ['Physiological, Safety, Belonging, Esteem, Self-actualization', 'Lower deficiency needs before higher growth needs'] },
    { hook: 'Rogers = U-E-C', expansion: ['Unconditional positive regard', 'Empathy and Congruence — the three core conditions'] },
  ],

  traps: [
    {
      questionCategory: 'Unconditional positive regard vs approval',
      wrongInstinct: 'UPR means the therapist approves of or agrees with everything the client does',
      rightAnswer: 'UPR means accepting the client as a person of worth without judgement — it does not require endorsing their behaviour',
      why: 'Rogers separates valuing the person from evaluating specific behaviours; UPR removes conditions of worth, not accountability.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'According to Maslow, which needs must generally be reasonably satisfied before esteem needs become a strong motivator?',
      options: [
        { id: 'a', text: 'Physiological, safety and belonging needs' },
        { id: 'b', text: 'Self-actualization needs' },
        { id: 'c', text: 'Transcendence needs' },
        { id: 'd', text: 'No other needs — esteem is the base of the pyramid' },
      ],
      answerId: 'a',
      explanation: 'The hierarchy is prepotent: physiological, safety and love/belonging deficiency needs are ordinarily met before esteem, which sits just below self-actualization at the top.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A counsellor conveys deep, non-judgemental acceptance of a client no matter what the client reveals. Which Rogerian core condition is this?',
      options: [
        { id: 'a', text: 'Congruence' },
        { id: 'b', text: 'Empathy' },
        { id: 'c', text: 'Unconditional positive regard' },
        { id: 'd', text: 'Transference' },
      ],
      answerId: 'c',
      explanation: 'Unconditional positive regard is the therapist’s non-judgemental valuing of the client as a person, one of Rogers’ three core conditions alongside empathy and congruence.',
      tests: 'exam',
    },
  ],
};

export default behHumanisticTheory;
