import type { Lecture } from '../../lib/types';

export const cardiacElectricalAxisVectors: Lecture = {
  id: 'cardiac-electrical-axis-vectors',
  title: 'Cardiac Vectors & the Electrical Axis',
  system: 'cardiovascular',
  source: 'L5 — ECG Formation',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L5 ECG Formation' },
    { kind: 'mechanism', label: 'Dipole & vectors' },
    { kind: 'exam', label: 'Mean electrical axis' },
  ],

  highYield: [
    '**The ECG records the sum of the heart\'s electrical activity as a moving DIPOLE (a vector with magnitude and direction).** A wave of depolarisation moving TOWARD a recording (positive) electrode writes an UPWARD deflection; moving AWAY writes a DOWNWARD deflection; perpendicular gives a biphasic/flat wave. This single rule explains ECG morphology in every lead.',
    '**Each lead "looks at" the heart from a different angle, so the same electrical event appears differently in different leads.** The QRS is the vector sum of ventricular depolarisation; because the left ventricle is much larger, the mean QRS vector normally points down and to the patient\'s LEFT (inferolateral).',
    '**The MEAN ELECTRICAL (QRS) AXIS is the average direction of ventricular depolarisation in the frontal plane, normally about −30° to +90°.** It is estimated from the limb leads: **look at leads I and aVF — if the QRS is net positive in BOTH, the axis is normal.** Deviations point to underlying disease.',
    '**LEFT axis deviation (more negative than −30°) suggests left ventricular hypertrophy or left anterior fascicular block; RIGHT axis deviation (more positive than +90°) suggests right ventricular hypertrophy, or is normal in tall/thin people and children.** The axis is a quick summary of which ventricle/conduction pathway dominates.',
    '**The take-home is vector thinking: an ECG deflection\'s direction and size reflect the direction and magnitude of the net electrical vector relative to that lead.** This underlies the 12-lead system ([[ecg-leads-axis]]) and the genesis of the P-QRS-T waves ([[ecg-formation-waves]]) — and turns pattern-recognition into reasoning.',
  ],

  mechanism: {
    title: 'Heart = moving dipole; toward electrode = up; mean QRS axis from leads I & aVF',
    steps: [
      { id: 's1', label: 'ECG records a moving dipole (vector: magnitude + direction)', emphasis: 'key' },
      { id: 's2', label: 'Toward + electrode = upward; away = downward; perpendicular = biphasic', emphasis: 'key' },
      { id: 's3', label: 'Mean QRS vector points down-and-left (LV dominates); normal −30° to +90°', emphasis: 'key' },
      { id: 's4', label: 'Quick check: QRS net positive in BOTH I and aVF → normal axis' },
      { id: 's5', label: 'Left axis (LVH/LAFB) vs right axis (RVH; normal in tall/thin, children)' },
    ],
  },

  examFindings: [
    { sign: 'Upward QRS deflection in a lead', mechanism: 'Depolarisation moving toward that (positive) electrode', significance: 'key' },
    { sign: 'Positive QRS in both leads I and aVF', mechanism: 'Normal mean electrical axis', significance: 'key' },
    { sign: 'Left axis deviation', mechanism: 'LV hypertrophy or left anterior fascicular block', significance: 'supportive' },
    { sign: 'Right axis deviation', mechanism: 'RV hypertrophy (or normal in tall/thin people, children)', significance: 'supportive' },
    { sign: 'Biphasic/flat deflection in a lead', mechanism: 'Vector perpendicular to that lead', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The direction of deflection when depolarisation moves toward the electrode', meaning: 'Upward (positive)' },
    { clue: 'The two limb leads used for a quick axis check', meaning: 'Leads I and aVF' },
    { clue: 'The normal range of the mean QRS axis', meaning: 'About −30° to +90°' },
    { clue: 'The cause of left axis deviation', meaning: 'LV hypertrophy or left anterior fascicular block' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Vector reasoning is the foundation of ECG interpretation — it explains the P-QRS-T of [[ecg-formation-waves]], the 12-lead views and axis of [[ecg-leads-axis]], and the systematic reading in [[ecg-systematic-interpretation]]. Axis deviation flags chamber enlargement ([[ecg-chamber-enlargement]]) and conduction blocks, turning ECG pattern-recognition into mechanism.' },
  ],

  mnemonics: [
    { hook: 'Deflection rule: "Toward = up, Away = down, Perpendicular = flat/biphasic"', expansion: ['QRS = vector sum (LV dominates)', 'Normal axis points down-left'] },
    { hook: 'Quick axis: "I and aVF both up = normal"', expansion: ['I up, aVF down = left axis', 'I down, aVF up = right axis'] },
  ],

  traps: [
    {
      questionCategory: 'Interpreting the direction of an ECG deflection',
      wrongInstinct: 'A downward deflection means the electrical activity is weaker',
      rightAnswer: 'Deflection DIRECTION reflects the vector\'s direction relative to the lead, not its strength: a depolarisation moving AWAY from the positive electrode writes a DOWNWARD deflection regardless of magnitude — amplitude reflects magnitude, direction reflects orientation',
      why: 'Conflating direction with strength misreads the ECG; up/down encodes whether the vector points toward or away from the electrode, while the size of the deflection encodes the magnitude.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A wave of depolarisation travelling directly toward a positive recording electrode produces:',
      options: [
        { id: 'a', text: 'A downward (negative) deflection' },
        { id: 'b', text: 'An upward (positive) deflection' },
        { id: 'c', text: 'A flat line' },
        { id: 'd', text: 'A biphasic deflection' },
      ],
      answerId: 'b',
      explanation: 'By convention, a depolarisation vector moving toward the positive electrode inscribes an upward deflection; moving away gives a downward deflection, and moving perpendicular gives a biphasic or flat wave.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A quick way to confirm a normal mean QRS axis is to see that the QRS is net positive in:',
      options: [
        { id: 'a', text: 'Leads I and aVF' },
        { id: 'b', text: 'Leads V1 and V2' },
        { id: 'c', text: 'Lead aVR only' },
        { id: 'd', text: 'Leads II and III only' },
      ],
      answerId: 'a',
      explanation: 'If the QRS is predominantly positive in both lead I and lead aVF, the mean frontal-plane axis lies in the normal quadrant (roughly −30° to +90°). Discordance between these leads indicates axis deviation.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default cardiacElectricalAxisVectors;
