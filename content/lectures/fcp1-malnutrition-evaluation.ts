import type { Lecture } from '../../lib/types';

export const fcp1MalnutritionEvaluation: Lecture = {
  id: 'fcp1-malnutrition-evaluation',
  title: 'Evaluating Malnutrition: Marasmus, Kwashiorkor & Refeeding',
  system: 'clinical',
  source: 'L4 — Nutritional Assessment',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L4 Nutritional Assessment' },
    { kind: 'disease', label: 'Marasmus · kwashiorkor' },
    { kind: 'exam', label: 'Wasting vs oedema' },
    { kind: 'investigation', label: 'WHO SAM criteria' },
  ],

  highYield: [
    '**Severe protein-energy malnutrition presents in two classic forms.** **Marasmus** = severe **wasting** with an “old-man” face, loss of fat and muscle, and **no oedema** (appetite often preserved). **Kwashiorkor** = **bilateral pitting oedema**, a “flaky-paint” dermatosis, hepatomegaly, sparse pale hair and apathy (appetite poor). Overlap is **marasmic-kwashiorkor**.',
    '**Diagnose severe acute malnutrition (SAM) with the WHO criteria:** **weight-for-height Z-score below −3**, **MUAC below 115 mm** (in children 6–59 months), or **bilateral pitting oedema** of nutritional origin — any one qualifies.',
    '**Learn the micronutrient deficiency signs:** vitamin A → night blindness and **Bitot spots**; vitamin C → **scurvy** (bleeding gums, perifollicular haemorrhage); vitamin D → rickets; iron → **koilonychia** and anaemia ([[fcp1-anemia-microcytic]]); B-vitamins → glossitis, cheilitis, neuropathy; zinc → perioral and acral dermatitis.',
    '**Refeeding syndrome is the lethal trap.** Reintroducing carbohydrate drives an **insulin surge** that pushes **phosphate, potassium and magnesium into cells** → **hypophosphataemia**, arrhythmia, cardiac failure and death. Prevent it: **start low, go slow, give thiamine first, and replace electrolytes**.',
    '**Do not forget over-nutrition.** Obesity is malnutrition too, with its own morbidity — its assessment sits with [[fcp1-nutritional-assessment]] and links to [[fcp1-obesity-approach]].',
  ],

  mechanism: {
    title: 'Recognising and safely treating malnutrition',
    steps: [
      { id: 's1', label: 'Decide the direction: under-nutrition vs over-nutrition' },
      { id: 's2', label: 'In PEM, separate marasmus (wasting, no oedema) from kwashiorkor (oedema)', emphasis: 'key' },
      { id: 's3', label: 'Apply WHO SAM criteria: WHZ, MUAC, bilateral oedema', emphasis: 'key' },
      { id: 's4', label: 'Screen for micronutrient deficiency signs' },
      { id: 's5', label: 'Refeed cautiously — refeeding syndrome can kill', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Bilateral pitting pedal oedema in a young child', mechanism: 'Nutritional oedema is the defining sign of kwashiorkor until proven otherwise', significance: 'key' },
    { sign: 'Severe visible wasting with an “old-man” face and no oedema', mechanism: 'Depletion of subcutaneous fat and muscle defines marasmus', significance: 'key' },
    { sign: 'Bitot spots and night blindness', mechanism: 'Vitamin A deficiency affects the conjunctiva and rod-mediated vision', significance: 'supportive' },
    { sign: 'Bleeding, swollen gums with perifollicular haemorrhages', mechanism: 'Vitamin C deficiency (scurvy) impairs collagen and vessel integrity', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'MUAC below 115 mm, or weight-for-height Z-score below −3, or bilateral oedema', meaning: 'Severe acute malnutrition — manage per protocol and treat intercurrent infection' },
    { clue: 'Phosphate, potassium and magnesium falling after feeding begins', meaning: 'Refeeding syndrome — slow the feed, replace electrolytes, continue thiamine' },
    { clue: 'Hepatomegaly with oedema, skin and hair changes', meaning: 'Fits kwashiorkor (protein-deficient malnutrition)' },
    { clue: 'Microcytic anaemia with koilonychia', meaning: 'Iron deficiency accompanying malnutrition ([[fcp1-anemia-microcytic]])' },
  ],

  treatment: [
    { logic: 'Manage SAM by protocol, not by instinct', detail: 'Cautious feeding, micronutrient and electrolyte correction, active treatment of hypoglycaemia, hypothermia and infection, and careful fluids — over-aggressive resuscitation harms these children.' },
    { logic: 'Prevent refeeding syndrome deliberately', detail: 'Start feeding low and slow, give thiamine before carbohydrate, and monitor and replace phosphate, potassium and magnesium during the first days.' },
  ],

  mnemonics: [
    { hook: 'Kwashiorkor has the oedema; Marasmus is the wasting', expansion: ['Kwashiorkor — oedema, flaky-paint skin, hepatomegaly, poor appetite', 'Marasmus — severe wasting, old-man face, no oedema, appetite often preserved', 'SAM = WHZ < −3, MUAC < 115 mm, or bilateral oedema'] },
  ],

  traps: [
    {
      questionCategory: 'Refeeding',
      wrongInstinct: 'A severely malnourished patient needs aggressive, high-calorie feeding straight away to catch up',
      rightAnswer: 'Start feeding low and slow with thiamine and electrolyte monitoring to avoid refeeding syndrome',
      why: 'Rapid refeeding triggers an insulin surge that drops phosphate, potassium and magnesium and can precipitate fatal arrhythmia; cautious reintroduction is life-saving.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 2-year-old from a food-insecure region has bilateral pitting leg oedema, a distended abdomen with hepatomegaly, sparse depigmented hair and a peeling rash. The most likely diagnosis is:',
      options: [
        { id: 'a', text: 'Marasmus' },
        { id: 'b', text: 'Kwashiorkor' },
        { id: 'c', text: 'Simple iron-deficiency anaemia' },
        { id: 'd', text: 'Nephrotic syndrome only' },
      ],
      answerId: 'b',
      explanation: 'Bilateral nutritional oedema with hepatomegaly, hair changes and a flaky-paint dermatosis is the classic picture of kwashiorkor. Marasmus is characterised by severe wasting without oedema.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'Which single finding alone is sufficient to diagnose severe acute malnutrition in a child aged 6–59 months under WHO criteria?',
      options: [
        { id: 'a', text: 'A BMI of 20' },
        { id: 'b', text: 'Bilateral pitting oedema of nutritional origin' },
        { id: 'c', text: 'A normal MUAC of 140 mm' },
        { id: 'd', text: 'A single low albumin' },
      ],
      answerId: 'b',
      explanation: 'Any one of weight-for-height Z-score below −3, MUAC below 115 mm, or bilateral pitting oedema of nutritional origin defines severe acute malnutrition. Nutritional oedema alone is diagnostic.',
      tests: 'investigation',
    },
  ],
};

export default fcp1MalnutritionEvaluation;
