import type { Lecture } from '../../lib/types';

export const acidBaseDisorders: Lecture = {
  id: 'acid-base-disorders',
  title: 'Acid–Base Disorders',
  system: 'renal',
  source: 'L17 — Fluid, Electrolytes & Acid–Base (KUB)',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L17 Acid–Base' },
    { kind: 'mechanism', label: 'Metabolic & respiratory; compensation' },
    { kind: 'exam', label: 'Anion gap; compensation rules' },
  ],

  highYield: [
    '**pH is set by the ratio of BICARBONATE (HCO₃⁻, metabolic, renal) to CO₂ (respiratory, lungs). Four PRIMARY disorders: METABOLIC ACIDOSIS (↓HCO₃⁻), METABOLIC ALKALOSIS (↑HCO₃⁻), RESPIRATORY ACIDOSIS (↑CO₂), RESPIRATORY ALKALOSIS (↓CO₂). The body COMPENSATES (respiratory compensation is fast; renal is slow) but does NOT overcorrect — so pH still points to the primary problem.**',
    '**METABOLIC ACIDOSIS is split by the ANION GAP (Na − [Cl + HCO₃]; normal ~8–12). HIGH ANION GAP ("MUDPILES/GOLDMARK": methanol, uraemia, DKA/ketoacidosis, propylene glycol, lactate, ethylene glycol, salicylates) = added acid. NORMAL anion gap (hyperchloraemic) = HCO₃⁻ loss (DIARRHOEA) or RENAL TUBULAR ACIDOSIS. A high gap means unmeasured acid; a normal gap means bicarbonate loss.**',
    '**COMPENSATION should be predictable; a value outside the expected range signals a SECOND disorder (a MIXED picture). Metabolic acidosis → hyperventilation (WINTER\'S formula: expected pCO₂ ≈ 1.5×HCO₃ + 8 ± 2). Respiratory disorders → renal HCO₃⁻ handling (acute vs chronic differ). Always check whether compensation is appropriate and whether the anion gap and the HCO₃⁻ change are concordant (delta-delta).**',
    '**METABOLIC ALKALOSIS: from H⁺/volume loss — VOMITING (loss of gastric acid), DIURETICS, hyperaldosteronism; often "chloride/saline-RESPONSIVE" (correct with saline). RESPIRATORY ACIDOSIS = hypoventilation (COPD, sedation, neuromuscular → CO₂ retention); RESPIRATORY ALKALOSIS = hyperventilation (anxiety, pain, sepsis, salicylates, high altitude, PE). The kidney is central to metabolic compensation and to renal tubular acidosis.**',
    '**The take-home: identify the primary disorder from pH + HCO₃ + CO₂; split metabolic acidosis by the ANION GAP (high = added acid MUDPILES; normal = HCO₃ loss = diarrhoea/RTA); check compensation (Winter\'s) — inappropriate compensation = a MIXED disorder. Metabolic alkalosis (vomiting/diuretics, saline-responsive); respiratory (hypo- vs hyperventilation).** ABG interpretation is applied in [[blood-gas-anion-gap]]; electrolyte interplay in [[fluid-electrolyte-disorders]]; renal handling is HRU-1 physiology.',
  ],

  mechanism: {
    title: 'pH = HCO₃/CO₂; 4 primaries; metabolic acidosis split by anion gap (high MUDPILES / normal = HCO₃ loss); check compensation (Winter\'s) for mixed',
    steps: [
      { id: 's1', label: 'pH set by HCO₃⁻ (metabolic/renal) : CO₂ (respiratory/lungs) ratio', emphasis: 'key' },
      { id: 's2', label: '4 primaries: metabolic/respiratory × acidosis/alkalosis; compensation never overcorrects', emphasis: 'key' },
      { id: 's3', label: 'Metabolic acidosis: HIGH anion gap (MUDPILES, added acid) vs NORMAL gap (HCO₃ loss: diarrhoea/RTA)', emphasis: 'key' },
      { id: 's4', label: 'Check compensation (Winter\'s pCO₂ ≈ 1.5×HCO₃+8±2); out of range = MIXED disorder', emphasis: 'key' },
      { id: 's5', label: 'Metabolic alkalosis (vomiting/diuretics); respiratory acidosis (hypovent) vs alkalosis (hypervent)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Low pH, low HCO₃⁻ with a high anion gap in DKA', mechanism: 'High-anion-gap metabolic acidosis (ketoacids)', significance: 'key' },
    { sign: 'Low pH, low HCO₃⁻ with a normal anion gap after diarrhoea', mechanism: 'Normal-gap (hyperchloraemic) metabolic acidosis (HCO₃⁻ loss)', significance: 'key' },
    { sign: 'High pH, high HCO₃⁻ after protracted vomiting', mechanism: 'Metabolic alkalosis (gastric acid loss; saline-responsive)', significance: 'key' },
    { sign: 'High CO₂ with low pH in a drowsy COPD patient', mechanism: 'Respiratory acidosis (hypoventilation)', significance: 'key' },
    { sign: 'pCO₂ outside the Winter\'s-predicted range', mechanism: 'A mixed acid-base disorder', significance: 'key' },
  ],

  investigations: [
    { clue: 'The determinant of whether metabolic acidosis is high- or normal-gap', meaning: 'The anion gap (Na − [Cl + HCO₃])' },
    { clue: 'The mnemonic for high-anion-gap acidosis', meaning: 'MUDPILES (methanol, uraemia, DKA, propylene glycol, lactate, ethylene glycol, salicylates)' },
    { clue: 'The commonest causes of normal-gap acidosis', meaning: 'Diarrhoea and renal tubular acidosis (bicarbonate loss)' },
    { clue: 'The formula checking respiratory compensation for metabolic acidosis', meaning: 'Winter\'s formula (expected pCO₂ ≈ 1.5×HCO₃ + 8 ± 2)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'A systematic read (pH → primary disorder → anion gap → compensation) identifies the process and, crucially, uncovers MIXED disorders when compensation is inappropriate — changing diagnosis and treatment. The anion gap separates added-acid (MUDPILES: DKA, lactate, toxic alcohols, salicylates) from bicarbonate-loss (diarrhoea/RTA) acidosis, directing therapy at the cause. ABG interpretation is applied in [[blood-gas-anion-gap]]; potassium/sodium interplay is in [[fluid-electrolyte-disorders]]; toxic-alcohol antidotes link to BCP ([[antidotes-principles]]).' },
  ],

  mnemonics: [
    { hook: 'High-gap acidosis "MUDPILES": Methanol, Uraemia, DKA, Propylene glycol, Iron/Isoniazid, Lactate, Ethylene glycol, Salicylates', expansion: ['Normal gap = HCO₃ loss (diarrhoea/RTA)', 'Gap = Na−(Cl+HCO₃)'] },
    { hook: 'Winter\'s: "expected pCO₂ = 1.5×HCO₃ + 8 ± 2" (off → mixed)', expansion: ['Metabolic alkalosis = vomiting/diuretics', 'pH still shows the primary'] },
  ],

  traps: [
    {
      questionCategory: 'Recognising a mixed acid-base disorder',
      wrongInstinct: 'If the pH is near normal, the acid-base status must be normal or simply well compensated',
      rightAnswer: 'A near-normal pH can hide a MIXED disorder: physiological compensation NEVER fully normalises pH, so if the measured compensation is OUTSIDE the predicted range (e.g. Winter\'s for metabolic acidosis), a SECOND primary disorder is present — you must check that HCO₃⁻ and CO₂ move appropriately and use the anion gap/delta-delta rather than trusting the pH alone',
      why: 'Over-relying on pH misses mixed disorders (e.g. combined metabolic acidosis + respiratory alkalosis in salicylate poisoning), which have different causes and treatments — the compensation calculation is what reveals them.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient has a metabolic acidosis. Calculating the anion gap helps to:',
      options: [
        { id: 'a', text: 'Determine the respiratory rate' },
        { id: 'b', text: 'Distinguish added-acid (high-gap) from bicarbonate-loss (normal-gap) causes' },
        { id: 'c', text: 'Measure the pH directly' },
        { id: 'd', text: 'Assess renal blood flow' },
      ],
      answerId: 'b',
      explanation: 'The anion gap (Na − [Cl + HCO₃]) separates high-anion-gap metabolic acidosis (added unmeasured acid — MUDPILES: DKA, lactate, toxic alcohols, salicylates, uraemia) from normal-gap (hyperchloraemic) acidosis due to bicarbonate loss (diarrhoea, renal tubular acidosis). This directs the differential and treatment.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'In a simple metabolic acidosis, if the measured pCO₂ is much higher than predicted by Winter\'s formula, this indicates:',
      options: [
        { id: 'a', text: 'Appropriate compensation' },
        { id: 'b', text: 'A concurrent (mixed) respiratory acidosis' },
        { id: 'c', text: 'A laboratory error only' },
        { id: 'd', text: 'Metabolic alkalosis' },
      ],
      answerId: 'b',
      explanation: 'Winter\'s formula predicts the expected respiratory compensation (pCO₂ ≈ 1.5×HCO₃ + 8 ± 2). A pCO₂ higher than predicted means the lungs are not lowering CO₂ enough — a concurrent respiratory acidosis (a mixed disorder). A pCO₂ lower than predicted would indicate a concurrent respiratory alkalosis.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default acidBaseDisorders;
