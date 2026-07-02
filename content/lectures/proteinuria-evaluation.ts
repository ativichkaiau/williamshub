import type { Lecture } from '../../lib/types';

export const proteinuriaEvaluation: Lecture = {
  id: 'proteinuria-evaluation',
  title: 'Proteinuria: Evaluation & Significance',
  system: 'renal',
  source: 'L8 — Urinalysis I: Physical & Chemical',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L8 Urinalysis I' },
    { kind: 'investigation', label: 'Proteinuria' },
    { kind: 'exam', label: 'Nephrotic vs nephritic' },
  ],

  highYield: [
    '**Normally almost no protein reaches the urine because the glomerular barrier (size + negative charge) holds back albumin and the proximal tubule reabsorbs the small amount filtered.** Significant proteinuria therefore signals **glomerular** damage, **tubular** dysfunction, or an **overflow** of filtered protein — the three mechanistic categories.',
    '**Glomerular proteinuria (the commonest and most important) reflects a leaky barrier and is mainly ALBUMIN** — from loss of charge/size selectivity (e.g. podocyte injury). **Tubular proteinuria** is failure to reabsorb normally filtered low-molecular-weight proteins (β2-microglobulin) in tubulointerstitial disease. **Overflow proteinuria** is an excess of a filterable protein — classically **Bence Jones (free light chains) in myeloma**.',
    '**Quantify with a spot urine protein:creatinine or albumin:creatinine ratio (ACR), or a 24-h collection. MICROALBUMINURIA (moderately increased albuminuria) is an early marker of diabetic and hypertensive kidney disease** (and cardiovascular risk) — detectable before the dipstick turns positive.',
    '**A crucial caveat: the standard dipstick detects mainly ALBUMIN and can MISS the light chains of myeloma** — so a negative dipstick with clinical suspicion needs a specific test (urine protein electrophoresis/immunofixation). Transient/benign proteinuria (fever, exercise, orthostatic) must be distinguished from persistent disease by repeat testing.',
    '**Heavy proteinuria defines the NEPHROTIC picture (>3.5 g/day → hypoalbuminaemia, oedema, hyperlipidaemia, thrombophilia), whereas the NEPHRITIC picture is haematuria + RBC casts + hypertension with milder proteinuria.** Sorting proteinuria by amount and by the accompanying sediment ([[urine-microscopy-sediment]]) points toward the underlying glomerular disease.',
  ],

  mechanism: {
    title: 'Barrier normally blocks protein; glomerular vs tubular vs overflow proteinuria',
    steps: [
      { id: 's1', label: 'Barrier (size + charge) + PCT reabsorption keep urine protein near zero', emphasis: 'key' },
      { id: 's2', label: 'Glomerular (albumin, leaky barrier) — commonest/most important', emphasis: 'key' },
      { id: 's3', label: 'Tubular (LMW proteins, failed reabsorption); Overflow (Bence Jones/myeloma)', emphasis: 'key' },
      { id: 's4', label: 'Quantify: ACR/PCR or 24-h; microalbuminuria = early diabetic/HTN marker' },
      { id: 's5', label: 'Dipstick misses light chains; nephrotic (>3.5 g) vs nephritic', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Predominantly albumin in the urine', mechanism: 'Glomerular proteinuria (barrier injury)', significance: 'key' },
    { sign: 'Low-molecular-weight proteins (β2-microglobulin)', mechanism: 'Tubular proteinuria (failed reabsorption)', significance: 'key' },
    { sign: 'Positive urine light chains with a negative dipstick', mechanism: 'Overflow (Bence Jones) proteinuria — myeloma', significance: 'key' },
    { sign: 'Microalbuminuria in a diabetic', mechanism: 'Early diabetic nephropathy (and CV risk marker)', significance: 'supportive' },
    { sign: '>3.5 g/day protein + hypoalbuminaemia + oedema', mechanism: 'Nephrotic syndrome', significance: 'key' },
  ],

  investigations: [
    { clue: 'The protein predominating in glomerular proteinuria', meaning: 'Albumin' },
    { clue: 'The proteinuria type from filtered light chains in myeloma', meaning: 'Overflow proteinuria (Bence Jones protein)' },
    { clue: 'The early marker of diabetic/hypertensive kidney disease', meaning: 'Microalbuminuria (albumin:creatinine ratio)' },
    { clue: 'Why the dipstick can miss myeloma proteinuria', meaning: 'It detects albumin, not filtered light chains' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Proteinuria is both a marker of glomerular disease and a driver of progression — reducing it (ACE-I/ARB) protects the kidney. It refines the dipstick screen of [[urinalysis-physical-chemical]] and pairs with the sediment of [[urine-microscopy-sediment]] to separate nephrotic from nephritic disease. Barrier injury traces to [[nephron-kidney-histology]]; heavy loss can complicate [[chronic-kidney-disease-uremia]].' },
  ],

  mnemonics: [
    { hook: 'Three types: "Glomerular (albumin), Tubular (LMW), Overflow (Bence Jones)"', expansion: ['Glomerular = leaky barrier', 'Overflow = myeloma light chains'] },
    { hook: 'Nephrotic vs nephritic: "nephrOtic = prOtein (>3.5 g); nephrItic = Inflammation/haematuria"', expansion: ['Nephrotic: oedema, hypoalbuminaemia', 'Nephritic: RBC casts, HTN'] },
  ],

  traps: [
    {
      questionCategory: 'Interpreting a negative dipstick for protein',
      wrongInstinct: 'A negative urine dipstick for protein rules out significant proteinuria',
      rightAnswer: 'The dipstick mainly detects ALBUMIN and can be NEGATIVE despite heavy overflow proteinuria from immunoglobulin LIGHT CHAINS (myeloma) — if suspected, order urine protein electrophoresis/immunofixation, not just a dipstick',
      why: 'Bence Jones light chains are not albumin, so they escape dipstick detection; relying on a negative dipstick can miss multiple myeloma presenting as renal disease.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with multiple myeloma has heavy proteinuria, but the urine dipstick is only trace positive. This discrepancy is because:',
      options: [
        { id: 'a', text: 'The proteinuria is glomerular albumin' },
        { id: 'b', text: 'The dipstick detects albumin but not the filtered immunoglobulin light chains (Bence Jones protein)' },
        { id: 'c', text: 'The urine is too dilute' },
        { id: 'd', text: 'The patient has tubular proteinuria' },
      ],
      answerId: 'b',
      explanation: 'Overflow proteinuria in myeloma consists of free light chains (Bence Jones protein), which the albumin-sensitive dipstick largely misses; specific tests (urine protein electrophoresis/immunofixation) are needed.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'Predominantly albuminuria (rather than low-molecular-weight proteins) indicates which mechanism of proteinuria?',
      options: [
        { id: 'a', text: 'Tubular' },
        { id: 'b', text: 'Glomerular (leaky filtration barrier)' },
        { id: 'c', text: 'Overflow' },
        { id: 'd', text: 'Post-renal' },
      ],
      answerId: 'b',
      explanation: 'Albumin loss reflects a breakdown of the glomerular barrier\'s size/charge selectivity — glomerular proteinuria. Tubular proteinuria features low-molecular-weight proteins, and overflow proteinuria features an excess filtered protein such as light chains.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default proteinuriaEvaluation;
