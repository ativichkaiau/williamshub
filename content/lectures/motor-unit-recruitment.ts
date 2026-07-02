import type { Lecture } from '../../lib/types';

export const motorUnitRecruitment: Lecture = {
  id: 'motor-unit-recruitment',
  title: 'Motor Units & the Size Principle',
  system: 'msk',
  source: 'L4 — Behaviour of Skeletal Muscle',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'MSK' },
    { kind: 'lecture', label: 'L4 Muscle Behaviour' },
    { kind: 'mechanism', label: 'Gradation of force' },
    { kind: 'exam', label: 'Size principle · recruitment' },
  ],

  highYield: [
    '**A motor unit = one motor neuron + ALL the muscle fibres it innervates.** All fibres of a unit contract together (all-or-none for the unit). It is the **functional unit of contraction**.',
    '**Innervation ratio tunes control vs power.** **Small units** (few fibres per neuron, e.g. extraocular/finger muscles) → **fine, precise control**. **Large units** (many fibres per neuron, e.g. quadriceps, back) → **powerful, coarse movements**.',
    '**Whole-muscle force is graded two ways:** (1) **recruitment** — activating more motor units, and (2) **rate coding** — increasing each unit\'s firing **frequency** (summation → tetanus). Both are used together to smoothly increase force.',
    '**The size principle:** motor units are recruited **in order of size — smallest first.** Small units (**type I, slow, fatigue-resistant**) fire for low-force, sustained tasks (posture); as more force is needed, progressively **larger units (type II, fast, powerful, fatigable)** are added. This gives fine control at low forces and reserves powerful units for when they\'re needed.',
    '**Asynchronous recruitment** of units during submaximal effort **delays fatigue** (units take turns). Muscle **tone** at rest is maintained by a small number of units firing in rotation. Denervation → loss of the motor unit → atrophy.',
  ],

  mechanism: {
    title: 'Recruit smallest → largest, plus rate coding',
    steps: [
      { id: 's1', label: 'Motor unit = 1 neuron + all its fibres (contract together)', emphasis: 'key' },
      { id: 's2', label: 'Small units = fine control; large units = power' },
      { id: 's3', label: 'Grade force by recruitment + rate coding', emphasis: 'key' },
      { id: 's4', label: 'Size principle: smallest (type I) recruited first', emphasis: 'key' },
      { id: 's5', label: 'Asynchronous firing delays fatigue; maintains tone' },
    ],
  },

  examFindings: [
    { sign: 'Fine-movement muscles have small motor units', mechanism: 'Low innervation ratio → precise control (eye/hand)', significance: 'key' },
    { sign: 'Weak, fatigue-resistant units recruited first', mechanism: 'Size principle (small type I units first)', significance: 'key' },
    { sign: 'Force increased by adding motor units', mechanism: 'Recruitment (with rate coding)', significance: 'key' },
    { sign: 'Sustained low-level tone with rotating units', mechanism: 'Asynchronous recruitment (delays fatigue)', significance: 'supportive' },
    { sign: 'Muscle wasting after nerve injury', mechanism: 'Loss of the motor unit → denervation atrophy', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The functional unit of muscle contraction', meaning: 'The motor unit' },
    { clue: 'Muscle type with the smallest motor units', meaning: 'Fine-control muscles (extraocular, hand)' },
    { clue: 'Rule governing recruitment order', meaning: 'The size principle (smallest first)' },
    { clue: 'Two ways whole-muscle force is graded', meaning: 'Recruitment + rate coding (frequency)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Motor-unit concepts underlie EMG, strength training (recruiting more/larger units), and neuromuscular disease (denervation, motor neuron disease). Force also depends on twitch/tetanus mechanics ([[muscle-twitch-tetanus-mechanics]]); fibre types map to unit size ([[muscle-fiber-types-fatigue]]).' },
  ],

  mnemonics: [
    { hook: 'Size principle: "Small (slow, fatigue-resistant) first → Large (fast, powerful) last"', expansion: ['Fine control at low force, power in reserve'] },
    { hook: 'Grade force = Recruit more units + fire them Faster (rate coding)', expansion: ['Both together'] },
  ],

  traps: [
    {
      questionCategory: 'Recruitment order',
      wrongInstinct: 'The largest, most powerful motor units are recruited first for any movement',
      rightAnswer: 'By the SIZE PRINCIPLE, the SMALLEST (weak, fatigue-resistant) units are recruited first; larger, fatigable units are added only as more force is required',
      why: 'Smallest-first gives fine control at low forces and reserves powerful, fatigable units for high-force demands.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'According to the size principle, when a muscle gradually increases its force output, motor units are recruited:',
      options: [
        { id: 'a', text: 'Largest (most powerful) first' },
        { id: 'b', text: 'Smallest (weakest, most fatigue-resistant) first, then progressively larger' },
        { id: 'c', text: 'Randomly' },
        { id: 'd', text: 'All at once' },
      ],
      answerId: 'b',
      explanation: 'The size principle recruits small, slow, fatigue-resistant (type I) units first for fine control, adding larger, fast, fatigable (type II) units as more force is needed.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A motor unit is defined as:',
      options: [
        { id: 'a', text: 'A single muscle fibre and its sarcomeres' },
        { id: 'b', text: 'One motor neuron and all the muscle fibres it innervates' },
        { id: 'c', text: 'The neuromuscular junction alone' },
        { id: 'd', text: 'A group of motor neurons in the spinal cord' },
      ],
      answerId: 'b',
      explanation: 'A motor unit comprises one motor neuron plus all the muscle fibres it innervates; all those fibres contract together when the neuron fires.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default motorUnitRecruitment;
