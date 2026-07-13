import type { Lecture } from '../../lib/types';

export const behPsychologicalTesting: Lecture = {
  id: 'beh-psychological-testing',
  title: 'Psychological Testing',
  system: 'community',
  source: 'L3 — Psychiatric Assessment & Psychological Testing',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Behavioral Science' },
    { kind: 'lecture', label: 'L3 Psychiatric Assessment' },
    { kind: 'investigation', label: 'WAIS · MMPI · Rorschach · TAT' },
    { kind: 'exam', label: 'Objective vs projective · reliability vs validity' },
  ],

  highYield: [
    'Psychological tests are standardised, structured measures that supplement — never replace — the clinical [[beh-psychiatric-history]] and [[beh-mental-status-exam]]. Four broad families: **intelligence**, **personality**, **neuropsychological**, and **rating scales**.',
    '**Intelligence: the Wechsler scales are the workhorses** — **WAIS** (adults) and **WISC** (children), plus Stanford-Binet. IQ is a **deviation score** with a mean of **100** and a standard deviation of **15**, so about 68% of people score 85–115.',
    '**Personality tests split into objective vs projective.** **Objective** tests are structured, self-report, and empirically scored — the **MMPI** (hundreds of true/false items) is the prototype and carries **validity scales** that detect faking-good or faking-bad. **Projective** tests use ambiguous stimuli to elicit unconscious material — the **Rorschach** inkblots and the **TAT** (make up a story about a picture).',
    '**Neuropsychological tests map brain–behaviour relationships** (Halstead-Reitan, Bender-Gestalt visuomotor test), and **rating scales quantify and track symptom severity** — PHQ-9 and Beck for depression, Y-BOCS for OCD — useful for measuring change over time (relevant across [[beh-mood-anxiety-disorders]] and [[beh-other-major-disorders]]).',
    '**Reliability is not validity.** **Reliability** = consistency/reproducibility of the score; **validity** = whether the test measures what it claims. A test can be highly reliable yet invalid (consistently wrong), but a valid test must first be reliable.',
  ],

  mechanism: {
    title: 'Intelligence → objective personality → projective personality → neuropsychological → rating scales',
    steps: [
      { id: 's1', label: 'Intelligence — WAIS/WISC; IQ mean 100, SD 15' },
      { id: 's2', label: 'Objective personality — MMPI, structured with validity scales', emphasis: 'key' },
      { id: 's3', label: 'Projective — Rorschach & TAT; ambiguous → unconscious', emphasis: 'key' },
      { id: 's4', label: 'Neuropsychological — brain–behaviour (Bender-Gestalt)' },
      { id: 's5', label: 'Rating scales — quantify and track severity', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Objective tests are structured and empirically scored; projective tests are ambiguous and interpretive', mechanism: 'MMPI standardises responses; Rorschach and TAT elicit projected, unconscious material', significance: 'key' },
    { sign: 'A test can be reliable but not valid', mechanism: 'Consistent reproducibility does not guarantee it measures the intended construct', significance: 'key' },
    { sign: 'IQ is a deviation score: mean 100, SD 15', mechanism: 'Scores are normed against the population, not counted as raw correct answers', significance: 'supportive' },
    { sign: 'MMPI validity scales flag over- and under-reporting', mechanism: 'Built-in scales detect faking-good or faking-bad response styles', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A patient is shown a series of ambiguous inkblots and asked what they might be', meaning: 'The Rorschach — a projective personality test' },
    { clue: 'A long true/false self-report questionnaire with built-in lie-detection scales', meaning: 'The MMPI — the prototypical objective personality test' },
    { clue: 'A scale gives the same result on retest but fails to predict the outcome it targets', meaning: 'Reliable but not valid — consistent yet measuring the wrong thing' },
    { clue: 'A patient is asked to invent a story about a picture of two people', meaning: 'The TAT — a projective test that surfaces themes and motives' },
  ],

  treatment: [
    { logic: 'Match the tool to the question', detail: 'Use objective tests for standardised comparison, projective tests to generate depth hypotheses, neuropsychological batteries for cognitive mapping, and rating scales to quantify severity and track change.' },
  ],

  mnemonics: [
    { hook: 'Projective = Rorschach & TAT (ambiguous); Objective = MMPI (structured)', expansion: ['Projective surfaces the unconscious', 'Objective is self-report with validity scales'] },
    { hook: 'Reliable = repeatable; Valid = right', expansion: ['A test can be reliable but invalid', 'Validity requires reliability first'] },
  ],

  traps: [
    {
      questionCategory: 'Objective vs projective testing',
      wrongInstinct: 'The Rorschach and MMPI are both objective personality tests',
      rightAnswer: 'The MMPI is objective (structured, empirically scored); the Rorschach and TAT are projective (ambiguous stimuli, interpretive)',
      why: 'Objective tests standardise the response; projective tests deliberately leave it ambiguous to elicit unconscious material.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A psychologist administers a test in which the patient views ambiguous inkblots and describes what each could represent. This test is best categorised as:',
      options: [
        { id: 'a', text: 'An objective personality test' },
        { id: 'b', text: 'A projective personality test' },
        { id: 'c', text: 'An intelligence test' },
        { id: 'd', text: 'A symptom rating scale' },
      ],
      answerId: 'b',
      explanation: 'The Rorschach inkblot test uses ambiguous stimuli to elicit projected, unconscious material, making it a projective test. Objective tests such as the MMPI are structured and empirically scored.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A new questionnaire yields nearly identical scores each time it is re-administered to the same stable patients, yet it fails to distinguish depressed from non-depressed individuals. This questionnaire is best described as:',
      options: [
        { id: 'a', text: 'Reliable and valid' },
        { id: 'b', text: 'Neither reliable nor valid' },
        { id: 'c', text: 'Reliable but not valid' },
        { id: 'd', text: 'Valid but not reliable' },
      ],
      answerId: 'c',
      explanation: 'Consistent, reproducible scores mean the test is reliable, but failure to measure the intended construct (depression) means it is not valid. A test can be reliable without being valid, though validity requires reliability.',
      tests: 'exam',
    },
  ],
};

export default behPsychologicalTesting;
