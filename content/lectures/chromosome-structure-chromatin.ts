import type { Lecture } from '../../lib/types';

export const chromosomeStructureChromatin: Lecture = {
  id: 'chromosome-structure-chromatin',
  title: 'Chromosome Structure & Chromatin Packaging',
  system: 'molecular',
  source: 'L6 — Cell Cycle & Human Chromosomes',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Molecular' },
    { kind: 'lecture', label: 'HGD L6' },
    { kind: 'mechanism', label: 'DNA packaging' },
    { kind: 'exam', label: 'Centromere / telomere / chromatid' },
  ],
  highYield: [
    'A chromosome is one continuous DNA double helix packaged with proteins. **Cytogenetics** studies chromosome structure, behavior, and inheritance.',
    'The basic unit is the **nucleosome**: about 140-150 bp of DNA wrapped around a histone octamer containing two each of H2A, H2B, H3, and H4. Histone H1 binds linker DNA between nucleosomes.',
    'Packaging progresses from DNA -> nucleosomes ("beads on a string") -> 30-nm chromatin fiber -> looped domains attached to a protein scaffold -> highly condensed metaphase chromosome.',
    '**Euchromatin** is relatively open and transcriptionally active; **heterochromatin** is condensed and relatively inactive.',
    'A replicated metaphase chromosome has two sister chromatids joined at a centromere. The short arm is **p**, long arm is **q**; telomeres stabilize ends. Humans normally have **46 chromosomes: 22 autosome pairs plus XX or XY**.',
  ],
  mechanism: {
    title: 'Pack two meters of DNA into a visible metaphase chromosome',
    steps: [
      { id: 's1', label: 'DNA wraps histone octamer -> nucleosome', emphasis: 'key' },
      { id: 's2', label: 'Nucleosomes compact into chromatin fiber' },
      { id: 's3', label: 'Fibers form scaffold-attached loop domains' },
      { id: 's4', label: 'Loops condense -> metaphase chromatid' },
    ],
  },
  examFindings: [
    { sign: 'Open, gene-rich, transcriptionally active chromatin', mechanism: 'Euchromatin', significance: 'key' },
    { sign: 'Acrocentric chromosome with satellite stalks', mechanism: 'Short arms carry repeated rRNA-gene regions', significance: 'supportive' },
    { sign: 'Two identical DNA structures joined at centromere', mechanism: 'Sister chromatids after S phase', significance: 'key' },
  ],
  investigations: [
    { clue: 'G-banded karyotype', meaning: 'Visualize chromosome number and large structural changes' },
    { clue: 'FISH', meaning: 'Target a specific locus or rearrangement' },
    { clue: 'Chromatin-accessibility or expression assay', meaning: 'Study functional euchromatin/heterochromatin states' },
  ],
  treatment: [
    { logic: 'Count chromosomes separately from chromatids', detail: 'A replicated chromosome still counts as one chromosome until centromeres separate.' },
    { logic: 'Read p and q relative to the centromere', detail: 'Band notation depends on arm, region, band, and sub-band.' },
  ],
  mnemonics: [
    { hook: 'p = petite; q = the other arm', expansion: ['Short arm', 'Long arm'] },
    { hook: 'DNA -> beads -> fiber -> loops -> chromosome', expansion: ['Packaging hierarchy'] },
  ],
  traps: [
    {
      questionCategory: 'Chromosome versus chromatid count',
      wrongInstinct: 'DNA replication doubles the chromosome number',
      rightAnswer: 'Replication doubles chromatids/DNA content, but chromosome number stays the same until centromeres separate',
      why: 'Chromosomes are counted by centromeres.',
    },
  ],
  quiz: [
    {
      id: 'q1',
      stem: 'Which histones form the core octamer of a nucleosome?',
      options: [
        { id: 'a', text: 'Two each of H2A, H2B, H3, and H4' },
        { id: 'b', text: 'Eight H1 molecules' },
        { id: 'c', text: 'Only H3 and H4' },
        { id: 'd', text: 'Tubulin and actin' },
      ],
      answerId: 'a',
      explanation: 'The core octamer contains two copies each of H2A, H2B, H3, and H4; H1 binds linker DNA.',
      tests: 'mechanism',
    },
  ],
};

export default chromosomeStructureChromatin;
