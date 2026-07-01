import type { Lecture } from '../../lib/types';
import { HYPOTHESIS_ERRORS } from '../../lib/figures';

export const inferentialStatsPValue: Lecture = {
  id: 'inferential-stats-p-value',
  title: 'Inferential Statistics: CIs, p-values & Choosing a Test',
  system: 'research',
  source: 'L6 — Basic Statistics',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Research' },
    { kind: 'lecture', label: 'L6 Basic Statistics' },
    { kind: 'mechanism', label: 'Estimation & testing' },
    { kind: 'exam', label: 'p-value · test choice' },
  ],

  highYield: [
    '**Inference = generalise from sample → population.** Two tools: **estimation** (a point estimate + a **confidence interval**) and **hypothesis testing** (the **p-value**). The sample *statistic* estimates the population *parameter*.',
    '**Confidence interval (CI).** A **95% CI = mean ± 1.96 × SE** — the range that, on repeated sampling, would contain the true parameter 95% of the time. A narrower CI = more precise (larger n → smaller SE). CIs are often more informative than p-values because they show effect *size* and precision.',
    '**p-value** = probability of obtaining data at least as extreme as observed **if H₀ (no effect) were true**. **p < α (usually 0.05) → reject H₀** ("statistically significant"). It is **NOT** the probability that H₀ is true, and **not** the probability the result was chance.',
    '**Two errors.** **Type I (α) = false positive** — reject a true H₀ ("cry wolf"). **Type II (β) = false negative** — miss a real effect. **Power = 1 − β** = the chance of detecting a true effect; it rises with larger sample size and larger effect. A 95% CI that **excludes the null** value corresponds to **p < 0.05**.',
    '**Choosing the test — match to data + groups.** Continuous outcome, 2 groups → **t-test** (paired if same subjects); >2 groups → **ANOVA**; categorical outcome → **chi-square** (or Fisher’s exact if small counts); two continuous variables → **correlation/regression** (Pearson r, −1 to +1). If data are non-normal/ordinal → **non-parametric** equivalents (Mann–Whitney, Wilcoxon, Kruskal–Wallis, Spearman).',
  ],

  mechanism: {
    title: 'Estimate, test, and pick the right test',
    steps: [
      { id: 's1', label: 'Estimate: point estimate + 95% CI (mean ± 1.96·SE)', emphasis: 'key' },
      { id: 's2', label: 'Test: p < α (0.05) → reject H₀', emphasis: 'key' },
      { id: 's3', label: 'Type I (α) = false +; Type II (β) = false −; power = 1−β' },
      { id: 's4', label: 'CI excludes null ⇔ p < 0.05' },
      { id: 's5', label: 'Test choice: 2 groups→t-test, >2→ANOVA, categorical→chi-square, 2 continuous→correlation', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: '95% CI = mean ± 1.96 × SE', mechanism: 'Interval estimate of the parameter; narrower with larger n', significance: 'key' },
    { sign: 'p = P(data this extreme | H₀ true)', mechanism: 'NOT P(H₀ true) and NOT "probability of chance"', significance: 'key' },
    { sign: 'Type I = α (false positive); Type II = β (false negative)', mechanism: 'Power = 1 − β; ↑n reduces β', significance: 'key' },
    { sign: 't-test / ANOVA / chi-square / correlation', mechanism: '2-group / >2-group continuous / categorical / two-continuous', significance: 'key' },
    { sign: 'Non-normal data → Mann–Whitney/Wilcoxon', mechanism: 'Non-parametric tests when assumptions fail', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Compare mean HbA1c between drug and placebo (2 groups, normal)', meaning: 'Independent-samples t-test' },
    { clue: 'Compare mean BP across 3 diets', meaning: 'One-way ANOVA (>2 groups)' },
    { clue: 'Association between smoking (yes/no) and disease (yes/no)', meaning: 'Chi-square test' },
    { clue: '95% CI for a risk ratio is 0.8–1.4', meaning: 'Includes 1 (the null) → not statistically significant (p ≥ 0.05)' },
    { clue: 'Two skewed continuous variables', meaning: 'Spearman correlation (non-parametric)' },
  ],

  treatment: [
    { logic: 'Best practice', detail: 'Pre-specify α and the test; report effect size + 95% CI, not just "p<0.05"; power the study (adequate n) to avoid Type II error. Statistical significance ≠ clinical importance.' },
  ],

  mnemonics: [
    { hook: 'Type I = "false alarm" (α); Type II = "missed it" (β)', expansion: ['Power = 1 − β; both rise with sample size done right'] },
    { hook: 'CI crosses the null → not significant', expansion: ['CI includes 1 (ratio) or 0 (difference) ⇔ p ≥ 0.05'] },
  ],

  traps: [
    {
      questionCategory: 'Interpreting the p-value',
      wrongInstinct: 'p = 0.03 means there is a 3% chance the null hypothesis is true',
      rightAnswer: 'p = 0.03 means: IF H₀ were true, there’s a 3% chance of data this extreme — it says nothing directly about the probability H₀ is true',
      why: 'The p-value is conditional on H₀ being true; it is not the posterior probability of H₀. Misreading this is the single most common stats error.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 95% confidence interval for a mean difference is −2 to +6. What can you conclude at α = 0.05?',
      options: [
        { id: 'a', text: 'The difference is statistically significant' },
        { id: 'b', text: 'The result is not statistically significant, because the interval includes 0' },
        { id: 'c', text: 'A Type I error has occurred' },
        { id: 'd', text: 'The sample size was too large' },
      ],
      answerId: 'b',
      explanation: 'The CI for a difference includes the null value 0, so p ≥ 0.05 — not statistically significant. (For a ratio, the null value is 1.)',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'To compare the mean blood pressure across three different treatment groups, the appropriate test is:',
      options: [
        { id: 'a', text: 'Chi-square test' },
        { id: 'b', text: 'Independent t-test' },
        { id: 'c', text: 'One-way ANOVA' },
        { id: 'd', text: 'Pearson correlation' },
      ],
      answerId: 'c',
      explanation: 'A continuous outcome across >2 groups → ANOVA. A t-test handles only 2 groups; chi-square is for categorical data; correlation is for two continuous variables.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Type I / Type II error & the p-value', svg: HYPOTHESIS_ERRORS, caption: 'Type I (α) = false positive; Type II (β) = false negative; power = 1−β. A 95% CI excluding the null ⇔ p < 0.05.' },
  ],
};

export default inferentialStatsPValue;
