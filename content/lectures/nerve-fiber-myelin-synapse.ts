import type { Lecture } from '../../lib/types';

export const nerveFiberMyelinSynapse: Lecture = {
  id: 'nerve-fiber-myelin-synapse',
  title: 'Nerve Fibres, Myelin, Synapses & Nerve Organization',
  system: 'histology',
  source: 'L8 — Nervous Tissue',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Histology' },
    { kind: 'lecture', label: 'L8 Nervous Tissue' },
    { kind: 'mechanism', label: 'Saltatory conduction' },
    { kind: 'exam', label: 'Node of Ranvier · CT layers' },
  ],

  highYield: [
    '**Myelin = concentric wraps of glial plasma membrane** (Schwann in PNS, oligodendrocyte in CNS) that insulate the axon. Gaps between adjacent myelinating cells are the **nodes of Ranvier**, where voltage-gated Na⁺ channels cluster.',
    '**Saltatory conduction:** the action potential "jumps" node-to-node → **faster conduction**. Speed rises with **greater myelination and larger axon diameter**. Demyelination (MS, Guillain-Barré) slows or blocks conduction.',
    '**The synapse transmits the signal.** At a **chemical synapse**, an action potential opens presynaptic Ca²⁺ channels → **neurotransmitter release from vesicles** → binds postsynaptic receptors. The **neuromuscular junction** (ACh onto the motor end plate) is the prototype (see [[skeletal-muscle-sarcomere]]).',
    '**Peripheral nerve connective-tissue sheaths (outer → inner):** **epineurium** (wraps the whole nerve), **perineurium** (wraps each fascicle; forms the blood–nerve barrier), **endoneurium** (surrounds each axon). Mnemonic layering is a classic exam item.',
    '**Grey vs white matter; ganglia.** **Grey matter** = neuron cell bodies (+ synapses); **white matter** = myelinated tracts. **Ganglia** = collections of neuronal cell bodies in the PNS (dorsal root = sensory/pseudounipolar; autonomic = motor), each soma ringed by **satellite cells**.',
  ],

  mechanism: {
    title: 'Insulate → jump → synapse',
    steps: [
      { id: 's1', label: 'Myelin insulates; nodes of Ranvier expose Na⁺ channels', emphasis: 'key' },
      { id: 's2', label: 'Saltatory conduction: signal jumps node-to-node (fast)', emphasis: 'key' },
      { id: 's3', label: 'Synapse: Ca²⁺ → vesicle NT release → receptor' },
      { id: 's4', label: 'Nerve sheaths: Epi- → Peri- → Endoneurium', emphasis: 'key' },
      { id: 's5', label: 'Grey = somata; white = myelinated tracts; ganglia = PNS somata' },
    ],
  },

  examFindings: [
    { sign: 'Gap in the myelin sheath with clustered Na⁺ channels', mechanism: 'Node of Ranvier (saltatory conduction)', significance: 'key' },
    { sign: 'Faster conduction in a thicker, more myelinated axon', mechanism: 'Myelination + diameter increase velocity', significance: 'key' },
    { sign: 'Perineurium forming the blood–nerve barrier', mechanism: 'Fascicular connective-tissue sheath', significance: 'supportive' },
    { sign: 'Slowed conduction after demyelination', mechanism: 'Loss of insulation (MS/GBS)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Site where the action potential regenerates along a myelinated axon', meaning: 'Node of Ranvier' },
    { clue: 'Connective-tissue layer around one nerve fascicle', meaning: 'Perineurium' },
    { clue: 'Connective-tissue layer around the whole nerve', meaning: 'Epineurium' },
    { clue: 'Ion whose influx triggers neurotransmitter release', meaning: 'Ca²⁺ (presynaptic terminal)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Demyelination (MS = CNS, Guillain-Barré = PNS) slows conduction; nerve sheaths guide regeneration and local anaesthetic access. Synaptic transmission is the target of most neuropharmacology. Glia providing myelin: [[neuroglia-cns-pns]].' },
  ],

  mnemonics: [
    { hook: 'Nerve sheaths outside-in: "Epi, Peri, Endo" (whole → fascicle → axon)', expansion: ['Perineurium = blood–nerve barrier'] },
    { hook: 'Saltatory = "salta" (to jump) node-to-node', expansion: ['More myelin + bigger axon = faster'] },
  ],

  traps: [
    {
      questionCategory: 'Nerve connective-tissue layers',
      wrongInstinct: 'The endoneurium wraps the entire nerve',
      rightAnswer: 'Epineurium wraps the WHOLE nerve; perineurium wraps each FASCICLE; endoneurium surrounds each AXON',
      why: 'Outer-to-inner order (Epi → Peri → Endo) is a favourite exam item — endoneurium is the innermost, around single axons.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Rapid saltatory conduction along a myelinated axon depends on the presence of:',
      options: [
        { id: 'a', text: 'Continuous myelin with no interruptions' },
        { id: 'b', text: 'Nodes of Ranvier where the action potential regenerates' },
        { id: 'c', text: 'Nissl bodies in the axon' },
        { id: 'd', text: 'Satellite cells along the axon' },
      ],
      answerId: 'b',
      explanation: 'The action potential jumps between nodes of Ranvier (gaps in myelin with clustered Na⁺ channels), speeding conduction. Continuous myelin without nodes would prevent regeneration of the impulse.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The connective-tissue layer that surrounds an individual nerve fascicle and forms the blood–nerve barrier is the:',
      options: [
        { id: 'a', text: 'Epineurium' },
        { id: 'b', text: 'Perineurium' },
        { id: 'c', text: 'Endoneurium' },
        { id: 'd', text: 'Epimysium' },
      ],
      answerId: 'b',
      explanation: 'The perineurium wraps each fascicle and forms the blood–nerve barrier. Epineurium wraps the whole nerve; endoneurium surrounds individual axons (epimysium is a muscle sheath).',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default nerveFiberMyelinSynapse;
