import type { Lecture } from '../../lib/types';

export const hrp2AbnormalUterineBleeding: Lecture = {
  id: 'hrp2-abnormal-uterine-bleeding',
  title: 'Abnormal Uterine Bleeding',
  system: 'repro',
  source: 'L11 — Abnormal Uterine Bleeding',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'L11 AUB' },
    { kind: 'disease', label: 'Menorrhagia · anovulation' },
    { kind: 'mechanism', label: 'PALM-COEIN' },
    { kind: 'investigation', label: 'TVUS · biopsy' },
  ],

  highYield: [
    '**Classify with PALM-COEIN.** **Structural (PALM):** **P**olyp, **A**denomyosis, **L**eiomyoma, **M**alignancy/hyperplasia. **Non-structural (COEIN):** **C**oagulopathy, **O**vulatory dysfunction, **E**ndometrial, **I**atrogenic, **N**ot-yet-classified.',
    '**Ovulatory dysfunction (anovulation)** is the commonest cause at the **extremes of reproductive age** (adolescence, perimenopause) and in **PCOS** — cycles are irregular because **unopposed oestrogen** builds an unstable endometrium.',
    '**Any postmenopausal bleeding, or AUB with risk factors, needs endometrial assessment** (biopsy ± transvaginal ultrasound) to **exclude hyperplasia/carcinoma** before assuming a benign cause.',
    '**In adolescents with heavy menstrual bleeding from menarche, screen for a coagulopathy** (e.g. **von Willebrand disease**). Always exclude **pregnancy** first in any woman of reproductive age.',
    '**Management:** treat the cause; medical options include **tranexamic acid/NSAIDs** (acute/heavy), **combined or progestin therapy / LNG-IUS** (regulate and thin the endometrium); surgery for structural lesions refractory to medical therapy.',
  ],

  mechanism: {
    title: 'Structural vs hormonal → unstable endometrium → bleeding',
    steps: [
      { id: 's1', label: 'Exclude pregnancy first', emphasis: 'key' },
      { id: 's2', label: 'Structural (PALM) vs non-structural (COEIN)', emphasis: 'key' },
      { id: 's3', label: 'Anovulation → unopposed oestrogen → unstable lining', emphasis: 'key' },
      { id: 's4', label: 'Assess endometrium if risk of hyperplasia/cancer', emphasis: 'danger' },
      { id: 's5', label: 'Treat the specific cause' },
    ],
  },

  examFindings: [
    { sign: 'Irregular cycles at extremes of age / PCOS → anovulation', mechanism: 'Unopposed oestrogen', significance: 'key' },
    { sign: 'Postmenopausal bleeding → biopsy for carcinoma', mechanism: 'Cancer until proven otherwise', significance: 'key' },
    { sign: 'Heavy bleeding since menarche → coagulopathy', mechanism: 'e.g. von Willebrand disease', significance: 'supportive' },
    { sign: 'Enlarged/irregular uterus → fibroids or adenomyosis', mechanism: 'Structural PALM cause', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Reproductive-age woman with new abnormal bleeding', meaning: 'β-hCG first to exclude pregnancy' },
    { clue: 'Perimenopausal woman, irregular heavy cycles', meaning: 'Likely ovulatory dysfunction; assess endometrium if risk factors' },
    { clue: 'Postmenopausal bleeding, thickened endometrium on TVUS', meaning: 'Endometrial biopsy to exclude carcinoma' },
    { clue: 'Teenager: heavy periods since menarche + easy bruising', meaning: 'Screen for von Willebrand disease' },
  ],

  treatment: [
    { logic: 'Medical first for non-structural AUB', detail: 'Tranexamic acid/NSAIDs for acute heavy bleeding; combined hormonal or progestin therapy (or LNG-IUS) to regulate and thin the endometrium.' },
  ],

  mnemonics: [
    { hook: 'PALM (structural) – COEIN (non-structural)', expansion: ['Polyp, Adenomyosis, Leiomyoma, Malignancy | Coagulopathy, Ovulatory, Endometrial, Iatrogenic, Not-classified'] },
    { hook: 'Extremes of age = anovulation; new PMB = cancer until proven otherwise', expansion: ['Always exclude pregnancy first'] },
  ],

  traps: [
    {
      questionCategory: 'When to biopsy',
      wrongInstinct: 'Postmenopausal bleeding is usually atrophic and needs no further work-up',
      rightAnswer: 'Postmenopausal bleeding requires endometrial assessment to exclude hyperplasia/carcinoma',
      why: 'Although atrophy is common, endometrial cancer must be excluded in every case of postmenopausal bleeding.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 14-year-old has had very heavy periods since menarche and bruises easily. Beyond a pregnancy test, the most important additional work-up is:',
      options: [
        { id: 'a', text: 'Endometrial biopsy' },
        { id: 'b', text: 'Screening for a coagulopathy (e.g. von Willebrand disease)' },
        { id: 'c', text: 'Hysterectomy' },
        { id: 'd', text: 'CA-125' },
      ],
      answerId: 'b',
      explanation: 'Heavy menstrual bleeding from menarche with a bleeding tendency suggests an inherited coagulopathy such as von Willebrand disease, which should be screened for.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'In the PALM-COEIN system, leiomyoma and adenomyosis are classified as:',
      options: [
        { id: 'a', text: 'Non-structural (COEIN) causes' },
        { id: 'b', text: 'Structural (PALM) causes' },
        { id: 'c', text: 'Coagulopathies' },
        { id: 'd', text: 'Iatrogenic causes' },
      ],
      answerId: 'b',
      explanation: 'PALM covers structural causes — Polyp, Adenomyosis, Leiomyoma, Malignancy/hyperplasia; COEIN covers non-structural causes.',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'The commonest mechanism of abnormal uterine bleeding at the extremes of reproductive age is:',
      options: [
        { id: 'a', text: 'Endometrial carcinoma' },
        { id: 'b', text: 'Ovulatory dysfunction (anovulation) with unopposed oestrogen' },
        { id: 'c', text: 'Cervical polyp' },
        { id: 'd', text: 'Coagulopathy' },
      ],
      answerId: 'b',
      explanation: 'At adolescence and perimenopause, anovulatory cycles cause unopposed oestrogen and an unstable endometrium, the commonest cause of AUB in these groups.',
      tests: 'mechanism',
    },
  ],
};

export default hrp2AbnormalUterineBleeding;
