import type { Lecture } from '../../lib/types';

export const ghpCalciumPhosphateVolumeIntegration: Lecture = {
  id: 'ghp-calcium-phosphate-volume-integration',
  title: 'Calcium, Phosphate & Integrated Volume Control',
  system: 'renal',
  source: 'Ch 29 — Renal Regulation of K⁺, Ca²⁺, Phosphate & Mg²⁺; Volume Control',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'Ch 29 K⁺, Ca²⁺, Phosphate & Volume' },
    { kind: 'mechanism', label: 'PTH and vitamin D' },
    { kind: 'exam', label: 'Renal bone disease' },
  ],

  highYield: [
    '**Only about half of plasma calcium is free and physiologically active, and pH shifts that fraction.** Roughly **50% is ionised**, **40% protein-bound** (mostly albumin) and **10% complexed**. **Alkalosis** increases binding to albumin and lowers ionised calcium — which is why hyperventilation produces perioral tingling and carpopedal spasm with a completely normal total calcium.',
    '**PTH raises calcium and lowers phosphate, and it does both from the kidney.** It increases **distal calcium reabsorption**, **inhibits proximal phosphate reabsorption** (so phosphate is wasted), and stimulates **1α-hydroxylase** to make active **1,25-dihydroxyvitamin D**. That active vitamin D then raises absorption of **both** calcium and phosphate from the gut. Bone resorption supplies the rapid component.',
    '**Calcium reabsorption is split between a paracellular bulk route and a regulated distal route.** About **65%** is reclaimed proximally, paracellularly, following sodium and water. Another **25–30%** crosses the thick ascending limb driven by the **lumen-positive** potential. Only the **distal ~10%** is transcellular and **PTH-regulated** — but that fraction is what fine-tunes plasma calcium, and it is the site thiazides act on.',
    '**Diuretics move calcium in opposite directions, which is directly clinically useful.** **Loop** agents abolish the lumen-positive potential and so **waste** calcium — useful in hypercalcaemia when combined with saline. **Thiazides** enhance distal reabsorption and **retain** calcium — useful in recurrent calcium stones, and a recognised cause of hypercalcaemia, as noted in [[ghp-loop-distal-collecting-transport]].',
    '**Renal bone disease follows a fixed causal chain, and phosphate starts it.** Falling GFR retains **phosphate**; phosphate binds calcium and lowers ionised calcium; the diseased kidney also makes less **1,25-vitamin D**, reducing gut absorption. Both drive **secondary hyperparathyroidism**, and sustained PTH produces the bone disease of [[chronic-kidney-disease]]. Treatment therefore attacks phosphate first.',
    '**Volume control integrates all of this, and sodium is the variable that matters.** Because sodium determines ECF volume and pressure natriuresis has near-infinite gain, sodium **excretion** must equal intake at steady state. Volume signals — sympathetic tone, angiotensin II, aldosterone, natriuretic peptides — adjust tubular reabsorption until that balance is met, which is the argument developed in [[ghp-regulation-tubular-reabsorption]].',
  ],

  mechanism: {
    title: 'Hormones tune the last 10%',
    steps: [
      { id: 's1', label: 'Ionised calcium falls; parathyroid calcium-sensing receptors detect it', emphasis: 'key' },
      { id: 's2', label: 'PTH released → distal tubular calcium reabsorption increases', emphasis: 'key' },
      { id: 's3', label: 'PTH inhibits proximal phosphate reabsorption → phosphaturia' },
      { id: 's4', label: 'PTH stimulates renal 1α-hydroxylase → active vitamin D' },
      { id: 's5', label: 'Active vitamin D raises gut absorption of calcium and phosphate', emphasis: 'key' },
      { id: 's6', label: 'Bone resorption supplies the rapid calcium component' },
    ],
  },

  examFindings: [
    { sign: 'Perioral tingling and carpopedal spasm during hyperventilation', mechanism: 'Alkalosis increases calcium binding to albumin, lowering the ionised fraction', significance: 'key' },
    { sign: 'Low calcium with high phosphate and high PTH in renal failure', mechanism: 'Phosphate retention and reduced vitamin D activation driving secondary hyperparathyroidism', significance: 'key' },
    { sign: 'High calcium with low phosphate and high PTH', mechanism: 'Primary hyperparathyroidism — PTH wastes phosphate while retaining calcium', significance: 'key' },
    { sign: 'Hypercalcaemia discovered on a thiazide', mechanism: 'Enhanced distal calcium reabsorption', significance: 'supportive' },
    { sign: 'Normal total calcium with symptomatic hypocalcaemia', mechanism: 'The ionised fraction is reduced despite a normal total', significance: 'key' },
  ],

  investigations: [
    { clue: 'Raised PTH with low calcium and high phosphate', meaning: 'Secondary hyperparathyroidism of renal disease' },
    { clue: 'Raised PTH with high calcium and low phosphate', meaning: 'Primary hyperparathyroidism' },
    { clue: 'Low urine calcium on a thiazide', meaning: 'Enhanced distal reabsorption — therapeutic in calcium stone disease' },
    { clue: 'High urine calcium on a loop diuretic', meaning: 'Loss of the lumen-positive driving force in the thick ascending limb' },
    { clue: 'Corrected calcium normal once albumin is accounted for', meaning: 'Pseudohypocalcaemia from hypoalbuminaemia' },
  ],

  treatment: [
    {
      logic: 'Attack phosphate first in renal bone disease',
      detail: 'Phosphate retention initiates the whole sequence, so **dietary restriction and binders** address the driver, while active **vitamin D** replaces what the failing kidney cannot make. Giving vitamin D without controlling phosphate risks raising the calcium-phosphate product and driving vascular calcification.',
    },
    {
      logic: 'Pick the diuretic by which way you want calcium to move',
      detail: 'Hypercalcaemia is treated with saline **plus a loop agent** to promote calciuresis. Recurrent calcium stones are treated with a **thiazide**, which does the opposite. Using the wrong one actively worsens the problem.',
    },
  ],

  mnemonics: [
    { hook: 'PTH: calcium up, phosphate down', expansion: ['Distal Ca²⁺ reabsorption ↑', 'Proximal phosphate reabsorption ↓', '1α-hydroxylase ↑ → active vitamin D'] },
    { hook: 'Alkalosis binds calcium', expansion: ['Albumin binds more Ca²⁺ when alkalotic', 'Ionised fraction falls', 'Tetany with a normal total calcium'] },
  ],

  traps: [
    {
      questionCategory: 'Interpreting a total calcium',
      wrongInstinct: 'A normal total calcium excludes symptomatic hypocalcaemia',
      rightAnswer: 'Only the ionised fraction is active, and alkalosis or albumin changes shift it',
      why: 'Tetany during hyperventilation occurs with a completely normal total calcium',
    },
    {
      questionCategory: 'PTH and phosphate',
      wrongInstinct: 'PTH raises both calcium and phosphate because it resorbs bone',
      rightAnswer: 'It raises calcium but wastes phosphate by inhibiting proximal reabsorption',
      why: 'The renal phosphaturic effect outweighs the phosphate released from bone',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An anxious patient hyperventilates and develops perioral tingling and carpopedal spasm. Total plasma calcium is normal. Why?',
      options: [
        { id: 'a', text: 'Respiratory alkalosis increases calcium binding to albumin, lowering the ionised fraction' },
        { id: 'b', text: 'Hyperventilation causes rapid renal calcium loss' },
        { id: 'c', text: 'PTH secretion is suppressed by low CO₂' },
        { id: 'd', text: 'Calcium shifts into bone under the influence of vitamin D' },
      ],
      answerId: 'a',
      explanation: 'Only the ionised half of plasma calcium is physiologically active. Alkalosis increases albumin binding, so ionised calcium falls and neuromuscular excitability rises while the total measurement stays normal.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient with advanced chronic kidney disease has low calcium, high phosphate and markedly raised PTH. Which initiates this sequence?',
      options: [
        { id: 'a', text: 'Excessive dietary calcium' },
        { id: 'b', text: 'Phosphate retention plus reduced renal activation of vitamin D' },
        { id: 'c', text: 'A parathyroid adenoma' },
        { id: 'd', text: 'Increased urinary calcium loss from thiazide use' },
      ],
      answerId: 'b',
      explanation: 'The failing kidney retains phosphate, which complexes calcium and lowers the ionised fraction, and makes less 1,25-dihydroxyvitamin D so gut absorption falls. Both stimulate PTH — secondary hyperparathyroidism, which is why phosphate control comes first.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'Which diuretic is appropriate as part of the management of significant hypercalcaemia, and why?',
      options: [
        { id: 'a', text: 'A thiazide, because it increases distal calcium reabsorption' },
        { id: 'b', text: 'A loop diuretic, because it abolishes the lumen-positive potential driving calcium reabsorption' },
        { id: 'c', text: 'A potassium-sparing agent, because it blocks ENaC' },
        { id: 'd', text: 'Acetazolamide, because it alkalinises the urine' },
      ],
      answerId: 'b',
      explanation: 'Loop diuretics block NKCC2, removing the lumen-positive potential that drives paracellular calcium reabsorption in the thick ascending limb, so calcium is excreted. Thiazides do the opposite and would worsen hypercalcaemia.',
      tests: 'treatment',
    },
  ],
};

export default ghpCalciumPhosphateVolumeIntegration;
