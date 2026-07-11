import type { Lecture } from '../../lib/types';

export const ersStatisticalTests: Lecture = {
  id: 'ers-statistical-tests',
  title: 'Statistical Tests & Sample Size',
  system: 'research',
  source: 'L7 — Statistical Tests & Sample Size',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Research' },
    { kind: 'lecture', label: 'L7 Statistical Tests' },
    { kind: 'mechanism', label: 'Test selection' },
    { kind: 'exam', label: 't-test · χ² · ANOVA · α/β' },
  ],

  highYield: [
    '**Pick the test from three questions:** (1) outcome **data type** (numerical vs categorical), (2) **how many groups** (2 vs > 2), (3) **independent vs paired**, then check **normality**. Get these right and the test follows.',
    '**Numerical, 2 groups.** Independent + normal → **independent (two-sample) t-test**; independent + non-normal → **Mann-Whitney (rank-sum)**. Paired + normal → **paired t-test**; paired + non-normal → **Wilcoxon signed-rank**.',
    '**Numerical, > 2 groups → ANOVA** (one-way) if normal, **Kruskal-Wallis** if not. **Categorical outcome → chi-square** test; if any **expected cell < 5** (small sample) use **Fisher’s exact**. Correlation: **Pearson** (normal) vs **Spearman** (non-normal/ordinal).',
    '**Hypothesis testing.** Assume the **null (H₀: no difference)**; the **p-value** is the probability of data this extreme **if H₀ is true**. **p < α (usually 0.05)** → reject H₀. p is **not** the probability the null is true, nor the size/importance of the effect.',
    '**Two errors, and sample size.** **Type I (α)** = false positive (reject a true null); **Type II (β)** = false negative (miss a real effect); **power = 1 − β** (aim ≥ 0.8). **Sample size ↑** when you want smaller α, higher power, a **smaller effect** to detect, or **greater variability (SD)**.',
  ],

  mechanism: {
    title: 'Data type → groups → paired? → normal? → test',
    steps: [
      { id: 's1', label: 'Categorical outcome → chi-square (Fisher if expected < 5)', emphasis: 'key' },
      { id: 's2', label: 'Numerical, 2 independent groups → t-test / Mann-Whitney', emphasis: 'key' },
      { id: 's3', label: 'Numerical, 2 paired → paired t-test / Wilcoxon signed-rank' },
      { id: 's4', label: 'Numerical, > 2 groups → ANOVA / Kruskal-Wallis' },
      { id: 's5', label: 'p < α → reject H₀; power = 1 − β drives sample size', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Expected cell < 5 → Fisher’s exact, not chi-square', mechanism: 'Chi-square’s approximation fails with small expected counts', significance: 'key' },
    { sign: 'Paired data → paired t-test / Wilcoxon', mechanism: 'Before–after or matched pairs are not independent', significance: 'key' },
    { sign: 'Power = 1 − β; convention ≥ 0.80', mechanism: 'Probability of detecting a true effect of the specified size', significance: 'key' },
    { sign: 'Smaller effect or larger SD → larger required n', mechanism: 'Subtle or noisy differences need more subjects to detect', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Compare mean birthweight of newborns from smoking vs non-smoking mothers (normal data)', meaning: 'Two independent groups, numerical → independent t-test' },
    { clue: 'Compare a biomarker before and after treatment in the same patients', meaning: 'Paired numerical → paired t-test (or Wilcoxon if skewed)' },
    { clue: 'Cure rate (yes/no) across three drug regimens, large sample', meaning: 'Categorical outcome, > 2 groups → chi-square test' },
    { clue: 'Compare median tumour size across four stages (skewed data)', meaning: '> 2 groups, non-normal → Kruskal-Wallis' },
  ],

  treatment: [
    { logic: 'Choosing the test', detail: 'Numerical + 2 groups → t-test (paired if matched); > 2 → ANOVA; non-normal → the rank-based equivalent; categorical → chi-square (Fisher if sparse).' },
    { logic: 'Powering a study', detail: 'Fix α and power, estimate the smallest clinically important effect and the outcome’s variability, then compute n. Under-powered studies risk Type II errors.' },
  ],

  mnemonics: [
    { hook: 'Type I = “I” falsely cry wolf (α, false positive); Type II = you missII it (β, false negative)', expansion: ['Power = 1 − β', 'Aim α = 0.05, power ≥ 0.80'] },
    { hook: 'Paired? → paired test. > 2 groups? → ANOVA. Not normal? → ranks', expansion: ['Categorical → chi-square (Fisher if expected < 5)'] },
  ],

  traps: [
    {
      questionCategory: 'What a p-value means',
      wrongInstinct: 'p = 0.03 means there is a 3% chance the null hypothesis is true',
      rightAnswer: 'p is the probability of data this extreme IF the null were true — not the probability the null is true',
      why: 'The p-value is computed assuming H₀; it says nothing directly about the probability of H₀ or the size/importance of the effect.',
    },
    {
      questionCategory: 'Independent vs paired',
      wrongInstinct: 'Use an independent t-test for a before-vs-after comparison in the same patients',
      rightAnswer: 'Before/after or matched data are paired → use a paired t-test (or Wilcoxon)',
      why: 'The two measurements are correlated within a person; a paired test accounts for that and is more powerful.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 2×2 table comparing a categorical outcome has an expected count of 3 in one cell. The appropriate test is:',
      options: [
        { id: 'a', text: 'Chi-square test' },
        { id: 'b', text: 'Fisher’s exact test' },
        { id: 'c', text: 'Independent t-test' },
        { id: 'd', text: 'One-way ANOVA' },
      ],
      answerId: 'b',
      explanation: 'When an expected cell count is below 5, the chi-square approximation is unreliable; Fisher’s exact test is used instead.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Increasing which of the following will REDUCE the required sample size for a study?',
      options: [
        { id: 'a', text: 'The desired power' },
        { id: 'b', text: 'The outcome’s variability (SD)' },
        { id: 'c', text: 'The size of the effect you wish to detect' },
        { id: 'd', text: 'The desired confidence (smaller α)' },
      ],
      answerId: 'c',
      explanation: 'A larger effect is easier to detect, so fewer subjects are needed. Higher power, greater variability, or a smaller α all increase the required sample size.',
      tests: 'mechanism',
    },
  ],
};

export default ersStatisticalTests;
