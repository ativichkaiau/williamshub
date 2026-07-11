import type { Lecture } from '../../lib/types';

export const ersDistributionsConfidenceIntervals: Lecture = {
  id: 'ers-distributions-confidence-intervals',
  title: 'Distributions & Confidence Intervals',
  system: 'research',
  source: 'L6 — Basic Biostatistics',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Research' },
    { kind: 'lecture', label: 'L6 Biostatistics' },
    { kind: 'mechanism', label: 'CLT · sampling variation' },
    { kind: 'exam', label: '95% CI · precision' },
  ],

  highYield: [
    '**A sample is one draw from a population; estimates vary from sample to sample.** The **standard error (SE = SD/√n)** quantifies that sampling variation of the estimate — smaller with larger n.',
    '**Central Limit Theorem:** the distribution of **sample means** is approximately **normal** for large n, whatever the shape of the raw data. This justifies using normal-based (parametric) methods on means in large samples.',
    '**A confidence interval is the estimate ± a margin** (~**estimate ± 1.96 × SE** for a 95% CI of a mean). A **95% CI** means that if you repeated the study many times, ~95% of such intervals would contain the true value — it is about the **procedure**, not a 95% probability for this one interval.',
    '**Precision vs significance.** A **narrow CI = precise** (large n, low variability); a **wide CI = imprecise** (small/under-powered). A CI that **crosses the null** (1 for ratios, 0 for differences) is **non-significant** — but a wide CI around “no difference” means the study could not detect one, not that none exists.',
    '**CI beats a bare p-value:** it shows both **direction/size** and **uncertainty**, so you can judge whether the plausible range includes clinically important effects.',
  ],

  mechanism: {
    title: 'Sample → sampling variation → interval estimate',
    steps: [
      { id: 's1', label: 'One sample gives a point estimate that varies' },
      { id: 's2', label: 'SE = SD/√n measures that sampling variation', emphasis: 'key' },
      { id: 's3', label: 'CLT: means are ~normal in large samples' },
      { id: 's4', label: '95% CI ≈ estimate ± 1.96 × SE', emphasis: 'key' },
      { id: 's5', label: 'CI crossing the null → non-significant', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Larger n → smaller SE → narrower CI', mechanism: 'SE = SD/√n falls as n grows', significance: 'key' },
    { sign: 'CI crossing 1 (ratio) or 0 (difference) → non-significant', mechanism: 'The null value is plausible', significance: 'key' },
    { sign: 'Wide CI = imprecise / under-powered', mechanism: 'Few subjects or high variability', significance: 'supportive' },
    { sign: 'CLT makes sample means ~normal', mechanism: 'Averaging washes out non-normal shape as n grows', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'RR 1.8 (95% CI 1.3–2.4)', meaning: 'Statistically significant harm — CI excludes 1' },
    { clue: 'OR 2.0 (95% CI 0.7–5.6)', meaning: 'Non-significant — CI crosses 1; possibly under-powered' },
    { clue: 'Mean difference −0.2 kg (95% CI −4.0 to 3.6)', meaning: 'Non-significant and imprecise — cannot exclude meaningful effects' },
    { clue: 'A study quadruples its sample size', meaning: 'SE halves (√4) → the CI narrows, improving precision' },
  ],

  treatment: [
    { logic: 'Report and read the CI', detail: 'Prefer the effect estimate with its 95% CI over a bare p-value; judge significance (does it cross the null?) and clinical importance (does the range include worthwhile effects?).' },
  ],

  mnemonics: [
    { hook: '95% CI ≈ estimate ± 1.96 × SE', expansion: ['SE = SD/√n', 'Narrow = precise, wide = imprecise'] },
    { hook: 'CI crosses the null → Not significant', expansion: ['1 for ratios, 0 for differences'] },
  ],

  traps: [
    {
      questionCategory: 'Interpreting a wide non-significant CI',
      wrongInstinct: 'A non-significant result with a wide CI proves there is no difference',
      rightAnswer: 'A wide CI crossing the null means the study was imprecise/under-powered — “not proven”, not “no effect”',
      why: 'Absence of statistical significance is not evidence of no effect; a wide interval still admits clinically important differences.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A trial reports a relative risk of 0.85 with a 95% confidence interval of 0.72 to 1.01. The result is:',
      options: [
        { id: 'a', text: 'Statistically significant benefit' },
        { id: 'b', text: 'Not statistically significant (CI crosses 1)' },
        { id: 'c', text: 'Statistically significant harm' },
        { id: 'd', text: 'Proof of no effect' },
      ],
      answerId: 'b',
      explanation: 'The 95% CI (0.72–1.01) includes 1, so the result is not statistically significant at the 5% level, although it trends toward benefit.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Quadrupling a study’s sample size (all else equal) will change the width of the confidence interval by approximately a factor of:',
      options: [
        { id: 'a', text: '4 (four times as wide)' },
        { id: 'b', text: '2 (twice as wide)' },
        { id: 'c', text: '1/2 (half as wide)' },
        { id: 'd', text: '1/4 (a quarter as wide)' },
      ],
      answerId: 'c',
      explanation: 'SE = SD/√n, so quadrupling n divides the SE (and the CI width) by √4 = 2 — the interval becomes half as wide.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'The most accurate interpretation of a 95% confidence interval is that:',
      options: [
        { id: 'a', text: 'There is a 95% probability the true value lies in this specific interval' },
        { id: 'b', text: '95% of the data fall within the interval' },
        { id: 'c', text: 'If the study were repeated many times, ~95% of such intervals would contain the true value' },
        { id: 'd', text: 'The p-value is 0.95' },
      ],
      answerId: 'c',
      explanation: 'A confidence interval is a property of the procedure: over many repetitions, about 95% of the constructed intervals would capture the true parameter.',
      tests: 'mechanism',
    },
  ],
};

export default ersDistributionsConfidenceIntervals;
