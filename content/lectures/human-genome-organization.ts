import type { Lecture } from '../../lib/types';

export const humanGenomeOrganization: Lecture = {
  id: 'human-genome-organization',
  title: 'Human Genome Organization',
  system: 'molecular',
  source: 'L6 — DNA Repair & Human Genome',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Molecular' },
    { kind: 'lecture', label: 'L6 DNA Repair & Genome' },
    { kind: 'disease', label: 'Genome' },
    { kind: 'mechanism', label: 'Genes & repeats' },
    { kind: 'exam', label: 'Exon/intron · SNP' },
  ],

  highYield: [
    'The **nuclear genome** ≈ **3.0–3.2 Gb (haploid): 22 autosomes + X + Y**. The **mitochondrial genome** = a small **~16.6-kb circular dsDNA**, present in many copies, **inherited exclusively from the mother**.',
    'Genome content is mostly non-coding: **transposons ~48%** (retrotransposons — LTR, **SINEs/Alu**, **LINEs/L1** — “copy-and-paste”; DNA transposons “cut-and-paste”), **protein-coding genes only ~1.5% coding** (with **~26% introns**), plus repeats and heterochromatin.',
    '**Exon** = sequence retained in mature mRNA; **intron** = transcribed but **removed by RNA splicing**.',
    'Chromosome landmarks: **centromere, telomeres, p (short) and q (long) arms**; **euchromatin** (open, active) vs **heterochromatin** (condensed, silent).',
    '**Human DNA is ~99.9% identical** between people; the commonest variation is the **single-nucleotide polymorphism (SNP)** (~every 500–1000 bp). By convention a **variant in >1% of the population is a polymorphism; <1% is a mutation**. **Short tandem repeats (STRs)** underlie DNA fingerprinting.',
  ],

  mechanism: {
    title: 'A little coding DNA in a sea of repeats and regulation',
    steps: [
      { id: 's1', label: 'Nuclear (46 chromosomes) + mitochondrial (maternal) genomes' },
      { id: 's2', label: 'Genes: exons (kept) + introns (spliced out)', emphasis: 'key' },
      { id: 's3', label: 'Most of the genome = transposons & repeats' },
      { id: 's4', label: 'Variation: SNPs (>1% = polymorphism), STRs (fingerprinting)' },
    ],
  },

  examFindings: [
    { sign: 'Maternal (mitochondrial) inheritance pattern', mechanism: 'mtDNA passed only from the mother', significance: 'key' },
    { sign: 'STR/microsatellite profile unique per person', mechanism: 'Variable tandem-repeat number', significance: 'key' },
    { sign: 'Silenced genes in condensed regions', mechanism: 'Heterochromatin', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'STR analysis', meaning: 'DNA fingerprinting / identity' },
    { clue: 'SNP genotyping', meaning: 'Disease susceptibility & drug response (pharmacogenomics)' },
    { clue: 'Karyotype / sequencing', meaning: 'Chromosomal vs single-gene variation' },
  ],

  treatment: [
    { logic: 'SNPs inform precision (personalized) medicine', detail: 'Predict drug response and disease risk.' },
    { logic: 'Mitochondrial disease follows maternal inheritance', detail: 'Relevant to genetic counseling.' },
  ],

  mnemonics: [
    { hook: 'EXons are EXpressed; INtrons are IN-between (spliced out)', expansion: ['Only exons reach mature mRNA'] },
    { hook: 'SNP = variant in >1% of people; mutation = <1%', expansion: ['STRs → DNA fingerprint'] },
  ],

  traps: [
    {
      questionCategory: 'SNP vs mutation',
      wrongInstinct: 'Any single-base difference between two people is a mutation',
      rightAnswer: 'A single-base variant present in >1% of the population is called a polymorphism (SNP); the term mutation is reserved for variants at <1% frequency',
      why: 'The distinction is by population frequency, not by mechanism — common single-base variants are SNPs (useful in association studies), while rare ones are termed mutations.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Regions of a gene that are transcribed but removed by splicing and therefore absent from the mature mRNA are called:',
      options: [
        { id: 'a', text: 'Exons' },
        { id: 'b', text: 'Introns' },
        { id: 'c', text: 'Promoters' },
        { id: 'd', text: 'Telomeres' },
      ],
      answerId: 'b',
      explanation: 'Introns are transcribed into pre-mRNA but excised by RNA splicing, so only the exons remain in the mature mRNA.',
      tests: 'exam',
    },
  ],
};

export default humanGenomeOrganization;
