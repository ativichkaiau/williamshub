import type { Lecture } from '../../lib/types';

export const ghpUpperVsLowerMotorNeuron: Lecture = {
  id: 'ghp-upper-vs-lower-motor-neuron',
  title: 'Upper versus Lower Motor Neuron: Deriving the Table',
  system: 'neuro',
  source: 'Ch 55 — Cortical & Brain Stem Control of Motor Function',
  updated: '2026-09-10',
  tags: [
    { kind: 'system', label: 'Neuroscience' },
    { kind: 'lecture', label: 'Ch 55 Cortical & Brain Stem Motor Control' },
    { kind: 'mechanism', label: 'Final common path · loop gain' },
    { kind: 'exam', label: 'Tone · reflexes · wasting · plantar' },
  ],

  highYield: [
    '**The alpha motor neuron is the final common path, and every difference in the table follows from that.** Corticospinal, rubrospinal, reticulospinal, vestibulospinal and tectospinal fibres, spindle afferents, tendon organ interneurons, Renshaw cells and propriospinal fibres all converge on **one cell in the anterior horn or in a cranial motor nucleus**, and its axon is the **only route to muscle**. So a lesion **upstream** of that cell removes **control** but leaves the machinery connected — the muscle is still innervated. A lesion **at or downstream** of that cell removes the **connection itself** — the muscle is denervated. **Every column of the classic table is one of these two situations played out in a different tissue.**',
    '**Tone is the standing output of the stretch reflex loop, so tone reports what happened to the loop.** In an **upper motor neuron** lesion the loop is **intact but unrestrained**: descending fibres normally drive the **medullary reticular inhibitory system** and hold gamma bias and loop gain down, and when that drive is lost the gain rises, giving **hypertonia that is velocity dependent (spasticity), a clasp-knife release, and clonus** when gain is high enough to oscillate. In a **lower motor neuron** lesion the **efferent limb of the loop is cut**, so there is **no tone at all — flaccidity**. The same single fact predicts the reflex column: **hyperreflexia with spread above, areflexia below**, and it predicts that **abdominal and cremasteric reflexes disappear** in upper motor neuron lesions, since these are polysynaptic cortically dependent reflexes.',
    '**Wasting and fasciculation are the denervation column, and they separate the two lesions more reliably than power does.** An upper motor neuron lesion produces only **disuse atrophy — mild, late, diffuse**, because trophic contact with the axon persists. A lower motor neuron lesion produces **denervation atrophy — early, severe and confined to the affected myotome or nerve territory**, because the muscle has lost its axon and its trophic support. Denervated and irritable motor units also discharge spontaneously: a whole motor unit firing on its own gives a **visible flicker under the skin — a fasciculation — which occurs only in lower motor neuron disease**. Its counterpart, the **fibrillation**, is a **single denervated muscle fibre** contracting, is **far too small to see** through the skin, and is therefore an **electromyographic finding only** — the commonest wording trap in this topic.',
    '**The plantar response is a released withdrawal reflex, not a mysterious sign.** Stroking the sole is a **noxious stimulus**, and the primitive **flexor withdrawal synergy of the leg includes dorsiflexion of the great toe** along with hip and knee flexion. The mature corticospinal system **suppresses that synergy** and converts the response to toe flexion, which is why the **extensor plantar (Babinski) response is normal in infants until corticospinal myelination completes at about one to two years** and reappears whenever the corticospinal system is damaged at any point along its length. **An extensor plantar therefore means the corticospinal tract, and the flexor withdrawal pattern released with it — fanning of the toes, and in a strong response, the triple flexion of ankle, knee and hip.**',
    '**Weakness has a pattern as well as a severity, and the pattern is more informative.** An upper motor neuron lesion weakens **movements, not individual muscles**, in a **pyramidal distribution — upper limb extensors and abductors weaker than flexors, lower limb flexors and dorsiflexors weaker than extensors** — which is what produces the flexed arm, extended leg and circumducting gait of chronic hemiplegia. A lower motor neuron lesion weakens **exactly the muscles supplied by the damaged root, plexus or nerve**, so the deficit maps onto an anatomical territory and usually carries **sensory loss in the same territory** unless the lesion is at the anterior horn cell. Two adjacent columns finish the differential: **neuromuscular junction disease gives fatigable weakness with normal tone, normal reflexes and no wasting**, and **myopathy gives symmetric proximal weakness with preserved reflexes until late**.',
    '**Read the pattern of the two columns together and the lesion localises itself.** **Upper motor neuron signs below a sensory level** means cord at that level. **Upper motor neuron signs in face, arm and leg on one side** means above the brainstem, on the opposite side. **Ipsilateral cranial nerve lower motor neuron signs with contralateral limb upper motor neuron signs** means brainstem at that nerve. **Both columns present, progressive, with no sensory loss and no sphincter disturbance**, means anterior horn cell disease with corticospinal involvement — motor neuron disease. **Lower motor neuron signs with sensory loss in a nerve or root territory** means peripheral nerve or root. And the exception that catches everyone: **an acute upper motor neuron lesion is flaccid and areflexic for days to weeks** — spinal shock or its cerebral equivalent — so the table describes the established lesion, not the first day of it.',
  ],

  mechanism: {
    title: 'One convergence point, two failure modes',
    steps: [
      { id: 's1', label: 'Descending tracts set the excitability of the alpha motor neuron; none of them reaches muscle' },
      { id: 's2', label: 'The alpha motor neuron is the final common path — the only output to the motor unit', emphasis: 'key' },
      { id: 's3', label: 'Lose the upper neuron: the reflex loop survives but loses inhibitory descending drive', emphasis: 'key' },
      { id: 's4', label: 'Loop gain rises — spasticity, hyperreflexia, clonus, extensor plantar, bulk preserved' },
      { id: 's5', label: 'Lose the lower neuron: the loop is broken and the muscle is truly denervated', emphasis: 'key' },
      { id: 's6', label: 'No tone, no reflex, early severe wasting and fasciculation within that myotome' },
    ],
  },

  examFindings: [
    { sign: 'Increased tone that catches on fast passive movement and releases, with brisk reflexes and an extensor plantar, in a limb of normal bulk', mechanism: 'Established upper motor neuron lesion: intact but disinhibited stretch reflex loop with the corticospinal tract damaged', significance: 'key' },
    { sign: 'A flaccid wasted hand with visible flickering of muscle at rest and absent finger jerks', mechanism: 'Lower motor neuron lesion: denervation atrophy with spontaneous discharge of whole motor units', significance: 'key' },
    { sign: 'Wasted fasciculating tongue and weak wasted hands, with brisk knee jerks, extensor plantars and no sensory loss at all', mechanism: 'Simultaneous upper and lower motor neuron signs without sensory involvement — motor neuron disease', significance: 'key' },
    { sign: 'Weakness of shoulder abduction and elbow flexion greater than of the extensors, with the arm held flexed and the leg extended', mechanism: 'Pyramidal pattern of weakness — upper limb extensors and lower limb flexors are the weaker groups', significance: 'supportive' },
    { sign: 'Ptosis and diplopia worsening through the day, with normal tone, normal reflexes and no wasting', mechanism: 'Neuromuscular junction disease, the third column: fatigability without denervation or disinhibition', significance: 'supportive' },
    { sign: 'Symmetric difficulty rising from a chair and combing the hair, with preserved reflexes and no fasciculation', mechanism: 'Proximal myopathy, the fourth column: the muscle fails while its innervation is intact', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Fasciculation', meaning: 'Spontaneous discharge of a whole motor unit; visible at the bedside and specific to lower motor neuron disease' },
    { clue: 'Fibrillation potentials', meaning: 'Single denervated fibres discharging; invisible clinically and detectable only on electromyography' },
    { clue: 'Velocity-dependent hypertonia with a clasp-knife release', meaning: 'Spasticity — the stretch reflex loop with its gain unclamped by loss of descending inhibition' },
    { clue: 'A sensory level on the trunk with upper motor neuron signs below it', meaning: 'Spinal cord lesion at that segment' },
    { clue: 'Ipsilateral cranial nerve palsy with contralateral hemiparesis', meaning: 'Brainstem lesion at the level of that cranial nerve nucleus' },
    { clue: 'Fatigable weakness with normal reflexes and normal bulk', meaning: 'Neuromuscular junction rather than either motor neuron' },
  ],

  treatment: [
    { logic: 'Build the table, do not memorise it', detail: 'Ask one question of every column: **does this feature depend on the muscle still having its axon, or on the reflex loop still having a brake?** Bulk and fasciculation depend on the axon, so they belong to the lower motor neuron. Tone, reflex amplitude, clonus and the plantar response depend on the brake, so they belong to the upper motor neuron. Power is the one row that is abnormal in both, which is why power alone never localises. The reflex loop whose gain is at stake: [[ghp-muscle-spindle-stretch-reflex]]. The descending pathway whose loss releases it: [[ghp-motor-cortex-corticospinal]].' },
    { logic: 'From the motor unit to recruitment', detail: 'The lower motor neuron plus every fibre it supplies is a **motor unit**, and the innervation ratio grades control: **a few fibres per neuron in extraocular and laryngeal muscles, hundreds to over a thousand in gastrocnemius**. Force is graded two ways — **recruiting more units**, in the **size order** that brings small fatigue-resistant units in first and large fast fatigable units in last, and **increasing the firing rate** of units already active. Units fire **asynchronously**, which is why a weak contraction feels smooth. Recruitment and unit physiology in detail: [[motor-unit-recruitment]]. Denervation and its pathological patterns in muscle: [[neurogenic-muscular-dystrophy]].' },
  ],

  mnemonics: [
    { hook: 'Everything above is a brake, everything below is a wire', expansion: ['Remove the brake: tone up, reflexes up, clonus, extensor plantar, bulk kept', 'Cut the wire: tone gone, reflexes gone, wasting fast, fasciculation appears', 'Power is weak either way, so power never localises'] },
    { hook: 'See it, it is a fasciculation; scope it, it is a fibrillation', expansion: ['Fasciculation is a whole motor unit and is visible through the skin', 'Fibrillation is a single fibre and needs electromyography', 'Both mean denervation, only one is a bedside sign'] },
  ],

  traps: [
    {
      questionCategory: 'Distinguishing denervation signs',
      wrongInstinct: 'Fibrillations are the visible twitches seen under the skin in motor neuron disease',
      rightAnswer: 'Those are fasciculations, which are whole motor units; fibrillation is a single fibre and is an electromyographic finding only',
      why: 'One denervated fibre generates far too little force to be seen through skin, while a whole motor unit contracting is easily visible.',
    },
    {
      questionCategory: 'Timing of upper motor neuron signs',
      wrongInstinct: 'Absent reflexes and flaccid tone exclude a cord or hemisphere lesion',
      rightAnswer: 'For days to weeks after an acute lesion the picture is flaccid and areflexic; the classic upper motor neuron table describes the established state',
      why: 'Motor neurons below an acute disconnection lose tonic descending facilitation before they become disinhibited, so the loop is first depressed and only later overactive.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 58-year-old has progressive weakness with wasted fasciculating hand muscles and a wasted fasciculating tongue, but also brisk knee jerks, sustained ankle clonus and bilateral extensor plantar responses. Sensation is entirely normal and there is no sphincter disturbance. Which conclusion follows?',
      options: [
        { id: 'a', text: 'There must be two separate lesions, one in the cord and one in the peripheral nerves' },
        { id: 'b', text: 'Combined upper and lower motor neuron involvement without sensory loss indicates motor neuron disease' },
        { id: 'c', text: 'The findings are those of a demyelinating polyneuropathy' },
        { id: 'd', text: 'Fasciculation with brisk reflexes indicates a neuromuscular junction disorder' },
      ],
      answerId: 'b',
      explanation: 'Wasting and fasciculation are denervation signs and place part of the disease at the anterior horn cell or its axon, while brisk reflexes, clonus and extensor plantars require an intact reflex loop that has lost its descending inhibition. The two columns coexisting, in the same patient and often in the same limb, with completely normal sensation and preserved sphincters, is the defining pattern of motor neuron disease. A polyneuropathy would abolish reflexes and involve sensation. Junctional disease produces fatigable weakness with normal bulk, normal tone and normal reflexes, and does not cause fasciculation.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'Why does a chronic corticospinal lesion produce an extensor plantar response?',
      options: [
        { id: 'a', text: 'The Golgi tendon organ reflex is abolished, allowing unopposed extension of the toe' },
        { id: 'b', text: 'Loss of corticospinal suppression releases the primitive flexor withdrawal synergy, which includes great toe dorsiflexion' },
        { id: 'c', text: 'Denervated intrinsic foot muscles contract spontaneously when the sole is stimulated' },
        { id: 'd', text: 'Muscle spindle afferents from the toe flexors degenerate after the lesion' },
      ],
      answerId: 'b',
      explanation: 'Stroking the sole is a noxious stimulus, and the primitive withdrawal synergy of the leg dorsiflexes the great toe as part of flexing the whole limb away. A mature corticospinal system suppresses that pattern and produces toe flexion instead, which is why the response is normally extensor in infants until corticospinal myelination is complete and becomes extensor again whenever the tract is damaged anywhere along its course. Tendon organ reflexes, denervation of foot muscles and afferent degeneration would all reduce rather than release a reflex response.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'Six hours after a fall a man has flaccid areflexic weakness of both legs, a sensory level at T8 and urinary retention. Which interpretation is correct?',
      options: [
        { id: 'a', text: 'Flaccidity and areflexia establish that the lesion is in the cauda equina rather than the cord' },
        { id: 'b', text: 'This is an acute cord lesion in spinal shock; upper motor neuron features will emerge over days to weeks' },
        { id: 'c', text: 'The absence of an extensor plantar excludes corticospinal damage permanently' },
        { id: 'd', text: 'Early severe wasting of the legs will confirm the upper motor neuron nature of the lesion' },
      ],
      answerId: 'b',
      explanation: 'A sensory level on the trunk localises the lesion to the cord, and a cauda equina lesion would give a saddle and root distribution rather than a level at T8. Cord neurons below an acute transection are deprived of tonic descending facilitation, so they are temporarily depressed, giving flaccidity, areflexia and retention despite the lesion being an upper motor neuron one; spasticity, hyperreflexia and extensor plantars appear as excitability returns over days to weeks. Reflex responses are unreliable during this phase, and marked wasting is a feature of denervation rather than of an upper motor neuron lesion.',
      tests: 'exam',
    },
  ],
};

export default ghpUpperVsLowerMotorNeuron;
