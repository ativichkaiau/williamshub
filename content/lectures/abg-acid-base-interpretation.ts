import type { Lecture } from '../../lib/types';
import { ABG_ACIDBASE } from '../../lib/figures';

export const abgAcidBaseInterpretation: Lecture = {
  id: 'abg-acid-base-interpretation',
  title: 'Arterial Blood Gas & Acid–Base Interpretation',
  system: 'respiratory',
  source: 'L6 — Regulation of Respiration & ABG',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L6 Regulation & ABG' },
    { kind: 'mechanism', label: 'Respiratory vs metabolic' },
    { kind: 'exam', label: 'ABG steps · anion gap' },
  ],

  highYield: [
    '**Know the normals: pH 7.35–7.45, PaCO₂ 35–45 mmHg, HCO₃⁻ 22–26 mEq/L, PaO₂ 80–100 mmHg.** The **Henderson–Hasselbalch** relationship: pH depends on the ratio of **HCO₃⁻ (metabolic/renal, "base")** to **PaCO₂ (respiratory, "acid")**.',
    '**A 4-step approach.** **(1) pH:** < 7.35 = **acidosis**, > 7.45 = **alkalosis**. **(2) Cause:** if **PaCO₂ moves oppositely to pH** (↑CO₂ with ↓pH) → **respiratory**; if **HCO₃⁻ moves in the same direction as pH** (↓HCO₃⁻ with ↓pH) → **metabolic**. **(3) Compensation:** the other system shifts to pull pH back toward normal (never fully overcorrecting). **(4)** For a metabolic acidosis, check the **anion gap**.',
    '**Respiratory disorders (a ventilation problem).** **Respiratory acidosis** = ↑PaCO₂ from **hypoventilation** (COPD, opioids, neuromuscular weakness); kidneys compensate slowly by retaining HCO₃⁻. **Respiratory alkalosis** = ↓PaCO₂ from **hyperventilation** (anxiety, pain, PE, high altitude, sepsis).',
    '**Metabolic disorders.** **Metabolic acidosis** = ↓HCO₃⁻; split by the **anion gap [Na⁺ − (Cl⁻ + HCO₃⁻)]**: **high gap** = added acid (**MUDPILES/GOLDMARK** — lactate, ketoacidosis, renal failure, toxins) vs **normal gap** = HCO₃⁻ loss (**diarrhoea, renal tubular acidosis**); the lungs compensate by **hyperventilation (Kussmaul breathing)**. **Metabolic alkalosis** = ↑HCO₃⁻ (**vomiting, diuretics**); compensated by hypoventilation.',
    '**Oxygenation is read separately** from acid–base. The **A–a gradient [PAO₂ − PaO₂]** localises hypoxaemia: a **normal A–a gradient** suggests **hypoventilation or low inspired O₂**; a **raised A–a gradient** suggests **V/Q mismatch, shunt, or a diffusion defect** ([[ventilation-perfusion-matching]]).',
  ],

  mechanism: {
    title: 'pH → respiratory or metabolic → compensation → gap',
    steps: [
      { id: 's1', label: 'pH: <7.35 acidosis, >7.45 alkalosis', emphasis: 'key' },
      { id: 's2', label: 'PaCO₂ opposite to pH = respiratory; HCO₃⁻ with pH = metabolic', emphasis: 'key' },
      { id: 's3', label: 'Compensation: the other system shifts toward normal' },
      { id: 's4', label: 'Metabolic acidosis → check anion gap (high vs normal)', emphasis: 'key' },
      { id: 's5', label: 'Oxygenation separate: A–a gradient localises hypoxaemia' },
    ],
  },

  examFindings: [
    { sign: '↓pH with ↑PaCO₂', mechanism: 'Respiratory acidosis (hypoventilation)', significance: 'key' },
    { sign: '↑pH with ↓PaCO₂', mechanism: 'Respiratory alkalosis (hyperventilation)', significance: 'key' },
    { sign: '↓pH with ↓HCO₃⁻', mechanism: 'Metabolic acidosis → check anion gap', significance: 'key' },
    { sign: '↑pH with ↑HCO₃⁻', mechanism: 'Metabolic alkalosis (vomiting, diuretics)', significance: 'key' },
    { sign: 'Kussmaul (deep rapid) breathing', mechanism: 'Respiratory compensation for metabolic acidosis (e.g. DKA)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Formula for the anion gap', meaning: 'Na⁺ − (Cl⁻ + HCO₃⁻)' },
    { clue: 'ABG showing ↓pH, ↑PaCO₂', meaning: 'Respiratory acidosis' },
    { clue: 'Compensation for a metabolic acidosis', meaning: 'Hyperventilation (↓PaCO₂, Kussmaul breathing)' },
    { clue: 'Gradient localising the cause of hypoxaemia', meaning: 'A–a gradient (normal = hypoventilation; raised = V/Q/shunt/diffusion)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'ABG interpretation is a daily clinical skill — it diagnoses respiratory failure, DKA, and toxic ingestions, and guides ventilation. It integrates CO₂ carriage ([[co2-transport-blood]]), the drive to breathe ([[control-of-breathing]]), and oxygenation ([[ventilation-perfusion-matching]]).' },
  ],

  mnemonics: [
    { hook: 'Respiratory = CO₂ moves OPPOSITE to pH; Metabolic = HCO₃⁻ moves WITH pH', expansion: ['ROME: Respiratory Opposite, Metabolic Equal'] },
    { hook: 'High anion gap acidosis = "MUDPILES" (lactate, ketones, renal, toxins)', expansion: ['Normal gap = diarrhoea/RTA'] },
  ],

  traps: [
    {
      questionCategory: 'Respiratory vs metabolic on ABG',
      wrongInstinct: 'In a respiratory acidosis, the PaCO₂ and pH change in the same direction',
      rightAnswer: 'In RESPIRATORY disorders, PaCO₂ moves OPPOSITE to pH (↑CO₂ → ↓pH); in METABOLIC disorders, HCO₃⁻ moves in the SAME direction as pH ("ROME")',
      why: 'CO₂ is an acid, so more CO₂ lowers pH — an inverse relationship. Bicarbonate is a base, so it tracks pH directly.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An ABG shows pH 7.30, PaCO₂ 60 mmHg, HCO₃⁻ 26 mEq/L. This is:',
      options: [
        { id: 'a', text: 'Metabolic acidosis' },
        { id: 'b', text: 'Respiratory acidosis (uncompensated)' },
        { id: 'c', text: 'Respiratory alkalosis' },
        { id: 'd', text: 'Metabolic alkalosis' },
      ],
      answerId: 'b',
      explanation: 'Low pH (acidosis) with a high PaCO₂ (moving opposite to pH) and normal HCO₃⁻ = an uncompensated respiratory acidosis, typically from hypoventilation (e.g. COPD, opioids).',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'In a patient with a metabolic acidosis, the next step to narrow the cause is to calculate the:',
      options: [
        { id: 'a', text: 'A–a gradient' },
        { id: 'b', text: 'Anion gap [Na⁺ − (Cl⁻ + HCO₃⁻)]' },
        { id: 'c', text: 'FEV₁/FVC ratio' },
        { id: 'd', text: 'P50' },
      ],
      answerId: 'b',
      explanation: 'The anion gap separates high-gap metabolic acidosis (added acid: lactate, ketones, renal failure, toxins) from normal-gap (HCO₃⁻ loss: diarrhoea, renal tubular acidosis).',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'ABG & acid–base', svg: ABG_ACIDBASE, caption: '4-step read: pH → respiratory (CO₂ opposite) vs metabolic (HCO₃⁻ with pH) → compensation → anion gap. The four primary disorders.' },
  ],
};

export default abgAcidBaseInterpretation;
