import type { Lecture } from '../../lib/types';
import { ARTHROPOD_VECTORS } from '../../lib/figures';

export const bloodsuckingFlyVectors: Lecture = {
  id: 'bloodsucking-fly-vectors',
  title: 'Blood-Sucking Fly Vectors',
  system: 'parasitology',
  source: 'L13 — Medical Flies',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Parasitology' },
    { kind: 'lecture', label: 'L13 Medical Flies' },
    { kind: 'disease', label: 'Leishmania / Trypanosoma' },
    { kind: 'exam', label: 'Sandfly / tsetse / blackfly' },
  ],

  highYield: [
    '**Several blood-sucking flies are BIOLOGICAL vectors of major parasitic diseases — each fly transmits a specific pathogen, a classic matching set.** These flies are essential hosts in which the parasite develops, so knowing the fly points to the disease (and vice versa).',
    '**SANDFLIES (Phlebotomus) transmit LEISHMANIASIS (Leishmania): cutaneous leishmaniasis (chronic skin ulcer, "oriental sore"), mucocutaneous, and VISCERAL leishmaniasis (kala-azar — fever, massive splenomegaly, pancytopenia, often fatal untreated).** Sandfly bites deliver the promastigotes; diagnosis is by finding amastigotes in tissue (e.g. splenic/bone-marrow aspirate).',
    '**The TSETSE FLY (Glossina) transmits African trypanosomiasis (SLEEPING SICKNESS, Trypanosoma brucei): a chancre at the bite, then a haemolymphatic stage (fever, Winterbottom sign — posterior cervical nodes), progressing to CNS involvement (somnolence, coma).** It is confined to sub-Saharan Africa (the tsetse belt).',
    '**BLACKFLIES (Simulium), which breed in fast-flowing rivers, transmit ONCHOCERCIASIS (Onchocerca volvulus) — "RIVER BLINDNESS": subcutaneous nodules, an intensely itchy dermatitis, and progressive eye disease leading to BLINDNESS (treated with ivermectin).** Deerflies/horseflies (*Chrysops*) transmit *Loa loa* (the African eye worm).',
    '**High-yield fly→disease map: SANDFLY = leishmaniasis; TSETSE = African trypanosomiasis (sleeping sickness); BLACKFLY = onchocerciasis (river blindness); Chrysops = Loa loa.** These biological-vector flies contrast with the housefly\'s mechanical role ([[myiasis-and-fly-vectors]]) and complete the medical entomology of the block ([[medical-entomology-vectors]], [[mosquito-borne-diseases]]).',
  ],

  mechanism: {
    title: 'Biological-vector flies: sandfly→Leishmania, tsetse→trypanosomiasis, blackfly→onchocerciasis',
    steps: [
      { id: 's1', label: 'Blood-sucking flies = BIOLOGICAL vectors (parasite develops in them)', emphasis: 'key' },
      { id: 's2', label: 'SANDFLY (Phlebotomus) → LEISHMANIASIS (cutaneous / visceral kala-azar)', emphasis: 'key' },
      { id: 's3', label: 'TSETSE (Glossina) → African trypanosomiasis (sleeping sickness → CNS)', emphasis: 'danger' },
      { id: 's4', label: 'BLACKFLY (Simulium, rivers) → onchocerciasis (river blindness); ivermectin', emphasis: 'key' },
      { id: 's5', label: 'Chrysops (deer/horsefly) → Loa loa (African eye worm)' },
    ],
  },

  examFindings: [
    { sign: 'Chronic skin ulcer ("oriental sore") after a sandfly bite', mechanism: 'Cutaneous leishmaniasis', significance: 'key' },
    { sign: 'Fever + massive splenomegaly + pancytopenia (kala-azar)', mechanism: 'Visceral leishmaniasis (Leishmania donovani)', significance: 'key' },
    { sign: 'Chancre then somnolence/coma in sub-Saharan Africa', mechanism: 'African trypanosomiasis (tsetse fly)', significance: 'key' },
    { sign: 'Itchy dermatitis + subcutaneous nodules + progressive blindness near rivers', mechanism: 'Onchocerciasis (blackfly, river blindness)', significance: 'key' },
    { sign: 'A worm crossing the conjunctiva', mechanism: 'Loa loa (Chrysops deer/horsefly)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The fly transmitting leishmaniasis', meaning: 'The sandfly (Phlebotomus)' },
    { clue: 'The fly transmitting African sleeping sickness', meaning: 'The tsetse fly (Glossina)' },
    { clue: 'The fly transmitting onchocerciasis (river blindness)', meaning: 'The blackfly (Simulium)' },
    { clue: 'The visceral form of leishmaniasis', meaning: 'Kala-azar (fever, splenomegaly, pancytopenia)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The fly→disease map (sandfly=leishmaniasis, tsetse=sleeping sickness, blackfly=river blindness) is high-yield, and each is a biological vector whose control interrupts transmission (river blindness is managed with mass ivermectin). These contrast with the housefly\'s mechanical role ([[myiasis-and-fly-vectors]]) and complete the medical entomology alongside the mosquito vectors ([[mosquito-borne-diseases]], [[medical-entomology-vectors]]).' },
  ],

  mnemonics: [
    { hook: 'Fly→disease: "Sandfly = leiShmania; TseTse = Trypanosome (sleeping); Blackfly = Blindness (oncho)"', expansion: ['Blackfly breeds in rivers → river blindness', 'Ivermectin for onchocerciasis'] },
    { hook: 'Leishmania forms: "Cutaneous sore, Mucocutaneous, Visceral (kala-azar)"', expansion: ['Amastigotes in tissue', 'Visceral = fever + big spleen + pancytopenia'] },
  ],

  traps: [
    {
      questionCategory: 'Matching the fly to its disease',
      wrongInstinct: 'All biting flies transmit the same kinds of infection',
      rightAnswer: 'Each blood-sucking fly is a SPECIFIC biological vector: SANDFLY → leishmaniasis, TSETSE → African trypanosomiasis, BLACKFLY → onchocerciasis (river blindness) — the fly identifies the disease and vice versa',
      why: 'Because these are biological vectors with specific parasite–vector pairings, the fly (and its habitat, e.g. blackflies near fast rivers) is a strong clue to the disease and to control strategy.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Onchocerciasis ("river blindness"), caused by Onchocerca volvulus, is transmitted by which fly that breeds in fast-flowing rivers?',
      options: [
        { id: 'a', text: 'Sandfly (Phlebotomus)' },
        { id: 'b', text: 'Blackfly (Simulium)' },
        { id: 'c', text: 'Tsetse fly (Glossina)' },
        { id: 'd', text: 'Housefly (Musca)' },
      ],
      answerId: 'b',
      explanation: 'Blackflies (Simulium), which breed in fast-flowing rivers, transmit Onchocerca volvulus, causing onchocerciasis with itchy dermatitis, subcutaneous nodules and progressive blindness — "river blindness", controlled with ivermectin.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A patient has a chronic skin ulcer ("oriental sore") after a sandfly bite. The causative organism is:',
      options: [
        { id: 'a', text: 'Leishmania' },
        { id: 'b', text: 'Trypanosoma brucei' },
        { id: 'c', text: 'Onchocerca volvulus' },
        { id: 'd', text: 'Plasmodium' },
      ],
      answerId: 'a',
      explanation: 'Sandflies (Phlebotomus) transmit Leishmania; cutaneous leishmaniasis produces a chronic skin ulcer ("oriental sore"), while visceral leishmaniasis (kala-azar) causes fever, massive splenomegaly and pancytopenia.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Blood-sucking fly vectors', svg: ARTHROPOD_VECTORS, caption: 'Sandfly (leishmaniasis), tsetse (trypanosomiasis), blackfly (onchocerciasis) among the arthropod vectors.' },
  ],
};

export default bloodsuckingFlyVectors;
