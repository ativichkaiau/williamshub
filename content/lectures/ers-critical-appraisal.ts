import type { Lecture } from '../../lib/types';

export const ersCriticalAppraisal: Lecture = {
  id: 'ers-critical-appraisal',
  title: 'Critical Appraisal of the Literature',
  system: 'research',
  source: 'L10 — Critical Appraisal of the Literature',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Research' },
    { kind: 'lecture', label: 'L10 Critical Appraisal' },
    { kind: 'mechanism', label: 'Valid → important → applicable' },
    { kind: 'exam', label: 'Internal vs external validity' },
  ],

  highYield: [
    '**Appraise a paper with three questions:** (1) Are the results **valid** (internal validity — the design and conduct)? (2) What are the results and how **precise** (effect size + CI)? (3) Will they **help my patient** (external validity / applicability)?',
    '**Internal validity** = freedom from **bias, confounding and chance** within the study. **External validity (generalisability)** = whether the findings transfer to *your* patients/setting — a valid trial in a narrow group can still be inapplicable.',
    '**Match the appraisal to the design.** RCT → randomisation, allocation concealment, blinding, ITT, loss to follow-up. Cohort/case-control → comparability of groups, confounding control, blinded outcome, follow-up. Diagnostic → independent blinded comparison with an appropriate reference standard across a representative spectrum.',
    '**Read the numbers, not just the p-value.** Prefer the **effect size with its confidence interval**; a **statistically significant** result can be **clinically trivial** (tiny effect) and a **non-significant** result may be **under-powered** (wide CI). Beware **surrogate endpoints** standing in for patient-important outcomes.',
    '**Evidence hierarchy guides, judgement decides.** SR/meta-analysis > RCT > cohort > case-control > cross-sectional > case series > expert opinion — but a well-conducted lower-level study can beat a flawed higher one. **GRADE** rates certainty (risk of bias, inconsistency, indirectness, imprecision, publication bias).',
  ],

  mechanism: {
    title: 'Valid? → Important? → Applicable?',
    steps: [
      { id: 's1', label: 'Internal validity: bias, confounding, chance controlled?', emphasis: 'key' },
      { id: 's2', label: 'Match appraisal checklist to the study design' },
      { id: 's3', label: 'Read effect size + CI, not the p-value alone', emphasis: 'key' },
      { id: 's4', label: 'External validity: do my patients resemble the study’s?', emphasis: 'key' },
      { id: 's5', label: 'Weigh with the hierarchy / GRADE certainty' },
    ],
  },

  examFindings: [
    { sign: 'Internal validity ≠ external validity', mechanism: 'A study can be unbiased yet ungeneralisable', significance: 'key' },
    { sign: 'Significant ≠ important', mechanism: 'A large n can make a trivial effect statistically significant', significance: 'key' },
    { sign: 'Surrogate outcome ≠ patient-important outcome', mechanism: 'A biomarker may improve without benefiting patients', significance: 'supportive' },
    { sign: 'A well-run cohort can outrank a flawed RCT', mechanism: 'Conduct/quality can trump nominal design level', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A perfectly conducted trial done only in fit 40-year-old men', meaning: 'High internal validity, limited external validity for elderly/comorbid patients' },
    { clue: 'Huge trial: risk 10.0% vs 10.2%, p = 0.01', meaning: 'Statistically significant but clinically trivial effect' },
    { clue: 'Drug lowers LDL but the trial did not measure MI or death', meaning: 'Surrogate endpoint — patient-important outcomes unproven' },
    { clue: 'Wide 95% CI that crosses the null in a small study', meaning: 'Imprecise / under-powered — “no difference” is not proven' },
  ],

  treatment: [
    { logic: 'Apply the three-question filter', detail: 'Valid → Important → Applicable. Only evidence that passes all three should change your practice; use a design-appropriate checklist (CASP/JAMA users’ guides) to be systematic.' },
  ],

  mnemonics: [
    { hook: 'Are the results VALID, IMPORTANT, APPLICABLE?', expansion: ['Valid = internal validity (bias/confounding/chance)', 'Important = effect size + CI', 'Applicable = external validity'] },
    { hook: 'Internal = truth IN the study; External = truth OUT there', expansion: ['A study can have one without the other'] },
  ],

  traps: [
    {
      questionCategory: 'Significance vs importance',
      wrongInstinct: 'A very small p-value proves the treatment is clinically worthwhile',
      rightAnswer: 'A small p-value only means the effect is unlikely due to chance; judge worth by the effect size and its CI',
      why: 'Large samples make tiny, clinically irrelevant differences statistically significant — always read the magnitude, not just the p-value.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A large trial reports mortality 10.0% vs 10.2% (p = 0.02). The best interpretation is that the difference is:',
      options: [
        { id: 'a', text: 'Both statistically significant and clinically important' },
        { id: 'b', text: 'Statistically significant but clinically trivial' },
        { id: 'c', text: 'Not statistically significant' },
        { id: 'd', text: 'Proof the treatment is harmful' },
      ],
      answerId: 'b',
      explanation: 'With a very large sample even a 0.2% absolute difference can reach statistical significance, yet such a tiny effect is clinically unimportant. Significance and clinical importance are different judgements.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A flawlessly conducted RCT enrolled only healthy young men. Its main limitation for treating elderly comorbid patients is poor:',
      options: [
        { id: 'a', text: 'Internal validity' },
        { id: 'b', text: 'External validity (generalisability)' },
        { id: 'c', text: 'Randomisation' },
        { id: 'd', text: 'Statistical power' },
      ],
      answerId: 'b',
      explanation: 'The trial may be internally valid (unbiased within its sample) yet lack external validity — its narrow population limits applicability to different patients.',
      tests: 'mechanism',
    },
  ],
};

export default ersCriticalAppraisal;
