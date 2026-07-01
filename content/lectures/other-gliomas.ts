import type { Lecture } from '../../lib/types';

export const otherGliomas: Lecture = {
  id: 'other-gliomas',
  title: 'Oligodendroglioma, Ependymoma & Pilocytic Astrocytoma',
  system: 'neuro',
  source: 'L10 — CNS Neoplasms',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L10 CNS Neoplasms' },
    { kind: 'disease', label: 'Gliomas' },
    { kind: 'mechanism', label: 'Signature histology' },
    { kind: 'exam', label: '1p/19q · pseudorosettes' },
  ],

  highYield: [
    '**Oligodendroglioma** (WHO 2–3): adults (4th–5th decade), **frontal lobe**, **long history of seizures**. Molecular hallmark = **IDH-mutant AND 1p/19q whole-arm codeletion** (required for diagnosis; predicts chemosensitivity).',
    'Oligodendroglioma histology: **“fried-egg” cells** (perinuclear halo), **“chicken-wire” capillary network**, and frequent **calcification**.',
    '**Pilocytic astrocytoma** (WHO grade **1**): **children, cerebellum**; slow-growing, well-circumscribed **cyst with a mural nodule**. Histology = **bipolar GFAP+ cells + Rosenthal fibers + eosinophilic granular bodies**; often curable by resection.',
    '**Ependymoma** (WHO 2–3): arises near the ventricular system — **4th ventricle in children** (→ hydrocephalus), **spinal cord in adults** (linked to **NF2**).',
    'Ependymoma histology: **perivascular pseudorosettes** and true ependymal rosettes.',
  ],

  mechanism: {
    title: 'Match the glioma by cell of origin, site & histology',
    steps: [
      { id: 's1', label: 'Oligodendrocyte-like, frontal, seizures → oligodendroglioma', emphasis: 'key' },
      { id: 's2', label: 'IDH-mutant + 1p/19q codeletion (defining)' },
      { id: 's3', label: 'Cerebellar cyst + mural nodule, kids → pilocytic (grade 1)' },
      { id: 's4', label: 'Ventricular lining → ependymoma (pseudorosettes)' },
    ],
  },

  examFindings: [
    { sign: 'Frontal calcified tumor with seizures', mechanism: 'Oligodendroglioma', significance: 'key' },
    { sign: 'Cerebellar cyst + mural nodule in a child', mechanism: 'Pilocytic astrocytoma (grade 1)', significance: 'key' },
    { sign: 'Hydrocephalus from a 4th-ventricle mass in a child', mechanism: 'Ependymoma', significance: 'supportive' },
  ],

  investigations: [
    { clue: '1p/19q codeletion + IDH testing', meaning: 'Confirms oligodendroglioma (and chemosensitivity)' },
    { clue: 'Histology (fried-egg, Rosenthal fibers, pseudorosettes)', meaning: 'Distinguishes the three gliomas' },
    { clue: 'MRI location (frontal vs cerebellar vs ventricular)', meaning: 'Narrows the differential' },
  ],

  treatment: [
    { logic: 'Resection; oligodendroglioma is chemosensitive (1p/19q)', detail: 'Better prognosis than astrocytomas.' },
    { logic: 'Pilocytic astrocytoma: resection is often curative', detail: 'Grade 1, circumscribed.' },
  ],

  mnemonics: [
    { hook: 'Oligodendroglioma = Fried-egg + Chicken-wire + Calcification + 1p/19q', expansion: ['Frontal, seizures'] },
    { hook: 'Pilocytic = Rosenthal fibers + cyst/mural nodule (kids, cerebellum, grade 1)', expansion: ['Rosenthal fibers also in chronic gliosis'] },
  ],

  traps: [
    {
      questionCategory: 'Circumscribed vs diffuse glioma prognosis',
      wrongInstinct: 'All gliomas are aggressive, infiltrative, and carry a poor prognosis',
      rightAnswer: 'Pilocytic astrocytoma is a well-circumscribed WHO grade 1 tumor (Rosenthal fibers) that is often curable by resection',
      why: 'Unlike diffuse (infiltrating) astrocytomas, the pilocytic astrocytoma is discrete and low-grade — an important benign exception with an excellent prognosis.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A frontal-lobe tumor in an adult with a long seizure history shows cells with perinuclear halos (“fried-egg”) and a delicate “chicken-wire” vasculature with calcification. The defining molecular finding is:',
      options: [
        { id: 'a', text: 'EGFR amplification' },
        { id: 'b', text: 'IDH mutation with 1p/19q codeletion' },
        { id: 'c', text: 'NF2 mutation' },
        { id: 'd', text: 'RB1 deletion' },
      ],
      answerId: 'b',
      explanation: 'The fried-egg cells and chicken-wire capillaries describe oligodendroglioma, which is defined by an IDH mutation together with 1p/19q whole-arm codeletion.',
      tests: 'exam',
    },
  ],
};

export default otherGliomas;
