import type { Lecture } from '../../lib/types';

export const organicNitrates: Lecture = {
  id: 'organic-nitrates',
  title: 'Organic Nitrates',
  system: 'cardiovascular',
  source: 'L13 — Antianginal Drugs',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L13 Antianginal Drugs' },
    { kind: 'disease', label: 'Angina therapy' },
    { kind: 'mechanism', label: 'NO → cGMP' },
    { kind: 'treatment', label: 'Acute attack' },
  ],

  highYield: [
    'Converted to **NO → ↑cGMP → vascular smooth-muscle relaxation**.',
    'Predominantly relax **large veins → ↑venous capacitance → ↓preload → ↓O₂ demand**; cause **reflex tachycardia**.',
    '**Sublingual** (nitroglycerin / isosorbide dinitrate): fast (2–4 min) → **acute attack**; **oral/transdermal**: slow → **prevention**.',
    'ADRs: **headache**, **postural hypotension**, **reflex tachycardia**, **tolerance** (need a nitrate-free interval), methemoglobinemia (overdose).',
    '**Contraindicated with PDE5 inhibitors (sildenafil/Viagra)** → severe hypotension.',
  ],

  mechanism: {
    title: 'Nitrate → NO → cGMP → venodilation → ↓preload',
    steps: [
      { id: 's1', label: 'Organic nitrate → NO' },
      { id: 's2', label: '↑ cGMP', emphasis: 'key' },
      { id: 's3', label: 'Smooth-muscle relaxation → venodilation (↑capacitance)' },
      { id: 's4', label: '↓ preload → ↓ myocardial O₂ demand' },
    ],
    branches: [
      { fromId: 's4', title: 'Reflex', steps: [{ id: 'r1', label: 'Baroreflex → reflex tachycardia', emphasis: 'danger' }] },
    ],
  },

  examFindings: [
    { sign: 'Relief of anginal pain within minutes (sublingual)', mechanism: 'Rapid venodilation', significance: 'key' },
    { sign: 'Headache, flushing, postural hypotension', mechanism: 'Systemic vasodilation', significance: 'key' },
    { sign: 'Reflex tachycardia', mechanism: 'Baroreceptor response to ↓BP', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Clinical response (no lab monitoring)', meaning: 'Symptom relief' },
    { clue: 'Check for PDE5 inhibitor use before giving', meaning: 'Avoid the lethal interaction' },
  ],

  treatment: [
    { logic: 'Acute attack: sublingual nitrate', detail: 'Onset 2–4 min.' },
    { logic: 'Prevention: oral/transdermal nitrate with a nitrate-free interval', detail: 'Avoids tolerance.' },
    { logic: 'Often combined with a beta-blocker', detail: 'Blunts the reflex tachycardia.' },
  ],

  mnemonics: [
    { hook: 'Nitrates → NO → cGMP → venodilation → ↓preload', expansion: ['Veins > arteries', 'Lower preload, lower demand'] },
    { hook: 'Nitrate + Viagra = the floor', expansion: ['Both raise cGMP → severe hypotension — never combine'] },
  ],

  traps: [
    {
      questionCategory: 'Drug interaction',
      wrongInstinct: 'Nitrates can be given with PDE5 inhibitors for chest pain',
      rightAnswer: 'NEVER combine nitrates with PDE5 inhibitors (sildenafil) → life-threatening hypotension',
      why: 'Both raise cGMP; together they cause profound vasodilation and hypotension — a contraindicated combination.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Why must organic nitrates never be co-administered with sildenafil (a PDE5 inhibitor)?',
      options: [
        { id: 'a', text: 'Both lower cGMP, causing hypertension' },
        { id: 'b', text: 'Both raise cGMP, causing severe hypotension' },
        { id: 'c', text: 'They cancel each other out' },
        { id: 'd', text: 'They increase clotting risk' },
      ],
      answerId: 'b',
      explanation: 'Nitrates increase cGMP via NO, and PDE5 inhibitors prevent cGMP breakdown; together they cause profound vasodilation and life-threatening hypotension.',
      tests: 'treatment',
    },
  ],
};

export default organicNitrates;
