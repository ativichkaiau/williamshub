import type { Lecture } from '../../lib/types';

export const ghpCerebellarAnatomyCircuitry: Lecture = {
  id: 'ghp-cerebellar-anatomy-circuitry',
  title: 'Cerebellar Zones, Cortical Circuitry and the Comparator',
  system: 'neuro',
  source: 'Ch 56 — Cerebellum & Basal Ganglia in Motor Control',
  updated: '2026-09-10',
  tags: [
    { kind: 'system', label: 'Neuroscience' },
    { kind: 'lecture', label: 'Ch 56 Cerebellum & Basal Ganglia' },
    { kind: 'mechanism', label: 'Mossy + climbing → Purkinje → deep nuclei' },
    { kind: 'exam', label: 'Three zones · peduncles · comparator' },
  ],

  highYield: [
    '**The cerebellum is divided longitudinally into three functional zones, and each zone owns a deep nucleus, an output target and its own syndrome.** The **vestibulocerebellum (flocculonodular lobe)** works with the **fastigial nucleus and the vestibular nuclei** and holds **equilibrium, truncal posture and eye movement**. The **spinocerebellum (vermis plus the intermediate or paravermal strip)** drains to the **fastigial nucleus for axial and proximal muscle** and the **interposed nuclei (globose and emboliform) for the distal limb**, and it **corrects a movement while it is happening**. The **cerebrocerebellum (the large lateral hemispheres)** drains to the **dentate nucleus** and handles **planning, sequencing and the timing of the movement that comes next**. Learn the zone and the sign follows.',
    '**The somatotopy runs medial to lateral: midline for balance, paravermal for limbs, lateral for plans.** The **vermis maps the axial body — neck, shoulders, trunk, hips** — while the **intermediate zones map the limbs, arms rostrally and legs caudally**, and the **lateral hemispheres carry no body map at all** because they deal in intention rather than in muscles. This is why an **anterior vermis lesion gives gait ataxia with normal finger-nose testing**, and a **lateral hemisphere lesion gives limb dysmetria with a normal trunk**.',
    '**The cortex has three layers and exactly one output cell — the Purkinje cell — and it is inhibitory.** From the surface inward: the **molecular layer** (parallel fibres and the Purkinje dendritic fans), the **Purkinje cell layer**, and the **granular layer**, whose **granule cells outnumber every other neuron in the brain combined**. About **30 million Purkinje cells** exist, each with a **flat dendritic tree set at right angles to the parallel fibres**, and **every one of them is GABAergic**. Nothing else leaves the cerebellar cortex — so the cortex can only ever **subtract** from what the deep nuclei are already doing.',
    '**The deep nuclei fire tonically, so the cerebellar output is excitatory and is sculpted by Purkinje inhibition.** Both input systems send **excitatory collaterals to the deep nuclei on the way past**, which keeps deep nuclear cells **continuously discharging**; the Purkinje cells then **carve the pattern out of that steady stream**. The nuclear cells themselves are **glutamatergic and excitatory** to the **red nucleus and the VL thalamus**. The whole clinical consequence follows: **losing the cerebellum removes facilitation, so the sign is hypotonia and pendular reflexes, never spasticity**.',
    '**Two inputs, two jobs: mossy fibres vote, the climbing fibre teaches.** **Mossy fibres carry everything except the olive** — corticopontocerebellar, spinocerebellar, vestibular and reticular — and they excite **granule cells, whose axons rise and split into parallel fibres that run for millimetres through the molecular layer, weakly exciting hundreds of Purkinje cells in a row (roughly 200,000 parallel fibre synapses on one Purkinje cell, generating simple spikes)**. **Climbing fibres come from the inferior olive alone: one climbing fibre per Purkinje cell**, wrapping the dendritic tree so powerfully that a single volley produces an **all-or-none complex spike**. The climbing fibre fires only a few times a second and signals **movement error**, depressing the parallel fibre synapses that were active with it — **long-term depression, the substrate of motor learning**.',
    '**The unifying idea is the comparator: the cerebellum receives the intention and the result, and issues the difference.** A **copy of the motor command** arrives through the **pontine nuclei and the middle peduncle**, while **spindle, Golgi tendon, joint, vestibular and visual feedback** arrives through the **spinocerebellar and vestibular routes** — so the same circuit holds **what was meant to happen and what is actually happening**. From present position and velocity it **predicts where the limb will arrive and applies the brake in advance, turning the agonist off and the antagonist on at the right millisecond**. Route matters too: the **middle peduncle is purely afferent from the contralateral pons, the inferior peduncle is mainly afferent (olive, spinal, vestibular), and the superior peduncle is the great efferent from dentate and interposed nuclei**.',
  ],

  mechanism: {
    title: 'Intention in, error out: the cerebellar loop',
    steps: [
      { id: 's1', label: 'Motor cortex plan copied to pontine nuclei, crossing into the middle peduncle as mossy fibres' },
      { id: 's2', label: 'Spinocerebellar and vestibular afferents deliver the movement as it actually is', emphasis: 'key' },
      { id: 's3', label: 'Granule cells fan the mossy input into parallel fibres exciting rows of Purkinje cells', emphasis: 'key' },
      { id: 's4', label: 'One olivary climbing fibre per Purkinje cell adds the error signal and drives long-term depression', emphasis: 'key' },
      { id: 's5', label: 'Purkinje cells, the sole cortical output, inhibit the tonically firing deep nuclei', emphasis: 'key' },
      { id: 's6', label: 'Deep nuclei excite red nucleus and VL thalamus through the superior peduncle — the correction and the brake' },
    ],
  },

  examFindings: [
    { sign: 'A child with a midline posterior fossa tumour sways and falls when standing but has a normal finger-nose test', mechanism: 'Flocculonodular lobe and vermis, the vestibulocerebellum, hold trunk and equilibrium; the limb zones are untouched', significance: 'key' },
    { sign: 'A chronic drinker walks on a wide base with normal arm coordination while lying down', mechanism: 'Anterior superior vermis degeneration — the leg strip of the spinocerebellum, sparing the lateral hemispheres', significance: 'key' },
    { sign: 'Overshoot on reaching plus a tremor that grows as the finger nears the target, with delayed starting of the movement', mechanism: 'Lateral hemisphere and dentate lesion — planning, timing and the predictive brake for the distal limb', significance: 'key' },
    { sign: 'Reduced tone with a knee jerk that swings back and forth several times before settling', mechanism: 'Loss of the tonic excitatory deep-nuclear drive to cortex and to reticular and vestibular facilitation', significance: 'key' },
    { sign: 'A midbrain lesion just below the decussation produces limb ataxia on the same side as the lesion', mechanism: 'Superior cerebellar peduncle carries dentate and interposed output before it crosses', significance: 'supportive' },
    { sign: 'Nystagmus and difficulty holding eccentric gaze without any limb sign', mechanism: 'Flocculus and nodulus supervise the vestibulo-ocular reflex and the gaze-holding integrator', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Flocculonodular lobe with the fastigial nucleus and vestibular nuclei', meaning: 'Vestibulocerebellum — equilibrium, truncal posture, eye movement control' },
    { clue: 'Vermis and intermediate zone with fastigial and interposed nuclei', meaning: 'Spinocerebellum — real-time correction of axial (vermis) and distal limb (intermediate) movement' },
    { clue: 'Lateral hemisphere with the dentate nucleus', meaning: 'Cerebrocerebellum — planning, sequencing and the timing of successive movements, via VL thalamus to premotor cortex' },
    { clue: 'Only output neuron of the cerebellar cortex', meaning: 'The Purkinje cell, GABAergic and inhibitory, projecting onto the deep nuclei' },
    { clue: 'One fibre per Purkinje cell, from the inferior olive, producing a complex spike', meaning: 'Climbing fibre — the error or teaching signal that induces long-term depression at parallel fibre synapses' },
    { clue: 'Middle versus superior cerebellar peduncle', meaning: 'Middle is purely afferent from contralateral pontine nuclei; superior is the main efferent from dentate and interposed nuclei' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Almost every cerebellar question is really a zone question wearing clinical clothes: decide midline versus hemisphere before you decide anything else, because a truncal ataxic with normal limbs and a limb ataxic with a normal trunk have lesions centimetres apart. The second habit worth building is to keep the sign of every synapse in mind — Purkinje inhibitory, deep nuclei excitatory — because that single fact predicts hypotonia rather than spasticity. The signs this circuit produces when it fails: [[ghp-cerebellar-dysfunction]]. The descending system whose output the cerebellum is shaping: [[motor-system-corticospinal-control]].' },
    { logic: 'Where it is examined', detail: 'Favourite stems are the child with a midline medulloblastoma, the alcoholic with anterior vermis degeneration, and a pure circuitry question asking which cell is the sole output of the cerebellar cortex. Expect the climbing fibre to be asked as either its source (inferior olive) or its ratio (one per Purkinje cell). Broader cerebellar anatomy for orientation: [[cerebellum-anatomy-function]]. The proprioceptive traffic that supplies the actual-movement half of the comparator: [[proprioceptors-muscle-spindle-reflexes]].' },
  ],

  mnemonics: [
    { hook: 'Vestibulo-balance, Spino-body, Cerebro-brain', expansion: ['Vestibulocerebellum, flocculonodular lobe: balance, trunk, eyes', 'Spinocerebellum, vermis and paravermal strip: ongoing correction of the moving body', 'Cerebrocerebellum, lateral hemispheres: planning, timing and sequence'] },
    { hook: 'Don\'t Eat Greasy Food — lateral to medial', expansion: ['Dentate, Emboliform, Globose, Fastigial', 'Dentate belongs to the lateral hemisphere, fastigial to the vermis', 'Emboliform plus globose equals the interposed nuclei of the intermediate zone'] },
  ],

  traps: [
    {
      questionCategory: 'The sign of the cerebellar output',
      wrongInstinct: 'Purkinje cells are the output cell, so cerebellar output onto the thalamus is inhibitory and a cerebellar lesion releases tone into spasticity',
      rightAnswer: 'Purkinje cells inhibit only the deep nuclei; the deep nuclei themselves are excitatory to red nucleus and thalamus, so a cerebellar lesion removes facilitation and produces hypotonia with pendular reflexes',
      why: 'The inhibition is internal to the cerebellum — what leaves the cerebellum is a sculpted excitatory stream, not an inhibitory one.',
    },
    {
      questionCategory: 'Which peduncle carries the output',
      wrongInstinct: 'The middle cerebellar peduncle is the largest, so it must carry the cerebellar output to the thalamus',
      rightAnswer: 'The middle peduncle is entirely afferent from the contralateral pontine nuclei; the superior peduncle carries dentate and interposed efferents to red nucleus and VL thalamus',
      why: 'Size tracks the enormous corticopontocerebellar input, not the output — the output is the smaller superior peduncle that decussates in the midbrain.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 6-year-old with morning headaches and vomiting cannot sit or stand without swaying and has nystagmus, but finger-nose and heel-shin testing performed lying down are normal. Which part of the cerebellum is involved?',
      options: [
        { id: 'a', text: 'Right dentate nucleus and lateral hemisphere' },
        { id: 'b', text: 'Flocculonodular lobe and the vermis, the vestibulocerebellum' },
        { id: 'c', text: 'Left intermediate (paravermal) zone and interposed nuclei' },
        { id: 'd', text: 'Superior cerebellar peduncle after its decussation' },
      ],
      answerId: 'b',
      explanation: 'Truncal and gait instability with nystagmus and intact limb coordination is the midline syndrome. The flocculonodular lobe and vermis, working through the fastigial nucleus and the vestibular nuclei, hold equilibrium, axial posture and eye movement, and they carry no distal limb map, which is why finger-nose testing is normal. A dentate or intermediate zone lesion would do the opposite, giving limb dysmetria and intention tremor with a comparatively steady trunk. In a child of this age the classic midline mass is a medulloblastoma arising in the vermis and filling the fourth ventricle, which also explains the raised pressure symptoms.',
      tests: 'lecture',
    },
    {
      id: 'q2',
      stem: 'A fibre system arises from a single brainstem nucleus, provides exactly one axon to each Purkinje cell, wraps that cell dendritic tree, and produces an all-or-none complex spike a few times per second. What is it and what does it do?',
      options: [
        { id: 'a', text: 'Mossy fibres from the pontine nuclei, delivering the intended motor command' },
        { id: 'b', text: 'Parallel fibres from granule cells, spreading weak excitation along a row of Purkinje cells' },
        { id: 'c', text: 'Climbing fibres from the inferior olive, signalling movement error and inducing long-term depression' },
        { id: 'd', text: 'Basket cell axons, providing lateral inhibition around an active Purkinje beam' },
      ],
      answerId: 'c',
      explanation: 'The one-to-one ratio and the complex spike identify the climbing fibre, and the inferior olivary nucleus is its only source. Its low firing rate rules out a moment-to-moment reporting role; instead it flags a mismatch between intended and achieved movement and depresses those parallel fibre synapses that were active at the same time, which is the long-term depression underlying motor learning. Mossy fibres act through granule cells and generate simple spikes with a many-to-one convergence, and basket cells are inhibitory interneurons within the cortex, not an afferent system.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'Why does destruction of one cerebellar hemisphere produce hypotonia and pendular tendon reflexes rather than the spasticity seen after a corticospinal lesion?',
      options: [
        { id: 'a', text: 'The cerebellum inhibits the gamma motor neuron pool directly through the corticospinal tract' },
        { id: 'b', text: 'Deep cerebellar nuclei are tonically active and excitatory, so their loss withdraws facilitation from red nucleus, thalamus and cortex' },
        { id: 'c', text: 'Purkinje cell loss removes inhibition of the motor cortex, which then fires excessively' },
        { id: 'd', text: 'The cerebellum supplies the only inhibitory input to the vestibular nuclei, which then over-drive extensor tone' },
      ],
      answerId: 'b',
      explanation: 'Inhibition inside the cerebellum should not be confused with the sign of what leaves it. Mossy and climbing fibre collaterals keep the deep nuclear cells discharging tonically, and those cells are excitatory to the red nucleus and to the VL thalamus, so the cerebellum continuously facilitates the motor system while the Purkinje cells shape that facilitation in time. Removing the cerebellum therefore removes background excitatory drive, giving reduced tone and a limb that oscillates after a tendon tap because the damping correction has gone. Spasticity requires release of the descending systems from cortical control, which is a different lesion.',
      tests: 'mechanism',
    },
  ],
};

export default ghpCerebellarAnatomyCircuitry;
