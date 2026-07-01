import type { Lecture } from '../../lib/types';

export const pericarditis: Lecture = {
  id: 'pericarditis',
  title: 'Acute Pericarditis',
  system: 'cardiovascular',
  source: 'L21 — Pericardial Disease',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L21 Pericardial Disease' },
    { kind: 'disease', label: 'Pericarditis' },
    { kind: 'mechanism', label: 'Fibrinous exudate' },
    { kind: 'exam', label: 'Friction rub' },
  ],

  highYield: [
    'Pericardial inflammation. Causes: **viral (Coxsackie A/B)**, bacterial (incl. **TB**), **autoimmune (SLE, RA, drug-induced lupus — hydralazine/procainamide)**, **post-MI (Dressler)**, uremia, radiation, neoplasm, idiopathic.',
    'Morphological types: **serous**, **fibrinous / serofibrinous ("bread-and-butter")**, purulent/suppurative, hemorrhagic, **caseous (TB)**.',
    '**Fibrinous is the most common type** (uremia, post-MI, RA); it can organize into adhesions or constriction.',
    'Clinical: **pleuritic chest pain relieved by leaning forward**, **pericardial friction rub**; ECG **diffuse concave ST elevation + PR depression** (no reciprocal change).',
    '**Dressler syndrome** = post-MI autoimmune pericarditis (weeks later); **SLE → fibrinous pericarditis = its most common cardiac manifestation**; RA involves the heart in 20–40% of severe cases.',
  ],

  mechanism: {
    title: 'Trigger → inflammation → fibrinous exudate (± effusion)',
    steps: [
      { id: 's1', label: 'Trigger: viral / autoimmune / uremia / post-MI', emphasis: 'key' },
      { id: 's2', label: 'Vasodilation + ↑ permeability + leukocyte exudation' },
      { id: 's3', label: 'Fibrinous exudate over pericardium ("bread and butter")' },
      { id: 's4', label: 'Resorption (heal) OR organization → adhesions/constriction', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Pleuritic chest pain, better sitting forward, worse supine', mechanism: 'Inflamed pericardial layers', significance: 'key' },
    { sign: 'Pericardial friction rub', mechanism: 'Roughened visceral & parietal surfaces rubbing', significance: 'key' },
    { sign: 'ECG: diffuse concave ST elevation + PR depression', mechanism: 'Widespread epicardial inflammation', significance: 'key' },
  ],

  investigations: [
    { clue: 'ECG (diffuse STE, PR depression); echo (effusion)', meaning: 'Diagnosis & complication check' },
    { clue: 'ESR/CRP, troponin (if myopericarditis)', meaning: 'Inflammation / myocardial involvement' },
    { clue: 'Cause workup: viral, autoimmune (ANA), uremia, TB', meaning: 'Guides therapy' },
  ],

  treatment: [
    { logic: 'NSAIDs + colchicine (viral/idiopathic)', detail: 'Colchicine reduces recurrence.' },
    { logic: 'Treat the underlying cause', detail: 'Dialysis (uremic), anti-TB, immunosuppression (autoimmune).' },
    { logic: 'Avoid NSAIDs early after acute MI', detail: 'Impair infarct healing — use aspirin for peri-infarction pericarditis.' },
  ],

  mnemonics: [
    { hook: 'Fibrinous = "bread and butter"; TB = caseous', expansion: ['Morphology by cause'] },
    { hook: 'Post-MI pericarditis: early (days) vs Dressler (weeks, autoimmune)', expansion: ['Different timing & mechanism'] },
  ],

  traps: [
    {
      questionCategory: 'ST elevation: pericarditis vs STEMI',
      wrongInstinct: 'Diffuse ST elevation must be a STEMI',
      rightAnswer: 'Diffuse concave ST elevation + PR depression with NO reciprocal changes = pericarditis',
      why: 'Pericarditis gives widespread concave ST elevation with PR depression and no reciprocal ST depression, unlike the territorial, convex ST elevation with reciprocal changes of a STEMI.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which morphological type of pericarditis is the most common, seen in uremia, post-MI, and rheumatoid arthritis?',
      options: [
        { id: 'a', text: 'Serous' },
        { id: 'b', text: 'Fibrinous' },
        { id: 'c', text: 'Purulent' },
        { id: 'd', text: 'Caseous' },
      ],
      answerId: 'b',
      explanation: 'Fibrinous (and serofibrinous) pericarditis is the most common morphology — the classic "bread-and-butter" appearance — and is typical of uremia, post-MI states, and rheumatoid arthritis. Caseous pericarditis suggests tuberculosis.',
      tests: 'exam',
    },
  ],
};

export default pericarditis;
