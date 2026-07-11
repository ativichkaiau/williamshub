import type { Lecture } from '../../lib/types';

export const hrp2UterineCorpusPathology: Lecture = {
  id: 'hrp2-uterine-corpus-pathology',
  title: 'Pathology of the Uterine Corpus',
  system: 'repro',
  source: 'L6 — Pathology of the Uterine Corpus',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'L6 Uterine Corpus' },
    { kind: 'disease', label: 'Endometrial hyperplasia/carcinoma · leiomyoma' },
    { kind: 'mechanism', label: 'Unopposed oestrogen' },
    { kind: 'exam', label: 'Type I vs Type II' },
  ],

  highYield: [
    '**Endometrial hyperplasia** results from **unopposed oestrogen** (obesity, PCOS, anovulation, oestrogen-only HRT, tamoxifen). Graded as **without atypia** vs **atypical hyperplasia / endometrioid intraepithelial neoplasia (EIN)** — **atypia** is the key predictor of progression to carcinoma.',
    '**Type I endometrial carcinoma (endometrioid, ~80%):** **oestrogen-driven**, arises from **hyperplasia**, younger/peri-menopausal, **PTEN/KRAS**, usually **low-grade, good prognosis**.',
    '**Type II endometrial carcinoma (serous/clear cell):** **NOT oestrogen-driven**, older women, **atrophic** endometrium, **p53** mutation, **high-grade, aggressive**; serous carcinoma spreads like ovarian cancer.',
    '**Postmenopausal bleeding = endometrial carcinoma until proven otherwise** → **endometrial sampling/biopsy** (± transvaginal ultrasound endometrial thickness).',
    '**Leiomyoma (fibroid):** the **commonest uterine tumour**, **benign** smooth-muscle, **oestrogen-sensitive** (grows in pregnancy, regresses after menopause), **whorled**, well-circumscribed. Menorrhagia, mass, subfertility. **Leiomyosarcoma** is rare, with necrosis, atypia and **high mitotic count**.',
  ],

  mechanism: {
    title: 'Unopposed oestrogen → hyperplasia → carcinoma (Type I)',
    steps: [
      { id: 's1', label: 'Excess/unopposed oestrogen stimulates endometrium', emphasis: 'key' },
      { id: 's2', label: 'Hyperplasia; atypia signals malignant potential', emphasis: 'key' },
      { id: 's3', label: 'Endometrioid (Type I) carcinoma — low-grade', emphasis: 'key' },
      { id: 's4', label: 'Type II (serous, p53) arises separately from atrophy', emphasis: 'danger' },
      { id: 's5', label: 'Presents as postmenopausal bleeding → biopsy' },
    ],
  },

  examFindings: [
    { sign: 'Atypical hyperplasia predicts progression to carcinoma', mechanism: 'Cytological atypia = malignant potential', significance: 'key' },
    { sign: 'Type I = oestrogen-driven, endometrioid, PTEN, good prognosis', mechanism: 'Hyperplasia pathway', significance: 'key' },
    { sign: 'Type II = serous, p53, atrophic, aggressive', mechanism: 'Non-hormonal pathway', significance: 'key' },
    { sign: 'Leiomyoma grows with oestrogen (pregnancy), shrinks post-menopause', mechanism: 'Hormone-responsive smooth muscle', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Obese anovulatory woman with atypical endometrial hyperplasia', meaning: 'High risk / may co-exist with Type I carcinoma' },
    { clue: 'Postmenopausal bleeding', meaning: 'Endometrial biopsy to exclude carcinoma' },
    { clue: 'Elderly woman, atrophic endometrium, p53-mutant serous carcinoma', meaning: 'Type II endometrial carcinoma — aggressive' },
    { clue: 'Whorled well-circumscribed myometrial masses, menorrhagia', meaning: 'Leiomyomas (fibroids)' },
  ],

  treatment: [
    { logic: 'Oppose the oestrogen / remove the lesion', detail: 'Progestins for hyperplasia without atypia; hysterectomy for atypical hyperplasia/carcinoma. Always add a progestin to oestrogen HRT in women with a uterus.' },
  ],

  mnemonics: [
    { hook: 'Type I: I = oestrogen-driven, endometrioid, Indolent (PTEN); Type II: p53, serous, Severe', expansion: ['Atypia is the danger sign in hyperplasia'] },
    { hook: 'Unopposed oestrogen: Obesity, PCOS, anovulation, oestrogen-only HRT, Tamoxifen', expansion: ['All raise endometrial cancer risk'] },
  ],

  traps: [
    {
      questionCategory: 'Grading hyperplasia risk',
      wrongInstinct: 'The amount/architecture of hyperplasia is the main predictor of cancer progression',
      rightAnswer: 'Cytological ATYPIA is the strongest predictor of progression to endometrial carcinoma',
      why: 'Hyperplasia with atypia (EIN) carries a high progression risk and is treated aggressively; without atypia the risk is low.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 58-year-old obese woman with anovulatory cycles develops endometrial carcinoma. The most likely type and driver are:',
      options: [
        { id: 'a', text: 'Type II serous carcinoma, p53-driven' },
        { id: 'b', text: 'Type I endometrioid carcinoma, oestrogen-driven' },
        { id: 'c', text: 'Leiomyosarcoma' },
        { id: 'd', text: 'Clear cell carcinoma from DES' },
      ],
      answerId: 'b',
      explanation: 'Obesity and anovulation cause unopposed oestrogen, driving endometrial hyperplasia and Type I (endometrioid) carcinoma, which is usually low-grade.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'Which feature of endometrial hyperplasia most strongly predicts progression to carcinoma?',
      options: [
        { id: 'a', text: 'Gland crowding' },
        { id: 'b', text: 'Cytological atypia' },
        { id: 'c', text: 'Stromal breakdown' },
        { id: 'd', text: 'Endometrial thickness' },
      ],
      answerId: 'b',
      explanation: 'Cytological atypia (atypical hyperplasia / EIN) is the key predictor of progression to endometrial carcinoma.',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'A uterine leiomyoma characteristically:',
      options: [
        { id: 'a', text: 'Regresses after menopause' },
        { id: 'b', text: 'Is a malignant tumour' },
        { id: 'c', text: 'Arises from endometrial glands' },
        { id: 'd', text: 'Is unresponsive to hormones' },
      ],
      answerId: 'a',
      explanation: 'Leiomyomas are benign, oestrogen-sensitive smooth-muscle tumours that grow during the reproductive years/pregnancy and regress after menopause.',
      tests: 'mechanism',
    },
  ],
};

export default hrp2UterineCorpusPathology;
