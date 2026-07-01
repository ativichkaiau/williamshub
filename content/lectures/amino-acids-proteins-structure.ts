import type { Lecture } from '../../lib/types';

export const aminoAcidsProteinsStructure: Lecture = {
  id: 'amino-acids-proteins-structure',
  title: 'Amino Acids & Protein Structure',
  system: 'molecular',
  source: 'L1 — Amino Acids & Proteins',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Molecular' },
    { kind: 'lecture', label: 'L1 Amino Acids & Proteins' },
    { kind: 'disease', label: 'Protein structure' },
    { kind: 'mechanism', label: '1°–4° structure' },
    { kind: 'exam', label: 'R-group classes' },
  ],

  highYield: [
    '**20 DNA-encoded amino acids**, each with an α-carbon, amino group, carboxyl group, and a distinguishing **R group**. Humans use the **L-form**; all are chiral **except glycine**.',
    'R-group classes: **nonpolar** (hydrophobic), **polar uncharged (neutral)**, **acidic** (negative — Asp, Glu), **basic** (positive — Lys, Arg, His). **Selenocysteine = the “21st” amino acid** (recoded UGA codon; in glutathione peroxidase, deiodinase).',
    '**Peptide bond** = an amide linking the carboxyl of one AA to the amino group of the next (dehydration); it is **rigid and planar**. Chains: peptide (<10) → polypeptide (10–100) → protein (>100).',
    'Four structure levels: **1° = sequence**; **2° = α-helix / β-sheet** (backbone H-bonds); **3° = 3D fold** (R-group interactions, disulfides); **4° = multiple subunits**.',
    '**Globular proteins** = water-soluble, compact, mostly functional (enzymes, hemoglobin); **fibrous proteins** = insoluble, elongated, structural (collagen, elastin).',
  ],

  mechanism: {
    title: 'Sequence dictates fold dictates function',
    steps: [
      { id: 's1', label: 'Amino acids joined by peptide bonds (1°)' },
      { id: 's2', label: 'Backbone H-bonds → α-helix / β-sheet (2°)', emphasis: 'key' },
      { id: 's3', label: 'R-group interactions fold the chain (3°)' },
      { id: 's4', label: 'Subunits assemble (4°) → functional protein' },
    ],
  },

  examFindings: [
    { sign: 'Charge-based separation of proteins (electrophoresis)', mechanism: 'Acidic/basic R groups give net charge at a given pH', significance: 'key' },
    { sign: 'Disulfide bonds stabilizing a fold', mechanism: 'Cysteine –SH groups oxidize (tertiary structure)', significance: 'supportive' },
    { sign: 'Loss of function on heating (denaturation)', mechanism: 'Non-covalent structure disrupted; sequence intact', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Electrophoresis / isoelectric focusing', meaning: 'Separates by charge (R-group properties)' },
    { clue: 'R-group class (polar/nonpolar/charged)', meaning: 'Predicts location in a folded protein' },
    { clue: 'Structure level involved', meaning: '1° (sequence) vs higher-order (folding)' },
  ],

  treatment: [
    { logic: 'Structure–function underlies every protein disease', detail: 'A single sequence change can abolish function.' },
    { logic: 'Essential amino acids must come from diet', detail: 'The body cannot synthesize them.' },
  ],

  mnemonics: [
    { hook: 'Acidic = Asp/Glu (negative); Basic = Lys/Arg/His (positive)', expansion: ['Charged R groups drive electrophoresis'] },
    { hook: '1°=sequence, 2°=helix/sheet, 3°=fold, 4°=subunits', expansion: ['Only multi-subunit proteins have quaternary structure'] },
  ],

  traps: [
    {
      questionCategory: 'What denaturation changes',
      wrongInstinct: 'Denaturing a protein breaks its peptide bonds and changes the primary sequence',
      rightAnswer: 'Denaturation disrupts the non-covalent 2°/3°/4° structure but leaves the primary sequence (peptide bonds) intact',
      why: 'Heat, pH, or chaotropes unfold a protein by breaking H-bonds and hydrophobic interactions; the covalent backbone sequence is unchanged, which is why some proteins can refold.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which level of protein structure is defined by the pattern of α-helices and β-sheets formed through backbone hydrogen bonds?',
      options: [
        { id: 'a', text: 'Primary structure' },
        { id: 'b', text: 'Secondary structure' },
        { id: 'c', text: 'Tertiary structure' },
        { id: 'd', text: 'Quaternary structure' },
      ],
      answerId: 'b',
      explanation: 'Secondary structure (α-helix, β-sheet) arises from hydrogen bonding along the peptide backbone. Primary is the sequence, tertiary is the 3-D fold, and quaternary is the assembly of subunits.',
      tests: 'exam',
    },
  ],
};

export default aminoAcidsProteinsStructure;
