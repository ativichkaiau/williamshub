import type { Lecture } from '../../lib/types';

export const cestodesTapewormsOverview: Lecture = {
  id: 'cestodes-tapeworms-overview',
  title: 'Cestodes (Tapeworms) Overview',
  system: 'parasitology',
  source: 'L8 — Trematodes & Cestodes',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Parasitology' },
    { kind: 'lecture', label: 'L8 Trematodes & Cestodes' },
    { kind: 'disease', label: 'Tapeworms' },
    { kind: 'exam', label: 'Taenia / cysticercosis' },
  ],

  highYield: [
    '**Cestodes (tapeworms) are flat, segmented flatworms with a scolex (attachment head) and no gut. The crucial distinction is whether humans harbour the ADULT (intestinal) tapeworm or the LARVAL cyst (tissue disease) — larval disease is far more dangerous.**',
    '**Taenia saginata (beef) and Taenia solium (pork): eating undercooked meat with larval cysts gives an ADULT intestinal tapeworm (mild symptoms). But eating T. solium EGGS (faecal–oral) makes humans the intermediate host → CYSTICERCOSIS, with larval cysts in tissues; NEUROCYSTICERCOSIS is a leading cause of adult-onset SEIZURES** (see [[intestinal-flukes-tapeworms]]).',
    '**Diphyllobothrium latum (the fish tapeworm, from raw freshwater fish — the LARGEST human tapeworm) competes for VITAMIN B12 → megaloblastic (B12-deficiency) anaemia.** Hymenolepis nana (the dwarf tapeworm) is the commonest tapeworm worldwide and can AUTOINFECT (no intermediate host needed).',
    '**LARVAL-CYST zoonoses are the serious cestode diseases: Echinococcus granulosus → HYDATID cysts (dog definitive host; liver/lung cysts that must not be ruptured — anaphylaxis/spread); Spirometra → SPARGANOSIS (migrating larva in tissues).** These are detailed in [[echinococcosis-hydatid]] and [[sparganosis-spirometra]].',
    '**High-yield contrasts: adult tapeworm (undercooked meat/fish → intestinal, mild) vs larval cyst (eggs/zoonotic → tissue disease: neurocysticercosis, hydatid, sparganosis); Diphyllobothrium → B12 deficiency.** Treatment is PRAZIQUANTEL for adult intestinal tapeworms; albendazole (± surgery) for cysticercosis/hydatid. This is the parasitology-course view of the tapeworms.',
  ],

  mechanism: {
    title: 'Adult intestinal tapeworm (meat) vs larval cyst (eggs/zoonosis → tissue disease)',
    steps: [
      { id: 's1', label: 'Cestodes: flat, segmented, scolex, no gut', emphasis: 'key' },
      { id: 's2', label: 'Taenia (beef/pork) meat → adult intestinal tapeworm (mild)', emphasis: 'key' },
      { id: 's3', label: 'T. solium EGGS (faecal–oral) → cysticercosis; CNS → seizures', emphasis: 'danger' },
      { id: 's4', label: 'Diphyllobothrium (raw fish) → B12 deficiency; Hymenolepis autoinfects', emphasis: 'key' },
      { id: 's5', label: 'Larval-cyst zoonoses: Echinococcus (hydatid), Spirometra (sparganosis)' },
    ],
  },

  examFindings: [
    { sign: 'Adult-onset seizures with brain cysts in an endemic patient', mechanism: 'Neurocysticercosis (Taenia solium eggs)', significance: 'key' },
    { sign: 'Megaloblastic (B12-deficiency) anaemia + raw freshwater fish', mechanism: 'Diphyllobothrium latum (fish tapeworm)', significance: 'key' },
    { sign: 'Passage of tapeworm proglottid segments in stool', mechanism: 'Adult Taenia infection', significance: 'key' },
    { sign: 'Well-defined liver/lung cyst with daughter cysts', mechanism: 'Echinococcal hydatid disease (do not rupture)', significance: 'supportive' },
    { sign: 'Migrating larva in subcutaneous tissue', mechanism: 'Sparganosis (Spirometra)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The tapeworm whose eggs cause neurocysticercosis', meaning: 'Taenia solium (pork tapeworm)' },
    { clue: 'The tapeworm causing vitamin B12 deficiency', meaning: 'Diphyllobothrium latum (largest human tapeworm)' },
    { clue: 'The tapeworm causing hydatid cysts', meaning: 'Echinococcus granulosus (do not rupture the cyst)' },
    { clue: 'The treatment for an adult intestinal tapeworm', meaning: 'Praziquantel' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The adult (intestinal, mild) vs larval-cyst (tissue, dangerous) distinction is the key cestode concept — neurocysticercosis causes seizures, Diphyllobothrium causes B12 deficiency, and the larval-cyst zoonoses are detailed in [[echinococcosis-hydatid]] and [[sparganosis-spirometra]]. Praziquantel treats adult tapeworms; albendazole/surgery for cysts. Complements the clinical tapeworm module [[intestinal-flukes-tapeworms]] and the fluke overview [[trematodes-flukes-overview]].' },
  ],

  mnemonics: [
    { hook: 'Adult vs larva: "meat → adult (mild); eggs/zoonosis → cyst (dangerous)"', expansion: ['T. solium eggs → neurocysticercosis (seizures)', 'Diphyllobothrium → B12'] },
    { hook: 'Larval-cyst zoonoses: "Echinococcus (hydatid), Spirometra (sparganosis)"', expansion: ['Don\'t rupture hydatid cysts', 'Hymenolepis autoinfects'] },
  ],

  traps: [
    {
      questionCategory: 'Taenia solium: adult tapeworm vs cysticercosis',
      wrongInstinct: 'Eating undercooked pork with Taenia solium directly causes brain cysts (neurocysticercosis)',
      rightAnswer: 'Eating undercooked pork with larvae gives an intestinal ADULT tapeworm; NEUROCYSTICERCOSIS occurs when humans ingest the EGGS (faecal–oral) and become the intermediate host, forming larval cysts in tissues including the brain',
      why: 'The route determines the disease: meat with larvae → mild gut tapeworm, but faecal–oral eggs → dangerous tissue cysticercosis; conflating them misses that hygiene (not just cooking meat) drives the CNS disease.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which tapeworm infection is acquired by eating raw freshwater fish and can cause vitamin B12 deficiency?',
      options: [
        { id: 'a', text: 'Taenia saginata' },
        { id: 'b', text: 'Diphyllobothrium latum' },
        { id: 'c', text: 'Echinococcus granulosus' },
        { id: 'd', text: 'Hymenolepis nana' },
      ],
      answerId: 'b',
      explanation: 'Diphyllobothrium latum (the fish tapeworm, the largest human tapeworm) is acquired from raw freshwater fish and competes for vitamin B12, potentially causing megaloblastic anaemia.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Neurocysticercosis, a leading cause of adult-onset seizures in endemic areas, results from:',
      options: [
        { id: 'a', text: 'Eating undercooked pork containing larvae' },
        { id: 'b', text: 'Ingesting Taenia solium eggs (faecal–oral), with humans as the intermediate host' },
        { id: 'c', text: 'A fluke infection' },
        { id: 'd', text: 'Skin penetration by cercariae' },
      ],
      answerId: 'b',
      explanation: 'Ingesting Taenia solium eggs (faecal–oral) leads to larval cysts in tissues (cysticercosis); CNS involvement (neurocysticercosis) is a major cause of seizures. Eating larvae in pork instead produces an adult intestinal tapeworm.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default cestodesTapewormsOverview;
