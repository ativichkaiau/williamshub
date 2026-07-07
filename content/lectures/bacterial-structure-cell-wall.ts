import type { Lecture } from '../../lib/types';

export const bacterialStructureCellWall: Lecture = {
  id: 'bacterial-structure-cell-wall',
  title: 'Bacterial Structure & the Cell Wall',
  system: 'microbiology',
  source: 'L8 — Introduction to Medical Bacteriology',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Micro' },
    { kind: 'lecture', label: 'L8 Structure' },
    { kind: 'mechanism', label: 'Gram stain; peptidoglycan; LPS' },
    { kind: 'exam', label: 'Gram+ teichoic vs Gram− LPS' },
  ],

  highYield: [
    'Bacteria are PROKARYOTES: no nuclear membrane (one circular dsDNA chromosome, haploid), no membrane-bound organelles (no mitochondria/ER/Golgi), and a 70S ribosome (30S + 50S) — the 70S ribosome and unique cell wall are the two great ANTIBIOTIC TARGETS that spare human (80S, no wall) cells. Shapes: cocci (spheres), bacilli (rods), spirals; arrangements (clusters/chains/diplo-) aid identification.',
    'The GRAM STAIN divides bacteria by cell wall. GRAM-POSITIVE = THICK peptidoglycan that traps crystal violet (retained after alcohol decolorisation → PURPLE), plus TEICHOIC/lipoteichoic acids. GRAM-NEGATIVE = THIN peptidoglycan + an OUTER MEMBRANE; alcohol washes out the crystal violet, so they take the safranin counterstain → PINK/RED. Peptidoglycan (NAG-NAM backbone cross-linked by peptide bridges) is the wall polymer that β-LACTAMS block (inhibit transpeptidation).',
    'The Gram-negative OUTER MEMBRANE carries LIPOPOLYSACCHARIDE (LPS = ENDOTOXIN): LIPID A (the toxic part → fever, shock, DIC), a core polysaccharide, and the O-antigen (variable, serotyping). Endotoxin drives Gram-negative SEPSIS. Exceptions that stain poorly: MYCOBACTERIA (waxy mycolic-acid wall → acid-fast stain, not Gram), and MYCOPLASMA / L-forms (NO cell wall → intrinsically β-lactam resistant).',
    'Other structures: CAPSULE (usually polysaccharide; anti-phagocytic virulence factor and vaccine target — e.g. pneumococcus, meningococcus, Hib); PILI/FIMBRIAE (adhesion; sex pilus for conjugation); FLAGELLA (motility/chemotaxis); and ENDOSPORES (dormant, heat/chemical-resistant, dipicolinic acid — only Bacillus [aerobic] and Clostridium [anaerobic]).',
    '**The take-home: bacteria = prokaryotes (70S ribosome + cell wall = drug targets). GRAM-POSITIVE = thick peptidoglycan + teichoic acid (purple); GRAM-NEGATIVE = thin peptidoglycan + outer-membrane LPS/ENDOTOXIN (pink, → sepsis). Acid-fast mycobacteria (mycolic acid) and wall-less mycoplasma stain poorly; capsule/pili/flagella/spores are key virulence/ID features.** Physiology and identification are in [[bacterial-physiology-growth-identification]]; the wall is the β-lactam target ([[antibacterial-cell-wall-agents]]).',
  ],

  mechanism: {
    title: 'Prokaryote (70S + wall = drug targets); Gram stain: Gram+ thick peptidoglycan/teichoic (purple) vs Gram− thin peptidoglycan + outer-membrane LPS/endotoxin (pink); acid-fast/wall-less exceptions',
    steps: [
      { id: 's1', label: 'Prokaryote: circular DNA, no organelles, 70S ribosome + cell wall (drug targets)', emphasis: 'key' },
      { id: 's2', label: 'Peptidoglycan (NAG-NAM + peptide bridges) = wall polymer; β-lactams block cross-linking', emphasis: 'key' },
      { id: 's3', label: 'Gram+ = thick peptidoglycan + teichoic acid → retains crystal violet (purple)', emphasis: 'key' },
      { id: 's4', label: 'Gram− = thin peptidoglycan + outer membrane LPS (endotoxin/lipid A) → pink; sepsis', emphasis: 'danger' },
      { id: 's5', label: 'Exceptions: mycobacteria (acid-fast, mycolic acid); mycoplasma/L-form (no wall → β-lactam resistant)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Purple cocci in clusters retaining crystal violet', mechanism: 'Gram-positive (thick peptidoglycan)', significance: 'key' },
    { sign: 'Pink rods taking the safranin counterstain', mechanism: 'Gram-negative (thin peptidoglycan + outer membrane)', significance: 'key' },
    { sign: 'Fever, hypotension and DIC in Gram-negative bacteraemia', mechanism: 'LPS lipid A (endotoxin)', significance: 'key' },
    { sign: 'Organism that will not Gram stain but is acid-fast', mechanism: 'Mycobacteria (mycolic-acid wall)', significance: 'supportive' },
    { sign: 'Intrinsic β-lactam resistance with no cell wall on stain', mechanism: 'Mycoplasma / L-form (wall-less)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The stain that divides bacteria by cell wall', meaning: 'Gram stain' },
    { clue: 'The toxic component of Gram-negative LPS', meaning: 'Lipid A (endotoxin)' },
    { clue: 'The wall polymer targeted by β-lactams', meaning: 'Peptidoglycan (transpeptidation)' },
    { clue: 'The two genera that form endospores', meaning: 'Bacillus (aerobic) and Clostridium (anaerobic)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Bacterial structure underlies diagnosis and therapy: the Gram stain (thick peptidoglycan/teichoic acid → purple Gram-positive vs thin peptidoglycan + LPS outer membrane → pink Gram-negative) triages empirical antibiotics, LPS/endotoxin explains Gram-negative sepsis, and the wall-less/acid-fast exceptions explain intrinsic β-lactam resistance and the need for acid-fast staining. Capsules are anti-phagocytic virulence factors and vaccine targets. Physiology/culture and identification are in [[bacterial-physiology-growth-identification]]; wall-active drugs are [[antibacterial-cell-wall-agents]].' },
  ],

  mnemonics: [
    { hook: '"Gram+ = Purple, thick Peptidoglycan + teichoic; Gram− = piNk, LPS/eNdotoxin"', expansion: ['β-lactams block peptidoglycan', 'Lipid A → sepsis'] },
    { hook: '"No wall = No β-lactam" (Mycoplasma/L-form); "Mycolic acid = acid-fast" (Mycobacteria)', expansion: ['Spores: Bacillus + Clostridium', 'Capsule = antiphagocytic'] },
  ],

  traps: [
    {
      questionCategory: 'Gram stain colour and wall structure',
      wrongInstinct: 'Gram-positive and Gram-negative differ mainly in the thickness of the outer membrane',
      rightAnswer: 'Gram-POSITIVE bacteria have a THICK PEPTIDOGLYCAN layer with teichoic acids and NO outer membrane (they retain crystal violet → purple), whereas Gram-NEGATIVE bacteria have a THIN peptidoglycan layer PLUS an OUTER MEMBRANE containing LPS/endotoxin (crystal violet washes out, so they take safranin → pink); it is the outer membrane and LPS that are unique to Gram-negatives and drive endotoxic sepsis',
      why: 'The purple/pink result reflects peptidoglycan thickness and the presence of an outer membrane, which in turn predicts endotoxin-mediated sepsis (Gram-negative) and guides antibiotic choice — so the structural basis, not just the colour, matters.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The component of Gram-negative lipopolysaccharide responsible for fever, hypotension and DIC in sepsis is:',
      options: [
        { id: 'a', text: 'The O-antigen' },
        { id: 'b', text: 'Lipid A (endotoxin)' },
        { id: 'c', text: 'Teichoic acid' },
        { id: 'd', text: 'The core polysaccharide' },
      ],
      answerId: 'b',
      explanation: 'Lipid A is the toxic moiety of LPS (endotoxin) in the Gram-negative outer membrane; it triggers cytokine release causing fever, hypotension, and disseminated intravascular coagulation in Gram-negative sepsis. The O-antigen is used for serotyping, not toxicity.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Why are Mycoplasma species intrinsically resistant to β-lactam antibiotics?',
      options: [
        { id: 'a', text: 'They have a thick capsule' },
        { id: 'b', text: 'They lack a cell wall (no peptidoglycan target)' },
        { id: 'c', text: 'They are acid-fast' },
        { id: 'd', text: 'They are Gram-positive' },
      ],
      answerId: 'b',
      explanation: 'β-Lactams act by inhibiting peptidoglycan cross-linking in the cell wall; Mycoplasma (and L-forms) have no cell wall, so there is no target and they are intrinsically β-lactam resistant — treated instead with agents like macrolides or tetracyclines.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default bacterialStructureCellWall;
