import type { Lecture } from '../../lib/types';

export const synapticTransmissionEpspIpsp: Lecture = {
  id: 'synaptic-transmission-epsp-ipsp',
  title: 'Postsynaptic Receptors, EPSPs/IPSPs & Summation',
  system: 'physiology',
  source: 'L6 — Neurotransmitters & Neuromodulators',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'L6 Neurotransmitters' },
    { kind: 'mechanism', label: 'Integration to threshold' },
    { kind: 'exam', label: 'Ionotropic vs metabotropic' },
  ],

  highYield: [
    '**Two postsynaptic receptor types.** **Ionotropic (ligand-gated ion channels)** open directly → **fast (ms), brief** responses (nicotinic ACh, glutamate AMPA/NMDA, GABA-A). **Metabotropic (GPCRs)** act via **G proteins and second messengers** → **slower, longer, modulatory** responses (muscarinic ACh, GABA-B, most monoamine receptors).',
    '**EPSP (excitatory postsynaptic potential)** = a **depolarising** graded potential — e.g. glutamate opening Na⁺-permeable channels → moves the cell toward threshold. **IPSP (inhibitory postsynaptic potential)** = a **hyperpolarising** graded potential — e.g. GABA/glycine opening **Cl⁻ (in)** or **K⁺ (out)** channels → moves the cell away from threshold.',
    '**These are graded potentials, not action potentials:** they vary in size with stimulus strength and **decay with distance**. A single EPSP is usually too small to fire the neuron.',
    '**Summation decides the output.** **Temporal summation** = rapid EPSPs from one synapse add up over time; **spatial summation** = EPSPs from many synapses add together. When the net depolarisation at the **axon hillock reaches threshold, an AP fires** ([[action-potential-genesis]]).',
    '**The neuron integrates EPSPs minus IPSPs.** Inhibition (IPSPs) can veto excitation. The balance at the axon hillock (the trigger zone with the lowest threshold) determines whether — and how often — the neuron fires: **the neuron is a decision-maker**, not a simple relay.',
  ],

  mechanism: {
    title: 'Sum EPSPs − IPSPs → threshold at the hillock',
    steps: [
      { id: 's1', label: 'Ionotropic = fast/direct; metabotropic = slow/2nd messenger', emphasis: 'key' },
      { id: 's2', label: 'EPSP = depolarising (glutamate→Na⁺ in)', emphasis: 'key' },
      { id: 's3', label: 'IPSP = hyperpolarising (GABA/glycine → Cl⁻ in / K⁺ out)', emphasis: 'key' },
      { id: 's4', label: 'Graded, decremental; summate temporally + spatially' },
      { id: 's5', label: 'Net at axon hillock reaches threshold → AP', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Fast, brief postsynaptic current', mechanism: 'Ionotropic (ligand-gated ion channel)', significance: 'key' },
    { sign: 'Slow, prolonged, modulatory response', mechanism: 'Metabotropic (GPCR, second messenger)', significance: 'key' },
    { sign: 'GABA-A opening Cl⁻ channels → hyperpolarisation', mechanism: 'IPSP (inhibitory)', significance: 'key' },
    { sign: 'Many small EPSPs adding to reach threshold', mechanism: 'Spatial/temporal summation', significance: 'supportive' },
    { sign: 'Benzodiazepines enhance GABA-A inhibition', mechanism: 'Increased Cl⁻ influx → more IPSP (sedation)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Receptor giving a fast, direct postsynaptic response', meaning: 'Ionotropic (ligand-gated ion channel)' },
    { clue: 'A hyperpolarising postsynaptic potential', meaning: 'IPSP (inhibitory)' },
    { clue: 'Adding inputs from many synapses at once', meaning: 'Spatial summation' },
    { clue: 'Site where summed potentials trigger the AP', meaning: 'Axon hillock (trigger zone)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'EPSP/IPSP balance is the target of CNS drugs: benzodiazepines/barbiturates boost GABA-A inhibition; NMDA glutamate signalling underlies plasticity ([[synaptic-plasticity-ltp]]). NT handling and release: [[neurotransmitters-types-lifecycle]].' },
  ],

  mnemonics: [
    { hook: 'EPSP = Excitatory/dEPolarise; IPSP = Inhibitory/hyPerpolarise', expansion: ['Glutamate EPSP; GABA/glycine IPSP'] },
    { hook: 'Ionotropic = Instant (ion channel); metabotropic = Modulatory (GPCR)', expansion: ['Sum at the hillock → AP'] },
  ],

  traps: [
    {
      questionCategory: 'EPSP/IPSP vs action potential',
      wrongInstinct: 'Each EPSP is an all-or-none action potential',
      rightAnswer: 'EPSPs/IPSPs are GRADED, decremental potentials that summate; an all-or-none AP is generated only when their sum reaches threshold at the axon hillock',
      why: 'Postsynaptic potentials vary in size and decay with distance; the AP is the fixed-amplitude output once threshold is crossed.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Opening of GABA-A receptor Cl⁻ channels on a neuron produces:',
      options: [
        { id: 'a', text: 'An excitatory postsynaptic potential (depolarisation)' },
        { id: 'b', text: 'An inhibitory postsynaptic potential (hyperpolarisation)' },
        { id: 'c', text: 'An action potential' },
        { id: 'd', text: 'Neurotransmitter release' },
      ],
      answerId: 'b',
      explanation: 'GABA-A opens Cl⁻ channels; Cl⁻ influx hyperpolarises the cell, producing an IPSP that moves it away from threshold (inhibition). Benzodiazepines enhance this.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A neuron fires an action potential when:',
      options: [
        { id: 'a', text: 'Any single EPSP occurs' },
        { id: 'b', text: 'The summed EPSPs minus IPSPs depolarise the axon hillock to threshold' },
        { id: 'c', text: 'A metabotropic receptor is activated' },
        { id: 'd', text: 'An IPSP reaches threshold' },
      ],
      answerId: 'b',
      explanation: 'The neuron integrates excitatory and inhibitory inputs by temporal and spatial summation; only when the net depolarisation at the axon hillock reaches threshold is an AP triggered.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default synapticTransmissionEpspIpsp;
