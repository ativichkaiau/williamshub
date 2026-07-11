import type { Lecture } from '../../lib/types';

export const hrp2Choriocarcinoma: Lecture = {
  id: 'hrp2-choriocarcinoma',
  title: 'Choriocarcinoma & Persistent GTD',
  system: 'repro',
  source: 'L7 — Gestational Trophoblastic Disease',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'L7 GTD' },
    { kind: 'disease', label: 'Choriocarcinoma · invasive mole' },
    { kind: 'mechanism', label: 'Malignant trophoblast' },
    { kind: 'investigation', label: 'β-hCG · chest imaging' },
  ],

  highYield: [
    '**Gestational choriocarcinoma** = malignant trophoblast (cytotrophoblast + syncytiotrophoblast, **no chorionic villi**) with **very high β-hCG** and **early haematogenous metastasis** — classically **cannonball lung lesions** and to brain/liver/vagina.',
    '**Can follow any pregnancy event** — most after a **complete mole**, but also after miscarriage or a normal pregnancy. Presents with abnormal bleeding or **symptoms from metastases** with a **rising/plateauing β-hCG** after pregnancy.',
    '**Invasive mole** = molar tissue invading the **myometrium** locally (may perforate); **placental site trophoblastic tumour (PSTT)** is rarer, secretes **less hCG** and is **relatively chemoresistant**.',
    '**Gestational choriocarcinoma is highly chemosensitive → excellent cure rates** (methotrexate-based, even when metastatic); **β-hCG** is the marker for diagnosis, monitoring and cure. Contrast with **non-gestational** germ cell choriocarcinoma, which is more aggressive.',
  ],

  mechanism: {
    title: 'Persistent/malignant trophoblast → high hCG → spread → chemo-cure',
    steps: [
      { id: 's1', label: 'Trophoblast persists/invades after a pregnancy (esp. mole)', emphasis: 'key' },
      { id: 's2', label: 'Choriocarcinoma: no villi, very high β-hCG', emphasis: 'key' },
      { id: 's3', label: 'Early haematogenous spread (lungs → cannonballs)', emphasis: 'danger' },
      { id: 's4', label: 'Highly chemosensitive → cure; β-hCG tracks response', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Rising/plateauing β-hCG after a pregnancy', mechanism: 'Persistent GTD/choriocarcinoma', significance: 'key' },
    { sign: 'Cannonball pulmonary metastases + very high β-hCG', mechanism: 'Haematogenous spread', significance: 'key' },
    { sign: 'Invasive mole penetrates the myometrium', mechanism: 'Local invasion', significance: 'supportive' },
    { sign: 'PSTT secretes relatively low hCG, chemoresistant', mechanism: 'Intermediate trophoblast', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'β-hCG plateau/rise on molar surveillance', meaning: 'Persistent GTD → chemotherapy' },
    { clue: 'Post-pregnancy haemoptysis with cannonball lung lesions', meaning: 'Metastatic choriocarcinoma' },
    { clue: 'Uterine mass invading myometrium after a mole', meaning: 'Invasive mole' },
    { clue: 'Low-hCG uterine trophoblastic tumour resistant to chemo', meaning: 'Placental site trophoblastic tumour' },
  ],

  treatment: [
    { logic: 'Chemotherapy guided by risk score', detail: 'Methotrexate for low-risk, multi-agent for high-risk disease; β-hCG confirms remission. Surgery for PSTT (chemoresistant).' },
  ],

  mnemonics: [
    { hook: 'Choriocarcinoma: high hCG, no villi, cannonball lungs, cured by methotrexate', expansion: ['Invasive mole = local; PSTT = low hCG, chemoresistant'] },
  ],

  traps: [
    {
      questionCategory: 'Chemosensitivity',
      wrongInstinct: 'Metastatic choriocarcinoma has a dismal prognosis',
      rightAnswer: 'Gestational choriocarcinoma is highly chemosensitive with excellent cure rates even when metastatic',
      why: 'Unlike most metastatic cancers, gestational trophoblastic malignancy responds dramatically to chemotherapy and is usually curable.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A woman develops haemoptysis with multiple “cannonball” lung lesions and a very high β-hCG weeks after evacuation of a complete mole. The diagnosis is:',
      options: [
        { id: 'a', text: 'Placental site trophoblastic tumour' },
        { id: 'b', text: 'Gestational choriocarcinoma' },
        { id: 'c', text: 'Partial mole' },
        { id: 'd', text: 'Ectopic pregnancy' },
      ],
      answerId: 'b',
      explanation: 'A very high β-hCG with early haematogenous (cannonball) lung metastases after a molar pregnancy indicates gestational choriocarcinoma.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'Which statement about gestational choriocarcinoma is correct?',
      options: [
        { id: 'a', text: 'It is composed of chorionic villi' },
        { id: 'b', text: 'It is highly chemosensitive with excellent cure rates' },
        { id: 'c', text: 'It secretes low levels of β-hCG' },
        { id: 'd', text: 'It spreads mainly via lymphatics' },
      ],
      answerId: 'b',
      explanation: 'Gestational choriocarcinoma lacks villi, secretes very high β-hCG, spreads haematogenously, and is highly chemosensitive (methotrexate) with excellent cure rates.',
      tests: 'exam',
    },
  ],
};

export default hrp2Choriocarcinoma;
