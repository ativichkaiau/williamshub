import type { Lecture } from '../../lib/types';

export const behFamilyPsychopathology: Lecture = {
  id: 'beh-family-psychopathology',
  title: 'Family & Psychopathology',
  system: 'community',
  source: 'L7 — Family & its Psychopathology',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Behavioral Science' },
    { kind: 'lecture', label: 'L7 Family Psychopathology' },
    { kind: 'mechanism', label: 'Expressed emotion → relapse' },
    { kind: 'disease', label: 'Enmeshment · triangulation' },
    { kind: 'treatment', label: 'Family psychoeducation' },
  ],

  highYield: [
    '**The family shapes the course of mental illness even when it does not cause it.** Building on [[beh-family-dynamics]], several dysfunctional patterns worsen onset, severity and especially **relapse**.',
    '**Expressed Emotion (EE) is the key exam concept:** a family climate high in **criticism, hostility and emotional over-involvement**. **High EE strongly predicts relapse**, most clearly in schizophrenia ([[beh-psychotic-disorders]]) but also in mood and eating disorders.',
    '**Enmeshment and triangulation:** **enmeshment** is diffuse boundaries with over-involvement that blocks autonomy (classic in psychosomatic and eating-disorder families); **triangulation** draws a third person — often a child — into a two-person conflict to defuse tension.',
    '**Scapegoating designates one member as the “identified patient”** who unconsciously carries the family’s conflict and blame, which paradoxically stabilises the dysfunctional system.',
    '**Family climate interacts with biological vulnerability:** high EE and chronic stress act as the environmental trigger in a [[beh-behavioral-genetics]] diathesis–stress process, so lowering EE lowers relapse.',
  ],

  mechanism: {
    title: 'How family climate drives relapse',
    steps: [
      { id: 's1', label: 'Underlying biological vulnerability (diathesis) to the disorder', emphasis: 'key' },
      { id: 's2', label: 'High-EE family climate: criticism, hostility, over-involvement', emphasis: 'key' },
      { id: 's3', label: 'Sustained emotional arousal and stress in the patient' },
      { id: 's4', label: 'Raised risk of relapse and rehospitalisation', emphasis: 'key' },
      { id: 's5', label: 'Family psychoeducation lowers EE → reduces relapse' },
    ],
  },

  examFindings: [
    { sign: 'High Expressed Emotion predicts relapse, most clearly in schizophrenia', mechanism: 'Criticism, hostility and over-involvement raise stress arousal in a vulnerable patient', significance: 'key' },
    { sign: 'Enmeshment = diffuse boundaries and over-involvement that block autonomy', mechanism: 'Members are over-close, so individuation is suppressed', significance: 'key' },
    { sign: 'Triangulation pulls a third person into a two-person conflict', mechanism: 'A child is recruited to stabilise or defuse the parents’ tension', significance: 'supportive' },
    { sign: 'Scapegoating designates one member as the identified patient', mechanism: 'One person carries the blame, which stabilises the wider system', significance: 'key' },
  ],

  investigations: [
    { clue: 'A patient with schizophrenia relapses sooner in a home full of criticism and over-involvement', meaning: 'High Expressed Emotion driving relapse' },
    { clue: 'Two parents in chronic conflict repeatedly pull their son in to take sides', meaning: 'Triangulation of the child into the marital conflict' },
    { clue: 'A family who blame all their troubles on one “difficult” member', meaning: 'Scapegoating — that member is the identified patient' },
    { clue: 'An adolescent with anorexia in an over-close family that forbids any independence', meaning: 'Enmeshment — diffuse boundaries blocking autonomy' },
  ],

  treatment: [
    { logic: 'Use family psychoeducation to lower EE and prevent relapse', detail: 'Teaching families to reduce criticism and over-involvement measurably cuts relapse in schizophrenia and mood disorders ([[beh-psychotic-disorders]], [[beh-mood-anxiety-disorders]]).' },
    { logic: 'Reframe the “identified patient” as a system issue', detail: 'Shift the focus from blaming one member to the family patterns maintaining the problem ([[beh-family-dynamics]]).' },
  ],

  mnemonics: [
    { hook: 'High EE = Early Exit from remission', expansion: ['Criticism', 'Hostility', 'Emotional over-involvement', 'Together → higher relapse risk'] },
    { hook: 'The scapegoat is the “identified patient”', expansion: ['One member carries the family’s conflict', 'Blaming them stabilises the dysfunctional system'] },
  ],

  traps: [
    {
      questionCategory: 'Expressed Emotion — cause versus course',
      wrongInstinct: 'A high-EE family causes schizophrenia',
      rightAnswer: 'High EE does not cause the disorder but predicts relapse and a worse course; lowering it improves outcomes',
      why: 'Onset arises from biological vulnerability ([[beh-behavioral-genetics]]); the family climate modulates the course, not the origin.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which family factor most strongly predicts relapse in a patient with schizophrenia?',
      options: [
        { id: 'a', text: 'High Expressed Emotion (criticism, hostility, over-involvement)' },
        { id: 'b', text: 'The number of siblings in the family' },
        { id: 'c', text: 'The family’s income level' },
        { id: 'd', text: 'The birth order of the patient' },
      ],
      answerId: 'a',
      explanation: 'A family climate high in criticism, hostility and emotional over-involvement — high Expressed Emotion — is a robust predictor of relapse, which is why reducing EE through psychoeducation improves outcomes.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Two parents in ongoing conflict repeatedly draw their child in to take sides, easing the tension between them. This pattern is best termed:',
      options: [
        { id: 'a', text: 'Scapegoating' },
        { id: 'b', text: 'Triangulation' },
        { id: 'c', text: 'Enmeshment' },
        { id: 'd', text: 'Expressed emotion' },
      ],
      answerId: 'b',
      explanation: 'Drawing a third person — usually a child — into a two-person conflict to defuse tension is triangulation. Scapegoating instead assigns blame to one member as the identified patient.',
      tests: 'mechanism',
    },
  ],
};

export default behFamilyPsychopathology;
