import type { Lecture } from '../../lib/types';
import { ION_CHANNEL_GATING } from '../../lib/figures';

export const ionChannelsStructureGating: Lecture = {
  id: 'ion-channels-structure-gating',
  title: 'Ion Channels: Structure & Gating',
  system: 'physiology',
  source: 'L4 — Genesis of the Action Potential',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'L4 Action Potential' },
    { kind: 'mechanism', label: 'Channel gating' },
    { kind: 'exam', label: 'Refractory period' },
  ],

  highYield: [
    '**Ion channels are membrane proteins that let specific ions cross down their electrochemical gradient; they are SELECTIVE (a selectivity filter) and GATED (they open and close in response to a stimulus).** The type of gate defines the family: **voltage-gated, ligand-gated, mechanically-gated, and leak (always-open) channels.**',
    '**The voltage-gated Na⁺ channel has TWO gates and THREE states — the key to the action potential.** At rest the **activation gate is shut** (channel closed but "ready"). Depolarisation opens the fast **activation gate → Na⁺ rushes in (ACTIVATED/open)**. A slower **inactivation gate then swings shut (INACTIVATED)** even though the membrane is still depolarised.',
    '**Recovery to the resting state requires REPOLARISATION** — only then does the inactivation gate reopen and the activation gate re-close. This resetting is why the channel cannot immediately re-fire, producing the **absolute refractory period** (see [[action-potential-propagation-refractory]]) that ensures one-way propagation and limits maximum firing rate.',
    '**Voltage-gated K⁺ channels have a single, slower gate that opens with depolarisation (delayed)** to repolarise the membrane; their lag creates the after-hyperpolarisation. **Ligand-gated channels (e.g. nicotinic ACh receptor) open when a chemical binds** and mediate fast synaptic transmission, while **leak channels set the resting potential** ([[resting-membrane-potential-nernst]]).',
    '**Channel behaviour is the molecular basis of excitability and of many drugs/diseases: local anaesthetics and class I antiarrhythmics block Na⁺ channels; channelopathies (e.g. some epilepsies, long-QT, periodic paralyses) are inherited channel defects.** Selectivity + gating together explain how a membrane generates precise electrical signals.',
  ],

  mechanism: {
    title: 'Selective + gated channels; Na⁺ channel two gates/three states → refractoriness',
    steps: [
      { id: 's1', label: 'Channels are ion-SELECTIVE and GATED (voltage/ligand/mechanical/leak)', emphasis: 'key' },
      { id: 's2', label: 'Na⁺ channel: resting (activation shut) → activated (open) → inactivated', emphasis: 'key' },
      { id: 's3', label: 'Inactivation gate shuts during depolarisation → refractory period', emphasis: 'key' },
      { id: 's4', label: 'Reset needs REPOLARISATION (recover from inactivation)', emphasis: 'key' },
      { id: 's5', label: 'K⁺ channel: one slow gate → repolarisation; leak channels set RMP' },
    ],
  },

  examFindings: [
    { sign: 'Absolute refractory period during the action potential', mechanism: 'Na⁺ channels inactivated (cannot reopen until repolarised)', significance: 'key' },
    { sign: 'One-way (unidirectional) impulse propagation', mechanism: 'Refractoriness behind the impulse', significance: 'key' },
    { sign: 'Delayed repolarisation after the Na⁺ spike', mechanism: 'Slower voltage-gated K⁺ channel opening', significance: 'supportive' },
    { sign: 'Local anaesthetic abolishing nerve conduction', mechanism: 'Na⁺ channel blockade', significance: 'supportive' },
    { sign: 'Inherited epilepsy/long-QT/periodic paralysis', mechanism: 'Channelopathy (ion-channel gene defect)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The two properties defining an ion channel', meaning: 'Selectivity and gating' },
    { clue: 'The three states of the voltage-gated Na⁺ channel', meaning: 'Resting, activated (open), inactivated' },
    { clue: 'What the inactivation gate produces', meaning: 'The absolute refractory period' },
    { clue: 'The channel type opened by a bound chemical', meaning: 'Ligand-gated channel (e.g. nicotinic ACh receptor)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Channel gating is the machinery behind [[action-potential-genesis]] and its refractory period ([[action-potential-propagation-refractory]]); leak channels set the resting potential ([[resting-membrane-potential-nernst]]). Ligand-gated channels drive fast synaptic transmission ([[synaptic-transmission-epsp-ipsp]]) and the neuromuscular junction ([[neuromuscular-junction-transmission]]). Channel blockers (anaesthetics, antiarrhythmics) and channelopathies flow directly from this biology.' },
  ],

  mnemonics: [
    { hook: 'Na⁺ channel "two gates, three states": Resting → Activated → Inactivated', expansion: ['Activation gate = fast (opens on depolarisation)', 'Inactivation gate = slower (shuts) → refractory'] },
    { hook: 'Reset needs repolarisation ("recover from inactivation")', expansion: ['Absolute refractory = all channels inactivated', 'K⁺ channel = one slow gate'] },
  ],

  traps: [
    {
      questionCategory: 'Why a neuron is refractory',
      wrongInstinct: 'A neuron cannot re-fire immediately because the membrane potential is too high',
      rightAnswer: 'The absolute refractory period exists because the voltage-gated Na⁺ channels are INACTIVATED (their inactivation gate is shut) and cannot reopen until the membrane REPOLARISES — it is a channel-state phenomenon, not simply a voltage level',
      why: 'Refractoriness reflects the physical state of the sodium channels (inactivated, needing repolarisation to reset), which is what enforces one-way propagation and caps firing frequency.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'During the absolute refractory period, a second action potential cannot be generated because the voltage-gated sodium channels are:',
      options: [
        { id: 'a', text: 'In the resting (closed but ready) state' },
        { id: 'b', text: 'Inactivated and unable to reopen until the membrane repolarises' },
        { id: 'c', text: 'Permanently destroyed' },
        { id: 'd', text: 'Fully open' },
      ],
      answerId: 'b',
      explanation: 'After opening, the sodium channel\'s inactivation gate closes; these inactivated channels cannot reopen until repolarisation resets them, producing the absolute refractory period that ensures unidirectional propagation.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'The two defining properties that allow ion channels to generate precise electrical signals are:',
      options: [
        { id: 'a', text: 'Selectivity and gating' },
        { id: 'b', text: 'Size and colour' },
        { id: 'c', text: 'ATP hydrolysis and phosphorylation' },
        { id: 'd', text: 'Endocytosis and exocytosis' },
      ],
      answerId: 'a',
      explanation: 'Ion channels are selective (a selectivity filter admits specific ions) and gated (they open/close in response to voltage, ligands or mechanical force); together these properties let membranes produce controlled ion movements.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Voltage-gated Na⁺ channel gating', svg: ION_CHANNEL_GATING, caption: 'Resting → activated → inactivated states, the two gates, and the refractory period they produce.' },
  ],
};

export default ionChannelsStructureGating;
