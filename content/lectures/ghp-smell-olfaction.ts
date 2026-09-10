import type { Lecture } from '../../lib/types';

export const ghpSmellOlfaction: Lecture = {
  id: 'ghp-smell-olfaction',
  title: 'Smell: A Regenerating Neuron, a Combinatorial Code and No Thalamus',
  system: 'neuro',
  source: 'Ch 53 — The Chemical Senses — Taste & Smell',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Neuroscience' },
    { kind: 'lecture', label: 'Ch 53 Chemical Senses' },
    { kind: 'mechanism', label: 'Odorant → G-olf → cAMP → CNG channel → chloride amplification' },
    { kind: 'exam', label: 'No thalamic relay · cribriform fracture · anosmia as lost flavour' },
  ],

  highYield: [
    '**The olfactory receptor cell is the strangest neuron in the body: a first-order sensory neuron sitting exposed in an epithelium, and the one neuron that is routinely replaced throughout life.** The **olfactory epithelium** occupies only a few square centimetres in the **roof of each nasal cavity, over the superior turbinate and the adjacent septum**, which is why **sniffing** — drawing air upward in eddies — measurably improves detection. It holds about **100 million bipolar olfactory receptor neurons**. Each sends a single dendrite to the surface ending in a **knob bearing several unmyelinated olfactory cilia** that lie in the **mucus secreted by Bowman glands**, and a single **unmyelinated axon** centrally. An odorant must therefore be **volatile enough to reach the nose, water-soluble enough to cross the mucus, and lipid-soluble enough to engage the ciliary membrane**. Crucially these neurons are **continuously regenerated from basal stem cells about every 30 to 60 days** — a genuine exception to the rule that central neurons are not replaced, and the reason post-viral anosmia can slowly recover.',
    '**A few hundred receptor types discriminate tens of thousands of odours because the code is combinatorial, not one-molecule-one-receptor.** The olfactory receptors form the **largest gene family in the genome — roughly a thousand genes, of which about 350 to 400 remain functional in humans** — and each receptor neuron obeys the **one neuron, one receptor rule**, expressing a single type. No receptor is a lock for one key: **each receptor binds many odorants and each odorant activates a set of receptors**, so an odour is encoded as **which combination fires and in what proportion**. That is why a mixture smells like a new thing rather than a sum, and why a code of a few hundred elements has effectively unlimited capacity. Sensitivity at the low end is spectacular — **methylmercaptan is detected at about one twenty-five-billionth of a milligram per millilitre of air**, which is why it is added to domestic gas — but **intensity discrimination is poor**, needing a **ten- to fiftyfold change in concentration** to register as a change in strength. Smell answers **what is present**, not **how much**.',
    '**Transduction is a textbook G-protein cascade with an unusual chloride amplifier bolted on the end.** The odorant binds its **seven-transmembrane receptor** on the cilium, which activates the olfaction-specific G protein **G-olf**; this stimulates **adenylyl cyclase III**, and the resulting **cAMP binds directly to a cyclic-nucleotide-gated cation channel**, opening it so that **sodium and calcium enter and depolarise the cilium**. The twist is what the calcium then does: it opens a **calcium-activated chloride channel**, and because the olfactory neuron uniquely maintains a **high intracellular chloride concentration**, **chloride flows OUT** and **depolarises the cell further** rather than clamping it. This second-messenger amplification is what allows **a handful of odorant molecules to generate an action potential**, and the amplification is also the reason the system needs a brake: **calcium feedback onto the CNG channel underlies the rapid receptor-level adaptation described below.**',
    '**The olfactory bulb converts a chemical code into a spatial map, and the glomerulus is where it happens.** The unmyelinated axons collect into some **twenty fila olfactoria** that pierce the **cribriform plate of the ethmoid** and enter the bulb. There they sort themselves with remarkable precision: **all receptor neurons expressing the SAME receptor gene, wherever they sit in the epithelium, converge on the same one or two glomeruli** out of roughly **1000 to 2000**, with about **25,000 receptor axons feeding each one**. That convergence gives enormous **signal averaging and sensitivity**, and it turns the combinatorial receptor code into a reproducible **chemotopic map of active glomeruli**. The output cells are the **mitral and tufted cells**, one dendritic tuft per glomerulus, and they are sharpened by **granule cells and periglomerular cells providing lateral inhibition**, which increases the contrast between similar odours. Note the anatomical asymmetry that examiners like: **glomeruli are the FIRST synapse in the pathway**, because the receptor cell is itself the primary neuron.',
    '**Olfaction is the only sensory modality that reaches cortex without a thalamic relay, and that single fact explains its emotional signature.** Mitral cell axons run in the **olfactory tract** and divide at the **lateral olfactory stria** to reach the **primary olfactory (piriform) cortex, the periamygdaloid and entorhinal cortex, and the amygdala directly** — no synapse in the thalamus anywhere along that route. Every other modality is obliged to relay in a thalamic nucleus first. A **thalamic route does exist, but it is secondary**: piriform cortex projects to the **mediodorsal nucleus of the thalamus and on to the orbitofrontal cortex**, which supports **conscious identification and naming** of odours. The direct limbic entry, through **amygdala and entorhinal cortex into the hippocampus**, is why **a smell can evoke a vivid autobiographical memory with its emotional colour intact and before it can be named**, why odours drive **appetite, disgust and sexual and maternal behaviour**, and why an **older medial pathway to the hypothalamus and brainstem** produces primitive responses such as **salivation and licking**.',
    '**Adaptation is fast and largely central, and anosmia usually presents as a complaint about food.** Olfaction **adapts by roughly 50 per cent within about a second** of stimulation and then declines slowly further, so a perfume that its wearer no longer notices is still obvious to a person walking in — receptor-level calcium feedback accounts for part of it and **central habituation for most of it**. Loss of smell has a short, examinable differential: **conductive causes** where the odorant never reaches the epithelium — **rhinitis, chronic rhinosinusitis, nasal polyps**; **sensorineural causes** — **post-viral including COVID-19, ageing, zinc deficiency**; **traumatic** — a **fracture of the cribriform plate shears the fila olfactoria as they cross it**, giving abrupt, usually permanent anosmia that may be accompanied by **CSF rhinorrhoea and a risk of meningitis**; and **central causes** — **olfactory groove meningioma, Kallmann syndrome with anosmia and hypogonadotropic hypogonadism, and hyposmia as an EARLY prodrome of Parkinson and Alzheimer disease years before motor or memory signs**. The patient will almost never say the word smell: the complaint is that **food has lost its flavour**, because everything beyond sweet, sour, salty, bitter and umami is **retronasal olfaction**.',
  ],

  mechanism: {
    title: 'From a volatile molecule to the piriform cortex, thalamus unvisited',
    steps: [
      { id: 's1', label: 'Odorant reaches the epithelial roof of the nose and dissolves in Bowman gland mucus' },
      { id: 's2', label: 'One receptor type per neuron binds it; about 350 to 400 receptors give a combinatorial code', emphasis: 'key' },
      { id: 's3', label: 'G-olf → adenylyl cyclase III → cAMP opens a cyclic-nucleotide-gated cation channel', emphasis: 'key' },
      { id: 's4', label: 'Calcium opens a chloride channel; chloride leaves and amplifies the depolarisation' },
      { id: 's5', label: 'Unmyelinated axons cross the cribriform plate; same receptor converges on one glomerulus', emphasis: 'key' },
      { id: 's6', label: 'Mitral cells → lateral olfactory stria → piriform cortex and amygdala with NO thalamic relay', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'A cyclist thrown onto his face recovers consciousness intact but cannot smell coffee, says all food is bland, and has clear fluid dripping from one nostril', mechanism: 'Cribriform plate fracture shearing the fila olfactoria, with a dural tear producing CSF rhinorrhoea', significance: 'key' },
    { sign: 'A patient insists food is tasteless, yet identifies sweet, sour, salty, bitter and umami solutions correctly on the tongue', mechanism: 'Flavour is mostly retronasal olfaction — the deficit is anosmia, not ageusia', significance: 'key' },
    { sign: 'A woman stops noticing her own perfume within a minute, while a colleague entering the room comments on it immediately', mechanism: 'Rapid olfactory adaptation — about half the response is lost in the first second, mostly by central habituation', significance: 'supportive' },
    { sign: 'A 19-year-old man has never smelled anything, has not entered puberty, and has small testes with low LH and FSH', mechanism: 'Kallmann syndrome — failed migration of GnRH neurons alongside olfactory bulb hypoplasia', significance: 'key' },
    { sign: 'Progressive anosmia with ipsilateral optic atrophy and contralateral papilloedema in an older adult', mechanism: 'Olfactory groove or sphenoid ridge meningioma compressing the bulb and nerve while raising intracranial pressure — the Foster Kennedy pattern', significance: 'key' },
    { sign: 'Reduced odour identification documented several years before the onset of a resting tremor and bradykinesia', mechanism: 'Olfactory structures are affected early in Parkinson disease, so hyposmia can precede motor signs', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'One neuron, one receptor, out of about 350 to 400 functional genes', meaning: 'The basis of combinatorial coding — identity is carried by which set of neurons fires, not by a dedicated line per odour' },
    { clue: 'G-olf, adenylyl cyclase III and a cyclic-nucleotide-gated channel', meaning: 'The transduction cascade; cAMP gates the channel directly, and calcium-activated chloride efflux amplifies it' },
    { clue: 'Convergence of about 25,000 axons onto a single glomerulus', meaning: 'Signal averaging for sensitivity, and the step that turns a chemical code into a spatial map read out by mitral cells' },
    { clue: 'Bedside testing with coffee or vanilla one nostril at a time', meaning: 'Correct technique — non-irritant odours test cranial nerve I, and each side must be tested separately to find unilateral loss' },
    { clue: 'Ammonia held under the nose', meaning: 'Not an olfactory test at all — it stimulates trigeminal nociceptors, so a completely anosmic patient still recoils' },
    { clue: 'Mediodorsal thalamus to orbitofrontal cortex', meaning: 'The secondary, thalamic route used for conscious discrimination and naming — the primary route bypasses the thalamus entirely' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Anosmia is under-reported and over-consequential. Patients lose **the ability to detect gas leaks, smoke and spoiled food**, they lose most of what they call taste, and appetite and mood follow, so the assessment always includes safety advice and, when the cause is inflammatory, a genuine therapeutic target — **topical corticosteroids for polyps and chronic rhinosinusitis**, and **olfactory training** for post-viral loss, which exploits the fact that these receptor neurons regenerate. Always separate the complaint from the deficit by testing the five primary tastes: [[ghp-taste-sensation]]. The comparative wiring of both chemical senses side by side: [[gustatory-olfactory-pathways]].' },
    { logic: 'Where it is examined', detail: 'Three stems dominate. The first is the **head injury with sudden permanent anosmia**, where the answer is **shearing of the olfactory fila at the cribriform plate** and the bonus mark is **CSF rhinorrhoea with a meningitis risk**: [[cranial-fossae-foramina]]. The second asks which modality **reaches cortex without a thalamic relay**, and the answer is smell alone. The third is the vignette in which a smell triggers a flood of emotion or a decades-old memory before the patient can name the odour — the mechanism is the **direct mitral cell projection into amygdala and entorhinal cortex**: [[limbic-hypothalamus]].' },
  ],

  mnemonics: [
    { hook: 'Smell walks straight in', expansion: ['Every other sense books a room in the thalamus first', 'Mitral cells run in the lateral olfactory stria to piriform cortex and amygdala', 'The mediodorsal thalamus is only the later route to orbitofrontal cortex for naming the odour'] },
    { hook: 'G-olf opens the gate, chloride slams it wider', expansion: ['Odorant to receptor to G-olf to adenylyl cyclase', 'cAMP binds the cyclic-nucleotide-gated channel directly and sodium plus calcium enter', 'Calcium opens a chloride channel and chloride leaves the cell, amplifying the depolarisation'] },
  ],

  traps: [
    {
      questionCategory: 'Which sensory modality bypasses the thalamus',
      wrongInstinct: 'All sensory information relays in the thalamus before reaching cortex, so olfaction must relay there too',
      rightAnswer: 'Olfaction reaches piriform cortex, entorhinal cortex and amygdala directly through the lateral olfactory stria, with no thalamic synapse',
      why: 'A thalamic connection does exist but it is downstream of cortex — piriform to mediodorsal nucleus to orbitofrontal cortex — so it is a secondary route for discrimination, not the primary relay.',
    },
    {
      questionCategory: 'How to test the first cranial nerve at the bedside',
      wrongInstinct: 'Hold ammonia or an alcohol wipe under the nose and see whether the patient reacts',
      rightAnswer: 'Use a non-irritant odour such as coffee, vanilla or soap, one nostril at a time with the other occluded',
      why: 'Ammonia stimulates trigeminal nociceptors rather than olfactory receptors, so a completely anosmic patient still recoils and the test proves nothing about cranial nerve I.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 27-year-old is thrown from a motorcycle and lands face first. Neurological examination is otherwise normal, but he can no longer detect coffee or perfume with either nostril, and thin clear fluid drips from the left nostril when he leans forward. What is the anatomical basis of his anosmia?',
      options: [
        { id: 'a', text: 'Contusion of the mediodorsal nucleus of the thalamus interrupting the olfactory relay' },
        { id: 'b', text: 'Shearing of the unmyelinated olfactory fila where they traverse the cribriform plate of the ethmoid' },
        { id: 'c', text: 'Haemorrhage into the gustatory cortex of the anterior insula' },
        { id: 'd', text: 'Swelling of the nasal mucosa preventing odorants from reaching the epithelium' },
      ],
      answerId: 'b',
      explanation: 'The fila olfactoria are fine unmyelinated bundles that pass from the epithelium through the perforations of the cribriform plate to reach the olfactory bulb, and the bulb is tethered to the plate. A blow that decelerates the brain within the skull tears the fila across that fixed bony line, which is why anosmia is a classic and often permanent consequence of frontal or occipital head injury even in the absence of any other deficit. The accompanying dural tear allows cerebrospinal fluid to leak into the nose, giving the clear rhinorrhoea and a persisting risk of ascending meningitis. The thalamus is not on the primary olfactory pathway at all, gustatory cortex would affect taste rather than smell, and mucosal swelling would be a conductive cause that fluctuates rather than an abrupt permanent loss with CSF leak.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Humans express only about 350 to 400 functional olfactory receptor genes yet can distinguish an enormous number of distinct odours. Which principle explains this?',
      options: [
        { id: 'a', text: 'Each receptor neuron expresses several hundred receptor types simultaneously, multiplying the possible responses' },
        { id: 'b', text: 'Each receptor is highly specific for one odorant, and unfamiliar odours are simply not perceived' },
        { id: 'c', text: 'Each neuron expresses a single receptor type, each receptor responds to many odorants, and an odour is encoded by which combination of receptors is activated and how strongly' },
        { id: 'd', text: 'Discrimination is performed entirely in the orbitofrontal cortex, and the receptor population is irrelevant to odour identity' },
      ],
      answerId: 'c',
      explanation: 'Olfaction uses a combinatorial code. A receptor neuron obeys the one neuron, one receptor rule, but a given receptor is broadly tuned and binds many structurally related odorants, while a given odorant engages a set of receptors with different affinities. Identity is therefore carried by the pattern across the population, and the pattern is made legible because all neurons expressing the same receptor converge on the same one or two of the roughly 1000 to 2000 glomeruli, turning the chemical code into a reproducible spatial map that mitral cells read out. A few hundred broadly tuned elements combined this way generate an effectively unlimited number of distinguishable patterns, in the same way a small alphabet generates unlimited words.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A patient describes how the smell of a particular floor polish instantly brings back a vivid, emotionally charged memory of her grandmother, several seconds before she can put a name to the smell itself. Which feature of olfactory anatomy best accounts for this?',
      options: [
        { id: 'a', text: 'Olfactory information relays in the ventral posteromedial nucleus alongside taste, which is adjacent to limbic structures' },
        { id: 'b', text: 'Mitral cell axons project directly to the amygdala and entorhinal cortex without a thalamic relay, while conscious naming requires a slower route through the mediodorsal thalamus to orbitofrontal cortex' },
        { id: 'c', text: 'Olfactory receptor neurons regenerate every 30 to 60 days, so odour memories are constantly rewritten' },
        { id: 'd', text: 'Lateral inhibition by granule cells in the olfactory bulb selectively enhances emotionally significant odours' },
      ],
      answerId: 'b',
      explanation: 'Smell is the only modality whose primary cortical target is reached without a thalamic synapse. Mitral cell axons run in the lateral olfactory stria straight into piriform cortex, periamygdaloid and entorhinal cortex and the amygdala, so an odour has immediate access to the amygdala for affective tagging and, through entorhinal cortex, to the hippocampal memory circuit. Naming the odour depends on a longer secondary loop from piriform cortex to the mediodorsal thalamic nucleus and on to orbitofrontal cortex, which is why the feeling and the recollection routinely arrive before the label. Taste, not smell, relays in the parvocellular VPM; receptor turnover and bulbar lateral inhibition are real but have nothing to do with the emotional immediacy of odour memory.',
      tests: 'lecture',
    },
  ],
};

export default ghpSmellOlfaction;
