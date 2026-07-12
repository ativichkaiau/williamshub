import type { Lecture } from '../../lib/types';

export const ifhBehaviorChangeStages: Lecture = {
  id: 'ifh-behavior-change-stages',
  title: 'Stages of Change (Transtheoretical Model)',
  system: 'community',
  source: 'L7 — Counselling, Health Promotion & Motivational Interviewing',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Family Health' },
    { kind: 'lecture', label: 'L7 Counselling & Health Promotion' },
    { kind: 'mechanism', label: 'Transtheoretical Model' },
    { kind: 'treatment', label: 'Stage-matched intervention' },
    { kind: 'exam', label: 'Health Belief Model' },
  ],

  highYield: [
    '**The Transtheoretical Model (Prochaska & DiClemente)** runs **precontemplation → contemplation → preparation → action → maintenance**, with **relapse** looping back in. It is a **wheel**, not a one-way street.',
    '**Match the intervention to the stage — the single biggest exam point.** **Precontemplation** (not intending to change): raise awareness, personalise risk — do **not** hand over a plan. **Contemplation** (ambivalent): explore the ambivalence, build motivation ([[ifh-motivational-interviewing]]). **Preparation** (ready soon): make a concrete plan, set a date. **Action/Maintenance**: reinforce and prevent relapse.',
    '**Relapse is expected, not failure.** It is part of the cycle — normalise it, learn from the trigger, and help the patient re-enter the wheel.',
    '**A stage-mismatched push backfires.** Telling a precontemplator to “just quit” triggers resistance; the [[ifh-brief-counselling-5a]] step “Assess” exists precisely to find the stage first.',
    '**The Health Belief Model explains WHY people move:** a person acts when perceived **susceptibility + severity + benefits outweigh the barriers**, plus a **cue to action** and enough **self-efficacy** — the belief change is possible ([[ifh-social-support-health]]).',
  ],

  mechanism: {
    title: 'The wheel of change: not thinking → thinking → planning → doing → sustaining (→ relapse)',
    steps: [
      { id: 's1', label: 'Precontemplation: not yet considering change → raise awareness' },
      { id: 's2', label: 'Contemplation: ambivalent → build motivation', emphasis: 'key' },
      { id: 's3', label: 'Preparation: ready soon → make a concrete plan', emphasis: 'key' },
      { id: 's4', label: 'Action: actively changing → support & reinforce' },
      { id: 's5', label: 'Maintenance: sustaining; relapse re-enters the wheel', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Match the intervention to the patient’s stage', mechanism: 'The right action for one stage is the wrong action for another', significance: 'key' },
    { sign: 'Precontemplation needs awareness, not an action plan', mechanism: 'The patient has not yet accepted there is a problem to plan for', significance: 'key' },
    { sign: 'Relapse is part of the cycle, not a failure', mechanism: 'Most people loop the wheel several times before lasting change', significance: 'key' },
    { sign: 'Health Belief Model: act when (susceptibility + severity + benefit) > barriers', mechanism: 'Perceived threat and value of action drive the decision, plus a cue and self-efficacy', significance: 'supportive' },
  ],

  investigations: [
    { clue: '“I don’t really have a problem with my drinking.”', meaning: 'Precontemplation → raise awareness and personalise risk; do not hand over a quit plan' },
    { clue: '“I know I should quit, but smoking is the only thing that calms me.”', meaning: 'Contemplation (ambivalence) → explore both sides, develop discrepancy ([[ifh-motivational-interviewing]])' },
    { clue: '“I’m stopping next Monday — can you help me plan it?”', meaning: 'Preparation → set a quit date, problem-solve barriers, offer pharmacotherapy' },
    { clue: 'After three months smoke-free the patient has one cigarette and feels a failure', meaning: 'Relapse → normalise it, learn from the trigger, and re-engage the wheel' },
  ],

  treatment: [
    { logic: 'Diagnose the stage first, then intervene', detail: 'Awareness for precontemplation; resolve ambivalence for contemplation; concrete planning for preparation; reinforcement for action; relapse-prevention for maintenance.' },
    { logic: 'Treat relapse as data, not defeat', detail: 'Identify the trigger, restore self-efficacy, and help the patient step back onto the wheel rather than abandon the goal.' },
  ],

  mnemonics: [
    { hook: 'Pre-contemplation, Contemplation, Preparation, Action, Maintenance', expansion: ['Not thinking → Thinking → Planning → Doing → Sustaining', 'Relapse loops back in — it is part of the wheel'] },
    { hook: 'Health Belief Model: will I act?', expansion: ['Susceptibility + Severity = perceived threat', 'Benefits > Barriers = perceived value', 'plus a Cue to action and Self-efficacy'] },
  ],

  traps: [
    {
      questionCategory: 'Matching the intervention to the stage',
      wrongInstinct: 'Give every smoker a quit date and a nicotine patch',
      rightAnswer: 'A precontemplator is not ready to plan — raise awareness and explore first; save the quit-date and pharmacotherapy for the preparation stage',
      why: 'Stage-mismatched advice (“just quit!”) provokes resistance and disengagement rather than change.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient says, “I know smoking is bad for me, but honestly it is the only thing that relaxes me after work.” Which stage of change does this best represent?',
      options: [
        { id: 'a', text: 'Precontemplation' },
        { id: 'b', text: 'Contemplation' },
        { id: 'c', text: 'Preparation' },
        { id: 'd', text: 'Action' },
      ],
      answerId: 'b',
      explanation: 'Weighing a recognised downside against a valued benefit is classic ambivalence, the hallmark of contemplation. The task here is to explore that ambivalence, not to issue a quit date.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A man in precontemplation sees no problem with his heavy drinking. What is the most appropriate approach?',
      options: [
        { id: 'a', text: 'Set a firm date to stop drinking and prescribe medication' },
        { id: 'b', text: 'Give him a detailed step-by-step relapse-prevention plan' },
        { id: 'c', text: 'Raise awareness and personalise the risks without pushing action' },
        { id: 'd', text: 'Discharge him, since counselling cannot help until he decides to change' },
      ],
      answerId: 'c',
      explanation: 'Interventions must match the stage. A precontemplator is not ready for a plan or a quit date; raising awareness and personalising risk helps him move toward contemplation, while pushing action would only breed resistance.',
      tests: 'treatment',
    },
  ],
};

export default ifhBehaviorChangeStages;
