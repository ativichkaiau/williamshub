import type { Lecture } from '../../lib/types';

export const fcp1ThyroidApproach: Lecture = {
  id: 'fcp1-thyroid-approach',
  title: 'Approach to Thyroid Disease',
  system: 'clinical',
  source: 'L29 — Approach to Thyroid Disease',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L29 Thyroid Disease' },
    { kind: 'disease', label: 'Goitre · thyroid nodule' },
    { kind: 'investigation', label: 'TSH-first · free T4' },
    { kind: 'mechanism', label: 'HPT axis feedback' },
  ],

  highYield: [
    '**Check TSH first** — it is the most sensitive index. A **low TSH** points to thyrotoxicosis [[fcp1-hyperthyroidism]]; a **high TSH** points to hypothyroidism [[fcp1-hypothyroidism]]. Then measure **free T4** to grade severity and confirm the pattern.',
    '**Symptom-driven sorting:** weight loss [[fcp1-weight-loss-approach]] + heat intolerance + tremor [[fcp1-movement-hyperkinetic]] + palpitations suggests an overactive gland, while weight gain [[fcp1-obesity-approach]] + cold intolerance + fatigue + constipation [[fcp1-constipation-bowel-habit]] suggests an underactive gland. The elderly are often oligosymptomatic.',
    '**Goitre:** define diffuse vs nodular and always ask about **compressive features** — dysphagia [[fcp1-dysphagia]], positional dyspnoea, stridor, retrosternal extension.',
    '**Thyroid nodule:** most are benign, but a painless nodule needs cancer excluded → **ultrasound + TSH**, then FNA cytology by sonographic risk and size.',
    '**Red flags for malignancy:** a hard fixed nodule, rapid growth, new hoarseness (recurrent laryngeal nerve), or cervical lymphadenopathy [[fcp1-lymphadenopathy-approach]] → urgent referral. Remember a discordant TSH/T4 pair suggests central (pituitary) disease — TSH alone can mislead.',
  ],

  mechanism: {
    title: 'TSH-first interpretation of thyroid function',
    steps: [
      { id: 's1', label: 'Symptoms / goitre / nodule prompt testing', emphasis: 'key' },
      { id: 's2', label: 'Check TSH first — most sensitive index', emphasis: 'key' },
      { id: 's3', label: 'Low TSH → free T4/T3 high = thyrotoxicosis', emphasis: 'key' },
      { id: 's4', label: 'High TSH → free T4 low = hypothyroidism', emphasis: 'key' },
      { id: 's5', label: 'Hard fixed nodule + hoarseness + node = malignancy', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Diffuse smooth goitre with an audible bruit', mechanism: 'Hypervascular gland of Graves disease', significance: 'key' },
    { sign: 'Solitary hard fixed nodule ± cervical node', mechanism: 'Raises concern for thyroid malignancy', significance: 'key' },
    { sign: 'Fine tremor, warm moist skin, lid lag', mechanism: 'Adrenergic effect of hormone excess', significance: 'supportive' },
    { sign: 'Dry coarse skin, bradycardia, slow-relaxing reflex', mechanism: 'Hypometabolic state of hormone deficiency', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Low TSH with high free T4', meaning: 'Primary thyrotoxicosis → define cause (TRAb, uptake scan)' },
    { clue: 'High TSH with low free T4', meaning: 'Primary hypothyroidism → check anti-TPO antibodies' },
    { clue: 'Low or normal TSH with a low free T4', meaning: 'Central (pituitary/hypothalamic) disease → image the pituitary' },
    { clue: 'Nodule with suspicious ultrasound (microcalcification, taller-than-wide, irregular margin)', meaning: 'Proceed to FNA cytology' },
  ],

  treatment: [
    { logic: 'Let the TSH result direct the workup, not empirical therapy', detail: 'Confirm the pattern before treating; do not act on a single borderline TSH — repeat it with a free T4.' },
    { logic: 'Refer red-flag goitres and nodules urgently', detail: 'Hard fixed nodule, hoarseness, rapid growth, compressive symptoms, or cervical nodes → ENT/surgery with ultrasound and FNA.' },
  ],

  mnemonics: [
    { hook: 'TSH first, then T4', expansion: ['Low TSH = overactive', 'High TSH = underactive', 'Free T4 grades severity'] },
  ],

  traps: [
    {
      questionCategory: 'TFT interpretation',
      wrongInstinct: 'A normal TSH always excludes thyroid disease',
      rightAnswer: 'Central hypothyroidism, acute illness, and the weeks after a treatment change can give a misleading TSH — check free T4 when the picture does not fit',
      why: 'TSH is unreliable in pituitary disease and while the axis is re-equilibrating, so it must be read with the free T4.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 38-year-old with palpitations, weight loss and heat intolerance has a suppressed TSH (<0.01) and an elevated free T4. The best interpretation is:',
      options: [
        { id: 'a', text: 'Primary hypothyroidism' },
        { id: 'b', text: 'Primary thyrotoxicosis' },
        { id: 'c', text: 'Subclinical hypothyroidism' },
        { id: 'd', text: 'Sick euthyroid syndrome' },
      ],
      answerId: 'b',
      explanation: 'A suppressed TSH with a high free T4 and hyperadrenergic symptoms indicates primary thyrotoxicosis; the next step is to define the cause.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A 60-year-old presents with a hard, fixed 3 cm thyroid nodule, new hoarseness and an ipsilateral cervical lymph node. The most appropriate step is:',
      options: [
        { id: 'a', text: 'Reassure — this is a benign colloid nodule' },
        { id: 'b', text: 'Start levothyroxine' },
        { id: 'c', text: 'Urgent ultrasound and fine-needle aspiration for suspected malignancy' },
        { id: 'd', text: 'Repeat the TSH in 6 months' },
      ],
      answerId: 'c',
      explanation: 'A hard fixed nodule with hoarseness and a cervical node carries several malignancy red flags and warrants urgent imaging and cytology.',
      tests: 'disease',
    },
  ],
};

export default fcp1ThyroidApproach;
