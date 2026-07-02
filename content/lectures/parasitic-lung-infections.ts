import type { Lecture } from '../../lib/types';

export const parasiticLungInfections: Lecture = {
  id: 'parasitic-lung-infections',
  title: 'Parasitic Lung Infections',
  system: 'respiratory',
  source: 'L9 — Parasitic Lung Infection',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L9 Parasitic Lung' },
    { kind: 'disease', label: 'Paragonimiasis' },
    { kind: 'exam', label: 'Löffler syndrome' },
  ],

  highYield: [
    '**Parasites reach the lung in three ways: they live there (lung flukes), they migrate through it as larvae (roundworms), or they seed it from elsewhere (cysts/eggs).** A common thread is **peripheral eosinophilia** and, often, a **TB-like picture** — so parasites are important mimics in endemic areas such as Southeast Asia.',
    '**Paragonimus westermani (the lung fluke) is the classic pulmonary parasite here — acquired by eating raw/undercooked freshwater CRAB or crayfish.** Adult flukes live in the lung and cause **chronic cough with rusty/blood-streaked sputum, haemoptysis and cystic lesions that closely mimic pulmonary tuberculosis**; diagnosis is by **operculated eggs** in sputum/stool. Treat with **praziquantel**.',
    '**Larval transpulmonary migration causes Löffler syndrome — a transient eosinophilic pneumonia** with migratory infiltrates and marked eosinophilia, as larvae of **Ascaris lumbricoides, hookworm (Ancylostoma/Necator) and Strongyloides stercoralis** pass through the alveoli. **Strongyloides can autoinfect** and, in the immunosuppressed, cause a **hyperinfection syndrome** (disseminated larvae, Gram-negative sepsis).',
    '**Cyst- and egg-mediated disease:** **Echinococcus granulosus** forms **hydatid cysts** (dog/sheep hosts) that can rupture (anaphylaxis) — never aspirate carelessly; **Schistosoma** eggs embolise to the lung → granulomas and **pulmonary hypertension**; **tropical pulmonary eosinophilia** is a hyperresponse to **lymphatic filariae (Wuchereria/Brugia)** with very high IgE/eosinophils and nocturnal cough.',
    '**The high-yield reflex: a "TB-like" or eosinophilic lung picture in an endemic patient with the right food/exposure history should trigger a parasite work-up** (sputum/stool ova and parasites, serology). Praziquantel treats flukes; albendazole/ivermectin treat many nematodes — very different from anti-TB therapy, so the distinction matters.',
  ],

  mechanism: {
    title: 'Resident flukes, migrating larvae, or seeded cysts/eggs → eosinophilia',
    steps: [
      { id: 's1', label: 'Paragonimus (undercooked crab) → lung cysts, haemoptysis, TB mimic', emphasis: 'key' },
      { id: 's2', label: 'Löffler: Ascaris/hookworm/Strongyloides larvae → transient eosinophilic pneumonia', emphasis: 'key' },
      { id: 's3', label: 'Strongyloides autoinfection → hyperinfection in immunosuppressed', emphasis: 'danger' },
      { id: 's4', label: 'Echinococcus hydatid cyst (don\'t rupture); Schistosoma eggs → pulmonary HTN' },
      { id: 's5', label: 'Endemic + eosinophilia + TB-like → parasite work-up (O&P, serology)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Chronic haemoptysis + lung cysts after eating raw crab', mechanism: 'Paragonimiasis (lung fluke) — mimics TB', significance: 'key' },
    { sign: 'Migratory infiltrates with marked eosinophilia', mechanism: 'Löffler syndrome (larval lung migration)', significance: 'key' },
    { sign: 'Disseminated larvae + Gram-negative sepsis in an immunosuppressed patient', mechanism: 'Strongyloides hyperinfection', significance: 'key' },
    { sign: 'Well-defined lung cyst with daughter cysts', mechanism: 'Echinococcal hydatid disease (avoid rupture)', significance: 'supportive' },
    { sign: 'Very high IgE/eosinophils + nocturnal cough/wheeze', mechanism: 'Tropical pulmonary eosinophilia (filaria)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The lung fluke acquired from undercooked crab', meaning: 'Paragonimus westermani (treated with praziquantel)' },
    { clue: 'The transient eosinophilic pneumonia from larval migration', meaning: 'Löffler syndrome (Ascaris, hookworm, Strongyloides)' },
    { clue: 'The parasite that autoinfects and can hyperinfect', meaning: 'Strongyloides stercoralis' },
    { clue: 'The parasite causing pulmonary hypertension via lung granulomas', meaning: 'Schistosoma (egg embolisation)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Anti-parasitics (praziquantel for flukes; albendazole/ivermectin for nematodes) are completely different from anti-TB drugs ([[anti-tuberculosis-drugs]]) — so a parasitic mimic must be recognised. Eosinophilia overlaps ABPA ([[fungal-lung-infections]]) and asthma. Screen for/treat Strongyloides before immunosuppression to prevent hyperinfection. Contrast bacterial pneumonia patterns in [[pneumonia-pathology-patterns]].' },
  ],

  mnemonics: [
    { hook: 'Paragonimus = "crab → lung fluke → haemoptysis, TB mimic" (praziquantel)', expansion: ['Operculated eggs in sputum', 'Endemic in Southeast Asia'] },
    { hook: 'Löffler = "larvae passing through → eosinophilic pneumonia" (Ascaris/hookworm/Strongyloides)', expansion: ['Migratory infiltrates', 'Strongyloides → hyperinfection if immunosuppressed'] },
  ],

  traps: [
    {
      questionCategory: 'A TB-like lung picture in an endemic area',
      wrongInstinct: 'Cough, haemoptysis and lung cysts in an endemic patient must be tuberculosis',
      rightAnswer: 'Paragonimiasis (lung fluke, from undercooked crab/crayfish) causes chronic cough, haemoptysis and cystic lesions that closely MIMIC tuberculosis — a food/exposure history and eosinophilia with operculated eggs point to the parasite, which needs praziquantel, not anti-TB drugs',
      why: 'Empirically treating for TB misses a curable fluke; in endemic regions the dietary history and eosinophilia are the clues that redirect the work-up.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient in Southeast Asia who regularly eats undercooked freshwater crab presents with chronic cough, haemoptysis, eosinophilia and cystic lung lesions resembling TB. Sputum shows operculated eggs. The treatment is:',
      options: [
        { id: 'a', text: 'Isoniazid, rifampin, pyrazinamide, ethambutol' },
        { id: 'b', text: 'Praziquantel' },
        { id: 'c', text: 'Co-trimoxazole' },
        { id: 'd', text: 'Amphotericin B' },
      ],
      answerId: 'b',
      explanation: 'This is paragonimiasis (Paragonimus westermani lung fluke), acquired from undercooked crab and mimicking tuberculosis; operculated eggs confirm it and praziquantel is the treatment.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'Transient migratory pulmonary infiltrates with marked peripheral eosinophilia as roundworm larvae pass through the lungs is known as:',
      options: [
        { id: 'a', text: 'Löffler syndrome' },
        { id: 'b', text: 'Hydatid disease' },
        { id: 'c', text: 'Tropical pulmonary eosinophilia' },
        { id: 'd', text: 'Aspergilloma' },
      ],
      answerId: 'a',
      explanation: 'Löffler syndrome is a transient eosinophilic pneumonia caused by larval transpulmonary migration of Ascaris, hookworm or Strongyloides, producing migratory infiltrates and eosinophilia.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default parasiticLungInfections;
