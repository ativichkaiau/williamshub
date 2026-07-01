import type { Lecture } from '../../lib/types';

export const developmentalAnatomyPeriodsTerms: Lecture = {
  id: 'developmental-anatomy-periods-terms',
  title: 'Developmental Anatomy: Terms & Periods',
  system: 'repro',
  source: 'L1 — Genes & Embryonic Development',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Development' },
    { kind: 'lecture', label: 'HGD L1' },
    { kind: 'mechanism', label: 'Prenatal timeline' },
    { kind: 'exam', label: 'Embryonic vs gestational age' },
  ],
  highYield: [
    '**Developmental anatomy (embryology)** studies human form from fertilization onward; experimental embryology tests developmental mechanisms, and **teratology** studies abnormal development and birth defects.',
    'Use the anatomical position and directional planes consistently: sagittal divides right/left, coronal divides anterior/posterior, and transverse divides superior/inferior. Embryologic orientation also uses **cranial/caudal and dorsal/ventral**.',
    '**Fertilization age** begins at fertilization. **Gestational age** begins at the first day of the last menstrual period and is therefore about **2 weeks longer**.',
    'The prenatal sequence is **pre-embryonic weeks 1-2**, **embryonic weeks 3-8**, then **fetal week 9 to birth**. The embryonic period establishes the organ plan; the fetal period is dominated by growth and maturation.',
    'A **zygote** is the cell formed by gamete fusion; a **conceptus** includes the embryo/fetus and its associated membranes. A **primordium** is the earliest recognizable precursor of an organ.',
  ],
  mechanism: {
    title: 'One prenatal timeline, three developmental phases',
    steps: [
      { id: 's1', label: 'Fertilization -> zygote / conceptus', emphasis: 'key' },
      { id: 's2', label: 'Weeks 1-2: pre-embryonic organization' },
      { id: 's3', label: 'Weeks 3-8: embryo and organ primordia' },
      { id: 's4', label: 'Week 9-birth: fetal growth and maturation' },
    ],
  },
  examFindings: [
    { sign: 'Gestational age exceeds fertilization age by about 2 weeks', mechanism: 'Gestational dating starts at the LMP', significance: 'key' },
    { sign: 'A major structural defect after a week-5 exposure', mechanism: 'Weeks 3-8 are the organogenetic embryonic period', significance: 'key' },
    { sign: 'Use of cranial/caudal rather than superior/inferior', mechanism: 'Embryologic directional terminology', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Last menstrual period and dating ultrasound', meaning: 'Estimate gestational age' },
    { clue: 'Developmental week at exposure', meaning: 'Predict the developmental process at risk' },
    { clue: 'Carnegie stage morphology', meaning: 'Stage the embryo by structural features rather than size alone' },
  ],
  treatment: [
    { logic: 'Translate every timeline to one dating convention', detail: 'State whether an age is gestational or fertilization age.' },
    { logic: 'Interpret anomalies by the process active at exposure', detail: 'Timing is often more informative than the exposure name alone.' },
  ],
  mnemonics: [
    { hook: 'Pre 1-2, embryo 3-8, fetus 9-date', expansion: ['Organization', 'Organogenesis', 'Growth'] },
    { hook: 'Gestation gets two extra weeks', expansion: ['LMP precedes fertilization'] },
  ],
  traps: [
    {
      questionCategory: 'Developmental dating',
      wrongInstinct: 'A 10-week gestational-age pregnancy contains a 10-week-old embryo from fertilization',
      rightAnswer: 'Fertilization age is usually about 8 weeks when gestational age is 10 weeks',
      why: 'Obstetric dating begins at the LMP, roughly 2 weeks before ovulation and fertilization.',
    },
  ],
  quiz: [
    {
      id: 'q1',
      stem: 'Which prenatal period extends from the third through eighth week after fertilization?',
      options: [
        { id: 'a', text: 'Pre-embryonic period' },
        { id: 'b', text: 'Embryonic period' },
        { id: 'c', text: 'Fetal period' },
        { id: 'd', text: 'Perinatal period' },
      ],
      answerId: 'b',
      explanation: 'The embryonic period is weeks 3-8 and contains the core events of organogenesis.',
      tests: 'exam',
    },
  ],
};

export default developmentalAnatomyPeriodsTerms;
