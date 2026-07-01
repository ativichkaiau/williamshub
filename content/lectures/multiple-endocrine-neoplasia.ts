import type { Lecture } from '../../lib/types';
import { MEN_SYNDROMES } from '../../lib/figures';

export const multipleEndocrineNeoplasia: Lecture = {
  id: 'multiple-endocrine-neoplasia',
  title: 'Multiple Endocrine Neoplasia (MEN)',
  system: 'endocrine',
  source: 'L3 — Adrenal Pathology & MEN',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L3 Adrenal Pathology' },
    { kind: 'disease', label: 'MEN syndromes' },
    { kind: 'mechanism', label: 'Inherited multi-gland tumors' },
    { kind: 'exam', label: 'MEN1 / RET' },
  ],

  highYield: [
    '**MEN = inherited (autosomal dominant) syndromes with proliferative lesions (hyperplasia → adenoma → carcinoma) in multiple endocrine organs.** Tumors occur at a **younger age**, are often **multifocal/bilateral**, and are more aggressive/recurrent than sporadic ones.',
    '**MEN 1 (Wermer) = the 3 P’s: Parathyroid (primary hyperparathyroidism, usually first), Pancreas (neuroendocrine tumors — gastrinoma/insulinoma), Pituitary (adenoma, often prolactinoma).** Gene = **MEN1 tumor suppressor** (menin).',
    '**MEN 2A (Sipple): Medullary thyroid carcinoma + Pheochromocytoma + Parathyroid hyperplasia.** Gene = **RET proto-oncogene**.',
    '**MEN 2B: Medullary thyroid carcinoma + Pheochromocytoma + Mucosal/GI neuromas + marfanoid habitus — NO parathyroid disease.** Also **RET**. **MEN 4** resembles MEN 1 (gene **CDKN1B**).',
    '**Medullary thyroid carcinoma is common to both MEN 2A and 2B** → RET-carriers get **prophylactic thyroidectomy**. Always screen for/rule out pheochromocytoma before any surgery in a MEN 2 patient.',
  ],

  mechanism: {
    title: 'One germline mutation → tumors across several endocrine glands',
    steps: [
      { id: 's1', label: 'MEN1 mutation → 3 P’s (parathyroid, pancreas, pituitary)', emphasis: 'key' },
      { id: 's2', label: 'RET mutation → MEN 2A/2B (medullary thyroid + pheo)' },
      { id: 's3', label: 'MEN 2B adds mucosal neuromas + marfanoid, no parathyroid' },
      { id: 's4', label: 'RET carrier → prophylactic thyroidectomy', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Hypercalcemia + gastrinoma + prolactinoma in one patient', mechanism: 'MEN 1 (3 P’s)', significance: 'key' },
    { sign: 'Medullary thyroid carcinoma + parathyroid hyperplasia', mechanism: 'MEN 2A → look for pheochromocytoma next', significance: 'key' },
    { sign: 'Mucosal neuromas + marfanoid body + medullary thyroid ca', mechanism: 'MEN 2B', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Germline testing: MEN1 vs RET', meaning: 'Identifies syndrome and at-risk relatives' },
    { clue: 'Serum calcium/PTH, calcitonin, plasma metanephrines', meaning: 'Screen the component tumors' },
    { clue: 'Rule out pheochromocytoma before surgery', meaning: 'Prevents intra-op catecholamine crisis' },
  ],

  treatment: [
    { logic: 'Prophylactic/early total thyroidectomy in RET carriers', detail: 'Medullary thyroid ca is the lethal component.' },
    { logic: 'Resect functioning tumors; treat pheo (α then β block) first', detail: 'Sequence matters.' },
  ],

  mnemonics: [
    { hook: 'MEN 1 = 3 P’s (Parathyroid, Pancreas, Pituitary); MEN1 gene', expansion: ['Wermer'] },
    { hook: 'MEN 2 = RET; 2A has parathyroid, 2B swaps it for neuromas + marfanoid', expansion: ['Both: medullary thyroid + pheo'] },
  ],

  traps: [
    {
      questionCategory: 'Next tumor to look for after medullary thyroid ca + parathyroid disease',
      wrongInstinct: 'Order a pituitary MRI for a prolactinoma',
      rightAnswer: 'This is MEN 2A (RET) — screen for PHEOCHROMOCYTOMA (plasma metanephrines) before any surgery; prolactinoma belongs to MEN 1',
      why: 'Missing a coexisting pheochromocytoma risks a lethal intra-operative catecholamine crisis.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 40-year-old man has a thyroidectomy showing medullary thyroid carcinoma, plus parathyroid hyperplasia. Which tumor should be excluded next, and what gene is implicated?',
      options: [
        { id: 'a', text: 'Insulinoma; MEN1 gene' },
        { id: 'b', text: 'Pheochromocytoma; RET proto-oncogene' },
        { id: 'c', text: 'Prolactinoma; MEN1 gene' },
        { id: 'd', text: 'Mucosal neuroma; CDKN1B' },
      ],
      answerId: 'b',
      explanation: 'Medullary thyroid carcinoma + parathyroid hyperplasia is MEN 2A (RET proto-oncogene); a pheochromocytoma must be excluded before surgery. Prolactinoma/insulinoma belong to MEN 1.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'MEN syndromes compared', svg: MEN_SYNDROMES, caption: 'MEN 1 = 3 P’s (MEN1 gene); MEN 2A/2B = RET, both with medullary thyroid carcinoma + pheochromocytoma.' },
  ],
};

export default multipleEndocrineNeoplasia;
