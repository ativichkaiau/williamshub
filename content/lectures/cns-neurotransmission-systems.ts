import type { Lecture } from '../../lib/types';

export const cnsNeurotransmissionSystems: Lecture = {
  id: 'cns-neurotransmission-systems',
  title: 'CNS Neurotransmission Systems',
  system: 'neuro',
  source: 'L7 — Neurotransmission',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L7 Neurotransmission' },
    { kind: 'mechanism', label: 'Excitation vs inhibition' },
    { kind: 'exam', label: 'Glutamate & GABA' },
  ],

  highYield: [
    '**Chemical synaptic transmission is the basis of CNS signalling: an action potential → Ca²⁺-triggered vesicular release of neurotransmitter → binding to postsynaptic receptors → an excitatory (EPSP) or inhibitory (IPSP) postsynaptic potential** (the cellular mechanics are in EHP — [[synaptic-transmission-epsp-ipsp]]). Whether a synapse excites or inhibits depends on the RECEPTOR and the ion it gates.',
    '**The workhorse amino-acid transmitters: GLUTAMATE is the main EXCITATORY transmitter of the CNS (AMPA/NMDA receptors — NMDA drives plasticity/learning); GABA (brain) and GLYCINE (spinal cord/brainstem) are the main INHIBITORY transmitters, opening Cl⁻ channels to hyperpolarise.** Benzodiazepines/barbiturates enhance GABA-A inhibition.',
    '**The modulatory MONOAMINE systems arise from small brainstem/basal nuclei and project widely: DOPAMINE (reward, movement — substantia nigra/VTA), NORADRENALINE (arousal/attention — locus coeruleus), SEROTONIN (mood/sleep — raphe nuclei), plus ACETYLCHOLINE (basal forebrain — attention/memory) and HISTAMINE (arousal).** These "tune" whole networks and are the targets of most psychiatric and neurological drugs.',
    '**Receptors are of two broad kinds: IONOTROPIC (ligand-gated ion channels — fast, e.g. AMPA, GABA-A, nicotinic) and METABOTROPIC (G-protein-coupled — slower, modulatory, e.g. most dopamine/serotonin/muscarinic receptors).** Transmitter action is terminated by REUPTAKE (transporters), enzymatic breakdown (e.g. acetylcholinesterase) or diffusion.',
    '**Clinical leverage: this is the pharmacological substrate of the whole nervous system — L-DOPA (dopamine) for Parkinson, SSRIs (serotonin) for depression, benzodiazepines (GABA) for anxiety/seizures, anticholinesterases for myasthenia/Alzheimer.** The excitation/inhibition balance (glutamate vs GABA) governs excitability and seizures; detailed neurotransmitter biology is in EHP ([[neurotransmitter-systems-catalog]]).',
  ],

  mechanism: {
    title: 'AP → Ca²⁺ release → receptor (excite/inhibit); glutamate/GABA + modulatory monoamines',
    steps: [
      { id: 's1', label: 'Transmission: AP → Ca²⁺ → vesicle release → receptor → EPSP/IPSP', emphasis: 'key' },
      { id: 's2', label: 'Glutamate = main EXCITATORY (AMPA/NMDA); GABA/glycine = main INHIBITORY (Cl⁻)', emphasis: 'key' },
      { id: 's3', label: 'Monoamines (dopamine, noradrenaline, serotonin), ACh, histamine = modulatory', emphasis: 'key' },
      { id: 's4', label: 'Ionotropic (fast, channels) vs metabotropic (slow, GPCR) receptors' },
      { id: 's5', label: 'Terminated by reuptake/enzymes; the basis of CNS drug action' },
    ],
  },

  examFindings: [
    { sign: 'Main excitatory CNS transmitter', mechanism: 'Glutamate (AMPA/NMDA receptors)', significance: 'key' },
    { sign: 'Main inhibitory transmitters (brain vs cord)', mechanism: 'GABA (brain) and glycine (spinal cord) — open Cl⁻ channels', significance: 'key' },
    { sign: 'Benzodiazepine enhancing inhibition/seizure control', mechanism: 'Positive modulation of GABA-A receptors', significance: 'supportive' },
    { sign: 'Widespread modulation from a small brainstem nucleus', mechanism: 'Monoamine system (e.g. locus coeruleus noradrenaline)', significance: 'supportive' },
    { sign: 'Fast vs slow synaptic responses', mechanism: 'Ionotropic (channel) vs metabotropic (GPCR) receptors', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The principal excitatory CNS neurotransmitter', meaning: 'Glutamate' },
    { clue: 'The principal inhibitory transmitters of brain and cord', meaning: 'GABA (brain) and glycine (spinal cord)' },
    { clue: 'The two broad receptor classes', meaning: 'Ionotropic (ligand-gated channels) and metabotropic (G-protein-coupled)' },
    { clue: 'How transmitter action is terminated', meaning: 'Reuptake, enzymatic degradation, or diffusion' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'CNS neurotransmission is the pharmacological substrate of neurology/psychiatry — dopamine (Parkinson — [[levodopa-and-adjuncts]]), serotonin (antidepressants), GABA (benzodiazepines/AEDs), ACh (myasthenia/Alzheimer). The excitation/inhibition (glutamate/GABA) balance governs seizures. The cellular mechanics and transmitter catalogue are in EHP ([[synaptic-transmission-epsp-ipsp]], [[neurotransmitter-systems-catalog]]); arousal transmitters link to [[reticular-activating-system-consciousness]].' },
  ],

  mnemonics: [
    { hook: '"Glutamate excites; GABA/Glycine inhibit"; monoamines modulate', expansion: ['Glutamate → cation channels (EPSP)', 'GABA/glycine → Cl⁻ (IPSP)'] },
    { hook: 'Receptors: "Ionotropic = fast (channel); Metabotropic = slow (GPCR)"', expansion: ['NMDA → plasticity', 'Reuptake/enzymes end the signal'] },
  ],

  traps: [
    {
      questionCategory: 'What determines excitation vs inhibition',
      wrongInstinct: 'A neurotransmitter is intrinsically excitatory or inhibitory',
      rightAnswer: 'The SAME transmitter can excite or inhibit depending on the RECEPTOR and the ion it controls — e.g. acetylcholine excites at nicotinic receptors but can inhibit via some muscarinic receptors; the postsynaptic receptor, not the transmitter alone, sets the effect',
      why: 'Attributing a fixed sign to the transmitter ignores receptor diversity; the ionic consequence (depolarising cation entry vs hyperpolarising Cl⁻ entry), set by the receptor, is what makes a synapse excitatory or inhibitory.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The principal excitatory and inhibitory neurotransmitters of the central nervous system are, respectively:',
      options: [
        { id: 'a', text: 'GABA and glutamate' },
        { id: 'b', text: 'Glutamate and GABA' },
        { id: 'c', text: 'Dopamine and acetylcholine' },
        { id: 'd', text: 'Serotonin and glycine' },
      ],
      answerId: 'b',
      explanation: 'Glutamate is the main excitatory CNS transmitter (AMPA/NMDA receptors) and GABA is the main inhibitory transmitter of the brain (glycine predominates in the spinal cord), opening chloride channels to hyperpolarise.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Fast excitatory synaptic transmission via a ligand-gated ion channel (e.g. an AMPA receptor) is an example of:',
      options: [
        { id: 'a', text: 'A metabotropic (G-protein-coupled) response' },
        { id: 'b', text: 'An ionotropic response' },
        { id: 'c', text: 'Electrical (gap-junction) transmission' },
        { id: 'd', text: 'Neurotransmitter reuptake' },
      ],
      answerId: 'b',
      explanation: 'Ionotropic receptors are ligand-gated ion channels that open directly when the transmitter binds, producing fast responses (e.g. AMPA for glutamate, GABA-A for GABA). Metabotropic receptors act more slowly via G proteins and second messengers.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default cnsNeurotransmissionSystems;
