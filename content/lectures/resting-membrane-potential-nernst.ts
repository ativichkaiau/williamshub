import type { Lecture } from '../../lib/types';
import { NERNST_EQUILIBRIUM } from '../../lib/figures';

export const restingMembranePotentialNernst: Lecture = {
  id: 'resting-membrane-potential-nernst',
  title: 'Resting Membrane Potential & the Nernst Equation',
  system: 'physiology',
  source: 'L5 — Regulation of the Resting Membrane Potential',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'L5 Resting Membrane Potential' },
    { kind: 'mechanism', label: 'Equilibrium potential' },
    { kind: 'exam', label: 'Nernst · E_K' },
  ],

  highYield: [
    '**The resting membrane potential (RMP ≈ −70 mV in neurons) is a voltage across the membrane** created by (1) **ion concentration gradients** (high intracellular K⁺, high extracellular Na⁺ — set by the Na⁺/K⁺-ATPase) and (2) **selective membrane permeability** (mostly to K⁺ at rest).',
    '**The equilibrium (Nernst) potential of an ion = the membrane voltage at which its electrical force exactly balances its concentration force**, so there is **no net flux** of that ion. The **Nernst equation** calculates it from the ion\'s concentration gradient.',
    '**Typical equilibrium potentials:** **E_K ≈ −90 mV**, **E_Na ≈ +60 mV**, **E_Cl ≈ −70 mV**. Because the resting membrane is **most permeable to K⁺** (open K⁺ leak channels), the **RMP sits close to E_K** (near −70 to −90 mV), pulled slightly positive by a small Na⁺ leak.',
    '**If Vm ≠ E_ion, that ion flows** — driven by the net electrochemical gradient — toward its equilibrium potential (e.g. at rest, Na⁺ leaks in because Vm (−70) is far from E_Na (+60)).',
    '**The Na⁺/K⁺-ATPase both maintains the gradients and contributes directly** (it is **electrogenic**: 3 Na⁺ out / 2 K⁺ in → a small net negative contribution). Changing extracellular K⁺ shifts E_K and therefore the RMP — clinically important (hyperkalaemia depolarises, endangering the heart).',
  ],

  mechanism: {
    title: 'Gradient + permeability → voltage',
    steps: [
      { id: 's1', label: 'Gradients (K⁺ in, Na⁺ out) set by Na⁺/K⁺-ATPase', emphasis: 'key' },
      { id: 's2', label: 'Nernst potential = voltage of no net flux for one ion', emphasis: 'key' },
      { id: 's3', label: 'E_K ≈ −90, E_Na ≈ +60, E_Cl ≈ −70' },
      { id: 's4', label: 'Membrane most permeable to K⁺ → RMP near E_K', emphasis: 'key' },
      { id: 's5', label: 'Vm ≠ E_ion → ion flows toward its equilibrium' },
    ],
  },

  examFindings: [
    { sign: 'RMP ≈ −70 mV, close to E_K', mechanism: 'Resting membrane is dominated by K⁺ permeability', significance: 'key' },
    { sign: 'E_K ≈ −90 mV', mechanism: 'Nernst potential for K⁺ (its concentration gradient)', significance: 'key' },
    { sign: 'Na⁺ leaks inward at rest', mechanism: 'Vm (−70) far from E_Na (+60) → inward driving force', significance: 'supportive' },
    { sign: 'Hyperkalaemia depolarises the cell', mechanism: '↑extracellular K⁺ → E_K less negative → RMP less negative', significance: 'key' },
  ],

  investigations: [
    { clue: 'Membrane voltage of no net flux for one ion', meaning: 'That ion\'s equilibrium (Nernst) potential' },
    { clue: 'Ion whose equilibrium potential the RMP is closest to', meaning: 'K⁺ (most permeable at rest)' },
    { clue: 'Direction Na⁺ moves at rest', meaning: 'Inward (Vm << E_Na)' },
    { clue: 'Effect of raised extracellular K⁺ on RMP', meaning: 'Depolarisation (E_K less negative)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Potassium disturbances alter the RMP and cardiac excitability (hyperkalaemia → arrhythmia); the RMP is the launch pad for the action potential ([[action-potential-genesis]]). The full multi-ion picture (Goldman) and regulation: [[goldman-rmp-regulation]].' },
  ],

  mnemonics: [
    { hook: 'RMP sits near E_K because K⁺ is the most permeable at rest', expansion: ['E_K −90, E_Na +60, E_Cl −70'] },
    { hook: 'Nernst = "the voltage that balances one ion" (no net flux)', expansion: ['If Vm ≠ E, the ion moves'] },
  ],

  traps: [
    {
      questionCategory: 'What the RMP is closest to',
      wrongInstinct: 'The resting membrane potential lies close to the sodium equilibrium potential',
      rightAnswer: 'The RMP lies close to the POTASSIUM equilibrium potential (E_K ≈ −90 mV) because the resting membrane is most permeable to K⁺',
      why: 'At rest, K⁺ leak channels dominate permeability, so the membrane potential is pulled toward E_K, not E_Na.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The resting membrane potential of a neuron (≈ −70 mV) is closest to the equilibrium potential of which ion, and why?',
      options: [
        { id: 'a', text: 'Na⁺, because Na⁺ channels dominate at rest' },
        { id: 'b', text: 'K⁺, because the resting membrane is most permeable to K⁺' },
        { id: 'c', text: 'Cl⁻, because Cl⁻ is actively pumped' },
        { id: 'd', text: 'Ca²⁺, because of Ca²⁺ leak channels' },
      ],
      answerId: 'b',
      explanation: 'Open K⁺ leak channels make the resting membrane most permeable to K⁺, so the RMP sits near E_K (≈ −90 mV), pulled slightly positive by a small Na⁺ leak.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The equilibrium (Nernst) potential of an ion is defined as the membrane voltage at which:',
      options: [
        { id: 'a', text: 'The ion is actively pumped fastest' },
        { id: 'b', text: 'The electrical and concentration forces on the ion are balanced, giving no net flux' },
        { id: 'c', text: 'All channels for the ion are closed' },
        { id: 'd', text: 'The ion is at its highest concentration' },
      ],
      answerId: 'b',
      explanation: 'At the Nernst/equilibrium potential, the electrical gradient exactly opposes the concentration gradient, so there is no net movement of that ion.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'RMP & equilibrium potentials', svg: NERNST_EQUILIBRIUM, caption: 'E_K ≈ −90, E_Na ≈ +60, E_Cl ≈ −70. RMP sits near E_K (K⁺-dominant permeability); Na⁺/K⁺-ATPase maintains the gradients.' },
  ],
};

export default restingMembranePotentialNernst;
