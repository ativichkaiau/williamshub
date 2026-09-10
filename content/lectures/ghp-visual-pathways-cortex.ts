import type { Lecture } from '../../lib/types';

export const ghpVisualPathwaysCortex: Lecture = {
  id: 'ghp-visual-pathways-cortex',
  title: 'Visual Pathways, the Lateral Geniculate and Striate Cortex',
  system: 'neuro',
  source: 'Ch 51 — The Eye III — Central Neurophysiology of Vision',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Neuroscience' },
    { kind: 'lecture', label: 'Ch 51 Central Neurophysiology of Vision' },
    { kind: 'mechanism', label: 'Retina → chiasm → LGN → V1' },
    { kind: 'exam', label: 'Field defects · macular sparing · what vs where' },
  ],

  highYield: [
    '**One sentence decides every field defect on the paper: nasal fibres cross, temporal fibres do not.** Ganglion cell axons from the **nasal half of each retina decussate in the optic chiasm**; those from the **temporal half stay ipsilateral**. Because the lens inverts and reverses the image, **nasal retina samples the temporal (lateral) field** and temporal retina samples the nasal field. So the chiasm is the one place in the whole pathway where the crossing fibres of the two eyes — and therefore **both temporal half-fields** — sit together in a single small structure, wrapped around the pituitary stalk. Every classical defect falls out of this geometry rather than needing to be memorised: the retinal build-up is in [[visual-phototransduction]].',
    '**After the chiasm the pathway is organised by FIELD, not by eye — which is why everything behind it is homonymous.** The **optic tract** carries the **contralateral half-field of both eyes**: left tract = right hemifield. It terminates in the **dorsal lateral geniculate nucleus**, a **six-layered** relay in which **layers 1 and 2 are magnocellular** (large, fast, motion and low contrast, no colour) and **layers 3–6 parvocellular** (small, slow, fine detail and colour). The inputs stay strictly segregated by eye — **contralateral eye to layers 1, 4 and 6; ipsilateral eye to 2, 3 and 5** — so binocular fusion has not yet happened at this level. The LGN is a **gate, not a wire**: most of its synaptic input comes back down from cortex and brainstem, controlling how much retinal traffic is allowed through.',
    '**Derive the lesion map, do not memorise it — the rule is: monocular before the chiasm, heteronymous at it, homonymous behind it, and more congruous the further back you go.** **Optic nerve** = all fibres from one eye and only that eye, so **monocular blindness** with an afferent pupil defect. **Chiasm** = only the crossing nasal fibres of both eyes, so **bitemporal hemianopia** (pituitary macroadenoma, craniopharyngioma) — and because it splits the two fields down the vertical meridian, fusion fails and the patient may describe images sliding apart. **Optic tract** = one whole contralateral half-field, but the fibres of the two eyes have not yet been matched up, so the defect is **homonymous and characteristically incongruous**. Clinical framing of the field chart: [[visual-pathway-fields]].',
    '**The optic radiation splits around the ventricle, and the two limbs carry opposite quadrants — this is the single highest-yield localising fact in the posterior pathway.** Geniculate axons that leave via the **temporal lobe sweep forward and around the temporal horn as the Meyer loop**; they carry **inferior retinal fibres, hence the SUPERIOR field quadrant**. A temporal lesion therefore gives a **contralateral superior quadrantanopia — pie in the sky** — and, because temporal lobe, it comes with amnesia or complex partial seizures. Fibres taking the **parietal route** carry **superior retina, hence the INFERIOR quadrant** (pie on the floor), typically with contralateral neglect. A complete radiation lesion gives a **full, fairly congruous homonymous hemianopia**.',
    '**Primary visual cortex sits on the banks of the calcarine sulcus, and its map explains macular sparing.** V1 (**area 17, striate cortex**, marked by the **line of Gennari** and by input to **layer IVc**) is **retinotopic and inverted**: the **cuneus above the sulcus represents the INFERIOR field, the lingual gyrus below it the SUPERIOR field**, and the **macula occupies the occipital pole** out of all proportion to its retinal area. Two consequences are examined relentlessly. First, the **occipital pole receives collateral supply from middle cerebral as well as posterior cerebral branches**, so a **PCA occlusion gives homonymous hemianopia with MACULAR SPARING** — central acuity survives. Second, V1 is built of **ocular dominance columns, orientation columns and colour-processing blobs**, and it is here that the two eyes are finally combined, which is why **binocular fusion and stereopsis are cortical, not geniculate**.',
    '**Beyond V1 vision splits into two streams, and the deficits are dissociable.** The **dorsal stream (occipital → posterior parietal)** is **magnocellular-fed and answers WHERE**: motion, depth, spatial position and the visual guidance of reaching. Bilateral parietal damage gives **optic ataxia, gaze apraxia and simultanagnosia (Balint syndrome)**, and focal loss of motion perception is **akinetopsia**. The **ventral stream (occipital → inferotemporal)** is **parvocellular-fed and answers WHAT**: form, colour and object identity, culminating in face-selective cortex — hence **prosopagnosia** from bilateral fusiform lesions and **cerebral achromatopsia** from lingual and fusiform damage. Note what neither stream does: **a cortical lesion never abolishes the pupillary light reflex**, because that arc leaves the tract before the geniculate — see [[ghp-eye-movements-pupillary-control]].',
  ],

  mechanism: {
    title: 'Photon to percept: the crossing rule and everything it predicts',
    steps: [
      { id: 's1', label: 'Ganglion cell axons leave the disc as the optic nerve, one eye per nerve' },
      { id: 's2', label: 'Nasal fibres decussate in the chiasm; temporal fibres stay ipsilateral', emphasis: 'key' },
      { id: 's3', label: 'Optic tract now carries the whole contralateral half-field of both eyes', emphasis: 'key' },
      { id: 's4', label: 'LGN relays in six layers, magnocellular 1–2 and parvocellular 3–6, eyes still separate' },
      { id: 's5', label: 'Radiation splits: Meyer loop through temporal lobe (superior field), parietal limb (inferior field)', emphasis: 'key' },
      { id: 's6', label: 'Calcarine V1 fuses the eyes, then feeds dorsal where and ventral what streams' },
    ],
  },

  examFindings: [
    { sign: 'Bitemporal hemianopia respecting the vertical midline in a patient with headache and amenorrhoea', mechanism: 'Pituitary macroadenoma compressing the decussating nasal fibres in the chiasm from below', significance: 'key' },
    { sign: 'Homonymous hemianopia in which the two eyes map out clearly different defects', mechanism: 'Incongruity places the lesion in the optic tract, before the eyes are matched fibre for fibre', significance: 'key' },
    { sign: 'Contralateral superior quadrantanopia with new complex partial seizures', mechanism: 'Meyer loop in the temporal lobe carries inferior retinal fibres, so the superior quadrant drops out', significance: 'key' },
    { sign: 'Dense homonymous hemianopia with preserved central acuity of 6/6', mechanism: 'PCA infarct of calcarine cortex with macular sparing from collateral MCA supply at the occipital pole', significance: 'key' },
    { sign: 'The patient denies being blind and confabulates a description of the room after bilateral occipital infarction', mechanism: 'Cortical blindness with normal pupils and normal fundi — Anton syndrome', significance: 'supportive' },
    { sign: 'A retired teacher recognises voices and spectacles but not the faces of her own children', mechanism: 'Bilateral ventral stream lesion of fusiform face cortex — prosopagnosia, the what stream failing', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Which fibres cross at the chiasm', meaning: 'Nasal retinal fibres only — and nasal retina sees the temporal field, hence bitemporal defects' },
    { clue: 'Monocular versus binocular field loss', meaning: 'Monocular means at or in front of the chiasm; any homonymous defect is retrochiasmal' },
    { clue: 'Congruity of a homonymous hemianopia', meaning: 'Incongruous suggests optic tract; highly congruous suggests occipital cortex' },
    { clue: 'Pie in the sky quadrantanopia', meaning: 'Temporal lobe Meyer loop; pie on the floor is the parietal limb of the radiation' },
    { clue: 'Macular sparing', meaning: 'Occipital pole survived on collateral middle cerebral supply — localises the lesion to calcarine cortex' },
    { clue: 'LGN layers 1 and 2 versus 3 to 6', meaning: 'Magnocellular motion and contrast versus parvocellular detail and colour' },
  ],

  treatment: [
    { logic: 'How to read any field chart in three questions', detail: 'Ask them in order. One: is the defect in one eye or both? One eye means optic nerve or retina. Two: if both, is it the same side of space in each eye? The same side is homonymous and therefore behind the chiasm; opposite sides are heteronymous and therefore at the chiasm. Three: does it respect the vertical or the horizontal midline? The vertical midline is a chiasmal or retrochiasmal signature, while a defect obeying the *horizontal* midline is retinal or optic nerve, because retinal arterioles and nerve fibre bundles are arranged in superior and inferior arcades. That third question is what separates a branch retinal artery occlusion from a stroke — see [[fcp1-eye-vision-loss]].' },
    { logic: 'Where it is examined', detail: 'Almost every stem is really one of four: a bitemporal defect with an endocrine hint, an incongruous homonymous defect meaning tract, a quadrantanopia whose quadrant you must convert into a lobe, or a hemianopia with **macular sparing** meaning PCA. The trick with the quadrant question is that the field quadrant is the *opposite* of the retinal quadrant, so the temporal lobe, which carries inferior retina, costs the superior field. Swollen or pale discs shift the problem in front of the chiasm instead, where the defect is monocular.' },
  ],

  mnemonics: [
    { hook: 'Nasal crosses, temporal tags along', expansion: ['Only nasal retinal fibres decussate at the chiasm', 'Nasal retina sees the temporal field, so chiasmal compression is bitemporal', 'Temporal retinal fibres stay ipsilateral all the way to their own occipital lobe'] },
    { hook: 'Temporal loop, sky above', expansion: ['Meyer loop runs through the temporal lobe carrying inferior retina', 'Inferior retina reports the superior field, so the defect is pie in the sky', 'Parietal fibres carry superior retina, giving an inferior quadrant defect'] },
  ],

  traps: [
    {
      questionCategory: 'Converting a lobe into a quadrant',
      wrongInstinct: 'A temporal lobe lesion should knock out the inferior field, since the temporal lobe is the lower part of the hemisphere',
      rightAnswer: 'A temporal lesion damages the Meyer loop, which carries inferior retinal fibres, and therefore produces a contralateral SUPERIOR quadrantanopia',
      why: 'The retina is inverted with respect to the field, so always translate retina to field once before answering — inferior retina equals superior field.',
    },
    {
      questionCategory: 'Pupils as a level detector',
      wrongInstinct: 'A patient who is completely blind from bilateral occipital infarction should have unreactive pupils',
      rightAnswer: 'Cortical blindness leaves the pupillary light reflex brisk and the fundi normal, because the reflex fibres branch off the optic tract to the pretectum before the geniculate',
      why: 'Reactive pupils in a blind patient move the lesion behind the LGN; a lost reflex moves it in front of the tract.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 44-year-old develops a left homonymous hemianopia after a right posterior cerebral artery infarct, yet visual acuity is 6/6 in each eye and she reads small print normally. What explains the preserved central vision?',
      options: [
        { id: 'a', text: 'The macula projects to both occipital lobes, so half of it always survives' },
        { id: 'b', text: 'The occipital pole, where the macula is represented, also receives collateral supply from middle cerebral artery branches' },
        { id: 'c', text: 'Macular fibres bypass the lateral geniculate nucleus and reach cortex directly' },
        { id: 'd', text: 'Foveal cones are supplied by the choroid rather than the central retinal artery' },
      ],
      answerId: 'b',
      explanation: 'Macular sparing is a vascular phenomenon, not a wiring one. The macula has an enormous cortical representation at the occipital pole, and that pole sits at a watershed where terminal branches of the middle cerebral artery overlap posterior cerebral territory. When the PCA occludes, the pole is perfused by the collateral and central acuity survives while the rest of the hemifield is lost. Each half of the macula projects to only one hemisphere like any other retinal region, and macular fibres relay in the LGN with everything else, so the other options describe wiring that does not exist.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A 30-year-old woman reports bumping into door frames on both sides. Confrontation testing shows loss of both temporal half-fields with a sharp vertical edge. Which structure is compressed, and by which fibres is the defect produced?',
      options: [
        { id: 'a', text: 'Optic chiasm — the decussating fibres from both nasal retinae' },
        { id: 'b', text: 'Optic chiasm — the uncrossed fibres from both temporal retinae' },
        { id: 'c', text: 'Left optic tract — crossed fibres from the right nasal retina' },
        { id: 'd', text: 'Both optic radiations — the Meyer loops bilaterally' },
      ],
      answerId: 'a',
      explanation: 'The nasal retina of each eye views the temporal half of that eye field, and it is precisely the nasal fibres that cross in the midline of the chiasm, where a pituitary or suprasellar mass reaches them first. Losing both sets of crossing fibres therefore removes both temporal fields, and because the crossing point is the anatomical midline of the visual field the defect stops abruptly at the vertical meridian. The uncrossed temporal fibres run in the lateral wings of the chiasm and would give nasal, not temporal, defects. Any single tract lesion would be homonymous, and bilateral radiation lesions do not respect a vertical edge in this pattern.',
      tests: 'lecture',
    },
    {
      id: 'q3',
      stem: 'A patient can describe the shape, colour and identity of objects held in front of him but cannot reach accurately for them, cannot shift gaze to a new target on command, and sees only one object at a time in a cluttered scene. Which visual system has failed?',
      options: [
        { id: 'a', text: 'The ventral occipitotemporal stream, parvocellular fed' },
        { id: 'b', text: 'The dorsal occipitoparietal stream, magnocellular fed' },
        { id: 'c', text: 'The magnocellular layers of the lateral geniculate nucleus bilaterally' },
        { id: 'd', text: 'The pretectal and Edinger-Westphal reflex arc' },
      ],
      answerId: 'b',
      explanation: 'Optic ataxia, gaze apraxia and simultanagnosia together are Balint syndrome, produced by bilateral posterior parietal damage to the dorsal where stream that computes spatial position and guides reaching. That identity, colour and form are preserved is the point: the ventral what stream is intact, which is exactly the dissociation the two-stream model predicts. A geniculate lesion would degrade the visual input itself rather than sparing object recognition, and the pretectal arc concerns pupils rather than spatial vision.',
      tests: 'exam',
    },
  ],
};

export default ghpVisualPathwaysCortex;
