import type { Lecture } from '../../lib/types';
import { MICHAELIS_MENTEN } from '../../lib/figures';

export const enzymeKinetics: Lecture = {
  id: 'enzyme-kinetics',
  title: 'Enzyme Kinetics',
  system: 'molecular',
  source: 'L2 — Enzymes & Cofactors',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Molecular' },
    { kind: 'lecture', label: 'L2 Enzymes & Cofactors' },
    { kind: 'disease', label: 'Kinetics' },
    { kind: 'mechanism', label: 'Michaelis-Menten' },
    { kind: 'exam', label: 'Km & Vmax' },
  ],

  highYield: [
    '**Michaelis-Menten**: v = **Vmax·[S] / (Km + [S])** — a hyperbolic curve of velocity vs substrate.',
    '**Vmax** = maximal rate at saturating [S] (proportional to enzyme amount). **Km = [S] at ½Vmax** — an **inverse index of substrate affinity** (low Km = high affinity).',
    'At **[S] ≪ Km** the reaction is ~first-order in [S]; at **[S] ≫ Km** it is zero-order (saturated).',
    '**Lineweaver-Burk** (double-reciprocal, 1/v vs 1/[S]) linearizes the data: **y-intercept = 1/Vmax**, **x-intercept = −1/Km**, slope = Km/Vmax.',
    '**kcat (turnover number)** = molecules of substrate converted per enzyme per second; **kcat/Km** measures catalytic efficiency. Activity depends on **optimal temperature and pH** (excess heat/pH denatures the enzyme).',
  ],

  mechanism: {
    title: 'Velocity depends on how [S] compares to Km',
    steps: [
      { id: 's1', label: 'Low [S]: rate rises ~linearly (first-order)' },
      { id: 's2', label: 'At [S] = Km: v = ½Vmax', emphasis: 'key' },
      { id: 's3', label: 'High [S]: enzyme saturated → Vmax (zero-order)' },
      { id: 's4', label: 'Km ↓ = higher affinity; Vmax ↑ = more enzyme' },
    ],
  },

  examFindings: [
    { sign: 'Hyperbolic v vs [S] plot', mechanism: 'Michaelis-Menten kinetics', significance: 'key' },
    { sign: 'Half-maximal velocity at a given [S]', mechanism: 'That [S] equals Km', significance: 'key' },
    { sign: 'Activity falls sharply above optimal temperature', mechanism: 'Thermal denaturation of the enzyme', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Km value', meaning: 'Substrate affinity (low Km = tight binding)' },
    { clue: 'Vmax value', meaning: 'Scales with enzyme concentration' },
    { clue: 'Lineweaver-Burk intercepts', meaning: 'Extract Km and Vmax; classify inhibitors' },
  ],

  treatment: [
    { logic: 'Kinetic parameters guide drug design', detail: 'Inhibitor type is read from Km/Vmax changes.' },
    { logic: 'Maintain physiologic pH/temperature', detail: 'Enzymes work at their optimum.' },
  ],

  mnemonics: [
    { hook: 'Km = [S] at ½Vmax → low Km = high affinity', expansion: ['Km is inversely related to affinity'] },
    { hook: 'Lineweaver-Burk: y-int = 1/Vmax, x-int = −1/Km', expansion: ['Double-reciprocal linearization'] },
  ],

  traps: [
    {
      questionCategory: 'Meaning of Km',
      wrongInstinct: 'A high Km means the enzyme binds its substrate tightly',
      rightAnswer: 'Km is inversely related to affinity — a HIGH Km means LOW affinity (needs more substrate to reach ½Vmax)',
      why: 'Km is the substrate concentration giving half-maximal velocity; the more substrate required, the weaker the binding, so high Km = low affinity.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Enzyme X has a Km of 2 µM and enzyme Y has a Km of 50 µM for the same substrate. Which statement is correct?',
      options: [
        { id: 'a', text: 'Enzyme Y has higher affinity for the substrate' },
        { id: 'b', text: 'Enzyme X has higher affinity for the substrate' },
        { id: 'c', text: 'Both have identical affinity' },
        { id: 'd', text: 'Km tells us nothing about affinity' },
      ],
      answerId: 'b',
      explanation: 'Km is inversely related to affinity, so the lower Km (enzyme X, 2 µM) indicates tighter substrate binding (higher affinity).',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Michaelis-Menten curve', svg: MICHAELIS_MENTEN, caption: 'v = Vmax[S]/(Km+[S]); Km = [S] at ½Vmax. Competitive inhibitors raise Km (same Vmax); noncompetitive lower Vmax (same Km).' },
  ],
};

export default enzymeKinetics;
