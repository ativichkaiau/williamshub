import type { Lecture } from '../../lib/types';
import { LARYNGEAL_NERVES } from '../../lib/figures';

export const laryngealMusclesNerves: Lecture = {
  id: 'laryngeal-muscles-nerves',
  title: 'Laryngeal Muscles & Nerves',
  system: 'msk',
  source: 'L14 — Pharynx & Larynx',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L14 Pharynx & Larynx' },
    { kind: 'disease', label: 'Laryngeal nerves' },
    { kind: 'mechanism', label: 'Abduct vs adduct' },
    { kind: 'exam', label: 'Recurrent laryngeal palsy' },
  ],

  highYield: [
    'The intrinsic laryngeal muscles move the vocal folds. The **posterior cricoarytenoid is the ONLY ABDUCTOR** (opens the rima glottidis for breathing); the **lateral cricoarytenoid + transverse/oblique arytenoids adduct** (close for phonation); the **thyroarytenoid/vocalis and cricothyroid tense/adjust** the cords.',
    '**Nerve supply (both from the vagus)**: the **recurrent laryngeal nerve supplies ALL intrinsic muscles EXCEPT the cricothyroid**, and gives **sensation BELOW the vocal folds**. The **superior laryngeal nerve** splits into an **internal branch (SENSORY above the folds)** and an **external branch (MOTOR to cricothyroid)**.',
    '**Cricothyroid (external laryngeal nerve) tenses/lengthens the cords → raises pitch** — its injury (e.g. superior thyroid artery ligation in thyroidectomy) causes a **weak, monotone voice / inability to raise pitch**.',
    '**Recurrent laryngeal nerve injury** (thyroid surgery, aortic arch/left hilar lesions on the left): **UNILATERAL → hoarseness** (the cord sits paramedian); **BILATERAL → airway obstruction/stridor** because both abductors are lost and the folds sit near the midline — may need an emergency airway.',
    'The **internal laryngeal nerve** provides the protective **cough reflex** afferent from the laryngeal mucosa above the folds; its damage → **aspiration** (loss of the sensory limb of the cough reflex).',
  ],

  mechanism: {
    title: 'One abductor; two vagal nerves run the larynx',
    steps: [
      { id: 's1', label: 'Posterior cricoarytenoid = the ONLY abductor', emphasis: 'key' },
      { id: 's2', label: 'Recurrent laryngeal: all intrinsics EXCEPT cricothyroid' },
      { id: 's3', label: 'Superior laryngeal: internal (sensory) + external (cricothyroid)' },
      { id: 's4', label: 'Bilateral recurrent laryngeal palsy → stridor/airway loss', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Hoarseness after thyroidectomy', mechanism: 'Unilateral recurrent laryngeal nerve injury', significance: 'key' },
    { sign: 'Stridor / airway obstruction after bilateral neck surgery', mechanism: 'Bilateral recurrent laryngeal palsy (loss of abductors)', significance: 'key' },
    { sign: 'Weak, monotone voice unable to raise pitch', mechanism: 'External laryngeal nerve (cricothyroid) injury', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Laryngoscopy of vocal fold movement', meaning: 'Abduction/adduction and palsy side' },
    { clue: 'Voice/pitch assessment', meaning: 'Cricothyroid (external laryngeal) function' },
  ],

  treatment: [
    { logic: 'Identify/protect the recurrent laryngeal nerve in thyroid surgery', detail: 'Near the inferior thyroid artery.' },
    { logic: 'Bilateral palsy: secure the airway (tracheostomy)', detail: 'Both abductors lost.' },
  ],

  mnemonics: [
    { hook: 'Posterior cricoarytenoid = "Please Come Apart" — the only abductor', expansion: ['Loss → airway closes'] },
    { hook: 'Recurrent laryngeal = all intrinsics EXCEPT cricothyroid (external laryngeal)', expansion: ['Internal laryngeal = sensory above folds'] },
  ],

  traps: [
    {
      questionCategory: 'The only vocal-fold abductor',
      wrongInstinct: 'The lateral cricoarytenoid opens the vocal folds',
      rightAnswer: 'The POSTERIOR cricoarytenoid is the only ABDUCTOR (opens the airway); the LATERAL cricoarytenoid ADDUCTS (closes) the folds',
      why: 'Losing the posterior cricoarytenoid (bilateral RLN injury) leaves the folds adducted → airway obstruction, the key exam danger.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which single muscle abducts the vocal folds, and what is the consequence of losing it bilaterally?',
      options: [
        { id: 'a', text: 'Lateral cricoarytenoid; loss of phonation' },
        { id: 'b', text: 'Posterior cricoarytenoid; airway obstruction (folds cannot open)' },
        { id: 'c', text: 'Cricothyroid; monotone voice' },
        { id: 'd', text: 'Thyroarytenoid; aspiration' },
      ],
      answerId: 'b',
      explanation: 'The posterior cricoarytenoid is the only abductor of the vocal folds; bilateral loss (e.g. bilateral recurrent laryngeal nerve injury) leaves the folds near the midline and causes airway obstruction/stridor.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Laryngeal nerves & the one abductor', svg: LARYNGEAL_NERVES, caption: 'Recurrent laryngeal = all intrinsics except cricothyroid; posterior cricoarytenoid = the only abductor.' },
  ],
};

export default laryngealMusclesNerves;
