import type { Lecture } from '../../lib/types';
import { WEBER_RINNE } from '../../lib/figures';

export const hearingBalanceBasics: Lecture = {
  id: 'hearing-balance-basics',
  title: 'Hearing, Balance & Tuning-Fork Tests',
  system: 'neuro',
  source: 'L3 — Common Ear Disorders',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L3 Common Ear Disorders' },
    { kind: 'disease', label: 'Hearing loss' },
    { kind: 'mechanism', label: 'Sound transduction' },
    { kind: 'exam', label: 'Weber / Rinne' },
  ],

  highYield: [
    '**Ear = 3 parts**: **external** (pinna, ear canal) and **middle** (ossicles) do **conduction**; **inner ear** — **cochlea (organ of Corti) = hearing**, **labyrinth = balance**.',
    '**Energy chain**: sound (air) → **mechanical** (eardrum/ossicles) → **hydraulic** (cochlear fluid) → **bioelectric** (hair-cell depolarization → CN VIII).',
    '**Conductive hearing loss (CHL)** = external/middle-ear (mechanical) problem; **sensorineural (SNHL)** = cochlear (sensory) or retrocochlear (neural).',
    'Core otologic symptoms: **CHL, SNHL, otalgia, otorrhea, tinnitus/aural fullness, vertigo**.',
    '**Weber** (fork on vertex) **lateralizes to the affected ear in CHL, to the better ear in SNHL**. **Rinne**: **AC > BC = normal or SNHL**; **BC > AC = conductive loss**.',
  ],

  mechanism: {
    title: 'Where the chain breaks → the type of loss',
    steps: [
      { id: 's1', label: 'External/middle ear conducts sound' },
      { id: 's2', label: 'Cochlea transduces to nerve signal', emphasis: 'key' },
      { id: 's3', label: 'Block conduction → CHL; damage cochlea/nerve → SNHL' },
      { id: 's4', label: 'Weber + Rinne separate the two at the bedside' },
    ],
  },

  examFindings: [
    { sign: 'Weber lateralizes to the bad ear', mechanism: 'Conductive loss (bad ear hears bone conduction better)', significance: 'key' },
    { sign: 'Rinne negative (BC > AC) in the affected ear', mechanism: 'Conductive loss on that side', significance: 'key' },
    { sign: 'Weber to the good ear + Rinne positive both sides', mechanism: 'Sensorineural loss in the affected ear', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Tuning-fork tests (Weber, Rinne)', meaning: 'CHL vs SNHL at the bedside' },
    { clue: 'Pure-tone audiogram', meaning: 'Type, degree, and configuration of loss' },
    { clue: 'Otoscopy', meaning: 'Canal/eardrum pathology behind CHL' },
  ],

  treatment: [
    { logic: 'Direct workup by loss type', detail: 'CHL → mechanical causes; SNHL → cochlear/retrocochlear.' },
    { logic: 'Sudden SNHL is a red flag', detail: 'Urgent evaluation (see inner-ear disorders).' },
  ],

  mnemonics: [
    { hook: 'Rinne: BC > AC = Bad Conduction (conductive loss)', expansion: ['AC > BC is normal or SNHL'] },
    { hook: 'Weber lateralizes TO the conductive ear, AWAY from the SNHL ear', expansion: ['Bad-ear vs good-ear'] },
  ],

  traps: [
    {
      questionCategory: 'Interpreting Weber lateralization',
      wrongInstinct: 'Weber always lateralizes toward the healthy ear',
      rightAnswer: 'Weber lateralizes to the affected ear in conductive loss and to the better ear in sensorineural loss',
      why: 'In conductive loss the affected ear is shielded from ambient noise and detects bone conduction better, so Weber goes to the bad ear; in SNHL the cochlea is the problem, so sound is heard in the good ear.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'On the left ear, Rinne shows bone conduction louder than air conduction, and Weber lateralizes to the left. This indicates:',
      options: [
        { id: 'a', text: 'Left sensorineural hearing loss' },
        { id: 'b', text: 'Left conductive hearing loss' },
        { id: 'c', text: 'Normal hearing bilaterally' },
        { id: 'd', text: 'Right sensorineural hearing loss' },
      ],
      answerId: 'b',
      explanation: 'BC > AC (Rinne negative) plus Weber lateralizing to the same ear indicates a conductive hearing loss on the left.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Weber & Rinne interpretation', svg: WEBER_RINNE, caption: 'Rinne BC>AC = conductive; Weber to the bad ear = conductive, to the good ear = sensorineural.' },
  ],
};

export default hearingBalanceBasics;
