import type { Lecture } from '../../lib/types';

export const catheterAssociatedUti: Lecture = {
  id: 'catheter-associated-uti',
  title: 'Catheter-Associated UTI (CAUTI)',
  system: 'renal',
  source: 'L2 — Infectious UTI',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L2 CAUTI' },
    { kind: 'mechanism', label: 'Biofilm; bypassed defenses' },
    { kind: 'exam', label: 'Don’t treat asymptomatic bacteriuria' },
  ],

  highYield: [
    'Indwelling urinary catheters are the commonest cause of HEALTHCARE-ASSOCIATED UTI. A catheter defeats every host defense: it BYPASSES the urethral barrier, holds the bladder open preventing complete emptying (STASIS), abrades the mucin/GAG layer, and provides an abiotic surface for BIOFILM. Risk of bacteriuria rises ~3–7% PER DAY, so almost everyone catheterised long enough becomes colonised.',
    'BIOFILM on the catheter (bacteria in an extracellular matrix on inner/outer surfaces) is central — it protects organisms from antibiotics and host defenses, so infection persists until the catheter is REMOVED or exchanged. Organisms are broader than community UTI: E. coli plus Proteus, Klebsiella, Pseudomonas, Enterococcus, and Candida, often multidrug-resistant. PROTEUS (urease → alkaline urine) promotes struvite ENCRUSTATION and blockage.',
    'Crucially, catheter-associated ASYMPTOMATIC BACTERIURIA/pyuria should NOT be treated with antibiotics (except before urological surgery or in pregnancy) — treating it just breeds resistance without benefit. Diagnose CAUTI only when there are SYMPTOMS/signs (fever, suprapubic/flank pain, new confusion, sepsis) attributable to the urinary tract, ideally with the catheter changed and a fresh specimen taken.',
    'PREVENTION is the priority: insert catheters only when truly indicated, use aseptic insertion and a closed drainage system, and REMOVE them as early as possible (the single most effective measure). Consider intermittent catheterisation or alternatives. This is a core hospital infection-control/"CAUTI bundle" topic.',
    '**The take-home: catheters cause UTI by bypassing defenses + biofilm; bacteriuria is near-universal with time — do NOT treat asymptomatic bacteriuria; diagnose CAUTI on SYMPTOMS, change/remove the catheter; broad/resistant organisms (Proteus → encrustation). Prevention = avoid and early removal.** The general pathogenesis is [[uti-pathogenesis-microbiology]]; host defenses are [[urinary-tract-host-defenses]]; clinical UTI is [[uti-clinical-management]].',
  ],

  mechanism: {
    title: 'Catheter bypasses defenses + stasis + biofilm → near-universal bacteriuria; treat only symptomatic CAUTI; remove/change catheter; prevention = avoid + early removal',
    steps: [
      { id: 's1', label: 'Catheter bypasses urethra, prevents emptying (stasis), abrades mucin', emphasis: 'key' },
      { id: 's2', label: 'Biofilm on catheter shields bacteria from antibiotics/defenses', emphasis: 'key' },
      { id: 's3', label: 'Bacteriuria risk ~3–7%/day → near-universal colonisation over time', emphasis: 'key' },
      { id: 's4', label: 'Do NOT treat asymptomatic bacteriuria; diagnose CAUTI on symptoms/signs', emphasis: 'danger' },
      { id: 's5', label: 'Remove/change catheter; prevention = avoid + early removal (best measure)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Positive urine culture in an afebrile, asymptomatic catheterised patient', mechanism: 'Asymptomatic bacteriuria — do NOT give antibiotics', significance: 'key' },
    { sign: 'Fever, flank pain or new confusion in a catheterised patient', mechanism: 'Symptomatic CAUTI — change catheter, treat', significance: 'key' },
    { sign: 'Catheter encrustation/blockage with alkaline urine', mechanism: 'Proteus urease → struvite encrustation', significance: 'key' },
    { sign: 'Multidrug-resistant Klebsiella/Pseudomonas/Candida on culture', mechanism: 'Healthcare-associated flora with biofilm', significance: 'supportive' },
    { sign: 'Infection resolving only after catheter removal', mechanism: 'Biofilm reservoir persists until device removed', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The structure on the catheter that protects bacteria', meaning: 'Biofilm' },
    { clue: 'When NOT to treat catheter bacteriuria', meaning: 'When asymptomatic (no attributable symptoms/signs)' },
    { clue: 'The single most effective preventive measure', meaning: 'Remove the catheter as early as possible' },
    { clue: 'The urease-producing organism causing encrustation', meaning: 'Proteus (struvite stones)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'CAUTI is a leading, largely preventable hospital infection. The key teaching points are: prevent it (avoid catheters, aseptic insertion, closed system, early removal — the best measure), do NOT treat asymptomatic bacteriuria (which is near-universal and only breeds resistance), and when symptomatic CAUTI occurs, change/remove the catheter and take a fresh specimen before targeted antibiotics. Proteus encrustation warrants catheter care. The general pathogenesis is [[uti-pathogenesis-microbiology]]; host defenses (that the catheter bypasses) are [[urinary-tract-host-defenses]]; clinical UTI is [[uti-clinical-management]].' },
  ],

  mnemonics: [
    { hook: '"Catheter = Colonisation" — biofilm + stasis + bypassed defenses', expansion: ['Don’t treat asymptomatic bacteriuria', 'Remove early = best prevention'] },
    { hook: '"Symptoms make it CAUTI" (fever/pain/confusion) — then change catheter + treat', expansion: ['Proteus → encrustation', 'Broad/resistant organisms'] },
  ],

  traps: [
    {
      questionCategory: 'Asymptomatic bacteriuria in a catheterised patient',
      wrongInstinct: 'A positive urine culture in a catheterised patient always needs antibiotics',
      rightAnswer: 'Catheter-associated ASYMPTOMATIC bacteriuria (and pyuria) should NOT be treated with antibiotics — it is near-universal with time and treating it only selects resistance without benefit; antibiotics are reserved for SYMPTOMATIC CAUTI (fever, suprapubic/flank pain, new confusion/sepsis attributable to the urinary tract), ideally after changing the catheter. Exceptions are pregnancy and before urological surgery',
      why: 'Overtreating catheter bacteriuria is a major driver of antibiotic resistance and C. difficile without improving outcomes; the presence of attributable symptoms — not the culture alone — defines treatable CAUTI.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A catheterised inpatient is afebrile and asymptomatic, but a routine urine culture grows E. coli. The best management is:',
      options: [
        { id: 'a', text: 'A 7-day course of ciprofloxacin' },
        { id: 'b', text: 'No antibiotics — this is asymptomatic bacteriuria' },
        { id: 'c', text: 'Immediate IV broad-spectrum antibiotics' },
        { id: 'd', text: 'Long-term prophylactic antibiotics' },
      ],
      answerId: 'b',
      explanation: 'Catheter-associated asymptomatic bacteriuria should not be treated (except in pregnancy or before urological surgery); treating it only breeds resistance without benefit. Antibiotics are reserved for symptomatic CAUTI, ideally after changing/removing the catheter.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'The single most effective measure to reduce catheter-associated UTI is:',
      options: [
        { id: 'a', text: 'Routine antibiotic prophylaxis' },
        { id: 'b', text: 'Removing the catheter as early as possible (and avoiding unnecessary catheters)' },
        { id: 'c', text: 'Daily bladder irrigation with antiseptic' },
        { id: 'd', text: 'Weekly urine cultures' },
      ],
      answerId: 'b',
      explanation: 'Because the catheter bypasses defenses and supports biofilm, the most effective prevention is to avoid unnecessary catheterisation and remove catheters at the earliest opportunity; antibiotic prophylaxis and antiseptic irrigation are not effective and promote resistance.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default catheterAssociatedUti;
