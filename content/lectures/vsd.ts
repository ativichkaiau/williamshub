import type { Lecture } from '../../lib/types';

export const vsd: Lecture = {
  id: 'vsd',
  title: 'Ventricular Septal Defect (VSD)',
  system: 'cardiovascular',
  source: 'L3 — Congenital Heart Disease',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L3 Congenital HD' },
    { kind: 'disease', label: 'VSD' },
    { kind: 'mechanism', label: 'Left-to-right shunt' },
    { kind: 'exam', label: 'Pansystolic murmur' },
    { kind: 'treatment', label: 'Defect closure' },
  ],

  highYield: [
    'Most common CHD. By type (this cohort): **perimembranous 50%**, subpulmonic 25%, muscular 20%, inlet 5%.',
    '**Left-to-right shunt** at the ventricular level → ↑pulmonary blood flow, **LV volume overload**.',
    'Harsh **pansystolic murmur at the LLSB**; a **smaller defect is louder**.',
    'Symptoms appear at **4–6 weeks** (as PVR falls): heart failure, poor weight gain, recurrent pneumonia.',
    'Large + untreated → pulmonary HTN → **Eisenmenger** (shunt reversal, cyanosis).',
  ],

  mechanism: {
    title: 'Left-to-right shunt → volume overload (→ Eisenmenger)',
    steps: [
      { id: 's1', label: 'VSD (ventricular communication)' },
      { id: 's2', label: 'L→R shunt (high-pressure LV → RV)' },
      { id: 's3', label: '↑ Pulmonary blood flow' },
      { id: 's4', label: 'LA/LV volume overload', emphasis: 'key' },
      { id: 's5', label: 'Heart failure (4–6 wks)' },
    ],
    branches: [
      {
        fromId: 's3',
        title: 'If large / uncontrolled',
        steps: [
          { id: 'e1', label: 'Pulmonary vascular remodeling' },
          { id: 'e2', label: 'Pulmonary HTN' },
          { id: 'e3', label: 'Shunt reversal → Eisenmenger (cyanosis)', emphasis: 'danger' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'Harsh pansystolic murmur at LLSB', mechanism: 'High-pressure LV→RV flow through the defect, all of systole', significance: 'key' },
    { sign: 'Mid-diastolic rumble at apex', mechanism: '↑flow across the mitral valve — signals a large shunt (Qp:Qs >2)', significance: 'key' },
    { sign: 'Loud P2', mechanism: 'Pulmonary hypertension', significance: 'supportive' },
    { sign: 'Tachypnea, hepatomegaly, poor feeding', mechanism: 'Heart failure from volume overload', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'CXR: cardiomegaly + ↑pulmonary vascular markings', meaning: 'Large left-to-right shunt' },
    { clue: 'ECG: LVH (moderate) → biventricular hypertrophy (large)', meaning: 'Volume load; inlet VSD → left-superior axis' },
    { clue: 'Echocardiography', meaning: 'Diagnostic — location, size, shunt direction, pressures' },
  ],

  treatment: [
    { logic: 'Many small/muscular VSDs close spontaneously', detail: 'Observe; treat HF symptoms (diuretics) meanwhile.' },
    { logic: 'Close large shunt with CHF / faltering growth', detail: 'Or PA pressure > ½ systemic despite medical Rx → repair before 12 months.' },
    { logic: 'Older child Qp:Qs >1.5:1, or subpulmonic VSD with RCC prolapse / progressive AR → close', detail: 'Subpulmonic location risks aortic cusp prolapse.' },
  ],

  mnemonics: [
    { hook: 'Small hole, big noise', expansion: ['Smaller restrictive VSD → more turbulence → LOUDER pansystolic murmur', 'A quiet large VSD can mean equalized pressures — worry about Eisenmenger'] },
  ],

  traps: [
    {
      questionCategory: 'Murmur localization & timing',
      wrongInstinct: 'Ejection systolic murmur at the upper sternal border',
      rightAnswer: 'Harsh pansystolic murmur at the LLSB',
      why: 'VSD flows LV→RV throughout systole at the lower left sternal border — pansystolic, not an ejection murmur.',
    },
    {
      questionCategory: 'Murmur intensity vs defect size',
      wrongInstinct: 'Louder murmur = bigger, worse defect',
      rightAnswer: 'Louder = smaller (restrictive) defect',
      why: 'A large defect equalizes ventricular pressures → little turbulence → soft murmur. Loudness is inverse to size.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 5-week-old has poor feeding and a harsh pansystolic murmur at the LLSB, plus a mid-diastolic rumble at the apex. What does the apical rumble indicate?',
      options: [
        { id: 'a', text: 'Coexisting mitral stenosis' },
        { id: 'b', text: 'Large shunt with ↑flow across the mitral valve (Qp:Qs >2)' },
        { id: 'c', text: 'Aortic regurgitation' },
        { id: 'd', text: 'An innocent murmur' },
      ],
      answerId: 'b',
      explanation: 'A mid-diastolic apical rumble in VSD reflects increased flow across the mitral valve from a large left-to-right shunt (Qp:Qs >2) — a sign of significant shunt size, not a second valve lesion.',
      tests: 'exam',
    },
  ],
};

export default vsd;
