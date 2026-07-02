import type { Lecture } from '../../lib/types';
import { AKI_CLASSIFICATION } from '../../lib/figures';

export const acuteKidneyInjuryAzotemia: Lecture = {
  id: 'acute-kidney-injury-azotemia',
  title: 'Acute Kidney Injury & Azotaemia',
  system: 'renal',
  source: 'L8 — Urinalysis I: Physical & Chemical',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L8 Urinalysis I' },
    { kind: 'disease', label: 'Acute kidney injury' },
    { kind: 'exam', label: 'Pre-renal vs ATN' },
  ],

  highYield: [
    '**Acute kidney injury (AKI) is an abrupt fall in GFR → retention of nitrogenous waste (rising urea and creatinine = AZOTAEMIA), often with oliguria.** It is classified by WHERE the problem is: **pre-renal (perfusion), intrinsic (kidney damage), and post-renal (obstruction)** — a framework that directs the whole work-up, in which urinalysis is central.',
    '**PRE-renal AKI (commonest, ~55%) is reduced perfusion (hypovolaemia, haemorrhage, shock, heart failure) with INTACT tubules.** The kidney responds appropriately by avidly reabsorbing Na⁺ and water → **low urine sodium, FENa <1%, a high BUN:creatinine ratio (>20) and concentrated urine.** It is rapidly reversible if perfusion is restored — but sustained hypoperfusion tips into ATN.',
    '**INTRINSIC AKI (~40%) is damage within the kidney; the commonest form is ACUTE TUBULAR NECROSIS (ATN) from ischaemia or nephrotoxins (aminoglycosides, contrast, myoglobin).** Now the tubules FAIL to reabsorb Na⁺ → **FENa >2%, BUN:Cr ~10–15, and "muddy-brown" granular casts** on microscopy ([[urine-microscopy-sediment]]). Other intrinsic causes: glomerulonephritis (RBC casts), acute interstitial nephritis (WBC/eosinophil casts).',
    '**POST-renal AKI (~5%) is obstruction to outflow (bilateral ureteric obstruction, bladder outlet — stones, prostate, tumour) causing back-pressure and hydronephrosis** — reversible if relieved promptly. The urinalysis + FENa/BUN:Cr indices plus imaging (ultrasound for hydronephrosis) localise the level.',
    '**The dangerous consequences are the uraemic emergencies: HYPERKALAEMIA (arrhythmia), metabolic ACIDOSIS, FLUID OVERLOAD/pulmonary oedema, and uraemic pericarditis/encephalopathy — the indications for urgent dialysis.** Distinguishing pre-renal (fluids) from ATN (supportive, avoid nephrotoxins) from obstruction (relieve it) with these simple indices is the highest-yield skill.',
  ],

  mechanism: {
    title: 'Abrupt ↓GFR → azotaemia; localise pre-renal vs intrinsic (ATN) vs post-renal',
    steps: [
      { id: 's1', label: 'AKI = abrupt ↓GFR → rising urea/creatinine (azotaemia) ± oliguria', emphasis: 'key' },
      { id: 's2', label: 'Pre-renal: ↓perfusion, tubules intact → FENa <1%, BUN:Cr >20', emphasis: 'key' },
      { id: 's3', label: 'Intrinsic ATN: tubules fail → FENa >2%, muddy-brown casts', emphasis: 'key' },
      { id: 's4', label: 'Post-renal: obstruction → hydronephrosis (ultrasound); reversible if relieved' },
      { id: 's5', label: 'Uraemic emergencies: hyperK⁺, acidosis, overload, pericarditis → dialysis', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'FENa <1%, BUN:Cr >20, concentrated urine', mechanism: 'Pre-renal AKI (avid Na⁺ retention, tubules intact)', significance: 'key' },
    { sign: 'FENa >2% with muddy-brown granular casts', mechanism: 'Acute tubular necrosis (intrinsic)', significance: 'key' },
    { sign: 'Bilateral hydronephrosis on ultrasound', mechanism: 'Post-renal (obstructive) AKI', significance: 'key' },
    { sign: 'Rising potassium with peaked T waves', mechanism: 'Hyperkalaemia — a dialysis indication', significance: 'key' },
    { sign: 'AKI after aminoglycosides or contrast', mechanism: 'Nephrotoxic acute tubular necrosis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The three categories of acute kidney injury', meaning: 'Pre-renal, intrinsic, post-renal' },
    { clue: 'The indices favouring pre-renal over ATN', meaning: 'FENa <1% and BUN:creatinine >20 (vs FENa >2% in ATN)' },
    { clue: 'The cast of acute tubular necrosis', meaning: 'Muddy-brown granular casts' },
    { clue: 'The uraemic complications indicating urgent dialysis', meaning: 'Hyperkalaemia, acidosis, fluid overload, uraemic pericarditis/encephalopathy' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Localising AKI directs therapy — restore perfusion (pre-renal), remove nephrotoxins/support (ATN), relieve obstruction (post-renal). It uses the urinalysis of [[urinalysis-physical-chemical]] and [[urine-microscopy-sediment]], the clearance concept of [[renal-clearance-principles]], and pre-renal reflects the perfusion of [[renal-hemodynamics-autoregulation]]. Persistent injury may progress to [[chronic-kidney-disease-uremia]]; hyperkalaemia links to [[renal-potassium-handling]].' },
  ],

  mnemonics: [
    { hook: 'AKI = "Pre-renal, Renal (intrinsic), Post-renal" (perfusion, damage, obstruction)', expansion: ['Pre-renal FENa <1%, BUN:Cr >20', 'ATN FENa >2%, muddy-brown casts'] },
    { hook: 'Dialysis "AEIOU": Acidosis, Electrolytes (hyperK⁺), Intoxication, Overload, Uraemia', expansion: ['Uraemic pericarditis/encephalopathy', 'Refractory hyperkalaemia'] },
  ],

  traps: [
    {
      questionCategory: 'Distinguishing pre-renal AKI from ATN',
      wrongInstinct: 'A high urine sodium and FENa always indicate the kidney is failing intrinsically',
      rightAnswer: 'In PRE-renal AKI the tubules are intact and reabsorb Na⁺ avidly → LOW urine Na⁺, FENa <1%, BUN:Cr >20; only when tubules are DAMAGED (ATN) does FENa rise >2% — the indices distinguish a perfusion problem from intrinsic injury',
      why: 'Pre-renal and ATN both raise creatinine, but they demand opposite actions (fluids vs supportive care); the FENa/BUN:Cr indices reveal whether the tubules are still working, guiding treatment.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A hypovolaemic patient develops rising creatinine with a fractional excretion of sodium (FENa) of 0.5% and a BUN:creatinine ratio of 25. This indicates:',
      options: [
        { id: 'a', text: 'Acute tubular necrosis' },
        { id: 'b', text: 'Pre-renal acute kidney injury' },
        { id: 'c', text: 'Post-renal obstruction' },
        { id: 'd', text: 'Glomerulonephritis' },
      ],
      answerId: 'b',
      explanation: 'A low FENa (<1%) and high BUN:creatinine ratio (>20) indicate intact tubules reabsorbing sodium avidly in response to hypoperfusion — pre-renal AKI, reversible with restored perfusion. ATN would show FENa >2% and muddy-brown casts.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which finding is an indication for urgent dialysis in acute kidney injury?',
      options: [
        { id: 'a', text: 'A FENa of 0.5%' },
        { id: 'b', text: 'Refractory hyperkalaemia or fluid overload with pulmonary oedema' },
        { id: 'c', text: 'Mild proteinuria' },
        { id: 'd', text: 'Concentrated urine' },
      ],
      answerId: 'b',
      explanation: 'Uraemic emergencies — refractory hyperkalaemia, severe metabolic acidosis, fluid overload/pulmonary oedema, and uraemic pericarditis or encephalopathy — are indications for urgent dialysis (mnemonic AEIOU).',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Acute kidney injury classification', svg: AKI_CLASSIFICATION, caption: 'Pre-renal vs intrinsic (ATN) vs post-renal AKI, with FENa/BUN:Cr indices and uraemic emergencies.' },
  ],
};

export default acuteKidneyInjuryAzotemia;
