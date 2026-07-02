import type { Lecture } from '../../lib/types';

export const urineMicroscopyCastsCrystals: Lecture = {
  id: 'urine-microscopy-casts-crystals',
  title: 'Urine Microscopy: Casts, Cells & Crystals',
  system: 'renal',
  source: 'L3 — Urine Collection & Examination',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L3 Urine Microscopy' },
    { kind: 'mechanism', label: 'Casts localise disease' },
    { kind: 'exam', label: 'RBC casts = glomerulonephritis' },
  ],

  highYield: [
    '**Microscopy of the urine SEDIMENT is a "liquid biopsy" of the kidney. CASTS are cylindrical moulds of the tubular lumen formed on a Tamm-Horsfall (uromodulin) matrix, so their presence LOCALISES the problem to the KIDNEY (not the lower tract). The cell/material trapped in the cast tells you the process.**',
    '**Diagnostic casts: RED-CELL casts (± dysmorphic RBCs) = GLOMERULONEPHRITIS / nephritic syndrome (the classic exam link); WHITE-CELL casts = pyelonephritis or acute interstitial nephritis; GRANULAR "muddy-brown" casts = acute tubular necrosis (ATN); FATTY casts (+ oval fat bodies, "Maltese cross" under polarised light) = nephrotic-range proteinuria; broad WAXY casts = advanced chronic kidney disease; hyaline casts are non-specific (concentrated urine, exercise).**',
    '**CELLS: dysmorphic RBCs suggest glomerular bleeding, isomorphic RBCs a lower-tract/urological source; leukocytes suggest infection or interstitial nephritis (eosinophiluria classically AIN); renal tubular epithelial cells suggest ATN. CRYSTALS reflect solute/pH: CALCIUM OXALATE (envelope/dumbbell — ethylene glycol, hypercalciuria), URIC ACID (acidic urine, tumour lysis/gout), STRUVITE ("coffin-lid" — urease-producing Proteus, alkaline), CYSTINE (hexagonal — cystinuria).',
    '**So the sediment integrates with dipstick/clinical data: RBC casts + proteinuria → glomerulonephritis; muddy-brown casts + AKI → ATN; WBC casts + fever → pyelonephritis; fatty casts + heavy proteinuria → nephrotic syndrome; specific crystals point to stone type or toxin. It refines the differential before imaging/biopsy.**',
    '**The take-home: casts localise disease to the kidney (uromodulin matrix) — RBC casts = glomerulonephritis, WBC casts = pyelonephritis/AIN, muddy-brown granular = ATN, fatty = nephrotic, waxy = chronic; dysmorphic RBCs = glomerular; crystals (oxalate/urate/struvite/cystine) point to stone/toxin.** The dipstick chemistry is [[urine-dipstick-chemistry]]; the overview is [[urinalysis-urine-examination]].',
  ],

  mechanism: {
    title: 'Casts (uromodulin moulds) localise to kidney: RBC=GN, WBC=pyelo/AIN, muddy-brown=ATN, fatty=nephrotic, waxy=CKD; dysmorphic RBC=glomerular; crystals point to stone/toxin',
    steps: [
      { id: 's1', label: 'Casts = tubular moulds on uromodulin → localise disease to the kidney', emphasis: 'key' },
      { id: 's2', label: 'RBC casts (+dysmorphic RBC) = glomerulonephritis/nephritic', emphasis: 'danger' },
      { id: 's3', label: 'WBC casts = pyelonephritis/AIN; muddy-brown granular = ATN', emphasis: 'key' },
      { id: 's4', label: 'Fatty casts/Maltese cross = nephrotic; broad waxy = advanced CKD', emphasis: 'key' },
      { id: 's5', label: 'Crystals: oxalate (envelope), urate (acidic), struvite (coffin-lid), cystine (hexagonal)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Red-cell casts and dysmorphic RBCs on microscopy', mechanism: 'Glomerulonephritis (nephritic)', significance: 'key' },
    { sign: 'Muddy-brown granular casts in a patient with AKI', mechanism: 'Acute tubular necrosis', significance: 'key' },
    { sign: 'White-cell casts with fever and flank pain', mechanism: 'Pyelonephritis (or interstitial nephritis)', significance: 'key' },
    { sign: 'Oval fat bodies with a "Maltese cross" under polarised light', mechanism: 'Nephrotic-range proteinuria (lipiduria)', significance: 'supportive' },
    { sign: '"Coffin-lid" crystals with alkaline urine', mechanism: 'Struvite (urease-producing Proteus)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The cast diagnostic of glomerulonephritis', meaning: 'Red-cell casts' },
    { clue: 'The cast typical of acute tubular necrosis', meaning: 'Muddy-brown granular casts' },
    { clue: 'The finding that localises bleeding to the glomerulus', meaning: 'Dysmorphic red cells (± RBC casts)' },
    { clue: 'The hexagonal crystal of an inherited stone disease', meaning: 'Cystine (cystinuria)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Urine microscopy refines the renal differential cheaply and immediately: casts localise disease to the kidney and their content names the process (RBC casts → glomerulonephritis, muddy-brown → ATN, WBC casts → pyelonephritis/AIN, fatty → nephrotic), while dysmorphic RBCs distinguish glomerular from urological bleeding, and crystals point to stone type or a toxin (e.g. oxalate in ethylene glycol). It directs subsequent testing, imaging and the decision to biopsy. The dipstick is [[urine-dipstick-chemistry]]; overview [[urinalysis-urine-examination]]; glomerular disease is [[glomerular-disease-overview]].' },
  ],

  mnemonics: [
    { hook: 'Casts: "RBC=GN, WBC=Pyelo/AIN, Muddy-brown=ATN, Fatty=Nephrotic, Waxy=CKD"', expansion: ['Casts = kidney origin', 'Dysmorphic RBC = glomerular'] },
    { hook: 'Crystals: "Oxalate envelope, Urate acidic, Struvite coffin-lid, Cystine hexagon"', expansion: ['Struvite = Proteus/alkaline', 'Oxalate = ethylene glycol'] },
  ],

  traps: [
    {
      questionCategory: 'What casts tell you',
      wrongInstinct: 'Blood in the urine could come from anywhere, so casts add nothing to localisation',
      rightAnswer: 'CASTS form only within renal tubules (on a uromodulin matrix), so their presence LOCALISES the process to the KIDNEY, and their content specifies it: RED-CELL casts indicate GLOMERULAR bleeding (glomerulonephritis) — not a bladder or stone source — whereas dysmorphic RBCs without casts still favour a glomerular origin and isomorphic RBCs favour a urological one',
      why: 'Red-cell casts turn "haematuria of unknown source" into "glomerular haematuria", pointing to glomerulonephritis and prompting a very different work-up (immunology, biopsy) than urological haematuria (imaging, cystoscopy).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Red-cell casts with dysmorphic red cells in the urine are most specific for:',
      options: [
        { id: 'a', text: 'Bladder cancer' },
        { id: 'b', text: 'Glomerulonephritis' },
        { id: 'c', text: 'A kidney stone' },
        { id: 'd', text: 'Lower urinary tract infection' },
      ],
      answerId: 'b',
      explanation: 'Casts form within renal tubules, so their presence localises disease to the kidney; red-cell casts with dysmorphic RBCs indicate glomerular bleeding (glomerulonephritis/nephritic syndrome), distinguishing it from urological sources of haematuria.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Muddy-brown granular casts in a patient with acute kidney injury suggest:',
      options: [
        { id: 'a', text: 'Prerenal azotaemia' },
        { id: 'b', text: 'Acute tubular necrosis' },
        { id: 'c', text: 'Minimal change disease' },
        { id: 'd', text: 'Postrenal obstruction' },
      ],
      answerId: 'b',
      explanation: 'Pigmented "muddy-brown" granular casts (with renal tubular epithelial cells) are characteristic of acute tubular necrosis, whereas a bland sediment favours prerenal or postrenal AKI — helping localise the cause of AKI.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default urineMicroscopyCastsCrystals;
