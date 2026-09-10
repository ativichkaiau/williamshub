import type { Lecture } from '../../lib/types';

export const ghpBrainstemMotorPosturalControl: Lecture = {
  id: 'ghp-brainstem-motor-postural-control',
  title: 'Brain Stem Motor Control: Antigravity Tone, Spasticity and Posturing',
  system: 'neuro',
  source: 'Ch 55 — Cortical & Brain Stem Control of Motor Function',
  updated: '2026-09-10',
  tags: [
    { kind: 'system', label: 'Neuroscience' },
    { kind: 'lecture', label: 'Ch 55 Cortical & Brain Stem Motor Control' },
    { kind: 'mechanism', label: 'Pontine excitation vs medullary inhibition' },
    { kind: 'exam', label: 'Decorticate vs decerebrate · spasticity' },
  ],

  highYield: [
    '**Antigravity tone is set by two reticulospinal systems pulling in opposite directions, and their asymmetry is the key.** The **pontine reticular nuclei are excitatory**: their fibres descend **ipsilaterally in the anterior column** and powerfully facilitate **axial and extensor antigravity muscles**. Crucially, these neurons are **naturally, intrinsically active** and are further **supported by the vestibular nuclei and the deep cerebellar nuclei**, so they are always pushing. The **medullary reticular nuclei are inhibitory**: their fibres descend in the **lateral column** and switch off the same antigravity muscles — but they are **not spontaneously active**, and they **run only while collaterals from the corticospinal, rubrospinal and other motor pathways drive them**. **One side of the pair is self-starting, the other is borrowed from the cortex. That single asymmetry explains why cortical damage causes hypertonia.**',
    '**The vestibulospinal tracts add the second excitatory push and split by receptor origin.** The **lateral vestibulospinal tract** arises from the **lateral (Deiters) nucleus**, driven mainly by the **utricular macula**, descends **uncrossed the whole length of the cord in the anterior column** and provides **powerful excitation of extensor antigravity muscles** — it is the tract that lets an animal stand. The **medial vestibulospinal tract** arises from the **medial nucleus**, driven mainly by the **semicircular canals**, descends **bilaterally in the medial longitudinal fasciculus to cervical segments only**, and stabilises the **head** on the trunk. Because vestibular nuclei also drive the pontine excitatory area, **destroying the vestibular nuclei collapses antigravity support even though the reticulospinal tract is intact**.',
    '**Spasticity is a release phenomenon, and it should be derived rather than memorised.** Take away the cortex or the internal capsule and you take away the **drive to the medullary inhibitory area** while leaving the **self-starting pontine excitatory area and the vestibular drive untouched**. Excitation now runs unopposed onto the antigravity motor neurons, the **gamma bias rises**, and with it the **gain of the stretch reflex loop**: the result is **velocity-dependent hypertonia, hyperreflexia, clasp-knife release and clonus**. Two predictions follow and both are examined. First, **hypertonia is not uniform — it settles on the antigravity groups**, which in the upright human means **arm flexors and leg extensors**, producing the flexed arm, extended leg and circumducting gait of chronic hemiplegia. Second, **decerebrate rigidity is largely a gamma phenomenon**: it is driven through the spindle loop, and **cutting the dorsal roots abolishes it**, which is the classical proof that the excitation acts on the loop rather than directly on the alpha motor neuron.',
    '**Decorticate and decerebrate posturing are separated by one landmark: the red nucleus.** A lesion **above the midbrain** — extensive hemisphere, white matter or internal capsule damage — leaves the **rubrospinal tract intact**, and because the rubrospinal system **favours upper limb flexors**, the arms take up **flexion: adducted shoulders, flexed elbows, wrists and fingers held on the chest**, while the legs, which have no comparable rubrospinal flexor drive, **extend and internally rotate with plantarflexed feet**. That is **decorticate posturing**. A lesion **at or below the red nucleus** — classically a **midcollicular transection between the superior and inferior colliculi** — removes the **rubrospinal flexor drive as well**, leaving only unopposed pontine reticular and vestibular extensor excitation: now **all four limbs extend**, the arms **adducted, extended and pronated**, often with **opisthotonic neck extension and clenched jaw**. That is **decerebrate posturing**.',
    '**Which posture appears, and whether it changes, is a level indicator — and a change is an emergency.** **Decerebrate posturing is the worse of the two, because the lesion is lower and closer to the brainstem centres that keep the patient alive**; in Glasgow Coma Scale terms **abnormal flexion scores 3 and extension scores 2**. A patient whose posturing **converts from decorticate to decerebrate is deteriorating rostrocaudally** — the classical picture in an expanding supratentorial mass with **transtentorial herniation**, where the accompanying signs are an **ipsilateral fixed dilated pupil**, falling conscious level and later **Cushing hypertension with bradycardia and irregular breathing**. Posturing may be **spontaneous or elicited only by pain**, and it may be **asymmetrical**, in which case the worse side names the more damaged hemisphere.',
    '**The vestibular apparatus supplies the fast, predictive part of equilibrium, and the exam tests its division of labour.** The **maculae of the utricle and saccule** carry **statoconia denser than the fluid** and therefore report **head tilt relative to gravity and linear acceleration** — a **static** signal, which is why the utricle dominates while standing. The **semicircular canals** detect **angular acceleration** through endolymph inertia bending the cupula, cannot report a steady rotation, and function as an **anticipatory** system: they tell the brain the head is beginning to turn **before** the resulting loss of balance actually occurs, allowing correction in advance. That predictive role is why **canal damage disturbs equilibrium most during rapid movement**, and why **loss of vestibular input is compensated well by vision until the eyes are closed or the ground is uneven**, a bedside dissociation worth keeping beside the Romberg test.',
  ],

  mechanism: {
    title: 'Why losing the cortex raises tone',
    steps: [
      { id: 's1', label: 'Pontine reticular nuclei discharge spontaneously and excite axial and extensor antigravity muscles', emphasis: 'key' },
      { id: 's2', label: 'Lateral vestibulospinal fibres from Deiters nucleus add uncrossed extensor excitation' },
      { id: 's3', label: 'Medullary reticular nuclei inhibit the same motor neurons, but only while cortical collaterals drive them', emphasis: 'key' },
      { id: 's4', label: 'A cortical or capsular lesion withdraws that drive and the inhibitory brake falls silent', emphasis: 'key' },
      { id: 's5', label: 'Unopposed excitation raises gamma bias and stretch reflex gain: spasticity, hyperreflexia, clonus' },
      { id: 's6', label: 'If the lesion descends below the red nucleus, arm flexion converts to extension — decerebrate posturing', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Arms adducted and flexed at the elbows with hands on the chest, legs extended and feet plantarflexed', mechanism: 'Decorticate posturing: lesion above the midbrain with an intact rubrospinal tract favouring upper limb flexors', significance: 'key' },
    { sign: 'All four limbs extended, arms adducted, extended and pronated, with neck extension', mechanism: 'Decerebrate posturing: lesion at or below the red nucleus leaves only pontine reticular and vestibular extensor drive', significance: 'key' },
    { sign: 'A patient who was flexing to pain yesterday now extends to pain and has a dilated unreactive right pupil', mechanism: 'Rostrocaudal deterioration with uncal herniation — the level of the lesion has descended past the red nucleus', significance: 'key' },
    { sign: 'Chronic hemiplegia with the arm held flexed against the chest and the leg stiff, extended and circumducted when walking', mechanism: 'Spasticity concentrated in antigravity groups: arm flexors and leg extensors in the upright human', significance: 'key' },
    { sign: 'Rising blood pressure with bradycardia and irregular respiration in a comatose patient with a head injury', mechanism: 'Cushing reflex from raised intracranial pressure and brainstem compression — accompanies, and outlasts, the posturing', significance: 'supportive' },
    { sign: 'A patient stands steadily with eyes open but sways badly with eyes closed or on soft uneven ground', mechanism: 'Vestibular and proprioceptive support of equilibrium unmasked once visual substitution is removed', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Pontine reticular nuclei', meaning: 'Excitatory reticulospinal tract in the anterior column; intrinsically active and pro-extensor' },
    { clue: 'Medullary reticular nuclei', meaning: 'Inhibitory reticulospinal tract in the lateral column; active only while driven by corticospinal collaterals' },
    { clue: 'Lateral versus medial vestibulospinal tract', meaning: 'Deiters nucleus and utricle to extensor antigravity muscles the whole cord length, versus medial nucleus and canals to cervical segments for head stability' },
    { clue: 'Rigidity abolished by cutting the dorsal roots', meaning: 'Decerebrate rigidity is gamma mediated — it works through the muscle spindle loop, not directly on alpha motor neurons' },
    { clue: 'Midcollicular transection between the superior and inferior colliculi', meaning: 'The classical decerebrate level, below the red nucleus' },
    { clue: 'Glasgow Coma Scale motor 3 versus motor 2', meaning: 'Abnormal flexion (decorticate) versus extension (decerebrate) — extension is the lower lesion and the worse score' },
  ],

  treatment: [
    { logic: 'Two nuclei, one borrowed brake', detail: 'The whole chapter compresses into one asymmetry: **the pontine excitatory system is self-starting, the medullary inhibitory system is not**. The inhibitory side works only while the cortex is feeding it, so **any lesion that interrupts the cortex or its descending fibres silences the brake and leaves excitation running**. That is why spasticity follows a capsular stroke, why it takes days to weeks to appear after an acute lesion, and why it settles on the antigravity muscles rather than spreading evenly. The tract-by-tract anatomy underlying this balance: [[brainstem-descending-motor-tracts]]. The cortical drive whose loss releases it: [[ghp-motor-cortex-corticospinal]].' },
    { logic: 'Posturing at the bedside', detail: 'Treat posturing as a level sign and a trend, never as a single observation. **Flexion of the arms puts the lesion above the red nucleus; extension of the arms puts it at or below**, and a **change from flexion to extension is rostrocaudal deterioration that demands immediate imaging and pressure management**, not a repeat neurological examination in an hour. Check the pupils in the same breath, since an ipsilateral fixed dilated pupil signals uncal herniation. Do not confuse either pattern with the decerebrate-like stiffening of a seizure or with the flaccidity of the first hours of spinal shock. The two-column bedside framework this sits inside: [[ghp-upper-vs-lower-motor-neuron]]. Vestibular contributions to balance and the reflexes that test them: [[vestibular-system-reflexes]].' },
  ],

  mnemonics: [
    { hook: 'Pons pushes, medulla brakes, cortex owns the brake', expansion: ['Pontine reticulospinal excites extensors on its own initiative', 'Medullary reticulospinal inhibits them only while the cortex drives it', 'Remove the cortex and excitation runs unopposed: spasticity'] },
    { hook: 'Red nucleus is the line', expansion: ['Above the red nucleus: rubrospinal flexor drive survives, arms flex — decorticate', 'At or below it: flexor drive gone, arms extend — decerebrate', 'Flexion to extension means the lesion is descending'] },
  ],

  traps: [
    {
      questionCategory: 'Mechanism of post-stroke spasticity',
      wrongInstinct: 'Spasticity is caused by loss of corticospinal fibres to the anterior horn cell',
      rightAnswer: 'It is caused by loss of the cortical drive to the medullary reticular inhibitory system, which leaves pontine reticular and vestibular excitation unopposed',
      why: 'A lesion confined to the corticospinal projection gives weakness and hypotonia with lost dexterity; hypertonia requires the inhibitory brainstem system to be disconnected.',
    },
    {
      questionCategory: 'Interpreting posturing',
      wrongInstinct: 'Decorticate posturing is the more ominous finding because the cortex is destroyed',
      rightAnswer: 'Decerebrate extension is worse — the lesion is lower, at or below the red nucleus, and closer to the brainstem centres that sustain life',
      why: 'Posturing indexes the level of brainstem involvement, and deterioration proceeds rostrocaudally from flexion to extension.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An experimental transection is made at the midcollicular level, between the superior and inferior colliculi. Rigid extension of all four limbs develops, and it disappears when the dorsal roots supplying a limb are cut. Which mechanism explains both observations?',
      options: [
        { id: 'a', text: 'Direct monosynaptic corticospinal excitation of extensor alpha motor neurons' },
        { id: 'b', text: 'Loss of cortical drive to the medullary inhibitory area, leaving pontine reticular and vestibular excitation to raise gamma bias and spindle loop gain' },
        { id: 'c', text: 'Denervation supersensitivity of the neuromuscular junction below the lesion' },
        { id: 'd', text: 'Unopposed rubrospinal excitation of extensor muscles' },
      ],
      answerId: 'b',
      explanation: 'The transection removes cortical and rubrospinal collaterals that were driving the medullary reticular inhibitory area, while the pontine reticular nuclei, which are intrinsically active and supported by vestibular input, continue to excite antigravity extensors. Because much of that excitation is delivered through gamma motor neurons and the muscle spindle, the rigidity depends on an intact afferent limb, which is why cutting the dorsal roots abolishes it. Corticospinal fibres have been cut rather than left excitatory, junctional supersensitivity would not be reversed by dorsal rhizotomy, and the rubrospinal tract has been removed by the lesion and in any case favours flexors.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A head-injured patient initially flexed both arms and extended both legs in response to sternal pressure. Four hours later he extends and pronates both arms, extends both legs, and the right pupil is dilated and unreactive. What has happened?',
      options: [
        { id: 'a', text: 'He has improved, since extension is a more organised response than flexion' },
        { id: 'b', text: 'The lesion has extended below the red nucleus, indicating rostrocaudal deterioration with herniation' },
        { id: 'c', text: 'He has developed a lower motor neuron lesion of both arms' },
        { id: 'd', text: 'Spinal shock has supervened below a cervical cord injury' },
      ],
      answerId: 'b',
      explanation: 'Decorticate flexion depends on an intact rubrospinal tract, which favours upper limb flexors, and therefore places the lesion above the midbrain. When posturing converts to extension of the arms, that flexor drive has been lost, so the level has descended to or below the red nucleus. Combined with a newly fixed dilated pupil, this is rostrocaudal deterioration from an expanding supratentorial mass with uncal herniation, and it is an emergency. Extension scores worse than flexion on the Glasgow Coma Scale, lower motor neuron lesions cause flaccidity rather than posturing, and spinal shock produces flaccid areflexia, not extensor posturing.',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'Which statement correctly contrasts the two reticulospinal systems?',
      options: [
        { id: 'a', text: 'The pontine system is inhibitory and spontaneously active; the medullary system is excitatory and cortically driven' },
        { id: 'b', text: 'The pontine system is excitatory and spontaneously active, while the medullary inhibitory system depends on drive from corticospinal collaterals' },
        { id: 'c', text: 'Both systems are excitatory, and postural tone is set instead by the tectospinal tract' },
        { id: 'd', text: 'Both descend in the lateral column and cross at the pyramidal decussation' },
      ],
      answerId: 'b',
      explanation: 'Pontine reticular nuclei are intrinsically active, are reinforced by vestibular and deep cerebellar input, descend ipsilaterally in the anterior column and excite axial and extensor antigravity muscles. Medullary reticular nuclei inhibit those same motor neurons and descend in the lateral column, but they have little spontaneous activity and function only while collaterals from the corticospinal and rubrospinal pathways drive them. That dependence is what makes cortical lesions produce hypertonia. Neither reticulospinal tract decussates at the pyramids, and the tectospinal tract subserves reflex head turning to visual and auditory stimuli rather than postural tone.',
      tests: 'lecture',
    },
  ],
};

export default ghpBrainstemMotorPosturalControl;
