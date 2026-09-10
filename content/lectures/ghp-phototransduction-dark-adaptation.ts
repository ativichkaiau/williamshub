import type { Lecture } from '../../lib/types';

export const ghpPhototransductionDarkAdaptation: Lecture = {
  id: 'ghp-phototransduction-dark-adaptation',
  title: 'Phototransduction, the Dark Current and Dark Adaptation',
  system: 'neuro',
  source: 'Ch 50 — The Eye II — Receptor & Neural Function of the Retina',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Neuroscience' },
    { kind: 'lecture', label: 'Ch 50 Phototransduction' },
    { kind: 'mechanism', label: 'Rhodopsin → transducin → cGMP falls → channels close' },
    { kind: 'exam', label: 'Hyperpolarisation · night blindness · rod-cone break' },
  ],

  highYield: [
    '**Rhodopsin is one protein bound to one vitamin A derivative, stacked a thousand discs deep in the rod outer segment.** It is **scotopsin, a seven-transmembrane G-protein-coupled receptor, covalently holding 11-cis retinal** as its own built-in ligand. A photon does one chemical thing: it **isomerises 11-cis retinal to all-trans retinal**. The straightened retinal no longer fits the binding pocket, so the protein runs through **bathorhodopsin, lumirhodopsin and metarhodopsin I to metarhodopsin II**, and **metarhodopsin II — also called activated rhodopsin — is the species that actually signals**. Naming that intermediate is a favourite one-line question.',
    '**The cascade is a classic G-protein pathway running in reverse of the intuitive direction: the second messenger is destroyed, not made.** Metarhodopsin II activates **transducin, the rod G protein**; the **transducin alpha subunit with GTP bound activates cGMP phosphodiesterase**; the phosphodiesterase **hydrolyses cGMP to 5-GMP**, and cytoplasmic cGMP collapses. Because the outer segment sodium channels are **held open by cGMP**, the fall in cGMP **closes them**. The amplification is enormous — **one activated rhodopsin switches on hundreds of transducin molecules and each phosphodiesterase destroys thousands of cGMP molecules**, so a **single photon produces a measurable electrical response**, which is exactly why rods are the sensitive system.',
    '**Now the counterintuitive part, and the single most-tested fact in the chapter: light HYPERpolarises the photoreceptor.** In darkness, cGMP keeps the outer segment channels open, **sodium and calcium leak steadily in while the inner segment sodium-potassium pump pushes sodium back out** — a continuous circulating **dark current** that holds the receptor **depolarised at about -40 mV**, and a depolarised receptor **releases glutamate continuously**. Light closes the channels, the inward leak stops while the pump keeps working, and the cell drifts to **about -70 to -80 mV**. So the light signal is a **hyperpolarisation and a DECREASE in transmitter release**, and rods and cones **never fire action potentials at all** — their output is a graded potential, and the first spiking cell in the visual system is the ganglion cell.',
    '**Recovery is an active shut-off, not a passive decay, and it is what sets the speed of vision.** **Rhodopsin kinase phosphorylates metarhodopsin II and arrestin caps it**, terminating the signal; **the intrinsic GTPase of transducin alpha turns the G protein off**; and critically, **because the channels that closed were also carrying calcium in, intracellular calcium falls**, which **releases guanylyl cyclase from inhibition and rebuilds cGMP** so the channels reopen. Meanwhile all-trans retinal is **reduced to all-trans retinol, shuttled to the pigment epithelium, re-isomerised to 11-cis retinal and returned to the receptor** — the visual cycle. **Cones run this whole loop several times faster than rods**, which is the mechanistic root of every timing difference between the two systems.',
    '**Vitamin A is not a supporting player here — it is the chromophore, so deficiency blinds the rods first.** Retinal is the aldehyde of **retinol (vitamin A)**, stored in the **liver and the retinal pigment epithelium**. When intake fails, the **rods, which carry far more pigment and need far more chromophore turnover, run out before the cones**, so the first symptom is **nyctalopia — night blindness — with normal daylight acuity and a normal fundus**. Untreated it progresses along the ocular surface to **conjunctival xerosis, Bitot spots, corneal xerosis and finally keratomalacia**, which is irreversible. The reversal is dramatic and diagnostic: **night vision improves within hours to days of vitamin A replacement provided the receptors are still alive**.',
    '**Dark adaptation has two limbs with a visible kink, and knowing why rods lag is the exam point.** Step from daylight into darkness and **cones adapt over about 5 to 10 minutes**, giving a modest sensitivity gain; then the curve bends at the **rod-cone break at roughly 7 to 10 minutes** and the **rods continue to gain for 20 to 40 minutes**. Overall the retina can shift sensitivity by up to **several hundred thousand-fold between the fully light-adapted and fully dark-adapted state**. Rods lag for three stacked reasons: they hold a **much larger pigment pool to regenerate**, their **rhodopsin regenerates more slowly through the RPE visual cycle**, and their **neural gain and pooling take time to reset**. Pupil dilation contributes only about a **thirty-fold** change and is not the main mechanism. **Light adaptation is far faster — seconds to a minute or two — because bleaching pigment is quicker than rebuilding it.**',
  ],

  mechanism: {
    title: 'One photon to one hyperpolarisation: the rod cascade',
    steps: [
      { id: 's1', label: 'A photon isomerises 11-cis retinal to all-trans retinal inside rhodopsin' },
      { id: 's2', label: 'The protein converts through to metarhodopsin II, the activated signalling form', emphasis: 'key' },
      { id: 's3', label: 'Metarhodopsin II activates transducin; alpha-GTP frees cGMP phosphodiesterase', emphasis: 'key' },
      { id: 's4', label: 'Phosphodiesterase hydrolyses cGMP, and cytoplasmic cGMP collapses', emphasis: 'key' },
      { id: 's5', label: 'cGMP-gated sodium channels close and the dark current stops', emphasis: 'key' },
      { id: 's6', label: 'The receptor hyperpolarises toward -70 mV and glutamate release falls', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Trouble driving at dusk and bumping into furniture in dim rooms, with 6/6 daylight acuity and a normal fundus', mechanism: 'Nyctalopia from inadequate 11-cis retinal for the rod pigment pool, sparing the low-turnover cones', significance: 'key' },
    { sign: 'Dry, wrinkled, lustreless conjunctiva with a foamy triangular grey plaque temporal to the limbus', mechanism: 'Conjunctival xerosis and a Bitot spot — keratinising surface change of established vitamin A deficiency', significance: 'key' },
    { sign: 'Dark adaptometry showing a normal early cone limb but an absent or grossly delayed second limb', mechanism: 'Loss of the rod branch of the adaptation curve; the rod-cone break never resolves into a rod plateau', significance: 'key' },
    { sign: 'A cinema-goer cannot find a seat for several minutes on entering, then sees the whole auditorium clearly', mechanism: 'Normal biphasic dark adaptation: cones recover in minutes, rods keep gaining for half an hour', significance: 'supportive' },
    { sign: 'Transient scotoma with a lingering afterimage after a camera flash or after looking at the sun', mechanism: 'Mass bleaching of rhodopsin faster than the visual cycle can regenerate 11-cis retinal', significance: 'supportive' },
    { sign: 'Night blindness in a patient years after bariatric surgery or with chronic cholestatic liver disease', mechanism: 'Fat-soluble vitamin malabsorption depleting hepatic retinol stores, hitting rods before cones', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Metarhodopsin II', meaning: 'Activated rhodopsin — the intermediate that actually triggers transduction' },
    { clue: 'Transducin and cGMP phosphodiesterase', meaning: 'The rod G protein and its effector enzyme; the pathway destroys the second messenger rather than making it' },
    { clue: 'Membrane potential about -40 mV in darkness and -70 to -80 mV in bright light', meaning: 'The dark current holds the receptor depolarised; light removes it' },
    { clue: 'Falling intracellular calcium after channel closure', meaning: 'The feedback that disinhibits guanylyl cyclase, restores cGMP and drives recovery and light adaptation' },
    { clue: 'Rod-cone break at 7 to 10 minutes', meaning: 'The kink where the cone limb plateaus and the slower, deeper rod limb takes over' },
    { clue: 'Night blindness that reverses within days of retinol replacement', meaning: 'Vitamin A deficiency with photoreceptors still intact, as opposed to a degeneration' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The direction of this cascade is the reason the retina works the way it does downstream. **A photoreceptor that hyperpolarises and releases less glutamate means the retina signals light by withdrawing a transmitter, and every bipolar cell has to decide what to do with a signal delivered as an absence.** That is precisely what the ON and OFF bipolar split solves — see [[ghp-colour-vision-retinal-circuits]]. It is also why calcium feedback matters clinically: it is the same loop that lets you keep seeing as the room brightens, so drugs and diseases that disturb outer segment metabolism show up as adaptation problems long before acuity falls. The receptors and pigment epithelium this runs inside: [[ghp-retina-photoreceptors]].' },
    { logic: 'Where it is examined', detail: 'Two stems dominate. The first gives a rod in bright light and asks for the membrane potential or the transmitter release — the answer is always more negative and less glutamate. The second gives a malnourished, malabsorbing or post-bariatric patient with night blindness and a normal fundus, and wants vitamin A rather than an optic neuropathy. Compare the general G-protein template this cascade is a variant of: [[cell-signaling-modes-receptors]]. The wider approach to visual loss, including the acquired causes that mimic this: [[fcp1-eye-vision-loss]].' },
  ],

  mnemonics: [
    { hook: 'Dark Current ON in the dark, OFF in the light', expansion: ['Darkness: cGMP high, channels open, sodium in, -40 mV, glutamate flowing', 'Light: cGMP hydrolysed, channels shut, -70 mV, glutamate falls', 'No action potentials anywhere in a rod or a cone'] },
    { hook: 'Cones in Ten, Rods at Thirty', expansion: ['Cone limb complete by about 5 to 10 minutes', 'Rod-cone break at 7 to 10 minutes', 'Rod limb keeps deepening for 20 to 40 minutes because the pigment pool is bigger and slower'] },
  ],

  traps: [
    {
      questionCategory: 'What light does to the photoreceptor membrane potential',
      wrongInstinct: 'Light is the stimulus, so like every other sensory receptor the rod depolarises and releases more transmitter',
      rightAnswer: 'Light hyperpolarises the rod from about -40 mV toward -70 mV and glutamate release falls',
      why: 'The photoreceptor is uniquely depolarised at rest by a standing cGMP-gated inward current; transduction closes that channel, so the stimulus subtracts a current instead of adding one.',
    },
    {
      questionCategory: 'Why the two limbs of dark adaptation differ in speed',
      wrongInstinct: 'Rods adapt more slowly because the pupil takes about half an hour to dilate fully',
      rightAnswer: 'Rods lag because they hold a far larger rhodopsin pool that regenerates slowly through the pigment epithelium visual cycle, with neural pooling adding further gain over the same period',
      why: 'Pupillary dilation only alters retinal illumination about thirty-fold and is complete in seconds to a minute, while the full light-to-dark sensitivity shift is several hundred thousand-fold and chemical.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A rod that has been sitting in complete darkness is suddenly exposed to a bright light. Which set of changes occurs in that rod?',
      options: [
        { id: 'a', text: 'cGMP rises, sodium channels open, the cell depolarises and glutamate release increases' },
        { id: 'b', text: 'cGMP falls, sodium channels close, the cell hyperpolarises and glutamate release decreases' },
        { id: 'c', text: 'cGMP falls, voltage-gated sodium channels open, the cell fires a burst of action potentials' },
        { id: 'd', text: 'cGMP rises, calcium floods in, the cell depolarises and releases GABA' },
      ],
      answerId: 'b',
      explanation: 'Activated rhodopsin switches on transducin, which frees cGMP phosphodiesterase to hydrolyse cGMP. The outer segment sodium channels are gated open by cGMP, so as cGMP falls they shut. The inward dark current stops while the inner segment sodium-potassium pump keeps extruding sodium, so the membrane potential moves from about -40 mV in darkness toward -70 to -80 mV. Because transmitter release is graded with depolarisation, the tonic glutamate output falls. Photoreceptors have no voltage-gated sodium channels and generate no action potentials; the first spiking neuron in the pathway is the ganglion cell.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A 47-year-old five years after bariatric surgery reports that he can no longer drive after sunset, although he reads 6/6 in clinic and the fundus is normal. Slit lamp shows a dry conjunctiva with a foamy grey temporal plaque. What is the mechanism of his night blindness?',
      options: [
        { id: 'a', text: 'Degeneration of rod outer segments with secondary pigment migration' },
        { id: 'b', text: 'Insufficient retinol to supply 11-cis retinal for the large rod rhodopsin pool' },
        { id: 'c', text: 'Demyelination of the optic nerve reducing scotopic conduction' },
        { id: 'd', text: 'Failure of pupillary dilation limiting retinal illumination at night' },
      ],
      answerId: 'b',
      explanation: 'The plaque described is a Bitot spot and the picture is vitamin A deficiency from fat-soluble vitamin malabsorption after bariatric surgery. Retinal, the chromophore of both rod and cone pigments, is derived from retinol. Rods carry far more pigment and turn over far more chromophore than cones, so they fail first, producing nyctalopia with intact daylight acuity and an initially normal fundus. The diagnostic feature is reversibility: night vision recovers within hours to days of replacement, unlike retinitis pigmentosa, where the receptors themselves are lost. Optic nerve disease would degrade acuity, colour and the pupil response, and pupil size accounts for only about a thirty-fold change in retinal illumination.',
      tests: 'disease',
    },
    {
      id: 'q3',
      stem: 'Dark adaptometry on a healthy subject shows sensitivity improving steeply for the first 8 minutes, then plateauing briefly before improving again far more deeply over the next 25 minutes. What does the second limb represent, and why is it slower?',
      options: [
        { id: 'a', text: 'Cone adaptation, slowed by the time needed for pupillary dilation' },
        { id: 'b', text: 'Rod adaptation, slowed by the larger rhodopsin pool and the slower visual cycle through the pigment epithelium' },
        { id: 'c', text: 'Ganglion cell adaptation, slowed by cortical feedback through the lateral geniculate nucleus' },
        { id: 'd', text: 'Rod adaptation, slowed because rods must first switch from cGMP to cAMP as a second messenger' },
      ],
      answerId: 'b',
      explanation: 'The early steep limb is the cones, which finish within about 5 to 10 minutes; the kink at roughly 7 to 10 minutes is the rod-cone break, and the deeper second limb is the rods, continuing for 20 to 40 minutes and accounting for most of the total sensitivity gain. Rods lag because each rod holds a much larger pigment pool and its rhodopsin is regenerated through the slow retinoid cycle shuttling all-trans retinol to the pigment epithelium and 11-cis retinal back, with neural pooling adding further gain over the same period. Pupil dilation is fast and contributes only a small fraction of the change, and both rods and cones use the same cGMP cascade throughout.',
      tests: 'lecture',
    },
  ],
};

export default ghpPhototransductionDarkAdaptation;
