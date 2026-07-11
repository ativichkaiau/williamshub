import type { Lecture } from '../../lib/types';

export const ersSampleSizePower: Lecture = {
  id: 'ers-sample-size-power',
  title: 'Sample Size, Power & Errors',
  system: 'research',
  source: 'L7 — Statistical Tests & Sample Size',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Research' },
    { kind: 'lecture', label: 'L7 Statistical Tests' },
    { kind: 'mechanism', label: 'α · β · power' },
    { kind: 'exam', label: 'Type I/II · powering a study' },
  ],

  highYield: [
    '**Two errors of hypothesis testing.** **Type I (α)** = **false positive** — rejecting a true null (declaring an effect that isn’t there); set by the significance level (usually **0.05**). **Type II (β)** = **false negative** — failing to detect a real effect.',
    '**Power = 1 − β** = the probability of detecting a true effect of the specified size. Convention is **power ≥ 0.80** (β ≤ 0.20). An **under-powered** study that finds “no difference” risks a **Type II error**, not proof of no effect.',
    '**Sample size increases when you demand:** smaller **α** (more stringent), higher **power**, a **smaller effect size** to detect, or when the outcome has **greater variability (SD)**. Detecting a subtle difference in a noisy outcome needs many subjects.',
    '**Calculate sample size a priori** from the primary outcome: its expected effect size, variability, chosen α and power. Also inflate for expected **dropout/loss to follow-up**.',
    '**Beware misuse:** a large n can make a **trivial** effect statistically significant (significance ≠ importance); a tiny n can miss a real one. **Post-hoc “observed power”** is uninformative — power is a design concept.',
  ],

  mechanism: {
    title: 'Fix the errors → compute n → protect against dropout',
    steps: [
      { id: 's1', label: 'Set α (Type I) and power = 1 − β (Type II)', emphasis: 'key' },
      { id: 's2', label: 'Specify the primary outcome’s effect size + variability', emphasis: 'key' },
      { id: 's3', label: 'Smaller effect / larger SD / higher power → larger n', emphasis: 'key' },
      { id: 's4', label: 'Inflate n for expected dropout' },
      { id: 's5', label: 'Under-powered “no difference” = possible Type II error' },
    ],
  },

  examFindings: [
    { sign: 'Type I (α) = false positive; Type II (β) = false negative', mechanism: 'Reject true null vs miss a real effect', significance: 'key' },
    { sign: 'Power = 1 − β; aim ≥ 0.80', mechanism: 'Chance of detecting the specified true effect', significance: 'key' },
    { sign: 'Smaller effect or larger SD → larger required n', mechanism: 'Subtle/noisy differences are harder to detect', significance: 'key' },
    { sign: 'Significant ≠ important (large n)', mechanism: 'Big samples detect trivial effects', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A small trial reports “no significant difference”', meaning: 'Possibly under-powered (Type II) — check the CI width, not just the p-value' },
    { clue: 'Investigators want to detect a smaller minimally-important difference', meaning: 'Required sample size increases' },
    { clue: 'The outcome has a large standard deviation', meaning: 'More subjects are needed to detect the same effect' },
    { clue: 'Expected 20% dropout in a 2-year study', meaning: 'Inflate the calculated sample size to preserve power' },
  ],

  treatment: [
    { logic: 'Power the study for its primary outcome', detail: 'Choose α (0.05) and power (≥0.80), estimate the smallest clinically important effect and its variability, compute n, then add for dropout.' },
  ],

  mnemonics: [
    { hook: 'Type I = “I” see something that’s not there (α, false +); Type II = “II” missed it (β, false −)', expansion: ['Power = 1 − β', 'Reject the null you shouldn’t = Type I'] },
    { hook: 'Bigger n for: smaller α, higher power, smaller effect, larger SD', expansion: ['Subtle + noisy = many subjects'] },
  ],

  traps: [
    {
      questionCategory: 'Interpreting a negative small trial',
      wrongInstinct: 'A non-significant result in a small study proves the treatments are equivalent',
      rightAnswer: 'It may reflect inadequate power (Type II error); absence of evidence is not evidence of absence',
      why: 'An under-powered study can miss a real effect; only a study designed and sized for the difference (or a non-inferiority design) can support equivalence.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A study concludes a drug “has no effect” but enrolled only 20 patients. The most likely explanation is a:',
      options: [
        { id: 'a', text: 'Type I error' },
        { id: 'b', text: 'Type II error from low power' },
        { id: 'c', text: 'Confounding' },
        { id: 'd', text: 'Selection bias' },
      ],
      answerId: 'b',
      explanation: 'A small sample gives low power, so a genuine effect can be missed (Type II / false negative). “No significant difference” is not proof of no effect.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which change will DECREASE the required sample size for a trial?',
      options: [
        { id: 'a', text: 'Aiming to detect a smaller effect' },
        { id: 'b', text: 'Increasing the desired power to 0.90' },
        { id: 'c', text: 'A larger outcome variability (SD)' },
        { id: 'd', text: 'Accepting a larger, clinically important effect as the target' },
      ],
      answerId: 'd',
      explanation: 'Larger target effects are easier to detect, so fewer subjects are needed. Smaller effects, higher power, and greater variability all increase the required sample size.',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'Setting the significance level at α = 0.05 defines the acceptable probability of a:',
      options: [
        { id: 'a', text: 'Type II error' },
        { id: 'b', text: 'False negative' },
        { id: 'c', text: 'Type I error (false positive)' },
        { id: 'd', text: 'Loss to follow-up' },
      ],
      answerId: 'c',
      explanation: 'α is the probability of a Type I error — rejecting a true null hypothesis (a false-positive conclusion).',
      tests: 'exam',
    },
  ],
};

export default ersSampleSizePower;
