import type { Lecture } from '../../lib/types';
import { LTP_MECHANISM } from '../../lib/figures';

export const synapticPlasticityLtp: Lecture = {
  id: 'synaptic-plasticity-ltp',
  title: 'Synaptic Plasticity: LTP, LTD & Memory',
  system: 'physiology',
  source: 'L8 — Synaptic Plasticity',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'L8 Synaptic Plasticity' },
    { kind: 'mechanism', label: 'NMDA · LTP' },
    { kind: 'exam', label: 'Early vs late LTP' },
  ],

  highYield: [
    '**Synaptic plasticity = activity-dependent change in synaptic strength** — the cellular basis of learning and memory. **Long-term potentiation (LTP)** strengthens a synapse; **long-term depression (LTD)** weakens it. Studied classically in the **hippocampus**.',
    '**The NMDA receptor is a coincidence detector.** At rest its channel is **blocked by Mg²⁺**. It opens only when **BOTH** conditions are met: **glutamate is bound** (presynaptic activity) **AND** the postsynaptic cell is **depolarised** (usually by AMPA receptors) enough to **expel the Mg²⁺**. Then the NMDA channel lets **Ca²⁺ IN** — the trigger for plasticity.',
    '**This is "Hebbian" ("cells that fire together, wire together"):** LTP requires coincident pre- and postsynaptic activity, giving associative learning.',
    '**Early LTP (induction, minutes–hours):** the **Ca²⁺** influx activates **CaMKII** (and PKC), which **inserts more AMPA receptors** into the postsynaptic membrane and increases their conductance → a stronger response, **without new protein synthesis**.',
    '**Late LTP (maintenance, hours–days):** persistent signalling activates **CREB → new gene transcription and protein synthesis → structural changes (new/enlarged synapses)** → long-lasting strengthening = long-term memory. **Alzheimer amyloid-β impairs glutamate handling and disrupts LTP**, linking plasticity to memory loss.',
  ],

  mechanism: {
    title: 'Coincidence → Ca²⁺ → strengthen (early → late)',
    steps: [
      { id: 's1', label: 'NMDA blocked by Mg²⁺ at rest', emphasis: 'key' },
      { id: 's2', label: 'Glutamate + depolarisation → Mg²⁺ expelled → Ca²⁺ IN', emphasis: 'key' },
      { id: 's3', label: 'Early LTP: Ca²⁺→CaMKII → more AMPA receptors', emphasis: 'key' },
      { id: 's4', label: 'Late LTP: CREB → transcription/protein synthesis → new synapses' },
      { id: 's5', label: 'LTD weakens; Aβ (Alzheimer) disrupts LTP' },
    ],
  },

  examFindings: [
    { sign: 'NMDA channel needs glutamate AND depolarisation', mechanism: 'Coincidence detector (Mg²⁺ block relieved by depolarisation)', significance: 'key' },
    { sign: 'Ca²⁺ influx through NMDA triggers LTP', mechanism: 'Ca²⁺ → CaMKII → AMPA receptor insertion', significance: 'key' },
    { sign: 'Early LTP without new protein synthesis', mechanism: 'Post-translational (AMPA trafficking/phosphorylation)', significance: 'supportive' },
    { sign: 'Late LTP requires CREB and transcription', mechanism: 'New proteins/synapses → lasting memory', significance: 'key' },
    { sign: 'Amyloid-β impairs LTP', mechanism: 'Disrupted glutamate handling (Alzheimer)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Receptor acting as a coincidence detector for LTP', meaning: 'NMDA receptor (Mg²⁺-blocked, Ca²⁺-permeable)' },
    { clue: 'Ion entering through NMDA to trigger plasticity', meaning: 'Ca²⁺' },
    { clue: 'Kinase mediating early LTP', meaning: 'CaMKII' },
    { clue: 'Transcription factor for late LTP', meaning: 'CREB' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Plasticity underlies learning, memory, and their failure in Alzheimer disease and after stroke; NMDA/glutamate signalling is a drug target (memantine). Builds on synaptic transmission ([[synaptic-transmission-epsp-ipsp]]) and Ca²⁺ signalling ([[second-messenger-systems]]).' },
  ],

  mnemonics: [
    { hook: 'NMDA needs "glutamate + depolarisation" to expel Mg²⁺ → Ca²⁺ in', expansion: ['Coincidence detector ("fire together, wire together")'] },
    { hook: 'Early LTP = more AMPA (CaMKII); Late LTP = new proteins (CREB)', expansion: ['Minutes vs days'] },
  ],

  traps: [
    {
      questionCategory: 'Why NMDA needs two signals',
      wrongInstinct: 'The NMDA receptor opens as soon as glutamate binds, like AMPA',
      rightAnswer: 'NMDA needs glutamate AND postsynaptic depolarisation to expel the Mg²⁺ block; only then does Ca²⁺ enter to trigger LTP',
      why: 'This dual requirement makes NMDA a coincidence detector — the molecular basis of associative (Hebbian) plasticity.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The NMDA receptor is described as a "coincidence detector" because it opens fully only when:',
      options: [
        { id: 'a', text: 'Glutamate binds, regardless of membrane potential' },
        { id: 'b', text: 'Glutamate binds AND the postsynaptic membrane is depolarised (expelling the Mg²⁺ block)' },
        { id: 'c', text: 'The cell is hyperpolarised' },
        { id: 'd', text: 'GABA binds' },
      ],
      answerId: 'b',
      explanation: 'At rest Mg²⁺ blocks the NMDA channel. Only coincident glutamate binding plus depolarisation removes the Mg²⁺, allowing Ca²⁺ entry to trigger LTP — a Hebbian coincidence detector.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The transition from early to late long-term potentiation specifically requires:',
      options: [
        { id: 'a', text: 'Only insertion of existing AMPA receptors' },
        { id: 'b', text: 'New gene transcription and protein synthesis (CREB-dependent)' },
        { id: 'c', text: 'GABA-A receptor activation' },
        { id: 'd', text: 'Blockade of NMDA receptors' },
      ],
      answerId: 'b',
      explanation: 'Late LTP (maintenance) depends on CREB-driven transcription and new protein synthesis producing structural synaptic changes; early LTP relies on post-translational AMPA-receptor trafficking without new proteins.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Long-term potentiation', svg: LTP_MECHANISM, caption: 'NMDA coincidence detection (glutamate + depolarisation → Ca²⁺) → early LTP (CaMKII, AMPA) → late LTP (CREB, new proteins).' },
  ],
};

export default synapticPlasticityLtp;
