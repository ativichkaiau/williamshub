import type { Lecture } from '../../lib/types';

export const ghpAuditoryPathwaysDeafness: Lecture = {
  id: 'ghp-auditory-pathways-deafness',
  title: 'Central Auditory Pathways, Sound Localisation and Deafness',
  system: 'neuro',
  source: 'Ch 52 — The Sense of Hearing',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Neuroscience' },
    { kind: 'lecture', label: 'Ch 52 The Sense of Hearing' },
    { kind: 'mechanism', label: 'Cochlear nucleus → olive → IC → MGB → Heschl' },
    { kind: 'exam', label: 'Rinne & Weber · ITD vs ILD · presbycusis' },
  ],

  highYield: [
    '**The central auditory chain is long, and every station is tonotopically mapped.** Peripheral processes of **spiral ganglion** cells carry the signal to the **dorsal and ventral cochlear nuclei in the upper medulla** — the first synapse and the last point at which the pathway belongs to one ear alone. Second-order axons **mostly decussate in the trapezoid body** to the **superior olivary complex**, ascend in the **lateral lemniscus** to the **inferior colliculus** (the obligatory midbrain relay, and the hub for auditory reflexes), relay in the **medial geniculate body** of the thalamus, and reach the **primary auditory cortex on the transverse temporal gyri of Heschl, Brodmann areas 41 and 42**, buried in the superior temporal plane. **Frequency order is preserved at every single level**, so the base-to-apex map of the cochlea ends up as a frequency map across cortex. Nucleus-by-nucleus anatomy: [[auditory-pathway-anatomy]].',
    '**Because fibres cross at several levels, each hemisphere hears BOTH ears — which is why a unilateral cortical lesion never causes deafness.** Crossings occur in the **trapezoid body, the commissure of Probst between the lemnisci, and the commissure of the inferior colliculus**, and a large proportion of fibres also ascend uncrossed. The consequence is a clean localising rule you can apply in one line: **unilateral deafness means the lesion is at or peripheral to the cochlear nucleus — cochlea, cochlear nerve or nucleus.** Above that, one-sided damage produces something subtler: **impaired sound localisation toward the opposite side, poorer discrimination of complex sounds and of temporal patterns**, and difficulty following speech in noise, but the audiogram stays close to normal. Only **BILATERAL** temporal lesions produce **cortical deafness or auditory agnosia**, where hearing thresholds may still be measurable but sound is meaningless. If the dominant superior temporal gyrus is involved, the failure presents as **receptive aphasia rather than as a hearing problem**.',
    '**The brainstem locates sound with two different physical cues, split by frequency, in two different nuclei.** Below about **1500 Hz** the wavelength is longer than the head, so the usable cue is **interaural TIME (and phase) difference** — a sound from the right reaches the right ear up to about **600 microseconds earlier**. This is computed in the **MEDIAL superior olive**, whose neurons act as **coincidence detectors on delay lines**, firing only when inputs from the two ears arrive together. Above about **2000 Hz** the head casts an acoustic shadow, so the usable cue becomes **interaural INTENSITY difference**, computed in the **LATERAL superior olive** by comparing excitation from one ear with inhibition driven by the other. **Elevation** cannot use either, and is inferred from the **spectral filtering imposed by the pinna**. Two exam consequences: **sounds directly in front or behind are the hardest to place**, and **any unilateral hearing loss destroys localisation entirely**, because both cues are comparisons.',
    '**Do not memorise conductive versus sensorineural — define them by where the fault sits relative to the cochlea, and the rest follows.** **Conductive loss** is anything from the **external canal to the stapes footplate**: wax, perforation, effusion, ossicular disruption, otosclerosis. The **cochlea is healthy**, so a stimulus delivered by **bone conduction, which vibrates the skull and the cochlear fluid directly and BYPASSES the middle ear, is heard normally or even better than normal** (the blocked canal stops sound energy escaping outward and cuts ambient masking). **Sensorineural loss** is at the **cochlea or cochlear nerve**: the final receptor is broken, so **BOTH air and bone conduction fall by the same amount** and their normal relationship is untouched. Everything the tuning forks do is a test of that single distinction — how the sound gets in is what impedance matching was for: [[ghp-sound-transmission-cochlea]].',
    '**Rinne compares the two routes within ONE ear; Weber compares one route across TWO ears. Derive them, never recall them.** Normally the middle ear adds about **25 dB of gain**, so **air conduction beats bone conduction — a positive Rinne (AC > BC)**. In **conductive loss that amplifier is broken while the cochlea is fine, so bone now wins: BC > AC, a negative Rinne**. In **sensorineural loss both routes drop together, so the normal order survives: AC > BC, Rinne still positive — but everything is quieter**. That is the whole derivation. **Weber** places the fork on the vertex so the skull feeds **both cochleae equally**; the ear that reports the louder tone is either the one with the better cochlea or the one with the conductive block. Hence: **Weber lateralises TO a conductive loss and AWAY from a sensorineural loss.** Put them together and the algorithm is **Weber tells you the side, Rinne tells you the type**. One booby trap: a **totally dead ear gives a FALSE negative Rinne**, because the bone-conducted tone crosses the skull and is heard by the opposite normal cochlea — that is why masking exists. Disease-by-disease correlation: [[middle-ear-disorders]].',
    '**The two commonest acquired losses are both basal-turn diseases, and both are therefore high-frequency first.** **Presbycusis** is bilateral, symmetrical and gradual, combining **loss of basal outer hair cells, atrophy of the stria vascularis (which weakens the endocochlear potential) and spiral ganglion cell loss**. Its signature is not volume but clarity: **speech discrimination in background noise fails out of proportion to the pure-tone thresholds**, because **consonants carry the high-frequency information** that distinguishes words, so patients say people mumble. **Noise-induced loss** is mechanical injury to the same basal outer hair cells and produces the classic **notch at 4000 Hz with recovery at 8000 Hz**. Early on it is a **temporary threshold shift with tinnitus that resolves in hours**; repeated, it becomes a **permanent threshold shift, because human hair cells do not regenerate**. Both are sensorineural, so both give a **positive Rinne in each ear and a central or non-lateralising Weber when symmetrical**. Asymmetry is the red flag that demands imaging for a vestibular schwannoma: [[inner-ear-disorders]].',
  ],

  mechanism: {
    title: 'Spiral ganglion to Heschl gyrus, crossing as it goes',
    steps: [
      { id: 's1', label: 'Spiral ganglion axons form the cochlear nerve and synapse in the dorsal and ventral cochlear nuclei' },
      { id: 's2', label: 'Last unilateral station: beyond here a one-sided lesion cannot deafen an ear', emphasis: 'key' },
      { id: 's3', label: 'Most fibres decussate in the trapezoid body to the superior olivary complex', emphasis: 'key' },
      { id: 's4', label: 'Medial olive compares interaural time, lateral olive compares interaural intensity', emphasis: 'key' },
      { id: 's5', label: 'Lateral lemniscus to inferior colliculus, then medial geniculate body of the thalamus' },
      { id: 's6', label: 'Auditory radiation to Heschl transverse temporal gyri, areas 41 and 42, still tonotopic' },
    ],
  },

  examFindings: [
    { sign: 'Rinne negative on the left with Weber lateralising to the left', mechanism: 'Left conductive loss: the middle ear gain is gone so bone beats air, and the blocked ear hears the vertex fork louder', significance: 'key' },
    { sign: 'Rinne positive bilaterally with Weber lateralising to the right', mechanism: 'Left sensorineural loss: both routes fall together on the left, so sound referred through the skull is heard by the better right cochlea', significance: 'key' },
    { sign: 'Complete deafness in one ear after a stroke confined to one temporal lobe', mechanism: 'This does not happen — bilateral representation above the cochlear nucleus makes it impossible, so look for a cochlear or nerve cause', significance: 'key' },
    { sign: 'Normal audiogram but inability to say which side a sound came from, after a unilateral temporal lesion', mechanism: 'Localisation depends on binaural comparison relayed through the superior olive to cortex on both sides', significance: 'supportive' },
    { sign: 'Bilateral symmetrical high-frequency loss with speech that is heard but not understood in a noisy room', mechanism: 'Presbycusis — basal outer hair cell and strial loss removes the consonant frequencies that carry meaning', significance: 'key' },
    { sign: 'A dip at 4000 Hz on the audiogram with recovery at 8000 Hz in a shooter or a machinist', mechanism: 'Noise-induced injury to basal turn outer hair cells, initially a temporary and later a permanent threshold shift', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Unilateral deafness', meaning: 'Localises to cochlea, cochlear nerve or cochlear nucleus — never to one auditory cortex' },
    { clue: 'Interaural time difference up to about 600 microseconds', meaning: 'Low-frequency localisation cue computed by coincidence detection in the medial superior olive' },
    { clue: 'Interaural intensity difference', meaning: 'High-frequency cue created by head shadow and computed in the lateral superior olive' },
    { clue: 'Rinne negative, meaning bone louder than air in the tested ear', meaning: 'Conductive loss in that ear, unless the ear is dead and hearing across the skull' },
    { clue: 'Weber lateralising', meaning: 'To the conductive ear, or away from the sensorineural ear — Weber gives the side, Rinne gives the type' },
    { clue: 'Asymmetrical sensorineural loss with tinnitus', meaning: 'Red flag for vestibular schwannoma; presbycusis and noise damage are symmetrical' },
  ],

  treatment: [
    { logic: 'Reading the fork pair as a two-by-two', detail: 'Take the four combinations in turn and each maps onto one lesion. **Rinne positive both sides with a central Weber** is normal, or symmetrical sensorineural loss. **Rinne negative on the left with Weber to the left** is a left conductive loss. **Rinne positive both sides with Weber to the right** is a left sensorineural loss. **Rinne negative on the left with Weber to the right** is the trap: that combination is not a left conductive loss but a *dead* left ear, where the bone-conducted tone is being heard by the right cochlea, and it is the reason audiologists mask. The physical basis of the 25 dB the middle ear contributes: [[ghp-sound-transmission-cochlea]].' },
    { logic: 'Where it is examined', detail: 'Expect the tuning forks in a stem that gives you the results and asks for the lesion, so practise the derivation rather than a table you might mis-recall under pressure. Expect a localisation stem that separates *time* from *intensity* by naming a frequency — low frequency means medial olive and timing, high frequency means lateral olive and loudness. And expect one stem whose whole point is that a unilateral central lesion cannot deafen an ear. Pathology-side correlation: [[middle-ear-disorders]] and [[inner-ear-disorders]].' },
  ],

  mnemonics: [
    { hook: 'Weber the side, Rinne the type', expansion: ['Weber lateralises TO a conductive loss and AWAY from a sensorineural one', 'Rinne negative (bone beats air) means conductive in that ear', 'Rinne positive with everything quieter means sensorineural'] },
    { hook: 'Time is low, loudness is high', expansion: ['Interaural time and phase difference codes frequencies below about 1500 Hz in the medial superior olive', 'Interaural intensity difference codes frequencies above about 2000 Hz in the lateral superior olive', 'Elevation comes from the spectral filtering of the pinna, not from either binaural cue'] },
  ],

  traps: [
    {
      questionCategory: 'What a one-sided central lesion can do',
      wrongInstinct: 'A stroke in the left temporal lobe should cause deafness in the right ear',
      rightAnswer: 'It causes no significant hearing loss at all, because each cortex receives input from both ears; expect impaired localisation and discrimination instead',
      why: 'Fibres cross in the trapezoid body and at the colliculi, so the cochlear nucleus is the last station where the pathway represents a single ear.',
    },
    {
      questionCategory: 'Interpreting a negative Rinne',
      wrongInstinct: 'Bone conduction louder than air conduction always means a conductive loss in that ear',
      rightAnswer: 'A profoundly dead ear gives a false negative Rinne because the bone-conducted tone is heard by the opposite normal cochlea',
      why: 'Check Weber: if it lateralises to the other ear rather than to the tested one, the tested ear is dead, not blocked.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Tuning fork testing shows bone conduction louder than air conduction in the right ear, air louder than bone in the left, and a Weber that lateralises to the right. What is the diagnosis?',
      options: [
        { id: 'a', text: 'Right sensorineural hearing loss' },
        { id: 'b', text: 'Right conductive hearing loss' },
        { id: 'c', text: 'Left sensorineural hearing loss' },
        { id: 'd', text: 'A profoundly dead right ear with a false negative Rinne' },
      ],
      answerId: 'b',
      explanation: 'A negative Rinne on the right says the middle ear amplification of about 25 dB has been lost on that side while the cochlea still responds to bone conduction, which is the definition of a conductive loss. Weber confirms it by lateralising to the same side, since a blocked ear both escapes ambient masking and loses less energy back out through the canal, so the vertex fork sounds louder there. A sensorineural loss would leave Rinne positive because both routes fall together. The dead ear trap is excluded precisely because Weber went toward the abnormal ear rather than away from it.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A patient with an infarct restricted to the right transverse temporal gyri of Heschl is tested. Which finding is expected?',
      options: [
        { id: 'a', text: 'Complete deafness in the left ear' },
        { id: 'b', text: 'Complete deafness in the right ear' },
        { id: 'c', text: 'Near-normal thresholds in both ears with impaired localisation of sound on the left and poor discrimination of complex sounds' },
        { id: 'd', text: 'A negative Rinne on the left with Weber lateralising to the right' },
      ],
      answerId: 'c',
      explanation: 'Auditory fibres cross at the trapezoid body, the commissure of Probst and the inferior colliculi, and substantial numbers also ascend uncrossed, so each auditory cortex receives both ears. A unilateral cortical lesion therefore cannot deafen either ear. What it does remove is the higher-order processing that depends on that hemisphere: localising sounds in contralateral space, discriminating temporal patterns and complex sounds, and following speech in noise. Unilateral deafness would require a lesion at or peripheral to the cochlear nucleus, and tuning fork abnormalities imply peripheral disease.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A 300 Hz tone is presented from the left side. Which mechanism is chiefly responsible for the listener knowing it came from the left?',
      options: [
        { id: 'a', text: 'Interaural intensity difference detected in the lateral superior olive' },
        { id: 'b', text: 'Interaural time and phase difference detected by coincidence detection in the medial superior olive' },
        { id: 'c', text: 'Spectral filtering by the pinna' },
        { id: 'd', text: 'Tonotopic mapping in the inferior colliculus' },
      ],
      answerId: 'b',
      explanation: 'At 300 Hz the wavelength is far longer than the head, so the head casts almost no acoustic shadow and the two ears receive nearly the same intensity. What does differ is arrival time and ongoing phase, by up to about 600 microseconds, and the medial superior olive resolves it with neurons that fire only when inputs from the two ears coincide after travelling delay lines of different length. Intensity comparison in the lateral superior olive takes over above roughly 2000 Hz, where the head shadow becomes substantial. Pinna filtering supplies elevation rather than left-right position, and tonotopy encodes pitch rather than direction.',
      tests: 'mechanism',
    },
  ],
};

export default ghpAuditoryPathwaysDeafness;
