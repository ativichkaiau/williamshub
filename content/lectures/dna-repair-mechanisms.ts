import type { Lecture } from '../../lib/types';

export const dnaRepairMechanisms: Lecture = {
  id: 'dna-repair-mechanisms',
  title: 'DNA Repair Mechanisms & Disorders',
  system: 'molecular',
  source: 'L6 — DNA Repair & Human Genome',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Molecular' },
    { kind: 'lecture', label: 'L6 DNA Repair & Genome' },
    { kind: 'disease', label: 'Repair defects' },
    { kind: 'mechanism', label: 'BER / NER / MMR / DSB' },
    { kind: 'exam', label: 'XP · Lynch · BRCA' },
  ],

  highYield: [
    '**Base-excision repair (BER)** fixes single **abnormal bases / AP sites**: a **DNA glycosylase** (e.g. uracil-DNA glycosylase) removes the base → **AP endonuclease** nicks → polymerase + ligase fill.',
    '**Nucleotide-excision repair (NER)** removes **bulky/helix-distorting lesions (pyrimidine dimers, adducts)**; defect → **Xeroderma pigmentosum** (GG-NER, extreme UV sensitivity, skin cancer) or **Cockayne syndrome** (TC-NER, growth failure & premature aging, no cancer predisposition).',
    '**Mismatch repair (MMR)** corrects **replication mismatches** (MutS/MutL, EXO1, Pol δ); defect (**MSH2/MLH1**) → **Lynch syndrome (HNPCC)** — hereditary colorectal cancer with microsatellite instability.',
    '**Double-strand break repair**: **homologous recombination (HR)** — accurate, uses the sister chromatid, **S/G2 phase** (MRN, RAD51, **BRCA1/2**; defect → breast/ovarian cancer); **non-homologous end-joining (NHEJ)** — error-prone, **G1 phase** (Ku70/80, DNA-PKcs, Ligase IV).',
    '**Translesion synthesis (TLS)** lets special (error-prone) polymerases replicate **past** a lesion — damage tolerance, not true repair.',
  ],

  mechanism: {
    title: 'Match the lesion to the repair pathway',
    steps: [
      { id: 's1', label: 'Abnormal base / AP site → BER (glycosylase)', emphasis: 'key' },
      { id: 's2', label: 'Bulky/UV lesion → NER (excise the oligonucleotide)' },
      { id: 's3', label: 'Replication mismatch → MMR' },
      { id: 's4', label: 'Double-strand break → HR (accurate) or NHEJ (error-prone)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Severe sunburn, freckling, skin cancers in childhood', mechanism: 'Xeroderma pigmentosum (NER defect)', significance: 'key' },
    { sign: 'Early colorectal cancer with microsatellite instability', mechanism: 'Lynch syndrome (MMR defect: MSH2/MLH1)', significance: 'key' },
    { sign: 'Hereditary breast/ovarian cancer', mechanism: 'BRCA1/2 (homologous recombination defect)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Lesion type (base, bulky, mismatch, break)', meaning: 'Predicts responsible pathway' },
    { clue: 'Microsatellite instability / MMR immunostains', meaning: 'Lynch syndrome' },
    { clue: 'BRCA testing', meaning: 'HR-deficiency cancer risk' },
  ],

  treatment: [
    { logic: 'Sun protection / surveillance in repair-deficiency syndromes', detail: 'XP, Lynch, BRCA carriers.' },
    { logic: 'PARP inhibitors exploit HR (BRCA) deficiency', detail: 'Synthetic lethality in BRCA-mutant tumors.' },
  ],

  mnemonics: [
    { hook: 'NER defect = Xeroderma pigmentosum (UV/skin cancer)', expansion: ['Cockayne = TC-NER, premature aging'] },
    { hook: 'MMR defect = Lynch (colon); HR/BRCA defect = breast/ovarian', expansion: ['HR (S/G2, accurate) vs NHEJ (G1, error-prone)'] },
  ],

  traps: [
    {
      questionCategory: 'HR vs NHEJ for double-strand breaks',
      wrongInstinct: 'Both double-strand-break pathways repair the DNA equally accurately',
      rightAnswer: 'Homologous recombination is accurate (uses the sister chromatid in S/G2); non-homologous end-joining is error-prone and operates in G1',
      why: 'HR copies from an intact template so it restores the sequence faithfully, whereas NHEJ simply ligates the broken ends and often introduces small insertions/deletions.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A child with extreme sensitivity to sunlight develops multiple skin cancers early in life due to an inability to remove UV-induced pyrimidine dimers. The defective repair pathway is:',
      options: [
        { id: 'a', text: 'Base-excision repair' },
        { id: 'b', text: 'Nucleotide-excision repair (xeroderma pigmentosum)' },
        { id: 'c', text: 'Mismatch repair' },
        { id: 'd', text: 'Non-homologous end-joining' },
      ],
      answerId: 'b',
      explanation: 'Xeroderma pigmentosum results from defective nucleotide-excision repair, which normally removes bulky UV-induced pyrimidine dimers; patients are extremely photosensitive and cancer-prone.',
      tests: 'exam',
    },
  ],
};

export default dnaRepairMechanisms;
