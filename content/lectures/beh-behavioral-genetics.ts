import type { Lecture } from '../../lib/types';

export const behBehavioralGenetics: Lecture = {
  id: 'beh-behavioral-genetics',
  title: 'Behavioral Genetics',
  system: 'community',
  source: 'L5 — Genetics & Biology of Behavior',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Behavioral Science' },
    { kind: 'lecture', label: 'L5 Behavioral Genetics' },
    { kind: 'mechanism', label: 'Diathesis–stress' },
    { kind: 'investigation', label: 'Twin & adoption studies' },
    { kind: 'exam', label: 'Heritability · epigenetics' },
  ],

  highYield: [
    '**Behavioural genetics asks how much of the variation in a behaviour is genetic versus environmental** — almost never one alone. Most psychiatric traits are **polygenic and multifactorial**, the inherited complement to the neuroscience in [[beh-neurobiology-behavior]].',
    '**Heritability (h²) is a population statistic:** the proportion of the **variance in a trait within a population** explained by genetic variance (0–1). It does **not** give the “percent genetic” of any one individual, and it shifts as the environment changes.',
    '**Twin and adoption studies separate genes from environment.** Higher **concordance in monozygotic (identical) than dizygotic (fraternal) twins** signals a genetic contribution; **adoption studies** compare an adoptee with biological versus adoptive parents to disentangle rearing from inheritance.',
    '**Genes and environment interact.** In **gene–environment interaction**, genes set sensitivity to the environment (a stress-reactive genotype may become depressed only under adversity), while **epigenetics** lets the environment change gene **expression** — through marks such as methylation — without altering the DNA sequence.',
    '**Diathesis–stress is the integrating model:** an inherited or biological **vulnerability (diathesis)** plus an environmental **stressor** yields the disorder — “genes load the gun, environment pulls the trigger.” It underlies onset and relapse across [[beh-mood-anxiety-disorders]], [[beh-psychotic-disorders]] and [[beh-family-psychopathology]].',
  ],

  mechanism: {
    title: 'Diathesis–stress: vulnerability × environment → expressed disorder',
    steps: [
      { id: 's1', label: 'Inherited or biological vulnerability (the diathesis)', emphasis: 'key' },
      { id: 's2', label: 'Gene–environment interaction sets sensitivity to the environment' },
      { id: 's3', label: 'Environmental stressor or adversity occurs', emphasis: 'key' },
      { id: 's4', label: 'Epigenetic change alters gene expression (no DNA-sequence change)' },
      { id: 's5', label: 'Threshold crossed → disorder expressed (or, with resilience, contained)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Heritability is a population-variance statistic, not an individual’s “percent genetic”', mechanism: 'It describes how much trait variance in a group is genetic, and shifts with environment', significance: 'key' },
    { sign: 'Higher monozygotic than dizygotic concordance signals a genetic contribution', mechanism: 'Identical twins share ~100% of genes, fraternal twins ~50%', significance: 'key' },
    { sign: 'Adoption studies separate inheritance from rearing environment', mechanism: 'They compare an adoptee with biological versus adoptive relatives', significance: 'supportive' },
    { sign: 'Epigenetics changes gene expression without changing the DNA sequence', mechanism: 'The environment adds reversible marks (e.g. methylation) that switch genes on or off', significance: 'key' },
  ],

  investigations: [
    { clue: 'Monozygotic twins show roughly 50% concordance for schizophrenia while dizygotic twins show far less', meaning: 'A strong genetic contribution — but well under 100%, so environment still matters' },
    { clue: 'An adopted child resembles the biological parents more than the adoptive parents on a trait', meaning: 'Evidence of a genetic contribution to that trait' },
    { clue: 'A person with a family history of depression becomes depressed only after a major loss', meaning: 'Diathesis–stress: genetic vulnerability plus an environmental trigger' },
    { clue: 'Early-life stress alters methylation of stress-response genes in the offspring', meaning: 'An epigenetic mechanism — the environment changing gene expression' },
  ],

  treatment: [
    { logic: 'Use diathesis–stress to counsel and to prevent', detail: 'High genetic risk is not destiny; reducing stressors and strengthening coping can keep a vulnerability from being expressed ([[beh-resilience]], [[beh-stress-response]]).' },
    { logic: 'Interpret “heritable” correctly for families', detail: 'A high heritability does not mean a trait is untreatable or fixed; it is a population statement about variance, not a verdict on one person.' },
  ],

  mnemonics: [
    { hook: 'Genes load the gun, environment pulls the trigger', expansion: ['Diathesis = the loaded gun (vulnerability)', 'Stress = the trigger (environmental adversity)', 'Neither alone fires — both are needed'] },
    { hook: 'MZ vs DZ concordance', expansion: ['Monozygotic = identical, ~100% genes', 'Dizygotic = fraternal, ~50% genes', 'MZ concordance far above DZ → genetic contribution'] },
  ],

  traps: [
    {
      questionCategory: 'What heritability means',
      wrongInstinct: 'A heritability of 0.8 means 80% of this patient’s trait is caused by their genes',
      rightAnswer: 'It means about 80% of the variance in the trait across the population is attributable to genetic variance',
      why: 'Heritability is about variation within a population and depends on the environment; it says nothing about the make-up of one individual.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A trait is reported to have a heritability of 0.7. What does this mean?',
      options: [
        { id: 'a', text: '70% of any given person’s trait is determined by their genes' },
        { id: 'b', text: '70% of the variance in the trait across the population is attributable to genetic differences' },
        { id: 'c', text: '70% of people with the trait will pass it to their children' },
        { id: 'd', text: 'The trait cannot be changed by the environment' },
      ],
      answerId: 'b',
      explanation: 'Heritability is a population statistic describing the share of trait variance explained by genetic variance. It is environment-dependent and says nothing about the causes within a single individual.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A woman with a strong family history of depression stays well for years, then develops major depression after a bereavement. Which model best explains this?',
      options: [
        { id: 'a', text: 'Pure genetic determinism' },
        { id: 'b', text: 'The diathesis–stress model' },
        { id: 'c', text: 'A purely environmental cause' },
        { id: 'd', text: 'Mendelian single-gene inheritance' },
      ],
      answerId: 'b',
      explanation: 'An inherited vulnerability (diathesis) that produces illness only when an environmental stressor is added is the essence of the diathesis–stress model — genes load the gun, environment pulls the trigger.',
      tests: 'mechanism',
    },
  ],
};

export default behBehavioralGenetics;
