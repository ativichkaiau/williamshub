import type { Lecture } from '../../lib/types';

export const ifhScreeningPrinciples: Lecture = {
  id: 'ifh-screening-principles',
  title: 'Principles of Screening',
  system: 'community',
  source: 'L6 — Health Screening & Prevention',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Family Health' },
    { kind: 'lecture', label: 'L6 Screening & Prevention' },
    { kind: 'mechanism', label: 'Wilson–Jungner criteria' },
    { kind: 'investigation', label: 'Screening vs diagnosis' },
    { kind: 'treatment', label: 'Programme requirements' },
  ],

  highYield: [
    '**Screening tests apparently healthy, asymptomatic people** to sort those at higher risk from the rest — it is **not diagnosis**. A positive screen must always be confirmed by a **diagnostic test** ([[ifh-screening-test-metrics]]). Screening is the classic form of **secondary prevention** ([[ifh-prevention-levels]]).',
    '**Wilson–Jungner (WHO, 1968)** groups the requirements into four gates: **the condition** (an important problem, natural history understood, with a **recognisable latent/early stage**); **the test** (suitable **and** acceptable to the population); **the treatment** (an accepted, effective treatment, facilities available, and an agreed policy on whom to treat); and **the programme** (cost-effective and **continuous**, not a one-off campaign).',
    '**The detectable latent stage is the make-or-break criterion.** If a disease has no pre-symptomatic window, there is nothing to catch early — it cannot usefully be screened.',
    '**Early treatment must actually change the outcome.** Finding disease sooner is worthless unless treating in the latent stage beats treating at usual presentation — otherwise you add only **lead-time** ([[ifh-screening-test-metrics]]) and anxiety, not survival.',
    '**A screen must do more good than harm** (primum non nocere): false positives cause anxiety and needless work-ups, false negatives give false reassurance, and over-detection drives **overdiagnosis** — the concern of **quaternary prevention** ([[ifh-prevention-levels]]).',
  ],

  mechanism: {
    title: 'Four gates: the condition → the test → the treatment → the programme',
    steps: [
      { id: 's1', label: 'The condition: important, natural history known' },
      { id: 's2', label: 'A recognisable latent / early asymptomatic stage exists', emphasis: 'key' },
      { id: 's3', label: 'A suitable test that is acceptable to the population' },
      { id: 's4', label: 'Accepted, effective treatment + facilities for positives', emphasis: 'key' },
      { id: 's5', label: 'Programme is cost-effective and continuous (benefit > harm)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Screening targets asymptomatic people; diagnosis targets the symptomatic', mechanism: 'The whole point is to detect disease before it declares itself', significance: 'key' },
    { sign: 'A detectable pre-clinical (latent) stage is essential', mechanism: 'No screening window means no opportunity to intervene early', significance: 'key' },
    { sign: 'Early treatment must improve outcome versus treating at presentation', mechanism: 'Otherwise the “benefit” is only earlier labelling, not longer/better life', significance: 'key' },
    { sign: 'The test is a filter, not a verdict — positives need confirmation', mechanism: 'Screening trades specificity for sensitivity, so it over-calls on purpose', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A rapidly fatal cancer with no detectable pre-symptomatic phase', meaning: 'Fails the “recognisable latent stage” criterion → not screenable' },
    { clue: 'A cheap, accurate, acceptable test but no effective treatment for the disease', meaning: 'Fails “accepted treatment” → screening only creates anxiety with no benefit' },
    { clue: 'People decline the test because it is painful or embarrassing', meaning: 'Fails “acceptability” → poor uptake undermines the whole programme' },
    { clue: 'A screen run once as a one-off health-fair campaign', meaning: 'Violates “continuing process” → misses everyone who develops disease later' },
  ],

  treatment: [
    { logic: 'Apply Wilson–Jungner before adopting any screen', detail: 'Check that the condition, the test, the treatment and the programme all qualify; screen only where treating in the latent stage genuinely changes the outcome.' },
    { logic: 'Confirm every positive screen with a diagnostic test', detail: 'Screening sorts risk and never labels disease on its own; act on the confirmatory result, not the screen ([[ifh-screening-test-metrics]]).' },
  ],

  mnemonics: [
    { hook: 'Four gates: Condition → Test → Treatment → Programme', expansion: ['Condition: important, known history, has a latent stage', 'Test: suitable and acceptable', 'Treatment: effective and available, early beats late', 'Programme: cost-effective and continuous'] },
  ],

  traps: [
    {
      questionCategory: 'Screening versus diagnostic test',
      wrongInstinct: 'A positive screening test means the patient has the disease',
      rightAnswer: 'A positive screen only flags higher risk — it must be confirmed by a diagnostic test',
      why: 'Screening is deliberately over-sensitive; acting on the screen alone overdiagnoses and overtreats healthy people.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A disease is common and serious, an accurate acceptable test exists, and effective treatment is available — but the disease has no detectable asymptomatic phase. Which Wilson–Jungner criterion is not met?',
      options: [
        { id: 'a', text: 'The condition should be an important health problem' },
        { id: 'b', text: 'There should be a recognisable latent or early symptomatic stage' },
        { id: 'c', text: 'The test should be acceptable to the population' },
        { id: 'd', text: 'There should be an accepted treatment' },
      ],
      answerId: 'b',
      explanation: 'Without a recognisable latent or early stage there is no window in which to detect and treat disease before it declares itself, so screening cannot help however good the test or treatment.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A cheap, accurate and acceptable test can detect an incurable condition years before symptoms, but no treatment alters its course. Should a screening programme be introduced?',
      options: [
        { id: 'a', text: 'Yes — earlier knowledge always benefits the patient' },
        { id: 'b', text: 'Yes — a good test justifies screening on its own' },
        { id: 'c', text: 'No — with no effective treatment, screening adds anxiety without benefit' },
        { id: 'd', text: 'No — but only because the test is too cheap to be reliable' },
      ],
      answerId: 'c',
      explanation: 'Wilson–Jungner requires an accepted, effective treatment for the latent stage. Detecting untreatable disease early only lengthens the time the patient lives labelled and anxious, with no change in outcome.',
      tests: 'treatment',
    },
  ],
};

export default ifhScreeningPrinciples;
