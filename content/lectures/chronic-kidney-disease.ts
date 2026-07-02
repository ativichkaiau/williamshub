import type { Lecture } from '../../lib/types';

export const chronicKidneyDisease: Lecture = {
  id: 'chronic-kidney-disease',
  title: 'Chronic Kidney Disease',
  system: 'renal',
  source: 'L11 — Acute Kidney Injury & CKD',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L11 CKD' },
    { kind: 'mechanism', label: 'Progressive nephron loss' },
    { kind: 'exam', label: 'CKD-MBD, anaemia, staging' },
  ],

  highYield: [
    '**CHRONIC KIDNEY DISEASE (CKD) = kidney damage or GFR <60 mL/min for ≥3 MONTHS, staged G1–G5 by GFR and A1–A3 by ALBUMINURIA (which independently predicts progression). The commonest causes are DIABETES and HYPERTENSION. Once enough nephrons are lost, the remaining ones hyperfilter and progressively fail — a self-perpetuating decline.**',
    '**As GFR falls, the kidney fails its excretory, homeostatic and endocrine roles → the URAEMIC syndrome: fluid overload/hypertension, HYPERKALAEMIA, metabolic ACIDOSIS, hyperphosphataemia, and uraemic symptoms (fatigue, nausea, pruritus, encephalopathy, pericarditis). Two hormonal failures are high-yield: ANAEMIA (↓ERYTHROPOIETIN) and CKD-MINERAL BONE DISORDER.**',
    '**CKD-MBD: failing kidneys cannot excrete PHOSPHATE (→ hyperphosphataemia) or make active vitamin D (1-α-hydroxylation ↓ → ↓calcitriol → HYPOcalcaemia) → SECONDARY HYPERPARATHYROIDISM (↑PTH) → renal osteodystrophy and vascular calcification. Manage with phosphate binders, active vitamin D, and control of PTH.**',
    '**Management slows progression and treats complications: control BLOOD PRESSURE and proteinuria with ACEi/ARB (and SGLT2 inhibitors), tight glycaemic control, treat anaemia (ERYTHROPOIESIS-STIMULATING AGENTS + iron), manage CKD-MBD, correct acidosis, DOSE-ADJUST renally-cleared drugs and avoid nephrotoxins ([[drug-dosing-ckd]]); prepare for RENAL REPLACEMENT (dialysis/transplant) in end-stage (G5) disease. Cardiovascular disease is the leading cause of death in CKD.**',
    '**The take-home: CKD = GFR <60 for ≥3 months (staged by GFR + albuminuria); commonest causes DIABETES & HYPERTENSION; complications = fluid/HTN, hyperkalaemia, acidosis, ANAEMIA (↓EPO), and CKD-MBD (↑phosphate, ↓calcitriol → 2° hyperparathyroidism). Slow progression with ACEi/ARB + BP/glucose control; RRT at ESRD.** It contrasts with reversible [[acute-kidney-injury]]; drug dosing is [[drug-dosing-ckd]]; ADPKD is a cause ([[cystic-kidney-diseases]]).',
  ],

  mechanism: {
    title: 'GFR<60 ≥3mo (diabetes/HTN); nephron loss → uraemia + anaemia (↓EPO) + CKD-MBD (↑PO4/↓calcitriol → 2° hyperPTH); slow with ACEi/ARB',
    steps: [
      { id: 's1', label: 'CKD = GFR <60 for ≥3 months; staged by GFR (G1–5) + albuminuria (A1–3)', emphasis: 'key' },
      { id: 's2', label: 'Commonest causes: diabetes and hypertension; hyperfiltration → progressive loss', emphasis: 'key' },
      { id: 's3', label: 'Uraemia: fluid/HTN, hyperkalaemia, acidosis; anaemia from ↓erythropoietin', emphasis: 'key' },
      { id: 's4', label: 'CKD-MBD: ↑phosphate + ↓calcitriol → ↓Ca → 2° hyperparathyroidism → renal osteodystrophy', emphasis: 'key' },
      { id: 's5', label: 'Slow progression: ACEi/ARB (+ SGLT2i), BP/glucose control; RRT (dialysis/transplant) at ESRD', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'GFR persistently below 60 mL/min with albuminuria for months', mechanism: 'Chronic kidney disease (staged by GFR + albuminuria)', significance: 'key' },
    { sign: 'Normocytic anaemia in CKD', mechanism: 'Reduced erythropoietin production', significance: 'key' },
    { sign: 'Hyperphosphataemia, hypocalcaemia and raised PTH', mechanism: 'CKD-mineral bone disorder (secondary hyperparathyroidism)', significance: 'key' },
    { sign: 'Small, shrunken kidneys on ultrasound', mechanism: 'Chronicity (vs normal/large size in acute or infiltrative disease)', significance: 'supportive' },
    { sign: 'Refractory hyperkalaemia/acidosis/uraemia at end stage', mechanism: 'Indication for renal replacement therapy', significance: 'key' },
  ],

  investigations: [
    { clue: 'The definition of CKD', meaning: 'Kidney damage or GFR <60 mL/min for ≥3 months' },
    { clue: 'The two commonest causes of CKD', meaning: 'Diabetes mellitus and hypertension' },
    { clue: 'The cause of anaemia in CKD', meaning: 'Reduced erythropoietin' },
    { clue: 'The mineral-bone consequence of CKD', meaning: 'CKD-MBD: ↑phosphate, ↓calcitriol → secondary hyperparathyroidism' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'CKD management centres on slowing progression (ACEi/ARB + SGLT2 inhibitors, blood-pressure and glycaemic control, avoiding nephrotoxins) and treating the complications of nephron loss — anaemia (EPO/iron), CKD-MBD (phosphate binders, active vitamin D), acidosis and hyperkalaemia — while preparing for renal replacement at end stage. Cardiovascular risk dominates prognosis. It contrasts with reversible [[acute-kidney-injury]], mandates careful drug dosing ([[drug-dosing-ckd]]), and has ADPKD among its causes ([[cystic-kidney-diseases]]).' },
  ],

  mnemonics: [
    { hook: 'CKD complications: "fluid/HTN, hyperKalaemia, Acidosis, Anaemia (EPO), Bones (CKD-MBD)"', expansion: ['Causes: diabetes + hypertension', 'GFR <60 for ≥3 months'] },
    { hook: 'CKD-MBD: "↑phosphate + ↓calcitriol → ↓calcium → ↑PTH (secondary hyperparathyroidism)"', expansion: ['Phosphate binders + active vit D', 'CVD = leading cause of death'] },
  ],

  traps: [
    {
      questionCategory: 'CKD-MBD calcium/phosphate direction',
      wrongInstinct: 'In kidney failure, both calcium and phosphate simply rise together',
      rightAnswer: 'In CKD-MBD the pattern is HIGH PHOSPHATE with LOW/normal CALCIUM: failing kidneys cannot excrete phosphate (hyperphosphataemia) and cannot 1-α-hydroxylate vitamin D (low calcitriol → reduced calcium absorption → HYPOcalcaemia), which together drive SECONDARY hyperparathyroidism (high PTH) — calcium is typically low, not high, early on',
      why: 'Getting the calcium/phosphate directions right (high phosphate, low calcitriol/calcium → high PTH) is essential to understanding secondary hyperparathyroidism and its treatment (phosphate binders, active vitamin D) in CKD.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The anaemia commonly seen in chronic kidney disease is primarily due to:',
      options: [
        { id: 'a', text: 'Iron overload' },
        { id: 'b', text: 'Reduced renal erythropoietin production' },
        { id: 'c', text: 'Excess erythropoietin' },
        { id: 'd', text: 'Vitamin K deficiency' },
      ],
      answerId: 'b',
      explanation: 'The kidneys produce erythropoietin, so as functioning renal tissue is lost in CKD, erythropoietin falls and a normocytic anaemia develops. It is treated with erythropoiesis-stimulating agents and iron once other causes are addressed.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'In CKD-mineral bone disorder, the typical biochemical pattern is:',
      options: [
        { id: 'a', text: 'High phosphate, low calcitriol, low/normal calcium and high PTH' },
        { id: 'b', text: 'Low phosphate and high calcium' },
        { id: 'c', text: 'High calcium and low PTH' },
        { id: 'd', text: 'Normal phosphate and calcium' },
      ],
      answerId: 'a',
      explanation: 'Failing kidneys retain phosphate (hyperphosphataemia) and cannot activate vitamin D (low calcitriol), reducing calcium absorption (hypocalcaemia); both stimulate PTH, causing secondary hyperparathyroidism and renal osteodystrophy. Treatment includes phosphate binders and active vitamin D.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default chronicKidneyDisease;
