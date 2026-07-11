import type { Lecture } from '../../lib/types';

export const ersSystematicReviewMetaAnalysis: Lecture = {
  id: 'ers-systematic-review-meta-analysis',
  title: 'Systematic Review & Meta-Analysis',
  system: 'research',
  source: 'L9 — Systematic Review & Meta-Analysis',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Research' },
    { kind: 'lecture', label: 'L9 SR & Meta-Analysis' },
    { kind: 'mechanism', label: 'Pool the evidence' },
    { kind: 'exam', label: 'PRISMA · I² · forest/funnel' },
  ],

  highYield: [
    '**Systematic review vs meta-analysis.** A **systematic review** uses **explicit, reproducible methods** to search, appraise and synthesise all relevant studies. A **meta-analysis** is the optional **statistical pooling** of their results into one estimate. Both sit at the **top of the evidence hierarchy** — but only if the included studies are sound.',
    '**Follow a protocol and PRISMA.** Frame with **PICO**, pre-register, run a **reproducible search** across databases, screen against inclusion/exclusion, and report the flow with a **PRISMA diagram** (identified → screened → included).',
    '**Appraise risk of bias in each study** (e.g. **RoB-2** for RCTs: randomisation, deviations, missing data, measurement, selective reporting). **Garbage in, garbage out** — pooling biased studies produces a precise but wrong answer.',
    '**Heterogeneity** = how much the true effect varies across studies, quantified by **I²** (≈ 25% low, 50% moderate, 75% high). **Low heterogeneity → fixed-effect** model (one true effect); **substantial heterogeneity → random-effects** model (a distribution of effects) — random-effects gives a **wider, more conservative CI**.',
    '**Read the plots.** The **forest plot** shows each study’s effect + CI and the **pooled diamond** (its width = precision; crossing the null line = non-significant). The **funnel plot** screens for **publication bias** — **asymmetry** suggests small negative studies are missing.',
  ],

  mechanism: {
    title: 'Question → search → appraise → synthesise → interpret',
    steps: [
      { id: 's1', label: 'PICO question + pre-registered protocol' },
      { id: 's2', label: 'Reproducible search; screen with inclusion/exclusion (PRISMA)', emphasis: 'key' },
      { id: 's3', label: 'Assess risk of bias in each study (e.g. RoB-2)', emphasis: 'key' },
      { id: 's4', label: 'Pool: fixed vs random effects by heterogeneity (I²)', emphasis: 'key' },
      { id: 's5', label: 'Interpret forest (pooled effect) + funnel (publication bias)' },
    ],
  },

  examFindings: [
    { sign: 'High I² → use a random-effects model', mechanism: 'Studies estimate a distribution of effects, not one value', significance: 'key' },
    { sign: 'Funnel-plot asymmetry → possible publication bias', mechanism: 'Small negative studies go unpublished and are missing', significance: 'key' },
    { sign: 'Forest-plot diamond crossing the null → non-significant pooled effect', mechanism: 'The combined CI includes the no-effect value', significance: 'supportive' },
    { sign: 'Garbage in, garbage out', mechanism: 'Pooling biased studies yields a precise but invalid estimate', significance: 'key' },
  ],

  investigations: [
    { clue: 'Combined studies are clinically and statistically very different (I² = 80%)', meaning: 'High heterogeneity → random-effects model; explore causes' },
    { clue: 'Funnel plot is asymmetric, with small studies missing on the “no effect” side', meaning: 'Publication bias likely — pooled effect may be overstated' },
    { clue: 'A narrow diamond sitting entirely to the left of the null line', meaning: 'Precise, statistically significant benefit of the intervention' },
    { clue: 'Reviewers grade each trial for randomisation and missing-data risk', meaning: 'Risk-of-bias assessment (e.g. RoB-2)' },
  ],

  treatment: [
    { logic: 'Fixed vs random effects', detail: 'Low heterogeneity (I² small) → fixed-effect. Substantial heterogeneity → random-effects (wider CI); if too heterogeneous, consider not pooling and reviewing narratively.' },
  ],

  mnemonics: [
    { hook: 'SR = the method; MA = the math', expansion: ['Systematic review = search/appraise/synthesise', 'Meta-analysis = statistical pooling'] },
    { hook: 'Forest = effect; Funnel = publication bias; I² = heterogeneity', expansion: ['High I² → random effects', 'Asymmetric funnel → missing small studies'] },
  ],

  traps: [
    {
      questionCategory: 'Does “top of the hierarchy” guarantee truth?',
      wrongInstinct: 'A meta-analysis is automatically the best evidence, whatever it pooled',
      rightAnswer: 'A meta-analysis is only as good as its included studies (garbage in, garbage out)',
      why: 'Pooling biased or heterogeneous studies produces a precise but potentially wrong estimate; appraise risk of bias and heterogeneity first.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A meta-analysis reports I² = 82%. The most appropriate action is to:',
      options: [
        { id: 'a', text: 'Use a fixed-effect model' },
        { id: 'b', text: 'Use a random-effects model and explore heterogeneity' },
        { id: 'c', text: 'Ignore it — I² does not affect pooling' },
        { id: 'd', text: 'Automatically exclude the largest study' },
      ],
      answerId: 'b',
      explanation: 'High I² indicates substantial heterogeneity, so a random-effects model (which assumes a distribution of true effects and gives a wider CI) is appropriate, alongside investigating the sources of heterogeneity.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Marked asymmetry of a funnel plot in a meta-analysis most suggests:',
      options: [
        { id: 'a', text: 'Low heterogeneity' },
        { id: 'b', text: 'Publication bias' },
        { id: 'c', text: 'A perfectly powered analysis' },
        { id: 'd', text: 'Randomisation failure' },
      ],
      answerId: 'b',
      explanation: 'Funnel-plot asymmetry suggests small studies with unfavourable results are missing (publication bias), which can inflate the pooled effect estimate.',
      tests: 'exam',
    },
  ],
};

export default ersSystematicReviewMetaAnalysis;
