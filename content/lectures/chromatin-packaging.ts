import type { Lecture } from '../../lib/types';
import { CHROMATIN_PACKAGING } from '../../lib/figures';

export const chromatinPackaging: Lecture = {
  id: 'chromatin-packaging',
  title: 'Chromatin Packaging',
  system: 'molecular',
  source: 'L3 — Nucleic Acids',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Molecular' },
    { kind: 'lecture', label: 'L3 Nucleic Acids' },
    { kind: 'disease', label: 'Chromatin' },
    { kind: 'mechanism', label: 'Nucleosome → chromosome' },
    { kind: 'exam', label: 'Histones' },
  ],

  highYield: [
    'DNA is packaged in levels: **double helix → nucleosome → 30-nm fiber (solenoid) → looped domains on a scaffold → chromosome**.',
    'The **nucleosome** = ~**200 bp of DNA wrapped around a histone octamer (two each of H2A, H2B, H3, H4)**; **histone H1** is the **linker** that helps compact “beads-on-a-string” into the fiber.',
    'Histones are **highly conserved, positively charged (lysine/arginine)** proteins that bind the negatively charged DNA backbone.',
    'The **30-nm solenoid** has ~6 nucleosomes per turn; chromatin fibers form **loops anchored to non-histone scaffold proteins**.',
    '**Euchromatin** = decondensed, transcriptionally **active**; **heterochromatin** = condensed, **silenced** — the packaging state controls gene accessibility.',
  ],

  mechanism: {
    title: 'Condense ~2 m of DNA into the nucleus while keeping genes accessible',
    steps: [
      { id: 's1', label: 'DNA wraps histone octamer → nucleosome', emphasis: 'key' },
      { id: 's2', label: 'H1 packs beads-on-a-string → 30-nm fiber' },
      { id: 's3', label: 'Loops attach to non-histone scaffold' },
      { id: 's4', label: 'Euchromatin (active) vs heterochromatin (silent)' },
    ],
  },

  examFindings: [
    { sign: 'Nucleosome “beads-on-a-string” on EM', mechanism: 'DNA + histone octamer repeating unit', significance: 'key' },
    { sign: 'Silenced genes in condensed regions', mechanism: 'Heterochromatin', significance: 'key' },
    { sign: 'Active transcription in open regions', mechanism: 'Euchromatin', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Histone composition (octamer + H1)', meaning: 'Nucleosome/chromatosome structure' },
    { clue: 'Chromatin state (eu- vs hetero-)', meaning: 'Transcriptional activity' },
    { clue: 'Histone modifications (acetylation/methylation)', meaning: 'Epigenetic regulation of access' },
  ],

  treatment: [
    { logic: 'Epigenetic drugs target chromatin', detail: 'HDAC inhibitors, DNA methyltransferase inhibitors.' },
    { logic: 'Packaging state gates gene expression', detail: 'Open chromatin permits transcription.' },
  ],

  mnemonics: [
    { hook: 'Nucleosome = octamer (2× H2A, H2B, H3, H4) + H1 linker', expansion: ['~200 bp per nucleosome'] },
    { hook: 'EUchromatin = EXpressed; HETEROchromatin = Hushed', expansion: ['Open vs condensed'] },
  ],

  traps: [
    {
      questionCategory: 'Histone content of the nucleosome core',
      wrongInstinct: 'The nucleosome core octamer includes histone H1',
      rightAnswer: 'The core octamer is two copies each of H2A, H2B, H3, H4; H1 is the LINKER histone, not part of the core',
      why: 'H1 sits outside the core, binding linker DNA to compact nucleosomes into the 30-nm fiber — it is not one of the eight core histones.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The histone octamer around which DNA wraps to form a nucleosome consists of two copies each of:',
      options: [
        { id: 'a', text: 'H1, H2A, H2B, H3' },
        { id: 'b', text: 'H2A, H2B, H3, H4' },
        { id: 'c', text: 'H1, H3, H4, H5' },
        { id: 'd', text: 'H2A, H2B, H4, H1' },
      ],
      answerId: 'b',
      explanation: 'The nucleosome core is an octamer of two copies each of H2A, H2B, H3, and H4; H1 is the separate linker histone.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'DNA packaging levels', svg: CHROMATIN_PACKAGING, caption: 'Double helix → nucleosome (histone octamer) → 30-nm solenoid → looped domains → chromosome.' },
  ],
};

export default chromatinPackaging;
