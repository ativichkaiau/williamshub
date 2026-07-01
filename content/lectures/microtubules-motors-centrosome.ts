import type { Lecture } from '../../lib/types';
import { MICROTUBULE_MOTORS } from '../../lib/figures';

export const microtubulesMotorsCentrosome: Lecture = {
  id: 'microtubules-motors-centrosome',
  title: 'Microtubules, Motor Proteins, Centrosome & Cilia',
  system: 'histology',
  source: 'L2 — Cytoskeleton',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Histology' },
    { kind: 'lecture', label: 'L2 Cytoskeleton' },
    { kind: 'mechanism', label: 'MT transport' },
    { kind: 'exam', label: 'Kinesin vs dynein · 9+2' },
  ],

  highYield: [
    '**Microtubules = hollow tubes of α/β-tubulin dimers, ~25 nm — the thickest filament.** They are **polar** (minus end anchored at the centrosome, plus end reaching outward) and show **dynamic instability** (rapid grow/shrink), the basis of spindle searching in mitosis.',
    '**Nucleated at the centrosome (MTOC).** The centrosome contains a pair of **centrioles** (each **9 triplets, 9+0**) surrounded by pericentriolar material with **γ-tubulin ring complexes** that seed new microtubules. In mitosis the centrosomes form the poles of the **spindle**.',
    '**Motor proteins run cargo along microtubules.** **Kinesin → anterograde** (minus → plus, e.g. soma → axon terminal); **dynein → retrograde** (plus → minus, terminal → soma). This drives **axonal transport, organelle positioning, and vesicle traffic**.',
    '**Cilia and flagella are microtubule-based.** The motile **axoneme is 9+2** (nine outer doublets + a central pair), anchored by a **basal body (9+0 triplets, derived from a centriole)**; **dynein arms** slide doublets to bend the cilium. Primary (non-motile, 9+0) cilia are sensory.',
    '**Clinically targeted & disease-relevant.** Anti-mitotic drugs act on tubulin: **vinca alkaloids** block polymerisation, **taxanes** stabilise microtubules, **colchicine** binds tubulin. Defective ciliary dynein → **primary ciliary dyskinesia (Kartagener)** — situs inversus, chronic sinusitis, infertility.',
  ],

  mechanism: {
    title: 'Centrosome nucleates → motors haul → cilia beat',
    steps: [
      { id: 's1', label: 'γ-tubulin at centrosome nucleates α/β-tubulin microtubule', emphasis: 'key' },
      { id: 's2', label: 'Dynamic instability; minus (−) at MTOC, plus (+) outward' },
      { id: 's3', label: 'Kinesin → anterograde (+); dynein → retrograde (−)', emphasis: 'key' },
      { id: 's4', label: 'Mitotic spindle segregates chromosomes' },
      { id: 's5', label: 'Axoneme 9+2 (basal body 9+0) → ciliary beating', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Thickest filament (~25 nm), hollow', mechanism: 'Microtubule (α/β-tubulin)', significance: 'key' },
    { sign: '9+2 axoneme on cross-section', mechanism: 'Motile cilium/flagellum', significance: 'key' },
    { sign: '9+0 triplets', mechanism: 'Basal body / centriole', significance: 'supportive' },
    { sign: 'Anterograde axonal transport', mechanism: 'Kinesin (minus → plus)', significance: 'key' },
    { sign: 'Situs inversus + bronchiectasis + infertility', mechanism: 'Dynein-arm defect → primary ciliary dyskinesia', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Motor carrying a vesicle from the neuron cell body toward the terminal', meaning: 'Kinesin (anterograde)' },
    { clue: 'Motor returning material from terminal to soma', meaning: 'Dynein (retrograde)' },
    { clue: 'A 9+2 microtubule array under the plasma membrane', meaning: 'Cilium axoneme' },
    { clue: 'The microtubule-organising centre of the cell', meaning: 'Centrosome (γ-tubulin, centrioles)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Microtubule drugs are chemotherapy mainstays (taxanes/vinca) and gout therapy (colchicine). Ciliary defects cause Kartagener; microtubule motors drive the axonal transport that fails in some neurodegeneration. Cilia structure links to [[epithelial-surface-basement-membrane]].' },
  ],

  mnemonics: [
    { hook: 'KINesin → to the KIN at the +end (out); Dynein → Down to the − (in)', expansion: ['Anterograde vs retrograde'] },
    { hook: 'Cilia "9+2", basal body/centriole "9+0"', expansion: ['Doublets + central pair vs triplets, no centre'] },
  ],

  traps: [
    {
      questionCategory: 'Kinesin vs dynein direction',
      wrongInstinct: 'Kinesin moves cargo toward the cell body (retrograde)',
      rightAnswer: 'Kinesin = anterograde (toward the + end / axon terminal); dynein = retrograde (toward the − end / soma)',
      why: 'Reversing them is a classic error. Anchor it: Kinesin "Kicks out," Dynein "Drags back."',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A cross-section of a motile cilium shows a microtubule arrangement of:',
      options: [
        { id: 'a', text: '9 triplets, no central pair (9+0)' },
        { id: 'b', text: '9 doublets + 2 central microtubules (9+2)' },
        { id: 'c', text: 'A single central bundle of actin' },
        { id: 'd', text: '13 protofilaments only' },
      ],
      answerId: 'b',
      explanation: 'The motile ciliary axoneme is 9+2 (nine outer doublets + a central pair), with dynein arms driving bending. The basal body/centriole is 9+0 triplets.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Fast anterograde axonal transport of vesicles from the neuronal soma to the synapse is powered by:',
      options: [
        { id: 'a', text: 'Dynein along actin' },
        { id: 'b', text: 'Myosin along actin' },
        { id: 'c', text: 'Kinesin along microtubules' },
        { id: 'd', text: 'Dynein along microtubules' },
      ],
      answerId: 'c',
      explanation: 'Kinesin walks toward the microtubule plus end (anterograde: soma → terminal). Dynein handles retrograde transport back to the soma.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Microtubule polarity & motors', svg: MICROTUBULE_MOTORS, caption: 'Centrosome (γ-tubulin) = minus end; kinesin walks anterograde (− → +), dynein retrograde (+ → −).' },
  ],
};

export default microtubulesMotorsCentrosome;
