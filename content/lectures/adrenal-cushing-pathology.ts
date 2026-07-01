import type { Lecture } from '../../lib/types';

export const adrenalCushingPathology: Lecture = {
  id: 'adrenal-cushing-pathology',
  title: 'Hypercortisolism: Causes & Adrenal Pathology',
  system: 'endocrine',
  source: 'L3 — Adrenal Pathology & MEN',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L3 Adrenal Pathology' },
    { kind: 'disease', label: 'Cushing syndrome' },
    { kind: 'mechanism', label: 'Cortisol excess' },
    { kind: 'exam', label: 'ACTH-dependent vs independent' },
  ],

  highYield: [
    '**Cushing syndrome = chronic glucocorticoid (cortisol) excess.** Sort causes by ACTH: **Exogenous (iatrogenic steroids) is the overall MOST COMMON cause.**',
    '**ACTH-DEPENDENT (high ACTH)**: **Cushing disease** = ACTH-secreting **pituitary (cortico­troph) adenoma** — the most common *endogenous* cause (usually a basophilic microadenoma, young women); or **ectopic ACTH** (small-cell lung carcinoma, carcinoid, medullary thyroid ca). Both drive **bilateral adrenal hyperplasia**.',
    '**ACTH-INDEPENDENT (low ACTH)**: a primary **adrenal neoplasm** (adenoma ~10% or carcinoma ~5%) or nodular hyperplasia autonomously makes cortisol → high cortisol **suppresses ACTH** → **atrophy of the adjacent/contralateral cortex**.',
    '**Adrenal cortical adenoma**: small (<2.5 cm), encapsulated, yellow (lipid-rich); "balloon cells"; rare mitoses. **Adrenal cortical carcinoma**: large (>20 cm/200 g), unencapsulated, necrosis/hemorrhage, vascular invasion, marked atypia — bimodal age, poor prognosis.',
    '**Clinical (from catabolism + fat redistribution)**: truncal obesity, **moon facies, buffalo hump**, wide purple **striae**, easy bruising/thin skin, proximal myopathy, **osteoporosis**, hyperglycemia (secondary diabetes), hypertension, immunosuppression, mood change; ACTH-dependent forms add androgen excess (hirsutism, acne).',
  ],

  mechanism: {
    title: 'Classify by ACTH; the adrenal morphology follows',
    steps: [
      { id: 's1', label: 'Exogenous steroids (MC) → bilateral cortical atrophy', emphasis: 'key' },
      { id: 's2', label: 'ACTH-dependent (pituitary/ectopic) → bilateral hyperplasia' },
      { id: 's3', label: 'ACTH-independent (adrenal tumor) → contralateral atrophy' },
      { id: 's4', label: 'Cortisol excess → catabolism, striae, osteoporosis', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Moon face, buffalo hump, purple abdominal striae, central obesity', mechanism: 'Cortisol-driven fat redistribution + collagen loss', significance: 'key' },
    { sign: 'Proximal muscle weakness + osteoporosis + easy bruising', mechanism: 'Glucocorticoid catabolic effect', significance: 'key' },
    { sign: 'Bilateral adrenal atrophy on a steroid-treated patient', mechanism: 'Exogenous glucocorticoid suppressing ACTH', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'History of exogenous steroids (oral prednisolone, herbal/creams)', meaning: 'Exclude iatrogenic cause FIRST' },
    { clue: 'Plasma ACTH (high vs low)', meaning: 'ACTH-dependent vs independent' },
    { clue: 'Adrenal imaging: bilateral hyperplasia vs unilateral mass', meaning: 'Localizes the source' },
  ],

  treatment: [
    { logic: 'Resect the source (pituitary or adrenal tumor)', detail: 'See the clinical Cushing lecture for the full workup.' },
    { logic: 'Taper exogenous steroids carefully', detail: 'Atrophic adrenals cannot respond acutely.' },
  ],

  mnemonics: [
    { hook: 'Cushing SYNDROME = any cause; Cushing DISEASE = pituitary ACTH adenoma', expansion: ['Disease is a subset of syndrome'] },
    { hook: 'ACTH-dependent → hyperplasia; ACTH-independent → contralateral atrophy', expansion: ['Cortisol feeds back on ACTH'] },
  ],

  traps: [
    {
      questionCategory: 'Cushing syndrome vs Cushing disease',
      wrongInstinct: 'Cushing syndrome and Cushing disease are the same thing',
      rightAnswer: 'Cushing SYNDROME is hypercortisolism from any cause; Cushing DISEASE specifically means an ACTH-secreting pituitary adenoma',
      why: 'Exam stems reward the distinction — "disease" points to the pituitary source, not iatrogenic or adrenal causes.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 55-year-old woman on long-term corticosteroids for rheumatoid arthritis develops central obesity, a moon face, and abdominal striae. What best explains her presentation?',
      options: [
        { id: 'a', text: 'Cushing disease' },
        { id: 'b', text: 'Exogenous (iatrogenic) Cushing syndrome' },
        { id: 'c', text: 'Adrenal carcinoma' },
        { id: 'd', text: 'Primary hyperaldosteronism' },
      ],
      answerId: 'b',
      explanation: 'Exogenous glucocorticoid therapy is the most common cause of Cushing syndrome; her ACTH and endogenous cortisol would be suppressed and the adrenals atrophic. "Cushing disease" is reserved for a pituitary ACTH adenoma.',
      tests: 'exam',
    },
  ],
};

export default adrenalCushingPathology;
