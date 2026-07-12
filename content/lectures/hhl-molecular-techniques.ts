import type { Lecture } from '../../lib/types';

export const hhlMolecularTechniques: Lecture = {
  id: 'hhl-molecular-techniques',
  title: 'Molecular Techniques in Hematology',
  system: 'heme',
  source: 'L18 — Molecular Basis in Hematology',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L18 Molecular' },
    { kind: 'mechanism', label: 'Hybridization & amplification' },
    { kind: 'investigation', label: 'PCR · FISH · NGS' },
  ],

  highYield: [
    '**Hybridization** relies on complementary base-pairing of a labelled probe: **Southern blot** (DNA), **FISH** (fluorescent probe on cells) — detects **translocations/deletions** (e.g. **BCR-ABL**, myeloma deletions) even in non-dividing cells.',
    '**PCR amplifies a target sequence**; **RT-PCR** starts from RNA (needed for **fusion transcripts** like BCR-ABL); **quantitative (real-time) PCR** measures amount → the tool for **minimal residual disease (MRD)** monitoring.',
    '**Sanger sequencing** and **next-generation sequencing (NGS)** read the actual bases → detect **point mutations** (e.g. JAK2 V617F) and screen many genes at once.',
    '**Match the technique to the question**: FISH/karyotype for large rearrangements at **diagnosis**; quantitative RT-PCR for sensitive **MRD monitoring**; sequencing/NGS for **point mutations**. See [[hhl-molecular-diagnostics-heme]].',
  ],

  mechanism: {
    title: 'Complementarity + amplification underlie every tool',
    steps: [
      { id: 's1', label: 'Denature double-stranded DNA into single strands' },
      { id: 's2', label: 'Labelled complementary probe/primer anneals to its target (hybridization)', emphasis: 'key' },
      { id: 's3', label: 'Detect a signal (blot/FISH) OR extend and amplify (PCR)', emphasis: 'key' },
      { id: 's4', label: 'Real-time PCR reads copy number → MRD sensitivity to ~1 in 10^5' },
      { id: 's5', label: 'Sequencing/NGS reads base order → point mutations and gene panels' },
    ],
  },

  examFindings: [
    { sign: 'Fluorescent fusion signal on interphase nuclei', mechanism: 'FISH probe spans a translocation breakpoint (e.g. BCR-ABL)', significance: 'key' },
    { sign: 'Amplified band of the expected size on gel electrophoresis', mechanism: 'PCR product separated by size/charge', significance: 'supportive' },
    { sign: 'Rising real-time PCR copy number on serial samples', mechanism: 'Quantitative detection of a residual/relapsing clone', significance: 'key' },
  ],

  investigations: [
    { clue: 'Need to detect a fusion GENE in non-dividing cells', meaning: 'Interphase FISH — no cell culture required' },
    { clue: 'Need to detect and quantify a fusion TRANSCRIPT', meaning: 'RT-PCR / real-time quantitative PCR' },
    { clue: 'Need to find a single-base point mutation or screen many genes', meaning: 'Sanger sequencing or NGS' },
    { clue: 'Need to detect very low-level residual leukemia after treatment', meaning: 'Quantitative RT-PCR (MRD) — highest sensitivity' },
  ],

  treatment: [
    { logic: 'Choose the assay by clinical purpose, not by habit', detail: 'Diagnose a rearrangement → FISH/karyotype; monitor sensitively → quantitative RT-PCR; find a point mutation → sequencing/NGS.' },
    { logic: 'Use RNA-based (RT-PCR) methods for fusion transcripts', detail: 'Genomic breakpoints scatter across introns; the spliced transcript is uniform and quantifiable.' },
  ],

  mnemonics: [
    { hook: 'SNoW DRoP — blot orientation', expansion: ['Southern = DNA', 'Northern = RNA', 'Western = protein'] },
    { hook: 'FISH finds fusions; qPCR follows them', expansion: ['FISH/karyotype → diagnose a translocation', 'Quantitative RT-PCR → monitor MRD', 'Sequencing/NGS → point mutations'] },
  ],

  traps: [
    {
      questionCategory: 'Right tool for MRD monitoring',
      wrongInstinct: 'Use FISH or karyotype to monitor minimal residual disease',
      rightAnswer: 'Quantitative RT-PCR is the sensitive tool for MRD; FISH/karyotype are better for initial detection',
      why: 'MRD needs sensitivity to ~1 leukemic cell in 10^4–10^5 — only quantitative PCR reaches that.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which technique best detects and QUANTIFIES the BCR-ABL fusion transcript for monitoring residual disease in CML?',
      options: [
        { id: 'a', text: 'Metaphase karyotype' },
        { id: 'b', text: 'Real-time quantitative RT-PCR' },
        { id: 'c', text: 'Southern blot' },
        { id: 'd', text: 'Western blot' },
      ],
      answerId: 'b',
      explanation: 'Real-time quantitative RT-PCR both detects and quantifies the BCR-ABL transcript, giving the sensitivity needed for minimal residual disease monitoring.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A laboratory must detect a translocation in cells that are not dividing. The best method is:',
      options: [
        { id: 'a', text: 'Metaphase karyotype' },
        { id: 'b', text: 'Interphase FISH' },
        { id: 'c', text: 'Serum protein electrophoresis' },
        { id: 'd', text: 'Flow cytometry immunophenotyping' },
      ],
      answerId: 'b',
      explanation: 'Interphase FISH detects translocations without needing dividing cells, unlike karyotyping which requires metaphase spreads.',
      tests: 'investigation',
    },
  ],
};

export default hhlMolecularTechniques;
