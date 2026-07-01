import type { Lecture } from '../../lib/types';

export const hypothesisObjectives: Lecture = {
  id: 'hypothesis-objectives',
  title: 'Hypotheses & Objectives: H₀ vs H₁ and SMART Aims',
  system: 'research',
  source: 'L2 — Introduction to Research',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Research' },
    { kind: 'lecture', label: 'L2 Intro to Research' },
    { kind: 'mechanism', label: 'H₀/H₁ · SMART' },
    { kind: 'exam', label: 'Null vs alternative' },
  ],

  highYield: [
    '**Hypothesis = a testable, falsifiable prediction** derived from the research question. Only *comparative* and *relational/causal* questions need a hypothesis; purely *descriptive* questions (prevalence) usually do not.',
    '**Null hypothesis (H₀) = "no difference / no association."** It is the default we try to *reject*. **Alternative hypothesis (H₁ or Hₐ) = "there is a difference / association."** Statistics never "prove" H₁; they quantify evidence *against* H₀ (reject H₀ ⇒ support H₁; fail to reject ⇒ insufficient evidence).',
    '**Directional (one-tailed) vs non-directional (two-tailed).** H₁ can predict a direction ("drug lowers BP") or merely a difference ("drug changes BP"). Two-tailed is the conservative default unless there is strong prior justification for one direction.',
    '**Objectives operationalise the question into doable steps.** Hierarchy: **purpose/aim** (broad) → **objectives** (specific, measurable steps) → tied to **outcome variables**. Objectives should be **SMART**: Specific, Measurable, Achievable, Relevant, Time-bound.',
    '**Bloom’s taxonomy verbs** make objectives measurable: use action verbs ("determine, compare, measure, evaluate") not vague ones ("understand, know, appreciate"). Each objective should map to a variable you will actually measure and analyse.',
  ],

  mechanism: {
    title: 'Question → hypothesis → objectives → variables',
    steps: [
      { id: 's1', label: 'State H₀ (no effect) and H₁ (effect) explicitly', emphasis: 'key' },
      { id: 's2', label: 'Decide one- vs two-tailed (default two-tailed)' },
      { id: 's3', label: 'Write the aim (broad) then SMART objectives (specific)', emphasis: 'key' },
      { id: 's4', label: 'Use measurable Bloom’s action verbs' },
      { id: 's5', label: 'Each objective → an outcome variable → a statistical test' },
    ],
  },

  examFindings: [
    { sign: 'H₀ = no difference / no association', mechanism: 'The hypothesis we attempt to reject with data', significance: 'key' },
    { sign: 'H₁ / Hₐ = there is a difference', mechanism: 'Supported *indirectly* by rejecting H₀', significance: 'key' },
    { sign: 'Objective uses "understand" or "know"', mechanism: 'Not measurable — rewrite with a Bloom’s action verb', significance: 'supportive' },
    { sign: 'SMART objective', mechanism: 'Specific, Measurable, Achievable, Relevant, Time-bound', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'p-value lets you reject H₀', meaning: 'Evidence supports the alternative hypothesis (an effect exists)' },
    { clue: '"To understand the role of exercise in diabetes"', meaning: 'Not SMART — rewrite: "To determine the effect of 12 weeks of exercise on HbA1c in T2DM adults"' },
    { clue: 'Descriptive prevalence study', meaning: 'Often needs an objective but no formal H₀/H₁' },
  ],

  treatment: [
    { logic: 'Best practice', detail: 'Always state H₀ and H₁ before collecting data (pre-specification prevents p-hacking). Convert each objective into a measurable variable and a planned test.' },
  ],

  mnemonics: [
    { hook: 'Null = "No" difference; Alternative = "A" difference', expansion: ['Reject H₀ ⇒ support H₁'] },
    { hook: 'Objectives = SMART', expansion: ['Specific, Measurable, Achievable, Relevant, Time-bound'] },
  ],

  traps: [
    {
      questionCategory: 'What does a significant p-value prove?',
      wrongInstinct: 'It proves the alternative hypothesis is true',
      rightAnswer: 'It gives evidence to *reject the null*; it never "proves" H₁ and cannot prove H₀ either',
      why: 'Statistics quantify evidence against H₀. "Fail to reject" ≠ "H₀ is true"; "reject" ≠ "H₁ proven."',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The null hypothesis (H₀) in a two-group drug trial states that:',
      options: [
        { id: 'a', text: 'The drug is superior to placebo' },
        { id: 'b', text: 'There is no difference between drug and placebo' },
        { id: 'c', text: 'The drug is harmful' },
        { id: 'd', text: 'The sample size is adequate' },
      ],
      answerId: 'b',
      explanation: 'H₀ is the "no difference/no effect" default that we try to reject. The alternative (H₁) states there IS a difference.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which objective is written in SMART, measurable form?',
      options: [
        { id: 'a', text: 'To understand hypertension in students' },
        { id: 'b', text: 'To appreciate the value of screening' },
        { id: 'c', text: 'To determine the prevalence of hypertension among Year-1 students in 2026' },
        { id: 'd', text: 'To know more about blood pressure' },
      ],
      answerId: 'c',
      explanation: 'Only (c) is specific, measurable (prevalence), and time-bound. "Understand/appreciate/know" are not measurable Bloom’s verbs.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default hypothesisObjectives;
