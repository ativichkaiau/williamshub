import type { Lecture } from '../../lib/types';

export const ichDemographyMeasures: Lecture = {
  id: 'ich-demography-measures',
  title: 'Demography & Population Structure',
  system: 'community',
  source: 'L2 — Demography',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Community Health' },
    { kind: 'lecture', label: 'L2 Demography' },
    { kind: 'mechanism', label: 'Sources → measures' },
    { kind: 'investigation', label: 'Pyramids · dependency' },
    { kind: 'exam', label: 'CBR · CDR · TFR · IMR' },
  ],

  highYield: [
    '**Demography = the scientific study of human populations** — their **size, structure** (age & sex), **distribution**, and **change** over time. Change is driven by three processes: **fertility, mortality and migration** (the “demographic balancing equation”).',
    '**Three data sources:** the **census** (a periodic, total headcount — Thailand every 10 years), **civil / vital registration** (continuous recording of births, deaths, marriages) and **sample surveys** (e.g. demographic & health surveys) that add depth between censuses.',
    '**The population pyramid displays age–sex structure.** An **expansive** pyramid has a **broad base** (high fertility, young population); a **constrictive** pyramid has a **narrow base** (falling fertility, ageing); a **stationary** one has near-vertical sides (low, stable growth) — see [[ich-demographic-epidemiologic-transition]].',
    '**Core rates (all per 1,000 mid-year population unless noted):** **CBR** = live births; **CDR** = deaths; **TFR** = average children per woman over her lifetime (**replacement ≈ 2.1**); **IMR** = infant deaths (<1 yr) **per 1,000 live births** — a sensitive indicator of overall population health ([[ich-mortality-morbidity-measures]]).',
    '**Dependency ratio = (population aged 0–14 + aged 65+) ÷ population aged 15–64 × 100.** It estimates the economic burden on the working-age group; a rising **old-age** dependency ratio signals population ageing and is central to Thailand’s policy debate.',
  ],

  mechanism: {
    title: 'From raw data to demographic insight: source → count events → compute rates → read the structure',
    steps: [
      { id: 's1', label: 'Collect data: census + vital registration + surveys' },
      { id: 's2', label: 'Count events against the mid-year population (the denominator)', emphasis: 'key' },
      { id: 's3', label: 'Compute rates: CBR, CDR, TFR, IMR', emphasis: 'key' },
      { id: 's4', label: 'Build the age–sex pyramid and dependency ratio' },
      { id: 's5', label: 'Interpret growth, ageing and health status', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'IMR is a sensitive marker of a population’s overall health and development', mechanism: 'Infants are vulnerable to nutrition, sanitation and health-service quality', significance: 'key' },
    { sign: 'TFR ≈ 2.1 is “replacement level”; below it a population eventually shrinks', mechanism: 'Each woman replaces herself, her partner, plus a margin for child mortality', significance: 'key' },
    { sign: 'A broad-based pyramid means high fertility and a young, growing population', mechanism: 'Large recent birth cohorts sit at the bottom', significance: 'supportive' },
    { sign: 'The census is periodic; vital registration is continuous', mechanism: 'A snapshot count vs an ongoing event register serve different questions', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A pyramid with a very wide base tapering sharply toward the top', meaning: 'Expansive structure — high fertility, high mortality, a young growing population' },
    { clue: 'TFR reported as 1.3 in a country', meaning: 'Well below replacement (~2.1) → future population decline and ageing' },
    { clue: 'A rising old-age dependency ratio year on year', meaning: 'Population ageing — fewer workers supporting more elderly ([[ich-demographic-epidemiologic-transition]])' },
    { clue: 'Needing accurate cause-specific death counts every year', meaning: 'Use continuous civil/vital registration, not the decennial census' },
  ],

  treatment: [
    { logic: 'Always pair a numerator event with the correct denominator', detail: 'Birth and death rates use the mid-year population; IMR uses live births, not total population — mismatching them is the classic error.' },
    { logic: 'Read the pyramid shape before quoting single rates', detail: 'The age–sex structure tells you whether the population is growing, stationary or ageing, and frames what CBR/CDR/TFR actually mean for that society.' },
  ],

  mnemonics: [
    { hook: 'Rates: Born, Dead, Fertile, Infant → CBR, CDR, TFR, IMR', expansion: ['CBR = crude birth rate (births/1,000 pop)', 'CDR = crude death rate (deaths/1,000 pop)', 'TFR = children per woman (replacement ≈ 2.1)', 'IMR = infant deaths/1,000 LIVE BIRTHS'] },
  ],

  traps: [
    {
      questionCategory: 'Infant mortality rate denominator',
      wrongInstinct: 'IMR is calculated per 1,000 total (mid-year) population, like the crude rates',
      rightAnswer: 'IMR = infant deaths (under 1 year) per 1,000 LIVE BIRTHS in the same year',
      why: 'IMR uses live births as its denominator, not total population — a favourite exam trick because the crude birth and death rates use population instead.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The infant mortality rate (IMR) is expressed per 1,000 of which denominator?',
      options: [
        { id: 'a', text: 'Mid-year total population' },
        { id: 'b', text: 'Live births in the same year' },
        { id: 'c', text: 'Women of reproductive age' },
        { id: 'd', text: 'Children under five years' },
      ],
      answerId: 'b',
      explanation: 'IMR = deaths of infants under 1 year per 1,000 live births in the same year. Using mid-year population would be the denominator for the crude birth and death rates, not the IMR.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A country of 10 million has 3.0 million aged 0–14, 6.0 million aged 15–64, and 1.0 million aged 65+. What is its total dependency ratio?',
      options: [
        { id: 'a', text: 'About 40' },
        { id: 'b', text: 'About 50' },
        { id: 'c', text: 'About 60' },
        { id: 'd', text: 'About 67' },
      ],
      answerId: 'd',
      explanation: 'Dependency ratio = (0–14 + 65+) ÷ (15–64) × 100 = (3.0 + 1.0) ÷ 6.0 × 100 ≈ 66.7, i.e. about 67 dependents per 100 working-age people.',
      tests: 'mechanism',
    },
  ],
};

export default ichDemographyMeasures;
