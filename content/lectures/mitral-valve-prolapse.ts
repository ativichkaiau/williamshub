import type { Lecture } from '../../lib/types';

export const mitralValveProlapse: Lecture = {
  id: 'mitral-valve-prolapse',
  title: 'Mitral Valve Prolapse',
  system: 'cardiovascular',
  source: 'L8 — Valvular Heart Disease',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L8 Valvular Heart Disease' },
    { kind: 'disease', label: 'Mitral valve prolapse' },
    { kind: 'mechanism', label: 'Myxomatous degeneration' },
    { kind: 'exam', label: 'Mid-systolic click' },
  ],

  highYield: [
    'Most common valve abnormality; **myxomatous degeneration** (mucoid ground substance) → floppy redundant leaflets.',
    '**Mid-systolic click ± late systolic murmur** at the apex.',
    'Associated with **Marfan syndrome (fibrillin-1 mutation)** and Ehlers-Danlos.',
    'Usually benign; complications: **chordae rupture → acute MR**, infective endocarditis, arrhythmia, rarely sudden death.',
    'Click moves **earlier** with ↓preload (standing, Valsalva).',
  ],

  mechanism: {
    title: 'Myxomatous leaflets → prolapse → click ± MR',
    steps: [
      { id: 's1', label: 'Myxomatous degeneration (↑ ground substance)' },
      { id: 's2', label: 'Elongated chordae + redundant leaflets', emphasis: 'key' },
      { id: 's3', label: 'Leaflet prolapses into LA in systole' },
      { id: 's4', label: 'Mid-systolic click (± late systolic murmur)' },
    ],
    branches: [
      {
        fromId: 's3',
        title: 'Complication',
        steps: [{ id: 'c1', label: 'Chordae rupture → acute MR', emphasis: 'danger' }],
      },
    ],
  },

  examFindings: [
    { sign: 'Mid-systolic click ± late systolic murmur at the apex', mechanism: 'Sudden tensing of prolapsing leaflet/chordae', significance: 'key' },
    { sign: 'Click earlier/louder with standing or Valsalva', mechanism: '↓ preload → smaller LV → earlier prolapse', significance: 'key' },
    { sign: 'Marfan stigmata (tall, arachnodactyly, arm span)', mechanism: 'Fibrillin-1 connective tissue defect', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Echocardiography', meaning: 'Prolapse, myxomatous leaflets, MR severity — diagnostic' },
  ],

  treatment: [
    { logic: 'Usually reassurance / observation', detail: 'Most are benign.' },
    { logic: 'Severe MR or ruptured chordae → mitral repair/replacement', detail: 'Surgical correction.' },
  ],

  mnemonics: [
    { hook: 'MVP = Mid-systolic click, Myxomatous, Marfan', expansion: ['Myxomatous degeneration', 'Fibrillin-1 (Marfan)'] },
    { hook: 'Stand up → click comes earlier', expansion: ['↓ preload moves the click earlier in systole'] },
  ],

  traps: [
    {
      questionCategory: 'Genetic association',
      wrongInstinct: 'MVP is due to a beta-myosin mutation (HCM)',
      rightAnswer: 'MVP (myxomatous degeneration) is linked to fibrillin-1 (Marfan)',
      why: 'Fibrillin-1 defects (Marfan) cause myxomatous valve degeneration; beta-myosin/sarcomere mutations cause hypertrophic cardiomyopathy — a different disease.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 19-year-old woman with a mid-systolic click and aortic root dilation dies suddenly; autopsy shows a prolapsed mitral valve with elongated, ruptured chordae tendineae. Which gene is most likely mutated?',
      options: [
        { id: 'a', text: 'Beta-myosin' },
        { id: 'b', text: 'FGFR' },
        { id: 'c', text: 'Fibrillin' },
        { id: 'd', text: 'Dystrophin' },
      ],
      answerId: 'c',
      explanation: 'Mid-systolic click + aortic root dilation + myxomatous mitral prolapse with chordae rupture points to Marfan syndrome — a fibrillin-1 (FBN1) mutation.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Murmur timing — MVP', murmur: 'mvp', caption: 'Mid-systolic click followed by a late-systolic murmur.' },
  ],
};

export default mitralValveProlapse;
