import type { Lecture } from '../../lib/types';

export const medicalMitesAcarology: Lecture = {
  id: 'medical-mites-acarology',
  title: 'Medical Acarology: Mites',
  system: 'parasitology',
  source: 'L10 — Medical Acarology (Mites)',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Parasitology' },
    { kind: 'lecture', label: 'L10 Medical Acarology' },
    { kind: 'disease', label: 'Scabies' },
    { kind: 'exam', label: 'Chiggers & scrub typhus' },
  ],

  highYield: [
    '**Mites are tiny arachnids (Acari, with 8 legs as adults) of medical importance as direct parasites, allergens and disease vectors.** The four to know are the SCABIES mite, CHIGGER (trombiculid) mites, HOUSE DUST mites, and Demodex — each with a distinct clinical effect.',
    '**Sarcoptes scabiei causes SCABIES: the female mite BURROWS into the epidermis, causing intense ITCH (worse at night) and a papular rash with burrows in web spaces, wrists and genitalia.** It spreads by close/skin contact (and is effectively an STI in adults). CRUSTED (Norwegian) scabies — hyperinfestation with thousands of mites — occurs in the immunocompromised and is highly contagious. Treat with topical PERMETHRIN (or oral ivermectin) and treat close contacts.',
    '**Trombiculid mite LARVAE ("chiggers") bite and, in Asia, are the VECTOR of SCRUB TYPHUS (Orientia tsutsugamushi) — presenting with fever, an ESCHAR at the bite site, rash and lymphadenopathy.** So chiggers cause an itchy bite AND transmit a rickettsial disease (a key regional point).',
    '**House DUST mites (Dermatophagoides) are a major indoor ALLERGEN: their faecal particles trigger allergic RHINITIS and ASTHMA (a common trigger of atopic disease).** Demodex mites live in hair follicles/sebaceous glands and are associated with blepharitis and rosacea-like facial dermatitis. Some mites also cause irritant/allergic dermatitis on contact.',
    '**High-yield summary: Scabies (Sarcoptes, burrowing itch → permethrin), Chigger (trombiculid → scrub typhus + eschar), Dust mite (allergen → asthma/rhinitis), Demodex (follicles → blepharitis/rosacea).** Mites are part of medical entomology/acarology alongside the arthropod vectors ([[medical-entomology-vectors]]) — knowing which mite does what is the exam focus.',
  ],

  mechanism: {
    title: 'Mites as parasites (scabies), vectors (chigger→scrub typhus), allergens (dust mite) and follicular (Demodex)',
    steps: [
      { id: 's1', label: 'Mites = tiny arachnids (Acari); parasites, allergens, vectors', emphasis: 'key' },
      { id: 's2', label: 'Sarcoptes scabiei burrows → intense nocturnal itch; treat permethrin', emphasis: 'key' },
      { id: 's3', label: 'Crusted (Norwegian) scabies = hyperinfestation in immunocompromised (very contagious)', emphasis: 'danger' },
      { id: 's4', label: 'Chigger (trombiculid) larva → SCRUB TYPHUS (eschar, fever)', emphasis: 'key' },
      { id: 's5', label: 'Dust mite = asthma/rhinitis allergen; Demodex = blepharitis/rosacea' },
    ],
  },

  examFindings: [
    { sign: 'Intense nocturnal itch with burrows in web spaces/wrists', mechanism: 'Scabies (Sarcoptes scabiei)', significance: 'key' },
    { sign: 'Thick, crusted, hyperinfested skin in an immunocompromised patient', mechanism: 'Crusted (Norwegian) scabies — highly contagious', significance: 'key' },
    { sign: 'Fever with an eschar at a mite-bite site (Asia)', mechanism: 'Scrub typhus (trombiculid/chigger vector)', significance: 'key' },
    { sign: 'Allergic rhinitis/asthma triggered indoors', mechanism: 'House dust mite allergen (Dermatophagoides)', significance: 'supportive' },
    { sign: 'Chronic blepharitis/rosacea-like facial dermatitis', mechanism: 'Demodex mites', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The mite causing intensely itchy burrows', meaning: 'Sarcoptes scabiei (scabies)' },
    { clue: 'The disease transmitted by chigger (trombiculid) mites', meaning: 'Scrub typhus (Orientia tsutsugamushi), with an eschar' },
    { clue: 'The mite that is a major indoor allergen for asthma', meaning: 'House dust mite (Dermatophagoides)' },
    { clue: 'The treatment for scabies', meaning: 'Topical permethrin (or oral ivermectin) + treat contacts' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Mites cause common disease across specialties: scabies (dermatology/public health — treat contacts; crusted scabies is an outbreak risk), scrub typhus (a treatable rickettsial fever with an eschar — chigger vector), and dust-mite allergy (asthma/rhinitis). They are part of medical acarology within the entomology theme ([[medical-entomology-vectors]]); the chigger/tick as vectors also appear in [[mosquito-borne-diseases]] context.' },
  ],

  mnemonics: [
    { hook: 'Mites: "Scabies (burrow/itch), Chigger (scrub typhus + eschar), Dust mite (asthma), Demodex (face/eyes)"', expansion: ['Scabies → permethrin + contacts', 'Crusted scabies = immunocompromised'] },
    { hook: 'Scrub typhus = "chigger bite → ESCHAR + fever" (treat doxycycline)', expansion: ['Orientia tsutsugamushi', 'Endemic in Asia'] },
  ],

  traps: [
    {
      questionCategory: 'Recognising crusted (Norwegian) scabies',
      wrongInstinct: 'Scabies is always intensely itchy, so a poorly-itchy crusted rash is not scabies',
      rightAnswer: 'CRUSTED (Norwegian) scabies — a hyperinfestation with thousands of mites in the IMMUNOCOMPROMISED — can be only mildly itchy yet is EXTREMELY contagious (an outbreak source in hospitals/care homes); it must not be missed despite the atypical presentation',
      why: 'The impaired immune response means the usual intense itch may be blunted while the mite burden is enormous; underestimating it (because it itches less) allows major outbreaks.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient has intense nocturnal itching with small burrows in the finger web spaces and wrists. The cause and treatment are:',
      options: [
        { id: 'a', text: 'Sarcoptes scabiei (scabies) — topical permethrin' },
        { id: 'b', text: 'House dust mite — inhaled steroids' },
        { id: 'c', text: 'Demodex — oral metronidazole' },
        { id: 'd', text: 'Chigger — doxycycline' },
      ],
      answerId: 'a',
      explanation: 'Burrows with intense nocturnal itch, classically in the web spaces and wrists, indicate scabies (Sarcoptes scabiei); treatment is topical permethrin (or oral ivermectin) with treatment of close contacts.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'In Asia, the larvae of trombiculid mites ("chiggers") are the vector for which disease, classically producing an eschar at the bite site?',
      options: [
        { id: 'a', text: 'Scrub typhus (Orientia tsutsugamushi)' },
        { id: 'b', text: 'Malaria' },
        { id: 'c', text: 'Dengue' },
        { id: 'd', text: 'Leishmaniasis' },
      ],
      answerId: 'a',
      explanation: 'Chigger (trombiculid mite) larvae transmit scrub typhus, caused by Orientia tsutsugamushi, which characteristically produces an eschar at the bite site with fever, rash and lymphadenopathy; it is treated with doxycycline.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default medicalMitesAcarology;
