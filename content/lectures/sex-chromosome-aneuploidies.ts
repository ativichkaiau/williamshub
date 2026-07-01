import type { Lecture } from '../../lib/types';
import { SEX_CHROMOSOME_ANEUPLOIDIES } from '../../lib/figures';

export const sexChromosomeAneuploidies: Lecture = {
  id: 'sex-chromosome-aneuploidies',
  title: 'Sex Chromosome Aneuploidies',
  system: 'molecular',
  source: 'L10 — Sex Chromosome Abnormalities',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Genetics' },
    { kind: 'lecture', label: 'L10 Sex Chromosomes' },
    { kind: 'disease', label: 'Turner / Klinefelter' },
    { kind: 'mechanism', label: 'Sex-chromosome nondisjunction' },
    { kind: 'exam', label: '45,X / 47,XXY' },
  ],

  highYield: [
    '**Sex-chromosome aneuploidies are common (~1/400 births) and milder than autosomal ones** (X-inactivation + low Y gene content buffer the imbalance).',
    '**Turner syndrome (45,X)** = the only viable human **monosomy** (99% miscarry). **Short stature (SHOX loss), webbed neck, low posterior hairline, cystic hygroma/lymphedema, shield chest with widely spaced nipples, coarctation of the aorta, horseshoe kidney, ovarian dysgenesis → primary amenorrhea & infertility.** ~50% are 45,X; the rest mosaics or **i(Xq)**. Sex-chromosome loss is usually **paternal**.',
    '**Klinefelter syndrome (47,XXY)** = the commonest cause of male hypogonadism (~1/600–1000): **tall with long limbs, small firm testes, azoospermia/infertility, gynecomastia, sparse body hair**, mild learning difficulty. Labs: **↑FSH/LH, ↓testosterone**; **one Barr body**.',
    '**Triple X (47,XXX)**: usually phenotypically normal, tall, mostly fertile, sometimes mild learning problems (95% maternal meiosis I).',
    '**Jacobs / XYY (47,XYY)**: tall, **normal fertility and largely normal intelligence**, sometimes behavioral issues; arises from **paternal meiosis II** nondisjunction.',
  ],

  mechanism: {
    title: 'Nondisjunction of sex chromosomes → aneuploidy',
    steps: [
      { id: 's1', label: 'Loss of an X → 45,X (Turner)', emphasis: 'key' },
      { id: 's2', label: 'Extra X in a male → 47,XXY (Klinefelter)' },
      { id: 's3', label: 'Extra X (47,XXX) or extra Y (47,XYY) → mild' },
      { id: 's4', label: 'Gonadal failure: Turner ovaries, Klinefelter testes', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Short female, webbed neck, coarctation, primary amenorrhea', mechanism: 'Turner syndrome (45,X)', significance: 'key' },
    { sign: 'Tall male, small firm testes, gynecomastia, ↑FSH/LH', mechanism: 'Klinefelter (47,XXY)', significance: 'key' },
    { sign: 'Fetal cystic hygroma / nuchal edema on ultrasound', mechanism: 'Turner syndrome', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Karyotype (± mosaicism)', meaning: 'Confirms 45,X / 47,XXY etc.' },
    { clue: 'FSH/LH + testosterone/estradiol', meaning: 'Hypergonadotropic hypogonadism' },
    { clue: 'Echocardiography / renal ultrasound in Turner', meaning: 'Coarctation, horseshoe kidney' },
  ],

  treatment: [
    { logic: 'Turner: growth hormone + estrogen replacement', detail: 'Height and pubertal induction; monitor aorta.' },
    { logic: 'Klinefelter: testosterone replacement', detail: 'Secondary sexual characteristics; fertility usually not restored.' },
  ],

  mnemonics: [
    { hook: 'Turner 45,X = short, webbed neck, coarctation, streak ovaries', expansion: ['Only viable monosomy'] },
    { hook: 'Klinefelter 47,XXY = tall, small testes, gynecomastia, ↑gonadotropins', expansion: ['One Barr body'] },
  ],

  traps: [
    {
      questionCategory: 'Gonadotropin levels in Turner/Klinefelter',
      wrongInstinct: 'Hypogonadism in these syndromes means low FSH/LH',
      rightAnswer: 'Both are PRIMARY (hypergonadotropic) hypogonadism — the gonad fails, so FSH/LH are HIGH with low sex steroids',
      why: 'The defect is at the gonad, not the pituitary, so feedback drives gonadotropins up (unlike central/secondary hypogonadism).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A short 15-year-old girl has not started menstruating; exam shows a webbed neck, widely spaced nipples, and a history of coarctation repair. FSH and LH are elevated. What is the karyotype?',
      options: [
        { id: 'a', text: '47,XXY' },
        { id: 'b', text: '45,X' },
        { id: 'c', text: '47,XXX' },
        { id: 'd', text: '46,XY' },
      ],
      answerId: 'b',
      explanation: 'Turner syndrome (45,X): short stature, webbed neck, coarctation of the aorta, and ovarian dysgenesis causing primary amenorrhea with elevated (hypergonadotropic) FSH/LH.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Sex chromosome aneuploidies', svg: SEX_CHROMOSOME_ANEUPLOIDIES, caption: 'Turner (45,X), Klinefelter (47,XXY), Triple X, and XYY — with Barr-body counts and SHOX-driven stature.' },
  ],
};

export default sexChromosomeAneuploidies;
