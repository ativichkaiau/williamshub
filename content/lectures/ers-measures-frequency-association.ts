import type { Lecture } from '../../lib/types';

export const ersMeasuresFrequencyAssociation: Lecture = {
  id: 'ers-measures-frequency-association',
  title: 'Measures of Frequency & Association',
  system: 'research',
  source: 'L3 — Measures of Frequency & Association',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Research' },
    { kind: 'lecture', label: 'L3 Measures' },
    { kind: 'mechanism', label: 'Prevalence vs incidence' },
    { kind: 'exam', label: 'RR · OR · RD · NNT' },
  ],

  highYield: [
    '**Frequency: prevalence vs incidence.** **Prevalence** = existing cases / population at a point (or period) — a snapshot of **burden**. **Incidence** = **new** cases; **cumulative incidence (risk)** = new cases / population at risk over a period, while **incidence rate** uses **person-time** as the denominator.',
    '**Prevalence ≈ incidence × duration.** Anything that lengthens survival without cure (better care of a chronic disease) **raises prevalence** even if incidence is unchanged.',
    '**Ratio measures (relative).** **Risk Ratio (RR)** = risk in exposed / risk in unexposed (cohort/RCT). **Odds Ratio (OR)** = odds in exposed / odds in unexposed (case-control). **RR/OR = 1** → no association; **> 1** → risk factor; **< 1** → protective.',
    '**Difference measures (absolute).** **Risk Difference (RD)** = risk(exposed) − risk(unexposed) = attributable risk; **NNT = 1/absolute risk reduction**. Absolute measures capture **clinical/public-health impact**; ratios capture **strength of association**.',
    '**Every estimate needs a confidence interval.** A **95% CI** that **crosses 1** for a ratio (or **crosses 0** for a difference) is **not statistically significant**. A narrower CI = more precision (driven by larger sample size).',
  ],

  mechanism: {
    title: 'Count → rate → compare → quantify uncertainty',
    steps: [
      { id: 's1', label: 'Choose frequency: prevalence (existing) vs incidence (new)' },
      { id: 's2', label: 'Denominator: population at risk (risk) vs person-time (rate)', emphasis: 'key' },
      { id: 's3', label: 'Compare groups by ratio (RR/OR) or difference (RD)', emphasis: 'key' },
      { id: 's4', label: 'RR/OR = 1 (or RD = 0) → no association' },
      { id: 's5', label: 'Attach a 95% CI; crossing the null → non-significant', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Prevalence ≈ incidence × duration', mechanism: 'A pool: inflow (incidence) × how long cases persist (duration)', significance: 'key' },
    { sign: 'Cohort/RCT → RR; case-control → OR', mechanism: 'Only forward designs have the denominators for risk', significance: 'key' },
    { sign: 'RD/NNT = absolute impact; RR/OR = strength', mechanism: 'A large RR on a tiny baseline risk can mean a trivial RD', significance: 'key' },
    { sign: '95% CI crossing 1 (ratio) or 0 (difference) → non-significant', mechanism: 'The null value lies within the plausible range', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Number of people currently living with diabetes / total population', meaning: 'Prevalence — burden at a point in time' },
    { clue: 'New MIs over 5 years per 1,000 person-years of follow-up', meaning: 'Incidence rate (person-time denominator)' },
    { clue: 'Risk 2% (drug) vs 4% (placebo)', meaning: 'RR = 0.5, RD = −2%, NNT = 1/0.02 = 50' },
    { clue: 'OR 3.0 with 95% CI 0.8–9.5', meaning: 'Point estimate suggests harm but the CI crosses 1 → not statistically significant' },
  ],

  treatment: [
    { logic: 'Report both relative and absolute', detail: 'A relative measure alone can mislead. Pair RR/OR with RD/NNT so readers see clinical magnitude, not just strength.' },
  ],

  mnemonics: [
    { hook: 'Prevalence = Pool (Incidence × Duration)', expansion: ['Longer survival without cure → bigger pool → higher prevalence'] },
    { hook: 'Ratio crosses 1, Difference crosses 0 → Not significant', expansion: ['Check where the null sits inside the 95% CI'] },
  ],

  traps: [
    {
      questionCategory: 'Relative vs absolute effect',
      wrongInstinct: 'A relative risk reduction of 50% always means a large clinical benefit',
      rightAnswer: 'A 50% RRR on a 2% baseline is only a 1% absolute reduction (NNT = 100)',
      why: 'Relative measures ignore baseline risk; the absolute risk difference and NNT reveal the true magnitude of benefit.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A drug lowers 1-year event risk from 4% to 2%. The number needed to treat (NNT) is:',
      options: [
        { id: 'a', text: '2' },
        { id: 'b', text: '25' },
        { id: 'c', text: '50' },
        { id: 'd', text: '100' },
      ],
      answerId: 'c',
      explanation: 'Absolute risk reduction = 4% − 2% = 2% = 0.02. NNT = 1 / 0.02 = 50 patients treated to prevent one event.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'Improved treatment lets patients with a chronic disease live longer without being cured. With unchanged incidence, the disease’s prevalence will:',
      options: [
        { id: 'a', text: 'Decrease' },
        { id: 'b', text: 'Increase' },
        { id: 'c', text: 'Stay exactly the same' },
        { id: 'd', text: 'Become zero' },
      ],
      answerId: 'b',
      explanation: 'Prevalence ≈ incidence × duration. Longer disease duration enlarges the pool of existing cases, so prevalence rises even though incidence is unchanged.',
      tests: 'mechanism',
    },
  ],
};

export default ersMeasuresFrequencyAssociation;
