import type { Lecture } from '../../lib/types';
import { BP_DETERMINANTS } from '../../lib/figures';

export const antihypertensiveOverview: Lecture = {
  id: 'antihypertensive-overview',
  title: 'Antihypertensive Drugs — Classes & A/C/D',
  system: 'cardiovascular',
  source: 'L18 — Antihypertensive Drugs',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L18 Antihypertensive Drugs' },
    { kind: 'disease', label: 'Hypertension therapy' },
    { kind: 'mechanism', label: 'Lower CO / PVR' },
    { kind: 'treatment', label: 'A/C/D strategy' },
  ],

  highYield: [
    '**BP = CO × PVR** — antihypertensives lower one or both.',
    'Major classes: **ACEi/ARB**, **CCB (DHP/non-DHP)**, **diuretics**, **β-blockers**, α-blockers, vasodilators, aldosterone antagonists, sympatholytics.',
    'First-line: **A (ACEi/ARB), C (CCB), D (thiazide)** — the **A/C/D** rule.',
    '**Younger/non-Black → A**; **older/Black → C or D**; combine for control.',
    'Compelling indications guide choice (β-blocker for angina/HF; ACEi/ARB for CKD/diabetes).',
  ],

  mechanism: {
    title: 'Lower CO and/or PVR',
    steps: [{ id: 's1', label: 'BP = CO × PVR', emphasis: 'key' }],
    branches: [
      { fromId: 's1', title: '↓ CO', steps: [{ id: 'a1', label: 'β-blocker (↓HR) · diuretics (↓volume)' }] },
      { fromId: 's1', title: '↓ PVR', steps: [{ id: 'b1', label: 'CCB · ACEi/ARB · α-blocker · vasodilator' }] },
    ],
  },

  examFindings: [
    { sign: 'ACEi → dry cough; DHP-CCB → ankle edema', mechanism: 'Class-specific effects', significance: 'key' },
    { sign: 'Thiazide → hypokalemia; α-blocker → first-dose postural hypotension', mechanism: 'Class-specific effects', significance: 'key' },
  ],

  investigations: [
    { clue: 'BP monitoring + electrolytes + renal function', meaning: 'Efficacy & safety' },
    { clue: 'Compelling indications / contraindications', meaning: 'Tailor the class' },
  ],

  treatment: [
    { logic: 'A/C/D first-line; combine; treat to target', detail: 'Single-pill combinations improve adherence.' },
    { logic: 'Avoid ACEi/ARB in pregnancy', detail: 'Use methyldopa/labetalol/nifedipine.' },
  ],

  mnemonics: [
    { hook: 'A/C/D: ACEi-ARB, CCB, Diuretic', expansion: ['B (β-blocker) for compelling indications'] },
    { hook: 'Young/non-Black → A; Older/Black → C or D', expansion: ['RAAS activity differs'] },
  ],

  traps: [
    {
      questionCategory: 'First-line in a young patient',
      wrongInstinct: 'Start a thiazide for a young non-Black hypertensive',
      rightAnswer: 'Young/non-Black → ACEi/ARB (A) first; older/Black → CCB or diuretic (C/D)',
      why: 'RAAS is more active in younger patients (A works best); Black/elderly patients respond better to C/D as RAAS is less dominant.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 35-year-old non-Black man needs first-line antihypertensive monotherapy. Best initial class?',
      options: [
        { id: 'a', text: 'Thiazide diuretic' },
        { id: 'b', text: 'ACE inhibitor / ARB' },
        { id: 'c', text: 'Alpha-blocker' },
        { id: 'd', text: 'Hydralazine' },
      ],
      answerId: 'b',
      explanation: 'In younger, non-Black patients the renin-angiotensin system is more active, so an ACE inhibitor/ARB (“A”) is preferred first-line over C/D agents.',
      tests: 'treatment',
    },
  ],

  figures: [
    { title: 'Blood-pressure determinants', svg: BP_DETERMINANTS, caption: 'Drugs act on cardiac output and/or peripheral resistance.' },
  ],
};

export default antihypertensiveOverview;
