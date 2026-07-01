import type { Lecture } from '../../lib/types';

export const posteriorPituitaryDrugs: Lecture = {
  id: 'posterior-pituitary-drugs',
  title: 'Oxytocin & Vasopressin Drugs',
  system: 'endocrine',
  source: 'L2 — Pituitary & Hypothalamic Drugs',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L2 Pituitary Drugs' },
    { kind: 'treatment', label: 'Oxytocin / vasopressin' },
    { kind: 'mechanism', label: 'V1 / V2 / oxytocin receptors' },
    { kind: 'exam', label: 'Desmopressin / vaptans' },
  ],

  highYield: [
    '**Oxytocin** contracts uterine smooth muscle and drives **milk letdown** (myoepithelial contraction). Uses: **induction/augmentation of labor** and **prevention/treatment of postpartum hemorrhage**. Excess → fetal distress, placental abruption, uterine rupture. **Atosiban** = oxytocin-receptor antagonist for **tocolysis** (preterm labor).',
    '**Vasopressin (ADH)** acts on **three G-protein receptors: V1** (vascular smooth muscle → vasoconstriction), **V2** (renal collecting duct → antidiuresis/water reabsorption), **V3** (central).',
    '**Desmopressin (DDAVP) = selective V2 agonist** — treats **central diabetes insipidus** (and von Willebrand/hemophilia A, nocturnal enuresis). Overdose → **hyponatremia, headache, seizures**.',
    '**Vasopressin-receptor antagonists ("vaptans"): conivaptan (V1a/V2), tolvaptan (V2)** → increase free-water excretion (aquaresis) to treat **hyponatremia/SIADH** in hospitalized patients.',
    'Because desmopressin only works via V2, it corrects **central** DI but **not nephrogenic** DI (tubules are resistant) — a useful diagnostic and therapeutic distinction.',
  ],

  mechanism: {
    title: 'Agonize or block the posterior-pituitary receptors',
    steps: [
      { id: 's1', label: 'Oxytocin → uterine contraction + milk letdown', emphasis: 'key' },
      { id: 's2', label: 'Atosiban blocks oxytocin receptor → tocolysis' },
      { id: 's3', label: 'Desmopressin (V2 agonist) → antidiuresis (central DI)' },
      { id: 's4', label: 'Vaptans block V2 → aquaresis for SIADH/hyponatremia', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Oxytocin infusion for labor induction / postpartum hemorrhage', mechanism: 'Uterine smooth-muscle contraction', significance: 'key' },
    { sign: 'Desmopressin corrects polyuria in central DI but not nephrogenic', mechanism: 'Selective V2 agonist; nephrogenic tubules are resistant', significance: 'key' },
    { sign: 'Tolvaptan/conivaptan raising serum Na⁺ in SIADH', mechanism: 'V2 blockade → free-water excretion', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Response to desmopressin in the water-deprivation test', meaning: 'Central DI concentrates urine; nephrogenic does not' },
    { clue: 'Serial serum Na⁺ on a vaptan', meaning: 'Avoid overly rapid correction (osmotic demyelination)' },
  ],

  treatment: [
    { logic: 'Central DI: desmopressin', detail: 'Replaces V2 action.' },
    { logic: 'SIADH/euvolemic hyponatremia: fluid restriction ± vaptan', detail: 'Correct sodium slowly.' },
    { logic: 'Labor/PPH: oxytocin; preterm labor: atosiban', detail: 'Opposite uterine actions.' },
  ],

  mnemonics: [
    { hook: 'V2 = water (kidney); V1 = vessels (vasoconstriction)', expansion: ['Desmopressin is V2-selective'] },
    { hook: 'Vaptans "tap out" water → treat SIADH', expansion: ['Conivaptan, tolvaptan'] },
  ],

  traps: [
    {
      questionCategory: 'Desmopressin in nephrogenic DI',
      wrongInstinct: 'Give desmopressin for any diabetes insipidus',
      rightAnswer: 'Desmopressin works only in CENTRAL DI; nephrogenic DI is ADH-resistant and needs cause removal, thiazide, and salt restriction',
      why: 'The defect in nephrogenic DI is downstream of the V2 receptor, so a V2 agonist has little effect.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A hospitalized patient with SIADH and symptomatic hyponatremia is not improving with fluid restriction. Which drug promotes free-water excretion by blocking renal V2 receptors?',
      options: [
        { id: 'a', text: 'Desmopressin' },
        { id: 'b', text: 'Tolvaptan' },
        { id: 'c', text: 'Oxytocin' },
        { id: 'd', text: 'Octreotide' },
      ],
      answerId: 'b',
      explanation: 'Vaptans (tolvaptan, conivaptan) block V2 receptors to cause aquaresis, raising serum sodium in SIADH. Desmopressin is a V2 agonist and would worsen hyponatremia.',
      tests: 'exam',
    },
  ],
};

export default posteriorPituitaryDrugs;
