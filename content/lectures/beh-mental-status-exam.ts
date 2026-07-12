import type { Lecture } from '../../lib/types';

export const behMentalStatusExam: Lecture = {
  id: 'beh-mental-status-exam',
  title: 'The Mental Status Examination (MSE)',
  system: 'community',
  source: 'L3 — Psychiatric Assessment & Psychological Testing',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Behavioral Science' },
    { kind: 'lecture', label: 'L3 Psychiatric Assessment' },
    { kind: 'exam', label: 'Mood vs affect · thought form vs content' },
    { kind: 'mechanism', label: 'Observed cross-sectional snapshot' },
  ],

  highYield: [
    '**The MSE is the objective, here-and-now snapshot** of a patient’s mental functioning — the psychiatric equivalent of the physical exam. It complements the reported [[beh-psychiatric-history]]: the history is what the patient **tells** you, the MSE is what you **observe**.',
    '**Domains:** appearance & behaviour, speech, **mood vs affect**, **thought process vs content**, perception, cognition, and **insight & judgement**. Most are observed continuously through the interview — only cognition and insight need direct questioning.',
    '**Mood vs affect — the classic distinction.** **Mood** is the patient’s subjective, sustained emotional state (what they report — the “climate”); **affect** is the objective, moment-to-moment emotion you observe (the “weather”), rated for range, appropriateness, and **congruence** with mood.',
    '**Thought process (form) vs thought content.** **Process** is **how** thoughts connect — circumstantiality, tangentiality, flight of ideas, loosening of associations; **content** is **what** they are about — delusions, obsessions, and suicidal or homicidal ideation. Disordered speech is the window onto disordered thought.',
    '**Insight and judgement guide capacity and adherence.** Insight = awareness of being ill; judgement = the soundness of decisions. Both shape treatment engagement and are core to the risk picture (see [[beh-suicide-assessment]] and disorders in [[beh-psychotic-disorders]]).',
  ],

  mechanism: {
    title: 'Appearance & behaviour → speech → mood & affect → thought → perception → cognition → insight/judgement',
    steps: [
      { id: 's1', label: 'Appearance, behaviour & speech (all observed)' },
      { id: 's2', label: 'Mood (subjective, reported) vs affect (objective, observed)', emphasis: 'key' },
      { id: 's3', label: 'Thought process (form) vs content — delusions, ideation', emphasis: 'key' },
      { id: 's4', label: 'Perception — hallucinations, illusions' },
      { id: 's5', label: 'Cognition, then insight & judgement', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Mood is subjective and sustained; affect is objective and immediate', mechanism: 'Mood is the reported climate; affect is the observed weather — checked for range and congruence', significance: 'key' },
    { sign: 'Thought process is the form; thought content is the subject', mechanism: 'Process = how thoughts flow; content = what the thoughts are about (delusions, ideation)', significance: 'key' },
    { sign: 'The MSE describes the here and now, not the longitudinal story', mechanism: 'It is a cross-sectional, objective snapshot — the history supplies the timeline', significance: 'key' },
    { sign: 'Insight and judgement predict adherence and capacity', mechanism: 'Awareness of illness and sound decision-making shape engagement and risk', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A patient says they feel “fine” while sitting tearful with a flat, restricted affect', meaning: 'Mood–affect incongruence — the reported state does not match the observed emotion' },
    { clue: 'Answers wander off the point and never return to the original question', meaning: 'Tangentiality — a thought-process (form) abnormality' },
    { clue: 'A patient is convinced the television broadcasts personal messages to them', meaning: 'A delusion of reference — a thought-content abnormality' },
    { clue: 'A voice comments aloud on the patient’s actions with no external source', meaning: 'A third-person auditory hallucination — a perceptual abnormality' },
  ],

  treatment: [
    { logic: 'Weave the MSE through the interview', detail: 'Appearance, behaviour, speech, mood, affect, thought, and perception are gathered by observation as you talk; reserve direct testing for cognition, insight, and judgement.' },
  ],

  mnemonics: [
    { hook: 'ASEPTIC: Appearance, Speech, Emotion (mood & affect), Perception, Thought, Insight, Cognition', expansion: ['Runs the MSE domains in order', 'Emotion splits into subjective mood and observed affect'] },
    { hook: 'Mood is the climate; affect is the weather', expansion: ['Mood = subjective and sustained', 'Affect = objective and moment-to-moment'] },
  ],

  traps: [
    {
      questionCategory: 'Mood vs affect',
      wrongInstinct: 'Mood and affect are interchangeable terms for how the patient feels',
      rightAnswer: 'Mood is the patient’s subjective, sustained state; affect is the examiner’s objective, moment-to-moment observation',
      why: 'Their mismatch — incongruent or restricted affect against a stated mood — is itself a key finding.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'During the MSE, a patient states their mood is “good,” but throughout the interview they appear tearful with a constricted, flat range of emotional expression. Which term best describes the observed emotional state?',
      options: [
        { id: 'a', text: 'Mood' },
        { id: 'b', text: 'Affect' },
        { id: 'c', text: 'Insight' },
        { id: 'd', text: 'Thought content' },
      ],
      answerId: 'b',
      explanation: 'Affect is the objective, moment-to-moment emotion the examiner observes (here, constricted and flat), whereas mood is the patient’s subjective, sustained self-report. The mismatch is a mood–affect incongruence.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A patient’s replies are logically connected but include so much irrelevant detail that answering a simple question takes several minutes, though they eventually reach the point. This is best classified under which MSE domain?',
      options: [
        { id: 'a', text: 'Thought content' },
        { id: 'b', text: 'Perception' },
        { id: 'c', text: 'Thought process' },
        { id: 'd', text: 'Cognition' },
      ],
      answerId: 'c',
      explanation: 'How thoughts are connected is the thought process (form). Excessive, roundabout detail that eventually returns to the point is circumstantiality — a thought-process finding, distinct from thought content (what the thoughts are about).',
      tests: 'mechanism',
    },
  ],
};

export default behMentalStatusExam;
