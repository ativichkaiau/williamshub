import type { Lecture } from '../../lib/types';

export const hrp2OvaryPathology: Lecture = {
  id: 'hrp2-ovary-pathology',
  title: 'Pathology of the Ovary',
  system: 'repro',
  source: 'L8 — Pathology of the Ovary',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'L8 Ovary' },
    { kind: 'disease', label: 'Ovarian tumours' },
    { kind: 'mechanism', label: 'Cell of origin' },
    { kind: 'investigation', label: 'CA-125 · AFP · hCG' },
  ],

  highYield: [
    '**Three tumour families by cell of origin:** **surface epithelial (~65–70%, most malignant ones)**, **germ cell (young women)**, and **sex cord-stromal (hormone-producing).** Ovarian cancer is often **silent → late presentation**, hence poor prognosis.',
    '**Surface epithelial:** **serous** (commonest; often bilateral; **psammoma bodies**; high-grade serous linked to **BRCA/p53** and the **fallopian-tube fimbria**), **mucinous** (large, multiloculated; **pseudomyxoma peritonei** if ruptured), **endometrioid** (assoc. endometriosis), **Brenner**. Marker: **CA-125**.',
    '**Germ cell (young):** **mature cystic teratoma (dermoid)** — commonest, benign; **dysgerminoma** (malignant counterpart of seminoma); **yolk sac tumour → AFP**; **choriocarcinoma → β-hCG**; immature teratoma is malignant.',
    '**Sex cord-stromal (hormonal):** **granulosa cell tumour → oestrogen** (precocious puberty / postmenopausal bleeding; **Call-Exner bodies**); **Sertoli-Leydig → androgen → virilisation**; **fibroma → Meigs syndrome** (ascites + pleural effusion).',
    '**Metastatic: Krukenberg tumour** = **bilateral** ovarian metastases of **signet-ring cells**, classically from **gastric** carcinoma. **BRCA1/2** mutation greatly raises ovarian (and breast) cancer risk.',
  ],

  mechanism: {
    title: 'Cell of origin decides tumour type, markers & behaviour',
    steps: [
      { id: 's1', label: 'Surface epithelium → serous/mucinous/endometrioid (CA-125)', emphasis: 'key' },
      { id: 's2', label: 'Germ cells → teratoma/dysgerminoma/yolk sac (AFP)/chorio (hCG)', emphasis: 'key' },
      { id: 's3', label: 'Sex cord-stroma → hormone-producing tumours', emphasis: 'key' },
      { id: 's4', label: 'Late, silent presentation → advanced stage', emphasis: 'danger' },
      { id: 's5', label: 'Krukenberg = metastatic signet-ring (gastric)' },
    ],
  },

  examFindings: [
    { sign: 'Psammoma bodies + CA-125 → serous tumour', mechanism: 'Surface epithelial serous carcinoma', significance: 'key' },
    { sign: 'Oestrogen effects (bleeding) + Call-Exner bodies → granulosa cell tumour', mechanism: 'Sex cord-stromal, oestrogenic', significance: 'key' },
    { sign: 'Virilisation → Sertoli-Leydig tumour', mechanism: 'Androgen secretion', significance: 'supportive' },
    { sign: 'Bilateral signet-ring ovarian mets → Krukenberg (gastric)', mechanism: 'Transcoelomic/haematogenous spread', significance: 'key' },
  ],

  investigations: [
    { clue: 'Raised AFP in an ovarian tumour of a young woman', meaning: 'Yolk sac (endodermal sinus) tumour' },
    { clue: 'Raised β-hCG in an ovarian tumour', meaning: 'Ovarian choriocarcinoma (germ cell)' },
    { clue: 'Postmenopausal bleeding + oestrogen-secreting ovarian mass', meaning: 'Granulosa cell tumour' },
    { clue: 'Bilateral ovarian masses with signet-ring cells', meaning: 'Krukenberg — search for a gastric primary' },
  ],

  treatment: [
    { logic: 'Surgery + chemotherapy for epithelial cancers', detail: 'Debulking surgery with platinum-based chemotherapy; CA-125 tracks response. Germ cell tumours are chemosensitive.' },
  ],

  mnemonics: [
    { hook: 'Granulosa = oEstrogen; Sertoli-Leydig = androgen', expansion: ['Fibroma → Meigs (ascites + pleural effusion)', 'Call-Exner bodies = granulosa'] },
    { hook: 'Germ cell markers: yolk sac → AFP; choriocarcinoma → hCG; dysgerminoma → LDH', expansion: ['Teratoma = commonest, usually benign'] },
  ],

  traps: [
    {
      questionCategory: 'Granulosa vs Sertoli-Leydig',
      wrongInstinct: 'A granulosa cell tumour causes virilisation',
      rightAnswer: 'Granulosa cell tumours secrete oestrogen (bleeding/precocious puberty); Sertoli-Leydig tumours secrete androgens (virilisation)',
      why: 'The hormone secreted (oestrogen vs androgen) distinguishes the two hormone-producing sex cord-stromal tumours.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A postmenopausal woman presents with vaginal bleeding and an oestrogen-secreting ovarian tumour containing Call-Exner bodies. The tumour is a:',
      options: [
        { id: 'a', text: 'Serous cystadenocarcinoma' },
        { id: 'b', text: 'Granulosa cell tumour' },
        { id: 'c', text: 'Sertoli-Leydig cell tumour' },
        { id: 'd', text: 'Mature cystic teratoma' },
      ],
      answerId: 'b',
      explanation: 'Granulosa cell tumours are oestrogen-secreting sex cord-stromal tumours (causing postmenopausal bleeding) and classically contain Call-Exner bodies.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'Bilateral ovarian masses composed of mucin-filled signet-ring cells, with a stomach primary, describe a:',
      options: [
        { id: 'a', text: 'Dysgerminoma' },
        { id: 'b', text: 'Brenner tumour' },
        { id: 'c', text: 'Krukenberg tumour' },
        { id: 'd', text: 'Endometrioid carcinoma' },
      ],
      answerId: 'c',
      explanation: 'A Krukenberg tumour is a metastasis (classically from gastric signet-ring carcinoma) producing bilateral ovarian involvement.',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'A raised serum AFP in an ovarian germ cell tumour of a young woman indicates a:',
      options: [
        { id: 'a', text: 'Granulosa cell tumour' },
        { id: 'b', text: 'Yolk sac (endodermal sinus) tumour' },
        { id: 'c', text: 'Serous cystadenoma' },
        { id: 'd', text: 'Fibroma' },
      ],
      answerId: 'b',
      explanation: 'Yolk sac (endodermal sinus) tumours secrete alpha-fetoprotein (AFP), a useful diagnostic and monitoring marker.',
      tests: 'investigation',
    },
  ],
};

export default hrp2OvaryPathology;
