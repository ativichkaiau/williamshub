import type { Lecture } from '../../lib/types';

export const mosquitoBorneDiseases: Lecture = {
  id: 'mosquito-borne-diseases',
  title: 'Mosquito Vectors & Their Diseases',
  system: 'parasitology',
  source: 'L12 — Medical Entomology & Mosquito Vectors',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Parasitology' },
    { kind: 'lecture', label: 'L12 Entomology & Mosquitoes' },
    { kind: 'disease', label: 'Malaria / dengue' },
    { kind: 'exam', label: 'Anopheles / Aedes / Culex' },
  ],

  highYield: [
    '**Mosquitoes are the most important disease vectors in the world, and the three medically important GENERA each transmit a characteristic set of diseases — a classic exam matching task.** Only FEMALE mosquitoes take a blood meal (needed for egg production); the life cycle has aquatic stages (egg → larva → pupa in water → adult), which is why larval-source control works.',
    '**ANOPHELES transmits MALARIA (Plasmodium — it is the definitive host) and also lymphatic filariasis.** It is the night-biting vector; malaria control centres on insecticide-treated bed nets and indoor spraying against Anopheles ([[blood-apicomplexa-malaria-babesia]]).',
    '**AEDES (Aedes aegypti/albopictus) is the DAY-BITING vector of the major arboviruses: DENGUE, ZIKA, CHIKUNGUNYA and yellow fever.** Its container-breeding habit (small collections of clean water around homes) drives urban outbreaks; control targets breeding sites and personal protection. Dengue is hugely important in Southeast Asia.',
    '**CULEX transmits lymphatic FILARIASIS (Wuchereria bancrofti — adult worms block lymphatics → LYMPHOEDEMA/elephantiasis; microfilariae are found in NIGHT blood films) and JAPANESE ENCEPHALITIS.** Filariasis is diagnosed by nocturnal blood films (microfilariae) and treated with diethylcarbamazine/ivermectin + albendazole.',
    '**High-yield genus→disease map: ANOPHELES = malaria; AEDES = dengue/Zika/chikungunya (day-biter); CULEX = filariasis + Japanese encephalitis.** Prevention is mosquito control (nets, repellents, eliminating breeding water) — the practical output of medical entomology ([[medical-entomology-vectors]]).',
  ],

  mechanism: {
    title: 'Female mosquitoes, aquatic larvae; Anopheles=malaria, Aedes=arboviruses (day), Culex=filariasis/JE',
    steps: [
      { id: 's1', label: 'Female mosquitoes bite; aquatic larvae → larval-source control works', emphasis: 'key' },
      { id: 's2', label: 'ANOPHELES = malaria (definitive host) + filariasis (night-biter)', emphasis: 'key' },
      { id: 's3', label: 'AEDES = dengue, Zika, chikungunya, yellow fever (DAY-biter, containers)', emphasis: 'key' },
      { id: 's4', label: 'CULEX = lymphatic filariasis (Wuchereria) + Japanese encephalitis', emphasis: 'key' },
      { id: 's5', label: 'Prevent by mosquito control (nets, repellents, remove breeding water)' },
    ],
  },

  examFindings: [
    { sign: 'Cyclical fever after travel to a malarious area', mechanism: 'Malaria (Anopheles-transmitted)', significance: 'key' },
    { sign: 'Dengue/Zika/chikungunya outbreak in an urban area', mechanism: 'Aedes (day-biting, container-breeding) vector', significance: 'key' },
    { sign: 'Lymphoedema/elephantiasis with nocturnal microfilariae', mechanism: 'Lymphatic filariasis (Culex/Anopheles, Wuchereria)', significance: 'key' },
    { sign: 'Japanese encephalitis in a rice-farming region', mechanism: 'Culex vector', significance: 'supportive' },
    { sign: 'Reduced malaria after bed-net distribution', mechanism: 'Anopheles vector control', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The mosquito genus transmitting malaria', meaning: 'Anopheles (also its definitive host)' },
    { clue: 'The day-biting genus transmitting dengue/Zika/chikungunya', meaning: 'Aedes' },
    { clue: 'The genus transmitting lymphatic filariasis and Japanese encephalitis', meaning: 'Culex' },
    { clue: 'The blood-film timing for lymphatic filariasis', meaning: 'Night (nocturnal microfilariae of Wuchereria bancrofti)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The genus→disease map (Anopheles=malaria; Aedes=dengue/arboviruses; Culex=filariasis/JE) is high-yield and drives control (nets/spraying for Anopheles; breeding-site removal for Aedes). Malaria connects to the blood apicomplexa ([[blood-apicomplexa-malaria-babesia]]); the Anopheles is malaria\'s definitive host ([[parasitology-host-relationships]]); it operationalises the entomology of [[medical-entomology-vectors]].' },
  ],

  mnemonics: [
    { hook: 'Genus→disease: "Anopheles = mAlaria; Aedes = Arboviruses (dengue, day-biter); Culex = filariasis + JE"', expansion: ['Only females bite', 'Aedes breeds in small clean-water containers'] },
    { hook: 'Filariasis blood film "at night" (nocturnal microfilariae)', expansion: ['Wuchereria → lymphoedema/elephantiasis', 'DEC + albendazole'] },
  ],

  traps: [
    {
      questionCategory: 'Matching mosquito genus to disease',
      wrongInstinct: 'All mosquitoes transmit malaria',
      rightAnswer: 'Only ANOPHELES transmits malaria; AEDES transmits the arboviruses (dengue, Zika, chikungunya, yellow fever — and it is a DAY-biter), and CULEX transmits lymphatic filariasis and Japanese encephalitis — the genus determines the disease',
      why: 'The genera differ in the pathogens they carry and their biting behaviour (Aedes bites by day, Anopheles at night), which changes both the differential for a febrile patient and the control strategy.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Dengue, Zika and chikungunya viruses are transmitted primarily by which day-biting mosquito genus?',
      options: [
        { id: 'a', text: 'Anopheles' },
        { id: 'b', text: 'Aedes' },
        { id: 'c', text: 'Culex' },
        { id: 'd', text: 'Mansonia' },
      ],
      answerId: 'b',
      explanation: 'Aedes mosquitoes (A. aegypti/albopictus), which bite during the day and breed in small containers of clean water, are the main vectors of dengue, Zika, chikungunya and yellow fever, driving urban arbovirus outbreaks.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Lymphatic filariasis (Wuchereria bancrofti) causing lymphoedema is diagnosed by finding microfilariae on a blood film taken:',
      options: [
        { id: 'a', text: 'At night (nocturnal periodicity)' },
        { id: 'b', text: 'At midday' },
        { id: 'c', text: 'Only in urine' },
        { id: 'd', text: 'Only in stool' },
      ],
      answerId: 'a',
      explanation: 'Wuchereria bancrofti microfilariae show nocturnal periodicity, appearing in peripheral blood at night (matching the biting time of the Culex/Anopheles vectors), so blood films for diagnosis are taken at night.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default mosquitoBorneDiseases;
