import type { Lecture } from '../../lib/types';

export const hrp2SyphilisStages: Lecture = {
  id: 'hrp2-syphilis-stages',
  title: 'Syphilis: Stages & Serology',
  system: 'repro',
  source: 'L2 — Bacterial STIs & PID',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'L2 Bacterial STIs' },
    { kind: 'disease', label: 'Treponema pallidum' },
    { kind: 'mechanism', label: 'Spirochaete stages' },
    { kind: 'investigation', label: 'RPR/VDRL · TPHA' },
  ],

  highYield: [
    '**Primary:** a **painless, indurated chancre** at the inoculation site (heals spontaneously); **dark-field microscopy** shows spirochaetes.',
    '**Secondary (weeks later):** systemic — **maculopapular rash including palms and soles**, **condylomata lata**, mucous patches, lymphadenopathy; highly infectious.',
    '**Latent** (asymptomatic, serology-positive) → **Tertiary (years):** **gummas**, **cardiovascular syphilis (ascending aortic aneurysm)**, and **neurosyphilis** (tabes dorsalis, general paresis, **Argyll Robertson pupil**).',
    '**Serology:** **non-treponemal (VDRL/RPR)** for **screening & monitoring treatment response** (titre falls) — can be **falsely positive** (pregnancy, SLE, infections); **treponemal (TPHA/FTA-ABS)** confirms and stays positive for life. Treat **penicillin** (watch **Jarisch-Herxheimer**). **Congenital syphilis** → snuffles, rash, Hutchinson teeth, saber shins — prevent with maternal treatment.',
  ],

  mechanism: {
    title: 'Spirochaete progresses through stages if untreated',
    steps: [
      { id: 's1', label: 'Primary: painless chancre (dark-field)', emphasis: 'key' },
      { id: 's2', label: 'Secondary: rash (palms/soles), condylomata lata', emphasis: 'key' },
      { id: 's3', label: 'Latent → Tertiary: gummas, aortitis, neurosyphilis', emphasis: 'danger' },
      { id: 's4', label: 'Screen RPR/VDRL, confirm TPHA; treat penicillin', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Painless chancre → primary syphilis', mechanism: 'Local treponemal infection', significance: 'key' },
    { sign: 'Rash on palms and soles → secondary syphilis', mechanism: 'Dissemination', significance: 'key' },
    { sign: 'Argyll Robertson pupil → neurosyphilis', mechanism: 'Accommodates but does not react to light', significance: 'supportive' },
    { sign: 'RPR titre falls with successful treatment', mechanism: 'Non-treponemal marker of activity', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Painless genital ulcer with dark-field spirochaetes', meaning: 'Primary syphilis → penicillin' },
    { clue: 'Positive RPR confirmed by TPHA', meaning: 'True syphilis (screen + confirm)' },
    { clue: 'Positive RPR but negative treponemal test in pregnancy', meaning: 'Biological false-positive VDRL/RPR' },
    { clue: 'Neonate with snuffles, rash, later Hutchinson teeth', meaning: 'Congenital syphilis' },
  ],

  treatment: [
    { logic: 'Penicillin at every stage', detail: 'Benzathine penicillin (IV for neurosyphilis); treat partners; warn about Jarisch-Herxheimer reaction; treat maternal infection to prevent congenital syphilis.' },
  ],

  mnemonics: [
    { hook: 'Primary Painless chancre; Secondary rash on Palms/Soles; Tertiary gummas/aorta/CNS', expansion: ['Screen RPR/VDRL, confirm treponemal'] },
  ],

  traps: [
    {
      questionCategory: 'Serology interpretation',
      wrongInstinct: 'A positive RPR/VDRL alone confirms active syphilis',
      rightAnswer: 'Non-treponemal tests can be falsely positive; confirm with a treponemal test (TPHA/FTA-ABS)',
      why: 'VDRL/RPR have biological false positives (pregnancy, SLE, viral infections); treponemal tests confirm true infection.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which test is used to monitor the response of syphilis to treatment?',
      options: [
        { id: 'a', text: 'TPHA (treponemal)' },
        { id: 'b', text: 'FTA-ABS (treponemal)' },
        { id: 'c', text: 'RPR/VDRL (non-treponemal) titre' },
        { id: 'd', text: 'Dark-field microscopy' },
      ],
      answerId: 'c',
      explanation: 'Non-treponemal titres (RPR/VDRL) fall with successful treatment and are used for monitoring; treponemal tests stay positive lifelong.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A maculopapular rash involving the palms and soles with condylomata lata indicates which stage of syphilis?',
      options: [
        { id: 'a', text: 'Primary' },
        { id: 'b', text: 'Secondary' },
        { id: 'c', text: 'Latent' },
        { id: 'd', text: 'Tertiary' },
      ],
      answerId: 'b',
      explanation: 'A rash including the palms and soles with condylomata lata is characteristic of secondary (disseminated) syphilis.',
      tests: 'disease',
    },
  ],
};

export default hrp2SyphilisStages;
