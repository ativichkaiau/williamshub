import type { Lecture } from '../../lib/types';
import { JVP_WAVEFORM } from '../../lib/figures';

export const jugularVenousPressureWaveform: Lecture = {
  id: 'jugular-venous-pressure-waveform',
  title: 'Jugular Venous Pressure & Waveform',
  system: 'cardiovascular',
  source: 'L10 — Cardiac Cycle & Hemodynamics',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L10 Cardiac Cycle' },
    { kind: 'mechanism', label: 'Right atrial pressure' },
    { kind: 'exam', label: 'JVP waveform' },
  ],

  highYield: [
    '**The jugular venous pressure (JVP) is a bedside window on RIGHT ATRIAL pressure — because the internal jugular vein connects to the right atrium with no intervening valves, its pulsations mirror right-heart filling.** It is measured as the vertical height of the venous column above the sternal angle (normally ≤3–4 cm); a raised JVP signals right-heart or volume problems.',
    '**The JVP has a characteristic waveform: the a wave = atrial contraction; the c wave = tricuspid bulging into the atrium in early systole; the x descent = atrial relaxation; the v wave = atrial filling against a closed tricuspid valve; the y descent = tricuspid opening and atrial emptying.** Each corresponds to an event in the cardiac cycle ([[cardiac-cycle-heart-sounds]]).',
    '**Abnormal waves localise disease: the a wave is ABSENT in atrial fibrillation (no coordinated atrial contraction) and becomes a giant "CANNON" a wave in complete heart block (atrium contracts against a closed tricuspid). Large v waves occur in TRICUSPID REGURGITATION** (systolic backflow into the atrium).',
    '**A raised JVP indicates elevated right atrial pressure — right heart failure, tricuspid disease, fluid overload, pericardial disease, or pulmonary hypertension.** The **Kussmaul sign** (a paradoxical RISE in JVP on inspiration) suggests impaired right-heart filling, as in constrictive pericarditis or restrictive disease.',
    '**JVP distinguishes cardiac from non-cardiac causes at the bedside and, unlike the carotid, is non-palpable, biphasic, varies with respiration and position, and falls with abdominal pressure only transiently (a sustained rise = hepatojugular reflux).** It ties the venous side of the circulation to the cardiac cycle and to right-heart assessment.',
  ],

  mechanism: {
    title: 'JVP = right atrial pressure; a-c-x-v-y waves; abnormalities localise disease',
    steps: [
      { id: 's1', label: 'JVP reflects right atrial pressure (no valve between IJV and RA)', emphasis: 'key' },
      { id: 's2', label: 'a = atrial contraction; c = tricuspid bulge; v = atrial filling', emphasis: 'key' },
      { id: 's3', label: 'x descent = atrial relaxation; y descent = tricuspid opens', emphasis: 'key' },
      { id: 's4', label: 'Absent a (AF); cannon a (complete heart block); giant v (tricuspid regurg)', emphasis: 'key' },
      { id: 's5', label: 'Raised JVP = right-heart/volume/pericardial disease; Kussmaul = constriction', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Raised JVP (>3–4 cm above the sternal angle)', mechanism: 'Elevated right atrial pressure (right heart failure/overload)', significance: 'key' },
    { sign: 'Absent a wave', mechanism: 'Atrial fibrillation (no coordinated atrial contraction)', significance: 'key' },
    { sign: 'Giant "cannon" a waves', mechanism: 'Complete heart block (atrium contracts against closed tricuspid)', significance: 'key' },
    { sign: 'Large v waves', mechanism: 'Tricuspid regurgitation', significance: 'supportive' },
    { sign: 'JVP rising on inspiration (Kussmaul sign)', mechanism: 'Impaired right-heart filling (constriction/restriction)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The chamber pressure the JVP reflects', meaning: 'Right atrial pressure' },
    { clue: 'The JVP wave lost in atrial fibrillation', meaning: 'The a wave' },
    { clue: 'The abnormality producing giant v waves', meaning: 'Tricuspid regurgitation' },
    { clue: 'The sign of a paradoxical inspiratory JVP rise', meaning: 'Kussmaul sign (constrictive pericarditis)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The JVP links the venous side to the cardiac cycle ([[cardiac-cycle-heart-sounds]]) and to preload/right-heart function ([[hemodynamics-preload-afterload-cardiac-output]]); a raised JVP is a core sign in the cardiovascular examination ([[cardiovascular-examination]]). Its waveform abnormalities localise arrhythmia (absent a/cannon a), valve disease (giant v), and pericardial constriction (Kussmaul) — bedside physiology in action.' },
  ],

  mnemonics: [
    { hook: 'JVP waves "a-c-v" up, "x-y" down: a (atrial contraction), c (tricuspid bulge), v (filling)', expansion: ['x = atrial relaxation', 'y = tricuspid opens'] },
    { hook: 'Abnormal a: "absent = AF; cannon = complete heart block"; giant v = tricuspid regurg', expansion: ['Raised JVP = right-heart/overload', 'Kussmaul = constriction'] },
  ],

  traps: [
    {
      questionCategory: 'Distinguishing the JVP from the carotid pulse',
      wrongInstinct: 'A pulsation in the neck must be the carotid arterial pulse',
      rightAnswer: 'The JVP is a VENOUS pulsation: it is non-palpable, has a biphasic waveform, varies with respiration and position, and is reduced by pressure — unlike the palpable, single, position-independent carotid pulse; mistaking one for the other misreads right-heart status',
      why: 'The JVP\'s value comes from being venous (reflecting right atrial pressure); confusing it with the carotid loses the information about right-heart filling and the diagnostic waveform.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The jugular venous pressure is a useful bedside measure because it reflects:',
      options: [
        { id: 'a', text: 'Left ventricular pressure' },
        { id: 'b', text: 'Right atrial pressure' },
        { id: 'c', text: 'Aortic pressure' },
        { id: 'd', text: 'Pulmonary capillary wedge pressure directly' },
      ],
      answerId: 'b',
      explanation: 'The internal jugular vein communicates with the right atrium without an intervening valve, so the JVP mirrors right atrial pressure and right-heart filling; it rises in right heart failure, volume overload and pericardial disease.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Intermittent giant "cannon" a waves in the JVP are characteristic of:',
      options: [
        { id: 'a', text: 'Atrial fibrillation' },
        { id: 'b', text: 'Complete (third-degree) heart block' },
        { id: 'c', text: 'Aortic stenosis' },
        { id: 'd', text: 'Mitral regurgitation' },
      ],
      answerId: 'b',
      explanation: 'In complete heart block the atria and ventricles beat independently; when the atrium contracts against a closed tricuspid valve, a giant "cannon" a wave is produced. Atrial fibrillation instead abolishes the a wave altogether.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Jugular venous pressure waveform', svg: JVP_WAVEFORM, caption: 'The a-c-x-v-y waves, their cardiac-cycle correlates, and the abnormalities that localise disease.' },
  ],
};

export default jugularVenousPressureWaveform;
