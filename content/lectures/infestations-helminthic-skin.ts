import type { Lecture } from '../../lib/types';

export const infestationsHelminthicSkin: Lecture = {
  id: 'infestations-helminthic-skin',
  title: 'Skin Infestations & Helminthic Infections',
  system: 'derm',
  source: 'L8 — Infestations & Helminthic Infections',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L8 Infestations' },
    { kind: 'mechanism', label: 'Mites, lice & cutaneous larvae' },
    { kind: 'exam', label: 'Scabies burrows; larva migrans' },
  ],

  highYield: [
    'SCABIES (Sarcoptes scabiei mite) causes intensely ITCHY papules — WORSE AT NIGHT — with pathognomonic BURROWS in web spaces, wrists, axillae, genitals, and (in infants) palms/soles; it is spread by close/skin contact and is a hypersensitivity to the mite. Diagnosis: burrow/skin scraping showing mite/eggs/faeces. Treat the patient AND close contacts (topical PERMETHRIN or oral IVERMECTIN) and wash bedding/clothes.',
    'CRUSTED (Norwegian) SCABIES is a hyperinfestation with thousands of mites (thick scaly crusts) in immunocompromised/elderly patients — highly contagious, often needs combined topical + oral ivermectin. PEDICULOSIS (LICE): head lice (nits on hair shafts, children), body lice (in clothing seams; vector of typhus/trench fever), and pubic lice ("crabs", sexually transmitted) — treat with permethrin and remove nits.',
    'CUTANEOUS LARVA MIGRANS ("creeping eruption") is an intensely itchy, SERPIGINOUS, migrating track from animal HOOKWORM larvae (Ancylostoma) that penetrate skin (walking barefoot on contaminated sand/soil) but cannot complete their cycle in humans → self-limited but treated with ALBENDAZOLE or ivermectin. This overlaps parasitology (helminths) but presents primarily on the SKIN.',
    'Other bites/infestations: insect-bite hypersensitivity (papular urticaria), tungiasis (sand flea), myiasis (fly larvae in tissue), and cutaneous manifestations of systemic helminths. The unifying feature is ITCH; secondary bacterial infection (impetiginisation) from scratching is common. Public-health measures (treat contacts, hygiene, footwear) prevent spread.',
    '**The take-home: SCABIES = nocturnal itch + burrows (web spaces) → permethrin/ivermectin, treat contacts; crusted scabies in the immunosuppressed; LICE (head/body/pubic) → permethrin; CUTANEOUS LARVA MIGRANS = serpiginous migrating track (animal hookworm) → albendazole/ivermectin.** The anthelmintic/antiparasitic drugs are in BCP ([[anthelmintic-agents]]); the helminth biology is in PHI ([[helminth-classification-overview]], [[toxocariasis-larva-migrans]]).',
  ],

  mechanism: {
    title: 'Scabies (mite, nocturnal itch + burrows) / lice / cutaneous larva migrans (animal hookworm track) — itch is the theme',
    steps: [
      { id: 's1', label: 'Scabies mite → nocturnal itch + burrows (web spaces/wrists/genitals); treat patient + contacts', emphasis: 'key' },
      { id: 's2', label: 'Permethrin (topical) or oral ivermectin; wash bedding/clothes', emphasis: 'key' },
      { id: 's3', label: 'Crusted (Norwegian) scabies = hyperinfestation in immunocompromised (very contagious)', emphasis: 'danger' },
      { id: 's4', label: 'Lice: head (nits), body (clothing seams; typhus vector), pubic (STI)', emphasis: 'key' },
      { id: 's5', label: 'Cutaneous larva migrans = serpiginous migrating track (animal hookworm) → albendazole/ivermectin', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Intense itch worse at night with burrows in finger web spaces', mechanism: 'Scabies (Sarcoptes scabiei)', significance: 'key' },
    { sign: 'Thick scaly crusts teeming with mites in an immunosuppressed patient', mechanism: 'Crusted (Norwegian) scabies', significance: 'key' },
    { sign: 'Nits attached to scalp hair shafts in a child', mechanism: 'Head lice (pediculosis capitis)', significance: 'key' },
    { sign: 'Itchy serpiginous advancing track on the foot after beach exposure', mechanism: 'Cutaneous larva migrans (animal hookworm larva)', significance: 'key' },
    { sign: 'Impetiginised excoriations from scratching', mechanism: 'Secondary bacterial infection', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The mite causing scabies', meaning: 'Sarcoptes scabiei' },
    { clue: 'The classic timing of scabies itch', meaning: 'Worse at night' },
    { clue: 'The treatment for scabies (and who else to treat)', meaning: 'Permethrin/ivermectin — plus all close contacts' },
    { clue: 'The cause of a serpiginous creeping eruption', meaning: 'Cutaneous larva migrans (animal hookworm larvae)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Infestations are common, itchy and contagious: scabies requires treating the patient AND all close contacts (plus laundering) or it recurs, crusted scabies is a highly infectious hyperinfestation needing ivermectin, and cutaneous larva migrans is self-limited but relieved by albendazole/ivermectin ([[anthelmintic-agents]]). Recognising burrows and the nocturnal itch prevents outbreaks; secondary bacterial infection needs antibiotics ([[skin-infections-bacterial-fungal-viral]]). The helminth biology sits in PHI ([[helminth-classification-overview]]).' },
  ],

  mnemonics: [
    { hook: 'Scabies: "night itch + web-space burrows → permethrin/ivermectin + treat contacts"', expansion: ['Crusted scabies = immunosuppressed', 'Wash bedding/clothes'] },
    { hook: '"Creeping serpiginous track = larva migrans (animal hookworm) → albendazole"', expansion: ['Lice: head/body/pubic', 'Body lice = typhus vector'] },
  ],

  traps: [
    {
      questionCategory: 'Treating scabies contacts',
      wrongInstinct: 'Only the person with the itchy rash needs scabies treatment',
      rightAnswer: 'ALL close/household contacts (and sexual partners) must be treated SIMULTANEOUSLY — even if asymptomatic — and bedding/clothing laundered, because the itch is a delayed hypersensitivity that lags infestation; treating only the symptomatic person leads to re-infestation ("ping-pong")',
      why: 'Because symptoms lag transmission, untreated asymptomatic contacts keep re-infesting the index patient; simultaneous contact treatment plus laundering is essential to break the cycle.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient has intense pruritus that is worse at night, with linear burrows in the finger web spaces. The most likely diagnosis and treatment are:',
      options: [
        { id: 'a', text: 'Tinea corporis — topical azole' },
        { id: 'b', text: 'Scabies — topical permethrin (or oral ivermectin), treating close contacts too' },
        { id: 'c', text: 'Impetigo — oral antibiotics' },
        { id: 'd', text: 'Atopic dermatitis — emollients only' },
      ],
      answerId: 'b',
      explanation: 'Nocturnal pruritus with burrows in the web spaces is classic scabies (Sarcoptes scabiei). Treatment is topical permethrin or oral ivermectin, and all close contacts must be treated simultaneously with laundering of bedding/clothing to prevent re-infestation.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'An intensely itchy, serpiginous, slowly migrating track on the foot after walking barefoot on a beach is caused by:',
      options: [
        { id: 'a', text: 'Human hookworm completing its life cycle' },
        { id: 'b', text: 'Migrating animal hookworm larvae (cutaneous larva migrans)' },
        { id: 'c', text: 'Scabies mites' },
        { id: 'd', text: 'Head lice' },
      ],
      answerId: 'b',
      explanation: 'Cutaneous larva migrans is caused by animal hookworm larvae (e.g. Ancylostoma) that penetrate the skin but cannot complete their life cycle in humans, producing an itchy serpiginous migrating track. It is self-limited but treated with albendazole or ivermectin for relief.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default infestationsHelminthicSkin;
