import type { Lecture } from '../../lib/types';

export const ghpCerebellarDysfunction: Lecture = {
  id: 'ghp-cerebellar-dysfunction',
  title: 'Cerebellar Dysfunction: Signs of a Failed Comparator',
  system: 'neuro',
  source: 'Ch 56 — Cerebellum & Basal Ganglia in Motor Control',
  updated: '2026-09-10',
  tags: [
    { kind: 'system', label: 'Neuroscience' },
    { kind: 'lecture', label: 'Ch 56 Cerebellum & Basal Ganglia' },
    { kind: 'mechanism', label: 'No brake → overshoot → correction tremor' },
    { kind: 'exam', label: 'Ipsilateral signs · Romberg discriminator' },
  ],

  highYield: [
    '**Do not memorise the cerebellar signs — derive them from one failure.** The cerebellum **compares the intended movement with the actual movement and applies the brake in advance**, turning the **agonist off and the antagonist on** before the target is reached. Take that away and the limb **overshoots (dysmetria and past-pointing)**, is **corrected late and repeatedly, so it oscillates more and more violently as it nears the target (intention tremor)**, cannot **reverse direction quickly (dysdiadochokinesia)**, **breaks a smooth reach into separate joint movements (decomposition)**, and **flies back when a resisted contraction is suddenly released (rebound, the Stewart-Holmes sign)**. Six signs, one lesion.',
    '**Cerebellar signs are IPSILATERAL, and the reason is that the loop crosses twice.** Cortex projects to the **contralateral pontine nuclei, and pontocerebellar fibres cross to enter the cerebellum through the middle peduncle**; the **dentate output leaves in the superior peduncle and decussates in the midbrain** to reach the **contralateral red nucleus and VL thalamus**, which drive the **motor cortex that then crosses again at the pyramidal decussation**. Two crossings on the way in and out cancel: **the right cerebellar hemisphere controls the right side of the body, so a right hemisphere lesion gives right-sided ataxia and the patient veers and falls toward the side of the lesion**. The exception to know is a lesion **above the superior peduncle decussation** — in the midbrain or thalamus — which gives **contralateral ataxia**.',
    '**Intention tremor is defined by when it appears, and that is the whole tremor question.** It is **absent at rest, appears only during voluntary movement, and grows in amplitude as the target is approached (a terminal tremor), typically 3 to 5 Hz and coarse**, because each late correction overshoots and provokes the next. Contrast the **resting 4 to 6 Hz pill-rolling tremor of nigrostriatal disease, which disappears as soon as the hand moves**, and the **postural or action tremor of essential tremor, which is present throughout the movement without terminal accentuation**. The examiner is not testing the tremor, but whether you can say **when in the movement it is worst**.',
    '**The midline muscles fail the same way, which explains gait, speech and eyes.** Loss of the **vestibulocerebellum and vermis** removes the axial comparator, giving **truncal ataxia, a wide-based, staggering, lurching gait, and failure of tandem walking** long before any limb sign. In the **speech muscles** the same defective timing produces **scanning or staccato dysarthria — words broken into syllables with explosive, irregular emphasis**. In the **eyes** the flocculus supervises the **gaze-holding integrator and the vestibulo-ocular reflex**, so the eye drifts off target and is jerked back: **gaze-evoked nystagmus with the fast phase toward the side of the lesion**. The classic **Charcot triad of brainstem-cerebellar multiple sclerosis is scanning speech, intention tremor and nystagmus**.',
    '**Tone falls, and there is no weakness — that is what separates cerebellar disease from an upper motor neuron lesion.** Because the deep nuclei normally **facilitate cortex, red nucleus and reticular formation tonically**, their loss gives **hypotonia, easy fatiguability, and a pendular knee jerk that swings several times before settling**. There is **no true weakness, no clasp-knife spasticity, no extensor plantar response and no fasciculation**; power, reflex thresholds and sensation are intact. A patient who is **ataxic and weak with an upgoing plantar has a lesion outside the cerebellum, or a brainstem lesion catching both**.',
    '**Cerebellar versus sensory ataxia is settled by the eyes, and Romberg is the instrument.** In **sensory (dorsal column) ataxia the patient can substitute vision for proprioception, so he stands steadily with the eyes open and falls the moment they close — a positive Romberg sign — and shows a stamping high-stepping gait, pseudoathetosis, lost vibration and joint position sense and depressed reflexes**. In **cerebellar ataxia the patient is already unsteady with the eyes open, and closing them adds little: Romberg is not positive, it is simply not the test**. **Vestibular ataxia** completes the triad, with **vertigo, nausea, nystagmus and consistent falling toward one side** rather than limb dysmetria.',
  ],

  mechanism: {
    title: 'How one broken comparison becomes seven signs',
    steps: [
      { id: 's1', label: 'Cerebellum holds the intended command and the real-time feedback side by side' },
      { id: 's2', label: 'Lesion: the error between intended and actual can no longer be computed', emphasis: 'danger' },
      { id: 's3', label: 'The predictive brake fails — agonist not switched off, antagonist not switched on in time', emphasis: 'key' },
      { id: 's4', label: 'The limb overshoots and is corrected only after the error is felt: dysmetria and past-pointing', emphasis: 'key' },
      { id: 's5', label: 'Each late correction overshoots the other way — oscillation rising near the target: intention tremor', emphasis: 'key' },
      { id: 's6', label: 'Same defect in trunk, speech and eye muscles: ataxic gait, scanning speech, gaze-evoked nystagmus' },
    ],
  },

  examFindings: [
    { sign: 'On finger-nose testing the hand overshoots the examiner finger and a coarse side-to-side tremor grows as the target is approached', mechanism: 'Dysmetria plus intention tremor — no predictive braking, so error is corrected late and repeatedly', significance: 'key' },
    { sign: 'With the eyes closed the patient repeatedly places the finger to one side of the examiner finger, always the same side', mechanism: 'Past-pointing toward the side of the cerebellar hemisphere lesion', significance: 'key' },
    { sign: 'Rapid alternating pronation and supination is slow, irregular and disorganised on one side only', mechanism: 'Dysdiadochokinesia — the agonist cannot be switched off fast enough for the antagonist to take over', significance: 'key' },
    { sign: 'The arm flies back and strikes the chest when a resisted elbow flexion is suddenly released', mechanism: 'Loss of rebound braking by the antagonist — the Stewart-Holmes sign', significance: 'supportive' },
    { sign: 'Wide-based lurching gait, unable to walk heel to toe, with consistent veering to the right and a right-beating gaze-evoked nystagmus', mechanism: 'Right cerebellar hemisphere and vermis — the double crossing makes the deficit ipsilateral, so the patient falls toward the lesion', significance: 'key' },
    { sign: 'Speech broken into separate syllables with irregular explosive stress, in a patient with reduced tone and a pendular knee jerk', mechanism: 'Scanning dysarthria from mistimed articulatory muscles; hypotonia from lost tonic deep-nuclear facilitation', significance: 'key' },
  ],

  investigations: [
    { clue: 'Steady standing with the eyes open, immediate falling when the eyes close', meaning: 'Positive Romberg sign — sensory (dorsal column) ataxia, in which vision had been substituting for proprioception' },
    { clue: 'Already unsteady with the eyes open and only marginally worse when they close', meaning: 'Cerebellar ataxia — Romberg is negative because vision cannot repair a broken comparator' },
    { clue: 'Tremor absent at rest, present through movement and maximal at the target', meaning: 'Cerebellar intention tremor, as against the resting tremor of nigrostriatal disease or a uniform postural essential tremor' },
    { clue: 'Ipsilateral limb ataxia with contralateral hemiparesis', meaning: 'A brainstem lesion, not a cerebellar one — the ataxia is ipsilateral only until the superior peduncle has decussated' },
    { clue: 'Truncal and gait ataxia with nystagmus but a normal finger-nose test', meaning: 'Midline vestibulocerebellar or vermian lesion — medulloblastoma in a child, anterior vermis degeneration in a drinker' },
    { clue: 'Ataxia with weakness, spasticity and an extensor plantar response', meaning: 'Not pure cerebellar disease — cerebellar lesions give hypotonia without weakness or a Babinski sign' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The examination sequence that actually earns marks is: is he weak, is he ataxic with the eyes open, and does closing the eyes change anything. That sequence separates upper motor neuron weakness, cerebellar ataxia and sensory ataxia in under a minute, and it is the same sequence a written stem is built from. Then localise by zone — truncal versus limb — and by side, remembering that cerebellar signs sit on the same side as the lesion. The circuitry that generates all of these signs: [[ghp-cerebellar-anatomy-circuitry]]. The dorsal column disease on the other side of the Romberg discriminator: [[ghp-somatosensory-cortex-position]].' },
    { logic: 'Where it is examined', detail: 'Three stems recur: a lateral medullary or cerebellar infarct asking which side the signs fall on, a Romberg question dressed up as cerebellar disease, and a tremor question asking you to time the tremor within the movement rather than describe it. A fourth, subtler stem gives ataxia after a midbrain lesion and expects you to know that beyond the superior peduncle decussation the ataxia becomes contralateral. Vertigo and nystagmus from the labyrinthine side of the differential: [[vestibular-system-reflexes]]. The tremor of the other motor system, and why it is at rest: [[ghp-movement-disorders]].' },
  ],

  mnemonics: [
    { hook: 'DANISH', expansion: ['Dysdiadochokinesia and Dysmetria', 'Ataxia (truncal and limb)', 'Nystagmus, Intention tremor', 'Scanning speech, Hypotonia with a pendular reflex'] },
    { hook: 'Crossed twice, so same side — and he falls toward the lesion', expansion: ['In: cortex to contralateral pontine nuclei, then across into the middle peduncle', 'Out: superior peduncle decussates to red nucleus and VL thalamus, and corticospinal crosses again', 'Two crossings cancel, so a right hemisphere lesion gives right-sided signs and rightward falling'] },
  ],

  traps: [
    {
      questionCategory: 'Which side the cerebellar signs appear on',
      wrongInstinct: 'Central motor lesions produce contralateral signs, so a right cerebellar infarct gives left-sided ataxia',
      rightAnswer: 'Cerebellar hemisphere signs are ipsilateral: the right cerebellum serves the right limbs, and the patient veers and falls toward the side of the lesion',
      why: 'The loop crosses on the way in (pontocerebellar) and again on the way out (superior peduncle, then the pyramidal decussation), and two crossings cancel.',
    },
    {
      questionCategory: 'Which kind of ataxia this is',
      wrongInstinct: 'A patient who staggers, falls and cannot walk heel to toe has cerebellar disease',
      rightAnswer: 'Ask what the eyes are doing: falling only after the eyes close is sensory ataxia with a positive Romberg sign, while cerebellar ataxia is already present with the eyes open',
      why: 'Vision can substitute for lost proprioception but cannot substitute for a lost comparator, so Romberg isolates the dorsal column lesion and is negative in cerebellar disease.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 64-year-old with atrial fibrillation develops sudden vertigo and vomiting. He veers to the right when walking, overshoots with the right hand on finger-nose testing, and has nystagmus with the fast phase to the right. Power, plantar responses and sensation are normal. Where is the lesion?',
      options: [
        { id: 'a', text: 'Left cerebellar hemisphere' },
        { id: 'b', text: 'Right cerebellar hemisphere' },
        { id: 'c', text: 'Left posterior limb of the internal capsule' },
        { id: 'd', text: 'Right superior cerebellar peduncle above its decussation in the midbrain' },
      ],
      answerId: 'b',
      explanation: 'Cerebellar hemisphere signs are ipsilateral because the loop decussates twice: corticopontine fibres cross into the middle peduncle on the way in, and superior peduncle fibres cross in the midbrain on the way out to a motor cortex whose corticospinal tract crosses again. Right-sided limb dysmetria, rightward veering and a right-beating nystagmus therefore localise to the right cerebellar hemisphere, in this man an embolic posterior circulation infarct. A capsular lesion would produce contralateral weakness with an extensor plantar rather than pure ataxia, and a lesion above the superior peduncle decussation would place the ataxia on the opposite side to the lesion.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A 58-year-old diabetic has an unsteady, high-stepping gait and cannot stand with his feet together once his eyes are closed, although he is steady with them open. Vibration and joint position sense are absent at the ankles and the ankle jerks are lost. Finger-nose testing is accurate with the eyes open. What does this indicate?',
      options: [
        { id: 'a', text: 'Cerebellar vermian degeneration' },
        { id: 'b', text: 'Sensory ataxia from large-fibre and dorsal column dysfunction, with a positive Romberg sign' },
        { id: 'c', text: 'Vestibular neuritis' },
        { id: 'd', text: 'Bilateral dentate nucleus infarction' },
      ],
      answerId: 'b',
      explanation: 'The whole answer is in the eyes. This patient is steady while vision is available and collapses when it is removed, which is the definition of a positive Romberg sign and means the proprioceptive channel, not the cerebellum, has failed; the absent vibration and joint position sense with lost ankle jerks confirm a large-fibre sensory neuropathy affecting the dorsal columns. A cerebellar patient is unsteady with the eyes open, so closing them changes little and Romberg is negative. Vestibular disease would bring vertigo and nystagmus, and dentate lesions would give limb dysmetria and intention tremor rather than accurate finger-nose testing.',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'Which single feature best distinguishes cerebellar intention tremor from the tremor of nigrostriatal degeneration?',
      options: [
        { id: 'a', text: 'The frequency in hertz' },
        { id: 'b', text: 'Whether the tremor is unilateral or bilateral' },
        { id: 'c', text: 'The point in the movement at which it is worst — absent at rest and maximal near the target, versus present at rest and abolished by moving' },
        { id: 'd', text: 'Whether the tremor persists during sleep' },
      ],
      answerId: 'c',
      explanation: 'Frequencies overlap uselessly — cerebellar tremor runs at roughly 3 to 5 Hz and a parkinsonian rest tremor at 4 to 6 Hz — and either can be unilateral, while essentially all of these tremors vanish in sleep. What separates them is timing within the movement. Cerebellar tremor is an oscillating series of late corrections, so it cannot exist in a limb that is not moving and grows as the target is approached. A nigrostriatal rest tremor is generated by the basal ganglia loop when the limb is unengaged, so it is loudest at rest, damped by voluntary movement, and brought out again by distraction such as mental arithmetic.',
      tests: 'disease',
    },
  ],
};

export default ghpCerebellarDysfunction;
