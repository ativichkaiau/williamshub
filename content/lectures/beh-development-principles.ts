import type { Lecture } from '../../lib/types';

export const behDevelopmentPrinciples: Lecture = {
  id: 'beh-development-principles',
  title: 'Principles of Growth & Development',
  system: 'community',
  source: 'L6 — Growth and Development',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Behavioral Science' },
    { kind: 'lecture', label: 'L6 Growth & Development' },
    { kind: 'mechanism', label: 'Cephalocaudal · proximodistal' },
    { kind: 'exam', label: 'Milestones · temperament' },
    { kind: 'investigation', label: 'Goodness of fit' },
  ],

  highYield: [
    '**Growth is quantitative, development is qualitative.** Growth = increase in physical size (height, weight); development = the orderly acquisition of new functions and skills. They run together but are not the same thing.',
    '**Development follows fixed directions:** **cephalocaudal** (head-to-toe — head control before sitting before walking) and **proximodistal** (centre-to-periphery — trunk and shoulder control before fine finger use, i.e. gross before fine motor).',
    '**The sequence is orderly and predictable, but the rate varies** between children. Development spans domains — gross and fine motor, cognitive ([[beh-piaget-attachment]]), language, and social-emotional ([[beh-erikson-psychosocial]]) — each checked against age-linked **milestones**.',
    '**Milestones are screening markers.** A significant lag (e.g. no single words by around 18–24 months) is a **red flag** that warrants developmental evaluation rather than reassurance alone.',
    '**Temperament is the innate behavioural style** described by Thomas and Chess: three patterns — **easy, difficult, and slow-to-warm-up**. Outcome depends less on the type than on **goodness of fit** between the child’s temperament and the caregiving environment ([[beh-family-dynamics]]).',
  ],

  mechanism: {
    title: 'How development unfolds: directional maturation → milestones → goodness of fit',
    steps: [
      { id: 's1', label: 'Genetic maturation drives an orderly, predictable sequence' },
      { id: 's2', label: 'Direction is cephalocaudal (head→toe) and proximodistal (centre→periphery)', emphasis: 'key' },
      { id: 's3', label: 'Skills emerge as milestones across motor, cognitive, language & social domains' },
      { id: 's4', label: 'Innate temperament (Thomas & Chess) shapes behavioural style', emphasis: 'key' },
      { id: 's5', label: 'Goodness of fit between temperament and environment shapes the outcome', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Growth = quantitative size; development = qualitative function', mechanism: 'Two linked but distinct processes, measured differently', significance: 'key' },
    { sign: 'Development proceeds cephalocaudal and proximodistal', mechanism: 'Head-to-toe and centre-to-periphery maturation of the nervous system', significance: 'key' },
    { sign: 'The developmental sequence is fixed, but the pace differs between children', mechanism: 'Order is predictable; timing shows normal individual variation', significance: 'supportive' },
    { sign: 'Temperament is innate; outcome hinges on goodness of fit', mechanism: 'A difficult temperament can thrive with a well-matched environment (Thomas & Chess)', significance: 'key' },
  ],

  investigations: [
    { clue: 'An infant achieves head control before sitting, and sitting before walking', meaning: 'The cephalocaudal (head-to-toe) principle of development' },
    { clue: 'A baby rakes objects with the whole hand before developing a pincer grasp', meaning: 'Proximodistal development — gross motor before fine motor' },
    { clue: 'An intense, irregular “difficult” infant raised by calm, flexible parents settles and thrives', meaning: 'A good goodness of fit between temperament and environment' },
    { clue: 'A 22-month-old uses no single words', meaning: 'A milestone delay / red flag warranting developmental evaluation' },
  ],

  treatment: [
    { logic: 'Screen each domain against milestones', detail: 'Compare motor, language, cognitive and social progress with age norms; a clear lag prompts evaluation rather than watchful waiting alone.' },
    { logic: 'Coach caregivers on goodness of fit', detail: 'Frame a “difficult” temperament as a match problem, not a bad child, and adjust the environment to fit ([[beh-family-dynamics]]).' },
  ],

  mnemonics: [
    { hook: 'Head-to-toe, centre-to-side', expansion: ['Cephalocaudal = head before feet (head control → walking)', 'Proximodistal = trunk before fingers (gross → fine motor)'] },
    { hook: 'Thomas & Chess: three temperaments', expansion: ['Easy', 'Difficult', 'Slow-to-warm-up', 'Outcome = goodness of fit with the environment'] },
  ],

  traps: [
    {
      questionCategory: 'Growth versus development',
      wrongInstinct: 'Growth and development are interchangeable words for getting bigger',
      rightAnswer: 'Growth is a quantitative increase in size; development is the qualitative acquisition of new functions and skills',
      why: 'A child can grow in size while lagging in developmental function, so the two must be assessed separately.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An infant gains head control, then sits, then stands, and finally walks. This head-to-toe order illustrates which principle?',
      options: [
        { id: 'a', text: 'Proximodistal development' },
        { id: 'b', text: 'Cephalocaudal development' },
        { id: 'c', text: 'Goodness of fit' },
        { id: 'd', text: 'Object permanence' },
      ],
      answerId: 'b',
      explanation: 'Cephalocaudal development proceeds from head to toe: control of the head and neck comes before the trunk, and walking is last. Proximodistal instead runs from the body’s centre outward.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'In Thomas and Chess’s work on temperament, what most determines whether a “difficult” child does well?',
      options: [
        { id: 'a', text: 'The difficult temperament guarantees a poor outcome' },
        { id: 'b', text: 'The goodness of fit between the child’s temperament and the environment' },
        { id: 'c', text: 'The child’s birth weight' },
        { id: 'd', text: 'Reaching motor milestones early' },
      ],
      answerId: 'b',
      explanation: 'Thomas and Chess showed that temperament is innate but not deterministic: a difficult child can thrive when the caregiving environment fits the temperament — the concept of goodness of fit.',
      tests: 'exam',
    },
  ],
};

export default behDevelopmentPrinciples;
