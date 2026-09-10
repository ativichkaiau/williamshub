import type { Lecture } from '../../lib/types';

export const ghpSynapticTransmission: Lecture = {
  id: 'ghp-synaptic-transmission',
  title: 'Synaptic Transmission: EPSPs, IPSPs and the Decision to Fire',
  system: 'neuro',
  source: 'Ch 45 — Organization of the Nervous System; Synapses & Transmitters',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Neuroscience' },
    { kind: 'lecture', label: 'Ch 45 Synapses' },
    { kind: 'mechanism', label: 'Ca²⁺-triggered quantal release' },
    { kind: 'exam', label: 'Summation · axon hillock threshold' },
  ],

  highYield: [
    '**Two synapse types, and the exam only cares about the trade-off.** **Electrical synapses** are gap-junction connexons — direct cytoplasmic current, **bidirectional, essentially zero delay**, used where speed and **synchrony** matter (cardiac and smooth muscle, some interneuron networks). **Chemical synapses** insert a transmitter step that costs **~0.5 ms** and forces **one-way conduction**, and buy in exchange amplification, sign inversion (an excitatory input can be converted to inhibition) and modifiability. The nervous system pays for computation with delay.',
    '**Release is excitation–secretion coupling, and calcium is the coupler.** The arriving action potential depolarises the terminal, opens **voltage-gated Ca²⁺ channels**, and Ca²⁺ floods in down a very steep gradient. Ca²⁺ binds the release machinery and vesicles fuse. Voltage alone releases nothing: remove extracellular Ca²⁺, or raise **Mg²⁺** so it competes at the channel, and the presynaptic spike is **unchanged in size while transmitter release collapses**. Release is steeply dependent on Ca²⁺ entry, not linearly — a small fall in Ca²⁺ produces a large fall in output.',
    '**Transmitter leaves in quanta — packets, not a stream.** Each vesicle discharges its entire contents at once, so postsynaptic responses come in integer multiples of one vesicle. At rest, vesicles fuse spontaneously at low rate, producing **miniature postsynaptic potentials of uniform size** — the direct evidence that the quantum is the vesicle. One knob discharging once yields only about **0.5–1 mV** of depolarisation.',
    '**EPSP versus IPSP is a matter of which ion the receptor lets move.** **EPSP**: receptor-gated channels admit **Na⁺**, driving the soma up from its resting **−65 mV**. **IPSP**: channels admit **Cl⁻** inward or let **K⁺** out, pulling toward the Cl⁻ equilibrium of about **−70 mV** or the K⁺ equilibrium of **−90 mV**, so the trace hyperpolarises to roughly −70 to −75 mV. Both are **graded, local and decremental** — they are not action potentials, they simply add.',
    '**Adding is done in two currencies: space and time.** **Spatial summation** — many knobs at different points on the dendritic tree fire simultaneously. **Temporal summation** — one knob fires repeatedly within the **~15 ms** over which its own EPSP decays. Since threshold needs roughly **20 mV** of depolarisation (−65 mV up to about **−45 mV**) and each knob contributes 0.5–1 mV, **something like 40–80 terminals must act together**. A neuron held short of threshold is **facilitated**, not silent — it fires more easily on the next input.',
    '**The axon hillock and initial segment are the decision point, and this is the most examined fact in the chapter.** The initial segment carries roughly **seven times the density of voltage-gated Na⁺ channels** of the soma, so its threshold sits near **−45 mV** against roughly **−30 mV** for the soma membrane. Whatever the geography of the inputs, the spike is born there. **Synaptic fatigue** then guards the system: drive a pathway hard and output falls within seconds as the releasable vesicle pool empties — the mechanism that helps a seizure focus exhaust itself.',
  ],

  mechanism: {
    title: 'Calcium converts voltage into secretion; the hillock counts the votes',
    steps: [
      { id: 's1', label: 'Action potential invades the presynaptic terminal and depolarises it' },
      { id: 's2', label: 'Voltage-gated Ca²⁺ channels open → Ca²⁺ enters down a steep gradient', emphasis: 'key' },
      { id: 's3', label: 'Ca²⁺ binds the release machinery → vesicles fuse → quantal transmitter release', emphasis: 'key' },
      { id: 's4', label: 'Transmitter diffuses the 20–30 nm cleft and binds postsynaptic receptors', emphasis: 'key' },
      { id: 's5', label: 'Na⁺ channels open → EPSP of 0.5–1 mV per knob; Cl⁻ in or K⁺ out → IPSP', emphasis: 'key' },
      { id: 's6', label: 'Sum read at the initial segment: reach −45 mV and it fires, fall short and it decays', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'A fixed delay of about 0.5 ms is added at every synapse in a pathway', mechanism: 'Ca²⁺ entry, vesicle fusion, diffusion and receptor gating are chemical steps with irreducible cost', significance: 'key' },
    { sign: 'Signals cross from presynaptic to postsynaptic neuron only, never in reverse', mechanism: 'Transmitter is stored only in the terminal and receptors sit only on the postsynaptic membrane', significance: 'key' },
    { sign: 'A single presynaptic terminal discharging alone almost never fires the neuron', mechanism: 'One knob gives 0.5–1 mV, but about 20 mV is needed to reach threshold', significance: 'key' },
    { sign: 'Raising extracellular Mg²⁺ abolishes transmission while the presynaptic action potential is unchanged', mechanism: 'Mg²⁺ competes with Ca²⁺ at the presynaptic channel, so the voltage step no longer triggers secretion', significance: 'key' },
    { sign: 'High-frequency stimulation makes the postsynaptic response fade within seconds', mechanism: 'Synaptic fatigue — the readily releasable vesicle pool empties faster than it is refilled', significance: 'key' },
    { sign: 'Small spontaneous postsynaptic potentials of uniform amplitude at rest', mechanism: 'Random fusion of single vesicles — each miniature potential is one quantum', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Junction with no measurable delay through which current passes in both directions', meaning: 'Electrical synapse — gap-junction connexons, used where synchrony beats computation' },
    { clue: 'Ion whose entry into the terminal converts membrane voltage into transmitter secretion', meaning: 'Ca²⁺ — the excitation–secretion coupler; Mg²⁺ competitively blocks it' },
    { clue: 'Postsynaptic potential that is graded, decremental and roughly 0.5–1 mV per terminal', meaning: 'EPSP — a local Na⁺ current, not an action potential' },
    { clue: 'Hyperpolarisation from −65 mV to about −70 or −75 mV after an inhibitory input', meaning: 'IPSP — Cl⁻ influx toward its −70 mV equilibrium, and/or K⁺ efflux toward −90 mV' },
    { clue: 'Several terminals at different sites on the dendritic tree discharging together', meaning: 'Spatial summation' },
    { clue: 'One terminal discharging repeatedly within the 15 ms decay of its own EPSP', meaning: 'Temporal summation — the slow EPSP tail is what makes it possible' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'This is the layer where computation actually happens, and where almost every centrally acting drug and toxin lands. Anything that alters Ca²⁺ entry alters output steeply; anything that shifts the balance of EPSP against IPSP shifts the seizure threshold. Read it as the mechanism behind the three-level architecture in [[ghp-nervous-system-organisation]], and note that the postsynaptic potentials here obey completely different rules from the all-or-none spike in [[ghp-nerve-action-potential]] — graded and decremental against fixed and regenerative.' },
    { logic: 'Where it is examined', detail: 'Three stems recur: the Mg²⁺ or low-Ca²⁺ experiment with an unchanged presynaptic spike, spatial against temporal summation, and why firing starts at the initial segment rather than under the biggest input. The peripheral synapse where the same machinery is stripped to essentials and made one-to-one: [[ghp-neuromuscular-junction]]. What is actually in the vesicle and what happens at the receptor: [[ghp-neurotransmitters-receptors]].' },
  ],

  mnemonics: [
    { hook: 'Arrive, Admit, Attach, Answer — AP arrives, Ca²⁺ admitted, vesicle attaches and fuses, receptor answers', expansion: ['Total cost about 0.5 ms of synaptic delay', 'No calcium, no release — voltage alone secretes nothing'] },
    { hook: 'SPACE and TIME: Spatial = many knobs at once, Temporal = one knob in quick succession', expansion: ['Both add graded EPSPs toward the −45 mV threshold', 'The 15 ms EPSP tail is what makes temporal summation possible', 'Short of threshold is facilitated, not silent'] },
  ],

  traps: [
    {
      questionCategory: 'Where the neuron actually decides to fire',
      wrongInstinct: 'The spike begins wherever the strongest excitatory input lands, because that is where the membrane is most depolarised',
      rightAnswer: 'The spike begins at the axon hillock and initial segment, whose Na⁺ channel density is about seven times that of the soma, giving it a threshold near −45 mV against about −30 mV for the soma',
      why: 'Discriminator: the decision is made at the lowest-threshold patch of membrane, not at the site of the largest EPSP.',
    },
    {
      questionCategory: 'What synaptic fatigue is',
      wrongInstinct: 'Fatigue means the postsynaptic neuron has entered a prolonged refractory state',
      rightAnswer: 'Fatigue is mainly presynaptic — the readily releasable vesicle pool is exhausted faster than it can be refilled',
      why: 'Discriminator: the presynaptic action potential is unaltered; only the quantity of transmitter released falls, which is why fatigue protects against runaway excitation such as a seizure.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A nerve terminal is bathed in a solution containing markedly raised magnesium. Recordings show a presynaptic action potential of normal amplitude and time course, but the postsynaptic response has almost disappeared. What is the mechanism?',
      options: [
        { id: 'a', text: 'Magnesium blocks the postsynaptic transmitter receptors' },
        { id: 'b', text: 'Magnesium competes with calcium at presynaptic voltage-gated channels, so vesicle fusion is never triggered' },
        { id: 'c', text: 'Magnesium destroys transmitter within the synaptic cleft' },
        { id: 'd', text: 'Magnesium hyperpolarises the postsynaptic membrane below the reversal potential' },
      ],
      answerId: 'b',
      explanation: 'Release is excitation–secretion coupling, and calcium is the coupler. Depolarisation of the terminal is only useful because it opens voltage-gated calcium channels; magnesium competes there. The intact presynaptic spike is the giveaway that the lesion lies between voltage and secretion rather than in excitability, in the cleft, or postsynaptically. The same logic explains why a modest fall in extracellular calcium causes a disproportionately large fall in transmitter output.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Excitatory inputs summate to bring the soma of a spinal motor neuron from −65 mV to −48 mV with no action potential. A further small input takes it to −44 mV and the cell fires. Which property best explains why the spike is initiated at the initial segment rather than at the soma?',
      options: [
        { id: 'a', text: 'The initial segment is unmyelinated and therefore has lower membrane resistance' },
        { id: 'b', text: 'The initial segment carries roughly seven times the density of voltage-gated Na⁺ channels of the soma, giving it a threshold near −45 mV' },
        { id: 'c', text: 'Inhibitory terminals on the dendrites prevent the soma from ever reaching threshold' },
        { id: 'd', text: 'Excitatory transmitter is released preferentially onto the initial segment' },
      ],
      answerId: 'b',
      explanation: 'The initial segment is the decision point because it is the lowest-threshold patch of membrane in the neuron, at about −45 mV against roughly −30 mV for the soma, and the reason is Na⁺ channel density. This is why the geography of the inputs does not determine where the spike starts, and why roughly 80–95 per cent of terminals can sit out on the dendrites without changing where the output is generated.',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'A single presynaptic terminal on a spinal motor neuron discharges once. The recorded EPSP is 0.7 mV and decays over about 15 ms. Which conclusion follows?',
      options: [
        { id: 'a', text: 'A single discharge is normally sufficient to bring the neuron to threshold' },
        { id: 'b', text: 'Roughly 20 mV of depolarisation is required, so tens of terminals must discharge together, or one must discharge repeatedly within the decay of its own EPSP' },
        { id: 'c', text: 'The EPSP will propagate undiminished along the dendrite as an all-or-none event' },
        { id: 'd', text: 'Repeated discharge of the same terminal cannot add, because each EPSP is all-or-none' },
      ],
      answerId: 'b',
      explanation: 'This is the arithmetic of summation. Threshold at the initial segment sits about 20 mV above the −65 mV somatic resting potential, so at 0.5–1 mV per knob some 40–80 terminals must act together — spatial summation — or one terminal must fire again before the 15 ms tail of its previous EPSP has decayed, which is temporal summation. EPSPs are graded and decremental, not all-or-none, which is precisely what allows them to add.',
      tests: 'lecture',
    },
  ],
};

export default ghpSynapticTransmission;
