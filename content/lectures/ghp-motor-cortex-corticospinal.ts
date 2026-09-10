import type { Lecture } from '../../lib/types';

export const ghpMotorCortexCorticospinal: Lecture = {
  id: 'ghp-motor-cortex-corticospinal',
  title: 'Motor Cortex, the Homunculus and the Corticospinal Tract',
  system: 'neuro',
  source: 'Ch 55 — Cortical & Brain Stem Control of Motor Function',
  updated: '2026-09-10',
  tags: [
    { kind: 'system', label: 'Neuroscience' },
    { kind: 'lecture', label: 'Ch 55 Cortical & Brain Stem Motor Control' },
    { kind: 'mechanism', label: 'Area 4 → capsule → pyramid → decussation' },
    { kind: 'exam', label: 'Homunculus · capsular stroke · lateralisation' },
  ],

  highYield: [
    '**Three motor areas occupy the strip in front of the central sulcus, and they divide the labour by grain of control.** The **primary motor cortex is the precentral gyrus, Brodmann area 4**: it has the **lowest stimulation threshold** in the brain, evokes **discrete contractions of individual muscles**, and encodes **force and direction** for the finest movements. The **premotor cortex (lateral area 6)** builds the **pattern** — it sets the shoulder and arm so that the hand arrives correctly oriented — and works partly through the **basal ganglia and ventrolateral thalamus back onto area 4**. The **supplementary motor area (medial area 6)** needs **stronger stimuli, produces bilateral responses**, and handles **postural fixation, bimanual coordination and the positions of head and eyes** as a background for skilled movement. Specialised subregions sit in the same strip: **Broca area for word formation, the frontal eye field (area 8) for voluntary conjugate gaze, and a head rotation area**.',
    '**The motor homunculus is contralateral, inverted and grossly disproportionate, and the proportions are the exam point.** Running from the **lateral sylvian end upward**: **swallowing, tongue, jaw, face, then thumb and fingers, hand, arm, shoulder and trunk**, with **hip, knee, ankle and foot folded over the medial surface into the paracentral lobule**. **More than half of the entire primary motor cortex is devoted to the hands and to the muscles of speech** — cortical area follows **precision of control, not muscle bulk**. This map is the anatomy behind the vascular rule: **middle cerebral artery territory takes face and arm and spares the leg; anterior cerebral artery territory takes the leg and spares face and arm**.',
    '**The corticospinal tract is only about a third motor cortex in origin, and only about 3 percent of it is Betz axons.** Of roughly **1 million fibres** in each pyramid, **about 30 percent arise from primary motor cortex, 30 percent from premotor and supplementary areas, and 40 percent from the somatosensory and posterior parietal cortex** — so a large minority of the pyramidal tract is not motor command at all but **descending control of the sensory relays that feed the movement**. **Betz cells live only in area 4**, number about **34,000**, and are **60–120 micrometres across with 16 micrometre axons conducting at about 70 m/s** — the fastest fibres to the cord, but a small fraction of the tract. Most corticospinal fibres are small and slow and act as **tonic background facilitation** rather than as command pulses.',
    '**Learn the course as a list of squeeze points, because each one has a signature lesion.** **Corona radiata** (fibres fanning down, still spread out) to the **posterior limb of the internal capsule** (**face anterior, then arm, then leg posterior**, all packed into a few millimetres between thalamus and lentiform nucleus) to the **crus cerebri of the midbrain** to the **basis pontis** (broken into bundles by pontine nuclei) to the **medullary pyramid**. At the **pyramidal decussation, some 75–90 percent of fibres cross** and descend as the **lateral corticospinal tract** in the lateral column; the remainder continue uncrossed as the **anterior corticospinal tract** and cross **segmentally**, serving **axial and proximal muscles bilaterally**. Endings are mostly on **interneurons in the intermediate zone**, but the fibres serving the **hand and fingers synapse directly on anterior horn cells** — direct access is the price of dexterity. A parallel **corticorubrospinal pathway** (magnocellular red nucleus, crossing immediately and travelling with the lateral corticospinal tract to **distal flexors**) is the accessory route that supports partial recovery after cortical injury.',
    '**Where a lesion sits relative to the pyramidal decussation decides which side is weak — nothing else does.** **Above the decussation, weakness is contralateral**; **below it, in the cord, weakness is ipsilateral**. Add the corticobulbar rule and you can localise within the brainstem: a lesion that produces **an ipsilateral cranial nerve palsy with contralateral hemiparesis (a crossed picture) is in the brainstem** at the level of that nerve. Two more discriminators: **the density of the deficit reflects packing** — a **capsular** lesion gives a **dense, equal hemiplegia of face, arm and leg** because everything is compressed together, whereas a **cortical** lesion gives a **fractionated deficit** that splits face and arm from leg, and **upper facial muscles are spared in an upper motor neuron facial palsy** because the forehead has bilateral corticobulbar supply.',
    '**Removing area 4 alone does not cause spasticity — and that distinction is the bridge to the brainstem chapter.** A lesion confined to the primary motor cortex produces **hypotonia with loss of fine, fractionated finger movement**; the hand may never recover **independent finger control** even when proximal power returns, because there is no substitute for the direct corticomotoneuronal connection. The **spasticity of a typical stroke appears when the lesion also takes the neighbouring premotor and medial areas and their collaterals to the medullary reticular inhibitory system** — that is, when the brainstem inhibitory pathway loses its cortical drive. Add the seizure counterpart: focal discharge in area 4 causes a **Jacksonian march**, spreading in the order of the homunculus, and a postictal **Todd paresis** of the same body part.',
  ],

  mechanism: {
    title: 'From intention to anterior horn cell',
    steps: [
      { id: 's1', label: 'Premotor and supplementary areas assemble the movement pattern and set postural background' },
      { id: 's2', label: 'Primary motor cortex codes force and direction for individual muscles, half of it for hand and speech', emphasis: 'key' },
      { id: 's3', label: 'Axons converge through the corona radiata and pack into the posterior limb of the internal capsule', emphasis: 'key' },
      { id: 's4', label: 'The tract descends through crus cerebri and basis pontis into the medullary pyramid' },
      { id: 's5', label: 'Most fibres cross at the pyramidal decussation into the lateral corticospinal tract', emphasis: 'key' },
      { id: 's6', label: 'Fibres end on intermediate zone interneurons, and directly on motor neurons for the fingers' },
    ],
  },

  examFindings: [
    { sign: 'Dense equal weakness of the contralateral face, arm and leg with no cortical signs and no visual field defect', mechanism: 'Internal capsule lesion — all fibres are packed into a few millimetres so nothing can be spared selectively', significance: 'key' },
    { sign: 'Contralateral weakness of face and arm with a normal leg, plus aphasia or neglect', mechanism: 'Cortical middle cerebral artery territory: the lateral convexity homunculus, with adjacent association cortex involved', significance: 'key' },
    { sign: 'Contralateral weakness confined to the leg and foot', mechanism: 'Paracentral lobule on the medial surface, anterior cerebral artery territory', significance: 'key' },
    { sign: 'Weakness of the lower face on one side with preserved forehead wrinkling and eye closure', mechanism: 'Upper motor neuron facial palsy — the forehead nucleus receives bilateral corticobulbar input', significance: 'key' },
    { sign: 'Right third nerve palsy with left hemiparesis of face, arm and leg', mechanism: 'Crossed brainstem signs: a midbrain lesion above the decussation, at the level of the exiting nerve', significance: 'key' },
    { sign: 'Twitching that starts in the thumb, spreads to the hand, arm and then face, followed by transient weakness of that limb', mechanism: 'Jacksonian march along the motor homunculus with a postictal Todd paresis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Brodmann area 4 versus lateral area 6 versus medial area 6', meaning: 'Primary motor cortex, premotor cortex and supplementary motor area' },
    { clue: 'Composition of the pyramidal tract', meaning: 'About 30 percent primary motor, 30 percent premotor and supplementary, 40 percent somatosensory and parietal' },
    { clue: 'About 34,000 giant cells with 16 micrometre axons', meaning: 'Betz cells of area 4 — the fastest corticospinal fibres, but only about 3 percent of the tract' },
    { clue: 'Somatotopy in the posterior limb of the internal capsule', meaning: 'Face anterior, arm intermediate, leg posterior, all within a few millimetres' },
    { clue: 'Fibres that remain uncrossed in the medulla', meaning: 'Anterior corticospinal tract; crosses segmentally and serves axial and proximal muscles bilaterally' },
    { clue: 'Corticorubrospinal pathway', meaning: 'Magnocellular red nucleus, crosses at once, runs with the lateral corticospinal tract to distal flexors as an accessory route' },
  ],

  treatment: [
    { logic: 'Localise by asking three questions in order', detail: 'First, **which side** — weakness contralateral to the lesion means above the pyramidal decussation, ipsilateral means cord. Second, **is it crossed** — an ipsilateral cranial nerve palsy with contralateral limb weakness fixes the level in the brainstem at that nerve. Third, **is the deficit dense and uniform or fractionated** — uniform face, arm and leg means the fibres were packed, so think internal capsule or a small deep infarct, while a split between face and arm and the leg means cortex, and cortical company such as aphasia, neglect or a field defect confirms it. The wider clinical framework for this reasoning: [[neuro-localization-framework]]. The descending tracts compared side by side: [[motor-system-corticospinal-control]].' },
    { logic: 'Why cortex alone does not equal spasticity', detail: 'Guyton makes a point that is easy to skate over and frequently examined: **a lesion restricted to area 4 gives flaccid weakness and lost finger dexterity, not spasticity**. Tone rises only when the lesion also removes the cortical drive to the **medullary reticular inhibitory area**, letting pontine reticular and vestibular excitation of the antigravity muscles run unopposed. That is why the classic stroke, which takes cortex or capsule wholesale, becomes spastic while a discrete surgical excision of the hand area does not. The brainstem half of the argument: [[ghp-brainstem-motor-postural-control]]. The two-column bedside table this feeds into: [[ghp-upper-vs-lower-motor-neuron]].' },
  ],

  mnemonics: [
    { hook: 'Leg in the fold, face on the side', expansion: ['Foot and leg drape over the medial paracentral lobule in anterior cerebral artery territory', 'Hand and face run down the lateral convexity in middle cerebral artery territory', 'More than half the map is hand plus speech muscles'] },
    { hook: 'Thirty, thirty, forty', expansion: ['30 percent of pyramidal fibres from primary motor cortex', '30 percent from premotor and supplementary areas', '40 percent from somatosensory and parietal cortex — the tract is not purely motor'] },
  ],

  traps: [
    {
      questionCategory: 'What the corticospinal tract is made of',
      wrongInstinct: 'The pyramidal tract is composed of Betz cell axons from the primary motor cortex',
      rightAnswer: 'Betz cells contribute only about 34,000 of roughly a million fibres, and 40 percent of the tract arises from sensory and parietal cortex',
      why: 'Most corticospinal fibres are small and slow and serve tonic facilitation and sensory gating rather than fast command signals.',
    },
    {
      questionCategory: 'Predicting tone after a motor lesion',
      wrongInstinct: 'Any lesion of the motor cortex produces contralateral spastic weakness',
      rightAnswer: 'A lesion confined to area 4 gives hypotonia and loss of fine finger movement; spasticity requires additional loss of the cortical drive to the medullary reticular inhibitory area',
      why: 'Spasticity is a release phenomenon in the brainstem, not a direct consequence of losing corticospinal fibres.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 71-year-old develops sudden dense weakness of the right face, arm and leg, all affected to the same degree, with normal speech comprehension and production, no visual field defect and no neglect. Which lesion best explains this?',
      options: [
        { id: 'a', text: 'Large left middle cerebral artery cortical infarct' },
        { id: 'b', text: 'Lacunar infarct of the posterior limb of the left internal capsule' },
        { id: 'c', text: 'Left anterior cerebral artery infarct' },
        { id: 'd', text: 'Right pontine infarct below the decussation' },
      ],
      answerId: 'b',
      explanation: 'A uniformly dense hemiparesis of face, arm and leg with no cortical accompaniments is the signature of a small deep lesion where the corticospinal fibres are compressed into a few millimetres, most often the posterior limb of the internal capsule. A cortical middle cerebral artery infarct would fractionate the deficit, hitting face and arm harder than leg, and would usually add aphasia, neglect or a field cut. An anterior cerebral artery infarct would affect the leg predominantly. The pons lies above the pyramidal decussation, so a right pontine lesion would give left-sided weakness, and pontine lesions typically add crossed cranial nerve signs.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which statement about the origin and composition of the corticospinal tract is correct?',
      options: [
        { id: 'a', text: 'All fibres originate in the primary motor cortex and arise from Betz cells' },
        { id: 'b', text: 'Roughly 40 percent of the fibres arise from somatosensory and posterior parietal cortex' },
        { id: 'c', text: 'Every fibre decussates in the medulla, so no uncrossed corticospinal fibres reach the cord' },
        { id: 'd', text: 'The tract terminates exclusively on interneurons and never contacts anterior horn cells directly' },
      ],
      answerId: 'b',
      explanation: 'Only about 30 percent of pyramidal fibres come from the primary motor cortex and another 30 percent from the premotor and supplementary areas, leaving about 40 percent that arise from the somatosensory and parietal cortex and act on sensory relays and reflex gain rather than issuing motor commands. Betz cells account for roughly 34,000 axons out of about a million. Some 10 to 25 percent of fibres stay uncrossed as the anterior corticospinal tract and cross at segmental level to serve axial muscles. Most fibres do end on interneurons, but fibres controlling the fingers make direct corticomotoneuronal contacts, which is what makes fractionated finger movement possible.',
      tests: 'lecture',
    },
    {
      id: 'q3',
      stem: 'A patient has weakness of the left arm and leg with an upper motor neuron pattern, together with a right lower motor neuron facial palsy affecting the forehead and an inability to abduct the right eye. Where is the lesion?',
      options: [
        { id: 'a', text: 'Right internal capsule' },
        { id: 'b', text: 'Left cervical spinal cord' },
        { id: 'c', text: 'Right pons' },
        { id: 'd', text: 'Left midbrain crus cerebri' },
      ],
      answerId: 'c',
      explanation: 'Crossed findings, meaning ipsilateral cranial nerve signs with contralateral limb weakness, place the lesion in the brainstem at the level of the affected nerves. Facial and abducens nuclei are pontine, and a complete facial weakness including the forehead is a lower motor neuron pattern that localises to the nucleus or nerve rather than to the corticobulbar fibres. The corticospinal fibres at that point have not yet decussated, so they serve the opposite side of the body, giving left limb weakness from a right pontine lesion. A capsular or midbrain crus lesion would produce contralateral hemiparesis without a lower motor neuron facial palsy, and a cervical cord lesion causes ipsilateral weakness with no cranial nerve findings.',
      tests: 'mechanism',
    },
  ],
};

export default ghpMotorCortexCorticospinal;
