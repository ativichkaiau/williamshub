import type { Lecture } from '../../lib/types';

export const ersMetaAnalysisInterpretation: Lecture = {
  id: 'ers-meta-analysis-interpretation',
  title: 'Interpreting Meta-Analyses: Forest, Funnel & Heterogeneity',
  system: 'research',
  source: 'L9 — Systematic Review & Meta-Analysis',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Research' },
    { kind: 'lecture', label: 'L9 SR & Meta-Analysis' },
    { kind: 'mechanism', label: 'Pool + weight' },
    { kind: 'exam', label: 'Forest · funnel · I²' },
  ],

  highYield: [
    '**Read the forest plot:** each study is a **square** (size ∝ its **weight**, i.e. bigger/more precise studies weigh more) with its **CI** as whiskers; the **diamond** is the pooled estimate (its width = precision). A diamond **touching the null line** = non-significant pooled effect.',
    '**Weighting is by precision (inverse variance):** large, precise studies dominate the pooled result. This is why one huge trial can outweigh several small ones.',
    '**Heterogeneity** = variation in true effects beyond chance. **I²** = % of variability due to heterogeneity (≈ **25/50/75%** = low/moderate/high); the **χ²/Q test** flags its presence but is underpowered with few studies. High heterogeneity → prefer a **random-effects** model and **investigate** it (subgroups, meta-regression).',
    '**Fixed vs random effects:** fixed assumes **one true effect** (weights by precision only); random assumes a **distribution** of effects (adds between-study variance → **wider CI**, more conservative, relatively **more weight to small studies**).',
    '**Funnel plot** screens for **publication (small-study) bias:** plot effect vs precision — **symmetry** is reassuring, **asymmetry** suggests small negative studies are missing, which **inflates** the pooled effect. Grade overall certainty with **GRADE**.',
  ],

  mechanism: {
    title: 'Weight studies → pool → check heterogeneity & bias',
    steps: [
      { id: 's1', label: 'Weight each study by precision (inverse variance)', emphasis: 'key' },
      { id: 's2', label: 'Pool into a summary effect (the diamond)' },
      { id: 's3', label: 'Quantify heterogeneity with I² (+ χ²/Q)', emphasis: 'key' },
      { id: 's4', label: 'High I² → random-effects + explore subgroups', emphasis: 'key' },
      { id: 's5', label: 'Funnel plot for publication bias; GRADE the certainty' },
    ],
  },

  examFindings: [
    { sign: 'Forest-plot square size = study weight (precision)', mechanism: 'Inverse-variance weighting', significance: 'key' },
    { sign: 'Diamond crossing the null → non-significant pooled effect', mechanism: 'The combined CI includes no-effect', significance: 'key' },
    { sign: 'High I² → random-effects model', mechanism: 'True effect varies across studies', significance: 'key' },
    { sign: 'Funnel asymmetry → publication bias', mechanism: 'Missing small negative studies', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'One large trial has a big square; several small trials have tiny squares', meaning: 'The large, precise trial carries most of the weight' },
    { clue: 'I² = 78% across the included trials', meaning: 'High heterogeneity → random-effects and investigate sources' },
    { clue: 'Funnel plot missing small studies on the null side', meaning: 'Publication bias — pooled effect likely overstated' },
    { clue: 'Diamond sits entirely left of the line of no effect', meaning: 'Statistically significant pooled benefit' },
  ],

  treatment: [
    { logic: 'Model choice + certainty', detail: 'Low heterogeneity → fixed-effect; substantial → random-effects (or don’t pool). Explore heterogeneity via subgroup/meta-regression and rate certainty with GRADE.' },
  ],

  mnemonics: [
    { hook: 'Big square = big weight; Diamond on the line = null', expansion: ['Weight ∝ precision (inverse variance)'] },
    { hook: 'I²: 25/50/75 = low/moderate/high', expansion: ['High I² → random effects → explore'] },
  ],

  traps: [
    {
      questionCategory: 'What weighting means',
      wrongInstinct: 'Every study in a meta-analysis contributes equally to the pooled estimate',
      rightAnswer: 'Studies are weighted by precision (inverse variance), so larger, more precise studies contribute more',
      why: 'Equal weighting would let tiny imprecise studies distort the pooled result; inverse-variance weighting reflects each study’s information.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'In a forest plot, the size of each study’s square represents its:',
      options: [
        { id: 'a', text: 'p-value' },
        { id: 'b', text: 'Weight (precision / inverse variance)' },
        { id: 'c', text: 'Risk of bias' },
        { id: 'd', text: 'Publication year' },
      ],
      answerId: 'b',
      explanation: 'Larger squares indicate greater weight — more precise (usually larger) studies contribute more to the pooled estimate via inverse-variance weighting.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Compared with a fixed-effect model, a random-effects meta-analysis generally produces:',
      options: [
        { id: 'a', text: 'A narrower confidence interval' },
        { id: 'b', text: 'A wider, more conservative confidence interval' },
        { id: 'c', text: 'No confidence interval' },
        { id: 'd', text: 'Identical results regardless of heterogeneity' },
      ],
      answerId: 'b',
      explanation: 'Random-effects adds between-study variance, widening the confidence interval and giving relatively more weight to smaller studies — a more conservative summary when heterogeneity is present.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'An asymmetric funnel plot in a meta-analysis most likely indicates:',
      options: [
        { id: 'a', text: 'Low heterogeneity' },
        { id: 'b', text: 'Publication (small-study) bias' },
        { id: 'c', text: 'Perfect precision' },
        { id: 'd', text: 'A fixed-effect model was used' },
      ],
      answerId: 'b',
      explanation: 'Funnel-plot asymmetry suggests small studies with null/negative results are missing (publication bias), which tends to inflate the pooled effect estimate.',
      tests: 'investigation',
    },
  ],
};

export default ersMetaAnalysisInterpretation;
