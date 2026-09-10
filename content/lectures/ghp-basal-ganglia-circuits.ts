import type { Lecture } from '../../lib/types';

export const ghpBasalGangliaCircuits: Lecture = {
  id: 'ghp-basal-ganglia-circuits',
  title: 'Basal Ganglia Circuits: Direct, Indirect and Dopamine',
  system: 'neuro',
  source: 'Ch 56 — Cerebellum & Basal Ganglia in Motor Control',
  updated: '2026-09-10',
  tags: [
    { kind: 'system', label: 'Neuroscience' },
    { kind: 'lecture', label: 'Ch 56 Cerebellum & Basal Ganglia' },
    { kind: 'mechanism', label: 'Cortex → striatum → pallidum → thalamus → cortex' },
    { kind: 'exam', label: 'D1 vs D2 · disinhibition · subthalamic nucleus' },
  ],

  highYield: [
    '**Get the names straight first, because half the confusion in this topic is vocabulary.** The **caudate plus putamen is the striatum, and it is the input nucleus** — essentially the **whole cerebral cortex projects onto it with glutamate**. The **putamen plus globus pallidus is the lentiform nucleus**, an anatomical term with no functional meaning. The **globus pallidus internus (GPi) and the substantia nigra pars reticulata (SNr) are the twin output nuclei**, both **GABAergic**, projecting to the **VA and VL thalamus**. The **globus pallidus externus (GPe)** is purely internal traffic, the **substantia nigra pars compacta (SNc)** is the **dopamine source**, and the **subthalamic nucleus (STN) is the only excitatory, glutamatergic member of the group**. The loop closes: **cortex → striatum → pallidum → thalamus → premotor, supplementary motor and motor cortex**.',
    '**The resting state of the system is a brake held on, so movement is produced by releasing it.** **GPi and SNr fire tonically and inhibit the thalamus continuously**, which means the thalamocortical cells that would drive a movement are held down all the time. Nothing in this circuit adds excitation to the cortex directly; **movement appears when the brake is lifted — disinhibition**. Hold that idea and you never have to memorise which pathway does what: **count the inhibitory synapses. An even number of inhibitory links between striatum and thalamus is net excitation (go), an odd number is net inhibition (stop).**',
    '**Direct pathway — two inhibitory links, so it facilitates movement.** **Cortex excites striatal medium spiny neurons carrying D1 receptors (and substance P and dynorphin); these inhibit GPi and SNr**. Inhibiting the tonic inhibitor **releases the VA and VL thalamus, which then excites the supplementary motor and motor cortex** and the wanted movement runs. **Inhibit the inhibitor equals go.** This is the pathway that **scales the movement — gives it enough amplitude and speed to be worth making** — which is why losing it produces small, slow movement rather than paralysis.',
    '**Indirect pathway — three inhibitory links with an excitatory nucleus in the middle, so it suppresses movement.** **Cortex excites striatal medium spiny neurons carrying D2 receptors (and enkephalin); these inhibit GPe; GPe normally restrains the subthalamic nucleus, so the STN is released and, being glutamatergic, drives GPi and SNr harder**; the thalamus is then **inhibited more deeply and the movement is clamped down**. The STN is best thought of as the **accelerator pedal on the brake**. A **third route, the hyperdirect pathway, runs from cortex straight to the STN**, bypassing the striatum — it is the **fastest limb of the circuit and delivers a global stop or hold signal**, and it is the limb targeted by **deep brain stimulation**.',
    '**Dopamine acts on the two pathways through opposite receptors and yet promotes movement through both — this is the single most tested fact in the chapter.** The nigrostriatal projection from **SNc releases dopamine onto both populations of medium spiny neuron**. **D1 receptors are excitatory (Gs-coupled) and sit on direct pathway cells, so dopamine turns the go pathway up. D2 receptors are inhibitory (Gi-coupled) and sit on indirect pathway cells, so dopamine turns the stop pathway down.** **Opposite receptor actions, same behavioural result: more movement.** It follows immediately that **losing nigrostriatal dopamine, or blocking D2 receptors with an antipsychotic, produces poverty of movement**, while **too much dopaminergic drive produces excess movement**.',
    '**What the circuit is actually for is selection: open a narrow gate for the wanted movement and clamp everything else.** The cortex proposes **many competing motor programmes at once**; the **focused direct pathway disinhibits the thalamic cells for the chosen one** while the **diffuse indirect and hyperdirect pathways raise GPi output over the neighbouring programmes** — a **centre-surround arrangement in movement space**. The basal ganglia also **set the scale and speed of the movement and help sequence one component into the next**. Two structural facts finish the picture: **there is no direct output to the spinal cord — everything acts through the cortex**, which is why these diseases give **abnormal quality and quantity of movement without weakness, without spasticity and without a Babinski sign**; and **parallel loops through the caudate serve cognition and emotion**, which is why the same diseases carry **apathy, obsessionality and dementia**.',
  ],

  mechanism: {
    title: 'Releasing the brake: how a movement is selected',
    steps: [
      { id: 's1', label: 'Cortex excites striatal medium spiny neurons with glutamate' },
      { id: 's2', label: 'GPi and SNr fire tonically, holding the VA/VL thalamus inhibited — the resting brake', emphasis: 'key' },
      { id: 's3', label: 'Direct D1 route: striatum inhibits GPi/SNr, the thalamus is disinhibited and movement is facilitated', emphasis: 'key' },
      { id: 's4', label: 'Indirect D2 route: striatum inhibits GPe, releasing the STN to excite GPi/SNr and suppress movement', emphasis: 'key' },
      { id: 's5', label: 'SNc dopamine excites D1 cells and inhibits D2 cells — opposite receptors, both favouring movement', emphasis: 'key' },
      { id: 's6', label: 'Net effect: a narrow gate opens for the chosen programme while competing programmes are clamped' },
    ],
  },

  examFindings: [
    { sign: 'Passive wrist movement meets a ratchety resistance that is equal in flexion and extension and unchanged by the speed of movement', mechanism: 'Cogwheel rigidity from excessive GPi output — not clasp-knife spasticity, which is velocity-dependent and direction-dependent', significance: 'key' },
    { sign: 'Finger tapping starts at normal size but the amplitude shrinks progressively over ten taps', mechanism: 'Failure of the direct pathway to scale and sustain the movement — the decrement of bradykinesia', significance: 'key' },
    { sign: 'Violent flinging movements of one arm and leg beginning abruptly in a hypertensive 70-year-old', mechanism: 'Contralateral subthalamic lesion — the indirect pathway loses its excitatory relay and GPi output collapses', significance: 'key' },
    { sign: 'Parkinsonism developing over weeks in a young patient started on a typical antipsychotic', mechanism: 'D2 receptor blockade removes dopaminergic inhibition of the indirect pathway, reproducing the nigrostriatal lesion pharmacologically', significance: 'key' },
    { sign: 'Restless flowing movements that flit between muscle groups, with an inability to keep the tongue protruded or the grip constant', mechanism: 'Chorea with motor impersistence from loss of striatal indirect pathway neurons — the surround suppression fails', significance: 'supportive' },
    { sign: 'Dramatic abnormal movements with normal power, normal reflexes and flexor plantar responses', mechanism: 'The basal ganglia have no direct spinal output; they act only through the cortex, so they alter movement rather than cause paralysis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The only excitatory, glutamatergic nucleus of the basal ganglia', meaning: 'The subthalamic nucleus — it drives GPi and SNr, and its loss releases hyperkinetic movement' },
    { clue: 'Input nucleus versus output nuclei', meaning: 'Striatum (caudate plus putamen) receives the whole cortex; GPi and SNr are the GABAergic outputs to VA and VL thalamus' },
    { clue: 'D1 receptors on medium spiny neurons containing substance P and dynorphin', meaning: 'Direct pathway; dopamine is excitatory here and increases the drive to move' },
    { clue: 'D2 receptors on medium spiny neurons containing enkephalin', meaning: 'Indirect pathway; dopamine is inhibitory here, switching off the suppressor and again increasing movement' },
    { clue: 'Substantia nigra pars compacta versus pars reticulata', meaning: 'Compacta is the pigmented dopaminergic source of the nigrostriatal projection; reticulata is a GABAergic output nucleus functionally paired with GPi' },
    { clue: 'A cortical projection reaching the subthalamic nucleus without passing through the striatum', meaning: 'The hyperdirect pathway — the fastest route, delivering a global stop signal, and the target of deep brain stimulation' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'You cannot reliably memorise this circuit, but you can rebuild it in ten seconds from two rules: the output nuclei are always braking, and an even number of inhibitory synapses means go. Count the links from striatum to thalamus — two in the direct pathway (go), three in the indirect pathway with the excitatory subthalamic nucleus interposed (stop). Once the wiring is derived, every movement disorder becomes a prediction about whether GPi output has risen or fallen. What that prediction looks like in patients: [[ghp-movement-disorders]]. The descending system the loop finally acts through, since the basal ganglia never touch the cord: [[motor-system-corticospinal-control]].' },
    { logic: 'Where it is examined', detail: 'The recurring stems are a D1 versus D2 question phrased as a pharmacology question, a pathway-counting question that gives you a lesion and asks whether movement increases or decreases, and a subthalamic question hidden inside a stroke vignette. A fourth version supplies a drug — an antipsychotic, levodopa, a dopamine agonist — and expects you to move the circuit in the right direction. Complementary detail on the nuclei and their connections: [[basal-ganglia-circuitry]]. Receptor coupling and where dopamine sits among the central transmitters: [[ghp-neurotransmitters-receptors]].' },
  ],

  mnemonics: [
    { hook: 'D1 Direct = Do it; D2 = inDirect = Do not', expansion: ['D1 sits on the direct pathway and dopamine excites it, so the go route is strengthened', 'D2 sits on the indirect pathway and dopamine inhibits it, so the stop route is weakened', 'Opposite receptor signs, identical outcome: more movement'] },
    { hook: 'Count the inhibitions: even means go', expansion: ['Direct: striatum inhibits GPi, GPi inhibits thalamus — two inhibitions, net excitation', 'Indirect: striatum inhibits GPe, GPe inhibits STN, STN excites GPi, GPi inhibits thalamus — net inhibition', 'The subthalamic nucleus is the accelerator pedal on the brake'] },
  ],

  traps: [
    {
      questionCategory: 'What dopamine does in the striatum',
      wrongInstinct: 'Dopamine is an excitatory transmitter, so it excites the striatum and thereby increases movement',
      rightAnswer: 'Dopamine has opposite actions on the two populations — excitatory through D1 on direct pathway cells and inhibitory through D2 on indirect pathway cells — and both actions promote movement',
      why: 'The effect of a transmitter is set by its receptor, not by the transmitter; here two opposite receptor actions converge on the same behavioural outcome.',
    },
    {
      questionCategory: 'The role of the subthalamic nucleus',
      wrongInstinct: 'The subthalamic nucleus is another inhibitory relay in a chain of inhibitory nuclei, so destroying it should reduce movement',
      rightAnswer: 'It is the only excitatory nucleus in the group; it drives GPi and SNr, so destroying it collapses the output brake and unleashes violent contralateral movement',
      why: 'Every other link is GABAergic, which is exactly why the single glutamatergic relay is the one examiners choose to lesion.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Activation of the direct pathway increases movement. Which sequence explains why?',
      options: [
        { id: 'a', text: 'Striatum excites GPi, which excites the thalamus, which excites motor cortex' },
        { id: 'b', text: 'Striatum inhibits GPi and SNr, disinhibiting the VA/VL thalamus, which then excites the motor cortex' },
        { id: 'c', text: 'Striatum inhibits GPe, releasing the subthalamic nucleus, which excites the thalamus directly' },
        { id: 'd', text: 'GPi projects directly to the spinal cord and its inhibition releases the alpha motor neuron pool' },
      ],
      answerId: 'b',
      explanation: 'GPi and SNr fire tonically and hold the VA and VL thalamus inhibited, so this circuit works entirely by lifting a brake. The direct pathway inserts two inhibitory synapses between striatum and thalamus — striatum onto GPi/SNr, then GPi/SNr onto thalamus — and an even number of inhibitory links is net excitation, so the thalamocortical cells are disinhibited and drive the supplementary motor and motor cortex. The striatum is GABAergic and never excites GPi, the subthalamic nucleus projects to GPi rather than to the thalamus, and the basal ganglia have no spinal projection at all.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A drug selectively blocks striatal D2 receptors while leaving D1 receptors untouched. What is the predicted effect on the circuit and on the patient?',
      options: [
        { id: 'a', text: 'Indirect pathway activity increases, GPi output rises, the thalamus is over-inhibited and movement becomes slow and poor' },
        { id: 'b', text: 'Indirect pathway activity falls, GPi output falls, and the patient develops chorea' },
        { id: 'c', text: 'Direct pathway activity increases, producing dystonia with preserved speed of movement' },
        { id: 'd', text: 'The subthalamic nucleus is silenced, producing contralateral hemiballismus' },
      ],
      answerId: 'a',
      explanation: 'Dopamine acting on D2 receptors inhibits the indirect pathway medium spiny neurons, so blocking D2 removes that inhibition and lets the indirect pathway run unopposed. The chain then reads: striatal D2 cells more active, GPe more inhibited, subthalamic nucleus released, GPi and SNr driven harder, thalamus more deeply inhibited, motor cortex under-driven. The patient becomes bradykinetic and rigid, which is precisely the drug-induced parkinsonism seen with typical antipsychotics and with metoclopramide. Chorea would follow the opposite change in GPi output, and hemiballismus requires a subthalamic lesion, not a striatal receptor blockade.',
      tests: 'treatment',
    },
    {
      id: 'q3',
      stem: 'Which statement about the organisation of the basal ganglia is correct?',
      options: [
        { id: 'a', text: 'They project directly to spinal motor neurons, which is why their diseases cause weakness' },
        { id: 'b', text: 'The globus pallidus externus is the principal output nucleus to the thalamus' },
        { id: 'c', text: 'They influence movement only through the thalamus and cortex, which is why their diseases alter the amount and quality of movement without causing paralysis' },
        { id: 'd', text: 'The substantia nigra pars reticulata supplies the dopaminergic nigrostriatal projection' },
      ],
      answerId: 'c',
      explanation: 'The loop begins and ends in the cortex: cortex to striatum, striatum through the pallidum, pallidum to VA and VL thalamus, thalamus back to premotor, supplementary motor and motor cortex. Because no fibre leaves the basal ganglia for the spinal cord, these diseases cannot produce weakness, spasticity or an extensor plantar response; they change how much movement occurs and what quality it has. GPe is an internal relay to the subthalamic nucleus rather than an output nucleus, and the dopaminergic cells lie in the pars compacta, the pars reticulata being a GABAergic output nucleus functionally equivalent to GPi.',
      tests: 'lecture',
    },
  ],
};

export default ghpBasalGangliaCircuits;
