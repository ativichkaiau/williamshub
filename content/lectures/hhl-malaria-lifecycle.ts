import type { Lecture } from '../../lib/types';

export const hhlMalariaLifecycle: Lecture = {
  id: 'hhl-malaria-lifecycle',
  title: 'Malaria: Species & Life Cycle',
  system: 'heme',
  source: 'L24 — Malaria: Biology & Clinical Disease',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L24 Malaria Biology' },
    { kind: 'disease', label: 'Plasmodium species' },
    { kind: 'mechanism', label: 'Sporozoite → liver → RBC' },
    { kind: 'investigation', label: 'Periodicity · gametocytes' },
  ],

  highYield: [
    'Five human species: *P. falciparum* and *P. vivax* (the two that dominate in **Thailand**), *P. malariae*, *P. ovale*, and the zoonotic *P. knowlesi*. Falciparum causes the severe/lethal disease; vivax is the great relapser.',
    'Vector = the **female Anopheles** mosquito (only females take a blood meal). Sporozoites are injected → travel to the **liver** for **exo-erythrocytic schizogony**, then seed the blood.',
    '**Only P. vivax and P. ovale form hypnozoites** — dormant liver forms that reactivate weeks–months later to cause **relapse**. Falciparum and malariae have NO hypnozoites.',
    'Blood stage = **erythrocytic schizogony**: merozoite → **ring → trophozoite → schizont** → rupture releases new merozoites. Some differentiate into **gametocytes**, the form taken up by the mosquito.',
    'Fever periodicity follows synchronous rupture: **tertian = 48 h** (falciparum, vivax, ovale), **quartan = 72 h** (malariae). See [[hhl-malaria-pathophysiology]].',
  ],

  mechanism: {
    title: 'Anopheles bite → liver → blood → back to mosquito',
    steps: [
      { id: 's1', label: 'Female Anopheles bite injects sporozoites' },
      { id: 's2', label: 'Liver: exo-erythrocytic schizogony', emphasis: 'key' },
      { id: 's3', label: 'Vivax/ovale hypnozoites → later relapse', emphasis: 'key' },
      { id: 's4', label: 'Blood: erythrocytic schizogony (ring→troph→schizont)', emphasis: 'key' },
      { id: 's5', label: 'Gametocytes taken up by next mosquito' },
    ],
  },

  examFindings: [
    { sign: 'Tertian fever every 48 h', mechanism: 'Synchronous rupture — falciparum, vivax, ovale', significance: 'key' },
    { sign: 'Quartan fever every 72 h', mechanism: 'Synchronous rupture — P. malariae', significance: 'key' },
    { sign: 'Relapse weeks–months after cure', mechanism: 'Reactivated hypnozoites — vivax/ovale only', significance: 'key' },
    { sign: 'Recrudescence (early return of parasitemia)', mechanism: 'Surviving blood forms — falciparum/malariae', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Ring forms and gametocytes on blood film', meaning: 'Erythrocytic (blood) stage present — active infection' },
    { clue: 'Banana/crescent-shaped gametocyte', meaning: 'P. falciparum' },
    { clue: 'Enlarged RBC with Schüffner dots', meaning: 'P. vivax or P. ovale' },
    { clue: 'Only small rings + high parasitemia, few mature forms', meaning: 'P. falciparum (mature forms sequester)' },
  ],

  treatment: [
    { logic: 'Blood schizonticides clear the erythrocytic stage', detail: 'They stop the symptomatic cycle but do not touch dormant liver forms.' },
    { logic: 'Radical cure needs an anti-hypnozoite drug', detail: 'Primaquine/tafenoquine are required to prevent vivax/ovale relapse — after G6PD testing.' },
  ],

  mnemonics: [
    { hook: 'Tertian = every THIRD day (48 h); Quartan = every FOURTH (72 h)', expansion: ['Tertian: falciparum, vivax, ovale', 'Quartan: malariae'] },
    { hook: 'vivax & ovale = hypnozoites → relapse; falciparum & malariae = no hypnozoites', expansion: ['Relapse = liver hypnozoites', 'Recrudescence = surviving blood forms'] },
  ],

  traps: [
    {
      questionCategory: 'Relapse vs recrudescence',
      wrongInstinct: 'Any recurrence of malaria after treatment is a relapse from the liver',
      rightAnswer: 'Relapse (dormant hypnozoites) happens ONLY with vivax/ovale; falciparum/malariae recur as recrudescence from surviving blood forms',
      why: 'Only hypnozoite-formers relapse — and only primaquine/tafenoquine kill hypnozoites, so only they prevent it.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A traveller treated for malaria is well for two months, then develops fever with the same species on film. Which species most likely caused this relapse from dormant liver forms?',
      options: [
        { id: 'a', text: 'Plasmodium falciparum' },
        { id: 'b', text: 'Plasmodium malariae' },
        { id: 'c', text: 'Plasmodium vivax' },
        { id: 'd', text: 'Plasmodium knowlesi' },
      ],
      answerId: 'c',
      explanation: 'Only P. vivax and P. ovale form hypnozoites, the dormant hepatic stage that reactivates to cause true relapse. Falciparum and malariae recur only as recrudescence from persistent blood forms.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'In the human host, where does exo-erythrocytic schizogony of Plasmodium take place after an infective mosquito bite?',
      options: [
        { id: 'a', text: 'Red blood cells' },
        { id: 'b', text: 'Hepatocytes (liver)' },
        { id: 'c', text: 'The spleen' },
        { id: 'd', text: 'The Anopheles salivary gland' },
      ],
      answerId: 'b',
      explanation: 'Injected sporozoites first undergo exo-erythrocytic (pre-erythrocytic) schizogony in hepatocytes; only afterwards do merozoites enter red cells to begin erythrocytic schizogony.',
      tests: 'mechanism',
    },
  ],
};

export default hhlMalariaLifecycle;
