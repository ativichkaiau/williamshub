import type { Lecture } from '../../lib/types';

export const nephriticSyndrome: Lecture = {
  id: 'nephritic-syndrome',
  title: 'Nephritic Syndrome & Glomerulonephritis',
  system: 'renal',
  source: 'L6 — Nephrotic & Nephritic Syndromes',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L6 Nephritic' },
    { kind: 'mechanism', label: 'Glomerular inflammation' },
    { kind: 'exam', label: 'IgA, post-strep, RPGN' },
  ],

  highYield: [
    'NEPHRITIC syndrome = INFLAMMATION of the glomerulus (glomerulonephritis) → an ACTIVE urinary sediment: HAEMATURIA (often dysmorphic RBCs + RED-CELL CASTS), sub-nephrotic PROTEINURIA, HYPERTENSION, OLIGURIA and rising creatinine (azotaemia), often with OEDEMA. It is the inflammatory counterpart to nephrotic ([[nephrotic-syndrome]]).',
    'Common causes: IgA NEPHROPATHY (Berger — commonest GN worldwide; haematuria 1–2 days AFTER an upper-respiratory infection "synpharyngitic"; mesangial IgA); POST-STREPTOCOCCAL GN (child, ~1–3 WEEKS after strep throat/skin; low complement C3, subepithelial "humps", anti-DNase B/ASO — usually self-limiting); and membranoproliferative GN. IgA vasculitis (Henoch-Schönlein) is the systemic form (purpura + arthralgia + abdominal pain + nephritis).',
    'RAPIDLY PROGRESSIVE GN (RPGN) = nephritic syndrome with rapid loss of function over days–weeks and CRESCENTS on biopsy — a nephrological EMERGENCY. Three immunofluorescence patterns: (1) ANTI-GBM (linear; GOODPASTURE = GN + pulmonary haemorrhage); (2) IMMUNE-COMPLEX (granular; lupus, post-strep, IgA); (3) PAUCI-IMMUNE (ANCA-associated vasculitis — GPA/MPA). Needs urgent immunosuppression ± plasma exchange.',
    'Work-up: urine microscopy (RBC casts), complement (LOW in post-strep/lupus/MPGN), serology (ANA/dsDNA, ANCA, anti-GBM, ASO/anti-DNase B, hepatitis), and BIOPSY. Management: treat the cause and control blood pressure/proteinuria (ACEi/ARB); post-streptococcal GN is largely supportive, whereas RPGN and lupus/vasculitis need aggressive immunosuppression.',
    '**The take-home: nephritic = glomerular inflammation → haematuria + RBC casts + hypertension + azotaemia (sub-nephrotic protein). IgA nephropathy (haematuria WITH/1–2 days after URTI), post-strep GN (1–3 weeks later, low C3, child), and RPGN/crescentic (anti-GBM/Goodpasture, immune-complex, ANCA pauci-immune) = emergency.** Contrast with [[nephrotic-syndrome]]; casts localise via [[urinalysis-urine-examination]]; overview in [[glomerular-disease-overview]].',
  ],

  mechanism: {
    title: 'Glomerular inflammation → haematuria + RBC casts + HTN + azotaemia; IgA / post-strep / RPGN-crescentic (anti-GBM/immune-complex/pauci-immune)',
    steps: [
      { id: 's1', label: 'Nephritic = inflammation → haematuria (RBC casts), HTN, oliguria, azotaemia, sub-nephrotic protein', emphasis: 'key' },
      { id: 's2', label: 'IgA nephropathy: haematuria 1–2 days after URTI (commonest GN; mesangial IgA)', emphasis: 'key' },
      { id: 's3', label: 'Post-streptococcal GN: 1–3 weeks after strep, low C3, subepithelial humps (child; self-limiting)', emphasis: 'key' },
      { id: 's4', label: 'RPGN = crescents, days–weeks (EMERGENCY): anti-GBM/Goodpasture, immune-complex, ANCA pauci-immune', emphasis: 'danger' },
      { id: 's5', label: 'Low complement (post-strep/lupus/MPGN); treat cause ± immunosuppression/plasma exchange', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Haematuria with red-cell casts, hypertension and rising creatinine', mechanism: 'Nephritic syndrome (glomerulonephritis)', significance: 'key' },
    { sign: 'Visible haematuria 1–2 days after a sore throat', mechanism: 'IgA nephropathy (synpharyngitic)', significance: 'key' },
    { sign: 'Child with cola-coloured urine + oedema 2 weeks after strep, low C3', mechanism: 'Post-streptococcal glomerulonephritis', significance: 'key' },
    { sign: 'Glomerulonephritis with pulmonary haemorrhage and linear GBM staining', mechanism: 'Anti-GBM disease (Goodpasture) — RPGN emergency', significance: 'key' },
    { sign: 'Rapid renal decline with crescents and positive ANCA', mechanism: 'Pauci-immune (ANCA) RPGN', significance: 'key' },
  ],

  investigations: [
    { clue: 'The commonest glomerulonephritis worldwide', meaning: 'IgA nephropathy' },
    { clue: 'The GN occurring 1–3 weeks after streptococcal infection with low C3', meaning: 'Post-streptococcal glomerulonephritis' },
    { clue: 'The biopsy hallmark of rapidly progressive GN', meaning: 'Crescents' },
    { clue: 'The RPGN pattern with pulmonary haemorrhage', meaning: 'Anti-GBM disease (Goodpasture)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Recognising nephritic syndrome (haematuria + RBC casts + hypertension + azotaemia) triggers urgent evaluation because some causes are emergencies: RPGN (crescentic — anti-GBM/Goodpasture, immune-complex, ANCA) can destroy kidneys within days and needs immediate immunosuppression ± plasma exchange. Timing separates IgA (with/soon after URTI) from post-strep GN (weeks later, low C3, usually supportive). It contrasts with [[nephrotic-syndrome]], uses the casts of [[urinalysis-urine-examination]], and is summarised in [[glomerular-disease-overview]].' },
  ],

  mnemonics: [
    { hook: 'Nephritic = "haematuria + RBC casts + Hypertension + azotaemia" (inflammatory)', expansion: ['Sub-nephrotic proteinuria', 'Active sediment'] },
    { hook: 'Timing: "IgA = with/soon after URTI (days); Post-strep = weeks later, low C3"', expansion: ['RPGN = crescents = emergency', 'Anti-GBM = Goodpasture (lung)'] },
  ],

  traps: [
    {
      questionCategory: 'IgA nephropathy vs post-streptococcal GN timing',
      wrongInstinct: 'Haematuria after a throat infection is always post-streptococcal glomerulonephritis',
      rightAnswer: 'TIMING distinguishes them: IgA NEPHROPATHY causes haematuria CONCURRENT with or 1–2 DAYS after an upper-respiratory infection ("synpharyngitic", normal complement), whereas POST-STREPTOCOCCAL GN follows 1–3 WEEKS after a streptococcal throat/skin infection (with LOW C3 and positive strep serology) — same trigger organ, very different latency and complement',
      why: 'The interval (days vs weeks) and complement level separate two common post-infectious nephritides with different courses (IgA is chronic/relapsing; post-strep is usually self-limiting), so timing changes the diagnosis and prognosis.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A young adult develops visible haematuria within 1–2 days of an upper respiratory tract infection, with a normal complement level. The most likely diagnosis is:',
      options: [
        { id: 'a', text: 'Post-streptococcal glomerulonephritis' },
        { id: 'b', text: 'IgA nephropathy' },
        { id: 'c', text: 'Minimal change disease' },
        { id: 'd', text: 'Membranous nephropathy' },
      ],
      answerId: 'b',
      explanation: 'IgA nephropathy classically causes "synpharyngitic" haematuria concurrent with or 1–2 days after a mucosal (respiratory) infection, with normal complement and mesangial IgA deposits. Post-streptococcal GN instead follows 1–3 weeks after streptococcal infection with a low C3.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Rapidly progressive glomerulonephritis (RPGN) is characterised histologically by:',
      options: [
        { id: 'a', text: 'Foot-process effacement' },
        { id: 'b', text: 'Crescent formation in Bowman\'s space' },
        { id: 'c', text: 'Spike-and-dome subepithelial deposits' },
        { id: 'd', text: 'Nodular glomerulosclerosis' },
      ],
      answerId: 'b',
      explanation: 'RPGN shows crescents (proliferating cells and fibrin in Bowman\'s space) and causes rapid renal decline over days to weeks — a nephrological emergency. Its immunofluorescence patterns (linear anti-GBM, granular immune-complex, pauci-immune ANCA) guide urgent immunosuppression ± plasma exchange.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default nephriticSyndrome;
