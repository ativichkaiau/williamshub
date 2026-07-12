import type { Lecture } from '../../lib/types';

export const behSocialCognitiveLearning: Lecture = {
  id: 'beh-social-cognitive-learning',
  title: 'Social & Cognitive Learning',
  system: 'community',
  source: 'L8 — Learning & Humanistic Theory',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Behavioral Science' },
    { kind: 'lecture', label: 'L8 Learning Theory' },
    { kind: 'mechanism', label: 'Bandura · modelling' },
    { kind: 'exam', label: 'Observational learning' },
    { kind: 'treatment', label: 'Behaviour modification' },
  ],

  highYield: [
    '**Social learning theory (Bandura)** = we learn by **observing and imitating models**, without needing direct reinforcement ourselves. His **Bobo doll** experiment showed children who watched an adult beat the doll reproduced that aggression — evidence that behaviour is learned **vicariously**. This extends the conditioning of [[beh-classical-operant-conditioning]].',
    '**Observational learning needs four processes: Attention** (notice the model), **Retention** (remember it), **Reproduction** (be able to perform it) and **Motivation** (a reason to do it). Missing any step blocks imitation even if the behaviour was “learned”.',
    '**Vicarious reinforcement/punishment:** seeing a model rewarded makes imitation more likely; seeing a model punished makes it less likely. Models who are **high-status, similar, nurturant or powerful** are imitated most.',
    '**Reciprocal determinism** — behaviour, personal factors (cognition, beliefs) and environment **continuously influence one another**. A central cognitive factor is **self-efficacy**: belief in one’s ability to succeed, which shapes effort, persistence and coping — see [[beh-resilience]].',
    '**Cognitive learning** adds internal representation: Tolman’s **latent learning** and **cognitive maps** (learning without immediate performance) and Köhler’s **insight** learning. These principles ground clinical **behaviour modification** and **CBT** — see [[beh-humanistic-theory]] and [[beh-mood-anxiety-disorders]].',
  ],

  mechanism: {
    title: 'Observational learning: Attention → Retention → Reproduction → Motivation → imitation',
    steps: [
      { id: 's1', label: 'Attention — notice a salient, credible model' },
      { id: 's2', label: 'Retention — encode/remember the modelled behaviour', emphasis: 'key' },
      { id: 's3', label: 'Reproduction — have the capacity to perform it' },
      { id: 's4', label: 'Motivation — expect reward / see the model reinforced', emphasis: 'key' },
      { id: 's5', label: 'Behaviour is imitated (vicarious learning complete)' },
    ],
  },

  examFindings: [
    { sign: 'Learning can occur without direct reinforcement or performance', mechanism: 'Observation plus vicarious consequences is sufficient — the learner need not act or be rewarded', significance: 'key' },
    { sign: 'Self-efficacy predicts effort, persistence and behaviour change', mechanism: 'Belief in one’s capability determines whether skills are actually deployed under stress', significance: 'key' },
    { sign: 'Latent learning shows learning ≠ performance', mechanism: 'Knowledge can be acquired and stored, then expressed only when there is a reason to', significance: 'supportive' },
    { sign: 'Model characteristics govern imitation', mechanism: 'High-status, similar, warm or powerful models are copied far more than others', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A child raised in a violent home becomes aggressive without ever being directly rewarded for it', meaning: 'Observational learning/modelling of aggression — see [[beh-aggression-violence]]' },
    { clue: 'A teenager starts smoking after seeing admired celebrities smoke on screen', meaning: 'Imitation of a high-status model, reinforced vicariously' },
    { clue: 'A patient who does not believe he can quit smoking abandons the attempt at the first craving', meaning: 'Low self-efficacy undermining behaviour change' },
    { clue: 'A student who ignored a route later takes a shortcut the first day it is rewarded', meaning: 'Latent learning — a cognitive map expressed once motivated' },
  ],

  treatment: [
    { logic: 'Modelling in therapy', detail: 'Demonstrate the target behaviour (e.g. a therapist calmly handling a feared object) so the patient learns by observation before attempting it themselves.' },
    { logic: 'Build self-efficacy', detail: 'Use graded mastery experiences, verbal persuasion and vicarious success to raise the patient’s belief that change is achievable — a core lever in CBT and rehabilitation.' },
    { logic: 'Behaviour modification programmes', detail: 'Combine modelling with operant reinforcement (token economies, contingency management) to install and maintain adaptive behaviours — see [[beh-classical-operant-conditioning]].' },
  ],

  mnemonics: [
    { hook: 'A-R-R-M the model to learn', expansion: ['Attention, Retention, Reproduction, Motivation', 'All four are required for observational learning'] },
    { hook: 'Bobo doll = monkey see, monkey do', expansion: ['Children imitate observed aggression', 'Vicarious reinforcement, not direct reward, drives the behaviour'] },
  ],

  traps: [
    {
      questionCategory: 'Observational vs operant learning',
      wrongInstinct: 'The learner must be personally reinforced for a behaviour to be acquired',
      rightAnswer: 'In social learning the behaviour is acquired by watching a model and its consequences — no direct reinforcement of the learner is required',
      why: 'Vicarious reinforcement and latent learning show that acquisition can occur without the learner ever performing or being rewarded.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'In Bandura’s account of observational learning, which set of processes must all be present for a modelled behaviour to be imitated?',
      options: [
        { id: 'a', text: 'Attention, retention, reproduction, motivation' },
        { id: 'b', text: 'Acquisition, extinction, generalization, discrimination' },
        { id: 'c', text: 'Id, ego, superego, conscience' },
        { id: 'd', text: 'Sensorimotor, preoperational, concrete, formal' },
      ],
      answerId: 'a',
      explanation: 'Observational learning requires attention to the model, retention of what was seen, the capacity to reproduce it, and motivation to perform it.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient tells you, “I know I should exercise, but I just don’t believe I can stick with it.” Which construct best captures the barrier?',
      options: [
        { id: 'a', text: 'Low self-efficacy' },
        { id: 'b', text: 'Negative reinforcement' },
        { id: 'c', text: 'Reaction formation' },
        { id: 'd', text: 'Stimulus generalization' },
      ],
      answerId: 'a',
      explanation: 'Self-efficacy is the belief in one’s ability to carry out a behaviour; low self-efficacy predicts reduced effort and persistence, undermining change even when intentions are good.',
      tests: 'exam',
    },
  ],
};

export default behSocialCognitiveLearning;
