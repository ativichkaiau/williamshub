import type { Lecture } from '../../lib/types';
import { MUSCLE_MECHANICS } from '../../lib/figures';

export const muscleTwitchTetanusMechanics: Lecture = {
  id: 'muscle-twitch-tetanus-mechanics',
  title: 'Muscle Mechanics: Twitch, Tetanus & Length–Tension',
  system: 'msk',
  source: 'L4 — Behaviour of Skeletal Muscle',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'MSK' },
    { kind: 'lecture', label: 'L4 Muscle Behaviour' },
    { kind: 'mechanism', label: 'Summation & tension' },
    { kind: 'exam', label: 'Twitch → tetanus' },
  ],

  highYield: [
    '**A single twitch = the mechanical response to one action potential** — a latent period, a contraction phase, then relaxation. The AP is brief but the twitch outlasts it, so responses can overlap.',
    '**Frequency (temporal) summation → tetanus.** If a second stimulus arrives before the muscle fully relaxes, its tension **adds** onto the first (summation). Increasing stimulus frequency produces **unfused (incomplete) tetanus**, then a smooth, maximal **fused (complete) tetanus** — the way a single fibre produces sustained, graded force.',
    '**The length–tension relationship:** active tension is **maximal at an optimal sarcomere length** (ideal overlap of actin and myosin so the most cross-bridges can form). Too short (filaments collide/overlap) or too stretched (too little overlap) → less force. This is the muscle analogue of the cardiac **Frank–Starling** principle.',
    '**Isometric vs isotonic contraction.** **Isometric** = tension rises with **no change in length** (e.g. holding a weight, posture). **Isotonic** = the muscle **shortens against a constant load** (e.g. lifting) — concentric (shortening) or eccentric (lengthening under load).',
    '**Treppe (the "staircase")** = a warm-up phenomenon: with repeated stimulation at the same strength, the first few contractions **progressively increase in force** (rising intracellular Ca²⁺/enzyme warming) before plateauing — distinct from summation, which needs increasing frequency.',
  ],

  mechanism: {
    title: 'One twitch → summation → tetanus; tension depends on length',
    steps: [
      { id: 's1', label: 'One AP → one twitch (latent, contract, relax)', emphasis: 'key' },
      { id: 's2', label: 'Higher frequency → temporal summation', emphasis: 'key' },
      { id: 's3', label: '→ unfused → fused tetanus (maximal, smooth force)', emphasis: 'key' },
      { id: 's4', label: 'Length–tension: max force at optimal overlap' },
      { id: 's5', label: 'Isometric (tension, no shortening) vs isotonic (shortens); treppe' },
    ],
  },

  examFindings: [
    { sign: 'Smooth sustained maximal contraction at high frequency', mechanism: 'Fused (complete) tetanus', significance: 'key' },
    { sign: 'Tension adds when stimuli arrive close together', mechanism: 'Temporal (frequency) summation', significance: 'key' },
    { sign: 'Peak force at an optimal muscle length', mechanism: 'Length–tension (ideal actin–myosin overlap)', significance: 'key' },
    { sign: 'Holding a weight steady', mechanism: 'Isometric contraction (tension, no shortening)', significance: 'supportive' },
    { sign: 'Force rises over the first few contractions (warm-up)', mechanism: 'Treppe (staircase)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'How a single fibre produces sustained maximal force', meaning: 'Fused tetanus (high-frequency summation)' },
    { clue: 'Contraction with tension but no length change', meaning: 'Isometric' },
    { clue: 'Why force falls at very short or very long muscle length', meaning: 'Length–tension (sub-optimal cross-bridge overlap)' },
    { clue: 'Staircase increase in force at constant stimulation', meaning: 'Treppe' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Length–tension underlies why joint position affects strength and mirrors cardiac Frank–Starling; tetanus/summation is normal voluntary force production. Whole-muscle force also depends on motor-unit recruitment ([[motor-unit-recruitment]]) and cross-bridge cycling ([[muscle-contraction-crossbridge]]).' },
  ],

  mnemonics: [
    { hook: 'Frequency up → summation → tetanus (fused = max, smooth)', expansion: ['Twitches overlap and add'] },
    { hook: 'Length–tension: "best force at best overlap"', expansion: ['Muscle Frank–Starling'] },
  ],

  traps: [
    {
      questionCategory: 'Summation vs treppe',
      wrongInstinct: 'Treppe and frequency summation are the same phenomenon',
      rightAnswer: 'Summation needs INCREASING stimulus FREQUENCY (twitches overlap); treppe is a warm-up increase in force at the SAME frequency/strength',
      why: 'Summation = higher frequency adds tension toward tetanus; treppe = progressive warm-up potentiation at constant stimulation.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Increasing the frequency of stimulation of a skeletal muscle fibre until individual twitches fuse into a single smooth maximal contraction produces:',
      options: [
        { id: 'a', text: 'A single twitch' },
        { id: 'b', text: 'Fused (complete) tetanus' },
        { id: 'c', text: 'Treppe' },
        { id: 'd', text: 'Isotonic relaxation' },
      ],
      answerId: 'b',
      explanation: 'High-frequency stimulation causes temporal summation of twitches into unfused then fused (complete) tetanus — a smooth, sustained, maximal contraction.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A muscle generates its greatest active tension when it is at a length that:',
      options: [
        { id: 'a', text: 'Is maximally stretched' },
        { id: 'b', text: 'Provides optimal overlap between actin and myosin filaments' },
        { id: 'c', text: 'Is maximally shortened' },
        { id: 'd', text: 'Has no cross-bridges formed' },
      ],
      answerId: 'b',
      explanation: 'The length–tension relationship shows maximal force at the sarcomere length giving optimal actin–myosin overlap (most cross-bridges); over-stretch or over-shortening reduces force.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Grading muscle force', svg: MUSCLE_MECHANICS, caption: 'Twitch → summation → tetanus; length–tension optimum; motor-unit recruitment (size principle); isometric vs isotonic.' },
  ],
};

export default muscleTwitchTetanusMechanics;
