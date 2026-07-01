import type { Lecture } from '../../lib/types';

export const nucleotidesStructureRoles: Lecture = {
  id: 'nucleotides-structure-roles',
  title: 'Nucleotides — Structure & Roles',
  system: 'molecular',
  source: 'L3 — Nucleic Acids',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Molecular' },
    { kind: 'lecture', label: 'L3 Nucleic Acids' },
    { kind: 'disease', label: 'Nucleotides' },
    { kind: 'mechanism', label: 'Base + sugar + phosphate' },
    { kind: 'exam', label: 'Purine vs pyrimidine' },
  ],

  highYield: [
    'A **nucleotide = nitrogenous base + pentose sugar + phosphate**; a **nucleoside** lacks the phosphate. Sugar is **ribose (RNA)** or **deoxyribose (DNA)**.',
    '**Purines (A, G)** = double ring; **pyrimidines (C, T, U)** = single ring. DNA uses **A, G, C, T**; RNA uses **A, G, C, U**.',
    'Nucleotides link via **phosphodiester bonds** (phosphate at C5′ to the C3′ of the next sugar) → a directional 5′→3′ polynucleotide.',
    'Beyond nucleic acids, nucleotides are **energy carriers (ATP** — high-energy anhydride bonds, ~30 kJ/mol**)**, **second messengers (cAMP, cGMP, ppGpp)**, and **components of coenzymes (NAD⁺, FAD, coenzyme A)**.',
    'Base pairing (Watson–Crick) and Chargaff’s rules (**A = T, G = C**) underlie DNA structure (next module).',
  ],

  mechanism: {
    title: 'Assemble the building block, then the polymer',
    steps: [
      { id: 's1', label: 'Base + sugar = nucleoside' },
      { id: 's2', label: '+ phosphate = nucleotide', emphasis: 'key' },
      { id: 's3', label: 'Phosphodiester bonds → 5′→3′ chain' },
      { id: 's4', label: 'Also serve as energy/signal/coenzyme molecules' },
    ],
  },

  examFindings: [
    { sign: 'Purine vs pyrimidine identification', mechanism: 'Two rings (A/G) vs one ring (C/T/U)', significance: 'key' },
    { sign: 'ATP hydrolysis powers reactions', mechanism: 'High-energy phosphoanhydride bonds', significance: 'supportive' },
    { sign: 'cAMP as a signaling molecule', mechanism: 'Nucleotide second messenger', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Sugar type (ribose vs deoxyribose)', meaning: 'RNA vs DNA' },
    { clue: 'Base composition', meaning: 'Purine/pyrimidine; DNA (T) vs RNA (U)' },
    { clue: 'Chargaff ratios (A=T, G=C)', meaning: 'Double-stranded DNA' },
  ],

  treatment: [
    { logic: 'Nucleotide analogs are drugs', detail: 'Antivirals/antineoplastics mimic nucleotides.' },
    { logic: 'ATP is the cell’s energy currency', detail: 'Couples endergonic reactions.' },
  ],

  mnemonics: [
    { hook: 'PURe As Gold = purines A, G (two rings)', expansion: ['CUT the pyrimidines: C, U, T (one ring)'] },
    { hook: 'Chargaff: A=T, G=C', expansion: ['Basis of complementary strands'] },
  ],

  traps: [
    {
      questionCategory: 'Nucleoside vs nucleotide',
      wrongInstinct: 'Nucleoside and nucleotide are interchangeable terms',
      rightAnswer: 'A nucleoTide has a phosphaTe; a nucleoside is base + sugar only (no phosphate)',
      why: 'The phosphate group is the distinguishing feature — nucleotides are phosphorylated nucleosides and are the building blocks of nucleic acids.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which set correctly lists the purine bases?',
      options: [
        { id: 'a', text: 'Cytosine and thymine' },
        { id: 'b', text: 'Adenine and guanine' },
        { id: 'c', text: 'Uracil and cytosine' },
        { id: 'd', text: 'Thymine and uracil' },
      ],
      answerId: 'b',
      explanation: 'Adenine and guanine are the double-ringed purines; cytosine, thymine, and uracil are the single-ringed pyrimidines.',
      tests: 'exam',
    },
  ],
};

export default nucleotidesStructureRoles;
