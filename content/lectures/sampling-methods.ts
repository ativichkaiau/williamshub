import type { Lecture } from '../../lib/types';

export const samplingMethods: Lecture = {
  id: 'sampling-methods',
  title: 'Sampling: Probability vs Non-Probability & Selection Bias',
  system: 'research',
  source: 'L4 — Research Methodology',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Research' },
    { kind: 'lecture', label: 'L4 Research Methodology' },
    { kind: 'mechanism', label: 'Sampling frames' },
    { kind: 'exam', label: 'Stratified vs cluster' },
  ],

  highYield: [
    '**Population vs sample.** The **target population** is everyone the question is about; a **sample** is the subset we actually study. A **census** studies everyone (rare/costly). A number describing the population = a **parameter**; the same number from a sample = a **statistic** (our *estimate* of the parameter).',
    '**Probability sampling** (every unit has a known, non-zero chance) → allows generalisation and valid inference. Types: **simple random** (pure lottery), **systematic** (every *k*th unit from a random start), **stratified**, and **cluster**.',
    '**Stratified vs cluster — the classic exam pair.** *Stratified*: divide into subgroups (strata) that are **homogeneous within / heterogeneous between** (e.g. by sex, year), then sample from *each* stratum → **increases precision**, guarantees representation of small groups. *Cluster*: divide into natural groups (e.g. hospitals, villages) that are ideally **heterogeneous within / homogeneous between**, randomly pick whole *clusters* → **reduces cost/logistics** (used when a full list is impractical).',
    '**Non-probability sampling** (chance of selection unknown) → cheap/fast but prone to **selection bias**, limiting generalisability. Types: **convenience** (whoever is available), **purposive/judgmental** (chosen on purpose), **quota** (fill preset counts), **snowball** (participants recruit others — used for hidden populations).',
    '**Selection bias** arises when the sample is not representative of the target population, so the sample statistic is a **biased estimate** of the parameter. Probability methods minimise it; non-probability methods (especially convenience) are most vulnerable.',
  ],

  mechanism: {
    title: 'Population → representative sample → valid estimate',
    steps: [
      { id: 's1', label: 'Define target population + sampling frame' },
      { id: 's2', label: 'Probability (known chance) vs non-probability (unknown)', emphasis: 'key' },
      { id: 's3', label: 'Stratified = homogeneous within → ↑precision', emphasis: 'key' },
      { id: 's4', label: 'Cluster = sample whole natural groups → ↓cost' },
      { id: 's5', label: 'Non-representative sample → selection bias → biased statistic', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Stratified: homogeneous within, heterogeneous between → ↑precision', mechanism: 'Sampling each stratum guarantees representation & reduces variance', significance: 'key' },
    { sign: 'Cluster: heterogeneous within, homogeneous between → ↓cost', mechanism: 'Sample whole clusters when a full unit list is impractical', significance: 'key' },
    { sign: 'Systematic = every kth unit from a random start', mechanism: 'Simple; biased only if the list has hidden periodicity', significance: 'supportive' },
    { sign: 'Snowball sampling', mechanism: 'Participants recruit peers — reaches hidden/hard-to-find populations (non-probability)', significance: 'supportive' },
    { sign: 'Convenience sample', mechanism: 'Highest selection bias; weakest generalisability', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Want each year-group proportionately represented, high precision', meaning: 'Stratified sampling (strata = year groups)' },
    { clue: 'Nationwide survey, no master list of individuals, limited budget', meaning: 'Cluster sampling (sample provinces/schools, then all within)' },
    { clue: 'Recruiting people who inject drugs via referrals', meaning: 'Snowball sampling (hidden population)' },
    { clue: 'Surveying only the students who happened to be in the library', meaning: 'Convenience sample → strong selection bias' },
  ],

  treatment: [
    { logic: 'Choosing a method', detail: 'Use probability sampling whenever generalisation matters; stratify to boost precision for key subgroups; cluster to cut cost when no individual frame exists. Reserve non-probability for pilots/qualitative work and disclose the bias.' },
  ],

  mnemonics: [
    { hook: 'STRatified = SepaRate similar groups (precision); CLuster = Cheaper, whole Chunks', expansion: ['Stratified homogeneous within; cluster homogeneous between'] },
    { hook: 'Non-probability = "no math" → selection bias', expansion: ['Convenience, purposive, quota, snowball'] },
  ],

  traps: [
    {
      questionCategory: 'Stratified vs cluster',
      wrongInstinct: 'Stratified and cluster sampling are basically the same thing',
      rightAnswer: 'Stratified samples from EVERY subgroup (↑precision); cluster samples only SOME whole groups (↓cost)',
      why: 'Strata are homogeneous within/heterogeneous between and all are sampled; clusters are heterogeneous within/homogeneous between and only a random subset is taken.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A researcher divides students into strata by year of study and randomly samples from each stratum. The main advantage is:',
      options: [
        { id: 'a', text: 'Lower cost than any other method' },
        { id: 'b', text: 'Guaranteed representation of each subgroup and greater precision' },
        { id: 'c', text: 'It eliminates the need for a sampling frame' },
        { id: 'd', text: 'It is a non-probability method' },
      ],
      answerId: 'b',
      explanation: 'Stratified sampling ensures every subgroup is represented and reduces variance (↑precision). Cost reduction and no-frame are advantages of cluster sampling.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Surveying only patients who happen to be in the clinic waiting room today is an example of:',
      options: [
        { id: 'a', text: 'Simple random sampling' },
        { id: 'b', text: 'Stratified sampling' },
        { id: 'c', text: 'Convenience sampling' },
        { id: 'd', text: 'Systematic sampling' },
      ],
      answerId: 'c',
      explanation: 'Taking whoever is readily available is convenience (non-probability) sampling — cheap but highly prone to selection bias.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default samplingMethods;
