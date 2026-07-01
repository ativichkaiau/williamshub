import type { Lecture } from '../../lib/types';

export const gametogenesisFemaleTract: Lecture = {
  id: 'gametogenesis-female-tract',
  title: 'Gametogenesis & Female Reproductive Tract',
  system: 'repro',
  source: 'L1 — Genes & Embryonic Development',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'HGD L1' },
    { kind: 'mechanism', label: 'Meiosis and gamete maturation' },
    { kind: 'exam', label: 'Oocyte meiotic arrest' },
  ],
  highYield: [
    '**Meiosis preserves chromosome number across generations** by reducing diploid germ cells to haploid gametes; crossing over and random gamete union create genetic diversity.',
    'Spermatogenesis begins at puberty: spermatogonia -> primary spermatocytes -> meiosis I -> secondary spermatocytes -> meiosis II -> spermatids -> spermatozoa.',
    'Oogenesis begins prenatally. **Primary oocytes arrest in prophase I until puberty**; a selected oocyte completes meiosis I before ovulation, producing a secondary oocyte and first polar body.',
    'The ovulated **secondary oocyte arrests in metaphase II** and completes meiosis II only after fertilization. Unequal cytokinesis preserves cytoplasm in one definitive ovum while polar bodies receive little cytoplasm.',
    'The uterine tube comprises infundibulum/fimbriae, **ampulla (usual fertilization site)**, isthmus, and intramural part. The endometrium has a shed functional layer and a regenerative basal layer.',
  ],
  mechanism: {
    title: 'Diploid germ cell to haploid gamete',
    steps: [
      { id: 's1', label: 'Germ-cell mitosis and growth' },
      { id: 's2', label: 'Meiosis I separates homologous chromosomes', emphasis: 'key' },
      { id: 's3', label: 'Meiosis II separates sister chromatids' },
      { id: 's4', label: 'Haploid gamete + haploid gamete -> diploid zygote' },
    ],
  },
  examFindings: [
    { sign: 'Primary oocyte present at birth', mechanism: 'Prenatal oogenesis with prophase-I arrest', significance: 'key' },
    { sign: 'Ovulated cell has not completed meiosis II', mechanism: 'Secondary oocyte is arrested in metaphase II until fertilization', significance: 'key' },
    { sign: 'Ectopic implantation in the uterine tube', mechanism: 'Fertilization normally occurs in the ampulla before transport to the uterus', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Karyotype or meiotic-product analysis', meaning: 'Assess chromosome segregation errors' },
    { clue: 'Pelvic ultrasound', meaning: 'Assess ovaries, uterus, and tubal-region pathology' },
    { clue: 'Menstrual-cycle timing', meaning: 'Relate follicular, ovulatory, and secretory endometrial phases' },
  ],
  treatment: [
    { logic: 'Use meiotic arrest points to interpret reproductive timing', detail: 'Prophase I at birth; metaphase II at ovulation.' },
    { logic: 'Localize fertilization to the ampulla', detail: 'This anchors questions about transport, ectopic pregnancy, and assisted reproduction.' },
  ],
  mnemonics: [
    { hook: 'Primary pauses in Prophase; secondary stops at II', expansion: ['Prophase I before birth', 'Metaphase II until fertilization'] },
    { hook: 'Ampulla = appointment of egg and sperm', expansion: ['Most common fertilization site'] },
  ],
  traps: [
    {
      questionCategory: 'Identity of the ovulated female gamete',
      wrongInstinct: 'Ovulation releases a fully mature ovum that has completed meiosis II',
      rightAnswer: 'Ovulation releases a secondary oocyte arrested in metaphase II',
      why: 'Meiosis II finishes only when fertilization activates the oocyte.',
    },
  ],
  quiz: [
    {
      id: 'q1',
      stem: 'At which stage is the human oocyte normally arrested at ovulation?',
      options: [
        { id: 'a', text: 'Prophase I' },
        { id: 'b', text: 'Metaphase I' },
        { id: 'c', text: 'Metaphase II' },
        { id: 'd', text: 'Telophase II' },
      ],
      answerId: 'c',
      explanation: 'The secondary oocyte is ovulated in metaphase II and completes the division only after fertilization.',
      tests: 'exam',
    },
  ],
};

export default gametogenesisFemaleTract;
