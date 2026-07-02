import type { Lecture } from '../../lib/types';

export const trematodesFlukesOverview: Lecture = {
  id: 'trematodes-flukes-overview',
  title: 'Trematodes (Flukes) Overview',
  system: 'parasitology',
  source: 'L8 — Trematodes & Cestodes',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Parasitology' },
    { kind: 'lecture', label: 'L8 Trematodes & Cestodes' },
    { kind: 'disease', label: 'Flukes' },
    { kind: 'exam', label: 'Liver/lung/blood flukes' },
  ],

  highYield: [
    '**Trematodes (flukes) are flat, leaf-shaped flatworms, HERMAPHRODITE except the blood flukes, and ALL require a SNAIL as the first intermediate host.** They are grouped clinically by where the adult lives: liver, intestinal, lung and blood flukes — a useful organising scheme.',
    '**LIVER flukes: Opisthorchis viverrini (the Southeast Asian liver fluke) and Clonorchis sinensis, from raw FRESHWATER FISH, live in the bile ducts and are a leading, preventable cause of CHOLANGIOCARCINOMA (Opisthorchis is a WHO group-1 carcinogen — high yield in NE Thailand). Fasciola hepatica (sheep liver fluke) comes from aquatic plants (watercress).** See [[liver-flukes-cholangiocarcinoma]].',
    '**INTESTINAL fluke: Fasciolopsis buski (the giant intestinal fluke) from aquatic plants (water chestnuts) → abdominal symptoms/malabsorption. LUNG fluke: Paragonimus westermani, from raw/undercooked freshwater CRAB → chronic cough and haemoptysis that MIMICS TUBERCULOSIS** (see [[parasitic-lung-infections]]).',
    '**BLOOD flukes — Schistosoma (the exception with SEPARATE SEXES) — are acquired by CERCARIAE penetrating skin in fresh water (not by eating).** Eggs lodge in tissues: S. mansoni/japonicum → intestinal/hepatic (periportal fibrosis, portal hypertension); S. haematobium → urinary (haematuria, bladder fibrosis, and increased BLADDER SQUAMOUS-cell carcinoma).',
    '**Diagnosis is by finding OPERCULATED eggs in stool (or urine for S. haematobium); TREATMENT for essentially all flukes is PRAZIQUANTEL (Fasciola is the exception — triclabendazole).** The unifying reminders: all flukes need a snail; most are food-borne (COOK fish/crab/plants) while schistosomes penetrate skin in water. This is the parasitology-course view of flukes also seen clinically in HGB-2/HRS-2.',
  ],

  mechanism: {
    title: 'Flat, snail-requiring flukes by site: liver/intestinal/lung (food-borne) vs blood (skin cercariae)',
    steps: [
      { id: 's1', label: 'Flukes: flat, hermaphrodite (except Schistosoma); ALL need a SNAIL', emphasis: 'key' },
      { id: 's2', label: 'Liver: Opisthorchis/Clonorchis (raw fish) → cholangiocarcinoma; Fasciola (watercress)', emphasis: 'key' },
      { id: 's3', label: 'Intestinal: Fasciolopsis (plants); Lung: Paragonimus (raw crab) → TB mimic', emphasis: 'key' },
      { id: 's4', label: 'Blood: Schistosoma (skin-penetrating cercariae) → GI/hepatic or urinary', emphasis: 'key' },
      { id: 's5', label: 'Dx operculated eggs; treat PRAZIQUANTEL (Fasciola = triclabendazole)' },
    ],
  },

  examFindings: [
    { sign: 'Cholangiocarcinoma after eating raw freshwater fish (NE Thailand)', mechanism: 'Opisthorchis viverrini (liver fluke)', significance: 'key' },
    { sign: 'Chronic cough + haemoptysis mimicking TB after raw crab', mechanism: 'Paragonimus westermani (lung fluke)', significance: 'key' },
    { sign: 'Terminal haematuria + bladder squamous carcinoma risk', mechanism: 'Schistosoma haematobium (urinary)', significance: 'key' },
    { sign: 'Periportal ("pipe-stem") fibrosis and portal hypertension', mechanism: 'Schistosoma mansoni/japonicum (hepatic)', significance: 'supportive' },
    { sign: 'Operculated eggs in stool/urine', mechanism: 'Trematode (fluke) infection', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The obligatory intermediate host of all trematodes', meaning: 'A snail' },
    { clue: 'The fluke that is a WHO group-1 carcinogen (cholangiocarcinoma)', meaning: 'Opisthorchis viverrini' },
    { clue: 'The blood fluke with separate sexes acquired by skin penetration', meaning: 'Schistosoma' },
    { clue: 'The treatment for most flukes', meaning: 'Praziquantel (Fasciola: triclabendazole)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Flukes are a huge regional burden — Opisthorchis → cholangiocarcinoma ([[liver-flukes-cholangiocarcinoma]]), Paragonimus mimics TB ([[parasitic-lung-infections]]), Schistosoma causes portal hypertension and bladder cancer. Praziquantel treats most; prevention is cooking fish/crab/plants (or avoiding freshwater skin contact for schistosomes). This is the parasitology overview complementing the clinical HGB-2/HRS-2 modules; tapeworms follow in [[cestodes-tapeworms-overview]].' },
  ],

  mnemonics: [
    { hook: 'Flukes by site: "Liver (Opisthorchis/Fasciola), Intestinal (Fasciolopsis), Lung (Paragonimus), Blood (Schistosoma)"', expansion: ['All need a SNAIL', 'Most food-borne; Schistosoma = skin'] },
    { hook: 'Praziquantel for (nearly) all flukes; "Fasciola = triclabendazole"', expansion: ['Operculated eggs', 'Schistosoma = separate sexes (exception)'] },
  ],

  traps: [
    {
      questionCategory: 'How schistosomes are acquired vs other flukes',
      wrongInstinct: 'All flukes are acquired by eating undercooked food',
      rightAnswer: 'Most flukes are FOOD-BORNE (raw fish, crab or plants), but the BLOOD flukes (Schistosoma) are acquired when CERCARIAE PENETRATE THE SKIN during freshwater contact — not by eating',
      why: 'The route determines prevention: cooking food prevents the food-borne flukes, but avoiding freshwater skin exposure prevents schistosomiasis; conflating them misdirects prevention and the exposure history.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which feature is shared by ALL trematodes (flukes)?',
      options: [
        { id: 'a', text: 'They require a snail as an intermediate host' },
        { id: 'b', text: 'They are acquired only by skin penetration' },
        { id: 'c', text: 'They all have separate sexes' },
        { id: 'd', text: 'They live only in the intestine' },
      ],
      answerId: 'a',
      explanation: 'All trematodes require a snail as the first intermediate host. They are otherwise diverse (liver, intestinal, lung and blood flukes); most are hermaphroditic except the schistosomes, which have separate sexes and are acquired by skin-penetrating cercariae.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The treatment effective against most flukes (e.g. Opisthorchis, Paragonimus, Schistosoma) is:',
      options: [
        { id: 'a', text: 'Albendazole' },
        { id: 'b', text: 'Praziquantel' },
        { id: 'c', text: 'Metronidazole' },
        { id: 'd', text: 'Ivermectin' },
      ],
      answerId: 'b',
      explanation: 'Praziquantel is the treatment for most flukes, including the liver fluke Opisthorchis, the lung fluke Paragonimus and the blood fluke Schistosoma. Fasciola is the notable exception, treated with triclabendazole.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default trematodesFlukesOverview;
