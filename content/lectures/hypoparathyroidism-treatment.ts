import type { Lecture } from '../../lib/types';

export const hypoparathyroidismTreatment: Lecture = {
  id: 'hypoparathyroidism-treatment',
  title: 'Hypoparathyroidism: Recognition & Treatment',
  system: 'endocrine',
  source: 'L9 — Drugs Used in Parathyroid Diseases',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L9 Parathyroid Drugs' },
    { kind: 'disease', label: 'Hypoparathyroidism' },
    { kind: 'mechanism', label: 'Low PTH -> hypocalcemia' },
    { kind: 'exam', label: 'Tetany and IV calcium' },
  ],

  highYield: [
    'Hypoparathyroidism is PTH deficiency from surgical injury/removal, irradiation, infiltrative disease, autoimmune disease, congenital absence, or **DiGeorge syndrome**.',
    'The signature laboratory pattern is **low PTH, low total/ionized calcium, and high phosphate**.',
    'Hypocalcemic neuromuscular irritability causes **perioral numbness, paresthesia, carpopedal spasm, hyperreflexia, Chvostek sign, Trousseau sign, tetany, laryngospasm, and seizures**.',
    'Acute symptomatic hypocalcemia/tetany requires **slow IV 10% calcium gluconate** with monitoring. Chronic management uses calcium plus active vitamin D; avoid calcium-phosphate preparations because phosphate is already elevated.',
    'A **thiazide diuretic** may be used in selected patients to reduce urinary calcium excretion and limit hypercalciuria during chronic replacement.',
  ],

  mechanism: {
    title: 'PTH loss to neuromuscular irritability',
    steps: [
      { id: 's1', label: 'Parathyroid loss/dysfunction -> low PTH', emphasis: 'key' },
      { id: 's2', label: 'Reduced calcium conservation/activation + phosphate retention' },
      { id: 's3', label: 'Low calcium + high phosphate' },
      { id: 's4', label: 'Tetany, laryngospasm, or seizure', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Trousseau sign', mechanism: 'Carpal spasm after inflating a BP cuff above systolic pressure', significance: 'key' },
    { sign: 'Chvostek sign', mechanism: 'Facial-nerve hyperirritability in hypocalcemia', significance: 'supportive' },
    { sign: 'Laryngospasm, stridor, or seizure', mechanism: 'Severe hypocalcemic tetany', significance: 'key' },
  ],

  investigations: [
    { clue: 'Ionized/total calcium, phosphate, and PTH', meaning: 'Confirm low-PTH hypocalcemia' },
    { clue: 'ECG in symptomatic hypocalcemia', meaning: 'Assess QT prolongation and monitor IV calcium' },
    { clue: 'Urinary calcium during chronic therapy', meaning: 'Detect hypercalciuria and guide thiazide use' },
  ],

  treatment: [
    { logic: 'Give slow IV calcium gluconate for tetany or severe symptoms', detail: 'Monitor clinically and electrically.' },
    { logic: 'Use oral calcium plus active vitamin D chronically', detail: 'Replace the calcium/calcitriol effect lost with PTH.' },
    { logic: 'Add a thiazide for troublesome hypercalciuria', detail: 'Thiazides reduce urinary calcium excretion.' },
  ],

  mnemonics: [
    { hook: 'Low PTH: Calcium low, Phosphate high', expansion: ['Opposite directions'] },
    { hook: 'Tetany needs calcium Today', expansion: ['Slow IV calcium gluconate'] },
  ],

  traps: [
    {
      questionCategory: 'Emergency treatment of hypocalcemic tetany',
      wrongInstinct: 'Start oral calcium and wait for absorption',
      rightAnswer: 'Give slow IV calcium gluconate for immediate control of severe symptomatic hypocalcemia',
      why: 'Airway compromise, seizure, and arrhythmia make tetany an intravenous-calcium emergency.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient develops carpopedal spasm and stridor after thyroid surgery. Calcium is low and phosphate is high. What is the immediate treatment?',
      options: [
        { id: 'a', text: 'Slow IV calcium gluconate' },
        { id: 'b', text: 'IV bisphosphonate' },
        { id: 'c', text: 'Calcitonin' },
        { id: 'd', text: 'Cinacalcet' },
      ],
      answerId: 'a',
      explanation: 'Postoperative hypoparathyroidism can cause severe hypocalcemic tetany and laryngospasm; slow IV calcium gluconate is the immediate therapy.',
      tests: 'treatment',
    },
  ],
};

export default hypoparathyroidismTreatment;
