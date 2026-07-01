import type { Lecture } from '../../lib/types';

export const preembryonicClinicalApplications: Lecture = {
  id: 'preembryonic-clinical-applications',
  title: 'Pre-embryonic Clinical Applications',
  system: 'repro',
  source: 'L2 — Pre-embryonic Development',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'HGD L2' },
    { kind: 'disease', label: 'Ectopic and molar pregnancy' },
    { kind: 'investigation', label: 'Pregnancy dating / PGD' },
    { kind: 'exam', label: 'hCG and Nägele rule' },
  ],
  highYield: [
    'Assisted reproductive techniques include **IVF**, intracytoplasmic sperm injection (**ICSI**), zygote or gamete intrafallopian transfer, and artificial insemination. Preimplantation genetic testing samples a polar body or embryo before transfer.',
    '**hCG is produced by trophoblast/syncytiotrophoblast** and is detected in blood or urine. A pregnancy test establishes trophoblast activity, not by itself the location or viability of the pregnancy.',
    'Gestational age is counted from the **first day of the LMP**; fertilization age is about 2 weeks less. **Nägele rule** estimates delivery as LMP + 1 year - 3 months + 7 days (about 280 days).',
    '**Ectopic pregnancy** is implantation outside the endometrial cavity, most commonly in the uterine tube. Pain or bleeding with positive hCG requires localization by transvaginal ultrasound.',
    'A complete hydatidiform mole is typically androgenetic diploidy without an embryo; a partial mole is usually **triploid**, often after dispermy, and may contain fetal tissue.',
  ],
  mechanism: {
    title: 'Clinical tools map onto pre-embryonic events',
    steps: [
      { id: 's1', label: 'Fertilization/embryo culture -> IVF or ICSI' },
      { id: 's2', label: 'Trophoblast -> hCG signal', emphasis: 'key' },
      { id: 's3', label: 'Implantation site -> intrauterine or ectopic' },
      { id: 's4', label: 'Abnormal paternal contribution -> molar pregnancy' },
    ],
  },
  examFindings: [
    { sign: 'Positive hCG with no intrauterine pregnancy and pelvic pain', mechanism: 'Ectopic pregnancy until excluded', significance: 'key' },
    { sign: 'Triploid conceptus with abnormal villi and fetal tissue', mechanism: 'Partial hydatidiform mole', significance: 'key' },
    { sign: 'Gestational age 8 weeks but fertilization age 6 weeks', mechanism: 'LMP-based dating adds about 2 weeks', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Serial quantitative beta-hCG', meaning: 'Assess trophoblast trajectory, not location alone' },
    { clue: 'Transvaginal ultrasound', meaning: 'Localize pregnancy and assess early structures' },
    { clue: 'Preimplantation genetic testing', meaning: 'Screen selected embryos before uterine transfer' },
  ],
  treatment: [
    { logic: 'Combine hCG with ultrasound for pregnancy of unknown location', detail: 'Neither result should be interpreted in isolation.' },
    { logic: 'Select assisted reproduction by the infertility mechanism', detail: 'ICSI bypasses sperm-oocyte penetration; IVF bypasses tubal fertilization.' },
  ],
  mnemonics: [
    { hook: 'Pregnancy test tells trophoblast, not territory', expansion: ['Positive hCG does not prove intrauterine location'] },
    { hook: 'Nägele: plus year, minus 3 months, plus 7 days', expansion: ['LMP-based due date'] },
  ],
  traps: [
    {
      questionCategory: 'Interpreting a positive pregnancy test',
      wrongInstinct: 'Positive urine hCG confirms a normal intrauterine pregnancy',
      rightAnswer: 'It confirms trophoblast-derived hCG; location and viability require clinical follow-up and ultrasound',
      why: 'Ectopic and molar pregnancies can both produce hCG.',
    },
  ],
  quiz: [
    {
      id: 'q1',
      stem: 'What is the most common site of an ectopic pregnancy?',
      options: [
        { id: 'a', text: 'Uterine tube' },
        { id: 'b', text: 'Ovary' },
        { id: 'c', text: 'Cervix' },
        { id: 'd', text: 'Abdominal cavity' },
      ],
      answerId: 'a',
      explanation: 'Most ectopic pregnancies are tubal, reflecting failed transport from the normal ampullary fertilization site to the uterine cavity.',
      tests: 'exam',
    },
  ],
};

export default preembryonicClinicalApplications;
