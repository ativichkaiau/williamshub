import type { Lecture } from '../../lib/types';

export const igaNephropathyPostinfectiousGn: Lecture = {
  id: 'iga-nephropathy-postinfectious-gn',
  title: 'IgA Nephropathy & Post-Infectious GN',
  system: 'renal',
  source: 'L6 — Nephrotic & Nephritic Syndromes',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L6 IgA/PIGN' },
    { kind: 'mechanism', label: 'Mesangial IgA vs subepithelial humps' },
    { kind: 'exam', label: 'Synpharyngitic vs post-strep timing' },
  ],

  highYield: [
    '**IgA NEPHROPATHY (Berger disease) is the commonest primary GLOMERULONEPHRITIS worldwide. Galactose-deficient IgA1 immune complexes deposit in the MESANGIUM (mesangial IgA on immunofluorescence). Classic presentation: recurrent VISIBLE HAEMATURIA occurring WITH or 1–2 DAYS AFTER a mucosal infection (URTI) — "SYNPHARYNGITIC" haematuria — or asymptomatic microscopic haematuria/proteinuria found incidentally. HENOCH-SCHÖNLEIN PURPURA (IgA vasculitis) is the systemic form (purpura, arthralgia, abdominal pain, nephritis).**',
    '**POST-INFECTIOUS (classically POST-STREPTOCOCCAL) GN is a NEPHRITIC illness occurring 1–3 WEEKS AFTER a group A streptococcal throat or skin infection (a clear LATENT period). SUBEPITHELIAL immune "HUMPS" on electron microscopy, granular IgG/C3, and LOW C3 complement (which normalises in ~6–8 weeks) are typical. It presents with haematuria ("cola-coloured" urine), oedema, hypertension and mild renal impairment — usually SELF-LIMITING in children.**',
    '**The key discriminator is TIMING relative to infection: IgA nephropathy causes haematuria SYNPHARYNGITICALLY (same time as the URTI, short/no latent period) with NORMAL complement, whereas post-streptococcal GN causes nephritis AFTER a 1–3-WEEK LATENT period with LOW complement. Both are nephritic (haematuria ± RBC casts, some proteinuria, hypertension).**',
    '**MANAGEMENT: IgA nephropathy — supportive RAAS blockade/BP control for proteinuria, with immunosuppression reserved for progressive disease (variable prognosis; ~20–40% reach ESRD over decades). Post-streptococcal GN — SUPPORTIVE (BP/fluid/salt control, treat the infection); excellent prognosis in children, less so in adults. Complement normalisation confirms post-strep GN.**',
    '**The take-home: IgA nephropathy = commonest GN, MESANGIAL IgA, SYNPHARYNGITIC haematuria, NORMAL complement (HSP = systemic form); post-streptococcal GN = nephritic 1–3 weeks AFTER strep, SUBEPITHELIAL humps, LOW C3 (normalises), self-limiting in children. TIMING + complement distinguish them.** The nephritic overview is [[nephritic-syndrome]]; RPGN/crescentic disease is in [[glomerular-disease-overview]]; mechanisms are [[glomerular-disease-immune-mechanisms]].',
  ],

  mechanism: {
    title: 'IgA nephropathy (mesangial IgA, synpharyngitic haematuria, normal complement) vs post-strep GN (subepithelial humps, 1–3 wk latent, low C3 normalising); timing + complement distinguish',
    steps: [
      { id: 's1', label: 'IgA: galactose-deficient IgA1 deposits in mesangium (mesangial IgA on IF)', emphasis: 'key' },
      { id: 's2', label: 'IgA: haematuria synpharyngitic (with URTI), normal complement', emphasis: 'key' },
      { id: 's3', label: 'Post-strep GN: 1–3-week latent period after strep throat/skin', emphasis: 'key' },
      { id: 's4', label: 'Post-strep: subepithelial "humps", granular IgG/C3, LOW C3 (normalises 6–8 wk)', emphasis: 'key' },
      { id: 's5', label: 'Both nephritic; IgA can progress, post-strep usually self-limiting in children', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Visible haematuria at the same time as an upper respiratory infection', mechanism: 'IgA nephropathy (synpharyngitic)', significance: 'key' },
    { sign: 'Mesangial IgA deposits on immunofluorescence', mechanism: 'IgA nephropathy', significance: 'key' },
    { sign: 'Cola-coloured urine, oedema and hypertension 2 weeks after strep throat', mechanism: 'Post-streptococcal GN', significance: 'key' },
    { sign: 'Low C3 that normalises over 6–8 weeks', mechanism: 'Post-infectious GN (supports the diagnosis)', significance: 'key' },
    { sign: 'Purpura, arthralgia and abdominal pain with nephritis in a child', mechanism: 'IgA vasculitis (Henoch-Schönlein purpura)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The commonest primary glomerulonephritis worldwide', meaning: 'IgA nephropathy' },
    { clue: 'The immunofluorescence finding in IgA nephropathy', meaning: 'Mesangial IgA deposits' },
    { clue: 'The latent period before post-streptococcal GN', meaning: '1–3 weeks after infection' },
    { clue: 'The complement pattern in post-streptococcal GN', meaning: 'Low C3 that normalises' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Timing and complement separate two common nephritic presentations: IgA nephropathy (haematuria synpharyngitically, normal complement, variable long-term progression → RAAS blockade/BP control, immunosuppression only if progressive) versus post-streptococcal GN (nephritis after a 1–3-week latent period, low C3 that normalises, supportive care with excellent childhood prognosis). Recognising HSP as systemic IgA vasculitis and monitoring complement recovery guide follow-up. The nephritic overview is [[nephritic-syndrome]]; crescentic/RPGN is in [[glomerular-disease-overview]].' },
  ],

  mnemonics: [
    { hook: '"IgA = In-time (synpharyngitic), normal complement, mesangial IgA"', expansion: ['Commonest GN worldwide', 'HSP = systemic form'] },
    { hook: '"Post-strep = Post (1–3 wk) latent, low C3, subepithelial humps"', expansion: ['C3 normalises 6–8 wk', 'Self-limiting in children'] },
  ],

  traps: [
    {
      questionCategory: 'IgA nephropathy vs post-streptococcal GN timing',
      wrongInstinct: 'Haematuria after a sore throat is always post-streptococcal glomerulonephritis',
      rightAnswer: 'The TIMING relative to the infection distinguishes them: IgA nephropathy causes haematuria SYNPHARYNGITICALLY — WITH or within 1–2 days of the URTI (short/no latent period), with NORMAL complement — whereas POST-STREPTOCOCCAL GN follows a 1–3-WEEK LATENT period after streptococcal infection, with LOW C3 that later normalises; so concurrent haematuria points to IgA, delayed nephritis with low complement to post-strep GN',
      why: 'Both follow infections, but the latent period and complement level are decisive: mislabelling synpharyngitic IgA haematuria as post-strep GN (or vice versa) misjudges prognosis and follow-up, since IgA can progress while childhood post-strep GN usually resolves.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A young adult develops visible haematuria at the same time as an upper respiratory infection, with normal serum complement. The most likely diagnosis is:',
      options: [
        { id: 'a', text: 'Post-streptococcal glomerulonephritis' },
        { id: 'b', text: 'IgA nephropathy' },
        { id: 'c', text: 'Membranous nephropathy' },
        { id: 'd', text: 'Minimal change disease' },
      ],
      answerId: 'b',
      explanation: 'IgA nephropathy classically causes "synpharyngitic" haematuria — concurrent with or within 1–2 days of a mucosal (URTI) infection — with normal complement and mesangial IgA deposits, unlike post-streptococcal GN which follows a 1–3-week latent period with low C3.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A child develops cola-coloured urine, periorbital oedema and hypertension 2 weeks after a streptococcal throat infection, with a low C3. The expected course is:',
      options: [
        { id: 'a', text: 'Rapid progression to end-stage renal disease' },
        { id: 'b', text: 'Usually self-limiting, with C3 normalising over 6–8 weeks' },
        { id: 'c', text: 'Lifelong dependence on immunosuppression' },
        { id: 'd', text: 'Immediate need for dialysis' },
      ],
      answerId: 'b',
      explanation: 'Post-streptococcal GN is a nephritic illness after a 1–3-week latent period with subepithelial "humps" and low C3; in children it is usually self-limiting with supportive care, and the transiently low C3 normalises over about 6–8 weeks, supporting the diagnosis.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default igaNephropathyPostinfectiousGn;
