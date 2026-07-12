import type { Lecture } from '../../lib/types';

export const behOtherMajorDisorders: Lecture = {
  id: 'beh-other-major-disorders',
  title: 'Other Major Disorders & the DSM-5-TR Map',
  system: 'community',
  source: 'L4 — Mental Disorders (DSM-5-TR)',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Behavioral Science' },
    { kind: 'lecture', label: 'L4 Mental Disorders (DSM-5-TR)' },
    { kind: 'disease', label: 'OCD · PTSD · somatic · substance · neurodevelopmental' },
    { kind: 'exam', label: 'Symptom vs disorder · stigma' },
  ],

  highYield: [
    '**DSM-5-TR groups disorders into chapters by shared features.** Beyond mood, anxiety, and psychosis, the major families are **obsessive-compulsive and related**, **trauma- and stressor-related**, **somatic symptom and related**, **substance-related and addictive**, and **neurodevelopmental** disorders. This module is an orienting map, not a full workup.',
    '**Obsessive-Compulsive and Related Disorders.** **OCD** = intrusive, anxiety-provoking **obsessions** driving repetitive, neutralising **compulsions** that are **ego-dystonic** and time-consuming (often >1 hour/day). The chapter also holds body dysmorphic disorder, hoarding, and trichotillomania. Note: DSM-5 moved OCD OUT of the anxiety disorders in [[beh-mood-anxiety-disorders]].',
    '**Trauma- and Stressor-Related Disorders.** **PTSD** follows exposure to actual or threatened death, serious injury, or sexual violence, with four clusters — **intrusion, avoidance, negative alterations in cognition/mood, and arousal** — lasting **>1 month**. Acute stress disorder covers 3 days to 1 month; adjustment disorders are milder. Trauma links to [[beh-abuse-neglect]].',
    '**Somatic symptom** disorders feature real, distressing bodily symptoms with excessive thoughts/behaviours (DSM-5 dropped the “medically unexplained” requirement). **Substance-related** disorders merged the old abuse and dependence into a single **use-disorder spectrum** graded mild/moderate/severe. **Neurodevelopmental** disorders (intellectual disability, autism spectrum, ADHD) begin in the developmental period — see [[beh-development-principles]].',
    '**A symptom is not a disorder.** A disorder is a **syndrome** — a cluster of symptoms meeting a threshold number and duration that causes **clinically significant distress or functional impairment** and is not better explained otherwise. Applying this test, and using non-stigmatising, person-first language, is core to reducing **stigma**.',
  ],

  mechanism: {
    title: 'One DSM-5-TR map: OCD-related · trauma · somatic · substance · neurodevelopmental',
    steps: [
      { id: 's1', label: 'OCD-related — obsessions drive compulsions (moved out of anxiety)', emphasis: 'key' },
      { id: 's2', label: 'Trauma/stressor — PTSD after trauma, >1 month (moved out of anxiety)' },
      { id: 's3', label: 'Somatic symptom — genuine distress about bodily symptoms' },
      { id: 's4', label: 'Substance-related — abuse + dependence merged into one severity spectrum' },
      { id: 's5', label: 'Neurodevelopmental — onset in the developmental period', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'A symptom is not a disorder', mechanism: 'A disorder needs a syndrome plus duration plus clinically significant distress or impairment', significance: 'key' },
    { sign: 'DSM-5 moved OCD and PTSD out of the anxiety-disorders chapter', mechanism: 'Each now sits in its own group — OCD-related and trauma/stressor-related', significance: 'key' },
    { sign: 'OCD obsessions are ego-dystonic and drive neutralising compulsions', mechanism: 'Intrusive, unwanted thoughts raise anxiety that repetitive behaviours temporarily relieve', significance: 'supportive' },
    { sign: 'DSM-5 merged substance abuse and dependence into one spectrum', mechanism: 'A single use-disorder is graded mild, moderate, or severe by symptom count', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Intrusive contamination fears relieved only by hours of ritual hand-washing', meaning: 'OCD — ego-dystonic obsessions driving neutralising compulsions' },
    { clue: 'Flashbacks, avoidance, and hyperarousal for three months after an assault', meaning: 'PTSD — trauma-related, symptoms lasting over one month' },
    { clue: 'Persistent distress and repeated doctor-shopping over benign bodily sensations', meaning: 'A somatic symptom disorder — real distress with excessive health behaviours' },
    { clue: 'Everyone feels sad at times, but it lifts and never impairs daily function', meaning: 'A symptom, not a disorder — it lacks clinical significance' },
  ],

  treatment: [
    { logic: 'Apply the clinical-significance test before labelling', detail: 'Confirm the symptoms form a recognised syndrome AND cause significant distress or functional impairment, and are not better explained by another cause, before assigning a diagnosis.' },
    { logic: 'Use language that reduces stigma', detail: 'Prefer person-first phrasing (a person with schizophrenia, not “a schizophrenic”) and frame mental illness as a treatable health condition to lower barriers to care.' },
  ],

  mnemonics: [
    { hook: 'PTSD clusters = trauma + I-A-N-A: Intrusion, Avoidance, Negative cognition/mood, Arousal', expansion: ['Symptoms must last more than one month', 'Under one month is acute stress disorder'] },
  ],

  traps: [
    {
      questionCategory: 'DSM-5-TR classification',
      wrongInstinct: 'OCD and PTSD are types of anxiety disorder',
      rightAnswer: 'In DSM-5-TR, OCD sits in obsessive-compulsive and related disorders and PTSD in trauma- and stressor-related disorders — separate chapters from anxiety disorders',
      why: 'The DSM-5 reorganisation moved both out of the anxiety-disorders group, a frequently tested change.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'In DSM-5-TR, post-traumatic stress disorder is classified within which diagnostic grouping?',
      options: [
        { id: 'a', text: 'Anxiety disorders' },
        { id: 'b', text: 'Trauma- and stressor-related disorders' },
        { id: 'c', text: 'Somatic symptom and related disorders' },
        { id: 'd', text: 'Obsessive-compulsive and related disorders' },
      ],
      answerId: 'b',
      explanation: 'DSM-5 moved PTSD out of the anxiety disorders into its own trauma- and stressor-related disorders chapter, alongside acute stress disorder and adjustment disorders. OCD likewise moved into obsessive-compulsive and related disorders.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'A student feels sad and worried for a day after a poor exam result, then returns to normal with no effect on studies, sleep, or relationships. Why does this not constitute a mental disorder?',
      options: [
        { id: 'a', text: 'The emotion was not intense enough to be real' },
        { id: 'b', text: 'It lacks clinically significant distress or functional impairment' },
        { id: 'c', text: 'Only sadness lasting more than 24 hours can ever qualify' },
        { id: 'd', text: 'Students are excluded from psychiatric diagnoses' },
      ],
      answerId: 'b',
      explanation: 'A disorder requires a syndrome that meets threshold and duration and causes clinically significant distress or functional impairment. A transient, self-limited reaction that does not impair function is a normal symptom, not a disorder.',
      tests: 'exam',
    },
  ],
};

export default behOtherMajorDisorders;
