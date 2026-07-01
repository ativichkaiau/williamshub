import type { Lecture } from '../../lib/types';

export const prenatalScreeningDiagnosis: Lecture = {
  id: 'prenatal-screening-diagnosis',
  title: 'Prenatal Screening & Diagnosis',
  system: 'molecular',
  source: 'L12 — Prenatal Diagnosis',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Genetics' },
    { kind: 'lecture', label: 'L12 Prenatal Diagnosis' },
    { kind: 'disease', label: 'Aneuploidy screening' },
    { kind: 'mechanism', label: 'Screen vs diagnose' },
    { kind: 'exam', label: 'Amniocentesis / CVS / NIPT' },
  ],

  highYield: [
    '**Screening tests estimate risk (non-invasive, no fetal risk); diagnostic tests give a karyotype but are invasive** (small miscarriage risk). A high-risk screen is confirmed by a diagnostic test before any decision.',
    '**Serum screening**: **first-trimester combined test (11–13 wk) = nuchal translucency (NT) + PAPP-A + free β-hCG**; **second-trimester quadruple test = AFP, hCG, unconjugated estriol (uE3), inhibin A**. Down syndrome pattern: **↓AFP, ↓uE3, ↑hCG, ↑inhibin A**; low AFP also flags trisomy 18, high AFP flags neural tube/abdominal wall defects.',
    '**Cell-free fetal DNA (NIPT)** from maternal plasma (placental DNA) is a **highly sensitive screen** for trisomy 21/18/13 and sex-chromosome aneuploidy from ~10 weeks — but still a **screen**, so positives need confirmation.',
    '**Diagnostic tests**: **chorionic villus sampling (CVS) at 10–13 wk** (placental tissue, earlier but slightly higher loss/limb risk if very early), **amniocentesis at 15–20 wk** (amniotic fluid, ~0.1–0.3% loss), and **cordocentesis** (fetal blood, later). **Preimplantation genetic testing (PGT/PGD)** tests embryos before transfer in IVF.',
    '**Indications**: **advanced maternal age**, a **previous affected child/aneuploidy**, **known carrier couple** (e.g. thalassemia), a **positive serum/NIPT screen**, or **abnormal ultrasound markers** (nuchal thickening, cystic hygroma, structural anomaly).',
  ],

  mechanism: {
    title: 'Screen the population → confirm the high-risk with a diagnostic test',
    steps: [
      { id: 's1', label: 'Serum/NT or NIPT → risk estimate (no fetal risk)', emphasis: 'key' },
      { id: 's2', label: 'High risk → diagnostic karyotype' },
      { id: 's3', label: 'CVS (10–13 wk) or amniocentesis (15–20 wk)' },
      { id: 's4', label: 'Invasive tests carry a small miscarriage risk', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Quad screen: ↓AFP, ↓uE3, ↑hCG, ↑inhibin A', mechanism: 'Down syndrome risk pattern', significance: 'key' },
    { sign: 'Elevated maternal serum AFP', mechanism: 'Neural tube / abdominal wall defect', significance: 'key' },
    { sign: 'Positive NIPT for trisomy 21', mechanism: 'Screen — confirm with amniocentesis/CVS', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'First-trimester NT + PAPP-A + β-hCG', meaning: 'Early aneuploidy risk' },
    { clue: 'cfDNA (NIPT)', meaning: 'Sensitive screen; not diagnostic' },
    { clue: 'Amniocentesis / CVS karyotype', meaning: 'Definitive diagnosis' },
  ],

  treatment: [
    { logic: 'Confirm a positive screen before counseling', detail: 'Never act on a screen alone.' },
    { logic: 'Offer PGT to at-risk couples using IVF', detail: 'Selects unaffected embryos before implantation.' },
  ],

  mnemonics: [
    { hook: 'Down quad screen: hCG & inhibin UP, AFP & estriol DOWN', expansion: ['↑hCG ↑inhibin, ↓AFP ↓uE3'] },
    { hook: 'CVS earlier (10–13 wk), amnio later (15–20 wk)', expansion: ['Screen ≠ diagnose'] },
  ],

  traps: [
    {
      questionCategory: 'Acting on a screening result',
      wrongInstinct: 'A positive NIPT or quad screen confirms fetal Down syndrome',
      rightAnswer: 'These are SCREENS — a positive result raises risk and must be confirmed by a diagnostic test (amniocentesis or CVS karyotype) before any irreversible decision',
      why: 'Screening tests have false positives; a definitive karyotype is required to diagnose aneuploidy.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A pregnant woman at 12 weeks has a positive cell-free DNA (NIPT) result for trisomy 21. What is the appropriate next step?',
      options: [
        { id: 'a', text: 'Proceed directly to a decision based on the NIPT' },
        { id: 'b', text: 'Confirm with a diagnostic test such as CVS or amniocentesis' },
        { id: 'c', text: 'Repeat the quad screen only' },
        { id: 'd', text: 'No further testing is needed' },
      ],
      answerId: 'b',
      explanation: 'NIPT is a highly sensitive screen but not diagnostic; a positive result should be confirmed with an invasive diagnostic test (CVS or amniocentesis) that provides a fetal karyotype.',
      tests: 'exam',
    },
  ],
};

export default prenatalScreeningDiagnosis;
