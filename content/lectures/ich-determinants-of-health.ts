import type { Lecture } from '../../lib/types';

export const ichDeterminantsOfHealth: Lecture = {
  id: 'ich-determinants-of-health',
  title: 'Determinants of Health',
  system: 'community',
  source: 'L3 — Determinants of Health',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Community Health' },
    { kind: 'lecture', label: 'L3 Determinants' },
    { kind: 'mechanism', label: 'Dahlgren–Whitehead rainbow' },
    { kind: 'exam', label: 'Upstream vs downstream' },
    { kind: 'investigation', label: 'Modifiable vs fixed' },
  ],

  highYield: [
    '**Determinants of health = the range of personal, social, economic and environmental factors that shape health.** Clinical care is only a small slice: health behaviours plus social and environmental conditions explain the large majority of population health outcomes, while medical services contribute only roughly **10–20%**.',
    '**The Dahlgren–Whitehead “rainbow” (1991)** arranges determinants in concentric layers around the individual: **(1) age, sex & constitutional/genetic factors** at the core, then **(2) individual lifestyle**, **(3) social & community networks**, **(4) living & working conditions**, and **(5) general socioeconomic, cultural & environmental conditions** at the outer arc.',
    '**Modifiable vs non-modifiable.** The core layer — **age, sex and genes — is fixed (non-modifiable)**. Every outer layer, from personal behaviour to housing, employment, education and policy, is potentially **modifiable**, and that is where prevention and promotion act ([[ich-health-promotion]]).',
    '**Upstream vs downstream.** **Downstream** factors are proximal — individual behaviour and clinical treatment. **Upstream** factors are the distal, structural “causes of the causes” — income, education, policy and environment. **Upstream interventions reach whole populations**, echoing the population strategy in [[ich-disease-prevention-strategies]].',
    '**The outer layers set the limits on the inner ones:** a person’s “lifestyle choices” are constrained by the living, working and socioeconomic conditions surrounding them — which is why blaming individual behaviour alone misreads the model ([[ich-social-determinants-equity]]).',
  ],

  mechanism: {
    title: 'The Dahlgren–Whitehead rainbow: fixed core → widening modifiable layers of influence',
    steps: [
      { id: 's1', label: 'Core: age, sex, constitutional/genetic factors (non-modifiable)' },
      { id: 's2', label: 'Individual lifestyle factors (behaviour)', emphasis: 'key' },
      { id: 's3', label: 'Social & community networks' },
      { id: 's4', label: 'Living & working conditions (housing, water, work, services)', emphasis: 'key' },
      { id: 's5', label: 'General socioeconomic, cultural & environmental conditions', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Medical care contributes only ~10–20% of population health outcomes', mechanism: 'Behaviour, social and environmental determinants dominate the rest', significance: 'key' },
    { sign: 'The rainbow’s core (age, sex, genes) is fixed; the outer layers are modifiable', mechanism: 'Only the modifiable layers can be targeted by policy and prevention', significance: 'key' },
    { sign: 'Upstream = structural/distal causes; downstream = proximal behaviour and care', mechanism: 'Upstream action changes the conditions that generate risk across populations', significance: 'key' },
    { sign: 'Outer socioeconomic layers constrain the inner “lifestyle” choices', mechanism: 'Behaviour is shaped by the living and working conditions around it', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A patient’s age, sex and inherited genetic risk', meaning: 'Core layer of the rainbow — non-modifiable determinants' },
    { clue: 'Damp, overcrowded housing and unsafe working conditions', meaning: 'Living & working conditions layer — modifiable, upstream of individual behaviour' },
    { clue: 'A programme funding education, employment and income support to improve health', meaning: 'Acting on the outer socioeconomic layer — an upstream intervention with wide reach' },
    { clue: 'A clinic that only counsels individuals to “choose” a better diet', meaning: 'A downstream approach — ignores the upstream conditions limiting those choices' },
  ],

  treatment: [
    { logic: 'Locate any risk factor on the rainbow before choosing an intervention', detail: 'Fixed core factors can only be risk-stratified; modifiable outer-layer factors are where promotion, policy and prevention can act.' },
    { logic: 'Prefer upstream action for population-wide, equitable impact', detail: 'Changing living/working conditions and socioeconomic policy reaches everyone and narrows gaps, whereas downstream behaviour advice depends on individual capacity ([[ich-social-determinants-equity]]).' },
  ],

  mnemonics: [
    { hook: 'Rainbow layers, core → arc: “Genes, Guys, Groups, Grounds, Government”', expansion: ['Genes = age/sex/constitution (fixed)', 'Guys = individual lifestyle', 'Groups = social & community networks', 'Grounds = living & working conditions', 'Government = general socioeconomic/environmental'] },
  ],

  traps: [
    {
      questionCategory: 'Upstream versus downstream determinants',
      wrongInstinct: 'Improving individual behaviour and medical care is the most powerful way to improve population health',
      rightAnswer: 'Upstream, structural determinants (socioeconomic and living/working conditions) shape health most and constrain the downstream behaviours',
      why: 'Care and behaviour are downstream; the outer rainbow layers are the “causes of the causes” that determine how much room individuals have to act.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'In the Dahlgren–Whitehead rainbow, which factors sit at the fixed, non-modifiable core?',
      options: [
        { id: 'a', text: 'Housing and working conditions' },
        { id: 'b', text: 'Age, sex and constitutional/genetic factors' },
        { id: 'c', text: 'Individual lifestyle behaviours' },
        { id: 'd', text: 'General socioeconomic and environmental conditions' },
      ],
      answerId: 'b',
      explanation: 'The innermost layer of the rainbow — age, sex and constitutional/genetic make-up — is fixed and non-modifiable. All the surrounding layers, from lifestyle to socioeconomic conditions, are potentially modifiable.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A policy that raises the minimum wage and expands education to improve population health is best described as which kind of intervention?',
      options: [
        { id: 'a', text: 'A downstream intervention' },
        { id: 'b', text: 'An upstream intervention' },
        { id: 'c', text: 'Tertiary prevention' },
        { id: 'd', text: 'A high-risk clinical strategy' },
      ],
      answerId: 'b',
      explanation: 'Acting on income and education targets the distal, structural “causes of the causes,” so it is an upstream intervention with broad population reach. Downstream interventions target proximal behaviour or clinical care.',
      tests: 'mechanism',
    },
  ],
};

export default ichDeterminantsOfHealth;
