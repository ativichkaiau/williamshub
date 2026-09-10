import type { Lecture } from '../../lib/types';

export const ghpNeurotransmittersReceptors: Lecture = {
  id: 'ghp-neurotransmitters-receptors',
  title: 'Neurotransmitters and Their Receptors',
  system: 'neuro',
  source: 'Ch 45 — Organization of the Nervous System; Synapses & Transmitters',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Neuroscience' },
    { kind: 'lecture', label: 'Ch 45 Transmitters' },
    { kind: 'mechanism', label: 'Ionotropic vs metabotropic' },
    { kind: 'exam', label: 'The receptor sets the sign' },
  ],

  highYield: [
    '**Transmitters split into two classes that differ in where they are made, and everything else follows from that.** **Small-molecule rapid transmitters** — ACh, glutamate, GABA, glycine, noradrenaline, dopamine, serotonin, histamine — are synthesised **in the cytosol of the terminal itself**, loaded into vesicles that are **recycled locally thousands of times**, and act within **milliseconds**. **Neuropeptides** are made on ribosomes **in the soma**, processed through the Golgi, carried down by axonal transport, and their vesicles are **used once and destroyed**. Because peptides are expensive they are released in **far smaller quantities**, and they compensate by being **enormously more potent and far longer acting** — seconds to months, including changes in receptor number and synapse structure.',
    '**Learn the small molecules by their job, not as a list.** **Glutamate** is the workhorse excitatory transmitter of the CNS; **GABA** is the dominant inhibitory transmitter above the brainstem; **glycine** is the dominant inhibitory transmitter of **cord and brainstem** — and, awkwardly for revision, also the obligatory **co-agonist at the NMDA receptor**. **ACh** is generally excitatory but is the standing counter-example. The monoamines — **noradrenaline** from locus coeruleus, **dopamine** from substantia nigra and midbrain, **serotonin** from the raphe nuclei — are diffuse modulatory systems, mostly metabotropic and mostly slow.',
    '**Excitatory or inhibitory is a property of the receptor, not of the transmitter. This is the single most examined idea in the chapter.** The transmitter carries a message; the receptor decides what it means. **ACh at the nicotinic receptor** opens a cation channel and **depolarises skeletal muscle**; the **same ACh at the cardiac M2 receptor** opens K⁺ channels through a G protein and **hyperpolarises the sinus node**. Same molecule, opposite sign, different receptor. Dopamine repeats the trick — **D1 couples to Gs, D2 to Gi**.',
    '**Ionotropic and metabotropic receptors are two different timescales serving two different purposes.** **Ionotropic** receptors **are themselves the ion channel**: ligand binds, pore opens in **under a millisecond**, effect over in **milliseconds** — nicotinic ACh, AMPA and NMDA, GABA-A and glycine (both Cl⁻ channels). This is fast point-to-point signalling. **Metabotropic** receptors couple through **G proteins to second messengers**: latency of **tens to hundreds of milliseconds**, effects lasting **seconds to minutes**, and reach far beyond ion flux — enzyme activation, altered receptor number, altered gene transcription. Fast information travels ionotropically; **state and mood are set metabotropically**.',
    '**The Cl⁻ channels explain most sedative pharmacology.** **GABA-A** and **glycine** receptors are ionotropic Cl⁻ channels, and the entire sedative-hypnotic shelf converges on GABA-A: **benzodiazepines raise the frequency of channel opening, barbiturates raise its duration**, with ethanol and propofol as further allosteric modulators. **Strychnine** blocks glycine and releases spinal motor neurons from inhibition — generalised spasms with **consciousness preserved**, which is why it is not a seizure. **GABA-B**, by contrast, is metabotropic (baclofen).',
    '**Removal, not release, is where most drugs act.** Three routes clear the cleft: **diffusion**, **enzymatic destruction**, and **active reuptake** into the terminal or into glia. Reuptake dominates for **glutamate, GABA and all three monoamines**. Enzymatic destruction **within the cleft** is essentially unique to **ACh**, split by acetylcholinesterase in about a millisecond — which is exactly why anticholinesterases and organophosphates behave as they do. Transporters are therefore drug targets in their own right: **SSRIs and tricyclics, cocaine and amphetamine** all raise transmitter action without touching synthesis, packaging or receptor number. Peptides have no reuptake at all — cleared slowly by peptidases and diffusion, which is the mechanistic reason their effects outlast the stimulus.',
  ],

  mechanism: {
    title: 'Where it is made sets the timescale; which receptor it meets sets the sign',
    steps: [
      { id: 's1', label: 'Small molecule made in terminal cytosol; peptide made in soma and transported down the axon', emphasis: 'key' },
      { id: 's2', label: 'Vesicles fuse — small-molecule vesicles recycled locally, peptide vesicles used once' },
      { id: 's3', label: 'Ligand binds: the receptor subtype, not the transmitter identity, sets excitation or inhibition', emphasis: 'key' },
      { id: 's4', label: 'Ionotropic route: pore opens in under 1 ms, effect finished in milliseconds', emphasis: 'key' },
      { id: 's5', label: 'Metabotropic route: G protein and second messenger, latency tens of ms, effect seconds to minutes', emphasis: 'key' },
      { id: 's6', label: 'Removal by reuptake, enzymatic destruction or diffusion resets the cleft — the main drug target', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Acetylcholine contracts skeletal muscle but slows the sinoatrial node', mechanism: 'Nicotinic receptor is a cation channel; cardiac M2 couples through a G protein to K⁺ efflux — the receptor sets the sign', significance: 'key' },
    { sign: 'Strychnine poisoning causes generalised spasms with consciousness preserved', mechanism: 'Glycine blockade releases cord and brainstem motor neurons from inhibition; the cortex is not seizing', significance: 'key' },
    { sign: 'Benzodiazepines, barbiturates, ethanol and propofol all sedate and all converge on one receptor', mechanism: 'Allosteric modulation of the GABA-A Cl⁻ channel — benzodiazepines alter opening frequency, barbiturates alter opening duration', significance: 'key' },
    { sign: 'Organophosphate exposure produces sustained depolarisation at the motor endplate', mechanism: 'Cholinesterase inhibition; acetylcholine is the transmitter whose clearance depends on destruction within the cleft', significance: 'key' },
    { sign: 'Cocaine and amphetamine act with no change in transmitter synthesis, vesicle loading or receptor number', mechanism: 'They target the reuptake transporters, showing removal is an independent control point', significance: 'key' },
    { sign: 'A peptide-mediated response outlasts the stimulus by minutes to hours', mechanism: 'No reuptake mechanism exists, and second-messenger cascades alter receptor number and gene expression', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Transmitter synthesised in the cytosol of the terminal and packaged into locally recycled vesicles', meaning: 'A small-molecule rapid transmitter — ACh, glutamate, GABA, glycine or a monoamine' },
    { clue: 'Transmitter made on ribosomes in the soma and carried down the axon in vesicles used only once', meaning: 'A neuropeptide — tiny quantities, high potency, action lasting seconds to months' },
    { clue: 'Receptor that is itself the ion channel', meaning: 'Ionotropic — opens in under a millisecond, effect measured in milliseconds' },
    { clue: 'Receptor coupled to a G protein and a second-messenger cascade', meaning: 'Metabotropic — latency of tens of milliseconds, effect of seconds to minutes, can change receptor number and gene transcription' },
    { clue: 'Dominant inhibitory transmitter of the spinal cord and brainstem', meaning: 'Glycine — GABA dominates above the brainstem; glycine is also the co-agonist required at the NMDA receptor' },
    { clue: 'The one major transmitter cleared principally by destruction inside the cleft', meaning: 'Acetylcholine, split by acetylcholinesterase in roughly a millisecond; everything else relies on reuptake' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Neuropharmacology is this module with brand names attached. Every clinically useful central drug does one of four things: mimic or block a receptor, modulate it allosterically, alter release, or interfere with removal — and the last of those is the largest group. Knowing which receptor a transmitter is meeting tells you the sign of the effect; knowing how it is cleared tells you which drug class can act on it. The release machinery that puts the transmitter in the cleft: [[ghp-synaptic-transmission]]. The wider survey of central transmitter systems and their anatomy: [[cns-neurotransmitters]].' },
    { logic: 'Where it is examined', detail: 'The favourite stem gives one transmitter producing opposite effects at two sites and asks why — the answer is always the receptor, never the transmitter. Second favourite is a drug that changes transmission with synthesis, packaging and receptor number all normal, which points at a transporter. Third is the acetylcholinesterase exception. The peripheral version of the same receptor logic, worth learning alongside: [[autonomic-neurotransmitters-receptors]]. The signalling machinery underneath the metabotropic route: [[drug-receptor-signal-transduction]].' },
  ],

  mnemonics: [
    { hook: 'Made local, act fast — made central, act long', expansion: ['Small molecules: synthesised in the terminal, vesicles recycled, milliseconds', 'Peptides: synthesised in the soma, vesicles used once, seconds to months', 'Cost explains the dose — peptides are released in tiny amounts and are hugely potent'] },
    { hook: 'The receptor decides, not the transmitter', expansion: ['ACh on nicotinic excites skeletal muscle', 'ACh on cardiac M2 slows the sinus node', 'Dopamine on D1 couples to Gs, on D2 to Gi'] },
  ],

  traps: [
    {
      questionCategory: 'What makes a synapse excitatory or inhibitory',
      wrongInstinct: 'Glutamate is an excitatory transmitter and GABA an inhibitory one, so the identity of the transmitter determines the response',
      rightAnswer: 'The postsynaptic receptor determines the response; the transmitter only delivers the message',
      why: 'Discriminator: acetylcholine depolarises skeletal muscle through a nicotinic cation channel and hyperpolarises the sinus node through M2-coupled K⁺ channels.',
    },
    {
      questionCategory: 'How transmitter action is terminated',
      wrongInstinct: 'Transmitters are generally broken down by enzymes sitting in the synaptic cleft',
      rightAnswer: 'Enzymatic destruction in the cleft is essentially unique to acetylcholine; glutamate, GABA and the monoamines are cleared by reuptake transporters, and peptides simply diffuse away',
      why: 'Discriminator: cocaine, SSRIs and tricyclics act on transporters, whereas neostigmine and the organophosphates act on cholinesterase — the drug class tells you the removal mechanism.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Acetylcholine depolarises skeletal muscle at the neuromuscular junction but hyperpolarises pacemaker cells of the sinoatrial node. What accounts for the opposite effects?',
      options: [
        { id: 'a', text: 'Two structurally different isoforms of acetylcholine are released at the two sites' },
        { id: 'b', text: 'Acetylcholinesterase is present in the cleft at only one of the two sites' },
        { id: 'c', text: 'The postsynaptic receptors differ — a nicotinic cation channel at the endplate, an M2 receptor coupled through a G protein to K⁺ channels at the node' },
        { id: 'd', text: 'Calcium entry into the presynaptic terminal is greater at the neuromuscular junction' },
      ],
      answerId: 'c',
      explanation: 'The sign of a synaptic response is a property of the receptor, not of the transmitter. Nicotinic receptors are ionotropic cation channels, so acetylcholine depolarises; cardiac M2 receptors are metabotropic and open K⁺ channels, so the same molecule hyperpolarises. There is only one acetylcholine, cholinesterase is present at both sites, and presynaptic calcium entry governs how much is released, not what the response will be.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A drug markedly and persistently enhances serotonergic transmission. Serotonin synthesis, vesicular loading, presynaptic calcium entry and postsynaptic receptor number are all unchanged. Which mechanism best fits?',
      options: [
        { id: 'a', text: 'Inhibition of an enzyme that degrades serotonin within the synaptic cleft' },
        { id: 'b', text: 'Blockade of the presynaptic reuptake transporter' },
        { id: 'c', text: 'Increased calcium entry into the presynaptic terminal' },
        { id: 'd', text: 'Direct agonism at postsynaptic serotonin receptors' },
      ],
      answerId: 'b',
      explanation: 'Removal is a control point in its own right, and for the monoamines removal means active reuptake. Blocking the transporter prolongs and intensifies transmitter action without altering any step in synthesis, packaging, release or receptor expression — the profile described. Option a is the acetylcholine exception being misapplied: monoamines are not destroyed in the cleft, and option c is excluded because calcium entry is stated to be normal.',
      tests: 'treatment',
    },
    {
      id: 'q3',
      stem: 'Compared with a small-molecule rapid transmitter, a neuropeptide transmitter is:',
      options: [
        { id: 'a', text: 'Released in larger quantities and acts more briefly' },
        { id: 'b', text: 'Synthesised in the cytosol of the terminal and packaged into locally recycled vesicles' },
        { id: 'c', text: 'Synthesised in the soma, transported down the axon, released in far smaller amounts, and active for far longer' },
        { id: 'd', text: 'Cleared from the cleft mainly by a dedicated high-affinity reuptake transporter' },
      ],
      answerId: 'c',
      explanation: 'The site of synthesis dictates the whole profile. Peptides are made on ribosomes in the soma, processed in the Golgi and shipped by axonal transport in vesicles that are used once, so they are metabolically expensive, released in small amounts, and correspondingly potent. With no reuptake mechanism they are cleared slowly by peptidases and diffusion, and their second-messenger effects on receptor number and synaptic structure can persist for seconds to months. Options b and d describe small-molecule transmitters.',
      tests: 'lecture',
    },
  ],
};

export default ghpNeurotransmittersReceptors;
