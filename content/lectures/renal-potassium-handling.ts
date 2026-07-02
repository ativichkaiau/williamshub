import type { Lecture } from '../../lib/types';
import { POTASSIUM_HANDLING } from '../../lib/figures';

export const renalPotassiumHandling: Lecture = {
  id: 'renal-potassium-handling',
  title: 'Renal Handling of Potassium',
  system: 'renal',
  source: 'L7 — Renal Handling of Electrolytes',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L7 Electrolytes' },
    { kind: 'mechanism', label: 'Distal K⁺ secretion' },
    { kind: 'treatment', label: 'Diuretics & K⁺' },
  ],

  highYield: [
    '**Potassium is freely filtered, then ~90% is reabsorbed in the PCT and thick ascending limb before the distal nephron — but the KEY regulated step is SECRETION by principal cells of the late DCT/collecting duct.** How much K⁺ you excrete is decided distally, not by how much is filtered. This is why the kidney can excrete a K⁺ load despite reabsorbing most of the filtered amount.',
    '**Principal-cell K⁺ secretion is driven by aldosterone and by luminal Na⁺/flow.** The basolateral Na⁺/K⁺-ATPase loads K⁺ into the cell; apical **ENaC** lets Na⁺ in (making the lumen electronegative), and K⁺ then exits into the lumen through apical K⁺ channels (ROMK). **Aldosterone** upregulates ENaC and the pump → more Na⁺ reabsorption AND more K⁺ secretion.',
    '**K⁺ secretion is increased by: high plasma K⁺, aldosterone, high distal tubular flow and Na⁺ delivery, and alkalosis.** Conversely, low aldosterone, low distal flow and acidosis reduce it. This explains predictable drug and acid–base effects on serum K⁺.',
    '**Diuretic logic follows directly:** **loop and thiazide diuretics** increase distal flow and Na⁺ delivery → **K⁺ wasting (hypokalaemia)**. **K⁺-sparing agents** block distal K⁺ loss: **spironolactone/eplerenone** antagonise aldosterone; **amiloride/triamterene** block ENaC. Combining a K⁺-sparer with an ACE inhibitor risks hyperkalaemia.',
    '**Acid–base and K⁺ move together across cell membranes:** **acidosis tends to raise serum K⁺** (H⁺ enters cells, K⁺ exits — transcellular shift) and **alkalosis lowers it**. Insulin and β₂-agonists drive K⁺ INTO cells (used to treat hyperkalaemia). The large transmembrane K⁺ gradient set by the Na⁺/K⁺-ATPase is what makes serum K⁺ so tightly defended (it sets the resting membrane potential).',
  ],

  mechanism: {
    title: 'Filter → reabsorb early → SECRETE distally (aldosterone/flow)',
    steps: [
      { id: 's1', label: 'Freely filtered; ~65% PCT + ~25% thick ascending limb reabsorbed', emphasis: 'key' },
      { id: 's2', label: 'Regulated step: principal-cell SECRETION (late DCT/collecting duct)', emphasis: 'key' },
      { id: 's3', label: 'Aldosterone → ↑ENaC → lumen-negative → K⁺ exits via ROMK', emphasis: 'key' },
      { id: 's4', label: '↑ by high K⁺, aldosterone, distal flow/Na⁺, alkalosis' },
      { id: 's5', label: 'Diuretics ↑distal flow → K⁺ wasting; K⁺-sparers block ENaC/aldosterone' },
    ],
  },

  examFindings: [
    { sign: 'Hypokalaemia on a loop or thiazide diuretic', mechanism: '↑distal flow/Na⁺ delivery → ↑K⁺ secretion', significance: 'key' },
    { sign: 'Hyperkalaemia with spironolactone or ACE-I', mechanism: 'Reduced aldosterone effect → less K⁺ secretion', significance: 'key' },
    { sign: 'Hyperkalaemia in acidosis', mechanism: 'Transcellular shift (H⁺ in, K⁺ out)', significance: 'key' },
    { sign: 'Hypokalaemia in primary hyperaldosteronism (Conn)', mechanism: 'Excess aldosterone → K⁺ wasting', significance: 'supportive' },
    { sign: 'Fall in serum K⁺ with insulin or β₂-agonists', mechanism: 'K⁺ driven into cells (treatment of hyperkalaemia)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The nephron segment that sets K⁺ excretion', meaning: 'Principal cells of the late DCT/collecting duct (secretion)' },
    { clue: 'The hormone that raises distal K⁺ secretion', meaning: 'Aldosterone (via ENaC/Na⁺/K⁺-ATPase)' },
    { clue: 'Why loop/thiazide diuretics cause hypokalaemia', meaning: 'Increased distal flow and Na⁺ delivery drive K⁺ secretion' },
    { clue: 'The acid–base state that raises serum K⁺', meaning: 'Acidosis (transcellular H⁺/K⁺ exchange)' },
  ],

  treatment: [
    { logic: 'Why K⁺ handling matters', detail: 'Dys-kalaemias are life-threatening (arrhythmia) and drug-driven — the whole diuretic and RAAS-blocker balance turns on distal secretion. Aldosterone couples Na⁺ retention to K⁺ loss ([[volume-water-balance-hormones]]); the Na⁺/K⁺-ATPase powering it is central to [[tubular-reabsorption-secretion]]; acid–base shifts link to [[renal-acid-excretion]]. Other electrolytes: [[renal-calcium-phosphate-handling]].' },
  ],

  mnemonics: [
    { hook: 'Distal K⁺ secretion rises with "Aldosterone, Alkalosis, Abundant flow, high K⁺"', expansion: ['Aldosterone → ENaC', 'Alkalosis → more secretion', 'High distal flow/Na⁺ delivery', 'High plasma K⁺'] },
    { hook: 'K⁺-sparers: "Spiro blocks aldosterone; Amiloride blocks ENaC"', expansion: ['Spironolactone/eplerenone = aldosterone antagonists', 'Amiloride/triamterene = ENaC blockers'] },
  ],

  traps: [
    {
      questionCategory: 'What determines potassium excretion',
      wrongInstinct: 'Potassium excretion is set by how much is filtered and reabsorbed',
      rightAnswer: 'Because ~90% of filtered K⁺ is reabsorbed regardless, urinary K⁺ is determined mainly by SECRETION in the distal nephron (principal cells) under the control of aldosterone, distal flow and plasma K⁺',
      why: 'Filtration and early reabsorption are relatively fixed; the body varies excretion by dialling distal secretion up or down — which is why aldosterone and diuretics (not GFR) dominate K⁺ balance.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The amount of potassium excreted in the urine is regulated mainly by:',
      options: [
        { id: 'a', text: 'The filtered load at the glomerulus' },
        { id: 'b', text: 'Reabsorption in the proximal tubule' },
        { id: 'c', text: 'Secretion by principal cells of the distal nephron' },
        { id: 'd', text: 'Reabsorption in the loop of Henle' },
      ],
      answerId: 'c',
      explanation: 'Most filtered K⁺ is reabsorbed early and fairly constantly; the regulated variable is distal secretion by collecting-duct principal cells, tuned by aldosterone, distal flow/Na⁺ delivery and plasma K⁺.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient on a thiazide diuretic develops hypokalaemia. The mechanism is that increased distal delivery of sodium and fluid:',
      options: [
        { id: 'a', text: 'Reduces aldosterone secretion' },
        { id: 'b', text: 'Enhances potassium secretion by principal cells' },
        { id: 'c', text: 'Blocks the Na⁺/K⁺-ATPase' },
        { id: 'd', text: 'Decreases glomerular filtration' },
      ],
      answerId: 'b',
      explanation: 'By delivering more Na⁺ and flow to the collecting duct, thiazides (and loop diuretics) increase Na⁺ reabsorption through ENaC, making the lumen more electronegative and driving K⁺ secretion — hence hypokalaemia.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Renal potassium handling', svg: POTASSIUM_HANDLING, caption: 'Filtration and early reabsorption vs the regulated distal secretion by principal cells (aldosterone, flow, plasma K⁺).' },
  ],
};

export default renalPotassiumHandling;
