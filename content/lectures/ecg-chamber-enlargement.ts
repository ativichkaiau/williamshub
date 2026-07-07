import type { Lecture } from '../../lib/types';

export const ecgChamberEnlargement: Lecture = {
  id: 'ecg-chamber-enlargement',
  title: 'ECG of Chamber Enlargement',
  system: 'cardiovascular',
  source: 'L8 — ECG in Clinical Practice',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L8 ECG Clinical' },
    { kind: 'mechanism', label: 'Hypertrophy patterns' },
    { kind: 'exam', label: 'P wave & QRS voltage' },
  ],

  highYield: [
    '**Chamber enlargement changes the ECG in predictable ways because more muscle generates a bigger vector and takes longer to depolarise.** Atrial enlargement alters the P WAVE; ventricular hypertrophy alters QRS VOLTAGE and axis. This applies vector thinking ([[cardiac-electrical-axis-vectors]]) to structural disease.',
    'Atrial enlargement is read in the P wave (best in lead II and V1). RIGHT atrial enlargement ("P pulmonale") = a tall, peaked P wave (>2.5 mm in II); LEFT atrial enlargement ("P mitrale") = a broad, notched (bifid) P wave in II and a deep terminal negative deflection in V1.',
    '**Left ventricular hypertrophy (LVH) increases leftward QRS voltage: tall R waves in the left-sided leads (I, aVL, V5–6) and deep S waves in the right-sided leads (V1–2).** Common voltage criteria: **S in V1 + R in V5/V6 > 35 mm** (Sokolow–Lyon). LVH may be accompanied by left axis deviation and a "strain" pattern (ST depression/T inversion).',
    '**Right ventricular hypertrophy (RVH) shifts things rightward: RIGHT axis deviation and a dominant R wave in V1** (the normally small right-sided R becomes tall), often with right atrial enlargement — seen in pulmonary hypertension/cor pulmonale and congenital disease.',
    '**These ECG signs are supportive, not definitive (echocardiography confirms), but they are fast, cheap clues** to hypertension/aortic disease (LVH), mitral disease (left atrial enlargement, P mitrale) and pulmonary/right-heart disease (RVH, P pulmonale). They extend the systematic ECG read ([[ecg-systematic-interpretation]]) to structural diagnosis.',
  ],

  mechanism: {
    title: 'More muscle → bigger/longer vector: P wave (atria), QRS voltage/axis (ventricles)',
    steps: [
      { id: 's1', label: 'Enlargement → bigger vector + longer depolarisation → ECG changes', emphasis: 'key' },
      { id: 's2', label: 'RA enlargement = tall peaked P ("P pulmonale"); LA = broad notched P ("P mitrale")', emphasis: 'key' },
      { id: 's3', label: 'LVH: tall R in I/aVL/V5-6 + deep S in V1-2 (Sokolow–Lyon >35 mm)', emphasis: 'key' },
      { id: 's4', label: 'RVH: right axis deviation + dominant R in V1' },
      { id: 's5', label: 'Supportive only — confirm with echocardiography' },
    ],
  },

  examFindings: [
    { sign: 'Tall, peaked P wave in lead II', mechanism: 'Right atrial enlargement (P pulmonale)', significance: 'key' },
    { sign: 'Broad, notched (bifid) P wave with deep terminal V1 negativity', mechanism: 'Left atrial enlargement (P mitrale)', significance: 'key' },
    { sign: 'Tall R in V5–6 + deep S in V1–2 (>35 mm)', mechanism: 'Left ventricular hypertrophy (Sokolow–Lyon)', significance: 'key' },
    { sign: 'Right axis deviation + dominant R wave in V1', mechanism: 'Right ventricular hypertrophy', significance: 'supportive' },
    { sign: 'LVH with ST depression/T inversion ("strain")', mechanism: 'Repolarisation abnormality of hypertrophy', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The ECG change of right atrial enlargement', meaning: 'Tall, peaked P wave (P pulmonale)' },
    { clue: 'The ECG change of left atrial enlargement', meaning: 'Broad, notched P wave (P mitrale); deep terminal V1 negativity' },
    { clue: 'A common voltage criterion for LVH', meaning: 'S in V1 + R in V5/V6 > 35 mm (Sokolow–Lyon)' },
    { clue: 'The ECG hallmark of right ventricular hypertrophy', meaning: 'Right axis deviation with a dominant R wave in V1' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Chamber-enlargement patterns apply the vector reasoning of [[cardiac-electrical-axis-vectors]] and the interval/voltage measurements of [[ecg-intervals-segments]] to structural disease — LVH (hypertension/aortic stenosis), left atrial enlargement (mitral disease), RVH (pulmonary hypertension). They are supportive clues within the systematic read ([[ecg-systematic-interpretation]]), confirmed by echocardiography.' },
  ],

  mnemonics: [
    { hook: 'P waves: "P pulmonale = Peaked (right atrium); P mitrale = M-shaped/notched (left atrium)"', expansion: ['Best seen in lead II (and V1)', 'LA → deep terminal V1 negativity'] },
    { hook: 'LVH = "tall left (V5-6) + deep right (V1-2)"; RVH = "right axis + tall R in V1"', expansion: ['Sokolow–Lyon >35 mm', 'RVH: pulmonary HTN/cor pulmonale'] },
  ],

  traps: [
    {
      questionCategory: 'Reliability of ECG hypertrophy criteria',
      wrongInstinct: 'High QRS voltage on the ECG definitively diagnoses left ventricular hypertrophy',
      rightAnswer: 'ECG voltage criteria are SUPPORTIVE but not definitive — they can be falsely positive (thin chest wall) or falsely negative (obesity, effusion); ECHOCARDIOGRAPHY is the confirmatory test for chamber size and hypertrophy',
      why: 'Voltage on the surface ECG depends on more than muscle mass (body habitus, lead placement), so treating the ECG as definitive over/under-calls hypertrophy; it is a screening clue confirmed by imaging.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A tall, peaked P wave (greater than 2.5 mm) in lead II indicates:',
      options: [
        { id: 'a', text: 'Left atrial enlargement' },
        { id: 'b', text: 'Right atrial enlargement (P pulmonale)' },
        { id: 'c', text: 'Left ventricular hypertrophy' },
        { id: 'd', text: 'First-degree AV block' },
      ],
      answerId: 'b',
      explanation: 'Right atrial enlargement produces a tall, peaked P wave ("P pulmonale"), classically in lead II. Left atrial enlargement instead gives a broad, notched ("M-shaped") P wave with a deep terminal negativity in V1.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Left ventricular hypertrophy on the ECG is typically suggested by:',
      options: [
        { id: 'a', text: 'A dominant R wave in V1 with right axis deviation' },
        { id: 'b', text: 'Tall R waves in the left-sided leads and deep S waves in the right-sided leads (increased voltage)' },
        { id: 'c', text: 'A short PR interval' },
        { id: 'd', text: 'A peaked P wave in lead II' },
      ],
      answerId: 'b',
      explanation: 'LVH increases leftward QRS voltage — tall R waves in I/aVL/V5–6 and deep S waves in V1–2 (e.g. Sokolow–Lyon >35 mm), often with left axis deviation and a strain pattern. A dominant R in V1 with right axis suggests RVH.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default ecgChamberEnlargement;
