import type { Lecture } from '../../lib/types';

export const hrp2GestationalDiabetes: Lecture = {
  id: 'hrp2-gestational-diabetes',
  title: 'Gestational Diabetes Mellitus',
  system: 'repro',
  source: 'L13 — Disorders Related to Pregnancy',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'L13 Pregnancy Disorders' },
    { kind: 'disease', label: 'GDM' },
    { kind: 'mechanism', label: 'Placental insulin resistance' },
    { kind: 'investigation', label: 'OGTT' },
  ],

  highYield: [
    '**GDM = glucose intolerance first recognised in pregnancy**, driven by **placental hormones (human placental lactogen) causing insulin resistance** that outstrips maternal insulin supply, typically in the **second half** of pregnancy.',
    '**Fetal effects:** maternal glucose crosses the placenta → **fetal hyperinsulinaemia** → **macrosomia** (shoulder dystocia, birth trauma), **neonatal hypoglycaemia** (after birth, insulin still high), polycythaemia, and **neonatal jaundice/respiratory distress**.',
    '**Screen with an oral glucose tolerance test (OGTT)** (risk-based or universal ~24–28 weeks). Risk factors: obesity, previous GDM/macrosomia, family history, PCOS, older age.',
    '**Management:** **diet and exercise first**, then **insulin** (or metformin) if targets are not met; monitor fetal growth. **Most GDM resolves after delivery**, but there is a high lifetime risk of **type 2 diabetes** → postnatal screening.',
  ],

  mechanism: {
    title: 'Placental hormones → insulin resistance → fetal hyperinsulinaemia',
    steps: [
      { id: 's1', label: 'Placental hormones (hPL) → maternal insulin resistance', emphasis: 'key' },
      { id: 's2', label: 'Maternal hyperglycaemia crosses placenta', emphasis: 'key' },
      { id: 's3', label: 'Fetal hyperinsulinaemia → macrosomia', emphasis: 'danger' },
      { id: 's4', label: 'After birth: neonatal hypoglycaemia', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Macrosomia / large-for-dates fetus', mechanism: 'Fetal hyperinsulinaemia (growth)', significance: 'key' },
    { sign: 'Neonatal hypoglycaemia after delivery', mechanism: 'Persistent fetal insulin, glucose supply cut', significance: 'key' },
    { sign: 'Polyhydramnios', mechanism: 'Fetal osmotic diuresis', significance: 'supportive' },
    { sign: 'Shoulder dystocia at delivery', mechanism: 'Macrosomia', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Abnormal OGTT at 26 weeks', meaning: 'Gestational diabetes → diet then insulin if needed' },
    { clue: 'Large-for-dates fundal height + polyhydramnios', meaning: 'Suspect GDM/macrosomia' },
    { clue: 'Neonate of a diabetic mother, jittery at 2 h', meaning: 'Neonatal hypoglycaemia — check and feed' },
    { clue: 'Woman with previous GDM planning pregnancy', meaning: 'Early screening; high recurrence and T2DM risk' },
  ],

  treatment: [
    { logic: 'Lifestyle, then insulin', detail: 'Diet and exercise first; add insulin (or metformin) to meet glucose targets; monitor fetal growth and plan delivery.' },
    { logic: 'Postnatal follow-up', detail: 'Most GDM resolves postpartum, but screen for persistent/type 2 diabetes given the high lifetime risk.' },
  ],

  mnemonics: [
    { hook: 'Big baby in pregnancy, low sugar after birth', expansion: ['Fetal hyperinsulinaemia → macrosomia → neonatal hypoglycaemia'] },
  ],

  traps: [
    {
      questionCategory: 'Neonatal glucose after GDM',
      wrongInstinct: 'The macrosomic baby of a diabetic mother is at risk of neonatal hyperglycaemia',
      rightAnswer: 'The neonate is at risk of HYPOglycaemia — fetal insulin remains high after the maternal glucose supply stops',
      why: 'Chronic fetal hyperinsulinaemia persists briefly after birth, dropping the newborn’s glucose once the placental supply is removed.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A macrosomic infant born to a mother with gestational diabetes is at greatest immediate risk of:',
      options: [
        { id: 'a', text: 'Neonatal hyperglycaemia' },
        { id: 'b', text: 'Neonatal hypoglycaemia' },
        { id: 'c', text: 'Hypernatraemia' },
        { id: 'd', text: 'Neonatal hypertension' },
      ],
      answerId: 'b',
      explanation: 'Fetal hyperinsulinaemia persists after birth while the maternal glucose supply stops, causing neonatal hypoglycaemia.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'The screening test used to diagnose gestational diabetes is the:',
      options: [
        { id: 'a', text: 'Fasting insulin' },
        { id: 'b', text: 'Oral glucose tolerance test (OGTT)' },
        { id: 'c', text: 'HbA1c only' },
        { id: 'd', text: 'Random cortisol' },
      ],
      answerId: 'b',
      explanation: 'An oral glucose tolerance test (typically at 24–28 weeks) is used to diagnose gestational diabetes.',
      tests: 'investigation',
    },
  ],
};

export default hrp2GestationalDiabetes;
