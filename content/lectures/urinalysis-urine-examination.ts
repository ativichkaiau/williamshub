import type { Lecture } from '../../lib/types';

export const urinalysisUrineExamination: Lecture = {
  id: 'urinalysis-urine-examination',
  title: 'Urine Collection & Examination',
  system: 'renal',
  source: 'L3 — Urine Collection & Examination',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L3 Urinalysis' },
    { kind: 'mechanism', label: 'Dipstick, microscopy & casts' },
    { kind: 'exam', label: 'Casts localise disease' },
  ],

  highYield: [
    'Urinalysis has three parts: PHYSICAL (colour, clarity, specific gravity/osmolality), CHEMICAL (dipstick), and MICROSCOPIC (sediment). Collection matters — a MIDSTREAM CLEAN-CATCH minimises contamination; the FIRST morning sample is most concentrated; suprapubic aspiration/catheter samples avoid contamination when needed. Delay causes cell lysis and bacterial overgrowth.',
    'DIPSTICK: PROTEIN (albumin — glomerular disease; misses light chains/microalbuminuria — use albumin:creatinine ratio); BLOOD (haematuria or, if no red cells seen, haemoglobin/myoglobin); LEUKOCYTE ESTERASE + NITRITE (UTI); GLUCOSE (diabetes/low renal threshold); KETONES; pH; specific gravity; bilirubin/urobilinogen. Dipstick is a screening tool confirmed by microscopy/quantitation.',
    'MICROSCOPY of the sediment is powerful for localisation. CASTS (cylindrical moulds of Tamm-Horsfall protein forming in tubules → indicate a RENAL/parenchymal source): RED-CELL casts = GLOMERULONEPHRITIS (nephritic); WHITE-CELL casts = PYELONEPHRITIS/interstitial nephritis; "MUDDY-BROWN" granular casts = acute tubular necrosis; FATTY casts / oval fat bodies = NEPHROTIC syndrome; hyaline casts = non-specific/concentrated urine; broad/waxy casts = chronic kidney disease.',
    'CRYSTALS hint at stones/metabolic state (calcium oxalate = envelope/dumbbell; uric acid; struvite = coffin-lid — Proteus/alkaline; cystine = hexagonal). DYSMORPHIC red cells and red-cell casts point to a GLOMERULAR source of haematuria, whereas isomorphic RBCs suggest a lower-tract/urologic source (stone, tumour) — a key branch point in evaluating haematuria.',
    '**The take-home: urinalysis = physical + dipstick (protein/blood/LE-nitrite/glucose) + microscopy; CASTS localise disease — RBC casts = glomerulonephritis, WBC casts = pyelonephritis, muddy-brown granular = ATN, fatty = nephrotic; dysmorphic RBCs/RBC casts = glomerular haematuria vs isomorphic = urologic.** These findings underpin the glomerular ([[glomerular-disease-overview]], [[nephrotic-syndrome]], [[nephritic-syndrome]]) and AKI ([[acute-kidney-injury]]) syndromes; UTI markers link to [[uti-pathogenesis-microbiology]].',
  ],

  mechanism: {
    title: 'Physical + dipstick + microscopy; casts localise (RBC=GN, WBC=pyelo, muddy-brown=ATN, fatty=nephrotic); dysmorphic RBC=glomerular',
    steps: [
      { id: 's1', label: 'Collection: midstream clean-catch (or SPA/catheter); first morning = concentrated', emphasis: 'key' },
      { id: 's2', label: 'Dipstick: protein, blood, leukocyte esterase+nitrite, glucose, pH, SG', emphasis: 'key' },
      { id: 's3', label: 'RBC casts = glomerulonephritis; WBC casts = pyelonephritis/interstitial nephritis', emphasis: 'key' },
      { id: 's4', label: 'Muddy-brown granular casts = ATN; fatty casts/oval fat bodies = nephrotic', emphasis: 'key' },
      { id: 's5', label: 'Dysmorphic RBCs/RBC casts = glomerular haematuria; isomorphic = urologic (stone/tumour)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Red-cell casts and dysmorphic red cells', mechanism: 'Glomerulonephritis (nephritic — glomerular bleeding)', significance: 'key' },
    { sign: 'White-cell casts', mechanism: 'Pyelonephritis or interstitial nephritis', significance: 'key' },
    { sign: 'Muddy-brown granular casts in acute kidney injury', mechanism: 'Acute tubular necrosis', significance: 'key' },
    { sign: 'Fatty casts / oval fat bodies with heavy proteinuria', mechanism: 'Nephrotic syndrome', significance: 'key' },
    { sign: 'Isomorphic red cells without casts', mechanism: 'Lower-tract/urologic bleeding (stone, tumour)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The cast indicating glomerulonephritis', meaning: 'Red-cell (RBC) casts' },
    { clue: 'The cast indicating acute tubular necrosis', meaning: 'Muddy-brown granular casts' },
    { clue: 'The finding localising haematuria to the glomerulus', meaning: 'Dysmorphic red cells and red-cell casts' },
    { clue: 'The preferred routine collection method', meaning: 'Midstream clean-catch specimen' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Urinalysis is the cheapest, fastest window onto renal disease: casts localise the process (RBC casts = glomerulonephritis, WBC casts = pyelonephritis, muddy-brown = ATN, fatty = nephrotic), and dysmorphic vs isomorphic red cells separate glomerular from urologic haematuria — directing the entire work-up. These findings feed the glomerular syndromes ([[glomerular-disease-overview]], [[nephrotic-syndrome]], [[nephritic-syndrome]]) and AKI evaluation ([[acute-kidney-injury]]); dipstick LE/nitrite drive UTI diagnosis ([[uti-pathogenesis-microbiology]]).' },
  ],

  mnemonics: [
    { hook: 'Casts localise: "RBC = glomerulonephritis, WBC = pyelonephritis, muddy-brown = ATN, fatty = nephrotic"', expansion: ['Casts = renal/parenchymal source', 'Broad/waxy = CKD'] },
    { hook: '"Dysmorphic RBC/RBC casts = glomerular; isomorphic = urologic (stone/tumour)"', expansion: ['Midstream clean-catch', 'Dipstick screens, microscopy confirms'] },
  ],

  traps: [
    {
      questionCategory: 'Glomerular vs urologic haematuria',
      wrongInstinct: 'Blood on urine dipstick always means a stone or bladder problem',
      rightAnswer: 'The SOURCE of haematuria is distinguished by the microscopy: DYSMORPHIC red cells and RED-CELL CASTS (± proteinuria) indicate a GLOMERULAR source (glomerulonephritis) needing a nephrology/renal work-up, whereas ISOMORPHIC (normal-shaped) red cells without casts suggest a LOWER-tract/urologic source (stone, tumour, infection) needing urologic imaging/cystoscopy',
      why: 'RBC casts and dysmorphic cells reroute the work-up entirely (glomerular vs urologic), so treating all haematuria as urologic would miss glomerulonephritis — and vice versa.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Red-cell casts in the urine sediment localise the source of bleeding/inflammation to the:',
      options: [
        { id: 'a', text: 'Bladder' },
        { id: 'b', text: 'Glomerulus (glomerulonephritis)' },
        { id: 'c', text: 'Urethra' },
        { id: 'd', text: 'Prostate' },
      ],
      answerId: 'b',
      explanation: 'Casts form in the renal tubules, so their presence indicates a renal parenchymal source. Red-cell casts specifically indicate glomerular bleeding (glomerulonephritis/nephritic syndrome). White-cell casts indicate pyelonephritis/interstitial nephritis, and muddy-brown granular casts indicate acute tubular necrosis.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Muddy-brown granular casts in a patient with acute kidney injury are characteristic of:',
      options: [
        { id: 'a', text: 'Prerenal azotaemia' },
        { id: 'b', text: 'Acute tubular necrosis' },
        { id: 'c', text: 'Nephrotic syndrome' },
        { id: 'd', text: 'Lower urinary tract infection' },
      ],
      answerId: 'b',
      explanation: 'Muddy-brown granular ("dirty brown") casts are the classic urinary finding of acute tubular necrosis, reflecting sloughed tubular epithelial debris. Nephrotic syndrome shows fatty casts/oval fat bodies, and pure prerenal azotaemia typically has a bland sediment with hyaline casts.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default urinalysisUrineExamination;
