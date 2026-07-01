import type { Lecture } from '../../lib/types';

export const moodStabilizersBipolar: Lecture = {
  id: 'mood-stabilizers-bipolar',
  title: 'Mood Stabilizers & Bipolar Disorder',
  system: 'neuro',
  source: 'L17 — Antidepressants',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L17 Antidepressants' },
    { kind: 'disease', label: 'Bipolar disorder' },
    { kind: 'mechanism', label: 'Mood stabilization' },
    { kind: 'exam', label: 'Lithium' },
  ],

  highYield: [
    '**Bipolar disorder** (mania: elevated mood, ↓ need for sleep, grandiosity, impulsivity) is treated with **mood stabilizers**, NOT antidepressant monotherapy (which can precipitate a manic switch).',
    '**Lithium** (↓ IP₃/DAG, inhibits GSK-3) is first-line: **narrow therapeutic index** (keep <1.5 mEq/L). Adverse: **tremor, polyuria/polydipsia (nephrogenic DI), hypothyroidism, weight gain, renal impairment**; toxicity = nausea, ataxia, confusion. **Monitor lithium level, renal & thyroid function.**',
    '**Valproate** (↑ GABA, blocks Na⁺ channels): also for mania/migraine; adverse **weight gain, tremor, thrombocytopenia, hepatotoxicity, teratogenicity (neural tube defects)** — avoid in pregnancy.',
    '**Lamotrigine** (Na⁺ block, ↓ glutamate) — good for bipolar depression; risk = **serious rash / Stevens-Johnson syndrome** (titrate slowly).',
    '**Carbamazepine** (Na⁺ block): adverse **hyponatremia (SIADH), agranulocytosis, SJS (HLA-B*1502), and enzyme induction**.',
  ],

  mechanism: {
    title: 'Stabilize mood; avoid triggering mania',
    steps: [
      { id: 's1', label: 'Bipolar disorder (mania + depression)' },
      { id: 's2', label: 'Mood stabilizer (lithium / valproate / lamotrigine)', emphasis: 'key' },
      { id: 's3', label: 'Antidepressant alone can flip to mania', emphasis: 'danger' },
      { id: 's4', label: 'Monitor narrow-index/organ-toxic drugs' },
    ],
  },

  examFindings: [
    { sign: 'Tremor, polyuria, weight gain, hypothyroidism', mechanism: 'Chronic lithium', significance: 'key' },
    { sign: 'Nausea, ataxia, confusion, seizures', mechanism: 'Lithium toxicity', significance: 'key' },
    { sign: 'Serious rash on a mood stabilizer', mechanism: 'Lamotrigine (SJS)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Serum lithium level + renal/thyroid function', meaning: 'Narrow therapeutic index & organ effects' },
    { clue: 'LFTs, platelets on valproate', meaning: 'Hepatotoxicity, thrombocytopenia' },
    { clue: 'Pregnancy status (valproate)', meaning: 'Neural tube defect risk' },
  ],

  treatment: [
    { logic: 'Acute mania: lithium or valproate (± antipsychotic)', detail: 'Mood stabilizer, not antidepressant alone.' },
    { logic: 'Bipolar depression: lamotrigine / quetiapine', detail: 'Avoid antidepressant monotherapy.' },
    { logic: 'Lithium toxicity: stop drug, hydrate, dialysis if severe', detail: 'Monitor levels.' },
  ],

  mnemonics: [
    { hook: 'Lithium = narrow index; Tremor, Thyroid, Thirst (DI), renal', expansion: ['Monitor level/renal/thyroid'] },
    { hook: 'Bipolar mania → mood stabilizer, NOT an antidepressant alone', expansion: ['Antidepressant can flip to mania'] },
  ],

  traps: [
    {
      questionCategory: 'Treating bipolar depression',
      wrongInstinct: 'A patient with bipolar disorder who is depressed should be started on an SSRI as monotherapy',
      rightAnswer: 'Antidepressant monotherapy can precipitate a manic switch — bipolar disorder is managed with a mood stabilizer (e.g. lithium, lamotrigine, or an atypical antipsychotic)',
      why: 'Because the underlying disorder cycles into mania, giving an antidepressant alone can trigger or worsen manic episodes; mood stabilization is the foundation of treatment.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 28-year-old with a current manic episode (elevated mood, decreased need for sleep, grandiosity) and a prior depressive episode is diagnosed with bipolar I disorder. The most appropriate first-line pharmacotherapy is:',
      options: [
        { id: 'a', text: 'Fluoxetine' },
        { id: 'b', text: 'Amitriptyline' },
        { id: 'c', text: 'Lithium' },
        { id: 'd', text: 'Bupropion' },
      ],
      answerId: 'c',
      explanation: 'Acute mania in bipolar disorder is treated with a mood stabilizer such as lithium (or valproate, ± an antipsychotic); antidepressant monotherapy is avoided because it can precipitate mania.',
      tests: 'treatment',
    },
  ],
};

export default moodStabilizersBipolar;
