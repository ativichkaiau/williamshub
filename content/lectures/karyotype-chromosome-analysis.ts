import type { Lecture } from '../../lib/types';

export const karyotypeChromosomeAnalysis: Lecture = {
  id: 'karyotype-chromosome-analysis',
  title: 'Karyotype, Banding & Chromosome Analysis',
  system: 'molecular',
  source: 'L6 — Cell Cycle & Human Chromosomes',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Genetics' },
    { kind: 'lecture', label: 'HGD L6' },
    { kind: 'investigation', label: 'Karyotype / G-banding / FISH' },
    { kind: 'mechanism', label: 'Metaphase chromosome preparation' },
    { kind: 'exam', label: 'Cytogenetic notation' },
  ],
  highYield: [
    'Chromosome analysis is indicated for abnormal prenatal screening/ultrasound, advanced maternal age, developmental or growth problems, stillbirth/neonatal death, infertility, family history, and selected neoplasms.',
    'Prenatal specimens include amniocytes, chorionic villi, and cord-blood lymphocytes; postnatal specimens include peripheral-blood lymphocytes, skin fibroblasts, marrow, and tumor tissue.',
    'For blood karyotyping, stimulate lymphocytes with **phytohemagglutinin**, arrest spindle formation in metaphase with **colcemid**, swell cells in hypotonic KCl, fix with methanol:acetic acid, and drop cells to create a metaphase spread.',
    '**G-banding** uses trypsin plus Giemsa; G-dark bands are relatively AT-rich/gene-poor, while G-light bands are relatively GC-rich/gene-rich. Q-banding produces a corresponding fluorescent pattern.',
    'A karyotype arranges homologs by size, centromere position, and band pattern. Band notation reads **chromosome + arm + region + band + sub-band** (e.g. 5p15.2 or Xp11.3), moving outward from the centromere.',
  ],
  mechanism: {
    title: 'Turn dividing cells into an interpretable chromosome map',
    steps: [
      { id: 's1', label: 'Culture and stimulate dividing cells' },
      { id: 's2', label: 'Colcemid arrests metaphase' },
      { id: 's3', label: 'Hypotonic swelling + fixation -> chromosome spread' },
      { id: 's4', label: 'Band, pair, and name chromosome regions', emphasis: 'key' },
    ],
  },
  examFindings: [
    { sign: '46,XY', mechanism: 'Normal male chromosome count and sex-chromosome complement', significance: 'supportive' },
    { sign: '5p15.2', mechanism: 'Chromosome 5, short arm, region 1, band 5, sub-band 2', significance: 'key' },
    { sign: 'Bright Q band corresponding to dark G band', mechanism: 'Alternative banding patterns identify the same chromosome regions', significance: 'key' },
  ],
  investigations: [
    { clue: 'Conventional karyotype', meaning: 'Detect aneuploidy and large balanced/unbalanced rearrangements' },
    { clue: 'FISH', meaning: 'Rapid targeted locus/copy-number or rearrangement assessment' },
    { clue: 'Chromosomal microarray', meaning: 'Detect smaller genome-wide copy-number changes not visible by karyotype' },
  ],
  treatment: [
    { logic: 'Choose the assay by resolution and question', detail: 'Karyotype sees architecture, FISH is targeted, and microarray finds smaller copy-number changes.' },
    { logic: 'Read band notation from centromere outward', detail: 'Region/band numbers increase toward telomeres.' },
  ],
  mnemonics: [
    { hook: 'Culture, colcemid, KCl, fix, G-band', expansion: ['Metaphase-spread workflow'] },
    { hook: 'Number-arm-region-band-sub-band', expansion: ['Order of cytogenetic address'] },
  ],
  traps: [
    {
      questionCategory: 'Limits of a normal karyotype',
      wrongInstinct: 'A normal karyotype excludes every genetic disorder',
      rightAnswer: 'Karyotyping misses small copy-number changes and sequence variants below its resolution',
      why: 'A normal chromosome silhouette does not prove normal DNA sequence.',
    },
  ],
  quiz: [
    {
      id: 'q1',
      stem: 'Why is colcemid added during conventional chromosome preparation?',
      options: [
        { id: 'a', text: 'To arrest cells in metaphase by disrupting spindle formation' },
        { id: 'b', text: 'To replicate DNA' },
        { id: 'c', text: 'To stain GC-rich bands directly' },
        { id: 'd', text: 'To fuse homologous chromosomes' },
      ],
      answerId: 'a',
      explanation: 'Colcemid interferes with spindle microtubules and enriches cells in metaphase, when chromosomes are maximally condensed.',
      tests: 'investigation',
    },
  ],
};

export default karyotypeChromosomeAnalysis;
