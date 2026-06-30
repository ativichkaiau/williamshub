import type { Lecture } from '../../lib/types';

export const miComplications: Lecture = {
  id: 'mi-complications',
  title: 'Complications of Myocardial Infarction',
  system: 'cardiovascular',
  source: 'L6 — Ischemic Heart Disease',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L6 Ischemic Heart Disease' },
    { kind: 'disease', label: 'MI complications' },
    { kind: 'mechanism', label: 'Healing timeline' },
    { kind: 'exam', label: 'New murmur post-MI' },
  ],

  highYield: [
    'MI complications are **time-dependent** — the day pins the diagnosis.',
    '**Arrhythmias** (immediate; VF = commonest cause of early death).',
    '**Cardiogenic shock** when infarct **≥40% of LV** (acute pump failure).',
    '**Pericarditis days 2–3** (fibrinous); **Dressler** (autoimmune) weeks later.',
    '**Rupture days 3–7** (macrophage softening): free wall → **tamponade**, septum → **VSD**, papillary muscle → **acute MR**. Late: ventricular aneurysm, mural thrombus → embolism.',
  ],

  mechanism: {
    title: 'Infarct-healing timeline drives the complication',
    steps: [{ id: 's1', label: 'Myocardial infarction' }],
    branches: [
      {
        fromId: 's1',
        title: 'Immediate (hours)',
        steps: [
          { id: 'i1', label: 'Electrical instability → arrhythmia / VF', emphasis: 'danger' },
          { id: 'i2', label: 'Cardiogenic shock if ≥40% LV' },
        ],
      },
      {
        fromId: 's1',
        title: 'Days 2–3',
        steps: [{ id: 'p1', label: 'Fibrinous pericarditis' }],
      },
      {
        fromId: 's1',
        title: 'Days 3–7 (wall softening)',
        steps: [
          { id: 'r1', label: 'Rupture', emphasis: 'danger' },
          { id: 'r2', label: 'Free wall→tamponade · septum→VSD · papillary→acute MR' },
        ],
      },
      {
        fromId: 's1',
        title: 'Weeks+',
        steps: [
          { id: 'l1', label: 'Ventricular aneurysm' },
          { id: 'l2', label: 'Mural thrombus → embolism; progressive HF' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'New holosystolic murmur on days 3–7', mechanism: 'Papillary muscle rupture (acute MR) or septal rupture (VSD)', significance: 'key' },
    { sign: 'Pericardial friction rub days 2–3', mechanism: 'Post-infarct fibrinous pericarditis', significance: 'key' },
    { sign: 'Hypotension + ↑JVP + muffled sounds (Beck triad)', mechanism: 'Free-wall rupture → tamponade', significance: 'key' },
    { sign: 'Persistent ST elevation + dyskinetic segment (weeks later)', mechanism: 'Ventricular aneurysm', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Echocardiography', meaning: 'Mechanical complications, aneurysm, effusion' },
    { clue: 'ECG', meaning: 'Arrhythmia; persistent ST elevation = aneurysm' },
  ],

  treatment: [
    { logic: 'Reperfusion limits infarct size & complications', detail: 'Earlier reperfusion = fewer complications.' },
    { logic: 'Mechanical complications → surgical emergency', detail: 'Free-wall rupture, VSD, acute MR.' },
    { logic: 'Anticoagulation for mural thrombus', detail: 'Prevents systemic embolism.' },
  ],

  mnemonics: [
    { hook: 'Rupture at 3–7 days', expansion: ['Macrophages soften the wall', 'Free wall → tamponade', 'Septum → VSD; papillary muscle → acute MR'] },
  ],

  traps: [
    {
      questionCategory: 'Timing of complication',
      wrongInstinct: 'A new murmur + shock 5 days post-MI is just recurrent ischemia',
      rightAnswer: 'Days 3–7 → mechanical rupture (papillary muscle / septum / free wall)',
      why: 'Days 3–7 is the macrophage phase of maximal wall softening; a new murmur or sudden tamponade then signals mechanical rupture — a surgical emergency.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: '5 days after an MI, a patient develops sudden hypotension, a new harsh holosystolic murmur, and pulmonary edema. Most likely complication?',
      options: [
        { id: 'a', text: 'Re-infarction' },
        { id: 'b', text: 'Papillary muscle or interventricular septal rupture' },
        { id: 'c', text: 'Dressler syndrome' },
        { id: 'd', text: 'Stable angina' },
      ],
      answerId: 'b',
      explanation: 'A new holosystolic murmur with shock on days 3–7 indicates mechanical rupture — papillary muscle (acute mitral regurgitation) or interventricular septum (VSD) — during the macrophage wall-softening phase.',
      tests: 'exam',
    },
  ],
};

export default miComplications;
