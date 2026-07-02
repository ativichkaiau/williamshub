import type { Lecture } from '../../lib/types';

export const nephrolithiasisUrolithiasis: Lecture = {
  id: 'nephrolithiasis-urolithiasis',
  title: 'Nephrolithiasis (Urinary Stones)',
  system: 'renal',
  source: 'L4 — Urinary Tract Pathology',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L4 Stones' },
    { kind: 'mechanism', label: 'Supersaturation; stone types' },
    { kind: 'exam', label: 'Calcium oxalate; struvite; radiolucent urate' },
  ],

  highYield: [
    '**Urinary stones form when solutes SUPERSATURATE the urine (high solute excretion, low urine volume, or a pH that reduces solubility) and lack of inhibitors (citrate). CALCIUM stones are commonest (~75–80%, mostly calcium OXALATE, some phosphate) — associated with HYPERCALCIURIA, hyperoxaluria, hypocitraturia and low urine volume; they are RADIO-OPAQUE. Classic presentation: severe colicky loin-to-groin pain + haematuria.**',
    '**STRUVITE (magnesium ammonium phosphate) stones form in ALKALINE urine from UREASE-producing organisms (PROTEUS, Klebsiella) — they enlarge into STAGHORN calculi filling the collecting system and are an infection (not metabolic) stone. URIC ACID stones form in ACIDIC, concentrated urine (gout, high purine turnover, tumour lysis) and are RADIOLUCENT on plain film (seen on CT/US) — potentially DISSOLVED by urine alkalinisation.**',
    '**CYSTINE stones occur in the inherited defect CYSTINURIA (impaired tubular reabsorption of dibasic amino acids) — hexagonal crystals, recurrent stones from childhood. Diagnosis is by NON-CONTRAST CT (gold standard) or ultrasound; metabolic work-up (24-h urine calcium/oxalate/citrate/urate, stone analysis) guides prevention.**',
    '**MANAGEMENT: analgesia (NSAIDs), fluids, and medical expulsive therapy (alpha-blocker) for small distal stones; larger/obstructing/infected stones need urology (ESWL, ureteroscopy, PCNL). An OBSTRUCTED, INFECTED stone (fever + obstruction) is a UROLOGICAL EMERGENCY needing urgent decompression. Prevention: high fluid intake, dietary changes, thiazide (hypercalciuria), citrate (hypocitraturia/urate), allopurinol (urate), and treating infection (struvite).**',
    '**The take-home: stones from supersaturation — CALCIUM oxalate (commonest, radio-opaque, hypercalciuria/low citrate), STRUVITE (urease Proteus, alkaline, staghorn, infection), URIC ACID (acidic urine, RADIOLUCENT, dissolvable by alkalinisation), CYSTINE (cystinuria). Non-contrast CT diagnoses; obstructed+infected = emergency; prevent with fluids/thiazide/citrate.** The broader pathology is [[urinary-tract-pathology]]; obstruction is [[obstructive-uropathy-hydronephrosis]]; crystals are [[urine-microscopy-casts-crystals]].',
  ],

  mechanism: {
    title: 'Supersaturation → stones: calcium oxalate (commonest, radio-opaque), struvite (urease/alkaline/staghorn), uric acid (acidic, radiolucent, dissolvable), cystine (cystinuria); CT diagnoses',
    steps: [
      { id: 's1', label: 'Supersaturation + low volume + low citrate/inhibitors → crystallisation', emphasis: 'key' },
      { id: 's2', label: 'Calcium oxalate = commonest, radio-opaque (hypercalciuria/hyperoxaluria)', emphasis: 'key' },
      { id: 's3', label: 'Struvite = urease Proteus, alkaline urine → staghorn (infection stone)', emphasis: 'key' },
      { id: 's4', label: 'Uric acid = acidic urine, RADIOLUCENT, dissolvable by alkalinisation', emphasis: 'key' },
      { id: 's5', label: 'Obstructed + infected stone (fever) = emergency → urgent decompression', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Severe colicky loin-to-groin pain with haematuria', mechanism: 'Ureteric stone (renal colic)', significance: 'key' },
    { sign: 'Staghorn calculus with alkaline urine and Proteus', mechanism: 'Struvite (infection) stone', significance: 'key' },
    { sign: 'Radiolucent stone on plain film, visible on CT, in a gout patient', mechanism: 'Uric acid stone (acidic urine)', significance: 'key' },
    { sign: 'Fever with an obstructing ureteric stone', mechanism: 'Obstructed infected system — urological emergency', significance: 'key' },
    { sign: 'Recurrent stones from childhood with hexagonal crystals', mechanism: 'Cystinuria', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The commonest stone composition', meaning: 'Calcium oxalate (radio-opaque)' },
    { clue: 'The stone from urease-producing infection', meaning: 'Struvite (staghorn)' },
    { clue: 'The radiolucent stone dissolvable by alkalinisation', meaning: 'Uric acid' },
    { clue: 'The gold-standard imaging for stones', meaning: 'Non-contrast CT KUB' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Stone type dictates prevention and treatment: calcium oxalate (fluids, thiazide for hypercalciuria, citrate), struvite (eradicate infection, remove the stone surgically as antibiotics alone fail), uric acid (alkalinise the urine to dissolve, allopurinol), and cystine (fluids, alkalinisation, thiol agents). Acutely, analgesia/fluids and medical expulsive therapy suit small stones, but an obstructed, infected stone (fever + obstruction) is an emergency needing urgent decompression. Non-contrast CT is the diagnostic gold standard. Obstruction physiology is [[obstructive-uropathy-hydronephrosis]]; crystals are [[urine-microscopy-casts-crystals]]; overview [[urinary-tract-pathology]].' },
  ],

  mnemonics: [
    { hook: 'Stones: "COol STrUC" — Calcium Oxalate (opaque), STruvite (urease/alkaline), Uric acid (radiolucent), Cystine', expansion: ['Uric acid dissolves w/ alkalinisation', 'Struvite = staghorn/infection'] },
    { hook: '"Fever + obstruction = emergency decompression"', expansion: ['Non-contrast CT diagnoses', 'Thiazide for hypercalciuria'] },
  ],

  traps: [
    {
      questionCategory: 'The obstructed, infected stone',
      wrongInstinct: 'A patient with a stone and a fever just needs antibiotics and analgesia',
      rightAnswer: 'An OBSTRUCTING stone with signs of INFECTION (fever, systemic upset, pyuria) is an obstructed, infected collecting system — a UROLOGICAL EMERGENCY (risk of pyonephrosis and sepsis) requiring URGENT DECOMPRESSION (ureteric stent or percutaneous nephrostomy) in addition to antibiotics; relying on antibiotics alone while the system stays obstructed can be fatal',
      why: 'Pus under pressure behind an obstructing stone will not clear with antibiotics alone and can progress to overwhelming sepsis; urgent drainage is the life-saving step, making this a "cannot-miss" emergency.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A staghorn calculus forming in persistently alkaline urine, associated with urease-producing organisms such as Proteus, is composed of:',
      options: [
        { id: 'a', text: 'Calcium oxalate' },
        { id: 'b', text: 'Struvite (magnesium ammonium phosphate)' },
        { id: 'c', text: 'Uric acid' },
        { id: 'd', text: 'Cystine' },
      ],
      answerId: 'b',
      explanation: 'Struvite (magnesium ammonium phosphate) stones form in alkaline urine created by urease-producing organisms (Proteus, Klebsiella) that split urea to ammonia; they grow into staghorn calculi and are infection stones requiring surgical removal plus infection control.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which stone type is typically radiolucent on plain radiographs and may be dissolved by alkalinising the urine?',
      options: [
        { id: 'a', text: 'Uric acid' },
        { id: 'b', text: 'Calcium phosphate' },
        { id: 'c', text: 'Struvite' },
        { id: 'd', text: 'Calcium oxalate' },
      ],
      answerId: 'a',
      explanation: 'Uric acid stones form in acidic, concentrated urine (gout, high purine turnover, tumour lysis) and are radiolucent on plain film (visible on CT/US). Because their solubility rises with pH, urine alkalinisation (± allopurinol) can dissolve them — unusual among stones.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default nephrolithiasisUrolithiasis;
