import type { Lecture } from '../../lib/types';
import { MUSCLE_SPINDLE_REFLEX } from '../../lib/figures';

export const muscleSpindleGolgiTendonOrgan: Lecture = {
  id: 'muscle-spindle-golgi-tendon-organ',
  title: 'Muscle Spindles & Golgi Tendon Organs',
  system: 'physiology',
  source: 'L10 — Reflexes',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'L10 Reflexes' },
    { kind: 'mechanism', label: 'Proprioceptors' },
    { kind: 'exam', label: 'Stretch reflex' },
  ],

  highYield: [
    '**Two proprioceptors sense the state of a muscle and drive protective reflexes: the MUSCLE SPINDLE senses LENGTH/stretch, and the GOLGI TENDON ORGAN (GTO) senses TENSION/force.** They give the CNS continuous feedback about muscle length and load — essential for posture, movement and tone.',
    '**The muscle spindle lies in PARALLEL with the muscle fibres and signals via Ia afferents; stretching the muscle excites it → a reflex CONTRACTION (the STRETCH/myotatic reflex).** This is a MONOSYNAPTIC reflex: the Ia afferent synapses directly on the α-motor neuron of the same muscle (e.g. the knee-jerk). It resists unexpected lengthening and maintains tone.',
    '**The GTO lies in SERIES with the tendon and signals via Ib afferents; high muscle TENSION excites it → reflex RELAXATION of that muscle (the INVERSE myotatic / autogenic inhibition reflex), a DISYNAPTIC pathway (via an inhibitory interneuron).** It protects the muscle/tendon from excessive force and helps grade contraction smoothly.',
    '**RECIPROCAL INNERVATION coordinates joints: the same Ia afferent that excites the agonist also INHIBITS the antagonist (through an interneuron) so it relaxes** — allowing smooth movement. **γ-motor neurons keep the spindle taut** by contracting its intrafusal fibres during muscle shortening, so it stays sensitive throughout the movement (the γ-loop).',
    '**The stretch reflex is the physiological basis of the deep tendon reflexes tested clinically ([[reflex-types-clinical-testing]]).** Spindle = length (parallel, contract); GTO = tension (series, relax) — this "length vs tension" contrast is the single most testable point, and the reflexes it produces are the building blocks of motor control.',
  ],

  mechanism: {
    title: 'Spindle = length (parallel, contract); GTO = tension (series, relax); γ-loop + reciprocal',
    steps: [
      { id: 's1', label: 'Muscle spindle senses LENGTH/stretch (Ia afferent, in parallel)', emphasis: 'key' },
      { id: 's2', label: 'Stretch reflex = monosynaptic: stretch → Ia → α-motor → contract', emphasis: 'key' },
      { id: 's3', label: 'GTO senses TENSION (Ib, in series) → disynaptic reflex RELAXATION', emphasis: 'key' },
      { id: 's4', label: 'Reciprocal innervation: excite agonist, inhibit antagonist' },
      { id: 's5', label: 'γ-motor neurons keep the spindle taut during shortening (γ-loop)' },
    ],
  },

  examFindings: [
    { sign: 'Tendon tap → reflex muscle contraction (knee jerk)', mechanism: 'Monosynaptic stretch reflex (spindle → Ia → α-motor)', significance: 'key' },
    { sign: 'Sudden relaxation when a muscle generates very high tension', mechanism: 'Golgi tendon organ (inverse myotatic reflex)', significance: 'key' },
    { sign: 'Antagonist relaxing as the agonist contracts', mechanism: 'Reciprocal (Ia) innervation', significance: 'supportive' },
    { sign: 'Spindle staying sensitive during muscle shortening', mechanism: 'γ-motor neuron activation (γ-loop)', significance: 'supportive' },
    { sign: 'Length sensed vs tension sensed', mechanism: 'Muscle spindle vs Golgi tendon organ', significance: 'key' },
  ],

  investigations: [
    { clue: 'The receptor sensing muscle length/stretch', meaning: 'The muscle spindle (Ia afferent)' },
    { clue: 'The receptor sensing muscle tension/force', meaning: 'The Golgi tendon organ (Ib afferent)' },
    { clue: 'The number of synapses in the stretch reflex', meaning: 'One (monosynaptic)' },
    { clue: 'The neurons that keep the spindle sensitive during contraction', meaning: 'γ-motor neurons (the γ-loop)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'These proprioceptors generate the deep tendon reflexes tested clinically ([[reflex-types-clinical-testing]]) and are a specific reflex arc within the general framework of [[reflex-arc-stretch-withdrawal]]. The monosynaptic stretch reflex and reciprocal innervation are core motor-control physiology; loss or exaggeration of these reflexes localises upper- vs lower-motor-neuron lesions.' },
  ],

  mnemonics: [
    { hook: 'Spindle vs GTO: "Spindle = Stretch/length (parallel, contract); GTO = Tension (series, relax)"', expansion: ['Spindle Ia, monosynaptic', 'GTO Ib, disynaptic (protective)'] },
    { hook: 'γ-loop "keeps the spindle taut" during shortening', expansion: ['α–γ coactivation', 'Reciprocal innervation relaxes the antagonist'] },
  ],

  traps: [
    {
      questionCategory: 'What the muscle spindle vs Golgi tendon organ senses',
      wrongInstinct: 'The muscle spindle and Golgi tendon organ both sense the same thing (muscle activity)',
      rightAnswer: 'They sense DIFFERENT variables: the muscle SPINDLE (in parallel) senses LENGTH/stretch and drives reflex CONTRACTION, while the GOLGI TENDON ORGAN (in series) senses TENSION/force and drives reflex RELAXATION',
      why: 'Their parallel-vs-series arrangement and length-vs-tension roles give opposite reflex effects; conflating them loses the logic of how the two feedback systems balance muscle length and load.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The muscle spindle and the Golgi tendon organ respectively sense:',
      options: [
        { id: 'a', text: 'Tension and length' },
        { id: 'b', text: 'Length (stretch) and tension (force)' },
        { id: 'c', text: 'Temperature and pain' },
        { id: 'd', text: 'Both sense only length' },
      ],
      answerId: 'b',
      explanation: 'The muscle spindle lies in parallel with muscle fibres and senses length/stretch (driving reflex contraction), while the Golgi tendon organ lies in series in the tendon and senses tension/force (driving reflex relaxation).',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The classic knee-jerk (stretch) reflex is:',
      options: [
        { id: 'a', text: 'A polysynaptic withdrawal reflex' },
        { id: 'b', text: 'A monosynaptic reflex from the Ia afferent directly onto the α-motor neuron' },
        { id: 'c', text: 'Mediated by the Golgi tendon organ' },
        { id: 'd', text: 'Independent of the muscle spindle' },
      ],
      answerId: 'b',
      explanation: 'Tapping the tendon stretches the muscle spindle; its Ia afferent synapses directly (monosynaptically) on the α-motor neuron of the same muscle, causing reflex contraction — the deep tendon reflex tested clinically.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Proprioceptors & the stretch reflex', svg: MUSCLE_SPINDLE_REFLEX, caption: 'Muscle spindle (length, parallel, contract) vs Golgi tendon organ (tension, series, relax), with reciprocal innervation.' },
  ],
};

export default muscleSpindleGolgiTendonOrgan;
