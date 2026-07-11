import type { Lecture } from '../../lib/types';

export const hrp2CervicalCancerScreening: Lecture = {
  id: 'hrp2-cervical-cancer-screening',
  title: 'Cervical Cancer & Screening',
  system: 'repro',
  source: 'L5 — Pathology of the Cervix, Vagina & Vulva',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'L5 Lower Genital Tract' },
    { kind: 'disease', label: 'Cervical carcinoma' },
    { kind: 'mechanism', label: 'HPV screening' },
    { kind: 'treatment', label: 'Vaccine · LEEP' },
  ],

  highYield: [
    '**Invasive cervical cancer** (mostly **squamous**, HPV 16/18) presents with **post-coital / intermenstrual / postmenopausal bleeding** and a friable cervix; advanced disease spreads locally and can obstruct **ureters (renal failure)**.',
    '**Screening prevents it by detecting pre-invasive CIN.** Cytology (**Pap**) ± **high-risk HPV testing**; abnormal results → **colposcopy** with acetic acid (aceto-white) and biopsy.',
    '**Treat pre-invasive disease** by excision/ablation (**LEEP/cone biopsy**) at the CIN stage; invasive disease needs surgery/chemoradiation by stage.',
    '**Primary prevention = HPV vaccination** (covers high-risk 16/18 ± 6/11), ideally **before sexual debut** — dramatically reduces CIN and cancer. Risk factors: **HPV, early sex, many partners, smoking, immunosuppression, non-attendance for screening**.',
  ],

  mechanism: {
    title: 'Prevent (vaccine) → screen (Pap/HPV) → treat CIN before cancer',
    steps: [
      { id: 's1', label: 'HPV vaccination prevents high-risk infection', emphasis: 'key' },
      { id: 's2', label: 'Screen: cytology ± HPV testing' },
      { id: 's3', label: 'Abnormal → colposcopy + biopsy', emphasis: 'key' },
      { id: 's4', label: 'Excise CIN (LEEP/cone) before invasion', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Post-coital bleeding + friable cervix', mechanism: 'Invasive cervical carcinoma', significance: 'key' },
    { sign: 'Bilateral ureteric obstruction → renal failure', mechanism: 'Local pelvic spread of advanced disease', significance: 'supportive' },
    { sign: 'Screening detects pre-invasive CIN', mechanism: 'Curable stage', significance: 'key' },
    { sign: 'Vaccination before sexual debut is most effective', mechanism: 'Prevents primary infection', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'High-grade squamous intraepithelial lesion on Pap', meaning: 'Colposcopy + biopsy; likely CIN2/3 → excision' },
    { clue: 'Persistent post-coital bleeding with a cervical mass', meaning: 'Suspect invasive cervical cancer' },
    { clue: 'Positive high-risk HPV test', meaning: 'Increased risk — triage to cytology/colposcopy' },
    { clue: 'Advanced cervical cancer with hydronephrosis', meaning: 'Ureteric obstruction from local spread' },
  ],

  treatment: [
    { logic: 'Excise pre-invasive disease', detail: 'LEEP or cone biopsy for high-grade CIN; stage-directed surgery or chemoradiation for invasive cancer.' },
  ],

  mnemonics: [
    { hook: 'Vaccinate → Screen (Pap/HPV) → treat CIN before cancer', expansion: ['Post-coital bleeding = red flag'] },
  ],

  traps: [
    {
      questionCategory: 'Value of screening',
      wrongInstinct: 'Cervical screening mainly finds early invasive cancers',
      rightAnswer: 'Screening’s main benefit is detecting pre-invasive CIN so it can be treated before cancer develops',
      why: 'Catching and treating dysplasia (CIN) prevents progression, which is why screening lowers incidence and mortality.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The greatest impact of cervical cytology (Pap) screening on mortality comes from:',
      options: [
        { id: 'a', text: 'Detecting and treating pre-invasive CIN' },
        { id: 'b', text: 'Diagnosing metastatic disease earlier' },
        { id: 'c', text: 'Identifying HPV vaccine failures' },
        { id: 'd', text: 'Replacing colposcopy' },
      ],
      answerId: 'a',
      explanation: 'Screening detects pre-invasive cervical intraepithelial neoplasia, which can be treated before it becomes invasive cancer.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'The single most effective primary prevention for cervical cancer is:',
      options: [
        { id: 'a', text: 'Annual antibiotics' },
        { id: 'b', text: 'HPV vaccination before sexual debut' },
        { id: 'c', text: 'Combined oral contraceptives' },
        { id: 'd', text: 'Routine hysterectomy' },
      ],
      answerId: 'b',
      explanation: 'Vaccinating against high-risk HPV (ideally before first sexual activity) prevents the infection that causes almost all cervical cancers.',
      tests: 'treatment',
    },
  ],
};

export default hrp2CervicalCancerScreening;
