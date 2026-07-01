import type { Lecture } from '../../lib/types';

export const chromosomeCopyStructureAbnormalities: Lecture = {
  id: 'chromosome-copy-structure-abnormalities',
  title: 'Deletion, Duplication, Ring & Isochromosome',
  system: 'molecular',
  source: 'L7 — Chromosome Aberrations',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Genetics' },
    { kind: 'lecture', label: 'HGD L7' },
    { kind: 'mechanism', label: 'Chromosome breakage and abnormal reunion' },
    { kind: 'exam', label: 'Copy-number imbalance' },
  ],
  highYield: [
    'Structural rearrangements follow chromosome breakage and abnormal reconstitution. **Balanced** rearrangements preserve the expected amount of chromosomal material; **unbalanced** rearrangements create gain or loss.',
    'A **deletion** loses a terminal or interstitial segment; a **duplication** adds a second copy of a segment. Both alter gene dosage, and their phenotype depends on the genes and size involved.',
    'A **dicentric chromosome** contains two centromeres after fusion of centromere-bearing fragments and is mechanically unstable; an acentric fragment lacks a centromere and is usually lost.',
    'A **ring chromosome** forms when both ends break and the remaining ends fuse, usually with terminal deletions. Ring instability can produce variable mosaic phenotypes.',
    'An **isochromosome** loses one arm and duplicates the other, often from transverse centromere division. It simultaneously causes partial monosomy for one arm and partial trisomy for the other (e.g. i(Xq)).',
  ],
  mechanism: {
    title: 'Breakage plus abnormal repair changes dosage and geometry',
    steps: [
      { id: 's1', label: 'Chromosome breaks at one or more sites' },
      { id: 's2', label: 'Segment is lost, duplicated, or abnormally joined', emphasis: 'key' },
      { id: 's3', label: 'Centromere/telomere configuration changes' },
      { id: 's4', label: 'Gene dosage imbalance or mitotic instability -> phenotype' },
    ],
  },
  examFindings: [
    { sign: 'Terminal loss from 5p', mechanism: 'Deletion causing partial monosomy (cri-du-chat pattern)', significance: 'key' },
    { sign: 'Mirror-image chromosome arms', mechanism: 'Isochromosome', significance: 'key' },
    { sign: 'Circular chromosome with terminal material missing', mechanism: 'Ring chromosome', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Karyotype', meaning: 'See large rings, isochromosomes, dicentrics, and deletions/duplications' },
    { clue: 'Chromosomal microarray', meaning: 'Define copy-number gain/loss and size' },
    { clue: 'FISH', meaning: 'Confirm a suspected missing, duplicated, or marker segment' },
  ],
  treatment: [
    { logic: 'Describe structure and dosage separately', detail: 'A visually rearranged chromosome may be balanced or unbalanced.' },
    { logic: 'Define breakpoints at the highest useful resolution', detail: 'Gene content, not chromosome shape alone, drives phenotype.' },
  ],
  mnemonics: [
    { hook: 'Iso = identical arms', expansion: ['One arm lost, the other duplicated'] },
    { hook: 'Ring = break both tips, reunite the ends', expansion: ['Usually terminal deletions'] },
  ],
  traps: [
    {
      questionCategory: 'Isochromosome dosage',
      wrongInstinct: 'An isochromosome is balanced because it still has two arms',
      rightAnswer: 'It duplicates one arm and deletes the other, causing partial trisomy plus partial monosomy',
      why: 'Arm count is preserved, but genetic content is not.',
    },
  ],
  quiz: [
    {
      id: 'q1',
      stem: 'A chromosome consists of two copies of its long arm and no short arm. This is:',
      options: [
        { id: 'a', text: 'Isochromosome' },
        { id: 'b', text: 'Reciprocal translocation' },
        { id: 'c', text: 'Paracentric inversion' },
        { id: 'd', text: 'Triploidy' },
      ],
      answerId: 'a',
      explanation: 'An isochromosome contains mirror-image copies of one arm with loss of the other.',
      tests: 'exam',
    },
  ],
};

export default chromosomeCopyStructureAbnormalities;
