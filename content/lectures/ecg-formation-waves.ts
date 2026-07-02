import type { Lecture } from '../../lib/types';
import { ECG_WAVES } from '../../lib/figures';

export const ecgFormationWaves: Lecture = {
  id: 'ecg-formation-waves',
  title: 'ECG Formation: Waves & Intervals',
  system: 'cardiovascular',
  source: 'L5 — ECG Formation',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L5 ECG Formation' },
    { kind: 'mechanism', label: 'Depol/repol → trace' },
    { kind: 'exam', label: 'P-QRS-T · intervals' },
  ],

  highYield: [
    '**The ECG records the summed electrical activity of the heart from the body surface.** A wave of **depolarisation moving TOWARD a positive electrode → an UPWARD deflection**; moving away → downward. The trace reflects the sequence of atrial then ventricular depolarisation and repolarisation.',
    '**The waves:** the **P wave = atrial depolarisation**; the **QRS complex = ventricular depolarisation** (large, because ventricular mass is large); the **T wave = ventricular repolarisation**. **Atrial repolarisation is hidden within the QRS** (masked by the much larger ventricular signal).',
    '**Key intervals.** **PR interval** (start of P → start of QRS) = time for the impulse to travel from atria through the **AV node** (the AV delay); prolonged in **heart block**. **QRS duration** = ventricular depolarisation time; **wide (>0.12 s) in bundle branch block**. **QT interval** = total ventricular depolarisation + repolarisation; **prolonged QT → risk of torsades de pointes**.',
    '**ECG paper is standardised:** at 25 mm/s, **1 small box = 0.04 s** and **1 large box = 0.20 s**; vertically 1 small box = 0.1 mV. This lets you measure rate and intervals directly.',
    '**Heart rate estimation:** **300 ÷ (number of large boxes between two R waves)** for a regular rhythm (or count QRS complexes in a 6-second strip × 10 for irregular rhythms).',
  ],

  mechanism: {
    title: 'Electrical vectors → the P-QRS-T trace',
    steps: [
      { id: 's1', label: 'Depolarisation toward + electrode → upward deflection', emphasis: 'key' },
      { id: 's2', label: 'P = atrial depol; QRS = ventricular depol; T = ventricular repol', emphasis: 'key' },
      { id: 's3', label: 'Atrial repolarisation hidden in the QRS' },
      { id: 's4', label: 'PR = AV delay; wide QRS = bundle branch block; QT = repol', emphasis: 'key' },
      { id: 's5', label: 'Rate = 300 ÷ big boxes between R waves' },
    ],
  },

  examFindings: [
    { sign: 'P wave', mechanism: 'Atrial depolarisation', significance: 'key' },
    { sign: 'QRS complex', mechanism: 'Ventricular depolarisation (large mass)', significance: 'key' },
    { sign: 'T wave', mechanism: 'Ventricular repolarisation', significance: 'key' },
    { sign: 'Prolonged PR interval', mechanism: 'Slowed AV conduction (first-degree heart block)', significance: 'supportive' },
    { sign: 'Wide QRS (>0.12 s)', mechanism: 'Bundle branch block / ventricular origin', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'ECG wave of atrial depolarisation', meaning: 'P wave' },
    { clue: 'Interval representing AV nodal conduction', meaning: 'PR interval' },
    { clue: 'Why atrial repolarisation is not seen', meaning: 'Buried in the (much larger) QRS complex' },
    { clue: 'Rate for a regular rhythm with 4 large boxes between R waves', meaning: '300 ÷ 4 = 75/min' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Understanding wave formation lets you read intervals (heart block = long PR; BBB = wide QRS; long QT = torsades risk). Builds on conduction ([[pacemaker-conduction-system]]); leads/axis: [[ecg-leads-axis]]; systematic reading: [[ecg-systematic-interpretation]]. Arrhythmia patterns in HCVS-2.' },
  ],

  mnemonics: [
    { hook: 'P = atria, QRS = ventricles depolarise, T = ventricles repolarise', expansion: ['Atrial repol hidden in QRS'] },
    { hook: 'Rate = "300 / big boxes"; 1 small box = 0.04 s', expansion: ['PR = AV delay; long QT = torsades'] },
  ],

  traps: [
    {
      questionCategory: 'What the T wave represents',
      wrongInstinct: 'The T wave represents atrial repolarisation',
      rightAnswer: 'The T wave represents VENTRICULAR repolarisation; atrial repolarisation is hidden within the QRS complex',
      why: 'Ventricular mass dominates the ECG, so the small atrial-repolarisation signal is masked by the QRS — the T wave is ventricular.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'On the ECG, the QRS complex represents:',
      options: [
        { id: 'a', text: 'Atrial depolarisation' },
        { id: 'b', text: 'Ventricular depolarisation' },
        { id: 'c', text: 'Ventricular repolarisation' },
        { id: 'd', text: 'Atrial repolarisation' },
      ],
      answerId: 'b',
      explanation: 'The QRS reflects ventricular depolarisation (large because of ventricular mass). The P wave = atrial depolarisation; the T wave = ventricular repolarisation.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A prolonged PR interval on the ECG indicates:',
      options: [
        { id: 'a', text: 'Slowed conduction through the AV node' },
        { id: 'b', text: 'Ventricular hypertrophy' },
        { id: 'c', text: 'Fast atrial repolarisation' },
        { id: 'd', text: 'A short QT interval' },
      ],
      answerId: 'a',
      explanation: 'The PR interval measures the time from atrial depolarisation to ventricular depolarisation, largely the AV nodal delay; prolongation indicates slowed AV conduction (e.g. first-degree heart block).',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'ECG waves & intervals', svg: ECG_WAVES, caption: 'P (atrial depol), QRS (ventricular depol), T (ventricular repol); PR = AV delay, QRS width = ventricular conduction, QT = repolarisation.' },
  ],
};

export default ecgFormationWaves;
