import type { Lecture } from '../../lib/types';

export const hrp2OvarianSexCordStromal: Lecture = {
  id: 'hrp2-ovarian-sex-cord-stromal',
  title: 'Ovarian Sex Cord-Stromal & Metastatic Tumours',
  system: 'repro',
  source: 'L8 — Pathology of the Ovary',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'L8 Ovary' },
    { kind: 'disease', label: 'Granulosa · Sertoli-Leydig · Krukenberg' },
    { kind: 'mechanism', label: 'Hormone secretion' },
    { kind: 'exam', label: 'Oestrogen vs androgen' },
  ],

  highYield: [
    '**Sex cord-stromal tumours are the “functional” (hormone-producing) group.** **Granulosa cell tumour → oestrogen** → precocious puberty (child), menometrorrhagia or **postmenopausal bleeding** (adult), and **endometrial hyperplasia/cancer**; histology shows **Call-Exner bodies**; **inhibin** is a marker.',
    '**Sertoli-Leydig cell tumour → androgens → virilisation/defeminisation** (hirsutism, deepening voice, clitoromegaly).',
    '**Fibroma** = benign stromal tumour; **Meigs syndrome = ovarian fibroma + ascites + right pleural effusion** (resolves after removal). **Thecoma** may be oestrogenic.',
    '**Metastatic (Krukenberg) tumour** = **bilateral** ovarian metastases of **mucin-filled signet-ring cells**, classically from **gastric** (or colon/breast) carcinoma — always consider a GI primary with bilateral ovarian masses.',
  ],

  mechanism: {
    title: 'Which hormone it makes decides the presentation',
    steps: [
      { id: 's1', label: 'Granulosa → oestrogen → bleeding / endometrial hyperplasia', emphasis: 'key' },
      { id: 's2', label: 'Sertoli-Leydig → androgen → virilisation', emphasis: 'key' },
      { id: 's3', label: 'Fibroma → Meigs (ascites + pleural effusion)' },
      { id: 's4', label: 'Krukenberg = bilateral signet-ring metastases (gastric)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Postmenopausal bleeding + Call-Exner bodies → granulosa cell tumour', mechanism: 'Oestrogen secretion', significance: 'key' },
    { sign: 'Virilisation → Sertoli-Leydig cell tumour', mechanism: 'Androgen secretion', significance: 'key' },
    { sign: 'Ovarian mass + ascites + pleural effusion → Meigs (fibroma)', mechanism: 'Benign fibroma', significance: 'supportive' },
    { sign: 'Bilateral signet-ring ovarian tumours → Krukenberg', mechanism: 'Metastasis (gastric)', significance: 'key' },
  ],

  investigations: [
    { clue: 'Raised inhibin with an oestrogenic ovarian tumour', meaning: 'Granulosa cell tumour' },
    { clue: 'Young woman with new hirsutism and an ovarian mass', meaning: 'Sertoli-Leydig cell tumour' },
    { clue: 'Ovarian mass, ascites, right pleural effusion, all benign', meaning: 'Meigs syndrome (ovarian fibroma)' },
    { clue: 'Bilateral ovarian masses with signet-ring cells', meaning: 'Krukenberg — search for a gastric primary' },
  ],

  treatment: [
    { logic: 'Surgery; treat hormonal sequelae', detail: 'Resect the tumour; in granulosa cell tumours assess the endometrium for hyperplasia/carcinoma from chronic oestrogen. Krukenberg needs treatment of the primary.' },
  ],

  mnemonics: [
    { hook: 'Granulosa = Girly (oEstrogen); Sertoli-Leydig = male (androgen → virilise)', expansion: ['Call-Exner bodies + inhibin = granulosa', 'Meigs = Fibroma + fluid'] },
  ],

  traps: [
    {
      questionCategory: 'Hormone by tumour',
      wrongInstinct: 'A virilising ovarian tumour is a granulosa cell tumour',
      rightAnswer: 'Virilisation = Sertoli-Leydig (androgen); granulosa cell tumours secrete oestrogen',
      why: 'The secreted hormone (oestrogen vs androgen) distinguishes these two hormonally active sex cord-stromal tumours.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A postmenopausal woman has vaginal bleeding, endometrial hyperplasia and an ovarian tumour with Call-Exner bodies. The tumour is a:',
      options: [
        { id: 'a', text: 'Sertoli-Leydig cell tumour' },
        { id: 'b', text: 'Granulosa cell tumour' },
        { id: 'c', text: 'Dysgerminoma' },
        { id: 'd', text: 'Krukenberg tumour' },
      ],
      answerId: 'b',
      explanation: 'Oestrogen-secreting granulosa cell tumours cause postmenopausal bleeding and endometrial hyperplasia and classically contain Call-Exner bodies (inhibin marker).',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'A benign ovarian fibroma accompanied by ascites and a right-sided pleural effusion is known as:',
      options: [
        { id: 'a', text: 'Krukenberg tumour' },
        { id: 'b', text: 'Meigs syndrome' },
        { id: 'c', text: 'Struma ovarii' },
        { id: 'd', text: 'Brenner tumour' },
      ],
      answerId: 'b',
      explanation: 'Meigs syndrome is the triad of a benign ovarian fibroma, ascites and a pleural effusion that resolves after tumour removal.',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'Bilateral ovarian masses composed of mucin-secreting signet-ring cells should prompt a search for a primary tumour in the:',
      options: [
        { id: 'a', text: 'Stomach' },
        { id: 'b', text: 'Brain' },
        { id: 'c', text: 'Thyroid' },
        { id: 'd', text: 'Kidney' },
      ],
      answerId: 'a',
      explanation: 'Krukenberg tumours are bilateral ovarian metastases of signet-ring carcinoma, classically from a gastric primary.',
      tests: 'mechanism',
    },
  ],
};

export default hrp2OvarianSexCordStromal;
