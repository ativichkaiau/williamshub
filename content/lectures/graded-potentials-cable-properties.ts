import type { Lecture } from '../../lib/types';

export const gradedPotentialsCableProperties: Lecture = {
  id: 'graded-potentials-cable-properties',
  title: 'Graded Potentials & Cable Properties',
  system: 'physiology',
  source: 'L4 — Genesis of the Action Potential',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'L4 Action Potential' },
    { kind: 'mechanism', label: 'Electrotonic spread' },
    { kind: 'exam', label: 'Graded vs all-or-none' },
  ],

  highYield: [
    '**Neurons use TWO kinds of signal: GRADED potentials (local, variable-amplitude) and ACTION potentials (all-or-none, propagated).** Graded potentials — receptor potentials, synaptic potentials (EPSPs/IPSPs) — vary in size with the stimulus, can summate, and spread PASSIVELY (electrotonically), decaying with distance.',
    '**Graded potentials decay because current leaks out across the membrane as it spreads — this passive spread is described by CABLE PROPERTIES (the length constant and time constant).** The **length (space) constant λ** is the distance over which the potential falls to ~37% of its value; a larger λ means the signal spreads further before dying out.',
    '**A larger length constant comes from HIGH membrane resistance (less current leaks out) and LOW internal (axial) resistance (current flows more easily along the axoplasm — favoured by a LARGER diameter).** This is why big, well-insulated axons conduct better. The **time constant (τ = R × C)** sets how quickly the membrane potential changes — a smaller τ means faster signalling.',
    '**Because graded potentials decay, they cannot carry information over long distances — so the neuron converts a sufficiently large graded potential (reaching THRESHOLD at the axon hillock/trigger zone) into an ACTION potential, which regenerates itself and travels without decrement.** Graded potentials thus DECIDE whether to fire; the action potential DOES the long-distance sending.',
    '**Myelination and diameter both raise conduction velocity by improving cable properties: myelin increases membrane resistance and enables SALTATORY conduction (jumping node to node); larger diameter lowers axial resistance.** This links passive cable theory to the fast, faithful propagation of the action potential ([[action-potential-propagation-refractory]]).',
  ],

  mechanism: {
    title: 'Graded (local, decaying, summate) vs action (all-or-none); cable constants set spread/speed',
    steps: [
      { id: 's1', label: 'Graded potentials: variable amplitude, summate, spread passively (decay)', emphasis: 'key' },
      { id: 's2', label: 'Length constant λ = distance to ~37%; larger λ = spreads further', emphasis: 'key' },
      { id: 's3', label: 'Larger λ: high membrane resistance + low axial resistance (bigger diameter)', emphasis: 'key' },
      { id: 's4', label: 'Time constant τ = R×C sets speed of voltage change' },
      { id: 's5', label: 'Threshold at trigger zone → all-or-none action potential (no decrement)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'A synaptic potential that varies in size and can summate', mechanism: 'Graded potential (EPSP/IPSP)', significance: 'key' },
    { sign: 'Signal decaying with distance from its origin', mechanism: 'Passive (electrotonic) spread — cable properties', significance: 'key' },
    { sign: 'Faster conduction in larger-diameter axons', mechanism: 'Lower axial resistance (longer length constant)', significance: 'key' },
    { sign: 'Saltatory conduction between nodes of Ranvier', mechanism: 'Myelin raises membrane resistance', significance: 'supportive' },
    { sign: 'All-or-none, non-decrementing impulse', mechanism: 'Regenerating action potential (vs graded)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The signal type that is local, variable and decays', meaning: 'Graded potential' },
    { clue: 'The distance over which a graded potential falls to ~37%', meaning: 'The length (space) constant, λ' },
    { clue: 'Two factors that increase the length constant', meaning: 'High membrane resistance and low axial resistance (larger diameter)' },
    { clue: 'Where a graded potential is converted to an action potential', meaning: 'The trigger zone (axon hillock), on reaching threshold' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Cable properties explain why big, myelinated axons conduct fast and why graded synaptic inputs must summate to threshold before an [[action-potential-genesis]] fires. Summation of EPSPs/IPSPs is the graded-signal integration of [[synaptic-transmission-epsp-ipsp]]; propagation and saltatory conduction continue in [[action-potential-propagation-refractory]]. Demyelination (e.g. MS) degrades these cable properties and slows conduction.' },
  ],

  mnemonics: [
    { hook: 'Two signals: "Graded decides (local, summate), Action does (all-or-none, far)"', expansion: ['Graded = variable, decaying', 'Action = regenerating, no decrement'] },
    { hook: 'Longer length constant = "insulated + wide": high membrane R, low axial R', expansion: ['Myelin + large diameter → faster', 'λ = distance to ~37%'] },
  ],

  traps: [
    {
      questionCategory: 'Graded potentials vs action potentials',
      wrongInstinct: 'Graded potentials propagate long distances the same way action potentials do',
      rightAnswer: 'Graded potentials spread PASSIVELY and DECAY with distance (they cannot travel far); only the all-or-none ACTION potential regenerates itself to travel long distances without decrement — the graded potential\'s job is to reach threshold locally',
      why: 'Treating graded potentials as long-distance signals ignores their decremental cable behaviour; they integrate inputs to decide firing, while the action potential does the faithful long-range transmission.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which property distinguishes a graded potential from an action potential?',
      options: [
        { id: 'a', text: 'A graded potential is all-or-none' },
        { id: 'b', text: 'A graded potential varies in amplitude, can summate, and decays with distance' },
        { id: 'c', text: 'A graded potential travels without decrement' },
        { id: 'd', text: 'A graded potential has a refractory period' },
      ],
      answerId: 'b',
      explanation: 'Graded potentials (receptor and synaptic potentials) vary in size with the stimulus, can summate, and spread passively with decay. Action potentials are all-or-none and regenerate to propagate without decrement.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A longer membrane length (space) constant, allowing a signal to spread further before decaying, results from:',
      options: [
        { id: 'a', text: 'Low membrane resistance and high axial resistance' },
        { id: 'b', text: 'High membrane resistance and low axial (internal) resistance' },
        { id: 'c', text: 'A smaller axon diameter' },
        { id: 'd', text: 'Loss of myelin' },
      ],
      answerId: 'b',
      explanation: 'The length constant increases when less current leaks across the membrane (high membrane resistance) and current flows more easily along the axon (low axial resistance, favoured by larger diameter and myelination), so the signal spreads further.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default gradedPotentialsCableProperties;
