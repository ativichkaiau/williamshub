import type { Lecture } from '../../lib/types';

export const ersBiostatistics: Lecture = {
  id: 'ers-biostatistics',
  title: 'Basic Biostatistics: Data & Description',
  system: 'research',
  source: 'L6 — Basic Biostatistics',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Research' },
    { kind: 'lecture', label: 'L6 Biostatistics' },
    { kind: 'mechanism', label: 'Data types' },
    { kind: 'exam', label: 'Mean vs median · SD vs SE' },
  ],

  highYield: [
    '**Data types drive every later choice.** **Categorical:** **nominal** (no order — blood group) and **ordinal** (ordered — pain 0–3). **Numerical (metric):** **discrete** (counts) and **continuous** (weight, BP). The data type decides the summary and the statistical test.',
    '**Summarise the centre and spread appropriately.** **Normally distributed** numerical data → **mean ± SD**. **Skewed** data (or ordinal) → **median (IQR)**, because the mean is dragged by outliers/skew. Categorical → **counts and proportions (%)**.',
    '**Distinguish SD from SE.** **SD** describes the **spread of individuals** in the sample. **SE (= SD/√n)** describes the **precision of the mean** and shrinks as n grows — it is the basis of the **confidence interval**, not a description of the data.',
    '**The normal distribution:** symmetric, mean = median = mode; ~**68% within ±1 SD, ~95% within ±2 SD, ~99.7% within ±3 SD**. Right-skew → **mean > median**; left-skew → **mean < median**.',
    '**Central Limit Theorem:** the distribution of **sample means** approaches normal as **n increases**, even if the raw data are not normal — which is why large-sample mean comparisons can use parametric tests.',
  ],

  mechanism: {
    title: 'Classify the data, then summarise it correctly',
    steps: [
      { id: 's1', label: 'Categorical (nominal / ordinal) vs numerical (discrete / continuous)', emphasis: 'key' },
      { id: 's2', label: 'Numerical + symmetric → mean ± SD' },
      { id: 's3', label: 'Numerical + skewed, or ordinal → median (IQR)', emphasis: 'key' },
      { id: 's4', label: 'Categorical → counts and proportions (%)' },
      { id: 's5', label: 'SE = SD/√n → precision of the mean → CI', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Skewed data → report median (IQR), not mean ± SD', mechanism: 'Outliers/skew distort the mean but not the median', significance: 'key' },
    { sign: 'SD describes individuals; SE describes the mean', mechanism: 'SE = SD/√n shrinks with sample size', significance: 'key' },
    { sign: 'Right-skew → mean > median', mechanism: 'The long right tail pulls the mean upward', significance: 'supportive' },
    { sign: '~95% of a normal distribution lies within ±2 SD', mechanism: 'Fixed property of the Gaussian curve', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Hospital length of stay: a few very long stayers pull the average up', meaning: 'Right-skewed → summarise with median (IQR)' },
    { clue: 'Blood group distribution across a clinic', meaning: 'Nominal categorical → counts and proportions' },
    { clue: 'Reporting how precisely the sample estimates the true mean', meaning: 'Use the standard error (SE), not the SD' },
    { clue: 'Systolic BP in a healthy population', meaning: 'Continuous, ~normal → mean ± SD' },
  ],

  treatment: [
    { logic: 'Pick the summary from the data type + shape', detail: 'Symmetric numerical → mean ± SD; skewed or ordinal → median (IQR); categorical → n (%). Check a histogram before assuming normality.' },
  ],

  mnemonics: [
    { hook: 'SD = spreaD of Data; SE = precision of the Estimate', expansion: ['SE = SD/√n → shrinks as n grows', 'CIs are built from SE'] },
    { hook: 'Skew follows the tail: mean chases the long tail', expansion: ['Right-skew → mean > median', 'Left-skew → mean < median'] },
  ],

  traps: [
    {
      questionCategory: 'SD vs SE',
      wrongInstinct: 'A small standard error means the individual values are tightly clustered',
      rightAnswer: 'SE reflects precision of the mean (falls with n); SD reflects spread of individuals',
      why: 'A large study can have a tiny SE yet wide individual variability (large SD) — they answer different questions.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A markedly right-skewed variable (hospital length of stay) is best summarised by:',
      options: [
        { id: 'a', text: 'Mean ± standard deviation' },
        { id: 'b', text: 'Median with interquartile range' },
        { id: 'c', text: 'Mode only' },
        { id: 'd', text: 'Geometric standard error' },
      ],
      answerId: 'b',
      explanation: 'For skewed data the median (IQR) resists outliers and represents the typical value; the mean ± SD is distorted by the long tail.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'As the sample size increases, the standard error of the mean:',
      options: [
        { id: 'a', text: 'Increases' },
        { id: 'b', text: 'Decreases' },
        { id: 'c', text: 'Equals the standard deviation' },
        { id: 'd', text: 'Is unaffected by n' },
      ],
      answerId: 'b',
      explanation: 'SE = SD/√n, so a larger n shrinks the standard error, narrowing the confidence interval and improving precision of the estimated mean.',
      tests: 'mechanism',
    },
  ],
};

export default ersBiostatistics;
