import type { Lecture } from '../../lib/types';

export const developmentalGeneticRegulation: Lecture = {
  id: 'developmental-genetic-regulation',
  title: 'Genes, Signaling & Developmental Control',
  system: 'molecular',
  source: 'L1 — Genes & Embryonic Development',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Molecular' },
    { kind: 'lecture', label: 'HGD L1' },
    { kind: 'mechanism', label: 'Gene expression and signaling' },
    { kind: 'exam', label: 'HOX / SHH / SRY / PAX' },
  ],
  highYield: [
    'Development follows **epigenesis**: simple beginnings become complex through regulated cell division, migration, aggregation, folding, growth, and differentiation - not by enlargement of a preformed miniature body.',
    '**Genotype interacts with environment to produce phenotype.** Cells with the same DNA acquire different fates because they express different genes in response to position, signaling, and lineage history.',
    'Developmental signals such as **FGF, SHH, WNT, IGF, and Notch** alter transcription-factor activity. Paracrine and juxtacrine signaling convert extracellular information into cell-specific gene expression.',
    'High-yield developmental regulators include **HOX genes** (regional body pattern), **SHH** (patterning and midline), **SRY** (testis determination), and **PAX genes** (organ-specific transcriptional programs).',
    '**Epigenetic regulation changes expression without changing DNA sequence**: DNA/histone methylation generally compacts chromatin, while histone acetylation opens chromatin and supports transcription.',
  ],
  mechanism: {
    title: 'Signal to transcription to cell fate',
    steps: [
      { id: 's1', label: 'Position-dependent developmental signal' },
      { id: 's2', label: 'Receptor and intracellular transduction' },
      { id: 's3', label: 'Transcription factor / chromatin change', emphasis: 'key' },
      { id: 's4', label: 'Selective gene expression -> differentiation and pattern' },
    ],
  },
  examFindings: [
    { sign: 'Normal DNA sequence with heritable transcriptional silencing', mechanism: 'Epigenetic methylation/chromatin compaction', significance: 'key' },
    { sign: 'Regional body-pattern abnormality', mechanism: 'Disrupted HOX-patterning program', significance: 'supportive' },
    { sign: '46,XX testicular development after SRY translocation', mechanism: 'SRY initiates the testis-determining pathway', significance: 'key' },
  ],
  investigations: [
    { clue: 'Karyotype/FISH or molecular testing', meaning: 'Identify chromosomal or locus-level developmental defects' },
    { clue: 'Gene-expression or epigenetic assay', meaning: 'Distinguish sequence change from altered regulation' },
    { clue: 'Phenotype plus exposure history', meaning: 'Assess genotype-environment interaction' },
  ],
  treatment: [
    { logic: 'Trace a defect from signal to gene expression to tissue', detail: 'The same pathway can produce different phenotypes in different developmental windows.' },
    { logic: 'Separate mutation from epigenetic dysregulation', detail: 'Both change phenotype, but only one changes DNA sequence.' },
  ],
  mnemonics: [
    { hook: 'HOX = body address; SHH = pattern; SRY = testis; PAX = organ program', expansion: ['Four developmental regulators'] },
    { hook: 'Acetylation opens; methylation mutes', expansion: ['Chromatin accessibility'] },
  ],
  traps: [
    {
      questionCategory: 'Epigenetic versus genetic change',
      wrongInstinct: 'Any inherited change in gene expression must alter the DNA base sequence',
      rightAnswer: 'Epigenetic marks can transmit an expression state without changing nucleotide sequence',
      why: 'DNA methylation and histone modification regulate chromatin accessibility rather than gene sequence.',
    },
  ],
  quiz: [
    {
      id: 'q1',
      stem: 'Which change most directly makes chromatin more accessible to transcription factors?',
      options: [
        { id: 'a', text: 'Histone acetylation' },
        { id: 'b', text: 'Dense DNA methylation' },
        { id: 'c', text: 'Centromere condensation' },
        { id: 'd', text: 'Telomere shortening' },
      ],
      answerId: 'a',
      explanation: 'Histone acetylation loosens nucleosome packing and generally promotes access to transcriptional machinery.',
      tests: 'mechanism',
    },
  ],
};

export default developmentalGeneticRegulation;
