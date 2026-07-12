import type { Lecture } from '../../lib/types';

export const behFreudStructuralTopographic: Lecture = {
  id: 'beh-freud-structural-topographic',
  title: 'Freud: Topographic & Structural Models',
  system: 'community',
  source: 'L9 — Psychodynamic Theories & Defense Mechanisms',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Behavioral Science' },
    { kind: 'lecture', label: 'L9 Psychodynamic Theory' },
    { kind: 'mechanism', label: 'Id · Ego · Superego' },
    { kind: 'exam', label: 'Conscious → unconscious' },
    { kind: 'treatment', label: 'Psychoanalysis' },
  ],

  highYield: [
    '**Psychoanalytic theory (Freud)** rests on **psychic determinism** (nothing mental is accidental) and the primacy of the **unconscious**. Conflict between drives, morality and reality generates anxiety, which the mind manages with the **defense mechanisms** of [[beh-defense-mechanisms]].',
    '**Topographic model** — three levels of awareness. **Conscious:** what you are aware of now. **Preconscious:** not in awareness but readily retrievable (a phone number). **Unconscious:** repressed wishes, drives and memories that are inaccessible yet motivating, surfacing in dreams, slips and symptoms. Think of an **iceberg** with most below the surface.',
    '**Structural model** — three agencies. The **id** (present at birth, fully unconscious) runs on the **pleasure principle** and **primary-process** thinking. The **superego** holds conscience and the **ego ideal** (internalised morality). The **ego** runs on the **reality principle** and **secondary-process** thinking, mediating among id, superego and the external world.',
    '**The ego is the negotiator:** it satisfies the id’s drives in socially acceptable, realistic ways while respecting the superego, deploying **defense mechanisms** when conflict threatens to overwhelm it. The **superego** largely forms around age 5–6 as the Oedipal conflict resolves — see [[beh-psychosexual-stages]].',
    '**Therapeutic techniques** aim to make the unconscious conscious: **free association**, **dream analysis** (manifest vs latent content) and interpreting **transference** — the patient redirecting feelings about early figures onto the therapist, central to [[beh-doctor-patient-relationship]]. Erikson later reframed these ideas socially in [[beh-erikson-psychosocial]].',
  ],

  mechanism: {
    title: 'Structural conflict: id drive → superego constraint → ego mediates → defense → behaviour',
    steps: [
      { id: 's1', label: 'Id demands immediate gratification (pleasure principle)' },
      { id: 's2', label: 'Superego imposes morality/ideals (conscience)' },
      { id: 's3', label: 'Ego mediates the conflict against reality', emphasis: 'key' },
      { id: 's4', label: 'Signal anxiety triggers a defense mechanism', emphasis: 'key' },
      { id: 's5', label: 'A compromise behaviour or symptom emerges' },
    ],
  },

  examFindings: [
    { sign: 'Only the id is present at birth; ego and superego develop later', mechanism: 'The ego emerges as reality is negotiated; the superego forms ~age 5–6 with Oedipal resolution', significance: 'key' },
    { sign: 'Id = pleasure principle; ego = reality principle', mechanism: 'The id seeks immediate discharge (primary process); the ego delays and plans (secondary process)', significance: 'key' },
    { sign: 'The preconscious is retrievable; the unconscious is not', mechanism: 'Preconscious material can be called into awareness at will; unconscious material is actively kept out', significance: 'key' },
    { sign: 'Defense mechanisms are ego functions and largely unconscious', mechanism: 'The ego uses them automatically to keep anxiety-provoking material out of awareness', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A patient “accidentally” calls his wife by his ex-girlfriend’s name', meaning: 'A parapraxis (Freudian slip) — unconscious content breaking through' },
    { clue: 'A person acts purely on impulse for immediate pleasure with no regard for consequences', meaning: 'Id-dominant, pleasure-principle behaviour with weak ego control' },
    { clue: 'A patient begins reacting to the therapist as though he were her critical father', meaning: 'Transference — early relational patterns redirected onto the clinician' },
    { clue: 'A rigid, guilt-ridden, morally harsh patient', meaning: 'An overactive/punitive superego dominating the personality' },
  ],

  treatment: [
    { logic: 'Make the unconscious conscious', detail: 'Use free association and dream analysis (interpreting latent content behind the manifest dream) to bring repressed conflict into awareness where the ego can work on it.' },
    { logic: 'Work with transference', detail: 'Interpret the feelings the patient transfers onto the therapist as a window into unresolved early relationships — while monitoring the therapist’s own countertransference.' },
  ],

  mnemonics: [
    { hook: 'Id = Instant; Ego = rEality; Superego = Sensor/morality', expansion: ['Id: pleasure principle, immediate gratification', 'Ego: reality principle, the mediator', 'Superego: conscience and the ego ideal'] },
    { hook: 'Iceberg: tip = conscious, waterline = preconscious, depths = unconscious', expansion: ['Most mental life is below the surface', 'The unconscious drives behaviour without awareness'] },
  ],

  traps: [
    {
      questionCategory: 'Preconscious vs unconscious',
      wrongInstinct: 'Anything not currently in awareness is “the unconscious”',
      rightAnswer: 'Preconscious material is not in awareness but can be readily retrieved; the unconscious is actively kept inaccessible',
      why: 'A forgotten-but-recallable fact is preconscious, whereas a repressed traumatic wish is unconscious and defended against.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which structural component operates on the pleasure principle and is fully present at birth?',
      options: [
        { id: 'a', text: 'The ego' },
        { id: 'b', text: 'The superego' },
        { id: 'c', text: 'The id' },
        { id: 'd', text: 'The ego ideal' },
      ],
      answerId: 'c',
      explanation: 'The id is the only agency present at birth; it is entirely unconscious and demands immediate gratification under the pleasure principle. The ego and superego develop later.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient can readily recall her home address when asked but was not thinking of it a moment earlier. In the topographic model, this information is held in the:',
      options: [
        { id: 'a', text: 'Conscious' },
        { id: 'b', text: 'Preconscious' },
        { id: 'c', text: 'Unconscious' },
        { id: 'd', text: 'Superego' },
      ],
      answerId: 'b',
      explanation: 'The preconscious holds material that is out of current awareness but can be brought to mind easily, unlike the unconscious, which is actively kept inaccessible.',
      tests: 'exam',
    },
  ],
};

export default behFreudStructuralTopographic;
