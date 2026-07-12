import type { Lecture } from '../../lib/types';

export const behPersonalityDisorders: Lecture = {
  id: 'beh-personality-disorders',
  title: 'Personality Disorders: Clusters A, B, C',
  system: 'community',
  source: 'L11 — Personality & Trait Theory',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Behavioral Science' },
    { kind: 'lecture', label: 'L11 Personality' },
    { kind: 'disease', label: 'Clusters A · B · C' },
    { kind: 'exam', label: 'Ego-syntonic pattern' },
    { kind: 'mechanism', label: 'Maladaptive traits' },
  ],

  highYield: [
    '**A personality disorder (DSM-5-TR)** is an **enduring, pervasive, inflexible** pattern of inner experience and behaviour that **deviates from cultural expectations**, begins by **adolescence/early adulthood**, is stable over time, and causes **distress or impairment**. It manifests in ≥2 of: cognition, affect, interpersonal function and impulse control. Traits become disorders only at this threshold — see [[beh-personality-trait-theory]].',
    '**Ego-syntonic:** patients typically experience the traits as **part of themselves**, not as a problem, so they seek help reluctantly and blame others. This contrasts with the **ego-dystonic** distress of most other disorders in [[beh-other-major-disorders]].',
    '**Cluster A (odd/eccentric) — “weird”:** **Paranoid** (pervasive distrust and suspicion), **Schizoid** (detachment, a genuine loner who does **not want** relationships) and **Schizotypal** (odd beliefs, magical thinking, eccentric behaviour). This cluster sits on the schizophrenia spectrum — see [[beh-psychotic-disorders]].',
    '**Cluster B (dramatic/emotional/erratic) — “wild”:** **Antisocial** (violating others’ rights; conduct disorder before 15, age ≥18 to diagnose), **Borderline** (instability of relationships, self-image and affect; impulsivity; fear of abandonment; **splitting** and self-harm), **Histrionic** (attention-seeking, shallow emotionality) and **Narcissistic** (grandiosity, need for admiration, lack of empathy). Defenses like **splitting** and **projection** dominate — see [[beh-defense-mechanisms]].',
    '**Cluster C (anxious/fearful) — “worried”:** **Avoidant** (social inhibition and fear of rejection — **wants** relationships but avoids them), **Dependent** (clinging, submissive, needs to be cared for) and **Obsessive-Compulsive PD** (perfectionism, control, rigidity — **ego-syntonic**, and distinct from OCD).',
  ],

  mechanism: {
    title: 'DSM-5-TR clusters: A (odd) → B (dramatic) → C (anxious)',
    steps: [
      { id: 's1', label: 'Cluster A — Paranoid, Schizoid, Schizotypal (odd/eccentric)' },
      { id: 's2', label: 'Cluster B — Antisocial, Borderline, Histrionic, Narcissistic (dramatic)', emphasis: 'key' },
      { id: 's3', label: 'Cluster C — Avoidant, Dependent, Obsessive-Compulsive (anxious)' },
      { id: 's4', label: 'Common thread: enduring, pervasive, inflexible, ego-syntonic', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Personality-disorder traits are typically ego-syntonic', mechanism: 'Patients see the pattern as who they are, so insight and help-seeking are low', significance: 'key' },
    { sign: 'Onset by adolescence/early adulthood, stable and pervasive', mechanism: 'The pattern is trait-like across situations, not an episodic state', significance: 'key' },
    { sign: 'Splitting and self-harm point to borderline PD', mechanism: 'Affective instability plus all-good/all-bad thinking and impulsivity characterise Cluster B borderline', significance: 'key' },
    { sign: 'Schizoid does not want relationships; avoidant wants but fears them', mechanism: 'Schizoid reflects true detachment, avoidant reflects fear of rejection despite a desire to connect', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A patient with unstable relationships, self-harm, impulsivity and terror of abandonment', meaning: 'Borderline personality disorder (Cluster B)' },
    { clue: 'A solitary man who genuinely prefers to be alone and is indifferent to praise or criticism', meaning: 'Schizoid personality disorder (Cluster A) — not avoidant' },
    { clue: 'A perfectionistic, controlling patient preoccupied with rules and order who sees no problem with it', meaning: 'Obsessive-compulsive PD — ego-syntonic, distinct from ego-dystonic OCD' },
    { clue: 'A grandiose patient who demands admiration and lacks empathy for staff', meaning: 'Narcissistic personality disorder (Cluster B)' },
  ],

  treatment: [
    { logic: 'Psychotherapy is first-line', detail: 'Dialectical behaviour therapy has the strongest evidence for borderline PD; medication targets specific symptoms (mood, impulsivity, transient psychosis) rather than the disorder itself.' },
    { logic: 'Set consistent boundaries as a team', detail: 'Recognising splitting and projection helps staff stay consistent and non-reactive, reducing the manipulation and conflict these defenses can generate — see [[beh-defense-mechanisms]].' },
  ],

  mnemonics: [
    { hook: 'A/B/C = Weird, Wild, Worried', expansion: ['Cluster A odd/eccentric (weird)', 'Cluster B dramatic/erratic (wild)', 'Cluster C anxious/fearful (worried)'] },
    { hook: 'Cluster A = the 3 P’s of the spectrum', expansion: ['Paranoid — distrust', 'Schizoid — detached loner', 'Schizotypal — odd/magical thinking'] },
  ],

  traps: [
    {
      questionCategory: 'OCPD vs OCD',
      wrongInstinct: 'Obsessive-compulsive personality disorder and OCD are the same condition',
      rightAnswer: 'OCPD is an ego-syntonic personality pattern of perfectionism and control; OCD is an ego-dystonic disorder with distressing obsessions and compulsions',
      why: 'OCPD patients see their rigidity as reasonable, whereas OCD patients are distressed by unwanted intrusive thoughts and rituals — see [[beh-other-major-disorders]].',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient has a longstanding pattern of unstable relationships, an unstable self-image, marked impulsivity, recurrent self-harm and intense fear of abandonment. Which personality disorder and cluster is most likely?',
      options: [
        { id: 'a', text: 'Schizotypal, Cluster A' },
        { id: 'b', text: 'Borderline, Cluster B' },
        { id: 'c', text: 'Avoidant, Cluster C' },
        { id: 'd', text: 'Obsessive-compulsive, Cluster C' },
      ],
      answerId: 'b',
      explanation: 'Instability of relationships, self-image and affect with impulsivity, self-harm and abandonment fears defines borderline personality disorder, one of the dramatic Cluster B disorders.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'Which feature most helps distinguish obsessive-compulsive personality disorder from obsessive-compulsive disorder (OCD)?',
      options: [
        { id: 'a', text: 'OCPD traits are ego-syntonic, whereas OCD symptoms are ego-dystonic and distressing' },
        { id: 'b', text: 'OCPD involves true hallucinations' },
        { id: 'c', text: 'OCD begins only after age 50' },
        { id: 'd', text: 'OCPD is diagnosed only in childhood' },
      ],
      answerId: 'a',
      explanation: 'In OCPD the perfectionism and rigidity feel natural and reasonable to the patient (ego-syntonic), whereas OCD features unwanted, distressing obsessions and compulsions (ego-dystonic).',
      tests: 'exam',
    },
  ],
};

export default behPersonalityDisorders;
