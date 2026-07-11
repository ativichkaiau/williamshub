import type { Lecture } from '../../lib/types';

export const ersPretestPosttestProbability: Lecture = {
  id: 'ers-pretest-posttest-probability',
  title: 'Pre-test / Post-test Probability & Test Thresholds',
  system: 'research',
  source: 'L5 — Diagnostic Test Evaluation',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Research' },
    { kind: 'lecture', label: 'L5 Diagnostic Tests' },
    { kind: 'mechanism', label: 'Bayesian revision' },
    { kind: 'exam', label: 'Odds × LR · thresholds' },
  ],

  highYield: [
    '**Testing revises probability.** The **pre-test probability** ≈ the disease **prevalence** in that specific setting; a test result moves it to a **post-test probability**. The move is driven by the **likelihood ratio**, not by sensitivity/specificity alone.',
    '**Work in odds:** **pre-test odds × LR = post-test odds**, then convert back to probability. **Odds = P/(1 − P)**, **P = odds/(1 + odds)**. A **Fagan nomogram** does this graphically without the algebra.',
    '**Same test, different setting, different usefulness.** Because pre-test probability = prevalence, a positive result means much more in a **high-prevalence** clinic than in a **low-prevalence** screen — the LR is constant but the post-test probability is not.',
    '**Threshold model:** below the **test threshold** → too unlikely to test (treat as excluded); above the **treatment threshold** → treat without more testing; **in between** → test, because the result can cross a threshold and change management.',
    '**Cutoff / ROC:** for a continuous test, moving the cutoff **trades sensitivity for specificity**. Choose the cutoff by the clinical cost of false negatives vs false positives (screen → favour sensitivity; confirm → favour specificity); the **ROC/AUC** summarises discrimination across all cutoffs.',
  ],

  mechanism: {
    title: 'Prevalence → test → revised probability → action',
    steps: [
      { id: 's1', label: 'Pre-test probability ≈ prevalence in this setting', emphasis: 'key' },
      { id: 's2', label: 'Convert to odds; multiply by the LR', emphasis: 'key' },
      { id: 's3', label: 'Post-test odds → post-test probability' },
      { id: 's4', label: 'Compare with test/treatment thresholds', emphasis: 'key' },
      { id: 's5', label: 'Only test in the middle zone where results change action' },
    ],
  },

  examFindings: [
    { sign: 'Pre-test odds × LR = post-test odds', mechanism: 'Bayesian updating in the odds scale', significance: 'key' },
    { sign: 'Post-test probability rises with pre-test probability', mechanism: 'Same LR, higher baseline → higher result', significance: 'key' },
    { sign: 'LR ≈ 10 / 0.1 shifts probability a lot; LR ≈ 1 barely moves it', mechanism: 'Magnitude of the multiplier', significance: 'supportive' },
    { sign: 'Only test in the “uncertain” zone', mechanism: 'A result there can cross a decision threshold', significance: 'key' },
  ],

  investigations: [
    { clue: 'Positive D-dimer in a low-probability vs high-probability patient', meaning: 'Same LR, but a far higher post-test probability in the high-probability patient' },
    { clue: 'Pre-test probability already above the treatment threshold', meaning: 'Treat without further testing — a test cannot change action' },
    { clue: 'Screening test: choose a cutoff to catch nearly all cases', meaning: 'Favour sensitivity (lower cutoff), accepting more false positives' },
    { clue: 'LR+ of 1.1 for a positive result', meaning: 'Barely changes probability — an unhelpful test' },
  ],

  treatment: [
    { logic: 'Use LRs to update probability', detail: 'Estimate the pre-test probability (prevalence), convert to odds, multiply by the LR, and read the post-test probability (or use a Fagan nomogram).' },
    { logic: 'Test only when it can change management', detail: 'If the pre-test probability is already below the test threshold or above the treatment threshold, a test adds cost without changing the decision.' },
  ],

  mnemonics: [
    { hook: 'Odds × LR = post-test odds', expansion: ['Odds = P/(1−P); P = odds/(1+odds)', 'Or use a Fagan nomogram'] },
    { hook: 'Test in the Middle: below test-threshold don’t test, above treatment-threshold just treat', expansion: ['Only the uncertain middle benefits from testing'] },
  ],

  traps: [
    {
      questionCategory: 'Does the setting change the result’s meaning?',
      wrongInstinct: 'A positive test means the same thing in a screening clinic as in a specialist clinic',
      rightAnswer: 'Post-test probability depends on pre-test probability (prevalence), so the same positive result means more in a high-prevalence setting',
      why: 'The likelihood ratio is fixed, but the pre-test probability differs by setting, so the post-test probability (and clinical meaning) differs.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient has a pre-test probability of disease of 50% (pre-test odds 1:1). A test with LR+ = 9 is positive. The post-test odds and probability are approximately:',
      options: [
        { id: 'a', text: '9:1, ~90%' },
        { id: 'b', text: '1:9, ~10%' },
        { id: 'c', text: '9:1, ~50%' },
        { id: 'd', text: '1:1, ~50%' },
      ],
      answerId: 'a',
      explanation: 'Post-test odds = pre-test odds × LR = 1 × 9 = 9:1, which is a probability of 9/(9+1) = 0.9 (~90%).',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A likelihood ratio of exactly 1 for a test result means the:',
      options: [
        { id: 'a', text: 'Post-test probability is higher than the pre-test probability' },
        { id: 'b', text: 'Post-test probability equals the pre-test probability' },
        { id: 'c', text: 'Test is perfectly specific' },
        { id: 'd', text: 'Disease is ruled out' },
      ],
      answerId: 'b',
      explanation: 'Multiplying the pre-test odds by 1 leaves them unchanged, so the post-test probability equals the pre-test probability — the result is uninformative.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'When a patient’s pre-test probability already exceeds the treatment threshold, the most appropriate action is to:',
      options: [
        { id: 'a', text: 'Order the diagnostic test anyway' },
        { id: 'b', text: 'Begin treatment without further testing' },
        { id: 'c', text: 'Discharge the patient' },
        { id: 'd', text: 'Repeat the history to lower the probability' },
      ],
      answerId: 'b',
      explanation: 'Above the treatment threshold the diagnosis is likely enough to act on; a test result would not change management, so treatment is initiated without additional testing.',
      tests: 'exam',
    },
  ],
};

export default ersPretestPosttestProbability;
