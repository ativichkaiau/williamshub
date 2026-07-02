import type { Lecture } from '../../lib/types';

export const chronicKidneyDiseaseUremia: Lecture = {
  id: 'chronic-kidney-disease-uremia',
  title: 'Chronic Kidney Disease & Uraemia',
  system: 'renal',
  source: 'L11 — Renal Metabolism',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L11 Renal Metabolism' },
    { kind: 'disease', label: 'Chronic kidney disease' },
    { kind: 'exam', label: 'Uraemia & CKD-MBD' },
  ],

  highYield: [
    '**Chronic kidney disease (CKD) is a sustained (≥3 months) reduction in GFR and/or kidney damage, staged G1–G5 by eGFR (and by albuminuria).** Unlike AKI, it is usually IRREVERSIBLE and progressive. The commonest causes are **diabetes mellitus and hypertension** (globally), then glomerulonephritis and polycystic kidney disease.',
    '**As GFR falls, the kidney loses BOTH its excretory and endocrine functions, producing a wide, predictable syndrome.** Excretory failure → retention of nitrogenous waste (**azotaemia → uraemia**), **hyperkalaemia, metabolic acidosis, and salt/water retention (hypertension, oedema)**. Endocrine failure → **anaemia (↓EPO) and renal bone disease (↓calcitriol)** — see [[renal-endocrine-functions]].',
    '**CKD-mineral and bone disorder (CKD-MBD): the failing kidney cannot excrete phosphate (→ hyperphosphataemia) or activate vitamin D (→ hypocalcaemia), which together drive SECONDARY HYPERPARATHYROIDISM and renal osteodystrophy** ([[renal-calcium-phosphate-handling]]). Vascular calcification adds to the high cardiovascular risk.',
    '**URAEMIA is the clinical syndrome of advanced CKD: fatigue, anorexia, nausea, pruritus, a "uraemic frost", encephalopathy (confusion, asterixis), and uraemic PERICARDITIS and platelet dysfunction (bleeding).** The leading cause of death in CKD is cardiovascular disease, driven by hypertension, volume overload and vascular calcification.',
    '**Management slows progression (control blood pressure and diabetes; ACE-I/ARB to reduce proteinuria) and treats complications (phosphate binders + vitamin D for CKD-MBD, EPO for anaemia, treat hyperkalaemia/acidosis), with renal replacement therapy (dialysis or transplantation) for end-stage disease (G5).** CKD contrasts with the often-reversible [[acute-kidney-injury-azotemia]].',
  ],

  mechanism: {
    title: 'Progressive ↓GFR → excretory + endocrine failure → uraemia',
    steps: [
      { id: 's1', label: 'CKD = sustained ↓GFR (≥3 mo), staged G1–G5; usually irreversible', emphasis: 'key' },
      { id: 's2', label: 'Causes: diabetes + hypertension lead (then GN, PKD)', emphasis: 'key' },
      { id: 's3', label: 'Excretory failure: azotaemia, hyperK⁺, acidosis, volume overload', emphasis: 'key' },
      { id: 's4', label: 'Endocrine failure: anaemia (↓EPO), CKD-MBD (↓calcitriol, ↑PO₄, ↑PTH)', emphasis: 'key' },
      { id: 's5', label: 'Uraemia (pericarditis, encephalopathy, bleeding); CVD = leading cause of death', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Sustained low eGFR for more than 3 months', mechanism: 'Chronic kidney disease (staged G1–G5)', significance: 'key' },
    { sign: 'Hyperphosphataemia + hypocalcaemia + high PTH', mechanism: 'CKD-mineral and bone disorder (secondary hyperparathyroidism)', significance: 'key' },
    { sign: 'Normocytic anaemia', mechanism: 'Reduced erythropoietin', significance: 'key' },
    { sign: 'Uraemic pericarditis / encephalopathy (asterixis)', mechanism: 'Advanced uraemia — dialysis indication', significance: 'key' },
    { sign: 'Bilaterally small, shrunken kidneys on ultrasound', mechanism: 'Chronicity (vs normal/large in acute or infiltrative disease)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The two commonest causes of CKD', meaning: 'Diabetes mellitus and hypertension' },
    { clue: 'The mineral disorder of CKD', meaning: 'CKD-MBD (hyperphosphataemia, hypocalcaemia, secondary hyperparathyroidism)' },
    { clue: 'The leading cause of death in CKD', meaning: 'Cardiovascular disease' },
    { clue: 'The definitive treatment for end-stage (G5) disease', meaning: 'Renal replacement therapy (dialysis or transplantation)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'CKD management slows progression (BP/diabetes control, ACE-I/ARB, reduce proteinuria — [[proteinuria-evaluation]]) and treats the excretory (hyperkalaemia — [[renal-potassium-handling]]; acidosis — [[acid-base-disorders-compensation]]) and endocrine (anaemia, CKD-MBD — [[renal-endocrine-functions]], [[renal-calcium-phosphate-handling]]) complications. Staging uses eGFR ([[renal-clearance-principles]]); it contrasts with reversible [[acute-kidney-injury-azotemia]].' },
  ],

  mnemonics: [
    { hook: 'CKD hits "everything": azotaemia, hyperK⁺, acidosis, anaemia, bone disease, HTN', expansion: ['Excretory + endocrine failure', 'CVD = leading cause of death'] },
    { hook: 'CKD-MBD = "high phosphate, low calcium, high PTH"', expansion: ['↓calcitriol + ↓PO₄ excretion', 'Phosphate binders + vitamin D'] },
  ],

  traps: [
    {
      questionCategory: 'Distinguishing CKD from AKI',
      wrongInstinct: 'A raised creatinine with anaemia and small kidneys is an acute kidney injury needing fluids',
      rightAnswer: 'Anaemia, CKD-MBD (high phosphate/PTH) and bilaterally SMALL kidneys point to CHRONIC kidney disease (chronic, usually irreversible), not acute injury — features that take time to develop distinguish it from AKI',
      why: 'Anaemia and renal bone disease reflect long-standing loss of endocrine function, and shrunken kidneys reflect chronic scarring; mislabelling CKD as AKI leads to inappropriate expectations of recovery.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with long-standing diabetes has a persistently reduced eGFR, normocytic anaemia, hyperphosphataemia with a high PTH, and bilaterally small kidneys. The diagnosis is:',
      options: [
        { id: 'a', text: 'Pre-renal acute kidney injury' },
        { id: 'b', text: 'Chronic kidney disease' },
        { id: 'c', text: 'Acute tubular necrosis' },
        { id: 'd', text: 'Post-renal obstruction' },
      ],
      answerId: 'b',
      explanation: 'Sustained reduced eGFR with anaemia (low EPO), CKD-mineral and bone disorder (high phosphate/PTH) and small scarred kidneys indicates chronic kidney disease — features that develop over time, distinguishing it from acute injury.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Secondary hyperparathyroidism in chronic kidney disease arises because the failing kidney:',
      options: [
        { id: 'a', text: 'Excretes too much phosphate' },
        { id: 'b', text: 'Retains phosphate and activates less vitamin D, causing hypocalcaemia that drives PTH secretion' },
        { id: 'c', text: 'Overproduces calcitriol' },
        { id: 'd', text: 'Secretes excess calcitonin' },
      ],
      answerId: 'b',
      explanation: 'A failing kidney excretes less phosphate (hyperphosphataemia) and produces less calcitriol; the resulting hypocalcaemia stimulates the parathyroids, causing secondary hyperparathyroidism and renal bone disease (CKD-MBD).',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default chronicKidneyDiseaseUremia;
