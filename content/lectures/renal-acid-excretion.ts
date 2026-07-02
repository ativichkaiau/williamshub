import type { Lecture } from '../../lib/types';
import { RENAL_ACID_BASE } from '../../lib/figures';

export const renalAcidExcretion: Lecture = {
  id: 'renal-acid-excretion',
  title: 'Renal Acid–Base II: Acid Excretion & New Bicarbonate',
  system: 'renal',
  source: 'L12 — Renal Acid-Base Balance',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L12 Renal Acid–Base' },
    { kind: 'mechanism', label: 'Titratable acid + NH₄⁺' },
    { kind: 'disease', label: 'Renal tubular acidosis' },
  ],

  highYield: [
    '**After reclaiming filtered bicarbonate ([[renal-bicarbonate-reabsorption]]), the kidney must excrete the ~50–100 mmol of fixed (non-volatile) acid produced daily from metabolism — and every H⁺ excreted generates one NEW bicarbonate.** Because free H⁺ would make the urine impossibly acidic, secreted H⁺ must be carried out on **urinary buffers**: titratable acid and ammonium.',
    '**Titratable acid = H⁺ buffered mostly by phosphate.** Secreted H⁺ combines with filtered **HPO₄²⁻ → H₂PO₄⁻**, which is excreted. This handles a fixed, limited amount of acid (set by the amount of filtered phosphate — ~85% of titratable acid) and cannot be greatly upregulated.',
    '**Ammonium (NH₄⁺) is the ADJUSTABLE, quantitatively dominant buffer.** The proximal tubule makes ammonia from **glutamine (ammoniagenesis)**; NH₃/NH₄⁺ is secreted, trapped in the lumen and excreted as NH₄⁺. Crucially, **ammoniagenesis is upregulated in chronic acidosis** (over days), so the kidney can hugely increase acid excretion — NH₄⁺ accounts for ~60% of net acid excretion and rises further when needed.',
    '**Distal H⁺ secretion is the fine-tuning step:** **α-intercalated cells of the collecting duct** secrete H⁺ via an apical **H⁺-ATPase (and H⁺/K⁺-ATPase)**, generating new HCO₃⁻ returned to blood. **Aldosterone stimulates H⁺ secretion** here (alongside Na⁺/K⁺ handling), which is why mineralocorticoid states affect acid–base and potassium together. Net acid excretion = **(titratable acid + NH₄⁺) − urinary HCO₃⁻**.',
    '**Renal tubular acidosis (RTA) = failure of these mechanisms, giving a normal-anion-gap metabolic acidosis:** **type 1 (distal)** — α-intercalated cells cannot secrete H⁺ (inappropriately high urine pH, hypokalaemia, stones); **type 2 (proximal)** — impaired HCO₃⁻ reabsorption; **type 4** — hypoaldosteronism (hyperkalaemia, reduced ammoniagenesis). The kidney is the SLOW (days) but complete compensator, complementing the fast lungs that blow off CO₂.',
  ],

  mechanism: {
    title: 'Buffer secreted H⁺ (phosphate + NH₄⁺) → make NEW bicarbonate',
    steps: [
      { id: 's1', label: 'Excrete ~50–100 mmol/day fixed acid; each H⁺ → 1 new HCO₃⁻', emphasis: 'key' },
      { id: 's2', label: 'Titratable acid: H⁺ buffered by phosphate (HPO₄²⁻ → H₂PO₄⁻)', emphasis: 'key' },
      { id: 's3', label: 'NH₄⁺: glutamine → ammoniagenesis; ADJUSTABLE, upregulated in acidosis', emphasis: 'key' },
      { id: 's4', label: 'α-intercalated cells secrete H⁺ (H⁺-ATPase); aldosterone stimulates' },
      { id: 's5', label: 'Net acid excretion = (TA + NH₄⁺) − urinary HCO₃⁻; failure = RTA', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Ammonium is the main adjustable urinary buffer', mechanism: 'Glutamine ammoniagenesis upregulated in chronic acidosis', significance: 'key' },
    { sign: 'Titratable acid is mostly phosphate-buffered H⁺', mechanism: 'Fixed capacity (~85% phosphate)', significance: 'key' },
    { sign: 'Normal-anion-gap metabolic acidosis with RTA', mechanism: 'Defective H⁺ secretion or HCO₃⁻ reabsorption', significance: 'key' },
    { sign: 'Inappropriately alkaline urine in distal (type 1) RTA', mechanism: 'α-intercalated cells cannot secrete H⁺', significance: 'supportive' },
    { sign: 'Hyperkalaemic acidosis in type 4 RTA', mechanism: 'Hypoaldosteronism reduces H⁺/K⁺ handling and ammoniagenesis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The adjustable urinary buffer that dominates net acid excretion', meaning: 'Ammonium (NH₄⁺), made from glutamine' },
    { clue: 'The buffer responsible for titratable acid', meaning: 'Phosphate (HPO₄²⁻ → H₂PO₄⁻)' },
    { clue: 'The collecting-duct cell that secretes H⁺', meaning: 'The α-intercalated cell (H⁺-ATPase)' },
    { clue: 'The RTA with inappropriately alkaline urine and stones', meaning: 'Type 1 (distal) RTA' },
  ],

  treatment: [
    { logic: 'Why acid excretion matters', detail: 'This completes acid–base defence begun in [[renal-bicarbonate-reabsorption]] and is the slow, complete complement to the lungs\' fast CO₂ control (overlaps the respiratory/ABG teaching in HRS-1). Ammoniagenesis links to renal glutamine metabolism ([[renal-metabolism-gluconeogenesis]]); aldosterone couples H⁺ to K⁺ handling ([[renal-potassium-handling]]); failure produces the RTAs.' },
  ],

  mnemonics: [
    { hook: 'Two buffers: "Phosphate = fixed (titratable acid); Ammonium = flexible (the workhorse)"', expansion: ['NH₄⁺ ~60% of net acid, upregulated in acidosis', 'Titratable acid ~85% phosphate, limited'] },
    { hook: 'RTA: "1 = distal (can\'t secrete H⁺), 2 = proximal (can\'t keep HCO₃⁻), 4 = aldo-low (hyperK⁺)"', expansion: ['All: normal-anion-gap metabolic acidosis', 'Type 1: alkaline urine, stones, hypokalaemia'] },
  ],

  traps: [
    {
      questionCategory: 'Which buffer lets the kidney ramp up acid excretion',
      wrongInstinct: 'The kidney increases acid excretion mainly by making the urine more acidic (free H⁺) or by more titratable acid',
      rightAnswer: 'Free H⁺ is negligible and titratable acid (phosphate) is fixed; the kidney meets a large or chronic acid load by increasing AMMONIUM (NH₄⁺) excretion via upregulated glutamine ammoniagenesis',
      why: 'Urine pH can only fall to ~4.5, so free H⁺ carries almost no acid; phosphate buffering is capped by filtered phosphate. Only ammoniagenesis is adjustable, so it is the mechanism that adapts to chronic acidosis.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The urinary buffer that can be greatly increased to raise net acid excretion during chronic metabolic acidosis is:',
      options: [
        { id: 'a', text: 'Free hydrogen ions' },
        { id: 'b', text: 'Phosphate (titratable acid)' },
        { id: 'c', text: 'Ammonium (NH₄⁺) from glutamine' },
        { id: 'd', text: 'Bicarbonate' },
      ],
      answerId: 'c',
      explanation: 'Free H⁺ and phosphate-based titratable acid are limited/fixed; ammoniagenesis from glutamine is upregulated over days in acidosis, making ammonium the adjustable, quantitatively dominant route for excreting acid and generating new bicarbonate.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient has a normal-anion-gap metabolic acidosis with an inappropriately alkaline urine, hypokalaemia and recurrent kidney stones. This is most consistent with:',
      options: [
        { id: 'a', text: 'Type 1 (distal) renal tubular acidosis' },
        { id: 'b', text: 'Type 2 (proximal) renal tubular acidosis' },
        { id: 'c', text: 'Respiratory acidosis' },
        { id: 'd', text: 'Diabetic ketoacidosis' },
      ],
      answerId: 'a',
      explanation: 'Distal (type 1) RTA reflects failure of α-intercalated cells to secrete H⁺, so the urine cannot be acidified (inappropriately high pH); it is classically associated with hypokalaemia and calcium phosphate stones.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Renal acid–base handling', svg: RENAL_ACID_BASE, caption: 'Step 2: excreting acid on phosphate (titratable acid) and ammonium buffers, generating new bicarbonate; the RTAs.' },
  ],
};

export default renalAcidExcretion;
