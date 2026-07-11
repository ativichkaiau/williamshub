import type { Lecture } from '../../lib/types';

export const hrp2BenignBreastDisease: Lecture = {
  id: 'hrp2-benign-breast-disease',
  title: 'Benign Breast Disease',
  system: 'repro',
  source: 'L9 — Pathology of the Breast',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'L9 Breast' },
    { kind: 'disease', label: 'Fibroadenoma · fibrocystic' },
    { kind: 'mechanism', label: 'Proliferation ± atypia' },
    { kind: 'exam', label: 'Discharge · phyllodes' },
  ],

  highYield: [
    '**Fibroadenoma:** young women; **mobile, firm, well-circumscribed “breast mouse”**, oestrogen-sensitive, benign; the commonest benign breast tumour.',
    '**Fibrocystic change:** the commonest benign disorder — **lumpy, cyclical breast pain**, cysts and fibrosis. **Proliferative change with atypia (atypical ductal/lobular hyperplasia) raises later cancer risk**; non-proliferative change does not.',
    '**Intraductal papilloma** = commonest cause of **bloody nipple discharge** (subareolar). **Phyllodes tumour** = leaf-like fibroepithelial stromal tumour that can be borderline/malignant and recur locally.',
    '**Others:** **fat necrosis** (post-trauma/surgery — can mimic cancer, may calcify); **acute mastitis/abscess** (lactational, *Staph aureus*); **gynaecomastia** in males (oestrogen:androgen imbalance — puberty, cirrhosis, drugs like spironolactone).',
  ],

  mechanism: {
    title: 'Benign proliferations of duct/lobule/stroma',
    steps: [
      { id: 's1', label: 'Fibroadenoma = benign fibroepithelial (young)', emphasis: 'key' },
      { id: 's2', label: 'Fibrocystic change = cysts + fibrosis (cyclical pain)' },
      { id: 's3', label: 'Atypical hyperplasia raises future cancer risk', emphasis: 'key' },
      { id: 's4', label: 'Papilloma → bloody discharge; phyllodes → leaf-like stroma' },
    ],
  },

  examFindings: [
    { sign: 'Mobile firm painless lump in a young woman', mechanism: 'Fibroadenoma', significance: 'key' },
    { sign: 'Bloody nipple discharge', mechanism: 'Intraductal papilloma (exclude carcinoma)', significance: 'key' },
    { sign: 'Atypical hyperplasia → increased cancer risk', mechanism: 'Proliferative disease with atypia', significance: 'key' },
    { sign: 'Firm mass after trauma that may calcify', mechanism: 'Fat necrosis (mimics cancer)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Bloody single-duct nipple discharge', meaning: 'Intraductal papilloma → duct excision, exclude malignancy' },
    { clue: 'Rapidly enlarging leaf-like breast mass', meaning: 'Phyllodes tumour → wide excision' },
    { clue: 'Lumpy tender breasts varying with the cycle', meaning: 'Fibrocystic change' },
    { clue: 'Adolescent boy with tender breast tissue', meaning: 'Pubertal gynaecomastia (usually self-limiting)' },
  ],

  treatment: [
    { logic: 'Reassure or excise', detail: 'Confirm benign nature by triple assessment; excise papillomas/phyllodes; drain/antibiotics for abscess. Atypical hyperplasia warrants closer surveillance.' },
  ],

  mnemonics: [
    { hook: 'Young + mobile = fibroadenoma; Bloody discharge = papilloma; Leaf-like = phyllodes', expansion: ['Atypia is the risk marker'] },
  ],

  traps: [
    {
      questionCategory: 'Which benign change raises cancer risk',
      wrongInstinct: 'All fibrocystic change increases breast cancer risk',
      rightAnswer: 'Only PROLIFERATIVE change WITH ATYPIA raises risk; simple/non-proliferative change does not',
      why: 'Risk stratification depends on proliferation and atypia — most fibrocystic change is non-proliferative and low-risk.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The commonest cause of bloody nipple discharge from a single duct is:',
      options: [
        { id: 'a', text: 'Fibroadenoma' },
        { id: 'b', text: 'Intraductal papilloma' },
        { id: 'c', text: 'Fibrocystic change' },
        { id: 'd', text: 'Fat necrosis' },
      ],
      answerId: 'b',
      explanation: 'A subareolar intraductal papilloma is the classic cause of bloody nipple discharge; malignancy must still be excluded.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'Which benign breast finding is associated with an increased risk of subsequent carcinoma?',
      options: [
        { id: 'a', text: 'Simple cyst' },
        { id: 'b', text: 'Atypical ductal hyperplasia' },
        { id: 'c', text: 'Fat necrosis' },
        { id: 'd', text: 'Fibroadenoma' },
      ],
      answerId: 'b',
      explanation: 'Proliferative breast disease with atypia (e.g. atypical ductal hyperplasia) increases future breast cancer risk, unlike non-proliferative changes.',
      tests: 'exam',
    },
  ],
};

export default hrp2BenignBreastDisease;
