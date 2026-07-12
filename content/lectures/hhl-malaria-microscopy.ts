import type { Lecture } from '../../lib/types';

export const hhlMalariaMicroscopy: Lecture = {
  id: 'hhl-malaria-microscopy',
  title: 'Malaria Diagnosis: Blood Film Microscopy',
  system: 'heme',
  source: 'L25 — Malaria: Laboratory Diagnosis',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L25 Malaria Lab Dx' },
    { kind: 'investigation', label: 'Thick + thin Giemsa film' },
    { kind: 'disease', label: 'Species differentiation' },
  ],

  highYield: [
    '**Giemsa-stained microscopy is the gold standard.** Two films with different jobs: the **thick film** concentrates parasites for **detection/screening and density**; the **thin film** preserves red-cell morphology for **species ID and % parasitemia**.',
    '**P. falciparum:** small delicate rings, often **multiple rings per cell** and **appliqué (accolé) forms**, **banana/crescent-shaped gametocytes**, **normal-sized RBCs**, and usually **only rings ± gametocytes** in peripheral blood (mature forms sequester).',
    '**P. vivax / ovale:** **enlarged RBCs** with **Schüffner dots**, an **amoeboid trophozoite**, and **all stages** visible on the film.',
    '**P. malariae:** band-form trophozoite, no RBC enlargement, quartan periodicity.',
    '**A single negative film does not exclude malaria** — repeat every 12–24 h up to three times before ruling it out. See [[hhl-malaria-rdt-molecular]].',
  ],

  mechanism: {
    title: 'How to read a malaria film',
    steps: [
      { id: 's1', label: 'Giemsa-stain a thick and a thin film' },
      { id: 's2', label: 'Thick film: detect parasites + estimate density', emphasis: 'key' },
      { id: 's3', label: 'Thin film: identify species + % parasitemia', emphasis: 'key' },
      { id: 's4', label: 'Read RBC size, dots, ring/trophozoite shape, gametocyte form', emphasis: 'key' },
      { id: 's5', label: 'If negative but suspected, repeat q12–24 h ×3' },
    ],
  },

  examFindings: [
    { sign: 'Small rings, multiple per cell, appliqué forms, normal-sized RBCs', mechanism: 'Classic P. falciparum morphology', significance: 'key' },
    { sign: 'Banana / crescent-shaped gametocyte', mechanism: 'Essentially pathognomonic of P. falciparum', significance: 'key' },
    { sign: 'Enlarged RBC with Schüffner dots and amoeboid trophozoite', mechanism: 'P. vivax (or P. ovale)', significance: 'key' },
    { sign: 'Only rings and gametocytes seen, no schizonts', mechanism: 'Falciparum sequesters mature stages in the microvasculature', significance: 'supportive' },
    { sign: 'Band-form trophozoite in a normal-sized RBC', mechanism: 'P. malariae', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Thick film positive', meaning: 'Confirms infection and gives parasite density' },
    { clue: 'Thin film examined', meaning: 'Assigns species and quantifies % parasitemia (guides severity)' },
    { clue: 'Banana-shaped gametocyte', meaning: 'P. falciparum' },
    { clue: 'First film negative but suspicion remains', meaning: 'Repeat films q12–24 h before excluding malaria' },
  ],

  treatment: [
    { logic: 'Species + parasitemia drive therapy', detail: 'Falciparum → ACT; vivax/ovale → add primaquine radical cure after G6PD testing.' },
    { logic: 'Use density to monitor response', detail: 'Falling % parasitemia on serial films confirms the drug is working.' },
  ],

  mnemonics: [
    { hook: 'thiCK to piCK it up (detect); thiN for the Name (species)', expansion: ['Thick = sensitivity + density', 'Thin = species ID + % parasitemia'] },
    { hook: 'Banana gametocyte = falciparum; big RBC + Schüffner dots = vivax', expansion: ['Falciparum: normal RBC size', 'Vivax/ovale: enlarged RBC with Schüffner dots'] },
  ],

  traps: [
    {
      questionCategory: 'Interpreting a negative malaria film',
      wrongInstinct: 'One negative thick film rules malaria out',
      rightAnswer: 'Repeat films every 12–24 h (up to three) before excluding it',
      why: 'Parasitemia fluctuates with the cycle and falciparum sequesters mature forms, so a single film can miss a true infection.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A thin film shows normal-sized red cells containing multiple small rings and occasional banana-shaped gametocytes. Which species is this?',
      options: [
        { id: 'a', text: 'Plasmodium vivax' },
        { id: 'b', text: 'Plasmodium ovale' },
        { id: 'c', text: 'Plasmodium malariae' },
        { id: 'd', text: 'Plasmodium falciparum' },
      ],
      answerId: 'd',
      explanation: 'Normal-sized RBCs, multiple small rings per cell and crescent (banana) gametocytes are hallmark P. falciparum. Vivax/ovale enlarge the RBC and show Schüffner dots; malariae shows band forms.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'Which statement best contrasts the two malaria films?',
      options: [
        { id: 'a', text: 'The thin film is more sensitive for detection; the thick film identifies species' },
        { id: 'b', text: 'The thick film is best for detection and density; the thin film is best for species and % parasitemia' },
        { id: 'c', text: 'Both films perform identically; the choice is arbitrary' },
        { id: 'd', text: 'Only the thick film can estimate percentage parasitemia' },
      ],
      answerId: 'b',
      explanation: 'The thick film lyses red cells to concentrate parasites (best sensitivity and density); the thin film keeps red-cell morphology, allowing species identification and an accurate % parasitemia.',
      tests: 'investigation',
    },
  ],
};

export default hhlMalariaMicroscopy;
