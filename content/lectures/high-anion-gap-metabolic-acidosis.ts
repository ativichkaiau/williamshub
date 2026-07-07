import type { Lecture } from '../../lib/types';

export const highAnionGapMetabolicAcidosis: Lecture = {
  id: 'high-anion-gap-metabolic-acidosis',
  title: 'High Anion Gap Metabolic Acidosis',
  system: 'renal',
  source: 'L18 — Blood Gas & Anion Gap',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L18 Anion Gap' },
    { kind: 'mechanism', label: 'Added acid vs HCO3 loss' },
    { kind: 'exam', label: 'GOLDMARK/MUDPILES; delta ratio' },
  ],

  highYield: [
    'Metabolic acidosis is split by the ANION GAP (AG = Na − [Cl + HCO3], normal ~8–12, corrected for albumin). A HIGH anion gap means an UNMEASURED ACID has been ADDED, consuming bicarbonate; a NORMAL (hyperchloraemic) gap means bicarbonate was LOST (from the gut or kidney) and replaced by chloride. The gap therefore separates the two mechanisms of acidosis at a glance.',
    'HIGH anion gap causes ("GOLDMARK"/"MUDPILES"): Glycols (ethylene glycol, propylene glycol), Oxoproline (chronic paracetamol), L-lactate (shock, sepsis, ischaemia — the commonest in hospital), D-lactate, Methanol, Aspirin (salicylates), Renal failure (uraemia — retained acids), Ketoacidosis (diabetic, alcoholic, starvation). Lactic acidosis and ketoacidosis dominate clinical practice; toxic alcohols (methanol/ethylene glycol) are key poisonings.',
    'NORMAL anion gap (hyperchloraemic) acidosis: GI bicarbonate loss (DIARRHOEA), RENAL TUBULAR ACIDOSIS (types 1/2/4), carbonic anhydrase inhibitors, and large-volume saline. The URINE ANION GAP helps here: a negative urine anion gap suggests GI (extrarenal) loss with appropriate renal ammonium excretion, whereas a positive urine anion gap suggests renal tubular acidosis (impaired ammonium excretion).',
    'Two refinements: the OSMOLAR GAP (measured − calculated osmolality) is raised with toxic alcohols (methanol/ethylene glycol), flagging poisoning; and the DELTA RATIO / delta-delta (Δanion gap vs Δbicarbonate) detects a MIXED disorder (a coexisting normal-gap acidosis or a metabolic alkalosis) hiding behind a high-gap acidosis. Always check for respiratory COMPENSATION (expected fall in pCO2, e.g. Winter\'s formula).',
    '**The take-home: anion gap splits acidosis — HIGH gap = added ACID (GOLDMARK/MUDPILES: lactate, ketoacids, uraemia, toxic alcohols, salicylate); NORMAL gap = bicarbonate LOSS (diarrhoea, RTA — use the urine anion gap). Check the OSMOLAR gap (toxic alcohols), the DELTA ratio (mixed disorders) and respiratory compensation.** The acid–base overview is [[acid-base-disorders]]; blood gas interpretation is [[blood-gas-anion-gap]]; potassium is [[potassium-disorders]].',
  ],

  mechanism: {
    title: 'Anion gap splits acidosis: HIGH = added acid (GOLDMARK/MUDPILES — lactate/ketones/uraemia/toxic alcohols/salicylate); NORMAL = HCO3 loss (diarrhoea/RTA, use urine anion gap); check osmolar gap + delta ratio',
    steps: [
      { id: 's1', label: 'AG = Na − (Cl + HCO3); high = added acid, normal = bicarbonate loss', emphasis: 'key' },
      { id: 's2', label: 'High-gap (GOLDMARK/MUDPILES): lactate, ketoacidosis, uraemia, methanol/ethylene glycol, salicylate', emphasis: 'key' },
      { id: 's3', label: 'Normal-gap (hyperchloraemic): diarrhoea, RTA — use urine anion gap to localise', emphasis: 'key' },
      { id: 's4', label: 'Raised osmolar gap → toxic alcohols (methanol/ethylene glycol) poisoning', emphasis: 'danger' },
      { id: 's5', label: 'Delta ratio detects mixed disorders; check respiratory compensation (Winter’s)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'High anion gap acidosis with a raised lactate in a septic/shocked patient', mechanism: 'Lactic acidosis (commonest high-gap cause)', significance: 'key' },
    { sign: 'High anion gap acidosis with ketones in a diabetic', mechanism: 'Diabetic ketoacidosis', significance: 'key' },
    { sign: 'High anion gap acidosis with a raised osmolar gap', mechanism: 'Toxic alcohol (methanol/ethylene glycol) poisoning', significance: 'key' },
    { sign: 'Normal anion gap acidosis after severe diarrhoea', mechanism: 'GI bicarbonate loss (negative urine anion gap)', significance: 'supportive' },
    { sign: 'Normal anion gap acidosis with a positive urine anion gap', mechanism: 'Renal tubular acidosis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The formula for the anion gap', meaning: 'Na − (Cl + HCO3)' },
    { clue: 'The mnemonic for high-gap causes', meaning: 'GOLDMARK (or MUDPILES)' },
    { clue: 'The gap that flags toxic-alcohol poisoning', meaning: 'The osmolar gap' },
    { clue: 'The test to separate GI loss from RTA in normal-gap acidosis', meaning: 'The urine anion gap' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The anion gap is the pivot of acid–base diagnosis: a high gap means an added acid (lactate, ketoacids, uraemia, toxic alcohols, salicylate — each with specific, sometimes urgent treatment such as antidotes/dialysis for methanol/ethylene glycol), while a normal gap means bicarbonate loss (diarrhoea vs RTA, separated by the urine anion gap). The osmolar gap flags toxic-alcohol poisoning and the delta ratio uncovers mixed disorders, while respiratory compensation is always checked. This structured approach directs the right, often time-critical, treatment. The acid–base overview is [[acid-base-disorders]]; blood-gas interpretation is [[blood-gas-anion-gap]].' },
  ],

  mnemonics: [
    { hook: 'High-gap "MUDPILES": Methanol, Uraemia, DKA, Propylene glycol, Iron/Isoniazid/Ingestions, Lactate, Ethylene glycol, Salicylates', expansion: ['Lactate = commonest in hospital', 'Or GOLDMARK'] },
    { hook: '"Osmolar gap → toxic alcohols; Delta ratio → mixed disorder"', expansion: ['Normal gap = HCO3 loss', 'Urine anion gap: neg=GI, pos=RTA'] },
  ],

  traps: [
    {
      questionCategory: 'Using the anion gap',
      wrongInstinct: 'All metabolic acidoses are basically the same and the anion gap is just a formality',
      rightAnswer: 'The ANION GAP separates two mechanistically distinct groups with different causes and treatments: a HIGH gap indicates an ADDED unmeasured ACID (lactate, ketoacids, uraemia, toxic alcohols, salicylate — some needing antidotes or dialysis), whereas a NORMAL (hyperchloraemic) gap indicates BICARBONATE LOSS (diarrhoea or renal tubular acidosis, separated by the urine anion gap) — so calculating the gap (and the osmolar/delta gaps) is essential to find the cause and give the right, sometimes urgent, treatment',
      why: 'Skipping the anion gap merges unrelated conditions (e.g. life-threatening methanol poisoning vs diarrhoeal bicarbonate loss) that demand completely different management; the gap is the key branch point in the diagnostic algorithm.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A metabolic acidosis with a HIGH anion gap indicates:',
      options: [
        { id: 'a', text: 'Loss of bicarbonate replaced by chloride' },
        { id: 'b', text: 'Addition of an unmeasured acid consuming bicarbonate' },
        { id: 'c', text: 'A pure respiratory problem' },
        { id: 'd', text: 'A metabolic alkalosis' },
      ],
      answerId: 'b',
      explanation: 'A high anion gap means an unmeasured acid has been added (e.g. lactate, ketoacids, uraemic acids, toxic-alcohol metabolites, salicylate), consuming bicarbonate; a normal (hyperchloraemic) gap instead reflects bicarbonate loss (diarrhoea, RTA) replaced by chloride.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A high anion gap metabolic acidosis accompanied by a raised osmolar gap should prompt urgent consideration of:',
      options: [
        { id: 'a', text: 'Diarrhoeal bicarbonate loss' },
        { id: 'b', text: 'Toxic alcohol (methanol or ethylene glycol) poisoning' },
        { id: 'c', text: 'A renal tubular acidosis' },
        { id: 'd', text: 'A pure respiratory alkalosis' },
      ],
      answerId: 'b',
      explanation: 'A raised osmolar gap with a high anion gap acidosis suggests ingestion of toxic alcohols (methanol, ethylene glycol), whose osmotically active parent molecules widen the osmolar gap before metabolism to acids — a time-critical poisoning needing specific antidotes (fomepizole/ethanol) and often dialysis.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default highAnionGapMetabolicAcidosis;
