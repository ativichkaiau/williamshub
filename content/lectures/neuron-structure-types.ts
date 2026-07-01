import type { Lecture } from '../../lib/types';
import { NEURON_STRUCTURE } from '../../lib/figures';

export const neuronStructureTypes: Lecture = {
  id: 'neuron-structure-types',
  title: 'The Neuron: Structure & Morphological Types',
  system: 'histology',
  source: 'L8 — Nervous Tissue',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Histology' },
    { kind: 'lecture', label: 'L8 Nervous Tissue' },
    { kind: 'mechanism', label: 'Neuron polarity' },
    { kind: 'exam', label: 'Nissl · neuron types' },
  ],

  highYield: [
    '**A neuron has three parts.** **Soma (perikaryon)** = cell body with a large pale euchromatic nucleus + prominent nucleolus and **Nissl bodies** (**RER + free ribosomes**, basophilic). **Dendrites** = receive input (contain Nissl). **Axon** = single long process that conducts output.',
    '**Nissl bodies fill the soma and dendrites but are ABSENT from the axon hillock and axon** — a key identifying and functional point (protein synthesis happens in the soma, not the axon). Chromatolysis (Nissl dispersal) signals axonal injury.',
    '**Signal flows one way: dendrite → soma → axon hillock → axon → terminal.** The **axon hillock** is the trigger zone for the action potential. Terminals form **synapses** onto targets.',
    '**Morphological classes by number of processes.** **Multipolar** (many dendrites + 1 axon — most CNS/motor neurons); **bipolar** (1 dendrite + 1 axon — retina, olfactory, vestibulocochlear); **pseudounipolar** (single process that splits — **dorsal root ganglion sensory neurons**); (unipolar in some invertebrates).',
    '**Axonal transport uses microtubules** (see [[microtubules-motors-centrosome]]): **kinesin** carries cargo anterograde (soma → terminal), **dynein** retrograde (terminal → soma) — the latter also carries some viruses/toxins (rabies, tetanus) back to the soma.',
  ],

  mechanism: {
    title: 'Receive → integrate → transmit',
    steps: [
      { id: 's1', label: 'Soma: Nissl bodies (RER) = protein synthesis', emphasis: 'key' },
      { id: 's2', label: 'Dendrites receive; axon transmits (one axon per neuron)' },
      { id: 's3', label: 'Axon hillock = spike trigger zone; no Nissl in axon', emphasis: 'key' },
      { id: 's4', label: 'Types: multipolar, bipolar, pseudounipolar', emphasis: 'key' },
      { id: 's5', label: 'Transport: kinesin anterograde, dynein retrograde' },
    ],
  },

  examFindings: [
    { sign: 'Basophilic clumps in the soma (Nissl substance)', mechanism: 'RER + ribosomes → high protein synthesis', significance: 'key' },
    { sign: 'No Nissl in the axon hillock/axon', mechanism: 'Protein synthesis confined to soma/dendrites', significance: 'supportive' },
    { sign: 'Pseudounipolar neuron in a dorsal root ganglion', mechanism: 'Single process splits into central + peripheral branch', significance: 'key' },
    { sign: 'Chromatolysis (dispersed Nissl, eccentric nucleus)', mechanism: 'Reaction to axonal injury', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Basophilic bodies visible with cresyl violet in the soma', meaning: 'Nissl bodies (RER)' },
    { clue: 'Neuron type of the dorsal root (sensory) ganglion', meaning: 'Pseudounipolar' },
    { clue: 'Neuron type of the retina and olfactory epithelium', meaning: 'Bipolar' },
    { clue: 'Trigger zone for the action potential', meaning: 'Axon hillock' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Chromatolysis marks axonal injury; retrograde transport carries rabies/tetanus/HSV to the soma; neuron morphology maps to sensory vs motor circuits. Support cells and myelin: [[neuroglia-cns-pns]] and [[nerve-fiber-myelin-synapse]].' },
  ],

  mnemonics: [
    { hook: 'Nissl = RER, everywhere but the axon (soma + dendrites only)', expansion: ['Basophilic; cresyl violet'] },
    { hook: 'Pseudounipolar = sensory DRG; Bipolar = special senses; Multipolar = motor/most', expansion: ['Count the processes'] },
  ],

  traps: [
    {
      questionCategory: 'Where are Nissl bodies?',
      wrongInstinct: 'Nissl bodies extend throughout the neuron, including the axon',
      rightAnswer: 'Nissl bodies are in the soma and dendrites but ABSENT from the axon hillock and axon',
      why: 'The axon has no protein-synthesis machinery — it depends on transport from the soma; a classic identifying feature.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The sensory neurons of the dorsal root ganglion are:',
      options: [
        { id: 'a', text: 'Multipolar' },
        { id: 'b', text: 'Bipolar' },
        { id: 'c', text: 'Pseudounipolar' },
        { id: 'd', text: 'Anaxonic' },
      ],
      answerId: 'c',
      explanation: 'Dorsal root ganglion sensory neurons are pseudounipolar — a single process leaves the soma and splits into peripheral and central branches. Bipolar = special senses; multipolar = most motor/CNS neurons.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Nissl bodies, seen as basophilic clumps in the neuronal soma, correspond ultrastructurally to:',
      options: [
        { id: 'a', text: 'Mitochondria' },
        { id: 'b', text: 'Rough endoplasmic reticulum and ribosomes' },
        { id: 'c', text: 'Lysosomes' },
        { id: 'd', text: 'Neurofilaments' },
      ],
      answerId: 'b',
      explanation: 'Nissl substance = rough ER plus free ribosomes (rRNA), hence its basophilia and role in protein synthesis. It is absent from the axon hillock and axon.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Neuron structure', svg: NEURON_STRUCTURE, caption: 'Soma (Nissl/RER), dendrites (receive), axon hillock (trigger), axon + myelin, terminals. Kinesin anterograde / dynein retrograde transport.' },
  ],
};

export default neuronStructureTypes;
