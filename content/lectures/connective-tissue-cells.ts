import type { Lecture } from '../../lib/types';
import { CONNECTIVE_TISSUE_CELLS } from '../../lib/figures';

export const connectiveTissueCells: Lecture = {
  id: 'connective-tissue-cells',
  title: 'Connective Tissue Cells',
  system: 'histology',
  source: 'L4 — Glands & Connective Tissue',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Histology' },
    { kind: 'lecture', label: 'L4 Glands & CT' },
    { kind: 'mechanism', label: 'Resident vs wandering' },
    { kind: 'exam', label: 'Identify the CT cell' },
  ],

  highYield: [
    '**Connective tissue = cells + fibres + ground substance**, all embedded in abundant ECM (unlike epithelium). It supports, connects, stores, and defends. Cells are either **resident/fixed** or **wandering/immune**.',
    '**Fibroblast = the workhorse (most common resident cell).** It **synthesises and secretes collagen, elastin, and ground substance**. Spindle-shaped with pale cytoplasm; the quiescent form is the **fibrocyte**. Central to wound healing and scar (fibrosis).',
    '**Macrophage (histiocyte)** — derived from blood **monocytes** — performs **phagocytosis** and **antigen presentation**. Tissue-specific names: Kupffer cell (liver), microglia (CNS), osteoclast precursor, alveolar macrophage.',
    '**Mast cell** — packed with **metachromatic granules of histamine and heparin**; on IgE cross-linking it **degranulates** → immediate hypersensitivity/allergy and inflammation (vasodilation). Basophil is its circulating relative.',
    '**Plasma cell** (from activated **B lymphocytes**) secretes **antibodies**; recognised by an eccentric **"clock-face" (cartwheel) nucleus** and basophilic RER-rich cytoplasm with a pale perinuclear Golgi (hof). **Adipocytes** store a single large fat droplet that pushes the nucleus to the rim ("signet-ring").',
  ],

  mechanism: {
    title: 'Fixed builders + wandering defenders',
    steps: [
      { id: 's1', label: 'Fibroblast makes collagen/elastin/ground substance', emphasis: 'key' },
      { id: 's2', label: 'Macrophage (from monocyte): phagocytosis + APC' },
      { id: 's3', label: 'Mast cell: histamine/heparin → allergy/inflammation', emphasis: 'key' },
      { id: 's4', label: 'Plasma cell (from B cell): antibodies, clock-face nucleus' },
      { id: 's5', label: 'Adipocyte: single fat droplet → signet-ring' },
    ],
  },

  examFindings: [
    { sign: 'Spindle cell making fibres', mechanism: 'Fibroblast (most common CT cell)', significance: 'key' },
    { sign: 'Metachromatic granular cell releasing histamine', mechanism: 'Mast cell (allergy/inflammation)', significance: 'key' },
    { sign: 'Eccentric clock-face nucleus + basophilic cytoplasm', mechanism: 'Plasma cell (antibody secretion)', significance: 'key' },
    { sign: 'Cell with a single large clear vacuole, rim nucleus', mechanism: 'Adipocyte (unilocular, "signet-ring")', significance: 'supportive' },
    { sign: 'Large phagocytic cell with engulfed debris', mechanism: 'Macrophage (from monocyte)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Cell responsible for scar/fibrosis', meaning: 'Fibroblast (→ myofibroblast)' },
    { clue: 'Cell whose degranulation causes urticaria/anaphylaxis', meaning: 'Mast cell (histamine)' },
    { clue: 'Cell producing immunoglobulins', meaning: 'Plasma cell (from B lymphocyte)' },
    { clue: 'Tissue macrophage of the liver', meaning: 'Kupffer cell' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'These cells drive core pathology: fibroblasts → fibrosis/scarring, mast cells → allergy, plasma cells → antibody responses and myeloma, macrophages → chronic inflammation and granulomas. The fibres they make are covered in [[connective-tissue-fibers-types]].' },
  ],

  mnemonics: [
    { hook: 'FibroBlast Builds fibres; Plasma = clock-face Purple; Mast = histaMine', expansion: ['Macrophage = Monocyte-derived Muncher'] },
    { hook: 'Adipocyte = signet ring (nucleus pushed to rim)', expansion: ['Single unilocular fat droplet'] },
  ],

  traps: [
    {
      questionCategory: 'Origin of the plasma cell vs macrophage',
      wrongInstinct: 'Plasma cells and macrophages both come from monocytes',
      rightAnswer: 'Plasma cells derive from B LYMPHOCYTES (antibodies); macrophages derive from MONOCYTES (phagocytosis)',
      why: 'Different lineages: B-cell → plasma cell (humoral), monocyte → macrophage (innate/APC).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A connective-tissue cell with an eccentric "clock-face" nucleus and deeply basophilic cytoplasm is a:',
      options: [
        { id: 'a', text: 'Fibroblast' },
        { id: 'b', text: 'Mast cell' },
        { id: 'c', text: 'Plasma cell' },
        { id: 'd', text: 'Adipocyte' },
      ],
      answerId: 'c',
      explanation: 'The clock-face (cartwheel) heterochromatin and RER-rich basophilic cytoplasm identify a plasma cell, which secretes antibodies (derived from B lymphocytes).',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which connective-tissue cell releases histamine and heparin from metachromatic granules during allergic reactions?',
      options: [
        { id: 'a', text: 'Macrophage' },
        { id: 'b', text: 'Mast cell' },
        { id: 'c', text: 'Fibroblast' },
        { id: 'd', text: 'Plasma cell' },
      ],
      answerId: 'b',
      explanation: 'Mast cells degranulate on IgE cross-linking, releasing histamine (vasodilation) and heparin — driving immediate hypersensitivity and inflammation.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Connective tissue cells', svg: CONNECTIVE_TISSUE_CELLS, caption: 'Fibroblast (fibres), macrophage (phagocytosis), mast cell (histamine), plasma cell (antibodies), adipocyte (fat) + the fibre types.' },
  ],
};

export default connectiveTissueCells;
