import type { Lecture } from '../../lib/types';

export const hrp2MenopausePoi: Lecture = {
  id: 'hrp2-menopause-poi',
  title: 'Menopause & Premature Ovarian Insufficiency',
  system: 'repro',
  source: 'L12 — HPO Axis, Amenorrhoea & Puberty',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'L12 HPO Axis' },
    { kind: 'disease', label: 'Menopause · POI' },
    { kind: 'mechanism', label: 'Oestrogen deficiency' },
    { kind: 'investigation', label: 'High FSH' },
  ],

  highYield: [
    '**Menopause = permanent cessation of menstruation** (12 months amenorrhoea, ~51 years) from **ovarian follicle depletion** → **low oestrogen, high FSH/LH**. It is a **clinical/retrospective** diagnosis; FSH is not routinely needed.',
    '**Symptoms of oestrogen deficiency:** **vasomotor (hot flushes, night sweats)**, **genitourinary syndrome** (vaginal dryness, dyspareunia, urinary symptoms), mood/sleep changes.',
    '**Long-term consequences:** **accelerated bone loss → osteoporosis** and increased **cardiovascular** risk after the protective effect of oestrogen is lost.',
    '**Premature ovarian insufficiency (POI)** = menopause **before 40** (high FSH) — causes: idiopathic, **Turner/fragile X**, autoimmune, chemo/radiotherapy. Needs **hormone replacement until the natural menopausal age** for bone/cardiovascular/symptom protection.',
  ],

  mechanism: {
    title: 'Follicle depletion → low oestrogen, high FSH → symptoms & risks',
    steps: [
      { id: 's1', label: 'Ovarian follicles depleted', emphasis: 'key' },
      { id: 's2', label: 'Low oestrogen, loss of feedback → high FSH/LH', emphasis: 'key' },
      { id: 's3', label: 'Vasomotor + genitourinary symptoms' },
      { id: 's4', label: 'Osteoporosis + cardiovascular risk', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Amenorrhoea + hot flushes + high FSH', mechanism: 'Ovarian failure', significance: 'key' },
    { sign: 'Vaginal dryness/dyspareunia (genitourinary syndrome)', mechanism: 'Oestrogen deficiency', significance: 'key' },
    { sign: 'Menopause before 40 → POI', mechanism: 'Premature follicle loss', significance: 'key' },
    { sign: 'Accelerated bone loss', mechanism: 'Loss of oestrogen’s effect on bone', significance: 'supportive' },
  ],

  investigations: [
    { clue: '51-year-old, 12 months amenorrhoea, hot flushes', meaning: 'Menopause (clinical diagnosis)' },
    { clue: '35-year-old with amenorrhoea and raised FSH on two occasions', meaning: 'Premature ovarian insufficiency' },
    { clue: 'Postmenopausal woman with fragility fracture', meaning: 'Osteoporosis from oestrogen deficiency' },
    { clue: 'POI with a 45,X karyotype', meaning: 'Turner syndrome' },
  ],

  treatment: [
    { logic: 'HRT for symptoms and POI', detail: 'Oestrogen (with a progestin if the uterus is present) relieves vasomotor/genitourinary symptoms and protects bone; POI needs replacement until ~51.' },
  ],

  mnemonics: [
    { hook: 'Menopause = ovaries retire → low oEstrogen, high FSH', expansion: ['<40 = POI → HRT until natural menopause age'] },
  ],

  traps: [
    {
      questionCategory: 'HRT in POI',
      wrongInstinct: 'HRT risks mean it should be avoided in young women with premature ovarian insufficiency',
      rightAnswer: 'Women with POI should receive hormone replacement until the natural menopausal age for bone and cardiovascular protection',
      why: 'POI causes early, prolonged oestrogen deficiency; replacement restores physiological levels and reduces osteoporosis/cardiovascular risk.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The hormonal profile of the menopause is:',
      options: [
        { id: 'a', text: 'High oestrogen, low FSH' },
        { id: 'b', text: 'Low oestrogen, high FSH' },
        { id: 'c', text: 'Low oestrogen, low FSH' },
        { id: 'd', text: 'High oestrogen, high FSH' },
      ],
      answerId: 'b',
      explanation: 'Follicle depletion lowers oestrogen; loss of negative feedback raises FSH (and LH). This is the hallmark of ovarian failure.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Premature ovarian insufficiency is defined as menopause occurring before the age of:',
      options: [
        { id: 'a', text: '30' },
        { id: 'b', text: '40' },
        { id: 'c', text: '45' },
        { id: 'd', text: '51' },
      ],
      answerId: 'b',
      explanation: 'Premature ovarian insufficiency (POI) is ovarian failure before age 40, warranting hormone replacement until the usual age of menopause.',
      tests: 'exam',
    },
  ],
};

export default hrp2MenopausePoi;
