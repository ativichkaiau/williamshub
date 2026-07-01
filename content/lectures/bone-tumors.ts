import type { Lecture } from '../../lib/types';
import { BONE_TUMOR_LOCATIONS } from '../../lib/figures';

export const boneTumors: Lecture = {
  id: 'bone-tumors',
  title: 'Bone Tumors & Joint Cysts',
  system: 'msk',
  source: 'L8 — Musculoskeletal Tumors',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'MSK' },
    { kind: 'lecture', label: 'L8 Musculoskeletal Tumors' },
    { kind: 'disease', label: 'Bone tumors' },
    { kind: 'mechanism', label: 'Site & radiology' },
    { kind: 'exam', label: 'Osteosarcoma / Ewing' },
  ],

  highYield: [
    '**Osteosarcoma** = most common **primary** malignant bone tumor: **young (2nd decade)**, **metaphysis around the knee**, malignant cells produce **osteoid**; X-ray shows cortical destruction + **Codman triangle / sunburst**; linked to **RB1 and p53**. Treat with chemotherapy + surgery.',
    '**Osteochondroma** = most common **benign** bone tumor: a **cartilage-capped bony exostosis** (metaphysis), EXT1; rare transformation to chondrosarcoma (thick cap). **Chondrosarcoma** = malignant cartilage tumor of the **axial skeleton in older adults**.',
    '**Ewing sarcoma** = **small round blue cell** tumor, **diaphysis** of long bones, **children <15**, **t(11;22)**; “onion-skin” periosteal reaction.',
    '**Giant cell tumor** = **intermediate**, **epiphysis** of long bones (around the knee), adults 20–40, **“soap-bubble”** lytic lesion with multinucleated giant cells.',
    '**Metastasis = the most common malignant bone tumor overall** (breast, lung, prostate, kidney, thyroid); **prostate = blastic**, kidney/thyroid = lytic. Joint cysts: **ganglion cyst** (wrist, no cell lining) and **Baker cyst** (popliteal synovial cyst).',
  ],

  mechanism: {
    title: 'Use age, site, and radiology to name the bone tumor',
    steps: [
      { id: 's1', label: 'Metaphysis + young + osteoid + Codman → osteosarcoma', emphasis: 'key' },
      { id: 's2', label: 'Diaphysis + small round blue cells + <15 → Ewing' },
      { id: 's3', label: 'Epiphysis + soap-bubble + 20–40 → giant cell tumor' },
      { id: 's4', label: 'Older adult + destructive → suspect metastasis', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Codman triangle / sunburst on X-ray in a teenager', mechanism: 'Osteosarcoma (metaphysis)', significance: 'key' },
    { sign: 'Onion-skin periosteal reaction, diaphysis, child', mechanism: 'Ewing sarcoma', significance: 'key' },
    { sign: 'Soap-bubble epiphyseal lytic lesion in a young adult', mechanism: 'Giant cell tumor', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Age + site (epiphysis/metaphysis/diaphysis)', meaning: 'Narrows the tumor type' },
    { clue: 'Radiographic pattern (Codman, onion-skin, soap-bubble)', meaning: 'Characteristic tumor signatures' },
    { clue: 'Bone scan in a known cancer', meaning: 'Detects metastases (most common bone malignancy)' },
  ],

  treatment: [
    { logic: 'Osteosarcoma/Ewing: neoadjuvant chemo + surgery', detail: 'Chemosensitive.' },
    { logic: 'Osteochondroma: excision if symptomatic', detail: 'Watch for malignant change (thick cap).' },
    { logic: 'Bone metastasis: usually palliative', detail: 'Treat primary; stabilize fractures.' },
  ],

  mnemonics: [
    { hook: 'Osteosarcoma = metaphysis, young, Codman triangle, osteoid', expansion: ['RB1/p53'] },
    { hook: 'Ewing = diaphysis, small round blue cells, onion-skin, t(11;22)', expansion: ['<15 y'] },
  ],

  traps: [
    {
      questionCategory: 'Most common malignant bone tumor',
      wrongInstinct: 'Osteosarcoma is the most common malignant tumor found in bone',
      rightAnswer: 'Metastasis is the most common malignant bone tumor overall; osteosarcoma is the most common PRIMARY malignant bone tumor',
      why: 'Metastatic carcinoma (breast, lung, prostate, etc.) far outnumbers primary bone sarcomas — “most common primary” and “most common overall” are different answers.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 15-year-old has a painful mass at the distal femur metaphysis; X-ray shows a mixed lytic-blastic lesion with cortical destruction and a Codman triangle. Biopsy shows malignant cells producing osteoid. The diagnosis is:',
      options: [
        { id: 'a', text: 'Ewing sarcoma' },
        { id: 'b', text: 'Osteosarcoma' },
        { id: 'c', text: 'Giant cell tumor' },
        { id: 'd', text: 'Chondrosarcoma' },
      ],
      answerId: 'b',
      explanation: 'A metaphyseal tumor around the knee in a teenager with a Codman triangle and osteoid-producing malignant cells is osteosarcoma — the most common primary malignant bone tumor.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Bone tumor locations', svg: BONE_TUMOR_LOCATIONS, caption: 'Epiphysis → giant cell tumor; metaphysis → osteosarcoma/osteochondroma; diaphysis → Ewing sarcoma. Metastasis = most common overall.' },
  ],
};

export default boneTumors;
