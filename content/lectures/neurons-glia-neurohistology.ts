import type { Lecture } from '../../lib/types';

export const neuronsGliaNeurohistology: Lecture = {
  id: 'neurons-glia-neurohistology',
  title: 'Neurons & Neuroglia',
  system: 'neuro',
  source: 'L19 — Brain Metabolism',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L19 Neurohistology' },
    { kind: 'mechanism', label: 'Glial cell types & myelination' },
    { kind: 'exam', label: 'Astrocytes; CNS vs PNS myelin' },
  ],

  highYield: [
    'Nervous tissue is built from NEURONS (the signalling cells — dendrites receive, a soma integrates, an axon conducts) and far more numerous NEUROGLIA (support cells). Neurons are classified structurally as MULTIPOLAR (most CNS neurons), BIPOLAR (retina, olfactory, special sense) and PSEUDOUNIPOLAR (dorsal root ganglion sensory neurons).',
    'The CNS glia: ASTROCYTES (the most numerous — support, K⁺/neurotransmitter buffering, and the blood–brain barrier via end-feet — [[brain-energy-metabolism]]); OLIGODENDROCYTES (myelinate CNS axons — ONE cell myelinates MANY axons); MICROGLIA (the resident immune/phagocytic cells, from mesoderm/monocyte lineage, NOT neuroectoderm); and EPENDYMAL cells (line the ventricles, circulate/help make CSF).',
    '**The PNS glia: SCHWANN cells MYELINATE peripheral axons (ONE Schwann cell = ONE internode of ONE axon, the opposite ratio to oligodendrocytes) and are essential for PERIPHERAL nerve regeneration; SATELLITE cells surround PNS ganglion cell bodies. Schwann cells are NEURAL CREST derived** ([[brain-vesicles-neural-crest]]).',
    'MYELIN speeds conduction by SALTATORY propagation between the NODES OF RANVIER; its loss underlies demyelinating disease. Key clinical distinction: CNS demyelination (oligodendrocytes) = MULTIPLE SCLEROSIS; PNS demyelination (Schwann) = GUILLAIN-BARRÉ / CIDP. Reactive ASTROCYTES form the glial scar (gliosis); most CNS tumours (gliomas) are of glial, not neuronal, origin.',
    '**The take-home: neurons (multipolar/bipolar/pseudounipolar) + glia — ASTROCYTES (BBB, support), OLIGODENDROCYTES (CNS myelin, one-to-many), MICROGLIA (immune), EPENDYMA (CSF); SCHWANN (PNS myelin, one-to-one, neural crest, regeneration). Myelin → saltatory conduction; CNS demyelination = MS, PNS = GBS.** Myelinated conduction physiology is in EHP ([[action-potential-genesis]]); glia and the BBB in [[brain-energy-metabolism]].',
  ],

  mechanism: {
    title: 'Neurons + glia: astrocytes (BBB), oligodendrocytes (CNS myelin 1→many), microglia (immune), ependyma, Schwann (PNS myelin 1→1)',
    steps: [
      { id: 's1', label: 'Neuron types: multipolar (CNS), bipolar (special sense), pseudounipolar (DRG)', emphasis: 'key' },
      { id: 's2', label: 'Astrocytes = most numerous; support + blood–brain barrier end-feet', emphasis: 'key' },
      { id: 's3', label: 'Oligodendrocytes myelinate CNS (one cell → MANY axons); microglia = immune; ependyma = CSF', emphasis: 'key' },
      { id: 's4', label: 'Schwann cells myelinate PNS (one cell → ONE internode); neural crest; regeneration', emphasis: 'key' },
      { id: 's5', label: 'Myelin → saltatory conduction; CNS demyelination = MS, PNS = GBS', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Blood–brain barrier and K⁺/transmitter buffering', mechanism: 'Astrocyte end-feet (most numerous glia)', significance: 'key' },
    { sign: 'One glial cell myelinating many CNS axons', mechanism: 'Oligodendrocyte (CNS myelin)', significance: 'key' },
    { sign: 'One glial cell myelinating a single axon internode (PNS)', mechanism: 'Schwann cell (PNS myelin, neural crest)', significance: 'key' },
    { sign: 'Resident phagocytic immune cell of the CNS', mechanism: 'Microglia (mesodermal/monocyte lineage)', significance: 'supportive' },
    { sign: 'CNS plaques (MS) vs ascending PNS weakness (GBS)', mechanism: 'Oligodendrocyte vs Schwann demyelination', significance: 'key' },
  ],

  investigations: [
    { clue: 'The most numerous glial cell, forming the blood–brain barrier', meaning: 'The astrocyte' },
    { clue: 'The CNS myelinating cell (one cell, many axons)', meaning: 'The oligodendrocyte' },
    { clue: 'The PNS myelinating cell (one cell, one internode)', meaning: 'The Schwann cell (neural crest)' },
    { clue: 'The resident immune/phagocytic glia', meaning: 'Microglia' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Neurohistology underlies demyelinating disease (MS = oligodendrocyte/CNS vs GBS = Schwann/PNS), gliosis and the glial origin of most brain tumours (gliomas), and the astrocyte-formed blood–brain barrier ([[brain-energy-metabolism]]). Schwann cells (neural crest — [[brain-vesicles-neural-crest]]) enable peripheral nerve regeneration, unlike the CNS. Myelin makes conduction saltatory (EHP — [[action-potential-genesis]]); pseudounipolar DRG neurons feed the ascending pathways ([[somatosensory-ascending-pathways]]).' },
  ],

  mnemonics: [
    { hook: 'Myelin: "Oligodendrocyte = One cell, mOre axons (CNS); Schwann = Single axon (PNS)"', expansion: ['CNS demyelination = MS', 'PNS demyelination = GBS'] },
    { hook: 'Glia: "Astrocyte (BBB), Oligo (myelin), Microglia (immune), Ependyma (CSF)"', expansion: ['Astrocytes = most numerous', 'Microglia = mesodermal, not neuroectoderm'] },
  ],

  traps: [
    {
      questionCategory: 'CNS vs PNS myelination ratio',
      wrongInstinct: 'Oligodendrocytes and Schwann cells myelinate axons in the same one-to-one way',
      rightAnswer: 'The ratio differs: ONE OLIGODENDROCYTE myelinates SEGMENTS of MANY (up to ~50) CNS axons, whereas ONE SCHWANN CELL myelinates a SINGLE internode of ONE PNS axon — this difference (and the cells\' distinct origins) is why CNS demyelination (MS) and PNS demyelination (GBS) are separate diseases and why the PNS regenerates better',
      why: 'The one-to-many (CNS) versus one-to-one (PNS) arrangement, plus Schwann cells\' role in regeneration, explains the different demyelinating diseases and the CNS\'s poor regenerative capacity.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which cell forms the myelin sheath around axons in the central nervous system, with a single cell myelinating multiple axons?',
      options: [
        { id: 'a', text: 'Schwann cell' },
        { id: 'b', text: 'Oligodendrocyte' },
        { id: 'c', text: 'Astrocyte' },
        { id: 'd', text: 'Microglia' },
      ],
      answerId: 'b',
      explanation: 'Oligodendrocytes myelinate CNS axons, and a single oligodendrocyte can myelinate segments of many axons. In the PNS, Schwann cells myelinate axons one internode at a time (one cell per internode). CNS demyelination (oligodendrocytes) causes multiple sclerosis.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The blood–brain barrier and buffering of extracellular potassium and neurotransmitters are functions of which glial cell?',
      options: [
        { id: 'a', text: 'Astrocytes' },
        { id: 'b', text: 'Ependymal cells' },
        { id: 'c', text: 'Microglia' },
        { id: 'd', text: 'Schwann cells' },
      ],
      answerId: 'a',
      explanation: 'Astrocytes — the most numerous glia — support neurons metabolically, buffer extracellular K⁺ and neurotransmitters, and their end-feet contribute to the blood–brain barrier. Ependymal cells line the ventricles, microglia are the immune cells, and Schwann cells myelinate the PNS.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default neuronsGliaNeurohistology;
