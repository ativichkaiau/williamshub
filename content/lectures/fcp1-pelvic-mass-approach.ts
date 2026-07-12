import type { Lecture } from '../../lib/types';

export const fcp1PelvicMassApproach: Lecture = {
  id: 'fcp1-pelvic-mass-approach',
  title: 'Approach to a Pelvic Mass',
  system: 'clinical',
  source: 'L35 — Pelvic Mass & Pelvic Pain',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L35 Pelvic Mass & Pain' },
    { kind: 'disease', label: 'Fibroid · ovarian tumour' },
    { kind: 'mechanism', label: 'Benign vs malignant' },
    { kind: 'investigation', label: 'TVUS · CA-125 · markers' },
  ],

  highYield: [
    'The first two questions for any pelvic mass: **is she pregnant (β-hCG)** and **is this simply a full bladder** — then localise **gynaecologic vs non-gynaecologic** [[fcp1-abdominal-mass-differential]].',
    'The commonest gynaecologic masses are **uterine fibroids (leiomyoma)** — firm, arising from the uterus, often with heavy bleeding [[fcp1-abnormal-vaginal-bleeding]] — and **ovarian cysts or tumours**.',
    '**Benign ovarian features:** unilateral, cystic, mobile, smooth, premenopausal. **Malignant features:** solid or complex, bilateral, fixed, **ascites**, rapid growth, postmenopausal and a raised **CA-125**, sometimes with weight loss [[fcp1-weight-loss-approach]].',
    'First-line imaging is **transvaginal / pelvic ultrasound**; choose **tumour markers by age** — **CA-125** for epithelial tumours in older women, **AFP, β-hCG and LDH** for germ-cell tumours in the young.',
    'Red flags: a postmenopausal solid mass, ascites, weight loss and a fixed irregular mass → refer to gynae-oncology. Coexisting pelvic pain broadens the differential [[fcp1-pelvic-pain-approach]].',
  ],

  mechanism: {
    title: 'Characterising a pelvic mass',
    steps: [
      { id: 's1', label: 'Exclude pregnancy (β-hCG) and a full bladder', emphasis: 'key' },
      { id: 's2', label: 'Localise: uterine vs ovarian vs tubal vs non-gyn', emphasis: 'key' },
      { id: 's3', label: 'Ultrasound: simple/cystic vs solid/complex', emphasis: 'key' },
      { id: 's4', label: 'Add tumour markers by age (CA-125; AFP/β-hCG/LDH)', emphasis: 'normal' },
      { id: 's5', label: 'Solid, fixed, ascites, postmenopausal → suspect malignancy', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Firm, irregular mass that moves with the cervix and uterus', mechanism: 'Uterine fibroid (leiomyoma)', significance: 'key' },
    { sign: 'Mobile, smooth, unilateral adnexal mass', mechanism: 'Benign ovarian cyst', significance: 'supportive' },
    { sign: 'Fixed, hard mass with ascites (shifting dullness)', mechanism: 'Ovarian malignancy', significance: 'key' },
    { sign: 'Suprapubic mass that is dull and resolves after catheterization', mechanism: 'Full bladder, not a true mass', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Transvaginal ultrasound: a simple unilocular cyst under 5 cm', meaning: 'Likely benign — often conservative follow-up' },
    { clue: 'Complex solid mass, bilateral, ascites and a raised CA-125', meaning: 'High risk of ovarian malignancy — gynae-oncology, apply a risk-of-malignancy index' },
    { clue: 'Raised AFP, β-hCG or LDH in a young woman', meaning: 'Germ-cell tumour of the ovary' },
    { clue: 'Positive β-hCG with an adnexal mass and an empty uterus', meaning: 'Ectopic pregnancy until proven otherwise' },
  ],

  treatment: [
    { logic: 'Risk-stratify before intervening', detail: 'Combine ultrasound morphology, menopausal status and markers (a risk-of-malignancy index) to separate benign follow-up from specialist referral.' },
    { logic: 'Refer red-flag masses to gynae-oncology', detail: 'Solid or complex, fixed, ascitic, postmenopausal or rapidly growing masses need specialist imaging (CT/MRI) and surgical planning.' },
  ],

  mnemonics: [
    { hook: 'Pelvic mass: Pregnancy and Pee first', expansion: ['Always exclude pregnancy (β-hCG) and a full bladder', 'Then uterine vs ovarian vs non-gynaecologic'] },
  ],

  traps: [
    {
      questionCategory: 'Postmenopausal ovarian cyst',
      wrongInstinct: 'An ovarian cyst in a postmenopausal woman can be watched just like a premenopausal simple cyst',
      rightAnswer: 'Postmenopausal ovarian masses carry a much higher malignancy risk — check CA-125 and refer',
      why: 'The pre-test probability of malignancy rises sharply after menopause, so the same morphology is managed more aggressively.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 55-year-old postmenopausal woman has abdominal distension, solid complex bilateral adnexal masses on ultrasound, ascites and a raised CA-125. The most appropriate next step is:',
      options: [
        { id: 'a', text: 'Repeat the ultrasound in one year' },
        { id: 'b', text: 'Reassure — these are simple cysts' },
        { id: 'c', text: 'Refer to gynae-oncology for suspected ovarian malignancy' },
        { id: 'd', text: 'Start hormonal contraception' },
      ],
      answerId: 'c',
      explanation: 'Solid, complex, bilateral adnexal masses with ascites and a raised CA-125 in a postmenopausal woman are highly suspicious for ovarian cancer and warrant gynae-oncology referral.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A 34-year-old with heavy menstrual bleeding has a firm, irregular midline mass that moves with the cervix; her β-hCG is negative. The most likely diagnosis is:',
      options: [
        { id: 'a', text: 'Ovarian germ-cell tumour' },
        { id: 'b', text: 'Uterine leiomyoma (fibroid)' },
        { id: 'c', text: 'Ectopic pregnancy' },
        { id: 'd', text: 'A full bladder' },
      ],
      answerId: 'b',
      explanation: 'A firm, irregular mass continuous with and moving with the uterus, together with heavy bleeding, is characteristic of a uterine fibroid.',
      tests: 'disease',
    },
  ],
};

export default fcp1PelvicMassApproach;
