import type { Lecture } from '../../lib/types';

export const ghpPainFastSlowPathways: Lecture = {
  id: 'ghp-pain-fast-slow-pathways',
  title: 'Pain — Fast and Slow Pathways',
  system: 'neuro',
  source: 'Ch 48 — Somatic Sensations II — Pain, Headache & Thermal Sensations',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'Ch 48 Pain & Thermal Sensation' },
    { kind: 'mechanism', label: 'Aδ neospinothalamic · C paleospinothalamic' },
    { kind: 'exam', label: 'Double pain · hyperalgesia' },
  ],

  highYield: [
    '**Nociceptors are bare, unspecialised free nerve endings — and that is the point: anything that damages tissue can excite them.** They answer to three classes of stimulus — **mechanical, thermal and chemical** — and fast pain is essentially mechanical or thermal, while slow pain answers to all three. The thermal threshold is **about 45 °C**, which is exactly the temperature at which tissue begins to be destroyed, and it is remarkably constant from person to person. The rule that follows is the one exams like: **pain intensity tracks the RATE of tissue damage, not the amount of damage already done.**',
    '**Pain barely adapts — a receptor whose job is to keep you alive cannot afford to fall silent.** Most receptors fade within seconds; nociceptors hold their discharge and often **sensitise instead, firing progressively harder to an unchanged stimulus**. That sensitisation is **hyperalgesia**, and it comes in two flavours worth separating. **Primary hyperalgesia** is peripheral — the endings inside the damaged tissue are sensitised, which is why a warm shower on sunburn is agony. **Secondary hyperalgesia** is central facilitation in the dorsal horn and above, which is why tenderness spreads well outside the injured patch.',
    '**Every injury produces two pains, carried on two separate wiring systems.** **Fast (sharp, pricking, electric) pain** arrives within about **0.1 s** on **Aδ fibres conducting at 6–30 m/s**, released with **glutamate**. **Slow (burning, aching, throbbing) pain** begins after **a second or more** and builds over seconds to minutes on **unmyelinated C fibres at 0.5–2 m/s**, released with **substance P** alongside glutamate. Stub a toe and you feel the prick, then — a beat later — the deep ache: that is the two systems arriving in order.',
    '**Fast pain runs the neospinothalamic tract, and it is built for localisation.** Aδ fibres terminate in **lamina I (lamina marginalis)**; second-order fibres **cross in the anterior commissure**, ascend in the **anterolateral column** to the **VPL/VPM thalamus and posterior nuclear group**, and relay to **somatosensory cortex**. Note the catch that examiners love: this system localises well **only when tactile receptors are stimulated at the same time**. Excite nociceptors alone, as happens in deep tissue, and the brain can place the pain only to within roughly 10 cm.',
    '**Slow pain runs the paleospinothalamic tract, and it is built for suffering rather than for maps.** C fibres end in **laminae II and III, the substantia gelatinosa**, relay through **lamina V**, cross and ascend beside the fast fibres — but **only about a tenth to a quarter of these fibres reach the thalamus at all**. The rest terminate in the **brainstem reticular formation, tectal area and periaqueductal grey**, and those that do arrive land in the **diffusely projecting intralaminar nuclei**. Hence slow pain is **poorly localised, intensely arousing, and largely survives removal of the somatosensory cortex**.',
    '**Clinical anchor — ischaemic and spasmodic pain is chemistry, and it feeds itself.** Damaged tissue releases **bradykinin (the most potent single excitant), K⁺, H⁺, histamine, serotonin and proteolytic enzymes**, while **prostaglandins and substance P sensitise the ending rather than firing it** — precisely why NSAIDs work by removing the sensitiser, not the stimulus. **Ischaemia** hurts because anaerobic metabolism piles up **lactic acid** and liberates bradykinin: occlude the supply to an exercising muscle and pain appears in **15–20 seconds**. **Muscle spasm** hurts twice over — direct mechanical distortion of the endings, plus **compression of the vessels running through the muscle, generating the very ischaemia that drives more spasm**.',
  ],

  mechanism: {
    title: 'One insult, two lines out: a fast myelinated warning and a slow unmyelinated ache',
    steps: [
      { id: 's1', label: 'Injury, ischaemia or heat above 45 °C damages tissue' },
      { id: 's2', label: 'Bradykinin, K⁺, H⁺, histamine and serotonin excite free nerve endings; prostaglandins sensitise them', emphasis: 'key' },
      { id: 's3', label: 'Endings fire with little or no adaptation — discharge persists or grows', emphasis: 'key' },
      { id: 's4', label: 'Aδ fibres at 6–30 m/s end in lamina I → cross → neospinothalamic tract', emphasis: 'key' },
      { id: 's5', label: 'Neospinothalamic → VPL thalamus → cortex = sharp, fast, well-localised pain', emphasis: 'key' },
      { id: 's6', label: 'C fibres at 0.5–2 m/s end in laminae II/III → lamina V → paleospinothalamic → reticular formation, PAG and intralaminar thalamus = burning, diffuse, arousing pain', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Double pain sensation: a sharp prick, then a deep throbbing ache about a second later', mechanism: 'Aδ volley arrives at 6–30 m/s, the C-fibre volley at 0.5–2 m/s', significance: 'key' },
    { sign: 'Pain that does not fade while the noxious stimulus continues', mechanism: 'Nociceptors adapt minimally and may sensitise — persistence is the biological purpose', significance: 'key' },
    { sign: 'Skin pain threshold near 45 °C, almost identical across individuals', mechanism: 'The threshold is set by the temperature at which tissue protein begins to be damaged, not by receptor variation', significance: 'key' },
    { sign: 'Sunburned skin exquisitely tender to lukewarm water', mechanism: 'Primary hyperalgesia — peripheral sensitisation of nociceptors within the damaged field', significance: 'key' },
    { sign: 'Cramping calf pain within seconds to minutes of walking, relieved by standing still', mechanism: 'Exercising muscle outstrips a limited supply; lactic acid and bradykinin accumulate faster than they are cleared', significance: 'key' },
    { sign: 'Patient rubs a whole region rather than pointing to a spot when describing a deep burning pain', mechanism: 'Paleospinothalamic projection is diffuse and lacks the tactile co-activation that fast pain uses to localise', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Fibre carrying sharp, pricking, well-localised pain at 6–30 m/s', meaning: 'Aδ fibre, running in the neospinothalamic tract, transmitting with glutamate' },
    { clue: 'Fibre carrying burning, aching, poorly localised pain at 0.5–2 m/s', meaning: 'Unmyelinated C fibre, running in the paleospinothalamic tract, transmitting with substance P and glutamate' },
    { clue: 'Dorsal horn lamina in which Aδ nociceptors terminate', meaning: 'Lamina I, the lamina marginalis' },
    { clue: 'Dorsal horn laminae in which C fibres terminate', meaning: 'Laminae II and III, the substantia gelatinosa, relaying onward through lamina V' },
    { clue: 'Most potent single chemical excitant extracted from damaged tissue', meaning: 'Bradykinin' },
    { clue: 'Agents that sensitise a nociceptor without firing it directly', meaning: 'Prostaglandins and substance P — the reason NSAIDs are analgesic' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Almost every analgesic decision is a choice of a point on this chain. NSAIDs and paracetamol strip away the prostaglandin sensitiser at the ending, local anaesthetic silences the axon, and opioids act centrally on the first synapse and on the descending system set out in [[ghp-pain-modulation-analgesia]]. The tract anatomy is best learnt against the dorsal column–medial lemniscal system in [[somatosensory-ascending-pathways]]: a cord lesion that abolishes pain and temperature while sparing fine touch and proprioception is the anterolateral system being cut.' },
    { logic: 'Where it is examined', detail: 'The single most repeated discriminator is Aδ against C — fast, sharp, localised, glutamate, lamina I, neospinothalamic, versus slow, burning, diffuse, substance P, substantia gelatinosa, paleospinothalamic. The second is that pain does not adapt, and the third is that prostaglandins sensitise rather than excite. Carry the same receptor logic into the viscera and into temperature in [[ghp-visceral-pain-thermal-sensation]], and compare a bare free nerve ending with an encapsulated mechanoreceptor in [[sensory-receptors-transduction]].' },
  ],

  mnemonics: [
    { hook: 'FAST is A-delta and NEO; SLOW is C and PALEO', expansion: ['Onset 0.1 s versus 1 s and more', 'Speed 6–30 m/s versus 0.5–2 m/s', 'Glutamate versus substance P', 'Lamina I versus substantia gelatinosa', 'Thalamus and cortex versus reticular formation and PAG'] },
    { hook: 'The pain soup is BASH-K: Bradykinin, Acid, Serotonin, Histamine, K⁺', expansion: ['Bradykinin is the most potent of them', 'Prostaglandins and substance P do not fire the ending, they prime it', 'Ischaemia is simply acid plus bradykinin arriving faster than the blood can wash them away'] },
  ],

  traps: [
    {
      questionCategory: 'Adaptation of nociceptors',
      wrongInstinct: 'Like every other sensory receptor, pain endings adapt when the stimulus is sustained',
      rightAnswer: 'Nociceptors adapt very little, and frequently sensitise instead',
      why: 'A warning system that switched itself off would be useless; the same non-adaptation, pushed further, is what produces hyperalgesia.',
    },
    {
      questionCategory: 'Primary versus secondary hyperalgesia',
      wrongInstinct: 'Tenderness spreading beyond the burn margin means the injury is larger than it looks',
      rightAnswer: 'It is secondary hyperalgesia — facilitation of the second-order neurons in the dorsal horn and above',
      why: 'Primary hyperalgesia is peripheral sensitisation confined to damaged tissue; secondary hyperalgesia is a central phenomenon and readily extends into undamaged skin.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A student drops a weight on his foot. He reports an immediate sharp stab, then roughly a second later a deep burning ache that builds over the next minute. Which pairing explains the second component?',
      options: [
        { id: 'a', text: 'Aδ fibres in the neospinothalamic tract releasing glutamate onto lamina I' },
        { id: 'b', text: 'C fibres in the paleospinothalamic tract releasing substance P into the substantia gelatinosa' },
        { id: 'c', text: 'Aβ fibres in the dorsal columns signalling deep pressure' },
        { id: 'd', text: 'Second-order fibres ascending ipsilaterally to the VPL nucleus' },
      ],
      answerId: 'b',
      explanation: 'The delayed, burning, poorly localised component is slow pain. It travels on unmyelinated C fibres at 0.5–2 m/s, terminates in laminae II and III, relays through lamina V, and ascends in the paleospinothalamic tract to the reticular formation, tectal area and periaqueductal grey, with only a minority of fibres reaching the intralaminar thalamic nuclei. Option a describes the first, sharp component. Aβ fibres carry touch, not pain, and the anterolateral pain fibres cross before they ascend.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A cuff is inflated above systolic pressure on the arm of a volunteer, who is then asked to clench his fist repeatedly. Severe pain appears within about 20 seconds. What accounts for the pain?',
      options: [
        { id: 'a', text: 'Direct mechanical compression of nerve trunks by the cuff' },
        { id: 'b', text: 'Depletion of intracellular ATP causing the nociceptor membrane to depolarise passively' },
        { id: 'c', text: 'Accumulation of lactic acid plus bradykinin and proteolytic enzymes released by ischaemic tissue' },
        { id: 'd', text: 'Cooling of the ischaemic limb stimulating cold-pain endings' },
      ],
      answerId: 'c',
      explanation: 'Ischaemic pain is chemical. Anaerobic metabolism in working muscle produces lactic acid, and the ischaemic tissue also releases bradykinin and proteolytic enzymes; with no flow, none of it is washed away. Exercise accelerates the process, which is why the same occlusion is far more painful in a contracting muscle than a resting one, and it is the mechanism of both intermittent claudication and angina. The cuff does compress nerve, but that produces numbness and paraesthesiae rather than this rapidly building deep pain.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'Why does an NSAID reduce the pain of an inflamed joint even though it does not block the nociceptor itself?',
      options: [
        { id: 'a', text: 'It neutralises bradykinin, the direct excitant of the ending' },
        { id: 'b', text: 'It prevents prostaglandin synthesis, removing the agent that sensitises the ending to other stimuli' },
        { id: 'c', text: 'It blocks substance P release from C fibre terminals in lamina I' },
        { id: 'd', text: 'It raises the thermal pain threshold above 45 °C' },
      ],
      answerId: 'b',
      explanation: 'Prostaglandins do not usually fire nociceptors on their own; they lower the threshold so that bradykinin, K⁺, acid and mechanical distortion all become far more effective. Blocking cyclo-oxygenase removes the sensitiser and so undoes the primary hyperalgesia of inflammation. Bradykinin itself is unaffected, substance P release is an opioid target rather than an NSAID one, and the 45 °C thermal threshold is set by tissue damage and is essentially fixed.',
      tests: 'treatment',
    },
  ],
};

export default ghpPainFastSlowPathways;
