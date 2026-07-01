import type { Lecture } from '../../lib/types';

export const rhabdomyomaAndTumors: Lecture = {
  id: 'rhabdomyoma-and-tumors',
  title: 'Rhabdomyoma & Other Cardiac Tumors',
  system: 'cardiovascular',
  source: 'L20 — Cardiac Tumors',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L20 Cardiac Tumors' },
    { kind: 'disease', label: 'Rhabdomyoma' },
    { kind: 'mechanism', label: 'Age & site clues' },
    { kind: 'exam', label: 'Tuberous sclerosis' },
  ],

  highYield: [
    '**Rhabdomyoma = most common primary cardiac tumor in infants/children**; strongly **associated with tuberous sclerosis (TSC1/TSC2)**; a **hamartoma** with **"spider cells"**; **often regresses spontaneously**.',
    '**Papillary fibroelastoma**: **sea-anemone-like** frond lesion on **valves (esp. semilunar)**; usually incidental but **may embolize**; resembles the trivial **Lambl excrescences**.',
    '**Lipoma / lipomatous hypertrophy of the atrial septum**: mature fat; asymptomatic, or ball-valve obstruction / arrhythmia.',
    '**Angiosarcoma**: most common **primary malignancy**, typically **right atrium**, large and aggressive with pericardial invasion.',
    '**Secondary (metastatic) tumors** reach the heart via **retrograde lymphatic** (most carcinomas), **hematogenous**, **direct extension** (lung/breast/esophagus), or **venous** (kidney/liver) spread.',
  ],

  mechanism: {
    title: 'Match the tumor to age, site & clues',
    steps: [
      { id: 's1', label: 'Child + tuberous sclerosis → rhabdomyoma (regresses)', emphasis: 'key' },
      { id: 's2', label: 'Valve frond, sea-anemone → papillary fibroelastoma (embolizes)' },
      { id: 's3', label: 'Fatty mass → lipoma / lipomatous atrial-septal hypertrophy' },
      { id: 's4', label: 'Right heart, large, invasive → angiosarcoma', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Infant with obstruction/arrhythmia + tuberous sclerosis stigmata', mechanism: 'Rhabdomyoma (ash-leaf spots, seizures, angiofibromas)', significance: 'key' },
    { sign: 'Embolic stroke from a valve lesion', mechanism: 'Papillary fibroelastoma fragments', significance: 'key' },
    { sign: 'Right heart failure + hemorrhagic pericardial effusion', mechanism: 'Angiosarcoma invasion', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Echo / cardiac MRI', meaning: 'Site & mobility of the mass' },
    { clue: 'Genetics (TSC1/TSC2) for rhabdomyoma', meaning: 'Confirms tuberous sclerosis link' },
    { clue: 'Histology: spider cells (rhabdomyoma); sea-anemone fronds (fibroelastoma)', meaning: 'Definitive diagnosis' },
  ],

  treatment: [
    { logic: 'Rhabdomyoma: observe (often regresses)', detail: 'Resect only if obstructing.' },
    { logic: 'Papillary fibroelastoma: excise if symptomatic/embolic', detail: 'Prevents further emboli.' },
    { logic: 'Angiosarcoma: poor prognosis, multimodal/palliative', detail: 'Aggressive right-heart malignancy.' },
  ],

  mnemonics: [
    { hook: 'Rhabdomyoma = Rug-rats (kids) + tuberous sclerosis + spider cells (regresses)', expansion: ['TSC1/TSC2 hamartoma'] },
    { hook: 'Papillary fibroelastoma = valve frond, sea-anemone, embolizes', expansion: ['Bigger cousin of Lambl excrescences'] },
  ],

  traps: [
    {
      questionCategory: 'Pediatric cardiac tumor + syndrome',
      wrongInstinct: 'The commonest childhood cardiac tumor is myxoma',
      rightAnswer: 'In infants/children it is rhabdomyoma, associated with tuberous sclerosis (TSC1/TSC2)',
      why: 'Myxoma is the commonest adult primary tumor; in children it is rhabdomyoma — a hamartoma with spider cells, strongly linked to tuberous sclerosis and often regressing spontaneously.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An infant is found to have multiple cardiac rhabdomyomas. Which associated genetic condition is most likely?',
      options: [
        { id: 'a', text: 'Marfan syndrome' },
        { id: 'b', text: 'Tuberous sclerosis' },
        { id: 'c', text: 'Down syndrome' },
        { id: 'd', text: 'Neurofibromatosis type 1' },
      ],
      answerId: 'b',
      explanation: 'Cardiac rhabdomyomas are the most common heart tumor of infancy and are strongly associated with tuberous sclerosis (TSC1/TSC2 mutations). They are hamartomas with "spider cells" and often regress spontaneously.',
      tests: 'exam',
    },
  ],
};

export default rhabdomyomaAndTumors;
