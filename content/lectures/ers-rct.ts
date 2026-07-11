import type { Lecture } from '../../lib/types';

export const ersRct: Lecture = {
  id: 'ers-rct',
  title: 'Randomized Controlled Trials',
  system: 'research',
  source: 'L8 — Randomized Controlled Trials',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Research' },
    { kind: 'lecture', label: 'L8 RCTs' },
    { kind: 'mechanism', label: 'Randomise · blind · analyse' },
    { kind: 'exam', label: 'ITT · allocation concealment' },
  ],

  highYield: [
    '**Randomisation** allocates participants to arms by chance, balancing **known AND unknown** confounders so the groups are comparable at baseline — the feature that puts the RCT at the top of the evidence hierarchy for causation.',
    '**Allocation concealment ≠ blinding.** **Allocation concealment** hides the *upcoming* assignment from the enroller (prevents **selection bias** at entry); **blinding/masking** hides the *received* treatment during follow-up (prevents **performance & detection bias**). Concealment happens once, at randomisation.',
    '**Blinding matters most for subjective outcomes** (pain, symptom scores). A **placebo** control keeps patients and assessors masked. **Objective outcomes** (death, lab values) are less vulnerable to unblinding.',
    '**Analyse by intention-to-treat (ITT):** keep everyone in the arm they were **randomised** to, regardless of adherence or crossover. ITT **preserves randomisation** and gives a pragmatic, usually **conservative** estimate. **Per-protocol** (only compliant patients) breaks randomisation and can exaggerate efficacy.',
    '**Report to CONSORT** with a flow diagram (screened → randomised → followed → analysed). Watch **loss to follow-up** (attrition bias); large or differential dropout threatens validity even in a randomised trial.',
  ],

  mechanism: {
    title: 'Enrol → conceal → randomise → blind → follow → analyse by ITT',
    steps: [
      { id: 's1', label: 'Define domain: inclusion / exclusion criteria' },
      { id: 's2', label: 'Conceal allocation, then randomise → balanced arms', emphasis: 'key' },
      { id: 's3', label: 'Blind patients/assessors (placebo) — esp. subjective outcomes', emphasis: 'key' },
      { id: 's4', label: 'Follow up; minimise loss to follow-up' },
      { id: 's5', label: 'Analyse by intention-to-treat (preserve randomisation)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Randomisation balances unknown confounders', mechanism: 'Chance allocation makes arms exchangeable on average', significance: 'key' },
    { sign: 'Allocation concealment prevents selection bias at entry', mechanism: 'Enroller cannot foresee/steer the next assignment', significance: 'key' },
    { sign: 'ITT preserves randomisation; per-protocol breaks it', mechanism: 'Excluding non-adherers reintroduces confounding', significance: 'key' },
    { sign: 'Blinding matters most for subjective outcomes', mechanism: 'Expectation can shift symptom reporting and assessment', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Enrolling clinician cannot tell which arm the next patient will get', meaning: 'Allocation concealment — prevents selection bias' },
    { clue: 'Some patients in the drug arm never took the drug; how are they analysed?', meaning: 'Intention-to-treat keeps them in the drug arm' },
    { clue: 'Primary outcome is patient-reported pain score', meaning: 'Subjective → blinding (placebo) is essential to avoid bias' },
    { clue: '30% of one arm is lost to follow-up', meaning: 'Attrition bias — threatens validity despite randomisation' },
  ],

  treatment: [
    { logic: 'Protect the randomisation', detail: 'Conceal allocation, blind where possible, minimise and account for dropout, and analyse by intention-to-treat as the primary analysis.' },
    { logic: 'ITT vs per-protocol', detail: 'Report ITT as primary (effectiveness under real adherence); per-protocol is a secondary/sensitivity analysis, interpreted cautiously.' },
  ],

  mnemonics: [
    { hook: 'Conceal at entry, Blind during follow-up', expansion: ['Allocation concealment stops selection bias', 'Blinding stops performance & detection bias'] },
    { hook: 'ITT = “In The Trial” — once randomised, always analysed', expansion: ['Preserves balance', 'Usually conservative'] },
  ],

  traps: [
    {
      questionCategory: 'Concealment vs blinding',
      wrongInstinct: 'Allocation concealment and blinding are the same safeguard',
      rightAnswer: 'Concealment hides the next assignment at entry; blinding hides the received treatment during follow-up',
      why: 'They prevent different biases at different times — a trial can conceal allocation yet be unblinded (open-label), or vice versa.',
    },
    {
      questionCategory: 'Which analysis to trust',
      wrongInstinct: 'Excluding non-adherent patients (per-protocol) gives the truest estimate of the drug’s effect',
      rightAnswer: 'Intention-to-treat is primary; per-protocol breaks randomisation and tends to overstate efficacy',
      why: 'Non-adherers differ systematically from adherers, so removing them reintroduces confounding that randomisation was designed to prevent.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'In a trial, several patients randomised to the new drug stopped taking it. The primary analysis should:',
      options: [
        { id: 'a', text: 'Exclude them from all analyses' },
        { id: 'b', text: 'Move them to the placebo group' },
        { id: 'c', text: 'Keep them in the drug group (intention-to-treat)' },
        { id: 'd', text: 'Re-randomise them' },
      ],
      answerId: 'c',
      explanation: 'Intention-to-treat analyses patients in the arm they were randomised to, preserving the balance created by randomisation and giving a realistic (usually conservative) effect estimate.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Allocation concealment in an RCT primarily prevents which bias?',
      options: [
        { id: 'a', text: 'Recall bias' },
        { id: 'b', text: 'Selection bias at enrolment' },
        { id: 'c', text: 'Attrition bias' },
        { id: 'd', text: 'Detection bias during outcome assessment' },
      ],
      answerId: 'b',
      explanation: 'Concealing the upcoming assignment stops enrollers from steering particular patients into particular arms, preventing selection bias at entry. Blinding (not concealment) addresses performance and detection bias.',
      tests: 'exam',
    },
  ],
};

export default ersRct;
