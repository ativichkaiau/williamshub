import type { Lecture } from '../../lib/types';
import { OSTEON_HAVERSIAN } from '../../lib/figures';

export const boneTissueCellsOsteon: Lecture = {
  id: 'bone-tissue-cells-osteon',
  title: 'Bone Tissue: Cells & the Osteon',
  system: 'histology',
  source: 'L6 — Cartilage & Bone',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Histology' },
    { kind: 'lecture', label: 'L6 Cartilage & Bone' },
    { kind: 'mechanism', label: 'Bone cells & osteon' },
    { kind: 'exam', label: 'Osteoblast vs osteoclast' },
  ],

  highYield: [
    '**Bone = calcified connective tissue: cells + organic osteoid (mostly type I collagen) + inorganic hydroxyapatite** (Ca/PO₄). Unlike cartilage, bone is **vascular** and remodels continuously.',
    '**Four cells.** **Osteoprogenitor** (stem cell, periosteum/endosteum). **Osteoblast** — **builds** osteoid and mineralises it; alkaline-phosphatase rich, basophilic. **Osteocyte** — a **mature osteoblast trapped in a lacuna**, connected by **canaliculi**; senses mechanical load and maintains matrix. **Osteoclast** — large **multinucleate** cell (from **monocyte/macrophage lineage**) that **resorbs** bone via a ruffled border + acid/enzymes.',
    '**The osteon (Haversian system) = the unit of compact bone.** Concentric **lamellae** ring a central **Haversian canal** (vessels + nerve, running with the long axis); **osteocytes in lacunae** are linked by canaliculi. **Volkmann (perforating) canals** run transversely, connecting Haversian canals.',
    '**Compact (cortical) vs spongy (trabecular) bone.** Compact = dense osteons (shaft/diaphysis). Spongy = a lattice of **trabeculae** with red marrow in between (epiphysis), no true osteons. **Woven** bone (rapid, disorganised — fetal/fracture repair) is later replaced by **lamellar** bone (organised, strong).',
    '**Coverings & remodelling.** **Periosteum** (outer, fibrous + osteogenic layer) and **endosteum** (lines marrow cavity). Remodelling balances **osteoblast** deposition and **osteoclast** resorption, controlled by **RANK/RANKL/OPG** and PTH/vitamin D/calcitonin — the histologic basis of osteoporosis and Paget disease.',
  ],

  mechanism: {
    title: 'Build ⇄ resorb, organised into osteons',
    steps: [
      { id: 's1', label: 'Osteoblast Builds osteoid → mineralises', emphasis: 'key' },
      { id: 's2', label: 'Trapped osteoblast = osteocyte (lacuna, canaliculi)' },
      { id: 's3', label: 'Osteoclast (multinucleate, monocyte-derived) resorbs', emphasis: 'key' },
      { id: 's4', label: 'Osteon = concentric lamellae + Haversian canal', emphasis: 'key' },
      { id: 's5', label: 'Volkmann canals connect osteons; periosteum/endosteum cover' },
    ],
  },

  examFindings: [
    { sign: 'Large multinucleated cell in a resorption (Howship) lacuna', mechanism: 'Osteoclast (bone resorption)', significance: 'key' },
    { sign: 'Plump basophilic cells lining new bone surface', mechanism: 'Osteoblasts (matrix deposition)', significance: 'key' },
    { sign: 'Cells in lacunae linked by canaliculi within lamellae', mechanism: 'Osteocytes (maintenance/mechanosensing)', significance: 'supportive' },
    { sign: 'Concentric rings around a central vascular canal', mechanism: 'Osteon (Haversian system) of compact bone', significance: 'key' },
    { sign: 'Trabecular lattice with intervening marrow', mechanism: 'Spongy (cancellous) bone', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Cell derived from the monocyte lineage that breaks down bone', meaning: 'Osteoclast' },
    { clue: 'Canal running along the long axis carrying vessels/nerve', meaning: 'Haversian (central) canal' },
    { clue: 'Transverse canal linking two osteons', meaning: 'Volkmann (perforating) canal' },
    { clue: 'Disorganised bone laid down rapidly in fracture callus', meaning: 'Woven bone (later remodelled to lamellar)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The osteoblast–osteoclast balance underlies osteoporosis (bisphosphonates block osteoclasts; denosumab = anti-RANKL), Paget disease (mosaic lamellae), and metastasis. Osteon structure is the reference for reading bone slides. Bone forms via [[ossification]].' },
  ],

  mnemonics: [
    { hook: 'OsteoBlast = Builds (B); osteoClast = Chews/Consumes (C, multinucleate)', expansion: ['Osteocyte = trapped, maintains'] },
    { hook: 'Haversian = along the Highway (long axis); Volkmann = across (V/transverse)', expansion: ['Both carry vessels'] },
  ],

  traps: [
    {
      questionCategory: 'Origin of the osteoclast',
      wrongInstinct: 'Osteoclasts and osteoblasts both come from the same osteoprogenitor stem cell',
      rightAnswer: 'Osteoblasts/osteocytes come from mesenchymal osteoprogenitors; OSTEOCLASTS come from the monocyte/macrophage (haematopoietic) lineage',
      why: 'Different lineages — that is why anti-RANKL/monocyte-targeting therapies specifically hit osteoclasts.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A large multinucleated bone cell derived from the monocyte–macrophage lineage that resorbs bone matrix is the:',
      options: [
        { id: 'a', text: 'Osteoblast' },
        { id: 'b', text: 'Osteocyte' },
        { id: 'c', text: 'Osteoclast' },
        { id: 'd', text: 'Osteoprogenitor' },
      ],
      answerId: 'c',
      explanation: 'Osteoclasts are multinucleate, monocyte-derived cells that resorb bone via a ruffled border and acid hydrolases. Osteoblasts build matrix; osteocytes maintain it.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'In compact bone, the central canal of an osteon that carries blood vessels and nerves along the long axis is the:',
      options: [
        { id: 'a', text: 'Volkmann canal' },
        { id: 'b', text: 'Haversian (central) canal' },
        { id: 'c', text: 'Canaliculus' },
        { id: 'd', text: 'Lacuna' },
      ],
      answerId: 'b',
      explanation: 'The Haversian canal runs along the long axis at the centre of each osteon. Volkmann canals run transversely to connect osteons; canaliculi link osteocyte lacunae.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'The osteon & bone cells', svg: OSTEON_HAVERSIAN, caption: 'Concentric lamellae + Haversian canal + osteocytes in lacunae; Volkmann canals connect osteons. The four bone cells and their jobs.' },
  ],
};

export default boneTissueCellsOsteon;
