import type { Lecture } from '../../lib/types';

export const arvc: Lecture = {
  id: 'arvc',
  title: 'Arrhythmogenic RV Cardiomyopathy (ARVC)',
  system: 'cardiovascular',
  source: 'L10 — Cardiomyopathy & Myocarditis',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L10 Cardiomyopathy & Myocarditis' },
    { kind: 'disease', label: 'ARVC' },
    { kind: 'mechanism', label: 'Desmosome defect' },
    { kind: 'exam', label: 'Exertional VT' },
  ],

  highYield: [
    'Inherited (**AD, variable penetrance**); **desmosomal protein mutations** (e.g. plakoglobin) at the intercalated disk.',
    'Predominantly **right ventricle**; myocyte loss with **fibrofatty replacement**.',
    '**Ventricular arrhythmias (VT/VF) → sudden death in young people / athletes.**',
    '**Naxos syndrome**: ARVC + **palmoplantar hyperkeratosis + woolly hair**.',
    'Prevalence ~1 per 5,000.',
  ],

  mechanism: {
    title: 'Desmosome defect → fibrofatty RV → arrhythmia',
    steps: [
      { id: 's1', label: 'Desmosomal mutation (plakoglobin)' },
      { id: 's2', label: 'Cardiomyocyte detachment / apoptosis', emphasis: 'key' },
      { id: 's3', label: 'Fibrofatty replacement of RV myocardium' },
      { id: 's4', label: 'Ventricular electrical instability → VT/VF → sudden death', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Palpitations, syncope, VT in a young person', mechanism: 'RV electrical instability', significance: 'key' },
    { sign: 'Sudden cardiac death (often on exertion)', mechanism: 'Ventricular fibrillation', significance: 'key' },
    { sign: 'Naxos: woolly hair + palmoplantar hyperkeratosis', mechanism: 'Desmosomal disease in skin & hair', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'ECG: epsilon wave, T-inversions V1–V3; VT of LBBB morphology', meaning: 'RV origin' },
    { clue: 'Cardiac MRI: RV fibrofatty replacement, RV dilation', meaning: 'Diagnostic' },
    { clue: 'Genetic testing + family screening', meaning: 'Inherited, AD' },
  ],

  treatment: [
    { logic: 'Avoid intense exercise; antiarrhythmics / beta-blockers', detail: 'Reduce arrhythmic triggers.' },
    { logic: 'ICD for sudden-death prevention', detail: 'Primary therapy for high-risk patients.' },
  ],

  mnemonics: [
    { hook: 'ARVC = RV Fibrofatty + VT; Naxos = woolly hair + thick palms/soles', expansion: ['Desmosomal (plakoglobin)', 'LBBB-morphology VT'] },
  ],

  traps: [
    {
      questionCategory: 'Which CMP causes SCD via the RV',
      wrongInstinct: 'Sudden death in a young athlete is always HCM',
      rightAnswer: 'ARVC (RV fibrofatty replacement, desmosomal) also causes exertional VT / SCD',
      why: 'HCM is the commonest cause of young-athlete SCD, but ARVC is a key differential — RV-predominant, desmosomal, with LBBB-morphology VT and the Naxos association.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A young athlete has exertional VT; cardiac MRI shows fibrofatty replacement of the RV free wall, and he has woolly hair and thick palms and soles. Diagnosis?',
      options: [
        { id: 'a', text: 'Hypertrophic cardiomyopathy' },
        { id: 'b', text: 'ARVC (Naxos syndrome)' },
        { id: 'c', text: 'Dilated cardiomyopathy' },
        { id: 'd', text: 'Restrictive cardiomyopathy' },
      ],
      answerId: 'b',
      explanation: 'RV fibrofatty replacement with exertional VT plus palmoplantar hyperkeratosis and woolly hair is ARVC in the setting of Naxos syndrome (a desmosomal disease).',
      tests: 'exam',
    },
  ],
};

export default arvc;
