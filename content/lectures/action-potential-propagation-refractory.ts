import type { Lecture } from '../../lib/types';

export const actionPotentialPropagationRefractory: Lecture = {
  id: 'action-potential-propagation-refractory',
  title: 'AP Propagation & Refractory Periods',
  system: 'physiology',
  source: 'L4 — Genesis of the Action Potential',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'L4 Action Potential' },
    { kind: 'mechanism', label: 'Conduction · refractoriness' },
    { kind: 'exam', label: 'Saltatory · absolute vs relative' },
  ],

  highYield: [
    '**Propagation:** an AP at one point depolarises the adjacent membrane to threshold, regenerating a full AP there, and so on down the axon — a **self-propagating, non-decremental wave** (the AP does not weaken as it travels).',
    '**Conduction velocity rises with (1) larger axon diameter** (less resistance) **and (2) myelination.** In **myelinated axons**, the AP "jumps" between the **nodes of Ranvier** (where voltage-gated Na⁺ channels cluster) — **saltatory conduction** — which is much faster and more energy-efficient than continuous conduction in unmyelinated axons.',
    '**The absolute refractory period:** during and just after the AP, **voltage-gated Na⁺ channels are inactivated** → **no second AP can be fired, no matter how strong the stimulus**. This sets the **maximum firing frequency** and ensures each AP is a discrete event.',
    '**The relative refractory period follows:** Na⁺ channels have recovered but the membrane is **hyperpolarised (K⁺ still open)**, so a **stronger-than-normal stimulus** is needed to reach threshold.',
    '**Refractoriness makes the AP travel ONE WAY:** the region just behind the impulse is refractory, so the AP cannot go backward — it propagates only forward (orthodromically) toward the synapse. Demyelination (MS, GBS) slows/blocks conduction.',
  ],

  mechanism: {
    title: 'Regenerate forward; refractory sets direction & rate',
    steps: [
      { id: 's1', label: 'AP depolarises adjacent membrane to threshold → regenerates', emphasis: 'key' },
      { id: 's2', label: 'Faster with ↑diameter and myelination', emphasis: 'key' },
      { id: 's3', label: 'Saltatory: AP jumps node-to-node (myelinated)', emphasis: 'key' },
      { id: 's4', label: 'Absolute refractory: Na⁺ inactivated → no 2nd AP', emphasis: 'key' },
      { id: 's5', label: 'Relative refractory: hyperpolarised → needs stronger stimulus' },
    ],
  },

  examFindings: [
    { sign: 'AP amplitude constant along the axon', mechanism: 'Regenerative (non-decremental) propagation', significance: 'key' },
    { sign: 'Impulse jumping node-to-node in a myelinated fibre', mechanism: 'Saltatory conduction (fast, efficient)', significance: 'key' },
    { sign: 'No AP can be evoked during the peak, any stimulus', mechanism: 'Absolute refractory period (Na⁺ inactivated)', significance: 'key' },
    { sign: 'Larger stimulus needed just after an AP', mechanism: 'Relative refractory period (hyperpolarised)', significance: 'supportive' },
    { sign: 'Slowed conduction after demyelination', mechanism: 'Loss of saltatory conduction (MS/GBS)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Why the AP cannot travel backward', meaning: 'The membrane behind it is refractory (Na⁺ inactivated)' },
    { clue: 'Two factors increasing conduction velocity', meaning: 'Larger axon diameter + myelination' },
    { clue: 'Period when no AP is possible at any stimulus', meaning: 'Absolute refractory period' },
    { clue: 'Structure where Na⁺ channels cluster in myelinated axons', meaning: 'Node of Ranvier' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Refractoriness limits maximum firing rate and, in the heart, prevents tetany/re-entry; demyelination (MS, Guillain-Barré) slows conduction. Nerve conduction studies use these principles. AP generation itself: [[action-potential-genesis]].' },
  ],

  mnemonics: [
    { hook: 'Saltatory = "salta" (jump) node-to-node; faster with bigger + myelinated axons', expansion: ['Non-decremental'] },
    { hook: 'Absolute = "Absolutely no AP" (Na⁺ inactivated); Relative = "needs a Real strong stimulus"', expansion: ['Sets max frequency + one-way travel'] },
  ],

  traps: [
    {
      questionCategory: 'Why does the AP travel one way?',
      wrongInstinct: 'The action potential can propagate in both directions along an axon',
      rightAnswer: 'It travels ONE way because the membrane just behind it is refractory (Na⁺ channels inactivated), so it can only depolarise the forward, non-refractory region',
      why: 'Refractoriness enforces unidirectional (orthodromic) propagation toward the synapse.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'During the absolute refractory period, a second action potential cannot be generated because:',
      options: [
        { id: 'a', text: 'The membrane is hyperpolarised' },
        { id: 'b', text: 'Voltage-gated Na⁺ channels are inactivated' },
        { id: 'c', text: 'K⁺ channels are closed' },
        { id: 'd', text: 'The Na⁺/K⁺-ATPase is inhibited' },
      ],
      answerId: 'b',
      explanation: 'In the absolute refractory period the Na⁺ channels are inactivated and cannot reopen until the membrane repolarises, so no stimulus—however strong—can trigger another AP. This limits maximum firing frequency and enforces one-way conduction.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Saltatory conduction in myelinated axons is faster because the action potential:',
      options: [
        { id: 'a', text: 'Decreases in amplitude as it travels' },
        { id: 'b', text: 'Jumps between nodes of Ranvier where Na⁺ channels are concentrated' },
        { id: 'c', text: 'Travels in both directions' },
        { id: 'd', text: 'Uses the Na⁺/K⁺-ATPase to move' },
      ],
      answerId: 'b',
      explanation: 'Myelin insulates the internodes, so the AP regenerates only at the nodes of Ranvier and effectively "jumps" between them (saltatory conduction), which is faster and more energy-efficient.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default actionPotentialPropagationRefractory;
