import type { Lecture } from '../../lib/types';

export const synapticPlasticityLtdMemory: Lecture = {
  id: 'synaptic-plasticity-ltd-memory',
  title: 'Long-Term Depression & the Basis of Memory',
  system: 'physiology',
  source: 'L8 — Synaptic Plasticity',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'L8 Synaptic Plasticity' },
    { kind: 'mechanism', label: 'LTD & memory' },
    { kind: 'exam', label: 'LTP vs LTD' },
  ],

  highYield: [
    '**Synaptic plasticity — the ability of synapses to strengthen or weaken with use — is the cellular basis of learning and memory.** Long-term POTENTIATION (LTP) strengthens synapses ([[synaptic-plasticity-ltp]]); its counterpart, long-term DEPRESSION (LTD), WEAKENS them. Both are needed: memory requires selectively turning some synapses up AND others down.',
    '**The direction of change is set by the pattern/amount of Ca²⁺ entry through NMDA receptors: a LARGE, rapid Ca²⁺ rise (strong high-frequency input) → LTP (insert more AMPA receptors); a SMALL, sustained Ca²⁺ rise (weak low-frequency input) → LTD (remove AMPA receptors).** The same receptor thus drives opposite changes depending on the signal — a Ca²⁺ "code."',
    '**Memory is also organised by TIME: short-term memory relies on transient changes in existing proteins/synaptic strength, whereas long-term memory requires NEW gene transcription and PROTEIN SYNTHESIS (and structural synaptic growth).** This is why consolidating long-term memory can be blocked by protein-synthesis inhibitors but short-term memory is not.',
    '**Hebbian principle ("cells that fire together, wire together"): coincident pre- and post-synaptic activity strengthens a connection** — the NMDA receptor acts as a coincidence detector (needs both glutamate binding AND postsynaptic depolarisation to relieve its Mg²⁺ block). This associativity is what lets networks store associations.',
    '**The hippocampus is central to forming new declarative memories, and LTP/LTD there are the leading models of the synaptic memory trace.** Plasticity also underlies development, recovery after injury, and maladaptive states (chronic pain, addiction). The take-home: memory = experience-dependent, bidirectional (LTP/LTD) change in synaptic strength, consolidated by protein synthesis.',
  ],

  mechanism: {
    title: 'Bidirectional plasticity: Ca²⁺ pattern sets LTP vs LTD; long-term needs protein synthesis',
    steps: [
      { id: 's1', label: 'Plasticity = use-dependent strengthening (LTP) / weakening (LTD)', emphasis: 'key' },
      { id: 's2', label: 'Large fast Ca²⁺ (NMDA) → LTP (add AMPA); small slow Ca²⁺ → LTD (remove AMPA)', emphasis: 'key' },
      { id: 's3', label: 'Short-term = existing proteins; long-term = new transcription/protein synthesis', emphasis: 'key' },
      { id: 's4', label: 'Hebbian: NMDA = coincidence detector (glutamate + depolarisation)', emphasis: 'key' },
      { id: 's5', label: 'Hippocampus = declarative memory; also pain/addiction plasticity' },
    ],
  },

  examFindings: [
    { sign: 'Synaptic strengthening after high-frequency stimulation', mechanism: 'LTP (large NMDA Ca²⁺ → more AMPA receptors)', significance: 'key' },
    { sign: 'Synaptic weakening after prolonged low-frequency stimulation', mechanism: 'LTD (small sustained Ca²⁺ → fewer AMPA receptors)', significance: 'key' },
    { sign: 'Long-term (but not short-term) memory blocked by protein-synthesis inhibitors', mechanism: 'Consolidation requires new protein synthesis', significance: 'key' },
    { sign: 'NMDA receptor requiring both glutamate and depolarisation', mechanism: 'Coincidence detection (Mg²⁺ block relief)', significance: 'supportive' },
    { sign: 'Impaired new declarative memory with hippocampal damage', mechanism: 'Hippocampus in memory formation', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The plasticity that weakens synapses', meaning: 'Long-term depression (LTD)' },
    { clue: 'The signal determining LTP vs LTD', meaning: 'The pattern/magnitude of NMDA-receptor Ca²⁺ entry' },
    { clue: 'What long-term (but not short-term) memory requires', meaning: 'New gene transcription and protein synthesis' },
    { clue: 'The receptor acting as a Hebbian coincidence detector', meaning: 'The NMDA receptor' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'LTD complements the LTP of [[synaptic-plasticity-ltp]] — bidirectional change is what memory needs — and both hinge on NMDA-receptor Ca²⁺ (glutamate system, [[neurotransmitter-systems-catalog]]) and on the synaptic integration of [[synaptic-transmission-epsp-ipsp]]. The protein-synthesis requirement explains memory consolidation; maladaptive plasticity underlies chronic pain and addiction.' },
  ],

  mnemonics: [
    { hook: 'Ca²⁺ code: "big/fast Ca → LTP (up); small/slow Ca → LTD (down)"', expansion: ['LTP adds AMPA receptors', 'LTD removes them'] },
    { hook: 'Memory time: "Short-term = old proteins; Long-term = NEW protein synthesis"', expansion: ['Consolidation blocked by protein-synthesis inhibitors', 'Structural synaptic growth'] },
  ],

  traps: [
    {
      questionCategory: 'Requirements for short- vs long-term memory',
      wrongInstinct: 'All memory formation depends equally on new protein synthesis',
      rightAnswer: 'SHORT-term memory relies on transient modification of EXISTING proteins/synaptic strength, whereas LONG-term memory (consolidation) requires NEW gene transcription and PROTEIN SYNTHESIS — which is why protein-synthesis inhibitors block long-term but not short-term memory',
      why: 'The distinction explains classic experiments and clinical consolidation: interrupting protein synthesis after learning prevents the memory from becoming permanent while leaving immediate recall intact.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Whether a synapse undergoes long-term potentiation or long-term depression is determined mainly by:',
      options: [
        { id: 'a', text: 'The neurotransmitter used' },
        { id: 'b', text: 'The pattern and magnitude of calcium entry through NMDA receptors' },
        { id: 'c', text: 'The axon diameter' },
        { id: 'd', text: 'The resting membrane potential alone' },
      ],
      answerId: 'b',
      explanation: 'A large, rapid NMDA-receptor calcium rise favours LTP (inserting AMPA receptors), whereas a small, sustained rise favours LTD (removing AMPA receptors); the calcium signal is the switch between strengthening and weakening.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A protein-synthesis inhibitor given after learning blocks long-term memory but spares short-term memory because:',
      options: [
        { id: 'a', text: 'Short-term memory does not use neurons' },
        { id: 'b', text: 'Long-term memory consolidation requires new gene transcription and protein synthesis' },
        { id: 'c', text: 'Short-term memory is stored in muscle' },
        { id: 'd', text: 'Long-term memory does not involve synapses' },
      ],
      answerId: 'b',
      explanation: 'Short-term memory depends on transient changes in existing proteins, while long-term memory requires synthesis of new proteins (and structural synaptic change); blocking protein synthesis therefore prevents consolidation but not immediate recall.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default synapticPlasticityLtdMemory;
