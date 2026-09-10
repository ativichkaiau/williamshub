import type { Lecture } from '../../lib/types';

export const ghpNervousSystemOrganisation: Lecture = {
  id: 'ghp-nervous-system-organisation',
  title: 'Organisation of the Nervous System',
  system: 'neuro',
  source: 'Ch 45 — Organization of the Nervous System; Synapses & Transmitters',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Neuroscience' },
    { kind: 'lecture', label: 'Ch 45 Nervous System Organisation' },
    { kind: 'mechanism', label: 'Three levels · convergence and divergence' },
    { kind: 'exam', label: 'Grey vs white matter' },
  ],

  highYield: [
    '**One loop, three jobs: a sensory division that collects, an integrative division that decides, and a motor division that acts.** Receptors feed afferents into cord and brainstem; integration happens at synapses; output leaves by two routes — the **somatic** route to skeletal muscle and the **autonomic** route to smooth muscle, cardiac muscle and glands. Every later neuro chapter is detail hung on this loop, so name the division and the level before you name the lesion.',
    '**The computer comparison is worth making precisely because of where it fails.** Both have input devices, a processor, stored memory and output devices, and both encode signals so that meaning depends on **which line is active**, not on the signal itself. It breaks down in four places: the brain has **no separate memory unit**, because memory is held in the very synapses that do the computing; there is **no central clock and no fixed program**, since the wiring rewrites itself with use; processing is **massively parallel and degrades gracefully** rather than crashing; and the brain **discards more than 99 per cent of its sensory input** instead of storing it. Integration is mostly rejection.',
    '**Three levels, each able to work without the one above it.** **Spinal cord** — withdrawal reflexes, stepping and antigravity support, plus local vasomotor, gut and bladder reflexes. **Lower brain / subcortical** (medulla, pons, midbrain, hypothalamus, thalamus, cerebellum, basal ganglia) — arterial pressure, respiration, equilibrium, feeding, sleep–wake cycling and stereotyped emotional patterns such as rage. **Cortex** — the memory store that turns crude subcortical patterns into precise, determinate ones.',
    '**The cortex is never autonomous, and this is the point examiners love.** It is essential for most thought, yet it is **inert without continuous activation from the brainstem**: an anatomically perfect cortex with a damaged reticular activating system gives **coma**. The corollary runs the other way too — remove the cortex and the animal still walks, eats, maintains blood pressure and shows rage; what it loses is precision and memory, not function.',
    '**Grey matter computes, white matter only carries.** Grey = neuronal cell bodies, dendrites, glia and **essentially every synapse in the CNS**; white = myelinated axon tracts with no integration at all. The layout is **inverted between cord and brain**: in the cord grey is a central butterfly wrapped in white, while in cerebrum and cerebellum grey is the outer cortex (plus deep nuclei) with white inside. A white-matter lesion deletes transmission along a tract; a grey-matter lesion deletes processing at a node.',
    '**Divergence amplifies, convergence decides.** **Divergence** — one input fibre ends on many second-order cells, in an **amplifying** pattern down successive stages and also into **multiple separate tracts**, which is how a single cortical command reaches thousands of muscle fibres. **Convergence** — a single anterior motor neuron carries **10,000–200,000 presynaptic terminals**, roughly **80–95 per cent on its dendrites** and only 5–20 per cent on the soma, arriving from many sources. Convergence is precisely what makes the neuron a **decision element rather than a relay**.',
  ],

  mechanism: {
    title: 'Sensory in, three levels of integration, motor out — with 99 per cent thrown away',
    steps: [
      { id: 's1', label: 'Receptors transduce the stimulus → afferents enter via dorsal roots and cranial nerves' },
      { id: 's2', label: 'Cord level integrates first: withdrawal, stepping, antigravity support — before the brain knows', emphasis: 'key' },
      { id: 's3', label: 'Lower brain / subcortical level runs pressure, respiration, equilibrium, feeding, emotion', emphasis: 'key' },
      { id: 's4', label: 'Cortical level adds memory and precision — but only while the brainstem keeps it awake', emphasis: 'key' },
      { id: 's5', label: 'Over 99 per cent of arriving information is discarded at synapses as irrelevant', emphasis: 'key' },
      { id: 's6', label: 'Surviving fraction drives motor output: somatic to skeletal muscle, autonomic to viscera and glands' },
    ],
  },

  examFindings: [
    { sign: 'Withdrawal from a hot object begins before the pain is consciously felt', mechanism: 'The cord-level reflex arc closes locally; the ascending signal reaches cortex milliseconds later', significance: 'key' },
    { sign: 'Below a complete cord transection, tendon jerks and flexor withdrawal return after spinal shock resolves', mechanism: 'The cord is an autonomous integrative level, not a passive cable to the brain', significance: 'key' },
    { sign: 'A decorticate patient still breathes, maintains blood pressure and cycles between sleep and wakefulness', mechanism: 'Those functions are generated at the lower brain / subcortical level', significance: 'key' },
    { sign: 'Structurally intact cortex plus a brainstem reticular lesion produces coma', mechanism: 'The cortex has no intrinsic arousal; activation is supplied from below', significance: 'key' },
    { sign: 'A small lacunar infarct in the internal capsule causes a dense hemiparesis of face, arm and leg', mechanism: 'White matter compresses the descending fibres of the whole body into a few millimetres; cortical representation is spread over a large surface', significance: 'key' },
    { sign: 'One nociceptor volley recruits contraction in several muscles across more than one segment', mechanism: 'Divergence in both the amplifying and the multiple-tract patterns', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Tissue containing neuronal cell bodies, dendrites and essentially all synapses', meaning: 'Grey matter — the only tissue where integration occurs' },
    { clue: 'Central butterfly of grey surrounded by white', meaning: 'Spinal cord; the arrangement is inverted in cerebrum and cerebellum, where grey is cortical' },
    { clue: 'One input fibre ending on progressively more cells at each successive stage', meaning: 'Divergence, amplifying type — one command, thousands of effector fibres' },
    { clue: 'Terminals from many different sources ending on one neuron', meaning: 'Convergence from multiple sources — the anatomical basis of summation and of decision-making' },
    { clue: 'Level that maintains arterial pressure, respiration, equilibrium and feeding without consciousness', meaning: 'Lower brain / subcortical level' },
    { clue: 'Fraction of arriving sensory information that produces no response and is not stored', meaning: 'More than 99 per cent — the integrative function is mostly rejection' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Clinical localisation is this chapter run backwards: a deficit tells you which division has been cut (sensory, integrative, motor) and at which level (cord, subcortical, cortical). Getting the level right before naming the lesion is the whole skill. The cord level in anatomical detail: [[spinal-cord-anatomy-organization]]. The synapse that performs the actual integrating, and the 99 per cent rejection: [[ghp-synaptic-transmission]].' },
    { logic: 'Where it is examined', detail: 'Two stems recur — the three-level hierarchy dressed as a lesion, and the grey-versus-white distinction dressed as a lacunar infarct. Learn the inversion of the grey/white layout between cord and brain, and learn that convergence, not divergence, is what makes a neuron a decision element. The cortical level and its maps: [[cerebral-cortex-organization]]. The descending path that carries a cortical decision to the cord: [[motor-system-corticospinal-control]].' },
  ],

  mnemonics: [
    { hook: 'SIM — Sensory in, Integrative in the middle, Motor out', expansion: ['Sensory: receptors and afferents', 'Integrative: synapses discard over 99 per cent', 'Motor: somatic to skeletal muscle, autonomic to viscera and glands'] },
    { hook: 'Three floors: Cord reflexes, Subcortical survival, Cortex precision', expansion: ['Cord: withdrawal, stepping, antigravity support', 'Subcortical: pressure, breathing, balance, feeding, rage', 'Cortex: memory and precision — but never awake by itself'] },
  ],

  traps: [
    {
      questionCategory: 'What grey and white matter actually are',
      wrongInstinct: 'Grey matter is unmyelinated axons and white matter is myelinated axons, so both are simply conducting tissue',
      rightAnswer: 'Grey matter holds the cell bodies, dendrites and essentially every synapse — it is the only place integration happens; white matter is pure cable',
      why: 'Discriminator: a white-matter lesion abolishes transmission along a tract, while a grey-matter lesion of the same size abolishes processing at one node.',
    },
    {
      questionCategory: 'Where the computer analogy breaks',
      wrongInstinct: 'The brain stores memory in a dedicated store and reads it into a processor, as a computer separates RAM from CPU',
      rightAnswer: 'Memory is held in the modifiable synapses that also perform the computation — there is no separable memory unit, no fixed program and no central clock',
      why: 'Discriminator: use changes the wiring itself, so in the nervous system learning and computing are the same physical event.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Two months after a complete spinal cord transection at T6, a noxious stimulus applied to the foot produces brisk flexion of the leg, although the patient feels nothing. What best explains the movement?',
      options: [
        { id: 'a', text: 'Ascending sensory fibres have regenerated across the lesion' },
        { id: 'b', text: 'The cord below the lesion contains its own integrative circuitry and completes the withdrawal reflex without the brain' },
        { id: 'c', text: 'The stimulus spread through the sympathetic chain to reach the brainstem' },
        { id: 'd', text: 'Skeletal muscle contracted directly in response to the noxious stimulus' },
      ],
      answerId: 'b',
      explanation: 'The spinal cord is one of the three integrative levels, not a cable. Its grey matter contains complete reflex circuits for withdrawal, stepping and antigravity support, which operate whether or not signals reach the brain. Regeneration across a complete transection does not occur in humans, the sympathetic chain carries no somatic motor output of this kind, and skeletal muscle has no intrinsic nociceptive response.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A small lacunar infarct confined to the posterior limb of the internal capsule causes a dense contralateral weakness of face, arm and leg. An infarct of similar volume in the cerebral cortex causes a far more restricted deficit. Which principle explains the difference?',
      options: [
        { id: 'a', text: 'The internal capsule has a richer collateral blood supply than the cortex' },
        { id: 'b', text: 'White matter concentrates the descending fibres of the entire body into a small cross-section, whereas cortical representation is spread over a large surface area' },
        { id: 'c', text: 'Grey matter is intrinsically more resistant to ischaemia than white matter' },
        { id: 'd', text: 'The internal capsule contains the cell bodies of the corticospinal neurons' },
      ],
      answerId: 'b',
      explanation: 'This is the grey-versus-white distinction applied clinically. White matter is pure cable, and in the internal capsule the cable for the whole contralateral body is packed into a few millimetres, so a tiny lesion is devastating. The equivalent cortical territory holds only a fraction of the somatotopic map. Option d is the common trap — corticospinal cell bodies live in the cortex, and only their axons run in the capsule.',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'Which statement about the cerebral cortex is correct?',
      options: [
        { id: 'a', text: 'It can sustain conscious thought independently of the lower brain centres' },
        { id: 'b', text: 'It stores memory and gives crude subcortical patterns precision, but requires continuous activation from below to function at all' },
        { id: 'c', text: 'It generates the flexor withdrawal reflex' },
        { id: 'd', text: 'It is composed mainly of myelinated fibre tracts' },
      ],
      answerId: 'b',
      explanation: 'The cortex is a vast memory storehouse that converts imprecise subcortical patterns into determinate ones, but it never functions alone: brainstem activation is what keeps it awake, which is why an intact cortex with a reticular lesion produces coma. Withdrawal is a cord-level reflex, and the cortex is grey matter — cell bodies, dendrites and synapses — with the myelinated tracts lying beneath it.',
      tests: 'lecture',
    },
  ],
};

export default ghpNervousSystemOrganisation;
