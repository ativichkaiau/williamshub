import type { Lecture } from '../../lib/types';

export const toxoplasmosis: Lecture = {
  id: 'toxoplasmosis',
  title: 'Toxoplasmosis',
  system: 'parasitology',
  source: 'L9 — Apicomplexa',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Parasitology' },
    { kind: 'lecture', label: 'L9 Apicomplexa' },
    { kind: 'disease', label: 'Toxoplasmosis' },
    { kind: 'exam', label: 'Congenital / HIV' },
  ],

  highYield: [
    '**Toxoplasma gondii is an apicomplexan whose DEFINITIVE HOST is the CAT (the sexual cycle and oocyst production occur in cats).** Humans (intermediate hosts) are infected TWO ways: ingesting OOCYSTS from cat faeces (soil, litter, contaminated water) or ingesting TISSUE CYSTS in UNDERCOOKED MEAT. Infection is very common and usually asymptomatic in the healthy.',
    '**In the immunocompetent, toxoplasmosis is usually asymptomatic or a self-limited mononucleosis-like illness (lymphadenopathy).** The tachyzoite is the acute, invasive form; it then forms latent BRADYZOITE tissue CYSTS (brain, muscle, eye) held in check by cell-mediated immunity — which is why disease flares when that immunity fails.',
    '**CONGENITAL toxoplasmosis follows PRIMARY infection in pregnancy (transplacental spread): the classic triad is CHORIORETINITIS + HYDROCEPHALUS + intracranial CALCIFICATIONS** (± seizures). This is why pregnant women should AVOID cat litter and undercooked meat — a key prevention message.',
    '**REACTIVATION in the immunocompromised (advanced HIV, low CD4) causes TOXOPLASMA ENCEPHALITIS — multiple RING-ENHANCING brain lesions**, the classic differential of a ring-enhancing lesion in AIDS (vs CNS lymphoma). Treatment is pyrimethamine + sulfadiazine (+ leucovorin); co-trimoxazole is used for prophylaxis in HIV.',
    '**High-yield triad of contexts: healthy (asymptomatic/lymphadenopathy), pregnant (congenital: chorioretinitis + hydrocephalus + calcifications), and immunocompromised (encephalitis, ring-enhancing lesions).** Diagnosis is chiefly SEROLOGY (± PCR/imaging). It is the apicomplexan tissue parasite alongside the intestinal coccidia ([[intestinal-coccidia-cryptosporidium]]) and blood apicomplexa ([[blood-apicomplexa-malaria-babesia]]).',
  ],

  mechanism: {
    title: 'Cat = definitive host; humans via oocysts/undercooked meat; latent cysts flare if immunity fails',
    steps: [
      { id: 's1', label: 'CAT = definitive host; humans via oocysts (cat faeces) or tissue cysts (meat)', emphasis: 'key' },
      { id: 's2', label: 'Immunocompetent: asymptomatic / mononucleosis-like; latent tissue cysts', emphasis: 'key' },
      { id: 's3', label: 'Congenital (primary infection in pregnancy): chorioretinitis + hydrocephalus + calcification', emphasis: 'danger' },
      { id: 's4', label: 'Immunocompromised: reactivation → encephalitis (ring-enhancing lesions)', emphasis: 'danger' },
      { id: 's5', label: 'Dx serology (± PCR/imaging); pyrimethamine + sulfadiazine' },
    ],
  },

  examFindings: [
    { sign: 'Chorioretinitis + hydrocephalus + intracranial calcifications in a neonate', mechanism: 'Congenital toxoplasmosis', significance: 'key' },
    { sign: 'Multiple ring-enhancing brain lesions in advanced HIV', mechanism: 'Reactivation Toxoplasma encephalitis', significance: 'key' },
    { sign: 'Self-limited lymphadenopathy in a healthy adult', mechanism: 'Immunocompetent toxoplasmosis', significance: 'key' },
    { sign: 'Infection after eating undercooked meat', mechanism: 'Ingestion of bradyzoite tissue cysts', significance: 'supportive' },
    { sign: 'Advice to avoid cat litter in pregnancy', mechanism: 'Preventing primary infection (oocysts)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The definitive host of Toxoplasma', meaning: 'The cat' },
    { clue: 'The two human routes of infection', meaning: 'Oocysts (cat faeces) or tissue cysts (undercooked meat)' },
    { clue: 'The triad of congenital toxoplasmosis', meaning: 'Chorioretinitis + hydrocephalus + intracranial calcifications' },
    { clue: 'The AIDS presentation of reactivation', meaning: 'Toxoplasma encephalitis (ring-enhancing brain lesions)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Toxoplasmosis matters most at the immune extremes: congenital disease (avoid cat litter/undercooked meat in pregnancy) and reactivation encephalitis in HIV (a classic ring-enhancing lesion vs CNS lymphoma). Latent tissue cysts held by cell-mediated immunity explain reactivation. It is the tissue apicomplexan alongside the coccidia ([[intestinal-coccidia-cryptosporidium]]) and blood parasites ([[blood-apicomplexa-malaria-babesia]]).' },
  ],

  mnemonics: [
    { hook: 'Toxoplasma "cat + undercooked meat"; congenital triad = "chorioretinitis + hydrocephalus + calcifications"', expansion: ['Cat = definitive host', 'Avoid litter/raw meat in pregnancy'] },
    { hook: 'HIV reactivation = "ring-enhancing brain lesions" (vs CNS lymphoma)', expansion: ['Latent cysts flare when immunity fails', 'Pyrimethamine + sulfadiazine'] },
  ],

  traps: [
    {
      questionCategory: 'Routes of Toxoplasma infection',
      wrongInstinct: 'Toxoplasmosis is acquired only from contact with cats',
      rightAnswer: 'Humans acquire Toxoplasma from cat-faeces OOCYSTS (soil, litter) AND, importantly, from TISSUE CYSTS in UNDERCOOKED MEAT — so avoiding infection in pregnancy means both cat-litter precautions AND cooking meat thoroughly',
      why: 'Focusing only on cats misses the major meat-borne route; both must be addressed for prevention (especially in pregnancy), and the meat route explains cases in people without cats.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A neonate has chorioretinitis, hydrocephalus and intracranial calcifications. The most likely congenital infection is:',
      options: [
        { id: 'a', text: 'Congenital toxoplasmosis' },
        { id: 'b', text: 'Cryptosporidiosis' },
        { id: 'c', text: 'Giardiasis' },
        { id: 'd', text: 'Amoebiasis' },
      ],
      answerId: 'a',
      explanation: 'The classic triad of chorioretinitis, hydrocephalus and intracranial calcifications indicates congenital toxoplasmosis, following primary maternal infection in pregnancy with transplacental spread of Toxoplasma gondii.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'In a patient with advanced HIV, multiple ring-enhancing brain lesions are most classically caused by reactivation of:',
      options: [
        { id: 'a', text: 'Cryptosporidium' },
        { id: 'b', text: 'Toxoplasma gondii' },
        { id: 'c', text: 'Plasmodium falciparum' },
        { id: 'd', text: 'Giardia' },
      ],
      answerId: 'b',
      explanation: 'Reactivation of latent Toxoplasma tissue cysts in advanced HIV causes toxoplasma encephalitis with multiple ring-enhancing lesions — the classic differential of a ring-enhancing brain lesion in AIDS (versus CNS lymphoma).',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default toxoplasmosis;
