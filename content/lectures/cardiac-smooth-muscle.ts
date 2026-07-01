import type { Lecture } from '../../lib/types';
import { MUSCLE_COMPARISON } from '../../lib/figures';

export const cardiacSmoothMuscle: Lecture = {
  id: 'cardiac-smooth-muscle',
  title: 'Cardiac & Smooth Muscle',
  system: 'histology',
  source: 'L7 — Muscle Tissue',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Histology' },
    { kind: 'lecture', label: 'L7 Muscle Tissue' },
    { kind: 'mechanism', label: 'Intercalated disc & Ca²⁺' },
    { kind: 'exam', label: 'Three muscle types' },
  ],

  highYield: [
    '**Cardiac muscle: striated, involuntary, branched cells with 1–2 CENTRAL nuclei.** Its hallmark is the **intercalated disc** — the step-like end-to-end junction containing **desmosomes + fascia adherens** (mechanical coupling) and **gap junctions** (electrical coupling) → the myocardium behaves as a **functional syncytium**.',
    '**Cardiac excitation–contraction uses a DYAD** (one T-tubule + one SR cisterna, at the Z line) and depends on **Ca²⁺-induced Ca²⁺ release** (extracellular Ca²⁺ entry triggers SR Ca²⁺ release). Poor regeneration — infarcted myocardium heals by fibrosis.',
    '**Smooth muscle: NON-striated, involuntary, spindle-shaped cells with a single CENTRAL nucleus.** No sarcomeres — actin/myosin attach to **dense bodies** (the smooth-muscle "Z-line equivalent"). Has **caveolae** instead of T-tubules; cells coupled by **gap junctions**.',
    '**Smooth-muscle contraction is calmodulin-dependent.** Ca²⁺ → **calmodulin → myosin light-chain kinase (MLCK)** → phosphorylates myosin → contraction (slow, sustained, low-energy). Found in **gut wall, blood vessels, airways, uterus, bladder, iris**.',
    '**Quick discriminators.** Nuclei: skeletal = **peripheral & multiple**; cardiac = **central, 1–2**; smooth = **central, single**. Striations: skeletal + cardiac yes, smooth no. Regeneration: skeletal via **satellite cells**, smooth good, **cardiac poor**.',
  ],

  mechanism: {
    title: 'Coupled hearts, calmodulin guts',
    steps: [
      { id: 's1', label: 'Cardiac: intercalated disc = desmosome + gap junction', emphasis: 'key' },
      { id: 's2', label: 'Cardiac dyad + Ca²⁺-induced Ca²⁺ release → syncytium' },
      { id: 's3', label: 'Smooth: no striations; actin on dense bodies', emphasis: 'key' },
      { id: 's4', label: 'Smooth: Ca²⁺→calmodulin→MLCK→contraction', emphasis: 'key' },
      { id: 's5', label: 'Nuclei: skeletal peripheral, cardiac/smooth central' },
    ],
  },

  examFindings: [
    { sign: 'Branched striated cells joined by dark step-lines', mechanism: 'Cardiac muscle intercalated discs', significance: 'key' },
    { sign: 'Central single nucleus, no striations, spindle shape', mechanism: 'Smooth muscle', significance: 'key' },
    { sign: 'Gap junctions coupling cells into a syncytium', mechanism: 'Cardiac (disc) / smooth (direct)', significance: 'supportive' },
    { sign: 'Contraction driven by calmodulin/MLCK', mechanism: 'Smooth muscle (no troponin)', significance: 'key' },
    { sign: 'Central 1–2 nuclei with striations', mechanism: 'Cardiac muscle fibre', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Structure providing both mechanical and electrical coupling in the heart', meaning: 'Intercalated disc (desmosome + gap junction)' },
    { clue: 'Smooth-muscle equivalent of the Z line', meaning: 'Dense bodies' },
    { clue: 'Regulatory protein replacing troponin in smooth muscle', meaning: 'Calmodulin (→ MLCK)' },
    { clue: 'Muscle with the poorest regenerative capacity', meaning: 'Cardiac muscle (heals by fibrosis)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Intercalated-disc gap junctions synchronise the heartbeat (see [[cell-junctions]]); desmosomal mutations cause ARVC. Smooth-muscle MLCK/Ca²⁺ is the target of vasodilators and bronchodilators. Skeletal detail: [[skeletal-muscle-sarcomere]].' },
  ],

  mnemonics: [
    { hook: 'Nuclei: sKeletal = peripheral (Kicked to the side); Cardiac/smooth = Central', expansion: ['Cardiac 1–2, smooth 1'] },
    { hook: 'Smooth = "calModulin + mLcK, no troponin"; Cardiac = "intercalated disc + dyad"', expansion: ['Dense bodies vs sarcomeres'] },
  ],

  traps: [
    {
      questionCategory: 'Regulatory protein of smooth muscle',
      wrongInstinct: 'Smooth muscle contraction is triggered by Ca²⁺ binding troponin, like skeletal muscle',
      rightAnswer: 'Smooth muscle has NO troponin — Ca²⁺ binds CALMODULIN → activates MLCK → myosin phosphorylation',
      why: 'Only striated (skeletal/cardiac) muscle uses troponin. Smooth muscle uses the calmodulin–MLCK pathway.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The intercalated disc of cardiac muscle provides electrical coupling between cells through its:',
      options: [
        { id: 'a', text: 'Desmosomes' },
        { id: 'b', text: 'Gap junctions' },
        { id: 'c', text: 'Tight junctions' },
        { id: 'd', text: 'Hemidesmosomes' },
      ],
      answerId: 'b',
      explanation: 'Gap junctions in the intercalated disc allow ions to pass cell-to-cell, letting the myocardium contract as a functional syncytium. Desmosomes/fascia adherens provide the mechanical coupling.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which feature is characteristic of smooth muscle?',
      options: [
        { id: 'a', text: 'Peripheral multiple nuclei and visible striations' },
        { id: 'b', text: 'A single central nucleus, no striations, and contraction via calmodulin/MLCK' },
        { id: 'c', text: 'Intercalated discs' },
        { id: 'd', text: 'A triad at the A–I junction' },
      ],
      answerId: 'b',
      explanation: 'Smooth muscle is spindle-shaped with one central nucleus, no striations, dense bodies instead of sarcomeres, and Ca²⁺–calmodulin–MLCK contraction. Intercalated discs and triads belong to cardiac/skeletal muscle.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Three muscle types', svg: MUSCLE_COMPARISON, caption: 'Skeletal (striated, peripheral nuclei, triad) vs cardiac (striated, central, intercalated disc, dyad) vs smooth (non-striated, central nucleus, calmodulin).' },
  ],
};

export default cardiacSmoothMuscle;
