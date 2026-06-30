import type { Lecture } from '../../lib/types';

export const mitralStenosis: Lecture = {
  id: 'mitral-stenosis',
  title: 'Mitral Stenosis',
  system: 'cardiovascular',
  source: 'L8 — Valvular Heart Disease',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L8 Valvular Heart Disease' },
    { kind: 'disease', label: 'Mitral stenosis' },
    { kind: 'mechanism', label: 'LA pressure overload' },
    { kind: 'exam', label: 'Opening snap + rumble' },
  ],

  highYield: [
    'Almost always **rheumatic** — commissural fusion + thickened/shortened chordae.',
    '**Loud S1 + opening snap + low-pitched mid-diastolic rumble** at the apex.',
    '↑ LA pressure → **LA enlargement → atrial fibrillation + mural thrombus → embolic stroke**.',
    'Symptoms: dyspnea, palpitations (AF), hemoptysis; malar flush.',
    'Severe/symptomatic → **balloon mitral valvotomy** or valve replacement; **warfarin** for valvular AF.',
  ],

  mechanism: {
    title: 'Rheumatic valve narrowing → LA pressure overload',
    steps: [
      { id: 's1', label: 'Rheumatic valvulitis' },
      { id: 's2', label: 'Commissural fusion / chordal shortening' },
      { id: 's3', label: '↓ mitral valve area', emphasis: 'key' },
      { id: 's4', label: '↑ LA pressure → LA enlargement' },
      { id: 's5', label: 'Pulmonary congestion (dyspnea, hemoptysis)' },
    ],
    branches: [
      {
        fromId: 's4',
        title: 'Embolic risk',
        steps: [
          { id: 'a1', label: 'Atrial fibrillation' },
          { id: 'a2', label: 'LA mural thrombus → embolic stroke', emphasis: 'danger' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'Loud S1 + opening snap + mid-diastolic rumble at the apex', mechanism: 'Impeded diastolic LV inflow across the stenotic valve', significance: 'key' },
    { sign: 'Atrial fibrillation (irregularly irregular)', mechanism: 'LA stretch', significance: 'key' },
    { sign: 'Malar flush', mechanism: 'Low output + pulmonary hypertension', significance: 'supportive' },
    { sign: 'Signs of right heart failure / pulmonary congestion', mechanism: 'Backward pressure transmission', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Echocardiography', meaning: 'Valve area, LA size, thrombus — diagnostic' },
    { clue: 'ECG: AF, P mitrale (LAE)', meaning: 'Left atrial enlargement' },
    { clue: 'CXR: LA enlargement', meaning: 'Straightened left heart border' },
  ],

  treatment: [
    { logic: 'Rate control + anticoagulation (warfarin)', detail: 'Valvular AF → warfarin, not a DOAC.' },
    { logic: 'Percutaneous balloon mitral valvotomy or valve replacement', detail: 'For severe/symptomatic stenosis.' },
  ],

  mnemonics: [
    { hook: 'MS = Opening Snap + Diastolic Rumble + Loud S1', expansion: ['Opening snap after S2', 'Low-pitched apical rumble'] },
    { hook: 'MS → big LA → AF → stroke', expansion: ['Anticoagulate with warfarin (valvular AF)'] },
  ],

  traps: [
    {
      questionCategory: 'Diastolic vs systolic murmur',
      wrongInstinct: 'Mitral valve disease always gives a systolic murmur',
      rightAnswer: 'Mitral STENOSIS = mid-DIASTOLIC rumble + opening snap (regurgitation is systolic)',
      why: 'Stenosis impedes diastolic inflow → a diastolic rumble; regurgitation is a systolic murmur. Loud S1 + opening snap are MS hallmarks.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 50-year-old with childhood rheumatic fever has a loud S1, an opening snap, and a mid-diastolic rumble at the apex, plus atrial fibrillation and an enlarged left atrium. Diagnosis?',
      options: [
        { id: 'a', text: 'Mitral regurgitation' },
        { id: 'b', text: 'Mitral stenosis' },
        { id: 'c', text: 'Aortic stenosis' },
        { id: 'd', text: 'Tricuspid stenosis' },
      ],
      answerId: 'b',
      explanation: 'Loud S1 + opening snap + mid-diastolic apical rumble with LA enlargement and AF after rheumatic fever is classic mitral stenosis from commissural fusion.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Murmur timing — mitral stenosis', murmur: 'mitral-stenosis', caption: 'Loud S1, an opening snap after S2, then a mid-diastolic rumble.' },
  ],
};

export default mitralStenosis;
