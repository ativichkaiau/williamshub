import type { Lecture } from '../../lib/types';

export const utiPathogenesisMicrobiology: Lecture = {
  id: 'uti-pathogenesis-microbiology',
  title: 'UTI: Pathogenesis & Microbiology',
  system: 'renal',
  source: 'L2 — Infectious UTI',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L2 Infectious UTI' },
    { kind: 'mechanism', label: 'Ascending infection & uropathogens' },
    { kind: 'exam', label: 'E. coli; significant bacteriuria' },
  ],

  highYield: [
    '**Most UTIs are ASCENDING: bowel/perineal flora colonise the periurethral area → ascend the urethra to the bladder (cystitis) → up the ureter to the kidney (pyelonephritis). Less commonly infection is HAEMATOGENOUS (e.g. staphylococcal seeding). The commonest uropathogen by far is UROPATHOGENIC E. COLI, whose P-FIMBRIAE/pili adhere to uroepithelium and defeat flushing.**',
    '**Uropathogens ("KEEPS/SEEK-PP"): E. COLI (most), Klebsiella, Proteus, Enterococcus, Staphylococcus saprophyticus (young sexually active women), Pseudomonas (catheters/hospital). PROTEUS produces UREASE → splits urea → alkaline urine → STRUVITE (magnesium-ammonium-phosphate) STAGHORN stones. Candida in catheterised/immunosuppressed/diabetic patients.**',
    '**Diagnosis: significant bacteriuria has traditionally been ≥10⁵ CFU/mL on a clean-catch specimen, but lower counts count with symptoms or suprapubic aspirate. PYURIA (white cells) supports infection; STERILE PYURIA (pyuria without ordinary growth) suggests TB, chlamydia/gonorrhoea, stones, or partially treated UTI. Dipstick: LEUKOCYTE ESTERASE (pyuria) + NITRITE (Enterobacteriaceae reduce nitrate → nitrite).**',
    '**ASYMPTOMATIC BACTERIURIA (positive culture, no symptoms) is generally NOT treated — EXCEPT in PREGNANCY (risk of pyelonephritis/preterm birth) and before urological procedures. Risk factors follow the defence defects (stasis, reflux, catheter, pregnancy, diabetes). Recurrent/complicated UTI, or Proteus, warrants imaging for stones/obstruction.**',
    '**The take-home: UTIs are mostly ASCENDING, commonest organism uropathogenic E. COLI (P-fimbriae); Proteus (urease → struvite staghorn stones), S. saprophyticus (young women); significant bacteriuria ≥10⁵ CFU/mL (context-dependent); dipstick leukocyte esterase + nitrite; treat asymptomatic bacteriuria ONLY in pregnancy/pre-procedure; sterile pyuria → TB/chlamydia/stones.** Host defences are in [[renal-defense-mechanisms]]; clinical syndromes/treatment in [[uti-clinical-management]]; urinalysis detail in [[urinalysis-urine-examination]].',
  ],

  mechanism: {
    title: 'Ascending infection; E. coli (P-fimbriae) commonest; Proteus urease → struvite; bacteriuria ≥10⁵; treat ASB only in pregnancy',
    steps: [
      { id: 's1', label: 'Ascending: perineal flora → urethra → bladder → ureter → kidney', emphasis: 'key' },
      { id: 's2', label: 'Uropathogenic E. coli = commonest (P-fimbriae adhesins)', emphasis: 'key' },
      { id: 's3', label: 'Proteus (urease → alkaline → struvite staghorn); S. saprophyticus (young women); Klebsiella/Pseudomonas', emphasis: 'key' },
      { id: 's4', label: 'Significant bacteriuria ≥10⁵ CFU/mL; pyuria + nitrite; sterile pyuria → TB/chlamydia/stones', emphasis: 'key' },
      { id: 's5', label: 'Treat asymptomatic bacteriuria ONLY in pregnancy / pre-urologic procedure', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Commonest organism cultured from an uncomplicated UTI', mechanism: 'Uropathogenic E. coli', significance: 'key' },
    { sign: 'Alkaline urine with struvite staghorn calculi', mechanism: 'Proteus (urease-producing)', significance: 'key' },
    { sign: 'UTI in a young sexually active woman', mechanism: 'Staphylococcus saprophyticus (or E. coli)', significance: 'supportive' },
    { sign: 'Pyuria without ordinary bacterial growth', mechanism: 'Sterile pyuria (TB, chlamydia/GC, stones, treated UTI)', significance: 'key' },
    { sign: 'Positive urine culture without symptoms in a pregnant woman', mechanism: 'Asymptomatic bacteriuria — treat (unlike non-pregnant)', significance: 'key' },
  ],

  investigations: [
    { clue: 'The commonest cause of UTI', meaning: 'Uropathogenic E. coli' },
    { clue: 'The urease-producing organism causing struvite stones', meaning: 'Proteus mirabilis' },
    { clue: 'The dipstick markers of UTI', meaning: 'Leukocyte esterase (pyuria) and nitrite (Enterobacteriaceae)' },
    { clue: 'The two situations to treat asymptomatic bacteriuria', meaning: 'Pregnancy and before urological procedures' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Knowing the route (ascending), the organisms (E. coli commonest; Proteus → struvite; S. saprophyticus in young women) and diagnostic thresholds guides empiric therapy and imaging. The key management pearl is that asymptomatic bacteriuria is treated ONLY in pregnancy and before urological procedures — overtreatment breeds resistance. Sterile pyuria prompts a search for TB/chlamydia/stones. Host defences are in [[renal-defense-mechanisms]]; clinical cystitis/pyelonephritis and antibiotics in [[uti-clinical-management]].' },
  ],

  mnemonics: [
    { hook: 'Uropathogens "SEEK PP": Serratia, E. coli, Enterococcus, Klebsiella, Proteus, Pseudomonas', expansion: ['E. coli most common', 'Proteus → struvite staghorn'] },
    { hook: '"Treat asymptomatic bacteriuria only in Pregnancy + Procedures"', expansion: ['Dipstick: leukocyte esterase + nitrite', 'Sterile pyuria → TB/chlamydia/stones'] },
  ],

  traps: [
    {
      questionCategory: 'Treating asymptomatic bacteriuria',
      wrongInstinct: 'Any positive urine culture should be treated with antibiotics',
      rightAnswer: 'ASYMPTOMATIC bacteriuria (positive culture, NO symptoms) should generally NOT be treated — treatment does not help and drives resistance — with two key EXCEPTIONS: PREGNANCY (untreated ASB risks pyelonephritis and preterm birth) and before an invasive UROLOGICAL procedure; elsewhere, treat only symptomatic UTI',
      why: 'Reflexively treating every positive culture causes unnecessary antibiotic use and resistance; the evidence-based exceptions (pregnancy, pre-procedure) are the high-yield points, while symptoms otherwise define the need to treat.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with recurrent UTIs has persistently alkaline urine and a large staghorn calculus. The most likely organism is:',
      options: [
        { id: 'a', text: 'Escherichia coli' },
        { id: 'b', text: 'Proteus mirabilis (urease-producing)' },
        { id: 'c', text: 'Staphylococcus saprophyticus' },
        { id: 'd', text: 'Enterococcus faecalis' },
      ],
      answerId: 'b',
      explanation: 'Proteus produces urease, which splits urea to ammonia, alkalinising the urine and precipitating struvite (magnesium-ammonium-phosphate) stones that can form staghorn calculi. E. coli is the commonest overall uropathogen but does not typically cause struvite stones.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Asymptomatic bacteriuria should be treated with antibiotics in which situation?',
      options: [
        { id: 'a', text: 'All elderly patients' },
        { id: 'b', text: 'Pregnancy (and before urological procedures)' },
        { id: 'c', text: 'Anyone with a positive culture' },
        { id: 'd', text: 'It should never be treated' },
      ],
      answerId: 'b',
      explanation: 'Asymptomatic bacteriuria is generally not treated, because treatment does not benefit patients and promotes resistance. The important exceptions are pregnancy (to prevent pyelonephritis and preterm birth) and before invasive urological procedures.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default utiPathogenesisMicrobiology;
