import type { Lecture } from '../../lib/types';

export const behDefenseMechanisms: Lecture = {
  id: 'beh-defense-mechanisms',
  title: 'Ego Defense Mechanisms',
  system: 'community',
  source: 'L9 — Psychodynamic Theories & Defense Mechanisms',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Behavioral Science' },
    { kind: 'lecture', label: 'L9 Psychodynamic Theory' },
    { kind: 'mechanism', label: 'Mature → psychotic' },
    { kind: 'exam', label: 'Repression vs suppression' },
    { kind: 'disease', label: 'PD associations' },
  ],

  highYield: [
    '**Defense mechanisms** are largely **unconscious** ego strategies that reduce the anxiety of internal conflict (see [[beh-freud-structural-topographic]]). Vaillant graded them **mature → neurotic → immature → psychotic** by how adaptive and reality-preserving they are.',
    '**Mature (adaptive):** **sublimation** (channel an unacceptable impulse into a productive one — aggression → surgery), **suppression** (the **only conscious** defense — deliberately postponing a worry), **altruism**, **humour** and **anticipation**. These preserve reality and relationships.',
    '**Neurotic (intermediate):** **repression** (unconscious blocking from awareness), **displacement** (redirecting affect onto a safer target), **reaction formation** (feeling the opposite of a threatening impulse), **rationalization**, **intellectualization**, **isolation of affect** and **undoing**.',
    '**Immature:** **projection** (attributing one’s own unacceptable feelings to others — basis of paranoia), **splitting** (people are all-good or all-bad — hallmark of borderline PD), **acting out**, **regression**, **denial** and **passive aggression**. **Psychotic** defenses (**denial of external reality, distortion, delusional projection**) break with reality.',
    '**High-yield clinical links:** **splitting** and **acting out** typify borderline patients; **projection** typifies paranoid patients — see [[beh-personality-disorders]]. Recognising a patient’s defenses guides empathic responses and formulation; compare the coping styles in [[beh-stress-response]].',
  ],

  mechanism: {
    title: 'Vaillant’s hierarchy: Mature → Neurotic → Immature → Psychotic',
    steps: [
      { id: 's1', label: 'Mature — sublimation, suppression, altruism, humour', emphasis: 'key' },
      { id: 's2', label: 'Neurotic — repression, displacement, reaction formation' },
      { id: 's3', label: 'Immature — projection, splitting, acting out, regression' },
      { id: 's4', label: 'Psychotic — denial of reality, distortion, delusional projection', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Suppression is conscious; repression is unconscious', mechanism: 'Suppression deliberately postpones a thought; repression keeps it out of awareness automatically', significance: 'key' },
    { sign: 'Sublimation channels the impulse into a socially useful act', mechanism: 'The drive is expressed constructively rather than transformed into its opposite (reaction formation)', significance: 'key' },
    { sign: 'Splitting = viewing people as all-good or all-bad', mechanism: 'Inability to integrate positive and negative qualities; classically seen in borderline PD', significance: 'key' },
    { sign: 'Projection attributes one’s own unacceptable feelings to others', mechanism: 'Externalising the impulse reduces internal conflict and underlies paranoid thinking', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A surgeon channels aggressive impulses into meticulous operating', meaning: 'Sublimation — a mature defense' },
    { clue: 'A man furious at his boss goes home and yells at his children', meaning: 'Displacement onto a safer target' },
    { clue: 'A person with unacknowledged hostility insists everyone else is out to get him', meaning: 'Projection — an immature defense' },
    { clue: 'A patient calls one nurse “perfect” and another “cruel and useless” on the same day', meaning: 'Splitting — classically seen in borderline personality organisation' },
  ],

  treatment: [
    { logic: 'Name the defense to guide the response', detail: 'Recognising splitting or projection lets the team stay consistent and avoid being drawn into the patient’s all-good/all-bad framing.' },
    { logic: 'Support mature defenses', detail: 'Therapy helps shift patients from immature/neurotic toward mature defenses (suppression, sublimation, humour) that preserve reality and relationships.' },
  ],

  mnemonics: [
    { hook: 'Mature defenses = the “SASH”', expansion: ['Sublimation, Altruism, Suppression, Humour', 'Suppression is the only conscious defense'] },
    { hook: 'Splitting → Borderline; Projection → Paranoid', expansion: ['All-good/all-bad = splitting (borderline)', 'Blaming others for your own feelings = projection (paranoid)'] },
  ],

  traps: [
    {
      questionCategory: 'Repression vs suppression',
      wrongInstinct: 'Repression and suppression are just two words for pushing a thought away',
      rightAnswer: 'Suppression is a conscious, voluntary decision to postpone a thought; repression is an unconscious, automatic blocking from awareness',
      why: 'The discriminator is awareness — suppression is the single conscious (and mature) defense, whereas repression operates outside awareness.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A medical student consciously decides not to dwell on a frightening exam result until after her shift, then addresses it that evening. Which defense mechanism is this?',
      options: [
        { id: 'a', text: 'Repression' },
        { id: 'b', text: 'Suppression' },
        { id: 'c', text: 'Denial' },
        { id: 'd', text: 'Reaction formation' },
      ],
      answerId: 'b',
      explanation: 'Deliberately and consciously postponing attention to a distressing thought is suppression, the only conscious defense and a mature one; repression would be unconscious.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'An inpatient describes one physician as flawless and another as heartless, with no middle ground, and the views flip day to day. This pattern most likely reflects:',
      options: [
        { id: 'a', text: 'Sublimation' },
        { id: 'b', text: 'Displacement' },
        { id: 'c', text: 'Splitting' },
        { id: 'd', text: 'Intellectualization' },
      ],
      answerId: 'c',
      explanation: 'Viewing people as entirely good or entirely bad, unable to integrate mixed qualities, is splitting — an immature defense classically associated with borderline personality disorder.',
      tests: 'disease',
    },
  ],
};

export default behDefenseMechanisms;
