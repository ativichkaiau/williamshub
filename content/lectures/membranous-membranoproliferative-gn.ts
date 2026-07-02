import type { Lecture } from '../../lib/types';

export const membranousMembranoproliferativeGn: Lecture = {
  id: 'membranous-membranoproliferative-gn',
  title: 'Membranous & Membranoproliferative GN',
  system: 'renal',
  source: 'L6 — Nephrotic & Nephritic Syndromes',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L6 Membranous/MPGN' },
    { kind: 'mechanism', label: 'Subepithelial vs subendothelial deposits' },
    { kind: 'exam', label: 'Anti-PLA2R; low complement in MPGN' },
  ],

  highYield: [
    '**MEMBRANOUS NEPHROPATHY is a leading cause of PRIMARY nephrotic syndrome in ADULTS. Immune complexes deposit in the SUBEPITHELIAL space, thickening the basement membrane ("SPIKE and dome" on silver stain; granular IgG/C3 on immunofluorescence). ~70–80% of primary cases have autoantibodies to the podocyte antigen PLA2R (anti-PLA2R) — a diagnostic/monitoring marker. Secondary causes: SLE (class V), hepatitis B, solid tumours, drugs (gold, penicillamine, NSAIDs).**',
    '**Membranous carries a notably HIGH risk of renal VEIN THROMBOSIS and other venous thromboembolism (from urinary loss of anticoagulant proteins in heavy nephrosis). Course follows a "rule of thirds" (spontaneous remission / persistent proteinuria / progression). Management: RAAS blockade + risk-stratified immunosuppression (e.g. rituximab, calcineurin inhibitors, cyclophosphamide) for high-risk disease; treat secondary causes.**',
    '**MEMBRANOPROLIFERATIVE GN (MPGN) is a pattern with mesangial proliferation and "TRAM-TRACK" (double-contour) basement membranes, presenting with MIXED nephrotic-nephritic features and often LOW SERUM COMPLEMENT. Immune-complex MPGN follows chronic antigenaemia (hepatitis C ± cryoglobulins, chronic infection, autoimmune); C3 glomerulopathy results from alternative-complement-pathway dysregulation (C3 nephritic factor).**',
    '**So among nephrotic patterns: MCD/FSGS are podocytopathies (bland, no deposits); MEMBRANOUS has SUBEPITHELIAL deposits (anti-PLA2R, thrombosis risk); MPGN has SUBENDOTHELIAL/mesangial deposits with LOW complement and a mixed picture. Immunofluorescence/electron microscopy, complement levels and serologies (anti-PLA2R, hepatitis, cryoglobulins) separate them.**',
    '**The take-home: MEMBRANOUS = adult primary nephrotic, SUBEPITHELIAL deposits, "spike and dome", anti-PLA2R, high RENAL VEIN THROMBOSIS risk (secondary: SLE/HBV/tumour/drugs). MPGN = mixed nephrotic-nephritic, "tram-track", LOW complement (hepatitis C/cryoglobulins; C3 glomerulopathy). Serology + biopsy separate them.** MCD/FSGS are [[minimal-change-fsgs]]; the nephrotic overview is [[nephrotic-syndrome]]; glomerular mechanisms are [[glomerular-disease-immune-mechanisms]].',
  ],

  mechanism: {
    title: 'Membranous (subepithelial deposits, anti-PLA2R, spike-and-dome, renal vein thrombosis) vs MPGN (subendothelial/mesangial, tram-track, low complement, mixed nephrotic-nephritic)',
    steps: [
      { id: 's1', label: 'Membranous: subepithelial immune complexes → GBM thickening (spike & dome)', emphasis: 'key' },
      { id: 's2', label: 'Primary membranous → anti-PLA2R; secondary: SLE/HBV/tumour/drugs', emphasis: 'key' },
      { id: 's3', label: 'Membranous → high renal vein thrombosis/VTE risk', emphasis: 'danger' },
      { id: 's4', label: 'MPGN: subendothelial/mesangial deposits → tram-track, low complement', emphasis: 'key' },
      { id: 's5', label: 'MPGN causes: hepatitis C/cryoglobulins; C3 glomerulopathy (alt pathway)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Adult nephrotic syndrome with subepithelial deposits and positive anti-PLA2R', mechanism: 'Primary membranous nephropathy', significance: 'key' },
    { sign: 'Flank pain and worsening proteinuria in nephrotic membranous', mechanism: 'Renal vein thrombosis', significance: 'key' },
    { sign: '"Tram-track" double-contour GBM with low complement', mechanism: 'Membranoproliferative GN', significance: 'key' },
    { sign: 'MPGN with hepatitis C and cryoglobulinaemia', mechanism: 'Immune-complex MPGN', significance: 'supportive' },
    { sign: 'Membranous pattern with SLE serology (class V lupus nephritis)', mechanism: 'Secondary membranous', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The autoantibody in primary membranous nephropathy', meaning: 'Anti-PLA2R' },
    { clue: 'The nephrotic pattern with the highest renal vein thrombosis risk', meaning: 'Membranous nephropathy' },
    { clue: 'The complement level in MPGN', meaning: 'Low (C3 ± C4)' },
    { clue: 'The infection classically causing immune-complex MPGN', meaning: 'Hepatitis C (± cryoglobulins)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'These patterns are distinguished by biopsy (deposit location), complement and serology, which drives treatment: membranous is confirmed by anti-PLA2R and managed with RAAS blockade plus risk-stratified immunosuppression (rituximab, calcineurin inhibitors, cyclophosphamide) and thromboprophylaxis given the high renal-vein-thrombosis risk; MPGN prompts a hunt for hepatitis C/cryoglobulins or complement dysregulation (C3 glomerulopathy) and treatment of the cause. MCD/FSGS are [[minimal-change-fsgs]]; nephrotic overview [[nephrotic-syndrome]]; nephritic disease is [[nephritic-syndrome]].' },
  ],

  mnemonics: [
    { hook: '"Membranous = suBepithelial, anti-PLA2R, Blood clots (renal vein thrombosis)"', expansion: ['Spike & dome on silver stain', 'Secondary: SLE/HBV/tumour/drugs'] },
    { hook: '"MPGN = Tram-track + low complement (hepatitis C/cryo; C3 glomerulopathy)"', expansion: ['Subendothelial deposits', 'Mixed nephrotic-nephritic'] },
  ],

  traps: [
    {
      questionCategory: 'Nephrotic syndrome and thrombosis',
      wrongInstinct: 'New flank pain in a nephrotic patient is just musculoskeletal',
      rightAnswer: 'Nephrotic syndrome — especially MEMBRANOUS nephropathy — carries a high risk of RENAL VEIN THROMBOSIS (and other VTE) from urinary loss of anticoagulant proteins; new flank pain, haematuria, a sudden rise in proteinuria or deteriorating function should prompt evaluation for renal vein thrombosis, and high-risk nephrotic patients warrant thromboprophylaxis',
      why: 'Membranous nephropathy is the classic nephrotic cause of renal vein thrombosis, so attributing new flank pain to something benign risks missing a treatable thrombotic complication that also worsens renal function.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An adult with primary nephrotic syndrome has subepithelial immune deposits ("spike and dome") and circulating anti-PLA2R antibodies. The diagnosis is:',
      options: [
        { id: 'a', text: 'Minimal change disease' },
        { id: 'b', text: 'Membranous nephropathy' },
        { id: 'c', text: 'IgA nephropathy' },
        { id: 'd', text: 'Membranoproliferative GN' },
      ],
      answerId: 'b',
      explanation: 'Membranous nephropathy shows subepithelial immune complexes thickening the GBM ("spike and dome"); ~70–80% of primary cases have anti-PLA2R antibodies. It is a leading cause of adult primary nephrotic syndrome and carries a high renal vein thrombosis risk.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A biopsy shows "tram-track" (double-contour) basement membranes with mesangial proliferation, and serum complement is low. This pattern (MPGN) is classically associated with:',
      options: [
        { id: 'a', text: 'Hepatitis C with cryoglobulins (or complement dysregulation)' },
        { id: 'b', text: 'Steroid-responsive minimal change disease' },
        { id: 'c', text: 'Anti-GBM antibody disease' },
        { id: 'd', text: 'Thin basement membrane disease' },
      ],
      answerId: 'a',
      explanation: 'Membranoproliferative GN shows tram-track double-contour GBMs and typically low complement; immune-complex MPGN is classically driven by chronic antigenaemia such as hepatitis C (often with cryoglobulins), while C3 glomerulopathy reflects alternative-pathway complement dysregulation.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default membranousMembranoproliferativeGn;
