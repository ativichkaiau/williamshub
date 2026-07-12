import type { Lecture } from '../../lib/types';

export const ichEbmCriticalAppraisal: Lecture = {
  id: 'ich-ebm-critical-appraisal',
  title: 'Levels of Evidence & Critical Appraisal',
  system: 'community',
  source: 'L12 — Practical Evidence-Based Medicine',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Community Health' },
    { kind: 'lecture', label: 'L12 Practical EBM' },
    { kind: 'mechanism', label: 'Valid · Important · Applicable' },
    { kind: 'exam', label: 'Evidence hierarchy · GRADE' },
  ],

  highYield: [
    '**The evidence hierarchy (for therapy/aetiology):** systematic reviews/meta-analyses of RCTs → **RCT** → **cohort** → **case-control** → **case series/report** → **expert opinion**. Higher levels carry less bias — but **level ≠ quality**: a well-run cohort can outrank a flawed RCT. The designs themselves are detailed in [[ich-epi-study-designs]].',
    '**Appraise every study with three questions — Valid? Important? Applicable? (VIA).** **Validity** (internal) = are the results true / free of bias? **Importance** = is the effect big and precise? **Applicability** (external) = does it fit my patient and setting?',
    '**Validity comes first — assess it before the effect size.** Look for **randomisation** and **allocation concealment**, **blinding**, complete **follow-up**, and **intention-to-treat** analysis. A biased study’s effect estimate is meaningless however large.',
    '**Know the biases:** **selection bias**, **information/measurement bias** (recall, observer), **confounding**, and **attrition** (loss to follow-up). **Randomisation** balances confounders (even unknown ones); **blinding** limits information bias; **ITT** preserves the randomisation.',
    '**GRADE rates the certainty of evidence (high → very low),** starting from the design and **downgrading** for risk of bias, inconsistency, indirectness, imprecision, and publication bias — and it **separates certainty of evidence from strength of recommendation**. This feeds the absolute numbers you apply in [[ich-ebm-applying-evidence]]; see also [[ers-critical-appraisal]] and [[ers-bias-types]].',
  ],

  mechanism: {
    title: 'Appraise: place on hierarchy → valid? → important? → applicable? → grade',
    steps: [
      { id: 's1', label: 'Place the study on the evidence hierarchy (design vs question)', emphasis: 'key' },
      { id: 's2', label: 'Validity — is bias/confounding controlled?', emphasis: 'key' },
      { id: 's3', label: 'Importance — effect size and precision (CI)' },
      { id: 's4', label: 'Applicability — my patient, my setting' },
      { id: 's5', label: 'Grade the overall certainty (GRADE)' },
    ],
  },

  examFindings: [
    { sign: 'Higher design level = less average bias, but conduct can override level', mechanism: 'The hierarchy ranks typical bias risk, not any single study’s quality', significance: 'key' },
    { sign: 'Assess validity before importance', mechanism: 'If a result is biased, its effect size cannot be trusted, however large', significance: 'key' },
    { sign: 'GRADE separates evidence certainty from recommendation strength', mechanism: 'A strong recommendation can rest on low-certainty evidence and vice versa', significance: 'supportive' },
    { sign: 'Randomisation controls confounding; blinding controls information bias', mechanism: 'Random allocation balances known and unknown confounders across arms', significance: 'key' },
  ],

  investigations: [
    { clue: 'A meta-analysis of several RCTs on a treatment', meaning: 'Top of the hierarchy for a therapy question' },
    { clue: 'An RCT with 40% loss to follow-up', meaning: 'Attrition bias threatens validity → downgrade (GRADE: risk of bias)' },
    { clue: 'A large, consistent effect seen across observational studies', meaning: 'GRADE may rate certainty UP despite the observational design' },
    { clue: 'Trial done in young men; your patient is an elderly woman', meaning: 'An applicability (external validity) concern, not a validity flaw' },
  ],

  treatment: [
    { logic: 'Appraise in order and stop at a fatal flaw', detail: 'Work Valid → Important → Applicable. If internal validity fails, discard the study before you even look at the effect size.' },
  ],

  mnemonics: [
    { hook: 'Appraisal = VIA: Valid, Important, Applicable', expansion: ['Validity = internal (bias)', 'Applicability = external (my patient)'] },
    { hook: 'GRADE downgraders: Bias, Inconsistency, Indirectness, Imprecision, Publication bias', expansion: ['Start from the design, then move certainty down'] },
  ],

  traps: [
    {
      questionCategory: 'Level of evidence vs study quality',
      wrongInstinct: 'A randomised trial always provides better evidence than any cohort study',
      rightAnswer: 'A poorly conducted RCT can be less trustworthy than a rigorous cohort',
      why: 'The hierarchy ranks average bias risk by design; the conduct and quality of the individual study still decide how much to trust it.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'For a question about the effectiveness of a treatment, which source sits highest on the evidence hierarchy?',
      options: [
        { id: 'a', text: 'A well-conducted case series' },
        { id: 'b', text: 'Expert opinion from a senior clinician' },
        { id: 'c', text: 'A systematic review/meta-analysis of randomised controlled trials' },
        { id: 'd', text: 'A single case report' },
      ],
      answerId: 'c',
      explanation: 'For therapy questions the ranking runs systematic reviews/meta-analyses of RCTs > single RCT > cohort > case-control > case series > expert opinion, because higher levels are least susceptible to bias.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Random allocation of participants to treatment arms in an RCT most directly protects against:',
      options: [
        { id: 'a', text: 'Confounding' },
        { id: 'b', text: 'Recall bias' },
        { id: 'c', text: 'Publication bias' },
        { id: 'd', text: 'Ecological fallacy' },
      ],
      answerId: 'a',
      explanation: 'Randomisation distributes both known and unknown confounders evenly across arms, so it is the key defence against confounding. Blinding addresses information/recall bias; publication bias is a feature of the literature, not of one trial.',
      tests: 'investigation',
    },
  ],
};

export default ichEbmCriticalAppraisal;
