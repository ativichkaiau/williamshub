import type { Lecture } from '../../lib/types';

export const multifactorialPopulationGenetics: Lecture = {
  id: 'multifactorial-population-genetics',
  title: 'Multifactorial Inheritance & Population Genetics',
  system: 'molecular',
  source: 'L11 — Mendelian, Multifactorial & Population Genetics',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Genetics' },
    { kind: 'lecture', label: 'L11 Genetic Diseases' },
    { kind: 'disease', label: 'Multifactorial disease' },
    { kind: 'mechanism', label: 'Liability threshold / Hardy-Weinberg' },
    { kind: 'exam', label: 'Carrier frequency' },
  ],

  highYield: [
    '**Multifactorial (polygenic + environmental) inheritance**: common diseases with **familial clustering but no Mendelian pattern**; recurrence in first-degree relatives is typically **2–4%** (much lower than single-gene). Examples: **cleft lip/palate, neural tube defects, congenital heart defects, pyloric stenosis, DM, HTN, ischemic heart disease, schizophrenia**.',
    '**Liability-threshold model**: many additive genes + environment create a continuous "liability"; disease appears once a **threshold** is crossed. Consequences: risk is **higher with more severe disease in the proband, more affected relatives, closer relationship**, and — when a sex bias exists — relatives of an affected member of the **less commonly affected sex carry higher risk** (e.g. pyloric stenosis, M:F 5:1).',
    '**Heritability** estimates the genetic contribution; it is derived from **twin concordance** (higher in monozygotic than dizygotic): **H = (C_MZ − C_DZ)/(100 − C_DZ)**. Continuous traits (height, blood pressure, intelligence, skin colour) follow a **normal distribution** from many additive loci.',
    '**Hardy-Weinberg equilibrium**: for alleles A (p) and a (q), **p + q = 1** and **p² + 2pq + q² = 1** (genotype frequencies). It holds in a large, randomly mating population with no mutation, selection, or migration.',
    '**Carrier-frequency use**: for an autosomal recessive disease, **q² = disease incidence**, so **carrier frequency 2pq ≈ 2q** (≈ 2√incidence). e.g. cystic fibrosis 1/2500 → q = 1/50 → **carrier ≈ 1/25**. Equilibrium is disturbed by non-random mating (consanguinity), mutation, **selection (heterozygote advantage — sickle/thalassemia/G6PD vs malaria)**, small population size (**founder effect, genetic drift**), and migration.',
  ],

  mechanism: {
    title: 'Genes + environment cross a threshold; alleles obey Hardy-Weinberg',
    steps: [
      { id: 's1', label: 'Additive liability + environment → threshold → disease', emphasis: 'key' },
      { id: 's2', label: 'Risk ↑ with severity, more relatives, closeness' },
      { id: 's3', label: 'p²+2pq+q² = 1; q² = AR incidence' },
      { id: 's4', label: 'Heterozygote advantage keeps mutant alleles (sickle/malaria)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Recurrence ~2–4% in first-degree relatives of a cleft-lip/NTD proband', mechanism: 'Multifactorial inheritance', significance: 'key' },
    { sign: 'CF incidence 1/2500 → carrier frequency 1/25', mechanism: 'q²=incidence → 2pq≈2√incidence', significance: 'key' },
    { sign: 'High sickle-cell carrier frequency in malaria-endemic areas', mechanism: 'Heterozygote advantage (balancing selection)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Twin concordance (MZ vs DZ)', meaning: 'Estimates heritability' },
    { clue: 'Hardy-Weinberg calculation from incidence', meaning: 'Derive carrier frequency for counseling' },
    { clue: 'Recurrence tables by relationship/severity', meaning: 'Multifactorial risk assessment' },
  ],

  treatment: [
    { logic: 'Population screening + folate for NTDs', detail: 'Prevention where environmental factors are modifiable.' },
    { logic: 'Carrier-frequency estimates guide counseling', detail: 'Especially for AR diseases in defined populations.' },
  ],

  mnemonics: [
    { hook: 'AR carrier frequency ≈ 2 × √incidence', expansion: ['CF 1/2500 → 1/25 carriers'] },
    { hook: 'Heterozygote advantage: sickle/thal/G6PD survive malaria', expansion: ['Selection keeps the allele'] },
  ],

  traps: [
    {
      questionCategory: 'Meaning of q² in Hardy-Weinberg',
      wrongInstinct: 'The carrier frequency equals the disease incidence',
      rightAnswer: 'q² is the disease (homozygote) incidence; the CARRIER frequency is 2pq ≈ 2q ≈ 2√incidence — much larger than the disease rate',
      why: 'Carriers (2pq) vastly outnumber affected homozygotes (q²) for rare recessive diseases, which is why carrier screening matters.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An autosomal recessive disease has an incidence of 1 in 10,000. Approximately what is the carrier frequency in this population?',
      options: [
        { id: 'a', text: '1 in 100' },
        { id: 'b', text: '1 in 50' },
        { id: 'c', text: '1 in 10,000' },
        { id: 'd', text: '1 in 200' },
      ],
      answerId: 'b',
      explanation: 'q² = 1/10,000 → q = 1/100, p ≈ 1. Carrier frequency = 2pq ≈ 2 × (1/100) = 1/50 (≈ 2√incidence).',
      tests: 'exam',
    },
  ],
};

export default multifactorialPopulationGenetics;
