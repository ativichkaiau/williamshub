import type { Lecture } from '../../lib/types';

export const ghpNerveActionPotential: Lecture = {
  id: 'ghp-nerve-action-potential',
  title: 'The Nerve Action Potential',
  system: 'physiology',
  source: 'Ch 5 — Membrane Potentials and Action Potentials',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'Ch 5 Membrane Potentials' },
    { kind: 'mechanism', label: 'Two-gate Na⁺ channel' },
    { kind: 'exam', label: 'All-or-none · threshold' },
  ],

  highYield: [
    '**An action potential is a rapid, all-or-none, self-regenerating reversal of membrane voltage** — from **−90 mV to roughly +35 mV and back within about 1 ms** in a large nerve fibre. Nothing new is added to the cell: the AP simply **releases stored ionic potential energy** through gates that open in a fixed sequence.',
    '**Threshold ≈ −65 mV** in a large nerve fibre, i.e. only about **15–30 mV of depolarisation** above rest. Below threshold, Na⁺ entry is outrun by K⁺ leak and the disturbance dies; **at threshold, Na⁺ entry outruns K⁺ efflux** and a **positive-feedback (regenerative) cycle** takes over — depolarisation opens Na⁺ channels, which depolarise further. This runaway loop is what makes the AP **all-or-none**.',
    '**The voltage-gated Na⁺ channel has TWO gates in series, and they move at different speeds — this is the whole chapter in one fact.** The **activation gate (outer)** is **closed at rest** and **snaps open within ~0.1 ms** of depolarisation past about −70 to −50 mV; the **inactivation gate (inner)** is **open at rest** and **closes slowly, a few tenths of a millisecond later**. The channel is therefore conducting only in the brief window when both are open, and **Na⁺ permeability rises up to ~5000-fold**.',
    '**The inactivation gate will not reopen until the membrane repolarises close to resting voltage.** That single rule generates the **refractory period**, the reason APs travel one way only, and the reason a **chronically depolarised cell (hyperkalaemia, depolarising blockade) is inexcitable**.',
    '**Repolarisation is a hand-over, not a reversal.** Na⁺ channels **inactivate** at almost the same instant the **voltage-gated K⁺ channel (delayed rectifier)** finishes opening — it is slow, so it arrives "late", exactly when it is useful. K⁺ pours out down its gradient, driving the voltage back to and briefly **past** rest → **afterhyperpolarisation** lasting milliseconds while the slow K⁺ gates dawdle shut.',
    '**Clinical anchor — calcium sets the threshold, not the resting potential.** Extracellular **Ca²⁺ binds the outer surface of Na⁺ channels and stabilises them**. **Hypocalcaemia** lets Na⁺ channels activate at less depolarised voltages → spontaneous firing → **tetany (Trousseau, Chvostek)**; **hypercalcaemia** raises threshold → sluggish, hypo-excitable nerve and muscle.',
  ],

  mechanism: {
    title: 'Threshold trips a positive-feedback Na⁺ cycle that its own inactivation ends',
    steps: [
      { id: 's1', label: 'Stimulus depolarises membrane from −90 mV toward threshold' },
      { id: 's2', label: 'At ≈ −65 mV Na⁺ influx exceeds K⁺ efflux → regenerative cycle', emphasis: 'key' },
      { id: 's3', label: 'Activation gates open fast → Na⁺ permeability up ~5000× → spike to ≈ +35 mV', emphasis: 'key' },
      { id: 's4', label: 'Inactivation gates close a fraction of a ms later → Na⁺ influx stops', emphasis: 'key' },
      { id: 's5', label: 'Delayed-rectifier K⁺ channels finish opening → K⁺ out → repolarisation', emphasis: 'key' },
      { id: 's6', label: 'Slow K⁺ closure overshoots → afterhyperpolarisation, then back to RMP' },
    ],
  },

  examFindings: [
    { sign: 'Upstroke to about +35 mV in under a millisecond', mechanism: 'Explosive Na⁺ influx through fast activation gates', significance: 'key' },
    { sign: 'AP amplitude identical whatever the stimulus strength', mechanism: 'All-or-none: the regenerative cycle either fires fully or not at all', significance: 'key' },
    { sign: 'Stimulus intensity encoded as firing frequency, not spike size', mechanism: 'Fixed amplitude; only the interval between APs varies', significance: 'key' },
    { sign: 'Repolarisation begins before the Na⁺ gradient is spent', mechanism: 'Na⁺ inactivation gate closes on a timer set by voltage, not by ion depletion', significance: 'key' },
    { sign: 'Carpopedal spasm and perioral tingling in a post-thyroidectomy patient', mechanism: 'Hypocalcaemia lowers the voltage at which Na⁺ channels activate → tetany', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Gate that is closed at rest and opens within 0.1 ms of depolarisation', meaning: 'Na⁺ channel activation gate (outer)' },
    { clue: 'Gate that is open at rest and closes a few tenths of a millisecond later', meaning: 'Na⁺ channel inactivation gate (inner) — the source of refractoriness' },
    { clue: 'Channel whose slow opening produces repolarisation', meaning: 'Voltage-gated K⁺ channel (delayed rectifier)' },
    { clue: 'Voltage at which the regenerative cycle becomes self-sustaining', meaning: 'Threshold, about −65 mV in a large nerve fibre' },
    { clue: 'Cation that raises threshold by stabilising Na⁺ channels', meaning: 'Extracellular Ca²⁺ (low Ca²⁺ → tetany)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Every drug, toxin and electrolyte disturbance that alters excitability acts on one of these gates: tetrodotoxin plugs the Na⁺ pore, local anaesthetics bind the inactivated state, class I antiarrhythmics exploit use-dependence, and hypocalcaemia lowers the activation voltage. The baseline the spike starts from: [[ghp-resting-membrane-potential]]. How the spike travels and why it cannot back-track: [[ghp-ap-propagation-refractory]]. The MedCMU treatment of the same material: [[action-potential-genesis]].' },
    { logic: 'Where it is examined', detail: 'The favourite discriminator is the two-gate timing. Contrast this fast spike with the Ca²⁺-driven plateau of [[ghp-cardiac-muscle-action-potential]] and [[cardiac-ion-currents-channels]], where repolarisation is deliberately delayed.' },
  ],

  mnemonics: [
    { hook: 'Two gates, two speeds: activation is FAST and normally shut, inactivation is SLOW and normally open', expansion: ['Both open = current flows (brief window)', 'Inactivation resets only after repolarisation'] },
    { hook: 'IN, OUT, OVER — Na⁺ in, K⁺ out, overshoot below rest', expansion: ['−90 → +35 → −90 → brief undershoot', 'All-or-none: amplitude fixed, intensity coded as frequency'] },
  ],

  traps: [
    {
      questionCategory: 'What stops the upstroke',
      wrongInstinct: 'The action potential peaks because intracellular Na⁺ rises until the gradient is exhausted',
      rightAnswer: 'It peaks because Na⁺ inactivation gates close on a voltage-triggered timer while K⁺ channels open',
      why: 'A single AP moves a vanishingly small fraction of the cell\'s ions — the gradient is essentially untouched; gating, not depletion, ends the spike.',
    },
    {
      questionCategory: 'Effect of extracellular calcium',
      wrongInstinct: 'Low plasma Ca²⁺ makes nerves less excitable because calcium is needed for the upstroke',
      rightAnswer: 'Low plasma Ca²⁺ makes nerves MORE excitable, causing tetany',
      why: 'Ca²⁺ binds the outside of Na⁺ channels and stabilises them; remove it and the channels activate at less depolarised voltages, so threshold falls toward rest.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'During the peak of a nerve action potential, why does the membrane potential begin to fall even though the sodium concentration gradient is still steeply inward?',
      options: [
        { id: 'a', text: 'Intracellular sodium has risen high enough to abolish the gradient' },
        { id: 'b', text: 'The Na⁺/K⁺-ATPase rapidly extrudes the sodium that entered' },
        { id: 'c', text: 'Na⁺ channel inactivation gates close while delayed-rectifier K⁺ channels open' },
        { id: 'd', text: 'Chloride influx neutralises the positive charge' },
      ],
      answerId: 'c',
      explanation: 'Repolarisation is a gating handover. The slow inner inactivation gate closes a few tenths of a millisecond after the fast activation gate opened, shutting off Na⁺ entry, while the slow voltage-gated K⁺ channel finishes opening and lets K⁺ leave. The pump is far too slow to shape a 1 ms event, the gradient is barely dented by one spike, and chloride plays no active role here.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A nerve fibre is experimentally held at a steady −55 mV. What happens when a normally supra-threshold stimulus is applied?',
      options: [
        { id: 'a', text: 'A larger-than-normal action potential, because the cell starts closer to threshold' },
        { id: 'b', text: 'A normal action potential with a shorter latency' },
        { id: 'c', text: 'No action potential, because sustained depolarisation holds Na⁺ inactivation gates closed' },
        { id: 'd', text: 'Repetitive firing at a fixed maximal frequency' },
      ],
      answerId: 'c',
      explanation: 'Inactivation gates reopen only when the membrane repolarises toward the resting potential. Clamped at −55 mV, they stay shut, so no matter how strong the stimulus there are no available Na⁺ channels to carry an upstroke. This is exactly why chronically depolarised tissue in hyperkalaemia, and muscle under depolarising neuromuscular blockade, is inexcitable. Option a also violates the all-or-none rule — amplitude never varies with stimulus strength.',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'A stimulus is doubled in strength from just above threshold to well above threshold. The recorded action potential will:',
      options: [
        { id: 'a', text: 'Double in amplitude' },
        { id: 'b', text: 'Keep the same amplitude, but the fibre may fire more frequently' },
        { id: 'c', text: 'Halve in duration' },
        { id: 'd', text: 'Reverse its direction of propagation' },
      ],
      answerId: 'b',
      explanation: 'The action potential is all-or-none: once the regenerative Na⁺ cycle is triggered, its amplitude is set by the ion gradients and channel properties, not by the stimulus. Extra intensity is encoded in the frequency of firing, limited by the refractory period. Duration and propagation direction are likewise not stimulus-graded.',
      tests: 'lecture',
    },
  ],
};

export default ghpNerveActionPotential;
