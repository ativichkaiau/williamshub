import type { Lecture } from '../../lib/types';

export const intestinalFlukesTapeworms: Lecture = {
  id: 'intestinal-flukes-tapeworms',
  title: 'Intestinal Flukes & Tapeworms',
  system: 'gi',
  source: 'L17 — GI Flukes & Tapeworms',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'L17 Flukes & Tapeworms' },
    { kind: 'disease', label: 'Taenia / Diphyllobothrium' },
    { kind: 'exam', label: 'Cysticercosis' },
  ],

  highYield: [
    '**Beyond liver flukes, the GI helminths include intestinal FLUKES (trematodes) and TAPEWORMS (cestodes).** The intestinal fluke **Fasciolopsis buski (the giant intestinal fluke) is acquired from aquatic plants (water chestnuts/caltrop)** and causes abdominal pain, diarrhoea and, in heavy infection, malabsorption and oedema.',
    '**Tapeworms are long, segmented worms acquired from undercooked meat/fish. Taenia saginata (beef) and Taenia solium (pork) attach in the small bowel — usually mild GI symptoms.** The danger of **T. solium is when humans ingest its EGGS (faecal–oral) → CYSTICERCOSIS**, with larval cysts in tissues; **NEUROCYSTICERCOSIS is a leading cause of adult-onset SEIZURES** in endemic areas.',
    '**Diphyllobothrium latum (the fish tapeworm, from raw freshwater fish) competes for VITAMIN B12 → megaloblastic (B12-deficiency) anaemia.** This is the classic "tapeworm that causes B12 deficiency," a favourite exam association. It is the largest human tapeworm.',
    '**Echinococcus granulosus (the dog tapeworm) causes HYDATID DISEASE: humans are an accidental intermediate host and form hydatid CYSTS (commonly in the liver and lungs).** The cyst must **NOT be aspirated carelessly** — spillage can cause anaphylaxis and daughter-cyst dissemination. Hymenolepis nana (dwarf tapeworm) is the commonest tapeworm worldwide and can autoinfect.',
    '**Signatures to lock in: Taenia solium eggs → neurocysticercosis (seizures); Diphyllobothrium → B12-deficiency anaemia; Echinococcus → hydatid liver cysts (don\'t rupture); Fasciolopsis → aquatic plants, malabsorption.** Treatment is generally **praziquantel** (albendazole for cysticercosis/hydatid; surgery for hydatid cysts) — and prevention is cooking meat/fish and hygiene.',
  ],

  mechanism: {
    title: 'Intestinal flukes (plants) + tapeworms (meat/fish); cysticercosis, B12 loss, hydatid',
    steps: [
      { id: 's1', label: 'Fasciolopsis buski: aquatic plants → intestinal fluke → malabsorption', emphasis: 'key' },
      { id: 's2', label: 'Taenia (beef/pork): gut tapeworm; T. solium EGGS → cysticercosis', emphasis: 'key' },
      { id: 's3', label: 'Neurocysticercosis (T. solium) → adult-onset seizures', emphasis: 'danger' },
      { id: 's4', label: 'Diphyllobothrium (raw fish) → B12 deficiency (megaloblastic anaemia)', emphasis: 'key' },
      { id: 's5', label: 'Echinococcus → hydatid liver cysts (don\'t rupture); praziquantel/albendazole' },
    ],
  },

  examFindings: [
    { sign: 'Adult-onset seizures with brain cysts in an endemic patient', mechanism: 'Neurocysticercosis (Taenia solium eggs)', significance: 'key' },
    { sign: 'Megaloblastic (B12-deficiency) anaemia + raw freshwater fish', mechanism: 'Diphyllobothrium latum (fish tapeworm)', significance: 'key' },
    { sign: 'Well-defined liver cyst with daughter cysts', mechanism: 'Echinococcal hydatid disease (avoid rupture)', significance: 'key' },
    { sign: 'Passage of tapeworm proglottid segments in stool', mechanism: 'Taenia saginata/solium intestinal infection', significance: 'supportive' },
    { sign: 'Malabsorption/oedema after eating aquatic plants', mechanism: 'Fasciolopsis buski (giant intestinal fluke)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The tapeworm whose eggs cause neurocysticercosis', meaning: 'Taenia solium (pork tapeworm)' },
    { clue: 'The tapeworm causing vitamin B12 deficiency', meaning: 'Diphyllobothrium latum (fish tapeworm)' },
    { clue: 'The tapeworm causing hydatid cysts', meaning: 'Echinococcus granulosus (do not rupture the cyst)' },
    { clue: 'The intestinal fluke from aquatic plants', meaning: 'Fasciolopsis buski' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Neurocysticercosis is a leading cause of seizures in endemic areas; Diphyllobothrium causes B12-deficiency anaemia ([[water-soluble-vitamins-trace-elements]]); hydatid cysts must not be ruptured. Treatment is praziquantel (albendazole/surgery for cysticercosis and hydatid). Prevention (cook meat/fish, hygiene) parallels the liver flukes of [[liver-flukes-cholangiocarcinoma]] and the roundworms of [[intestinal-roundworms-phasmid]].' },
  ],

  mnemonics: [
    { hook: 'Tapeworm signatures: "solium eggs → Seizures (neurocysticercosis); Diphyllobothrium → B12; Echinococcus → hydatid"', expansion: ['Taenia from undercooked meat', 'Don\'t rupture hydatid cysts'] },
    { hook: 'B12 tapeworm = "Diphyllobothrium (fish) steals B12" → megaloblastic anaemia', expansion: ['Largest human tapeworm', 'Raw freshwater fish'] },
  ],

  traps: [
    {
      questionCategory: 'How Taenia solium causes neurocysticercosis',
      wrongInstinct: 'Eating undercooked pork with Taenia solium directly causes brain cysts (neurocysticercosis)',
      rightAnswer: 'Eating undercooked pork with larvae gives an intestinal ADULT tapeworm; NEUROCYSTICERCOSIS arises when humans ingest the EGGS (faecal–oral) and become the intermediate host, so larval cysts form in tissues including the brain',
      why: 'The route determines the disease: meat with larvae → gut tapeworm, but faecal–oral eggs → tissue cysticercosis; conflating them misses that hygiene/faecal–oral spread (not just cooking meat) drives the dangerous CNS disease.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Infection with which tapeworm classically causes vitamin B12 deficiency and megaloblastic anaemia?',
      options: [
        { id: 'a', text: 'Taenia saginata' },
        { id: 'b', text: 'Diphyllobothrium latum (fish tapeworm)' },
        { id: 'c', text: 'Echinococcus granulosus' },
        { id: 'd', text: 'Hymenolepis nana' },
      ],
      answerId: 'b',
      explanation: 'Diphyllobothrium latum, acquired from raw freshwater fish, competes with the host for vitamin B12, and heavy infection can cause megaloblastic (B12-deficiency) anaemia — the classic tapeworm-B12 association.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Neurocysticercosis (a leading cause of adult-onset seizures in endemic areas) results from:',
      options: [
        { id: 'a', text: 'Eating undercooked pork containing larvae' },
        { id: 'b', text: 'Ingesting Taenia solium eggs (faecal–oral), making humans the intermediate host' },
        { id: 'c', text: 'A liver fluke infection' },
        { id: 'd', text: 'Hookworm larval migration' },
      ],
      answerId: 'b',
      explanation: 'Ingesting Taenia solium eggs (faecal–oral) leads to larval cysts in tissues (cysticercosis); CNS involvement (neurocysticercosis) is a major cause of seizures. Eating larvae in pork instead produces an intestinal adult tapeworm.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default intestinalFlukesTapeworms;
