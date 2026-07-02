import type { Lecture } from '../../lib/types';
import { EC_COUPLING } from '../../lib/figures';

export const excitationContractionCoupling: Lecture = {
  id: 'excitation-contraction-coupling',
  title: 'Excitation–Contraction Coupling & Ca²⁺ Control',
  system: 'msk',
  source: 'L3 — Molecular Basis of Muscle Contraction',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'MSK' },
    { kind: 'lecture', label: 'L3 Muscle Contraction' },
    { kind: 'mechanism', label: 'T-tubule → SR Ca²⁺' },
    { kind: 'exam', label: 'DHPR/RyR · troponin' },
  ],

  highYield: [
    '**Excitation–contraction (E-C) coupling links the muscle action potential to Ca²⁺ release.** The AP spreads along the sarcolemma and **down the T-tubules** (invaginations that carry the signal deep into the fibre), reaching the **triad** (1 T-tubule + 2 terminal cisternae of the **sarcoplasmic reticulum, SR**).',
    '**The voltage-sensor mechanism:** the T-tubule **dihydropyridine receptor (DHPR)** senses depolarisation and is **mechanically coupled to the SR ryanodine receptor (RyR)** → the RyR opens → **Ca²⁺ floods out of the SR** into the cytosol.',
    '**Ca²⁺ is the on-switch for contraction:** cytosolic Ca²⁺ binds **troponin C** → the troponin–tropomyosin complex shifts → **tropomyosin uncovers the myosin-binding sites on actin** → cross-bridge cycling proceeds ([[muscle-contraction-crossbridge]]). At rest, tropomyosin blocks these sites (so low Ca²⁺ = relaxed).',
    '**Relaxation is active:** the **SR Ca²⁺-ATPase (SERCA)** pumps Ca²⁺ back into the SR, cytosolic Ca²⁺ falls, tropomyosin re-blocks actin, and the muscle relaxes. This costs ATP, so relaxation (like contraction) is energy-dependent.',
    '**Clinical anchors:** **malignant hyperthermia** = a **RyR (RYR1) mutation** → uncontrolled SR Ca²⁺ release triggered by volatile anaesthetics/succinylcholine → hypermetabolic crisis (treated with **dantrolene**, which blocks RyR). **Rigor mortis** follows when ATP runs out and SERCA fails, leaving Ca²⁺ high and cross-bridges locked.',
  ],

  mechanism: {
    title: 'AP → T-tubule → DHPR/RyR → Ca²⁺ → troponin',
    steps: [
      { id: 's1', label: 'Muscle AP spreads down the T-tubules to the triad', emphasis: 'key' },
      { id: 's2', label: 'DHPR (voltage sensor) opens the SR RyR', emphasis: 'key' },
      { id: 's3', label: 'Ca²⁺ released from SR → binds troponin C', emphasis: 'key' },
      { id: 's4', label: 'Tropomyosin uncovers actin → cross-bridge cycling' },
      { id: 's5', label: 'SERCA pumps Ca²⁺ back → relaxation (ATP-dependent)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Ca²⁺ binding troponin C initiates contraction', mechanism: 'Moves tropomyosin off actin binding sites', significance: 'key' },
    { sign: 'DHPR (T-tubule) coupled to RyR (SR)', mechanism: 'Voltage sensor triggers SR Ca²⁺ release', significance: 'key' },
    { sign: 'SERCA lowers cytosolic Ca²⁺ for relaxation', mechanism: 'ATP-dependent Ca²⁺ re-uptake into SR', significance: 'key' },
    { sign: 'Malignant hyperthermia with volatile anaesthetics', mechanism: 'RYR1 mutation → uncontrolled SR Ca²⁺ (dantrolene)', significance: 'supportive' },
    { sign: 'T-tubules carry the AP deep into the fibre', mechanism: 'Synchronised whole-fibre activation', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Protein Ca²⁺ binds to start contraction', meaning: 'Troponin C' },
    { clue: 'SR channel releasing Ca²⁺', meaning: 'Ryanodine receptor (RyR)' },
    { clue: 'Pump causing relaxation', meaning: 'SERCA (SR Ca²⁺-ATPase)' },
    { clue: 'Gene defect causing malignant hyperthermia', meaning: 'RYR1 (ryanodine receptor)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'E-C coupling explains malignant hyperthermia (dantrolene blocks RyR), the ATP cost of relaxation, and why Ca²⁺ handling governs muscle function. It feeds directly into the cross-bridge cycle ([[muscle-contraction-crossbridge]]); the triad histology is in EHP ([[skeletal-muscle-sarcomere]]).' },
  ],

  mnemonics: [
    { hook: 'E-C coupling: "T-tubule → DHPR → RyR → Ca²⁺ → troponin C → contract"', expansion: ['SERCA pumps Ca²⁺ back → relax'] },
    { hook: 'Ca²⁺ = the switch; low Ca²⁺ = tropomyosin blocks = relaxed', expansion: ['Both contraction & relaxation need ATP'] },
  ],

  traps: [
    {
      questionCategory: 'Is relaxation passive?',
      wrongInstinct: 'Muscle relaxation is a passive process requiring no energy',
      rightAnswer: 'Relaxation is ACTIVE — SERCA uses ATP to pump Ca²⁺ back into the SR so tropomyosin can re-block actin',
      why: 'Removing cytosolic Ca²⁺ against its gradient needs ATP; both contraction and relaxation are energy-dependent.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'In skeletal muscle excitation–contraction coupling, cytosolic Ca²⁺ initiates contraction by binding to:',
      options: [
        { id: 'a', text: 'Myosin heads' },
        { id: 'b', text: 'Troponin C, moving tropomyosin off the actin binding sites' },
        { id: 'c', text: 'The dihydropyridine receptor' },
        { id: 'd', text: 'SERCA' },
      ],
      answerId: 'b',
      explanation: 'Ca²⁺ binds troponin C, which shifts the troponin–tropomyosin complex to uncover myosin-binding sites on actin, allowing cross-bridge cycling. DHPR/RyR release the Ca²⁺; SERCA removes it for relaxation.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Malignant hyperthermia triggered by volatile anaesthetics is caused by a mutation in the:',
      options: [
        { id: 'a', text: 'Nicotinic acetylcholine receptor' },
        { id: 'b', text: 'Ryanodine receptor (RYR1), causing uncontrolled SR Ca²⁺ release' },
        { id: 'c', text: 'Voltage-gated Na⁺ channel' },
        { id: 'd', text: 'Myosin ATPase' },
      ],
      answerId: 'b',
      explanation: 'A RYR1 mutation makes the SR Ca²⁺-release channel hypersensitive; anaesthetics/succinylcholine trigger massive Ca²⁺ release → sustained contraction and a hypermetabolic crisis, treated with dantrolene (a RyR blocker).',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Excitation–contraction coupling', svg: EC_COUPLING, caption: 'AP → T-tubule → DHPR opens RyR → SR Ca²⁺ release → troponin C → contraction; SERCA re-uptake → relaxation.' },
  ],
};

export default excitationContractionCoupling;
