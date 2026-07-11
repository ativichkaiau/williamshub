import type { Lecture } from '../../lib/types';

export const ersBiasTypes: Lecture = {
  id: 'ers-bias-types',
  title: 'Types of Bias: Selection & Information',
  system: 'research',
  source: 'L4 — Causal Inference: Bias & Confounding',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Research' },
    { kind: 'lecture', label: 'L4 Causal Inference' },
    { kind: 'mechanism', label: 'Selection vs information' },
    { kind: 'exam', label: 'Recall · lead-time · misclassification' },
  ],

  highYield: [
    '**Bias = systematic error** built into how subjects are selected or measured — it does **not** shrink with sample size and **cannot** be fixed by statistics; it must be **prevented by design**.',
    '**Selection bias** — the sample/comparison is not representative of the target base. Flavours: **non-response/volunteer**, **loss to follow-up (attrition)**, **Berkson’s** (hospital-based), **healthy-worker effect**, and **prevalence–incidence (Neyman)** bias (survivors over-sampled).',
    '**Information (measurement) bias** — exposure/outcome is measured wrongly. Flavours: **recall bias**, **interviewer/observer bias**, and **misclassification**.',
    '**Non-differential misclassification** (errors unrelated to group) usually biases toward the **null**; **differential misclassification** (errors differ by group — e.g. recall bias) can bias **either way**, exaggerating or hiding an effect.',
    '**Screening-specific biases:** **lead-time bias** (earlier diagnosis inflates apparent survival without extending life), **length-time bias** (slow, indolent cases preferentially detected), and **overdiagnosis** — all make screening look better than it is.',
  ],

  mechanism: {
    title: 'Where the systematic error enters',
    steps: [
      { id: 's1', label: 'Selection: who enters / stays in the study', emphasis: 'key' },
      { id: 's2', label: 'Information: how exposure/outcome is measured', emphasis: 'key' },
      { id: 's3', label: 'Non-differential misclassification → toward the null' },
      { id: 's4', label: 'Differential (e.g. recall) → either direction', emphasis: 'key' },
      { id: 's5', label: 'Prevent in design — statistics cannot rescue bias' },
    ],
  },

  examFindings: [
    { sign: 'Non-differential misclassification biases toward the null', mechanism: 'Random noise blurs the exposed/unexposed contrast', significance: 'key' },
    { sign: 'Differential misclassification biases either way', mechanism: 'Error depends on group (e.g. cases recall more)', significance: 'key' },
    { sign: 'Lead-time bias inflates apparent survival', mechanism: 'Clock starts earlier without changing death date', significance: 'key' },
    { sign: 'Loss to follow-up = attrition/selection bias', mechanism: 'Dropouts differ systematically from completers', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Screened cancers appear to “survive longer” than symptomatic ones', meaning: 'Lead-time (± length-time) bias — survival measured from earlier' },
    { clue: 'Mothers of sick babies recall pregnancy exposures more thoroughly', meaning: 'Recall bias (differential information bias)' },
    { clue: 'Blunt exposure tool misclassifies exposure equally in both groups', meaning: 'Non-differential misclassification → bias toward the null' },
    { clue: 'Employed workers are healthier than the general population', meaning: 'Healthy-worker effect (a selection bias)' },
  ],

  treatment: [
    { logic: 'Design out the bias', detail: 'Representative sampling and appropriate controls (selection); blinding, objective/validated measures and standardised protocols (information). Minimise and analyse loss to follow-up.' },
  ],

  mnemonics: [
    { hook: 'Non-differential → Null; Differential → Directional', expansion: ['Random error dilutes toward no effect', 'Group-dependent error can go either way'] },
    { hook: 'Screening lies: Lead-time, Length-time, overdiagnosis', expansion: ['All make screening look better than it is'] },
  ],

  traps: [
    {
      questionCategory: 'Direction of misclassification bias',
      wrongInstinct: 'Any measurement error can push the result in any direction',
      rightAnswer: 'Non-differential misclassification typically biases toward the null; only differential error can bias either way',
      why: 'Random (group-independent) errors dilute the contrast toward no effect, whereas group-dependent errors like recall bias can exaggerate or reverse it.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Cancers detected by a screening programme appear to have longer survival than those found after symptoms, even though the age at death is unchanged. This is:',
      options: [
        { id: 'a', text: 'Selection bias' },
        { id: 'b', text: 'Lead-time bias' },
        { id: 'c', text: 'Recall bias' },
        { id: 'd', text: 'Confounding' },
      ],
      answerId: 'b',
      explanation: 'Screening moves the diagnosis (start of the survival clock) earlier without postponing death, so measured survival lengthens artificially — lead-time bias.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'An exposure questionnaire misclassifies exposure equally and randomly in cases and controls. The expected effect on the odds ratio is to bias it:',
      options: [
        { id: 'a', text: 'Away from the null (exaggerate)' },
        { id: 'b', text: 'Toward the null (underestimate)' },
        { id: 'c', text: 'In an unpredictable direction' },
        { id: 'd', text: 'Not at all' },
      ],
      answerId: 'b',
      explanation: 'Non-differential (random, group-independent) misclassification blurs the contrast between groups and typically biases the estimate toward the null.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'Which bias is best prevented by blinding outcome assessors and using objective, validated measurements?',
      options: [
        { id: 'a', text: 'Information (measurement) bias' },
        { id: 'b', text: 'Confounding' },
        { id: 'c', text: 'Selection bias at enrolment' },
        { id: 'd', text: 'Ecological fallacy' },
      ],
      answerId: 'a',
      explanation: 'Blinding and objective, validated instruments guard against information/measurement bias (including observer and detection bias). Confounding and selection bias need other safeguards.',
      tests: 'investigation',
    },
  ],
};

export default ersBiasTypes;
