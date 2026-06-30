import type { Lecture } from '../../lib/types';

export const betaBlockersCcbAngina: Lecture = {
  id: 'beta-blockers-ccb-angina',
  title: 'Beta-blockers & CCBs in Angina',
  system: 'cardiovascular',
  source: 'L13 — Antianginal Drugs',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L13 Antianginal Drugs' },
    { kind: 'disease', label: 'Angina therapy' },
    { kind: 'mechanism', label: '↓HR / ↓afterload' },
    { kind: 'treatment', label: 'Prophylaxis' },
  ],

  highYield: [
    '**Beta-blockers**: ↓HR, ↓contractility, **↑diastolic perfusion time** → ↓O₂ demand. Cornerstone **prophylaxis** of chronic stable angina; **no role in an acute attack**; **avoid in vasospastic** angina.',
    '**CCBs** ↓afterload (↓TPR) → ↓demand: **dihydropyridines** (nifedipine, amlodipine) = strong vasodilators, **reflex tachycardia**; **non-DHP** (verapamil, diltiazem) also ↓HR & contractility.',
    'CCBs treat **chronic stable AND variant angina** — **particularly useful in vasospastic (variant)** angina.',
    'Combo **beta-blocker + DHP-CCB** if monotherapy fails (BB blunts the DHP reflex tachycardia).',
    'Caution: **non-DHP + beta-blocker** → additive bradycardia / AV block.',
  ],

  mechanism: {
    title: '↓ HR/contractility (BB) + ↓ afterload (CCB) → ↓ demand',
    steps: [
      { id: 's1', label: 'Beta-blocker → ↓HR & contractility + ↑diastolic perfusion', emphasis: 'key' },
      { id: 's2', label: 'CCB → ↓TPR (afterload)', emphasis: 'key' },
      { id: 's3', label: '↓ cardiac workload → ↓ O₂ demand' },
    ],
    branches: [
      {
        fromId: 's2',
        title: 'CCB subtypes',
        steps: [
          { id: 'd1', label: 'DHP (nifedipine) → reflex tachycardia' },
          { id: 'd2', label: 'Non-DHP (verapamil/diltiazem) → ↓HR' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'Bradycardia (beta-blocker, non-DHP CCB)', mechanism: 'Negative chronotropy', significance: 'key' },
    { sign: 'DHP CCB: flushing, pedal edema, reflex tachycardia', mechanism: 'Potent arteriolar vasodilation', significance: 'key' },
    { sign: 'Verapamil/diltiazem: AV block, constipation', mechanism: 'Cardiac Ca²⁺ channel block', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'HR / BP monitoring', meaning: 'Detect bradycardia / hypotension' },
    { clue: 'ECG (AV conduction with non-DHP)', meaning: 'Watch for AV block' },
  ],

  treatment: [
    { logic: 'Stable angina prophylaxis: beta-blocker and/or CCB', detail: 'First-line prevention.' },
    { logic: 'Vasospastic / variant angina → CCB (not a beta-blocker alone)', detail: 'Relieves spasm.' },
    { logic: 'Combine beta-blocker + DHP-CCB if needed', detail: 'BB offsets DHP reflex tachycardia.' },
  ],

  mnemonics: [
    { hook: 'Beta-blockers: prophylaxis only — useless in acute attack, avoid in vasospasm', expansion: ['↓HR + ↑diastolic perfusion', 'No role acutely'] },
    { hook: 'Variant angina → CCB (not beta-blocker)', expansion: ['CCB relieves coronary spasm'] },
  ],

  traps: [
    {
      questionCategory: 'Drug choice in vasospastic angina',
      wrongInstinct: 'Give a beta-blocker for vasospastic (Prinzmetal) angina',
      rightAnswer: 'Vasospastic angina → calcium channel blocker; beta-blockers can WORSEN spasm',
      why: 'Beta-blockade leaves unopposed alpha-mediated coronary vasoconstriction, worsening spasm; CCBs relieve and prevent vasospasm.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which antianginal class is particularly useful (and beta-blockers relatively avoided) in vasospastic / variant angina?',
      options: [
        { id: 'a', text: 'Organic nitrates only' },
        { id: 'b', text: 'Calcium channel blockers' },
        { id: 'c', text: 'Beta-blockers' },
        { id: 'd', text: 'None of these' },
      ],
      answerId: 'b',
      explanation: 'Calcium channel blockers relieve and prevent coronary vasospasm and are particularly useful in variant angina; beta-blockers can worsen spasm via unopposed alpha vasoconstriction.',
      tests: 'treatment',
    },
  ],
};

export default betaBlockersCcbAngina;
