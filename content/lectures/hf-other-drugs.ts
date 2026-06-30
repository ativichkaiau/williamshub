import type { Lecture } from '../../lib/types';

export const hfOtherDrugs: Lecture = {
  id: 'hf-other-drugs',
  title: 'HF — Diuretics, Ivabradine & Vasodilators',
  system: 'cardiovascular',
  source: 'L15 — Drugs Used in Heart Failure',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L15 Drugs Used in HF' },
    { kind: 'disease', label: 'Symptomatic HF therapy' },
    { kind: 'mechanism', label: 'Congestion relief' },
    { kind: 'treatment', label: 'Adjuncts' },
  ],

  highYield: [
    '**Diuretics** (loop: furosemide; thiazide): relieve **volume overload/congestion** (symptoms, **not survival**). AE: hypokalemic metabolic alkalosis; loop **ototoxicity**.',
    '**Ivabradine**: inhibits the **If current at the SA node → ↓HR** (sinus rhythm only); HFrEF EF≤35%, HR≥70 on max β-blocker. AE: **phosphenes**, bradycardia.',
    '**Hydralazine + isosorbide dinitrate**: arteriolar (↓afterload) + venous (↓preload); HFrEF in **Black patients** or ACEi/ARB-intolerant. AE: hydralazine **lupus-like**.',
    'Diuretics relieve congestion fast; only the **four pillars + SGLT2i improve survival**.',
  ],

  mechanism: {
    title: 'Congestion relief + rate/load control',
    steps: [
      { id: 's1', label: 'Volume overload → loop/thiazide diuretic → ↓ preload (congestion relief)', emphasis: 'key' },
    ],
    branches: [
      { fromId: 's1', title: 'Heart rate', steps: [{ id: 'i1', label: 'HR≥70 sinus → ivabradine (↓If at SA node)' }] },
      { fromId: 's1', title: 'Load', steps: [{ id: 'h1', label: 'Black / intolerant → hydralazine-ISDN (↓afterload + preload)' }] },
    ],
  },

  examFindings: [
    { sign: 'Diuretic response: ↓edema, ↓dyspnea', mechanism: 'Reduced congestion', significance: 'key' },
    { sign: 'Hypokalemia (loop/thiazide)', mechanism: 'Distal K⁺ wasting', significance: 'supportive' },
    { sign: 'Phosphenes (luminous visual phenomena)', mechanism: 'Ivabradine retinal Ih effect', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Electrolytes (K⁺, Na⁺) + renal function', meaning: 'Diuretic monitoring' },
    { clue: 'HR & rhythm (sinus, ≥70)', meaning: 'Ivabradine eligibility' },
  ],

  treatment: [
    { logic: 'Loop diuretics for congestion', detail: 'Titrate to euvolemia.' },
    { logic: 'Ivabradine if HR≥70 in sinus rhythm on max beta-blocker', detail: 'Further rate control.' },
    { logic: 'Hydralazine-ISDN in Black patients / ACEi-ARB intolerant', detail: 'Afterload + preload reduction.' },
  ],

  mnemonics: [
    { hook: 'Diuretics relieve symptoms (not mortality); pillars + SGLT2i save lives', expansion: ['Congestion vs survival benefit'] },
    { hook: 'Ivabradine = If channel, SA node, sinus only, HR≥70', expansion: ['No effect in AF'] },
  ],

  traps: [
    {
      questionCategory: 'What improves survival',
      wrongInstinct: 'Loop diuretics improve survival in HFrEF',
      rightAnswer: "Diuretics relieve congestion (symptoms) but don't improve survival — the four pillars do",
      why: 'Diuretics are essential for symptom control, but the mortality benefit in HFrEF comes from neurohormonal blockade + SGLT2 inhibitors.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A HFrEF patient (EF 30%) in sinus rhythm has HR 85 despite a maximally tolerated beta-blocker. Which agent adds further heart-rate control?',
      options: [
        { id: 'a', text: 'Digoxin only' },
        { id: 'b', text: 'Ivabradine (If channel inhibitor)' },
        { id: 'c', text: 'Verapamil' },
        { id: 'd', text: 'Atropine' },
      ],
      answerId: 'b',
      explanation: 'Ivabradine inhibits the SA-node If current to slow heart rate in patients in sinus rhythm with HR ≥70 on a maximally tolerated beta-blocker (EF ≤35%).',
      tests: 'treatment',
    },
  ],
};

export default hfOtherDrugs;
