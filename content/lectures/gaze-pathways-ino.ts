import type { Lecture } from '../../lib/types';

export const gazePathwaysIno: Lecture = {
  id: 'gaze-pathways-ino',
  title: 'Gaze Pathways & Disorders (INO)',
  system: 'neuro',
  source: 'L2 — Clinical Neuroanatomy II',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L2 Clinical Neuroanatomy II' },
    { kind: 'disease', label: 'Gaze palsy / INO' },
    { kind: 'mechanism', label: 'PPRF–MLF' },
    { kind: 'exam', label: 'INO' },
  ],

  highYield: [
    '**Horizontal gaze circuit**: frontal eye field (**BA8**) → **contralateral PPRF** → **ipsilateral abducens (CN VI) nucleus** → drives ipsilateral LR **and**, via the **MLF**, the **contralateral CN III (MR)** → conjugate horizontal gaze.',
    '**INO = MLF lesion**: on looking to the opposite side the **ipsilateral eye fails to adduct** while the **abducting eye shows nystagmus**; **convergence is preserved** (nuclei intact). Bilateral INO in a young patient → **multiple sclerosis**.',
    '**Gaze-centre (PPRF / abducens nucleus) lesion → ipsilateral horizontal gaze palsy** — neither eye looks toward the lesion.',
    '**Supranuclear (cortical) gaze**: a destructive frontal lesion → eyes deviate **toward the lesion** (away from the hemiparesis); a seizure drives eyes **away from the focus**.',
    'Eye-movement classes: **saccades** (rapid refixation), **smooth pursuit** (tracking), **optokinetic**, and the **vestibulo-ocular reflex (VOR)** for gaze stability.',
  ],

  mechanism: {
    title: 'One nucleus yokes both eyes; break a link → a named palsy',
    steps: [
      { id: 's1', label: 'FEF → contralateral PPRF' },
      { id: 's2', label: 'PPRF → ipsilateral abducens nucleus', emphasis: 'key' },
      { id: 's3', label: 'Abducens nucleus → ipsi LR + (via MLF) contra MR' },
      { id: 's4', label: 'MLF lesion → adduction fails on that side = INO', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Failure of adduction of one eye + nystagmus of the abducting eye', mechanism: 'Ipsilateral MLF lesion (INO)', significance: 'key' },
    { sign: 'Both eyes cannot look toward one side', mechanism: 'PPRF / abducens-nucleus (gaze-centre) lesion', significance: 'key' },
    { sign: 'Preserved convergence despite adduction failure on gaze', mechanism: 'CN III nucleus intact — localizes to the MLF', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'MRI brainstem (dorsal pons/midbrain)', meaning: 'MLF, PPRF, abducens nucleus lesions' },
    { clue: 'Age + bilateral INO', meaning: 'MS (young) vs stroke (older)' },
    { clue: 'Direction of conjugate deviation', meaning: 'Cortical vs pontine, destructive vs irritative' },
  ],

  treatment: [
    { logic: 'Treat the cause (demyelination vs infarct)', detail: 'INO from MS may resolve; stroke needs vascular workup.' },
    { logic: 'Localize precisely — brainstem eloquence', detail: 'Adjacent structures (respiration, consciousness) at risk.' },
  ],

  mnemonics: [
    { hook: 'INO = MLF; the ADducting eye is the problem side', expansion: ['Abducting eye shows nystagmus'] },
    { hook: 'Cortex looks AT its own lesion; seizure looks AWAY', expansion: ['Destructive vs irritative frontal gaze'] },
  ],

  traps: [
    {
      questionCategory: 'Localizing failed adduction',
      wrongInstinct: 'An eye that won’t adduct means a CN III (medial rectus) palsy',
      rightAnswer: 'If convergence is intact and the other eye shows abducting nystagmus, it is an internuclear ophthalmoplegia (MLF lesion), not a CN III palsy',
      why: 'A CN III palsy also affects convergence, lid, and pupil; an INO spares convergence and the pupil because the CN III nucleus is intact — the defect is in the MLF connecting it to the abducens nucleus.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 28-year-old woman cannot adduct her left eye on right gaze, and her right eye shows nystagmus while abducting; convergence is normal. The lesion is the:',
      options: [
        { id: 'a', text: 'Left CN III nucleus' },
        { id: 'b', text: 'Left medial longitudinal fasciculus (INO)' },
        { id: 'c', text: 'Right PPRF' },
        { id: 'd', text: 'Left lateral rectus' },
      ],
      answerId: 'b',
      explanation: 'Impaired adduction of the left eye with abducting nystagmus of the right and preserved convergence is a left internuclear ophthalmoplegia (MLF lesion) — in a young woman, think multiple sclerosis.',
      tests: 'exam',
    },
  ],
};

export default gazePathwaysIno;
