import type { Lecture } from '../../lib/types';

export const rightSidedHf: Lecture = {
  id: 'right-sided-hf',
  title: 'Right-sided Heart Failure',
  system: 'cardiovascular',
  source: 'L12 — Heart Failure',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L12 Heart Failure' },
    { kind: 'disease', label: 'Right heart failure' },
    { kind: 'mechanism', label: 'Ventricular interdependence' },
    { kind: 'exam', label: 'Systemic congestion' },
  ],

  highYield: [
    'Right HF = RV failure → **systemic venous congestion** (↑JVP, hepatomegaly, peripheral edema, ascites).',
    '**Most common cause = LEFT heart failure**; isolated right HF (**cor pulmonale**) from chronic lung disease / pulmonary HTN.',
    'The RV is **thin-walled & afterload-sensitive** — acute **massive PE** causes acute RV pressure overload/failure.',
    '**Ventricular interdependence**: RV dilation → **D-shaped LV** (flattened septum) → impaired LV filling.',
  ],

  mechanism: {
    title: 'RV overload → systemic congestion (+ LV interdependence)',
    steps: [
      { id: 's1', label: 'RV pressure/volume overload (left HF, pulmonary HTN, PE)' },
      { id: 's2', label: 'RV dilation / failure', emphasis: 'key' },
      { id: 's3', label: 'Systemic venous congestion (↑JVP, hepatomegaly, edema)' },
    ],
    branches: [
      {
        fromId: 's2',
        title: 'Interdependence',
        steps: [{ id: 'i1', label: 'Septum flattens → D-shaped LV → ↓ LV filling', emphasis: 'danger' }],
      },
    ],
  },

  examFindings: [
    { sign: '↑JVP, hepatojugular reflux, hepatomegaly, peripheral edema, ascites', mechanism: 'Systemic venous backpressure', significance: 'key' },
    { sign: 'Acute PE: sudden dyspnea, ↑JVP, hypotension (acute cor pulmonale)', mechanism: 'Acute RV pressure overload', significance: 'key' },
    { sign: 'Parasternal (RV) heave', mechanism: 'RV pressure overload', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Echo: RV dilation/dysfunction, D-shaped LV', meaning: 'Diagnostic; shows interdependence' },
    { clue: 'Find the cause: left HF, lung disease, PE (CTPA)', meaning: 'Directs treatment' },
  ],

  treatment: [
    { logic: 'Treat the cause', detail: 'Left HF, pulmonary HTN, or PE.' },
    { logic: 'Cautious diuresis; support the RV (avoid excessive afterload)', detail: 'RV is preload-dependent and afterload-sensitive.' },
  ],

  mnemonics: [
    { hook: 'Right HF = systemic congestion; commonest cause = LEFT HF', expansion: ['Left HF raises pulmonary pressures → RV overload'] },
    { hook: 'RV dilation → D-shaped LV (interdependence)', expansion: ['Flattened septum impairs LV filling'] },
  ],

  traps: [
    {
      questionCategory: 'Commonest cause of right HF',
      wrongInstinct: 'Right heart failure is usually due to lung disease (cor pulmonale)',
      rightAnswer: 'The most common cause of right HF is LEFT heart failure',
      why: 'Left HF raises pulmonary pressures that overload the RV; isolated right HF from lung disease (cor pulmonale) is less common.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'What is the most common cause of right-sided heart failure?',
      options: [
        { id: 'a', text: 'Chronic lung disease' },
        { id: 'b', text: 'Left-sided heart failure' },
        { id: 'c', text: 'Pulmonary embolism' },
        { id: 'd', text: 'Tricuspid stenosis' },
      ],
      answerId: 'b',
      explanation: 'Left-sided heart failure raises pulmonary venous and arterial pressures, overloading the RV — the most common cause of right-sided heart failure.',
      tests: 'mechanism',
    },
  ],
};

export default rightSidedHf;
