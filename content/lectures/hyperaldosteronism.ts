import type { Lecture } from '../../lib/types';
import { ADRENAL_STEROIDOGENESIS } from '../../lib/figures';

export const hyperaldosteronism: Lecture = {
  id: 'hyperaldosteronism',
  title: 'Hyperaldosteronism (Primary vs Secondary)',
  system: 'endocrine',
  source: 'L3 — Adrenal Pathology & MEN',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L3 Adrenal Pathology' },
    { kind: 'disease', label: 'Hyperaldosteronism' },
    { kind: 'mechanism', label: 'Aldosterone excess' },
    { kind: 'exam', label: 'HTN + hypokalemia' },
  ],

  highYield: [
    '**Aldosterone (zona glomerulosa) → Na⁺ reabsorption + K⁺/H⁺ secretion.** Excess = **hypertension + hypokalemia** (± metabolic alkalosis, muscle weakness). Serum Na⁺ is usually high-normal.',
    '**Primary hyperaldosteronism = autonomous adrenal overproduction** → aldosterone HIGH, **renin LOW**. Most common cause = **bilateral idiopathic (nodular) hyperplasia (~60%)**; next is an **aldosterone-producing adenoma = Conn syndrome**. KCNJ5 mutation → familial type III.',
    '**Conn adenoma**: small (<2 cm), solitary, bright **yellow-orange**, lipid-laden fasciculata-like cells; classic **spironolactone bodies** (laminated eosinophilic inclusions) appear after spironolactone treatment.',
    '**Secondary hyperaldosteronism = RAAS activation** (renin HIGH): ↓renal perfusion (renal artery stenosis, arteriolar nephrosclerosis), "effective" hypovolemia (CHF, cirrhosis, nephrotic syndrome), and pregnancy.',
    '**Screen with the aldosterone-to-renin ratio (ARR)** — high ARR = primary. Confirm with aldosterone suppression testing (saline infusion / oral salt loading); CT distinguishes adenoma vs hyperplasia (subtype guides surgery vs a mineralocorticoid antagonist).',
  ],

  mechanism: {
    title: 'Aldosterone excess: is renin low (primary) or high (secondary)?',
    steps: [
      { id: 's1', label: 'Aldosterone ↑ → Na⁺/water retention → hypertension', emphasis: 'key' },
      { id: 's2', label: '↑ K⁺/H⁺ loss → hypokalemia + metabolic alkalosis' },
      { id: 's3', label: 'Primary: renin LOW (adrenal is autonomous)' },
      { id: 's4', label: 'Secondary: renin HIGH (RAAS driven)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Hypertension + spontaneous hypokalemia + metabolic alkalosis', mechanism: 'Primary hyperaldosteronism', significance: 'key' },
    { sign: 'High aldosterone with SUPPRESSED renin (high ARR)', mechanism: 'Autonomous adrenal aldosterone', significance: 'key' },
    { sign: 'Spironolactone bodies on histology', mechanism: 'Conn adenoma after spironolactone therapy', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Plasma aldosterone-to-renin ratio (ARR)', meaning: 'High ARR = primary; both high = secondary' },
    { clue: 'Saline-infusion / oral salt-loading suppression test', meaning: 'Confirms non-suppressible aldosterone' },
    { clue: 'Adrenal CT (± venous sampling)', meaning: 'Adenoma vs bilateral hyperplasia → surgery vs drug' },
  ],

  treatment: [
    { logic: 'Unilateral adenoma (Conn): adrenalectomy', detail: 'Curative for a single aldosteronoma.' },
    { logic: 'Bilateral hyperplasia: mineralocorticoid antagonist', detail: 'Spironolactone or eplerenone.' },
    { logic: 'Secondary: treat the underlying cause', detail: 'e.g. renal artery stenosis, heart failure.' },
  ],

  mnemonics: [
    { hook: 'Primary = low renin; Secondary = high renin', expansion: ['ARR separates them'] },
    { hook: 'Conn: HTN + Hypokalemia + low renin + small yellow adenoma', expansion: ['Spironolactone bodies after Rx'] },
  ],

  traps: [
    {
      questionCategory: 'Renin level in primary hyperaldosteronism',
      wrongInstinct: 'High aldosterone should go with high renin',
      rightAnswer: 'In PRIMARY hyperaldosteronism renin is LOW (suppressed) — the adrenal makes aldosterone autonomously; high renin indicates a SECONDARY cause',
      why: 'The ARR works precisely because primary disease uncouples aldosterone from renin.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 40-year-old man has BP 150/100, generalized weakness, Na⁺ 144, K⁺ 2.0, and HCO₃⁻ 35. Plasma aldosterone is high with suppressed renin. What is the most likely diagnosis?',
      options: [
        { id: 'a', text: 'Pheochromocytoma' },
        { id: 'b', text: 'Renal artery stenosis' },
        { id: 'c', text: 'Primary hyperaldosteronism' },
        { id: 'd', text: 'Cushing syndrome' },
      ],
      answerId: 'c',
      explanation: 'Hypertension with hypokalemia, metabolic alkalosis, high aldosterone, and suppressed renin is primary hyperaldosteronism. Renal artery stenosis would raise renin (secondary).',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Adrenal cortex zones', svg: ADRENAL_STEROIDOGENESIS, caption: 'Aldosterone comes from the zona glomerulosa (salt); Conn = autonomous excess with low renin.' },
  ],
};

export default hyperaldosteronism;
