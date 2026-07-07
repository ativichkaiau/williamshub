import type { Lecture } from '../../lib/types';

export const glomerularDiseaseImmuneMechanisms: Lecture = {
  id: 'glomerular-disease-immune-mechanisms',
  title: 'Immune Mechanisms of Glomerular Injury',
  system: 'renal',
  source: 'L14 — Introduction to Glomerular Disease',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L14 GN mechanisms' },
    { kind: 'mechanism', label: 'Immune complex / pauci-immune / anti-GBM' },
    { kind: 'exam', label: 'IF patterns; complement; crescents' },
  ],

  highYield: [
    'Glomerular disease is usefully split into two clinical syndromes on a spectrum. NEPHROTIC = podocyte/filtration-barrier injury → HEAVY proteinuria (>3.5 g/day), hypoalbuminaemia, oedema, hyperlipidaemia, with a BLAND sediment (few cells). NEPHRITIC = inflammatory/proliferative injury → HAEMATURIA with dysmorphic RBCs/RBC CASTS, variable proteinuria, HYPERTENSION and reduced GFR. Many diseases sit between (mixed).',
    'Immune injury has three IMMUNOFLUORESCENCE patterns that organise the differential. (1) GRANULAR ("lumpy-bumpy") deposits = IMMUNE-COMPLEX disease (post-infectious GN, IgA nephropathy, lupus nephritis, membranous, MPGN). (2) LINEAR IgG = ANTI-GBM disease (Goodpasture — antibodies to type IV collagen; lung + kidney). (3) SCANT/absent staining = PAUCI-IMMUNE = ANCA-associated vasculitis (GPA, MPA, EGPA).',
    'COMPLEMENT levels help: LOW complement narrows nephritic causes to post-streptococcal GN, lupus nephritis, MPGN/C3 glomerulopathy, and cryoglobulinaemia; NORMAL complement suggests IgA nephropathy, anti-GBM disease and ANCA vasculitis. RAPIDLY PROGRESSIVE GN (RPGN) — a nephritic illness with renal failure over days–weeks — corresponds to CRESCENTS on biopsy and can arise from any of the three mechanisms; it is a nephrological EMERGENCY needing urgent immunosuppression.',
    'So the work-up of glomerular disease integrates: URINE (proteinuria quantity, sediment/casts), BLOODS (renal function, complement, and serologies — anti-PLA2R, ANA/anti-dsDNA, ANCA, anti-GBM, hepatitis, cryoglobulins), and BIOPSY (light microscopy, immunofluorescence pattern, electron microscopy). This localises the lesion and its immune mechanism, guiding treatment (supportive RAAS blockade ± targeted immunosuppression).',
    '**The take-home: NEPHROTIC (heavy proteinuria, bland) vs NEPHRITIC (haematuria/RBC casts, hypertension); three IF patterns — GRANULAR (immune complex), LINEAR (anti-GBM), PAUCI-IMMUNE (ANCA); complement (low = post-strep/lupus/MPGN; normal = IgA/anti-GBM/ANCA); CRESCENTS = RPGN = emergency. Serologies + biopsy localise the mechanism.** The overview is [[glomerular-disease-overview]]; nephrotic is [[nephrotic-syndrome]]; nephritic is [[nephritic-syndrome]]; podocytopathies are [[minimal-change-fsgs]].',
  ],

  mechanism: {
    title: 'Nephrotic vs nephritic; IF patterns (granular=immune complex, linear=anti-GBM, pauci-immune=ANCA); complement (low vs normal); crescents=RPGN emergency; serologies+biopsy localise',
    steps: [
      { id: 's1', label: 'Nephrotic = heavy proteinuria + bland sediment; nephritic = haematuria/RBC casts + HTN', emphasis: 'key' },
      { id: 's2', label: 'IF granular = immune complex (post-strep/IgA/lupus/membranous/MPGN)', emphasis: 'key' },
      { id: 's3', label: 'IF linear IgG = anti-GBM (Goodpasture); pauci-immune = ANCA vasculitis', emphasis: 'key' },
      { id: 's4', label: 'Complement: low = post-strep/lupus/MPGN; normal = IgA/anti-GBM/ANCA', emphasis: 'key' },
      { id: 's5', label: 'Crescents = rapidly progressive GN = emergency → urgent immunosuppression', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Heavy proteinuria with a bland urinary sediment', mechanism: 'Nephrotic (podocyte/barrier injury)', significance: 'key' },
    { sign: 'Haematuria with RBC casts, hypertension and reduced GFR', mechanism: 'Nephritic (proliferative injury)', significance: 'key' },
    { sign: 'Linear IgG along the GBM with lung haemorrhage', mechanism: 'Anti-GBM (Goodpasture) disease', significance: 'key' },
    { sign: 'Pauci-immune crescentic GN with positive ANCA', mechanism: 'ANCA-associated vasculitis', significance: 'key' },
    { sign: 'Crescents on biopsy with renal failure over days', mechanism: 'Rapidly progressive GN (emergency)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The syndrome with heavy proteinuria and bland sediment', meaning: 'Nephrotic syndrome' },
    { clue: 'The immunofluorescence pattern of anti-GBM disease', meaning: 'Linear IgG along the GBM' },
    { clue: 'The immunofluorescence pattern of ANCA vasculitis', meaning: 'Pauci-immune (scant/absent staining)' },
    { clue: 'The biopsy finding defining rapidly progressive GN', meaning: 'Crescents' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Framing glomerular disease as nephrotic vs nephritic, then classifying immune injury by immunofluorescence pattern (granular immune-complex, linear anti-GBM, pauci-immune ANCA) and complement level, organises the differential and directs serology and biopsy. Identifying crescentic/rapidly progressive GN as an emergency prompts urgent immunosuppression (and plasma exchange for anti-GBM/severe ANCA) to salvage renal function. Treatment ranges from supportive RAAS blockade to targeted immunosuppression. The overview is [[glomerular-disease-overview]]; nephrotic is [[nephrotic-syndrome]]; nephritic is [[nephritic-syndrome]].' },
  ],

  mnemonics: [
    { hook: 'IF patterns: "Granular = immune complex, Linear = anti-GBM, Pauci = ANCA"', expansion: ['Nephrotic = bland/heavy protein', 'Nephritic = RBC casts/HTN'] },
    { hook: 'Complement: "Low = post-strep/Lupus/MPGN; Normal = IgA/anti-GBM/ANCA"', expansion: ['Crescents = RPGN = emergency', 'Serologies + biopsy localise'] },
  ],

  traps: [
    {
      questionCategory: 'Recognising rapidly progressive GN',
      wrongInstinct: 'Nephritic syndrome can always be worked up slowly as an outpatient',
      rightAnswer: 'A nephritic picture with RAPIDLY rising creatinine over days–weeks is RAPIDLY PROGRESSIVE GN (crescentic GN) — a nephrological EMERGENCY: it can arise from any immune mechanism (immune-complex, anti-GBM, or pauci-immune ANCA), and delayed diagnosis/immunosuppression (± plasma exchange for anti-GBM/severe ANCA) leads to irreversible renal failure, so it needs urgent serology and biopsy, not a leisurely work-up',
      why: 'Crescentic GN destroys nephrons within weeks, so treating it as routine nephritis loses the narrow window in which urgent immunosuppression can preserve kidney function.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Linear IgG deposition along the glomerular basement membrane on immunofluorescence, with pulmonary haemorrhage, indicates:',
      options: [
        { id: 'a', text: 'Immune-complex glomerulonephritis' },
        { id: 'b', text: 'Anti-GBM (Goodpasture) disease' },
        { id: 'c', text: 'Pauci-immune ANCA vasculitis' },
        { id: 'd', text: 'Minimal change disease' },
      ],
      answerId: 'b',
      explanation: 'Linear IgG along the GBM reflects antibodies to type IV collagen (anti-GBM disease); when it affects both lung and kidney it is Goodpasture syndrome. Granular deposits indicate immune-complex disease, and scant/absent staining indicates pauci-immune (ANCA) vasculitis.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A low serum complement in a nephritic patient narrows the differential toward:',
      options: [
        { id: 'a', text: 'IgA nephropathy, anti-GBM disease and ANCA vasculitis' },
        { id: 'b', text: 'Post-streptococcal GN, lupus nephritis and MPGN/C3 glomerulopathy' },
        { id: 'c', text: 'Minimal change disease' },
        { id: 'd', text: 'Thin basement membrane disease' },
      ],
      answerId: 'b',
      explanation: 'Low-complement nephritic diseases include post-streptococcal GN, lupus nephritis, and MPGN/C3 glomerulopathy (and cryoglobulinaemia), whereas IgA nephropathy, anti-GBM disease and ANCA vasculitis typically have normal complement — so complement helps triage the causes.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default glomerularDiseaseImmuneMechanisms;
