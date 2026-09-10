import type { Lecture } from '../../lib/types';

export const ghpSensoryReceptorsTransduction: Lecture = {
  id: 'ghp-sensory-receptors-transduction',
  title: 'Sensory Receptors, Differential Sensitivity & Receptor Potentials',
  system: 'neuro',
  source: 'Ch 46 — Sensory Receptors & Neuronal Circuits for Processing Information',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Neurophysiology' },
    { kind: 'lecture', label: 'Ch 46 Sensory Receptors' },
    { kind: 'mechanism', label: 'Receptor potential → spike train' },
    { kind: 'exam', label: 'Labelled line · differential sensitivity' },
  ],

  highYield: [
    '**Five receptor classes cover every sensation the body owns.** Mechanoreceptors (touch, pressure, stretch, sound, joint position, arterial pressure), thermoreceptors (separate cold and warm populations), nociceptors (free nerve endings signalling tissue damage), electromagnetic receptors (the rods and cones, and nothing else), and chemoreceptors (taste, smell, arterial O₂, plasma osmolality, blood glucose). Learn the list once and every named ending in the chapter drops into one of the five.',
    '**Differential sensitivity is what makes a receptor a receptor.** Any ending will fire to a large enough dose of almost anything — a hard enough blow excites the retina — but each one is orders of magnitude more sensitive to a single form of energy than to any other, so at physiological intensities only its own modality ever reaches it. Specificity is a ratio of thresholds, not an absolute exclusion.',
    '**The labelled line principle: the modality is decided by WHERE the fibre ends, not by what excited it.** A fibre terminating in the pain areas of the CNS produces pain whatever set it off — pressure, electric current, ischaemia. Two bedside proofs: **pressure on the closed globe is seen as a flash of light** (a phosphene), and **a knock on the ulnar nerve at the elbow is felt in the little finger**, not at the elbow.',
    '**Every transduction mechanism converges on one common currency — the receptor potential.** Mechanical deformation, chemical binding, temperature change, photon absorption and direct ionic effects all finish by altering the permeability of the terminal membrane, in most cases opening cation channels so the terminal depolarises. The receptor potential is **local, graded, decremental and never propagated**, and its ceiling is about **100 mV**, reached only at extreme intensities.',
    '**The Pacinian corpuscle is the teaching model because its two stages sit in two different places.** Compressing the lamellated capsule distorts the naked central core fibre, cation channels open, and a receptor potential appears. It spreads electrotonically along the core to **the first node of Ranvier, which lies inside the capsule**, and when the depolarisation arriving there crosses the threshold of that node a conventional all-or-none spike is launched. **Transduction and encoding are separate events at separate sites.**',
    '**Amplitude is translated into frequency, and the translation is deliberately non-linear.** Impulse frequency climbs very steeply across the lowest part of the receptor potential range and progressively more shallowly as amplitude grows, flattening well below any theoretical ceiling. The pay-off is extreme sensitivity where detection actually matters — at the faintest stimuli — while the same fibre still reports stimuli thousands of times stronger without saturating at once.',
  ],

  mechanism: {
    title: 'One adequate stimulus, one receptor potential, one frequency-coded spike train',
    steps: [
      { id: 's1', label: 'Adequate stimulus reaches the ending whose threshold for that energy is lowest' },
      { id: 's2', label: 'Transduction: deformation, binding, heat or photon alters terminal membrane permeability', emphasis: 'key' },
      { id: 's3', label: 'Cation influx → local graded receptor potential, ceiling about 100 mV', emphasis: 'key' },
      { id: 's4', label: 'Potential spreads electrotonically and decrementally to the spike initiation zone' },
      { id: 's5', label: 'At the first node of Ranvier threshold is crossed → all-or-none action potential', emphasis: 'key' },
      { id: 's6', label: 'Bigger receptor potential → higher firing frequency; central termination fixes the modality', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Pressure on the closed eyeball is perceived as a spot of light', mechanism: 'Labelled line: retinal fibres end in visual cortex, so any adequate stimulus is read as light', significance: 'key' },
    { sign: 'Tapping the ulnar nerve at the elbow is felt in the little finger, not at the elbow', mechanism: 'Sensation is projected to the peripheral field of the fibre because the central termination defines it', significance: 'key' },
    { sign: 'The receptor potential is graded with stimulus strength but the spikes it triggers are not', mechanism: 'Transduction is analogue and local; encoding at the node is all-or-none', significance: 'key' },
    { sign: 'Doubling a weak stimulus changes firing rate far more than doubling a strong one', mechanism: 'The amplitude-to-frequency curve is steepest at the bottom of the range and flattens above it', significance: 'key' },
    { sign: 'A Pacinian corpuscle stripped of its capsule still generates a receptor potential', mechanism: 'Transduction lives in the membrane of the core terminal; the capsule is an accessory mechanical filter', significance: 'supportive' },
    { sign: 'Blocking voltage-gated Na⁺ channels abolishes the spike train but leaves the receptor potential', mechanism: 'The receptor potential is carried by stimulus-gated cation channels, not by the voltage-gated spike machinery', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Receptor class serving the rods and cones', meaning: 'Electromagnetic receptors — the only class tuned to radiant energy' },
    { clue: 'Receptor class serving taste, smell, arterial O₂ and plasma osmolality', meaning: 'Chemoreceptors' },
    { clue: 'Local, graded, decremental potential confined to the nerve terminal', meaning: 'Receptor (generator) potential — never propagated' },
    { clue: 'Site at which the Pacinian receptor potential becomes impulses', meaning: 'The first node of Ranvier, lying inside the capsule' },
    { clue: 'Principle explaining phosphenes on ocular pressure', meaning: 'Labelled line — modality is set by the central destination of the fibre' },
    { clue: 'Approximate ceiling on receptor potential amplitude', meaning: 'About 100 mV, and only at extreme stimulus intensity' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Everything downstream in somatosensation inherits these two rules. Differential sensitivity is why a modality-selective lesion is possible at all, and the labelled line is why projected and referred sensation exist — the phantom limb, the phosphene, the ulnar tingle in a finger that was never touched. The parallel MedCMU treatment of the same ground: [[sensory-receptors-transduction]]. The all-or-none spike that the receptor potential ultimately triggers is worked through in [[ghp-nerve-action-potential]].' },
    { logic: 'Where it is examined', detail: 'The favourite discriminator is receptor potential versus action potential — graded, local and decremental against all-or-none and propagated. The second favourite is a vignette that applies the wrong form of energy to a receptor and asks what the patient perceives. Adaptation rates and intensity coding continue in [[ghp-receptor-adaptation-intensity]]; the most elaborate transduction cascade of the five classes is in [[visual-phototransduction]].' },
  ],

  mnemonics: [
    {
      hook: 'Five classes, no sixth: Mechano, Thermo, Noci, Electromagnetic, Chemo',
      expansion: [
        'Mechano — touch, pressure, stretch, sound, position, arterial pressure',
        'Thermo — separate cold and warm receptors, never one population',
        'Noci — free nerve endings, tissue damage',
        'Electromagnetic — rods and cones only',
        'Chemo — taste, smell, arterial O₂, osmolality, glucose',
      ],
    },
    {
      hook: 'Graded IN, all-or-none OUT — the node is the analogue-to-digital converter',
      expansion: [
        'Receptor potential: local, graded, decremental, not propagated',
        'Action potential: fixed amplitude, regenerative, propagated',
        'Stimulus strength survives the conversion as frequency, not as spike size',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'What makes a receptor specific',
      wrongInstinct: 'A mechanoreceptor cannot be excited by anything except mechanical energy',
      rightAnswer: 'It can be, but its threshold for mechanical energy is orders of magnitude lower, so in life only that modality reaches it',
      why: 'Specificity is differential sensitivity, a ratio of thresholds — a hard enough blow excites the retina and is duly seen as light.',
    },
    {
      questionCategory: 'Where the quality of a sensation is decided',
      wrongInstinct: 'The type of energy applied to the receptor determines what is felt',
      rightAnswer: 'The central destination of the fibre determines what is felt',
      why: 'Labelled line: energy applied to a pain fibre gives pain, and mechanical pressure applied to the globe gives light, because each fibre reports to a fixed address.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A Pacinian corpuscle is compressed while recording from its core fibre. Tetrodotoxin is applied, which blocks voltage-gated sodium channels. What is the expected result?',
      options: [
        { id: 'a', text: 'Both the receptor potential and the action potentials are abolished' },
        { id: 'b', text: 'The receptor potential persists but no action potentials are generated' },
        { id: 'c', text: 'The action potentials persist but become smaller in amplitude' },
        { id: 'd', text: 'The receptor potential becomes all-or-none in character' },
      ],
      answerId: 'b',
      explanation: 'Transduction and encoding are separate steps in separate places. The receptor potential is produced by stimulus-gated cation channels in the membrane of the core terminal and does not need voltage-gated Na⁺ channels at all, so it survives the block. What it can no longer do is trigger a regenerative spike at the first node of Ranvier. This dissociation is the cleanest proof that the graded local potential and the all-or-none impulse are two different phenomena.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient presses firmly on the closed eyelid and reports seeing a bright ring of light. Which principle best explains this?',
      options: [
        { id: 'a', text: 'Mechanical energy is converted into photons within the vitreous' },
        { id: 'b', text: 'Differential sensitivity has been lost in the retina' },
        { id: 'c', text: 'The labelled line principle — the sensation is set by where the fibre terminates centrally' },
        { id: 'd', text: 'Rapid adaptation of the retinal photoreceptors' },
      ],
      answerId: 'c',
      explanation: 'Any stimulus strong enough to excite a retinal pathway is perceived as light, because those fibres report to the visual cortex and nowhere else. This is the labelled line: the modality is an address, not a property of the stimulus. Differential sensitivity is intact — the retina is simply being given a mechanical dose far above its very high mechanical threshold. No photons are involved, and adaptation is a separate issue.',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'How does a single sensory fibre signal that a stimulus has become stronger?',
      options: [
        { id: 'a', text: 'Its action potentials increase in amplitude in proportion to the receptor potential' },
        { id: 'b', text: 'Its action potentials increase in frequency, with the steepest gain at low stimulus strengths' },
        { id: 'c', text: 'Its conduction velocity increases' },
        { id: 'd', text: 'Its receptor potential becomes all-or-none once threshold is passed' },
      ],
      answerId: 'b',
      explanation: 'The receptor potential is graded and its amplitude rises with stimulus strength, but the impulses it launches are all-or-none and of fixed size, so the only variable left is rate. The amplitude-to-frequency conversion is steep at the bottom of the range and shallow at the top, which is why the system is exquisitely sensitive to faint stimuli yet does not saturate on strong ones. Conduction velocity is a property of fibre diameter and myelination and does not vary with stimulus strength.',
      tests: 'lecture',
    },
  ],
};

export default ghpSensoryReceptorsTransduction;
