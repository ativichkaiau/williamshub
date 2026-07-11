import type { Lecture } from '../../lib/types';

export const hrp2HormonalContraception: Lecture = {
  id: 'hrp2-hormonal-contraception',
  title: 'Hormonal Contraception',
  system: 'repro',
  source: 'L15 — Female Sex Hormones & Inhibitors',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'L15 Female Hormone Drugs' },
    { kind: 'disease', label: 'Contraception' },
    { kind: 'mechanism', label: 'Ovulation suppression' },
    { kind: 'treatment', label: 'COC · POP · LARC' },
  ],

  highYield: [
    '**Combined (oestrogen + progestin) methods** (pill, patch, ring) mainly **suppress ovulation** (↓ FSH/LH, no LH surge) + thicken cervical mucus + thin endometrium. Non-contraceptive benefits: **↓ ovarian and endometrial cancer**, lighter/regular cycles, acne control.',
    '**Oestrogen is prothrombotic → VTE risk.** Absolute contraindications to combined methods: **migraine with aura, smoker > 35, prior VTE/stroke, uncontrolled hypertension, current breast cancer, < 6 weeks postpartum/breastfeeding**.',
    '**Progestin-only options** (POP, implant, injectable, LNG-IUS) work by **cervical mucus + variable ovulation suppression/endometrial effects** and are **safe when oestrogen is contraindicated** (VTE risk, breastfeeding). **LARC (implant, IUD/IUS)** are the most effective (least user-dependent).',
    '**Emergency contraception:** **levonorgestrel** or **ulipristal acetate** (delays ovulation; sooner is better) or a **copper IUD** (most effective, also prevents implantation). Match the method to the woman’s risk profile and preferences.',
  ],

  mechanism: {
    title: 'Suppress ovulation / block sperm & implantation',
    steps: [
      { id: 's1', label: 'Combined: ↓ FSH/LH → no ovulation', emphasis: 'key' },
      { id: 's2', label: 'Progestin: cervical mucus + endometrial/ovulation effects', emphasis: 'key' },
      { id: 's3', label: 'Oestrogen → VTE risk (contraindications)', emphasis: 'danger' },
      { id: 's4', label: 'LARC = most effective; copper IUD for emergency', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Combined methods suppress ovulation', mechanism: 'Negative feedback on gonadotropins', significance: 'key' },
    { sign: 'Oestrogen → increased VTE risk', mechanism: 'Raised clotting factors', significance: 'key' },
    { sign: 'Combined pill lowers ovarian & endometrial cancer risk', mechanism: 'Fewer ovulations / progestin effect', significance: 'supportive' },
    { sign: 'Progestin-only is safe if oestrogen is contraindicated', mechanism: 'Not prothrombotic like oestrogen', significance: 'key' },
  ],

  investigations: [
    { clue: 'Woman with migraine with aura wanting contraception', meaning: 'Avoid combined (oestrogen) — use progestin-only/LARC' },
    { clue: 'Breastfeeding mother 3 weeks postpartum', meaning: 'Avoid combined pill — progestin-only preferred' },
    { clue: 'Unprotected sex 24 h ago', meaning: 'Emergency contraception (levonorgestrel/ulipristal) or copper IUD' },
    { clue: 'Wants the most reliable, low-maintenance method', meaning: 'LARC (implant or IUD/IUS)' },
  ],

  treatment: [
    { logic: 'Match method to risk', detail: 'Combined methods for suitable women (many benefits); progestin-only/LARC when oestrogen is contraindicated; copper IUD is the most effective emergency method.' },
  ],

  mnemonics: [
    { hook: 'Combined = suppress Ovulation but Oestrogen = clots; Progestin-only when oestrogen’s out', expansion: ['LARC = most effective (user-independent)'] },
  ],

  traps: [
    {
      questionCategory: 'Contraception with migraine + aura',
      wrongInstinct: 'The combined pill is fine for a woman with migraine with aura',
      rightAnswer: 'Migraine with aura is a contraindication to oestrogen-containing contraception (stroke risk) — use progestin-only/LARC',
      why: 'Oestrogen raises ischaemic-stroke risk in migraine with aura, so combined methods are contraindicated.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 37-year-old smoker with migraine with aura requests contraception. Which is contraindicated?',
      options: [
        { id: 'a', text: 'Progestin-only pill' },
        { id: 'b', text: 'Combined oral contraceptive pill' },
        { id: 'c', text: 'Etonogestrel implant' },
        { id: 'd', text: 'Copper intrauterine device' },
      ],
      answerId: 'b',
      explanation: 'Oestrogen-containing (combined) contraception is contraindicated with migraine with aura and in smokers over 35 due to thrombotic/stroke risk; progestin-only and non-hormonal methods are safe.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'The primary contraceptive mechanism of the combined oral contraceptive pill is:',
      options: [
        { id: 'a', text: 'Preventing implantation' },
        { id: 'b', text: 'Suppressing ovulation via reduced FSH/LH' },
        { id: 'c', text: 'Killing sperm' },
        { id: 'd', text: 'Blocking fertilisation in the tube' },
      ],
      answerId: 'b',
      explanation: 'The combined pill mainly suppresses ovulation by reducing FSH/LH (no LH surge), with additional effects on cervical mucus and the endometrium.',
      tests: 'mechanism',
    },
  ],
};

export default hrp2HormonalContraception;
