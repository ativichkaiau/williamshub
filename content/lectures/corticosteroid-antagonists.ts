import type { Lecture } from '../../lib/types';

export const corticosteroidAntagonists: Lecture = {
  id: 'corticosteroid-antagonists',
  title: 'Corticosteroid Antagonists',
  system: 'endocrine',
  source: 'L5 — Corticosteroids & Antagonists',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L5 Corticosteroids' },
    { kind: 'treatment', label: 'Steroidogenesis inhibitors' },
    { kind: 'mechanism', label: 'Block synthesis or receptor' },
    { kind: 'exam', label: 'Cushing medical therapy' },
  ],

  highYield: [
    '**Steroidogenesis inhibitors (block cortisol SYNTHESIS)** are the medical therapy for Cushing syndrome when surgery is not curative: **ketoconazole** (adverse effect: **hepatotoxicity**), **metyrapone** (blocks 11-hydroxylase; **safe in pregnancy**; adverse: dizziness, hirsutism), **etomidate** (IV, for severe/acute cases), and **aminoglutethimide** (for adrenocortical cancer).',
    '**Mifepristone = glucocorticoid-receptor antagonist** at high doses — used for Cushing syndrome from **ectopic ACTH**. Adverse effects: vaginal bleeding, abdominal pain, GI upset, headache. (It is also an antiprogestin.)',
    '**Spironolactone = mineralocorticoid (aldosterone)-receptor antagonist** → treats **primary aldosteronism**. Adverse effects: **hyperkalemia**, cardiac arrhythmia, and **antiandrogen effects (gynecomastia, menstrual irregularity)**.',
    '**Metyrapone doubles as a diagnostic test**: by blocking 11-hydroxylase it drops cortisol and (if the HPA axis is intact) triggers a compensatory rise in ACTH and 11-deoxycortisol — used to assess pituitary–adrenal reserve.',
    'Choose by target: **inhibit the enzyme** (ketoconazole/metyrapone/etomidate/aminoglutethimide), **block the glucocorticoid receptor** (mifepristone), or **block the mineralocorticoid receptor** (spironolactone/eplerenone).',
  ],

  mechanism: {
    title: 'Antagonize cortisol at synthesis or at the receptor',
    steps: [
      { id: 's1', label: 'Synthesis inhibitors: ketoconazole, metyrapone, etomidate', emphasis: 'key' },
      { id: 's2', label: 'Mifepristone blocks the glucocorticoid receptor' },
      { id: 's3', label: 'Spironolactone blocks the mineralocorticoid receptor' },
      { id: 's4', label: 'Watch: ketoconazole hepatotoxicity; spironolactone hyperkalemia', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Ketoconazole/metyrapone used to lower cortisol in Cushing', mechanism: 'Steroidogenesis inhibition', significance: 'key' },
    { sign: 'Gynecomastia developing on spironolactone', mechanism: 'Antiandrogen effect of the mineralocorticoid antagonist', significance: 'key' },
    { sign: 'Metyrapone chosen for Cushing in a pregnant patient', mechanism: 'Preferred safety profile in pregnancy', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'LFTs on ketoconazole', meaning: 'Monitor for hepatotoxicity' },
    { clue: 'Serum K⁺ on spironolactone', meaning: 'Risk of hyperkalemia' },
    { clue: 'Metyrapone stimulation test (11-deoxycortisol, ACTH)', meaning: 'Assesses HPA reserve' },
  ],

  treatment: [
    { logic: 'Cushing (non-surgical): ketoconazole / metyrapone / osilodrostat', detail: 'Etomidate for acute severe hypercortisolism.' },
    { logic: 'Ectopic-ACTH Cushing: mifepristone (GR blocker)', detail: 'When synthesis inhibition is inadequate.' },
    { logic: 'Primary aldosteronism: spironolactone / eplerenone', detail: 'Eplerenone is more selective (fewer antiandrogen effects).' },
  ],

  mnemonics: [
    { hook: 'Ketoconazole = liver (hepatotoxic); Spironolactone = potassium up + gynecomastia', expansion: ['Signature toxicities'] },
    { hook: 'Mifepristone blocks the receptor; the "-one" enzyme drugs block synthesis', expansion: ['Metyrapone safe in pregnancy'] },
  ],

  traps: [
    {
      questionCategory: 'Spironolactone adverse effects',
      wrongInstinct: 'A potassium-sparing diuretic only risks lowering potassium',
      rightAnswer: 'Spironolactone causes HYPERkalemia (it blocks aldosterone) plus antiandrogen effects like gynecomastia; eplerenone is the more selective alternative',
      why: 'Blocking aldosterone spares potassium (retains it) → hyperkalemia, and cross-reactivity at sex-steroid receptors gives gynecomastia.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with Cushing syndrome cannot undergo curative surgery. Which drug lowers cortisol by inhibiting adrenal steroidogenesis, and what is its key toxicity?',
      options: [
        { id: 'a', text: 'Mifepristone; hyperkalemia' },
        { id: 'b', text: 'Ketoconazole; hepatotoxicity' },
        { id: 'c', text: 'Spironolactone; hepatotoxicity' },
        { id: 'd', text: 'Fludrocortisone; fluid retention' },
      ],
      answerId: 'b',
      explanation: 'Ketoconazole inhibits steroidogenic enzymes to lower cortisol in Cushing syndrome; its notable toxicity is hepatotoxicity. Mifepristone blocks the receptor, and spironolactone is a mineralocorticoid antagonist.',
      tests: 'exam',
    },
  ],
};

export default corticosteroidAntagonists;
