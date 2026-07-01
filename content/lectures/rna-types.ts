import type { Lecture } from '../../lib/types';

export const rnaTypes: Lecture = {
  id: 'rna-types',
  title: 'RNA Types & DNA vs RNA',
  system: 'molecular',
  source: 'L3 — Nucleic Acids',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Molecular' },
    { kind: 'lecture', label: 'L3 Nucleic Acids' },
    { kind: 'disease', label: 'RNA' },
    { kind: 'mechanism', label: 'Coding vs non-coding' },
    { kind: 'exam', label: 'mRNA / tRNA / rRNA' },
  ],

  highYield: [
    '**RNA vs DNA**: RNA has **ribose** (not deoxyribose), uses **uracil** (not thymine), is usually **single-stranded** (forms hairpins by self-complementary pairing), and is the **working copy of a gene**.',
    '**Coding RNA = mRNA** (carries the genetic message to the ribosome).',
    '**Non-coding RNAs**: **tRNA** (delivers amino acids, adaptor), **rRNA** (structural/catalytic core of the ribosome — the **most abundant** RNA), **snRNA** (splicing), **miRNA** (gene regulation).',
    'Some RNAs are catalytic — **ribozymes** (e.g. the peptidyl transferase of the ribosome is rRNA).',
    'RNA’s single-stranded, self-pairing nature gives it diverse secondary structures underlying its many functions.',
  ],

  mechanism: {
    title: 'One template, several RNA products with distinct jobs',
    steps: [
      { id: 's1', label: 'Gene transcribed into RNA (ribose, U)' },
      { id: 's2', label: 'mRNA carries the code to the ribosome', emphasis: 'key' },
      { id: 's3', label: 'tRNA + rRNA translate it into protein' },
      { id: 's4', label: 'snRNA (splicing) & miRNA (regulation) fine-tune' },
    ],
  },

  examFindings: [
    { sign: 'Uracil instead of thymine in a nucleic acid', mechanism: 'RNA', significance: 'key' },
    { sign: 'Single-stranded molecule with hairpin loops', mechanism: 'Self-complementary RNA folding', significance: 'supportive' },
    { sign: 'Catalytic activity by an RNA', mechanism: 'Ribozyme (e.g. rRNA)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Sugar (ribose) + base (uracil)', meaning: 'Identifies RNA' },
    { clue: 'RNA class (mRNA/tRNA/rRNA/…)', meaning: 'Determines function' },
    { clue: 'Abundance (rRNA highest)', meaning: 'Ribosomal component' },
  ],

  treatment: [
    { logic: 'RNA-targeted therapeutics', detail: 'mRNA vaccines, siRNA/antisense drugs.' },
    { logic: 'Translation inhibitors target rRNA/ribosome', detail: 'Many antibiotics.' },
  ],

  mnemonics: [
    { hook: 'RNA: Ribose, Uracil, single-stranded (vs DNA: deoxyribose, Thymine, double)', expansion: ['Working copy of the gene'] },
    { hook: 'mRNA=message, tRNA=transfer, rRNA=ribosome (most abundant)', expansion: ['Coding vs non-coding'] },
  ],

  traps: [
    {
      questionCategory: 'Most abundant RNA in the cell',
      wrongInstinct: 'mRNA is the most abundant RNA because it carries all the genetic messages',
      rightAnswer: 'rRNA is the most abundant cellular RNA (it forms the bulk of ribosomes); mRNA is relatively scarce',
      why: 'Although mRNA carries the coding information, ribosomal RNA constitutes the majority of a cell’s RNA because ribosomes are numerous and rRNA-rich.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which feature distinguishes RNA from DNA?',
      options: [
        { id: 'a', text: 'RNA contains thymine; DNA contains uracil' },
        { id: 'b', text: 'RNA contains ribose and uracil and is usually single-stranded' },
        { id: 'c', text: 'RNA is always double-stranded like DNA' },
        { id: 'd', text: 'RNA lacks a phosphate backbone' },
      ],
      answerId: 'b',
      explanation: 'RNA uses ribose (with a 2′-OH) and uracil in place of thymine and is typically single-stranded, folding into hairpins via self-complementary regions.',
      tests: 'exam',
    },
  ],
};

export default rnaTypes;
