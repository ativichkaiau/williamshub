import type { Lecture } from '../../lib/types';

export const ecgSystematicInterpretation: Lecture = {
  id: 'ecg-systematic-interpretation',
  title: 'ECG in Clinical Practice: A Systematic Approach',
  system: 'cardiovascular',
  source: 'L8 — ECG in Clinical Practice',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L8 ECG Clinical' },
    { kind: 'mechanism', label: 'Read every ECG the same way' },
    { kind: 'exam', label: 'Rate/rhythm/axis' },
  ],

  highYield: [
    '**Read every ECG the same way, in order, so nothing is missed:** **Rate → Rhythm → Axis → Intervals (PR, QRS, QT) → P waves → QRS morphology → ST segments/T waves.** A systematic routine beats pattern-spotting.',
    '**Rate:** 300 ÷ (large boxes between R waves) for regular rhythms; **normal 60–100** (bradycardia < 60, tachycardia > 100). **Rhythm:** is it **regular**? Is there a **P wave before every QRS and a QRS after every P** with a constant PR? If yes and upright P in II → **sinus rhythm**. Irregularly irregular with no P waves → **atrial fibrillation**.',
    '**Intervals:** **long PR (>0.20 s) → AV block**; **wide QRS (>0.12 s) → bundle branch block / ventricular origin**; **long QT → torsades risk** (drugs, electrolytes). **P wave:** absent/abnormal signals atrial arrhythmia or ectopic pacemaker.',
    '**ST/T changes are the acute-ischaemia read.** **ST elevation → acute injury (STEMI)** — localise by the lead territory ([[ecg-leads-axis]]); **ST depression / T inversion → ischaemia or NSTEMI**; **Q waves → old (established) infarction**. Correlate with symptoms and troponin ([[cardiac-biomarkers-acs]]).',
    '**Other high-yield patterns:** **hyperkalaemia** → peaked T waves → widening QRS → sine wave; **LV hypertrophy** → tall voltages; **pericarditis** → widespread saddle-shaped ST elevation. Always interpret the ECG **with the clinical context** — the same tracing means different things in different patients.',
  ],

  mechanism: {
    title: 'A fixed reading order catches everything',
    steps: [
      { id: 's1', label: 'Rate (300 ÷ big boxes) then rhythm (regular? P-QRS relation)', emphasis: 'key' },
      { id: 's2', label: 'Sinus rhythm = upright P in II before every QRS', emphasis: 'key' },
      { id: 's3', label: 'Intervals: long PR (block), wide QRS (BBB), long QT (torsades)', emphasis: 'key' },
      { id: 's4', label: 'ST elevation = STEMI (localise); depression/T-inv = ischaemia', emphasis: 'key' },
      { id: 's5', label: 'Recognise hyperkalaemia, LVH, AF; correlate clinically' },
    ],
  },

  examFindings: [
    { sign: 'Irregularly irregular rhythm, no P waves', mechanism: 'Atrial fibrillation', significance: 'key' },
    { sign: 'ST-segment elevation in a coronary territory', mechanism: 'Acute STEMI (transmural injury)', significance: 'key' },
    { sign: 'Peaked T waves → wide QRS', mechanism: 'Hyperkalaemia', significance: 'key' },
    { sign: 'Progressively lengthening PR then a dropped beat', mechanism: 'Mobitz I (Wenckebach) AV block', significance: 'supportive' },
    { sign: 'Pathological Q waves', mechanism: 'Old (established) myocardial infarction', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'First two steps in reading any ECG', meaning: 'Rate then rhythm' },
    { clue: 'ECG criterion for sinus rhythm', meaning: 'Upright P wave in lead II before each QRS' },
    { clue: 'ST elevation with chest pain', meaning: 'STEMI → urgent reperfusion' },
    { clue: 'Peaked T waves suggest', meaning: 'Hyperkalaemia' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'A systematic ECG read is a daily clinical skill for diagnosing MI, arrhythmias, blocks, and electrolyte emergencies. It integrates wave formation ([[ecg-formation-waves]]) and lead territories ([[ecg-leads-axis]]); the full arrhythmia catalogue is in HCVS-2 ([[atrial-fibrillation]], [[stemi-localization]]).' },
  ],

  mnemonics: [
    { hook: 'Read order: "Rate, Rhythm, Axis, Intervals, P, QRS, ST/T"', expansion: ['Same every time'] },
    { hook: 'ST Elevation = STEMI; depression/T-inv = ischaemia; Q = old MI', expansion: ['Localise by leads'] },
  ],

  traps: [
    {
      questionCategory: 'Interpreting the ECG',
      wrongInstinct: 'An ECG can be interpreted definitively without any clinical information',
      rightAnswer: 'ECG interpretation must be combined with the clinical context — the same tracing (e.g. ST changes) can be normal variant, ischaemia, or pericarditis depending on the patient',
      why: 'Sensitivity/specificity of ECG findings depend on pretest probability; always correlate with symptoms, history, and biomarkers.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An ECG shows an irregularly irregular rhythm with no discernible P waves. The most likely diagnosis is:',
      options: [
        { id: 'a', text: 'Sinus rhythm' },
        { id: 'b', text: 'Atrial fibrillation' },
        { id: 'c', text: 'First-degree AV block' },
        { id: 'd', text: 'Sinus bradycardia' },
      ],
      answerId: 'b',
      explanation: 'An irregularly irregular rhythm with absent P waves is characteristic of atrial fibrillation. Sinus rhythm requires an upright P wave before each QRS in a regular pattern.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'When reading an ECG systematically, sinus rhythm is confirmed by:',
      options: [
        { id: 'a', text: 'A wide QRS complex' },
        { id: 'b', text: 'An upright P wave in lead II preceding every QRS with a constant PR interval' },
        { id: 'c', text: 'ST-segment elevation' },
        { id: 'd', text: 'Peaked T waves' },
      ],
      answerId: 'b',
      explanation: 'Sinus rhythm = every QRS is preceded by an upright P wave in lead II (SA-node origin) with a constant, normal PR interval, at a regular rate.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default ecgSystematicInterpretation;
