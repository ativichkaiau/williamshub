import type { Lecture } from '../../lib/types';

export const ichDiseaseOccurrenceConcepts: Lecture = {
  id: 'ich-disease-occurrence-concepts',
  title: 'Concepts of Disease Occurrence',
  system: 'community',
  source: 'L10 — Epidemiological Principles',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Community Health' },
    { kind: 'lecture', label: 'L10 Epidemiological Principles' },
    { kind: 'mechanism', label: 'Agent · Host · Environment' },
    { kind: 'exam', label: 'Natural history · Herd immunity' },
  ],

  highYield: [
    '**The epidemiologic triad: agent – host – environment.** Disease arises when their equilibrium is disturbed (a more virulent **agent**, a more susceptible **host**, or an **environment** that brings them together — often via a **vector**). Break any leg and transmission fails.',
    '**Natural history of disease runs: susceptibility → subclinical (preclinical) → clinical → outcome.** Pathologic change begins below the **clinical horizon**; symptoms appear only later. Each stage maps to a level of prevention.',
    '**Levels of prevention match the stage:** **primordial** (stop risk factors arising) and **primary** (stop disease onset — vaccination, health promotion) act in susceptibility; **secondary** (screening, early detection) acts in the silent subclinical phase; **tertiary** (limit disability, rehabilitation) acts in clinical disease. See [[ifh-prevention-levels]] and [[ich-disease-prevention-strategies]].',
    '**Occurrence patterns: endemic** = constant expected presence; **epidemic/outbreak** = cases clearly **in excess of expected**; **pandemic** = an epidemic across many countries/continents; **sporadic** = irregular scattered cases. “Excess” is judged against the endemic baseline detected by [[ich-descriptive-epi-surveillance]].',
    '**Herd immunity:** once a high fraction is immune, transmission chains break and susceptibles are indirectly protected. The **herd immunity threshold = 1 − 1/R₀**, so a higher **R₀** demands higher coverage (measles R₀ ≈ 12–18 → ~90–95%).',
  ],

  mechanism: {
    title: 'Natural history & prevention: susceptibility → subclinical → clinical → outcome',
    steps: [
      { id: 's1', label: 'Susceptibility: healthy, risk factors present → primary/primordial', emphasis: 'key' },
      { id: 's2', label: 'Subclinical: pathologic change, no symptoms → secondary (screen)', emphasis: 'key' },
      { id: 's3', label: 'Clinical: symptoms appear → tertiary (limit disability)' },
      { id: 's4', label: 'Outcome: recovery, disability, or death' },
    ],
  },

  examFindings: [
    { sign: 'Disease = a disturbed agent–host–environment equilibrium', mechanism: 'Any factor shifting the balance can tip a population into disease', significance: 'key' },
    { sign: 'Each prevention level targets a stage of natural history', mechanism: 'Primary before onset, secondary in the silent phase, tertiary once symptomatic', significance: 'key' },
    { sign: 'Herd immunity threshold = 1 − 1/R₀', mechanism: 'The more transmissible the agent (higher R₀), the more immunity is needed', significance: 'key' },
    { sign: 'Epidemic is defined relative to the expected level', mechanism: 'The same case count is endemic in one setting, epidemic in another', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Measles with R₀ ≈ 15', meaning: 'Threshold ≈ 1 − 1/15 ≈ 93% → needs very high vaccination coverage' },
    { clue: 'A disease is always present at a steady low level in a region', meaning: 'Endemic — the expected baseline' },
    { clue: 'Case counts jump well above that baseline in one month', meaning: 'Epidemic/outbreak → trigger an investigation' },
    { clue: 'Screening detects disease before any symptoms appear', meaning: 'Secondary prevention acting in the subclinical stage' },
  ],

  treatment: [
    { logic: 'Match the intervention to the stage', detail: 'Promote health and vaccinate before onset; screen during the silent phase; treat and rehabilitate once disease is clinical.' },
  ],

  mnemonics: [
    { hook: 'Triad = Agent, Host, Environment', expansion: ['Disease when their balance tips', 'Add the vector as the bridge'] },
    { hook: 'Herd immunity threshold = 1 − 1/R₀', expansion: ['R₀ = 4 → 75%', 'R₀ = 5 → 80%', 'R₀ = 10 → 90%'] },
  ],

  traps: [
    {
      questionCategory: 'Endemic vs epidemic',
      wrongInstinct: 'A large number of cases is automatically an epidemic',
      rightAnswer: 'Epidemic means cases in excess of what is expected for that place and time',
      why: 'A steady high count can be endemic; a small rise above a near-zero baseline can be an outbreak.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An infection has a basic reproduction number (R₀) of 5. Approximately what proportion of the population must be immune to reach the herd immunity threshold?',
      options: [
        { id: 'a', text: '20%' },
        { id: 'b', text: '50%' },
        { id: 'c', text: '80%' },
        { id: 'd', text: '100%' },
      ],
      answerId: 'c',
      explanation: 'Herd immunity threshold = 1 − 1/R₀ = 1 − 1/5 = 0.8 = 80%. Higher R₀ values require a higher immune fraction to interrupt transmission.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A disease normally causes about 10 cases per week in a district; this week there are 90, all in that district. This pattern is best termed:',
      options: [
        { id: 'a', text: 'Endemic' },
        { id: 'b', text: 'Sporadic' },
        { id: 'c', text: 'An epidemic (outbreak)' },
        { id: 'd', text: 'Pandemic' },
      ],
      answerId: 'c',
      explanation: 'An epidemic (or outbreak) is the occurrence of cases clearly in excess of the expected level for that place and time. A jump from ~10 to 90 is well above baseline; being confined to one district, it is not pandemic.',
      tests: 'exam',
    },
  ],
};

export default ichDiseaseOccurrenceConcepts;
