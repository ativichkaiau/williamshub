import type { Lecture } from '../../lib/types';
import { STUDY_DESIGNS, EVIDENCE_PYRAMID } from '../../lib/figures';

export const studyDesignsHierarchy: Lecture = {
  id: 'study-designs-hierarchy',
  title: 'Study Designs & the Hierarchy of Evidence',
  system: 'research',
  source: 'L4 — Research Methodology',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Research' },
    { kind: 'lecture', label: 'L4 Research Methodology' },
    { kind: 'mechanism', label: 'Observational vs experimental' },
    { kind: 'exam', label: 'RR/OR · design ID' },
  ],

  highYield: [
    '**First split: observational vs experimental.** In *observational* studies the investigator only watches (no assignment of exposure). In *experimental* studies (**RCT**) the investigator **assigns** the intervention and ideally **randomises** — the only design that balances *unknown* confounders, making it the strongest for causation.',
    '**Observational = descriptive vs analytical.** *Descriptive* (no comparison group): **case report / case series**, **cross-sectional (prevalence) survey**, **ecological** (group-level data → risk of the *ecological fallacy*). *Analytical* (has a comparison): cross-sectional analytical, **cohort**, **case-control**.',
    '**Cohort study**: start with exposure status → follow **forward** to outcome (usually **prospective**). Gives **incidence** and **Relative Risk (RR)**. Best for **rare exposures** and when you want temporal sequence. Weakness: slow, costly, loss to follow-up; bad for rare diseases.',
    '**Case-control study**: start with outcome (cases vs controls) → look **backward** for exposure (**retrospective**). Gives the **Odds Ratio (OR)**. Best for **rare diseases** and quick/cheap studies. Weakness: prone to **recall bias** and **selection bias**; cannot give true incidence.',
    '**Hierarchy of evidence (strongest → weakest):** systematic review/meta-analysis > **RCT** > cohort > case-control > cross-sectional > case series/report > expert opinion. Higher = less bias, stronger causal inference. Know *which measure* each design yields: cohort/RCT → **RR**; case-control → **OR** (OR ≈ RR only when the disease is rare).',
  ],

  mechanism: {
    title: 'Direction of enquiry decides the design & the measure',
    steps: [
      { id: 's1', label: 'Investigator assigns exposure? Yes → experimental (RCT)', emphasis: 'key' },
      { id: 's2', label: 'No → observational: has a comparison group? → analytical' },
      { id: 's3', label: 'Exposure → outcome (forward) = cohort → RR', emphasis: 'key' },
      { id: 's4', label: 'Outcome → exposure (backward) = case-control → OR', emphasis: 'key' },
      { id: 's5', label: 'Rank by hierarchy: SR/meta > RCT > cohort > case-control > cross-sectional' },
    ],
  },

  examFindings: [
    { sign: 'Rare disease → case-control; rare exposure → cohort', mechanism: 'Efficiency: start from whichever is scarce', significance: 'key' },
    { sign: 'Cohort/RCT → Relative Risk; case-control → Odds Ratio', mechanism: 'Only forward designs give incidence → RR', significance: 'key' },
    { sign: 'Recall bias', mechanism: 'Classic weakness of retrospective case-control studies', significance: 'supportive' },
    { sign: 'Ecological fallacy', mechanism: 'Group-level (ecological) association wrongly applied to individuals', significance: 'supportive' },
    { sign: 'RCT randomisation', mechanism: 'Balances known AND unknown confounders → top of hierarchy', significance: 'key' },
  ],

  investigations: [
    { clue: 'Study of a rare cancer, quick and cheap, looks back at exposures', meaning: 'Case-control → Odds Ratio (watch recall bias)' },
    { clue: 'Follows exposed vs unexposed workers forward for 20 years', meaning: 'Prospective cohort → Relative Risk / incidence' },
    { clue: 'One-time survey measuring exposure and disease together', meaning: 'Cross-sectional → prevalence; cannot establish temporality' },
    { clue: 'Correlates per-country sugar sales with per-country diabetes rates', meaning: 'Ecological study → beware the ecological fallacy' },
  ],

  treatment: [
    { logic: 'Choosing a design', detail: 'Match design to the question and constraints: causation + resources → RCT; rare disease → case-control; incidence/rare exposure → cohort; "how common?" → cross-sectional.' },
  ],

  mnemonics: [
    { hook: 'Cohort = Count forward (RR); Case-control = look baCk (OR)', expansion: ['Rare Exposure → cohort; Rare Disease → case-control'] },
    { hook: 'Evidence pyramid: "Some Rats Can Catch Colds Easily"', expansion: ['SR/meta, RCT, Cohort, Case-control, Cross-sectional, Expert opinion'] },
  ],

  traps: [
    {
      questionCategory: 'Which measure does the design give?',
      wrongInstinct: 'A case-control study can report the relative risk',
      rightAnswer: 'Case-control gives the *Odds Ratio* (no denominators for incidence); RR comes from cohort/RCT',
      why: 'Case-control starts from diseased/non-diseased, so you cannot compute incidence → only odds → OR (≈RR only if disease is rare).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Researchers want to study risk factors for a very rare cancer quickly and cheaply. The most appropriate design is:',
      options: [
        { id: 'a', text: 'Prospective cohort' },
        { id: 'b', text: 'Case-control' },
        { id: 'c', text: 'Randomised controlled trial' },
        { id: 'd', text: 'Cross-sectional survey' },
      ],
      answerId: 'b',
      explanation: 'For a rare disease, start from cases and controls and look back for exposures (case-control) → Odds Ratio. A cohort would need an enormous sample and long follow-up.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which design provides the strongest evidence for causation because it balances unknown confounders?',
      options: [
        { id: 'a', text: 'Case series' },
        { id: 'b', text: 'Ecological study' },
        { id: 'c', text: 'Randomised controlled trial' },
        { id: 'd', text: 'Cross-sectional study' },
      ],
      answerId: 'c',
      explanation: 'Randomisation distributes both known and unknown confounders equally between groups, which is why the RCT sits above observational designs (below only systematic reviews/meta-analyses).',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Classification of study designs', svg: STUDY_DESIGNS, caption: 'Observational (descriptive/analytical) vs experimental. Cohort = forward → RR; case-control = backward → OR.' },
    { title: 'Hierarchy of evidence', svg: EVIDENCE_PYRAMID, caption: 'Systematic review/meta-analysis > RCT > cohort > case-control > cross-sectional > case report > opinion.' },
  ],
};

export default studyDesignsHierarchy;
