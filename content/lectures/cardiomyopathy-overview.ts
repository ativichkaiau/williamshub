import type { Lecture } from '../../lib/types';

export const cardiomyopathyOverview: Lecture = {
  id: 'cardiomyopathy-overview',
  title: 'Cardiomyopathy — Definition & Classification',
  system: 'cardiovascular',
  source: 'L10 — Cardiomyopathy & Myocarditis',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L10 Cardiomyopathy & Myocarditis' },
    { kind: 'disease', label: 'Cardiomyopathy' },
    { kind: 'mechanism', label: 'Morphofunctional pattern' },
    { kind: 'investigation', label: 'LV ejection fraction' },
  ],

  highYield: [
    'CMP = a myocardial disorder, structurally/functionally abnormal, **in the absence of CAD, hypertension, valvular, and congenital disease** (exclusion definition, ESC 2008).',
    'ESC 2008 patterns: **dilated (DCM, most common)**, hypertrophic (HCM), restrictive (RCM), arrhythmogenic RV (ARVC), unclassified.',
    '**DCM = systolic dysfunction (EF <40%)**; **HCM & RCM = diastolic dysfunction** (EF preserved/high).',
    '“Mimics” (secondary): ischemic, valvular, hypertensive, amyloid — must be excluded to call it **primary** CMP.',
    '**MOGE(S)** 2013 = descriptive genotype–phenotype nosology (Morphofunctional, Organ, Genetic, Etiology, Stage).',
  ],

  mechanism: {
    title: 'Classify by morphology + function',
    steps: [
      { id: 's1', label: 'Myocardial disorder (exclude CAD/HTN/valve/congenital)', emphasis: 'key' },
    ],
    branches: [
      { fromId: 's1', title: 'Dilated', steps: [{ id: 'd1', label: 'Systolic dysfunction (EF <40%)' }] },
      { fromId: 's1', title: 'Hypertrophic', steps: [{ id: 'h1', label: 'Diastolic dysfunction (EF 50–80%)' }] },
      { fromId: 's1', title: 'Restrictive', steps: [{ id: 'r1', label: 'Diastolic dysfunction (EF 45–90%)' }] },
      { fromId: 's1', title: 'ARVC', steps: [{ id: 'a1', label: 'Ventricular arrhythmia / RV' }] },
    ],
  },

  examFindings: [
    { sign: 'Dilated → CHF + functional mitral regurgitation', mechanism: 'Chamber dilation', significance: 'key' },
    { sign: 'Hypertrophic → ejection murmur + SCD risk', mechanism: 'LVOT obstruction / disarray', significance: 'key' },
    { sign: 'Restrictive → right HF, mimics constrictive pericarditis', mechanism: 'Stiff ventricle', significance: 'key' },
  ],

  investigations: [
    { clue: 'Echocardiography', meaning: 'Pattern: dilation vs hypertrophy vs normal-size stiff' },
    { clue: 'LV ejection fraction', meaning: 'The functional discriminator' },
    { clue: 'Endomyocardial biopsy', meaning: 'Etiology in restrictive / myocarditis' },
  ],

  treatment: [
    { logic: 'Treat the pattern', detail: 'HF therapy for DCM; relieve obstruction in HCM; cause-directed in RCM.' },
    { logic: 'Genetic counseling; ICD for SCD risk', detail: 'HCM, ARVC.' },
  ],

  mnemonics: [
    { hook: 'CMP excludes the 4: Coronary, Hypertension, Valve, Congenital', expansion: ['Primary CMP = intrinsic muscle disease', 'Exclude secondary causes first'] },
    { hook: 'Dilated = Systolic; Hypertrophic & Restrictive = Diastolic', expansion: ['DCM ↓EF', 'HCM/RCM preserved EF'] },
  ],

  traps: [
    {
      questionCategory: 'Primary CMP vs secondary mimic',
      wrongInstinct: 'A dilated heart in a hypertensive/ischemic patient = dilated cardiomyopathy',
      rightAnswer: 'Primary CMP requires EXCLUDING CAD, hypertension, valvular & congenital disease',
      why: 'By definition cardiomyopathy is intrinsic muscle disease; if HTN/ischemia/valve disease explains it, it is a secondary mimic, not primary CMP.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'By definition, cardiomyopathy is a myocardial disorder in the ABSENCE of which conditions?',
      options: [
        { id: 'a', text: 'Coronary artery disease only' },
        { id: 'b', text: 'CAD, hypertension, valvular, and congenital heart disease' },
        { id: 'c', text: 'Hypertension only' },
        { id: 'd', text: 'Infection only' },
      ],
      answerId: 'b',
      explanation: 'The ESC 2008 definition labels CMP a primary myocardial disorder only when CAD, hypertension, valvular disease, and congenital heart disease have been excluded.',
      tests: 'mechanism',
    },
  ],
};

export default cardiomyopathyOverview;
