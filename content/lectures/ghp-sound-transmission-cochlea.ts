import type { Lecture } from '../../lib/types';

export const ghpSoundTransmissionCochlea: Lecture = {
  id: 'ghp-sound-transmission-cochlea',
  title: 'Sound Transmission, the Cochlea and Hair Cell Transduction',
  system: 'neuro',
  source: 'Ch 52 — The Sense of Hearing',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Neuroscience' },
    { kind: 'lecture', label: 'Ch 52 The Sense of Hearing' },
    { kind: 'mechanism', label: 'Impedance match → travelling wave → tip link' },
    { kind: 'exam', label: 'Place principle · OHC amplifier · attenuation reflex' },
  ],

  highYield: [
    '**The middle ear exists to solve one physics problem: sound arriving in air has to be pushed into fluid.** Air is a **low-impedance** medium and cochlear perilymph a **high-impedance** one, and at a bare air-to-fluid boundary almost all of the incident energy is **reflected rather than transmitted — a loss of roughly 30 dB**. The ossicular chain recovers it with **two multipliers in series**. First, an **area ratio**: the vibrating part of the **tympanic membrane is about 55 mm2 while the stapes footplate is about 3.2 mm2**, so the same force is concentrated onto a seventeenth of the area. Second, a **lever ratio of about 1.3:1** between the **malleus handle and the long process of the incus**. Multiply them and the **pressure gain at the oval window is about 22-fold, roughly 25 dB** — almost exactly the loss you were trying to cancel. Note what the ossicles do NOT do: **they add essentially no gain in displacement, they trade displacement for force**. The anatomy underneath this: [[ear-external-middle-internal]].',
    '**Two middle ear muscles run a reflex that stiffens the chain — useful, but slow.** Loud sound (above about **70–90 dB**) triggers the **attenuation (acoustic) reflex**: the **stapedius, supplied by the facial nerve, pulls the stapes outward**, and the **tensor tympani, supplied by the mandibular division of the trigeminal, pulls the malleus handle inward**. The two pull in opposite directions, so the chain becomes **rigid** and transmission falls by **up to 30–40 dB, and mostly for frequencies below 1000 Hz**. Its **latency of 40–80 ms means it cannot protect against an explosion or a gunshot**, so it is not really a blast shield; its everyday jobs are to **mask low-frequency environmental noise so that higher-frequency speech stands out**, and to **turn down your own voice while you speak**. Clinically, the reflex is abolished by **otosclerosis and by facial nerve palsy proximal to the stapedial branch**, which is why it is measured in tympanometry: [[middle-ear-disorders]].',
    '**The cochlea is a fluid tube coiled 2.5 times, divided into three compartments, and the compartments differ in ion content for a reason.** Uncoiled it is about **35 mm long**. **Scala vestibuli and scala tympani contain perilymph** (an extracellular-type fluid, high sodium) and **communicate at the helicotrema at the apex**; between them lies **scala media, containing ENDOLYMPH, which is uniquely high in potassium** and is secreted by the **stria vascularis**. That composition creates the **endocochlear potential of about +80 mV** in scala media, and since a hair cell interior sits around −70 mV the **driving force across the apical membrane is roughly 150 mV** — a battery that makes transduction fast and sensitive. **Reissner membrane** separates scala media from scala vestibuli; the **basilar membrane** separates it from scala tympani and carries the **organ of Corti**. Because fluid is incompressible, the **round window must bulge outward as the stapes pushes in** — abolish that release and sound transmission collapses.',
    '**Frequency is coded by PLACE, and place is set by the mechanics of the basilar membrane.** Stapes movement launches a **travelling wave that always starts at the base and moves toward the apex**, growing to a peak at one particular point and then dying away abruptly. Where it peaks is decided by the membrane itself: at the **base it is narrow (about 0.04 mm) and stiff**, at the **apex wide (about 0.5 mm) and floppy, and it is also more heavily loaded with fluid there**. Stiff and light resonates fast; wide and floppy resonates slow. Therefore **HIGH frequencies (up to about 20 000 Hz) peak at the BASE and LOW frequencies (down to about 20 Hz) peak at the APEX** — the **place principle**, and it holds counter-intuitively regardless of where the wave entered. Note the direction trap: every wave starts at the base, so **the base is mechanically stressed by all sounds**, which is one reason high-frequency hearing is the first to go. Below about 200 Hz place resolution fails and the nerve switches to **rate and volley coding**, phase-locking spikes to the waveform. This tonotopic order is preserved to cortex: [[ghp-auditory-pathways-deafness]].',
    '**Transduction is mechanical, direct and astonishingly fast: the stimulus opens the channel by pulling on it.** Basilar membrane movement **shears the organ of Corti against the overlying tectorial membrane**, bending the **stereocilia** that project from the hair cell apex. Stereocilia stand in **ranks of graded height joined at their tips by TIP LINKS**. Deflection **toward the tallest row stretches the tip links and levers open mechanically gated cation channels**; **potassium flows IN from the endolymph** (the only place in the body where potassium influx is depolarising, because endolymph is potassium-rich and positively charged), the cell depolarises, **voltage-gated calcium channels open at the base and glutamate is released** onto the peripheral processes of **spiral ganglion bipolar neurons**. Deflection **away from the tallest row slackens the tip links, closes channels and HYPERPOLARISES** the cell. The receptor potential therefore **swings in both directions with the waveform**, with no chemical second messenger and latencies of tens of microseconds. Hair cell ultrastructure: [[inner-ear-hair-cell-histology]].',
    '**There are two populations of hair cell and they do opposite jobs — this is the most examinable line in the chapter.** About **3500 INNER hair cells** form a **single row** and receive roughly **90–95% of the afferent fibres of the cochlear nerve**: they are the sensors, the cells that actually report sound. About **12 000 OUTER hair cells** stand in **three rows**, take only a trickle of afferents, and instead receive a heavy **EFFERENT supply from the medial olivocochlear bundle (cholinergic, inhibitory)**. Their job is mechanical: the motor protein **prestin** makes them **change length with every cycle of the receptor potential**, actively amplifying and sharpening the travelling wave by **40–50 dB**. This **cochlear amplifier** is what gives fine frequency discrimination, it is the source of **otoacoustic emissions** used in newborn screening, and its cells are the **most vulnerable in the cochlea** — **noise, aminoglycosides, loop diuretics, cisplatin and age all take outer hair cells first, and they do not regenerate**.',
  ],

  mechanism: {
    title: 'Air to spike: matching, travelling, shearing, opening',
    steps: [
      { id: 's1', label: 'Tympanic membrane collects pressure over 55 mm2 and funnels it to a 3.2 mm2 footplate', emphasis: 'key' },
      { id: 's2', label: 'Ossicular lever adds 1.3:1, giving about 22-fold pressure gain to overcome fluid impedance', emphasis: 'key' },
      { id: 's3', label: 'Stapes at the oval window launches a travelling wave from base toward apex; round window bulges out' },
      { id: 's4', label: 'Basilar membrane stiffness gradient sets the peak: high frequency at base, low at apex', emphasis: 'key' },
      { id: 's5', label: 'Shearing against the tectorial membrane deflects stereocilia and stretches the tip links', emphasis: 'key' },
      { id: 's6', label: 'Potassium enters from endolymph down a 150 mV gradient; glutamate excites spiral ganglion neurons' },
    ],
  },

  examFindings: [
    { sign: 'Conductive loss of roughly 25 to 30 dB with an intact drum after ossicular disruption', mechanism: 'Loss of the area ratio and lever ratio removes the impedance match, so most energy reflects at the air-fluid boundary', significance: 'key' },
    { sign: 'Absent stapedial reflex on tympanometry in a young adult with progressive conductive loss', mechanism: 'Otosclerotic fixation of the stapes footplate prevents the reflex from changing chain stiffness', significance: 'key' },
    { sign: 'Hyperacusis and intolerance of loud sound in a patient with facial nerve palsy', mechanism: 'Stapedius denervation removes the attenuation reflex on that side', significance: 'supportive' },
    { sign: 'A newborn fails screening because no otoacoustic emissions are recorded', mechanism: 'Outer hair cell electromotility is the source of the emission, so absence implicates the cochlear amplifier', significance: 'key' },
    { sign: 'Symmetrical high-frequency loss with a notch around 4000 Hz in a factory worker', mechanism: 'Basal turn outer hair cells are damaged first because every travelling wave passes through the base', significance: 'key' },
    { sign: 'Vertigo, low-frequency hearing loss and aural fullness in recurrent attacks', mechanism: 'Endolymphatic hydrops distends scala media and disturbs the potassium gradient that powers transduction', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Area ratio of 17:1 and lever ratio of 1.3:1', meaning: 'Together about a 22-fold pressure gain, roughly 25 dB, which is the impedance match' },
    { clue: 'Endolymph versus perilymph', meaning: 'Endolymph is potassium-rich at plus 80 mV in scala media; perilymph is sodium-rich in scala vestibuli and tympani' },
    { clue: 'Base of the basilar membrane', meaning: 'Narrow and stiff, so it resonates to high frequencies and is damaged first by noise and ototoxins' },
    { clue: 'Tip link', meaning: 'The mechanical tether that opens the transduction channel when stereocilia bend toward the tallest row' },
    { clue: 'Prestin and otoacoustic emissions', meaning: 'Outer hair cell electromotility — the cochlear amplifier, and the basis of newborn hearing screening' },
    { clue: 'Ninety to ninety-five percent of cochlear nerve afferents', meaning: 'They come from the single row of inner hair cells, not from the three rows of outer hair cells' },
  ],

  treatment: [
    { logic: 'Why the impedance match is worth understanding rather than memorising', detail: 'Once you accept that the middle ear is a **pressure transformer**, every middle ear disease becomes predictable. Perforate the drum and you lose collecting area. Disrupt or fix the ossicles and you lose the lever. Fill the cavity with fluid and you damp the whole chain. All three give the same *shape* of problem — a conductive loss of the order of 25 to 30 dB, never total deafness, because sound still reaches the cochlea by bone conduction. That last point is the entire logic of the tuning fork tests worked through in [[ghp-auditory-pathways-deafness]].' },
    { logic: 'Where it is examined', detail: 'Three stems recur. A number question on the area or lever ratio. A place-principle question that tries to make you put low frequencies at the base — remember the *apex* is wide, floppy and slow. And an outer versus inner hair cell question, usually disguised as newborn screening or as aminoglycoside toxicity, where the answer is that outer hair cells amplify and die first while inner hair cells carry almost all of the afferent traffic. Histological detail: [[inner-ear-hair-cell-histology]].' },
  ],

  mnemonics: [
    { hook: 'Base is bass-less', expansion: ['The base of the basilar membrane is narrow and stiff, so it codes HIGH frequencies', 'The apex is wide, floppy and fluid-loaded, so it codes LOW frequencies', 'Every travelling wave starts at the base, which is why high tones are lost first'] },
    { hook: 'Inner informs, outer amplifies', expansion: ['One row of inner hair cells carries 90 to 95 percent of the afferent fibres', 'Three rows of outer hair cells receive efferents and use prestin to add 40 to 50 dB of gain', 'Outer hair cells make otoacoustic emissions and are the first to die from noise and ototoxins'] },
  ],

  traps: [
    {
      questionCategory: 'Which hair cell is the sensor',
      wrongInstinct: 'Outer hair cells outnumber inner hair cells three to one, so they must carry most of the auditory information',
      rightAnswer: 'The single row of inner hair cells supplies 90 to 95 percent of cochlear nerve afferents; outer hair cells are mainly efferent-controlled mechanical amplifiers',
      why: 'Count synapses, not cells — outer hair cells shape the stimulus, inner hair cells report it.',
    },
    {
      questionCategory: 'Reading the place principle',
      wrongInstinct: 'Low-frequency sound has more energy and travels further, so it must be detected at the stiff basal end',
      rightAnswer: 'Low frequencies peak at the apex, where the basilar membrane is wide, floppy and fluid-loaded; high frequencies peak at the stiff narrow base',
      why: 'Resonant frequency follows stiffness and mass, not how far the wave has travelled — stiff and light equals fast.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient has complete disruption of the incudostapedial joint after trauma, with an intact tympanic membrane and a normal cochlea. What magnitude and type of hearing loss is expected, and why?',
      options: [
        { id: 'a', text: 'Total deafness in that ear, because no energy can reach the cochlear fluid' },
        { id: 'b', text: 'A conductive loss of roughly 25 to 30 dB, because the impedance-matching gain of area ratio and lever is lost' },
        { id: 'c', text: 'A sensorineural loss of about 40 dB, because the cochlear amplifier is no longer driven' },
        { id: 'd', text: 'A mainly high-frequency loss, because the ossicles preferentially transmit high frequencies' },
      ],
      answerId: 'b',
      explanation: 'The middle ear contributes a pressure gain of about 22-fold, some 25 dB, by concentrating the force collected over the 55 mm2 drum onto the 3.2 mm2 footplate and adding a 1.3:1 ossicular lever. Remove the chain and that gain disappears, so sound now meets the air-fluid boundary largely unmatched and most of it reflects. The loss is conductive and of that order, not total, because bone conduction still delivers sound directly to the cochlea. Nothing in this lesion touches hair cells, so it cannot be sensorineural, and the deficit is broadly across frequencies rather than selectively high.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which single feature most directly explains why potassium entry through the stereociliary transduction channel depolarises a cochlear hair cell?',
      options: [
        { id: 'a', text: 'The stria vascularis maintains endolymph at a high potassium concentration and about plus 80 mV' },
        { id: 'b', text: 'The tip links couple channel gating to stereociliary displacement' },
        { id: 'c', text: 'Perilymph in scala tympani has a low potassium concentration' },
        { id: 'd', text: 'Voltage-gated calcium channels are concentrated at the basolateral membrane' },
      ],
      answerId: 'a',
      explanation: 'Everywhere else in the body potassium leaves cells and hyperpolarises them. In the cochlea the apical surface of the hair cell faces endolymph, which the stria vascularis keeps potassium-rich and at an endocochlear potential of about plus 80 mV, while the cell interior sits near minus 70 mV. The resulting electrochemical gradient of roughly 150 mV drives potassium inward and therefore depolarises. Tip links explain how the channel opens, not which way the ion moves; the basolateral calcium channels act after depolarisation; and the composition of scala tympani is not what the apical membrane sees.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A neonate has no measurable otoacoustic emissions bilaterally. Which cochlear element is most likely to be at fault?',
      options: [
        { id: 'a', text: 'Inner hair cells' },
        { id: 'b', text: 'Spiral ganglion bipolar neurons' },
        { id: 'c', text: 'Outer hair cells' },
        { id: 'd', text: 'The stapedius muscle' },
      ],
      answerId: 'c',
      explanation: 'Otoacoustic emissions are sound generated by the cochlea itself, produced when outer hair cells change length through prestin and push energy back out through the ossicles. Their presence therefore tests the cochlear amplifier specifically. Inner hair cells and spiral ganglion neurons carry information centrally but do not generate emissions, which is precisely why a child with auditory neuropathy can pass an emission screen yet fail an auditory brainstem response. The stapedius belongs to the middle ear reflex and is tested by tympanometry instead.',
      tests: 'investigation',
    },
  ],
};

export default ghpSoundTransmissionCochlea;
