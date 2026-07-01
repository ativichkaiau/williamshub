import type { Lecture } from '../../lib/types';

export const constrictiveTuberculousPericarditis: Lecture = {
  id: 'constrictive-tuberculous-pericarditis',
  title: 'Constrictive & Tuberculous Pericarditis',
  system: 'cardiovascular',
  source: 'L21 — Pericardial Disease',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L21 Pericardial Disease' },
    { kind: 'disease', label: 'Constrictive pericarditis' },
    { kind: 'mechanism', label: 'Fibrocalcific constriction' },
    { kind: 'exam', label: 'Kussmaul / knock' },
  ],

  highYield: [
    '**Tuberculous pericarditis** (M. tuberculosis): commonest cause of pericardial disease in **HIV patients in Africa**; **~70% of large pericardial effusions**; **ADA >40** & pericardial **biopsy** are diagnostic.',
    'TB stages: **acute** (fibrinous, lymphoplasmacytic) → **subacute** (granulomatous ± caseous necrosis, AFB on stain) → **chronic** (fibrosis, **calcification**, constriction). **#1 complication to prevent = constrictive pericarditis**.',
    '**Constrictive pericarditis**: dense **fibrous ± calcified pericardium encases the heart** → it **fails to fill in diastole**; **normal/small heart, no hypertrophy**.',
    'Causes: idiopathic, **TB**, post-radiation, post-surgery/trauma, purulent, uremia, neoplasm.',
    'Signs: **Kussmaul sign** (↑ JVP on inspiration), **pericardial knock** (early-diastolic), prominent x/y descents, right-heart congestion; **mimics restrictive cardiomyopathy**. CXR may show **pericardial calcification**.',
  ],

  mechanism: {
    title: 'Chronic inflammation → fibrocalcific constriction',
    steps: [
      { id: 's1', label: 'TB / radiation / surgery → chronic pericardial injury' },
      { id: 's2', label: 'Exuberant healing → dense fibrosis ± calcification', emphasis: 'key' },
      { id: 's3', label: 'Rigid pericardium encases the heart (fused layers)' },
      { id: 's4', label: 'Impaired diastolic filling → systemic venous congestion (right HF)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Kussmaul sign (JVP rises with inspiration)', mechanism: 'Fixed pericardium can’t accommodate inspiratory venous return', significance: 'key' },
    { sign: 'Pericardial knock (early-diastolic sound)', mechanism: 'Abrupt halt to ventricular filling by rigid pericardium', significance: 'key' },
    { sign: 'Right HF: ↑ JVP, hepatomegaly, ascites, edema', mechanism: 'Systemic venous congestion', significance: 'key' },
  ],

  investigations: [
    { clue: 'Echo / cardiac CT / MRI (thick or calcified pericardium)', meaning: 'Diagnostic; distinguishes from restrictive CMP' },
    { clue: 'CXR (pericardial calcification)', meaning: 'Suggests chronic/TB constriction' },
    { clue: 'ADA >40, pericardial biopsy (granuloma/caseation, AFB)', meaning: 'Confirms tuberculous etiology' },
  ],

  treatment: [
    { logic: 'Pericardiectomy', detail: 'Definitive treatment for established constriction.' },
    { logic: 'Anti-TB therapy (+ corticosteroids) for tuberculous pericarditis', detail: 'Early treatment aims to prevent constriction.' },
  ],

  mnemonics: [
    { hook: 'Constriction: Kussmaul + pericardial Knock + Calcification — mimics restrictive CMP', expansion: ['Pericardial, often surgically curable'] },
    { hook: 'TB pericarditis: ADA >40; #1 complication = constriction', expansion: ['Acute → granulomatous → fibrocalcific'] },
  ],

  traps: [
    {
      questionCategory: 'Constrictive pericarditis vs restrictive cardiomyopathy',
      wrongInstinct: 'Right HF with a normal-size heart = restrictive cardiomyopathy',
      rightAnswer: 'Pericardial calcification + Kussmaul + pericardial knock = CONSTRICTIVE pericarditis (pericardial, often curable by pericardiectomy)',
      why: 'Both cause right-heart congestion with a non-dilated heart, but constriction is a pericardial problem (calcification, knock, surgically curable) whereas restrictive cardiomyopathy is myocardial (e.g. amyloid) — the distinction changes management entirely.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient has right heart failure with an elevated JVP that rises on inspiration, a pericardial knock, and pericardial calcification on chest X-ray. The most likely diagnosis is:',
      options: [
        { id: 'a', text: 'Restrictive cardiomyopathy' },
        { id: 'b', text: 'Constrictive pericarditis' },
        { id: 'c', text: 'Cardiac tamponade' },
        { id: 'd', text: 'Dilated cardiomyopathy' },
      ],
      answerId: 'b',
      explanation: 'Kussmaul sign, a pericardial knock, and pericardial calcification point to constrictive pericarditis — a rigid fibrocalcific pericardium impairing diastolic filling (often post-TB or post-radiation). It mimics restrictive cardiomyopathy but is frequently curable with pericardiectomy.',
      tests: 'exam',
    },
  ],
};

export default constrictiveTuberculousPericarditis;
