import type { Lecture } from '../../lib/types';

export const antianginalPrinciples: Lecture = {
  id: 'antianginal-principles',
  title: 'Antianginal Drugs — Principles',
  system: 'cardiovascular',
  source: 'L13 — Antianginal Drugs',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L13 Antianginal Drugs' },
    { kind: 'disease', label: 'Angina pectoris' },
    { kind: 'mechanism', label: 'O₂ supply vs demand' },
    { kind: 'treatment', label: 'Three drug classes' },
  ],

  highYield: [
    'Angina = chest pain when **coronary O₂ supply < myocardial O₂ demand**.',
    'Types: **classic / chronic stable** (atherosclerotic stenosis) vs **variant / Prinzmetal** (vasospasm).',
    'Strategy: restore balance, mainly by **reducing O₂ demand** — set by **preload, afterload, contractility, heart rate**.',
    'Three demand-reducing classes: **organic nitrates, beta-blockers, calcium channel blockers**.',
    'Guideline: short-acting nitrate for immediate relief; **first-line prevention = beta-blocker and/or CCB**; **vasospastic → CCB**; add antiplatelet + statin.',
  ],

  mechanism: {
    title: 'Restore O₂ supply–demand balance',
    steps: [
      { id: 's1', label: 'Atherosclerosis / vasospasm → supply < demand' },
      { id: 's2', label: 'Ischemia (angina)', emphasis: 'key' },
      { id: 's3', label: 'Reduce demand (↓preload, ↓afterload, ↓HR, ↓contractility)' },
      { id: 's4', label: '± increase supply (revascularize) → relieve ischemia' },
    ],
    branches: [
      {
        fromId: 's3',
        title: 'The three classes',
        steps: [{ id: 'c1', label: 'Nitrates (↓preload) · BB (↓HR/contractility) · CCB (↓afterload)' }],
      },
    ],
  },

  examFindings: [
    { sign: 'Exertional chest pain relieved by rest / nitrates (stable)', mechanism: 'Fixed stenosis, demand ischemia', significance: 'key' },
    { sign: 'Rest / nocturnal pain (variant / vasospastic)', mechanism: 'Coronary vasospasm', significance: 'key' },
  ],

  investigations: [
    { clue: 'ECG, stress testing, coronary angiography', meaning: 'Confirm ischemia & anatomy' },
    { clue: 'Timing of pain', meaning: 'Distinguish stable vs vasospastic' },
  ],

  treatment: [
    { logic: 'Immediate relief: short-acting (sublingual) nitrate', detail: 'Acute attack.' },
    { logic: 'Prevention: beta-blocker and/or CCB (combine BB + DHP-CCB if needed)', detail: 'First-line prophylaxis.' },
    { logic: 'Vasospastic → CCB; add antiplatelet + statin', detail: 'Disease modification.' },
  ],

  mnemonics: [
    { hook: 'Antianginals reduce DEMAND: Nitrates (preload), BB (HR/contractility), CCB (afterload)', expansion: ['Demand = preload, afterload, HR, contractility'] },
    { hook: 'Variant (vasospastic) angina → CCB', expansion: ['Not a beta-blocker'] },
  ],

  traps: [
    {
      questionCategory: 'Determinants of O₂ demand',
      wrongInstinct: 'Antianginals work mainly by increasing oxygen supply',
      rightAnswer: 'They mainly REDUCE oxygen demand (preload, afterload, HR, contractility)',
      why: 'Pharmacologic therapy primarily lowers myocardial O₂ demand; increasing supply is largely mechanical (PCI/CABG).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The primary pharmacologic strategy in chronic stable angina is to:',
      options: [
        { id: 'a', text: 'Increase coronary oxygen supply with drugs' },
        { id: 'b', text: 'Reduce myocardial oxygen demand (preload / afterload / HR / contractility)' },
        { id: 'c', text: 'Increase heart rate' },
        { id: 'd', text: 'Increase contractility' },
      ],
      answerId: 'b',
      explanation: 'Antianginal drugs primarily reduce myocardial oxygen demand by lowering preload, afterload, heart rate, and contractility; raising supply is mainly achieved by revascularization.',
      tests: 'mechanism',
    },
  ],
};

export default antianginalPrinciples;
