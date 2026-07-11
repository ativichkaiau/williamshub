import type { Lecture } from '../../lib/types';

export const hrp2LabourInductionTocolysis: Lecture = {
  id: 'hrp2-labour-induction-tocolysis',
  title: 'Labour Induction & Tocolysis',
  system: 'repro',
  source: 'L17 — Drugs Affecting Uterine Contraction',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'L17 Uterine Drugs' },
    { kind: 'disease', label: 'Induction · preterm labour' },
    { kind: 'mechanism', label: 'Ripen vs relax' },
    { kind: 'treatment', label: 'Prostaglandin · oxytocin · nifedipine' },
  ],

  highYield: [
    '**Induction of labour** starts with **cervical ripening** — **prostaglandins (PGE₂/misoprostol)** or a **mechanical (balloon)** method — then **oxytocin** infusion + **amniotomy** to establish contractions. The **Bishop score** assesses cervical favourability.',
    '**Complications of induction/augmentation:** **uterine hyperstimulation** (→ fetal distress; stop oxytocin ± tocolytic), and **uterine rupture** risk (esp. prostaglandins/oxytocin in a scarred uterus).',
    '**Tocolytics delay preterm labour ~48 h** to allow **antenatal corticosteroids** (fetal lung maturity) ± **magnesium sulfate** (fetal neuroprotection < 32 weeks) and transfer: **nifedipine** (CCB), **atosiban** (oxytocin-receptor antagonist), **indomethacin** (NSAID — early gestation only; premature ductus closure/oligohydramnios), **β2-agonists**.',
    '**Contraindications matter:** tocolysis is **not** used when continuing the pregnancy is dangerous (chorioamnionitis, severe pre-eclampsia, fetal death, significant abruption). Uterotonics vs tocolytics = **speed up vs slow down** uterine activity.',
  ],

  mechanism: {
    title: 'Ripen → contract (induce), or relax (tocolysis for steroids)',
    steps: [
      { id: 's1', label: 'Cervical ripening: prostaglandin or balloon', emphasis: 'key' },
      { id: 's2', label: 'Oxytocin ± amniotomy → contractions', emphasis: 'key' },
      { id: 's3', label: 'Watch for hyperstimulation / rupture', emphasis: 'danger' },
      { id: 's4', label: 'Tocolysis buys ~48 h for antenatal steroids', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Prostaglandins ripen the cervix before oxytocin', mechanism: 'Cervical priming', significance: 'key' },
    { sign: 'Uterine hyperstimulation → fetal distress', mechanism: 'Excess uterotonic', significance: 'key' },
    { sign: 'Tocolysis enables antenatal corticosteroids', mechanism: 'Fetal lung maturation', significance: 'key' },
    { sign: 'Indomethacin risks premature ductus closure', mechanism: 'Prostaglandin inhibition', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Post-dates pregnancy needing induction, unfavourable cervix', meaning: 'Cervical ripening (prostaglandin/balloon) then oxytocin' },
    { clue: 'Preterm labour at 29 weeks', meaning: 'Tocolytic + antenatal steroids (± MgSO₄ for neuroprotection)' },
    { clue: 'Excessive contractions with fetal heart-rate decelerations on oxytocin', meaning: 'Uterine hyperstimulation — stop oxytocin ± tocolytic' },
    { clue: 'Preterm labour with maternal fever and uterine tenderness', meaning: 'Chorioamnionitis — do NOT tocolyse; deliver' },
  ],

  treatment: [
    { logic: 'Induction sequence', detail: 'Ripen the cervix, then oxytocin + amniotomy; monitor for hyperstimulation, especially in a scarred uterus.' },
    { logic: 'Tocolysis to enable steroids', detail: 'Nifedipine or atosiban to delay preterm delivery ~48 h for antenatal corticosteroids and, if < 32 weeks, magnesium sulfate.' },
  ],

  mnemonics: [
    { hook: 'Ripen (prostaglandin) → Contract (oxytocin) to induce; Relax (tocolytic) to delay', expansion: ['Tocolysis = time for steroids'] },
  ],

  traps: [
    {
      questionCategory: 'When not to tocolyse',
      wrongInstinct: 'Preterm labour should always be stopped with tocolytics',
      rightAnswer: 'Tocolysis is contraindicated when continuing the pregnancy is dangerous (chorioamnionitis, severe pre-eclampsia, significant abruption, fetal death)',
      why: 'The purpose is to buy time for steroids/transfer; if intrauterine conditions are hazardous, delivery is safer than delay.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Before an oxytocin infusion for induction of labour in a woman with an unfavourable cervix, the first step is usually:',
      options: [
        { id: 'a', text: 'Give a tocolytic' },
        { id: 'b', text: 'Cervical ripening with a prostaglandin or balloon' },
        { id: 'c', text: 'Immediate caesarean section' },
        { id: 'd', text: 'Ergometrine' },
      ],
      answerId: 'b',
      explanation: 'An unfavourable (low Bishop score) cervix is first ripened with a prostaglandin or mechanical (balloon) method before oxytocin and amniotomy.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'A tocolytic is given in preterm labour at 29 weeks mainly to:',
      options: [
        { id: 'a', text: 'Cure the cause of labour' },
        { id: 'b', text: 'Delay delivery to allow antenatal corticosteroids to work' },
        { id: 'c', text: 'Ripen the cervix' },
        { id: 'd', text: 'Increase contractions' },
      ],
      answerId: 'b',
      explanation: 'Tocolysis buys roughly 48 hours to administer antenatal corticosteroids for fetal lung maturity (and magnesium sulfate for neuroprotection) and arrange transfer.',
      tests: 'mechanism',
    },
  ],
};

export default hrp2LabourInductionTocolysis;
