import type { Lecture } from '../../lib/types';
import { REPLICATION_FORK } from '../../lib/figures';

export const dnaReplicationMachinery: Lecture = {
  id: 'dna-replication-machinery',
  title: 'DNA Replication Machinery',
  system: 'molecular',
  source: 'L5 — DNA Replication',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Molecular' },
    { kind: 'lecture', label: 'L5 DNA Replication' },
    { kind: 'disease', label: 'Replication' },
    { kind: 'mechanism', label: 'Semiconservative' },
    { kind: 'exam', label: 'Leading vs lagging' },
  ],

  highYield: [
    'Replication is **semiconservative** and **bidirectional** from an **origin (OriC in E. coli, DnaA-bound)**; DNA polymerases synthesize only **5′→3′** and **require a primer**.',
    'The enzyme cast: **helicase** (unwinds), **single-strand binding protein (SSB)** (prevents reannealing), **primase** (lays RNA primer), **DNA clamp** (processivity), **DNA Pol III** (main synthesis + proofreading), **DNA Pol I** (removes RNA primer via 5′→3′ exonuclease, fills with DNA), **topoisomerase/gyrase** (relieves supercoiling), **ligase** (seals nicks).',
    'The **leading strand** is synthesized **continuously**; the **lagging strand** is made **discontinuously as Okazaki fragments** (semi-discontinuous replication).',
    '**Fidelity**: DNA Pol proofreads with its **3′→5′ exonuclease** activity, excising a mismatched nucleotide — reducing error rates ~100–1000-fold.',
    'Bacterial termination uses **Ter/Tus** (one-way fork trap); **topoisomerase IV** decatenates the linked daughter chromosomes.',
  ],

  mechanism: {
    title: 'Open the fork, prime, extend both strands, finish',
    steps: [
      { id: 's1', label: 'Helicase unwinds at the origin (SSB coats ssDNA)' },
      { id: 's2', label: 'Primase lays RNA primer; Pol III extends 5′→3′', emphasis: 'key' },
      { id: 's3', label: 'Leading continuous; lagging = Okazaki fragments' },
      { id: 's4', label: 'Pol I replaces primer; ligase seals; proofreading corrects', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Continuous vs discontinuous strand synthesis', mechanism: 'Leading vs lagging (Okazaki) at the fork', significance: 'key' },
    { sign: 'Proofreading corrects a misincorporated base', mechanism: '3′→5′ exonuclease of DNA polymerase', significance: 'key' },
    { sign: 'Requirement for an RNA primer', mechanism: 'DNA Pol cannot initiate de novo', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Strand (leading vs lagging)', meaning: 'Continuous vs Okazaki synthesis' },
    { clue: 'Which enzyme is defective/inhibited', meaning: 'Predicts the replication defect' },
    { clue: 'Directionality (5′→3′ only)', meaning: 'Explains lagging-strand mechanism' },
  ],

  treatment: [
    { logic: 'Fluoroquinolones inhibit bacterial gyrase/topo IV', detail: 'Antibiotic exploiting replication.' },
    { logic: 'Proofreading maintains genomic fidelity', detail: 'Loss raises mutation rate.' },
  ],

  mnemonics: [
    { hook: 'Pol I removes primer (5′→3′ exo); Pol III synthesizes + proofreads (3′→5′ exo)', expansion: ['Ligase seals the nick'] },
    { hook: 'Leading = continuous; lagging = Okazaki (discontinuous)', expansion: ['Both built 5′→3′'] },
  ],

  traps: [
    {
      questionCategory: 'Direction of DNA synthesis',
      wrongInstinct: 'On the lagging strand, DNA polymerase synthesizes in the 3′→5′ direction to follow the fork',
      rightAnswer: 'DNA polymerase ALWAYS synthesizes 5′→3′; the lagging strand is made in short 5′→3′ Okazaki fragments away from the fork, then joined',
      why: 'No DNA polymerase can add nucleotides 3′→5′; the lagging-strand discontinuity (Okazaki fragments) is the cell’s solution to building a strand whose template runs the “wrong” way.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which enzyme uses its 3′→5′ exonuclease activity to remove a mismatched nucleotide during replication?',
      options: [
        { id: 'a', text: 'Primase' },
        { id: 'b', text: 'DNA polymerase (proofreading)' },
        { id: 'c', text: 'Ligase' },
        { id: 'd', text: 'Helicase' },
      ],
      answerId: 'b',
      explanation: 'DNA polymerase’s 3′→5′ exonuclease provides proofreading, excising an incorrectly paired nucleotide and greatly lowering the error rate.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'DNA replication fork', svg: REPLICATION_FORK, caption: 'Helicase opens the fork; leading strand is continuous, lagging strand is made as Okazaki fragments (both 5′→3′); ligase seals nicks.' },
  ],
};

export default dnaReplicationMachinery;
