import type { Lecture } from '../../lib/types';

export const ckdMineralBoneDisorder: Lecture = {
  id: 'ckd-mineral-bone-disorder',
  title: 'CKD-Mineral & Bone Disorder & Anaemia',
  system: 'renal',
  source: 'L11 — Acute Kidney Injury & CKD',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L11 CKD-MBD' },
    { kind: 'mechanism', label: 'Phosphate–PTH–vitamin D axis' },
    { kind: 'exam', label: 'Low Ca, high PO4, high PTH; EPO anaemia' },
  ],

  highYield: [
    '**As GFR falls in CKD, the kidney fails two endocrine jobs. First, it cannot excrete PHOSPHATE (→ hyperphosphataemia) or make active vitamin D (1-α-hydroxylation of calcidiol to CALCITRIOL fails → low calcitriol → less gut calcium absorption → HYPOCALCAEMIA). Rising phosphate and FGF23 plus low calcitriol and low calcium all stimulate the parathyroids → SECONDARY HYPERPARATHYROIDISM (high PTH). This is CKD-Mineral and Bone Disorder (CKD-MBD).**',
    '**The classic biochemistry of CKD-MBD is therefore LOW calcium, HIGH phosphate, LOW calcitriol and HIGH PTH. Persistently high PTH drives renal OSTEODYSTROPHY (high-turnover osteitis fibrosa cystica), and metastatic/vascular CALCIFICATION (raised calcium × phosphate product) accelerates cardiovascular disease. Long-standing autonomous glands can become TERTIARY hyperparathyroidism (hypercalcaemia).**',
    '**CKD also causes ANAEMIA — the failing kidney makes too little ERYTHROPOIETIN (a normocytic, normochromic anaemia), compounded by iron deficiency, uraemic marrow suppression and shortened red-cell survival. Other CKD complications: metabolic ACIDOSIS (reduced acid excretion), HYPERKALAEMIA, fluid overload/hypertension, and uraemic symptoms (pericarditis, encephalopathy, bleeding from platelet dysfunction).**',
    '**MANAGEMENT of CKD-MBD: dietary PHOSPHATE restriction and phosphate BINDERS (taken with meals), active vitamin D (calcitriol/alfacalcidol), calcimimetics (cinacalcet) for hyperparathyroidism, and parathyroidectomy if refractory. ANAEMIA: correct iron stores first, then erythropoiesis-stimulating agents (ESAs) to a target (not normal) haemoglobin. Treat acidosis (bicarbonate) and hyperkalaemia.**',
    '**The take-home: CKD-MBD — failing kidney → HIGH phosphate + LOW calcitriol → LOW calcium → SECONDARY hyperparathyroidism (HIGH PTH) → renal osteodystrophy + vascular calcification. Treat with phosphate binders, active vitamin D, calcimimetics. CKD anaemia = low EPO (normocytic) → iron then ESAs. Also acidosis/hyperkalaemia.** The CKD overview is [[chronic-kidney-disease]]; renal replacement is [[renal-replacement-therapy]]; AKI is [[aki-prerenal-intrinsic-postrenal]].',
  ],

  mechanism: {
    title: 'CKD → high phosphate + low calcitriol → low calcium → secondary hyperparathyroidism (high PTH) → osteodystrophy/calcification; low EPO → normocytic anaemia; acidosis/hyperkalaemia',
    steps: [
      { id: 's1', label: '↓GFR → phosphate retention + failed 1-α-hydroxylation (low calcitriol)', emphasis: 'key' },
      { id: 's2', label: 'Low calcitriol → ↓gut calcium absorption → hypocalcaemia', emphasis: 'key' },
      { id: 's3', label: 'High phosphate/FGF23 + low Ca/calcitriol → high PTH (secondary hyperparathyroidism)', emphasis: 'key' },
      { id: 's4', label: 'High PTH → renal osteodystrophy; high Ca×PO4 → vascular calcification', emphasis: 'danger' },
      { id: 's5', label: 'Low erythropoietin → normocytic anaemia (± iron deficiency)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Low calcium, high phosphate, high PTH in CKD', mechanism: 'Secondary hyperparathyroidism (CKD-MBD)', significance: 'key' },
    { sign: 'Bone pain and osteitis fibrosa cystica in a dialysis patient', mechanism: 'High-turnover renal osteodystrophy', significance: 'key' },
    { sign: 'Normocytic, normochromic anaemia in CKD', mechanism: 'Reduced erythropoietin production', significance: 'key' },
    { sign: 'Vascular/soft-tissue calcification with a high calcium × phosphate product', mechanism: 'Metastatic calcification (CKD-MBD)', significance: 'supportive' },
    { sign: 'Hypercalcaemia after years of secondary hyperparathyroidism', mechanism: 'Tertiary hyperparathyroidism (autonomous glands)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The calcium/phosphate/PTH pattern of CKD-MBD', meaning: 'Low Ca, high phosphate, high PTH' },
    { clue: 'The vitamin D step the kidney fails', meaning: '1-α-hydroxylation to calcitriol' },
    { clue: 'The cause of CKD anaemia', meaning: 'Reduced erythropoietin' },
    { clue: 'The first step before ESAs in CKD anaemia', meaning: 'Correct iron deficiency' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'CKD-MBD and anaemia are core, treatable CKD complications. Understanding the phosphate–calcitriol–calcium–PTH axis explains the biochemistry (high phosphate, low calcium, high PTH) and its treatment: phosphate restriction/binders, active vitamin D and calcimimetics, and parathyroidectomy if refractory — to prevent renal osteodystrophy and cardiovascular calcification. CKD anaemia (low EPO) is managed by replenishing iron first, then ESAs to a target haemoglobin. Acidosis and hyperkalaemia are also managed. The CKD overview is [[chronic-kidney-disease]]; renal replacement is [[renal-replacement-therapy]].' },
  ],

  mnemonics: [
    { hook: 'CKD-MBD: "PO4 UP, Calcitriol DOWN, Ca DOWN, PTH UP"', expansion: ['Binders + active vitamin D + cinacalcet', 'Tertiary = autonomous → high Ca'] },
    { hook: '"CKD anaemia = no EPO (normocytic) → iron first, then ESA"', expansion: ['Target, not normal, Hb', 'Also acidosis + hyperkalaemia'] },
  ],

  traps: [
    {
      questionCategory: 'Calcium in CKD vs primary hyperparathyroidism',
      wrongInstinct: 'A high PTH always means high calcium, as in primary hyperparathyroidism',
      rightAnswer: 'In SECONDARY hyperparathyroidism of CKD, PTH is high but calcium is LOW or normal — the high PTH is a RESPONSE to hyperphosphataemia, low calcitriol and hypocalcaemia (the opposite of PRIMARY hyperparathyroidism, where an autonomous adenoma raises both PTH and calcium); only after years, if glands become autonomous (TERTIARY hyperparathyroidism), does calcium rise',
      why: 'Confusing secondary (low/normal calcium, high phosphate) with primary hyperparathyroidism (high calcium, low phosphate) misreads the whole CKD-MBD picture and its management; the phosphate and calcium levels distinguish them.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The typical biochemistry of CKD-mineral and bone disorder (secondary hyperparathyroidism) is:',
      options: [
        { id: 'a', text: 'High calcium, low phosphate, low PTH' },
        { id: 'b', text: 'Low calcium, high phosphate, high PTH' },
        { id: 'c', text: 'High calcium, high phosphate, low PTH' },
        { id: 'd', text: 'Normal calcium, low phosphate, low PTH' },
      ],
      answerId: 'b',
      explanation: 'CKD causes phosphate retention and failed calcitriol production, lowering calcium; the resulting stimulus drives secondary hyperparathyroidism — low calcium, high phosphate and high PTH — which promotes renal osteodystrophy and vascular calcification.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The anaemia of chronic kidney disease is primarily due to:',
      options: [
        { id: 'a', text: 'Reduced erythropoietin production by the failing kidney' },
        { id: 'b', text: 'Vitamin B12 deficiency' },
        { id: 'c', text: 'Haemolysis from autoantibodies' },
        { id: 'd', text: 'Excess erythropoietin' },
      ],
      answerId: 'a',
      explanation: 'The diseased kidney produces insufficient erythropoietin, causing a normocytic, normochromic anaemia (compounded by iron deficiency and uraemia). Management corrects iron stores first, then uses erythropoiesis-stimulating agents to a target haemoglobin.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default ckdMineralBoneDisorder;
