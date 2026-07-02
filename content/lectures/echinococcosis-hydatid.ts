import type { Lecture } from '../../lib/types';

export const echinococcosisHydatid: Lecture = {
  id: 'echinococcosis-hydatid',
  title: 'Echinococcosis (Hydatid Disease)',
  system: 'parasitology',
  source: 'L11 — Sparganosis & Echinococcosis',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Parasitology' },
    { kind: 'lecture', label: 'L11 Sparganosis & Echinococcosis' },
    { kind: 'disease', label: 'Hydatid disease' },
    { kind: 'exam', label: 'Do not rupture the cyst' },
  ],

  highYield: [
    '**Echinococcus granulosus is a small tapeworm whose ADULT lives in DOGS (the definitive host), with sheep/livestock as intermediate hosts. Humans become ACCIDENTAL intermediate hosts by ingesting eggs from dog faeces → larval HYDATID CYSTS form in the organs** — most commonly the LIVER, then the lungs.',
    '**The hydatid cyst grows slowly over years: a fluid-filled cyst with a laminated wall containing DAUGHTER cysts and protoscolices ("hydatid sand").** It is often asymptomatic until large, when it causes mass effect (hepatomegaly, RUQ discomfort, or lung symptoms). Imaging shows a well-defined cyst, sometimes with daughter cysts and calcification.',
    '**The critical rule: do NOT carelessly aspirate or rupture a hydatid cyst — spillage of antigenic fluid can cause ANAPHYLAXIS and seed new (daughter) cysts throughout the abdomen.** Serology supports the diagnosis; management is careful surgery or the PAIR technique (Puncture–Aspirate–Inject scolicide–Reaspirate) UNDER albendazole cover, and/or albendazole alone.',
    '**Echinococcus multilocularis (fox definitive host) causes ALVEOLAR echinococcosis — an infiltrative, tumour-like, much more aggressive hepatic lesion** (harder to treat, may need extensive resection ± lifelong albendazole). E. granulosus (cystic/"unilocular") is the common exam form.',
    '**High-yield: a slowly-growing liver cyst (± daughter cysts) in someone with dog/livestock contact → hydatid disease → serology → careful surgery/PAIR + albendazole, NEVER simple aspiration.** It is the larval-cyst cestode zoonosis alongside sparganosis ([[sparganosis-spirometra]]) within the tapeworm group ([[cestodes-tapeworms-overview]]); prevention is deworming dogs and hand hygiene.',
  ],

  mechanism: {
    title: 'Dog tapeworm eggs → human hydatid cysts (liver/lung); don\'t rupture (anaphylaxis/spread)',
    steps: [
      { id: 's1', label: 'E. granulosus: DOG definitive host; humans ingest eggs (accidental intermediate)', emphasis: 'key' },
      { id: 's2', label: 'Larval HYDATID CYSTS form (liver > lung); daughter cysts + hydatid sand', emphasis: 'key' },
      { id: 's3', label: 'Slow growth → mass effect; imaging shows well-defined cyst', emphasis: 'key' },
      { id: 's4', label: 'DO NOT rupture: spillage → ANAPHYLAXIS + daughter-cyst dissemination', emphasis: 'danger' },
      { id: 's5', label: 'Treat: surgery/PAIR + albendazole; E. multilocularis = aggressive alveolar' },
    ],
  },

  examFindings: [
    { sign: 'Slowly growing liver cyst with daughter cysts in a person with dog contact', mechanism: 'Cystic echinococcosis (E. granulosus)', significance: 'key' },
    { sign: 'Anaphylaxis after cyst rupture/aspiration', mechanism: 'Release of antigenic hydatid fluid', significance: 'key' },
    { sign: 'Peritoneal seeding of new cysts after spillage', mechanism: 'Dissemination of protoscolices (daughter cysts)', significance: 'key' },
    { sign: 'Infiltrative, tumour-like hepatic lesion (fox exposure)', mechanism: 'Alveolar echinococcosis (E. multilocularis)', significance: 'supportive' },
    { sign: 'Positive echinococcal serology', mechanism: 'Supports the diagnosis (avoid diagnostic aspiration)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The definitive host of Echinococcus granulosus', meaning: 'The dog' },
    { clue: 'The commonest organ for a hydatid cyst', meaning: 'The liver (then lung)' },
    { clue: 'The danger of rupturing a hydatid cyst', meaning: 'Anaphylaxis and dissemination of daughter cysts' },
    { clue: 'The more aggressive, infiltrative form (fox host)', meaning: 'Alveolar echinococcosis (E. multilocularis)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Hydatid disease is a slowly-growing cystic zoonosis where the cardinal rule is NOT to rupture the cyst (anaphylaxis/spread) — management is careful surgery or PAIR under albendazole cover. It is the larval-cyst cestode alongside sparganosis ([[sparganosis-spirometra]]) within the tapeworms ([[cestodes-tapeworms-overview]]); a dog definitive host makes it a zoonosis prevented by deworming dogs.' },
  ],

  mnemonics: [
    { hook: 'Hydatid = "Dog tapeworm eggs → liver cyst (daughter cysts)"; DON\'T rupture', expansion: ['Anaphylaxis + seeding on spill', 'Surgery/PAIR + albendazole'] },
    { hook: 'E. granulosus = cystic (unilocular); E. multilocularis = alveolar (aggressive, fox)', expansion: ['Liver > lung', 'Serology, not aspiration'] },
  ],

  traps: [
    {
      questionCategory: 'Managing a suspected hydatid cyst',
      wrongInstinct: 'A liver cyst should be diagnostically aspirated to obtain fluid for analysis',
      rightAnswer: 'Do NOT carelessly aspirate a suspected HYDATID cyst — spillage of antigenic fluid can cause ANAPHYLAXIS and seed daughter cysts; diagnosis uses imaging + SEROLOGY, and treatment is careful surgery or PAIR under albendazole cover',
      why: 'Routine aspiration of a hydatid cyst is dangerous (anaphylaxis, dissemination); recognising the cyst as possibly hydatid before aspirating and using serology/imaging avoids a catastrophic complication.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A shepherd with dog contact has a slowly enlarging, well-defined liver cyst containing daughter cysts. The most important management principle is to:',
      options: [
        { id: 'a', text: 'Aspirate the cyst immediately for diagnosis' },
        { id: 'b', text: 'Avoid rupture/spillage (risk of anaphylaxis and dissemination) and treat with surgery/PAIR plus albendazole' },
        { id: 'c', text: 'Ignore it if asymptomatic forever' },
        { id: 'd', text: 'Give praziquantel alone' },
      ],
      answerId: 'b',
      explanation: 'This is cystic echinococcosis (hydatid disease). Careless aspiration/rupture can cause anaphylaxis and seed daughter cysts, so management is careful surgery or the PAIR technique under albendazole cover, with diagnosis supported by imaging and serology.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Humans acquire cystic echinococcosis (hydatid disease) by:',
      options: [
        { id: 'a', text: 'Ingesting Echinococcus eggs shed in dog faeces' },
        { id: 'b', text: 'Eating undercooked pork' },
        { id: 'c', text: 'Mosquito bite' },
        { id: 'd', text: 'Skin penetration in fresh water' },
      ],
      answerId: 'a',
      explanation: 'The dog is the definitive host; humans become accidental intermediate hosts by ingesting Echinococcus eggs from dog faeces, and larval hydatid cysts then develop, most often in the liver.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default echinococcosisHydatid;
