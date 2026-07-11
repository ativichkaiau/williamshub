import type { Lecture } from '../../lib/types';

export const hrp2MenopauseHrtDrugs: Lecture = {
  id: 'hrp2-menopause-hrt-drugs',
  title: 'Hormone Replacement Therapy',
  system: 'repro',
  source: 'L15 — Female Sex Hormones & Inhibitors',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'L15 Female Hormone Drugs' },
    { kind: 'disease', label: 'Menopausal symptoms' },
    { kind: 'mechanism', label: 'Oestrogen ± progestin' },
    { kind: 'treatment', label: 'HRT · raloxifene' },
  ],

  highYield: [
    '**HRT replaces oestrogen** to relieve **vasomotor and genitourinary** menopausal symptoms and protect bone. **A woman with a uterus needs a progestin added** to oppose oestrogen — **unopposed oestrogen causes endometrial hyperplasia/carcinoma**. **Oestrogen-only** HRT is only for women **without a uterus**.',
    '**Benefits:** symptom relief and **reduced osteoporotic fractures**; helpful in **premature ovarian insufficiency** until the natural menopausal age.',
    '**Risks:** oestrogen is **prothrombotic (VTE)**; combined (oestrogen + progestin) HRT slightly raises **breast cancer** risk with longer use; oral oestrogen raises VTE more than transdermal. Use the **lowest effective dose** for symptom control and review regularly.',
    '**Alternatives:** **raloxifene (SERM)** for bone protection without endometrial stimulation; **topical (vaginal) oestrogen** for isolated genitourinary symptoms; non-hormonal options for vasomotor symptoms when oestrogen is contraindicated.',
  ],

  mechanism: {
    title: 'Replace oestrogen; oppose it in the uterus',
    steps: [
      { id: 's1', label: 'Oestrogen relieves vasomotor/genitourinary symptoms + protects bone', emphasis: 'key' },
      { id: 's2', label: 'Add progestin if uterus present (endometrial protection)', emphasis: 'key' },
      { id: 's3', label: 'Oestrogen → VTE; combined → small breast cancer risk', emphasis: 'danger' },
      { id: 's4', label: 'Raloxifene / vaginal oestrogen as alternatives' },
    ],
  },

  examFindings: [
    { sign: 'Unopposed oestrogen → endometrial cancer', mechanism: 'Endometrial stimulation without progesterone', significance: 'key' },
    { sign: 'HRT reduces osteoporotic fractures', mechanism: 'Oestrogen effect on bone', significance: 'key' },
    { sign: 'Oestrogen raises VTE risk', mechanism: 'Prothrombotic', significance: 'key' },
    { sign: 'Raloxifene protects bone without endometrial stimulation', mechanism: 'Tissue-selective SERM', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Menopausal woman with a uterus needing HRT', meaning: 'Combined oestrogen + progestin (protect endometrium)' },
    { clue: 'Woman after hysterectomy needing HRT', meaning: 'Oestrogen-only HRT is appropriate' },
    { clue: 'Isolated vaginal dryness/dyspareunia', meaning: 'Topical (vaginal) oestrogen' },
    { clue: 'Osteoporosis prevention without endometrial stimulation', meaning: 'Raloxifene (SERM)' },
  ],

  treatment: [
    { logic: 'Lowest effective dose, tailored', detail: 'Oestrogen ± progestin (by uterine status), transdermal to lower VTE risk; topical oestrogen for local symptoms; review benefits vs risks periodically.' },
  ],

  mnemonics: [
    { hook: 'Uterus? Add progestin (protect endometrium). No uterus? Oestrogen alone', expansion: ['Oestrogen = VTE; combined = small breast cancer risk'] },
  ],

  traps: [
    {
      questionCategory: 'HRT in a woman with a uterus',
      wrongInstinct: 'Give oestrogen-only HRT to any woman with menopausal symptoms',
      rightAnswer: 'A woman WITH a uterus must have a progestin added to prevent endometrial hyperplasia/cancer',
      why: 'Unopposed oestrogen stimulates the endometrium; the progestin provides essential endometrial protection.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A menopausal woman with an intact uterus is prescribed HRT. Why must a progestin be added to the oestrogen?',
      options: [
        { id: 'a', text: 'To improve hot flushes' },
        { id: 'b', text: 'To protect the endometrium from hyperplasia/carcinoma' },
        { id: 'c', text: 'To reduce VTE risk' },
        { id: 'd', text: 'To strengthen bone' },
      ],
      answerId: 'b',
      explanation: 'Unopposed oestrogen causes endometrial hyperplasia and carcinoma; a progestin is added to protect the endometrium in women with a uterus.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which agent provides bone protection at menopause without stimulating the endometrium?',
      options: [
        { id: 'a', text: 'Conjugated oestrogen alone' },
        { id: 'b', text: 'Raloxifene (a SERM)' },
        { id: 'c', text: 'Tamoxifen' },
        { id: 'd', text: 'Clomiphene' },
      ],
      answerId: 'b',
      explanation: 'Raloxifene is a SERM that acts as an oestrogen agonist in bone (reducing fractures) without stimulating the endometrium.',
      tests: 'treatment',
    },
  ],
};

export default hrp2MenopauseHrtDrugs;
