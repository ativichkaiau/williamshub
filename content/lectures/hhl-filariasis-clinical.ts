import type { Lecture } from '../../lib/types';

export const hhlFilariasisClinical: Lecture = {
  id: 'hhl-filariasis-clinical',
  title: 'Filariasis: Clinical Disease, Diagnosis & Treatment',
  system: 'heme',
  source: 'L21 — Lymphatic Filariasis',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L21 Filariasis' },
    { kind: 'disease', label: 'Elephantiasis · hydrocele' },
    { kind: 'mechanism', label: 'Lymphatic obstruction' },
    { kind: 'treatment', label: 'Diethylcarbamazine' },
  ],

  highYield: [
    '**Acute filariasis** = recurrent **fever with lymphangitis/lymphadenitis** (retrograde, painful cords) as the immune response reacts to worms and dying microfilariae.',
    '**Chronic disease** results from **lymphatic obstruction and fibrosis** → **lymphoedema progressing to elephantiasis**, **hydrocele** (commonest chronic sign of W. bancrofti), and **chyluria**.',
    '**Tropical pulmonary eosinophilia** is a hypersensitivity variant: **nocturnal cough/wheeze, very high eosinophils and IgE**, with microfilariae trapped in the lungs (absent from blood).',
    '**Diagnosis** = **nocturnal thick blood film** for microfilariae, **filarial antigen** tests, or ultrasound; **treat with diethylcarbamazine (DEC) ± albendazole/ivermectin**, plus mass drug administration for control. See [[hhl-filariasis-parasitology]].',
  ],

  mechanism: {
    title: 'Adults in lymphatics → obstruction → elephantiasis',
    steps: [
      { id: 's1', label: 'Adult worms + host reaction inflame lymphatics', emphasis: 'key' },
      { id: 's2', label: 'Repeated lymphangitis → lymphatic damage & fibrosis', emphasis: 'key' },
      { id: 's3', label: 'Chronic obstruction → lymphoedema / hydrocele / chyluria', emphasis: 'normal' },
      { id: 's4', label: 'Fibrosis + secondary bacterial/fungal infection → elephantiasis', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Non-pitting lymphoedema → elephantiasis of limb/genitalia', mechanism: 'Chronic lymphatic obstruction', significance: 'key' },
    { sign: 'Hydrocele', mechanism: 'Lymphatic obstruction (W. bancrofti)', significance: 'key' },
    { sign: 'Retrograde, painful lymphangitis with fever', mechanism: 'Acute inflammatory reaction to worms', significance: 'supportive' },
    { sign: 'Marked eosinophilia + high IgE (tropical pulmonary eosinophilia)', mechanism: 'Hypersensitivity to trapped microfilariae', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Progressive limb/scrotal swelling from an endemic area', meaning: 'Chronic lymphatic filariasis' },
    { clue: 'Nocturnal cough, wheeze, eosinophilia, no microfilariae in blood', meaning: 'Tropical pulmonary eosinophilia' },
    { clue: 'Milky urine (chyluria)', meaning: 'Lymphatic–urinary fistula from filariasis' },
    { clue: 'Confirming active infection', meaning: 'Night blood film / filarial antigen test' },
  ],

  treatment: [
    { logic: 'Kill the parasite', detail: 'Diethylcarbamazine (DEC) is the mainstay, often with albendazole (and ivermectin in some programmes).' },
    { logic: 'Manage established elephantiasis', detail: 'Antiparasitics do not reverse fibrosis — hygiene, limb care and treating secondary infection prevent progression.' },
  ],

  mnemonics: [
    { hook: 'Bancrofti → Balls (hydrocele) & Big legs (elephantiasis)', expansion: ['Acute = lymphangitis + fever', 'Chronic = obstruction → lymphoedema, hydrocele, chyluria'] },
  ],

  traps: [
    {
      questionCategory: 'Reversibility of chronic disease',
      wrongInstinct: 'DEC will reverse established elephantiasis',
      rightAnswer: 'Antifilarial drugs kill worms but do NOT reverse the fibrotic lymphoedema of elephantiasis',
      why: 'Chronic changes are structural (fibrosis); management then centres on limb hygiene and preventing secondary infection.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The drug of choice for lymphatic filariasis is:',
      options: [
        { id: 'a', text: 'Praziquantel' },
        { id: 'b', text: 'Diethylcarbamazine (DEC)' },
        { id: 'c', text: 'Metronidazole' },
        { id: 'd', text: 'Chloroquine' },
      ],
      answerId: 'b',
      explanation: 'Diethylcarbamazine (often with albendazole) is the mainstay antifilarial; praziquantel is used for schistosomiasis and cestodes.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'A young man from an endemic area has nocturnal wheeze, cough and a very high eosinophil count, but no microfilariae in blood. The likely diagnosis is:',
      options: [
        { id: 'a', text: 'Tropical pulmonary eosinophilia' },
        { id: 'b', text: 'Asthma unrelated to infection' },
        { id: 'c', text: 'Acute schistosomiasis' },
        { id: 'd', text: 'Pulmonary tuberculosis' },
      ],
      answerId: 'a',
      explanation: 'Tropical pulmonary eosinophilia is a filarial hypersensitivity reaction with microfilariae sequestered in the lungs, hence blood films are typically negative despite very high eosinophilia and IgE.',
      tests: 'disease',
    },
  ],
};

export default hhlFilariasisClinical;
