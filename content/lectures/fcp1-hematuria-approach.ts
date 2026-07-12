import type { Lecture } from '../../lib/types';

export const fcp1HematuriaApproach: Lecture = {
  id: 'fcp1-hematuria-approach',
  title: 'Approach to Hematuria',
  system: 'clinical',
  source: 'L34 — Urinary Symptoms',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L34 Urinary Symptoms' },
    { kind: 'disease', label: 'Urothelial cancer · GN' },
    { kind: 'mechanism', label: 'Glomerular vs urological' },
    { kind: 'investigation', label: 'Cystoscopy · CT urogram' },
  ],

  highYield: [
    'First **confirm true hematuria**: a **dipstick positive for blood but no red cells on microscopy** means myoglobinuria, haemoglobinuria or pigment (beetroot, rifampicin) — not hematuria. Exclude **UTI** and menstrual contamination.',
    '**Glomerular (nephrological) bleeding:** **dysmorphic red cells, red-cell casts, proteinuria, brown/cola urine and no clots** — e.g. IgA nephropathy or post-infectious glomerulonephritis; often with hypertension and oedema [[fcp1-edema-approach]].',
    '**Non-glomerular (urological) bleeding:** **bright-red blood with clots**, from stones, infection, BPH [[fcp1-urinary-symptoms-luts]] or a tumour.',
    '**Painless visible hematuria in an adult is urothelial cancer until proven otherwise** → **cystoscopy + CT urography**. Risk rises with age over 40, smoking and unexplained **weight loss** [[fcp1-weight-loss-approach]].',
    'Red flags: any visible hematuria, clots, age over 40, smoking history and associated weight loss — all push toward the cancer pathway.',
  ],

  mechanism: {
    title: 'Localising haematuria: glomerular vs urological',
    steps: [
      { id: 's1', label: 'Confirm red cells on microscopy (exclude pigment/myoglobin)', emphasis: 'key' },
      { id: 's2', label: 'Exclude UTI and menstrual contamination', emphasis: 'normal' },
      { id: 's3', label: 'Dysmorphic cells / casts / proteinuria → glomerular', emphasis: 'key' },
      { id: 's4', label: 'Bright red + clots → urological (stone, tumour, BPH)', emphasis: 'key' },
      { id: 's5', label: 'Painless visible haematuria → cancer workup (cystoscopy + CT urogram)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Cola or brown urine without clots', mechanism: 'Glomerular bleeding pattern', significance: 'key' },
    { sign: 'Bright-red urine with clots', mechanism: 'Lower urinary tract (non-glomerular) source', significance: 'key' },
    { sign: 'Loin pain radiating to the groin', mechanism: 'Ureteric stone', significance: 'supportive' },
    { sign: 'Palpable bladder or a flank mass', mechanism: 'Obstructing tumour or clot retention', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Dipstick positive for blood but no red cells on microscopy', meaning: 'Pseudohaematuria (myoglobin, haemoglobin, pigment) — not true hematuria' },
    { clue: 'Dysmorphic red cells, red-cell casts and proteinuria', meaning: 'Glomerular source → nephrology referral' },
    { clue: 'Visible hematuria in a smoker aged over 40', meaning: 'Urothelial malignancy risk → cystoscopy + CT urography' },
    { clue: 'Non-visible hematuria with hypertension and a falling eGFR', meaning: 'Intrinsic renal disease — assess ACR and renal function' },
  ],

  treatment: [
    { logic: 'Stream the patient to the right pathway', detail: 'Glomerular pattern → nephrology (blood pressure, proteinuria, biopsy as needed); urological pattern → urology.' },
    { logic: 'Urgent cancer workup for painless visible hematuria', detail: 'Cystoscopy plus CT urography; do not attribute visible hematuria to a UTI or to anticoagulation without first excluding malignancy.' },
  ],

  mnemonics: [
    { hook: 'Dysmorphic + casts = kidney; clots = urology', expansion: ['Glomerular: brown, proteinuria, no clots', 'Urological: bright red, clots, painless → think cancer'] },
  ],

  traps: [
    {
      questionCategory: 'Anticoagulation and hematuria',
      wrongInstinct: 'Visible hematuria in a patient on warfarin is caused by the anticoagulant, so reassure them',
      rightAnswer: 'Anticoagulation unmasks bleeding rather than causing it — still investigate for a urological source',
      why: 'Therapeutic anticoagulation should not cause hematuria on its own; an underlying lesion, often a tumour, is frequently found.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 62-year-old smoker has a single episode of painless visible hematuria with no dysuria and a normal examination. The most appropriate next step is:',
      options: [
        { id: 'a', text: 'Reassure and repeat the dipstick in 6 months' },
        { id: 'b', text: 'Empirical antibiotics for a UTI' },
        { id: 'c', text: 'Urgent cystoscopy and CT urography' },
        { id: 'd', text: 'Start an alpha-blocker' },
      ],
      answerId: 'c',
      explanation: 'Painless visible hematuria in an older smoker is urothelial cancer until proven otherwise and warrants urgent cystoscopy with CT urography.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A 20-year-old develops cola-coloured urine two weeks after a sore throat, with mild periorbital oedema, red-cell casts and proteinuria. This bleeding pattern is:',
      options: [
        { id: 'a', text: 'Bladder carcinoma' },
        { id: 'b', text: 'Glomerular (post-infectious glomerulonephritis)' },
        { id: 'c', text: 'A ureteric stone' },
        { id: 'd', text: 'Haemorrhagic cystitis' },
      ],
      answerId: 'b',
      explanation: 'Red-cell casts, proteinuria and cola-coloured urine after a preceding infection indicate a glomerular source such as post-infectious glomerulonephritis.',
      tests: 'disease',
    },
  ],
};

export default fcp1HematuriaApproach;
