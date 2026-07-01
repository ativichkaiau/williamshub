import type { Lecture } from '../../lib/types';
import { CARDINAL_GAZE } from '../../lib/figures';

export const extraocularMuscles: Lecture = {
  id: 'extraocular-muscles',
  title: 'Extraocular Muscles & Actions',
  system: 'neuro',
  source: 'L2 — Clinical Neuroanatomy II',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L2 Clinical Neuroanatomy II' },
    { kind: 'disease', label: 'Ocular motor palsy' },
    { kind: 'mechanism', label: 'SIN RAD' },
    { kind: 'exam', label: 'Cardinal gaze' },
  ],

  highYield: [
    '**Innervation — “LR6 SO4, rest = 3”**: **lateral rectus = CN VI**, **superior oblique = CN IV**, the other four (MR, SR, IR, IO) + levator = **CN III**.',
    '**Primary actions**: MR adducts, LR abducts. **SIN RAD** for the vertical muscles: **S**uperior muscles **IN**tort, **R**ecti **AD**duct, **O**bliques **AB**duct.',
    'So **SR** = elevate/intort/adduct; **IR** = depress/extort/adduct; **SO** = depress/intort/abduct; **IO** = elevate/extort/abduct.',
    '**Clinical isolation of vertical action**: test **SR/IR in ABduction**; test **SO/IO in ADduction** — this lines the muscle up with the visual axis.',
    'Palsies: **CN III** = “down-and-out” eye + ptosis + fixed dilated pupil; **CN IV** = vertical diplopia worse on down-gaze/reading, compensatory **head tilt away**; **CN VI** = failure of abduction, horizontal diplopia.',
  ],

  mechanism: {
    title: 'Muscle pull + eye position → the clinical test',
    steps: [
      { id: 's1', label: 'Each muscle has primary + secondary actions' },
      { id: 's2', label: 'Visual axis vs orbital axis differ by ~23°', emphasis: 'key' },
      { id: 's3', label: 'Position the eye to isolate one action' },
      { id: 's4', label: 'SR/IR in abduction; SO/IO in adduction' },
    ],
  },

  examFindings: [
    { sign: '“Down-and-out” eye with ptosis and dilated pupil', mechanism: 'CN III palsy (unopposed LR + SO; loss of parasympathetic)', significance: 'key' },
    { sign: 'Vertical diplopia + head tilt to the opposite shoulder', mechanism: 'CN IV (SO) palsy — Bielschowsky', significance: 'key' },
    { sign: 'Eye cannot abduct, esotropia at rest', mechanism: 'CN VI (LR) palsy', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Cover test / diplopia charting in cardinal positions', meaning: 'Which muscle/nerve is weak' },
    { clue: 'Pupil involvement in CN III palsy', meaning: 'Compressive (aneurysm) vs ischemic (pupil-sparing)' },
    { clue: 'Head-tilt test (Bielschowsky)', meaning: 'Confirms SO/CN IV palsy' },
  ],

  treatment: [
    { logic: 'Painful pupil-involving CN III palsy = urgent', detail: 'Rule out posterior communicating artery aneurysm.' },
    { logic: 'Treat the cause; prisms/patching for diplopia', detail: 'Microvascular palsies often recover.' },
  ],

  mnemonics: [
    { hook: 'LR6 SO4 — the rest are 3', expansion: ['Lateral rectus VI, superior oblique IV, others CN III'] },
    { hook: 'SIN RAD: Superiors INtort, Recti ADduct, Obliques ABduct', expansion: ['Derives every secondary action'] },
  ],

  traps: [
    {
      questionCategory: 'Testing the superior oblique',
      wrongInstinct: 'Ask the patient to look down and out to test the superior oblique',
      rightAnswer: 'Test SO depression with the eye ADducted (looking down-and-in); SR/IR are tested in abduction',
      why: 'A muscle’s pure vertical action is only isolated when the eye is rotated so its axis aligns with the pull — obliques in adduction, recti in abduction.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient reports vertical diplopia worse when reading or descending stairs and tilts the head to one side to compensate. The affected nerve/muscle is:',
      options: [
        { id: 'a', text: 'CN VI / lateral rectus' },
        { id: 'b', text: 'CN IV / superior oblique' },
        { id: 'c', text: 'CN III / medial rectus' },
        { id: 'd', text: 'CN III / inferior oblique' },
      ],
      answerId: 'b',
      explanation: 'Vertical diplopia worse on down-gaze (reading, stairs) with a compensatory contralateral head tilt is a superior oblique (CN IV) palsy — the SO depresses the adducted eye.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Cardinal positions of gaze', svg: CARDINAL_GAZE, caption: 'Muscle tested in each direction (right eye). SR/IR isolate in abduction, SO/IO in adduction.' },
  ],
};

export default extraocularMuscles;
