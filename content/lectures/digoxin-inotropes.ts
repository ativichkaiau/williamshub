import type { Lecture } from '../../lib/types';

export const digoxinInotropes: Lecture = {
  id: 'digoxin-inotropes',
  title: 'Digoxin & Inotropes',
  system: 'cardiovascular',
  source: 'L15 — Drugs Used in Heart Failure',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L15 Drugs Used in HF' },
    { kind: 'disease', label: 'Positive inotropes' },
    { kind: 'mechanism', label: 'Na/K-ATPase' },
    { kind: 'treatment', label: 'Advanced HF' },
  ],

  highYield: [
    '**Digoxin**: inhibits **Na⁺/K⁺-ATPase → ↑intracellular Ca²⁺ → ↑contractility**; parasympathomimetic (↓HR, ↓AV conduction).',
    '**Narrow therapeutic range**; toxicity = **arrhythmias (DADs)**, **GI (anorexia, nausea, vomiting)**, **visual (yellow-green/halos)**.',
    '**Hypokalemia potentiates** digoxin toxicity.',
    'Use: symptomatic HFrEF despite GDMT (**↓hospitalizations, not mortality**); rate control in AF.',
    '**IV inotropes** for advanced/decompensated HF (Stage D): **dobutamine (β1)**, **milrinone (PDE-3 inhibitor → ↑cAMP)** — short-term, ↑arrhythmia/mortality.',
  ],

  mechanism: {
    title: '↑ contractility via intracellular Ca²⁺',
    steps: [
      { id: 's1', label: 'Digoxin inhibits Na⁺/K⁺-ATPase', emphasis: 'key' },
      { id: 's2', label: '↑ intracellular Na⁺ → ↓ Na/Ca exchange' },
      { id: 's3', label: '↑ intracellular Ca²⁺ → ↑ contractility' },
    ],
    branches: [
      {
        fromId: 's1',
        title: 'Toxicity',
        steps: [{ id: 't1', label: 'Delayed after-depolarizations → arrhythmias', emphasis: 'danger' }],
      },
    ],
  },

  examFindings: [
    { sign: 'Yellow-green vision / halos', mechanism: 'Digoxin visual toxicity', significance: 'key' },
    { sign: 'Anorexia, nausea, vomiting', mechanism: 'GI digoxin toxicity', significance: 'key' },
    { sign: 'Arrhythmias (bradyarrhythmia, AV block, ectopy)', mechanism: 'DADs + vagotonic effect', significance: 'key' },
  ],

  investigations: [
    { clue: 'Digoxin level + K⁺/Mg²⁺/renal function', meaning: 'Toxicity risk' },
    { clue: 'ECG', meaning: 'Toxic arrhythmias' },
  ],

  treatment: [
    { logic: 'Digoxin for symptomatic HFrEF / AF rate control; keep K⁺ normal', detail: 'Reduces hospitalizations, not mortality.' },
    { logic: 'IV inotropes (dobutamine, milrinone) for Stage D / acute decompensation', detail: 'Short-term bridge only.' },
  ],

  mnemonics: [
    { hook: 'Digoxin: Na/K-ATPase ✗ → ↑Ca → ↑contractility', expansion: ['Toxic = yellow vision + GI + arrhythmia'] },
    { hook: 'Hypokalemia worsens digoxin toxicity', expansion: ['Low K⁺ frees the binding site'] },
  ],

  traps: [
    {
      questionCategory: 'Digoxin & potassium',
      wrongInstinct: 'Hyperkalemia worsens digoxin toxicity',
      rightAnswer: 'HYPOkalemia potentiates digoxin toxicity (competes at Na/K-ATPase)',
      why: 'Low K⁺ frees the Na/K-ATPase binding site for digoxin, worsening toxicity — keep potassium normal.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An elderly HF patient on digoxin develops nausea, yellow-green visual halos, and a new arrhythmia. Which electrolyte abnormality worsens this toxicity?',
      options: [
        { id: 'a', text: 'Hyperkalemia' },
        { id: 'b', text: 'Hypokalemia' },
        { id: 'c', text: 'Hypernatremia' },
        { id: 'd', text: 'Hypochloremia' },
      ],
      answerId: 'b',
      explanation: 'Hypokalemia potentiates digoxin toxicity because low extracellular K⁺ leaves more Na/K-ATPase available for digoxin binding — keep K⁺ in the normal range.',
      tests: 'treatment',
    },
  ],
};

export default digoxinInotropes;
