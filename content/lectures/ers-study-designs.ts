import type { Lecture } from '../../lib/types';

export const ersStudyDesigns: Lecture = {
  id: 'ers-study-designs',
  title: 'Epidemiologic Study Designs',
  system: 'research',
  source: 'L2 — Epidemiologic Study Designs',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Research' },
    { kind: 'lecture', label: 'L2 Study Designs' },
    { kind: 'mechanism', label: 'Observational vs experimental' },
    { kind: 'exam', label: 'Design ID · RR vs OR' },
  ],

  highYield: [
    '**First fork: does the investigator assign the exposure?** **Yes → experimental (RCT).** **No → observational.** Only assignment + **randomisation** balances **unknown** confounders, so the RCT is the strongest single design for causation.',
    '**Observational splits into descriptive (no comparison group)** — case report/series, cross-sectional prevalence survey, ecological — **and analytical (has a comparison)** — cross-sectional analytical, **cohort**, **case-control**.',
    '**Cohort** starts from **exposure** and follows **forward** to outcome (usually prospective) → gives **incidence** and the **Relative Risk (RR)**. Best for **rare exposures** and to establish temporality; weak for **rare diseases** (needs huge n, long follow-up, loss to follow-up).',
    '**Case-control** starts from **outcome** (cases vs controls) and looks **backward** for exposure → gives the **Odds Ratio (OR)**. Best for **rare diseases** and quick/cheap work; prone to **recall** and **selection** bias and **cannot** give incidence. **OR ≈ RR only when the disease is rare.**',
    '**Define the study base clearly:** the **domain** (to whom results apply) and the **study base** (the population-time that generated the data). A mismatch (e.g. hospital controls that misrepresent the base) is the root of **selection bias**.',
  ],

  mechanism: {
    title: 'Direction of enquiry fixes the design and the measure',
    steps: [
      { id: 's1', label: 'Investigator assigns exposure? Yes → experimental (RCT)', emphasis: 'key' },
      { id: 's2', label: 'No → observational; has a comparison group? → analytical' },
      { id: 's3', label: 'Exposure → outcome (forward) = cohort → RR / incidence', emphasis: 'key' },
      { id: 's4', label: 'Outcome → exposure (backward) = case-control → OR', emphasis: 'key' },
      { id: 's5', label: 'Snapshot of both at once = cross-sectional → prevalence (no temporality)' },
    ],
  },

  examFindings: [
    { sign: 'Rare disease → case-control; rare exposure → cohort', mechanism: 'Sample from whichever is scarce for efficiency', significance: 'key' },
    { sign: 'Cohort/RCT → Relative Risk; case-control → Odds Ratio', mechanism: 'Only forward designs have denominators for incidence', significance: 'key' },
    { sign: 'Cross-sectional cannot establish temporality', mechanism: 'Exposure and outcome are measured at the same instant', significance: 'supportive' },
    { sign: 'Ecological fallacy', mechanism: 'A group-level association wrongly applied to individuals', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Follows exposed vs unexposed factory workers forward for 20 years', meaning: 'Prospective cohort → incidence and Relative Risk' },
    { clue: 'Quick, cheap study of a rare cancer, looking back at past exposures', meaning: 'Case-control → Odds Ratio (watch for recall bias)' },
    { clue: 'One survey measuring current smoking and current disease together', meaning: 'Cross-sectional → prevalence; cannot say which came first' },
    { clue: 'Correlates per-country sugar sales with per-country diabetes rates', meaning: 'Ecological study → beware the ecological fallacy' },
  ],

  treatment: [
    { logic: 'Matching design to question and constraints', detail: 'Causation + resources → RCT; rare disease → case-control; incidence / rare exposure → cohort; “how common is it?” → cross-sectional.' },
  ],

  mnemonics: [
    { hook: 'Cohort = Count forward (RR); Case-control = look baCk (OR)', expansion: ['Rare Exposure → cohort', 'Rare Disease → case-control'] },
  ],

  traps: [
    {
      questionCategory: 'Which measure does the design give?',
      wrongInstinct: 'A case-control study reports the relative risk of exposure',
      rightAnswer: 'Case-control yields the Odds Ratio; RR comes from cohort/RCT',
      why: 'Case-control starts from diseased vs non-diseased, so there is no denominator for incidence — only odds, hence OR (≈ RR only if the disease is rare).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Investigators want to study risk factors for a very rare cancer quickly and inexpensively. The best design is:',
      options: [
        { id: 'a', text: 'Prospective cohort' },
        { id: 'b', text: 'Case-control' },
        { id: 'c', text: 'Randomised controlled trial' },
        { id: 'd', text: 'Cross-sectional survey' },
      ],
      answerId: 'b',
      explanation: 'For a rare disease you start from cases and controls and look back for exposures (case-control → Odds Ratio). A cohort would need an enormous sample and long follow-up.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A study measures the prevalence of hypertension and current salt intake in one household survey. Its key limitation is that it:',
      options: [
        { id: 'a', text: 'Requires very long follow-up' },
        { id: 'b', text: 'Cannot establish which came first (temporality)' },
        { id: 'c', text: 'Can only be used for rare diseases' },
        { id: 'd', text: 'Directly yields the relative risk' },
      ],
      answerId: 'b',
      explanation: 'A cross-sectional study captures exposure and outcome at the same moment, so it gives prevalence but cannot establish temporal sequence or true incidence.',
      tests: 'mechanism',
    },
  ],
};

export default ersStudyDesigns;
