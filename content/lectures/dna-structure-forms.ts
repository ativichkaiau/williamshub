import type { Lecture } from '../../lib/types';
import { DNA_BASE_PAIRING } from '../../lib/figures';

export const dnaStructureForms: Lecture = {
  id: 'dna-structure-forms',
  title: 'DNA Structure & Forms',
  system: 'molecular',
  source: 'L3 — Nucleic Acids',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Molecular' },
    { kind: 'lecture', label: 'L3 Nucleic Acids' },
    { kind: 'disease', label: 'Double helix' },
    { kind: 'mechanism', label: 'Base pairing' },
    { kind: 'exam', label: 'A-T / G-C · Tm' },
  ],

  highYield: [
    'DNA is an **antiparallel double helix** (one strand 5′→3′, the other 3′→5′); the two strands are held by **complementary base pairing** and stabilized by **base stacking (hydrophobic)**.',
    '**A–T = 2 hydrogen bonds; G–C = 3 hydrogen bonds** — so **higher G-C content → more stable → higher melting temperature (Tm)**.',
    'Three helical forms: **B-DNA** (right-handed, ~10 bp/turn — the physiological form), **A-DNA** (right-handed, ~11 bp/turn), **Z-DNA** (left-handed, alternating purine-pyrimidine, high salt; near transcription start sites).',
    '**Major and minor grooves** arise because bases attach asymmetrically to the sugar-phosphate backbone (protein recognition sites).',
    '**Denaturation** (strand separation) breaks H-bonds by **heat, alkali, or urea**; measured as **↑ UV absorbance at 260 nm (hyperchromic shift)**; **Tm = temperature at which half the DNA is denatured**. Supercoiling is relieved by **topoisomerases**.',
  ],

  mechanism: {
    title: 'Complementary, antiparallel strands with tunable stability',
    steps: [
      { id: 's1', label: 'Antiparallel strands, base stacking' },
      { id: 's2', label: 'A–T (2 H-bonds) vs G–C (3 H-bonds)', emphasis: 'key' },
      { id: 's3', label: 'Higher G-C → higher Tm (harder to melt)' },
      { id: 's4', label: 'Heat/alkali denature → hyperchromic shift at 260 nm' },
    ],
  },

  examFindings: [
    { sign: 'Higher melting temperature for GC-rich DNA', mechanism: 'Three H-bonds per G-C pair', significance: 'key' },
    { sign: 'Increased A260 on heating (hyperchromicity)', mechanism: 'Strand separation exposes bases', significance: 'key' },
    { sign: 'Chargaff ratios A=T, G=C', mechanism: 'Complementary double-stranded DNA', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'GC content', meaning: 'Predicts Tm / duplex stability' },
    { clue: 'UV absorbance (260 nm) vs temperature', meaning: 'Denaturation curve → Tm' },
    { clue: 'Helix form (B/A/Z)', meaning: 'Physiological (B) vs unusual (Z)' },
  ],

  treatment: [
    { logic: 'GC content underlies PCR primer/annealing design', detail: 'Higher Tm needs higher annealing temperature.' },
    { logic: 'Topoisomerase inhibitors are drugs', detail: 'Exploit supercoiling management (quinolones, etoposide).' },
  ],

  mnemonics: [
    { hook: 'G-C = 3 bonds (stronger); A-T = 2 bonds', expansion: ['More GC → higher Tm'] },
    { hook: 'Z-DNA = zig-zag, left-handed', expansion: ['B is the biologically dominant form'] },
  ],

  traps: [
    {
      questionCategory: 'Determinant of DNA melting temperature',
      wrongInstinct: 'A longer DNA sequence always melts at a higher temperature than a shorter one',
      rightAnswer: 'Tm is driven mainly by G-C content (three H-bonds) — GC-rich DNA melts at a higher temperature regardless of comparable length',
      why: 'Each G-C pair contributes three hydrogen bonds versus two for A-T, so base composition (GC%) is the dominant determinant of duplex thermal stability.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Two DNA fragments of equal length are compared. Fragment 1 is 70% G-C; fragment 2 is 30% G-C. Which has the higher melting temperature and why?',
      options: [
        { id: 'a', text: 'Fragment 2, because A-T pairs are more stable' },
        { id: 'b', text: 'Fragment 1, because G-C pairs have three hydrogen bonds' },
        { id: 'c', text: 'Both melt at the same temperature' },
        { id: 'd', text: 'Fragment 2, because it has fewer hydrogen bonds' },
      ],
      answerId: 'b',
      explanation: 'G-C pairs are held by three hydrogen bonds versus two for A-T, so higher GC content raises the melting temperature.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'DNA base pairing', svg: DNA_BASE_PAIRING, caption: 'Antiparallel strands: A–T (2 H-bonds), G–C (3 H-bonds). More G≡C → higher Tm.' },
  ],
};

export default dnaStructureForms;
