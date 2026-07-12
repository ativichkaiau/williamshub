import type { Lecture } from '../../lib/types';

export const fcp1Hypothyroidism: Lecture = {
  id: 'fcp1-hypothyroidism',
  title: 'Hypothyroidism',
  system: 'clinical',
  source: 'L29 — Approach to Thyroid Disease',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L29 Thyroid Disease' },
    { kind: 'disease', label: 'Hashimoto · myxoedema' },
    { kind: 'exam', label: 'Delayed reflex relaxation' },
    { kind: 'treatment', label: 'Levothyroxine' },
  ],

  highYield: [
    '**Hypothyroidism = hypometabolism:** fatigue, cold intolerance, weight gain [[fcp1-obesity-approach]], constipation [[fcp1-constipation-bowel-habit]], dry skin, hair loss, menorrhagia, low mood and cognitive slowing [[fcp1-delirium-vs-dementia]], bradycardia. Confirm a high TSH with a low free T4 via [[fcp1-thyroid-approach]]; it is the mirror image of [[fcp1-hyperthyroidism]].',
    '**Causes:** **Hashimoto (autoimmune) thyroiditis** is commonest where iodine is replete (anti-TPO positive, goitre or atrophy); **iatrogenic** disease (post-thyroidectomy, post-radioiodine, antithyroid drugs, amiodarone, lithium) is next. **Iodine deficiency** is the leading cause worldwide; central (pituitary) hypothyroidism is rare.',
    '**Signs:** bradycardia, a **delayed relaxation phase of the ankle reflex**, non-pitting periorbital and peripheral puffiness (myxoedema) [[fcp1-edema-approach]]; it also causes a **macrocytic anaemia** [[fcp1-anemia-classification]] and hypercholesterolaemia.',
    '**Myxoedema coma is the red flag** — severe decompensated hypothyroidism with hypothermia, bradycardia, hypoventilation, hyponatraemia, hypotension and reduced consciousness [[fcp1-consciousness-coma-approach]], often precipitated by infection, cold or sedatives. It is a life-threatening emergency.',
    '**Interpretation & screening:** subclinical hypothyroidism = high TSH with a normal free T4; congenital hypothyroidism is screened at birth (prevents cretinism). Treat with levothyroxine and recheck the TSH after about 6 weeks.',
  ],

  mechanism: {
    title: 'From hormone deficiency to myxoedema',
    steps: [
      { id: 's1', label: 'Low T3/T4 → hypometabolic, everything slows', emphasis: 'key' },
      { id: 's2', label: 'High TSH + low free T4 confirms primary disease', emphasis: 'key' },
      { id: 's3', label: 'Anti-TPO positive → Hashimoto (commonest)', emphasis: 'key' },
      { id: 's4', label: 'Iatrogenic (surgery, radioiodine, drugs) or iodine deficiency', emphasis: 'normal' },
      { id: 's5', label: 'Severe + precipitant → myxoedema coma', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Delayed relaxation phase of the ankle reflex', mechanism: 'Slowed muscle contraction/relaxation', significance: 'key' },
    { sign: 'Non-pitting periorbital and pretibial puffiness', mechanism: 'Glycosaminoglycan deposition (myxoedema)', significance: 'key' },
    { sign: 'Bradycardia, dry coarse skin, thin hair, hoarse voice', mechanism: 'Generalised hypometabolism', significance: 'supportive' },
    { sign: 'Firm goitre (Hashimoto) or absent gland (atrophic/post-surgical)', mechanism: 'Points to the underlying cause', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'High TSH with a low free T4', meaning: 'Primary hypothyroidism' },
    { clue: 'Positive anti-TPO antibodies', meaning: 'Hashimoto thyroiditis' },
    { clue: 'High TSH with a normal free T4', meaning: 'Subclinical hypothyroidism — monitor or treat by risk' },
    { clue: 'Hypothermia, hyponatraemia and reduced consciousness in a hypothyroid patient', meaning: 'Myxoedema coma — treat as an emergency' },
  ],

  treatment: [
    { logic: 'Levothyroxine replacement titrated to TSH', detail: 'Start low and go slow in the elderly or those with cardiac disease; recheck the TSH about 6 weeks after any dose change.' },
    { logic: 'Myxoedema coma is an emergency', detail: 'IV levothyroxine (± T3), IV hydrocortisone to cover possible adrenal insufficiency, passive rewarming, ventilatory and haemodynamic support, treat the precipitant, ICU.' },
  ],

  mnemonics: [
    { hook: 'Everything slows', expansion: ['Slow pulse', 'Slow reflexes', 'Slow gut (constipation)', 'Slow mind'] },
  ],

  traps: [
    {
      questionCategory: 'Cardiac-safe replacement',
      wrongInstinct: 'Give everyone a full replacement dose of levothyroxine immediately',
      rightAnswer: 'In the elderly or those with ischaemic heart disease, start low and titrate up slowly',
      why: 'Abruptly raising the metabolic rate increases myocardial oxygen demand and can precipitate angina or arrhythmia.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 40-year-old woman has fatigue, cold intolerance and constipation, a firm goitre, a raised TSH and positive anti-TPO antibodies. The most likely diagnosis is:',
      options: [
        { id: 'a', text: 'Graves disease' },
        { id: 'b', text: 'Hashimoto thyroiditis' },
        { id: 'c', text: 'De Quervain (subacute) thyroiditis' },
        { id: 'd', text: 'Iodine-induced thyrotoxicosis' },
      ],
      answerId: 'b',
      explanation: 'Hypothyroid symptoms with a goitre, raised TSH and positive anti-TPO antibodies indicate Hashimoto (autoimmune) thyroiditis.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'Which examination finding best supports a diagnosis of hypothyroidism?',
      options: [
        { id: 'a', text: 'Lid lag and a fine resting tremor' },
        { id: 'b', text: 'A delayed relaxation phase of the ankle reflex' },
        { id: 'c', text: 'Warm, moist palms' },
        { id: 'd', text: 'Brisk, symmetrical hyperreflexia' },
      ],
      answerId: 'b',
      explanation: 'The slow-relaxing (hung-up) ankle reflex is characteristic of hypothyroidism; the other findings suggest a hyperadrenergic or thyrotoxic state.',
      tests: 'exam',
    },
  ],
};

export default fcp1Hypothyroidism;
