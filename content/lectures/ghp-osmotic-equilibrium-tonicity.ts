import type { Lecture } from '../../lib/types';

export const ghpOsmoticEquilibriumTonicity: Lecture = {
  id: 'ghp-osmotic-equilibrium-tonicity',
  title: 'Osmotic Equilibrium, Tonicity & Sodium Disorders',
  system: 'renal',
  source: 'Ch 25 — The Body Fluid Compartments; Edema',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'Ch 25 Body Fluids & Edema' },
    { kind: 'mechanism', label: 'Water follows osmoles' },
    { kind: 'exam', label: 'Hypo/hypernatraemia' },
  ],

  highYield: [
    '**Water moves until osmolarity is equal everywhere — so ICF and ECF osmolarity are always the same at equilibrium (~300 mOsm/L).** Cell membranes are highly water-permeable, so any osmotic gradient is abolished within **minutes**. You can therefore never have a sustained difference in osmolarity between compartments; what differs is **composition**, not concentration.',
    '**Sodium is the ECF osmole that decides cell volume, which is why plasma Na⁺ tracks tonicity.** Because Na⁺ and its anions supply over **90%** of ECF osmolarity, plasma osmolarity is well approximated by **2 × [Na⁺] + glucose/18 + urea/2.8**. Plasma sodium therefore reports the **ratio of solute to water**, not sodium content — a point that resolves most confusing cases.',
    '**Tonicity is not the same as osmolarity: only impermeant solutes count.** **Urea** crosses cell membranes freely, so it raises measured osmolarity but is **ineffective** — it does not move water at steady state. **Glucose** is effective while insulin is lacking, and **mannitol** is effective by design. Uraemia raises osmolarity without shrinking cells; hyperglycaemia genuinely does.',
    '**Work the disorders as a 2×2 of tonicity and volume, and the treatment falls out.** **Hyponatraemia** = relative water excess → water enters cells → **cerebral oedema**, the dangerous consequence. **Hypernatraemia** = relative water deficit → cells **shrink**, with the risk of tearing bridging veins in the elderly. Ask *volume status* second: it separates dehydration from overload from SIADH.',
    '**Adding isotonic saline expands only the ECF; adding water expands everything.** Isotonic fluid has nowhere else to go — no osmotic gradient is created, so cells are unchanged. **Free water** distributes across total body water, so only about a third stays extracellular. This is the direct clinical use of the compartment arithmetic in [[ghp-body-fluid-compartments-measurement]].',
    '**Correct sodium slowly, because the brain has already adapted.** Chronic hyponatraemia lets neurons extrude idiogenic osmoles; correcting too fast shrinks them and risks **osmotic demyelination**. Correcting chronic hypernatraemia too fast causes **cerebral oedema** as water rushes back in. The rule is that the brain’s adaptation, not the number, sets the safe rate — the reasoning behind [[adh-water-regulation]] in these patients.',
  ],

  mechanism: {
    title: 'Water chases effective osmoles',
    steps: [
      { id: 's1', label: 'An effective (impermeant) osmole is added to or lost from the ECF', emphasis: 'key' },
      { id: 's2', label: 'A transient osmotic gradient appears across the cell membrane' },
      { id: 's3', label: 'Water crosses within minutes until osmolarity equalises', emphasis: 'key' },
      { id: 's4', label: 'Cell volume changes: swelling if ECF hypotonic, shrinkage if hypertonic', emphasis: 'key' },
      { id: 's5', label: 'Neurons generate or extrude idiogenic osmoles over hours to days' },
      { id: 's6', label: 'Rapid correction now moves water the wrong way → demyelination or oedema', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Confusion, headache and seizures with plasma Na⁺ 118 mmol/L', mechanism: 'Hypotonic ECF drives water into neurons causing cerebral oedema', significance: 'key' },
    { sign: 'Thirst, lethargy and doughy skin with plasma Na⁺ 165 mmol/L', mechanism: 'Hypertonic ECF shrinks cells including neurons', significance: 'key' },
    { sign: 'Raised measured osmolality with normal tonicity in uraemia', mechanism: 'Urea is osmotically active but membrane-permeant, so ineffective', significance: 'key' },
    { sign: 'Hyponatraemia in uncontrolled hyperglycaemia', mechanism: 'Glucose is an effective osmole and draws water out of cells, diluting plasma Na⁺', significance: 'key' },
    { sign: 'No change in cell volume after isotonic saline', mechanism: 'No osmotic gradient is generated, so ECF alone expands', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Measured osmolality far exceeding the calculated value', meaning: 'An osmolal gap — an unmeasured solute such as an alcohol is present' },
    { clue: 'Urine osmolality inappropriately high in hyponatraemia', meaning: 'ADH is acting when it should be suppressed, as in SIADH' },
    { clue: 'Urine sodium below 20 mmol/L in a hyponatraemic patient', meaning: 'Renal sodium avidity — hypovolaemia or an oedematous state' },
    { clue: 'Plasma sodium rising faster than 8–10 mmol/L per 24 h during correction', meaning: 'Excessive rate carrying a risk of osmotic demyelination' },
    { clue: 'Corrected sodium normal once glucose is accounted for', meaning: 'Translocational hyponatraemia rather than true water excess' },
  ],

  treatment: [
    {
      logic: 'Treat tonicity by the rate the brain can tolerate, not by the number',
      detail: 'Chronic disturbances are dangerous to correct **fast** because neurons have already adjusted their intracellular osmoles. Acute, symptomatic hyponatraemia is the exception — there the cerebral oedema itself is the threat and **prompt** partial correction is appropriate.',
    },
    {
      logic: 'Separate the water problem from the sodium problem',
      detail: 'Assess **volume status** and **urine osmolality** before choosing fluid: hypovolaemic hyponatraemia needs **salt and water**, SIADH needs **water restriction**, and oedematous states need neither — they need the underlying [[ghp-decompensated-failure-oedema]] addressed.',
    },
  ],

  mnemonics: [
    { hook: 'Urea is osmotic but not tonic', expansion: ['Crosses membranes freely', 'Raises measured osmolality', 'Moves no water at steady state'] },
    { hook: 'Low sodium swells the brain, high sodium shrinks it', expansion: ['Hyponatraemia → cerebral oedema, seizures', 'Hypernatraemia → shrinkage, torn bridging veins'] },
  ],

  traps: [
    {
      questionCategory: 'Osmolarity versus tonicity',
      wrongInstinct: 'A raised plasma osmolality always means cells are shrunken',
      rightAnswer: 'Only effective (impermeant) osmoles shift water; urea raises osmolality without changing cell volume',
      why: 'Tonicity counts only solutes the membrane excludes',
    },
    {
      questionCategory: 'What plasma sodium measures',
      wrongInstinct: 'A low plasma sodium means the body is depleted of sodium',
      rightAnswer: 'It reports the ratio of sodium to water; total body sodium may be high, normal or low',
      why: 'It is a concentration, and concentration has a denominator',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with severe uraemia has a measured plasma osmolality of 330 mOsm/kg. Why are the cells not shrunken?',
      options: [
        { id: 'a', text: 'Urea is actively pumped out of cells' },
        { id: 'b', text: 'Urea crosses cell membranes freely and is therefore an ineffective osmole' },
        { id: 'c', text: 'The measurement is spurious in renal failure' },
        { id: 'd', text: 'Cells generate idiogenic osmoles within minutes' },
      ],
      answerId: 'b',
      explanation: 'Tonicity depends only on impermeant solutes. Urea equilibrates across the membrane, so it raises measured osmolality on both sides equally and generates no sustained water shift.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'One litre of 5% dextrose is infused. Approximately how much remains in the plasma at equilibrium?',
      options: [
        { id: 'a', text: 'About 1000 mL' },
        { id: 'b', text: 'About 330 mL' },
        { id: 'c', text: 'About 80 mL' },
        { id: 'd', text: 'None — it is all excreted immediately' },
      ],
      answerId: 'c',
      explanation: 'Once the glucose is metabolised the infusion behaves as free water and distributes across total body water (42 L). Only the ECF share (1/3) stays extracellular, and only a quarter of that is plasma — roughly 80 mL.',
      tests: 'treatment',
    },
    {
      id: 'q3',
      stem: 'Why must chronic hyponatraemia be corrected slowly?',
      options: [
        { id: 'a', text: 'Rapid correction causes cerebral oedema' },
        { id: 'b', text: 'Neurons have extruded osmoles, so rapid correction shrinks them and risks osmotic demyelination' },
        { id: 'c', text: 'The kidney cannot excrete sodium quickly' },
        { id: 'd', text: 'Rapid correction precipitates hyperkalaemia' },
      ],
      answerId: 'b',
      explanation: 'Over days neurons lose idiogenic osmoles to match the hypotonic ECF. Raising plasma sodium quickly then makes the ECF relatively hypertonic, water leaves the adapted neurons, and osmotic demyelination can follow.',
      tests: 'treatment',
    },
  ],
};

export default ghpOsmoticEquilibriumTonicity;
