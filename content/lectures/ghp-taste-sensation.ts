import type { Lecture } from '../../lib/types';

export const ghpTasteSensation: Lecture = {
  id: 'ghp-taste-sensation',
  title: 'Taste: Five Primaries, Two Transduction Routes and Three Nerves',
  system: 'neuro',
  source: 'Ch 53 — The Chemical Senses — Taste & Smell',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Neuroscience' },
    { kind: 'lecture', label: 'Ch 53 Chemical Senses' },
    { kind: 'mechanism', label: 'Gustducin → IP3 → TRPM5 → ATP' },
    { kind: 'exam', label: 'VII vs IX vs X · bitter threshold' },
  ],

  highYield: [
    '**There are five primary taste sensations, and each one is a class of chemistry rather than a single molecule.** **Sour** is the taste of **hydrogen ion**, and its intensity tracks **H+ concentration**, not titratable acidity. **Salty** is the taste of **ionised salts, chiefly the sodium cation**, with the anion modifying the quality. **Sweet** is produced by a chemically ragged group — **sugars, glycols, alcohols, aldehydes, ketones, amides, some amino acids and even lead salts and saccharin** — which is why no single structural rule predicts sweetness. **Bitter** likewise comes from two unrelated families, **long-chain nitrogenous organics and the plant alkaloids**. **Umami** is the taste of **L-glutamate**, the signature of protein-rich food. Everything else — the thousands of qualities we name as flavours — is **olfaction wearing a taste label**.',
    '**The single highest-yield mechanism point is that the five tastes split into two transduction families: two use ion channels directly, three use G-protein-coupled receptors.** **Salt and sour are ionotropic**: **sodium enters through an apical epithelial sodium channel** and **hydrogen ion acts on acid-sensing channels**, so the tastant itself is the depolarising current. **Sweet, bitter and umami are metabotropic**: **T1R2 with T1R3 detects sweet, T1R1 with T1R3 detects umami, and a family of about thirty T2R receptors detects every bitter compound**. All three converge on **gustducin, a taste-specific G protein**, then **phospholipase C beta-2 → IP3 → calcium release from stores → opening of the TRPM5 cation channel → depolarisation**. The last step is unusual and examinable: these cells have **no classical vesicular synapse** and instead **release ATP through CALHM1 channels** onto the afferent fibre, while salt and sour cells use a conventional synapse.',
    '**Taste buds sit in papillae, and knowing which papilla carries buds is half the anatomy question.** A young adult has roughly **10,000 taste buds**, each a barrel of about **50 taste cells plus supporting cells**, whose apical **microvilli (taste hairs) project into a taste pore** to meet the saliva. Taste cells are **modified epithelial cells, not neurons**, and they **turn over roughly every ten days** from the surrounding epithelium — which is why chemotherapy and radiotherapy blunt taste and why that loss usually recovers. **Circumvallate papillae form the V at the back of the tongue and carry the largest number of buds; foliate papillae line the lateral folds; fungiform papillae dot the anterior flat surface.** **Filiform papillae carry no taste buds at all** — they are keratinised mechanical structures. Buds also lie on the **palate, tonsillar pillars, epiglottis and proximal oesophagus**.',
    '**Three cranial nerves carry taste, and the boundary between them is a lesion-localising tool.** The **chorda tympani branch of the facial nerve (VII) serves the anterior two-thirds of the tongue**, while the **greater petrosal branch of VII serves the palate**. The **glossopharyngeal nerve (IX) serves the posterior third, including all the circumvallate papillae**. The **vagus (X), through the internal branch of the superior laryngeal nerve, serves the epiglottis and proximal oesophagus**. The localising rule follows from where the chorda tympani leaves: a facial lesion **inside the facial canal, proximal to the chorda tympani, abolishes taste on the ipsilateral anterior two-thirds** and — if it is also above the nerve to stapedius — **adds hyperacusis**; a lesion **at or distal to the stylomastoid foramen gives pure facial weakness with entirely normal taste**.',
    '**All three nerves land in one nucleus, and taste is one of the few modalities that stays largely ipsilateral.** VII, IX and X enter the **tractus solitarius** and synapse in the **rostral gustatory portion of the nucleus of the solitary tract**. Second-order fibres run to the **most medial, parvocellular part of the ipsilateral VPM of the thalamus**, and third-order fibres reach the **gustatory cortex in the anterior insula and frontal operculum**, next to the tongue area of the postcentral gyrus. The solitary nucleus is also a **reflex hub**, not just a relay: it projects to the **superior and inferior salivatory nuclei** so that a tastant triggers **salivation within one to three seconds**, and to the **hypothalamus and amygdala**, which is where a taste acquires its affective value and where **single-trial conditioned taste aversion** is stored.',
    '**Bitter has by far the lowest threshold of the five, and that asymmetry is protective rather than incidental.** Threshold concentrations run roughly **quinine 0.000008 M, hydrochloric acid 0.0009 M, sodium chloride 0.01 M and sucrose 0.01 M** — bitter is detected at about **a thousandfold lower concentration than sweet**. The teleology is the exam answer: **most plant alkaloid poisons are bitter**, so a low threshold plus an innate rejection reflex is a **poison detector**, whereas sweet and umami mark **calories and protein** and need no such sensitivity. Taste **discrimination** is crude by comparison — a change of roughly **thirty per cent in concentration** is needed before a difference is noticed. Finally, **taste preference is not learned taste**: it tracks **bodily need**, so an **adrenalectomised, salt-wasting animal will actively seek salt**, which is the physiology behind **salt craving in adrenal insufficiency** and behind the calcium-seeking of parathyroid deficiency.',
  ],

  mechanism: {
    title: 'From tastant to gustatory cortex: two front ends, one nucleus',
    steps: [
      { id: 's1', label: 'Tastant dissolves in saliva and reaches the microvilli through the taste pore' },
      { id: 's2', label: 'Salt and sour depolarise directly: Na+ through ENaC, H+ on acid-sensing channels', emphasis: 'key' },
      { id: 's3', label: 'Sweet, bitter and umami bind T1R and T2R receptors coupled to gustducin', emphasis: 'key' },
      { id: 's4', label: 'PLC beta-2 → IP3 → stored Ca release → TRPM5 opens → ATP leaves via CALHM1', emphasis: 'key' },
      { id: 's5', label: 'VII (anterior two-thirds), IX (posterior third) and X (epiglottis) reach the solitary nucleus', emphasis: 'key' },
      { id: 's6', label: 'Ipsilateral parvocellular VPM → anterior insula and frontal operculum; branch to salivatory nuclei' },
    ],
  },

  examFindings: [
    { sign: 'Unilateral facial weakness with loss of taste on the anterior two-thirds of that side of the tongue and hyperacusis', mechanism: 'Facial nerve lesion within the facial canal, proximal to both the chorda tympani and the nerve to stapedius', significance: 'key' },
    { sign: 'Complete unilateral facial weakness with entirely normal taste on both sides', mechanism: 'Lesion at or distal to the stylomastoid foramen — the chorda tympani has already branched off', significance: 'key' },
    { sign: 'Loss of taste on the posterior third of the tongue with an absent gag reflex on that side', mechanism: 'Glossopharyngeal nerve lesion — IX supplies both the circumvallate taste field and the afferent limb of the gag', significance: 'key' },
    { sign: 'The patient says food is tasteless, yet sweet, salty, sour and bitter solutions are all correctly identified when applied to the tongue', mechanism: 'Flavour is retronasal olfaction; the complaint is anosmia, not ageusia', significance: 'key' },
    { sign: 'Craving for salty food alongside postural hypotension, hyperkalaemia and hyperpigmentation', mechanism: 'Taste preference tracks bodily need — mineralocorticoid deficiency drives salt appetite', significance: 'key' },
    { sign: 'Persistent metallic or blunted taste some weeks after head and neck radiotherapy, improving over months', mechanism: 'Taste cells turn over about every ten days, so the receptor population recovers once the epithelium does', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'T1R2 paired with T1R3', meaning: 'The sweet receptor — a heterodimer, which is why one receptor pair covers structurally unrelated sweeteners' },
    { clue: 'T1R1 paired with T1R3', meaning: 'The umami receptor for L-glutamate — the same T1R3 partner as sweet' },
    { clue: 'About thirty T2R receptors all funnelling into gustducin', meaning: 'Bitter — many ligands, one perceptual quality, because the receptors share a downstream pathway' },
    { clue: 'TRPM5 and CALHM1', meaning: 'The cation channel that finishes the GPCR cascade and the channel that releases ATP as transmitter' },
    { clue: 'Filiform papillae', meaning: 'The one papilla type with no taste buds — keratinised and purely mechanical' },
    { clue: 'Rostral nucleus of the solitary tract', meaning: 'First central relay for VII, IX and X taste, and the trigger point for the salivary and rejection reflexes' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Taste is tested one side and one region at a time, with the tongue protruded and the patient pointing at a written list rather than speaking, because closing the mouth spreads the solution across both nerve territories and destroys the localisation. Real-world causes of ageusia cluster: **chorda tympani injury during middle ear or parotid surgery**, **radiotherapy or chemotherapy killing the rapidly dividing taste epithelium**, **zinc deficiency**, and drugs — **captopril, metronidazole, terbinafine and lithium** are the classic dysgeusia offenders. Which nerve carries what, and where each leaves the skull: [[cranial-nerves-overview]]. The tongue surface and taste bud histology in more detail: [[oral-mucosa-tongue-taste]].' },
    { logic: 'Where it is examined', detail: 'Two stems recur. The first hides a level-localisation question inside a facial palsy: taste loss, hyperacusis and a dry eye are **level markers**, and the more of them that are present the more proximal the facial nerve lesion. The second gives a patient complaining that food has lost its taste — the correct move is to test the five primaries, find them intact, and diagnose **anosmia**: [[ghp-smell-olfaction]]. The comparative pathway view of both chemical senses, including why only smell skips the thalamus: [[gustatory-olfactory-pathways]].' },
  ],

  mnemonics: [
    { hook: 'Seven at the front, Nine at the back, Ten down the hatch', expansion: ['Chorda tympani of VII takes the anterior two-thirds of the tongue', 'Glossopharyngeal IX takes the posterior third and all the circumvallate papillae', 'Vagus X takes the epiglottis and proximal oesophagus'] },
    { hook: 'Salt and sour barge in; sweet, bitter and umami phone ahead', expansion: ['Na+ and H+ act on apical ion channels and depolarise the cell directly', 'T1R and T2R receptors signal through gustducin, PLC beta-2, IP3 and TRPM5', 'The GPCR cells release ATP through CALHM1 rather than a vesicular transmitter'] },
  ],

  traps: [
    {
      questionCategory: 'What a facial palsy with normal taste is telling you',
      wrongInstinct: 'Any facial nerve palsy abolishes taste on the front of the tongue',
      rightAnswer: 'Taste is spared when the lesion lies at or distal to the stylomastoid foramen, because the chorda tympani has already left the nerve',
      why: 'Taste, hyperacusis and lacrimation are level markers, so their presence moves the lesion proximally along the facial canal rather than confirming the diagnosis.',
    },
    {
      questionCategory: 'Which chemical sense has actually failed',
      wrongInstinct: 'A patient who says everything tastes of nothing has lost taste',
      rightAnswer: 'Almost always he has lost smell, and formal testing shows the five primary tastes intact',
      why: 'Only sweet, sour, salty, bitter and umami are gustatory; every other quality of flavour is retronasal olfaction.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 44-year-old develops complete right facial weakness. Taste on the right anterior two-thirds of the tongue is absent and loud sounds are uncomfortably intense in the right ear, but lacrimation is preserved. Where along the facial nerve is the lesion?',
      options: [
        { id: 'a', text: 'Distal to the stylomastoid foramen, in the parotid gland' },
        { id: 'b', text: 'In the facial canal, proximal to the nerve to stapedius but distal to the geniculate ganglion' },
        { id: 'c', text: 'At the geniculate ganglion, proximal to the greater petrosal nerve' },
        { id: 'd', text: 'In the pons at the facial motor nucleus' },
      ],
      answerId: 'b',
      explanation: 'Each branch that has already left the nerve is spared, so the deficits map the level. Loss of taste on the anterior two-thirds places the lesion proximal to the chorda tympani, and hyperacusis places it proximal to the nerve to stapedius as well. Preserved tearing places it distal to the greater petrosal nerve and therefore distal to the geniculate ganglion. A parotid lesion would give weakness alone with normal taste and normal stapedial function, and a pontine nuclear lesion would be expected to involve neighbouring structures such as the abducens nucleus.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Monosodium glutamate is applied to the tongue. Which sequence describes how the taste cell responds?',
      options: [
        { id: 'a', text: 'Sodium enters through an apical epithelial sodium channel and depolarises the cell directly' },
        { id: 'b', text: 'Hydrogen ion blocks apical potassium channels, producing depolarisation' },
        { id: 'c', text: 'T1R1 with T1R3 activates gustducin, phospholipase C beta-2 raises IP3, calcium is released, TRPM5 opens and ATP is released through CALHM1' },
        { id: 'd', text: 'A ligand-gated glutamate receptor admits calcium and triggers vesicular release of acetylcholine' },
      ],
      answerId: 'c',
      explanation: 'Umami is one of the three G-protein-coupled tastes, detected by the T1R1 and T1R3 heterodimer, and it uses exactly the same downstream cascade as sweet and bitter: gustducin, phospholipase C beta-2, IP3, release of stored calcium, opening of TRPM5, and non-vesicular release of ATP through CALHM1 onto the afferent fibre. Direct entry of sodium is the mechanism for salty, and hydrogen ion acting on apical channels is the mechanism for sour; both of those are ionotropic and bypass any second messenger.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'Threshold concentrations for taste are approximately quinine 0.000008 M, hydrochloric acid 0.0009 M, sodium chloride 0.01 M and sucrose 0.01 M. What is the physiological significance of this pattern?',
      options: [
        { id: 'a', text: 'Bitter receptors are the most numerous on the tongue, so summation lowers the threshold' },
        { id: 'b', text: 'The very low bitter threshold is protective, because most plant alkaloid poisons taste bitter and trigger rejection at trace concentrations' },
        { id: 'c', text: 'Bitter is the only taste that reaches the cortex without a thalamic relay, so less signal is required' },
        { id: 'd', text: 'The low bitter threshold reflects the fact that bitter compounds are detected by ion channels rather than G-protein-coupled receptors' },
      ],
      answerId: 'b',
      explanation: 'Bitter is detected at roughly a thousandfold lower concentration than sweet, and the low threshold is paired with an innate rejection and gagging response, which together act as a poison detector for the alkaloids that dominate toxic plants. Sweet and umami signal calories and protein and gain nothing from extreme sensitivity. Bitter is in fact transduced by the T2R family of G-protein-coupled receptors, not by ion channels, and taste does relay in VPM of the thalamus. Smell is the modality that reaches cortex without a thalamic relay.',
      tests: 'lecture',
    },
  ],
};

export default ghpTasteSensation;
