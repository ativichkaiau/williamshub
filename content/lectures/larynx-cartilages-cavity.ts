import type { Lecture } from '../../lib/types';

export const larynxCartilagesCavity: Lecture = {
  id: 'larynx-cartilages-cavity',
  title: 'Larynx: Cartilages & Cavity',
  system: 'msk',
  source: 'L14 — Pharynx & Larynx',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L14 Pharynx & Larynx' },
    { kind: 'disease', label: 'Laryngeal skeleton' },
    { kind: 'mechanism', label: 'Cartilages & folds' },
    { kind: 'exam', label: 'Cricoid / cricothyrotomy' },
  ],

  highYield: [
    'The **laryngeal skeleton = 9 cartilages**: 3 unpaired (**thyroid, cricoid, epiglottis**) and 3 paired (**arytenoid, corniculate, cuneiform**). The **thyroid cartilage** forms the laryngeal prominence ("Adam\'s apple"); the **arytenoids** sit on the cricoid and anchor the vocal ligaments.',
    'The **cricoid cartilage is the ONLY complete ring** in the airway (signet-ring shaped, at C6) — it is the landmark for **cricoid pressure** and the lower limit of the larynx/pharynx. The **epiglottis** folds down over the laryngeal inlet during swallowing to prevent aspiration.',
    '**Membranes/ligaments**: the **thyrohyoid membrane** (pierced by the internal laryngeal nerve + superior laryngeal vessels), and the **cricothyroid membrane/ligament**; the **conus elasticus (cricovocal membrane)** thickens superiorly as the **vocal ligament** (core of the true vocal fold).',
    'The **cavity has 3 levels**: the **vestibule** (inlet → vestibular folds), the **ventricle** (between vestibular and vocal folds), and the **infraglottic space** (vocal folds → lower cricoid, continuous with the trachea). The **vestibular ("false") folds** protect; the **vocal ("true") folds** phonate. The gap between the true folds = the **rima glottidis**.',
    'The **cricothyroid membrane** is the site of an **emergency surgical airway (cricothyrotomy)** — a palpable soft spot between the thyroid and cricoid cartilages, above the thyroid isthmus.',
  ],

  mechanism: {
    title: 'Nine cartilages frame three cavity levels',
    steps: [
      { id: 's1', label: 'Thyroid, cricoid, epiglottis (unpaired) + arytenoids etc.', emphasis: 'key' },
      { id: 's2', label: 'Cricoid = only complete ring (C6)' },
      { id: 's3', label: 'Vestibule → ventricle → infraglottic (true folds = rima glottidis)' },
      { id: 's4', label: 'Cricothyroid membrane = emergency airway', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Palpable soft membrane between thyroid and cricoid cartilages', mechanism: 'Cricothyroid membrane (cricothyrotomy site)', significance: 'key' },
    { sign: 'Complete cartilage ring at C6', mechanism: 'Cricoid cartilage (cricoid pressure landmark)', significance: 'key' },
    { sign: 'Epiglottis covering the inlet during a swallow', mechanism: 'Prevents aspiration', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Laryngoscopy of the folds and rima glottidis', meaning: 'Vocal cord/level assessment' },
    { clue: 'Palpate thyroid → cricothyroid membrane → cricoid', meaning: 'Surface landmarks for airway' },
  ],

  treatment: [
    { logic: 'Cricothyrotomy through the cricothyroid membrane', detail: 'Emergency airway when intubation fails.' },
    { logic: 'Cricoid pressure during intubation', detail: 'Complete ring compresses the esophagus.' },
  ],

  mnemonics: [
    { hook: 'Cricoid = the only COMPLETE cartilage ring (C6)', expansion: ['Cricoid pressure landmark'] },
    { hook: 'True (vocal) folds phonate; false (vestibular) folds protect; gap = rima glottidis', expansion: ['Ventricle in between'] },
  ],

  traps: [
    {
      questionCategory: 'Which cartilage is a complete ring',
      wrongInstinct: 'The thyroid cartilage is a complete ring around the airway',
      rightAnswer: 'The CRICOID cartilage is the only complete ring; the thyroid cartilage is incomplete posteriorly (open like a shield)',
      why: 'This is why cricoid pressure works (a complete ring can compress the esophagus behind it) and why the cricoid is the airway\'s narrowest fixed point.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which laryngeal cartilage is the only complete ring and serves as the landmark for cricoid pressure?',
      options: [
        { id: 'a', text: 'Thyroid cartilage' },
        { id: 'b', text: 'Cricoid cartilage' },
        { id: 'c', text: 'Epiglottis' },
        { id: 'd', text: 'Arytenoid cartilage' },
      ],
      answerId: 'b',
      explanation: 'The cricoid cartilage is the only complete ring in the airway (signet-ring shaped, at C6); its completeness allows cricoid pressure to compress the esophagus and makes it the narrowest fixed point of the airway.',
      tests: 'exam',
    },
  ],
};

export default larynxCartilagesCavity;
