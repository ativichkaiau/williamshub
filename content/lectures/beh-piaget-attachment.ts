import type { Lecture } from '../../lib/types';

export const behPiagetAttachment: Lecture = {
  id: 'beh-piaget-attachment',
  title: 'Piaget, Attachment & Separation–Individuation',
  system: 'community',
  source: 'L6 — Growth and Development',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Behavioral Science' },
    { kind: 'lecture', label: 'L6 Growth & Development' },
    { kind: 'mechanism', label: 'Four cognitive stages' },
    { kind: 'exam', label: 'Attachment styles' },
    { kind: 'investigation', label: 'Strange Situation' },
  ],

  highYield: [
    '**Piaget: children actively construct knowledge through four cognitive stages.** The child builds **schemas**, fitting new input by **assimilation** or revising them by **accommodation**. This complements the developmental principles in [[beh-development-principles]] and Erikson’s stages ([[beh-erikson-psychosocial]]).',
    '**The four stages and their hallmarks:** **sensorimotor** (0–2, object permanence), **preoperational** (2–7, symbolic thought, egocentrism, no conservation), **concrete operational** (7–11, conservation and logical reversibility), and **formal operational** (11+, abstract and hypothetical reasoning).',
    '**Attachment (Bowlby): an innate infant–caregiver bond with survival value.** The caregiver acts as a **secure base** for exploration; disruption triggers protest, then despair, then detachment.',
    '**Ainsworth’s Strange Situation classifies attachment style:** **secure** (the majority), **insecure-avoidant**, and **insecure-ambivalent/resistant** (with disorganized described later). A secure infant uses the caregiver as a base and is comforted on reunion.',
    '**Mahler: separation–individuation builds a separate self.** The infant moves from a symbiotic phase toward **object constancy** — a stable inner image of the caregiver — paralleling Piaget’s object permanence; its disruption echoes in [[beh-family-psychopathology]].',
  ],

  mechanism: {
    title: 'Piaget’s four cognitive stages, in sequence',
    steps: [
      { id: 's1', label: 'Sensorimotor (0–2): senses & action; object permanence develops', emphasis: 'key' },
      { id: 's2', label: 'Preoperational (2–7): symbols & language; egocentric, no conservation' },
      { id: 's3', label: 'Concrete operational (7–11): conservation & logical reversibility', emphasis: 'key' },
      { id: 's4', label: 'Formal operational (11+): abstract & hypothetical reasoning', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Object permanence emerges in the sensorimotor stage', mechanism: 'The infant learns that objects persist when out of sight', significance: 'key' },
    { sign: 'Conservation is absent in preoperational and achieved in concrete operational thought', mechanism: 'The child learns that quantity is unchanged by a change in shape', significance: 'key' },
    { sign: 'Preoperational thought is egocentric', mechanism: 'The child cannot yet take another person’s point of view', significance: 'supportive' },
    { sign: 'The Strange Situation classifies attachment security', mechanism: 'Secure-base and reunion behaviour distinguish the styles (Ainsworth)', significance: 'key' },
  ],

  investigations: [
    { clue: 'A 9-month-old stops searching for a toy once it is hidden under a cloth', meaning: 'Object permanence has not yet developed (sensorimotor stage)' },
    { clue: 'A 4-year-old insists the taller, thinner glass “has more” after water is poured across', meaning: 'Lack of conservation — preoperational thinking' },
    { clue: 'An infant explores using the mother as a base, is distressed at separation, and is quickly comforted on reunion', meaning: 'Secure attachment on the Strange Situation' },
    { clue: 'A toddler plays a little farther away, then returns to “check in” with the parent', meaning: 'Mahler’s separation–individuation (practicing and rapprochement)' },
  ],

  treatment: [
    { logic: 'Pitch communication to the child’s cognitive stage', detail: 'Use concrete, simple explanations before the formal-operational stage; abstract reasoning arrives only later ([[beh-communication-skills]]).' },
    { logic: 'Protect the early caregiver–infant bond', detail: 'Secure attachment supports later emotional regulation; encourage responsive, consistent caregiving ([[beh-family-dynamics]]).' },
  ],

  mnemonics: [
    { hook: 'Piaget stages: “Some People Can Fly”', expansion: ['Sensorimotor', 'Preoperational', 'Concrete operational', 'Formal operational'] },
    { hook: 'Assimilate vs accommodate', expansion: ['Assimilate = fit new input into an existing schema', 'Accommodate = change the schema to fit new input'] },
  ],

  traps: [
    {
      questionCategory: 'Object permanence versus conservation',
      wrongInstinct: 'Object permanence and conservation are the same milestone',
      rightAnswer: 'Object permanence (an object exists unseen) is sensorimotor; conservation (quantity unchanged by shape) is concrete operational',
      why: 'They belong to different Piagetian stages years apart, so a question testing one is not testing the other.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 4-year-old is shown two equal glasses of water; one is poured into a taller, thinner glass and the child now says it holds more. This best fits which stage?',
      options: [
        { id: 'a', text: 'Sensorimotor stage' },
        { id: 'b', text: 'Preoperational stage' },
        { id: 'c', text: 'Concrete operational stage' },
        { id: 'd', text: 'Formal operational stage' },
      ],
      answerId: 'b',
      explanation: 'Failure of conservation — judging quantity by height alone — is characteristic of preoperational thought. Conservation is mastered later, in the concrete operational stage.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'In Ainsworth’s Strange Situation, an infant explores using the mother as a base, is upset when she leaves, and is readily soothed when she returns. This pattern is:',
      options: [
        { id: 'a', text: 'Insecure-avoidant attachment' },
        { id: 'b', text: 'Secure attachment' },
        { id: 'c', text: 'Insecure-ambivalent attachment' },
        { id: 'd', text: 'Disorganized attachment' },
      ],
      answerId: 'b',
      explanation: 'Using the caregiver as a secure base for exploration, showing separation distress, and being comforted on reunion define secure attachment, the most common pattern.',
      tests: 'mechanism',
    },
  ],
};

export default behPiagetAttachment;
