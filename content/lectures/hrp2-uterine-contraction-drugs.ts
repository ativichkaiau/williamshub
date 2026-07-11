import type { Lecture } from '../../lib/types';

export const hrp2UterineContractionDrugs: Lecture = {
  id: 'hrp2-uterine-contraction-drugs',
  title: 'Drugs Affecting Uterine Contraction',
  system: 'repro',
  source: 'L17 — Drugs Affecting Uterine Contraction',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'L17 Uterine Drugs' },
    { kind: 'disease', label: 'Induction · PPH · preterm labour' },
    { kind: 'mechanism', label: 'Oxytocics vs tocolytics' },
    { kind: 'treatment', label: 'Oxytocin · ergometrine · nifedipine' },
  ],

  highYield: [
    '**Oxytocics (increase contraction)** — for **induction/augmentation of labour** and **postpartum haemorrhage (PPH)**: **oxytocin** (first-line; rhythmic contractions; watch water retention/hypotension), **ergometrine** (sustained tonic contraction — **avoid in hypertension/pre-eclampsia**, causes vasoconstriction/vomiting), and **prostaglandins** (**misoprostol/PGE**, also **cervical ripening**).',
    '**Prostaglandins ripen the cervix and contract the uterus** → cervical priming for induction, medical abortion (with mifepristone), and PPH; **carboprost (PGF2α)** for refractory PPH but **avoid in asthma** (bronchospasm).',
    '**PPH first-line = oxytocin**; escalate to **ergometrine** (not if hypertensive) then **carboprost/misoprostol** — plus uterine massage and treating the cause (the “4 Ts”: **Tone, Trauma, Tissue, Thrombin**; **atony** = commonest).',
    '**Tocolytics (suppress contraction)** — to delay **preterm labour** (buy ~48 h for **steroids** for fetal lung maturity ± transfer): **nifedipine** (CCB), **atosiban** (oxytocin-receptor antagonist), **β2-agonists (terbutaline)**, **indomethacin** (NSAID — early gestation only; risk of premature ductus closure/oligohydramnios), **magnesium sulfate** (also fetal neuroprotection).',
    '**The core distinction:** **too little contraction after birth → oxytocics** (stop bleeding); **too much contraction before term → tocolytics** (delay delivery). Ergometrine and prostaglandins have important contraindications (hypertension; asthma).',
  ],

  mechanism: {
    title: 'Drive or dampen uterine smooth-muscle contraction',
    steps: [
      { id: 's1', label: 'Oxytocin → rhythmic contractions (induction, PPH)', emphasis: 'key' },
      { id: 's2', label: 'Ergometrine → sustained tonic contraction (avoid if hypertensive)', emphasis: 'key' },
      { id: 's3', label: 'Prostaglandins → cervical ripening + contraction' },
      { id: 's4', label: 'Tocolytics (nifedipine, atosiban) relax the uterus', emphasis: 'key' },
      { id: 's5', label: 'Delay preterm labour to give antenatal steroids', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'PPH first-line = oxytocin', mechanism: 'Rapid uterine contraction to stop bleeding', significance: 'key' },
    { sign: 'Avoid ergometrine in hypertension/pre-eclampsia', mechanism: 'Vasoconstrictor → worsens BP', significance: 'key' },
    { sign: 'Avoid carboprost (PGF2α) in asthma', mechanism: 'Bronchospasm', significance: 'key' },
    { sign: 'Tocolysis buys time for antenatal corticosteroids', mechanism: 'Fetal lung maturation', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Post-delivery atonic uterus with heavy bleeding', meaning: 'Oxytocin first; then ergometrine (if not hypertensive), then prostaglandin' },
    { clue: 'PPH in a woman with severe pre-eclampsia', meaning: 'Avoid ergometrine — use oxytocin/prostaglandins' },
    { clue: 'Preterm labour at 30 weeks', meaning: 'Tocolytic (nifedipine/atosiban) + antenatal steroids' },
    { clue: 'Refractory PPH in an asthmatic', meaning: 'Avoid carboprost (bronchospasm) — use alternatives' },
  ],

  treatment: [
    { logic: 'PPH stepwise', detail: 'Uterine massage + oxytocin → ergometrine (if normotensive) → carboprost/misoprostol; address the 4 Ts.' },
    { logic: 'Preterm labour', detail: 'Tocolysis (nifedipine/atosiban) to allow antenatal corticosteroids and, before 32 weeks, magnesium sulfate for neuroprotection.' },
  ],

  mnemonics: [
    { hook: 'Oxytocics stop PPH (too little tone); Tocolytics stop preterm labour (too much tone)', expansion: ['4 Ts of PPH: Tone, Trauma, Tissue, Thrombin'] },
    { hook: 'Ergometrine — Enemy of hypertension; Carboprost — Careful in asthma', expansion: ['Both are oxytocic but have key contraindications'] },
  ],

  traps: [
    {
      questionCategory: 'Uterotonic choice in pre-eclampsia',
      wrongInstinct: 'Ergometrine is a safe first choice for PPH in a pre-eclamptic woman',
      rightAnswer: 'Ergometrine is contraindicated in hypertension/pre-eclampsia (vasoconstrictor) — use oxytocin/prostaglandins',
      why: 'Ergometrine raises blood pressure, so despite being a potent uterotonic it is avoided in hypertensive patients.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A woman with severe pre-eclampsia develops postpartum haemorrhage from uterine atony. Which uterotonic should be AVOIDED?',
      options: [
        { id: 'a', text: 'Oxytocin' },
        { id: 'b', text: 'Ergometrine' },
        { id: 'c', text: 'Misoprostol' },
        { id: 'd', text: 'Uterine massage' },
      ],
      answerId: 'b',
      explanation: 'Ergometrine is a vasoconstrictor that raises blood pressure and is contraindicated in hypertension/pre-eclampsia; oxytocin and prostaglandins are used instead.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'The main purpose of tocolysis in preterm labour is to:',
      options: [
        { id: 'a', text: 'Cure the cause of preterm labour' },
        { id: 'b', text: 'Delay delivery to allow antenatal corticosteroids to act' },
        { id: 'c', text: 'Increase uterine contractions' },
        { id: 'd', text: 'Ripen the cervix' },
      ],
      answerId: 'b',
      explanation: 'Tocolytics buy time (about 48 hours) to administer antenatal corticosteroids for fetal lung maturity and arrange transfer; they do not treat the underlying cause.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'The first-line uterotonic for the prevention and treatment of postpartum haemorrhage is:',
      options: [
        { id: 'a', text: 'Carboprost' },
        { id: 'b', text: 'Oxytocin' },
        { id: 'c', text: 'Nifedipine' },
        { id: 'd', text: 'Indomethacin' },
      ],
      answerId: 'b',
      explanation: 'Oxytocin is first-line for preventing and treating PPH from uterine atony; ergometrine and prostaglandins are added if bleeding continues.',
      tests: 'exam',
    },
  ],
};

export default hrp2UterineContractionDrugs;
