import type { Lecture } from '../../lib/types';
import { RENAL_ACID_BASE } from '../../lib/figures';

export const renalBicarbonateReabsorption: Lecture = {
  id: 'renal-bicarbonate-reabsorption',
  title: 'Renal Acid–Base I: Bicarbonate Reabsorption',
  system: 'renal',
  source: 'L12 — Renal Acid-Base Balance',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L12 Renal Acid–Base' },
    { kind: 'mechanism', label: 'HCO₃⁻ reclamation' },
    { kind: 'exam', label: 'Carbonic anhydrase' },
  ],

  highYield: [
    '**The kidney defends acid–base balance in two steps: first RECLAIM all the filtered bicarbonate, then EXCRETE the daily fixed-acid load and generate new bicarbonate.** This lecture is step one; excretion is [[renal-acid-excretion]]. Losing filtered HCO₃⁻ would itself be an acid load, so reabsorption must be near-complete before any net acid can be excreted.',
    '**~85–90% of filtered bicarbonate is reabsorbed in the proximal tubule.** The mechanism is indirect: the cell secretes **H⁺ into the lumen (mainly via the Na⁺/H⁺ exchanger, NHE3)**; that H⁺ combines with filtered HCO₃⁻ to form **H₂CO₃ → CO₂ + H₂O** (catalysed by luminal **carbonic anhydrase**). The CO₂ diffuses into the cell, is rehydrated (intracellular carbonic anhydrase) back to HCO₃⁻, and exits the basolateral side into blood. No net acid is lost — the bicarbonate is simply reclaimed.',
    '**Carbonic anhydrase is essential, which is why acetazolamide (a CA inhibitor) blocks proximal HCO₃⁻ reabsorption**, causing bicarbonate loss in the urine (alkaline urine) and a mild metabolic acidosis — the basis of its diuretic and altitude-sickness uses. The remaining ~10–15% of HCO₃⁻ is reclaimed more distally.',
    '**Reabsorption is regulated by the body\'s needs:** it increases with **acidosis, high PCO₂, angiotensin II and hypovolaemia (Na⁺ avidity)** and decreases with **alkalosis and volume expansion.** This coupling to Na⁺ handling explains "contraction alkalosis" (volume depletion raising HCO₃⁻ reabsorption) and the link between acid–base and ECF volume.',
    '**Bicarbonate reabsorption is the metabolic (slow) side of acid–base control that complements the respiratory (fast) side.** The lungs adjust PCO₂ in minutes; the kidney adjusts HCO₃⁻ over hours to days. Reabsorbing filtered HCO₃⁻ keeps the buffer base in the body; only after this is complete can the nephron move to excreting acid and making NEW bicarbonate.',
  ],

  mechanism: {
    title: 'Secrete H⁺ → convert luminal HCO₃⁻ to CO₂ → reform HCO₃⁻ in cell',
    steps: [
      { id: 's1', label: 'Step 1 of renal acid–base: reclaim ALL filtered HCO₃⁻', emphasis: 'key' },
      { id: 's2', label: 'PCT secretes H⁺ (NHE3); reabsorbs ~85–90% of HCO₃⁻', emphasis: 'key' },
      { id: 's3', label: 'Luminal carbonic anhydrase: H⁺ + HCO₃⁻ → CO₂ + H₂O', emphasis: 'key' },
      { id: 's4', label: 'CO₂ enters cell → rehydrated → HCO₃⁻ returns to blood (no net acid lost)' },
      { id: 's5', label: 'Acetazolamide blocks CA → HCO₃⁻ wasting (alkaline urine, mild acidosis)' },
    ],
  },

  examFindings: [
    { sign: '~85–90% of filtered HCO₃⁻ reabsorbed proximally', mechanism: 'H⁺ secretion (NHE3) + carbonic anhydrase', significance: 'key' },
    { sign: 'Acetazolamide causes alkaline urine + mild metabolic acidosis', mechanism: 'Carbonic anhydrase inhibition blocks HCO₃⁻ reclamation', significance: 'key' },
    { sign: 'Increased HCO₃⁻ reabsorption in acidosis and high PCO₂', mechanism: 'Adaptive metabolic compensation', significance: 'key' },
    { sign: 'Contraction alkalosis with volume depletion', mechanism: 'Na⁺/angiotensin II drive HCO₃⁻ reabsorption', significance: 'supportive' },
    { sign: 'Bicarbonate wasting in proximal (type 2) RTA', mechanism: 'Impaired proximal HCO₃⁻ reabsorption', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The nephron segment reclaiming most filtered bicarbonate', meaning: 'The proximal tubule (~85–90%)' },
    { clue: 'The enzyme required for bicarbonate reabsorption', meaning: 'Carbonic anhydrase' },
    { clue: 'The drug that blocks HCO₃⁻ reabsorption to alkalinise urine', meaning: 'Acetazolamide (carbonic anhydrase inhibitor)' },
    { clue: 'The main apical transporter secreting H⁺ in the PCT', meaning: 'The Na⁺/H⁺ exchanger (NHE3)' },
  ],

  treatment: [
    { logic: 'Why HCO₃⁻ reabsorption matters', detail: 'Reclaiming filtered bicarbonate is the prerequisite for net acid excretion ([[renal-acid-excretion]]); it is the metabolic complement to respiratory CO₂ control. It couples to Na⁺/volume handling (contraction alkalosis) via [[tubular-reabsorption-secretion]] and [[volume-water-balance-hormones]]; its failure is proximal (type 2) renal tubular acidosis, and it is the target of acetazolamide.' },
  ],

  mnemonics: [
    { hook: 'PCT "reclaims" HCO₃⁻ by secreting H⁺ (not by absorbing HCO₃⁻ directly)', expansion: ['H⁺ + filtered HCO₃⁻ → CO₂ (carbonic anhydrase)', 'CO₂ re-enters cell → HCO₃⁻ back to blood'] },
    { hook: 'Acetazolamide = "Acid-azolamide": blocks CA → lose HCO₃⁻ → mild acidosis', expansion: ['Alkaline urine', 'Uses: glaucoma, altitude sickness, diuresis'] },
  ],

  traps: [
    {
      questionCategory: 'How filtered bicarbonate is reabsorbed',
      wrongInstinct: 'Bicarbonate is reabsorbed directly across the apical membrane like glucose',
      rightAnswer: 'Filtered HCO₃⁻ is reclaimed INDIRECTLY: secreted H⁺ converts luminal HCO₃⁻ to CO₂ (via carbonic anhydrase), the CO₂ enters the cell and is reformed into HCO₃⁻ that leaves basolaterally — the apical membrane is relatively impermeable to HCO₃⁻ itself',
      why: 'The bicarbonate that enters the blood is not the same molecule that was filtered; understanding the H⁺/CO₂ shuttle explains why carbonic anhydrase inhibitors block the whole process.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Most of the filtered bicarbonate is reabsorbed in the proximal tubule by a mechanism that depends on:',
      options: [
        { id: 'a', text: 'Direct apical bicarbonate channels' },
        { id: 'b', text: 'H⁺ secretion and carbonic anhydrase converting luminal HCO₃⁻ to CO₂' },
        { id: 'c', text: 'Aldosterone-driven ENaC activity' },
        { id: 'd', text: 'Aquaporin water channels' },
      ],
      answerId: 'b',
      explanation: 'The proximal tubule secretes H⁺ (via NHE3); with luminal carbonic anhydrase, that H⁺ converts filtered HCO₃⁻ to CO₂ and water, which enter the cell and are reconverted to HCO₃⁻ that returns to the blood — reclaiming bicarbonate without net acid loss.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Acetazolamide, a carbonic anhydrase inhibitor, produces an alkaline urine and a mild metabolic acidosis because it:',
      options: [
        { id: 'a', text: 'Enhances distal H⁺ secretion' },
        { id: 'b', text: 'Blocks proximal bicarbonate reabsorption, causing bicarbonate to be lost in the urine' },
        { id: 'c', text: 'Stimulates ammonia production' },
        { id: 'd', text: 'Increases aldosterone secretion' },
      ],
      answerId: 'b',
      explanation: 'Inhibiting carbonic anhydrase prevents the proximal tubule from reclaiming filtered bicarbonate, so HCO₃⁻ is excreted (alkaline urine) and the loss of buffer base produces a mild metabolic acidosis.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Renal acid–base handling', svg: RENAL_ACID_BASE, caption: 'Step 1: proximal reclamation of filtered bicarbonate via H⁺ secretion and carbonic anhydrase (with step 2, acid excretion).' },
  ],
};

export default renalBicarbonateReabsorption;
