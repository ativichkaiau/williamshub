import type { Lecture } from '../../lib/types';

export const nonbacterialEndocarditis: Lecture = {
  id: 'nonbacterial-endocarditis',
  title: 'Marantic & Libman-Sacks Endocarditis',
  system: 'cardiovascular',
  source: 'L8 — Valvular Heart Disease',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L8 Valvular Heart Disease' },
    { kind: 'disease', label: 'Sterile endocarditis' },
    { kind: 'mechanism', label: 'Sterile vegetation' },
    { kind: 'investigation', label: 'Negative cultures' },
  ],

  highYield: [
    '**Sterile** vegetations (no organisms) — the key contrast with infective endocarditis (blood cultures **negative**).',
    '**NBTE (marantic)**: small **bland fibrin-platelet thrombi** along valve closure lines; **hypercoagulable / malignancy** (esp. **pancreatic/mucinous adenocarcinoma**), DIC, debilitation.',
    '**Libman-Sacks**: **SLE**; **sterile verrucous vegetations on BOTH surfaces** of the valve (mitral); immune-complex mediated.',
    'Both embolize (NBTE classically → **stroke**) without infection.',
    'Workup: ANA/anti-dsDNA (Libman-Sacks); search for occult malignancy (NBTE).',
  ],

  mechanism: {
    title: 'Sterile vegetations (no organisms)',
    steps: [{ id: 's1', label: 'Valve surface, NO infection', emphasis: 'key' }],
    branches: [
      {
        fromId: 's1',
        title: 'NBTE (marantic)',
        steps: [
          { id: 'n1', label: 'Hypercoagulable / malignancy (pancreatic adenoCA, DIC)' },
          { id: 'n2', label: 'Bland fibrin-platelet thrombi → embolic stroke', emphasis: 'danger' },
        ],
      },
      {
        fromId: 's1',
        title: 'Libman-Sacks',
        steps: [
          { id: 'l1', label: 'SLE immune complexes' },
          { id: 'l2', label: 'Verrucous vegetations on BOTH valve surfaces', emphasis: 'key' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'Embolic event with NEGATIVE blood cultures', mechanism: 'Sterile vegetation embolizes', significance: 'key' },
    { sign: 'SLE features (malar rash, arthritis, nephritis, painless oral ulcers)', mechanism: 'Libman-Sacks underlying lupus', significance: 'key' },
    { sign: 'Signs of underlying malignancy / DIC', mechanism: 'NBTE substrate', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Negative blood cultures + echo vegetations', meaning: 'Distinguishes from infective IE' },
    { clue: 'ANA, anti-dsDNA', meaning: 'Libman-Sacks (SLE)' },
    { clue: 'Search for occult malignancy / hypercoagulable state', meaning: 'NBTE' },
  ],

  treatment: [
    { logic: 'Treat the underlying condition (malignancy, SLE)', detail: 'Root cause.' },
    { logic: 'Anticoagulation for NBTE', detail: 'Prevent further embolism.' },
  ],

  mnemonics: [
    { hook: 'Marantic = Malignancy; Libman-Sacks = Lupus (both sides)', expansion: ['NBTE → bland thrombus, cancer', 'Libman-Sacks → verrucae on both leaflet surfaces'] },
  ],

  traps: [
    {
      questionCategory: 'Cause of stroke with negative cultures',
      wrongInstinct: 'Subacute bacterial endocarditis',
      rightAnswer: 'Nonbacterial thrombotic (marantic) endocarditis — sterile bland thrombus in malignancy',
      why: 'Negative blood cultures + embolic stroke in a cancer patient (e.g. pancreatic adenocarcinoma) points to NBTE — sterile fibrin-platelet vegetations, not infection.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with pancreatic adenocarcinoma has a cerebral infarct; blood cultures are negative; autopsy shows a bland (sterile) valvular thrombus. Diagnosis?',
      options: [
        { id: 'a', text: 'Acute infective endocarditis' },
        { id: 'b', text: 'Subacute infective endocarditis' },
        { id: 'c', text: 'Nonbacterial thrombotic (marantic) endocarditis' },
        { id: 'd', text: 'Rheumatic endocarditis' },
      ],
      answerId: 'c',
      explanation: 'A sterile, bland valvular thrombus with negative cultures and embolic stroke in a patient with adenocarcinoma is nonbacterial thrombotic (marantic) endocarditis — a paraneoplastic/hypercoagulable phenomenon.',
      tests: 'exam',
    },
  ],
};

export default nonbacterialEndocarditis;
