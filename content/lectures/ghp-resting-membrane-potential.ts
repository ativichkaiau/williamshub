import type { Lecture } from '../../lib/types';

export const ghpRestingMembranePotential: Lecture = {
  id: 'ghp-resting-membrane-potential',
  title: 'The Resting Membrane Potential',
  system: 'physiology',
  source: 'Ch 5 — Membrane Potentials and Action Potentials',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'Ch 5 Membrane Potentials' },
    { kind: 'mechanism', label: 'Diffusion potential' },
    { kind: 'exam', label: 'Nernst vs Goldman' },
  ],

  highYield: [
    '**RMP of a large nerve fibre ≈ −90 mV** (inside negative). It is a **diffusion potential, not a pump potential** — it exists because the resting membrane is far more permeable to **K⁺ than to Na⁺** (leak channels; permeability ratio roughly **100 : 1**). Change that ratio and you change the voltage.',
    '**Nernst equation = the equilibrium potential of ONE ion** — the voltage that exactly cancels its concentration gradient so net flux stops: **EMF (mV) = ±61 × log(concentration inside ÷ concentration outside)** at 37 °C for a univalent ion, sign set by the charge. K⁺ **140 in / 4 out → E(K⁺) ≈ −94 mV**; Na⁺ **14 in / 142 out → E(Na⁺) ≈ +61 mV**.',
    '**Goldman–Hodgkin–Katz (GHK) equation = many ions at once**, each equilibrium potential **weighted by its permeability** (Na⁺, K⁺, Cl⁻). The one-line rule that answers most questions: **the membrane potential always sits nearest the equilibrium potential of whichever ion is most permeable.** At rest that ion is K⁺ → RMP hugs E(K⁺).',
    '**Assembling the −90 mV.** K⁺ diffusion alone would give ≈ **−94 mV**; a small inward **Na⁺ leak drags it up to ≈ −86 mV**; the **electrogenic Na⁺/K⁺-ATPase (3 Na⁺ out : 2 K⁺ in) adds a further ≈ −4 mV** → **−90 mV**. So the pump contributes only a few mV **directly**, but is **indispensable indirectly** because it maintains the gradients the diffusion potential is built on.',
    '**Extracellular K⁺ is the great destabiliser — RMP tracks the K⁺ ratio, not absolute numbers.** **Hyperkalaemia raises outside K⁺ → E(K⁺) less negative → the cell depolarises**: briefly **more** excitable, then **inexcitable**, because sustained depolarisation holds voltage-gated Na⁺ channels **inactivated** → peaked T waves, wide QRS, **cardiac arrest in diastole**. **Hypokalaemia hyperpolarises** → threshold harder to reach (weakness, U waves, arrhythmia).',
    '**Why extracellular Na⁺ barely moves RMP:** resting Na⁺ permeability is tiny, so halving plasma Na⁺ shifts the resting voltage almost not at all — it blunts the **action potential overshoot** instead. Contrast this with K⁺, which the resting membrane "listens to". This asymmetry is the single most tested idea in the chapter.',
  ],

  mechanism: {
    title: 'Gradients + selective permeability = the resting voltage',
    steps: [
      { id: 's1', label: 'Na⁺/K⁺-ATPase builds gradients: K⁺ high inside, Na⁺ high outside', emphasis: 'key' },
      { id: 's2', label: 'Resting membrane is K⁺-permeable (leak channels), Na⁺-impermeable', emphasis: 'key' },
      { id: 's3', label: 'K⁺ diffuses out; trapped anions left behind → inside turns negative' },
      { id: 's4', label: 'Negativity builds until it opposes further K⁺ exit = E(K⁺) ≈ −94 mV', emphasis: 'key' },
      { id: 's5', label: 'Small Na⁺ leak inward offsets it to ≈ −86 mV' },
      { id: 's6', label: 'Electrogenic pump (3 out : 2 in) adds ≈ −4 mV → RMP ≈ −90 mV', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Resting potential of a large nerve fibre measured at −90 mV', mechanism: 'Dominant K⁺ permeability places the voltage near E(K⁺)', significance: 'key' },
    { sign: 'Raising extracellular K⁺ depolarises the cell', mechanism: 'Smaller K⁺ gradient → E(K⁺) less negative → RMP rises toward zero', significance: 'key' },
    { sign: 'Sustained hyperkalaemic depolarisation makes muscle inexcitable', mechanism: 'Voltage-gated Na⁺ channels are held in the inactivated state', significance: 'key' },
    { sign: 'Lowering extracellular Na⁺ has almost no effect on RMP', mechanism: 'Resting Na⁺ permeability is very low; the AP overshoot falls instead', significance: 'key' },
    { sign: 'Hypokalaemia hyperpolarises and weakens muscle', mechanism: 'Steeper K⁺ gradient → more negative E(K⁺) → further from threshold', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Equation giving the equilibrium potential of a single ion', meaning: 'Nernst equation (±61 × log of the concentration ratio)' },
    { clue: 'Equation weighting several ions by their permeabilities', meaning: 'Goldman–Hodgkin–Katz equation' },
    { clue: 'Ion whose equilibrium potential the RMP lies closest to', meaning: 'K⁺, because resting permeability to K⁺ is highest' },
    { clue: 'Transporter that is electrogenic, 3 out for 2 in', meaning: 'Na⁺/K⁺-ATPase (adds roughly −4 mV directly)' },
    { clue: 'Plasma change that depolarises resting membranes', meaning: 'Hyperkalaemia (raised extracellular K⁺)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'RMP is the baseline every excitable event is measured from — how far a cell must travel to threshold, and whether its Na⁺ channels are available at all. Hyperkalaemia kills through this mechanism, which is why calcium gluconate (raising threshold) buys time before insulin/dextrose shifts K⁺ inward. The pump that builds the gradients: [[ghp-primary-active-transport-na-k-atpase]]. What happens once threshold is reached: [[ghp-nerve-action-potential]] and [[action-potential-genesis]]. Permeability set by channel type: [[ghp-membrane-transport-overview]].' },
    { logic: 'Where it is examined', detail: 'Almost every question is really one of two: which ion dominates permeability, or what a change in extracellular K⁺ does. The same logic sets the pacemaker baseline in [[cardiac-action-potential]].' },
  ],

  mnemonics: [
    { hook: 'The membrane sits where the OPEN doors are — at rest the open doors are K⁺', expansion: ['Most permeable ion wins (Goldman)', 'Nernst = one ion: 61 × log(in ÷ out)', 'K⁺ −94, Na⁺ +61, RMP −90'] },
    { hook: 'High K⁺ = Klose to zero (depolarise); low K⁺ = further away (hyperpolarise)', expansion: ['Hyperkalaemia: excitable then inexcitable', 'Arrest in diastole'] },
  ],

  traps: [
    {
      questionCategory: 'What actually generates the resting potential',
      wrongInstinct: 'The Na⁺/K⁺ pump generates the −90 mV directly by pumping charge out',
      rightAnswer: 'K⁺ diffusion through leak channels generates almost all of it; the pump contributes only about −4 mV directly',
      why: 'The pump is electrogenic but slow — its real job is maintaining the gradients that make the K⁺ diffusion potential possible.',
    },
    {
      questionCategory: 'Which extracellular ion change matters',
      wrongInstinct: 'Halving plasma Na⁺ should halve the resting membrane potential',
      rightAnswer: 'Resting potential barely moves; it is the action potential overshoot that shrinks',
      why: 'Resting Na⁺ permeability is about 1/100 of K⁺ permeability, so Na⁺ is nearly invisible to the GHK weighting at rest.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A neuron has intracellular K⁺ 140 mM and extracellular K⁺ 4 mM. Its measured resting potential is −90 mV, while the calculated potassium equilibrium potential is −94 mV. Which single factor best explains the 4 mV gap?',
      options: [
        { id: 'a', text: 'A small inward Na⁺ leak partially offset by the electrogenic Na⁺/K⁺-ATPase' },
        { id: 'b', text: 'Chloride is actively pumped into the cell' },
        { id: 'c', text: 'The Nernst equation is invalid below −80 mV' },
        { id: 'd', text: 'Voltage-gated K⁺ channels are partly open at rest' },
      ],
      answerId: 'a',
      explanation: 'Real membranes are not perfectly K⁺-selective. A resting Na⁺ leak drags the potential from −94 toward −86 mV, and the electrogenic pump (3 Na⁺ out : 2 K⁺ in) pushes it back down by about 4 mV, landing at −90 mV. Chloride is passively distributed in most nerve fibres; the Nernst equation holds at all voltages; voltage-gated K⁺ channels are closed at rest — the resting K⁺ conductance is through leak channels.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient in renal failure has a serum potassium of 7.8 mmol/L. Compared with normal, the resting membrane potential of his cardiac and skeletal muscle will be:',
      options: [
        { id: 'a', text: 'More negative, and the cells more excitable' },
        { id: 'b', text: 'Less negative, and the cells eventually inexcitable' },
        { id: 'c', text: 'Unchanged, because the pump compensates fully' },
        { id: 'd', text: 'Less negative, and the cells permanently more excitable' },
      ],
      answerId: 'b',
      explanation: 'Raising extracellular K⁺ shrinks the K⁺ gradient, making E(K⁺) less negative and depolarising the resting potential. The cell first sits closer to threshold (transiently more excitable), but sustained depolarisation holds voltage-gated Na⁺ inactivation gates shut, so the cell becomes inexcitable — the route to a wide QRS and arrest in diastole. Option d misses the inactivation phase; the pump cannot correct a plasma-wide rise.',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'Which statement best distinguishes the Nernst equation from the Goldman–Hodgkin–Katz equation?',
      options: [
        { id: 'a', text: 'Nernst applies to anions only; Goldman applies to cations only' },
        { id: 'b', text: 'Nernst gives the equilibrium potential of one ion; Goldman combines several ions weighted by permeability' },
        { id: 'c', text: 'Nernst requires active transport; Goldman assumes passive transport only' },
        { id: 'd', text: 'Nernst applies at 37 °C; Goldman only at room temperature' },
      ],
      answerId: 'b',
      explanation: 'Nernst answers "what voltage would stop net movement of THIS ion?" for a single species. Goldman answers "what voltage does the membrane actually sit at?" given several permeant ions, weighting each by permeability — which is why the resting potential lies near E(K⁺) at rest and swings toward E(Na⁺) during an action potential.',
      tests: 'lecture',
    },
  ],
};

export default ghpRestingMembranePotential;
