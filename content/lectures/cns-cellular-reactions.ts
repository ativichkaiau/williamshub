import type { Lecture } from '../../lib/types';

export const cnsCellularReactions: Lecture = {
  id: 'cns-cellular-reactions',
  title: 'CNS Cellular Reactions to Injury',
  system: 'neuro',
  source: 'L5 — CNS Trauma & Hemorrhage',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L5 CNS Trauma & Hemorrhage' },
    { kind: 'disease', label: 'Neuropathology basics' },
    { kind: 'mechanism', label: 'Cell responses' },
    { kind: 'exam', label: 'Red neurons / gliosis' },
  ],

  highYield: [
    '**Red neurons** = the **earliest marker of neuronal necrosis** (acute hypoxia/ischemia, severe hypoglycemia): visible **6–12 h** after irreversible injury — **shrunken cell, pyknotic nucleus, loss of Nissl, intense cytoplasmic eosinophilia**.',
    '**Axonal injury**: **Wallerian degeneration** (axon degenerates distal to the injury), **central chromatolysis** (cell-body change during regeneration — Nissl disperses), and **axonal spheroids** (swellings).',
    '**Gliosis (reactive astrocytosis) = the most important histologic marker of CNS injury of ANY cause** — astrocyte hypertrophy/hyperplasia with **GFAP**; reactive cells = **gemistocytes**.',
    '**Rosenthal fibers** (thick eosinophilic astrocytic structures) → long-standing gliosis & **pilocytic astrocytoma**; **corpora amylacea** (PAS-positive polyglucosan bodies) → normal **aging** / degeneration.',
    '**Microglia** = resident CNS macrophages: proliferate into **rod cells**, form **microglial nodules** around necrosis, and perform **neuronophagia** around dying neurons.',
  ],

  mechanism: {
    title: 'Cell type → its signature response to injury',
    steps: [
      { id: 's1', label: 'Neuron: ischemia → red neuron (6–12 h)', emphasis: 'key' },
      { id: 's2', label: 'Axon: Wallerian degeneration + chromatolysis' },
      { id: 's3', label: 'Astrocyte: gliosis (GFAP, gemistocytes)' },
      { id: 's4', label: 'Microglia: rod cells, nodules, neuronophagia' },
    ],
  },

  examFindings: [
    { sign: 'Eosinophilic shrunken neurons (“red neurons”)', mechanism: 'Acute hypoxic-ischemic necrosis', significance: 'key' },
    { sign: 'GFAP-positive hypertrophic astrocytes (gliosis)', mechanism: 'Non-specific marker of CNS injury', significance: 'key' },
    { sign: 'Rosenthal fibers', mechanism: 'Chronic gliosis / pilocytic astrocytoma', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Histology (H&E, GFAP immunostain)', meaning: 'Identify neuronal necrosis and gliosis' },
    { clue: 'Timing of red neurons (6–12 h)', meaning: 'Estimates injury age' },
    { clue: 'Corpora amylacea distribution (subpial/perivascular)', meaning: 'Degenerative/aging change' },
  ],

  treatment: [
    { logic: 'These are diagnostic markers, not treatment targets', detail: 'They date and localize injury on pathology.' },
    { logic: 'Gliosis is the CNS “scar”', detail: 'Astrocytes, not fibroblasts, wall off CNS damage.' },
  ],

  mnemonics: [
    { hook: 'Red = dead (neuron): eosinophilic, 6–12 h after ischemia', expansion: ['Earliest necrosis marker'] },
    { hook: 'Rosenthal fibers = pilocytic astrocytoma & old gliosis', expansion: ['Corpora amylacea = aging'] },
  ],

  traps: [
    {
      questionCategory: 'Marker of CNS injury',
      wrongInstinct: 'A fibroblastic/collagen scar forms after CNS injury as in other tissues',
      rightAnswer: 'The CNS heals by gliosis (reactive astrocytosis), not by fibroblastic scarring',
      why: 'Astrocytes, expressing GFAP, hypertrophy and proliferate to form the glial scar — gliosis is the universal histologic footprint of CNS injury, unlike the collagenous scars of peripheral tissues.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Twelve hours after a cardiac arrest, cortical neurons show shrinkage, nuclear pyknosis, and bright cytoplasmic eosinophilia. These “red neurons” indicate:',
      options: [
        { id: 'a', text: 'Chronic gliosis' },
        { id: 'b', text: 'Acute hypoxic-ischemic neuronal necrosis' },
        { id: 'c', text: 'Reactive astrocytosis' },
        { id: 'd', text: 'Normal aging change' },
      ],
      answerId: 'b',
      explanation: 'Red neurons — eosinophilic, shrunken, pyknotic cells appearing 6–12 h after irreversible injury — are the earliest morphologic marker of acute hypoxic-ischemic neuronal necrosis.',
      tests: 'exam',
    },
  ],
};

export default cnsCellularReactions;
