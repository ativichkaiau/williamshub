import type { Lecture } from '../../lib/types';

export const hhlFilariasisParasitology: Lecture = {
  id: 'hhl-filariasis-parasitology',
  title: 'Lymphatic Filariasis: Parasites & Life Cycle',
  system: 'heme',
  source: 'L21 — Lymphatic Filariasis',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L21 Filariasis' },
    { kind: 'disease', label: 'Wuchereria · Brugia' },
    { kind: 'mechanism', label: 'Adults in lymphatics' },
    { kind: 'investigation', label: 'Nocturnal blood film' },
  ],

  highYield: [
    '**Lymphatic filariasis** is caused by the tissue nematodes **Wuchereria bancrofti** and **Brugia malayi** (also B. timori); **adult worms live in lymphatics** while **microfilariae circulate in blood**.',
    '**Microfilariae show nocturnal periodicity** — they peak in peripheral blood around **10 pm–2 am**, matching the night-biting mosquito vectors — so **blood for diagnosis must be drawn at night**.',
    '**Mosquito vectors:** Culex (urban W. bancrofti), **_Mansonia_ for _B. malayi_ (endemic in southern Thailand)**, plus Anopheles and Aedes. See [[hhl-filariasis-clinical]].',
    '**Microfilariae are identified on a stained film** by their **sheath** and the **pattern of tail nuclei** — B. malayi has two separate terminal nuclei; W. bancrofti has a tip free of nuclei.',
  ],

  mechanism: {
    title: 'Mosquito bite → lymphatic adults → microfilaraemia',
    steps: [
      { id: 's1', label: 'Infective larvae enter skin at a mosquito bite', emphasis: 'normal' },
      { id: 's2', label: 'Larvae migrate to lymphatics/nodes and mature to adults', emphasis: 'key' },
      { id: 's3', label: 'Adults release sheathed microfilariae into blood (nocturnal)', emphasis: 'key' },
      { id: 's4', label: 'Mosquito ingests microfilariae → develop to infective larvae', emphasis: 'normal' },
    ],
  },

  examFindings: [
    { sign: 'Sheathed microfilariae on a night blood film', mechanism: 'Nocturnal periodicity', significance: 'key' },
    { sign: 'B. malayi: two separate terminal tail nuclei', mechanism: 'Species-specific morphology', significance: 'key' },
    { sign: 'W. bancrofti: tail tip free of nuclei', mechanism: 'Species-specific morphology', significance: 'supportive' },
    { sign: 'Adult worms in dilated lymphatics on ultrasound', mechanism: '“Filarial dance sign”', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Fever/lymphangitis from an endemic area', meaning: 'Draw a NIGHT-time thick blood film for microfilariae' },
    { clue: 'Two terminal nuclei in the tail of a sheathed microfilaria', meaning: 'Brugia malayi' },
    { clue: 'Southern-Thailand rural patient with a Mansonia exposure', meaning: 'B. malayi is the endemic species there' },
    { clue: 'Amicrofilaraemic but clinically suspicious', meaning: 'Filarial antigen test / ultrasound for adult worms' },
  ],

  treatment: [
    { logic: 'Target parasite, not just symptoms', detail: 'Diethylcarbamazine (DEC) kills microfilariae and adults; timing of blood sampling to the parasite’s nocturnal periodicity is essential for diagnosis.' },
  ],

  mnemonics: [
    { hook: 'Night blood for night bugs', expansion: ['Microfilariae peak ~10 pm–2 am', 'Sample at night', 'Brugia = 2 tail nuclei; Bancrofti = bare tip'] },
  ],

  traps: [
    {
      questionCategory: 'Timing of diagnosis',
      wrongInstinct: 'A daytime blood film excludes lymphatic filariasis',
      rightAnswer: 'Blood must be collected AT NIGHT because microfilariae show nocturnal periodicity',
      why: 'A negative daytime film is unreliable — the microfilariae are sequestered away from the peripheral blood in daytime.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'When should blood be collected to detect microfilariae of Wuchereria bancrofti?',
      options: [
        { id: 'a', text: 'Early morning fasting' },
        { id: 'b', text: 'At night (around 10 pm–2 am)' },
        { id: 'c', text: 'Immediately after exercise' },
        { id: 'd', text: 'Timing does not matter' },
      ],
      answerId: 'b',
      explanation: 'W. bancrofti microfilariae show nocturnal periodicity, peaking in peripheral blood at night to coincide with night-biting mosquito vectors.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'Adult worms of lymphatic filariasis characteristically reside in the:',
      options: [
        { id: 'a', text: 'Lymphatic vessels and nodes' },
        { id: 'b', text: 'Portal venous system' },
        { id: 'c', text: 'Biliary tract' },
        { id: 'd', text: 'Alveolar capillaries' },
      ],
      answerId: 'a',
      explanation: 'Adult Wuchereria/Brugia live in the lymphatics, causing lymphangitis and, over time, lymphatic obstruction; microfilariae circulate in blood.',
      tests: 'mechanism',
    },
  ],
};

export default hhlFilariasisParasitology;
