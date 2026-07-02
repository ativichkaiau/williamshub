import type { Lecture } from '../../lib/types';

export const goldmanRmpRegulation: Lecture = {
  id: 'goldman-rmp-regulation',
  title: 'The Goldman Equation & Regulation of the RMP',
  system: 'physiology',
  source: 'L5 — Regulation of the Resting Membrane Potential',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'L5 Resting Membrane Potential' },
    { kind: 'mechanism', label: 'Permeability-weighted Vm' },
    { kind: 'exam', label: 'Goldman · permeability' },
  ],

  highYield: [
    '**The Nernst equation handles ONE ion; the Goldman (Goldman–Hodgkin–Katz) equation handles the real membrane** — it computes the resting potential as a **permeability-weighted average of all the permeant ions (K⁺, Na⁺, Cl⁻)**.',
    '**The key principle: the most permeable ion dominates the membrane potential.** At rest, **K⁺ permeability is highest**, so Vm ≈ E_K. When Na⁺ permeability rises sharply (voltage-gated Na⁺ channels open), Vm swings toward E_Na → the AP upstroke. **Permeability changes, not concentration changes, drive the moment-to-moment membrane potential.**',
    '**Channels regulate permeability.** **Leak (non-gated) channels** — chiefly K⁺, plus small Na⁺ and Cl⁻ leaks — set the resting permeability and thus the RMP; **gated channels** transiently change permeability to produce signals.',
    '**The Na⁺/K⁺-ATPase contributes twice:** it **maintains the concentration gradients** (indispensable long-term) and adds a small **electrogenic** hyperpolarising component (3 Na⁺ out for 2 K⁺ in). Blocking it (e.g. digoxin, ouabain) gradually depolarises the cell.',
    '**Clinical regulation via [K⁺]o:** because the RMP tracks E_K, **hyperkalaemia** (↑extracellular K⁺) raises E_K → **depolarises** cells (initially more excitable, then inexcitable — cardiac arrest risk); **hypokalaemia** hyperpolarises. This is why serum K⁺ is tightly controlled.',
  ],

  mechanism: {
    title: 'Weighted by permeability; pump maintains it',
    steps: [
      { id: 's1', label: 'Goldman = permeability-weighted average of K⁺/Na⁺/Cl⁻', emphasis: 'key' },
      { id: 's2', label: 'Most permeable ion dominates Vm', emphasis: 'key' },
      { id: 's3', label: 'Leak channels set resting permeability (K⁺ dominant)' },
      { id: 's4', label: 'Na⁺/K⁺-ATPase maintains gradients + electrogenic', emphasis: 'key' },
      { id: 's5', label: '↑[K⁺]o → depolarise; ↓[K⁺]o → hyperpolarise', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Vm swings toward E_Na during the AP', mechanism: 'Na⁺ permeability transiently dominates (Goldman)', significance: 'key' },
    { sign: 'RMP set mainly by K⁺ leak channels', mechanism: 'Highest resting permeability → Vm near E_K', significance: 'key' },
    { sign: 'Gradual depolarisation after ouabain/digoxin', mechanism: 'Na⁺/K⁺-ATPase inhibition (gradients run down)', significance: 'supportive' },
    { sign: 'Peaked T waves and arrhythmia in hyperkalaemia', mechanism: 'Raised [K⁺]o depolarises cardiac cells', significance: 'key' },
  ],

  investigations: [
    { clue: 'Equation giving RMP from all permeant ions', meaning: 'Goldman (GHK) equation' },
    { clue: 'What determines which ion dominates Vm', meaning: 'Relative membrane permeability' },
    { clue: 'Channels setting the resting permeability', meaning: 'Leak (non-gated) channels, chiefly K⁺' },
    { clue: 'Electrolyte disturbance that depolarises cells', meaning: 'Hyperkalaemia (↑[K⁺]o)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Goldman logic explains the AP (permeability shift to Na⁺) and why potassium is life-threatening when abnormal (cardiac excitability). Digoxin works via Na⁺/K⁺-ATPase inhibition. Single-ion basis: [[resting-membrane-potential-nernst]]; the AP: [[action-potential-genesis]].' },
  ],

  mnemonics: [
    { hook: 'Goldman = "the most permeable ion wins"', expansion: ['Rest: K⁺ wins; AP: Na⁺ wins'] },
    { hook: 'HYPERkalaemia depolarises; HYPOkalaemia hyperpolarises', expansion: ['RMP tracks E_K'] },
  ],

  traps: [
    {
      questionCategory: 'What drives the moment-to-moment Vm',
      wrongInstinct: 'Changes in ion CONCENTRATION cause the rapid changes in membrane potential during signalling',
      rightAnswer: 'Rapid Vm changes are driven by changes in PERMEABILITY (channels opening/closing), not concentration — the Goldman principle',
      why: 'One AP moves negligible ion amounts; it is the shift in relative permeability (to Na⁺, then K⁺) that swings Vm.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'According to the Goldman equation, the membrane potential at any moment is dominated by:',
      options: [
        { id: 'a', text: 'The ion with the highest intracellular concentration' },
        { id: 'b', text: 'The ion to which the membrane is currently most permeable' },
        { id: 'c', text: 'The ion pumped by the Na⁺/K⁺-ATPase' },
        { id: 'd', text: 'Whichever ion has the most negative equilibrium potential' },
      ],
      answerId: 'b',
      explanation: 'The Goldman equation weights each ion by its permeability, so the most permeable ion dominates Vm — K⁺ at rest, Na⁺ during the AP upstroke.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Hyperkalaemia (increased extracellular K⁺) affects the resting membrane potential by:',
      options: [
        { id: 'a', text: 'Hyperpolarising the cell' },
        { id: 'b', text: 'Depolarising the cell (E_K becomes less negative)' },
        { id: 'c', text: 'Having no effect' },
        { id: 'd', text: 'Reversing the Na⁺ gradient' },
      ],
      answerId: 'b',
      explanation: 'Raising extracellular K⁺ makes E_K less negative; since the RMP tracks E_K, the cell depolarises — clinically dangerous for cardiac excitability.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default goldmanRmpRegulation;
