import type { Lecture } from '../../lib/types';

export const posteriorPituitarySyndromes: Lecture = {
  id: 'posterior-pituitary-syndromes',
  title: 'Posterior Pituitary Syndromes: DI & SIADH',
  system: 'endocrine',
  source: 'L1 — Pituitary & Hypothalamus Pathology',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L1 Pituitary Pathology' },
    { kind: 'disease', label: 'DI / SIADH' },
    { kind: 'mechanism', label: 'ADH deficiency vs excess' },
    { kind: 'exam', label: 'Na⁺ & osmolality' },
  ],

  highYield: [
    '**ADH (vasopressin)** is made in the hypothalamus, stored/released by the posterior pituitary, and conserves water via renal V2 receptors. **Too little → diabetes insipidus; too much → SIADH.**',
    '**Diabetes insipidus = ADH deficiency or resistance → dilute polyuria.** Urine specific gravity **<1.006**, polydipsia (4–20 L). Because free water is lost, **serum Na⁺ and osmolality RISE (hypernatremia)**.',
    '**Central DI** = ADH deficiency (trauma, tumor, surgery, inflammation) — responds to **desmopressin**. **Nephrogenic DI** = renal tubules unresponsive to ADH — does NOT respond to desmopressin (water-deprivation test distinguishes them).',
    '**SIADH = ADH excess → too much free water reabsorbed → dilutional HYPONATREMIA.** Most common cause = **ectopic ADH from small-cell lung carcinoma**; also CNS disease, drugs, pulmonary disease. Concentrated urine despite low serum osmolality.',
    'Clinical danger of SIADH is **cerebral edema** from acute hyponatremia (confusion, seizures). DI danger is **hypernatremic dehydration** if the patient cannot access water.',
  ],

  mechanism: {
    title: 'ADH level sets the water balance',
    steps: [
      { id: 's1', label: 'Low ADH → kidney cannot reabsorb water → dilute polyuria', emphasis: 'key' },
      { id: 's2', label: 'DI: high serum Na⁺/osm, low urine osm' },
      { id: 's3', label: 'High ADH → retain free water → dilutional hyponatremia' },
      { id: 's4', label: 'SIADH: low serum Na⁺/osm, concentrated urine', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Massive dilute polyuria + hypernatremia after neurosurgery', mechanism: 'Central DI', significance: 'key' },
    { sign: 'Hyponatremia + concentrated urine + euvolemia in a lung-cancer patient', mechanism: 'SIADH (ectopic ADH)', significance: 'key' },
    { sign: 'Polyuria that does NOT improve with desmopressin', mechanism: 'Nephrogenic DI', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Serum Na⁺/osmolality vs urine osmolality', meaning: 'High serum + dilute urine = DI; low serum + concentrated urine = SIADH' },
    { clue: 'Water-deprivation test then desmopressin', meaning: 'Central DI concentrates after DDAVP; nephrogenic does not' },
    { clue: 'Chest imaging in SIADH', meaning: 'Hunt for small-cell lung carcinoma' },
  ],

  treatment: [
    { logic: 'Central DI: desmopressin (V2 agonist)', detail: 'Replaces ADH action.' },
    { logic: 'Nephrogenic DI: treat cause, thiazide, low salt', detail: 'Kidney is ADH-resistant.' },
    { logic: 'SIADH: fluid restriction ± vaptan/salt', detail: 'Correct Na⁺ slowly (avoid osmotic demyelination).' },
  ],

  mnemonics: [
    { hook: 'DI = Dilute urine, Increased sodium; SIADH = the opposite', expansion: ['DI hypernatremia', 'SIADH hyponatremia'] },
    { hook: 'SIADH → think small-cell lung cancer (ectopic ADH)', expansion: ['Also CNS/pulmonary/drugs'] },
  ],

  traps: [
    {
      questionCategory: 'Sodium direction in DI vs SIADH',
      wrongInstinct: 'Diabetes insipidus causes low sodium because of all that water loss',
      rightAnswer: 'DI raises serum sodium (free-water loss → hypernatremia); SIADH is the one that causes hyponatremia',
      why: 'The name "insipidus" refers to dilute urine, not dilute blood — the blood becomes concentrated.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with small-cell lung carcinoma has Na⁺ 122, serum osmolality 255, and an inappropriately concentrated urine while euvolemic. What is the mechanism?',
      options: [
        { id: 'a', text: 'ADH deficiency' },
        { id: 'b', text: 'Ectopic ADH secretion (SIADH)' },
        { id: 'c', text: 'Aldosterone excess' },
        { id: 'd', text: 'Renal ADH resistance' },
      ],
      answerId: 'b',
      explanation: 'SIADH — most often from ectopic ADH by small-cell lung carcinoma — causes water retention with dilutional hyponatremia, low serum osmolality, and inappropriately concentrated urine.',
      tests: 'exam',
    },
  ],
};

export default posteriorPituitarySyndromes;
