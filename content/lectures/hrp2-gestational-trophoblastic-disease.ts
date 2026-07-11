import type { Lecture } from '../../lib/types';

export const hrp2GestationalTrophoblasticDisease: Lecture = {
  id: 'hrp2-gestational-trophoblastic-disease',
  title: 'Gestational Trophoblastic Disease',
  system: 'repro',
  source: 'L7 — Gestational Trophoblastic Disease',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'L7 GTD' },
    { kind: 'disease', label: 'Molar pregnancy · choriocarcinoma' },
    { kind: 'mechanism', label: 'Abnormal fertilisation' },
    { kind: 'investigation', label: 'β-hCG · “snowstorm”' },
  ],

  highYield: [
    '**Hydatidiform mole = abnormal trophoblast proliferation with hydropic villi.** Presents with **first-trimester bleeding, uterus large-for-dates, very high β-hCG**, hyperemesis, early pre-eclampsia; ultrasound **“snowstorm/cluster-of-grapes.”**',
    '**Complete mole:** **46,XX (all paternal)** — an empty ovum fertilised by sperm that duplicates. **No fetal parts**, **diffuse** villous swelling, **markedly ↑ β-hCG**, higher risk of **choriocarcinoma (~2%)**.',
    '**Partial mole:** **triploid 69,XXX/XXY** (two sperm + one ovum). **Some fetal parts**, **focal** villous swelling, **less ↑ β-hCG**, **low** malignant potential.',
    '**Choriocarcinoma:** malignant trophoblast, **very high β-hCG**, **early haematogenous spread to lungs** (cannonball metastases), **no chorionic villi** histologically. **Highly chemosensitive** (methotrexate) → excellent cure rates. **Invasive mole** invades the myometrium locally.',
    '**Management:** **suction curettage** for moles + **serial β-hCG** monitoring to detect persistent GTD; avoid pregnancy during follow-up. β-hCG is the ideal **tumour marker**.',
  ],

  mechanism: {
    title: 'Abnormal fertilisation → molar trophoblast → (rarely) malignancy',
    steps: [
      { id: 's1', label: 'Empty ovum + paternal DNA → complete mole (46,XX)', emphasis: 'key' },
      { id: 's2', label: 'Two sperm + ovum → partial mole (triploid 69)', emphasis: 'key' },
      { id: 's3', label: 'Trophoblast proliferates → very high β-hCG' },
      { id: 's4', label: 'Persistent/invasive mole or choriocarcinoma', emphasis: 'danger' },
      { id: 's5', label: 'Serial β-hCG tracks disease and response' },
    ],
  },

  examFindings: [
    { sign: 'Uterus large-for-dates + very high β-hCG', mechanism: 'Excess trophoblast', significance: 'key' },
    { sign: 'Complete mole = 46,XX, no fetal parts, higher cancer risk', mechanism: 'All-paternal genome', significance: 'key' },
    { sign: 'Partial mole = triploid, fetal parts, low risk', mechanism: 'Two sperm + ovum', significance: 'key' },
    { sign: 'Choriocarcinoma → cannonball lung metastases', mechanism: 'Early haematogenous spread', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'First-trimester bleeding, snowstorm ultrasound, β-hCG hugely elevated', meaning: 'Hydatidiform mole → suction curettage' },
    { clue: 'No fetal parts, diffuse swollen villi, 46,XX', meaning: 'Complete mole (higher choriocarcinoma risk)' },
    { clue: 'Rising β-hCG after mole evacuation', meaning: 'Persistent GTD — chemotherapy (methotrexate)' },
    { clue: 'Cannonball lung lesions with very high β-hCG post-pregnancy', meaning: 'Choriocarcinoma' },
  ],

  treatment: [
    { logic: 'Evacuate + monitor β-hCG', detail: 'Suction curettage for moles, then serial β-hCG; contracept during surveillance to avoid confusing a rise.' },
    { logic: 'Chemotherapy for malignant/persistent GTD', detail: 'Choriocarcinoma is highly chemosensitive (methotrexate) with excellent cure rates even when metastatic.' },
  ],

  mnemonics: [
    { hook: 'Complete = Completely paternal (46,XX), no fetus, high hCG, higher cancer risk', expansion: ['Partial = triploid, some fetal parts, lower risk'] },
    { hook: 'Choriocarcinoma: high hCG, lungs (cannonballs), no villi, cured by methotrexate', expansion: ['β-hCG = tumour marker'] },
  ],

  traps: [
    {
      questionCategory: 'Complete vs partial mole',
      wrongInstinct: 'A partial mole has the higher risk of choriocarcinoma',
      rightAnswer: 'The COMPLETE mole (46,XX, no fetal parts) carries the higher malignant potential',
      why: 'Complete moles progress to choriocarcinoma more often than partial (triploid) moles, which have low malignant potential.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A curettage specimen shows swollen (hydropic) villi, no fetal parts, and karyotype 46,XX of entirely paternal origin. This is a:',
      options: [
        { id: 'a', text: 'Partial mole' },
        { id: 'b', text: 'Complete mole' },
        { id: 'c', text: 'Choriocarcinoma' },
        { id: 'd', text: 'Normal early pregnancy' },
      ],
      answerId: 'b',
      explanation: 'No fetal parts, diffusely hydropic villi and a 46,XX all-paternal karyotype define a complete hydatidiform mole, which has a higher risk of progression to choriocarcinoma.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'Which marker is used to diagnose and monitor gestational trophoblastic disease?',
      options: [
        { id: 'a', text: 'CA-125' },
        { id: 'b', text: 'β-hCG' },
        { id: 'c', text: 'AFP' },
        { id: 'd', text: 'CEA' },
      ],
      answerId: 'b',
      explanation: 'Trophoblast secretes β-hCG, making it the ideal tumour marker for diagnosing molar pregnancy and monitoring for persistent/malignant GTD after evacuation.',
      tests: 'investigation',
    },
    {
      id: 'q3',
      stem: 'Gestational choriocarcinoma is notable for being:',
      options: [
        { id: 'a', text: 'Resistant to chemotherapy' },
        { id: 'b', text: 'Highly chemosensitive with excellent cure rates' },
        { id: 'c', text: 'Composed of chorionic villi' },
        { id: 'd', text: 'Spread mainly via lymphatics' },
      ],
      answerId: 'b',
      explanation: 'Despite early haematogenous spread (e.g. cannonball lung metastases), gestational choriocarcinoma is highly chemosensitive (methotrexate) with excellent cure rates.',
      tests: 'exam',
    },
  ],
};

export default hrp2GestationalTrophoblasticDisease;
