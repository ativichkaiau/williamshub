import type { Lecture } from '../../lib/types';
import { ARTHROPOD_VECTORS } from '../../lib/figures';

export const medicalEntomologyVectors: Lecture = {
  id: 'medical-entomology-vectors',
  title: 'Medical Entomology & Vectors',
  system: 'parasitology',
  source: 'L12 — Medical Entomology & Mosquito Vectors',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Parasitology' },
    { kind: 'lecture', label: 'L12 Entomology & Mosquitoes' },
    { kind: 'mechanism', label: 'Vector transmission' },
    { kind: 'exam', label: 'Biological vs mechanical' },
  ],

  highYield: [
    '**Medical entomology studies ARTHROPODS that affect human health — as VECTORS of disease, as direct causes of injury (bites, stings, envenomation), and as agents of allergy or infestation (myiasis, scabies).** The medically important groups are insects (mosquitoes, flies, lice, fleas, bugs) and arachnids (ticks, mites).',
    '**Vectors transmit pathogens in two ways: a BIOLOGICAL vector is one in which the pathogen DEVELOPS or MULTIPLIES (an essential part of the life cycle — e.g. Anopheles for malaria); a MECHANICAL vector merely CARRIES the pathogen on its body surface (e.g. the housefly spreading enteric pathogens).** Biological transmission is specific and required; mechanical is incidental.',
    '**A few high-yield vector–disease pairs beyond mosquitoes: TICKS transmit rickettsiae, Lyme disease and Babesia; the TROMBICULID (chigger) mite transmits SCRUB TYPHUS; SANDFLIES transmit leishmaniasis; the TSETSE fly transmits African trypanosomiasis; and BLACKFLIES transmit onchocerciasis (river blindness).** The specific fly vectors are detailed in [[bloodsucking-fly-vectors]].',
    'Arthropods also cause disease directly: venomous bites/stings (some spiders, scorpions, venomous mites), allergic reactions, and INFESTATIONS — scabies (mites, see [[medical-mites-acarology]]), lice (pediculosis), and MYIASIS (fly-larva infestation of tissue, see [[myiasis-and-fly-vectors]]).',
    '**Vector CONTROL is central to preventing parasitic and other vector-borne diseases: insecticide-treated bed nets, indoor residual spraying, larval-source management, repellents and protective clothing.** Understanding which arthropod transmits what — and whether it is a biological or mechanical vector — is the organising principle, developed for mosquitoes in [[mosquito-borne-diseases]].',
  ],

  mechanism: {
    title: 'Arthropods as vectors (biological vs mechanical), injurers and infesters; control breaks transmission',
    steps: [
      { id: 's1', label: 'Arthropods affect health as vectors, injurers (bites/venom), infesters/allergens', emphasis: 'key' },
      { id: 's2', label: 'Biological vector = pathogen DEVELOPS in it; mechanical = just carries it', emphasis: 'key' },
      { id: 's3', label: 'Ticks (rickettsia/Lyme/Babesia), chigger (scrub typhus), sandfly (Leishmania)', emphasis: 'key' },
      { id: 's4', label: 'Tsetse (trypanosomiasis), blackfly (onchocerciasis); housefly = mechanical' },
      { id: 's5', label: 'Prevent by VECTOR CONTROL (nets, spraying, larval control, repellents)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'A pathogen that multiplies within its arthropod vector', mechanism: 'Biological vector (essential to the life cycle)', significance: 'key' },
    { sign: 'A housefly carrying enteric pathogens on its body', mechanism: 'Mechanical vector', significance: 'key' },
    { sign: 'Fever with an eschar after a mite bite', mechanism: 'Scrub typhus (trombiculid/chigger vector)', significance: 'supportive' },
    { sign: 'Skin ulcer after a sandfly bite', mechanism: 'Leishmaniasis (sandfly vector)', significance: 'supportive' },
    { sign: 'Reduced disease incidence after bed-net programmes', mechanism: 'Vector control interrupting transmission', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The two arthropod classes of medical importance', meaning: 'Insects and arachnids (ticks, mites)' },
    { clue: 'The difference between biological and mechanical vectors', meaning: 'The pathogen develops in a biological vector; a mechanical vector only carries it' },
    { clue: 'The vector of leishmaniasis', meaning: 'The sandfly (Phlebotomus)' },
    { clue: 'The mainstay of preventing vector-borne disease', meaning: 'Vector control (nets, spraying, larval control, repellents)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Knowing which arthropod transmits which pathogen — and whether it is a biological or mechanical vector — organises the prevention of vector-borne parasitic (and other) diseases, achieved chiefly by vector control. It builds on the vector concept from [[parasite-transmission-diagnosis]] and leads into the mosquito-borne diseases ([[mosquito-borne-diseases]]) and fly vectors ([[bloodsucking-fly-vectors]]); mites/infestations are in [[medical-mites-acarology]].' },
  ],

  mnemonics: [
    { hook: 'Vector types: "Biological Breeds the pathogen; Mechanical Merely carries it"', expansion: ['Anopheles = biological (malaria)', 'Housefly = mechanical'] },
    { hook: 'Non-mosquito vectors: "Tick, Chigger, Sandfly, Tsetse, Blackfly"', expansion: ['Tick = Lyme/rickettsia/Babesia', 'Sandfly = Leishmania; tsetse = trypanosomiasis'] },
  ],

  traps: [
    {
      questionCategory: 'Biological vs mechanical transmission',
      wrongInstinct: 'Any insect that lands on food and then on a wound is a biological vector of whatever it carries',
      rightAnswer: 'That is MECHANICAL transmission (the housefly merely carries organisms on its body); a BIOLOGICAL vector is one in which the pathogen DEVELOPS or multiplies as a required step in its life cycle (e.g. malaria in Anopheles)',
      why: 'The distinction determines specificity and control: biological vectors are essential, specific hosts (targeting them interrupts the cycle), whereas mechanical transmission is non-specific and incidental.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which is an example of a MECHANICAL (rather than biological) vector?',
      options: [
        { id: 'a', text: 'Anopheles mosquito transmitting malaria' },
        { id: 'b', text: 'A housefly carrying enteric bacteria from faeces to food' },
        { id: 'c', text: 'A sandfly transmitting Leishmania' },
        { id: 'd', text: 'A tsetse fly transmitting trypanosomes' },
      ],
      answerId: 'b',
      explanation: 'A housefly is a mechanical vector — it merely carries pathogens on its body surface from faeces to food, with no development of the organism. Anopheles, sandflies and tsetse flies are biological vectors in which the parasite develops.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'The mainstay of preventing most vector-borne parasitic diseases is:',
      options: [
        { id: 'a', text: 'Vector control (bed nets, insecticide spraying, larval-source management, repellents)' },
        { id: 'b', text: 'Antibiotics for everyone' },
        { id: 'c', text: 'Vaccination against all vectors' },
        { id: 'd', text: 'Avoiding all outdoor activity permanently' },
      ],
      answerId: 'a',
      explanation: 'Because transmission depends on the arthropod vector, vector control — insecticide-treated nets, indoor residual spraying, larval-source management and personal protection (repellents, clothing) — is the central strategy for preventing vector-borne disease.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Medical entomology — vectors & diseases', svg: ARTHROPOD_VECTORS, caption: 'Which arthropod transmits what (mosquitoes, sandfly, tsetse, blackfly, tick, chigger, housefly) and biological vs mechanical.' },
  ],
};

export default medicalEntomologyVectors;
