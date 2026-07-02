import type { Lecture } from '../../lib/types';

export const acutePyelonephritisClinical: Lecture = {
  id: 'acute-pyelonephritis-clinical',
  title: 'Acute Pyelonephritis & Complicated UTI',
  system: 'renal',
  source: 'L5 — Urinary Tract Infection (Clinical)',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L5 Pyelonephritis' },
    { kind: 'mechanism', label: 'Ascending upper-tract infection' },
    { kind: 'exam', label: 'Fever + flank pain + WBC casts' },
  ],

  highYield: [
    '**ACUTE PYELONEPHRITIS is infection of the renal parenchyma/pelvis, usually ASCENDING from the bladder (uropathogenic E. coli, other Enterobacterales). It presents with FEVER, RIGORS, FLANK PAIN and costovertebral-angle tenderness, often with lower-tract symptoms (dysuria, frequency), nausea/vomiting — i.e. a SYSTEMICALLY UNWELL patient, distinguishing it from simple cystitis (afebrile, no systemic upset).**',
    '**Diagnosis: pyuria + bacteriuria with WHITE-CELL CASTS (localising to the kidney), positive urine culture, and often a raised WBC/CRP. Blood cultures if septic. IMAGING (CT/ultrasound) is indicated if there is failure to improve in 48–72 h, suspected OBSTRUCTION or stone, a single/transplant kidney, or to exclude a perinephric/renal ABSCESS or EMPHYSEMATOUS pyelonephritis (gas-forming, in diabetics — a surgical emergency).**',
    '**"COMPLICATED" UTI/pyelonephritis = infection in a functionally/structurally abnormal tract or host: obstruction/stones, catheter, pregnancy, diabetes, immunosuppression, male sex, renal transplant, or resistant organisms. These need longer therapy, imaging, and correction of the underlying problem (relieve obstruction, remove catheter) — the infection will not clear while an obstruction or stone persists.**',
    '**MANAGEMENT: empirical antibiotics guided by local resistance (often a fluoroquinolone or cephalosporin/aminoglycoside; IV if vomiting/septic), then narrowed by culture; ensure adequate duration (typically 7–14 days). URGENTLY relieve any OBSTRUCTION (an obstructed infected system is an emergency → decompress) and drain abscesses. Complications: sepsis, abscess, papillary necrosis, chronic scarring/reflux nephropathy.**',
    '**The take-home: acute pyelonephritis = ascending upper-tract infection — FEVER + FLANK PAIN + CVA tenderness + WBC casts (systemically unwell, unlike cystitis); image if not improving/obstruction/diabetes (abscess, emphysematous); "complicated" = abnormal tract/host → longer therapy + fix the cause; obstructed+infected = emergency.** Uncomplicated cystitis management is [[uti-clinical-management]]; pathogenesis is [[uti-pathogenesis-microbiology]]; obstruction is [[obstructive-uropathy-hydronephrosis]].',
  ],

  mechanism: {
    title: 'Ascending renal infection: fever + flank pain + WBC casts (systemically unwell); image if not improving/obstruction/diabetes; complicated = abnormal tract → longer Rx + fix cause',
    steps: [
      { id: 's1', label: 'Ascending E. coli/Enterobacterales infect renal parenchyma/pelvis', emphasis: 'key' },
      { id: 's2', label: 'Fever, rigors, flank pain, CVA tenderness + WBC casts (systemically unwell)', emphasis: 'key' },
      { id: 's3', label: 'Image if no improvement/obstruction/diabetes → abscess, emphysematous pyelonephritis', emphasis: 'key' },
      { id: 's4', label: 'Obstructed + infected kidney = emergency → urgent decompression', emphasis: 'danger' },
      { id: 's5', label: 'Complicated (abnormal tract/host) → longer antibiotics + correct cause', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Fever, rigors and flank pain with costovertebral-angle tenderness', mechanism: 'Acute pyelonephritis (upper-tract infection)', significance: 'key' },
    { sign: 'White-cell casts in the urine', mechanism: 'Localises infection to the renal parenchyma', significance: 'key' },
    { sign: 'Gas within the kidney on CT in a diabetic', mechanism: 'Emphysematous pyelonephritis (surgical emergency)', significance: 'key' },
    { sign: 'Persistent fever after 72 h of appropriate antibiotics', mechanism: 'Abscess or obstruction — needs imaging/drainage', significance: 'key' },
    { sign: 'Pyelonephritis in pregnancy, diabetes or with a stone', mechanism: 'Complicated UTI — longer therapy, address cause', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The cast localising infection to the kidney', meaning: 'White-cell casts' },
    { clue: 'When to image acute pyelonephritis', meaning: 'No improvement in 48–72 h, obstruction/stone, diabetes, single kidney' },
    { clue: 'The gas-forming emergency in diabetics', meaning: 'Emphysematous pyelonephritis' },
    { clue: 'What makes a UTI "complicated"', meaning: 'Structural/functional abnormality or high-risk host' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Pyelonephritis is a systemic infection that can progress to sepsis, abscess or scarring, so it needs prompt appropriate (often IV) antibiotics of adequate duration and, critically, exclusion/relief of obstruction — an obstructed infected kidney will not clear on antibiotics and is an emergency requiring decompression. Recognising "complicated" infection (abnormal tract, pregnancy, diabetes, catheter) mandates imaging, longer therapy and correcting the underlying cause. Uncomplicated cystitis is [[uti-clinical-management]]; obstruction is [[obstructive-uropathy-hydronephrosis]]; pathogenesis is [[uti-pathogenesis-microbiology]].' },
  ],

  mnemonics: [
    { hook: 'Pyelonephritis = "Fever + Flank + CVA tenderness + WBC casts"', expansion: ['Systemically unwell (vs cystitis)', 'Image if not improving'] },
    { hook: '"Complicated = abnormal tract/host" → longer Rx + fix cause', expansion: ['Obstructed+infected = emergency', 'Emphysematous = diabetic emergency'] },
  ],

  traps: [
    {
      questionCategory: 'Pyelonephritis not improving on antibiotics',
      wrongInstinct: 'If pyelonephritis does not settle on antibiotics, just switch to a broader antibiotic',
      rightAnswer: 'Failure to improve within 48–72 h of appropriate antibiotics should prompt IMAGING to find a complication — an OBSTRUCTING stone, a renal/perinephric ABSCESS, or emphysematous pyelonephritis — because these need DRAINAGE/decompression or surgery, not merely a broader antibiotic; an obstructed infected kidney is an emergency',
      why: 'Antibiotics cannot penetrate an undrained abscess or clear infection behind an obstruction, so persistent fever signals a mechanical/collection problem requiring a procedure — escalating antibiotics alone wastes critical time.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which feature best distinguishes acute pyelonephritis from simple cystitis?',
      options: [
        { id: 'a', text: 'Dysuria and frequency' },
        { id: 'b', text: 'Fever, flank pain and systemic illness (± white-cell casts)' },
        { id: 'c', text: 'A positive nitrite test' },
        { id: 'd', text: 'Cloudy urine' },
      ],
      answerId: 'b',
      explanation: 'Pyelonephritis is an upper-tract, systemic infection: fever, rigors, flank pain with costovertebral-angle tenderness, often nausea/vomiting, and white-cell casts localising to the kidney. Simple cystitis causes lower-tract symptoms (dysuria, frequency) without systemic upset.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A patient with pyelonephritis and an obstructing ureteric stone remains febrile despite IV antibiotics. The essential next step is:',
      options: [
        { id: 'a', text: 'Add oral antibiotics' },
        { id: 'b', text: 'Urgent decompression of the obstructed, infected system (stent or nephrostomy)' },
        { id: 'c', text: 'Discharge with follow-up' },
        { id: 'd', text: 'Repeat the urine culture only' },
      ],
      answerId: 'b',
      explanation: 'An obstructed, infected kidney is a urological emergency: antibiotics cannot clear infection behind an obstruction, so urgent decompression with a ureteric stent or percutaneous nephrostomy is required to prevent pyonephrosis and sepsis.',
      tests: 'treatment',
    },
  ],

  figures: [],
};

export default acutePyelonephritisClinical;
