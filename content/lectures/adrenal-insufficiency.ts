import type { Lecture } from '../../lib/types';

export const adrenalInsufficiency: Lecture = {
  id: 'adrenal-insufficiency',
  title: 'Adrenal Insufficiency (Addison & Crisis)',
  system: 'endocrine',
  source: 'L3 — Adrenal Pathology & MEN',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L3 Adrenal Pathology' },
    { kind: 'disease', label: 'Adrenal insufficiency' },
    { kind: 'mechanism', label: 'Cortisol ± aldosterone loss' },
    { kind: 'exam', label: 'Addison / Waterhouse-Friderichsen' },
  ],

  highYield: [
    '**Primary adrenal insufficiency (Addison) = destruction of the adrenal cortex** → BOTH cortisol AND aldosterone fall, and **ACTH rises**. Symptoms appear only after ~90% is destroyed. **Autoimmune adrenalitis is the most common cause** (also TB, metastases, fungal).',
    '**Hyperpigmentation is the key primary-vs-secondary clue**: high ACTH comes from **POMC**, whose cleavage also yields **MSH** → skin/mucosal/palmar-crease pigmentation. **Secondary** insufficiency (pituitary/ACTH deficiency) has **NO hyperpigmentation** and **spares aldosterone**.',
    '**Labs of primary disease**: **hyponatremia, hyperkalemia, hypoglycemia**, ± metabolic acidosis; high ACTH with low cortisol that does not rise to exogenous ACTH. Secondary: low cortisol, low ACTH, **normal K⁺** (aldosterone intact via RAAS).',
    '**Acute adrenal crisis** = sudden cortisol/mineralocorticoid loss → **hypovolemic shock, hypoglycemia**. Triggers: **abrupt steroid withdrawal** (atrophic adrenals), stress on chronic insufficiency, or **massive adrenal hemorrhage**.',
    '**Waterhouse-Friderichsen syndrome** = **bilateral hemorrhagic adrenal necrosis**, classically from **Neisseria meningitidis** septicemia with DIC → purpura, rapid hypotension, shock (more common in children).',
  ],

  mechanism: {
    title: 'Where is the lesion → which hormones fall',
    steps: [
      { id: 's1', label: 'Primary: cortex destroyed → ↓cortisol +↓aldosterone, ↑ACTH', emphasis: 'key' },
      { id: 's2', label: '↑ACTH/POMC → ↑MSH → hyperpigmentation' },
      { id: 's3', label: 'Secondary: ↓ACTH → ↓cortisol, aldosterone spared, no pigment' },
      { id: 's4', label: 'Acute loss → hypovolemic shock (adrenal crisis)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Fatigue, weight loss, hyperpigmentation of palmar creases/oral mucosa, hypotension', mechanism: 'Primary (Addison) — high ACTH/MSH', significance: 'key' },
    { sign: 'Hyponatremia + hyperkalemia + hypoglycemia', mechanism: 'Combined cortisol + aldosterone deficiency', significance: 'key' },
    { sign: 'Meningococcemia with purpura, shock, and bilateral adrenal hemorrhage', mechanism: 'Waterhouse-Friderichsen syndrome', significance: 'key' },
  ],

  investigations: [
    { clue: '8 AM cortisol + ACTH; ACTH-stimulation (cosyntropin) test', meaning: 'Low cortisol; high ACTH = primary, low = secondary' },
    { clue: 'Electrolytes: hyperkalemia present?', meaning: 'Hyperkalemia points to primary (aldosterone loss)' },
    { clue: 'Metyrapone test (11-hydroxylase block)', meaning: 'Assesses HPA-axis reserve' },
  ],

  treatment: [
    { logic: 'Crisis: IV hydrocortisone + IV saline/glucose immediately', detail: 'Do not delay for test results.' },
    { logic: 'Chronic primary: hydrocortisone + fludrocortisone', detail: 'Replace both glucocorticoid and mineralocorticoid.' },
    { logic: 'Stress dosing during illness/surgery', detail: 'Increase glucocorticoid 2–3×.' },
  ],

  mnemonics: [
    { hook: 'Primary = Pigment + Potassium up (hyperkalemia)', expansion: ['Secondary spares both'] },
    { hook: 'Waterhouse-Friderichsen = Neisseria + bilateral adrenal hemorrhage', expansion: ['DIC, purpura, shock'] },
  ],

  traps: [
    {
      questionCategory: 'Primary vs secondary adrenal insufficiency',
      wrongInstinct: 'All adrenal insufficiency causes hyperpigmentation and hyperkalemia',
      rightAnswer: 'Only PRIMARY (Addison) does — high ACTH/MSH gives pigmentation and aldosterone loss gives hyperkalemia; SECONDARY (low ACTH) has neither',
      why: 'Aldosterone is RAAS-driven, so it is preserved in ACTH deficiency, and low ACTH cannot cause MSH-mediated pigmentation.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 35-year-old woman has fatigue, weight loss, BP 90/60, and hyperpigmentation of the palmar creases and oral mucosa. Which electrolyte/acid-base pattern is most consistent?',
      options: [
        { id: 'a', text: 'Hypernatremia, hypokalemia, alkalosis' },
        { id: 'b', text: 'Hyponatremia, hyperkalemia, normal-anion-gap metabolic acidosis' },
        { id: 'c', text: 'Hypernatremia, hyperkalemia, low-anion-gap acidosis' },
        { id: 'd', text: 'Hyponatremia, hypokalemia, high-anion-gap acidosis' },
      ],
      answerId: 'b',
      explanation: 'Primary adrenal insufficiency (Addison) loses both cortisol and aldosterone → hyponatremia, hyperkalemia, hypoglycemia, and a mild metabolic acidosis; hyperpigmentation reflects high ACTH/MSH.',
      tests: 'exam',
    },
  ],
};

export default adrenalInsufficiency;
