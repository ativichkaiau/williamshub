import type { Lecture } from '../../lib/types';

export const hrp2ProstatePenilePathology: Lecture = {
  id: 'hrp2-prostate-penile-pathology',
  title: 'Prostate & Penile Pathology',
  system: 'repro',
  source: 'L10 — Pathology of the Male Reproductive System',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'L10 Male Pathology' },
    { kind: 'disease', label: 'BPH · prostate cancer' },
    { kind: 'mechanism', label: 'Zonal anatomy' },
    { kind: 'investigation', label: 'PSA · Gleason · DRE' },
  ],

  highYield: [
    '**BPH arises in the transitional (periurethral) zone** → **bladder outflow obstruction** (hesitancy, weak stream, nocturia, incomplete emptying); complications: retention, UTI, hydronephrosis. **BPH is not premalignant.** Treat **α-blockers** + **5α-reductase inhibitors**.',
    '**Prostate adenocarcinoma arises in the peripheral zone** → often **asymptomatic early**, a **hard nodule on DRE**; graded by **Gleason score**; marker **PSA**. Spreads to **bone as osteoblastic (sclerotic) metastases** (back pain, raised ALP).',
    '**Androgen dependence:** advanced prostate cancer is treated by **androgen-deprivation therapy** (GnRH agonist/antagonist ± anti-androgen). **Prostatitis** (acute bacterial — coliforms; chronic) causes pain and raised PSA.',
    '**Penile lesions:** **squamous cell carcinoma** linked to **HPV** and lack of circumcision (phimosis, poor hygiene); precursors include **Bowen disease/erythroplasia of Queyrat**. **Peyronie disease** = fibrous plaque causing curvature.',
  ],

  mechanism: {
    title: 'Zone of origin decides symptoms and detection',
    steps: [
      { id: 's1', label: 'Transitional zone hyperplasia → obstruction (BPH)', emphasis: 'key' },
      { id: 's2', label: 'Peripheral zone carcinoma → DRE nodule, PSA', emphasis: 'key' },
      { id: 's3', label: 'Osteoblastic bone metastases', emphasis: 'danger' },
      { id: 's4', label: 'Penile SCC linked to HPV / poor hygiene' },
    ],
  },

  examFindings: [
    { sign: 'Smoothly enlarged prostate + obstructive symptoms → BPH', mechanism: 'Transitional-zone hyperplasia', significance: 'key' },
    { sign: 'Hard irregular nodule on DRE + raised PSA → cancer', mechanism: 'Peripheral-zone carcinoma', significance: 'key' },
    { sign: 'Osteoblastic (sclerotic) bone metastases', mechanism: 'Prostate cancer tropism', significance: 'key' },
    { sign: 'Penile SCC in an uncircumcised man', mechanism: 'HPV / chronic irritation', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Older man, weak stream and nocturia, smoothly enlarged prostate', meaning: 'BPH → α-blocker ± 5α-reductase inhibitor' },
    { clue: 'Raised PSA with a hard nodule and sclerotic bone lesions', meaning: 'Metastatic prostate adenocarcinoma' },
    { clue: 'Man on finasteride with a PSA result', meaning: 'Double the value (5α-reductase inhibitors halve PSA)' },
    { clue: 'Fever, perineal pain, exquisitely tender prostate', meaning: 'Acute bacterial prostatitis' },
  ],

  treatment: [
    { logic: 'Prostate cancer by stage', detail: 'Localised: surgery/radiotherapy/active surveillance; advanced: androgen-deprivation therapy (GnRH analogue ± anti-androgen).' },
  ],

  mnemonics: [
    { hook: 'BPH = Transitional (obstruct); Cancer = Peripheral (DRE nodule, PSA, sclerotic bone)', expansion: ['Finasteride halves PSA'] },
  ],

  traps: [
    {
      questionCategory: 'BPH vs cancer risk',
      wrongInstinct: 'Benign prostatic hyperplasia progresses to prostate cancer',
      rightAnswer: 'BPH (transitional zone) is not premalignant; cancer arises separately in the peripheral zone',
      why: 'BPH and prostate carcinoma occur in different zones and BPH does not transform into cancer.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Prostate adenocarcinoma most commonly arises in which zone, and how does it typically metastasise to bone?',
      options: [
        { id: 'a', text: 'Transitional zone; osteolytic metastases' },
        { id: 'b', text: 'Peripheral zone; osteoblastic (sclerotic) metastases' },
        { id: 'c', text: 'Central zone; no bone metastases' },
        { id: 'd', text: 'Peripheral zone; osteolytic metastases' },
      ],
      answerId: 'b',
      explanation: 'Prostate cancer arises in the peripheral zone (palpable on DRE) and characteristically produces osteoblastic (sclerotic) bone metastases with a rising PSA.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which is the correct pairing for benign prostatic hyperplasia?',
      options: [
        { id: 'a', text: 'Peripheral zone; premalignant' },
        { id: 'b', text: 'Transitional zone; causes outflow obstruction; not premalignant' },
        { id: 'c', text: 'Central zone; raises AFP' },
        { id: 'd', text: 'Peripheral zone; treated with orchidectomy' },
      ],
      answerId: 'b',
      explanation: 'BPH is transitional-zone hyperplasia causing bladder outflow obstruction; it is benign and not a precursor of prostate cancer.',
      tests: 'exam',
    },
  ],
};

export default hrp2ProstatePenilePathology;
