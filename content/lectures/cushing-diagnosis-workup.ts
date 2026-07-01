import type { Lecture } from '../../lib/types';
import { CUSHING_WORKUP } from '../../lib/figures';

export const cushingDiagnosisWorkup: Lecture = {
  id: 'cushing-diagnosis-workup',
  title: 'Cushing Syndrome: Diagnostic Workup',
  system: 'endocrine',
  source: 'L4 — Cushing Syndrome',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L4 Cushing Syndrome' },
    { kind: 'disease', label: 'Hypercortisolism' },
    { kind: 'mechanism', label: 'Dexamethasone suppression' },
    { kind: 'exam', label: 'ACTH + LDDST/HDDST' },
  ],

  highYield: [
    '**Cortisol is controlled by the HPA axis** (CRH → ACTH → cortisol) with a **diurnal rhythm** (highest in the morning, lowest at night) and is released with stress. The hallmark of Cushing pathology is **loss of the normal suppressibility (autonomy)**.',
    '**Step 1 — confirm hypercortisolism (need ≥2 positive of three)**: **24-h urinary free cortisol**, **late-night salivary cortisol** (loss of diurnal nadir), and the **1-mg overnight low-dose dexamethasone suppression test (LDDST)**. Always **exclude exogenous steroids first**.',
    '**Step 2 — localize with plasma ACTH**: **low ACTH = ACTH-independent (adrenal)**; **high ACTH = ACTH-dependent (pituitary or ectopic)**.',
    '**Step 3 — high-dose dexamethasone (HDDST) separates pituitary from ectopic**: a **pituitary adenoma still partially suppresses** (retains feedback) → cortisol falls; **ectopic ACTH does NOT suppress**. Inferior petrosal sinus sampling confirms a pituitary source.',
    '**The four patterns**: **Cushing disease** = ↑ACTH, LDDST no-suppress, **HDDST suppresses**; **Ectopic ACTH** = ↑↑ACTH, neither suppresses; **Adrenal** = ↓ACTH, neither suppresses; **Exogenous** = ↓cortisol + ↓ACTH, both suppress (secondary adrenal suppression).',
  ],

  mechanism: {
    title: 'Confirm cortisol excess → ACTH → high-dose dex to localize',
    steps: [
      { id: 's1', label: 'Confirm: UFC / late-night salivary / LDDST (≥2 positive)', emphasis: 'key' },
      { id: 's2', label: 'ACTH low → adrenal; ACTH high → pituitary or ectopic' },
      { id: 's3', label: 'HDDST suppresses → pituitary (Cushing disease)' },
      { id: 's4', label: 'HDDST fails to suppress + very high ACTH → ectopic', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Loss of diurnal rhythm — elevated late-night salivary cortisol', mechanism: 'Autonomous cortisol secretion', significance: 'key' },
    { sign: 'High ACTH, cortisol suppresses on HIGH-dose but not low-dose dex', mechanism: 'Cushing disease (pituitary adenoma retains feedback)', significance: 'key' },
    { sign: 'Very high ACTH, no suppression on either dose', mechanism: 'Ectopic ACTH (e.g. small-cell lung ca)', significance: 'key' },
  ],

  investigations: [
    { clue: '24-h urinary free cortisol / late-night salivary cortisol / 1-mg LDDST', meaning: 'Screening: confirm hypercortisolism' },
    { clue: 'Plasma ACTH', meaning: 'ACTH-dependent (high) vs independent (low)' },
    { clue: 'HDDST ± inferior petrosal sinus sampling', meaning: 'Pituitary vs ectopic source' },
  ],

  treatment: [
    { logic: 'Direct treatment to the localized source', detail: 'Managed in the companion "management" module.' },
    { logic: 'Exclude iatrogenic steroids before extensive testing', detail: 'Most common cause overall.' },
  ],

  mnemonics: [
    { hook: 'High-dose dex suppresses the Pituitary (Cushing disease); ectopic & adrenal don’t', expansion: ['Pituitary retains partial feedback'] },
    { hook: 'ACTH: low = adrenal, high = pituitary, very high = ectopic', expansion: ['Then HDDST'] },
  ],

  traps: [
    {
      questionCategory: 'Interpreting the high-dose dexamethasone test',
      wrongInstinct: 'If cortisol suppresses at all, the patient does not have Cushing syndrome',
      rightAnswer: 'Suppression on the HIGH-dose test points to a pituitary source (Cushing disease); ectopic and adrenal causes fail to suppress on both low and high doses',
      why: 'Pituitary adenomas retain partial glucocorticoid feedback, so they suppress at high dose — that is the whole point of the HDDST.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with Cushing syndrome has: 8 AM cortisol high, LDDST — not suppressed, HDDST — suppressed, ACTH — high. What is the source?',
      options: [
        { id: 'a', text: 'Adrenal adenoma' },
        { id: 'b', text: 'Cushing disease (pituitary adenoma)' },
        { id: 'c', text: 'Ectopic ACTH' },
        { id: 'd', text: 'Exogenous steroids' },
      ],
      answerId: 'b',
      explanation: 'High ACTH with suppression on high-dose (but not low-dose) dexamethasone indicates a pituitary ACTH adenoma — Cushing disease. Ectopic and adrenal causes fail to suppress on both; exogenous shows low ACTH and low cortisol.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Localizing Cushing syndrome', svg: CUSHING_WORKUP, caption: 'ACTH plus the dexamethasone response separates Cushing disease, ectopic ACTH, adrenal, and exogenous causes.' },
  ],
};

export default cushingDiagnosisWorkup;
