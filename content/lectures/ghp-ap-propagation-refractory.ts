import type { Lecture } from '../../lib/types';

export const ghpApPropagationRefractory: Lecture = {
  id: 'ghp-ap-propagation-refractory',
  title: 'Propagation, Refractory Periods & Conduction Velocity',
  system: 'physiology',
  source: 'Ch 5 — Membrane Potentials and Action Potentials',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'Ch 5 Membrane Potentials' },
    { kind: 'mechanism', label: 'Saltatory conduction' },
    { kind: 'exam', label: 'Absolute vs relative refractory' },
  ],

  highYield: [
    '**Propagation is a chain reaction, not a travelling substance.** The depolarised patch is electrically positive inside, so **local circuit current flows forward** through the axoplasm and back through the membrane, depolarising the next patch past **threshold**. The AP is **regenerated at full size at every step**, so it is **non-decremental** — amplitude at the nerve terminal equals amplitude at the axon hillock. An AP started mid-axon travels **both ways**; in life, **refractoriness behind it** enforces one-way traffic.',
    '**Myelin speeds conduction two ways: it raises membrane resistance and slashes membrane capacitance (~50-fold).** Fewer charges are wasted charging the internodal membrane, so current is funnelled longitudinally to the **nodes of Ranvier (every ~1–3 mm)**, where **voltage-gated Na⁺ channels are densely clustered**. The impulse therefore **jumps node to node — saltatory conduction**: **5–50× faster**, and it **conserves energy** (only ~1/100 of the membrane depolarises, so far less Na⁺ and K⁺ must be re-pumped).',
    '**Velocity scales with fibre diameter.** Range: **~0.25 m/s in the smallest unmyelinated C fibres up to ~100 m/s in the largest (20 µm) myelinated fibres** — the length of a football field in one second. In myelinated fibres velocity rises roughly **linearly with diameter**; in unmyelinated fibres only with the **square root** of diameter. Big and myelinated wins twice over.',
    '**Absolute refractory period = "no stimulus, however strong, can fire another AP"** — because **Na⁺ inactivation gates are shut and only reopen on repolarisation**. In large myelinated fibres it is about **0.4 ms**, which caps firing at roughly **2500 impulses/second**. **Relative refractory period** follows: **a stronger-than-normal stimulus CAN fire an AP**, because some Na⁺ channels have recovered, but the cell is fighting residual inactivation plus still-open K⁺ channels (afterhyperpolarisation) — the AP produced is smaller and slower.',
    '**Plateau potentials** stretch an AP from ~1 ms to **0.2–0.3 s** (cardiac ventricle, some smooth muscle). Two changes do it: **slow Ca²⁺–Na⁺ (L-type) channels that open late and stay open**, delivering sustained inward current, and **delayed-rectifier K⁺ channels that open slowly**. The long plateau creates a **long absolute refractory period**, which is precisely why ventricular muscle **cannot be tetanised** and must relax and refill between beats.',
    '**Safety factor** = current supplied ÷ current needed to reach threshold; normally **10–15× in a healthy fibre**, so conduction is reliable. **Anything that drops it below 1 causes conduction block** — **demyelination** (the fatigable, heat-sensitive deficits of multiple sclerosis), cooling, ischaemia, or a **membrane stabiliser. Local anaesthetics (lidocaine, procaine, tetracaine) bind voltage-gated Na⁺ channels and reduce their opening**; because binding is **use- and state-dependent** (preferring open and inactivated channels), **rapidly firing small pain fibres are blocked before large motor fibres**, and inflamed acidic tissue anaesthetises poorly. **High extracellular Ca²⁺ is the natural stabiliser**; low Ca²⁺ the natural destabiliser (tetany).',
  ],

  mechanism: {
    title: 'Local currents propagate; inactivation gates set the speed limit',
    steps: [
      { id: 's1', label: 'Active patch is positive inside → local circuit current flows to adjacent membrane' },
      { id: 's2', label: 'Adjacent membrane reaches threshold → full-size AP regenerated (non-decremental)', emphasis: 'key' },
      { id: 's3', label: 'Myelin raises resistance, cuts capacitance → current funnelled to nodes', emphasis: 'key' },
      { id: 's4', label: 'Impulse jumps node to node = saltatory conduction (5–50× faster, energy-sparing)', emphasis: 'key' },
      { id: 's5', label: 'Behind the wave, Na⁺ inactivation gates are shut = absolute refractory period', emphasis: 'key' },
      { id: 's6', label: 'One-way travel, ~2500/s ceiling; partial recovery = relative refractory period' },
    ],
  },

  examFindings: [
    { sign: 'Action potential amplitude is identical at both ends of a long axon', mechanism: 'Regenerated at full size at every point — conduction is non-decremental', significance: 'key' },
    { sign: 'No response to any stimulus during the spike and early repolarisation', mechanism: 'Absolute refractory period — Na⁺ inactivation gates closed', significance: 'key' },
    { sign: 'A stronger-than-normal stimulus fires a small, slow AP during afterhyperpolarisation', mechanism: 'Relative refractory period — partial Na⁺ recovery against open K⁺ channels', significance: 'key' },
    { sign: 'Slowed nerve conduction velocity with preserved amplitude on nerve conduction studies', mechanism: 'Demyelination — loss of saltatory conduction, safety factor falls', significance: 'key' },
    { sign: 'Ventricular muscle cannot be tetanised', mechanism: 'Plateau (slow Ca²⁺ channels) gives a refractory period nearly as long as contraction', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Current that depolarises the membrane just ahead of the impulse', meaning: 'Local circuit (eddy) current' },
    { clue: 'Node-to-node jumping that multiplies velocity 5–50 fold', meaning: 'Saltatory conduction between nodes of Ranvier, spaced every 1–3 mm' },
    { clue: 'Period during which no stimulus of any strength can excite', meaning: 'Absolute refractory period (~0.4 ms in large myelinated fibres)' },
    { clue: 'Period in which only a supra-normal stimulus succeeds', meaning: 'Relative refractory period' },
    { clue: 'Agents that raise threshold and abolish conduction', meaning: 'Membrane stabilisers — local anaesthetics, high extracellular Ca²⁺' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Conduction velocity and refractoriness are the two quantities clinical neurophysiology actually measures, and the two properties every antiarrhythmic and local anaesthetic manipulates. Demyelination slows conduction with preserved amplitude; axonal loss shrinks amplitude with preserved velocity — that is the whole logic of a nerve conduction study. The spike being propagated: [[ghp-nerve-action-potential]]. The MedCMU version of this material: [[action-potential-propagation-refractory]]. The passive cable properties that decide how far current spreads: [[graded-potentials-cable-properties]].' },
    { logic: 'Where it is examined', detail: 'Refractory periods explain why re-entry needs a unidirectional block and slow conduction, the substrate behind [[ghp-fibrillation-reentry]], and why Na⁺-channel blockers work on it: [[antiarrhythmic-drugs]]. The plateau version of this AP: [[ghp-cardiac-muscle-action-potential]].' },
  ],

  mnemonics: [
    { hook: 'SALT jumps: Saltatory = fast, efficient, needs intact myelin', expansion: ['Myelin: resistance up, capacitance down', 'Na⁺ channels crowd the nodes', 'Big and wrapped = fast; small and bare = slow'] },
    { hook: 'Absolute = ABSOLUTELY nothing works; Relative = a RELATIVELY bigger push works', expansion: ['Absolute = inactivation gates shut', 'Relative = partial recovery vs open K⁺'] },
  ],

  traps: [
    {
      questionCategory: 'Which refractory period is being described',
      wrongInstinct: 'A second stimulus failed to produce an action potential, so the fibre must be in its relative refractory period',
      rightAnswer: 'Complete failure regardless of stimulus strength defines the ABSOLUTE refractory period',
      why: 'The relative period is defined by success with a stronger stimulus; if strength cannot rescue it, inactivation gates are still fully shut.',
    },
    {
      questionCategory: 'Why cardiac muscle behaves differently',
      wrongInstinct: 'Cardiac and nerve action potentials differ mainly in amplitude',
      rightAnswer: 'They differ in DURATION — a slow Ca²⁺-driven plateau gives cardiac muscle a refractory period long enough to prevent tetany',
      why: 'A heart that could be tetanised could not fill; the plateau is a mechanical safety device, not an electrical curiosity.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which change best explains why a 20 µm myelinated fibre conducts at 100 m/s while a 1 µm unmyelinated fibre conducts at 0.5 m/s?',
      options: [
        { id: 'a', text: 'Myelin increases membrane capacitance so charge accumulates faster' },
        { id: 'b', text: 'Myelin lowers membrane capacitance and raises resistance, restricting excitation to the nodes' },
        { id: 'c', text: 'Myelinated fibres use Ca²⁺ rather than Na⁺ for the upstroke' },
        { id: 'd', text: 'Myelinated fibres have a shorter absolute refractory period, allowing continuous conduction' },
      ],
      answerId: 'b',
      explanation: 'Myelin acts as an insulator: capacitance falls roughly 50-fold and resistance rises, so longitudinal current is not wasted charging internodal membrane and instead reaches the next node. Excitation therefore leaps between nodes of Ranvier, where voltage-gated Na⁺ channels are concentrated. Capacitance falls rather than rises; the upstroke is still Na⁺-driven; and refractory period governs maximum frequency, not conduction velocity.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'During the afterhyperpolarisation phase of a nerve action potential, a stimulus twice the usual threshold strength successfully evokes a smaller, slower action potential. This fibre is in its:',
      options: [
        { id: 'a', text: 'Absolute refractory period' },
        { id: 'b', text: 'Relative refractory period' },
        { id: 'c', text: 'Plateau phase' },
        { id: 'd', text: 'Resting state with a normal safety factor' },
      ],
      answerId: 'b',
      explanation: 'Success with a supra-normal stimulus is the definition of the relative refractory period: some Na⁺ channels have recovered from inactivation, but the stimulus must overcome both the remaining inactivated channels and the still-open K⁺ channels that are holding the membrane hyperpolarised. In the absolute period no stimulus works at all. A plateau is a feature of cardiac and smooth muscle APs, and a resting fibre would respond to a normal-strength stimulus with a full-sized AP.',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'Lidocaine infiltrated around a peripheral nerve abolishes conduction. The best description of its mechanism is that it:',
      options: [
        { id: 'a', text: 'Blocks voltage-gated Na⁺ channels, raising threshold until the safety factor falls below 1' },
        { id: 'b', text: 'Blocks the Na⁺/K⁺-ATPase, collapsing the resting potential' },
        { id: 'c', text: 'Opens K⁺ channels, hyperpolarising the fibre beyond the reach of any stimulus' },
        { id: 'd', text: 'Chelates extracellular calcium, destabilising the membrane' },
      ],
      answerId: 'a',
      explanation: 'Local anaesthetics are membrane stabilisers: they bind voltage-gated Na⁺ channels (preferentially in the open and inactivated states), so fewer channels are available, the current generated falls short of what the next segment needs to reach threshold, and the safety factor drops below 1. Pump blockade acts over minutes and does not produce clean sensory block; K⁺ channel opening is not their mechanism; and chelating calcium would make the membrane more excitable, not less.',
      tests: 'treatment',
    },
  ],
};

export default ghpApPropagationRefractory;
