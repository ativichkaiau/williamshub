import type { Lecture } from '../../lib/types';

export const mutationsDnaDamage: Lecture = {
  id: 'mutations-dna-damage',
  title: 'Mutations & DNA Damage',
  system: 'molecular',
  source: 'L6 — DNA Repair & Human Genome',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Molecular' },
    { kind: 'lecture', label: 'L6 DNA Repair & Genome' },
    { kind: 'disease', label: 'Mutation' },
    { kind: 'mechanism', label: 'Mutagens & spontaneous damage' },
    { kind: 'exam', label: 'Point vs frameshift' },
  ],

  highYield: [
    '**Point (small-scale) mutations**: **silent** (same amino acid), **missense** (different amino acid — e.g. sickle cell), **nonsense** (premature stop — UAG/UAA/UGA), **frameshift** (insertion/deletion shifting the reading frame).',
    '**Large-scale (chromosomal) mutations**: structural (deletion, insertion, duplication, inversion, translocation) and numerical (**polyploidy**, **aneuploidy** — e.g. trisomy 21).',
    '**Mutagens & their lesions**: **UV → pyrimidine (thymine) dimers**; ionizing **radiation → strand breaks**; **reactive oxygen species → base oxidation (8-oxoguanine → G:T transversions)**; **alkylating agents → base alkylation**; **crosslinking agents → intra/inter-strand crosslinks**.',
    '**Spontaneous damage** is constant: **depurination (~10,000 bases/cell/day)** → abasic (AP) sites, and **deamination** (cytosine → uracil ~100/day) generating abnormal bases.',
    'Distorting lesions (dimers, bulky adducts, crosslinks) **block replication and transcription**, so cells maintain multiple repair systems (next module).',
  ],

  mechanism: {
    title: 'Damage type → the mutation it causes',
    steps: [
      { id: 's1', label: 'Environmental mutagen or spontaneous decay' },
      { id: 's2', label: 'Specific lesion (dimer, oxidation, alkylation, AP site)', emphasis: 'key' },
      { id: 's3', label: 'If unrepaired → mispairing at replication' },
      { id: 's4', label: 'Point vs frameshift vs chromosomal mutation', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Skin lesions after UV exposure', mechanism: 'Pyrimidine dimers', significance: 'key' },
    { sign: 'G→T transversions', mechanism: '8-oxoguanine mispairs with adenine (ROS)', significance: 'key' },
    { sign: 'Reading-frame disruption + premature stop', mechanism: 'Frameshift mutation', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Type of exposure (UV, radiation, chemical)', meaning: 'Predicts the lesion' },
    { clue: 'Sequence change (silent/missense/nonsense/frameshift)', meaning: 'Classifies the mutation' },
    { clue: 'Karyotype', meaning: 'Chromosomal (numerical/structural) mutations' },
  ],

  treatment: [
    { logic: 'Reduce mutagen exposure (sun protection, avoid carcinogens)', detail: 'Primary prevention of DNA damage.' },
    { logic: 'Repair systems limit mutation burden', detail: 'Their failure predisposes to cancer.' },
  ],

  mnemonics: [
    { hook: 'UV → pyrimidine dimers; ROS → 8-oxoguanine (G→T)', expansion: ['Characteristic mutagen–lesion pairs'] },
    { hook: 'Silent · Missense · Nonsense · Frameshift', expansion: ['Frameshift usually hits a premature stop'] },
  ],

  traps: [
    {
      questionCategory: 'Silent vs missense mutation',
      wrongInstinct: 'Any single-base change alters the encoded protein',
      rightAnswer: 'A silent mutation changes the codon but not the amino acid (degenerate code); a missense mutation changes the amino acid',
      why: 'Because the genetic code is degenerate, some base substitutions (especially in the third position) leave the amino acid unchanged — those are silent, not missense.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Ultraviolet light most characteristically produces which type of DNA lesion?',
      options: [
        { id: 'a', text: 'Double-strand breaks' },
        { id: 'b', text: 'Pyrimidine (thymine) dimers' },
        { id: 'c', text: 'Depurination' },
        { id: 'd', text: 'Cytosine deamination' },
      ],
      answerId: 'b',
      explanation: 'UV light forms covalent pyrimidine (thymine) dimers that distort the helix and block replication/transcription; these are repaired by nucleotide-excision repair.',
      tests: 'exam',
    },
  ],
};

export default mutationsDnaDamage;
