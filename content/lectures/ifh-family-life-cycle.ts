import type { Lecture } from '../../lib/types';

export const ifhFamilyLifeCycle: Lecture = {
  id: 'ifh-family-life-cycle',
  title: 'The Family Life Cycle',
  system: 'community',
  source: 'L4 — Family Influences on Health',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Family Health' },
    { kind: 'lecture', label: 'L4 Family Influences on Health' },
    { kind: 'mechanism', label: 'Duvall’s 8 stages' },
    { kind: 'exam', label: 'Transitions as stress points' },
  ],

  highYield: [
    '**The family life cycle** = the predictable developmental **stages** a family passes through over time, each with its own **tasks** and typical health issues. **Duvall described 8 stages** — assessing a family’s stage is one axis of [[ifh-family-assessment-tools]].',
    '**Duvall’s 8 stages:** (1) married couple, no children → (2) childbearing → (3) preschool → (4) school-age → (5) teenage → (6) **launching** (children leave) → (7) middle-age / **empty nest** → (8) ageing / retirement.',
    '**Each stage has developmental tasks:** newlyweds form the marital system; childbearing couples take on parenting; families with teens must widen boundaries; launching renegotiates the adult-child tie; the ageing family copes with loss and dependency.',
    '**Transitions are the stress points.** Moving between stages forces **role change and boundary renegotiation**, so predictable crises — a new baby, adolescence, launching, retirement, widowhood — often surface as health or psychosomatic presentations. Link to [[ifh-stress-life-events]] and [[ifh-family-health-impact]].',
    '**Clinical use:** locating the stage lets you **anticipate tasks, screen for stage-typical problems, and time anticipatory guidance** — remembering a family can occupy overlapping stages at once (a toddler and a teenager together). See also [[ifh-family-definitions-types]].',
  ],

  mechanism: {
    title: 'Marriage → childbearing → raising & launching children → empty nest → ageing',
    steps: [
      { id: 's1', label: 'Newly married couple — form the marital system', emphasis: 'key' },
      { id: 's2', label: 'Childbearing & young children — take on parenting roles' },
      { id: 's3', label: 'Families with adolescents — increase boundary flexibility', emphasis: 'key' },
      { id: 's4', label: 'Launching — children leave; renegotiate the dyad (“empty nest”)' },
      { id: 's5', label: 'Middle age → ageing — retirement, loss, dependency', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Every stage carries specific developmental tasks', mechanism: 'The family must master each task to move on smoothly to the next stage', significance: 'key' },
    { sign: 'Transitions between stages are the stress points', mechanism: 'Role and boundary renegotiation temporarily destabilises the system', significance: 'key' },
    { sign: 'Health problems cluster around predictable transitions', mechanism: 'A new baby, adolescence, launching, retirement and widowhood all strain coping', significance: 'supportive' },
    { sign: 'A family can occupy overlapping stages at once', mechanism: 'Children of different ages create simultaneous tasks (e.g. toddler + teen)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'New parents present exhausted with a “difficult” 2-month-old', meaning: 'Childbearing stage — the task is taking on parenting; support and guidance, not just the baby' },
    { clue: 'Marital tension surfaces the year the youngest child leaves home', meaning: 'The launching / empty-nest transition — a classic stress point' },
    { clue: 'A father develops chest pain and low mood soon after retiring', meaning: 'Ageing-stage transition (role loss) presenting somatically — assess psychosocially' },
    { clue: 'Escalating conflict with a 15-year-old', meaning: 'Adolescent stage — the task is flexible boundaries and autonomy; expect renegotiation' },
  ],

  treatment: [
    { logic: 'Anticipate by stage', detail: 'Identify the family’s current stage, name its developmental task, and give anticipatory guidance before the predictable transition crisis arrives.' },
    { logic: 'Read symptoms in context', detail: 'When a presentation coincides with a transition, screen the family process, not just the organ.' },
  ],

  mnemonics: [
    { hook: 'Duvall in 8: couple → kids → launch → age', expansion: ['1 Married couple', '2–5 Bearing & raising children (infant → teen)', '6 Launching', '7 Empty nest / middle age', '8 Ageing family'] },
  ],

  traps: [
    {
      questionCategory: 'Where family stress concentrates',
      wrongInstinct: 'Family crisis strikes randomly, in the middle of a stage',
      rightAnswer: 'Stress and crises cluster at the transitions between stages, when roles and boundaries must be renegotiated',
      why: 'Knowing the transitions lets you predict and pre-empt the crisis with anticipatory guidance rather than only reacting.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A couple presents with new marital conflict the same year their last child moves out. This family life-cycle transition is best termed…',
      options: [
        { id: 'a', text: 'Launching / empty nest' },
        { id: 'b', text: 'Childbearing' },
        { id: 'c', text: 'Newly married' },
        { id: 'd', text: 'Skip-generation' },
      ],
      answerId: 'a',
      explanation: 'When children leave home the family enters the launching / empty-nest stage; the couple must renegotiate the marital dyad, a classic and predictable point of stress.',
      tests: 'lecture',
    },
    {
      id: 'q2',
      stem: 'According to family life-cycle theory, when are families most vulnerable to crisis and new health problems?',
      options: [
        { id: 'a', text: 'During the transitions between stages' },
        { id: 'b', text: 'Only during the ageing stage' },
        { id: 'c', text: 'Randomly, unrelated to any stage' },
        { id: 'd', text: 'Only during childbearing' },
      ],
      answerId: 'a',
      explanation: 'It is the transitions — when roles and boundaries must be renegotiated — that destabilise the family system, so health and psychosomatic problems cluster there rather than mid-stage.',
      tests: 'mechanism',
    },
  ],
};

export default ifhFamilyLifeCycle;
