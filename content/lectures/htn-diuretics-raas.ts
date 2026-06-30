import type { Lecture } from '../../lib/types';
import { RAAS_PATHWAY } from '../../lib/figures';

export const htnDiureticsRaas: Lecture = {
  id: 'htn-diuretics-raas',
  title: 'Diuretics & RAAS Inhibitors in HTN',
  system: 'cardiovascular',
  source: 'L18 — Antihypertensive Drugs',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L18 Antihypertensive Drugs' },
    { kind: 'disease', label: 'Hypertension therapy' },
    { kind: 'mechanism', label: 'Volume + RAAS' },
    { kind: 'treatment', label: 'Diuretics / ACEi / ARB' },
  ],

  highYield: [
    '**Thiazides** (HCTZ, chlorthalidone, indapamide): NCC in DCT → ↓PVR; mild–moderate HTN; AE **hypokalemic metabolic alkalosis, hyperuricemia, hyperglycemia, hyperlipidemia, hypercalcemia**.',
    '**Loop** (furosemide): NKCC2; HTN with **CKD**; AE hypokalemia, **ototoxicity**, hypocalcemia.',
    '**K⁺-sparing / aldosterone antagonists** (amiloride; spironolactone/eplerenone): **resistant HTN**; AE **hyperkalemia**, spironolactone **gynecomastia**.',
    '**ACEi** (↓AngII): AE **dry cough, angioedema, hyperkalemia, acute renal failure in bilateral RAS**; avoid pregnancy.',
    '**ARB** (block AT1): like ACEi but **no cough**; avoid pregnancy.',
  ],

  mechanism: {
    title: 'Volume (diuretics) + RAAS (ACEi/ARB)',
    steps: [
      { id: 's1', label: 'Thiazide/loop → ↓Na reabsorption → ↓volume/PVR', emphasis: 'key' },
      { id: 's2', label: 'ACEi/ARB → ↓Angiotensin II → ↓PVR (↓aldosterone)', emphasis: 'key' },
    ],
    branches: [
      { fromId: 's1', title: 'Resistant HTN', steps: [{ id: 'k1', label: 'Aldosterone antagonist (watch hyperkalemia)' }] },
    ],
  },

  examFindings: [
    { sign: 'Thiazide: hypokalemia + hyperuricemia (gout flare)', mechanism: 'Distal K⁺ wasting; urate retention', significance: 'key' },
    { sign: 'Spironolactone: gynecomastia', mechanism: 'Androgen-receptor antagonism', significance: 'key' },
    { sign: 'ACEi: dry cough, angioedema', mechanism: 'Bradykinin accumulation', significance: 'key' },
  ],

  investigations: [
    { clue: 'Electrolytes (K⁺), uric acid, renal function', meaning: 'Monitor diuretic effects' },
    { clue: 'ACEi/ARB: K⁺ + creatinine', meaning: 'Hyperkalemia / renal function' },
  ],

  treatment: [
    { logic: 'Thiazide (D) and ACEi/ARB (A) first-line', detail: 'Combine for control.' },
    { logic: 'Spironolactone for resistant HTN', detail: 'PATHWAY-2 evidence.' },
    { logic: 'Avoid ACEi/ARB in pregnancy & bilateral renal artery stenosis', detail: 'Risk of fetal harm / acute renal failure.' },
  ],

  mnemonics: [
    { hook: 'Thiazide = hyperGLUC', expansion: ['↑Glucose, Lipid, Uric acid, Calcium', '↓Potassium'] },
    { hook: 'ACEi cough & angioedema (bradykinin); ARB = no cough', expansion: ['Switch ACEi→ARB for cough'] },
  ],

  traps: [
    {
      questionCategory: 'ACEi cough management',
      wrongInstinct: 'Add an antitussive and continue the ACEi',
      rightAnswer: 'ACEi-induced dry cough → switch to an ARB (no bradykinin-mediated cough)',
      why: 'The dry cough is bradykinin-mediated; ARBs do not raise bradykinin, so switching resolves it.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient on an ACE inhibitor develops a persistent dry cough. Best management?',
      options: [
        { id: 'a', text: 'Add codeine' },
        { id: 'b', text: 'Switch to an ARB' },
        { id: 'c', text: 'Increase the ACEi dose' },
        { id: 'd', text: 'Add a diuretic' },
      ],
      answerId: 'b',
      explanation: 'ACE-inhibitor cough is bradykinin-mediated; switching to an ARB (which blocks AT1 without raising bradykinin) relieves it while maintaining RAAS blockade.',
      tests: 'treatment',
    },
  ],

  figures: [
    { title: 'RAAS & drug block points', svg: RAAS_PATHWAY, caption: 'ACEi block ACE; ARB block AT1; aldosterone antagonists block the receptor.' },
  ],
};

export default htnDiureticsRaas;
