import type { Lecture } from '../../lib/types';

export const hrp2CervixPathology: Lecture = {
  id: 'hrp2-cervix-pathology',
  title: 'Pathology of the Cervix, Vagina & Vulva',
  system: 'repro',
  source: 'L5 — Pathology of the Cervix, Vagina & Vulva',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'L5 Lower Genital Tract' },
    { kind: 'disease', label: 'CIN · cervical cancer' },
    { kind: 'mechanism', label: 'HPV at the T-zone' },
    { kind: 'investigation', label: 'Pap · HPV · colposcopy' },
  ],

  highYield: [
    '**The transformation zone (squamocolumnar junction)** — where endocervical columnar meets ectocervical squamous epithelium via **squamous metaplasia** — is where **high-risk HPV** infects and where dysplasia/cancer arise.',
    '**CIN (cervical intraepithelial neoplasia)** grades dysplasia: **CIN1** (low-grade, often regresses) → **CIN2/3** (high-grade) → **invasive squamous cell carcinoma**. **Koilocytes** signal HPV cytopathic effect.',
    '**Cervical cancer** is mostly **squamous cell carcinoma** (HPV 16/18); adenocarcinoma is rising. Screening (**Pap cytology ± HPV testing**) catches pre-invasive disease — the reason incidence has fallen. Risk factors: **early sex, multiple partners, smoking, immunosuppression, no screening**.',
    '**Vulva:** **VIN** and vulvar squamous carcinoma — a **HPV-related** type in younger women and a **non-HPV (lichen sclerosus-associated)** type in older women. **Extramammary Paget disease** = intraepithelial adenocarcinoma of the vulva.',
    '**Vagina:** primary cancer is rare; **clear cell adenocarcinoma** is linked to in-utero **DES** exposure. Most vaginal malignancy is **secondary** (extension from cervix).',
  ],

  mechanism: {
    title: 'HPV at the T-zone → dysplasia → invasion',
    steps: [
      { id: 's1', label: 'Metaplastic cells at the transformation zone', emphasis: 'key' },
      { id: 's2', label: 'High-risk HPV integrates → E6/E7 → p53/Rb loss', emphasis: 'key' },
      { id: 's3', label: 'CIN1 → CIN2/3 (dysplasia progresses)' },
      { id: 's4', label: 'Breach basement membrane → invasive SCC', emphasis: 'danger' },
      { id: 's5', label: 'Screening interrupts this at the CIN stage' },
    ],
  },

  examFindings: [
    { sign: 'Koilocytes on cytology', mechanism: 'HPV cytopathic change', significance: 'key' },
    { sign: 'Dysplasia at the transformation zone', mechanism: 'Site of active squamous metaplasia + HPV', significance: 'key' },
    { sign: 'Clear cell adenocarcinoma of vagina → DES exposure', mechanism: 'In-utero diethylstilbestrol', significance: 'supportive' },
    { sign: 'Vulvar carcinoma: HPV type (young) vs lichen sclerosus type (older)', mechanism: 'Two distinct pathways', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Abnormal Pap: high-grade squamous intraepithelial lesion', meaning: 'CIN2/3 → colposcopy and biopsy/excision' },
    { clue: 'Positive high-risk HPV with cytological atypia', meaning: 'Increased risk — closer follow-up/colposcopy' },
    { clue: 'Post-coital bleeding + friable cervical mass', meaning: 'Suspect invasive cervical carcinoma' },
    { clue: 'Vaginal clear cell adenocarcinoma in a young woman', meaning: 'Ask about maternal DES use in pregnancy' },
  ],

  treatment: [
    { logic: 'Screen and treat pre-invasive disease', detail: 'Pap ± HPV testing; excise/ablate high-grade CIN (LEEP/cone). HPV vaccination prevents the causative infection.' },
  ],

  mnemonics: [
    { hook: 'Cancer starts at the T-zone with high-risk HPV', expansion: ['CIN1 → CIN2/3 → invasive SCC', 'Koilocytes = HPV'] },
    { hook: 'DES daughters → clear cell adenocarcinoma of the vagina', expansion: ['Rare; also adenosis'] },
  ],

  traps: [
    {
      questionCategory: 'Why screening works',
      wrongInstinct: 'Cervical cytology detects only invasive cancer',
      rightAnswer: 'Screening detects pre-invasive CIN, allowing treatment before cancer develops',
      why: 'The Pap smear’s value is catching dysplasia (CIN) at a curable, pre-invasive stage — which is why it lowers incidence and mortality.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Cervical dysplasia and squamous cell carcinoma most characteristically arise at the:',
      options: [
        { id: 'a', text: 'Endometrial cavity' },
        { id: 'b', text: 'Transformation zone (squamocolumnar junction)' },
        { id: 'c', text: 'Fallopian tube fimbriae' },
        { id: 'd', text: 'Vaginal fornix' },
      ],
      answerId: 'b',
      explanation: 'The transformation zone, with its active squamous metaplasia, is where high-risk HPV infects and where CIN and invasive squamous carcinoma develop.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A young woman is found to have clear cell adenocarcinoma of the vagina. The key exposure to ask about is:',
      options: [
        { id: 'a', text: 'Oral contraceptive use' },
        { id: 'b', text: 'In-utero diethylstilbestrol (DES) exposure' },
        { id: 'c', text: 'Smoking' },
        { id: 'd', text: 'HPV vaccination' },
      ],
      answerId: 'b',
      explanation: 'Vaginal clear cell adenocarcinoma (and adenosis) is classically associated with in-utero DES exposure.',
      tests: 'disease',
    },
    {
      id: 'q3',
      stem: 'Which lesion is the direct pre-invasive precursor of cervical squamous cell carcinoma?',
      options: [
        { id: 'a', text: 'Endometrial hyperplasia' },
        { id: 'b', text: 'High-grade CIN (CIN2/3)' },
        { id: 'c', text: 'Nabothian cyst' },
        { id: 'd', text: 'Leiomyoma' },
      ],
      answerId: 'b',
      explanation: 'High-grade cervical intraepithelial neoplasia (CIN2/3) is the pre-invasive precursor that may progress to invasive squamous cell carcinoma.',
      tests: 'exam',
    },
  ],
};

export default hrp2CervixPathology;
