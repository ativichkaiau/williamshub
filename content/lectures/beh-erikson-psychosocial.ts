import type { Lecture } from '../../lib/types';

export const behEriksonPsychosocial: Lecture = {
  id: 'beh-erikson-psychosocial',
  title: 'Erikson’s Psychosocial Stages',
  system: 'community',
  source: 'L6 — Growth and Development',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Behavioral Science' },
    { kind: 'lecture', label: 'L6 Growth & Development' },
    { kind: 'mechanism', label: 'Eight psychosocial crises' },
    { kind: 'exam', label: 'Stage → virtue' },
    { kind: 'disease', label: 'Identity vs role confusion' },
  ],

  highYield: [
    '**Erikson described eight psychosocial stages spanning the whole lifespan** — the key contrast with Freud, whose psychosexual stages stop at puberty ([[beh-psychosexual-stages]]). Each stage is a **crisis** whose healthy resolution yields a **virtue** (ego strength) and whose failure leaves a maladaptive tendency.',
    '**The eight crises in order:** trust vs mistrust (infancy), autonomy vs shame/doubt (toddler), initiative vs guilt (preschool), industry vs inferiority (school age), identity vs role confusion (adolescence), intimacy vs isolation (young adult), generativity vs stagnation (middle age), and integrity vs despair (late life).',
    '**The virtues earned, in order:** **hope, will, purpose, competence, fidelity, love, care, and wisdom** — one for each successfully resolved stage.',
    '**Adolescence centres on identity vs role confusion:** forming a coherent sense of self, with failure leaving role confusion. This stage anchors much of the developmental teaching alongside [[beh-piaget-attachment]] and [[beh-development-principles]].',
    '**Late life is integrity vs despair:** a life review yielding acceptance (integrity) or regret (despair) — the psychosocial core of ageing covered in [[beh-aging-life-cycle]] and [[beh-successful-aging]].',
  ],

  mechanism: {
    title: 'The engine of every stage: crisis → resolution → virtue → next stage',
    steps: [
      { id: 's1', label: 'A stage-specific developmental crisis is triggered by new social demands' },
      { id: 's2', label: 'The person works to resolve the conflict (e.g. trust vs mistrust)', emphasis: 'key' },
      { id: 's3', label: 'Healthy resolution yields a virtue / ego strength (e.g. hope)', emphasis: 'key' },
      { id: 's4', label: 'Poor resolution leaves a maladaptive tendency (e.g. mistrust)' },
      { id: 's5', label: 'The outcome becomes the foundation for the next stage’s crisis' },
    ],
  },

  examFindings: [
    { sign: 'Erikson’s stages are psychosocial and cover the entire lifespan', mechanism: 'Development is driven by social relationships, not only early childhood', significance: 'key' },
    { sign: 'Each resolved crisis produces a specific virtue; failure leaves a maladaptive trait', mechanism: 'The crisis is a turning point with two possible outcomes', significance: 'key' },
    { sign: 'Stages are sequential and build on one another', mechanism: 'Earlier resolutions set the base for later crises', significance: 'supportive' },
    { sign: 'Adolescence = identity vs role confusion → the virtue fidelity', mechanism: 'The task is to consolidate a stable identity', significance: 'key' },
  ],

  investigations: [
    { clue: 'A 2-year-old insists on doing everything alone during toilet training, saying “me do it”', meaning: 'Autonomy vs shame and doubt (toddler stage)' },
    { clue: 'A teenager tries out different friend groups, styles and beliefs, asking “who am I?”', meaning: 'Identity vs role confusion (adolescence)' },
    { clue: 'A 50-year-old mentors juniors and raises a family, feeling they are contributing to the next generation', meaning: 'Generativity vs stagnation (middle adulthood)' },
    { clue: 'An older adult reviews their life with acceptance and few regrets', meaning: 'Ego integrity vs despair (late adulthood)' },
  ],

  treatment: [
    { logic: 'Locate the patient’s current life-stage conflict to frame counselling', detail: 'Naming the crisis (identity, generativity, integrity) clarifies what the person is struggling to resolve ([[beh-aging-life-cycle]]).' },
    { logic: 'Recognise that unresolved early crises echo later', detail: 'Early mistrust or role confusion can resurface in adult relationships and self-concept.' },
  ],

  mnemonics: [
    { hook: 'The eight virtues, infancy → old age', expansion: ['Hope, Will, Purpose, Competence', 'Fidelity, Love, Care, Wisdom', 'One virtue per successfully resolved stage'] },
  ],

  traps: [
    {
      questionCategory: 'Erikson versus Freud',
      wrongInstinct: 'Erikson’s stages are psychosexual and finish at puberty',
      rightAnswer: 'Erikson’s stages are psychosocial and continue across the entire lifespan, ending with integrity vs despair in old age',
      why: 'Freud’s psychosexual model stops at genital maturity, whereas Erikson added adult and late-life stages driven by social tasks.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'According to Erikson, the central psychosocial crisis of adolescence is:',
      options: [
        { id: 'a', text: 'Trust vs mistrust' },
        { id: 'b', text: 'Identity vs role confusion' },
        { id: 'c', text: 'Generativity vs stagnation' },
        { id: 'd', text: 'Integrity vs despair' },
      ],
      answerId: 'b',
      explanation: 'Adolescence is the stage of identity vs role confusion, in which the task is to consolidate a coherent sense of self; success yields the virtue of fidelity.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'How does Erikson’s model differ most fundamentally from Freud’s psychosexual stages?',
      options: [
        { id: 'a', text: 'It focuses on unconscious sexual drives' },
        { id: 'b', text: 'It is psychosocial and spans the entire lifespan' },
        { id: 'c', text: 'It ends at puberty' },
        { id: 'd', text: 'It rejects the idea of developmental stages' },
      ],
      answerId: 'b',
      explanation: 'Erikson recast development as psychosocial and extended it across the whole lifespan into adulthood and old age, whereas Freud’s psychosexual stages emphasise early sexual drives and conclude at puberty.',
      tests: 'mechanism',
    },
  ],
};

export default behEriksonPsychosocial;
