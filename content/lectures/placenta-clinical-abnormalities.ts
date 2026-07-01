import type { Lecture } from '../../lib/types';

export const placentaClinicalAbnormalities: Lecture = {
  id: 'placenta-clinical-abnormalities',
  title: 'Placental, Cord & Amniotic Abnormalities',
  system: 'repro',
  source: 'L5 — Placenta & Extraembryonic Membranes',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'HGD L5' },
    { kind: 'disease', label: 'Accreta / previa / fluid disorders' },
    { kind: 'investigation', label: 'Prenatal genetic diagnosis' },
    { kind: 'exam', label: 'Placenta accreta spectrum' },
  ],
  highYield: [
    'Abnormal placental shapes include bilobed, accessory-lobe, horseshoe, and circumvallate placentas. Retained accessory tissue can cause postpartum bleeding.',
    'The **placenta accreta spectrum** describes abnormal depth of attachment: **accreta** adheres to myometrium, **increta** invades myometrium, and **percreta** penetrates through it and may involve adjacent organs.',
    '**Placenta previa** is implantation over or near the internal cervical os and classically causes painless late-pregnancy bleeding.',
    'Cord abnormalities include velamentous or marginal (**battledore**) insertion, true knots, and single umbilical artery. Amniotic bands can constrict or disrupt limbs.',
    '**Oligohydramnios** and **polyhydramnios** reflect abnormal fluid volume and should trigger evaluation for maternal, placental, and fetal causes. Prenatal diagnosis can use CVS, amniocentesis, cordocentesis, ultrasound, or cell-free-DNA screening (NIPT).',
  ],
  mechanism: {
    title: 'Abnormal implantation or support produces obstetric risk',
    steps: [
      { id: 's1', label: 'Implantation site/depth or cord insertion is abnormal' },
      { id: 's2', label: 'Placental exchange, separation, or fetal vessels become vulnerable' },
      { id: 's3', label: 'Bleeding, retained placenta, fetal compromise, or disruption', emphasis: 'danger' },
      { id: 's4', label: 'Ultrasound/Doppler and genetic testing define risk' },
    ],
  },
  examFindings: [
    { sign: 'Painless third-trimester bleeding', mechanism: 'Placenta previa until excluded', significance: 'key' },
    { sign: 'Placenta invades through myometrium to serosa/adjacent organ', mechanism: 'Placenta percreta', significance: 'key' },
    { sign: 'Fetal vessels traverse membranes before reaching placenta', mechanism: 'Velamentous cord insertion', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Placental ultrasound with Doppler', meaning: 'Assess previa, accreta spectrum, cord insertion, and fetal vessels' },
    { clue: 'CVS / amniocentesis / cordocentesis', meaning: 'Obtain placental tissue, amniocytes, or fetal blood for diagnosis' },
    { clue: 'Cell-free DNA (NIPT)', meaning: 'Screen common aneuploidies noninvasively; positive results require diagnostic confirmation' },
  ],
  treatment: [
    { logic: 'Avoid digital cervical examination until previa is excluded', detail: 'Manipulation can provoke severe hemorrhage.' },
    { logic: 'Plan delivery for suspected accreta spectrum with a multidisciplinary team', detail: 'Forced placental separation risks catastrophic bleeding.' },
    { logic: 'Treat NIPT as screening, not diagnosis', detail: 'Confirm important positive results invasively.' },
  ],
  mnemonics: [
    { hook: 'Accreta attaches, increta invades, percreta passes through', expansion: ['Depth increases in that order'] },
    { hook: 'Previa presents painless', expansion: ['Late-pregnancy bleeding'] },
  ],
  traps: [
    {
      questionCategory: 'Interpreting NIPT',
      wrongInstinct: 'A positive cell-free-DNA screen is a definitive fetal karyotype',
      rightAnswer: 'NIPT is a screening test and should be confirmed by diagnostic sampling when management depends on it',
      why: 'Cell-free DNA is largely placental and has false-positive/discordant possibilities.',
    },
  ],
  quiz: [
    {
      id: 'q1',
      stem: 'Placental tissue extends through the full myometrial thickness and reaches the uterine serosa. This is:',
      options: [
        { id: 'a', text: 'Placenta accreta' },
        { id: 'b', text: 'Placenta increta' },
        { id: 'c', text: 'Placenta percreta' },
        { id: 'd', text: 'Placenta previa' },
      ],
      answerId: 'c',
      explanation: 'Percreta is the deepest accreta-spectrum lesion, penetrating through myometrium to serosa and sometimes adjacent organs.',
      tests: 'exam',
    },
  ],
};

export default placentaClinicalAbnormalities;
