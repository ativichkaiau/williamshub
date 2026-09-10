import type { Lecture } from '../../lib/types';

export const ghpEyeMovementsPupillaryControl: Lecture = {
  id: 'ghp-eye-movements-pupillary-control',
  title: 'Eye Movements, Conjugate Gaze and Pupillary Control',
  system: 'neuro',
  source: 'Ch 51 — The Eye III — Central Neurophysiology of Vision',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Neuroscience' },
    { kind: 'lecture', label: 'Ch 51 Eye Movements & Autonomic Control' },
    { kind: 'mechanism', label: 'PPRF · MLF · pretectum → Edinger-Westphal' },
    { kind: 'exam', label: 'RAPD · INO · Horner vs CN III' },
  ],

  highYield: [
    '**There are four ways to move an eye, and each has a different speed, a different trigger and a different controller — so each fails separately.** **Saccades** are ballistic jumps that reposition the fovea, up to about **500–700 degrees per second**, with vision suppressed during the flight; they are launched by the **frontal eye field and superior colliculus**. **Smooth pursuit** tracks an already-moving target and **cannot exceed roughly 30–50 degrees per second**; it depends on the **occipito-parietal motion areas and the cerebellar flocculus**, and when it fails the eye falls behind and catches up with small saccades (cogwheel pursuit). **Fixation** is two systems in one — a **voluntary frontal mechanism that chooses what to look at** and an **involuntary occipital mechanism that locks on and holds**. The **vestibulo-ocular reflex** is the fastest of all and needs no vision: [[vestibular-system-reflexes]].',
    '**Conjugate horizontal gaze is generated in the pons, not the cortex — and that one fact flips the direction the eyes deviate.** The **paramedian pontine reticular formation (PPRF)** drives the **ipsilateral abducens nucleus**, which does two things at once: motor neurons abduct the **ipsilateral lateral rectus**, and interneurons **cross and ascend in the medial longitudinal fasciculus (MLF)** to the **contralateral medial rectus subnucleus of CN III**. So the abducens nucleus, not the cortex, is the final common node for looking sideways. Because the **frontal eye field drives the CONTRALATERAL PPRF**, a destructive **cortical FEF lesion lets the intact side win and the eyes deviate TOWARD the lesion, away from the hemiparesis**; a **pontine PPRF lesion deviates the eyes AWAY from the lesion, toward the hemiparesis**. An **MLF lesion is internuclear ophthalmoplegia**: the ipsilateral eye **fails to adduct on lateral gaze while the abducting eye shows nystagmus**, yet **convergence is intact** because convergence does not use the MLF. Vertical gaze is a midbrain job — **rostral interstitial MLF and posterior commissure** — so a pineal mass gives **upgaze palsy with light-near dissociation (Parinaud)**. Which muscle each nerve moves: [[extraocular-muscles-orbital-nerves]].',
    '**The pupillary light reflex arc leaves the visual pathway BEFORE the geniculate, which is exactly why it localises so well.** Afferents run **retina → optic nerve → chiasm → optic tract**, then peel off through the **brachium of the superior colliculus to the PRETECTAL nuclei** — bypassing the LGN and cortex altogether. Pretectal neurons project to **BOTH Edinger-Westphal nuclei** (the crossing runs in the posterior commissure), which is the entire anatomical explanation for the **consensual response**. Efferents are **preganglionic parasympathetic fibres travelling on CN III → ciliary ganglion → short ciliary nerves → sphincter pupillae**. Two clinical corollaries follow immediately: a **cortically blind patient still has brisk pupils**, and **light shone in one eye must constrict both pupils equally** — see also [[ghp-visual-pathways-cortex]].',
    '**Afferent versus efferent is decided by ASYMMETRY, not by size — and the swinging flashlight test is the tool.** In an **afferent defect (optic neuritis, dense retinal or optic nerve disease)** the **pupils are EQUAL in size** at rest, because both Edinger-Westphal nuclei still receive whatever signal gets through and both sphincters work. Swing the torch from the good eye to the bad eye and the bad eye **paradoxically dilates** — a **relative afferent pupillary defect (RAPD, Marcus Gunn pupil)** — because the light now driving the arc is weaker than the light it replaced. In an **efferent defect (CN III)** there IS **anisocoria**: the affected pupil **fails to constrict whether the light is shone in that eye or in the other one**, while the unaffected pupil constricts to light in either eye. Say it as a rule: **afferent lesions never cause anisocoria; efferent lesions always do**. Pupil pharmacology and the sympathetic chain in detail: [[pupillary-reflexes-horner]].',
    '**The near response is three things at once, and it reaches Edinger-Westphal by a different road than light — which is what light-near dissociation means.** Looking at something close triggers **convergence (bilateral medial recti), accommodation (ciliary muscle contracts → zonular tension FALLS → the lens becomes more spherical and more powerful) and pupillary constriction** to cut spherical aberration and deepen the depth of field. The command descends from **occipito-parietal cortex to Edinger-Westphal without passing through the pretectum**, so a lesion that destroys only the pretectal input leaves the near response intact: the pupil **accommodates but does not react**. That is **Argyll Robertson** (bilateral, small and irregular pupils, classically tertiary neurosyphilis) and it is also why **Parinaud syndrome** shows the same dissociation. Do not confuse it with the **Adie tonic pupil**: unilateral, **large**, poorly reactive to light with a **slow tonic near response and slow redilation**, from **ciliary ganglion damage**, and it **constricts to dilute 0.1% pilocarpine through denervation supersensitivity** — with areflexia it is Holmes-Adie syndrome.',
    '**Two lesions cause an unequal pupil in opposite directions, and the discriminators are the lid, the light and the eye position.** **Horner syndrome** is loss of the **three-neuron oculosympathetic chain** (hypothalamus → ciliospinal centre of Budge at C8–T2 → superior cervical ganglion → along the internal carotid): **miosis, PARTIAL ptosis** (superior tarsal muscle only, so the lid droops a few millimetres and the eye still opens), **apparent enophthalmos, anhidrosis** if the lesion is proximal, and **anisocoria that is WORSE IN THE DARK** with **dilation lag**, since the defect is a failure to dilate. **Third nerve palsy** is the mirror image: **mydriasis, COMPLETE ptosis** (levator palpebrae), a **down-and-out eye** from unopposed lateral rectus and superior oblique, and **anisocoria WORSE IN THE LIGHT**. Then the sub-discriminator that decides the scan: the **parasympathetic fibres run superficially on CN III**, so **compression — posterior communicating artery aneurysm, uncal herniation — takes the pupil FIRST**, whereas an **ischaemic diabetic or hypertensive infarct of the nerve core is PUPIL-SPARING** and painful but benign.',
  ],

  mechanism: {
    title: 'Light in one eye, constriction in both: the four-neuron arc',
    steps: [
      { id: 's1', label: 'Retinal ganglion cells signal luminance along the optic nerve and tract' },
      { id: 's2', label: 'Fibres leave the tract via the brachium of the superior colliculus, skipping the LGN', emphasis: 'key' },
      { id: 's3', label: 'Pretectal nuclei receive the input and project to BOTH Edinger-Westphal nuclei', emphasis: 'key' },
      { id: 's4', label: 'Preganglionic parasympathetic fibres ride the surface of CN III to the ciliary ganglion', emphasis: 'key' },
      { id: 's5', label: 'Short ciliary nerves drive the sphincter pupillae — direct plus consensual constriction' },
      { id: 's6', label: 'Superficial position of these fibres makes a compressive third nerve palsy blow the pupil early', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'On swinging the torch between the eyes, the left pupil dilates when the light reaches it, and both pupils are the same size at rest', mechanism: 'Relative afferent pupillary defect from left optic nerve disease — afferent lesions never cause anisocoria', significance: 'key' },
    { sign: 'A dilated left pupil that does not constrict to light in either eye, with complete ptosis and the eye resting down and out, plus severe headache', mechanism: 'Compressive third nerve palsy, pupil first because the parasympathetic fibres are superficial — think posterior communicating artery aneurysm', significance: 'key' },
    { sign: 'Painful diabetic third nerve palsy with ptosis and a down-and-out eye but a normally reacting pupil', mechanism: 'Microvascular infarction of the nerve core spares the superficial pupillomotor fibres', significance: 'key' },
    { sign: 'A small pupil with a two millimetre ptosis, in which the anisocoria is more obvious in a darkened room', mechanism: 'Horner syndrome — the defect is failure to dilate, so dim light exposes it, and only the tarsal muscle is denervated', significance: 'key' },
    { sign: 'On looking left, the right eye fails to adduct while the left eye jerks in nystagmus, yet both eyes converge normally on a near target', mechanism: 'Right internuclear ophthalmoplegia from an MLF lesion; convergence bypasses the MLF, which is why it survives', significance: 'key' },
    { sign: 'After a large right hemisphere infarct the eyes rest deviated to the right while the left arm is paralysed', mechanism: 'Frontal eye field lesion — the eyes look toward the lesion and away from the hemiparesis; a pontine lesion would do the opposite', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Equal pupils but a positive swinging flashlight test', meaning: 'Afferent (optic nerve) lesion — RAPD, and the efferent limb is intact on both sides' },
    { clue: 'Anisocoria worse in bright light versus worse in the dark', meaning: 'Worse in light means the large pupil is abnormal (third nerve or Adie); worse in dark means the small pupil is abnormal (Horner)' },
    { clue: 'Ptosis that is partial versus complete', meaning: 'Partial with miosis is sympathetic (tarsal muscle, Horner); complete with mydriasis is CN III (levator palpebrae)' },
    { clue: 'Pupil-involving versus pupil-sparing third nerve palsy', meaning: 'Involvement means surface compression until proved otherwise; sparing suggests microvascular infarction of the nerve core' },
    { clue: 'Light-near dissociation', meaning: 'The near command reaches Edinger-Westphal without the pretectum — Argyll Robertson, Parinaud or an Adie pupil' },
    { clue: 'Constriction to 0.1% pilocarpine', meaning: 'Denervation supersensitivity of a post-ganglionic ciliary lesion, confirming a tonic Adie pupil' },
  ],

  treatment: [
    { logic: 'A four-step bedside algorithm for the odd pupil', detail: 'Step one: are the pupils unequal? If they are equal, no efferent lesion exists and you are looking for an **RAPD**. Step two: if unequal, decide which pupil is the abnormal one by changing the light — worse in bright light indicts the *large* pupil, worse in the dark indicts the *small* one. Step three: look at the lid and the eye position, because complete ptosis with a down-and-out eye is a different disease from a two millimetre droop with a normal eye. Step four: test the near response, since a pupil that accommodates but will not react has a pretectal or ciliary ganglion problem rather than a nerve trunk problem. Sympathetic pathway detail and the pharmacological tests: [[pupillary-reflexes-horner]].' },
    { logic: 'Where it is examined', detail: 'The two commonest stems are a headache with a blown pupil, where the only acceptable answer is urgent imaging for a posterior communicating artery aneurysm, and a young adult with pain on eye movement and a positive swinging flashlight test, which is optic neuritis. The third favourite is a gaze deviation asking you to separate cortex from pons: the eyes look at a cortical lesion and away from a pontine one. Nerve-by-nerve orbital anatomy sits behind all of it: [[extraocular-muscles-orbital-nerves]].' },
  ],

  mnemonics: [
    { hook: 'Afferent equal, efferent unequal', expansion: ['An afferent (optic nerve) lesion cannot cause anisocoria because both sphincters still work', 'An efferent (CN III or ciliary) lesion always causes anisocoria', 'So unequal pupils send you to the efferent limb every time'] },
    { hook: 'Cortex looks at it, pons looks away', expansion: ['Frontal eye field lesion: eyes deviate toward the lesion, away from the weak side', 'PPRF lesion: eyes deviate away from the lesion, toward the weak side', 'MLF lesion: adduction fails but convergence is preserved'] },
  ],

  traps: [
    {
      questionCategory: 'Which limb of the reflex is broken',
      wrongInstinct: 'Severe optic neuritis should leave that pupil dilated and unreactive',
      rightAnswer: 'It leaves the pupils equal in size and produces a relative afferent pupillary defect on the swinging flashlight test',
      why: 'Both Edinger-Westphal nuclei and both sphincters are intact, so resting size is symmetrical; only the drive is weaker, and only a comparison between eyes reveals it.',
    },
    {
      questionCategory: 'Reading the pupil in a third nerve palsy',
      wrongInstinct: 'A third nerve palsy with a normal pupil is reassuring only because the palsy is incomplete',
      rightAnswer: 'Pupil sparing points to microvascular infarction of the nerve core, whereas a dilated pupil points to external compression such as a posterior communicating artery aneurysm',
      why: 'The parasympathetic fibres run on the surface of the nerve, so compression hits them first and ischaemia of the core hits them last.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 26-year-old has painful loss of vision in the right eye. Both pupils measure 4 mm in ambient light. Light in the left eye constricts both pupils briskly; light moved to the right eye causes both pupils to dilate slightly. Where is the lesion?',
      options: [
        { id: 'a', text: 'Right oculomotor nerve' },
        { id: 'b', text: 'Right optic nerve' },
        { id: 'c', text: 'Right ciliary ganglion' },
        { id: 'd', text: 'Posterior commissure' },
      ],
      answerId: 'b',
      explanation: 'The pupils are equal at rest, which excludes an efferent lesion outright: if the right oculomotor nerve or ciliary ganglion were damaged, the right sphincter could not work and the right pupil would sit larger than the left. What is described is the swinging flashlight test turning positive on the right, meaning the afferent drive from the right eye is weaker than from the left, so both pupils redilate when the torch arrives. That is a relative afferent pupillary defect, and with pain on eye movement in a young adult it is optic neuritis. A posterior commissure lesion would give light-near dissociation with upgaze palsy, not asymmetric afferent drive.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'On attempted leftward gaze the right eye does not cross the midline while the left eye abducts fully with jerk nystagmus. Both eyes adduct normally when the patient looks at a finger brought to the nose. Which structure is damaged?',
      options: [
        { id: 'a', text: 'Right oculomotor nerve in the interpeduncular fossa' },
        { id: 'b', text: 'Right medial longitudinal fasciculus' },
        { id: 'c', text: 'Left paramedian pontine reticular formation' },
        { id: 'd', text: 'Left abducens nucleus' },
      ],
      answerId: 'b',
      explanation: 'Adduction fails on conjugate gaze but is preserved on convergence, and that dissociation is the signature of internuclear ophthalmoplegia. The abducens interneurons that cross and ascend in the MLF to reach the contralateral medial rectus subnucleus have been interrupted on the right, so the right medial rectus cannot be recruited for leftward gaze even though the muscle, its nerve and its nucleus are normal, which is why convergence, driven by a separate supranuclear route, still works. A true third nerve lesion would also give ptosis, a dilated pupil and failure of convergence. A PPRF or abducens nuclear lesion would abolish conjugate gaze to that side altogether rather than affecting one eye.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A 58-year-old smoker has a 2 mm right pupil with a 2 mm ptosis. The asymmetry is more marked in a dark room, and the right pupil is slow to redilate after the lights are dimmed. The near response and eye movements are normal. Which statement best fits?',
      options: [
        { id: 'a', text: 'Oculosympathetic interruption; the anisocoria worsens in darkness because dilation has failed' },
        { id: 'b', text: 'Compressive third nerve palsy; the anisocoria worsens in darkness because constriction has failed' },
        { id: 'c', text: 'Tonic Adie pupil from ciliary ganglion damage with denervation supersensitivity' },
        { id: 'd', text: 'Argyll Robertson pupils from tertiary neurosyphilis' },
      ],
      answerId: 'a',
      explanation: 'Miosis with a small ptosis, apparent enophthalmos and dilation lag is Horner syndrome, loss of the three-neuron sympathetic chain. Because the sympathetic supply is what dilates the pupil, the defect only becomes obvious when dilation is demanded, which is in the dark, and the affected pupil redilates sluggishly. A third nerve palsy gives the opposite pattern in every respect, a large pupil worse in bright light with complete ptosis and a down-and-out eye. An Adie pupil is large with a tonic near response, and Argyll Robertson pupils are bilateral, small, irregular and show light-near dissociation with normal lids. In a smoker, an apical lung lesion involving the sympathetic chain deserves imaging.',
      tests: 'disease',
    },
  ],
};

export default ghpEyeMovementsPupillaryControl;
