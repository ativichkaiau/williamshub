import type { Lecture } from '../../lib/types';

export const aorticStenosis: Lecture = {
  id: 'aortic-stenosis',
  title: 'Aortic Stenosis',
  system: 'cardiovascular',
  source: 'L8 — Valvular Heart Disease',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L8 Valvular Heart Disease' },
    { kind: 'disease', label: 'Aortic stenosis' },
    { kind: 'mechanism', label: 'Pressure overload' },
    { kind: 'exam', label: 'Ejection murmur → carotids' },
  ],

  highYield: [
    'Elderly → **calcific (degenerative)** AS; younger → **bicuspid aortic valve**.',
    'Triad: **angina, syncope, dyspnea** (“SAD”) — symptomatic AS has poor prognosis.',
    '**Crescendo-decrescendo (ejection) systolic murmur** at right 2nd ICS **radiating to the carotids**; soft/absent S2.',
    'Pressure overload → **concentric LV hypertrophy**; slow-rising pulse (pulsus parvus et tardus).',
    'Treatment = **valve replacement (SAVR/TAVR)** once symptomatic or severe.',
  ],

  mechanism: {
    title: 'Fixed outflow obstruction → pressure overload',
    steps: [
      { id: 's1', label: 'Valve calcification / fusion' },
      { id: 's2', label: '↓ aortic valve area', emphasis: 'key' },
      { id: 's3', label: 'LV outflow obstruction → ↑ LV pressure' },
      { id: 's4', label: 'Concentric LV hypertrophy' },
      { id: 's5', label: 'Angina · syncope · dyspnea', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Ejection systolic murmur radiating to the carotids', mechanism: 'Turbulent flow across the stenotic valve', significance: 'key' },
    { sign: 'Soft/absent S2 + slow-rising pulse (parvus et tardus)', mechanism: 'Reduced, delayed ejection', significance: 'key' },
    { sign: 'Exertional syncope', mechanism: 'Fixed cardiac output cannot meet exercise demand', significance: 'key' },
    { sign: 'Sustained (heaving) apex beat', mechanism: 'Concentric LVH', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Echocardiography', meaning: 'Valve area, gradient, LVH — diagnostic' },
    { clue: 'ECG: LVH', meaning: 'Pressure overload' },
    { clue: 'CXR: calcified valve, LV prominence', meaning: 'Supportive' },
  ],

  treatment: [
    { logic: 'Symptomatic or severe AS → aortic valve replacement (SAVR or TAVR)', detail: 'Definitive therapy.' },
    { logic: 'Avoid vasodilators / aggressive afterload reduction in severe AS', detail: 'Output is preload-dependent → risk of hypotension.' },
  ],

  mnemonics: [
    { hook: 'AS = SAD', expansion: ['Syncope', 'Angina', 'Dyspnea'] },
    { hook: 'Ejection murmur → carotids = Aortic Stenosis', expansion: ['Crescendo-decrescendo', 'Right 2nd ICS, radiates to carotids'] },
  ],

  traps: [
    {
      questionCategory: 'Murmur radiation',
      wrongInstinct: 'Systolic murmur at the apex radiating to the axilla',
      rightAnswer: 'Ejection systolic murmur at the aortic area radiating to the CAROTIDS = AS',
      why: 'Radiation to the carotids (not axilla) and a crescendo-decrescendo shape localize AS; radiation to the axilla suggests mitral regurgitation.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 72-year-old with exertional syncope has a harsh crescendo-decrescendo systolic murmur at the right 2nd ICS radiating to the carotids and a soft S2. Diagnosis?',
      options: [
        { id: 'a', text: 'Mitral regurgitation' },
        { id: 'b', text: 'Aortic stenosis' },
        { id: 'c', text: 'Mitral stenosis' },
        { id: 'd', text: 'Aortic regurgitation' },
      ],
      answerId: 'b',
      explanation: 'Exertional syncope + an ejection systolic murmur radiating to the carotids + a soft S2 = aortic stenosis, with concentric LVH from chronic pressure overload.',
      tests: 'exam',
    },
  ],
};

export default aorticStenosis;
