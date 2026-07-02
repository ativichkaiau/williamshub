import type { Lecture } from '../../lib/types';
import { URINE_CASTS } from '../../lib/figures';

export const urineMicroscopySediment: Lecture = {
  id: 'urine-microscopy-sediment',
  title: 'Urinalysis II: Microscopy of the Urine Sediment',
  system: 'renal',
  source: 'L10 — Urinalysis II: Urine Sediment',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L10 Urinalysis II' },
    { kind: 'investigation', label: 'Casts & crystals' },
    { kind: 'exam', label: 'RBC casts' },
  ],

  highYield: [
    '**Microscopy of the spun urine sediment identifies cells, casts, crystals and organisms — the confirmatory step after the dipstick.** Examine fresh urine: cells and casts begin to disintegrate within **1–3 hours at room temperature**. The sediment localises and characterises disease that the dipstick only screens for.',
    '**Casts are cylindrical moulds of the renal tubule (a Tamm–Horsfall protein matrix), so finding them localises the problem to the KIDNEY, not the lower tract.** They form where flow slows and protein gels — the **distal tubule and collecting duct**, NOT the proximal tubule or loop. Their contents name them and point to a diagnosis.',
    '**Diagnostic casts:** **RBC casts = glomerulonephritis (nephritic)** — the key cast; **WBC casts = pyelonephritis/interstitial nephritis**; **"muddy-brown" granular casts = acute tubular necrosis**; **fatty casts (Maltese cross) = nephrotic syndrome**; **waxy/broad casts = chronic kidney disease/very low flow (wide collecting ducts)**; **hyaline casts are non-specific** (dehydration, exercise, normal). Epithelial-cell casts indicate tubular injury.',
    '**Cells and their meaning:** **dysmorphic red cells + RBC casts = glomerular (upper-tract) bleeding**, whereas **isomorphic (normal-shaped) red cells = lower-tract bleeding** (stone, tumour, infection). **White cells** indicate infection/inflammation (pyuria); squamous epithelial cells usually mean contamination; **transitional cells** in clusters can suggest urothelial pathology.',
    '**Crystals depend on urine pH and solute supersaturation:** **uric acid and calcium oxalate in ACID urine; struvite (triple phosphate, "coffin-lid") and calcium/ammonium phosphate in ALKALINE urine** (struvite with urease-producing bacteria). **Cystine crystals (hexagonal) indicate cystinuria.** Organisms — bacteria, yeast, or motile **Trichomonas** — and their clinical context complete the picture (cystitis, glomerulonephritis, calculi).',
  ],

  mechanism: {
    title: 'Fresh sediment → cells + casts + crystals localise & name disease',
    steps: [
      { id: 's1', label: 'Examine fresh: cells/casts lyse in 1–3 h at room temp', emphasis: 'key' },
      { id: 's2', label: 'Casts = tubular moulds → disease is RENAL (form distally, not PCT/loop)', emphasis: 'key' },
      { id: 's3', label: 'RBC cast = glomerulonephritis; muddy-brown = ATN; fatty = nephrotic', emphasis: 'key' },
      { id: 's4', label: 'Dysmorphic RBC = glomerular bleed; isomorphic = lower-tract bleed' },
      { id: 's5', label: 'Crystals by pH: urate/oxalate (acid) vs struvite/phosphate (alkaline)' },
    ],
  },

  examFindings: [
    { sign: 'Red cell casts', mechanism: 'Glomerulonephritis (nephritic syndrome)', significance: 'key' },
    { sign: '"Muddy-brown" granular casts', mechanism: 'Acute tubular necrosis (ATN)', significance: 'key' },
    { sign: 'Fatty casts / oval fat bodies (Maltese cross)', mechanism: 'Nephrotic syndrome (lipiduria)', significance: 'key' },
    { sign: 'White cell casts', mechanism: 'Pyelonephritis or interstitial nephritis', significance: 'supportive' },
    { sign: 'Struvite ("coffin-lid") crystals in alkaline urine', mechanism: 'Urease-producing bacteria (e.g. Proteus) — infection stones', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The cast diagnostic of glomerulonephritis', meaning: 'Red blood cell (RBC) cast' },
    { clue: 'The cast typical of acute tubular necrosis', meaning: 'Muddy-brown granular cast' },
    { clue: 'The finding that distinguishes glomerular from lower-tract haematuria', meaning: 'Dysmorphic RBCs / RBC casts (glomerular) vs isomorphic RBCs (lower tract)' },
    { clue: 'The nephron sites where casts do NOT form', meaning: 'The proximal tubule and loop of Henle (they form distally)' },
  ],

  treatment: [
    { logic: 'Why sediment matters', detail: 'The sediment turns a screen into a diagnosis — RBC casts send you toward glomerulonephritis, muddy-brown casts toward ATN, fatty casts toward nephrotic syndrome. It confirms dipstick findings ([[urinalysis-physical-chemical]]); crystal type follows urine chemistry/pH ([[urine-biochemical-composition]]); casts arise from Tamm–Horsfall protein in the distal nephron ([[nephron-kidney-histology]]). Haematuria can also be urothelial ([[lower-urinary-tract-histology]]).' },
  ],

  mnemonics: [
    { hook: 'Casts name the disease: "RBC = glomerulonephritis, WBC = pyelonephritis, Muddy-brown = ATN, Fatty = nephrotic, Waxy/Broad = CKD"', expansion: ['Hyaline = non-specific/normal', 'Casts = renal origin (form distally)'] },
    { hook: 'Crystals by pH: "Acid → urate/oxalate; Alkaline → struvite/phosphate"', expansion: ['Struvite = coffin-lid, urease bacteria', 'Cystine = hexagonal (cystinuria)'] },
  ],

  traps: [
    {
      questionCategory: 'Localising value of casts',
      wrongInstinct: 'Casts can come from anywhere in the urinary tract, including the bladder',
      rightAnswer: 'Casts form only within the renal tubules (a Tamm–Horsfall protein matrix, in the distal nephron), so their presence LOCALISES disease to the KIDNEY — they never arise in the bladder or lower tract',
      why: 'This is what makes RBC casts so valuable: red cells alone could be from anywhere, but red cells in a cast prove glomerular bleeding, distinguishing nephritic disease from a bladder stone or tumour.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The urinary finding most specific for glomerulonephritis (a nephritic process) is:',
      options: [
        { id: 'a', text: 'Hyaline casts' },
        { id: 'b', text: 'Red blood cell casts' },
        { id: 'c', text: 'Calcium oxalate crystals' },
        { id: 'd', text: 'Squamous epithelial cells' },
      ],
      answerId: 'b',
      explanation: 'Red cell casts form only in the tubule and contain red cells that leaked through an inflamed glomerulus — they localise bleeding to the glomerulus and are the classic marker of glomerulonephritis.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'Casts are not found originating from which part of the nephron?',
      options: [
        { id: 'a', text: 'The distal convoluted tubule' },
        { id: 'b', text: 'The collecting duct' },
        { id: 'c', text: 'The proximal tubule and loop of Henle' },
        { id: 'd', text: 'The late distal nephron generally' },
      ],
      answerId: 'c',
      explanation: 'Casts form where flow slows and Tamm–Horsfall protein gels — the distal tubule and collecting duct. The proximal tubule and loop of Henle are not sites of cast formation.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Urine casts and their meaning', svg: URINE_CASTS, caption: 'Cast types (RBC, WBC, granular, fatty, waxy/broad, hyaline) and the disease each indicates; also crystals and cells.' },
  ],
};

export default urineMicroscopySediment;
