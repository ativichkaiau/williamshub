import type { Lecture } from '../../lib/types';
import { INTERMEDIATE_FILAMENT_TABLE } from '../../lib/figures';

export const intermediateFilaments: Lecture = {
  id: 'intermediate-filaments',
  title: 'Intermediate Filaments: Tissue-Specific Cytoskeleton',
  system: 'histology',
  source: 'L2 — Cytoskeleton',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Histology' },
    { kind: 'lecture', label: 'L2 Cytoskeleton' },
    { kind: 'mechanism', label: 'Mechanical support' },
    { kind: 'exam', label: 'IF type ↔ tissue' },
  ],

  highYield: [
    '**Intermediate filaments (~10 nm) are the mechanical, tension-bearing cytoskeleton** — rope-like, **stable, non-polar, and lacking motor proteins** (unlike actin and microtubules). They resist stretch and hold organelles/nucleus in place.',
    '**IF protein type is tissue-specific — the single most testable point.** **Keratin → epithelial cells**; **Vimentin → mesenchyme/connective tissue** (fibroblasts, endothelium); **Desmin → muscle**; **Neurofilament → neurons**; **GFAP → astrocytes (glia)**; **Lamin → nuclear envelope**.',
    '**They anchor the strongest junctions.** Keratin filaments insert into **desmosomes** (cell–cell) and **hemidesmosomes** (cell–basement membrane), distributing mechanical stress across an epithelial sheet — see [[cell-junctions]].',
    '**IFs are diagnostic immunohistochemistry markers.** Because each IF marks a tissue lineage, antibodies against them identify a tumour\'s **cell of origin** — e.g. **keratin⁺ = carcinoma**, **vimentin⁺ = sarcoma**, **GFAP⁺ = glioma**, **desmin⁺ = myogenic tumour**. This is the histology→pathology payoff (see [[intermediate-filaments-clinical]]).',
    '**IF pathology.** **Mallory body** ("alcoholic hyalin") = clumped **keratin** in hepatocytes; **neurofibrillary tangles** (Alzheimer) contain **neurofilaments** + tau; **laminopathies** (e.g. progeria) arise from lamin defects.',
  ],

  mechanism: {
    title: 'Rope-like scaffold, tissue-labelled',
    steps: [
      { id: 's1', label: '~10 nm, stable, non-polar, NO motors → mechanical strength', emphasis: 'key' },
      { id: 's2', label: 'Keratin=epithelium, Vimentin=mesenchyme, Desmin=muscle', emphasis: 'key' },
      { id: 's3', label: 'Neurofilament=neuron, GFAP=astrocyte, Lamin=nucleus' },
      { id: 's4', label: 'Insert into desmosomes/hemidesmosomes' },
      { id: 's5', label: 'IHC for IF → identify tumour tissue of origin' },
    ],
  },

  examFindings: [
    { sign: 'Keratin-positive tumour', mechanism: 'Epithelial origin → carcinoma', significance: 'key' },
    { sign: 'Vimentin-positive tumour', mechanism: 'Mesenchymal origin → sarcoma', significance: 'key' },
    { sign: 'GFAP-positive CNS tumour', mechanism: 'Astrocytic origin → glioma', significance: 'supportive' },
    { sign: 'Mallory body in hepatocyte', mechanism: 'Clumped keratin IF (alcoholic liver disease)', significance: 'supportive' },
    { sign: 'Neurofibrillary tangle', mechanism: 'Neurofilament + tau (Alzheimer)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Immunostain a poorly differentiated tumour for keratin vs vimentin', meaning: 'Keratin⁺ = carcinoma; vimentin⁺ = sarcoma' },
    { clue: 'IF found in astrocytes', meaning: 'GFAP (glial fibrillary acidic protein)' },
    { clue: 'IF in muscle cells', meaning: 'Desmin' },
    { clue: 'IF supporting the inner nuclear membrane', meaning: 'Lamin (nuclear lamina)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'IF immunohistochemistry is how pathologists classify undifferentiated tumours — a core diagnostic tool. Their clinical diseases (Mallory body, NFT, pemphigus target desmogleins) are detailed in [[intermediate-filaments-clinical]].' },
  ],

  mnemonics: [
    { hook: '"Every Mature Man Never Gets Lucky" → Epithelium-Keratin, Mesenchyme-Vimentin, Muscle-Desmin, Neuron-NF, Glia-GFAP, (nucleus) Lamin', expansion: ['One IF class per tissue lineage'] },
    { hook: 'Keratin⁺ = Carcinoma; Vimentin⁺ = sarcoma', expansion: ['Tumour-of-origin markers'] },
  ],

  traps: [
    {
      questionCategory: 'Are intermediate filaments dynamic like actin?',
      wrongInstinct: 'All cytoskeletal filaments use motor proteins and treadmill',
      rightAnswer: 'IFs are stable, non-polar, and have NO motor proteins — they bear tension, unlike actin/microtubules',
      why: 'IFs are the mechanical scaffold; only actin (myosin) and microtubules (kinesin/dynein) have motors and polarity.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A poorly differentiated malignant tumour stains positive for vimentin and negative for keratin. The most likely category is:',
      options: [
        { id: 'a', text: 'Carcinoma (epithelial)' },
        { id: 'b', text: 'Sarcoma (mesenchymal)' },
        { id: 'c', text: 'Lymphoma' },
        { id: 'd', text: 'Glioma' },
      ],
      answerId: 'b',
      explanation: 'Vimentin marks mesenchymal cells → sarcoma. Keratin would indicate carcinoma; GFAP a glioma. IF immunohistochemistry reveals the tumour\'s tissue of origin.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which intermediate filament is characteristic of astrocytes?',
      options: [
        { id: 'a', text: 'Desmin' },
        { id: 'b', text: 'Keratin' },
        { id: 'c', text: 'GFAP' },
        { id: 'd', text: 'Neurofilament' },
      ],
      answerId: 'c',
      explanation: 'Glial fibrillary acidic protein (GFAP) is the astrocyte IF and marks astrocytic tumours (gliomas). Desmin = muscle, keratin = epithelium, neurofilament = neurons.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'IF classes → tissue → marker', svg: INTERMEDIATE_FILAMENT_TABLE, caption: 'Keratin/epithelium, vimentin/mesenchyme, desmin/muscle, GFAP/astrocyte, neurofilament/neuron, lamin/nucleus — and their diagnostic uses.' },
  ],
};

export default intermediateFilaments;
