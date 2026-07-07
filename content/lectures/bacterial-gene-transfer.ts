import type { Lecture } from '../../lib/types';

export const bacterialGeneTransfer: Lecture = {
  id: 'bacterial-gene-transfer',
  title: 'Bacterial Genetics & Gene Transfer',
  system: 'microbiology',
  source: 'L9 — Bacterial Genetics & Antibiotic Resistance',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Micro' },
    { kind: 'lecture', label: 'L9 Gene transfer' },
    { kind: 'mechanism', label: 'Transformation/transduction/conjugation' },
    { kind: 'exam', label: 'Conjugation = plasmid via pilus' },
  ],

  highYield: [
    'Bacteria have a circular chromosome plus mobile genetic elements — PLASMIDS (extrachromosomal circular DNA, often carrying resistance/virulence genes), TRANSPOSONS ("jumping genes" that move between DNA molecules), INTEGRONS (capture gene cassettes) and BACTERIOPHAGES. Genetic change comes from MUTATION (vertical) and, importantly, HORIZONTAL GENE TRANSFER between cells — the main way antibiotic-resistance genes spread.',
    'Three mechanisms of HORIZONTAL transfer: (1) TRANSFORMATION — uptake of NAKED DNA from the environment by "competent" bacteria; (2) TRANSDUCTION — transfer of DNA by a BACTERIOPHAGE (virus) from one bacterium to another (generalised or specialised); (3) CONJUGATION — direct cell-to-cell transfer of a PLASMID through a SEX PILUS (requires cell contact; the classic route for spreading multidrug-resistance plasmids).',
    'These mechanisms explain the rapid, epidemic spread of RESISTANCE and virulence: a single conjugative R-plasmid can carry several resistance genes and jump between species; transduction moved toxin genes (e.g. some are phage-encoded); transposons/integrons shuffle cassettes onto plasmids. Understanding transfer routes underlies infection control (limiting spread) and antibiotic stewardship.',
    'Contrast the routes by what carries the DNA: transformation = FREE DNA (no vector), transduction = a PHAGE, conjugation = a PILUS/plasmid with cell contact. All can disseminate resistance, but conjugation is the workhorse for multidrug-resistance plasmids among Gram-negatives.',
    '**The take-home: bacterial variation = mutation + HORIZONTAL gene transfer via THREE routes — TRANSFORMATION (naked DNA uptake), TRANSDUCTION (phage-mediated), CONJUGATION (plasmid via sex pilus, needs contact). Mobile elements (PLASMIDS, transposons, integrons) carry resistance/virulence genes and drive their epidemic spread.** The resistance mechanisms these genes encode are in [[antibiotic-resistance-mechanisms]]; structure is [[bacterial-structure-cell-wall]].',
  ],

  mechanism: {
    title: 'Mutation + horizontal transfer: transformation (naked DNA), transduction (phage), conjugation (plasmid via pilus, needs contact); mobile elements (plasmid/transposon/integron) spread resistance',
    steps: [
      { id: 's1', label: 'Mobile elements: plasmids, transposons, integrons, bacteriophages carry genes', emphasis: 'key' },
      { id: 's2', label: 'Transformation = uptake of naked environmental DNA by competent cells', emphasis: 'key' },
      { id: 's3', label: 'Transduction = bacteriophage transfers DNA between bacteria', emphasis: 'key' },
      { id: 's4', label: 'Conjugation = plasmid transfer via sex pilus (needs cell-to-cell contact)', emphasis: 'key' },
      { id: 's5', label: 'Conjugative R-plasmids spread multidrug resistance across species', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Transfer of a resistance plasmid through a sex pilus between two bacteria', mechanism: 'Conjugation', significance: 'key' },
    { sign: 'A bacterium taking up free DNA from a lysed neighbour', mechanism: 'Transformation (competent cells)', significance: 'key' },
    { sign: 'A bacteriophage carrying a toxin or resistance gene between strains', mechanism: 'Transduction', significance: 'key' },
    { sign: 'One plasmid conferring resistance to several antibiotic classes', mechanism: 'R-plasmid carrying multiple resistance genes', significance: 'supportive' },
    { sign: 'Resistance genes jumping between chromosome and plasmid', mechanism: 'Transposons / integrons', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Transfer of naked DNA from the environment', meaning: 'Transformation' },
    { clue: 'Transfer of DNA by a bacteriophage', meaning: 'Transduction' },
    { clue: 'Plasmid transfer via a sex pilus needing contact', meaning: 'Conjugation' },
    { clue: 'The mobile elements that carry resistance genes', meaning: 'Plasmids, transposons, integrons' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Horizontal gene transfer is the engine of antibiotic-resistance spread, so understanding the three routes (transformation of naked DNA, phage transduction, and — most importantly — plasmid conjugation via the sex pilus) explains how multidrug resistance jumps between organisms and why infection control and antibiotic stewardship limit it. Mobile elements (plasmids/transposons/integrons) bundle and shuffle resistance genes. The specific resistance mechanisms are in [[antibiotic-resistance-mechanisms]].' },
  ],

  mnemonics: [
    { hook: 'Transfer routes: "Transformation (free DNA), Transduction (phage), Conjugation (pilus/plasmid)"', expansion: ['Conjugation needs contact', 'Plasmids carry multidrug resistance'] },
    { hook: '"Conjugation = the workhorse of R-plasmid spread"', expansion: ['Transposons/integrons shuffle cassettes', 'Some toxins are phage-encoded'] },
  ],

  traps: [
    {
      questionCategory: 'Distinguishing the gene-transfer mechanisms',
      wrongInstinct: 'All horizontal gene transfer is basically bacteria swapping DNA the same way',
      rightAnswer: 'The three mechanisms differ by the VEHICLE and requirements: TRANSFORMATION is uptake of NAKED environmental DNA (no vector, needs competence), TRANSDUCTION uses a BACTERIOPHAGE to carry DNA, and CONJUGATION transfers a PLASMID directly through a SEX PILUS requiring CELL-TO-CELL CONTACT — conjugation is the principal route for spreading multidrug-resistance plasmids',
      why: 'Exam questions hinge on the carrier: naked DNA (transformation) vs phage (transduction) vs pilus/plasmid contact (conjugation); conflating them misses that conjugation is what disseminates resistance plasmids across Gram-negatives.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Transfer of a multidrug-resistance plasmid from one bacterium to another through a sex pilus, requiring cell-to-cell contact, is called:',
      options: [
        { id: 'a', text: 'Transformation' },
        { id: 'b', text: 'Conjugation' },
        { id: 'c', text: 'Transduction' },
        { id: 'd', text: 'Mutation' },
      ],
      answerId: 'b',
      explanation: 'Conjugation is direct plasmid transfer between bacteria through a sex pilus, requiring cell-to-cell contact; conjugative R-plasmids are the main vehicle for spreading multidrug resistance among Gram-negative bacteria. Transformation uses naked DNA and transduction uses a bacteriophage.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A bacteriophage transfers a resistance or toxin gene from one bacterium to another. This mechanism is:',
      options: [
        { id: 'a', text: 'Transduction' },
        { id: 'b', text: 'Transformation' },
        { id: 'c', text: 'Conjugation' },
        { id: 'd', text: 'Binary fission' },
      ],
      answerId: 'a',
      explanation: 'Transduction is the transfer of bacterial DNA between cells by a bacteriophage (generalised or specialised); it can move virulence (toxin) and resistance genes. Transformation involves uptake of naked DNA, and conjugation involves plasmid transfer through a pilus.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default bacterialGeneTransfer;
