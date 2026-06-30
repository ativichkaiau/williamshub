import type { Lecture } from '../../lib/types';

export const vasculitisOverview: Lecture = {
  id: 'vasculitis-overview',
  title: 'Vasculitis — Overview & ANCA',
  system: 'cardiovascular',
  source: 'L19 — Vascular Diseases II',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L19 Vascular Diseases II' },
    { kind: 'disease', label: 'Vasculitis' },
    { kind: 'mechanism', label: 'Immune vessel injury' },
    { kind: 'investigation', label: 'ANCA' },
  ],

  highYield: [
    'Vasculitis = **inflammation + necrosis of vessel walls**; immune-mediated (noninfectious) or direct infection.',
    'Noninfectious mechanisms: **immune complex deposition, ANCA, anti-endothelial antibodies, autoreactive T cells**.',
    '**PR3-ANCA (c-ANCA) → GPA (Wegener)**; **MPO-ANCA (p-ANCA) → microscopic polyangiitis & eosinophilic GPA (Churg-Strauss)** (PTU-induced).',
    'Classified by **vessel size**: large (giant cell, Takayasu), medium (PAN, Kawasaki, Buerger), small (MPA, GPA).',
    'Clinical: nonspecific (fever, fatigue, weight loss, myalgia) + **organ ischemia** from luminal narrowing/thrombosis.',
  ],

  mechanism: {
    title: 'Immune injury → vessel inflammation → ischemia',
    steps: [
      { id: 's1', label: 'Trigger (immune complex / ANCA / T cells / infection)' },
      { id: 's2', label: 'Vessel-wall inflammation + necrosis', emphasis: 'key' },
      { id: 's3', label: 'Luminal narrowing / thrombosis' },
      { id: 's4', label: 'Organ ischemia', emphasis: 'danger' },
    ],
    branches: [
      {
        fromId: 's2',
        title: 'ANCA types',
        steps: [{ id: 'a1', label: 'c-ANCA (PR3) → GPA · p-ANCA (MPO) → MPA / Churg-Strauss' }],
      },
    ],
  },

  examFindings: [
    { sign: 'Fever, fatigue, weight loss, myalgia', mechanism: 'Systemic inflammation', significance: 'key' },
    { sign: 'Organ-specific ischemia', mechanism: 'Luminal narrowing / thrombosis of inflamed vessels', significance: 'key' },
    { sign: 'Palpable purpura (small-vessel)', mechanism: 'Cutaneous leukocytoclastic vasculitis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'ANCA (c-ANCA/PR3, p-ANCA/MPO), ESR/CRP', meaning: 'Serologic classification & activity' },
    { clue: 'Biopsy (definitive); angiography', meaning: 'Histology / vessel involvement' },
  ],

  treatment: [
    { logic: 'Corticosteroids ± immunosuppression', detail: 'Cyclophosphamide/rituximab for severe ANCA disease.' },
    { logic: 'Treat infection if infectious vasculitis', detail: 'Direct pathogen-targeted therapy.' },
  ],

  mnemonics: [
    { hook: 'c-ANCA (PR3) → Wegener (GPA); p-ANCA (MPO) → MPA / Churg-Strauss', expansion: ['Match antibody to disease'] },
    { hook: 'Size: Large (GCA/Takayasu), Medium (PAN/Kawasaki/Buerger), Small (MPA/GPA)', expansion: ['Classification backbone'] },
  ],

  traps: [
    {
      questionCategory: 'ANCA association',
      wrongInstinct: 'c-ANCA goes with microscopic polyangiitis',
      rightAnswer: 'c-ANCA (PR3) → GPA (Wegener); p-ANCA (MPO) → microscopic polyangiitis / Churg-Strauss',
      why: 'Match the antibody: PR3/c-ANCA with granulomatosis with polyangiitis; MPO/p-ANCA with MPA and eosinophilic GPA.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with sinusitis, lung nodules, and crescentic glomerulonephritis has a positive c-ANCA (anti-PR3). Diagnosis?',
      options: [
        { id: 'a', text: 'Microscopic polyangiitis' },
        { id: 'b', text: 'Granulomatosis with polyangiitis (Wegener)' },
        { id: 'c', text: 'Polyarteritis nodosa' },
        { id: 'd', text: 'Takayasu arteritis' },
      ],
      answerId: 'b',
      explanation: 'Upper + lower respiratory granulomas with crescentic GN and PR3-ANCA (c-ANCA) is granulomatosis with polyangiitis (Wegener).',
      tests: 'exam',
    },
  ],
};

export default vasculitisOverview;
