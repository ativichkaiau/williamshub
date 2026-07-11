import type { Lecture } from '../../lib/types';

export const hrp2BreastPathology: Lecture = {
  id: 'hrp2-breast-pathology',
  title: 'Pathology of the Breast',
  system: 'repro',
  source: 'L9 — Pathology of the Breast',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'L9 Breast' },
    { kind: 'disease', label: 'Fibroadenoma · carcinoma' },
    { kind: 'mechanism', label: 'ER/PR/HER2' },
    { kind: 'investigation', label: 'Triple assessment' },
  ],

  highYield: [
    '**Benign, by age:** **fibroadenoma** — young women, **mobile, well-circumscribed, “breast mouse”**; **fibrocystic change** — commonest, lumpy/painful, cyclical; **intraductal papilloma** — **bloody nipple discharge**; **phyllodes** — leaf-like stromal tumour, can recur/be malignant.',
    '**Carcinoma precursors:** **DCIS** (malignant cells confined by basement membrane; often **microcalcifications** on mammography), **LCIS** (a risk marker for **bilateral** cancer). Invasion breaches the basement membrane.',
    '**Invasive carcinoma:** **invasive ductal (NST)** is commonest; **invasive lobular** grows in **single-file** (E-cadherin loss), often bilateral/multifocal. **Paget disease of the nipple** = DCIS extending to nipple epidermis (eczematous nipple).',
    '**The molecular triad (ER, PR, HER2) drives therapy:** **ER/PR-positive** → endocrine therapy (**tamoxifen**, aromatase inhibitors); **HER2-positive** → **trastuzumab**; **triple-negative** → chemotherapy, worse prognosis (common in **BRCA1**).',
    '**Assessment & risk:** **triple assessment = clinical exam + imaging (mammography/US) + biopsy.** Risk: **female sex, age, BRCA1/2, oestrogen exposure (early menarche/late menopause/nulliparity), family history**. A **hard, fixed, irregular** lump with skin/nipple retraction suggests malignancy.',
  ],

  mechanism: {
    title: 'Duct/lobule lesion → in-situ → invasive → receptor-driven therapy',
    steps: [
      { id: 's1', label: 'Benign proliferations (fibroadenoma, fibrocystic)' },
      { id: 's2', label: 'DCIS/LCIS — malignant cells within basement membrane', emphasis: 'key' },
      { id: 's3', label: 'Invasion through basement membrane → invasive carcinoma', emphasis: 'danger' },
      { id: 's4', label: 'Test ER/PR/HER2 → guide therapy', emphasis: 'key' },
      { id: 's5', label: 'Triple assessment confirms the diagnosis' },
    ],
  },

  examFindings: [
    { sign: 'Mobile, well-circumscribed lump in a young woman', mechanism: 'Fibroadenoma', significance: 'key' },
    { sign: 'Bloody nipple discharge', mechanism: 'Intraductal papilloma (or carcinoma)', significance: 'key' },
    { sign: 'Single-file infiltration, E-cadherin loss', mechanism: 'Invasive lobular carcinoma', significance: 'supportive' },
    { sign: 'Eczematous nipple → Paget disease', mechanism: 'DCIS extending to nipple epidermis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Mammographic clustered microcalcifications', meaning: 'Suspect DCIS → biopsy' },
    { clue: 'ER-positive, HER2-negative invasive carcinoma', meaning: 'Endocrine therapy (tamoxifen / aromatase inhibitor)' },
    { clue: 'HER2-positive carcinoma', meaning: 'Add trastuzumab (anti-HER2)' },
    { clue: 'Triple-negative carcinoma in a young BRCA1 carrier', meaning: 'Chemotherapy; poorer prognosis' },
  ],

  treatment: [
    { logic: 'Tailor by receptors', detail: 'ER/PR+ → endocrine therapy; HER2+ → trastuzumab; triple-negative → chemotherapy. Surgery ± radiotherapy for local control.' },
  ],

  mnemonics: [
    { hook: 'Fibroadenoma = young, mobile “breast mouse”; carcinoma = older, hard, fixed', expansion: ['Bloody discharge → papilloma', 'Eczematous nipple → Paget'] },
    { hook: 'Receptors rule: ER/PR → tamoxifen/AI; HER2 → trastuzumab; triple-neg → chemo', expansion: ['Triple-negative common in BRCA1'] },
  ],

  traps: [
    {
      questionCategory: 'Ductal vs lobular carcinoma',
      wrongInstinct: 'Single-file infiltrating cells indicate ductal carcinoma',
      rightAnswer: 'Single-file growth with E-cadherin loss is invasive LOBULAR carcinoma',
      why: 'Loss of E-cadherin makes lobular carcinoma cells grow in single-file lines and often bilateral/multifocal, unlike ductal (NST).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 22-year-old has a 2 cm firm, mobile, well-circumscribed, painless breast lump. The most likely diagnosis is:',
      options: [
        { id: 'a', text: 'Invasive ductal carcinoma' },
        { id: 'b', text: 'Fibroadenoma' },
        { id: 'c', text: 'Phyllodes tumour' },
        { id: 'd', text: 'Paget disease' },
      ],
      answerId: 'b',
      explanation: 'A mobile, well-circumscribed, painless lump in a young woman is a fibroadenoma (“breast mouse”), the commonest benign breast tumour.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'A breast carcinoma is ER-positive, PR-positive and HER2-negative. The most appropriate systemic therapy is:',
      options: [
        { id: 'a', text: 'Trastuzumab' },
        { id: 'b', text: 'Endocrine therapy (e.g. tamoxifen or an aromatase inhibitor)' },
        { id: 'c', text: 'No systemic therapy' },
        { id: 'd', text: 'Aciclovir' },
      ],
      answerId: 'b',
      explanation: 'Hormone-receptor-positive, HER2-negative cancers respond to endocrine therapy (tamoxifen in pre-menopausal women; aromatase inhibitors post-menopause).',
      tests: 'treatment',
    },
    {
      id: 'q3',
      stem: 'Which best describes ductal carcinoma in situ (DCIS)?',
      options: [
        { id: 'a', text: 'Invasive cancer that has spread to lymph nodes' },
        { id: 'b', text: 'Malignant epithelial cells confined by the basement membrane' },
        { id: 'c', text: 'A benign fibroepithelial tumour' },
        { id: 'd', text: 'A marker of increased risk with no malignant cells' },
      ],
      answerId: 'b',
      explanation: 'DCIS is malignant ductal epithelium that has not breached the basement membrane; it often shows microcalcifications on mammography and can progress to invasive carcinoma.',
      tests: 'exam',
    },
  ],
};

export default hrp2BreastPathology;
