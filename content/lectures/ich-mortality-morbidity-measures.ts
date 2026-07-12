import type { Lecture } from '../../lib/types';

export const ichMortalityMorbidityMeasures: Lecture = {
  id: 'ich-mortality-morbidity-measures',
  title: 'Mortality & Morbidity Frequency Measures',
  system: 'community',
  source: 'L11 — Epidemiological Methods',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Community Health' },
    { kind: 'lecture', label: 'L11 Epidemiological Methods' },
    { kind: 'mechanism', label: 'Incidence vs prevalence' },
    { kind: 'exam', label: 'CFR · IMR · MMR · P ≈ I × D' },
  ],

  highYield: [
    '**Mortality — mind the denominator.** **Crude death rate** = deaths ÷ total mid-year population (× 1,000) and is distorted by age structure. **Age-/cause-specific rates** fix the subgroup. **Infant mortality rate (IMR)** = infant (<1 yr) deaths ÷ live births (× 1,000) — a sensitive marker of development. **Maternal mortality ratio (MMR)** = maternal deaths ÷ 100,000 live births.',
    '**Case-fatality rate (CFR) = deaths ÷ diagnosed cases (× 100).** It measures the **severity/virulence** of a disease, not its burden in the population — a different denominator from the mortality rate. (Strictly a proportion, not a true rate.)',
    '**Morbidity — incidence vs prevalence.** **Cumulative incidence (risk)** = **new** cases ÷ population **at risk** over a period. **Incidence rate (density)** = new cases ÷ **person-time** at risk. **Prevalence** = **existing** cases ÷ total population at a point — a snapshot of **burden**. Incidence answers risk/cause; prevalence answers how much is out there for [[ich-measures-of-association]] and service planning.',
    '**The bridge: prevalence ≈ incidence × duration (P ≈ I × D)** in steady state. Anything that prolongs the disease without curing it (better care of a chronic illness) **raises prevalence** even when incidence is unchanged.',
    '**Choose the measure for the job.** Use **incidence** for causation and risk; **prevalence** for planning and resource needs; and **age-standardised** rates when comparing populations with different age structures — these frequencies feed the occurrence thresholds in [[ich-disease-occurrence-concepts]].',
  ],

  mechanism: {
    title: 'Frequency measure recipe: numerator → correct denominator → multiplier → interpret',
    steps: [
      { id: 's1', label: 'Mortality: deaths ÷ population (crude) or subgroup (specific)' },
      { id: 's2', label: 'IMR & MMR: deaths ÷ live births', emphasis: 'key' },
      { id: 's3', label: 'CFR = deaths ÷ cases → severity', emphasis: 'key' },
      { id: 's4', label: 'Morbidity: incidence (new, at-risk) vs prevalence (existing, total)', emphasis: 'key' },
      { id: 's5', label: 'Link them: P ≈ I × D' },
    ],
  },

  examFindings: [
    { sign: 'Crude death rate is distorted by age structure', mechanism: 'An older population has more deaths regardless of true risk → standardise to compare', significance: 'key' },
    { sign: 'CFR (deaths ÷ cases) ≠ mortality rate (deaths ÷ population)', mechanism: 'CFR is severity among the sick; mortality rate is burden across everyone', significance: 'key' },
    { sign: 'Incidence uses the population AT RISK; prevalence uses the total', mechanism: 'Only those who can newly develop disease belong in an incidence denominator', significance: 'key' },
    { sign: 'P ≈ I × D — duration inflates prevalence', mechanism: 'Prevalence is a pool: inflow (incidence) held for a dwell time (duration)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Two countries have identical age-specific rates but different crude death rates', meaning: 'Their age structures differ → compare with age-standardised rates' },
    { clue: 'A disease with very high CFR but very few cases (e.g. rabies)', meaning: 'Severe yet rare — high case-fatality, low population mortality rate' },
    { clue: 'Better treatment lets a chronic disease’s patients live longer without cure', meaning: 'Prevalence rises though incidence is unchanged (P ≈ I × D)' },
    { clue: 'IMR of 40 vs 4 per 1,000 live births', meaning: 'A large development/health-system gap between the two settings' },
  ],

  treatment: [
    { logic: 'Fit the measure to the purpose', detail: 'Incidence for aetiology and risk, prevalence for planning services, case-fatality for severity, and standardised rates for fair between-population comparison.' },
  ],

  mnemonics: [
    { hook: 'Incidence = Inflow (new); Prevalence = Pool (existing)', expansion: ['Pool = Inflow × Duration', 'Longer duration → bigger pool'] },
    { hook: 'CFR = deaths per Case (severity); mortality rate = deaths per Capita (burden)', expansion: ['Same numerator, different denominator'] },
  ],

  traps: [
    {
      questionCategory: 'Case-fatality rate vs mortality rate',
      wrongInstinct: 'A disease with a high case-fatality rate must be a leading cause of death',
      rightAnswer: 'Not if it is rare — CFR is deaths per case, mortality rate is deaths per population',
      why: 'A rare disease can kill most of the few it infects (high CFR) yet cause little population mortality.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'During an outbreak there are 200 confirmed cases and 10 deaths from the disease. What is the case-fatality rate?',
      options: [
        { id: 'a', text: '0.5%' },
        { id: 'b', text: '5%' },
        { id: 'c', text: '10%' },
        { id: 'd', text: '20%' },
      ],
      answerId: 'b',
      explanation: 'CFR = deaths from the disease ÷ diagnosed cases × 100 = 10 ÷ 200 × 100 = 5%. It expresses how lethal the disease is among those who develop it.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A chronic disease has an incidence of 10 per 1,000 per year and an average duration of 5 years. Using P ≈ I × D, its approximate prevalence is:',
      options: [
        { id: 'a', text: '2 per 1,000' },
        { id: 'b', text: '15 per 1,000' },
        { id: 'c', text: '50 per 1,000' },
        { id: 'd', text: '500 per 1,000' },
      ],
      answerId: 'c',
      explanation: 'P ≈ I × D = (10 per 1,000 per year) × (5 years) = 50 per 1,000. In steady state, longer disease duration produces a larger prevalent pool for a given incidence.',
      tests: 'mechanism',
    },
  ],
};

export default ichMortalityMorbidityMeasures;
