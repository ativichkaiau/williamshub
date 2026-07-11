import type { Lecture } from '../../lib/types';

export const ersEvidenceBasedMedicine: Lecture = {
  id: 'ers-evidence-based-medicine',
  title: 'Evidence-Based Medicine & Levels of Evidence',
  system: 'research',
  source: 'L10 — Critical Appraisal of the Literature',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Research' },
    { kind: 'lecture', label: 'L10 Critical Appraisal' },
    { kind: 'mechanism', label: 'Ask–Acquire–Appraise–Apply' },
    { kind: 'exam', label: 'EBM steps · GRADE · PICO' },
  ],

  highYield: [
    '**EBM = integrating (1) best research evidence, (2) clinical expertise, and (3) patient values/preferences.** Evidence alone does not dictate care — it informs a shared decision.',
    '**The five A’s (steps of EBM):** **Ask** a focused (PICO) question → **Acquire** the best evidence → **Appraise** it (valid? important? applicable?) → **Apply** to the patient → **Assess** your own performance/outcome.',
    '**Hierarchy of evidence** (for therapy questions): **SR/meta-analysis > RCT > cohort > case-control > cross-sectional > case series > expert opinion.** Higher levels have less bias — but a well-conducted lower study can beat a flawed higher one.',
    '**Match the design to the question type:** therapy/prevention → **RCT**; prognosis/harm → **cohort**; rare harm/aetiology → **case-control**; diagnosis → **cross-sectional accuracy study** with a blinded reference standard; frequency → **cross-sectional survey**.',
    '**GRADE rates certainty (high → very low),** starting from the design and downgrading for **risk of bias, inconsistency, indirectness, imprecision, and publication bias** — separating the **strength of a recommendation** from the **certainty of the evidence**.',
  ],

  mechanism: {
    title: 'Ask → Acquire → Appraise → Apply → Assess',
    steps: [
      { id: 's1', label: 'Ask a focused PICO question', emphasis: 'key' },
      { id: 's2', label: 'Acquire the best available evidence' },
      { id: 's3', label: 'Appraise: valid? important? applicable?', emphasis: 'key' },
      { id: 's4', label: 'Apply with clinical expertise + patient values', emphasis: 'key' },
      { id: 's5', label: 'Assess the outcome and your process' },
    ],
  },

  examFindings: [
    { sign: 'EBM = evidence + expertise + patient values', mechanism: 'Three-legged stool, not evidence alone', significance: 'key' },
    { sign: 'Design should match the question (therapy → RCT, prognosis → cohort)', mechanism: 'Each question has a best-suited design', significance: 'key' },
    { sign: 'GRADE separates evidence certainty from recommendation strength', mechanism: 'Strong recs can rest on low-certainty evidence and vice versa', significance: 'supportive' },
    { sign: 'A good cohort can outrank a flawed RCT', mechanism: 'Conduct/quality, not just design level, matters', significance: 'supportive' },
  ],

  investigations: [
    { clue: '“In adults with AF, does apixaban vs warfarin reduce stroke?”', meaning: 'A therapy question in PICO form → best answered by an RCT/meta-analysis' },
    { clue: 'Question about the prognosis of a disease over 5 years', meaning: 'Best design is a (prospective) cohort study' },
    { clue: 'A strong recommendation is made from low-certainty evidence', meaning: 'GRADE allows this when benefits clearly outweigh harms/values align' },
    { clue: 'Evidence exists but the patient declines the treatment', meaning: 'Patient values override — EBM integrates preferences' },
  ],

  treatment: [
    { logic: 'Work the five A’s', detail: 'Turn the clinical problem into a PICO question, find and appraise the best evidence, then apply it with your expertise and the patient’s values — and review the result.' },
  ],

  mnemonics: [
    { hook: 'EBM 5 A’s: Ask, Acquire, Appraise, Apply, Assess', expansion: ['Start with PICO', 'End by auditing yourself'] },
    { hook: 'EBM stool = Evidence + Expertise + patient Values', expansion: ['Remove a leg and it falls over'] },
  ],

  traps: [
    {
      questionCategory: 'What EBM actually is',
      wrongInstinct: 'Evidence-based medicine means always following the highest-level study regardless of the patient',
      rightAnswer: 'EBM integrates best evidence with clinical expertise and the individual patient’s values',
      why: 'Evidence informs but does not dictate; a valid trial can still be inapplicable or unwanted by a particular patient.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A clinician wants the best evidence on whether a drug prevents strokes. Which question type and best-suited design apply?',
      options: [
        { id: 'a', text: 'Prognosis question → case series' },
        { id: 'b', text: 'Therapy question → randomised controlled trial' },
        { id: 'c', text: 'Diagnosis question → cross-sectional survey' },
        { id: 'd', text: 'Aetiology question → ecological study' },
      ],
      answerId: 'b',
      explanation: 'Whether a treatment prevents an outcome is a therapy question, best answered by an RCT (or a meta-analysis of RCTs), which minimises bias for causal claims about interventions.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Evidence-based medicine is best defined as the integration of best research evidence with:',
      options: [
        { id: 'a', text: 'Cost data only' },
        { id: 'b', text: 'Expert opinion only' },
        { id: 'c', text: 'Clinical expertise and patient values' },
        { id: 'd', text: 'The single largest trial available' },
      ],
      answerId: 'c',
      explanation: 'EBM combines the best available evidence with the clinician’s expertise and the patient’s values and preferences — not evidence in isolation.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'In the GRADE approach, evidence from randomised trials would be rated down from “high” certainty for all of the following EXCEPT:',
      options: [
        { id: 'a', text: 'Serious risk of bias' },
        { id: 'b', text: 'Large, consistent effects across studies' },
        { id: 'c', text: 'Imprecision (wide confidence intervals)' },
        { id: 'd', text: 'Indirectness of the evidence' },
      ],
      answerId: 'b',
      explanation: 'GRADE downgrades for risk of bias, inconsistency, indirectness, imprecision, and publication bias. Large, consistent effects are a reason to rate certainty UP, not down.',
      tests: 'investigation',
    },
  ],
};

export default ersEvidenceBasedMedicine;
