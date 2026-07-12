import type { Lecture } from '../../lib/types';

export const ifhFamilyAssessmentTools: Lecture = {
  id: 'ifh-family-assessment-tools',
  title: 'Family Assessment Tools',
  system: 'community',
  source: 'L3 — Family Assessment Tools & Basic Health Data',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Family Health' },
    { kind: 'lecture', label: 'L3 Family Assessment Tools' },
    { kind: 'investigation', label: 'Family APGAR · SCREEM' },
    { kind: 'exam', label: 'Family circle · Life-cycle stage' },
  ],

  highYield: [
    '**Family APGAR** is a 5-item screen of a member’s *satisfaction* with family function: **A**daptation, **P**artnership, **G**rowth, **A**ffection, **R**esolve. Each item scores 0–2, total 0–10 (roughly 7–10 highly functional, 4–6 moderate, 0–3 severe dysfunction). It measures **perception**, not objective fact.',
    '**SCREEM** inventories a family’s **resources and liabilities** for coping: **S**ocial, **C**ultural, **R**eligious, **E**conomic, **E**ducational, **M**edical. It shows where support exists and where it is missing — the practical complement to the genogram.',
    '**Family life-cycle stage** locates the family within Duvall’s stages so you can anticipate the developmental tasks and typical stressors ahead — the direct link to [[ifh-family-life-cycle]].',
    '**The family circle** is a quick projective map: the patient draws circles for members, where **size = importance/power** and **distance = closeness**. It is a fast subjective picture of bonds — pairing well with the [[ifh-genogram]].',
    '**When to assess the family:** chronic or serious illness, poor adherence, frequent attendance with vague symptoms, psychosocial problems, life-cycle transitions, or when a relative is the caregiver. Structure shapes care — see [[ifh-family-definitions-types]] and [[ifh-family-health-impact]].',
  ],

  mechanism: {
    title: 'Trigger to assess → pick a tool → gather data → read function & resources → act',
    steps: [
      { id: 's1', label: 'Recognise a trigger (chronic illness, poor adherence, psychosocial issue)', emphasis: 'key' },
      { id: 's2', label: 'Screen function with the Family APGAR (5 items, 0–10)', emphasis: 'key' },
      { id: 's3', label: 'Inventory resources with SCREEM (Social → Medical)' },
      { id: 's4', label: 'Locate the family life-cycle stage; map bonds with a family circle / genogram' },
      { id: 's5', label: 'Use findings to mobilise support and tailor the plan', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Family APGAR = Adaptation, Partnership, Growth, Affection, Resolve', mechanism: 'Five domains of a member’s satisfaction with family functioning, scored 0–10', significance: 'key' },
    { sign: 'A low APGAR score signals perceived family dysfunction', mechanism: 'It measures perception, not objective reality — a screen, not a diagnosis', significance: 'key' },
    { sign: 'SCREEM catalogues a family’s resources and liabilities', mechanism: 'Social, Cultural, Religious, Economic, Educational and Medical assets for coping', significance: 'supportive' },
    { sign: 'The family circle maps closeness and power subjectively', mechanism: 'Circle size = importance/power, distance from self = emotional closeness', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A patient scores 3/10 on the Family APGAR', meaning: 'Severe perceived family dysfunction → explore support and consider a family conference' },
    { clue: 'A family with a strong faith community but no income and poor access to care', meaning: 'On SCREEM: rich Religious/Social resource, deficient Economic and Medical resource' },
    { clue: 'A teenager answers “hardly ever” to feeling loved and supported at home', meaning: 'Low Affection/Partnership on the APGAR — a psychosocial red flag' },
    { clue: 'You want a fast bedside picture of who matters most to the patient', meaning: 'Use the family circle (or a genogram) rather than a long questionnaire' },
  ],

  treatment: [
    { logic: 'Match the tool to the question', detail: 'Family APGAR for a quick functional screen, SCREEM for resources, life-cycle stage for anticipated tasks, family circle/genogram for relationships.' },
    { logic: 'Treat scores as a conversation-starter', detail: 'A low APGAR opens dialogue and may prompt a family meeting — it is not a verdict on the family.' },
  ],

  mnemonics: [
    { hook: 'Family APGAR = A-P-G-A-R', expansion: ['Adaptation', 'Partnership', 'Growth', 'Affection', 'Resolve'] },
    { hook: 'SCREEM for resources', expansion: ['Social', 'Cultural', 'Religious', 'Economic', 'Educational', 'Medical'] },
  ],

  traps: [
    {
      questionCategory: 'What the Family APGAR measures',
      wrongInstinct: 'The Family APGAR objectively grades how healthy a family is',
      rightAnswer: 'It captures one member’s subjective satisfaction with family function — a screening perception',
      why: 'Two members can score the same family very differently; the tool opens inquiry rather than diagnosing dysfunction.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'In the Family APGAR, the letter “P” stands for…',
      options: [
        { id: 'a', text: 'Partnership' },
        { id: 'b', text: 'Parenting' },
        { id: 'c', text: 'Prevention' },
        { id: 'd', text: 'Priority' },
      ],
      answerId: 'a',
      explanation: 'The Family APGAR domains are Adaptation, Partnership, Growth, Affection and Resolve — each a facet of a member’s satisfaction with how the family functions.',
      tests: 'lecture',
    },
    {
      id: 'q2',
      stem: 'Which tool is designed to inventory a family’s Social, Cultural, Religious, Economic, Educational and Medical resources?',
      options: [
        { id: 'a', text: 'SCREEM' },
        { id: 'b', text: 'Family APGAR' },
        { id: 'c', text: 'The genogram' },
        { id: 'd', text: 'The Holmes–Rahe scale' },
      ],
      answerId: 'a',
      explanation: 'SCREEM (Social, Cultural, Religious, Economic, Educational, Medical) catalogues a family’s coping resources and liabilities; the APGAR screens function, and the genogram maps structure and relationships.',
      tests: 'investigation',
    },
  ],
};

export default ifhFamilyAssessmentTools;
