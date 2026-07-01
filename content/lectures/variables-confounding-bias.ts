import type { Lecture } from '../../lib/types';

export const variablesConfoundingBias: Lecture = {
  id: 'variables-confounding-bias',
  title: 'Variables, Confounding & Effect Modification',
  system: 'research',
  source: 'L4 — Research Methodology',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Research' },
    { kind: 'lecture', label: 'L4 Research Methodology' },
    { kind: 'mechanism', label: 'Confounder vs mediator' },
    { kind: 'exam', label: 'Control confounding' },
  ],

  highYield: [
    '**Core variable roles.** **Independent variable (X)** = the exposure/predictor you think causes change. **Dependent variable (Y)** = the outcome you measure. A study asks whether X influences Y — but other variables can distort that relationship.',
    '**Confounder = the great deceiver.** A confounder is (1) **associated with the exposure**, (2) an **independent risk factor for the outcome**, and (3) **NOT on the causal pathway** between them. It creates a *spurious* X–Y association (e.g. coffee↔lung cancer confounded by smoking). Confounding must be controlled or it produces a false conclusion.',
    '**Mediator vs confounder — do not confuse.** A **mediator** lies **ON the causal pathway** (X → mediator → Y); it *explains how* X causes Y and must **not** be "adjusted away" if you want the total effect. A confounder is *off* the pathway and *should* be adjusted for. A **covariate** is any additional variable measured/controlled.',
    '**Effect modifier (moderator) ≠ confounder.** An effect modifier **changes the strength/direction of the X–Y effect across its levels** (e.g. a drug works in young but not old). This is a *real* finding to report via **subgroup/stratified analysis** — not a bias to remove.',
    '**Controlling confounding — design vs analysis.** *In design*: **restriction** (limit to one level), **matching** (case-control), and best of all **randomisation** (balances even unknown confounders → RCT). *In analysis*: **stratification** and **multivariable regression** (adjust for measured confounders). Randomisation is the only method that handles *unknown* confounders.',
  ],

  mechanism: {
    title: 'Sort each variable, then control the confounders',
    steps: [
      { id: 's1', label: 'X (exposure) → Y (outcome): the relationship of interest' },
      { id: 's2', label: 'Confounder: linked to X, causes Y, NOT on the pathway → distorts', emphasis: 'danger' },
      { id: 's3', label: 'Mediator: on the pathway (X→M→Y) → do NOT adjust away', emphasis: 'key' },
      { id: 's4', label: 'Effect modifier: changes the effect by stratum → report subgroups' },
      { id: 's5', label: 'Control: restriction/matching/randomisation (design) · regression (analysis)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Variable linked to exposure, causes outcome, off the pathway', mechanism: 'Definition of a confounder → adjust for it', significance: 'key' },
    { sign: 'X → M → Y', mechanism: 'M is a mediator (on the pathway) — do not adjust if you want the total effect', significance: 'key' },
    { sign: 'Effect differs by subgroup (e.g. by age)', mechanism: 'Effect modification → analyse by stratum, report it', significance: 'key' },
    { sign: 'Randomisation balances unknown confounders', mechanism: 'Design-stage control unique to the RCT', significance: 'supportive' },
    { sign: 'Multivariable regression', mechanism: 'Analysis-stage adjustment for *measured* confounders only', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Coffee drinking looks linked to lung cancer', meaning: 'Smoking is the confounder (linked to coffee, causes cancer) → adjust' },
    { clue: 'Drug lowers BP → less stroke; you adjust for BP and the effect vanishes', meaning: 'BP is a mediator, not a confounder — over-adjustment hid the real effect' },
    { clue: 'Treatment helps women but not men', meaning: 'Sex is an effect modifier → present stratified results' },
    { clue: 'You must control a confounder you did not measure', meaning: 'Only randomisation can — regression can’t adjust for the unmeasured' },
  ],

  treatment: [
    { logic: 'Best practice', detail: 'Pre-specify confounders from the conceptual framework; prefer randomisation for unknown confounders; adjust measured ones with regression; never "adjust away" a mediator when the total effect is the target.' },
  ],

  mnemonics: [
    { hook: 'Confounder: linked to exposure, causes outcome, NOT on the path', expansion: ['3 criteria — all three needed'] },
    { hook: 'Mediator = Middle of the path; Modifier = changes the Magnitude', expansion: ['Adjust mediators only for direct effect; report modifiers by subgroup'] },
  ],

  traps: [
    {
      questionCategory: 'Confounder vs mediator',
      wrongInstinct: 'Any variable associated with both exposure and outcome should be adjusted for',
      rightAnswer: 'Adjust confounders (off the pathway); do NOT adjust mediators (on the pathway) if you want the total causal effect',
      why: 'Adjusting a mediator removes part of the very effect you are trying to measure ("over-adjustment bias").',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which set of features defines a confounder?',
      options: [
        { id: 'a', text: 'It lies on the causal pathway between exposure and outcome' },
        { id: 'b', text: 'It is associated with the exposure, is a risk factor for the outcome, and is not on the causal pathway' },
        { id: 'c', text: 'It changes the effect size across its levels' },
        { id: 'd', text: 'It is the outcome variable' },
      ],
      answerId: 'b',
      explanation: 'A confounder satisfies all three: associated with exposure, independent cause of outcome, NOT on the pathway. On-pathway = mediator; changes effect by level = effect modifier.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The only method that controls for BOTH known and unknown confounders is:',
      options: [
        { id: 'a', text: 'Multivariable regression' },
        { id: 'b', text: 'Restriction' },
        { id: 'c', text: 'Matching' },
        { id: 'd', text: 'Randomisation' },
      ],
      answerId: 'd',
      explanation: 'Regression, restriction, and matching can only handle confounders you measured/anticipated. Randomisation distributes even unmeasured/unknown confounders equally — the strength of the RCT.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default variablesConfoundingBias;
