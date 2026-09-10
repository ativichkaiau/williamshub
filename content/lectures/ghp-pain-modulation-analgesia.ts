import type { Lecture } from '../../lib/types';

export const ghpPainModulationAnalgesia: Lecture = {
  id: 'ghp-pain-modulation-analgesia',
  title: 'Pain Modulation and the Analgesia System',
  system: 'neuro',
  source: 'Ch 48 — Somatic Sensations II — Pain, Headache & Thermal Sensations',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'Ch 48 Pain & Thermal Sensation' },
    { kind: 'mechanism', label: 'PAG → raphe magnus → dorsal horn' },
    { kind: 'exam', label: 'Gate control · referred pain' },
  ],

  highYield: [
    '**The brain owns a hardware volume control for pain, and it runs top-down through three stations.** First the **periaqueductal grey and periventricular grey** of the mesencephalon and upper pons; these project to the **nucleus raphe magnus**, a thin midline nucleus of the lower pons and upper medulla, together with the nucleus reticularis paragigantocellularis; which in turn drives a **pain inhibitory complex in the dorsal horns of the cord**. **Electrical stimulation of the periaqueductal grey or the raphe magnus can abolish transmission of pain signals almost completely**, which is the experimental proof that the system exists.',
    '**The descending arm is serotonergic and the local arm is opioid — that two-transmitter handover is the examinable core.** Raphe axons descend in the **dorsolateral funiculus** to laminae I, II and III and release **serotonin**, which excites local **enkephalin interneurons**. Enkephalin then produces **presynaptic inhibition of the Aδ and C terminals — largely by blocking Ca²⁺ entry, so less glutamate and substance P are released** — with postsynaptic inhibition on top. The consequence worth memorising: **the message is stopped at the first synapse, before it ever leaves the spinal cord**.',
    '**Three families of endogenous opioid, three receptor types.** **Enkephalins (met- and leu-)** are the workhorses of the cord and brainstem; **β-endorphin** is cleaved from **pro-opiomelanocortin in the hypothalamus and anterior pituitary — the same precursor as ACTH**; **dynorphin** is extremely potent and acts mainly at κ. Receptors: **μ** (morphine — analgesia, euphoria, respiratory depression), **δ** (enkephalin) and **κ** (dynorphin), all reversed by **naloxone**.',
    '**Opioid drugs work because opioid receptors are densest exactly where the endogenous system already lives.** Morphine and its relatives bind in the **periaqueductal grey and raphe (switching the descending system on), in the dorsal horn (closing the first synapse), and in the limbic system (detaching the suffering from the sensation)**. Two clinical corollaries follow: opioids do **not** silence the nociceptor in the injured tissue, and a patient on morphine who still reports the pain but no longer minds it is showing you the **limbic, affective component** of the drug.',
    '**Gate control — big touch fibres close the door on small pain fibres.** Collaterals of **Aβ mechanoreceptor fibres excite inhibitory interneurons in the same and adjacent cord segments**, damping transmission from Aδ and C fibres in that segment. This is why **rubbing the skin around a knocked shin genuinely helps**, and it is the working principle of **counter-irritant liniments, TENS and implanted dorsal column stimulators**. It also explains a loss: strip away large-fibre input, as in some neuropathies, and pain transmission is **released from inhibition**.',
    '**Clinical anchor — placebo is circuitry, and referred pain is convergence rather than migration.** Placebo and stress-induced analgesia are **partly reversed by naloxone**, proving that expectation recruits the same endogenous opioid pathway — the mechanism behind the wounded soldier who feels little until he is safe. The traffic runs both ways: **descending facilitation can turn the gate up**, one route into chronic pain. **Referred pain** arises because **visceral afferents synapse on the very second-order neurons that serve skin of the embryological segment**, and a brain trained by a lifetime of cutaneous input reads the signal as skin: **heart (T1–T5) to chest, ulnar arm, jaw and neck; diaphragm (C3–C5, phrenic) to the tip of the shoulder; gallbladder to the right inferior scapular region; early appendix (T10) to the umbilicus; ureter from loin to groin**.',
  ],

  mechanism: {
    title: 'A descending brake that closes the first pain synapse before the signal can leave the cord',
    steps: [
      { id: 's1', label: 'Stress, expectation, opioid drug or cortical input drives the periaqueductal and periventricular grey' },
      { id: 's2', label: 'PAG excites the nucleus raphe magnus in the lower pons and upper medulla', emphasis: 'key' },
      { id: 's3', label: 'Serotonergic axons descend in the dorsolateral funiculus to dorsal horn laminae I–III', emphasis: 'key' },
      { id: 's4', label: 'Serotonin excites local enkephalin interneurons', emphasis: 'key' },
      { id: 's5', label: 'Enkephalin blocks Ca²⁺ entry into Aδ and C terminals — presynaptic inhibition, plus postsynaptic inhibition', emphasis: 'key' },
      { id: 's6', label: 'Glutamate and substance P release collapses — the pain signal never reaches the ascending tract', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Rubbing or shaking the area around a knock blunts the pain within seconds', mechanism: 'Aβ collaterals recruit segmental inhibitory interneurons — the gate control mechanism', significance: 'key' },
    { sign: 'Placebo and stress-induced analgesia are partly reversed by naloxone', mechanism: 'Expectation and arousal release endogenous opioids into the descending analgesia system', significance: 'key' },
    { sign: 'Exertional chest tightness accompanied by ache in the jaw, neck and ulnar border of the left arm', mechanism: 'Cardiac afferents converge with T1–T5 somatic afferents on shared second-order neurons', significance: 'key' },
    { sign: 'Shoulder tip pain after laparoscopic insufflation or with a subphrenic collection', mechanism: 'Diaphragmatic irritation travels in the phrenic nerve from C3–C5 and is referred to the C4 dermatome over the shoulder', significance: 'key' },
    { sign: 'Patient on morphine says the pain is still there but no longer bothers him', mechanism: 'Limbic opioid action separates the affective suffering from the sensory signal', significance: 'key' },
    { sign: 'Neuropathy with large-fibre loss made worse rather than better by light touch', mechanism: 'Loss of Aβ input removes the segmental inhibition that normally holds pain transmission down', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Midbrain region whose electrical stimulation abolishes pain transmission', meaning: 'Periaqueductal and periventricular grey — the head of the analgesia system' },
    { clue: 'Midline brainstem nucleus relaying analgesia downward', meaning: 'Nucleus raphe magnus, serotonergic, in the lower pons and upper medulla' },
    { clue: 'Cord tract carrying the descending analgesic fibres', meaning: 'Dorsolateral funiculus, ending on the dorsal horn pain inhibitory complex' },
    { clue: 'Transmitter of the dorsal horn interneuron that closes the first synapse', meaning: 'Enkephalin, acting mainly by presynaptic Ca²⁺ channel blockade on Aδ and C terminals' },
    { clue: 'Opioid peptide cleaved from pro-opiomelanocortin', meaning: 'β-endorphin, from hypothalamus and anterior pituitary, sharing a precursor with ACTH' },
    { clue: 'Endogenous peptide acting chiefly at the κ receptor', meaning: 'Dynorphin' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Every clinical analgesic strategy above the level of the nociceptor is an attempt to borrow this circuit. Opioids switch on the periaqueductal grey and close the dorsal horn synapse — receptor subtypes, tolerance and the respiratory-depression liability are worked through in [[opioid-receptors-mechanism]]. Tricyclics and SNRIs help neuropathic pain because they raise serotonin and noradrenaline in exactly this descending pathway. TENS and simply rubbing the skin recruit the segmental gate. None of it touches the peripheral chemistry and fibre traffic covered in [[ghp-pain-fast-slow-pathways]], which is why the two approaches are additive rather than redundant.' },
    { logic: 'Where it is examined', detail: 'Two questions come round again and again. First, the order of the descending stations and their transmitters: periaqueductal grey, then raphe magnus with serotonin, then enkephalin in the dorsal horn. Second, referred pain — you will be given shoulder tip pain, or jaw and ulnar arm pain, and asked for the segment. Map the classics against [[dermatomes-spinal-nerves]] and read them beside the true visceral and parietal distinction in [[ghp-visceral-pain-thermal-sensation]].' },
  ],

  mnemonics: [
    { hook: 'The analgesia ladder runs PAG → RAPHE → DORSAL HORN', expansion: ['Periaqueductal grey lights the fuse', 'Raphe magnus sends serotonin down the dorsolateral funiculus', 'Enkephalin interneurons shut the first synapse before the message leaves the cord', 'Serotonin descends, enkephalin acts locally'] },
    { hook: 'Three opioids, three homes: Enkephalin everywhere, Endorphin from hypothalamus and pituitary, Dynorphin at kappa', expansion: ['μ is the morphine receptor: analgesia, euphoria, respiratory depression', 'β-endorphin is cut from POMC, the same precursor as ACTH', 'Naloxone reverses all of them'] },
  ],

  traps: [
    {
      questionCategory: 'Where opioid analgesia is generated',
      wrongInstinct: 'Morphine works mainly by numbing the nociceptor in the injured tissue',
      rightAnswer: 'It acts centrally — periaqueductal grey, raphe and the dorsal horn synapse, largely by presynaptic inhibition of Aδ and C terminals',
      why: 'Peripheral endings keep firing perfectly well on morphine; the signal is stopped at the first synapse and the descending brake is turned up, which is also why the limbic effect can leave the sensation intact while removing the distress.',
    },
    {
      questionCategory: 'Mechanism of referred pain',
      wrongInstinct: 'Pain is referred because the visceral nerve physically travels out to the skin it is felt in',
      rightAnswer: 'Visceral and cutaneous afferents converge on the same second-order neurons within one cord segment, and the brain defaults to the interpretation it has practised most',
      why: 'The referral map follows the embryological segment the organ developed from, not its adult position — which is exactly why the diaphragm reports to the shoulder tip through C3–C5.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Focal electrical stimulation of a midbrain nucleus in a patient with intractable cancer pain produces near-complete analgesia, which is reversed by intravenous naloxone. Stimulation of which structure, and acting through which immediate relay?',
      options: [
        { id: 'a', text: 'Periaqueductal grey, relaying to the nucleus raphe magnus' },
        { id: 'b', text: 'Ventral posterolateral nucleus of the thalamus, relaying to somatosensory cortex' },
        { id: 'c', text: 'Substantia gelatinosa, relaying to lamina V' },
        { id: 'd', text: 'Nucleus reticularis paragigantocellularis, relaying to the intralaminar thalamic nuclei' },
      ],
      answerId: 'a',
      explanation: 'The analgesia system begins in the periaqueductal and periventricular grey, which projects to the nucleus raphe magnus. Raphe axons then descend in the dorsolateral funiculus and release serotonin onto dorsal horn enkephalin interneurons, so the analgesia is opioid-mediated and naloxone-reversible. VPL is a relay for the ascending sensory message rather than a brake on it, and the substantia gelatinosa is the target of the system, not its origin.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A child bangs her elbow and immediately rubs the skin around it, which visibly eases her distress. The most direct explanation is that:',
      options: [
        { id: 'a', text: 'Rubbing disperses bradykinin from the injured tissue' },
        { id: 'b', text: 'Large Aβ fibre input excites segmental inhibitory interneurons that damp Aδ and C transmission' },
        { id: 'c', text: 'Tactile input is conducted faster and reaches cortex first, so pain fibres find the cortex refractory' },
        { id: 'd', text: 'Mechanical stimulation triggers β-endorphin release from the anterior pituitary' },
      ],
      answerId: 'b',
      explanation: 'This is gate control. Collaterals of large myelinated mechanoreceptor afferents excite inhibitory interneurons in the same and adjacent segments of the dorsal horn, reducing transmission from the small pain fibres entering there. The same principle is used deliberately in TENS and in implanted dorsal column stimulators. Cortical refractoriness is not a real mechanism, and although stress can release β-endorphin, the effect here is immediate and segmental.',
      tests: 'lecture',
    },
    {
      id: 'q3',
      stem: 'Two days after an uncomplicated laparoscopic cholecystectomy a patient complains of persistent pain at the tip of the right shoulder. Examination of the shoulder is normal. What is the explanation?',
      options: [
        { id: 'a', text: 'Brachial plexus traction from arm positioning during surgery' },
        { id: 'b', text: 'Referred pain from diaphragmatic irritation, carried by the phrenic nerve from C3 to C5' },
        { id: 'c', text: 'True visceral pain from the gallbladder bed, referred at T7 to T9' },
        { id: 'd', text: 'Rotator cuff inflammation provoked by immobility' },
      ],
      answerId: 'b',
      explanation: 'Residual gas and blood irritating the under-surface of the diaphragm stimulate afferents in the phrenic nerve, which arises from C3 to C5. Those afferents converge on second-order neurons that also serve the C4 dermatome over the shoulder tip, so the brain places the pain there. The examination is normal precisely because the shoulder itself is healthy. Gallbladder pain is referred at T7 to T9 to the epigastrium and right inferior scapular region, not to the shoulder tip.',
      tests: 'exam',
    },
  ],
};

export default ghpPainModulationAnalgesia;
