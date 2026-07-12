import type { Lecture } from '../../lib/types';

export const behFamilyDynamics: Lecture = {
  id: 'beh-family-dynamics',
  title: 'Family Dynamics & Systems',
  system: 'community',
  source: 'L7 — Family & its Psychopathology',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Behavioral Science' },
    { kind: 'lecture', label: 'L7 Family Dynamics' },
    { kind: 'mechanism', label: 'Family systems' },
    { kind: 'exam', label: 'Boundaries · subsystems' },
    { kind: 'investigation', label: 'Family life cycle' },
  ],

  highYield: [
    '**The family is the basic social unit and the primary agent of socialisation.** It takes many forms (nuclear, extended, blended, single-parent) and is the immediate social layer of the [[beh-biopsychosocial-model]].',
    '**Family systems theory treats the family as one interdependent system:** a change in any member affects all the others, causality is **circular** rather than one-way, and the family tends toward **homeostasis** — resisting change to keep its equilibrium.',
    '**Structural view (Minuchin): subsystems and boundaries.** The core **subsystems** are spousal, parental and sibling; the **boundaries** between them range from **clear** (healthy) to **rigid** (disengaged) to **diffuse** (enmeshed).',
    '**The family life cycle is a predictable sequence of stages** — a young adult leaving home, couple formation, families with young children, families with adolescents, launching children, and later life — each transition demanding adaptation.',
    '**Healthy families have clear boundaries, flexible roles, open communication and adaptability;** dysfunctional patterns (enmeshment, triangulation, scapegoating) are detailed in [[beh-family-psychopathology]] and interact with development ([[beh-development-principles]], [[beh-piaget-attachment]]).',
  ],

  mechanism: {
    title: 'The family as a self-regulating system',
    steps: [
      { id: 's1', label: 'The family is one interdependent system (the whole exceeds the sum of parts)', emphasis: 'key' },
      { id: 's2', label: 'Subsystems (spousal, parental, sibling) are separated by boundaries' },
      { id: 's3', label: 'Feedback maintains homeostasis — the system resists change', emphasis: 'key' },
      { id: 's4', label: 'A life-cycle transition stresses the system and demands adaptation' },
      { id: 's5', label: 'Flexible adaptation → health; rigidity → a symptom in a member', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'The family is a system: a change in one member affects the whole', mechanism: 'Members are interdependent, so causality is circular, not linear', significance: 'key' },
    { sign: 'Boundaries range from clear (healthy) to rigid (disengaged) to diffuse (enmeshed)', mechanism: 'Boundaries regulate closeness and autonomy between subsystems', significance: 'key' },
    { sign: 'The core subsystems are spousal, parental and sibling', mechanism: 'Each has its own tasks and appropriate boundary (Minuchin)', significance: 'supportive' },
    { sign: 'Family life-cycle transitions are predictable stress points', mechanism: 'Each stage change requires the system to reorganise its roles', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A child’s school refusal resolves once the parents’ marital conflict is addressed', meaning: 'Circular causality — the symptom expressed a problem in the system' },
    { clue: 'Parents who cannot keep adult matters separate from the children, with no privacy', meaning: 'Diffuse boundaries — an enmeshed family' },
    { clue: 'A family in turmoil as the eldest child leaves for university', meaning: 'A launching-stage transition in the family life cycle' },
    { clue: 'A family that resists any change to keep its usual routine, even when it is unhealthy', meaning: 'Homeostasis — the system defending its equilibrium' },
  ],

  treatment: [
    { logic: 'Treat the family as the unit of care, not just the symptomatic member', detail: 'Assess how the system maintains the problem before targeting one person ([[beh-family-psychopathology]]).' },
    { logic: 'Map boundaries, roles and life-cycle stage when a family is distressed', detail: 'Locating rigid or diffuse boundaries and the current transition guides the intervention.' },
  ],

  mnemonics: [
    { hook: 'Boundaries: Clear, Rigid, Diffuse', expansion: ['Clear = healthy (flexible closeness)', 'Rigid = disengaged (too far apart)', 'Diffuse = enmeshed (too close, no autonomy)'] },
    { hook: 'Three subsystems', expansion: ['Spousal', 'Parental', 'Sibling'] },
  ],

  traps: [
    {
      questionCategory: 'Locating the cause of a child’s symptom',
      wrongInstinct: 'The symptomatic child is simply the problem that needs fixing',
      rightAnswer: 'In family systems the symptom often expresses dysfunction in the whole system (circular causality)',
      why: 'Because members are interdependent, treating only the identified child misses the family patterns maintaining the symptom.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A family in which parents and children are so over-involved that no member has privacy or autonomy is said to have which kind of boundaries?',
      options: [
        { id: 'a', text: 'Rigid boundaries' },
        { id: 'b', text: 'Diffuse (enmeshed) boundaries' },
        { id: 'c', text: 'Clear boundaries' },
        { id: 'd', text: 'No boundaries are involved' },
      ],
      answerId: 'b',
      explanation: 'Diffuse boundaries define an enmeshed family, where over-involvement blurs the subsystems and blocks individual autonomy. Rigid boundaries instead produce a disengaged, distant family.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A child’s recurrent stomach aches disappear when the parents resolve their marital conflict. Which principle does this best illustrate?',
      options: [
        { id: 'a', text: 'Linear causality — the child was simply unwell' },
        { id: 'b', text: 'Circular causality within the family system' },
        { id: 'c', text: 'Genetic inheritance of the symptom' },
        { id: 'd', text: 'Goodness of fit' },
      ],
      answerId: 'b',
      explanation: 'In family systems theory members are interdependent, so a child’s symptom can express tension elsewhere; changing the parental subsystem changes the child — circular, not linear, causality.',
      tests: 'mechanism',
    },
  ],
};

export default behFamilyDynamics;
