import type { Lecture } from '../../lib/types';

export const ifhBriefCounselling5a: Lecture = {
  id: 'ifh-brief-counselling-5a',
  title: 'Brief Counselling & Health Promotion',
  system: 'community',
  source: 'L7 — Counselling, Health Promotion & Motivational Interviewing',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Family Health' },
    { kind: 'lecture', label: 'L7 Counselling & Health Promotion' },
    { kind: 'treatment', label: '5A’s · FRAMES' },
    { kind: 'mechanism', label: 'Brief intervention · SBIRT' },
    { kind: 'exam', label: 'Health education vs promotion' },
  ],

  highYield: [
    '**The 5A’s structure a brief intervention in minutes:** **Ask** (identify & record the behaviour every visit), **Advise** (clear, personalised advice to change), **Assess** (readiness — links to the [[ifh-behavior-change-stages]] stage), **Assist** (plan, pharmacotherapy, resources), **Arrange** (follow-up & referral).',
    '**FRAMES** captures the active ingredients of an effective brief intervention: **F**eedback, **R**esponsibility (with the patient), **A**dvice, **M**enu of options, **E**mpathy, **S**elf-efficacy — the empathic, autonomy-respecting style it shares with [[ifh-motivational-interviewing]].',
    '**Opportunistic brief intervention** uses any routine visit — even one booked for something else — to deliver a few minutes of evidence-based counselling; the structured screen-and-refer version is **SBIRT** ([[ifh-addiction-management]]).',
    '**Health education ⊂ health promotion.** Health *education* gives individuals knowledge and skills; health *promotion* (WHO **Ottawa Charter**, 1986) is “enabling people to increase control over and improve their health” — it **also** changes policy and environments, not just individual knowledge.',
    '**The Ottawa Charter’s five action areas:** build healthy public policy, create supportive environments, strengthen community action, develop personal skills, and reorient health services — brief counselling delivers the “personal skills” piece within a much wider strategy ([[ifh-prevention-levels]]).',
  ],

  mechanism: {
    title: 'The 5A’s flow: Ask → Advise → Assess → Assist → Arrange',
    steps: [
      { id: 's1', label: 'Ask: identify & record the behaviour at every visit' },
      { id: 's2', label: 'Advise: clear, personalised advice to change', emphasis: 'key' },
      { id: 's3', label: 'Assess: readiness / willingness (link to the stage)', emphasis: 'key' },
      { id: 's4', label: 'Assist: make a plan, offer pharmacotherapy & resources' },
      { id: 's5', label: 'Arrange: follow-up and referral', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'The 5A’s deliver a structured opportunistic intervention in minutes', mechanism: 'A brief, repeatable script that fits inside an ordinary consultation', significance: 'key' },
    { sign: '“Assess” ties the intervention to the patient’s stage of change', mechanism: 'Readiness decides whether to advise, plan, or simply raise awareness', significance: 'key' },
    { sign: 'FRAMES keeps responsibility for change with the patient', mechanism: 'Autonomy and self-efficacy make the advice more likely to stick', significance: 'supportive' },
    { sign: 'Health promotion is broader than health education', mechanism: 'The Ottawa Charter adds policy and environment to individual skills', significance: 'key' },
  ],

  investigations: [
    { clue: 'Every attender is asked about tobacco use and it is documented', meaning: 'The “Ask” step — the entry point of the 5A’s, applied to all-comers' },
    { clue: 'A GP spends three minutes advising and arranging follow-up during a visit booked for back pain', meaning: 'An opportunistic brief intervention — using a routine contact for prevention' },
    { clue: 'A poster campaign teaching the public how much salt is in common foods', meaning: 'Health education — building individual knowledge and skills' },
    { clue: 'A sugary-drink tax plus mandatory food labelling and smoke-free public spaces', meaning: 'Health promotion — Ottawa Charter healthy public policy and supportive environments' },
  ],

  treatment: [
    { logic: 'Run the 5A’s at the opportunity', detail: 'Ask, Advise, Assess, Assist, Arrange — even a few minutes in a routine visit is effective for tobacco and alcohol.' },
    { logic: 'Use FRAMES for a brief alcohol intervention', detail: 'Feedback, Responsibility, Advice, Menu, Empathy, Self-efficacy — keep the responsibility for change with the patient.' },
    { logic: 'Promote, don’t just educate', detail: 'Pair individual advice with supportive environments and policy (Ottawa Charter) so change does not depend on willpower alone.' },
  ],

  mnemonics: [
    { hook: 'The 5A’s', expansion: ['Ask', 'Advise', 'Assess', 'Assist', 'Arrange'] },
    { hook: 'FRAMES the brief intervention', expansion: ['Feedback', 'Responsibility', 'Advice', 'Menu of options', 'Empathy', 'Self-efficacy'] },
  ],

  traps: [
    {
      questionCategory: 'Health education versus health promotion',
      wrongInstinct: 'Health education and health promotion are the same thing',
      rightAnswer: 'Health education (individual knowledge and skills) is one component of health promotion, which also changes policy and environments (Ottawa Charter)',
      why: 'Education alone cannot fix the conditions an individual does not control; promotion acts on the wider determinants of health.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'In the 5A’s framework for brief intervention, which step most directly connects the intervention to the patient’s stage of change?',
      options: [
        { id: 'a', text: 'Ask' },
        { id: 'b', text: 'Advise' },
        { id: 'c', text: 'Assess' },
        { id: 'd', text: 'Arrange' },
      ],
      answerId: 'c',
      explanation: 'Assess evaluates the patient’s readiness or willingness to change, which maps directly onto the stage of change and determines whether you plan action or simply raise awareness.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A province introduces a tax on sugary drinks, mandatory front-of-pack food labelling and smoke-free public spaces. This is best classified as:',
      options: [
        { id: 'a', text: 'Health education, because it informs the public' },
        { id: 'b', text: 'Health promotion, because it changes policy and the environment' },
        { id: 'c', text: 'A brief opportunistic intervention' },
        { id: 'd', text: 'Secondary prevention through screening' },
      ],
      answerId: 'b',
      explanation: 'These are Ottawa Charter actions — healthy public policy and supportive environments — which go beyond informing individuals and so are health promotion rather than mere health education.',
      tests: 'treatment',
    },
  ],
};

export default ifhBriefCounselling5a;
