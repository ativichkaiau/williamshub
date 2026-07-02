import type { Lecture } from '../../lib/types';

export const proprioceptorsMuscleSpindleReflexes: Lecture = {
  id: 'proprioceptors-muscle-spindle-reflexes',
  title: 'Proprioceptors & Spinal Reflexes',
  system: 'neuro',
  source: 'L6 — Motor System',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L6 Reflexes' },
    { kind: 'mechanism', label: 'Spindle, GTO & reflex arcs' },
    { kind: 'exam', label: 'Stretch reflex; reciprocal inhibition' },
  ],

  highYield: [
    '**Two PROPRIOCEPTORS monitor muscle for reflex control: the MUSCLE SPINDLE (in parallel with muscle fibres) senses muscle LENGTH and rate of stretch, and the GOLGI TENDON ORGAN (GTO, in series in the tendon) senses muscle TENSION/force.** Spindles have intrafusal fibres innervated by GAMMA motor neurons that keep the spindle taut as the muscle shortens (so it stays sensitive).',
    '**The STRETCH (myotatic) REFLEX is the simplest reflex arc — MONOSYNAPTIC: stretching a muscle excites its spindle (Ia afferent) → DIRECTLY excites the alpha motor neuron in the cord → the SAME muscle contracts (e.g. the knee-jerk).** It is a two-neuron, one-synapse arc and the basis of the deep tendon reflexes used to test cord segments.',
    '**The GTO reflex is the opposite and DISYNAPTIC (via an inhibitory interneuron): excessive tension → Ib afferent → INHIBITS the muscle\'s own alpha motor neuron ("autogenic inhibition"), protecting against overload and smoothing force.** RECIPROCAL INNERVATION: when a muscle is reflexly excited, its ANTAGONIST is simultaneously INHIBITED (so the joint can move). The WITHDRAWAL (flexor) reflex is polysynaptic, with crossed extension for support.',
    '**Reflexes localise lesions: reflex arcs run through specific cord segments (e.g. knee-jerk = L3–4, ankle = S1). BRISK/hyper-reflexia = UMN lesion (loss of descending inhibition); ABSENT/hypo-reflexia = LMN or afferent (sensory) lesion.** Descending pathways (and the gamma system) set the background gain of these reflexes.',
    '**The take-home: spindle = length/stretch (→ monosynaptic stretch reflex, alpha; gamma keeps it taut), GTO = tension (→ disynaptic autogenic INHIBITION); reciprocal inhibition relaxes the antagonist; hyper-reflexia = UMN, areflexia = LMN.** These arcs underlie the motor exam of [[motor-system-corticospinal-control]]; the receptors are proprioceptors from [[sensory-receptors-transduction]]; clinical reflex testing is in EHP ([[reflex-types-clinical-testing]]).',
  ],

  mechanism: {
    title: 'Spindle (length → monosynaptic stretch reflex) vs GTO (tension → disynaptic inhibition); reciprocal inhibition; gamma sets gain',
    steps: [
      { id: 's1', label: 'Muscle spindle = LENGTH/stretch; Golgi tendon organ = TENSION/force', emphasis: 'key' },
      { id: 's2', label: 'Stretch reflex = MONOSYNAPTIC: Ia → alpha motor neuron → same muscle contracts', emphasis: 'key' },
      { id: 's3', label: 'GTO reflex = DISYNAPTIC: Ib → inhibitory interneuron → autogenic INHIBITION', emphasis: 'key' },
      { id: 's4', label: 'Reciprocal innervation: agonist excited → antagonist inhibited; gamma keeps spindle taut' },
      { id: 's5', label: 'Hyper-reflexia = UMN (lost inhibition); areflexia = LMN/afferent lesion', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Brisk knee-jerk after a tendon tap', mechanism: 'Monosynaptic stretch reflex (spindle Ia → alpha motor neuron)', significance: 'key' },
    { sign: 'Hyper-reflexia, clonus', mechanism: 'UMN lesion — loss of descending inhibition of the reflex arc', significance: 'key' },
    { sign: 'Absent deep tendon reflex', mechanism: 'LMN or sensory (afferent) lesion breaking the arc', significance: 'key' },
    { sign: 'Muscle relaxing as tension rises to avoid overload', mechanism: 'Golgi tendon organ autogenic inhibition (Ib)', significance: 'supportive' },
    { sign: 'Antagonist relaxes as the agonist contracts', mechanism: 'Reciprocal (reciprocal inhibition) innervation', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The proprioceptor sensing muscle length/stretch', meaning: 'The muscle spindle' },
    { clue: 'The proprioceptor sensing muscle tension', meaning: 'The Golgi tendon organ' },
    { clue: 'The number of synapses in the stretch reflex', meaning: 'One (monosynaptic)' },
    { clue: 'The reflex change indicating an UMN lesion', meaning: 'Hyper-reflexia (brisk reflexes, clonus)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Spinal reflexes are the physiological basis of the deep-tendon-reflex exam — arcs localise to cord segments, and hyper- vs hypo-reflexia separates UMN from LMN lesions ([[motor-system-corticospinal-control]], [[spinal-cord-anatomy-organization]]). The spindle/GTO are proprioceptors ([[sensory-receptors-transduction]]) whose Ia/Ib afferents ascend for conscious proprioception too ([[somatosensory-ascending-pathways]]); clinical reflex grading and special reflexes are in EHP ([[reflex-types-clinical-testing]]).' },
  ],

  mnemonics: [
    { hook: '"Spindle = Stretch/length (monosynaptic); GTO = Tension (disynaptic, inhibits)"', expansion: ['Ia = spindle, Ib = GTO', 'Gamma keeps spindle taut'] },
    { hook: 'Reflexes: "Up = UMN (hyper), down = LMN (absent)"', expansion: ['Knee L3–4, ankle S1', 'Reciprocal inhibition relaxes antagonist'] },
  ],

  traps: [
    {
      questionCategory: 'Muscle spindle vs Golgi tendon organ',
      wrongInstinct: 'The muscle spindle and the Golgi tendon organ do the same job and drive the same reflex',
      rightAnswer: 'They are OPPOSITES: the SPINDLE (parallel, senses LENGTH/stretch) drives the MONOSYNAPTIC stretch reflex that CONTRACTS the muscle, whereas the GOLGI TENDON ORGAN (in series, senses TENSION) drives a DISYNAPTIC reflex that INHIBITS the same muscle (autogenic inhibition) to protect against overload',
      why: 'Confusing the two inverts the reflex — one excites for length control, the other inhibits for tension protection; distinguishing them is essential to understanding reflex modulation and tone.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The knee-jerk (patellar) reflex is described as monosynaptic because:',
      options: [
        { id: 'a', text: 'It passes through the cerebellum' },
        { id: 'b', text: 'The Ia afferent from the muscle spindle synapses directly on the alpha motor neuron with no interneuron' },
        { id: 'c', text: 'It requires an inhibitory interneuron' },
        { id: 'd', text: 'It is controlled by gamma motor neurons only' },
      ],
      answerId: 'b',
      explanation: 'In the stretch (myotatic) reflex, the Ia afferent from the muscle spindle synapses directly onto the alpha motor neuron supplying the same muscle — a single synapse (monosynaptic), producing rapid contraction. The Golgi tendon organ reflex, by contrast, is disynaptic (via an inhibitory interneuron).',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Generally brisk, exaggerated deep tendon reflexes with clonus indicate a lesion of the:',
      options: [
        { id: 'a', text: 'Lower motor neuron' },
        { id: 'b', text: 'Upper motor neuron (loss of descending inhibition)' },
        { id: 'c', text: 'Sensory (afferent) nerve' },
        { id: 'd', text: 'Golgi tendon organ' },
      ],
      answerId: 'b',
      explanation: 'Upper motor neuron lesions release the stretch reflex from descending inhibition, producing hyper-reflexia and clonus (with spasticity and a Babinski sign). Lower motor neuron or sensory afferent lesions break the reflex arc and cause absent or reduced reflexes.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default proprioceptorsMuscleSpindleReflexes;
