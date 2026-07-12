import type { Lecture } from '../../lib/types';

export const fcp1Hyperthyroidism: Lecture = {
  id: 'fcp1-hyperthyroidism',
  title: 'Hyperthyroidism (Thyrotoxicosis)',
  system: 'clinical',
  source: 'L29 — Approach to Thyroid Disease',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L29 Thyroid Disease' },
    { kind: 'disease', label: 'Graves · toxic nodule · thyroiditis' },
    { kind: 'exam', label: 'Proptosis · lid lag · tremor' },
    { kind: 'treatment', label: 'Beta-blocker · thionamide' },
  ],

  highYield: [
    '**Thyrotoxicosis = hormone excess:** weight loss despite good appetite [[fcp1-weight-loss-approach]], heat intolerance, palpitations/tachycardia (often atrial fibrillation), fine tremor [[fcp1-movement-hyperkinetic]], anxiety, sweating and diarrhoea. Confirm with a suppressed TSH via [[fcp1-thyroid-approach]]; it is the mirror image of [[fcp1-hypothyroidism]].',
    '**Causes:** **Graves disease** (commonest — autoimmune TRAb, diffuse goitre with a bruit, orbitopathy, pretibial myxoedema); **toxic multinodular goitre / toxic adenoma** (older, nodular, no eye signs); and **thyroiditis** (transient — subacute painful de Quervain, or painless postpartum). **Radioiodine uptake** separates high-uptake (Graves, nodular) from low-uptake (thyroiditis, exogenous).',
    '**Graves-specific signs:** proptosis, lid retraction, ophthalmoplegia and pretibial myxoedema occur in Graves but **not** in nodular disease — they help pin the cause.',
    '**Thyroid storm is the red flag** — decompensated thyrotoxicosis with hyperpyrexia [[fcp1-fever-approach-differential]], tachyarrhythmia, agitation or delirium [[fcp1-delirium-vs-dementia]], vomiting and heart failure, usually triggered by infection, surgery or iodine. It is a life-threatening emergency needing ICU care.',
    '**Apathetic hyperthyroidism** in the elderly hides as isolated weight loss, new atrial fibrillation or depression without the classic hyperadrenergic picture — it is easily missed.',
  ],

  mechanism: {
    title: 'From hormone excess to the thyrotoxic crisis',
    steps: [
      { id: 's1', label: 'Excess T3/T4 → hypermetabolic, hyperadrenergic state', emphasis: 'key' },
      { id: 's2', label: 'Suppressed TSH + high free T4/T3 confirms', emphasis: 'key' },
      { id: 's3', label: 'TRAb / uptake defines cause', emphasis: 'key' },
      { id: 's4', label: 'High-uptake (Graves, nodular) vs low-uptake (thyroiditis)', emphasis: 'normal' },
      { id: 's5', label: 'Untreated + precipitant → thyroid storm', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Diffuse goitre with bruit + proptosis + pretibial myxoedema', mechanism: 'Autoimmune (Graves) stimulation', significance: 'key' },
    { sign: 'Nodular goitre, no eye signs, older patient', mechanism: 'Autonomous toxic nodule/multinodular goitre', significance: 'key' },
    { sign: 'Tender goitre with a transient course', mechanism: 'Subacute (de Quervain) thyroiditis leaking hormone', significance: 'supportive' },
    { sign: 'Fine tremor, warm sweaty palms, lid lag, resting tachycardia', mechanism: 'Adrenergic excess', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Suppressed TSH with elevated free T4/T3', meaning: 'Confirms thyrotoxicosis' },
    { clue: 'Positive TSH-receptor antibody (TRAb)', meaning: 'Graves disease' },
    { clue: 'High diffuse uptake vs focal uptake vs low uptake on scan', meaning: 'Graves vs toxic nodule vs thyroiditis/exogenous' },
    { clue: 'Fever, tachyarrhythmia and altered mental state in a thyrotoxic patient', meaning: 'Thyroid storm — treat immediately, do not wait for tests' },
  ],

  treatment: [
    { logic: 'Beta-blocker for rapid symptom control', detail: 'Propranolol blunts the adrenergic symptoms and tachycardia while the definitive workup proceeds.' },
    { logic: 'Thionamide to lower hormone synthesis', detail: 'Carbimazole or methimazole (propylthiouracil in the first trimester and in storm); definitive options are antithyroid drugs, radioiodine or surgery by cause.' },
    { logic: 'Thyroid storm is an emergency', detail: 'ABC, thionamide before iodine (iodine after, to avoid fuelling synthesis), beta-blocker, steroids, cooling, treat the precipitant, ICU.' },
  ],

  mnemonics: [
    { hook: 'Graves has eyes and shins', expansion: ['Proptosis = Graves', 'Pretibial myxoedema = Graves', 'Nodular disease has neither'] },
  ],

  traps: [
    {
      questionCategory: 'Cause of thyrotoxicosis',
      wrongInstinct: 'All thyrotoxicosis should receive antithyroid drugs or radioiodine',
      rightAnswer: 'Thyroiditis has LOW uptake and is self-limiting — treat symptoms with a beta-blocker only; thionamides do not help',
      why: 'In thyroiditis hormone leaks from a damaged gland rather than being over-synthesised, so blocking synthesis is useless — the uptake scan distinguishes them.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 35-year-old woman has weight loss, palpitations, a diffuse goitre with a bruit and bilateral proptosis. The most likely cause is:',
      options: [
        { id: 'a', text: 'Graves disease' },
        { id: 'b', text: 'Toxic adenoma' },
        { id: 'c', text: 'Subacute thyroiditis' },
        { id: 'd', text: 'Factitious thyrotoxicosis' },
      ],
      answerId: 'a',
      explanation: 'A diffuse vascular goitre with orbitopathy is Graves disease; the eye and skin signs do not occur with nodular or exogenous causes.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'A thyrotoxic patient, two days after surgery, has a temperature of 40°C, atrial fibrillation at 150/min and agitated confusion. The most appropriate management is:',
      options: [
        { id: 'a', text: 'Reassure and arrange outpatient thionamide' },
        { id: 'b', text: 'Treat as simple atrial fibrillation with rate control only' },
        { id: 'c', text: 'Manage as thyroid storm with thionamide, beta-blocker, iodine and steroids' },
        { id: 'd', text: 'Proceed to immediate total thyroidectomy' },
      ],
      answerId: 'c',
      explanation: 'Fever, tachyarrhythmia and delirium in a thyrotoxic post-operative patient indicate thyroid storm, an emergency treated with thionamide (before iodine), beta-blocker, steroids and supportive care.',
      tests: 'treatment',
    },
  ],
};

export default fcp1Hyperthyroidism;
