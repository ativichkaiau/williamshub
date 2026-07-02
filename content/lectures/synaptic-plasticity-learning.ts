import type { Lecture } from '../../lib/types';

export const synapticPlasticityLearning: Lecture = {
  id: 'synaptic-plasticity-learning',
  title: 'Synaptic Plasticity & Learning',
  system: 'neuro',
  source: 'L7 — Neurotransmission',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L7 Plasticity' },
    { kind: 'mechanism', label: 'LTP, LTD & NMDA receptor' },
    { kind: 'exam', label: 'Hebbian plasticity; NMDA coincidence' },
  ],

  highYield: [
    '**Synaptic PLASTICITY — the activity-dependent change in synaptic strength — is the cellular basis of learning and memory. The best-studied form is LONG-TERM POTENTIATION (LTP): brief HIGH-frequency stimulation of a synapse produces a LASTING increase in its strength.** Its counterpart is LONG-TERM DEPRESSION (LTD), a lasting DECREASE with low-frequency activity; both are prominent at glutamatergic hippocampal synapses ([[limbic-system-emotion-memory]]).',
    '**LTP is HEBBIAN ("cells that fire together, wire together") and depends on the NMDA receptor acting as a COINCIDENCE DETECTOR: at rest its channel is BLOCKED by Mg²⁺; only when the postsynaptic cell is DEPOLARISED (relieving the Mg²⁺ block) AND glutamate is bound does the NMDA channel open and admit Ca²⁺.** So LTP needs SIMULTANEOUS pre- (glutamate) and post-synaptic (depolarisation) activity.',
    '**The Ca²⁺ that enters through NMDA receptors is the trigger: a LARGE, fast Ca²⁺ rise activates kinases (e.g. CaMKII) → INSERTION of more AMPA receptors and increased sensitivity → LTP (stronger synapse); a SMALLER, slower Ca²⁺ rise activates phosphatases → REMOVAL of AMPA receptors → LTD (weaker synapse).** Persistent LTP recruits gene transcription and the growth of new synaptic connections.',
    '**Plasticity also underlies DEVELOPMENT and RECOVERY: experience shapes circuits in CRITICAL PERIODS, and after injury the brain reorganises ("neuroplasticity"), the basis of rehabilitation. NMDA-receptor signalling is double-edged — excessive Ca²⁺ entry causes EXCITOTOXICITY in stroke ([[brain-energy-metabolism]]), and NMDA/glutamate systems are drug targets (e.g. memantine).**',
    '**The take-home: LTP (strengthen) and LTD (weaken) are the synaptic substrate of memory; LTP is Hebbian and gated by the NMDA receptor as a coincidence detector (Mg²⁺ block relieved by depolarisation + glutamate → Ca²⁺ in); large Ca²⁺ → LTP (more AMPA), small Ca²⁺ → LTD.** The underlying glutamate synapse is in [[cns-neurotransmission-systems]] and EHP ([[synaptic-transmission-epsp-ipsp]]); memory systems in [[limbic-system-emotion-memory]].',
  ],

  mechanism: {
    title: 'LTP/LTD change synaptic strength; NMDA coincidence detector (Mg²⁺ block relieved by depol + glutamate) → Ca²⁺ → AMPA insertion',
    steps: [
      { id: 's1', label: 'Plasticity = activity-dependent synaptic strength change (basis of memory)', emphasis: 'key' },
      { id: 's2', label: 'LTP = lasting strengthening (high-freq); LTD = lasting weakening (low-freq)', emphasis: 'key' },
      { id: 's3', label: 'NMDA receptor = coincidence detector: Mg²⁺ block relieved by depolarisation + glutamate', emphasis: 'key' },
      { id: 's4', label: 'Ca²⁺ influx via NMDA: large → CaMKII → insert AMPA (LTP); small → phosphatase → remove AMPA (LTD)', emphasis: 'key' },
      { id: 's5', label: 'Underlies learning, critical-period development, recovery; excess Ca²⁺ → excitotoxicity', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Lasting increase in synaptic strength after high-frequency stimulation', mechanism: 'Long-term potentiation (LTP)', significance: 'key' },
    { sign: 'A receptor requiring both glutamate AND postsynaptic depolarisation to open', mechanism: 'NMDA receptor (Mg²⁺-block coincidence detector)', significance: 'key' },
    { sign: 'Ca²⁺-triggered insertion of AMPA receptors', mechanism: 'Expression of LTP (CaMKII pathway)', significance: 'key' },
    { sign: 'Circuit reorganisation after brain injury', mechanism: 'Neuroplasticity (basis of rehabilitation)', significance: 'supportive' },
    { sign: 'Neuronal death from excessive NMDA Ca²⁺ entry in stroke', mechanism: 'Glutamate excitotoxicity', significance: 'key' },
  ],

  investigations: [
    { clue: 'The lasting strengthening of a synapse with use', meaning: 'Long-term potentiation (LTP)' },
    { clue: 'The receptor that acts as a coincidence detector for LTP', meaning: 'The NMDA receptor (relieved of Mg²⁺ block by depolarisation)' },
    { clue: 'The ion whose influx triggers LTP/LTD', meaning: 'Calcium (Ca²⁺, via the NMDA receptor)' },
    { clue: 'The principle "cells that fire together, wire together"', meaning: 'Hebbian plasticity' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Synaptic plasticity is the mechanism of learning and memory (hippocampal LTP — [[limbic-system-emotion-memory]]) and of neuroplastic recovery that underpins rehabilitation. The NMDA receptor\'s coincidence detection explains associative learning, and its Ca²⁺ signalling is double-edged — the same pathway drives excitotoxic death in stroke ([[brain-energy-metabolism]]) and is a drug target (memantine). It builds on the glutamate synapse of [[cns-neurotransmission-systems]] and EHP synaptic physiology ([[synaptic-transmission-epsp-ipsp]]).' },
  ],

  mnemonics: [
    { hook: '"LTP strengthens, LTD depresses"; NMDA = coincidence detector', expansion: ['Hebbian: fire together, wire together', 'Needs glutamate + depolarisation'] },
    { hook: 'Ca²⁺ dose: "BIG Ca²⁺ → LTP (add AMPA); small Ca²⁺ → LTD (remove AMPA)"', expansion: ['Mg²⁺ blocks NMDA at rest', 'Excess Ca²⁺ → excitotoxicity'] },
  ],

  traps: [
    {
      questionCategory: 'Why the NMDA receptor is a coincidence detector',
      wrongInstinct: 'The NMDA receptor opens as soon as glutamate binds, like an ordinary ligand-gated channel',
      rightAnswer: 'The NMDA receptor needs TWO things at once: glutamate binding AND postsynaptic DEPOLARISATION to expel the Mg²⁺ ion that blocks its pore at rest — only then does it open and admit Ca²⁺; this dual requirement makes it a "coincidence detector" that reports simultaneous pre- and post-synaptic activity (the molecular basis of Hebbian LTP)',
      why: 'The voltage-dependent Mg²⁺ block is precisely what lets the NMDA receptor detect coincident activity and drive associative strengthening — miss it and LTP\'s associativity and input-specificity make no sense.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The NMDA receptor is described as a "coincidence detector" for long-term potentiation because it opens only when:',
      options: [
        { id: 'a', text: 'Glutamate binds, regardless of membrane potential' },
        { id: 'b', text: 'Glutamate binds AND the postsynaptic membrane is depolarised (relieving the Mg²⁺ block)' },
        { id: 'c', text: 'The cell is hyperpolarised' },
        { id: 'd', text: 'GABA binds the receptor' },
      ],
      answerId: 'b',
      explanation: 'At rest the NMDA channel is blocked by Mg²⁺. It opens only when glutamate is bound AND the postsynaptic cell is depolarised enough to expel the Mg²⁺, admitting Ca²⁺. Requiring simultaneous presynaptic (glutamate) and postsynaptic (depolarisation) activity makes it a coincidence detector — the basis of Hebbian LTP.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Long-term potentiation (LTP), the leading cellular model of memory, is expressed largely through:',
      options: [
        { id: 'a', text: 'Removal of AMPA receptors from the synapse' },
        { id: 'b', text: 'A Ca²⁺-triggered increase in AMPA receptors and synaptic strength' },
        { id: 'c', text: 'Permanent loss of the presynaptic terminal' },
        { id: 'd', text: 'Conversion of glutamate synapses to GABA synapses' },
      ],
      answerId: 'b',
      explanation: 'LTP is triggered by Ca²⁺ entering through NMDA receptors, which activates kinases (e.g. CaMKII) that insert additional AMPA receptors and strengthen the synapse. Low-level Ca²⁺ instead activates phosphatases that remove AMPA receptors, producing long-term depression (LTD).',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default synapticPlasticityLearning;
