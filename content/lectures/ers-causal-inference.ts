import type { Lecture } from '../../lib/types';

export const ersCausalInference: Lecture = {
  id: 'ers-causal-inference',
  title: 'Causal Inference: Bias & Confounding',
  system: 'research',
  source: 'L4 — Causal Inference: Bias & Confounding',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Research' },
    { kind: 'lecture', label: 'L4 Causal Inference' },
    { kind: 'mechanism', label: 'Confounding vs bias' },
    { kind: 'exam', label: 'Bradford-Hill · confounder' },
  ],

  highYield: [
    '**An observed association has four explanations to exclude before “causation”:** **chance** (random error → assessed by p-value/CI), **bias** (systematic error), **confounding**, and **reverse causation**. Only after excluding these do we argue causality.',
    '**Confounder** = a factor that is (1) associated with the **exposure**, (2) an independent **risk factor for the outcome**, and (3) **not on the causal pathway** between them. It distorts the exposure–outcome estimate (classic example: coffee–lung cancer confounded by **smoking**).',
    '**Control confounding by design** (randomisation, restriction, matching) **or by analysis** (stratification, standardisation, multivariable regression). **Randomisation** is unique: it balances **unknown** confounders too.',
    '**Bias is built-in error you cannot fix by statistics.** **Selection bias** (who gets in / stays — e.g. non-representative controls, loss to follow-up) and **information/measurement bias** (**recall bias**, interviewer bias, misclassification) must be prevented in **design**.',
    '**Bradford-Hill viewpoints** guide causal judgement — **temporality is the only near-essential one** (cause precedes effect) — plus strength, dose–response, consistency, plausibility, and reversibility/experiment. **Effect modification (interaction)** is real and worth reporting; confounding is a nuisance to remove.',
  ],

  mechanism: {
    title: 'Association → exclude alternatives → causation',
    steps: [
      { id: 's1', label: 'Observe an exposure–outcome association' },
      { id: 's2', label: 'Chance? → p-value / confidence interval (random error)' },
      { id: 's3', label: 'Bias? → selection & information (systematic error, fix in design)', emphasis: 'key' },
      { id: 's4', label: 'Confounding? → third factor; control by design or analysis', emphasis: 'key' },
      { id: 's5', label: 'Temporality + Bradford-Hill → argue causation', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Confounder: linked to exposure AND outcome, not on the pathway', mechanism: 'It offers a competing explanation for the association', significance: 'key' },
    { sign: 'Randomisation balances unknown confounders', mechanism: 'Chance allocation makes groups exchangeable on average', significance: 'key' },
    { sign: 'Recall bias — a classic of retrospective case-control studies', mechanism: 'Cases remember exposures more thoroughly than controls', significance: 'supportive' },
    { sign: 'Temporality is the one (near-)necessary Bradford-Hill criterion', mechanism: 'A cause must precede its effect', significance: 'key' },
  ],

  investigations: [
    { clue: 'Coffee drinkers have more lung cancer, but they also smoke more', meaning: 'Smoking confounds the coffee–cancer link (adjust or stratify)' },
    { clue: 'Cases recall pesticide exposure more completely than controls', meaning: 'Recall (information) bias — a design problem' },
    { clue: 'Hospital controls are sicker than the source population', meaning: 'Selection bias — controls do not represent the study base' },
    { clue: 'A drug’s benefit is much larger in older than younger patients', meaning: 'Effect modification (interaction) — report the strata, do not “adjust it away”' },
  ],

  treatment: [
    { logic: 'Confounding: design vs analysis', detail: 'Prevent by randomisation, restriction or matching; correct by stratification, standardisation or multivariable regression.' },
    { logic: 'Bias: prevent, don’t patch', detail: 'Selection and information bias cannot be removed in analysis — build in blinding, objective measures, and representative sampling from the start.' },
  ],

  mnemonics: [
    { hook: 'Before “cause”: rule out Chance, Bias, Confounding, Reverse causation', expansion: ['Chance = random error (CI/p)', 'Bias & confounding = systematic error'] },
    { hook: 'Confounder = friend of BOTH (exposure & outcome), not in the middle', expansion: ['Associated with exposure', 'Independent risk factor for outcome', 'Not on the causal pathway'] },
  ],

  traps: [
    {
      questionCategory: 'Confounding vs effect modification',
      wrongInstinct: 'A different effect size across subgroups is confounding to be adjusted away',
      rightAnswer: 'Different effects across strata is effect modification (interaction) — describe it, don’t remove it',
      why: 'Confounding is a distortion to control; effect modification is a genuine, informative difference in effect and should be reported by stratum.',
    },
    {
      questionCategory: 'Can analysis fix bias?',
      wrongInstinct: 'Selection and recall bias can be corrected with regression adjustment',
      rightAnswer: 'Bias is prevented in design; only confounding is amenable to statistical adjustment',
      why: 'Bias systematically distorts the data as collected, so no post-hoc model recovers the truth — unlike a measured confounder.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which single feature disqualifies a variable from being a confounder of an exposure–outcome relationship?',
      options: [
        { id: 'a', text: 'It is associated with the exposure' },
        { id: 'b', text: 'It is an independent risk factor for the outcome' },
        { id: 'c', text: 'It lies on the causal pathway between exposure and outcome' },
        { id: 'd', text: 'It is unequally distributed between groups' },
      ],
      answerId: 'c',
      explanation: 'A factor on the causal pathway is a mediator, not a confounder — adjusting for it would wrongly remove part of the true effect. A confounder must be off the pathway.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which Bradford-Hill viewpoint is considered essential (nearly required) for a causal claim?',
      options: [
        { id: 'a', text: 'Strength of association' },
        { id: 'b', text: 'Temporality' },
        { id: 'c', text: 'Biological plausibility' },
        { id: 'd', text: 'Consistency' },
      ],
      answerId: 'b',
      explanation: 'Temporality — the cause must precede the effect — is the one criterion that is essentially necessary; the others strengthen but are not required.',
      tests: 'exam',
    },
  ],
};

export default ersCausalInference;
