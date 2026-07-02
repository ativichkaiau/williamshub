import type { Lecture } from '../../lib/types';
import { ECG_LEADS_AXIS } from '../../lib/figures';

export const ecgLeadsAxis: Lecture = {
  id: 'ecg-leads-axis',
  title: 'ECG Leads & the Cardiac Axis',
  system: 'cardiovascular',
  source: 'L6 — Electrocardiography',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L6 Electrocardiography' },
    { kind: 'mechanism', label: '12 views · vector' },
    { kind: 'exam', label: 'Territories · axis' },
  ],

  highYield: [
    '**The 12-lead ECG gives 12 "views" of the heart\'s electrical vector from different angles.** **6 limb leads** view the **frontal plane** — **I, II, III** (Einthoven\'s triangle, **bipolar**) plus **aVR, aVL, aVF** (augmented, **unipolar**). **6 chest (precordial) leads V1–V6** view the **horizontal plane**.',
    '**A lead is positive when the depolarisation vector points toward it** (upward deflection) and negative when it points away — so each lead "sees" the heart from its own direction, letting you localise events.',
    '**Lead territories (localise ischaemia/infarction):** **inferior = II, III, aVF** (right coronary); **lateral = I, aVL, V5–V6** (circumflex); **anterior/septal = V1–V4** (left anterior descending). Reciprocal changes appear in opposite leads.',
    '**The mean QRS axis** is the average direction of ventricular depolarisation in the frontal plane; **normal ≈ −30° to +90°.** Quick check with leads **I and aVF**: **both upright → normal axis**; **I up / aVF down → left axis deviation**; **I down / aVF up → right axis deviation**; both down → extreme axis.',
    '**Axis deviation has clinical meaning:** **left axis** (e.g. LV hypertrophy, left anterior fascicular block, inferior MI); **right axis** (e.g. RV hypertrophy, pulmonary hypertension/PE, left posterior fascicular block, tall thin people). The hexaxial reference system maps limb leads onto degrees.',
  ],

  mechanism: {
    title: '12 angles on one vector; average = axis',
    steps: [
      { id: 's1', label: '6 limb leads (frontal) + 6 chest leads (horizontal)', emphasis: 'key' },
      { id: 's2', label: 'Vector toward a lead → positive deflection', emphasis: 'key' },
      { id: 's3', label: 'Territories: inferior II/III/aVF, lateral I/aVL/V5-6, anterior V1-4', emphasis: 'key' },
      { id: 's4', label: 'Normal axis −30° to +90°' },
      { id: 's5', label: 'Leads I & aVF: both up = normal; check for LAD/RAD', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'ST changes in II, III, aVF', mechanism: 'Inferior territory (right coronary artery)', significance: 'key' },
    { sign: 'ST changes in V1–V4', mechanism: 'Anteroseptal territory (LAD)', significance: 'key' },
    { sign: 'Lead I up, aVF down', mechanism: 'Left axis deviation', significance: 'key' },
    { sign: 'Lead I down, aVF up', mechanism: 'Right axis deviation', significance: 'key' },
    { sign: 'Right axis deviation with RV strain', mechanism: 'RV hypertrophy / pulmonary hypertension / PE', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Leads viewing the inferior wall', meaning: 'II, III, aVF' },
    { clue: 'Leads viewing the anteroseptal wall', meaning: 'V1–V4' },
    { clue: 'Normal QRS axis range', meaning: '−30° to +90°' },
    { clue: 'Axis with lead I positive and aVF negative', meaning: 'Left axis deviation' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Lead territories localise MI (and guide the culprit artery); axis flags hypertrophy, fascicular blocks, and PE. This feeds the systematic ECG read ([[ecg-systematic-interpretation]]) and builds on wave formation ([[ecg-formation-waves]]). Clinical MI localisation in HCVS-2 ([[stemi-localization]]).' },
  ],

  mnemonics: [
    { hook: 'Territories: "Inferior II/III/aVF, Lateral I/aVL/V5-6, Anterior V1-4"', expansion: ['RCA / circumflex / LAD'] },
    { hook: 'Axis with I & aVF: "both up = normal; leaving each other = LAD; reaching = RAD"', expansion: ['Normal −30° to +90°'] },
  ],

  traps: [
    {
      questionCategory: 'Reading axis from leads I and aVF',
      wrongInstinct: 'If lead I is positive and aVF is negative, the axis is normal',
      rightAnswer: 'Lead I positive with aVF NEGATIVE indicates LEFT axis deviation; normal axis has BOTH leads I and aVF predominantly positive',
      why: 'Both positive = normal; I up/aVF down = left axis; I down/aVF up = right axis. Don\'t call I+/aVF− normal.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'ST-segment elevation seen in leads II, III, and aVF localises the infarct to the:',
      options: [
        { id: 'a', text: 'Anterior wall (LAD)' },
        { id: 'b', text: 'Lateral wall (circumflex)' },
        { id: 'c', text: 'Inferior wall (right coronary artery)' },
        { id: 'd', text: 'Posterior wall' },
      ],
      answerId: 'c',
      explanation: 'Leads II, III, and aVF view the inferior wall, usually supplied by the right coronary artery. Anterior = V1–V4 (LAD); lateral = I, aVL, V5–V6 (circumflex).',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'On the ECG, lead I is predominantly negative and lead aVF is predominantly positive. This indicates:',
      options: [
        { id: 'a', text: 'Normal axis' },
        { id: 'b', text: 'Left axis deviation' },
        { id: 'c', text: 'Right axis deviation' },
        { id: 'd', text: 'No electrical activity' },
      ],
      answerId: 'c',
      explanation: 'Lead I negative with aVF positive means the mean vector points down-and-right → right axis deviation (e.g. RV hypertrophy, PE). Both positive = normal; I up/aVF down = left axis.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'ECG leads & axis', svg: ECG_LEADS_AXIS, caption: '6 limb (frontal) + 6 chest (horizontal) leads; territories (inferior/lateral/anterior); axis via leads I & aVF (normal −30° to +90°).' },
  ],
};

export default ecgLeadsAxis;
