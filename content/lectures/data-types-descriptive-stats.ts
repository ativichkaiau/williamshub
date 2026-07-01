import type { Lecture } from '../../lib/types';

export const dataTypesDescriptiveStats: Lecture = {
  id: 'data-types-descriptive-stats',
  title: 'Data Types & Descriptive Statistics',
  system: 'research',
  source: 'L6 — Basic Statistics',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Research' },
    { kind: 'lecture', label: 'L6 Basic Statistics' },
    { kind: 'mechanism', label: 'Central tendency & spread' },
    { kind: 'exam', label: 'Mean vs median · SD vs IQR' },
  ],

  highYield: [
    '**Data type dictates the summary and the test.** **Numerical (quantitative)**: *continuous* (any value on a scale — weight, BP) or *discrete* (counts — number of children). **Categorical (qualitative)**: *nominal* (unordered — blood group), *ordinal* (ordered — cancer stage, Likert), and *binary/dichotomous* (yes/no).',
    '**Central tendency.** **Mean** (average — uses every value, sensitive to outliers), **median** (50th percentile — robust to outliers/skew), **mode** (most frequent). Choose by distribution: symmetric → mean; skewed → median.',
    '**Spread (variability).** *Parametric:* **variance** and **standard deviation (SD)** = typical distance from the mean; **range**. *Non-parametric:* **interquartile range (IQR = Q3 − Q1)** = middle 50%, robust to outliers. **Standard error (SE) = SD/√n** measures precision of the *mean estimate*, not the spread of individuals.',
    '**Distribution shape.** In a **normal (Gaussian)** distribution mean = median = mode and the **68–95–99.7 rule** holds (±1/±2/±3 SD). **Skew** pulls the mean toward the tail: **right (positive) skew → mean > median > mode**; **left (negative) skew → mean < median < mode**. Outliers/skew are why we prefer median + IQR.',
    '**Match the summary to the data.** Normally distributed continuous data → report **mean ± SD** (or 95% CI). Skewed/ordinal data → report **median (IQR)**. Categorical data → **frequency (%)**. Getting this pairing right is a favourite exam and reviewer point.',
  ],

  mechanism: {
    title: 'Classify data → pick centre + spread',
    steps: [
      { id: 's1', label: 'Numerical (continuous/discrete) vs categorical (nominal/ordinal/binary)', emphasis: 'key' },
      { id: 's2', label: 'Centre: mean (symmetric) vs median (skewed/outliers)', emphasis: 'key' },
      { id: 's3', label: 'Spread: SD/variance (parametric) vs IQR (non-parametric)' },
      { id: 's4', label: 'Shape: normal (mean=median=mode) vs skewed' },
      { id: 's5', label: 'Report: mean±SD · median(IQR) · frequency(%)' },
    ],
  },

  examFindings: [
    { sign: 'Right (positive) skew → mean > median > mode', mechanism: 'Mean dragged toward the long right tail by high outliers', significance: 'key' },
    { sign: 'Normal distribution: mean = median = mode', mechanism: 'Symmetry; 68–95–99.7% within ±1/2/3 SD', significance: 'key' },
    { sign: 'Median (IQR) reported instead of mean (SD)', mechanism: 'Data are skewed/ordinal → robust summary chosen', significance: 'supportive' },
    { sign: 'SE = SD/√n', mechanism: 'Precision of the mean; shrinks as n grows (≠ population spread)', significance: 'supportive' },
    { sign: 'Ordinal data (e.g. Likert 1–5)', mechanism: 'Ordered categories → median/mode, non-parametric tests', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Income data with a few billionaires', meaning: 'Right-skewed → report median (IQR), not mean (SD)' },
    { clue: 'Mean ≈ median ≈ mode, symmetric histogram', meaning: 'Approximately normal → mean ± SD is appropriate' },
    { clue: 'Cancer stage I–IV', meaning: 'Ordinal categorical → summarise with frequency/median, not mean' },
    { clue: 'You need precision of the estimated mean, not spread of people', meaning: 'Use the standard error (SE), not the SD' },
  ],

  treatment: [
    { logic: 'Best practice', detail: 'Always inspect the distribution (histogram) before summarising. Normal → mean ± SD; skewed → median (IQR); categorical → n (%). Never report a mean for ordinal data.' },
  ],

  mnemonics: [
    { hook: 'Skew points where the tail (and the mean) goes', expansion: ['Right skew: mean > median > mode; left skew: reversed'] },
    { hook: '68–95–99.7 = ±1, ±2, ±3 SD', expansion: ['Empirical rule for the normal curve'] },
  ],

  traps: [
    {
      questionCategory: 'SD vs SE',
      wrongInstinct: 'Standard deviation and standard error measure the same thing',
      rightAnswer: 'SD describes spread of individual values; SE (= SD/√n) describes precision of the *mean* and shrinks with larger n',
      why: 'Reporting SE to look "tighter" misrepresents variability. Use SD for describing data, SE/CI for describing the estimate.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A histogram of hospital length-of-stay is strongly right-skewed. The most appropriate summary is:',
      options: [
        { id: 'a', text: 'Mean ± standard deviation' },
        { id: 'b', text: 'Median with interquartile range' },
        { id: 'c', text: 'Mode only' },
        { id: 'd', text: 'Mean ± standard error' },
      ],
      answerId: 'b',
      explanation: 'Skewed data are best summarised by the median (IQR), which is robust to the long tail. The mean would be pulled up by outliers.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which variable is ordinal?',
      options: [
        { id: 'a', text: 'Blood group (A, B, AB, O)' },
        { id: 'b', text: 'Body temperature in °C' },
        { id: 'c', text: 'Cancer stage (I, II, III, IV)' },
        { id: 'd', text: 'Number of siblings' },
      ],
      answerId: 'c',
      explanation: 'Cancer stage has a natural order but unequal/undefined intervals → ordinal. Blood group is nominal; temperature is continuous; number of siblings is discrete numerical.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default dataTypesDescriptiveStats;
