import type { Lecture } from '../../lib/types';
import { NEUROGLIA } from '../../lib/figures';

export const neurogliaCnsPns: Lecture = {
  id: 'neuroglia-cns-pns',
  title: 'Neuroglia: CNS & PNS Support Cells',
  system: 'histology',
  source: 'L8 — Nervous Tissue',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Histology' },
    { kind: 'lecture', label: 'L8 Nervous Tissue' },
    { kind: 'mechanism', label: 'Glial functions' },
    { kind: 'exam', label: 'Which glia does what' },
  ],

  highYield: [
    '**Neuroglia support, insulate, nourish and defend neurons** and vastly outnumber them. Four in the **CNS**, two in the **PNS**.',
    '**CNS — Astrocyte** (**GFAP+**, star-shaped): structural support, the **blood–brain barrier** (end-feet), K⁺/neurotransmitter buffering, scar (gliosis). **Oligodendrocyte**: **myelinates MANY CNS axons** (one cell → several internodes).',
    '**CNS — Microglia** (from **mesoderm/monocyte lineage**, unlike the others which are neuroectoderm): the **resident phagocytes/immune cells** of the CNS. **Ependymal cells**: ciliated epithelium lining the **ventricles/central canal**, circulate and help produce **CSF**.',
    '**PNS — Schwann cell**: **myelinates ONE segment of ONE PNS axon** (one cell = one internode); also ensheathes unmyelinated axons and guides regeneration. **Satellite cells**: surround and support **neuronal cell bodies in ganglia**.',
    '**Myelination differs by side.** **CNS = oligodendrocyte** (one cell, many axons); **PNS = Schwann cell** (one cell, one internode). This distinction drives demyelinating disease targeting (**MS = CNS/oligodendrocyte**; **Guillain-Barré = PNS/Schwann**).',
  ],

  mechanism: {
    title: 'Match the glial cell to its job',
    steps: [
      { id: 's1', label: 'Astrocyte (GFAP): BBB + support', emphasis: 'key' },
      { id: 's2', label: 'Oligodendrocyte: myelinates MANY CNS axons', emphasis: 'key' },
      { id: 's3', label: 'Microglia (mesoderm): immune/phagocyte' },
      { id: 's4', label: 'Ependyma: line ventricles, CSF' },
      { id: 's5', label: 'PNS: Schwann (one axon myelin) + satellite (ganglion soma)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'GFAP-positive star-shaped cell with vascular end-feet', mechanism: 'Astrocyte (BBB, support)', significance: 'key' },
    { sign: 'CNS cell myelinating several axons at once', mechanism: 'Oligodendrocyte', significance: 'key' },
    { sign: 'Small phagocytic CNS cell of mesodermal origin', mechanism: 'Microglia', significance: 'supportive' },
    { sign: 'Ciliated cells lining a ventricle', mechanism: 'Ependymal cells (CSF)', significance: 'supportive' },
    { sign: 'PNS cell wrapping one internode of one axon', mechanism: 'Schwann cell', significance: 'key' },
  ],

  investigations: [
    { clue: 'Glial cell forming the blood–brain barrier', meaning: 'Astrocyte' },
    { clue: 'CNS myelinating cell (multiple axons)', meaning: 'Oligodendrocyte' },
    { clue: 'PNS myelinating cell (one internode)', meaning: 'Schwann cell' },
    { clue: 'Glial immune cell not of neuroectodermal origin', meaning: 'Microglia (mesoderm/monocyte)' },
    { clue: 'Cell surrounding dorsal root ganglion neuron bodies', meaning: 'Satellite cell' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Glial identity drives disease: astrocytoma/glioma (GFAP+), multiple sclerosis (CNS oligodendrocyte), Guillain-Barré (PNS Schwann), microglial activation in neuroinflammation, ependymoma. Myelin mechanism: [[nerve-fiber-myelin-synapse]].' },
  ],

  mnemonics: [
    { hook: 'Astrocyte = A for BBB; Oligo = "few branches, many axons"; Microglia = Macrophage', expansion: ['Ependyma = CSF; Schwann = one; Satellite = soma'] },
    { hook: 'CNS myelin = Oligodendrocyte (Optic to Occiput); PNS myelin = Schwann (Single axon)', expansion: ['One-to-many vs one-to-one'] },
  ],

  traps: [
    {
      questionCategory: 'CNS vs PNS myelination',
      wrongInstinct: 'One Schwann cell myelinates many axons like an oligodendrocyte',
      rightAnswer: 'Schwann cell = ONE internode of ONE axon (PNS); oligodendrocyte = MANY axons (CNS)',
      why: 'One-to-one (Schwann) vs one-to-many (oligodendrocyte) — and it determines which disease affects which system.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which glial cell myelinates multiple axons in the central nervous system?',
      options: [
        { id: 'a', text: 'Schwann cell' },
        { id: 'b', text: 'Astrocyte' },
        { id: 'c', text: 'Oligodendrocyte' },
        { id: 'd', text: 'Microglia' },
      ],
      answerId: 'c',
      explanation: 'One oligodendrocyte myelinates several CNS axons. In the PNS, each Schwann cell myelinates a single internode of one axon.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which neuroglial cell is derived from mesoderm (monocyte lineage) rather than neuroectoderm?',
      options: [
        { id: 'a', text: 'Astrocyte' },
        { id: 'b', text: 'Oligodendrocyte' },
        { id: 'c', text: 'Microglia' },
        { id: 'd', text: 'Ependymal cell' },
      ],
      answerId: 'c',
      explanation: 'Microglia are the CNS resident macrophages, derived from the mesodermal/monocyte lineage. Astrocytes, oligodendrocytes, and ependymal cells are neuroectodermal.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Neuroglia', svg: NEUROGLIA, caption: 'CNS: astrocyte (BBB), oligodendrocyte (myelin, many axons), microglia (immune), ependyma (CSF). PNS: Schwann (myelin, one axon), satellite (ganglion soma).' },
  ],
};

export default neurogliaCnsPns;
