import type { Lecture } from '../../lib/types';

export const infectiveEndocarditis: Lecture = {
  id: 'infective-endocarditis',
  title: 'Infective Endocarditis',
  system: 'cardiovascular',
  source: 'L8 — Valvular Heart Disease',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L8 Valvular Heart Disease' },
    { kind: 'disease', label: 'Infective endocarditis' },
    { kind: 'mechanism', label: 'Vegetation' },
    { kind: 'exam', label: 'Peripheral stigmata' },
  ],

  highYield: [
    'Microbial colonization of valves → **vegetations** (fibrin + platelets + organisms).',
    '**Acute IE**: virulent **S. aureus**, normal valves, rapid, large destructive vegetations (also IVDU → tricuspid).',
    '**Subacute IE**: low-virulence **Strep viridans**, abnormal/damaged valves, indolent.',
    'Peripheral stigmata: **Osler nodes** (painful), **Janeway lesions** (painless), **splinter hemorrhages**, **Roth spots**, splenomegaly.',
    '**Duke criteria** (blood cultures + echo vegetations); culture-negative → HACEK.',
  ],

  mechanism: {
    title: 'Bacteremia + valve surface → vegetation → embolism',
    steps: [
      { id: 's1', label: 'Bacteremia + valve surface (damaged or normal)' },
      { id: 's2', label: 'Microbial adhesion → vegetation', emphasis: 'key' },
    ],
    branches: [
      {
        fromId: 's2',
        title: 'Destruction',
        steps: [{ id: 'd1', label: 'Valve destruction → regurgitation' }],
      },
      {
        fromId: 's2',
        title: 'Embolic',
        steps: [{ id: 'e1', label: 'Septic emboli → Janeway / Roth / stroke', emphasis: 'danger' }],
      },
      {
        fromId: 's2',
        title: 'Immune',
        steps: [{ id: 'i1', label: 'Immune complexes → Osler nodes / glomerulonephritis' }],
      },
    ],
  },

  examFindings: [
    { sign: 'Fever + new regurgitant (pansystolic) murmur', mechanism: 'Valve vegetation/destruction', significance: 'key' },
    { sign: 'Osler nodes (painful), Janeway lesions (painless), splinter hemorrhages, Roth spots', mechanism: 'Immune complexes (Osler) & septic emboli (Janeway/Roth)', significance: 'key' },
    { sign: 'Splenomegaly, embolic phenomena', mechanism: 'Systemic embolization', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Blood cultures (≥3 sets) + echocardiography', meaning: 'Duke criteria — diagnostic' },
    { clue: 'ESR / CRP', meaning: 'Inflammation' },
    { clue: 'Culture-negative → HACEK organisms', meaning: 'Fastidious gram-negatives' },
  ],

  treatment: [
    { logic: 'Prolonged IV antibiotics (organism-directed)', detail: 'Weeks of therapy.' },
    { logic: 'Surgery for heart failure, large/embolizing vegetations, or abscess', detail: 'Source control.' },
    { logic: 'Prophylaxis in high-risk patients before certain procedures', detail: 'Prosthetic valve, prior IE.' },
  ],

  mnemonics: [
    { hook: 'Acute = S. Aureus (Angry); Subacute = viridans (Slow)', expansion: ['S. aureus → normal valves, fulminant', 'Viridans → damaged valves, indolent'] },
    { hook: 'Osler’s hurt, Janeway’s plain', expansion: ['Osler nodes = painful (immune)', 'Janeway lesions = painless (emboli)'] },
  ],

  traps: [
    {
      questionCategory: 'Acute vs subacute organism',
      wrongInstinct: 'All endocarditis is from Strep viridans',
      rightAnswer: 'Acute, destructive on normal valves = S. aureus; subacute on damaged valves = Strep viridans',
      why: 'Virulence determines the picture: S. aureus causes acute fulminant IE (also IVDU/tricuspid); viridans causes subacute IE on previously abnormal valves.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 29-year-old man has 3 days of high fever, delirium, a pansystolic murmur, splenomegaly, and splinter hemorrhages under his nails. Most likely diagnosis?',
      options: [
        { id: 'a', text: 'Acute infective endocarditis' },
        { id: 'b', text: 'Acute rheumatic fever' },
        { id: 'c', text: 'Libman-Sacks endocarditis' },
        { id: 'd', text: 'Marantic endocarditis' },
      ],
      answerId: 'a',
      explanation: 'Rapid fever, a new regurgitant murmur, splenomegaly, and splinter hemorrhages indicate acute infective endocarditis — classically S. aureus on a previously normal valve.',
      tests: 'exam',
    },
  ],
};

export default infectiveEndocarditis;
