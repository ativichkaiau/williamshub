import type { Lecture } from '../../lib/types';

export const hhlSchistosomiasisClinical: Lecture = {
  id: 'hhl-schistosomiasis-clinical',
  title: 'Schistosomiasis: Pathology, Diagnosis & Treatment',
  system: 'heme',
  source: 'L22 — Schistosomiasis',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L22 Schistosomiasis' },
    { kind: 'disease', label: 'Katayama · pipestem fibrosis' },
    { kind: 'mechanism', label: 'Egg granuloma → fibrosis' },
    { kind: 'treatment', label: 'Praziquantel' },
  ],

  highYield: [
    '**Pathology is driven by EGGS, not adult worms** — eggs trapped in tissue provoke a **granulomatous, then fibrotic** response.',
    '**Acute schistosomiasis (Katayama fever):** a serum-sickness-like immune-complex reaction weeks after exposure — **fever, urticaria, eosinophilia, hepatosplenomegaly**.',
    '**Chronic intestinal/hepatic (mansoni, japonicum, mekongi):** peri-portal **“pipe-stem” fibrosis → portal hypertension, splenomegaly and varices** — with **presinusoidal** block, so **liver function is often preserved**.',
    '**Chronic urinary (S. haematobium):** **terminal haematuria, bladder fibrosis/calcification**, and a long-term risk of **bladder squamous cell carcinoma**. Diagnose by **eggs in stool/urine**; **treat with praziquantel**. See [[hhl-schistosomiasis-lifecycle]].',
  ],

  mechanism: {
    title: 'Trapped eggs → granuloma → fibrosis',
    steps: [
      { id: 's1', label: 'Eggs lodge in gut/liver or bladder venules', emphasis: 'key' },
      { id: 's2', label: 'T-cell granuloma forms around each egg', emphasis: 'key' },
      { id: 's3', label: 'Chronic fibrosis: pipe-stem (liver) or bladder wall', emphasis: 'normal' },
      { id: 's4', label: 'Portal hypertension / bladder squamous carcinoma', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Peri-portal “pipe-stem” fibrosis with portal hypertension', mechanism: 'Egg granulomas in portal tracts (presinusoidal)', significance: 'key' },
    { sign: 'Terminal haematuria', mechanism: 'S. haematobium eggs in bladder wall', significance: 'key' },
    { sign: 'Katayama fever: fever + urticaria + eosinophilia', mechanism: 'Immune-complex reaction to early egg laying', significance: 'supportive' },
    { sign: 'Preserved synthetic liver function despite portal hypertension', mechanism: 'Presinusoidal (not hepatocellular) block', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Eggs in stool or urine (with characteristic spine)', meaning: 'Definitive diagnosis of schistosomiasis' },
    { clue: 'Fever, urticaria and eosinophilia weeks after fresh-water exposure', meaning: 'Acute Katayama syndrome' },
    { clue: 'Portal hypertension with normal hepatocellular function', meaning: 'Presinusoidal fibrosis of hepatosplenic schistosomiasis' },
    { clue: 'Chronic haematuria + bladder calcification in an endemic patient', meaning: 'S. haematobium — screen for squamous cell carcinoma' },
  ],

  treatment: [
    { logic: 'Praziquantel', detail: 'Kills adult worms of all species and is the mainstay; it does not act on immature stages, so timing/repeat dosing may matter.' },
    { logic: 'Manage complications', detail: 'Portal hypertension (varices) and bladder cancer surveillance are addressed separately from antiparasitic cure.' },
  ],

  mnemonics: [
    { hook: 'Eggs, not worms, make the disease', expansion: ['Acute = Katayama (immune complex)', 'Chronic liver = pipe-stem fibrosis → portal HTN', 'Chronic bladder = haematuria → squamous cancer'] },
  ],

  traps: [
    {
      questionCategory: 'Cause of portal hypertension',
      wrongInstinct: 'Hepatosplenic schistosomiasis causes cirrhosis with liver failure',
      rightAnswer: 'It causes PRESINUSOIDAL peri-portal (pipe-stem) fibrosis — portal hypertension with typically PRESERVED liver synthetic function',
      why: 'The block is in the portal tracts, not the hepatocytes, so patients bleed from varices but are not in hepatocellular failure.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Chronic S. haematobium infection is most associated with which malignancy?',
      options: [
        { id: 'a', text: 'Squamous cell carcinoma of the bladder' },
        { id: 'b', text: 'Hepatocellular carcinoma' },
        { id: 'c', text: 'Cholangiocarcinoma' },
        { id: 'd', text: 'Colorectal adenocarcinoma' },
      ],
      answerId: 'a',
      explanation: 'Chronic bladder inflammation from S. haematobium eggs predisposes to squamous cell carcinoma of the bladder.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'The drug of choice for all species of schistosomiasis is:',
      options: [
        { id: 'a', text: 'Praziquantel' },
        { id: 'b', text: 'Diethylcarbamazine' },
        { id: 'c', text: 'Albendazole' },
        { id: 'd', text: 'Ivermectin' },
      ],
      answerId: 'a',
      explanation: 'Praziquantel is effective against adult worms of all schistosome species and is the treatment of choice.',
      tests: 'treatment',
    },
  ],
};

export default hhlSchistosomiasisClinical;
