import type { Lecture } from '../../lib/types';

export const glomerularDiseaseOverview: Lecture = {
  id: 'glomerular-disease-overview',
  title: 'Introduction to Glomerular Disease',
  system: 'renal',
  source: 'L14 — Introduction to Glomerular Disease',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L14 Glomerular Disease' },
    { kind: 'mechanism', label: 'Nephrotic vs nephritic framework' },
    { kind: 'exam', label: 'Approach & biopsy patterns' },
  ],

  highYield: [
    '**Glomerular diseases injure the filtration unit and present along a SPECTRUM between two poles: NEPHROTIC (podocyte injury → heavy proteinuria, bland urine — [[nephrotic-syndrome]]) and NEPHRITIC (inflammation → haematuria, red-cell casts, hypertension — [[nephritic-syndrome]]). The first diagnostic step is to place a patient on this spectrum using urinalysis and quantified proteinuria.**',
    '**The filtration barrier has three layers — fenestrated ENDOTHELIUM, glomerular BASEMENT MEMBRANE, and PODOCYTE foot processes with slit diaphragms — and its negative charge/size selectivity normally retains albumin and cells. Injury to PODOCYTES → proteinuria (nephrotic); injury with INFLAMMATION/immune deposits → haematuria (nephritic). The site of immune deposits (subepithelial, subendothelial, mesangial) predicts the disease.**',
    '**A structured work-up: URINALYSIS (protein, blood, casts — dysmorphic RBC/RBC casts = glomerular), QUANTIFY proteinuria (ACR/PCR/24-h), assess renal function/BP, then SEROLOGY (complement C3/C4, ANA/dsDNA, ANCA, anti-GBM, ASO/anti-DNase B, hepatitis, anti-PLA2R) and often renal BIOPSY (light microscopy + immunofluorescence + electron microscopy) to define the lesion.**',
    '**COMPLEMENT helps triage nephritic disease: LOW C3 in post-streptococcal GN, lupus nephritis, and membranoproliferative GN; NORMAL complement in IgA nephropathy, anti-GBM and ANCA vasculitis. General management principles: control BLOOD PRESSURE and proteinuria (ACEi/ARB), treat the specific cause (immunosuppression where indicated), and monitor for progression to CKD.**',
    '**The take-home: glomerular disease = a NEPHROTIC (podocyte, heavy proteinuria, bland) ↔ NEPHRITIC (inflammatory, haematuria/RBC casts, HTN) spectrum; work up with urinalysis + proteinuria + serology (complement, ANA/ANCA/anti-GBM/anti-PLA2R) ± biopsy; low vs normal complement narrows the nephritic differential; treat with ACEi/ARB + cause-specific therapy.** Details are in [[nephrotic-syndrome]] and [[nephritic-syndrome]]; casts in [[urinalysis-urine-examination]].',
  ],

  mechanism: {
    title: 'Nephrotic (podocyte/proteinuria) ↔ nephritic (inflammation/haematuria) spectrum; work up urinalysis+proteinuria+serology(±biopsy); complement triages',
    steps: [
      { id: 's1', label: 'Spectrum: nephrotic (podocyte, heavy proteinuria, bland) ↔ nephritic (inflammation, haematuria/RBC casts)', emphasis: 'key' },
      { id: 's2', label: 'Barrier: endothelium + GBM + podocyte slit diaphragm; podocyte injury → proteinuria', emphasis: 'key' },
      { id: 's3', label: 'Work-up: urinalysis, quantify proteinuria (ACR/PCR), function/BP', emphasis: 'key' },
      { id: 's4', label: 'Serology (C3/C4, ANA/dsDNA, ANCA, anti-GBM, anti-PLA2R, ASO) ± renal biopsy (LM/IF/EM)', emphasis: 'key' },
      { id: 's5', label: 'Low C3: post-strep, lupus, MPGN; normal C3: IgA, anti-GBM, ANCA; treat with ACEi/ARB + cause', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Heavy proteinuria with bland urine and oedema', mechanism: 'Nephrotic end of the spectrum (podocyte injury)', significance: 'key' },
    { sign: 'Haematuria with red-cell casts and hypertension', mechanism: 'Nephritic end (glomerular inflammation)', significance: 'key' },
    { sign: 'Low serum complement (C3) in glomerulonephritis', mechanism: 'Post-strep, lupus nephritis or MPGN', significance: 'key' },
    { sign: 'Normal complement with crescentic GN and positive ANCA', mechanism: 'Pauci-immune (ANCA) vasculitis', significance: 'supportive' },
    { sign: 'Renal biopsy with immunofluorescence and electron microscopy', mechanism: 'Defining the glomerular lesion and deposit location', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The two poles of the glomerular disease spectrum', meaning: 'Nephrotic and nephritic' },
    { clue: 'The three layers of the glomerular filtration barrier', meaning: 'Endothelium, basement membrane, podocyte foot processes' },
    { clue: 'The serologic test that triages nephritic causes', meaning: 'Complement (low C3: post-strep/lupus/MPGN; normal: IgA/anti-GBM/ANCA)' },
    { clue: 'The definitive test defining the glomerular lesion', meaning: 'Renal biopsy (light microscopy + immunofluorescence + electron microscopy)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Framing glomerular disease as a nephrotic–nephritic spectrum organises the entire approach: urinalysis and proteinuria place the patient, serology (especially complement, plus ANA/ANCA/anti-GBM/anti-PLA2R) narrows the cause, and biopsy defines the lesion — guiding whether to use ACEi/ARB alone or add immunosuppression, and predicting CKD risk. The two syndromes are detailed in [[nephrotic-syndrome]] and [[nephritic-syndrome]]; the urinary clues come from [[urinalysis-urine-examination]].' },
  ],

  mnemonics: [
    { hook: '"Nephrotic = protein (podocyte, bland); Nephritic = blood (inflammation, RBC casts, HTN)"', expansion: ['Place patient on the spectrum first', 'Podocyte injury = proteinuria'] },
    { hook: 'Complement: "LOW = post-strep, Lupus, MPGN; NORMAL = IgA, anti-GBM, ANCA"', expansion: ['Biopsy = LM + IF + EM', 'ACEi/ARB reduce proteinuria'] },
  ],

  traps: [
    {
      questionCategory: 'Using complement to narrow glomerulonephritis',
      wrongInstinct: 'Serum complement is not useful in working up glomerulonephritis',
      rightAnswer: 'Serum COMPLEMENT is a key triage test in nephritic disease: it is LOW in post-streptococcal GN, LUPUS nephritis and membranoproliferative GN (consumptive/immune-complex processes) but NORMAL in IgA nephropathy, anti-GBM disease and ANCA-associated vasculitis — so a low vs normal C3 substantially narrows the differential before biopsy',
      why: 'Complement level is a cheap, powerful discriminator among the causes of glomerulonephritis, steering serologic and biopsy work-up and sometimes urgency (e.g. low complement in active lupus nephritis).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The first step in evaluating suspected glomerular disease is to determine whether the presentation is predominantly:',
      options: [
        { id: 'a', text: 'Pre-renal or post-renal' },
        { id: 'b', text: 'Nephrotic or nephritic (using urinalysis and quantified proteinuria)' },
        { id: 'c', text: 'Acute tubular necrosis or interstitial nephritis' },
        { id: 'd', text: 'Cystic or solid' },
      ],
      answerId: 'b',
      explanation: 'Glomerular diseases lie on a nephrotic–nephritic spectrum, so the first step is to place the patient using urinalysis (bland heavy proteinuria vs active sediment with red-cell casts) and quantified proteinuria, which then directs serology and biopsy.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A low serum complement (C3) in a patient with glomerulonephritis is characteristic of which group of causes?',
      options: [
        { id: 'a', text: 'IgA nephropathy, anti-GBM disease and ANCA vasculitis' },
        { id: 'b', text: 'Post-streptococcal GN, lupus nephritis and membranoproliferative GN' },
        { id: 'c', text: 'Minimal change disease' },
        { id: 'd', text: 'Pre-renal azotaemia' },
      ],
      answerId: 'b',
      explanation: 'Low C3 (complement consumption) occurs in post-streptococcal glomerulonephritis, lupus nephritis and membranoproliferative GN. Complement is typically normal in IgA nephropathy, anti-GBM disease and ANCA-associated vasculitis — so the complement level helps narrow the nephritic differential.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default glomerularDiseaseOverview;
