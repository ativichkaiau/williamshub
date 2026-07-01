import type { Lecture } from '../../lib/types';

export const thyroidHormoneReplacement: Lecture = {
  id: 'thyroid-hormone-replacement',
  title: 'Thyroid Hormone Replacement',
  system: 'endocrine',
  source: 'L8 — Drugs Used in Thyroid Diseases',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L8 Thyroid Drugs' },
    { kind: 'treatment', label: 'Levothyroxine' },
    { kind: 'mechanism', label: 'T4 replacement' },
    { kind: 'exam', label: 'Long half-life and interactions' },
  ],

  highYield: [
    '**Levothyroxine (L-T4) is the preparation of choice** for thyroid-hormone replacement and TSH-suppression therapy. It is stable, inexpensive, free of animal protein, and has a **6-8 day half-life**, allowing once-daily dosing.',
    'Give levothyroxine **before food**. Its long half-life means steady state takes about **5 weeks**, so reassess thyroid function and adjust the dose only after roughly **6-8 weeks**.',
    'Absorption falls with **food, iron, aluminum antacids, bile-acid sequestrants, phosphate binders, PPIs, raloxifene, and sucralfate**. Carbamazepine, phenytoin, and rifampin accelerate metabolism.',
    '**Liothyronine (L-T3)** is 3-4 times more potent but has a short half-life (~0.75-1 day), requires multiple daily doses, and has greater cardiotoxic risk. It is not routine replacement; limited uses include rapid, short-term therapy such as myxedema coma.',
    'Excess replacement produces **iatrogenic hyperthyroidism**, especially **atrial fibrillation in older adults** and **osteoporosis in postmenopausal women**. Desiccated thyroid and fixed T4:T3 liotrix are not preferred because they add variability or no clear benefit.',
  ],

  mechanism: {
    title: 'T4 replacement to stable euthyroidism',
    steps: [
      { id: 's1', label: 'Oral levothyroxine supplies stable circulating T4', emphasis: 'key' },
      { id: 's2', label: 'Peripheral tissues convert T4 to active T3' },
      { id: 's3', label: 'Negative feedback normalizes TSH' },
      { id: 's4', label: 'Excess dose -> thyrotoxicosis, AF, bone loss', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Palpitations or atrial fibrillation after dose escalation', mechanism: 'Excess thyroid-hormone replacement', significance: 'key' },
    { sign: 'Persistently high TSH despite reported adherence', mechanism: 'Food, iron, antacid, or sequestrant interference may reduce absorption', significance: 'key' },
    { sign: 'Fragility fracture in an over-replaced postmenopausal patient', mechanism: 'Chronic thyrotoxicosis accelerates bone loss', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'TSH (and free T4 when indicated) after 6-8 weeks', meaning: 'Judge the full effect of a dose change at steady state' },
    { clue: 'Medication and meal timing review', meaning: 'Find common absorption interactions' },
    { clue: 'ECG / bone-risk assessment in susceptible patients', meaning: 'Evaluate important over-replacement toxicity' },
  ],

  treatment: [
    { logic: 'Use once-daily levothyroxine before food', detail: 'Separate it from binding agents such as iron and antacids.' },
    { logic: 'Titrate slowly in older adults or cardiac disease', detail: 'T3-driven tachyarrhythmia and ischemia are the major concerns.' },
    { logic: 'Reserve liothyronine for selected rapid/short-term indications', detail: 'Its short half-life and cardiotoxicity make routine replacement unattractive.' },
  ],

  mnemonics: [
    { hook: 'L-T4 lasts Long', expansion: ['6-8 day half-life', 'Check the dose in 6-8 weeks'] },
    { hook: 'Too much thyroid: AF + fragile bones', expansion: ['Older heart', 'Postmenopausal skeleton'] },
  ],

  traps: [
    {
      questionCategory: 'Timing a levothyroxine dose adjustment',
      wrongInstinct: 'Increase the dose after a few days if TSH remains high',
      rightAnswer: 'Wait about 6-8 weeks after a dose change before interpreting the new steady-state thyroid function',
      why: 'Levothyroxine has a long half-life, so early testing can provoke unnecessary dose stacking and over-replacement.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient starts levothyroxine today. When should thyroid function usually be rechecked to guide dose adjustment?',
      options: [
        { id: 'a', text: 'Tomorrow' },
        { id: 'b', text: 'In 3 days' },
        { id: 'c', text: 'In 6-8 weeks' },
        { id: 'd', text: 'In 1 year' },
      ],
      answerId: 'c',
      explanation: 'The 6-8 day half-life of T4 means several weeks are needed to approach steady state; dose response is usually assessed after about 6-8 weeks.',
      tests: 'treatment',
    },
  ],
};

export default thyroidHormoneReplacement;
