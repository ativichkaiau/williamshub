import type { Lecture } from '../../lib/types';

export const jointAnatomySynovialFluid: Lecture = {
  id: 'joint-anatomy-synovial-fluid',
  title: 'Joint Anatomy & Synovial Fluid',
  system: 'msk',
  source: 'L3 — Diseases of Joint',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'MSK' },
    { kind: 'lecture', label: 'L3 Diseases of Joint' },
    { kind: 'disease', label: 'Joint basics' },
    { kind: 'mechanism', label: 'Synovium & cartilage' },
    { kind: 'exam', label: 'Synovial fluid WBC' },
  ],

  highYield: [
    'Joint types: **fibrous (synarthrosis — sutures)**, **cartilaginous (amphiarthrosis — intervertebral discs)**, and **synovial (diarthrosis — freely movable, joint cavity)**.',
    'The **synovial membrane** has **type A synoviocytes (phagocytic macrophages)** and **type B synoviocytes (fibroblast-like, make hyaluronic acid)**; it lacks a basement membrane. **Synovial fluid** = a hyaluronate-rich filtrate that lubricates and nourishes cartilage (viscosity “string test”).',
    '**Articular (hyaline) cartilage** = water (~70%), **type II collagen**, proteoglycans, chondrocytes; **avascular/aneural** — repaired poorly. Disease = degradative enzymes/cytokines (IL-1, TNF) outpace matrix synthesis.',
    '**Synovial-fluid WBC count**: **non-inflammatory <2,000**, **inflammatory 2,000–50,000**, **septic >50,000** (with >75% neutrophils suggesting bacterial infection).',
    'Congenital: **developmental dysplasia of the hip (DDH)** — risk female/firstborn/breech/oligohydramnios (Pavlik harness); **clubfoot (talipes equinovarus)** — PITX1.',
  ],

  mechanism: {
    title: 'Structure supports movement; fluid analysis classifies disease',
    steps: [
      { id: 's1', label: 'Synovial joint: cavity + synovium + hyaline cartilage' },
      { id: 's2', label: 'Type B synoviocytes make lubricating hyaluronate' },
      { id: 's3', label: 'Cartilage is avascular — poor healing', emphasis: 'key' },
      { id: 's4', label: 'Aspirate + WBC count → non-inflammatory / inflammatory / septic' },
    ],
  },

  examFindings: [
    { sign: 'Cloudy joint fluid, WBC >50,000, >75% PMN', mechanism: 'Septic (bacterial) arthritis', significance: 'key' },
    { sign: 'Clear, viscous fluid, WBC <2,000', mechanism: 'Non-inflammatory (e.g. osteoarthritis)', significance: 'key' },
    { sign: 'Limited hip abduction in an infant', mechanism: 'Developmental dysplasia of the hip', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Arthrocentesis + synovial fluid analysis', meaning: 'Cell count, crystals, culture' },
    { clue: 'Viscosity / string test', meaning: 'Hyaluronate content (inflammation lowers it)' },
    { clue: 'Fluid WBC thresholds', meaning: 'Non-inflammatory vs inflammatory vs septic' },
  ],

  treatment: [
    { logic: 'Aspirate any acute hot joint', detail: 'Exclude septic arthritis (emergency).' },
    { logic: 'DDH: Pavlik harness (age-dependent)', detail: 'Restore acetabular development.' },
  ],

  mnemonics: [
    { hook: 'Synovial fluid WBC: <2k non-inflam, 2k–50k inflam, >50k septic', expansion: ['>75% PMN → bacterial'] },
    { hook: 'Type A = phAgocyte (macrophage); type B = hyaluronate (fibroBlast)', expansion: ['Synoviocytes'] },
  ],

  traps: [
    {
      questionCategory: 'Why cartilage heals poorly',
      wrongInstinct: 'Articular cartilage heals well because it is bathed in nutrient-rich synovial fluid',
      rightAnswer: 'Hyaline articular cartilage is avascular and aneural, so it has limited capacity to regenerate after injury',
      why: 'Lacking blood supply, cartilage depends on slow diffusion from synovial fluid and cannot mount an effective repair — a key reason osteoarthritis progresses.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A hot, swollen knee is aspirated; synovial fluid shows 80,000 WBC/mm³ with 90% neutrophils. The most concerning diagnosis is:',
      options: [
        { id: 'a', text: 'Osteoarthritis' },
        { id: 'b', text: 'Septic (bacterial) arthritis' },
        { id: 'c', text: 'A traumatic hemarthrosis' },
        { id: 'd', text: 'Normal joint fluid' },
      ],
      answerId: 'b',
      explanation: 'A synovial WBC count >50,000 with a neutrophil predominance (>75%) indicates septic arthritis — a joint emergency requiring urgent drainage and antibiotics.',
      tests: 'investigation',
    },
  ],
};

export default jointAnatomySynovialFluid;
