import type { Lecture } from '../../lib/types';

export const ghpHomeostasisInternalEnvironment: Lecture = {
  id: 'ghp-homeostasis-internal-environment',
  title: 'Homeostasis & the Internal Environment',
  system: 'physiology',
  source: 'Ch 1 — Functional Organization & Homeostasis',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'Ch 1 Functional Organization' },
    { kind: 'mechanism', label: 'ECF as internal environment' },
    { kind: 'exam', label: 'ICF vs ECF composition' },
  ],

  highYield: [
    '**Homeostasis = active maintenance of near-constant conditions in the internal environment.** The "internal environment" is the **extracellular fluid (ECF)** — no cell in the body ever touches the outside world, so ECF composition IS the condition every cell experiences.',
    '**The 60–40–20 rule.** Total body water ≈ **60% of body weight** (~42 L in a 70 kg adult). **ICF ≈ 40% BW (~28 L, two-thirds)**; **ECF ≈ 20% BW (~14 L, one-third)**. ECF splits into **interstitial fluid (~11 L, three-quarters of ECF)** and **plasma (~3 L, one-quarter)** — plasma differs from interstitium essentially only by its **protein** content, which the capillary wall retains.',
    '**ECF vs ICF composition is the exam money.** ECF: **Na⁺ ~142**, K⁺ ~4, Cl⁻ ~103, HCO₃⁻ ~24 mEq/L, ionised Ca²⁺ ~1.2 mM. ICF: **K⁺ ~140**, Na⁺ ~10–14, Cl⁻ ~4 mEq/L, high Mg²⁺, phosphate, protein/organic anion, and free Ca²⁺ only ~**10⁻⁷ M**. Rule: **Na⁺ is the outside ion, K⁺ the inside ion**, and cytosolic Ca²⁺ is held ~**10,000× lower** than outside.',
    '**Different composition, SAME osmolarity (~290 mOsm/kg).** Water crosses membranes freely, so any osmotic difference is erased in seconds. The composition gradients are held apart by the **Na⁺/K⁺-ATPase**, which consumes a large share of resting energy — they are **pumped, not passive**, and collapse when ATP fails (ischaemia → cell swelling).',
    '**Why constancy matters (and the clinical anchor).** Enzyme activity needs stable **pH ~7.4** and temperature; the **resting membrane potential is set by the ECF/ICF K⁺ ratio**; low resting Ca²⁺ is what lets a Ca²⁺ rise act as a signal. Because the ECF K⁺ pool is tiny, a small absolute shift — **K⁺ 4 → 7 mEq/L** — collapses the K⁺ gradient and causes arrhythmia and cardiac arrest. Disease is, in Guyton\'s framing, **failure of homeostasis**.',
  ],

  mechanism: {
    title: 'Cells never meet the outside world — they are bathed in the ECF',
    steps: [
      { id: 's1', label: 'Intake via GI tract and lungs enters the blood' },
      { id: 's2', label: 'Circulation delivers it to the ECF (whole volume mixed ~1×/min at rest)' },
      { id: 's3', label: 'ECF = interstitial fluid + plasma = the internal environment', emphasis: 'key' },
      { id: 's4', label: 'Na⁺/K⁺-ATPase holds ICF composition apart from ECF', emphasis: 'key' },
      { id: 's5', label: 'Kidneys and lungs excrete to defend ECF composition' },
      { id: 's6', label: 'Constancy lost → enzymes, membrane potential and signalling fail → disease', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'ECF Na⁺ ~142 mEq/L but ICF Na⁺ only ~10–14 mEq/L', mechanism: 'Na⁺/K⁺-ATPase continuously extrudes Na⁺ against its gradient', significance: 'key' },
    { sign: 'ICF K⁺ ~140 mEq/L against ECF K⁺ ~4 mEq/L', mechanism: 'The same pump imports K⁺; this ratio sets the resting membrane potential', significance: 'key' },
    { sign: 'Resting cytosolic free Ca²⁺ ~10⁻⁷ M vs ~1.2 mM ionised outside', mechanism: 'Ca²⁺-ATPases and exchangers keep it low so a rise can act as a signal', significance: 'key' },
    { sign: 'ICF and ECF are iso-osmotic at ~290 mOsm/kg despite opposite compositions', mechanism: 'Water is freely permeable; only solute species differ, not particle number', significance: 'supportive' },
    { sign: 'Plasma and interstitial fluid differ mainly in protein concentration', mechanism: 'Capillary wall is permeable to ions but retains plasma protein', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The fluid that bathes every cell — the internal environment', meaning: 'Extracellular fluid (interstitial fluid plus plasma)' },
    { clue: 'Compartment holding about two-thirds of total body water', meaning: 'ICF, roughly 28 L in a 70 kg adult (40% of body weight)' },
    { clue: 'Dominant cation outside the cell, dominant cation inside', meaning: 'Na⁺ outside (~142 mEq/L), K⁺ inside (~140 mEq/L)' },
    { clue: 'The only ECF subcompartment with a high protein concentration', meaning: 'Plasma — protein retained by the capillary wall, generating oncotic pressure' },
    { clue: 'The single pump that creates and defends both gradients', meaning: 'Na⁺/K⁺-ATPase (3 Na⁺ out, 2 K⁺ in, ATP-dependent)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Every regulated variable in the rest of physiology is an **ECF** variable — Na⁺ and water balance, K⁺, pH, glucose, Ca²⁺ — and each is defended by a loop with measurable gain: [[ghp-negative-feedback-gain]]. Composition gradients are the currency of excitable tissue, since the K⁺ ratio sets the resting potential ([[ghp-resting-membrane-potential]]) and the Na⁺ gradient powers secondary active transport ([[ghp-secondary-active-transport]]). Ties to the lecture course: [[homeostasis-feedback-control]] and [[osmolarity-tonicity-cell-volume]].' },
    { logic: 'Where it breaks', detail: 'ATP failure (ischaemia, hypoxia) stops the pump → Na⁺ and water enter → **cellular swelling**, the earliest morphological sign of reversible cell injury. Small absolute ECF K⁺ shifts are lethal because the ECF pool is tiny relative to the ICF store.' },
  ],

  mnemonics: [
    { hook: '60–40–20: total body water 60% BW, ICF 40%, ECF 20% (interstitium 15%, plasma 5%)', expansion: ['70 kg adult: 42 L total, 28 L in, 14 L out', 'Of the 14 L ECF: ~11 L interstitial, ~3 L plasma'] },
    { hook: 'Salty outside, Bananas inside — Na⁺ rules the ECF, K⁺ rules the ICF', expansion: ['ECF Na⁺ 142 / K⁺ 4', 'ICF Na⁺ ~12 / K⁺ ~140', 'Ca²⁺ sits 10,000× lower inside — that is exactly why it works as a signal'] },
  ],

  traps: [
    {
      questionCategory: 'Composition versus osmolarity',
      wrongInstinct: 'ICF and ECF must have different osmolarities because their compositions are so different',
      rightAnswer: 'They are iso-osmotic at ~290 mOsm/kg — only the SPECIES of solute differ, not the number of particles',
      why: 'Water crosses freely, so any osmotic gradient is dissipated within seconds; pumps hold composition apart, never osmolarity.',
    },
    {
      questionCategory: 'Which compartment is the internal environment',
      wrongInstinct: 'Plasma, because that is what we measure on a blood test',
      rightAnswer: 'The whole ECF — interstitial fluid is what actually touches cells; plasma is its transport arm',
      why: 'Plasma is sampled only because it equilibrates with interstitial fluid across capillaries within seconds.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Using standard approximations, estimate the intracellular fluid volume of a healthy 70 kg adult.',
      options: [
        { id: 'a', text: 'About 3 L' },
        { id: 'b', text: 'About 14 L' },
        { id: 'c', text: 'About 28 L' },
        { id: 'd', text: 'About 42 L' },
      ],
      answerId: 'c',
      explanation: 'Total body water is ~60% of 70 kg = 42 L. ICF is two-thirds of that (~40% of body weight) = ~28 L. The 14 L answer is the ECF, 3 L is plasma, and 42 L is total body water.',
      tests: 'lecture',
    },
    {
      id: 'q2',
      stem: 'A patient in acute kidney injury has a serum K⁺ of 7.0 mEq/L. Why is this modest absolute change so dangerous, when a comparable absolute change in serum Na⁺ would be trivial?',
      options: [
        { id: 'a', text: 'K⁺ is far more osmotically active than Na⁺' },
        { id: 'b', text: 'The ECF K⁺ pool is tiny relative to the ICF store, so the transmembrane K⁺ ratio — which sets the resting potential — is grossly altered' },
        { id: 'c', text: 'K⁺ directly inhibits the Na⁺/K⁺-ATPase in cardiac muscle' },
        { id: 'd', text: 'K⁺ crosses the capillary wall while Na⁺ does not' },
      ],
      answerId: 'b',
      explanation: 'Resting potential depends on the ratio of ICF to ECF K⁺. Raising ECF K⁺ from 4 to 7 mEq/L barely changes the ICF value (~140) but nearly doubles the denominator, depolarising the membrane toward arrhythmia and arrest. Osmotically, 3 mEq/L is negligible.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'The ICF is rich in K⁺, Mg²⁺, phosphate and protein while the ECF is rich in Na⁺, Cl⁻ and HCO₃⁻. What is true of their osmolarities?',
      options: [
        { id: 'a', text: 'ICF osmolarity is higher because of the trapped protein' },
        { id: 'b', text: 'ECF osmolarity is higher because Na⁺ salts dissociate into two particles' },
        { id: 'c', text: 'They are essentially equal, around 290 mOsm/kg' },
        { id: 'd', text: 'They differ by roughly 30 mOsm/kg, which drives cell volume regulation' },
      ],
      answerId: 'c',
      explanation: 'Cell membranes are freely permeable to water, so osmolarity equilibrates within seconds and both compartments sit at ~290 mOsm/kg. Composition is held apart by pumps; osmolarity cannot be. Sustained differences would produce continuous swelling or shrinkage.',
      tests: 'exam',
    },
  ],
};

export default ghpHomeostasisInternalEnvironment;
