import type { Lecture } from '../../lib/types';

export const ghpGolgiTendonOrganCordReflexes: Lecture = {
  id: 'ghp-golgi-tendon-organ-cord-reflexes',
  title: 'Golgi Tendon Organ, Withdrawal Reflexes and Spinal Shock',
  system: 'neuro',
  source: 'Ch 54 — Motor Functions of the Spinal Cord; the Cord Reflexes',
  updated: '2026-09-10',
  tags: [
    { kind: 'system', label: 'Neuroscience' },
    { kind: 'lecture', label: 'Ch 54 Motor Functions of the Cord' },
    { kind: 'mechanism', label: 'Ib inhibition · reciprocal innervation' },
    { kind: 'exam', label: 'Clasp-knife · crossed extensor · spinal shock' },
  ],

  highYield: [
    '**The Golgi tendon organ is in series with the muscle, so it measures force where the spindle measures length.** It is an **encapsulated receptor in the tendon**, and each one is loaded by only **10–15 muscle fibres** whose pull passes straight through it. Because it sits **end-on in the line of pull**, it is stimulated by **tension**, and it cannot distinguish tension produced by **passive stretch** from tension produced by **active contraction** — a decisive difference from the spindle, which falls silent when the muscle contracts. Its afferent is the **type Ib fibre, about 16 micrometres**, almost as fast as Ia, and it has both a **dynamic burst** to a sudden rise in tension and a **static discharge proportional to steady tension**.',
    '**Ib input is inhibitory to its own muscle, and calling it merely protective undersells it.** The Ib axon excites an **inhibitory interneuron in the cord** which then inhibits the **alpha motor neurons of the same muscle — autogenic inhibition — while exciting the antagonist**. At very high tension this is a **protective brake** that can abruptly relax the muscle before the tendon avulses. In everyday use it is a **tension servo**: it sets a force level and **equalises the pull among the fibres of a muscle**, so that fibres taking excessive load are switched off and slack ones are recruited. Notice the pairing exams like — **spindle plus Ia = a length servo; tendon organ plus Ib = a tension servo**, two feedback loops with two different controlled variables.',
    '**The clasp-knife response is the tension servo revealed in a limb that has lost its brakes.** Move a spastic elbow or knee passively and quickly and you feel **rising resistance up to a point, then a sudden give**, like the blade of a pocket knife folding. The classical account is that the stretch reflex drives contraction until **tension rises far enough to recruit Ib autogenic inhibition, which cuts the motor drive abruptly**. Two features follow and are examined: it is **velocity dependent** — slow movement may not trigger it at all — and it is a feature of **spasticity, not rigidity**. **Lead-pipe rigidity of parkinsonism is constant through the range and independent of velocity**, and cogwheeling is that rigidity with tremor superimposed.',
    '**The flexor withdrawal reflex is polysynaptic and its features are all consequences of interneuron circuitry.** A painful stimulus excites **A-delta and C afferents** which fan out through **divergent interneuron pools**: ipsilateral **flexors are excited and ipsilateral extensors simultaneously inhibited** through the **reciprocal innervation** interneuron, so the limb withdraws instead of co-contracting. Because interneurons take time, the **latency is longer than a tendon jerk**; because some circuits **reverberate**, the contraction shows **afterdischarge that outlasts the stimulus** by a fraction of a second to seconds, with a stronger and longer afterdischarge for stronger pain. The **withdrawal pattern is stimulus-localised**: the exact combination of muscles is arranged to move the injured part **away from that particular stimulus**, so the same limb withdraws differently depending on where it is pinched.',
    '**The crossed extensor reflex is the postural half of the same event, and its delay is the giveaway.** About **0.2–0.5 s after** the ipsilateral limb flexes, the **opposite limb extends** — the interval is the time taken for interneurons to **cross the cord through the commissural fibres** and recruit the opposite extensor pool, with reciprocal inhibition of the opposite flexors. Its purpose is **weight transfer**: the body must be supported by the other leg while one is snatched away. Its afterdischarge is **even longer**, keeping the support in place. Two other cord interneuron mechanisms belong beside these: **reciprocal inhibition** (Ia interneuron, antagonist off whenever the agonist is on) and **recurrent inhibition** (a Renshaw cell excited by the motor axon collateral inhibits that same motor neuron and its neighbours, sharpening the focus of the output).',
    '**The isolated cord is a pattern generator, not a relay — which is exactly why cord injury leaves so much intact.** Reflex circuits in the cord alone can produce **rhythmic alternating stepping in one limb, reciprocal stepping in a pair, and even a diagonal galloping pattern in four limbs**; the **scratch reflex** adds a to-and-fro oscillator plus a position-finding component. **Bladder emptying, defecation, sexual reflexes, sweating and vascular tone** are similarly organised segmentally. What descending pathways supply is **initiation, modulation and voluntary control**, not the pattern itself. After a complete transection the machinery is intact but disconnected — which is why so much of the deficit is **loss of command rather than loss of circuitry**.',
  ],

  mechanism: {
    title: 'Nociceptive input to withdrawal and crossed support',
    steps: [
      { id: 's1', label: 'A-delta and C nociceptors discharge and enter through the dorsal root' },
      { id: 's2', label: 'Divergent interneuron pools excite the ipsilateral flexor motor neurons', emphasis: 'key' },
      { id: 's3', label: 'Ia inhibitory interneurons switch off the ipsilateral extensors — reciprocal innervation', emphasis: 'key' },
      { id: 's4', label: 'Reverberating circuits sustain afterdischarge for a fraction of a second beyond the stimulus' },
      { id: 's5', label: 'Commissural interneurons cross the cord and, after 0.2 to 0.5 s, extend the opposite limb', emphasis: 'key' },
      { id: 's6', label: 'Body weight shifts onto the supporting limb while the injured one is withdrawn' },
    ],
  },

  examFindings: [
    { sign: 'Passive rapid extension of a spastic elbow meets resistance that suddenly melts partway through the range', mechanism: 'Clasp-knife phenomenon: stretch-reflex contraction is cut short when rising tension recruits Ib autogenic inhibition', significance: 'key' },
    { sign: 'Resistance to passive movement that is uniform through the whole range and unchanged by moving faster', mechanism: 'Lead-pipe rigidity of extrapyramidal disease — not spasticity, and not a clasp-knife', significance: 'key' },
    { sign: 'Complete flaccid paraplegia with areflexia, urinary retention and hypotension hours after a T6 fracture-dislocation', mechanism: 'Spinal shock: abrupt withdrawal of tonic descending facilitation depresses every cord neuron below the level, including sympathetic outflow', significance: 'key' },
    { sign: 'Six weeks later the same patient has brisk knee jerks, extensor plantars, spastic legs and reflex bladder emptying', mechanism: 'Recovery of cord excitability without descending control — the pattern generators return disinhibited', significance: 'key' },
    { sign: 'Pinching one foot causes that leg to flex while the opposite leg extends a fraction of a second later', mechanism: 'Flexor withdrawal with crossed extensor response; the delay is the time for commissural interneurons to cross', significance: 'supportive' },
    { sign: 'A trivial stimulus below the level triggers mass flexion, sweating, and a surge in blood pressure in a chronic cord patient', mechanism: 'Mass reflex and autonomic dysreflexia — divergent spread through a cord that has lost all descending damping', significance: 'key' },
  ],

  investigations: [
    { clue: 'A receptor in series with the muscle fibres', meaning: 'Golgi tendon organ — reports tension, and cannot tell active contraction from passive stretch' },
    { clue: 'Type Ib afferent, about 16 micrometres', meaning: 'Tendon organ axon; drives an inhibitory interneuron onto its own motor neuron pool' },
    { clue: 'Autogenic inhibition', meaning: 'Ib inhibition of the homonymous muscle with excitation of its antagonist' },
    { clue: 'Ten to fifteen muscle fibres per receptor', meaning: 'The sampling unit of the tendon organ, which is how tension is equalised across a muscle' },
    { clue: 'Afterdischarge lasting well beyond the stimulus', meaning: 'Reverberating interneuron circuits — a hallmark of polysynaptic reflexes, absent from the monosynaptic tendon jerk' },
    { clue: 'Renshaw cell', meaning: 'Recurrent inhibition driven by a motor axon collateral; sharpens motor output and is distinct from Ia reciprocal inhibition' },
  ],

  treatment: [
    { logic: 'Two servos, two controlled variables', detail: 'Set the two proprioceptive loops side by side and most of the chapter falls out of the comparison. **Parallel geometry gives the spindle length; series geometry gives the tendon organ tension.** The spindle loop is **monosynaptic and excitatory to its own muscle**; the tendon loop is **disynaptic and inhibitory to its own muscle**. The spindle is **unloaded by contraction and needs gamma coactivation to stay useful**; the tendon organ is **loaded harder by contraction and needs nothing**. The length side of the pair in full: [[ghp-muscle-spindle-stretch-reflex]]. The general anatomy of a reflex arc and how withdrawal differs from stretch: [[reflex-arc-stretch-withdrawal]].' },
    { logic: 'Reading a cord injury in two phases', detail: 'Cord injury is examined as a time course rather than a snapshot. In the **first hours to weeks** expect flaccidity, areflexia, retention and, above T6, neurogenic hypotension with bradycardia; the temptation to call this a lower motor neuron picture is the classic error. **Return of the bulbocavernosus or anal reflex is the usual first sign that spinal shock is ending**, and thereafter the picture converts to spasticity, hyperreflexia, extensor plantars and an automatic bladder. Level, completeness and the tract-by-tract pattern: [[spinal-cord-syndromes]]. The acute injury and its management context: [[traumatic-brain-spinal-injury]].' },
  ],

  mnemonics: [
    { hook: 'Series senses strain, parallel senses length', expansion: ['Golgi tendon organ sits in series in the tendon and reads tension through Ib', 'Muscle spindle sits in parallel with the fibres and reads length through Ia and II', 'Ib inhibits its own muscle; Ia excites its own muscle'] },
    { hook: 'Flex away, extend across', expansion: ['Ipsilateral flexors on and ipsilateral extensors off — withdrawal from the stimulus', 'Contralateral extensors on 0.2 to 0.5 s later — support the weight', 'The delay is interneurons crossing the cord, not conduction time'] },
  ],

  traps: [
    {
      questionCategory: 'Which proprioceptor is being described',
      wrongInstinct: 'The Golgi tendon organ is a length receptor that supplements the spindle',
      rightAnswer: 'It is a tension receptor, and because it is in series it fires harder when the muscle contracts, exactly when the spindle falls silent',
      why: 'Geometry decides modality: in series with the pull means force, in parallel with the fibres means length.',
    },
    {
      questionCategory: 'Classifying increased tone',
      wrongInstinct: 'Any increase in resistance to passive movement is spasticity',
      rightAnswer: 'Spasticity is velocity dependent with a clasp-knife release; rigidity is uniform through the range and independent of velocity',
      why: 'Spasticity comes from a disinhibited stretch reflex loop, so its gain scales with the rate of stretch, whereas rigidity does not depend on the loop at all.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A receptor in the calf discharges strongly during an isometric contraction of gastrocnemius and also during passive dorsiflexion of the ankle, but stops during a maximal shortening contraction under no load. Which receptor is it?',
      options: [
        { id: 'a', text: 'Golgi tendon organ, type Ib afferent' },
        { id: 'b', text: 'Muscle spindle primary ending, type Ia afferent' },
        { id: 'c', text: 'Pacinian corpuscle in the deep fascia' },
        { id: 'd', text: 'Free nerve ending, type IV afferent' },
      ],
      answerId: 'a',
      explanation: 'The discriminating observation is firing during active contraction. A tendon organ is in series with the muscle, so both active contraction and passive stretch load it and both make it fire; an unloaded shortening contraction generates almost no tension and therefore no discharge. A spindle primary ending would do the opposite, firing during passive stretch but being unloaded and silenced by contraction unless gamma drive maintained it. Pacinian corpuscles adapt within milliseconds and cannot signal a maintained isometric effort, and type IV free endings are nociceptive.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient with an old middle cerebral artery infarct has increased tone in the affected arm. Moving the elbow quickly meets strong resistance that abruptly releases part way through extension, whereas moving it slowly meets little resistance. Which statement best explains the sudden release?',
      options: [
        { id: 'a', text: 'Muscle spindle afferents adapt completely within a fraction of a second' },
        { id: 'b', text: 'Rising muscle tension recruits Ib autogenic inhibition, which abruptly withdraws motor drive' },
        { id: 'c', text: 'Renshaw cells are activated by the passive stretch and inhibit the antagonist' },
        { id: 'd', text: 'The neuromuscular junction fails as the safety factor is exceeded' },
      ],
      answerId: 'b',
      explanation: 'This is the clasp-knife or lengthening reaction of spasticity. Loss of descending inhibition leaves the stretch reflex overactive, so rapid stretch drives a strong contraction; as tension climbs, Golgi tendon organ afferents recruit their inhibitory interneurons onto the same motor neuron pool and the drive is switched off abruptly. Velocity dependence is the signature of the stretch reflex loop and separates spasticity from rigidity. Spindle adaptation would not produce a sharply timed give, Renshaw cells inhibit the motor neurons that excited them rather than being driven by passive stretch, and junctional transmission is not failing.',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'Twelve hours after a complete T5 cord transection a man has flaccid paralysis, no reflexes below the level, a distended bladder and a blood pressure of 82/50 with a heart rate of 54. Which statement about his condition is correct?',
      options: [
        { id: 'a', text: 'Areflexia proves that the anterior horn cells below the lesion have been destroyed' },
        { id: 'b', text: 'The findings represent spinal shock, and reflexes will return over days to weeks, usually with hyperreflexia and spasticity' },
        { id: 'c', text: 'The hypotension is due to haemorrhage, since cord injury does not affect vascular tone' },
        { id: 'd', text: 'A flexor plantar response at this stage excludes a corticospinal lesion' },
      ],
      answerId: 'b',
      explanation: 'Cord neurons depend on tonic facilitation from descending pathways, so an abrupt transection depresses everything below the level, giving flaccidity, areflexia, retention and loss of sympathetic outflow with hypotension and unopposed vagal bradycardia when the lesion is above T6. Excitability recovers over days to weeks, often heralded by the return of sacral reflexes, and the final state is a disinhibited cord with spasticity, hyperreflexia and an automatic bladder. Anterior horn cells below the lesion are intact but disconnected, and reflex responses including the plantar response are unreliable while shock persists.',
      tests: 'disease',
    },
  ],
};

export default ghpGolgiTendonOrganCordReflexes;
