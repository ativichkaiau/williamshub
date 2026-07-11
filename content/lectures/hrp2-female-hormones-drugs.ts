import type { Lecture } from '../../lib/types';

export const hrp2FemaleHormonesDrugs: Lecture = {
  id: 'hrp2-female-hormones-drugs',
  title: 'Female Sex Hormones & Inhibitors',
  system: 'repro',
  source: 'L15 — Female Sex Hormones & Inhibitors',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'L15 Female Hormone Drugs' },
    { kind: 'disease', label: 'Contraception · infertility · breast cancer' },
    { kind: 'mechanism', label: 'ER agonism/antagonism' },
    { kind: 'treatment', label: 'OCP · SERM · aromatase inhibitor' },
  ],

  highYield: [
    '**Combined oral contraceptives (oestrogen + progestin)** work mainly by **suppressing the HPO axis (↓ FSH/LH → no LH surge → no ovulation)**, plus thickening cervical mucus and thinning the endometrium. Oestrogen is **prothrombotic** → **VTE risk** (avoid in smokers > 35, migraine with aura, prior VTE).',
    '**SERMs (tissue-selective ER modulators):** **Clomiphene** — anti-oestrogen at the hypothalamus → ↑ FSH/LH → **ovulation induction**. **Tamoxifen** — **antagonist in breast (treats ER+ breast cancer)** but **agonist in endometrium (↑ endometrial cancer risk)** and bone. **Raloxifene** — agonist in bone (osteoporosis) without stimulating the endometrium.',
    '**Aromatase inhibitors (anastrozole, letrozole)** block peripheral conversion of androgens → oestrogen → used for **ER-positive breast cancer in postmenopausal women** (and letrozole for ovulation induction). They **lower oestrogen** (bone loss/arthralgia), unlike SERMs.',
    '**Anti-progestin: mifepristone** (progesterone-receptor antagonist) — **medical abortion** (with a prostaglandin) and **emergency contraception**. **GnRH agonists** cause an initial flare then downregulation → used in **endometriosis, fibroids, precocious puberty**; **danazol** (androgenic) suppresses the axis for endometriosis.',
    '**Match the drug to the goal:** contraception → combined pill; ovulation induction → clomiphene/letrozole; ER+ breast cancer → tamoxifen (pre-menopausal) or aromatase inhibitor (post-menopausal); osteoporosis → raloxifene.',
  ],

  mechanism: {
    title: 'Agonise or antagonise the ER — tissue-selectively',
    steps: [
      { id: 's1', label: 'Combined pill suppresses FSH/LH → no ovulation', emphasis: 'key' },
      { id: 's2', label: 'Clomiphene blocks hypothalamic ER → ↑ FSH/LH → ovulation', emphasis: 'key' },
      { id: 's3', label: 'Tamoxifen: breast antagonist, endometrium/bone agonist', emphasis: 'key' },
      { id: 's4', label: 'Aromatase inhibitors ↓ oestrogen synthesis (postmenopausal)', emphasis: 'key' },
      { id: 's5', label: 'Mifepristone antagonises progesterone (abortion/EC)' },
    ],
  },

  examFindings: [
    { sign: 'Oestrogen → prothrombotic (VTE)', mechanism: '↑ clotting factors', significance: 'key' },
    { sign: 'Tamoxifen raises endometrial cancer risk', mechanism: 'Endometrial ER agonism', significance: 'key' },
    { sign: 'Clomiphene induces ovulation', mechanism: 'Hypothalamic anti-oestrogen → ↑ gonadotropins', significance: 'key' },
    { sign: 'Aromatase inhibitors → bone loss/arthralgia', mechanism: 'Systemic oestrogen depletion', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Postmenopausal woman with ER+ breast cancer', meaning: 'Aromatase inhibitor (anastrozole/letrozole)' },
    { clue: 'Pre-menopausal woman with ER+ breast cancer', meaning: 'Tamoxifen (SERM)' },
    { clue: 'Anovulatory infertility (e.g. PCOS)', meaning: 'Clomiphene or letrozole to induce ovulation' },
    { clue: 'Woman on tamoxifen with new abnormal bleeding', meaning: 'Investigate for endometrial pathology' },
  ],

  treatment: [
    { logic: 'Endocrine breast cancer therapy by menopausal status', detail: 'Tamoxifen for pre-menopausal ER+ disease; aromatase inhibitors for post-menopausal (they need peripheral aromatisation as the oestrogen source).' },
    { logic: 'Contraindicate oestrogen where thrombosis risk is high', detail: 'Avoid combined pills in smokers > 35, migraine with aura, or prior VTE; use progestin-only options instead.' },
  ],

  mnemonics: [
    { hook: 'Tamoxifen: Antagonist in breast, Agonist in endometrium/bone', expansion: ['↑ endometrial cancer risk, protects bone'] },
    { hook: 'Clomiphene = Climb the gonadotropins (ovulation); Raloxifene = bones, not uterus', expansion: ['Aromatase inhibitors = postmenopausal ER+ cancer'] },
  ],

  traps: [
    {
      questionCategory: 'Tamoxifen tissue effects',
      wrongInstinct: 'Tamoxifen protects the endometrium like it does the breast',
      rightAnswer: 'Tamoxifen is an endometrial ER agonist and INCREASES endometrial cancer risk',
      why: 'SERMs act tissue-specifically — tamoxifen antagonises breast ER but stimulates the endometrium, so new bleeding needs investigation.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A woman with anovulatory infertility from PCOS is given clomiphene. Its mechanism of inducing ovulation is:',
      options: [
        { id: 'a', text: 'Direct stimulation of the ovary' },
        { id: 'b', text: 'Blocking hypothalamic oestrogen receptors, raising FSH/LH' },
        { id: 'c', text: 'Suppressing GnRH release' },
        { id: 'd', text: 'Inhibiting aromatase' },
      ],
      answerId: 'b',
      explanation: 'Clomiphene is a SERM that antagonises hypothalamic oestrogen receptors, removing negative feedback so FSH/LH rise and stimulate ovulation.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'For a postmenopausal woman with ER-positive breast cancer, the preferred endocrine therapy is often:',
      options: [
        { id: 'a', text: 'An aromatase inhibitor (e.g. anastrozole)' },
        { id: 'b', text: 'A combined oral contraceptive' },
        { id: 'c', text: 'Clomiphene' },
        { id: 'd', text: 'Mifepristone' },
      ],
      answerId: 'a',
      explanation: 'After menopause, oestrogen comes mainly from peripheral aromatisation of androgens, so aromatase inhibitors effectively lower oestrogen and treat ER-positive disease.',
      tests: 'treatment',
    },
    {
      id: 'q3',
      stem: 'Which agent is used as an anti-progestin for medical abortion and emergency contraception?',
      options: [
        { id: 'a', text: 'Tamoxifen' },
        { id: 'b', text: 'Raloxifene' },
        { id: 'c', text: 'Mifepristone' },
        { id: 'd', text: 'Letrozole' },
      ],
      answerId: 'c',
      explanation: 'Mifepristone is a progesterone-receptor antagonist used (with a prostaglandin) for medical abortion and as emergency contraception.',
      tests: 'exam',
    },
  ],
};

export default hrp2FemaleHormonesDrugs;
