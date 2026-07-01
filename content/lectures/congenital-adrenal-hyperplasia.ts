import type { Lecture } from '../../lib/types';
import { ADRENAL_STEROIDOGENESIS } from '../../lib/figures';

export const congenitalAdrenalHyperplasia: Lecture = {
  id: 'congenital-adrenal-hyperplasia',
  title: 'Congenital Adrenal Hyperplasia (Adrenogenital Syndrome)',
  system: 'endocrine',
  source: 'L3 — Adrenal Pathology & MEN',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L3 Adrenal Pathology' },
    { kind: 'disease', label: 'CAH' },
    { kind: 'mechanism', label: 'Enzyme block → shunt' },
    { kind: 'exam', label: '21-hydroxylase deficiency' },
  ],

  highYield: [
    '**CAH = inherited deficiency of an adrenal cortisol-synthesis enzyme.** Low cortisol → **loss of negative feedback → ↑ACTH → adrenal hyperplasia**. **21-hydroxylase deficiency (CYP21A2), autosomal recessive, is by far the most common (~90%).**',
    'With 21-hydroxylase blocked, precursors **shunt into androgens** → **virilization**. Because the block is *before* both cortisol and aldosterone, the classic form loses **both**.',
    '**Salt-wasting ("classic," complete loss)**: ↓cortisol **and ↓aldosterone** + ↑androgen → neonatal **salt-wasting adrenal crisis** (hyponatremia, hyperkalemia, hypovolemic shock) plus ambiguous genitalia in females — life-threatening.',
    '**Simple virilizing** (partial): enough mineralocorticoid (ACTH compensation) but androgen excess → virilization without salt wasting. **Late-onset/non-classic** (mildest, most common overall): postpubertal **hirsutism, acne, irregular menses**.',
    '**Androgen excess signs**: female **clitoromegaly / ambiguous genitalia** (pseudohermaphroditism) in infants; males **precocious puberty**, penile enlargement; **early epiphyseal fusion → short adult stature**. ↑ACTH also causes **skin hyperpigmentation**.',
  ],

  mechanism: {
    title: '21-hydroxylase block → cortisol down, ACTH up, androgens shunted up',
    steps: [
      { id: 's1', label: '↓ 21-hydroxylase → ↓cortisol (± ↓aldosterone)', emphasis: 'key' },
      { id: 's2', label: '↓cortisol → ↑ACTH → bilateral adrenal hyperplasia' },
      { id: 's3', label: 'Precursors shunt to androgens → virilization' },
      { id: 's4', label: 'Complete loss → salt-wasting crisis in the newborn', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Newborn girl with ambiguous genitalia + salt-wasting crisis', mechanism: 'Classic salt-wasting 21-hydroxylase deficiency', significance: 'key' },
    { sign: 'Young child with precocious puberty and rapid growth then short stature', mechanism: 'Androgen excess → early epiphyseal fusion', significance: 'key' },
    { sign: 'Postpubertal woman with hirsutism, acne, oligomenorrhea', mechanism: 'Non-classic (late-onset) CAH', significance: 'supportive' },
  ],

  investigations: [
    { clue: '↑ 17-hydroxyprogesterone (the substrate proximal to the block)', meaning: 'Diagnostic of 21-hydroxylase deficiency' },
    { clue: 'Electrolytes: hyponatremia + hyperkalemia', meaning: 'Salt-wasting form' },
    { clue: 'Newborn screening', meaning: 'Detects classic CAH before crisis' },
  ],

  treatment: [
    { logic: 'Glucocorticoid replacement (suppresses ACTH → less androgen)', detail: 'Hydrocortisone.' },
    { logic: 'Add mineralocorticoid (fludrocortisone) in salt-wasting', detail: 'Plus salt supplementation in infants.' },
  ],

  mnemonics: [
    { hook: '21-hydroxylase deficiency: ↓salt, ↓sugar (cortisol), ↑sex (androgens)', expansion: ['Precursors shunt to androgens'] },
    { hook: 'CAH = most common cause of ambiguous genitalia in a genetic female', expansion: ['Newborn salt-wasting crisis'] },
  ],

  traps: [
    {
      questionCategory: 'Direction of androgens in 21-hydroxylase deficiency',
      wrongInstinct: 'An enzyme deficiency should lower all adrenal steroids including androgens',
      rightAnswer: 'Cortisol and aldosterone fall, but androgens RISE — blocked precursors are shunted into the intact androgen pathway, causing virilization',
      why: 'The block is upstream of cortisol/aldosterone but the androgen branch is open, so it is over-fed.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A newborn with ambiguous genitalia becomes hypotensive on day 5 with Na⁺ 122 and K⁺ 6.8. Markedly elevated 17-hydroxyprogesterone confirms the diagnosis. Which enzyme is deficient?',
      options: [
        { id: 'a', text: '11β-hydroxylase' },
        { id: 'b', text: '21-hydroxylase' },
        { id: 'c', text: '17α-hydroxylase' },
        { id: 'd', text: 'Aromatase' },
      ],
      answerId: 'b',
      explanation: '21-hydroxylase deficiency (CYP21A2) is the most common CAH: low cortisol and aldosterone (salt-wasting), androgen excess (virilization), and elevated 17-hydroxyprogesterone.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Steroidogenesis & the 21-hydroxylase block', svg: ADRENAL_STEROIDOGENESIS, caption: 'Blocking 21-hydroxylase drops aldosterone and cortisol while shunting precursors into androgens.' },
  ],
};

export default congenitalAdrenalHyperplasia;
