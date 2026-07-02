import type { Lecture } from '../../lib/types';

export const sparganosisSpirometra: Lecture = {
  id: 'sparganosis-spirometra',
  title: 'Sparganosis (Spirometra)',
  system: 'parasitology',
  source: 'L11 — Sparganosis & Echinococcosis',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Parasitology' },
    { kind: 'lecture', label: 'L11 Sparganosis & Echinococcosis' },
    { kind: 'disease', label: 'Sparganosis' },
    { kind: 'exam', label: 'Migrating larva' },
  ],

  highYield: [
    '**Sparganosis is a larval tapeworm (cestode) infection caused by the SPARGANUM — the plerocercoid larva of Spirometra.** Humans are an accidental host; the larva cannot mature into an adult tapeworm, so it MIGRATES through the tissues as a slowly-moving worm-like larva (much like a larva-migrans).',
    '**Three routes of human infection: (1) drinking water containing infected COPEPODS; (2) eating raw/undercooked FROG, SNAKE or other second intermediate hosts; and (3) the traditional POULTICE practice of applying raw frog/snake flesh to the eye or a wound — an important cultural route in parts of Asia.**',
    '**Clinically the sparganum causes a slowly MIGRATING, painful or itchy SUBCUTANEOUS nodule/swelling (often trunk, limbs or periorbital); OCULAR sparganosis and, rarely, cerebral sparganosis are serious forms.** Eosinophilia is common. The larva may persist for years.',
    '**Diagnosis is usually made by SURGICAL REMOVAL and identification of the ribbon-like sparganum larva (there are no eggs in stool, as the worm never matures); imaging and serology support it.** Treatment is SURGICAL EXCISION of the larva (praziquantel is unreliable for the tissue larva).',
    '**High-yield: a migrating subcutaneous nodule after eating raw frog/snake or using a frog poultice → sparganosis → surgical removal.** It is a larval-cestode tissue zoonosis alongside echinococcosis ([[echinococcosis-hydatid]]) and fits the tissue-migrating-larva theme of gnathostomiasis ([[gnathostomiasis]]); prevention is safe water and cooking frog/snake meat.',
  ],

  mechanism: {
    title: 'Spirometra plerocercoid (sparganum) in accidental host → migrating tissue larva; excise it',
    steps: [
      { id: 's1', label: 'Sparganum = plerocercoid larva of Spirometra; humans = accidental host', emphasis: 'key' },
      { id: 's2', label: 'Routes: infected copepods in water; raw frog/snake; frog/snake POULTICE', emphasis: 'key' },
      { id: 's3', label: 'Migrating painful/itchy subcutaneous nodule (± ocular/cerebral)', emphasis: 'key' },
      { id: 's4', label: 'No eggs in stool (larva never matures); eosinophilia', emphasis: 'danger' },
      { id: 's5', label: 'Dx/treat: SURGICAL removal + identification of the ribbon-like larva' },
    ],
  },

  examFindings: [
    { sign: 'Slowly migrating subcutaneous nodule after eating raw frog/snake', mechanism: 'Sparganosis (Spirometra plerocercoid)', significance: 'key' },
    { sign: 'Ocular/periorbital swelling after a frog-flesh poultice', mechanism: 'Ocular sparganosis (traditional poultice route)', significance: 'key' },
    { sign: 'A ribbon-like larva removed surgically', mechanism: 'Sparganum (diagnostic identification)', significance: 'key' },
    { sign: 'Peripheral eosinophilia', mechanism: 'Tissue-migrating larva', significance: 'supportive' },
    { sign: 'No eggs found in stool', mechanism: 'Larva never matures in the accidental human host', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The larval stage causing sparganosis', meaning: 'The sparganum (plerocercoid larva of Spirometra)' },
    { clue: 'The traditional cultural route of ocular sparganosis', meaning: 'Applying raw frog/snake flesh as a poultice' },
    { clue: 'Why stool examination is negative', meaning: 'The larva never matures into an egg-laying adult in humans' },
    { clue: 'The treatment of sparganosis', meaning: 'Surgical excision of the larva' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Sparganosis is a tissue larval-cestode zoonosis — a migrating subcutaneous larva from raw frog/snake or a frog poultice — diagnosed and treated by surgical removal (no stool eggs; praziquantel unreliable). It sits with echinococcosis ([[echinococcosis-hydatid]]) as the larval-cyst cestodes ([[cestodes-tapeworms-overview]]) and shares the migrating-larva theme with gnathostomiasis ([[gnathostomiasis]]).' },
  ],

  mnemonics: [
    { hook: 'Sparganosis = "sparganum larva migrates" (raw frog/snake or frog poultice) → excise', expansion: ['No stool eggs (never matures)', 'Ocular/cerebral = serious'] },
    { hook: 'Larval cestode zoonoses: "Spirometra (sparganosis) + Echinococcus (hydatid)"', expansion: ['Both = larval tissue disease', 'Surgery is key'] },
  ],

  traps: [
    {
      questionCategory: 'Diagnosing and treating sparganosis',
      wrongInstinct: 'Sparganosis is diagnosed by stool eggs and cured with praziquantel like an intestinal tapeworm',
      rightAnswer: 'The sparganum is a TISSUE LARVA that never matures, so there are NO eggs in stool — diagnosis and treatment are by SURGICAL REMOVAL of the migrating larva (praziquantel is unreliable against the tissue larva)',
      why: 'Treating it like an adult intestinal tapeworm (stool eggs, praziquantel) fails; the larva is in tissue, so surgical excision is both the diagnostic and therapeutic step.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient develops a slowly migrating, painful subcutaneous nodule after eating undercooked frog; surgical removal reveals a ribbon-like larva. The diagnosis is:',
      options: [
        { id: 'a', text: 'Sparganosis (Spirometra)' },
        { id: 'b', text: 'Cysticercosis' },
        { id: 'c', text: 'Ascariasis' },
        { id: 'd', text: 'Amoebiasis' },
      ],
      answerId: 'a',
      explanation: 'Sparganosis is caused by the plerocercoid larva (sparganum) of Spirometra, acquired from infected copepods in water, raw frog/snake, or a frog-flesh poultice; the migrating larva is removed and identified surgically.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Why is stool examination negative in sparganosis?',
      options: [
        { id: 'a', text: 'The larva never matures into an egg-laying adult in the human (accidental) host' },
        { id: 'b', text: 'The eggs are too small to see' },
        { id: 'c', text: 'The parasite lives only in the blood' },
        { id: 'd', text: 'The stool is not the right specimen for any tapeworm' },
      ],
      answerId: 'a',
      explanation: 'Humans are an accidental host for Spirometra; the sparganum larva migrates in the tissues but never develops into an adult tapeworm, so no eggs are produced or passed in stool. Diagnosis relies on removing and identifying the larva.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default sparganosisSpirometra;
