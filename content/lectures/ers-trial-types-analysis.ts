import type { Lecture } from '../../lib/types';

export const ersTrialTypesAnalysis: Lecture = {
  id: 'ers-trial-types-analysis',
  title: 'Trial Types & Analysis',
  system: 'research',
  source: 'L8 — Randomized Controlled Trials',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Research' },
    { kind: 'lecture', label: 'L8 RCTs' },
    { kind: 'mechanism', label: 'Superiority vs non-inferiority' },
    { kind: 'exam', label: 'CONSORT · crossover · cluster' },
  ],

  highYield: [
    '**Superiority trial** asks “is A better than B?” **Non-inferiority** asks “is the new treatment **not worse than** standard by more than a pre-set **margin (Δ)**?” (used when the new option has other advantages — cheaper, safer, oral). **Equivalence** asks “are they similar within ±Δ (both directions)?”',
    '**Non-inferiority is judged by the confidence interval vs the margin**, not by a null of zero: the new treatment is non-inferior if the **CI for the difference stays on the acceptable side of Δ**. For these designs the **per-protocol** analysis is a needed sensitivity check (ITT can bias toward showing non-inferiority).',
    '**Architectures:** **parallel** (independent arms), **crossover** (each patient gets both, in random order — powerful but needs a stable chronic condition and a **washout**), **factorial** (test two interventions at once), and **cluster** (randomise groups/clinics — analysis must account for within-cluster correlation).',
    '**Report to CONSORT** with the flow diagram: **enrolled → randomised → allocated → followed → analysed**; pre-specify outcomes and register the trial to prevent **outcome-switching**.',
    '**Interim analyses & stopping rules** (a Data Safety Monitoring Board) can stop early for **harm, futility, or overwhelming benefit** — but stopping early for benefit tends to **overestimate** the effect.',
  ],

  mechanism: {
    title: 'Question type → design → analysis → reporting',
    steps: [
      { id: 's1', label: 'Superiority / non-inferiority / equivalence — set the margin Δ', emphasis: 'key' },
      { id: 's2', label: 'Choose architecture: parallel / crossover / factorial / cluster', emphasis: 'key' },
      { id: 's3', label: 'Primary analysis ITT; per-protocol as sensitivity (esp. non-inferiority)', emphasis: 'key' },
      { id: 's4', label: 'Report via CONSORT flow; pre-register outcomes' },
      { id: 's5', label: 'Interim analyses can stop for harm/futility/benefit' },
    ],
  },

  examFindings: [
    { sign: 'Non-inferiority: CI vs the margin Δ, not vs zero', mechanism: 'Goal is “not worse by more than Δ”, not “different”', significance: 'key' },
    { sign: 'Per-protocol matters in non-inferiority trials', mechanism: 'ITT can bias toward showing non-inferiority', significance: 'key' },
    { sign: 'Crossover needs a chronic, stable condition + washout', mechanism: 'Carry-over effects contaminate the second period', significance: 'supportive' },
    { sign: 'Cluster trials need correlation-aware analysis', mechanism: 'Patients within a cluster are not independent', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A cheaper oral drug is tested to be “not worse” than IV standard by >5%', meaning: 'Non-inferiority trial — judge the CI against the 5% margin' },
    { clue: 'Each patient with stable migraine receives drug then placebo (or vice versa)', meaning: 'Crossover design — requires a washout period' },
    { clue: 'Whole clinics randomised to a new protocol', meaning: 'Cluster RCT — analyse accounting for within-clinic correlation' },
    { clue: 'A trial is stopped early at interim for large benefit', meaning: 'Effect size may be overestimated — interpret cautiously' },
  ],

  treatment: [
    { logic: 'Match analysis to design', detail: 'ITT is primary for superiority; for non-inferiority run both ITT and per-protocol and require concordance. Always report the CONSORT flow.' },
  ],

  mnemonics: [
    { hook: 'Superiority: better? Non-inferiority: not worse by Δ? Equivalence: same within ±Δ?', expansion: ['Non-inferiority/equivalence judged vs the margin, not zero'] },
    { hook: 'Crossover Cures need Chronic + washout', expansion: ['Carry-over is the enemy'] },
  ],

  traps: [
    {
      questionCategory: 'Interpreting a non-inferiority trial',
      wrongInstinct: 'A non-significant difference (p > 0.05) proves the new treatment is non-inferior',
      rightAnswer: 'Non-inferiority requires the confidence interval to exclude the pre-set margin Δ, not merely a non-significant difference',
      why: 'A non-significant difference can also come from low power; non-inferiority is a statement about the CI relative to Δ.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A trial aims to show a new cheaper drug is “not unacceptably worse” than the standard, using a pre-specified margin. Non-inferiority is established when the confidence interval for the difference:',
      options: [
        { id: 'a', text: 'Includes zero' },
        { id: 'b', text: 'Excludes zero' },
        { id: 'c', text: 'Lies entirely on the acceptable side of the margin Δ' },
        { id: 'd', text: 'Is wider than the margin' },
      ],
      answerId: 'c',
      explanation: 'Non-inferiority is judged against the margin: the entire CI for the treatment difference must stay within the acceptable (non-inferior) side of Δ.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A crossover trial is LEAST appropriate for which condition?',
      options: [
        { id: 'a', text: 'Stable chronic hypertension' },
        { id: 'b', text: 'Chronic stable asthma' },
        { id: 'c', text: 'Acute myocardial infarction' },
        { id: 'd', text: 'Chronic migraine' },
      ],
      answerId: 'c',
      explanation: 'Crossover designs need a stable, chronic condition so each patient can receive both treatments in sequence. An acute, one-time event like MI cannot be “crossed over.”',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'For a non-inferiority trial, why is the per-protocol analysis reported alongside intention-to-treat?',
      options: [
        { id: 'a', text: 'ITT is not allowed in these trials' },
        { id: 'b', text: 'ITT can bias toward showing non-inferiority' },
        { id: 'c', text: 'Per-protocol prevents selection bias' },
        { id: 'd', text: 'Per-protocol increases the sample size' },
      ],
      answerId: 'b',
      explanation: 'In non-inferiority trials, non-adherence/crossover blurs differences and can push the ITT result toward “non-inferior,” so a concordant per-protocol analysis is required as a sensitivity check.',
      tests: 'investigation',
    },
  ],
};

export default ersTrialTypesAnalysis;
