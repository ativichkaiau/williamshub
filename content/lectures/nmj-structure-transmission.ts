import type { Lecture } from '../../lib/types';
import { NMJ_STRUCTURE } from '../../lib/figures';

export const nmjStructureTransmission: Lecture = {
  id: 'nmj-structure-transmission',
  title: 'The Neuromuscular Junction: Structure & Transmission',
  system: 'msk',
  source: 'L2 — The Neuromuscular Junction',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'MSK' },
    { kind: 'lecture', label: 'L2 Neuromuscular Junction' },
    { kind: 'mechanism', label: 'ACh → EPP → muscle AP' },
    { kind: 'exam', label: 'End-plate potential · safety factor' },
  ],

  highYield: [
    '**The NMJ is the synapse between a motor neuron and a skeletal muscle fibre.** Structure: the **presynaptic motor axon terminal** (packed with **ACh vesicles**), the **synaptic cleft** (containing **acetylcholinesterase**), and the **motor end plate** — the muscle membrane thrown into **junctional folds densely studded with nicotinic ACh receptors**.',
    '**Transmission sequence:** (1) the motor AP reaches the terminal → **opens voltage-gated Ca²⁺ channels**; (2) **Ca²⁺ influx triggers vesicle fusion → ACh release** (in "quanta" — vesicle packets); (3) ACh crosses the cleft and **binds nicotinic receptors**; (4) their channels open → **Na⁺ influx → depolarises the end plate = end-plate potential (EPP)**; (5) the EPP triggers a **muscle action potential** that spreads and initiates contraction.',
    '**The acetylcholine receptor here is the nicotinic (ionotropic) type** — a ligand-gated cation channel. Binding of **two ACh molecules** opens it briefly.',
    '**The "safety factor":** each nerve impulse releases **far more ACh (and thus a much larger EPP) than needed** to reach threshold, so transmission is **reliably 1:1** (every nerve AP → one muscle AP). Diseases that reduce receptors or release (myasthenia gravis, LEMS) erode this margin → **fatigable weakness**.',
    '**Signal termination:** ACh is rapidly **hydrolysed by acetylcholinesterase** in the cleft (into choline + acetate), ending the signal so the muscle can relax and reset. **MEPP** (miniature end-plate potential) = the tiny depolarisation from spontaneous release of a single vesicle.',
  ],

  mechanism: {
    title: 'AP → Ca²⁺ → ACh → nicotinic → EPP → muscle AP',
    steps: [
      { id: 's1', label: 'Motor AP → voltage-gated Ca²⁺ channels open', emphasis: 'key' },
      { id: 's2', label: 'Ca²⁺ triggers quantal ACh vesicle release', emphasis: 'key' },
      { id: 's3', label: 'ACh → nicotinic receptor → Na⁺ in → EPP', emphasis: 'key' },
      { id: 's4', label: 'EPP (large, safety factor) → muscle action potential' },
      { id: 's5', label: 'Acetylcholinesterase hydrolyses ACh → termination' },
    ],
  },

  examFindings: [
    { sign: 'End-plate potential (EPP)', mechanism: 'Nicotinic-receptor Na⁺ influx depolarises the end plate', significance: 'key' },
    { sign: 'ACh release requires Ca²⁺ entry', mechanism: 'Voltage-gated Ca²⁺ channels at the terminal', significance: 'key' },
    { sign: 'Reliable 1:1 nerve-to-muscle transmission', mechanism: 'Safety factor (excess ACh/EPP above threshold)', significance: 'key' },
    { sign: 'Nicotinic (not muscarinic) receptor at the end plate', mechanism: 'Ligand-gated cation channel', significance: 'supportive' },
    { sign: 'Miniature end-plate potential (MEPP)', mechanism: 'Spontaneous single-vesicle (quantal) release', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Ion whose entry triggers ACh release', meaning: 'Ca²⁺' },
    { clue: 'Receptor type at the motor end plate', meaning: 'Nicotinic (ionotropic)' },
    { clue: 'Enzyme terminating the signal', meaning: 'Acetylcholinesterase' },
    { clue: 'Why one nerve AP reliably gives one muscle AP', meaning: 'The safety factor (excess ACh)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The NMJ is a major drug/toxin target (see [[nmj-drugs-disorders]]): AChE inhibitors, botulinum toxin, neuromuscular blockers. It converts the motor nerve signal into the muscle AP that starts contraction ([[excitation-contraction-coupling]]). Overlaps the NMJ in EHP ([[skeletal-muscle-sarcomere]]).' },
  ],

  mnemonics: [
    { hook: 'NMJ chain: "Ca²⁺ → ACh → nicotinic → EPP → muscle AP → AChE off"', expansion: ['Quantal (vesicle) release'] },
    { hook: 'Safety factor = "way more ACh than needed" → reliable 1:1', expansion: ['Eroded in MG/LEMS'] },
  ],

  traps: [
    {
      questionCategory: 'Receptor type at the NMJ',
      wrongInstinct: 'Acetylcholine acts on muscarinic receptors at the neuromuscular junction',
      rightAnswer: 'The NMJ uses NICOTINIC (ionotropic) ACh receptors on the motor end plate; muscarinic receptors are at parasympathetic target organs',
      why: 'Skeletal-muscle end-plate receptors are nicotinic cation channels — muscarinic (GPCR) receptors belong to the autonomic (parasympathetic) system.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The depolarisation of the motor end plate produced when acetylcholine opens nicotinic receptors is called the:',
      options: [
        { id: 'a', text: 'Resting membrane potential' },
        { id: 'b', text: 'End-plate potential (EPP)' },
        { id: 'c', text: 'Inhibitory postsynaptic potential' },
        { id: 'd', text: 'Equilibrium potential' },
      ],
      answerId: 'b',
      explanation: 'ACh binding opens nicotinic cation channels → Na⁺ influx → the end-plate potential (EPP), which (thanks to the safety factor) always exceeds threshold and triggers a muscle action potential.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Release of acetylcholine from the motor nerve terminal is directly triggered by the influx of:',
      options: [
        { id: 'a', text: 'K⁺' },
        { id: 'b', text: 'Cl⁻' },
        { id: 'c', text: 'Ca²⁺' },
        { id: 'd', text: 'Mg²⁺' },
      ],
      answerId: 'c',
      explanation: 'The nerve action potential opens voltage-gated Ca²⁺ channels; Ca²⁺ influx triggers fusion of ACh vesicles with the presynaptic membrane (quantal release).',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'The neuromuscular junction', svg: NMJ_STRUCTURE, caption: 'Axon terminal (ACh vesicles) → cleft (AChE) → end plate (junctional folds, nicotinic receptors). AP→Ca²⁺→ACh→EPP→muscle AP; safety factor.' },
  ],
};

export default nmjStructureTransmission;
