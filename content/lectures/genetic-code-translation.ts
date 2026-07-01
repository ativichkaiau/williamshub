import type { Lecture } from '../../lib/types';

export const geneticCodeTranslation: Lecture = {
  id: 'genetic-code-translation',
  title: 'Genetic Code & Translation',
  system: 'molecular',
  source: 'L8 — Translation & Protein Processing',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Molecular' },
    { kind: 'lecture', label: 'L8 Translation' },
    { kind: 'disease', label: 'Protein synthesis' },
    { kind: 'mechanism', label: 'Ribosome A/P/E' },
    { kind: 'exam', label: 'Antibiotic targets' },
  ],

  highYield: [
    'The **genetic code** = **64 codons** (triplets read 5′→3′ on mRNA); **AUG = start (Met)**; **UAA/UAG/UGA = stop**. It is **degenerate** (multiple codons per amino acid).',
    '**tRNA** carries an amino acid on its 3′ **CCA** end; **aminoacyl-tRNA synthetase** charges it (uses ATP, has proofreading). **Wobble** lets the 5′ anticodon base pair loosely with the 3′ codon base (inosine).',
    'The **ribosome** (prokaryote **70S = 30S+50S**; eukaryote **80S = 40S+60S**) has **A (aminoacyl), P (peptidyl), E (exit)** sites; the **large subunit’s peptidyltransferase is rRNA (a ribozyme)**.',
    'Steps: **initiation** (prokaryote **Shine-Dalgarno + fMet-tRNA**; eukaryote **cap-scanning to AUG, eIF-4E is rate-limiting**), **elongation** (EF-Tu/EF-1 deliver tRNA; peptide bond; translocation by EF-G/EF-2), **termination** (release factors at stop codon).',
    '**Antibiotics target the bacterial ribosome**: **aminoglycosides & tetracyclines → 30S**; **macrolides & chloramphenicol → 50S**.',
  ],

  mechanism: {
    title: 'Decode mRNA codon-by-codon into protein',
    steps: [
      { id: 's1', label: 'Charged tRNA enters A site (codon–anticodon match)', emphasis: 'key' },
      { id: 's2', label: 'Peptidyltransferase (rRNA) forms peptide bond' },
      { id: 's3', label: 'Translocation shifts ribosome one codon (EF-G/EF-2)' },
      { id: 's4', label: 'Stop codon → release factor frees the protein' },
    ],
  },

  examFindings: [
    { sign: 'Single-base change altering one amino acid vs a stop', mechanism: 'Missense vs nonsense mutation', significance: 'key' },
    { sign: 'Reading-frame shift after an insertion/deletion', mechanism: 'Frameshift mutation', significance: 'supportive' },
    { sign: 'Antibiotic halting bacterial protein synthesis', mechanism: '30S or 50S ribosomal target', significance: 'key' },
  ],

  investigations: [
    { clue: 'Codon table reading', meaning: 'Translate a coding sequence' },
    { clue: 'Ribosomal subunit targeted by a drug', meaning: '30S (aminoglycoside/tetracycline) vs 50S (macrolide/chloramphenicol)' },
    { clue: 'Mutation type', meaning: 'Silent/missense/nonsense/frameshift consequence' },
  ],

  treatment: [
    { logic: 'Antibiotics selectively hit the bacterial (70S) ribosome', detail: 'Spares the human 80S ribosome.' },
    { logic: 'Aminoacyl-tRNA synthetase fidelity ensures accuracy', detail: 'Proofreading prevents mischarging.' },
  ],

  mnemonics: [
    { hook: '“Buy AT 30, CELl at 50”: Aminoglycosides/Tetracyclines = 30S; Chloramphenicol/Erythromycin(macrolide)/Lincosamide = 50S', expansion: ['Bacterial ribosome targets'] },
    { hook: 'A = incoming Aminoacyl, P = Peptidyl, E = Exit', expansion: ['tRNA moves A→P→E'] },
  ],

  traps: [
    {
      questionCategory: 'Which enzyme forms the peptide bond',
      wrongInstinct: 'A protein enzyme in the ribosome catalyzes peptide-bond formation',
      rightAnswer: 'Peptide-bond formation is catalyzed by the peptidyltransferase activity of the large-subunit rRNA — a ribozyme, not a protein',
      why: 'The ribosome’s catalytic core is RNA; recognizing that rRNA is the peptidyltransferase explains why several antibiotics that bind rRNA block protein synthesis.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Aminoglycoside and tetracycline antibiotics inhibit bacterial protein synthesis by binding which ribosomal subunit?',
      options: [
        { id: 'a', text: '50S' },
        { id: 'b', text: '30S' },
        { id: 'c', text: '60S' },
        { id: 'd', text: '40S' },
      ],
      answerId: 'b',
      explanation: 'Aminoglycosides and tetracyclines act on the 30S subunit of the bacterial ribosome; macrolides and chloramphenicol act on the 50S subunit.',
      tests: 'exam',
    },
  ],
};

export default geneticCodeTranslation;
