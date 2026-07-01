import type { Lecture } from '../../lib/types';

export const pheochromocytomaParaganglioma: Lecture = {
  id: 'pheochromocytoma-paraganglioma',
  title: 'Pheochromocytoma & Paraganglioma',
  system: 'endocrine',
  source: 'L3 — Adrenal Pathology & MEN',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L3 Adrenal Pathology' },
    { kind: 'disease', label: 'Pheochromocytoma' },
    { kind: 'mechanism', label: 'Catecholamine excess' },
    { kind: 'exam', label: '10% rule / metanephrines' },
  ],

  highYield: [
    '**Pheochromocytoma = tumor of adrenal-medulla chromaffin cells** that secretes catecholamines (mainly **norepinephrine/epinephrine**). It is a rare, **surgically correctable** cause of hypertension. **Paraganglioma** = the same tumor arising OUTSIDE the adrenal (extra-adrenal chromaffin/paraganglia).',
    '**The "10% rule": ~10% extra-adrenal (paraganglioma), 10% bilateral, 10% familial, 10% malignant, 10% without hypertension** (and ~10% in children).',
    '**Classic episodes (paroxysms)**: **pounding headache, palpitations/tachycardia, sweating (diaphoresis), and abrupt severe hypertension** — triggered by stress, exercise, position change, or palpation of the tumor; may have orthostatic hypotension between spells.',
    '**Diagnosis: ↑ plasma/urinary metanephrines and VMA** (catecholamine metabolites). **Do NOT biopsy** — risk of a catecholamine crisis.',
    '**Histology**: nested **"Zellballen"** pattern of chromaffin cells with sustentacular cells, "**salt-and-pepper**" chromatin; a **chromaffin reaction** turns the tissue brown/black with potassium dichromate. Bizarre nuclei ("endocrine atypia") do NOT indicate malignancy.',
  ],

  mechanism: {
    title: 'Chromaffin tumor → episodic catecholamine surges',
    steps: [
      { id: 's1', label: 'Chromaffin cells secrete NE/Epi', emphasis: 'key' },
      { id: 's2', label: 'Paroxysm: headache + palpitations + sweating + ↑BP' },
      { id: 's3', label: 'Metabolites ↑ → measure metanephrines / VMA' },
      { id: 's4', label: 'Catecholamine cardiomyopathy / crisis', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Episodic headache + palpitations + diaphoresis + paroxysmal hypertension', mechanism: 'Catecholamine surges from a pheochromocytoma', significance: 'key' },
    { sign: 'Zellballen nests + salt-and-pepper chromatin', mechanism: 'Chromaffin-cell tumor histology', significance: 'key' },
    { sign: 'Painless pulsatile neck mass mobile horizontally not vertically', mechanism: 'Carotid-body paraganglioma (Fontaine sign)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Plasma free metanephrines / 24-h urinary metanephrines & VMA', meaning: 'Confirms catecholamine excess' },
    { clue: 'CT/MRI or MIBG scan after biochemical confirmation', meaning: 'Localizes adrenal vs extra-adrenal tumor' },
    { clue: 'Genetic testing (RET, VHL, NF1, SDH)', meaning: 'Familial pheo/paraganglioma syndromes' },
  ],

  treatment: [
    { logic: 'α-blockade FIRST (phenoxybenzamine), then β-blocker', detail: 'Never β-block first — unopposed α → hypertensive crisis.' },
    { logic: 'Surgical resection after adequate blockade', detail: 'Definitive; volume expand pre-op.' },
  ],

  mnemonics: [
    { hook: 'Pheo = the 5 P’s: Pressure, Pain (headache), Palpitations, Perspiration, Pallor', expansion: ['Episodic (paroxysmal)'] },
    { hook: 'α before β — block alpha first or precipitate a crisis', expansion: ['Phenoxybenzamine then propranolol'] },
  ],

  traps: [
    {
      questionCategory: 'Order of adrenergic blockade before surgery',
      wrongInstinct: 'Start a beta-blocker to control the tachycardia and hypertension',
      rightAnswer: 'Give an alpha-blocker (phenoxybenzamine) FIRST; starting a beta-blocker alone leaves unopposed alpha vasoconstriction → hypertensive crisis',
      why: 'Blocking β2-mediated vasodilation while α is intact worsens vasoconstriction — a classic and dangerous sequencing error.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient has recurrent episodes of severe headache, palpitations, sweating, and spikes of hypertension. Imaging shows an adrenal-medulla mass. Which laboratory finding confirms the diagnosis?',
      options: [
        { id: 'a', text: 'Low renin, high aldosterone' },
        { id: 'b', text: 'Elevated urinary metanephrines and VMA' },
        { id: 'c', text: 'Failure of cortisol to suppress on dexamethasone' },
        { id: 'd', text: 'Elevated 17-hydroxyprogesterone' },
      ],
      answerId: 'b',
      explanation: 'Pheochromocytoma secretes catecholamines; diagnosis rests on elevated plasma/urinary metanephrines and VMA. Biopsy is avoided, and α-blockade precedes β-blockade before resection.',
      tests: 'exam',
    },
  ],
};

export default pheochromocytomaParaganglioma;
