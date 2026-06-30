import type { Lecture } from '../../lib/types';

export const smallVesselAndVenous: Lecture = {
  id: 'small-vessel-and-venous',
  title: 'Small-vessel Vasculitis & Venous Disease',
  system: 'cardiovascular',
  source: 'L19 — Vascular Diseases II',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L19 Vascular Diseases II' },
    { kind: 'disease', label: 'Small-vessel & venous' },
    { kind: 'mechanism', label: 'ANCA / venous stasis' },
    { kind: 'exam', label: 'Trousseau sign' },
  ],

  highYield: [
    '**Granulomatosis with polyangiitis (GPA, Wegener)**: small vessels — **upper resp (sinusitis, nasal ulcers), lungs, kidney (crescentic GN)**; granulomatous; **PR3-ANCA (c-ANCA)**.',
    '**Microscopic polyangiitis**: like GPA but **no nasopharyngeal disease / no granulomas**; **MPO-ANCA (p-ANCA)**; **leukocytoclastic** vasculitis.',
    '**Raynaud phenomenon**: cold-induced **pallor → cyanosis → redness** of digits; primary (young women, benign) vs secondary (**SLE, scleroderma, Sjögren** → ulcers).',
    '**Varicose veins**: dilated tortuous veins, **incompetent valves**, ↑venous pressure (standing, pregnancy, obesity).',
    '**Thrombophlebitis**: tender palpable cord; **migratory = Trousseau sign → occult visceral cancer (pancreas)**.',
  ],

  mechanism: {
    title: 'Small-vessel ANCA injury + venous disease',
    steps: [
      { id: 's1', label: 'ANCA small-vessel vasculitis (GPA / MPA)', emphasis: 'key' },
      { id: 's2', label: 'Lung + kidney injury' },
    ],
    branches: [
      {
        fromId: 's1',
        title: 'Venous',
        steps: [{ id: 'v1', label: '↑pressure / valve incompetence → varicosities; thrombus → thrombophlebitis', emphasis: 'danger' }],
      },
    ],
  },

  examFindings: [
    { sign: 'GPA: chronic sinusitis, saddle-nose, hemoptysis, hematuria', mechanism: 'Upper resp + lung + renal granulomatous vasculitis', significance: 'key' },
    { sign: 'Raynaud: tri-color digital change with cold', mechanism: 'Cold-induced vasospasm', significance: 'key' },
    { sign: 'Migratory superficial thrombophlebitis (Trousseau)', mechanism: 'Paraneoplastic hypercoagulability', significance: 'key' },
    { sign: 'Varicose veins, venous stasis ulcers', mechanism: 'Valve incompetence / venous hypertension', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'ANCA (PR3 vs MPO); biopsy', meaning: 'Granuloma (GPA) vs leukocytoclastic (MPA)' },
    { clue: 'Venous Doppler', meaning: 'Varicose veins / thrombosis' },
  ],

  treatment: [
    { logic: 'GPA/MPA: corticosteroids + cyclophosphamide / rituximab', detail: 'Induction & maintenance.' },
    { logic: 'Raynaud: warmth + CCB (nifedipine); treat secondary cause', detail: 'Primary is benign.' },
    { logic: 'Varicose veins: compression, ablation', detail: 'Reduce venous hypertension.' },
  ],

  mnemonics: [
    { hook: 'GPA (c-ANCA) = nose + lungs + kidney + granulomas; MPA (p-ANCA) = lungs + kidney, no granulomas', expansion: ['Granuloma distinguishes them'] },
    { hook: 'Migratory thrombophlebitis = Trousseau = hidden cancer (pancreas)', expansion: ['Paraneoplastic'] },
  ],

  traps: [
    {
      questionCategory: 'Migratory thrombophlebitis',
      wrongInstinct: 'Superficial migratory thrombophlebitis is just from IV cannulas',
      rightAnswer: 'Migratory (Trousseau) thrombophlebitis suggests occult visceral malignancy (esp. pancreatic head)',
      why: 'Recurrent migratory superficial thrombophlebitis (Trousseau sign) is a paraneoplastic hypercoagulable phenomenon — search for cancer.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient has recurrent migratory superficial thrombophlebitis appearing at different sites over weeks. What should be excluded?',
      options: [
        { id: 'a', text: 'IV drug use' },
        { id: 'b', text: 'Occult visceral malignancy (e.g. pancreatic cancer)' },
        { id: 'c', text: 'Varicose veins' },
        { id: 'd', text: 'Cellulitis' },
      ],
      answerId: 'b',
      explanation: 'Migratory superficial thrombophlebitis (Trousseau sign of malignancy) is a paraneoplastic hypercoagulable state classically linked to pancreatic and other visceral cancers.',
      tests: 'exam',
    },
  ],
};

export default smallVesselAndVenous;
