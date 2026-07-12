import type { Lecture } from '../../lib/types';

export const ichEbmFiveSteps: Lecture = {
  id: 'ich-ebm-five-steps',
  title: 'The Five Steps of EBM',
  system: 'community',
  source: 'L12 — Practical Evidence-Based Medicine',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Community Health' },
    { kind: 'lecture', label: 'L12 Practical EBM' },
    { kind: 'mechanism', label: 'Ask · Acquire · Appraise · Apply · Assess' },
    { kind: 'exam', label: 'PICO · background vs foreground' },
  ],

  highYield: [
    '**EBM integrates the best research evidence with clinical expertise and patient values** — evidence informs, it does not dictate. The process is a repeatable cycle of five steps.',
    '**The five A’s: Ask → Acquire → Appraise → Apply → Assess.** Ask a focused question, acquire the best evidence, appraise it (valid? important? applicable?), apply it with expertise and values, then assess your own performance. Appraisal detail is in [[ich-ebm-critical-appraisal]]; applying the numbers is in [[ich-ebm-applying-evidence]].',
    '**Ask well using PICO(T): Population, Intervention, Comparison, Outcome (+ Time/Type).** A well-built PICO converts a vague need into an answerable question and hands you your search terms and the best study design.',
    '**Background vs foreground questions.** **Background** = general knowledge (“what causes X?”) answered by textbooks — asked more by novices. **Foreground** = specific knowledge for a decision about a particular patient (a PICO question) answered by current evidence — asked more with experience.',
    '**Match question type to design and source.** Therapy → RCT, prognosis → cohort, harm → cohort/case-control, diagnosis → cross-sectional accuracy study; and search pre-appraised **“6S”** sources (systems → summaries → synopses → syntheses → studies) top-down to save appraisal effort. Cross-links: [[ers-evidence-based-medicine]], [[ers-research-question-protocol]].',
  ],

  mechanism: {
    title: 'Ask → Acquire → Appraise → Apply → Assess',
    steps: [
      { id: 's1', label: 'Ask — frame a focused PICO question', emphasis: 'key' },
      { id: 's2', label: 'Acquire — search the best available evidence' },
      { id: 's3', label: 'Appraise — valid? important? applicable?', emphasis: 'key' },
      { id: 's4', label: 'Apply — integrate clinical expertise + patient values', emphasis: 'key' },
      { id: 's5', label: 'Assess — audit your outcome and process' },
    ],
  },

  examFindings: [
    { sign: 'Foreground questions use PICO; background questions ask general facts', mechanism: 'Decisions about a specific patient need structured, current evidence', significance: 'key' },
    { sign: 'A well-built PICO drives both the search and the best design', mechanism: 'Each element becomes a search concept and points to a study type', significance: 'key' },
    { sign: 'Search pre-appraised (top of the 6S pyramid) sources first', mechanism: 'Summaries and synopses are already critically appraised → less work', significance: 'supportive' },
    { sign: 'EBM opens with Ask and closes with Assess', mechanism: 'It is a reflective cycle: frame the question well, then audit yourself honestly', significance: 'supportive' },
  ],

  investigations: [
    { clue: '“What is the physiological mechanism of insulin?”', meaning: 'A background question → answered by a textbook, not a PICO search' },
    { clue: '“In adults with type 2 diabetes, does drug A vs drug B reduce heart attacks?”', meaning: 'A foreground therapy question in PICO form → current best evidence' },
    { clue: 'A novice asks mostly “what is…” questions', meaning: 'Background-heavy; foreground/PICO questions grow with clinical experience' },
    { clue: 'The question is about a treatment’s effect', meaning: 'Points to an RCT/meta-analysis as the best-suited design' },
  ],

  treatment: [
    { logic: 'Build the PICO before you search', detail: 'Break the clinical need into Population, Intervention, Comparison, and Outcome; each element becomes a search concept and narrows you to the right evidence.' },
  ],

  mnemonics: [
    { hook: 'EBM = 5 A’s: Ask, Acquire, Appraise, Apply, Assess', expansion: ['Start with a PICO question', 'End by auditing yourself'] },
    { hook: 'PICO: Population, Intervention, Comparison, Outcome (+Time)', expansion: ['Foreground questions have all four parts', 'Background questions do not'] },
  ],

  traps: [
    {
      questionCategory: 'Background vs foreground question',
      wrongInstinct: 'Every clinical question should be forced into a PICO format',
      rightAnswer: 'General-knowledge (background) questions are best answered by textbooks; PICO is for specific patient decisions',
      why: 'Matching the question type to the right source is the skill — PICO adds nothing to “what is the anatomy of…”.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'What is the correct order of the five steps of evidence-based medicine?',
      options: [
        { id: 'a', text: 'Acquire → Ask → Apply → Appraise → Assess' },
        { id: 'b', text: 'Ask → Acquire → Appraise → Apply → Assess' },
        { id: 'c', text: 'Appraise → Ask → Acquire → Assess → Apply' },
        { id: 'd', text: 'Ask → Appraise → Acquire → Assess → Apply' },
      ],
      answerId: 'b',
      explanation: 'The five A’s run Ask (frame a PICO question) → Acquire (search evidence) → Appraise (validity/importance/applicability) → Apply (with expertise and patient values) → Assess (audit performance).',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which of the following is a foreground (PICO) question rather than a background question?',
      options: [
        { id: 'a', text: 'What is the pathophysiology of heart failure?' },
        { id: 'b', text: 'How is troponin normally metabolised?' },
        { id: 'c', text: 'In adults with heart failure, does drug X vs placebo reduce mortality?' },
        { id: 'd', text: 'What are the four chambers of the heart?' },
      ],
      answerId: 'c',
      explanation: 'A foreground question specifies Population, Intervention, Comparison, and Outcome for a particular clinical decision. The others ask for general knowledge (background questions) answered by textbooks.',
      tests: 'exam',
    },
  ],
};

export default ichEbmFiveSteps;
