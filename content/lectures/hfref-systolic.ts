import type { Lecture } from '../../lib/types';
import { FRANK_STARLING, PV_LOOP_HF } from '../../lib/figures';

export const hfrefSystolic: Lecture = {
  id: 'hfref-systolic',
  title: 'HFrEF — Systolic Heart Failure',
  system: 'cardiovascular',
  source: 'L12 — Heart Failure',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L12 Heart Failure' },
    { kind: 'disease', label: 'HFrEF' },
    { kind: 'mechanism', label: 'Neurohormonal activation' },
    { kind: 'treatment', label: 'Neurohormonal blockade' },
  ],

  highYield: [
    '**HFrEF (systolic HF)**: EF **≤40%** from **impaired contractility** (ischemic, volume/pressure overload, DCM).',
    '**Neurohormonal activation** drives progression: **RAAS + sympathetic (SNS) activation, parasympathetic withdrawal** → vasoconstriction, salt/water retention, **maladaptive remodeling** (hypertrophy, apoptosis, fibrosis).',
    '**Frank-Starling curve shifts right/down**; ↑preload (↑LVEDV), ↑afterload, high LVEDP.',
    '**Natriuretic peptides (ANP/BNP)** counter-regulate (vasodilation, natriuresis, suppress RAAS) — **BNP is a marker**.',
    'Treatment = **neurohormonal blockade**: ACEi/ARB, MRA, beta-blockers (± CRT).',
  ],

  mechanism: {
    title: 'Low EF → neurohormonal activation → remodeling (vicious cycle)',
    steps: [
      { id: 's1', label: '↓ contractility → EF ≤40%' },
      { id: 's2', label: '↓ CO/BP → RAAS + SNS activation', emphasis: 'key' },
      { id: 's3', label: 'Vasoconstriction + salt/water retention (↑preload & afterload)' },
      { id: 's4', label: 'Maladaptive remodeling (hypertrophy/apoptosis/fibrosis)', emphasis: 'danger' },
      { id: 's5', label: 'Further ↓ EF (vicious cycle)' },
    ],
    branches: [
      { fromId: 's2', title: 'Counter-regulation', steps: [{ id: 'n1', label: 'Natriuretic peptides (BNP) oppose overload' }] },
    ],
  },

  examFindings: [
    { sign: 'S3 gallop, displaced apex', mechanism: 'Dilated, volume-overloaded LV', significance: 'key' },
    { sign: 'Functional MR murmur + congestion', mechanism: 'Annular dilation; backward failure', significance: 'supportive' },
    { sign: '↑ BNP / NT-proBNP', mechanism: 'Myocardial stretch', significance: 'key' },
  ],

  investigations: [
    { clue: 'Echo: EF ≤40, dilated LV', meaning: 'Diagnostic' },
    { clue: 'BNP / NT-proBNP', meaning: 'Severity / monitoring' },
    { clue: 'Identify reversible etiologies', meaning: 'Ischemia, alcohol, thyroid, tachycardia' },
  ],

  treatment: [
    { logic: 'Neurohormonal blockade: ACEi/ARB (or ARNI), beta-blocker, MRA, SGLT2i', detail: 'Improves survival; reverse-remodels.' },
    { logic: 'Diuretics for congestion', detail: 'Symptom control.' },
    { logic: 'CRT for dyssynchrony; ICD for SCD risk', detail: 'Device therapy.' },
  ],

  mnemonics: [
    { hook: 'HFrEF progression = RAAS + Sympathetic → Remodeling; block both', expansion: ['ACEi/ARB/MRA block RAAS', 'Beta-blockers block SNS'] },
    { hook: 'BNP up when the heart is stretched', expansion: ['Marker + counter-regulatory hormone'] },
  ],

  traps: [
    {
      questionCategory: 'Why block RAAS / sympathetic in HF',
      wrongInstinct: 'Sympathetic & RAAS activation are helpful compensation, so don’t block them',
      rightAnswer: 'Chronic RAAS/SNS activation is MALADAPTIVE → remodeling; blocking them (ACEi, BB, MRA) improves survival',
      why: 'Acutely they maintain BP, but chronically they drive remodeling and progression — neurohormonal blockade is the cornerstone of HFrEF therapy and reverse-remodels the heart.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which drug class is a cornerstone of HFrEF therapy because it interrupts maladaptive neurohormonal remodeling?',
      options: [
        { id: 'a', text: 'Short-acting nitrates' },
        { id: 'b', text: 'ACE inhibitors / beta-blockers / MRAs' },
        { id: 'c', text: 'Calcium channel blockers' },
        { id: 'd', text: 'Digoxin alone' },
      ],
      answerId: 'b',
      explanation: 'Neurohormonal blockade (ACEi/ARB, beta-blockers, MRAs, and SGLT2 inhibitors) interrupts the RAAS/SNS-driven remodeling cycle and improves survival in HFrEF.',
      tests: 'treatment',
    },
  ],

  figures: [
    { title: 'Frank-Starling curves', svg: FRANK_STARLING, caption: 'The failing ventricle shifts down/right — less stroke volume for a given preload.' },
    { title: 'Pressure-volume loops', svg: PV_LOOP_HF, caption: 'HFrEF (red): right-shifted loop with reduced stroke volume / EF.' },
  ],
};

export default hfrefSystolic;
