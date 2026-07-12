import type { Lecture } from '../../lib/types';

export const behPsychosexualStages: Lecture = {
  id: 'beh-psychosexual-stages',
  title: 'Freud’s Psychosexual Stages',
  system: 'community',
  source: 'L9 — Psychodynamic Theories & Defense Mechanisms',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Behavioral Science' },
    { kind: 'lecture', label: 'L9 Psychodynamic Theory' },
    { kind: 'mechanism', label: 'Oral → genital' },
    { kind: 'exam', label: 'Fixation · Oedipus' },
    { kind: 'disease', label: 'Character traits' },
  ],

  highYield: [
    '**Freud’s psychosexual theory:** the **libido** (psychosexual energy) centres on a different **erogenous zone** at each stage. **Over- or under-gratification** at a stage causes **fixation**, leaving a residue of drives and personality traits that shows up in adulthood. This builds on the structural model of [[beh-freud-structural-topographic]].',
    '**Oral (0–1 yr):** gratification through the mouth (feeding, sucking). Fixation → **dependency, gullibility, smoking, overeating** and “oral-aggressive” sarcasm. **Anal (1–3 yr):** control via **toilet training**. Fixation → **anal-retentive** (orderly, obstinate, stingy) or **anal-expulsive** (messy, careless) traits.',
    '**Phallic (3–6 yr):** focus on the genitals and the **Oedipus complex** — the child’s desire for the opposite-sex parent and rivalry with the same-sex parent, driven in boys by **castration anxiety**. Resolution comes through **identification** with the same-sex parent, which forms the **superego**.',
    '**Latency (6–puberty):** sexual urges are **dormant/sublimated** into school, friendships and skills. **Genital (puberty onward):** mature sexuality and the capacity for adult **intimacy** and love. Healthy development means resolving each earlier conflict without heavy fixation.',
    '**Exam framing:** psychosexual (Freud) is **drive-based and largely complete by adolescence**; contrast it with the **lifelong psychosocial** model of [[beh-erikson-psychosocial]] and the cognitive stages in [[beh-piaget-attachment]]. Fixations are classically expressed through the [[beh-defense-mechanisms]].',
  ],

  mechanism: {
    title: 'Psychosexual stages: Oral → Anal → Phallic → Latency → Genital',
    steps: [
      { id: 's1', label: 'Oral (0–1 yr) — mouth; dependency themes' },
      { id: 's2', label: 'Anal (1–3 yr) — toilet training; control & autonomy' },
      { id: 's3', label: 'Phallic (3–6 yr) — genitals; Oedipus/Electra → superego', emphasis: 'key' },
      { id: 's4', label: 'Latency (6–puberty) — urges dormant; skills & socialisation' },
      { id: 's5', label: 'Genital (puberty+) — mature sexuality & intimacy', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Fixation results from over- or under-gratification at a stage', mechanism: 'Unresolved conflict binds libido to that stage, shaping adult character and symptoms', significance: 'key' },
    { sign: 'The superego forms as the phallic-stage Oedipus complex resolves', mechanism: 'Identification with the same-sex parent internalises moral standards', significance: 'key' },
    { sign: 'Anal-retentive traits: orderliness, obstinacy, parsimony', mechanism: 'Fixation around the control struggle of toilet training', significance: 'supportive' },
    { sign: 'Latency is a period of relative sexual quiescence', mechanism: 'Drives are sublimated into learning and peer relationships, not a new erogenous focus', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A dependent, chain-smoking adult who is sarcastic and needy', meaning: 'Suggested oral-stage fixation in Freudian terms' },
    { clue: 'A rigidly orderly, stingy, stubborn, perfectionistic patient', meaning: 'Classic anal-retentive character constellation' },
    { clue: 'A 4-year-old boy says he wants to marry his mother and “get rid of” his father', meaning: 'Normal phallic-stage Oedipal dynamics' },
    { clue: 'A 9-year-old channels energy into sports, hobbies and same-sex friendships', meaning: 'Latency-stage sublimation of sexual drives' },
  ],

  treatment: [
    { logic: 'Use fixation as a formulation lens, not a diagnosis', detail: 'Psychosexual fixations are a historical framework for understanding character themes; they inform psychodynamic formulation rather than DSM-5-TR diagnosis.' },
    { logic: 'Address the underlying conflict in therapy', detail: 'Psychodynamic work aims to resolve the residual conflict behind a fixation-linked trait so libido is freed for mature functioning.' },
  ],

  mnemonics: [
    { hook: 'Old (Age) People Love Grapes', expansion: ['Oral, Anal, Phallic, Latency, Genital', 'The five psychosexual stages in order'] },
    { hook: 'Phallic = superego is Physically forming', expansion: ['Oedipus/Electra conflict peaks', 'Identification with the same-sex parent builds the superego'] },
  ],

  traps: [
    {
      questionCategory: 'Psychosexual vs psychosocial stages',
      wrongInstinct: 'Freud’s and Erikson’s stages are the same lifelong scheme',
      rightAnswer: 'Freud’s psychosexual stages are drive-based and largely complete by adolescence; Erikson’s psychosocial stages are social and span the whole lifespan',
      why: 'Confusing them mixes up the underlying motive (libido vs social crisis) and the timeframe (childhood vs lifelong) — see [[beh-erikson-psychosocial]].',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'In Freudian theory, resolution of the conflict in which stage is credited with forming the superego?',
      options: [
        { id: 'a', text: 'Oral' },
        { id: 'b', text: 'Anal' },
        { id: 'c', text: 'Phallic' },
        { id: 'd', text: 'Genital' },
      ],
      answerId: 'c',
      explanation: 'The superego forms in the phallic stage when the Oedipus/Electra complex resolves through identification with the same-sex parent, internalising moral standards.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient is described as excessively orderly, stubborn and miserly. Which Freudian fixation does this triad classically suggest?',
      options: [
        { id: 'a', text: 'Oral fixation' },
        { id: 'b', text: 'Anal-retentive fixation' },
        { id: 'c', text: 'Phallic fixation' },
        { id: 'd', text: 'Genital fixation' },
      ],
      answerId: 'b',
      explanation: 'Orderliness, obstinacy and parsimony are the classic anal-retentive triad, attributed to fixation at the control struggle of the anal stage.',
      tests: 'exam',
    },
  ],
};

export default behPsychosexualStages;
