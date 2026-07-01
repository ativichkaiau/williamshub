import type { Lecture } from '../../lib/types';
import { HYPOTHALAMIC_PITUITARY_AXIS } from '../../lib/figures';

export const growthHormoneProlactinDrugs: Lecture = {
  id: 'growth-hormone-prolactin-drugs',
  title: 'GH, IGF-1 & Prolactin Drugs',
  system: 'endocrine',
  source: 'L2 — Pituitary & Hypothalamic Drugs',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L2 Pituitary Drugs' },
    { kind: 'treatment', label: 'GH / somatostatin / dopamine agonists' },
    { kind: 'mechanism', label: 'Agonist vs antagonist' },
    { kind: 'exam', label: 'Acromegaly therapy' },
  ],

  highYield: [
    '**GH replacement = somatropin** (recombinant GH) for GH-deficient children (before epiphyseal fusion) and adults. Growth effects are mediated by **IGF-1**. **Mecasermin** = recombinant **IGF-1**, used when severe IGF-1 deficiency does NOT respond to GH (side effect: **hypoglycemia**).',
    '**GH and IGF-1 have opposite effects on insulin sensitivity**: GH **reduces** insulin sensitivity (→ hyperglycemia), whereas IGF-1 has **insulin-like** effects (→ hypoglycemia).',
    '**Acromegaly/gigantism drugs (GH antagonists)**: **octreotide/lanreotide** (somatostatin analogs, inhibit GH release) and **pegvisomant** (GH-receptor antagonist). Octreotide adverse effects: **GI upset, steatorrhea, gallstones, bradycardia, B12 deficiency**; pegvisomant: ↑liver enzymes, lipohypertrophy.',
    '**Hyperprolactinemia → dopamine agonists** (**cabergoline, bromocriptine**; ergot D2 agonists). **Dopamine is the physiologic inhibitor of prolactin**, so a D2 agonist suppresses PRL — first-line for prolactinoma. Also used in high doses for acromegaly.',
    '**Drugs that RAISE prolactin** = dopamine-receptor antagonists: **antipsychotics** and **GI prokinetics (metoclopramide)** — a common cause of drug-induced hyperprolactinemia. Dopamine-agonist side effects: nausea, orthostatic hypotension.',
  ],

  mechanism: {
    title: 'Match the drug to "replace" vs "block" the hormone',
    steps: [
      { id: 's1', label: 'Deficiency → replace: somatropin (GH) / mecasermin (IGF-1)', emphasis: 'key' },
      { id: 's2', label: 'GH excess → octreotide (SST analog) or pegvisomant (GHR blocker)' },
      { id: 's3', label: 'Dopamine inhibits PRL → agonist (cabergoline) lowers PRL' },
      { id: 's4', label: 'D2 antagonists (antipsychotics) → hyperprolactinemia', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Octreotide or pegvisomant prescribed for enlarging jaw/hands', mechanism: 'Somatostatin analog / GH-receptor antagonist for acromegaly', significance: 'key' },
    { sign: 'Galactorrhea/amenorrhea appearing after starting risperidone', mechanism: 'Drug-induced hyperprolactinemia (D2 blockade)', significance: 'key' },
    { sign: 'New gallstones on octreotide', mechanism: 'Somatostatin inhibits gallbladder contraction', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'IGF-1 to monitor acromegaly therapy', meaning: 'Efficacy of octreotide/pegvisomant' },
    { clue: 'Prolactin level + medication review', meaning: 'Prolactinoma vs drug-induced' },
  ],

  treatment: [
    { logic: 'Prolactinoma: cabergoline (preferred) or bromocriptine', detail: 'Dopamine agonist first-line.' },
    { logic: 'Acromegaly medical therapy: octreotide ± pegvisomant', detail: 'When surgery is incomplete.' },
    { logic: 'GH deficiency: somatropin', detail: 'Before growth plates close in children.' },
  ],

  mnemonics: [
    { hook: 'OctreOtide = O for "Off" GH; Pegvisomant = blocks the GH receptor', expansion: ['Both treat acromegaly'] },
    { hook: 'Dopamine Down-regulates prolactin → agonist for prolactinoma', expansion: ['Antipsychotics raise PRL'] },
  ],

  traps: [
    {
      questionCategory: 'Cause of new galactorrhea',
      wrongInstinct: 'Galactorrhea always means a prolactinoma needing imaging',
      rightAnswer: 'Check the medication list first — dopamine antagonists (antipsychotics, metoclopramide) are a common cause of hyperprolactinemia',
      why: 'Blocking dopamine removes the tonic brake on prolactin; the fix may be stopping the offending drug, not surgery.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with acromegaly has residual GH excess after transsphenoidal surgery. Which drug is a somatostatin analog that inhibits GH release?',
      options: [
        { id: 'a', text: 'Cabergoline' },
        { id: 'b', text: 'Octreotide' },
        { id: 'c', text: 'Mecasermin' },
        { id: 'd', text: 'Somatropin' },
      ],
      answerId: 'b',
      explanation: 'Octreotide is a somatostatin analog that inhibits GH release; pegvisomant (a GH-receptor antagonist) is an alternative. Somatropin and mecasermin are replacements (GH and IGF-1), which would worsen acromegaly.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'GH & prolactin control points', svg: HYPOTHALAMIC_PITUITARY_AXIS, caption: 'GH axis via IGF-1 (octreotide/pegvisomant block it); prolactin is inhibited by dopamine (agonists suppress PRL).' },
  ],
};

export default growthHormoneProlactinDrugs;
