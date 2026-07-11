import type { Lecture } from '../../lib/types';

export const ersStandardisationRates: Lecture = {
  id: 'ers-standardisation-rates',
  title: 'Crude, Specific & Standardised Rates',
  system: 'research',
  source: 'L3 — Measures of Frequency & Association',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Research' },
    { kind: 'lecture', label: 'L3 Measures' },
    { kind: 'mechanism', label: 'Age standardisation' },
    { kind: 'exam', label: 'Crude vs standardised · SMR' },
  ],

  highYield: [
    '**Crude rate** = events / total population — simple, but **confounded by population structure** (mainly **age**). Two populations with identical age-specific risks can have very different crude rates if their age distributions differ.',
    '**Specific rates** (age-, sex-specific) fix this by looking within strata, but give many numbers. **Standardisation** collapses them into **one comparable summary rate**, adjusted to a common population.',
    '**Direct standardisation:** apply each population’s **age-specific rates** to a **standard population** → an **age-standardised rate** you can compare directly across groups.',
    '**Indirect standardisation:** apply a **standard set of rates** to each population’s age structure to get **expected** events, then **SMR = observed / expected** (× 100). **SMR > 100** = more deaths than the reference; **< 100** = fewer. Used when stratum-specific rates are unstable (small numbers).',
    '**Rule of thumb:** if the **crude** and **age-standardised** rates disagree, **age is confounding** the crude comparison — trust the standardised rate.',
  ],

  mechanism: {
    title: 'Remove the age mix to compare fairly',
    steps: [
      { id: 's1', label: 'Crude rate mixes risk with population age structure' },
      { id: 's2', label: 'Age-specific rates isolate risk within strata', emphasis: 'key' },
      { id: 's3', label: 'Direct: population rates → standard population', emphasis: 'key' },
      { id: 's4', label: 'Indirect: standard rates → population = expected → SMR', emphasis: 'key' },
      { id: 's5', label: 'Compare standardised (not crude) rates across groups' },
    ],
  },

  examFindings: [
    { sign: 'Crude rate is confounded by age structure', mechanism: 'Older populations have higher crude mortality regardless of risk', significance: 'key' },
    { sign: 'SMR = observed / expected (×100)', mechanism: 'Indirect standardisation vs a reference population', significance: 'key' },
    { sign: 'SMR > 100 → excess events vs the reference', mechanism: 'More observed than expected', significance: 'supportive' },
    { sign: 'Crude ≠ standardised → age is confounding', mechanism: 'Standardisation removes the age mix', significance: 'key' },
  ],

  investigations: [
    { clue: 'Retirement town has a higher crude death rate than a university city', meaning: 'Likely an age effect — compare age-standardised rates' },
    { clue: 'A factory cohort has an SMR of 130', meaning: '30% more deaths than expected from the reference population' },
    { clue: 'Stratum-specific rates are based on very few deaths', meaning: 'Use indirect standardisation (SMR) for stability' },
    { clue: 'Two countries’ age-specific rates are identical but crude rates differ', meaning: 'Different age structures — standardise before comparing' },
  ],

  treatment: [
    { logic: 'Standardise before comparing populations', detail: 'Use direct standardisation when stratum-specific rates are stable; use indirect (SMR) when numbers are small. Never compare crude rates across differently structured populations.' },
  ],

  mnemonics: [
    { hook: 'SMR = Standardised Mortality Ratio = Seen / Meant-to-be (observed/expected)', expansion: ['>100 excess, <100 fewer', 'Indirect method'] },
    { hook: 'Crude ≠ Standardised → Confounded by age', expansion: ['Trust the standardised rate'] },
  ],

  traps: [
    {
      questionCategory: 'Interpreting crude vs standardised',
      wrongInstinct: 'A higher crude death rate proves the population is genuinely at higher risk',
      rightAnswer: 'A higher crude rate may simply reflect an older population; compare age-standardised rates',
      why: 'Crude rates are confounded by age structure — only standardised rates isolate the underlying risk.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A seaside retirement town has a much higher crude mortality rate than a nearby student city, yet their age-specific rates are nearly identical. The best explanation is:',
      options: [
        { id: 'a', text: 'The retirement town genuinely has higher mortality risk' },
        { id: 'b', text: 'Confounding by age structure of the populations' },
        { id: 'c', text: 'Recall bias' },
        { id: 'd', text: 'The student city has better hospitals' },
      ],
      answerId: 'b',
      explanation: 'Identical age-specific rates but a higher crude rate means the difference is driven by the older age structure — age is confounding the crude comparison, which standardisation would remove.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'An occupational cohort has a standardised mortality ratio (SMR) of 85. This means the workers had:',
      options: [
        { id: 'a', text: '85% more deaths than expected' },
        { id: 'b', text: '15% fewer deaths than expected' },
        { id: 'c', text: 'Exactly the expected number of deaths' },
        { id: 'd', text: 'An age-standardised rate of 85 per 1,000' },
      ],
      answerId: 'b',
      explanation: 'SMR = observed/expected × 100. An SMR of 85 means 15% fewer observed deaths than expected from the reference population (often the “healthy worker effect”).',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'Direct standardisation produces an age-standardised rate by applying:',
      options: [
        { id: 'a', text: 'Standard rates to each population’s age structure' },
        { id: 'b', text: 'Each population’s age-specific rates to a standard population' },
        { id: 'c', text: 'Crude rates to the observed deaths' },
        { id: 'd', text: 'The odds ratio to the prevalence' },
      ],
      answerId: 'b',
      explanation: 'Direct standardisation applies each study population’s age-specific rates to a common standard population, yielding directly comparable age-standardised rates.',
      tests: 'mechanism',
    },
  ],
};

export default ersStandardisationRates;
