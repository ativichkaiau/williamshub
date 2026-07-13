import type { Lecture } from '../../lib/types';

export const eatingDisorders: Lecture = {
  id: 'eating-disorders',
  title: 'Eating Disorders',
  system: 'gi',
  source: 'L19 — Eating Disorders',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'L19 Eating Disorders' },
    { kind: 'disease', label: 'Anorexia / bulimia' },
    { kind: 'exam', label: 'Refeeding / complications' },
  ],

  highYield: [
    '**Eating disorders are psychiatric illnesses with major medical consequences: anorexia nervosa, bulimia nervosa and binge-eating disorder.** They are commonest in adolescent/young-adult women and involve a disturbed body image and maladaptive control of eating; anorexia nervosa has the **highest mortality of any psychiatric disorder** (starvation and suicide).',
    '**Anorexia nervosa = restriction of intake → significantly LOW body weight, an intense fear of weight gain, and distorted body image.** Consequences of starvation: **amenorrhoea, bradycardia, hypotension, hypothermia, lanugo hair, osteoporosis, and electrolyte disturbance.** There are restricting and binge–purge subtypes.',
    '**Bulimia nervosa = recurrent BINGE eating followed by compensatory PURGING (self-induced vomiting, laxatives) — usually with a NORMAL or near-normal body weight.** Purging signs: **hypokalaemia (arrhythmia risk), metabolic alkalosis, dental enamel erosion, parotid swelling, and RUSSELL\'S SIGN (knuckle calluses from self-induced vomiting).**',
    '**Binge-eating disorder is recurrent binge eating WITHOUT compensatory purging — associated with obesity and its complications.** Distinguishing the three turns on body weight and the presence/absence of purging: anorexia (low weight), bulimia (normal weight + purging), binge-eating (often overweight, no purging).',
    'The dangerous medical pitfalls are electrolyte disturbances (especially hypokalaemia → arrhythmia) and REFEEDING SYNDROME when nutrition is restored too quickly (hypophosphataemia, arrhythmia — see [[nutrition-energy-protein-malnutrition]]). Management is multidisciplinary (medical stabilisation + nutritional rehabilitation + psychological therapy); refeed cautiously.',
  ],

  mechanism: {
    title: 'Anorexia (low weight) vs bulimia (purge, normal weight) vs binge-eating; watch electrolytes/refeeding',
    steps: [
      { id: 's1', label: 'Anorexia nervosa: restriction → low weight, fear of gain, distorted image', emphasis: 'key' },
      { id: 's2', label: 'Starvation: amenorrhoea, bradycardia, hypothermia, lanugo, osteoporosis', emphasis: 'key' },
      { id: 's3', label: 'Bulimia: binge + purge, NORMAL weight; hypokalaemia, enamel erosion, Russell sign', emphasis: 'key' },
      { id: 's4', label: 'Binge-eating: binge without purge → obesity', emphasis: 'key' },
      { id: 's5', label: 'Danger: hypokalaemia (arrhythmia), refeeding syndrome; multidisciplinary care', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Very low body weight + amenorrhoea + bradycardia + lanugo', mechanism: 'Anorexia nervosa (starvation)', significance: 'key' },
    { sign: 'Normal weight + dental erosion + parotid swelling + knuckle calluses', mechanism: 'Bulimia nervosa (self-induced vomiting; Russell sign)', significance: 'key' },
    { sign: 'Hypokalaemia and metabolic alkalosis', mechanism: 'Purging (vomiting/laxatives) — arrhythmia risk', significance: 'key' },
    { sign: 'Hypophosphataemia after starting feeding', mechanism: 'Refeeding syndrome', significance: 'key' },
    { sign: 'Recurrent binges without purging, with obesity', mechanism: 'Binge-eating disorder', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The eating disorder with the highest mortality', meaning: 'Anorexia nervosa' },
    { clue: 'The sign of knuckle calluses from self-induced vomiting', meaning: 'Russell\'s sign (bulimia nervosa)' },
    { clue: 'The electrolyte disturbance from purging that risks arrhythmia', meaning: 'Hypokalaemia (with metabolic alkalosis)' },
    { clue: 'The feature separating bulimia from anorexia', meaning: 'Body weight (normal in bulimia, low in anorexia)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Eating disorders carry serious medical risk (arrhythmia from hypokalaemia, refeeding syndrome — [[nutrition-energy-protein-malnutrition]]) and require multidisciplinary care (medical + nutritional + psychological). Binge-eating disorder overlaps [[obesity-pathophysiology]]. Cautious refeeding with electrolyte monitoring is the key safety principle, mirroring the malnutrition management elsewhere in this block.' },
  ],

  mnemonics: [
    { hook: 'Three disorders: "Anorexia = low weight; Bulimia = normal weight + purge; Binge = obese, no purge"', expansion: ['Anorexia: highest psychiatric mortality', 'Bulimia: Russell sign, hypokalaemia'] },
    { hook: 'Bulimia purging = "hypokalaemia + alkalosis + enamel erosion + parotids + Russell sign"', expansion: ['Arrhythmia risk', 'Weight often normal'] },
  ],

  traps: [
    {
      questionCategory: 'Recognising bulimia at a normal weight',
      wrongInstinct: 'A patient with a normal body weight cannot have a serious eating disorder',
      rightAnswer: 'BULIMIA nervosa typically occurs at a NORMAL or near-normal body weight, yet carries serious risks (hypokalaemia and arrhythmia from purging); normal weight does NOT exclude a dangerous eating disorder',
      why: 'Because bulimic patients often look well and maintain normal weight, the diagnosis is missed if you rely on low weight alone — the purging complications (electrolytes, dental erosion, Russell sign) are the clues.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A normal-weight young woman has dental enamel erosion, parotid swelling, calluses on the knuckles (Russell sign) and hypokalaemia. The most likely diagnosis is:',
      options: [
        { id: 'a', text: 'Anorexia nervosa' },
        { id: 'b', text: 'Bulimia nervosa' },
        { id: 'c', text: 'Binge-eating disorder' },
        { id: 'd', text: 'Marasmus' },
      ],
      answerId: 'b',
      explanation: 'Recurrent self-induced vomiting at a normal body weight, with dental erosion, parotid enlargement, Russell sign and hypokalaemia, is characteristic of bulimia nervosa. Anorexia nervosa instead features markedly low body weight.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which is the most immediately life-threatening medical concern in a purging eating disorder?',
      options: [
        { id: 'a', text: 'Hypokalaemia causing cardiac arrhythmia' },
        { id: 'b', text: 'Dental erosion' },
        { id: 'c', text: 'Parotid swelling' },
        { id: 'd', text: 'Lanugo hair' },
      ],
      answerId: 'a',
      explanation: 'Repeated vomiting/laxative use causes potassium loss; hypokalaemia (with metabolic alkalosis) can precipitate fatal cardiac arrhythmias — the most urgent danger. Refeeding must also be cautious to avoid refeeding syndrome.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default eatingDisorders;
