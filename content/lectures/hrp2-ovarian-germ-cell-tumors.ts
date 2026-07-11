import type { Lecture } from '../../lib/types';

export const hrp2OvarianGermCellTumors: Lecture = {
  id: 'hrp2-ovarian-germ-cell-tumors',
  title: 'Ovarian Germ Cell Tumours',
  system: 'repro',
  source: 'L8 — Pathology of the Ovary',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'L8 Ovary' },
    { kind: 'disease', label: 'Teratoma · dysgerminoma' },
    { kind: 'mechanism', label: 'Totipotent germ cells' },
    { kind: 'investigation', label: 'AFP · β-hCG · LDH' },
  ],

  highYield: [
    '**Germ cell tumours occur in young women/girls** and recapitulate embryonic/extra-embryonic tissue. **Mature cystic teratoma (dermoid)** is the **commonest**, **benign**, with skin/hair/teeth/sebum; complications: **torsion, rupture, rarely malignant transformation** (squamous). **Struma ovarii** = teratoma of thyroid tissue → hyperthyroidism.',
    '**Immature teratoma** contains immature (usually **neural**) tissue → **malignant**, graded by amount of immature neuroepithelium.',
    '**Dysgerminoma** = the ovarian counterpart of the testicular **seminoma**: **malignant but radiosensitive/chemosensitive, good prognosis**; marker **LDH** (± placental ALP).',
    '**Yolk sac (endodermal sinus) tumour → AFP**; **Schiller-Duval bodies**. **Choriocarcinoma → β-hCG** (non-gestational, aggressive). Markers let you diagnose and monitor: **AFP (yolk sac), β-hCG (choriocarcinoma), LDH (dysgerminoma)**.',
  ],

  mechanism: {
    title: 'Totipotent germ cell → which lineage it forms',
    steps: [
      { id: 's1', label: 'Germ cell tumours arise in young patients', emphasis: 'key' },
      { id: 's2', label: 'Teratoma → mature (benign) vs immature (malignant)', emphasis: 'key' },
      { id: 's3', label: 'Dysgerminoma = seminoma equivalent (LDH), radiosensitive' },
      { id: 's4', label: 'Yolk sac → AFP; choriocarcinoma → β-hCG', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Mature cystic teratoma = commonest, benign', mechanism: 'Well-differentiated ecto/meso/endoderm', significance: 'key' },
    { sign: 'Raised AFP → yolk sac tumour', mechanism: 'Endodermal sinus differentiation', significance: 'key' },
    { sign: 'Raised LDH → dysgerminoma', mechanism: 'Seminoma-equivalent marker', significance: 'supportive' },
    { sign: 'Struma ovarii → hyperthyroidism', mechanism: 'Teratoma of functioning thyroid tissue', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Young woman, ovarian mass, raised AFP', meaning: 'Yolk sac (endodermal sinus) tumour' },
    { clue: 'Solid ovarian tumour, raised LDH, radiosensitive', meaning: 'Dysgerminoma' },
    { clue: 'Cystic ovarian mass with hair, teeth, sebum', meaning: 'Mature cystic teratoma (dermoid)' },
    { clue: 'Ovarian tumour + thyrotoxicosis', meaning: 'Struma ovarii' },
  ],

  treatment: [
    { logic: 'Fertility-sparing surgery ± chemotherapy', detail: 'Germ cell tumours are chemosensitive; dermoids are excised (cystectomy). Markers monitor response/recurrence.' },
  ],

  mnemonics: [
    { hook: 'Markers: yolk sac → AFP; choriocarcinoma → hCG; dysgerminoma → LDH', expansion: ['Dermoid = commonest, benign', 'Immature teratoma = malignant (neural)'] },
  ],

  traps: [
    {
      questionCategory: 'Mature vs immature teratoma',
      wrongInstinct: 'All ovarian teratomas are benign',
      rightAnswer: 'Mature teratomas are benign; IMMATURE teratomas (immature neural tissue) are malignant',
      why: 'The presence and grade of immature (usually neuroepithelial) tissue determines malignancy.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 20-year-old has an ovarian mass with a markedly raised serum AFP. The tumour is most likely a:',
      options: [
        { id: 'a', text: 'Dysgerminoma' },
        { id: 'b', text: 'Yolk sac (endodermal sinus) tumour' },
        { id: 'c', text: 'Mature cystic teratoma' },
        { id: 'd', text: 'Granulosa cell tumour' },
      ],
      answerId: 'b',
      explanation: 'AFP is secreted by yolk sac (endodermal sinus) tumours, which also show Schiller-Duval bodies.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'The ovarian germ cell tumour that is the counterpart of the testicular seminoma and is notably radiosensitive is the:',
      options: [
        { id: 'a', text: 'Choriocarcinoma' },
        { id: 'b', text: 'Dysgerminoma' },
        { id: 'c', text: 'Immature teratoma' },
        { id: 'd', text: 'Brenner tumour' },
      ],
      answerId: 'b',
      explanation: 'Dysgerminoma is the ovarian equivalent of the seminoma — malignant but highly radiosensitive with a good prognosis; LDH is its marker.',
      tests: 'disease',
    },
    {
      id: 'q3',
      stem: 'A woman with an ovarian teratoma develops thyrotoxicosis. The teratoma most likely contains:',
      options: [
        { id: 'a', text: 'Neural tissue (immature)' },
        { id: 'b', text: 'Functioning thyroid tissue (struma ovarii)' },
        { id: 'c', text: 'Trophoblast' },
        { id: 'd', text: 'Cartilage' },
      ],
      answerId: 'b',
      explanation: 'Struma ovarii is a monodermal teratoma composed predominantly of thyroid tissue, which can secrete thyroid hormone and cause hyperthyroidism.',
      tests: 'exam',
    },
  ],
};

export default hrp2OvarianGermCellTumors;
