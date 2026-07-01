import type { Lecture } from '../../lib/types';

export const iodideRadioiodineThyrotoxicosis: Lecture = {
  id: 'iodide-radioiodine-thyrotoxicosis',
  title: 'Iodide, Radioiodine & Thyrotoxicosis Adjuncts',
  system: 'endocrine',
  source: 'L8 — Drugs Used in Thyroid Diseases',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L8 Thyroid Drugs' },
    { kind: 'treatment', label: 'Iodide / radioactive iodine' },
    { kind: 'mechanism', label: 'Release block vs gland ablation' },
    { kind: 'exam', label: 'Thioamide before iodide' },
  ],

  highYield: [
    'High-dose **iodide** (Lugol solution or SSKI) rapidly inhibits iodide handling, organification/coupling, and especially **thyroid-hormone release**; it also reduces gland size and vascularity. Improvement begins in **2-7 days**.',
    'Iodide is temporary therapy because its effect lasts only about **2-8 weeks** and withdrawal may cause severe rebound. Uses: **thyroid storm**, short preoperative preparation, and protection after radioactive-iodine exposure.',
    '**Give the thioamide before iodide.** Giving iodide first can provide substrate to the gland and interfere with subsequent control. Iodide also reduces radioactive-iodine uptake, so avoid it before radioiodine therapy.',
    '**Radioactive iodine-131** is orally absorbed, concentrated by the thyroid, and emits beta radiation that destroys tissue. Onset is **6-12 weeks**, maximal effect 3-6 months, and delayed hypothyroidism is common.',
    'Radioiodine crosses the placenta and enters breast milk, so it is **contraindicated in pregnancy and breastfeeding**. Adjuncts control peripheral effects: **propranolol** relieves adrenergic symptoms and at high dose reduces T4 -> T3; glucocorticoids also reduce conversion; diltiazem is an alternative when beta blockade is unsuitable.',
  ],

  mechanism: {
    title: 'Rapid temporary block versus delayed definitive ablation',
    steps: [
      { id: 's1', label: 'Thioamide blocks new hormone synthesis first', emphasis: 'key' },
      { id: 's2', label: 'Then iodide rapidly blocks release and reduces vascularity' },
      { id: 's3', label: 'Beta-blocker / steroid controls peripheral thyrotoxicosis' },
      { id: 's4', label: 'I-131 ablates thyroid over weeks -> hypothyroidism risk', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Thioamide followed by iodide in thyroid storm', mechanism: 'Synthesis must be blocked before the iodide load', significance: 'key' },
    { sign: 'Reduced goiter vascularity before surgery', mechanism: 'Short-course high-dose iodide', significance: 'supportive' },
    { sign: 'Late hypothyroidism after definitive hyperthyroidism therapy', mechanism: 'Expected common consequence of I-131 ablation', significance: 'key' },
  ],

  investigations: [
    { clue: 'Pregnancy/breastfeeding status before radioiodine', meaning: 'Absolute safety screen' },
    { clue: 'Thyroid function after I-131', meaning: 'Track delayed response and emerging hypothyroidism' },
    { clue: 'Heart rate and ECG during symptomatic treatment', meaning: 'Guide beta-blocker or calcium-channel blocker use' },
  ],

  treatment: [
    { logic: 'In storm: thioamide -> iodide, plus symptom/peripheral control', detail: 'The sequence prevents iodide from fueling new synthesis.' },
    { logic: 'Use iodide only as short-term therapy', detail: 'Escape and rebound make it unsuitable as chronic monotherapy.' },
    { logic: 'Use I-131 for definitive ablation when appropriate', detail: 'Counsel about delayed effect and likely hypothyroidism.' },
  ],

  mnemonics: [
    { hook: 'Block before you Load', expansion: ['Thioamide before iodide'] },
    { hook: 'Iodide is Immediate but Interim; I-131 is late and Lasting', expansion: ['Days versus weeks to months'] },
  ],

  traps: [
    {
      questionCategory: 'Drug sequence in thyroid storm',
      wrongInstinct: 'Give iodide first because it acts fastest',
      rightAnswer: 'Give a thioamide first, then iodide after synthesis is blocked',
      why: 'The fast drug is not automatically the first drug: iodide loading before synthesis blockade can worsen hormone production.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which is the correct sequence for thioamide and iodide during treatment of thyroid storm?',
      options: [
        { id: 'a', text: 'Iodide first, then thioamide' },
        { id: 'b', text: 'Thioamide first, then iodide' },
        { id: 'c', text: 'Radioiodine first, then iodide' },
        { id: 'd', text: 'Either sequence is equivalent' },
      ],
      answerId: 'b',
      explanation: 'Block new hormone synthesis with a thioamide before giving iodide to block release; otherwise the iodide load may be used as substrate.',
      tests: 'treatment',
    },
  ],
};

export default iodideRadioiodineThyrotoxicosis;
