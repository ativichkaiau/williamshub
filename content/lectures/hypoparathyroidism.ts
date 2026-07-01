import type { Lecture } from '../../lib/types';

export const hypoparathyroidism: Lecture = {
  id: 'hypoparathyroidism',
  title: 'Hypoparathyroidism',
  system: 'endocrine',
  source: 'L6 — Thyroid & Parathyroid Pathology',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L6 Thyroid & Parathyroid' },
    { kind: 'disease', label: 'Hypoparathyroidism' },
    { kind: 'mechanism', label: 'PTH deficiency → hypocalcemia' },
    { kind: 'exam', label: 'Chvostek / Trousseau' },
  ],

  highYield: [
    '**Hypoparathyroidism = deficient PTH → hypocalcemia.** The **most common cause is surgical** (inadvertent removal/damage of the parathyroids during thyroid/neck surgery).',
    '**Congenital absence** occurs in **DiGeorge syndrome** (22q11 deletion → **thymic aplasia + cardiac defects + hypoparathyroidism**).',
    '**Autoimmune** hypoparathyroidism is part of **autoimmune polyendocrine syndrome type 1 (APS1)** — a mutation in the **autoimmune regulator (AIRE) gene** → the triad of **mucocutaneous candidiasis, hypoparathyroidism, and adrenal insufficiency**.',
    '**Chronic hypocalcemia = neuromuscular irritability**: circumoral numbness, distal paresthesias, **carpopedal spasm**, and the classic **Chvostek sign** (facial-nerve tap → twitch) and **Trousseau sign** (BP-cuff → carpal spasm); severe → seizures and raised ICP.',
    '**Cardiac/other**: **prolonged QT interval** (hypocalcemia) and dental abnormalities (enamel hypoplasia, failed eruption) when it occurs during development.',
  ],

  mechanism: {
    title: 'Low PTH → low calcium → neuromuscular excitability',
    steps: [
      { id: 's1', label: 'Parathyroids removed/absent/attacked → ↓PTH', emphasis: 'key' },
      { id: 's2', label: '↓PTH → hypocalcemia (± hyperphosphatemia)' },
      { id: 's3', label: 'Low Ca²⁺ → nerve/muscle hyperexcitability' },
      { id: 's4', label: 'Tetany, prolonged QT, seizures', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Perioral numbness, carpopedal spasm, positive Chvostek/Trousseau', mechanism: 'Hypocalcemic neuromuscular irritability', significance: 'key' },
    { sign: 'Hypocalcemia after recent thyroidectomy', mechanism: 'Surgical hypoparathyroidism', significance: 'key' },
    { sign: 'Prolonged QT on ECG', mechanism: 'Hypocalcemia', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Serum calcium (low) with low/inappropriately normal PTH', meaning: 'Confirms hypoparathyroidism' },
    { clue: 'Phosphate (high) and magnesium', meaning: 'Supports PTH deficiency; exclude hypomagnesemia' },
    { clue: 'ECG (QT interval)', meaning: 'Hypocalcemia effect' },
  ],

  treatment: [
    { logic: 'Calcium + active vitamin D (calcitriol)', detail: 'Replaces the missing PTH effect.' },
    { logic: 'Acute tetany: IV calcium gluconate', detail: 'For severe symptomatic hypocalcemia.' },
  ],

  mnemonics: [
    { hook: 'Hypocalcemia = CATs go numb: Convulsions, Arrhythmia (long QT), Tetany, numbness', expansion: ['Chvostek + Trousseau'] },
    { hook: 'DiGeorge = no thymus + no parathyroids + cardiac (22q11)', expansion: ['CATCH-22'] },
  ],

  traps: [
    {
      questionCategory: 'Most common cause of hypoparathyroidism',
      wrongInstinct: 'It must be an autoimmune or genetic disease',
      rightAnswer: 'The most common cause is SURGICAL — accidental removal or devascularization of the parathyroids during thyroid/neck surgery',
      why: 'Postoperative hypocalcemia after thyroidectomy is a classic and common scenario; autoimmune (APS1) and congenital (DiGeorge) causes are much rarer.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Two days after a total thyroidectomy, a patient develops perioral numbness and carpopedal spasm; tapping the facial nerve produces a twitch. What is the underlying disturbance?',
      options: [
        { id: 'a', text: 'Hypercalcemia' },
        { id: 'b', text: 'Hypocalcemia from surgical hypoparathyroidism' },
        { id: 'c', text: 'Hyperkalemia' },
        { id: 'd', text: 'Hypernatremia' },
      ],
      answerId: 'b',
      explanation: 'Inadvertent parathyroid injury during thyroidectomy causes hypoparathyroidism and hypocalcemia, producing neuromuscular irritability — perioral numbness, carpopedal spasm, and a positive Chvostek sign.',
      tests: 'exam',
    },
  ],
};

export default hypoparathyroidism;
