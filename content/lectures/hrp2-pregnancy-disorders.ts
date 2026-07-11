import type { Lecture } from '../../lib/types';

export const hrp2PregnancyDisorders: Lecture = {
  id: 'hrp2-pregnancy-disorders',
  title: 'Disorders Related to Pregnancy',
  system: 'repro',
  source: 'L13 — Disorders Related to Pregnancy',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'L13 Pregnancy Disorders' },
    { kind: 'disease', label: 'Pre-eclampsia · ectopic · GDM' },
    { kind: 'mechanism', label: 'Placental dysfunction' },
    { kind: 'investigation', label: 'BP · proteinuria · β-hCG' },
  ],

  highYield: [
    '**Pre-eclampsia = new hypertension (≥140/90 after 20 weeks) + proteinuria/end-organ dysfunction.** Root cause: **abnormal spiral-artery remodelling → placental ischaemia** → anti-angiogenic factors → endothelial dysfunction. **Eclampsia** adds seizures; **HELLP** = Haemolysis, Elevated Liver enzymes, Low Platelets. Treatment: **delivery** (definitive), **magnesium sulfate** for seizure prophylaxis, antihypertensives.',
    '**Ectopic pregnancy** (commonest in the **ampulla** of the tube): risk after **PID/prior ectopic/tubal surgery**. **Amenorrhoea + pelvic pain + bleeding**; **β-hCG rises abnormally (sub-optimal doubling)** with an empty uterus on ultrasound. A ruptured ectopic is a surgical emergency.',
    '**Gestational diabetes (GDM):** placental hormones cause insulin resistance → hyperglycaemia; risks **macrosomia, neonatal hypoglycaemia, shoulder dystocia**. Screen with an **OGTT**; manage diet → insulin.',
    '**Antepartum haemorrhage:** **placenta praevia** (low placenta) = **painless** bleeding; **placental abruption** (premature separation) = **painful** bleeding with a tense/tender uterus (risk: hypertension, trauma, cocaine).',
    '**Other:** **hyperemesis gravidarum** (severe vomiting, ketosis; assoc. high hCG — molar/twins); **Rh isoimmunisation** (Rh-negative mother, Rh-positive fetus) → haemolytic disease of the newborn, prevented by **anti-D immunoglobulin**.',
  ],

  mechanism: {
    title: 'Placental/implantation problem → maternal-fetal disease',
    steps: [
      { id: 's1', label: 'Poor spiral-artery remodelling → placental ischaemia', emphasis: 'key' },
      { id: 's2', label: 'Anti-angiogenic factors → endothelial dysfunction → pre-eclampsia', emphasis: 'danger' },
      { id: 's3', label: 'Tubal implantation → ectopic (ampulla)', emphasis: 'key' },
      { id: 's4', label: 'Placental hormones → insulin resistance → GDM' },
      { id: 's5', label: 'Abnormal placentation/separation → APH' },
    ],
  },

  examFindings: [
    { sign: 'New hypertension + proteinuria after 20 weeks → pre-eclampsia', mechanism: 'Placental ischaemia + endothelial dysfunction', significance: 'key' },
    { sign: 'Painless antepartum bleeding → placenta praevia', mechanism: 'Low-lying placenta', significance: 'key' },
    { sign: 'Painful bleeding + tense tender uterus → abruption', mechanism: 'Premature placental separation', significance: 'key' },
    { sign: 'Sub-optimal β-hCG rise + empty uterus → ectopic', mechanism: 'Non-uterine implantation', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Pregnant woman, BP 160/110, 3+ proteinuria, headache', meaning: 'Pre-eclampsia → MgSO₄, antihypertensives, plan delivery' },
    { clue: 'Amenorrhoea, pelvic pain, β-hCG rising slowly, empty uterus on TVUS', meaning: 'Ectopic pregnancy' },
    { clue: 'Abnormal OGTT in the second half of pregnancy', meaning: 'Gestational diabetes' },
    { clue: 'Rh-negative mother of an Rh-positive baby', meaning: 'Give anti-D to prevent isoimmunisation' },
  ],

  treatment: [
    { logic: 'Pre-eclampsia: deliver + protect the brain', detail: 'Delivery is definitive; magnesium sulfate for seizure prophylaxis/treatment; control blood pressure.' },
    { logic: 'Prevent Rh disease', detail: 'Anti-D immunoglobulin to Rh-negative mothers at sensitising events and routinely antenatally.' },
  ],

  mnemonics: [
    { hook: 'Praevia = Painless; abruPtion = Painful', expansion: ['Praevia bleeds from a low placenta; abruption separates prematurely'] },
    { hook: 'Pre-eclampsia = Pressure + Protein after 20 weeks; MgSO₄ for seizures', expansion: ['HELLP = Haemolysis, Elevated LFTs, Low Platelets'] },
  ],

  traps: [
    {
      questionCategory: 'Painless vs painful APH',
      wrongInstinct: 'Painful antepartum bleeding indicates placenta praevia',
      rightAnswer: 'Placenta praevia is PAINLESS; painful bleeding with a tense uterus suggests abruption',
      why: 'Pain is the discriminator — praevia bleeds painlessly from a low placenta, whereas abruption causes painful bleeding from premature separation.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A woman at 34 weeks has BP 165/110, 3+ proteinuria and a headache. Besides antihypertensives, the key drug to prevent seizures is:',
      options: [
        { id: 'a', text: 'Phenytoin' },
        { id: 'b', text: 'Magnesium sulfate' },
        { id: 'c', text: 'Diazepam' },
        { id: 'd', text: 'Labetalol only' },
      ],
      answerId: 'b',
      explanation: 'Magnesium sulfate is the agent of choice for seizure prophylaxis and treatment in pre-eclampsia/eclampsia; delivery is the definitive treatment.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'The most common anatomical site of an ectopic pregnancy is the:',
      options: [
        { id: 'a', text: 'Ovary' },
        { id: 'b', text: 'Cervix' },
        { id: 'c', text: 'Ampulla of the fallopian tube' },
        { id: 'd', text: 'Abdominal cavity' },
      ],
      answerId: 'c',
      explanation: 'Most ectopic pregnancies implant in the fallopian tube, most commonly in the ampulla; PID and prior tubal damage are major risk factors.',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'The underlying placental abnormality in pre-eclampsia is best described as:',
      options: [
        { id: 'a', text: 'Excessive spiral-artery remodelling causing hyperperfusion' },
        { id: 'b', text: 'Inadequate spiral-artery remodelling causing placental ischaemia' },
        { id: 'c', text: 'Premature separation of the placenta' },
        { id: 'd', text: 'A low-lying placenta' },
      ],
      answerId: 'b',
      explanation: 'Failure of trophoblast to adequately remodel the spiral arteries leads to placental ischaemia and release of anti-angiogenic factors, causing the maternal endothelial dysfunction of pre-eclampsia.',
      tests: 'mechanism',
    },
  ],
};

export default hrp2PregnancyDisorders;
