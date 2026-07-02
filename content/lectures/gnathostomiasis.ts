import type { Lecture } from '../../lib/types';

export const gnathostomiasis: Lecture = {
  id: 'gnathostomiasis',
  title: 'Gnathostomiasis',
  system: 'parasitology',
  source: 'L7 — Gnathostomiasis & Angiostrongyliasis',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Parasitology' },
    { kind: 'lecture', label: 'L7 Gnathostoma & Angiostrongylus' },
    { kind: 'disease', label: 'Gnathostomiasis' },
    { kind: 'exam', label: 'Migratory swelling' },
  ],

  highYield: [
    '**Gnathostoma spinigerum is a tissue nematode acquired by eating RAW/undercooked FRESHWATER FISH, eels, frogs, snakes or chicken — highly endemic in Thailand and Southeast Asia** (classic exposure: raw fish dishes such as "somfak"/pla ra). Humans are an accidental host, so the larva cannot mature and instead MIGRATES through the tissues.',
    '**The hallmark is intermittent, MIGRATORY SUBCUTANEOUS SWELLINGS (nodular/creeping) — often on the trunk or face — that come and go over days to weeks, accompanied by marked EOSINOPHILIA.** The wandering larva causes local pain, itch and inflammation as it moves.',
    '**The dangerous form is CNS gnathostomiasis: the larva can migrate into the central nervous system, causing EOSINOPHILIC MENINGITIS or, characteristically, a painful RADICULOMYELITIS/eosinophilic meningoencephalitis that may be haemorrhagic** — a serious, sometimes fatal complication. Ocular involvement also occurs.',
    '**Diagnosis is largely CLINICAL (migratory swellings + eosinophilia + the right dietary history in an endemic area) supported by SEROLOGY, since the larva is in tissue (no eggs in stool).** It cannot be diagnosed by stool microscopy. Treatment is **albendazole or ivermectin** (± surgical removal if a larva is accessible).',
    '**The high-yield vignette: migratory subcutaneous swellings + eosinophilia after raw freshwater fish in Thailand → gnathostomiasis.** It is a key regional larva-migrans nematode ([[toxocariasis-larva-migrans]]) and a cause of the eosinophilic meningitis differential alongside Angiostrongylus ([[angiostrongyliasis-eosinophilic-meningitis]]); prevention is cooking freshwater foods.',
  ],

  mechanism: {
    title: 'Raw freshwater food → wandering larva → migratory swellings + eosinophilia (± CNS)',
    steps: [
      { id: 's1', label: 'Gnathostoma from raw freshwater fish/eel/frog (endemic Thailand/SE Asia)', emphasis: 'key' },
      { id: 's2', label: 'Dead-end host → larva MIGRATES through tissue', emphasis: 'key' },
      { id: 's3', label: 'Migratory subcutaneous swellings (come and go) + marked eosinophilia', emphasis: 'key' },
      { id: 's4', label: 'CNS form: eosinophilic (± haemorrhagic) meningitis/radiculomyelitis', emphasis: 'danger' },
      { id: 's5', label: 'Dx clinical + serology (not stool); treat albendazole/ivermectin' },
    ],
  },

  examFindings: [
    { sign: 'Intermittent migratory subcutaneous swellings + eosinophilia', mechanism: 'Gnathostomiasis (wandering larva)', significance: 'key' },
    { sign: 'Raw freshwater fish/eel/frog consumption in Thailand/SE Asia', mechanism: 'Typical Gnathostoma exposure', significance: 'key' },
    { sign: 'Painful eosinophilic meningitis/radiculomyelitis (may be haemorrhagic)', mechanism: 'CNS gnathostomiasis', significance: 'key' },
    { sign: 'Positive serology with negative stool', mechanism: 'Larva in tissue, not gut (no eggs passed)', significance: 'supportive' },
    { sign: 'Ocular or visceral migratory involvement', mechanism: 'Larval migration to other sites', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The food source of Gnathostoma', meaning: 'Raw/undercooked freshwater fish, eel, frog, snake or chicken' },
    { clue: 'The cutaneous hallmark of gnathostomiasis', meaning: 'Intermittent migratory subcutaneous swellings with eosinophilia' },
    { clue: 'The serious CNS complication', meaning: 'Eosinophilic (± haemorrhagic) meningitis/radiculomyelitis' },
    { clue: 'The treatment', meaning: 'Albendazole or ivermectin (± larval removal)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Gnathostomiasis is a highly regional (Thai) larva-migrans nematode — migratory swellings + eosinophilia after raw freshwater food — and a cause of eosinophilic meningitis alongside Angiostrongylus ([[angiostrongyliasis-eosinophilic-meningitis]]). It shares the wrong-host wandering-larva theme with Toxocara ([[toxocariasis-larva-migrans]]); diagnosis is clinical/serological (not stool) and prevention is cooking freshwater foods.' },
  ],

  mnemonics: [
    { hook: 'Gnathostoma = "migratory swellings + eosinophilia after raw freshwater fish" (Thailand)', expansion: ['Dead-end host → wandering larva', 'CNS = eosinophilic/haemorrhagic meningitis'] },
    { hook: 'Freshwater raw food in SE Asia = "Gnathostoma (skin/CNS) + Opisthorchis (liver)"', expansion: ['Serology (no stool eggs)', 'Albendazole/ivermectin'] },
  ],

  traps: [
    {
      questionCategory: 'Diagnosing gnathostomiasis',
      wrongInstinct: 'Gnathostomiasis is diagnosed by finding eggs on stool microscopy',
      rightAnswer: 'The larva is trapped in TISSUE and never matures in humans, so stool microscopy is negative — diagnosis is CLINICAL (migratory swellings + eosinophilia + raw-freshwater-food history in an endemic area) supported by SEROLOGY',
      why: 'Because humans are a dead-end host, no eggs are produced; expecting stool eggs misses the diagnosis, which depends on the migratory swellings, eosinophilia, exposure history and serology.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient in Thailand who eats raw freshwater fish develops recurrent, migrating subcutaneous swellings with marked eosinophilia. The most likely organism is:',
      options: [
        { id: 'a', text: 'Gnathostoma spinigerum' },
        { id: 'b', text: 'Ascaris lumbricoides' },
        { id: 'c', text: 'Enterobius vermicularis' },
        { id: 'd', text: 'Giardia lamblia' },
      ],
      answerId: 'a',
      explanation: 'Gnathostomiasis, endemic in Thailand and acquired from raw freshwater fish/eel/frog, causes intermittent migratory subcutaneous swellings with eosinophilia as the dead-end larva wanders; it can also invade the CNS.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A serious complication of gnathostomiasis is:',
      options: [
        { id: 'a', text: 'Eosinophilic (sometimes haemorrhagic) meningitis or radiculomyelitis' },
        { id: 'b', text: 'Iron-deficiency anaemia' },
        { id: 'c', text: 'Biliary obstruction' },
        { id: 'd', text: 'Rectal prolapse' },
      ],
      answerId: 'a',
      explanation: 'The migrating Gnathostoma larva can enter the central nervous system, causing eosinophilic meningitis or a painful radiculomyelitis that may be haemorrhagic — a serious, potentially fatal complication.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default gnathostomiasis;
