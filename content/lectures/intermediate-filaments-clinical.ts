import type { Lecture } from '../../lib/types';
import { INTERMEDIATE_FILAMENT_TABLE } from '../../lib/figures';

export const intermediateFilamentsClinical: Lecture = {
  id: 'intermediate-filaments-clinical',
  title: 'Cytoskeletal Abnormalities & Diagnostic IF Markers',
  system: 'histology',
  source: 'L10 — Clinical Cell Biology',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Histology' },
    { kind: 'lecture', label: 'L10 Clinical Cell Biology' },
    { kind: 'mechanism', label: 'IF in disease' },
    { kind: 'exam', label: 'Inclusion ↔ filament' },
  ],

  highYield: [
    '**The cytoskeleton in disease.** Recall diameters: **microtubules ~25 nm, thick myosin ~15 nm, intermediate filaments ~10 nm, actin ~6–8 nm** (see [[intermediate-filaments]]). Intermediate-filament type is **tissue-specific**, which makes IFs both **disease markers** and **diagnostic immunostains**.',
    '**Intermediate-filament immunohistochemistry identifies a tumour\'s origin.** **Keratin → carcinoma** (epithelial); **vimentin → sarcoma** (mesenchymal); **desmin → myogenic tumours**; **GFAP → glioma** (astrocytic); **neurofilament → neuronal tumours**. This is how pathologists classify an undifferentiated tumour.',
    '**Keratin-based lesions.** **Mallory body ("alcoholic hyalin")** = clumped **keratin intermediate filaments** in hepatocytes (alcoholic liver disease). Autoimmune attacks on keratinocyte junctions cause blistering: **pemphigus vulgaris** (anti-desmoglein → desmosome) and **bullous pemphigoid** (anti-hemidesmosome) — junction-level disease from [[cell-junctions]].',
    '**Neurofilament/microtubule lesions.** **Neurofibrillary tangles** in **Alzheimer disease** contain hyperphosphorylated **tau (a microtubule-associated protein) + neurofilaments** — a disrupted neuronal cytoskeleton. Microtubule stabilisers/destabilisers (taxanes, vinca, colchicine) target the same system.',
    '**Other cytoskeletal disease.** **Primary ciliary dyskinesia (Kartagener)** = defective ciliary **dynein arms** → situs inversus, sinusitis, infertility; **laminopathies** (nuclear lamin defects) → progeria and some muscular dystrophies.',
  ],

  mechanism: {
    title: 'Tissue-specific filaments → diagnosis',
    steps: [
      { id: 's1', label: 'IF type marks cell lineage (keratin/vimentin/desmin/GFAP/NF)', emphasis: 'key' },
      { id: 's2', label: 'IHC: keratin=carcinoma, vimentin=sarcoma, GFAP=glioma', emphasis: 'key' },
      { id: 's3', label: 'Mallory body = keratin clumps (alcoholic liver)' },
      { id: 's4', label: 'Neurofibrillary tangle = tau + neurofilament (Alzheimer)', emphasis: 'key' },
      { id: 's5', label: 'Ciliary dynein defect = Kartagener; lamin = progeria' },
    ],
  },

  examFindings: [
    { sign: 'Keratin-positive, vimentin-negative tumour', mechanism: 'Epithelial → carcinoma', significance: 'key' },
    { sign: 'GFAP-positive brain tumour', mechanism: 'Astrocytic → glioma', significance: 'key' },
    { sign: 'Eosinophilic hyaline keratin clumps in hepatocytes', mechanism: 'Mallory body (alcoholic liver disease)', significance: 'key' },
    { sign: 'Neurofibrillary tangles in cortex/hippocampus', mechanism: 'Tau + neurofilament (Alzheimer)', significance: 'supportive' },
    { sign: 'Situs inversus + bronchiectasis + infertility', mechanism: 'Ciliary dynein defect (Kartagener)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Immunostain to prove a poorly differentiated tumour is a carcinoma', meaning: 'Keratin (cytokeratin) positivity' },
    { clue: 'Immunostain marking a glioma', meaning: 'GFAP' },
    { clue: 'Keratin inclusion in an alcoholic\'s liver biopsy', meaning: 'Mallory body' },
    { clue: 'Protein in Alzheimer neurofibrillary tangles', meaning: 'Hyperphosphorylated tau (+ neurofilament)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'IF immunohistochemistry is a routine diagnostic tool for classifying tumours; cytoskeletal inclusions define specific diseases (Mallory body, neurofibrillary tangle). This closes the histology→pathology loop opened in [[subcellular-pathology-alterations]] and builds on [[intermediate-filaments]].' },
  ],

  mnemonics: [
    { hook: 'Keratin⁺ = Carcinoma; Vimentin⁺ = sarcoma; GFAP⁺ = glioma; Desmin⁺ = muscle tumour', expansion: ['IHC identifies the tissue of origin'] },
    { hook: 'Mallory = keratin (liver); Tangle = tau + neurofilament (Alzheimer)', expansion: ['IF-based inclusions'] },
  ],

  traps: [
    {
      questionCategory: 'Mallory body composition',
      wrongInstinct: 'Mallory bodies (alcoholic hyalin) are made of collagen or amyloid',
      rightAnswer: 'Mallory bodies are aggregated KERATIN intermediate filaments in hepatocytes',
      why: 'They are a cytoskeletal (keratin) inclusion, not an extracellular deposit — a classic alcoholic liver disease finding.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Immunohistochemistry of an undifferentiated tumour is strongly positive for cytokeratin. This indicates the tumour is a:',
      options: [
        { id: 'a', text: 'Sarcoma' },
        { id: 'b', text: 'Carcinoma' },
        { id: 'c', text: 'Glioma' },
        { id: 'd', text: 'Lymphoma' },
      ],
      answerId: 'b',
      explanation: 'Cytokeratin marks epithelial cells, so keratin positivity identifies a carcinoma. Vimentin → sarcoma, GFAP → glioma; IF immunostaining reveals a tumour\'s tissue of origin.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The Mallory body ("alcoholic hyalin") seen in hepatocytes in alcoholic liver disease is composed of aggregated:',
      options: [
        { id: 'a', text: 'Neurofilaments' },
        { id: 'b', text: 'Microtubules' },
        { id: 'c', text: 'Keratin intermediate filaments' },
        { id: 'd', text: 'Actin microfilaments' },
      ],
      answerId: 'c',
      explanation: 'Mallory bodies are clumped keratin intermediate filaments within hepatocytes — a hallmark of alcoholic liver disease (also seen in NASH).',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'IF markers & diseases', svg: INTERMEDIATE_FILAMENT_TABLE, caption: 'Keratin/carcinoma·Mallory, vimentin/sarcoma, desmin/muscle, GFAP/glioma, neurofilament/Alzheimer tangle, lamin/laminopathy.' },
  ],
};

export default intermediateFilamentsClinical;
