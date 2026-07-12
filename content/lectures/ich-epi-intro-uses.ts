import type { Lecture } from '../../lib/types';

export const ichEpiIntroUses: Lecture = {
  id: 'ich-epi-intro-uses',
  title: 'Principles & Uses of Epidemiology',
  system: 'community',
  source: 'L10 — Epidemiological Principles',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Community Health' },
    { kind: 'lecture', label: 'L10 Epidemiological Principles' },
    { kind: 'mechanism', label: 'Distribution · Determinants' },
    { kind: 'exam', label: 'Denominator · Uses of epi' },
  ],

  highYield: [
    '**Epidemiology = the study of the distribution and determinants of health-related states in specified populations, and the application of this to control health problems.** Three ideas: **distribution** (descriptive — person/place/time), **determinants** (analytic — causes), and **application** (action).',
    '**Two founding premises:** (1) disease does **not** occur at random, and (2) it has **causal and preventive factors** that can be identified by systematic study. This is what justifies looking for patterns at all.',
    '**The uses of epidemiology — count, cause, control, plan, evaluate:** community diagnosis (measure health status), search for **causes/risk factors**, disease **surveillance & control**, **planning** services, and **evaluating** interventions — plus completing the natural history and picture of disease.',
    '**The unit of study is the population, and every measure needs a denominator.** A raw count of cases is uninterpretable until divided by the **population at risk**; epidemiology works by **comparing groups**. See descriptive methods in [[ich-descriptive-epi-surveillance]] and analytic measures in [[ich-measures-of-association]].',
    '**Descriptive epidemiology generates hypotheses; analytic epidemiology tests them.** You first describe who, where, when, then ask why/how by comparing exposed vs unexposed — the bridge to [[ich-epi-study-designs]].',
  ],

  mechanism: {
    title: 'The epidemiologic approach: count → define population → describe → compare → act',
    steps: [
      { id: 's1', label: 'Count the cases (the numerator)' },
      { id: 's2', label: 'Define the population at risk (the denominator)', emphasis: 'key' },
      { id: 's3', label: 'Describe by person, place, and time' },
      { id: 's4', label: 'Compare groups to find determinants', emphasis: 'key' },
      { id: 's5', label: 'Apply the findings to control and prevention' },
    ],
  },

  examFindings: [
    { sign: 'Epidemiology always needs a denominator', mechanism: 'A count of cases means nothing without the population at risk it arose from', significance: 'key' },
    { sign: 'Disease is not random — patterns reveal causes', mechanism: 'Clustering in person/place/time points to underlying determinants', significance: 'key' },
    { sign: 'The population, not the individual, is the unit', mechanism: 'Rates and comparisons describe groups; clinical medicine treats one patient', significance: 'supportive' },
    { sign: 'Association is the start, not proof of causation', mechanism: 'Descriptive patterns raise hypotheses that analytic studies must test', significance: 'supportive' },
  ],

  investigations: [
    { clue: '“50 cases of diarrhoea were reported in town A”', meaning: 'Uninterpretable alone — you need the population at risk to make a rate and compare' },
    { clue: 'Cases cluster around one neighbourhood well', meaning: 'A place pattern → hypothesis of a common water source' },
    { clue: 'A characteristic is far more common among the sick than the well', meaning: 'A candidate determinant/risk factor to test analytically' },
    { clue: 'Health office must decide where to place a new clinic', meaning: 'Use epidemiology for community diagnosis and service planning' },
  ],

  treatment: [
    { logic: 'Turn data into action', detail: 'Use epidemiology to make a community diagnosis, rank health problems, target interventions, and then evaluate whether they worked.' },
  ],

  mnemonics: [
    { hook: 'Epi = Distribution + Determinants + application', expansion: ['Distribution = descriptive (person/place/time)', 'Determinants = analytic (causes)', 'Application = control & prevention'] },
    { hook: 'Uses of epi: Count, Cause, Control, Plan, Evaluate', expansion: ['Count = community diagnosis', 'Cause = risk factors', 'Control = surveillance', 'Plan = services', 'Evaluate = interventions'] },
  ],

  traps: [
    {
      questionCategory: 'Numerator vs rate',
      wrongInstinct: 'The city with more reported cases must have the higher risk',
      rightAnswer: 'You cannot compare without denominators — the city may simply have more people',
      why: 'Epidemiology compares rates (cases ÷ population at risk), never raw counts.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'What single element most fundamentally distinguishes an epidemiological measure from a simple clinical case count?',
      options: [
        { id: 'a', text: 'A laboratory-confirmed diagnosis' },
        { id: 'b', text: 'A defined denominator (population at risk)' },
        { id: 'c', text: 'A named treating physician' },
        { id: 'd', text: 'A hospital admission record' },
      ],
      answerId: 'b',
      explanation: 'Epidemiology studies populations, so every measure divides cases by the population at risk. Without that denominator you have a count, not a rate, and cannot compare groups.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which activity is NOT one of the classic uses of epidemiology?',
      options: [
        { id: 'a', text: 'Making a community diagnosis of health status' },
        { id: 'b', text: 'Identifying causes and risk factors of disease' },
        { id: 'c', text: 'Prescribing an individualised drug dose for one patient' },
        { id: 'd', text: 'Evaluating whether a health programme worked' },
      ],
      answerId: 'c',
      explanation: 'Epidemiology serves population-level ends — community diagnosis, finding causes, surveillance and control, planning, and evaluation. Individual drug dosing is a clinical task, not an epidemiological use.',
      tests: 'exam',
    },
  ],
};

export default ichEpiIntroUses;
