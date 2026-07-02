import type { Lecture } from '../../lib/types';

export const myiasisAndFlyVectors: Lecture = {
  id: 'myiasis-and-fly-vectors',
  title: 'Flies & Myiasis',
  system: 'parasitology',
  source: 'L13 — Medical Flies',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Parasitology' },
    { kind: 'lecture', label: 'L13 Medical Flies' },
    { kind: 'disease', label: 'Myiasis' },
    { kind: 'exam', label: 'Mechanical vectors' },
  ],

  highYield: [
    '**Flies (order Diptera) harm human health in three ways: as MECHANICAL vectors of enteric pathogens, as BIOLOGICAL vectors (blood-sucking flies — see [[bloodsucking-fly-vectors]]), and directly through MYIASIS (infestation of tissue by fly LARVAE/maggots).**',
    '**The common HOUSEFLY (Musca domestica) is a MECHANICAL vector: it feeds on faeces and food and carries enteric pathogens (bacteria, viruses, protozoan cysts, helminth eggs) on its body and mouthparts — spreading diarrhoeal disease, typhoid and more.** It does not transmit a parasite that develops in it; sanitation and food hygiene control it.',
    '**MYIASIS is the infestation of living tissue by fly larvae. It is classified by site (cutaneous/furuncular, wound, cavity — nasal/aural/ocular, or intestinal) and by the fly\'s dependence: OBLIGATE myiasis (larvae require living tissue — e.g. screwworm) versus FACULTATIVE (larvae normally feed on dead tissue/carrion but can invade wounds).**',
    '**Cutaneous (furuncular) myiasis presents as a boil-like nodule with a central pore through which the larva breathes (and sometimes moves) — treatment is to occlude the pore/extract the larva. Wound myiasis colonises neglected wounds; some larvae (obligate screwworm) invade healthy tissue and can be destructive.**',
    '**High-yield: housefly = mechanical vector of enteric disease (hygiene); myiasis = fly-larva infestation of tissue (furuncular boil with a breathing pore, or wound/cavity forms).** Flies sit within medical entomology ([[medical-entomology-vectors]]); the blood-sucking biological-vector flies (sandfly, tsetse, blackfly) are covered separately in [[bloodsucking-fly-vectors]].',
  ],

  mechanism: {
    title: 'Housefly = mechanical vector (enteric); myiasis = fly-larva infestation (obligate vs facultative)',
    steps: [
      { id: 's1', label: 'Flies harm as mechanical vectors, biological vectors, and via myiasis', emphasis: 'key' },
      { id: 's2', label: 'Housefly (Musca) = MECHANICAL vector of enteric pathogens (hygiene control)', emphasis: 'key' },
      { id: 's3', label: 'Myiasis = infestation of tissue by fly LARVAE (maggots)', emphasis: 'key' },
      { id: 's4', label: 'Obligate (need living tissue, screwworm) vs facultative (dead tissue/wounds)', emphasis: 'key' },
      { id: 's5', label: 'Furuncular myiasis = boil with a central breathing pore → extract larva' },
    ],
  },

  examFindings: [
    { sign: 'Houseflies spreading diarrhoeal disease/typhoid', mechanism: 'Mechanical vector (carries pathogens on the body)', significance: 'key' },
    { sign: 'A boil-like nodule with a central pore and a moving larva', mechanism: 'Cutaneous (furuncular) myiasis', significance: 'key' },
    { sign: 'Maggots colonising a neglected wound', mechanism: 'Wound myiasis (facultative)', significance: 'key' },
    { sign: 'Larvae invading healthy tissue destructively', mechanism: 'Obligate myiasis (e.g. screwworm)', significance: 'supportive' },
    { sign: 'Nasal/aural/ocular larval infestation', mechanism: 'Cavity myiasis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The type of vector the housefly represents', meaning: 'A mechanical vector (of enteric pathogens)' },
    { clue: 'The definition of myiasis', meaning: 'Infestation of tissue by fly larvae (maggots)' },
    { clue: 'The difference between obligate and facultative myiasis', meaning: 'Obligate larvae require living tissue; facultative normally feed on dead tissue but can invade wounds' },
    { clue: 'The appearance of furuncular (cutaneous) myiasis', meaning: 'A boil-like nodule with a central breathing pore' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The housefly as a mechanical vector links fly control to enteric-disease prevention (sanitation/food hygiene — relevant to the GI infections of HGB-2); myiasis is a direct larval infestation managed by larval extraction and wound care. Flies belong to medical entomology ([[medical-entomology-vectors]]); the blood-sucking biological-vector flies are in [[bloodsucking-fly-vectors]].' },
  ],

  mnemonics: [
    { hook: 'Housefly = "mechanical vector" (carries enteric pathogens) — control by hygiene', expansion: ['Feeds on faeces + food', 'No parasite development in it'] },
    { hook: 'Myiasis = "maggots in tissue": Obligate (living tissue, screwworm) vs Facultative (wounds)', expansion: ['Furuncular = boil + breathing pore', 'Cavity = nasal/aural/ocular'] },
  ],

  traps: [
    {
      questionCategory: 'The housefly as a vector',
      wrongInstinct: 'The housefly is a biological vector because it spreads so many diseases',
      rightAnswer: 'The housefly is a MECHANICAL vector — it carries pathogens on its body/mouthparts from faeces to food without any parasite development inside it; that is why sanitation and food hygiene (not a specific life-cycle target) control it',
      why: 'Mislabelling it biological misunderstands the transmission: there is no development stage in the fly, so control targets contamination and hygiene rather than the vector\'s life cycle.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The housefly (Musca domestica) contributes to the spread of diarrhoeal disease and typhoid primarily as a:',
      options: [
        { id: 'a', text: 'Biological vector in which the pathogen multiplies' },
        { id: 'b', text: 'Mechanical vector carrying pathogens on its body from faeces to food' },
        { id: 'c', text: 'Definitive host' },
        { id: 'd', text: 'Cause of myiasis only' },
      ],
      answerId: 'b',
      explanation: 'The housefly is a mechanical vector: it transfers enteric pathogens on its body and mouthparts between faeces and food, without the organism developing inside it. Control relies on sanitation and food hygiene.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Cutaneous (furuncular) myiasis characteristically presents as:',
      options: [
        { id: 'a', text: 'A boil-like nodule with a central pore through which the larva breathes' },
        { id: 'b', text: 'A migrating subcutaneous swelling with eosinophilia' },
        { id: 'c', text: 'Watery diarrhoea' },
        { id: 'd', text: 'A ring-enhancing brain lesion' },
      ],
      answerId: 'a',
      explanation: 'Furuncular myiasis is a boil-like nodule containing a fly larva, with a central pore through which the larva breathes; treatment is to occlude the pore or extract the larva.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default myiasisAndFlyVectors;
