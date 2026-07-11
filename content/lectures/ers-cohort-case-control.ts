import type { Lecture } from '../../lib/types';

export const ersCohortCaseControl: Lecture = {
  id: 'ers-cohort-case-control',
  title: 'Cohort vs Case-Control Studies',
  system: 'research',
  source: 'L2 — Epidemiologic Study Designs',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Research' },
    { kind: 'lecture', label: 'L2 Study Designs' },
    { kind: 'mechanism', label: 'Forward vs backward' },
    { kind: 'exam', label: 'Prospective · nested · matching' },
  ],

  highYield: [
    '**Cohort = exposure → outcome (forward).** **Prospective** cohorts assemble exposed/unexposed now and follow forward; **retrospective (historical)** cohorts use past records but still reason exposure → outcome. Both yield **incidence** and **Relative Risk**.',
    '**Case-control = outcome → exposure (backward).** Select **cases** (diseased) and **controls** (non-diseased from the same study base), then compare past exposure → **Odds Ratio**. Efficient for **rare diseases** and **long latency**.',
    '**Choose controls from the population that produced the cases.** Bad control selection (e.g. hospital controls with exposure-related illness) is the classic source of **selection bias**; **matching** controls on confounders (age, sex) improves comparability but then needs a matched analysis.',
    '**Nested case-control & case-cohort** studies draw cases and controls from within an existing cohort — cheaper (measure expensive exposures only in the sampled subset) while keeping the cohort’s rigor and temporality.',
    '**Signature weaknesses:** cohorts — **loss to follow-up**, cost, slow, poor for rare disease; case-control — **recall bias** and **selection bias**, no incidence, and reverse causation if temporality is unclear.',
  ],

  mechanism: {
    title: 'Start from exposure or from disease?',
    steps: [
      { id: 's1', label: 'Start from exposure → follow to outcome = cohort (RR)', emphasis: 'key' },
      { id: 's2', label: 'Prospective (follow now) vs retrospective (records)' },
      { id: 's3', label: 'Start from disease → look back = case-control (OR)', emphasis: 'key' },
      { id: 's4', label: 'Controls must come from the same study base', emphasis: 'key' },
      { id: 's5', label: 'Nested designs sample within a cohort for efficiency' },
    ],
  },

  examFindings: [
    { sign: 'Rare disease / long latency → case-control', mechanism: 'Sampling from cases avoids following huge cohorts for years', significance: 'key' },
    { sign: 'Rare exposure / need incidence → cohort', mechanism: 'Only forward follow-up gives incidence and RR', significance: 'key' },
    { sign: 'Recall bias is the classic case-control flaw', mechanism: 'Cases recall past exposures differently from controls', significance: 'key' },
    { sign: 'Matching improves comparability but needs matched analysis', mechanism: 'Matched pairs are not independent', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Study of a rare childhood cancer vs prior radiation exposure', meaning: 'Case-control (rare disease) → Odds Ratio' },
    { clue: 'Follows an occupational cohort exposed to a solvent for incident cancer', meaning: 'Cohort → incidence and Relative Risk' },
    { clue: 'Controls picked from a respiratory ward when studying smoking', meaning: 'Selection bias — controls over-represent the exposure' },
    { clue: 'Cases and controls sampled from participants of an existing cohort', meaning: 'Nested case-control — efficient and preserves temporality' },
  ],

  treatment: [
    { logic: 'Pick controls well', detail: 'Controls should represent the exposure distribution of the population that produced the cases; match on strong confounders and analyse the matching.' },
  ],

  mnemonics: [
    { hook: 'CoHort = Count forward (Hazard/incidence, RR); Case-control = look baCk (OR)', expansion: ['Rare Disease → case-control', 'Rare Exposure → cohort'] },
  ],

  traps: [
    {
      questionCategory: 'Prospective vs retrospective',
      wrongInstinct: 'A study that uses old records must be a case-control study',
      rightAnswer: 'A retrospective (historical) cohort still reasons exposure → outcome, so it yields incidence/RR',
      why: 'The direction of enquiry (not the calendar timing of data) defines the design; historical cohorts start from exposure and follow forward through records.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A study identifies patients with a rare liver cancer and an equal number of cancer-free controls, then compares prior aflatoxin exposure. This design yields which measure?',
      options: [
        { id: 'a', text: 'Relative risk' },
        { id: 'b', text: 'Odds ratio' },
        { id: 'c', text: 'Incidence rate' },
        { id: 'd', text: 'Prevalence' },
      ],
      answerId: 'b',
      explanation: 'This is a case-control study (start from disease, look back at exposure). Without denominators for incidence it yields the odds ratio.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Investigators use a payroll database from 1990 to define solvent-exposed vs unexposed workers and count cancers occurring since. This is best described as a:',
      options: [
        { id: 'a', text: 'Case-control study' },
        { id: 'b', text: 'Cross-sectional study' },
        { id: 'c', text: 'Retrospective (historical) cohort' },
        { id: 'd', text: 'Ecological study' },
      ],
      answerId: 'c',
      explanation: 'Exposure is defined first (from old records) and followed forward to outcome — a historical cohort, which still yields incidence and relative risk.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'In a case-control study of smoking and myocardial infarction, controls are recruited from a chronic obstructive pulmonary disease clinic. The likely bias is:',
      options: [
        { id: 'a', text: 'Recall bias' },
        { id: 'b', text: 'Selection bias' },
        { id: 'c', text: 'Lead-time bias' },
        { id: 'd', text: 'Attrition bias' },
      ],
      answerId: 'b',
      explanation: 'COPD patients are heavily exposed to smoking, so controls over-represent the exposure and do not reflect the source population — selection bias that biases the odds ratio toward the null.',
      tests: 'investigation',
    },
  ],
};

export default ersCohortCaseControl;
