import type { Lecture } from '../../lib/types';

export const uropathogenicEcoliVirulence: Lecture = {
  id: 'uropathogenic-ecoli-virulence',
  title: 'Uropathogenic E. coli & Virulence Factors',
  system: 'renal',
  source: 'L2 — Infectious UTI',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L2 UPEC' },
    { kind: 'mechanism', label: 'Adhesins, toxins, iron, biofilm' },
    { kind: 'exam', label: 'P fimbriae → pyelonephritis' },
  ],

  highYield: [
    'UROPATHOGENIC E. COLI (UPEC) causes ~80% of uncomplicated UTIs. Its key weapon is ADHESION: TYPE-1 FIMBRIAE (FimH adhesin) bind mannosylated uroplakin on bladder urothelium (cystitis) and P FIMBRIAE (pap, bind Gal-Gal on kidney/uroepithelium) are strongly associated with PYELONEPHRITIS and are needed to ascend and infect the kidney. Adhesion resists the flushing defense.',
    'Other virulence factors: TOXINS (haemolysin HlyA, cytotoxic necrotising factor) damage host cells and release nutrients; IRON-acquisition systems (siderophores — aerobactin/enterobactin) scavenge scarce iron; CAPSULE (K antigen) and LPS (O antigen, endotoxin) resist phagocytosis/complement and drive inflammation/sepsis; and flagella (motility) aid ascent.',
    'UPEC also forms intracellular bacterial communities/BIOFILMS within urothelial cells, a reservoir that helps explain RECURRENT/persistent UTI. The combination of adhesins (colonise/ascend), toxins (invade), iron uptake (grow) and immune evasion (capsule/LPS) turns a gut commensal into a uropathogen.',
    '**The take-home: UPEC = commonest UTI cause — TYPE-1 fimbriae (FimH) → bladder/cystitis; P FIMBRIAE → kidney/PYELONEPHRITIS and ascent; plus toxins (haemolysin), siderophores (iron), capsule/LPS (immune evasion, sepsis) and biofilm (recurrence). Adhesins defeat urinary flushing.** The general UTI microbiology/pathogenesis is [[uti-pathogenesis-microbiology]]; host defenses are [[urinary-tract-host-defenses]]; catheter infections are [[catheter-associated-uti]].',
  ],

  mechanism: {
    title: 'UPEC virulence: type-1 fimbriae (FimH→bladder), P fimbriae (→kidney/pyelonephritis/ascent), toxins (haemolysin), siderophores (iron), capsule/LPS (evasion), biofilm (recurrence)',
    steps: [
      { id: 's1', label: 'Type-1 fimbriae (FimH) bind bladder uroplakin → cystitis (resist flushing)', emphasis: 'key' },
      { id: 's2', label: 'P fimbriae (Gal-Gal) → ascend to kidney → pyelonephritis', emphasis: 'danger' },
      { id: 's3', label: 'Toxins (haemolysin, CNF) damage cells; flagella aid ascent', emphasis: 'key' },
      { id: 's4', label: 'Siderophores scavenge iron; capsule/LPS evade complement/phagocytes (sepsis)', emphasis: 'key' },
      { id: 's5', label: 'Intracellular communities/biofilm → recurrent/persistent UTI', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'E. coli with P fimbriae isolated from a patient with pyelonephritis', mechanism: 'P fimbriae mediate renal ascent/adhesion', significance: 'key' },
    { sign: 'Cystitis from E. coli adhering to bladder uroplakin', mechanism: 'Type-1 fimbriae (FimH adhesin)', significance: 'key' },
    { sign: 'Recurrent UTI with the same organism despite treatment', mechanism: 'Intracellular bacterial communities / biofilm reservoir', significance: 'key' },
    { sign: 'Gram-negative sepsis complicating pyelonephritis', mechanism: 'LPS (endotoxin) / capsule immune evasion', significance: 'supportive' },
    { sign: 'E. coli accounting for the majority of community UTIs', mechanism: 'UPEC virulence-factor repertoire', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The adhesin linking UPEC to the bladder (cystitis)', meaning: 'Type-1 fimbriae (FimH)' },
    { clue: 'The adhesin linking UPEC to the kidney (pyelonephritis)', meaning: 'P fimbriae' },
    { clue: 'How UPEC obtains scarce iron in urine', meaning: 'Siderophores (aerobactin/enterobactin)' },
    { clue: 'The factor explaining recurrent/persistent UPEC UTI', meaning: 'Intracellular communities / biofilm' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The virulence-factor concept explains clinical UTI: P fimbriae predict pyelonephritis and ascent, type-1 fimbriae drive cystitis, siderophores and capsule/LPS enable growth/immune evasion (and gram-negative sepsis), and intracellular/biofilm reservoirs underlie recurrence. It also motivates anti-adhesion strategies (e.g. mannosides, cranberry proanthocyanidins interfering with fimbriae). The general pathogenesis is [[uti-pathogenesis-microbiology]]; host defenses are [[urinary-tract-host-defenses]]; clinical management is [[uti-clinical-management]].' },
  ],

  mnemonics: [
    { hook: 'UPEC "AT-IC": Adhesins (fimbriae), Toxins, Iron (siderophores), Capsule/LPS', expansion: ['Type-1 = bladder', 'P fimbriae = kidney/pyelonephritis'] },
    { hook: '"P fimbriae Push up to the kidney (Pyelonephritis)"', expansion: ['Biofilm → recurrence', 'LPS → sepsis'] },
  ],

  traps: [
    {
      questionCategory: 'Fimbriae and site of infection',
      wrongInstinct: 'All E. coli fimbriae are the same and just cause bladder infection',
      rightAnswer: 'Different fimbriae target different sites: TYPE-1 fimbriae (FimH) bind BLADDER uroplakin and cause CYSTITIS, whereas P FIMBRIAE bind Gal-Gal receptors on renal/uroepithelium and are strongly associated with ASCENDING infection and PYELONEPHRITIS — so P-fimbriated strains are the classic pyelonephritogenic UPEC',
      why: 'Knowing that P fimbriae mediate renal ascent (pyelonephritis) while type-1 fimbriae mediate cystitis links a specific virulence factor to the clinical site of infection, a common exam distinction.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which virulence factor of uropathogenic E. coli is most strongly associated with ascending infection and pyelonephritis?',
      options: [
        { id: 'a', text: 'Type-1 fimbriae' },
        { id: 'b', text: 'P fimbriae' },
        { id: 'c', text: 'Flagella alone' },
        { id: 'd', text: 'The O antigen' },
      ],
      answerId: 'b',
      explanation: 'P fimbriae bind Gal-Gal receptors on renal and uroepithelial cells and mediate ascent to the kidney, so P-fimbriated UPEC strains are classically associated with pyelonephritis; type-1 fimbriae (FimH) bind bladder uroplakin and cause cystitis.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Recurrent, relapsing UTI with the same E. coli strain despite appropriate antibiotics is best explained by:',
      options: [
        { id: 'a', text: 'Loss of all fimbriae' },
        { id: 'b', text: 'Intracellular bacterial communities/biofilm acting as a reservoir' },
        { id: 'c', text: 'Alkalinisation of the urine' },
        { id: 'd', text: 'Absence of any capsule' },
      ],
      answerId: 'b',
      explanation: 'UPEC can invade urothelial cells and form intracellular bacterial communities and biofilms that resist antibiotics and host defenses, acting as a persistent reservoir that seeds recurrent/relapsing infection.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default uropathogenicEcoliVirulence;
