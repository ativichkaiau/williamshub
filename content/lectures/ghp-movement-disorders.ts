import type { Lecture } from '../../lib/types';

export const ghpMovementDisorders: Lecture = {
  id: 'ghp-movement-disorders',
  title: 'Movement Disorders: Hypokinetic and Hyperkinetic Failures of the Loop',
  system: 'neuro',
  source: 'Ch 56 — Cerebellum & Basal Ganglia in Motor Control',
  updated: '2026-09-10',
  tags: [
    { kind: 'system', label: 'Neuroscience' },
    { kind: 'lecture', label: 'Ch 56 Cerebellum & Basal Ganglia' },
    { kind: 'mechanism', label: 'GPi output up = too little, down = too much' },
    { kind: 'disease', label: 'Parkinson · Huntington · hemiballismus' },
  ],

  highYield: [
    '**Every basal ganglia disease is one number moving in one of two directions: the output of GPi and SNr.** **Raise that output and the thalamus is over-inhibited — hypokinetic disease: bradykinesia, rigidity, a resting tremor, a frozen face and a shuffling gait.** **Lower it and the thalamus is disinhibited — hyperkinetic disease: chorea, ballism, athetosis, dystonia and tics.** Everything below is a prediction from that one sentence, and neither family causes **weakness, spasticity or a Babinski sign**, because the loop acts **only through the cortex**.',
    '**Parkinson disease is degeneration of the pigmented dopaminergic neurons of the substantia nigra pars compacta, with alpha-synuclein Lewy bodies.** The nigrostriatal projection dies slowly and **symptoms appear only after roughly 60 to 80 per cent of striatal dopamine is lost**, which is why presentation is late and asymmetric. Circuit consequence: **the direct pathway loses D1 excitation and the indirect pathway loses D2 inhibition, so both changes push GPi and SNr output up**. The clinical quartet is **TRAP: resting Tremor, Rigidity, Akinesia or bradykinesia, and Postural instability**, with **lead-pipe rigidity made cogwheel by the superimposed tremor**, plus **hypomimia, hypophonia, micrographia, reduced blink and reduced arm swing, a stooped festinating shuffle, en-bloc turning and retropulsion on the pull test**.',
    '**The tremor discriminator is the highest-yield table in movement disorders, and it is a question about timing, not about frequency.** **Parkinsonian tremor: 4 to 6 Hz, pill-rolling, present at REST, damped as soon as the limb moves purposefully, asymmetric at onset, worsened by walking or by mental arithmetic.** **Cerebellar intention tremor: absent at rest, appears during movement and grows toward the target, roughly 3 to 5 Hz, with dysmetria and dysdiadochokinesia beside it.** **Essential tremor: postural and action tremor of 6 to 12 Hz, bilateral, often affecting head and voice, improved by alcohol and by propranolol, with a family history.** **Physiological tremor: fine, fast, and driven by thyrotoxicosis, anxiety, caffeine or a beta agonist.** Ask when in the movement it is loudest and the diagnosis falls out.',
    '**Huntington disease is the mirror image: the indirect pathway dies first, so the brake is removed.** It is **autosomal dominant, caused by CAG trinucleotide expansion in the HTT gene on chromosome 4, showing anticipation that is most marked with paternal transmission**. The **GABA and enkephalin medium spiny neurons of the indirect pathway in the caudate and putamen are lost earliest**, so **GPe is no longer inhibited, the subthalamic nucleus stays suppressed, GPi output falls and the thalamus is disinhibited: chorea**. Imaging shows **caudate atrophy with boxcar dilatation of the frontal horns**. Onset is typically in the **thirties to forties** with **chorea, psychiatric change and a subcortical dementia**; late in the illness the **direct pathway neurons die too and the patient becomes rigid and akinetic (the Westphal variant), which is also how juvenile-onset disease presents**.',
    '**Hemiballismus is the same disinhibition taken to its extreme, and its lesion is the subthalamic nucleus.** A **lacunar infarct or small haemorrhage in the subthalamic nucleus** of an **elderly hypertensive or diabetic patient** removes the only excitatory drive to GPi, so **GPi output collapses and the thalamus is released**: **violent, large-amplitude flinging of the proximal arm and leg on ONE side, contralateral to the lesion**, ceasing in sleep and severe enough to cause exhaustion and injury. **Ballism and chorea are the same phenomenon at different amplitudes** and often **soften into choreoathetosis as the episode settles**.',
    '**Athetosis and dystonia complete the hyperkinetic family, and both point at the putamen.** **Athetosis is slow, continuous, writhing, distal, snake-like movement**, classically from **basal ganglia injury in kernicterus or perinatal hypoxic cerebral palsy**, and it blends with chorea as **choreoathetosis**. **Dystonia is sustained co-contraction of agonist and antagonist producing a twisting, sustained abnormal posture** — **cervical dystonia, blepharospasm, task-specific dystonia of the writing hand** — often relieved briefly by a **sensory trick (geste antagoniste)** and treated with **botulinum toxin**. Two causes must never be missed: **Wilson disease in any patient under 40 with tremor, dystonia, parkinsonism, psychiatric change, liver disease and Kayser-Fleischer rings**, and **drug-induced disorders from chronic D2 blockade — acute dystonic reactions early, and tardive dyskinesia with orobuccolingual chewing movements late**.',
  ],

  mechanism: {
    title: 'One dial, two directions: from nigral loss to chorea',
    steps: [
      { id: 's1', label: 'Nigrostriatal dopamine neurons degenerate with Lewy bodies; 60–80 per cent lost before signs appear', emphasis: 'key' },
      { id: 's2', label: 'Direct pathway loses D1 excitation while the indirect pathway loses D2 inhibition', emphasis: 'key' },
      { id: 's3', label: 'GPi and SNr output rises and the VA/VL thalamus is over-inhibited', emphasis: 'danger' },
      { id: 's4', label: 'Supplementary motor and motor cortex under-driven: bradykinesia, rigidity, resting tremor', emphasis: 'key' },
      { id: 's5', label: 'Mirror lesion: indirect striatal neurons (Huntington) or the subthalamic nucleus (ballism) are lost', emphasis: 'key' },
      { id: 's6', label: 'GPi output collapses, the thalamus is disinhibited, and unwanted movement escapes: chorea and ballism' },
    ],
  },

  examFindings: [
    { sign: 'A 4 to 6 Hz pill-rolling tremor of the resting right hand that stops when he reaches for a cup and reappears while he counts backwards', mechanism: 'Nigrostriatal rest tremor — generated when the limb is unengaged, damped by voluntary movement, re-emerging with distraction', significance: 'key' },
    { sign: 'Ratchety resistance at the wrist through the whole range, equal in both directions and unaffected by the speed of passive movement', mechanism: 'Cogwheel rigidity, that is lead-pipe rigidity with tremor superimposed — not velocity-dependent clasp-knife spasticity', significance: 'key' },
    { sign: 'Handwriting shrinking across the line, an unblinking expressionless face, quiet monotonous speech and finger taps that decrement', mechanism: 'Failure to scale and sustain movement when direct pathway drive is lost — micrographia, hypomimia, hypophonia, bradykinesia', significance: 'key' },
    { sign: 'Short shuffling steps with a stooped posture, no arm swing, turning in multiple small steps, and falling backwards on the pull test', mechanism: 'Postural instability and gait failure of advanced nigrostriatal loss — the sign that responds least to levodopa', significance: 'supportive' },
    { sign: 'Irregular flowing movements flitting from limb to face, disguised as if deliberate, with a grip that waxes and wanes and a tongue that cannot stay out', mechanism: 'Chorea with motor impersistence — striatal indirect pathway loss releases the thalamus (milkmaid grip, darting tongue)', significance: 'key' },
    { sign: 'Sudden violent flinging of the left arm and leg in a hypertensive 72-year-old, stopping only during sleep', mechanism: 'Hemiballismus from a right subthalamic lacunar infarct — always contralateral to the lesion', significance: 'key' },
  ],

  investigations: [
    { clue: 'Tremor loudest at rest and abolished by reaching', meaning: 'Nigrostriatal (parkinsonian) tremor — the opposite timing to cerebellar intention tremor, which is absent at rest and worst at the target' },
    { clue: 'Bilateral 6 to 12 Hz postural tremor with head and voice involvement, better after alcohol and on propranolol', meaning: 'Essential tremor — action and postural, not terminal, and usually familial' },
    { clue: 'CAG trinucleotide repeat expansion on chromosome 4 with caudate atrophy and boxcar frontal horns', meaning: 'Huntington disease — autosomal dominant, anticipation greatest with paternal transmission' },
    { clue: 'Lacunar infarct in the subthalamic nucleus', meaning: 'Hemiballismus contralateral to the lesion — the excitatory drive to GPi is lost and the output brake collapses' },
    { clue: 'Low serum ceruloplasmin, high 24-hour urinary copper and Kayser-Fleischer rings in a patient under 40', meaning: 'Wilson disease — the treatable cause of mixed tremor, dystonia and parkinsonism, always worth excluding in young-onset disease' },
    { clue: 'Orobuccolingual chewing and grimacing movements after years of antipsychotic treatment', meaning: 'Tardive dyskinesia from chronic D2 blockade with receptor supersensitivity — hyperkinetic despite a blocking drug' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Approach any movement disorder question in two moves. First decide the direction: is there too little movement or too much, which tells you whether GPi output has gone up or down. Then name the lesion that moves it that way — nigra for hypokinetic, striatal indirect neurons or subthalamic nucleus for hyperkinetic. Treatment follows the same logic, which is why levodopa and dopamine agonists restore direct pathway drive in Parkinson disease while dopamine-depleting or blocking drugs such as tetrabenazine suppress chorea, and why deep brain stimulation aims at the subthalamic nucleus or GPi to reset the output. The circuit these predictions are read off: [[ghp-basal-ganglia-circuits]]. A fuller clinical approach to the hypokinetic patient: [[fcp1-movement-hypokinetic-parkinsonism]].' },
    { logic: 'Where it is examined', detail: 'The tremor stem is close to guaranteed, and it is always solved by timing the tremor inside the movement rather than by its frequency or amplitude. After that expect a hemiballismus vignette testing the side of the lesion, a Huntington stem testing which neuronal population dies first, and a drug stem in which an antipsychotic or an antiemetic produces parkinsonism. Do not let a dramatic movement disorder tempt you into reporting weakness — power, reflexes and plantars stay normal. The tremor on the other side of the discriminator, and the rest of the cerebellar picture: [[ghp-cerebellar-dysfunction]]. Where dopamine sits among the central transmitter systems: [[cns-neurotransmitters]].' },
  ],

  mnemonics: [
    { hook: 'TRAP for Parkinson disease', expansion: ['Tremor at rest, 4 to 6 Hz, pill-rolling and asymmetric', 'Rigidity, lead-pipe and cogwheel', 'Akinesia and bradykinesia with decrement, micrographia, hypomimia', 'Postural instability with festination and retropulsion'] },
    { hook: 'Rest is nigra, target is cerebellum, in between is essential', expansion: ['Loudest at rest and damped by movement: nigrostriatal disease', 'Absent at rest and worst approaching the target: cerebellar intention tremor', 'Uniform through posture and action, bilateral, better with alcohol: essential tremor'] },
  ],

  traps: [
    {
      questionCategory: 'Identifying a tremor',
      wrongInstinct: 'A coarse tremor in a patient who cannot control his limb well is cerebellar, and one that looks fine and fast is parkinsonian',
      rightAnswer: 'Time it inside the movement: a tremor that is present at rest and stops on reaching is nigrostriatal, while one that is absent at rest and grows toward the target is cerebellar',
      why: 'The frequencies overlap uselessly at 3 to 6 Hz, so amplitude and speed cannot separate them — only the phase of movement in which the tremor is maximal can.',
    },
    {
      questionCategory: 'Which side hemiballismus appears on',
      wrongInstinct: 'The subthalamic nucleus is deep and the cerebellum next door gives ipsilateral signs, so the flinging limbs must be on the same side as the lesion',
      rightAnswer: 'Hemiballismus is contralateral to the subthalamic lesion, because the loop returns through the thalamus to the motor cortex whose corticospinal tract then crosses',
      why: 'The basal ganglia have no spinal output and cross only once, at the pyramidal decussation of the cortex they drive — unlike the cerebellum, which crosses twice and is therefore ipsilateral.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 68-year-old is brought in because his right hand shakes. The shaking is obvious while the hand rests in his lap, disappears as he lifts a glass to his mouth, and returns when he is asked to count backwards from a hundred. His face is expressionless and his handwriting has become small. Which lesion explains this?',
      options: [
        { id: 'a', text: 'Degeneration of dopaminergic neurons in the substantia nigra pars compacta' },
        { id: 'b', text: 'Infarction of the left dentate nucleus' },
        { id: 'c', text: 'Loss of enkephalin-containing striatal neurons of the indirect pathway' },
        { id: 'd', text: 'Lacunar infarct of the left subthalamic nucleus' },
      ],
      answerId: 'a',
      explanation: 'A tremor that is maximal at rest, damped by purposeful movement and brought out by distraction is the signature of nigrostriatal dopamine loss, and the hypomimia and micrographia confirm a hypokinetic syndrome. Losing pars compacta neurons removes D1 excitation from the direct pathway and D2 inhibition from the indirect pathway, so GPi output rises, the thalamus is over-inhibited and movements become small and slow. A dentate lesion would give the opposite tremor, absent at rest and worsening toward a target, with dysmetria. The other two options are hyperkinetic lesions that lower GPi output and would produce chorea or ballism rather than poverty of movement.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'A 72-year-old hypertensive woman abruptly develops violent, large-amplitude flinging movements of the left arm and leg that stop only when she sleeps. Where is the lesion and why does it produce this?',
      options: [
        { id: 'a', text: 'Left subthalamic nucleus; loss of inhibition of GPi releases the thalamus on the same side' },
        { id: 'b', text: 'Right subthalamic nucleus; loss of its excitatory drive to GPi collapses the output brake and disinhibits the thalamus' },
        { id: 'c', text: 'Right substantia nigra pars compacta; dopamine excess drives the direct pathway' },
        { id: 'd', text: 'Left caudate nucleus; loss of direct pathway neurons removes the movement gate' },
      ],
      answerId: 'b',
      explanation: 'Hemiballismus is classically a lacunar infarct of the subthalamic nucleus in an elderly vascular patient, and the movements appear on the side opposite the lesion because the loop returns through the thalamus to the motor cortex, whose corticospinal output then crosses at the pyramid. The subthalamic nucleus is the only glutamatergic member of the group, supplying the excitatory drive that keeps GPi firing; without it GPi output collapses, the thalamus is disinhibited and enormous proximal movements escape. Option a inverts the side and the sign of the subthalamic projection, and a nigral lesion would cause loss of dopamine and a hypokinetic picture, not a hyperkinetic one.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A 38-year-old with a family history of a progressive neurological illness develops fidgety, flowing involuntary movements, irritability and failing memory. MRI shows caudate atrophy with boxcar frontal horns. Which change in the circuit produces the movements?',
      options: [
        { id: 'a', text: 'Early loss of indirect pathway striatal neurons removes drive to the subthalamic nucleus, GPi output falls and the thalamus is disinhibited' },
        { id: 'b', text: 'Loss of direct pathway striatal neurons raises GPi output and over-inhibits the thalamus' },
        { id: 'c', text: 'Excess dopamine release from the pars compacta overwhelms both pathways equally' },
        { id: 'd', text: 'Degeneration of the corticospinal tract releases spinal motor neurons from cortical control' },
      ],
      answerId: 'a',
      explanation: 'Huntington disease, an autosomal dominant CAG expansion in HTT on chromosome 4, kills the GABA and enkephalin medium spiny neurons of the indirect pathway first. Losing them leaves GPe unopposed, so the subthalamic nucleus is suppressed, GPi and SNr output falls and the thalamus is released, which is why the earliest motor sign is chorea and why the caudate atrophies enough to square off the frontal horns. Option b describes the hypokinetic direction and in fact predicts what happens late in the illness, when direct pathway neurons also die and the patient becomes rigid and akinetic in the Westphal variant. The corticospinal tract is not the lesion here: power, reflexes and plantar responses remain normal.',
      tests: 'disease',
    },
  ],
};

export default ghpMovementDisorders;
