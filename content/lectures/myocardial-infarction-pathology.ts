import type { Lecture } from '../../lib/types';

export const myocardialInfarctionPathology: Lecture = {
  id: 'myocardial-infarction-pathology',
  title: 'Myocardial Infarction — Pathology',
  system: 'cardiovascular',
  source: 'L6 — Ischemic Heart Disease',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L6 Ischemic Heart Disease' },
    { kind: 'disease', label: 'Myocardial infarction' },
    { kind: 'mechanism', label: 'Coagulative necrosis' },
    { kind: 'investigation', label: 'Troponin' },
  ],

  highYield: [
    'Most common: **acute plaque change + thrombus occlusion** of an epicardial coronary for **>20–40 min**.',
    '**Transmural** (full thickness, total occlusion → STEMI) vs **subendocardial** (inner ⅓, partial occlusion / global hypoperfusion → NSTEMI).',
    'Territory frequency: **LAD 40–50%**, RCA 30–40%, LCx 15–20%.',
    'Morphology: coagulative necrosis → neutrophils (d1–3) → macrophages (d3–7) → granulation (wk1–2) → **collagen scar (>2 mo)**.',
    '**Troponin T/I**: rise **2–4 h**, peak **~48 h**, remain **7–10 days**.',
  ],

  mechanism: {
    title: 'Occlusion → necrosis → repair',
    steps: [
      { id: 's1', label: 'Acute plaque change' },
      { id: 's2', label: 'Thrombus occludes epicardial coronary', emphasis: 'key' },
      { id: 's3', label: 'Ischemia >20–40 min' },
      { id: 's4', label: 'Myocyte coagulative necrosis', emphasis: 'key' },
      { id: 's5', label: 'Inflammation → granulation → collagen scar' },
    ],
    branches: [
      {
        fromId: 's3',
        title: 'Depth depends on occlusion',
        steps: [
          { id: 't1', label: 'Total → transmural (STEMI)' },
          { id: 't2', label: 'Partial / global → subendocardial (NSTEMI)' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'Chest pain + rapid weak pulse + sweating', mechanism: 'Ischemia + sympathetic activation', significance: 'key' },
    { sign: 'Dyspnea (pulmonary congestion)', mechanism: 'LV dysfunction', significance: 'supportive' },
    { sign: 'Asymptomatic (10–15%, “silent MI”)', mechanism: 'Common in diabetics / elderly', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'ECG', meaning: 'STEMI vs NSTEMI; localizes territory' },
    { clue: 'Troponin T/I (rise 2–4 h, peak 48 h, remain 7–10 d)', meaning: 'Diagnostic biomarker' },
    { clue: 'TTC stain (gross, ~2–3 h)', meaning: 'Infarct = pale (no dehydrogenase); viable = red' },
  ],

  treatment: [
    { logic: 'Restore perfusion ASAP (reperfusion)', detail: 'Primary PCI or fibrinolysis — limits infarct size.' },
    { logic: 'Antithrombotic therapy', detail: 'Antiplatelet + anticoagulant.' },
    { logic: 'Beware reperfusion injury', detail: 'Contraction-band necrosis from Ca²⁺ influx; hemorrhage.' },
  ],

  mnemonics: [
    { hook: 'Troponin 2-4 / 48 / 7-10', expansion: ['Rises 2–4 h', 'Peaks ~48 h', 'Stays up 7–10 days'] },
    { hook: 'Necrosis → Neutrophils → Macrophages → Granulation → Scar', expansion: ['Coagulative necrosis (hrs)', 'Neutrophils d1–3', 'Macrophages d3–7', 'Granulation wk1–2, scar >2 mo'] },
  ],

  traps: [
    {
      questionCategory: 'Transmural vs subendocardial',
      wrongInstinct: 'Every MI is full-thickness',
      rightAnswer: 'Total occlusion → transmural (STEMI); partial occlusion / global hypoperfusion → subendocardial (NSTEMI)',
      why: 'The subendocardium is the last-perfused, most vulnerable zone, so partial occlusion or global hypoperfusion infarcts the inner third without ST elevation.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Cardiac troponin in acute MI rises at, peaks at, and remains elevated for approximately:',
      options: [
        { id: 'a', text: 'Rise 2–4 h, peak ~48 h, remain 7–10 days' },
        { id: 'b', text: 'Rise immediately, peak 6 h, gone by 24 h' },
        { id: 'c', text: 'Rise 12 h, peak 24 h, gone by 3 days' },
        { id: 'd', text: 'Rise 24 h, peak 72 h, remain 14 days' },
      ],
      answerId: 'a',
      explanation: 'Cardiac troponin rises within 2–4 h of myocyte necrosis, peaks around 48 h, and stays elevated for 7–10 days — useful for both early and late diagnosis.',
      tests: 'investigation',
    },
  ],
};

export default myocardialInfarctionPathology;
