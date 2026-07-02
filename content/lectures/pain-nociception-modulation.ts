import type { Lecture } from '../../lib/types';

export const painNociceptionModulation: Lecture = {
  id: 'pain-nociception-modulation',
  title: 'Pain: Nociception & Modulation',
  system: 'neuro',
  source: 'L10 — Ascending Sensory Pathways',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L10 Pain' },
    { kind: 'mechanism', label: 'Gate control & descending inhibition' },
    { kind: 'exam', label: 'Fast vs slow pain; referred pain' },
  ],

  highYield: [
    '**Pain begins at NOCICEPTORS (free nerve endings) that detect actual/potential tissue damage and travel in TWO fibre types: fast, myelinated Aδ fibres carry SHARP, well-localised "FIRST" pain; slow, unmyelinated C fibres carry DULL, aching, poorly-localised "SECOND" pain.** Both enter the dorsal horn and ascend in the spinothalamic (anterolateral) system ([[somatosensory-ascending-pathways]]).',
    '**GATE CONTROL THEORY: non-painful large-fibre (Aβ, touch) input activates inhibitory interneurons in the dorsal horn that "close the gate" on nociceptive transmission — which is why rubbing or TENS relieves pain.** The spinal cord is thus a modifiable relay, not a passive wire.',
    '**A powerful DESCENDING analgesic system runs from the periaqueductal grey (PAG) → rostral ventromedial medulla (raphe) → dorsal horn, using SEROTONIN, NORADRENALINE and ENDOGENOUS OPIOIDS (endorphins/enkephalins) to inhibit pain transmission.** OPIOID drugs and some antidepressants (SNRIs) act on this system; this is the basis of "stress-induced analgesia".',
    '**REFERRED PAIN: visceral and somatic afferents converge on the same dorsal-horn neurons, so visceral pain is felt in a somatic dermatome — classically cardiac pain to the left arm/jaw, diaphragmatic irritation to the shoulder tip (C3–5).** Distinguish NOCICEPTIVE pain (tissue injury) from NEUROPATHIC pain (nerve/pathway damage — burning, shooting, with allodynia); sensitisation lowers thresholds (hyperalgesia/allodynia).',
    '**The take-home: Aδ = fast sharp, C = slow dull pain, both via the spinothalamic tract; the gate (large-fibre input) and descending PAG–raphe (serotonin/noradrenaline/opioid) systems modulate it; convergence explains referred pain.** This underpins analgesic pharmacology — opioids, the pain ladder and TENS.',
  ],

  mechanism: {
    title: 'Nociceptors (Aδ fast/C slow) → dorsal horn → spinothalamic; gated locally and by descending PAG–raphe',
    steps: [
      { id: 's1', label: 'Nociceptors: Aδ = fast sharp (first) pain; C = slow dull (second) pain', emphasis: 'key' },
      { id: 's2', label: 'Dorsal horn → spinothalamic (anterolateral) tract → thalamus → cortex', emphasis: 'key' },
      { id: 's3', label: 'Gate control: large-fibre (touch) input closes the gate (rub/TENS relieves)', emphasis: 'key' },
      { id: 's4', label: 'Descending PAG → raphe → dorsal horn (serotonin/noradrenaline/opioids) inhibits', emphasis: 'key' },
      { id: 's5', label: 'Convergence → referred pain; sensitisation → hyperalgesia/allodynia' },
    ],
  },

  examFindings: [
    { sign: 'Sharp, well-localised "first" pain', mechanism: 'Fast myelinated Aδ nociceptive fibres', significance: 'key' },
    { sign: 'Dull, aching, poorly localised "second" pain', mechanism: 'Slow unmyelinated C nociceptive fibres', significance: 'key' },
    { sign: 'Relief of pain by rubbing the area or TENS', mechanism: 'Gate control — large-fibre input closes the dorsal-horn gate', significance: 'key' },
    { sign: 'Cardiac pain felt in the left arm/jaw', mechanism: 'Referred pain (visceral–somatic convergence in the dorsal horn)', significance: 'key' },
    { sign: 'Opioid/SNRI analgesia', mechanism: 'Activation of the descending PAG–raphe inhibitory system', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The fibres carrying fast, sharp pain', meaning: 'Myelinated Aδ fibres' },
    { clue: 'The theory explaining relief of pain by touch/rubbing', meaning: 'Gate control (large-fibre inhibition in the dorsal horn)' },
    { clue: 'The origin of the descending analgesic system', meaning: 'The periaqueductal grey (→ raphe → dorsal horn)' },
    { clue: 'Why cardiac pain is felt in the arm', meaning: 'Referred pain from visceral–somatic convergence' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Pain physiology is the rationale for analgesia — opioids and SNRIs act on the descending PAG–raphe system, and TENS/rubbing exploit gate control. Referred pain (cardiac → arm, diaphragm → shoulder) is a key clinical pattern. Nociceptors are the receptors of [[sensory-receptors-transduction]]; the ascending route is the spinothalamic tract of [[somatosensory-ascending-pathways]]; opioid/monoamine pharmacology links to [[cns-neurotransmission-systems]].' },
  ],

  mnemonics: [
    { hook: 'Pain fibres: "Aδ = A-delta = fast/sharp (first); C = slow/dull (second)"', expansion: ['Both via spinothalamic tract', 'Aδ myelinated, C unmyelinated'] },
    { hook: 'Modulation: "Gate (touch) below, PAG–raphe (opioid/5-HT/NA) from above"', expansion: ['Rub/TENS closes the gate', 'Opioids act on descending system'] },
  ],

  traps: [
    {
      questionCategory: 'Referred pain mechanism',
      wrongInstinct: 'Referred pain means the pain has physically spread to the distant site',
      rightAnswer: 'Referred pain arises because visceral and somatic afferents CONVERGE on the same dorsal-horn (spinothalamic) neurons, so the brain misattributes visceral pain to the somatic dermatome — no pain has spread; the heart (T1–T4) refers to the arm/jaw, the diaphragm (C3–5) to the shoulder tip',
      why: 'Understanding referred pain as central convergence, not physical spread, explains its fixed dermatomal patterns and why it localises the affected viscus by its segmental innervation — vital for recognising, e.g., cardiac pain.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Sharp, well-localised "first" pain is conducted by which fibres, and dull, aching "second" pain by which?',
      options: [
        { id: 'a', text: 'C fibres (first) and Aδ fibres (second)' },
        { id: 'b', text: 'Aδ fibres (first) and C fibres (second)' },
        { id: 'c', text: 'Aβ fibres (first) and Aδ fibres (second)' },
        { id: 'd', text: 'Both by C fibres' },
      ],
      answerId: 'b',
      explanation: 'Fast, myelinated Aδ fibres carry sharp, well-localised "first" pain; slow, unmyelinated C fibres carry dull, aching, poorly-localised "second" pain. Both synapse in the dorsal horn and ascend in the spinothalamic tract.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Rubbing a stubbed toe reduces the pain. The best explanation is:',
      options: [
        { id: 'a', text: 'The descending periaqueductal grey pathway' },
        { id: 'b', text: 'Gate control — large-fibre (touch) input inhibits nociceptive transmission in the dorsal horn' },
        { id: 'c', text: 'Release of adrenaline' },
        { id: 'd', text: 'Blockade of the spinothalamic tract' },
      ],
      answerId: 'b',
      explanation: 'Gate control theory: non-painful large-fibre (Aβ, touch) input activates inhibitory interneurons in the dorsal horn that "close the gate" on nociceptive (Aδ/C) transmission — the basis of rubbing an injury and of TENS. The PAG mediates descending, not touch-triggered, modulation.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default painNociceptionModulation;
