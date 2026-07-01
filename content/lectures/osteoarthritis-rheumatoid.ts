import type { Lecture } from '../../lib/types';

export const osteoarthritisRheumatoid: Lecture = {
  id: 'osteoarthritis-rheumatoid',
  title: 'Osteoarthritis & Rheumatoid Arthritis',
  system: 'msk',
  source: 'L3 — Diseases of Joint',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'MSK' },
    { kind: 'lecture', label: 'L3 Diseases of Joint' },
    { kind: 'disease', label: 'OA / RA' },
    { kind: 'mechanism', label: 'Degenerative vs autoimmune' },
    { kind: 'exam', label: 'Pannus / nodes' },
  ],

  highYield: [
    '**Osteoarthritis (OA)** = **degenerative** cartilage loss (not primarily inflammatory). **Weight-bearing joints (knee/hip)** + hands (**Heberden nodes at DIP, Bouchard nodes at PIP**). Pathology: chondrocyte injury → matrix loss → **eburnation (bone-on-bone), subchondral cysts, osteophytes**. Brief (<30 min) morning stiffness.',
    '**Rheumatoid arthritis (RA)** = **autoimmune** synovitis. CD4 T cells + macrophages → **TNF, IL-1, IL-6, RANKL** → cartilage/bone erosion. Symmetric **small joints (hands/feet)**, **prolonged morning stiffness (>1 h)**, **swan-neck deformity, subcutaneous rheumatoid nodules**.',
    'RA hallmark = **pannus** (proliferative, vascular inflammatory synovium) that erodes cartilage and bridges bone → **ankylosis (fusion)**.',
    'RA serology: **rheumatoid factor (IgM anti-IgG Fc, ~80%)** and **anti-citrullinated protein antibody (ACPA, ~70%, more specific)**; **HLA-DR4**. Female predominance.',
    'Contrast: **OA = wear-and-tear, DIP nodes, worse with use, minimal systemic features**; **RA = inflammatory/systemic, spares DIPs, worse in the morning, positive serology**.',
  ],

  mechanism: {
    title: 'Cartilage wear (OA) vs immune synovitis (RA)',
    steps: [
      { id: 's1', label: 'OA: chondrocyte injury → matrix degradation', emphasis: 'key' },
      { id: 's2', label: 'OA: eburnation, osteophytes, subchondral cysts' },
      { id: 's3', label: 'RA: autoimmune synovitis → cytokines (TNF/IL-6)' },
      { id: 's4', label: 'RA: pannus erodes cartilage/bone → ankylosis', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Heberden (DIP) and Bouchard (PIP) nodes, worse with use', mechanism: 'Osteoarthritis', significance: 'key' },
    { sign: 'Symmetric MCP/PIP swelling, >1 h morning stiffness, swan-neck', mechanism: 'Rheumatoid arthritis', significance: 'key' },
    { sign: 'Subcutaneous rheumatoid nodule; positive RF/ACPA', mechanism: 'RA systemic disease', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Radiographs (osteophytes/joint-space loss vs erosions)', meaning: 'OA vs RA' },
    { clue: 'RF and anti-CCP (ACPA)', meaning: 'RA serology' },
    { clue: 'Pattern (DIP-sparing, symmetric, morning stiffness)', meaning: 'RA vs OA' },
  ],

  treatment: [
    { logic: 'OA: weight loss, exercise, acetaminophen/NSAIDs, joint replacement', detail: 'Symptomatic; no immune therapy.' },
    { logic: 'RA: early DMARDs (methotrexate) ± biologics', detail: 'Limit joint destruction (see drug modules).' },
  ],

  mnemonics: [
    { hook: 'OA = DIP (Heberden) + PIP (Bouchard), worse with use', expansion: ['Degenerative, weight-bearing'] },
    { hook: 'RA = symmetric, spares DIP, morning stiffness >1 h, Pannus, RF/ACPA', expansion: ['Autoimmune, systemic'] },
  ],

  traps: [
    {
      questionCategory: 'DIP involvement OA vs RA',
      wrongInstinct: 'Rheumatoid arthritis characteristically involves the distal interphalangeal (DIP) joints',
      rightAnswer: 'RA typically SPARES the DIP joints (favoring MCP/PIP); DIP involvement (Heberden nodes) is characteristic of osteoarthritis',
      why: 'The joint distribution is a key discriminator — DIP nodes point to OA, while RA is a symmetric MCP/PIP synovitis, so mislabeling DIP disease as RA is a classic error.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 45-year-old woman has symmetric swelling of the MCP and PIP joints, more than an hour of morning stiffness, subcutaneous nodules, and positive anti-CCP antibodies. The diagnosis is:',
      options: [
        { id: 'a', text: 'Osteoarthritis' },
        { id: 'b', text: 'Rheumatoid arthritis' },
        { id: 'c', text: 'Gout' },
        { id: 'd', text: 'Psoriatic arthritis' },
      ],
      answerId: 'b',
      explanation: 'Symmetric small-joint (MCP/PIP) synovitis with prolonged morning stiffness, rheumatoid nodules, and positive anti-CCP (ACPA) is rheumatoid arthritis — an autoimmune, pannus-forming arthritis.',
      tests: 'exam',
    },
  ],
};

export default osteoarthritisRheumatoid;
