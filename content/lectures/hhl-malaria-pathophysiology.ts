import type { Lecture } from '../../lib/types';

export const hhlMalariaPathophysiology: Lecture = {
  id: 'hhl-malaria-pathophysiology',
  title: 'Malaria: Pathophysiology & Clinical Features',
  system: 'heme',
  source: 'L24 — Malaria: Biology & Clinical Disease',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L24 Malaria Biology' },
    { kind: 'disease', label: 'Malaria' },
    { kind: 'mechanism', label: 'Synchronous lysis → paroxysm' },
    { kind: 'exam', label: 'Splenomegaly · anemia' },
  ],

  highYield: [
    '**Synchronous schizont rupture** releases merozoites plus hemozoin/toxins → **cytokine surge (TNF)** → the classic **paroxysm: cold (chills) → hot (fever) → sweating**, timed to the periodicity.',
    'Core haematological triad: **hemolytic anemia + splenomegaly + thrombocytopenia**. Both infected AND uninfected red cells are removed, so anemia exceeds the parasite load.',
    '**P. falciparum is severe because it sequesters**: **PfEMP1** on **knobs** mediates **cytoadherence, rosetting and sequestration** in microvasculature → organ ischaemia. See [[hhl-severe-falciparum-malaria]].',
    '**P. vivax/ovale** relapse from **hypnozoites**; **P. malariae** runs chronic and can cause **immune-complex nephrotic syndrome** (quartan malarial nephropathy).',
  ],

  mechanism: {
    title: 'Why malaria makes you sick: rupture, cytokines, anemia, sequestration',
    steps: [
      { id: 's1', label: 'Synchronous schizont rupture releases merozoites + hemozoin' },
      { id: 's2', label: 'TNF/cytokine surge → paroxysm (cold→hot→sweat)', emphasis: 'key' },
      { id: 's3', label: 'Destruction of infected + uninfected RBCs → hemolytic anemia', emphasis: 'key' },
      { id: 's4', label: 'PfEMP1 knobs → cytoadherence/sequestration (falciparum)', emphasis: 'key' },
      { id: 's5', label: 'Sequestration + rosetting → microvascular obstruction → organ damage', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Cyclical paroxysms: chills → high fever → drenching sweats', mechanism: 'Synchronous red-cell rupture with cytokine release', significance: 'key' },
    { sign: 'Splenomegaly', mechanism: 'Reticuloendothelial hyperplasia clearing parasitised cells', significance: 'key' },
    { sign: 'Thrombocytopenia with fever', mechanism: 'Splenic pooling / immune destruction — a strong early clue', significance: 'key' },
    { sign: 'Anemia and jaundice', mechanism: 'Intravascular + extravascular hemolysis, dyserythropoiesis', significance: 'supportive' },
    { sign: 'Nephrotic syndrome in chronic infection', mechanism: 'Immune-complex glomerular injury — P. malariae', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Fever + thrombocytopenia in a returning traveller', meaning: 'Think malaria until a film excludes it' },
    { clue: 'High parasitemia with only ring forms on film', meaning: 'P. falciparum (mature forms are sequestered)' },
    { clue: 'Low haptoglobin, high LDH, reticulocytosis, unconjugated bilirubin', meaning: 'Ongoing hemolysis' },
    { clue: 'Chronic low-grade parasitemia + proteinuria', meaning: 'P. malariae — quartan malarial nephropathy' },
  ],

  treatment: [
    { logic: 'Prompt blood schizonticides break the cycle', detail: 'Clearing the erythrocytic stage stops the paroxysms and progression.' },
    { logic: 'Treat the reservoir, not just symptoms', detail: 'Add primaquine radical cure for vivax/ovale hypnozoites; support anemia as needed.' },
  ],

  mnemonics: [
    { hook: 'The paroxysm = Cold, Hot, Sweat', expansion: ['Cold: rigors/chills as schizonts rupture', 'Hot: spiking fever from cytokines', 'Sweat: defervescence'] },
    { hook: 'Falciparum STICKS (knobs + PfEMP1) → sequesters → severe', expansion: ['Cytoadherence + rosetting', 'Microvascular obstruction', 'Only species that sequesters heavily'] },
  ],

  traps: [
    {
      questionCategory: 'Using fever periodicity to diagnose malaria',
      wrongInstinct: 'No neat tertian/quartan pattern, so malaria is unlikely',
      rightAnswer: 'Early and falciparum infections are often continuous or irregular — diagnose by blood film regardless of fever pattern',
      why: 'Classic paroxysms need synchronised broods; they are frequently absent early, so a film (not the fever chart) rules malaria in or out.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'What directly produces the abrupt chills-then-fever paroxysm in malaria?',
      options: [
        { id: 'a', text: 'Sporozoites entering hepatocytes' },
        { id: 'b', text: 'Synchronous rupture of schizont-infected red cells with cytokine release' },
        { id: 'c', text: 'Gametocyte uptake by the mosquito' },
        { id: 'd', text: 'Antibody-mediated red-cell agglutination' },
      ],
      answerId: 'b',
      explanation: 'Paroxysms coincide with the synchronous rupture of infected red cells, which releases merozoites and hemozoin and triggers a TNF-driven cytokine surge.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which property best explains why P. falciparum, unlike the other species, causes severe end-organ disease?',
      options: [
        { id: 'a', text: 'Formation of dormant hypnozoites' },
        { id: 'b', text: 'A 72-hour (quartan) replication cycle' },
        { id: 'c', text: 'PfEMP1-mediated cytoadherence and microvascular sequestration' },
        { id: 'd', text: 'Preferential infection of reticulocytes' },
      ],
      answerId: 'c',
      explanation: 'Falciparum expresses PfEMP1 on knobs, driving cytoadherence, rosetting and sequestration in the microvasculature — obstructing flow and causing the organ damage of severe malaria.',
      tests: 'mechanism',
    },
  ],
};

export default hhlMalariaPathophysiology;
