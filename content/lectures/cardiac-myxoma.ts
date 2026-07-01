import type { Lecture } from '../../lib/types';

export const cardiacMyxoma: Lecture = {
  id: 'cardiac-myxoma',
  title: 'Cardiac Myxoma',
  system: 'cardiovascular',
  source: 'L20 — Cardiac Tumors',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L20 Cardiac Tumors' },
    { kind: 'disease', label: 'Myxoma' },
    { kind: 'mechanism', label: 'Ball-valve obstruction' },
    { kind: 'exam', label: 'Myxoma triad' },
  ],

  highYield: [
    '**Most common primary cardiac tumor in adults**; clonal abnormalities of **chromosomes 12 & 17** (Carney complex when familial).',
    '**~90% arise in the atria (LA:RA = 4:1)**; favored origin at the **fossa ovalis**; usually single, **sessile or pedunculated**.',
    '**Ball-valve obstruction**: a pedunculated mass prolapses across the mitral valve in diastole → intermittent obstruction that **mimics mitral stenosis** (a "tumor plop").',
    '**Myxoma triad**: **embolic phenomena · intracardiac (flow) obstruction · constitutional symptoms** (fever, weight loss, ↑ESR — IL-6).',
    'Histology: **stellate/globular myxoma cells in abundant acid-mucopolysaccharide ground substance**, with characteristic vessel-/gland-like structures and hemorrhage.',
  ],

  mechanism: {
    title: 'Pedunculated LA mass → intermittent ball-valve obstruction',
    steps: [
      { id: 's1', label: 'Myxoma at fossa ovalis (left atrium)', emphasis: 'key' },
      { id: 's2', label: 'Pedunculated, mobile mass' },
      { id: 's3', label: 'Prolapses across mitral valve in diastole → intermittent obstruction (mitral-stenosis-like)' },
      { id: 's4', label: 'Positional dyspnea / syncope + "tumor plop"' },
    ],
    branches: [
      { fromId: 's2', title: 'Complications', steps: [
        { id: 'b1', label: 'Surface fragments embolize (stroke)', emphasis: 'danger' },
        { id: 'b2', label: 'IL-6 → fever, weight loss, ↑ESR (constitutional)' },
      ] },
    ],
  },

  examFindings: [
    { sign: 'Positional dyspnea / syncope + a "tumor plop" (early-diastolic sound)', mechanism: 'Mobile mass intermittently obstructs the mitral orifice', significance: 'key' },
    { sign: 'Diastolic murmur mimicking mitral stenosis', mechanism: 'Ball-valve obstruction of LV inflow', significance: 'key' },
    { sign: 'Systemic emboli (stroke) + fever / weight loss / ↑ESR', mechanism: 'Fragmentation + IL-6 secretion', significance: 'key' },
  ],

  investigations: [
    { clue: 'Echocardiography: mobile LA mass at the fossa ovalis', meaning: 'Diagnostic' },
    { clue: 'Histology after resection', meaning: 'Myxoma cells in myxoid ground substance' },
    { clue: '↑ ESR / constitutional workup', meaning: 'Reflects IL-6 (constitutional arm of the triad)' },
  ],

  treatment: [
    { logic: 'Surgical excision', detail: 'Curative; also removes the embolic/obstructive source.' },
    { logic: 'Timely surgery given embolic risk', detail: 'Even relatively small mobile myxomas can embolize.' },
  ],

  mnemonics: [
    { hook: 'Myxoma = Adult · LA · fossa ovalis · ball-valve · triad', expansion: ['Emboli, Obstruction, Constitutional symptoms'] },
    { hook: 'Tumor plop mimics mitral stenosis', expansion: ['But obstruction is positional/intermittent, not fixed'] },
  ],

  traps: [
    {
      questionCategory: 'Cause of positional mitral obstruction',
      wrongInstinct: 'Diastolic murmur + LA obstruction = rheumatic mitral stenosis',
      rightAnswer: 'A mobile LA mass causing POSITIONAL/intermittent obstruction with a tumor plop = atrial myxoma',
      why: 'Myxoma mimics mitral stenosis, but the obstruction is positional/intermittent (ball-valve) with a "tumor plop" plus constitutional and embolic features — echo shows a mass at the fossa ovalis rather than a fibrosed valve.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 55-year-old woman has 4 months of dyspnea on exertion, orthopnea, PND, and pulmonary edema, and now presents with dizziness, syncope, and fatigue. She is diagnosed with a primary heart tumor. The most likely tumor is:',
      options: [
        { id: 'a', text: 'Lipoma' },
        { id: 'b', text: 'Fibroma' },
        { id: 'c', text: 'Myxoma' },
        { id: 'd', text: 'Rhabdomyoma' },
      ],
      answerId: 'c',
      explanation: 'A left-atrial myxoma acts as a ball-valve, intermittently obstructing the mitral orifice — producing mitral-stenosis-like congestion (dyspnea, orthopnea, PND, pulmonary edema) plus positional syncope. It is the most common primary cardiac tumor in adults.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Diastolic obstruction (mitral-stenosis mimic)', murmur: 'mitral-stenosis', caption: 'Ball-valve obstruction gives a mid-diastolic rumble like mitral stenosis — but a mobile mass with a "tumor plop", not a fibrosed valve.' },
  ],
};

export default cardiacMyxoma;
