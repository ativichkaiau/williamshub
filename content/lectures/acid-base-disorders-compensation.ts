import type { Lecture } from '../../lib/types';
import { ACID_BASE_DISORDERS } from '../../lib/figures';

export const acidBaseDisordersCompensation: Lecture = {
  id: 'acid-base-disorders-compensation',
  title: 'Acid–Base Disorders & Compensation',
  system: 'renal',
  source: 'L12 — Renal Acid-Base Balance',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L12 Renal Acid–Base' },
    { kind: 'mechanism', label: 'Compensation' },
    { kind: 'exam', label: 'Anion gap' },
  ],

  highYield: [
    '**Blood pH (~7.35–7.45) is defended by the bicarbonate buffer system, summarised by pH ∝ HCO₃⁻ / PCO₂.** There are four PRIMARY disorders, named by whether the primary change is metabolic (HCO₃⁻) or respiratory (PCO₂) and whether it lowers (acidosis) or raises (alkalosis) the pH.',
    '**Metabolic acidosis = primary ↓HCO₃⁻; metabolic alkalosis = primary ↑HCO₃⁻; respiratory acidosis = primary ↑PCO₂ (hypoventilation); respiratory alkalosis = primary ↓PCO₂ (hyperventilation).** The body COMPENSATES in the OTHER system: the LUNGS adjust PCO₂ fast (minutes), the KIDNEYS adjust HCO₃⁻/H⁺ slowly but completely (hours–days) — the renal side is [[renal-bicarbonate-reabsorption]] and [[renal-acid-excretion]].',
    '**Compensation moves PCO₂ or HCO₃⁻ in the SAME direction as the primary abnormality to pull the pH back toward normal — but it NEVER fully corrects the pH.** If the pH is normal or over-corrected, or if compensation is inappropriate (e.g. by Winter\'s formula), a **MIXED disorder** is present. This is the logic of ABG interpretation.',
    '**Metabolic acidosis is subdivided by the ANION GAP = Na⁺ − (Cl⁻ + HCO₃⁻) (normal 8–12).** A **HIGH anion gap ("MUDPILES": Methanol, Uraemia, DKA, Propylene glycol, Iron/INH, Lactic acidosis, Ethylene glycol, Salicylates)** means added acid; a **NORMAL (hyperchloraemic) gap** means bicarbonate loss (diarrhoea, renal tubular acidosis — [[renal-acid-excretion]]).',
    '**Approach an ABG stepwise: (1) is it acidaemic or alkalaemic? (2) is the primary process metabolic or respiratory? (3) is compensation appropriate? (4) if metabolic acidosis, what is the anion gap?** This ties the renal acid-handling of L12 to whole-body acid–base physiology and to clinical problem-solving.',
  ],

  mechanism: {
    title: 'Four disorders (metabolic/respiratory × acidosis/alkalosis); compensation + anion gap',
    steps: [
      { id: 's1', label: 'pH ∝ HCO₃⁻/PCO₂; metabolic = HCO₃⁻, respiratory = PCO₂', emphasis: 'key' },
      { id: 's2', label: 'Compensation: lungs fast (PCO₂), kidneys slow/complete (HCO₃⁻)', emphasis: 'key' },
      { id: 's3', label: 'Compensation never fully normalises pH; normal pH → mixed disorder', emphasis: 'key' },
      { id: 's4', label: 'Metabolic acidosis: high gap (MUDPILES) vs normal gap (diarrhoea, RTA)', emphasis: 'key' },
      { id: 's5', label: 'ABG steps: acidaemia? metabolic/respiratory? compensation? anion gap?' },
    ],
  },

  examFindings: [
    { sign: 'Low pH + low HCO₃⁻ with compensatory low PCO₂', mechanism: 'Metabolic acidosis (respiratory compensation)', significance: 'key' },
    { sign: 'High anion gap metabolic acidosis', mechanism: 'Added acid (MUDPILES — DKA, lactate, toxins, uraemia)', significance: 'key' },
    { sign: 'Normal anion gap (hyperchloraemic) acidosis', mechanism: 'Bicarbonate loss (diarrhoea) or renal tubular acidosis', significance: 'key' },
    { sign: 'Low pH + high PCO₂ with slowly rising HCO₃⁻', mechanism: 'Respiratory acidosis with renal compensation', significance: 'supportive' },
    { sign: 'Normal pH with abnormal PCO₂ and HCO₃⁻', mechanism: 'A mixed acid–base disorder', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The formula for the anion gap', meaning: 'Na⁺ − (Cl⁻ + HCO₃⁻), normal 8–12' },
    { clue: 'The mnemonic for high-anion-gap metabolic acidosis', meaning: 'MUDPILES' },
    { clue: 'The fast vs slow compensators', meaning: 'Lungs (PCO₂, minutes) vs kidneys (HCO₃⁻, hours–days)' },
    { clue: 'What a fully normal pH with abnormal gases implies', meaning: 'A mixed acid–base disorder' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'This organises the renal acid handling of [[renal-bicarbonate-reabsorption]] and [[renal-acid-excretion]] (the metabolic/HCO₃⁻ side) with the respiratory PCO₂ side (overlaps HRS-1 ABG). The anion gap and compensation rules are core clinical ABG skills; normal-gap acidosis includes the renal tubular acidoses, and uraemic/high-gap acidosis is a feature of [[chronic-kidney-disease-uremia]] and [[acute-kidney-injury-azotemia]].' },
  ],

  mnemonics: [
    { hook: 'High-gap acidosis "MUDPILES": Methanol, Uraemia, DKA, Propylene glycol, Iron/INH, Lactate, Ethylene glycol, Salicylates', expansion: ['Normal gap = diarrhoea + RTA', 'Gap = Na − (Cl + HCO₃)'] },
    { hook: 'Compensation "same direction, never complete"; normal pH = mixed', expansion: ['Lungs fast (CO₂), kidneys slow (HCO₃)', 'Check with Winter\'s formula'] },
  ],

  traps: [
    {
      questionCategory: 'Interpreting a normal pH on an ABG',
      wrongInstinct: 'A normal blood pH means there is no acid–base disorder',
      rightAnswer: 'Compensation NEVER fully normalises the pH, so a truly NORMAL pH with abnormal PCO₂ and HCO₃⁻ indicates a MIXED acid–base disorder (two primary processes), not the absence of one',
      why: 'Because compensatory mechanisms only pull the pH toward normal, a normal or over-corrected pH is itself a clue to a second, opposing disorder — missing this misreads a mixed picture as normal.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with diabetic ketoacidosis has a low pH, low bicarbonate and an anion gap of 24. This is a:',
      options: [
        { id: 'a', text: 'Normal anion gap metabolic acidosis' },
        { id: 'b', text: 'High anion gap metabolic acidosis' },
        { id: 'c', text: 'Respiratory acidosis' },
        { id: 'd', text: 'Metabolic alkalosis' },
      ],
      answerId: 'b',
      explanation: 'DKA adds ketoacids, consuming bicarbonate and raising the anion gap (>12) — a high anion gap metabolic acidosis (one of the MUDPILES causes). A normal-gap acidosis instead reflects bicarbonate loss or renal tubular acidosis.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which statement about acid–base compensation is correct?',
      options: [
        { id: 'a', text: 'Compensation fully returns the pH to normal' },
        { id: 'b', text: 'Compensation moves the secondary variable in the same direction as the primary change but does not fully normalise the pH' },
        { id: 'c', text: 'The kidneys compensate within minutes' },
        { id: 'd', text: 'A normal pH always excludes an acid–base disorder' },
      ],
      answerId: 'b',
      explanation: 'Compensation shifts PCO₂ or HCO₃⁻ in the same direction as the primary abnormality to bring the pH toward normal, but never fully corrects it; a fully normal pH with abnormal gases suggests a mixed disorder. Renal compensation takes hours to days.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'The four acid–base disorders', svg: ACID_BASE_DISORDERS, caption: 'Metabolic vs respiratory acidosis/alkalosis, compensation rules, and the anion-gap subdivision of metabolic acidosis.' },
  ],
};

export default acidBaseDisordersCompensation;
