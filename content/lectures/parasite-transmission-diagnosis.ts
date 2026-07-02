import type { Lecture } from '../../lib/types';

export const parasiteTransmissionDiagnosis: Lecture = {
  id: 'parasite-transmission-diagnosis',
  title: 'Transmission, Vectors & Diagnosis',
  system: 'parasitology',
  source: 'L1 — Introduction to Parasitology',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Parasitology' },
    { kind: 'lecture', label: 'L1 Intro Parasitology' },
    { kind: 'mechanism', label: 'Transmission routes' },
    { kind: 'investigation', label: 'Stool O&P' },
  ],

  highYield: [
    '**Parasites reach humans by predictable routes, and knowing the route drives both diagnosis and prevention.** The main routes are **faecal–oral (ingesting cysts/eggs — most intestinal protozoa and helminths), skin penetration (hookworm, Strongyloides, schistosome cercariae), vector-borne (mosquito/fly/tick), ingestion of undercooked meat/fish/plants, and congenital/transplacental (Toxoplasma).**',
    '**Vectors are arthropods that transmit parasites in two ways: a BIOLOGICAL vector is one in which the parasite DEVELOPS/multiplies (e.g. Anopheles for malaria), whereas a MECHANICAL vector merely carries the organism on its body (e.g. the housefly spreading enteric pathogens).** Biological transmission is specific; mechanical is incidental.',
    '**The infective STAGE and the diagnostic STAGE differ and must both be known: e.g. you are infected by an egg/cyst/larva/cercaria, but you diagnose by finding a different stage (egg, cyst, trophozoite, microfilaria) in a specimen.** Matching the right specimen to the right stage is the core diagnostic skill.',
    '**Diagnosis is chiefly by DIRECT DETECTION in the appropriate specimen: STOOL examination for ova and parasites (O&P) — the workhorse for intestinal worms/protozoa; BLOOD films for malaria/microfilariae; and tissue/aspirate for others.** Concentration techniques, serology (antibody/antigen), PCR and imaging supplement microscopy; EOSINOPHILIA is a useful clue to tissue-invasive helminths.',
    '**Prevention follows the route: sanitation and safe food/water (faecal–oral), footwear (skin-penetrating), cooking meat/fish (foodborne), and vector control (nets, insecticides).** This transmission-and-diagnosis framework organises the whole course, from protozoa ([[protozoa-classification-biology]]) to helminths ([[helminth-classification-overview]]) to the arthropod vectors ([[medical-entomology-vectors]]).',
  ],

  mechanism: {
    title: 'Route drives diagnosis + prevention; biological vs mechanical vectors; O&P/blood films',
    steps: [
      { id: 's1', label: 'Routes: faecal–oral, skin penetration, vector, foodborne, congenital', emphasis: 'key' },
      { id: 's2', label: 'Biological vector = parasite develops in it; mechanical = just carries it', emphasis: 'key' },
      { id: 's3', label: 'Infective stage ≠ diagnostic stage — match specimen to stage', emphasis: 'key' },
      { id: 's4', label: 'Dx: stool O&P (intestinal), blood films (malaria/microfilaria), serology/PCR' },
      { id: 's5', label: 'Eosinophilia = tissue-invasive helminth clue; prevent by route' },
    ],
  },

  examFindings: [
    { sign: 'A parasite that multiplies within its arthropod host', mechanism: 'Biological vector (e.g. Anopheles/malaria)', significance: 'key' },
    { sign: 'A housefly carrying enteric pathogens on its body', mechanism: 'Mechanical vector', significance: 'key' },
    { sign: 'Stool ova-and-parasite examination', mechanism: 'First-line for intestinal protozoa/helminths', significance: 'key' },
    { sign: 'Peripheral eosinophilia', mechanism: 'Tissue-invasive helminth infection', significance: 'supportive' },
    { sign: 'Blood film used for diagnosis', mechanism: 'Malaria and microfilariae', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The difference between biological and mechanical vectors', meaning: 'The parasite develops in a biological vector; a mechanical vector only carries it' },
    { clue: 'The first-line test for intestinal parasites', meaning: 'Stool examination for ova and parasites (O&P)' },
    { clue: 'The specimen for diagnosing malaria', meaning: 'Blood film (thick and thin)' },
    { clue: 'The blood clue to a tissue-invasive helminth', meaning: 'Eosinophilia' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Transmission route determines prevention (sanitation, cooking, footwear, vector control) and diagnosis (stool O&P, blood films, serology). It frames every organism: faecal–oral protozoa ([[entamoeba-histolytica-amoebiasis]], [[giardia-intestinal-flagellates]]), foodborne helminths ([[gnathostomiasis]], [[trematodes-flukes-overview]]), and vector-borne disease ([[mosquito-borne-diseases]]). Eosinophilia flags tissue-invasive worms.' },
  ],

  mnemonics: [
    { hook: 'Vectors: "Biological = Breeds the parasite; Mechanical = Merely carries it"', expansion: ['Anopheles = biological (malaria)', 'Housefly = mechanical'] },
    { hook: 'Dx by specimen: "Stool for guts, Blood for malaria/microfilaria, tissue for the rest"', expansion: ['Eosinophilia = tissue helminth', 'Infective ≠ diagnostic stage'] },
  ],

  traps: [
    {
      questionCategory: 'Biological vs mechanical vector',
      wrongInstinct: 'Any arthropod that transmits a parasite is a biological vector',
      rightAnswer: 'A BIOLOGICAL vector is one in which the parasite DEVELOPS or multiplies (a required part of the life cycle, e.g. Anopheles for malaria); a MECHANICAL vector merely carries the organism externally (e.g. a housefly) without any development',
      why: 'The distinction matters for control and specificity: biological vectors are essential, specific hosts (targeting them interrupts the cycle), whereas mechanical transmission is incidental and non-specific.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The Anopheles mosquito transmitting malaria is an example of a:',
      options: [
        { id: 'a', text: 'Mechanical vector' },
        { id: 'b', text: 'Biological vector (the parasite develops within it)' },
        { id: 'c', text: 'Paratenic host' },
        { id: 'd', text: 'Reservoir only' },
      ],
      answerId: 'b',
      explanation: 'Plasmodium completes part of its life cycle (the sexual cycle) within the Anopheles mosquito, making it a biological vector. A mechanical vector, like a housefly, merely carries organisms on its body without any parasite development.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'The first-line laboratory investigation for a suspected intestinal parasitic infection is:',
      options: [
        { id: 'a', text: 'A blood film' },
        { id: 'b', text: 'Stool examination for ova and parasites (O&P)' },
        { id: 'c', text: 'A skin biopsy' },
        { id: 'd', text: 'Urine microscopy' },
      ],
      answerId: 'b',
      explanation: 'Stool O&P microscopy (often with concentration techniques) is the workhorse for detecting intestinal protozoan cysts/trophozoites and helminth eggs; blood films are for malaria and microfilariae.',
      tests: 'investigation',
    },
  ],

  figures: [],
};

export default parasiteTransmissionDiagnosis;
