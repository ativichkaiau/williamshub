import type { Lecture } from '../../lib/types';
import { RAAS_PATHWAY } from '../../lib/figures';

export const hfPharmacologyPillars: Lecture = {
  id: 'hf-pharmacology-pillars',
  title: 'HF Pharmacology — The Four Pillars',
  system: 'cardiovascular',
  source: 'L15 — Drugs Used in Heart Failure',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L15 Drugs Used in HF' },
    { kind: 'disease', label: 'HFrEF therapy' },
    { kind: 'mechanism', label: 'Neurohormonal blockade' },
    { kind: 'treatment', label: 'GDMT pillars' },
  ],

  highYield: [
    'Neurohormonal **vicious cycle**: ↓CO → ↑sympathetic + ↑RAAS → ↑afterload/preload + remodeling → further ↓CO.',
    '**Four pillars of HFrEF GDMT** (all improve survival): **ARNi/ACEi (or ARB), beta-blocker, MRA, SGLT2i**.',
    '**ACEi/ARB/ARNi/MRA** block RAAS; **beta-blockers** block SNS; **SGLT2i** added regardless of diabetes.',
    'Start early and titrate; **diuretics relieve congestion (symptoms), not survival**.',
    '**Never combine ACEi + ARNi** (angioedema via bradykinin).',
  ],

  mechanism: {
    title: 'Interrupt the neurohormonal vicious cycle',
    steps: [
      { id: 's1', label: '↓ cardiac output' },
      { id: 's2', label: '↑ SNS + ↑ RAAS', emphasis: 'key' },
      { id: 's3', label: 'Vasoconstriction + salt/water retention + remodeling' },
      { id: 's4', label: 'Further ↓ CO (vicious cycle)', emphasis: 'danger' },
    ],
    branches: [
      {
        fromId: 's2',
        title: 'Four pillars block the cycle',
        steps: [{ id: 'p1', label: 'ARNi/ACEi · beta-blocker · MRA · SGLT2i' }],
      },
    ],
  },

  examFindings: [
    { sign: 'ACEi: dry cough, angioedema, hyperkalemia', mechanism: 'Bradykinin; aldosterone suppression', significance: 'key' },
    { sign: 'Beta-blocker: bradycardia — start low when euvolemic/stable', mechanism: 'Negative chronotropy', significance: 'key' },
    { sign: 'MRA (spironolactone): hyperkalemia, gynecomastia', mechanism: 'Aldosterone & androgen receptor effects', significance: 'key' },
    { sign: 'SGLT2i: genitourinary infection, volume depletion', mechanism: 'Glycosuria / osmotic diuresis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Echo EF (HFrEF ≤40 → pillars)', meaning: 'Selects GDMT' },
    { clue: 'K⁺ + renal function', meaning: 'Monitor ACEi/ARB/MRA' },
    { clue: 'BNP / NT-proBNP', meaning: 'Response monitoring' },
  ],

  treatment: [
    { logic: 'Four pillars for HFrEF: ARNi/ACEi, beta-blocker, MRA, SGLT2i', detail: 'Combined survival benefit; start & titrate early.' },
    { logic: 'Diuretics for congestion; never combine ACEi + ARNi', detail: 'Diuretics = symptom relief only.' },
    { logic: 'Stage D → IV inotrope / transplant / device', detail: 'Advanced therapies.' },
  ],

  mnemonics: [
    { hook: 'Four pillars: ARNi/ACEi, Beta-blocker, MRA, SGLT2i', expansion: ['All improve survival in HFrEF'] },
    { hook: 'Block RAAS (ACEi/ARB/ARNi/MRA) + SNS (β-blocker)', expansion: ['Neurohormonal blockade reverse-remodels'] },
  ],

  traps: [
    {
      questionCategory: 'ACEi + ARNi combination',
      wrongInstinct: 'Add an ACEi to an ARNi for extra RAAS blockade',
      rightAnswer: 'Never combine ACEi + ARNi → angioedema (bradykinin)',
      why: 'Both raise bradykinin; combining (or overlapping without washout) markedly increases angioedema risk.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: "Which combination of drug classes forms the survival-improving 'four pillars' of HFrEF therapy?",
      options: [
        { id: 'a', text: 'Digoxin + diuretic + nitrate + CCB' },
        { id: 'b', text: 'ARNi/ACEi + beta-blocker + MRA + SGLT2 inhibitor' },
        { id: 'c', text: 'ARB + CCB + alpha-blocker + statin' },
        { id: 'd', text: 'Loop diuretic alone' },
      ],
      answerId: 'b',
      explanation: 'The four pillars — ARNi (or ACEi/ARB), beta-blocker, MRA, and SGLT2 inhibitor — each improve survival in HFrEF and are started/titrated early.',
      tests: 'treatment',
    },
  ],

  figures: [
    { title: 'RAAS & drug block points', svg: RAAS_PATHWAY, caption: 'ACEi block ACE; ARB block AT1; MRA block aldosterone — interrupting the cascade.' },
  ],
};

export default hfPharmacologyPillars;
