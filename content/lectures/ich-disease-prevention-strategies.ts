import type { Lecture } from '../../lib/types';

export const ichDiseasePreventionStrategies: Lecture = {
  id: 'ich-disease-prevention-strategies',
  title: 'Disease Prevention Strategies',
  system: 'community',
  source: 'L1 — Health Promotion & Disease Prevention',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Community Health' },
    { kind: 'lecture', label: 'L1 Prevention Strategies' },
    { kind: 'mechanism', label: 'High-risk vs population' },
    { kind: 'exam', label: 'Prevention paradox' },
    { kind: 'treatment', label: 'Screening placement' },
  ],

  highYield: [
    '**Four levels of prevention map onto the disease timeline** (detailed in [[ifh-prevention-levels]]): **primordial** (stop the risk factor arising), **primary** (prevent disease in the at-risk), **secondary** (screen + treat early/latent disease), **tertiary** (limit disability). At the **population** level these are chosen using strategy, not just biology.',
    '**Geoffrey Rose defined two strategies. The high-risk strategy** finds and treats individuals in the tail of the risk distribution (e.g. statins for those with the highest cholesterol) — targeted, appropriate, cost-efficient per person, but leaves the bulk of cases untouched.',
    '**The population (mass) strategy** shifts the **whole** risk distribution a little to the left (e.g. cutting salt in all bread). Because **“a large number of people at small risk generate more cases than a small number at high risk,”** small population-wide shifts can prevent more disease overall.',
    '**The prevention paradox (Rose):** “a preventive measure that brings large benefit to the community offers little to each participating individual.” This explains poor personal motivation and adherence to population measures even when they work at scale ([[ich-health-promotion]]).',
    '**Screening belongs to SECONDARY prevention and is essentially a high-risk tactic** — it detects latent disease in defined groups. It complements, but cannot replace, the primordial/primary population action that lowers **incidence** across the community ([[ich-descriptive-epi-surveillance]]).',
  ],

  mechanism: {
    title: 'Choosing a prevention strategy: risk distribution → high-risk vs population → paradox → combined approach',
    steps: [
      { id: 's1', label: 'Plot the population’s risk-factor distribution' },
      { id: 's2', label: 'High-risk: treat the tail (targeted, big personal benefit)', emphasis: 'key' },
      { id: 's3', label: 'Population: shift the whole curve left (small benefit each, large total)', emphasis: 'key' },
      { id: 's4', label: 'Face the prevention paradox: little felt benefit per individual', emphasis: 'key' },
      { id: 's5', label: 'Combine both, plus screening (secondary) for early cases' },
    ],
  },

  examFindings: [
    { sign: 'Most cases arise from the many at moderate risk, not the few at high risk', mechanism: 'The middle of the distribution is far more populous than the tail', significance: 'key' },
    { sign: 'The population strategy shifts the whole risk distribution; high-risk targets the tail', mechanism: 'Different targets → different reach and different cost structure', significance: 'key' },
    { sign: 'The prevention paradox = large community benefit, tiny individual benefit', mechanism: 'Explains weak personal motivation for population measures', significance: 'key' },
    { sign: 'Screening is secondary prevention and behaves like a high-risk approach', mechanism: 'It detects existing latent disease rather than lowering incidence', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Mandatory salt reduction in all commercially baked bread', meaning: 'Population (mass) strategy — a small shift across everyone prevents many cardiovascular events' },
    { clue: 'Prescribing antihypertensives only to people with blood pressure above a threshold', meaning: 'High-risk strategy — targets the tail of the distribution' },
    { clue: 'Citizens complain a community measure “does nothing for me personally”', meaning: 'The prevention paradox in action — large population benefit, negligible individual benefit' },
    { clue: 'Inviting a defined age group for cardiovascular risk screening', meaning: 'Secondary prevention / high-risk detection — finds latent disease, does not lower incidence' },
  ],

  treatment: [
    { logic: 'Match the strategy to where the disease burden actually sits', detail: 'When most cases come from the large middle of the distribution, favour a population shift; reserve high-risk targeting for those with concentrated, high individual risk.' },
    { logic: 'Combine population and high-risk approaches rather than choosing one', detail: 'Population action lowers overall incidence while high-risk care and screening ([[ifh-prevention-levels]]) protect those already in danger — the two are complementary.' },
  ],

  mnemonics: [
    { hook: 'Rose: shift the curve vs treat the tail', expansion: ['Population strategy = move everyone a little', 'High-risk strategy = rescue the extreme', 'Prevention paradox = big for the crowd, small for the one'] },
  ],

  traps: [
    {
      questionCategory: 'High-risk versus population strategy',
      wrongInstinct: 'Targeting only the highest-risk individuals will prevent the most cases',
      rightAnswer: 'A population strategy that shifts the whole distribution usually prevents more cases, because most cases arise from the large number of people at moderate risk',
      why: 'This is Rose’s central insight and the root of the prevention paradox — the tail is small, the middle is where the case count lives.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A public-health team lowers the salt content of all processed food nationwide, producing a tiny average blood-pressure fall in everyone. This is best described as which approach?',
      options: [
        { id: 'a', text: 'High-risk strategy' },
        { id: 'b', text: 'Population (mass) strategy' },
        { id: 'c', text: 'Tertiary prevention' },
        { id: 'd', text: 'Secondary prevention' },
      ],
      answerId: 'b',
      explanation: 'Shifting the entire risk distribution by a small amount across the whole population is Rose’s population (mass) strategy. A high-risk strategy would instead target only individuals with the highest blood pressure.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'The “prevention paradox” refers to which phenomenon?',
      options: [
        { id: 'a', text: 'Screening detects disease that would never have caused harm' },
        { id: 'b', text: 'A measure giving large benefit to the community offers little to each individual' },
        { id: 'c', text: 'Treating high-risk individuals is always cheaper than population action' },
        { id: 'd', text: 'Prevention increases overall healthcare spending' },
      ],
      answerId: 'b',
      explanation: 'Geoffrey Rose’s prevention paradox states that a measure bringing large benefit to a population often offers little benefit to each participating individual, which undermines personal motivation despite real population gains.',
      tests: 'exam',
    },
  ],
};

export default ichDiseasePreventionStrategies;
