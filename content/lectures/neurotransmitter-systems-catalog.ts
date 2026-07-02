import type { Lecture } from '../../lib/types';

export const neurotransmitterSystemsCatalog: Lecture = {
  id: 'neurotransmitter-systems-catalog',
  title: 'Neurotransmitter Systems: A Catalogue',
  system: 'physiology',
  source: 'L6 — Neurotransmitters & Neuromodulators',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'L6 Neurotransmitters' },
    { kind: 'mechanism', label: 'Excitatory vs inhibitory' },
    { kind: 'exam', label: 'Glutamate & GABA' },
  ],

  highYield: [
    '**Neurotransmitters group into small-molecule classes — amino acids, biogenic amines (monoamines), acetylcholine — and larger neuropeptides, plus gases (NO).** The same transmitter can be excitatory or inhibitory depending on its RECEPTOR, but each system has characteristic roles worth knowing.',
    '**The main amino-acid transmitters are the workhorses: GLUTAMATE is the principal EXCITATORY transmitter of the CNS (AMPA/NMDA receptors — NMDA underlies plasticity), while GABA (brain) and GLYCINE (spinal cord/brainstem) are the principal INHIBITORY transmitters (opening Cl⁻ channels → hyperpolarisation).** Benzodiazepines and barbiturates act on the GABA-A receptor.',
    '**Biogenic amines modulate mood, arousal and movement: DOPAMINE (reward, movement — deficient in Parkinson\'s), NORADRENALINE (arousal, sympathetic), SEROTONIN/5-HT (mood, sleep, appetite), and HISTAMINE (wakefulness).** These monoamine systems are the targets of many psychiatric and neurological drugs (SSRIs, L-DOPA, antipsychotics).',
    '**Acetylcholine acts at TWO receptor families: NICOTINIC (ligand-gated cation channels — NMJ and autonomic ganglia) and MUSCARINIC (G-protein-coupled — parasympathetic target organs and CNS).** Neuropeptides (e.g. substance P, endorphins) act as slower neuromodulators, often co-released with a classical transmitter.',
    '**The unifying rule: whether a synapse excites or inhibits depends on the RECEPTOR and the ion it gates, not the transmitter alone.** Glutamate→cation channels depolarise (EPSP); GABA/glycine→Cl⁻ channels hyperpolarise (IPSP) — the balance of these ([[synaptic-transmission-epsp-ipsp]]) determines whether a neuron reaches threshold. This catalogue underlies neuropharmacology across the curriculum.',
  ],

  mechanism: {
    title: 'Classes (amino acids, amines, ACh, peptides); receptor decides excite vs inhibit',
    steps: [
      { id: 's1', label: 'Classes: amino acids, biogenic amines, acetylcholine, neuropeptides, gases', emphasis: 'key' },
      { id: 's2', label: 'Glutamate = main EXCITATORY (AMPA/NMDA); NMDA → plasticity', emphasis: 'key' },
      { id: 's3', label: 'GABA (brain) + glycine (cord) = main INHIBITORY (Cl⁻ channels)', emphasis: 'key' },
      { id: 's4', label: 'Amines: dopamine, noradrenaline, serotonin, histamine (modulatory)' },
      { id: 's5', label: 'ACh: nicotinic (ionotropic) + muscarinic (GPCR); receptor sets the effect', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Main excitatory neurotransmitter of the CNS', mechanism: 'Glutamate (AMPA/NMDA receptors)', significance: 'key' },
    { sign: 'Main inhibitory transmitter of the brain vs spinal cord', mechanism: 'GABA (brain) and glycine (cord) — open Cl⁻ channels', significance: 'key' },
    { sign: 'Dopamine deficiency causing a movement disorder', mechanism: 'Nigrostriatal dopamine loss (Parkinsonism)', significance: 'supportive' },
    { sign: 'Benzodiazepine enhancing inhibition', mechanism: 'Positive modulation of the GABA-A receptor', significance: 'supportive' },
    { sign: 'Same transmitter excitatory at one synapse, inhibitory at another', mechanism: 'Effect determined by the receptor/ion channel', significance: 'key' },
  ],

  investigations: [
    { clue: 'The principal excitatory CNS neurotransmitter', meaning: 'Glutamate' },
    { clue: 'The principal inhibitory transmitters of brain and spinal cord', meaning: 'GABA (brain) and glycine (spinal cord)' },
    { clue: 'The two acetylcholine receptor families', meaning: 'Nicotinic (ionotropic) and muscarinic (G-protein-coupled)' },
    { clue: 'What determines whether a transmitter excites or inhibits', meaning: 'The receptor and the ion it gates' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'This catalogue underlies the excitation/inhibition balance of [[synaptic-transmission-epsp-ipsp]] and the transmitter life cycle of [[neurotransmitters-types-lifecycle]]; glutamate/NMDA drives the plasticity of [[synaptic-plasticity-ltp]]; ACh runs the [[neuromuscular-junction-transmission]] and autonomic signalling ([[autonomic-neurotransmitters-receptors]]). The monoamine and GABA systems are the targets of most CNS drugs.' },
  ],

  mnemonics: [
    { hook: 'Main players: "Glutamate excites; GABA/Glycine inhibit"', expansion: ['Glutamate → cation channels (EPSP)', 'GABA/glycine → Cl⁻ channels (IPSP)'] },
    { hook: 'ACh "two receptors": Nicotinic (ionotropic) + Muscarinic (GPCR)', expansion: ['Nicotinic = NMJ/ganglia', 'Muscarinic = parasympathetic organs/CNS'] },
  ],

  traps: [
    {
      questionCategory: 'What makes a synapse excitatory or inhibitory',
      wrongInstinct: 'A neurotransmitter is intrinsically either excitatory or inhibitory',
      rightAnswer: 'The SAME transmitter can be excitatory or inhibitory depending on the RECEPTOR and the ion channel it controls — e.g. acetylcholine excites at nicotinic receptors but can inhibit via certain muscarinic receptors; the postsynaptic receptor determines the effect',
      why: 'Attributing a fixed sign to the transmitter ignores receptor diversity; the ionic consequence (depolarising cation entry vs hyperpolarising Cl⁻ entry) — set by the receptor — is what makes a synapse excitatory or inhibitory.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The principal excitatory and inhibitory neurotransmitters of the central nervous system are, respectively:',
      options: [
        { id: 'a', text: 'GABA and glutamate' },
        { id: 'b', text: 'Glutamate and GABA' },
        { id: 'c', text: 'Dopamine and serotonin' },
        { id: 'd', text: 'Acetylcholine and glycine' },
      ],
      answerId: 'b',
      explanation: 'Glutamate is the main excitatory CNS transmitter (via AMPA/NMDA receptors), and GABA is the main inhibitory transmitter of the brain (glycine predominates in the spinal cord), opening chloride channels to hyperpolarise.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Acetylcholine can produce different effects at different sites because it acts on:',
      options: [
        { id: 'a', text: 'Only one type of receptor' },
        { id: 'b', text: 'Two receptor families — ionotropic nicotinic and G-protein-coupled muscarinic receptors' },
        { id: 'c', text: 'Voltage-gated sodium channels' },
        { id: 'd', text: 'Chloride channels only' },
      ],
      answerId: 'b',
      explanation: 'Acetylcholine acts on nicotinic receptors (ligand-gated cation channels at the NMJ and autonomic ganglia) and on muscarinic receptors (G-protein-coupled, at parasympathetic targets and in the CNS); the receptor determines the response.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default neurotransmitterSystemsCatalog;
