import type { Lecture } from '../../lib/types';
import { ECG_INTERVALS } from '../../lib/figures';

export const ecgIntervalsSegments: Lecture = {
  id: 'ecg-intervals-segments',
  title: 'ECG Intervals & Segments',
  system: 'cardiovascular',
  source: 'L6 — Electrocardiography',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L6 Electrocardiography' },
    { kind: 'mechanism', label: 'Timing on the ECG' },
    { kind: 'exam', label: 'PR / QRS / QT' },
  ],

  highYield: [
    '**The ECG is measured on standardised paper: at 25 mm/s each small box = 0.04 s (1 mm) and each large box = 0.20 s; vertically 1 large box = 0.5 mV.** Reading the intervals and segments turns the waveform into precise information about conduction times — the quantitative backbone of ECG interpretation.',
    'The PR interval (start of P to start of QRS, normally 0.12–0.20 s) measures AV conduction. A LONG PR = first-degree AV block; progressive or dropped conduction defines higher blocks. A SHORT PR with a delta wave suggests pre-excitation (WPW).',
    '**The QRS DURATION (normally <0.12 s) reflects the speed of ventricular depolarisation. A WIDE QRS indicates slowed ventricular conduction — bundle branch block, ventricular rhythms, hyperkalaemia, or pre-excitation.** Its amplitude reflects ventricular mass (large in hypertrophy).',
    '**The ST SEGMENT should be isoelectric; ST ELEVATION or DEPRESSION indicates myocardial injury/ischaemia. The QT interval (start of QRS to end of T) reflects total ventricular depolarisation + repolarisation; it is rate-corrected (QTc), and a LONG QT predisposes to torsades de pointes.** Drugs and electrolytes (low K⁺/Mg²⁺/Ca²⁺) prolong QT.',
    '**Heart RATE from the ECG: rate = 300 ÷ (number of large boxes between successive R waves), or count QRS complexes in a 6-second strip × 10.** Systematically checking rate, then each interval/segment, is how a normal ECG is confirmed and abnormalities localised ([[ecg-systematic-interpretation]]).',
  ],

  mechanism: {
    title: 'Boxes = time; PR (AV), QRS (ventricular), ST (injury), QT (repolarisation)',
    steps: [
      { id: 's1', label: 'Small box 0.04 s, large box 0.20 s; 1 large box = 0.5 mV', emphasis: 'key' },
      { id: 's2', label: 'PR (0.12–0.20 s) = AV conduction; long = AV block', emphasis: 'key' },
      { id: 's3', label: 'QRS (<0.12 s) = ventricular depolarisation; wide = BBB/ventricular', emphasis: 'key' },
      { id: 's4', label: 'ST segment = injury (elevation/depression); QT = repolarisation (torsades if long)', emphasis: 'danger' },
      { id: 's5', label: 'Rate = 300 ÷ large boxes between R waves' },
    ],
  },

  examFindings: [
    { sign: 'PR interval >0.20 s', mechanism: 'First-degree AV block (slowed AV conduction)', significance: 'key' },
    { sign: 'QRS duration >0.12 s', mechanism: 'Bundle branch block or ventricular origin', significance: 'key' },
    { sign: 'ST elevation or depression', mechanism: 'Myocardial injury/ischaemia', significance: 'key' },
    { sign: 'Prolonged QTc', mechanism: 'Risk of torsades (drugs, low K⁺/Mg²⁺/Ca²⁺)', significance: 'key' },
    { sign: 'Short PR with a delta wave', mechanism: 'Ventricular pre-excitation (WPW)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The interval reflecting AV nodal conduction', meaning: 'The PR interval (0.12–0.20 s)' },
    { clue: 'The normal upper limit of QRS duration', meaning: '0.12 s (wider = conduction delay/ventricular origin)' },
    { clue: 'The interval whose prolongation risks torsades', meaning: 'The QT interval (rate-corrected QTc)' },
    { clue: 'How to estimate rate from large boxes', meaning: 'Rate = 300 ÷ large boxes between R waves' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Interval analysis is the quantitative core of the systematic ECG read ([[ecg-systematic-interpretation]]); the waves themselves are generated as in [[ecg-formation-waves]] and viewed through the leads/axis of [[ecg-leads-axis]]. A long PR/wide QRS localises conduction disease; ST changes and long QT are the life-threatening findings that link to ischaemia and arrhythmia in HCVS-2.' },
  ],

  mnemonics: [
    { hook: 'Intervals: "PR = AV conduction, QRS = ventricle, QT = repolarisation"', expansion: ['Long PR = AV block', 'Wide QRS = BBB/ventricular', 'Long QT = torsades'] },
    { hook: 'Rate = "300 ÷ big boxes" (or 6-second strip ×10)', expansion: ['Small box 0.04 s, big box 0.20 s', 'Check every interval systematically'] },
  ],

  traps: [
    {
      questionCategory: 'Interpreting a wide QRS',
      wrongInstinct: 'A wide QRS complex simply means a strong ventricular contraction',
      rightAnswer: 'A wide QRS (>0.12 s) reflects SLOWED ventricular DEPOLARISATION (conduction delay) — bundle branch block, a ventricular rhythm, hyperkalaemia or pre-excitation — not the strength of contraction; amplitude (not width) relates to ventricular mass',
      why: 'QRS WIDTH encodes conduction time and QRS HEIGHT encodes muscle mass; confusing the two misreads a conduction problem as a contractility finding.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A PR interval consistently longer than 0.20 seconds indicates:',
      options: [
        { id: 'a', text: 'Ventricular hypertrophy' },
        { id: 'b', text: 'First-degree atrioventricular block (slowed AV conduction)' },
        { id: 'c', text: 'Myocardial ischaemia' },
        { id: 'd', text: 'Atrial fibrillation' },
      ],
      answerId: 'b',
      explanation: 'The PR interval measures conduction from the atria through the AV node; a value persistently above 0.20 s indicates first-degree AV block. QRS width reflects ventricular conduction and ST changes reflect ischaemia.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Marked prolongation of the QT interval is clinically important because it predisposes to:',
      options: [
        { id: 'a', text: 'Atrial flutter' },
        { id: 'b', text: 'Torsades de pointes' },
        { id: 'c', text: 'First-degree AV block' },
        { id: 'd', text: 'Sinus bradycardia' },
      ],
      answerId: 'b',
      explanation: 'The QT interval reflects ventricular repolarisation; prolongation (from drugs or low potassium/magnesium/calcium) predisposes to the polymorphic ventricular tachycardia torsades de pointes.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'ECG waves, intervals & segments', svg: ECG_INTERVALS, caption: 'P-QRS-T with the PR, QRS, ST and QT measurements and what each abnormality signifies.' },
  ],
};

export default ecgIntervalsSegments;
