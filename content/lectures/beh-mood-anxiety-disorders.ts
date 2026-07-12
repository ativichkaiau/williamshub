import type { Lecture } from '../../lib/types';

export const behMoodAnxietyDisorders: Lecture = {
  id: 'beh-mood-anxiety-disorders',
  title: 'Mood & Anxiety Disorders (DSM-5-TR)',
  system: 'community',
  source: 'L4 — Mental Disorders (DSM-5-TR)',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Behavioral Science' },
    { kind: 'lecture', label: 'L4 Mental Disorders (DSM-5-TR)' },
    { kind: 'disease', label: 'Depression · bipolar · GAD · panic' },
    { kind: 'exam', label: 'Mania vs hypomania · SIGECAPS · DIGFAST' },
  ],

  highYield: [
    '**Major depressive episode (MDE):** ≥5 of 9 symptoms for ≥2 weeks, most of the day nearly every day, and at least one must be **depressed mood** or **anhedonia** (loss of interest/pleasure). The other symptoms map to **SIGECAPS**. Distinguishing an MDE from normal grief matters — see [[beh-grief-bereavement]].',
    '**Bipolar I is defined by a single lifetime manic episode; Bipolar II requires a hypomanic episode plus a major depressive episode — never a full mania.** A **manic** episode lasts ≥1 week with marked impairment (psychosis or hospitalisation possible); a **hypomanic** episode lasts ≥4 days with no marked impairment, no psychosis, and no hospitalisation.',
    '**Mania = elevated/expansive or irritable mood PLUS increased energy/activity** (a core DSM-5-TR criterion) with ≥3 of the **DIGFAST** features (≥4 if the mood is only irritable). This activity/energy requirement was emphasised in DSM-5.',
    '**Anxiety disorders share excessive fear and anxiety.** **Generalized anxiety disorder (GAD):** uncontrollable worry more days than not for ≥6 months. **Panic disorder:** recurrent unexpected panic attacks plus ≥1 month of anticipatory worry or behaviour change. The group also includes specific phobia, social anxiety disorder, and agoraphobia.',
    '**DSM-5 reorganisation — a favourite exam point: OCD and PTSD are NO LONGER anxiety disorders.** They were moved to their own chapters (obsessive-compulsive and related; trauma- and stressor-related) — mapped in [[beh-other-major-disorders]].',
  ],

  mechanism: {
    title: 'Screen the mood episode → classify depression vs bipolar → or persistent fear → anxiety disorders',
    steps: [
      { id: 's1', label: 'Screen for a mood episode — depressed vs elevated' },
      { id: 's2', label: 'Depressive episode: ≥5 symptoms ≥2 weeks, incl. mood or anhedonia', emphasis: 'key' },
      { id: 's3', label: 'Mania (≥1 wk) → Bipolar I; hypomania (≥4 d) + MDE → Bipolar II', emphasis: 'key' },
      { id: 's4', label: 'No mood episode but persistent fear/worry → anxiety disorders' },
      { id: 's5', label: 'GAD (≥6 mo worry) · panic (unexpected attacks + anticipatory worry)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'An MDE needs ≥5/9 symptoms for ≥2 weeks, at least one being depressed mood or anhedonia', mechanism: 'The gateway symptoms define the episode; SIGECAPS supplies the rest', significance: 'key' },
    { sign: 'Bipolar I = one lifetime manic episode; Bipolar II = hypomania + MDE, never mania', mechanism: 'A single full manic episode reclassifies the patient as Bipolar I regardless of depression', significance: 'key' },
    { sign: 'Mania causes marked impairment (≥1 week); hypomania does not (≥4 days)', mechanism: 'Severity and duration separate the two elevated-mood episodes', significance: 'key' },
    { sign: 'DSM-5-TR does not classify OCD or PTSD as anxiety disorders', mechanism: 'They were reorganised into their own diagnostic chapters', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Two weeks of low mood, anhedonia, insomnia, guilt, and poor concentration', meaning: 'A major depressive episode — meets the ≥5 symptoms and ≥2-week threshold' },
    { clue: 'Four days of reduced sleep need, grandiosity, and overspending while still functioning at work', meaning: 'A hypomanic episode — points toward Bipolar II if paired with past depression' },
    { clue: 'One week of euphoria, pressured speech, reckless spending, requiring hospitalisation', meaning: 'A manic episode — diagnostic of Bipolar I' },
    { clue: 'Six months of uncontrollable worry with muscle tension and disturbed sleep', meaning: 'Generalized anxiety disorder' },
  ],

  treatment: [
    { logic: 'Always screen for past mania before labelling depression', detail: 'An unrecognised bipolar depression can switch to mania if treated with an antidepressant alone, so ask about prior elevated-mood, high-energy episodes.' },
    { logic: 'Separate a symptom from a disorder', detail: 'Symptoms must reach the diagnostic threshold and cause clinically significant distress or impairment; transient sadness or worry alone is not a mood or anxiety disorder — see [[beh-other-major-disorders]].' },
  ],

  mnemonics: [
    { hook: 'Depression = SIGECAPS: Sleep, Interest, Guilt, Energy, Concentration, Appetite, Psychomotor, Suicidality', expansion: ['Plus depressed mood or anhedonia as a gateway symptom', 'Need ≥5 total for ≥2 weeks'] },
    { hook: 'Mania = DIGFAST: Distractibility, Indiscretion, Grandiosity, Flight of ideas, Activity, Sleep (decreased need), Talkativeness', expansion: ['≥3 features (≥4 if mood is only irritable)', 'Plus elevated/irritable mood AND increased energy'] },
  ],

  traps: [
    {
      questionCategory: 'Bipolar I vs Bipolar II',
      wrongInstinct: 'Bipolar II is just a milder version of Bipolar I',
      rightAnswer: 'Bipolar II requires a hypomanic episode plus a major depressive episode; a single full manic episode makes it Bipolar I',
      why: 'The presence of even one true manic episode (marked impairment, psychosis, or hospitalisation) reclassifies the patient as Bipolar I.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient has had one hospitalised episode of a week of euphoria, decreased need for sleep, grandiosity, and reckless spending, plus prior episodes of major depression. What is the diagnosis?',
      options: [
        { id: 'a', text: 'Bipolar II disorder' },
        { id: 'b', text: 'Bipolar I disorder' },
        { id: 'c', text: 'Major depressive disorder' },
        { id: 'd', text: 'Generalized anxiety disorder' },
      ],
      answerId: 'b',
      explanation: 'A full manic episode (≥1 week, marked impairment requiring hospitalisation) defines Bipolar I disorder, regardless of any depressive episodes. Bipolar II would require hypomania (never full mania) plus a major depressive episode.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'Which statement about the DSM-5-TR classification of anxiety-related conditions is correct?',
      options: [
        { id: 'a', text: 'Obsessive-compulsive disorder is classified as an anxiety disorder' },
        { id: 'b', text: 'Post-traumatic stress disorder is classified as an anxiety disorder' },
        { id: 'c', text: 'Generalized anxiety disorder requires at least 6 months of excessive worry' },
        { id: 'd', text: 'Panic disorder requires a specific identifiable trigger for every attack' },
      ],
      answerId: 'c',
      explanation: 'GAD requires excessive, hard-to-control worry more days than not for at least 6 months. In DSM-5-TR, OCD and PTSD are no longer anxiety disorders (they have their own chapters), and panic disorder is defined by unexpected, untriggered attacks.',
      tests: 'exam',
    },
  ],
};

export default behMoodAnxietyDisorders;
