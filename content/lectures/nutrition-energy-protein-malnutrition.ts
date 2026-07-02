import type { Lecture } from '../../lib/types';

export const nutritionEnergyProteinMalnutrition: Lecture = {
  id: 'nutrition-energy-protein-malnutrition',
  title: 'Nutrition, Energy & Protein-Energy Malnutrition',
  system: 'gi',
  source: 'L7 — Nutrition & Malnutrition',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'L7 Nutrition' },
    { kind: 'mechanism', label: 'Energy balance' },
    { kind: 'exam', label: 'Kwashiorkor / marasmus' },
  ],

  highYield: [
    '**Nutrition supplies energy and building blocks: macronutrients (carbohydrate ~4 kcal/g, protein ~4 kcal/g, fat ~9 kcal/g) provide energy; micronutrients (vitamins, minerals) enable metabolism.** Total energy expenditure = **basal metabolic rate (largest component) + diet-induced thermogenesis + physical activity.** Body weight reflects energy intake versus expenditure.',
    '**Protein-energy malnutrition (PEM) has two classic severe forms. MARASMUS is a global energy (calorie) deficiency → severe wasting of muscle and fat, a "skin-and-bones" child, but preserved (adaptive) albumin and no oedema.** It is total-energy starvation with the body consuming its own stores.',
    '**KWASHIORKOR is a predominantly PROTEIN deficiency (often when a child is weaned onto a starchy, protein-poor diet) → hypoalbuminaemia → OEDEMA (including ascites), a distended fatty liver, skin/hair changes and apathy — sometimes with a deceptively "normal" weight because of oedema.** The oedema (low oncotic pressure) is the distinguishing feature from marasmus.',
    '**Malnutrition is assessed by history, anthropometry (BMI, mid-upper-arm circumference, weight-for-height), and biochemistry (albumin/prealbumin).** Undernutrition impairs immunity, wound healing and growth; it coexists with micronutrient deficiencies (iron, vitamin A, iodine, zinc) that have their own consequences (detailed in [[fat-soluble-vitamins]] and [[water-soluble-vitamins-trace-elements]]).',
    '**REFEEDING SYNDROME is a dangerous complication of feeding a severely malnourished patient too fast:** the insulin surge drives **phosphate, potassium and magnesium into cells → life-threatening hypophosphataemia, arrhythmia and thiamine deficiency**. Refeed slowly, replace electrolytes and give thiamine — a high-yield safety point.',
  ],

  mechanism: {
    title: 'Energy balance; marasmus (energy) vs kwashiorkor (protein/oedema); refeeding risk',
    steps: [
      { id: 's1', label: 'Energy: carbs/protein 4, fat 9 kcal/g; TEE = BMR + thermogenesis + activity', emphasis: 'key' },
      { id: 's2', label: 'Marasmus = total energy deficit → wasting, NO oedema, albumin preserved', emphasis: 'key' },
      { id: 's3', label: 'Kwashiorkor = protein deficit → hypoalbuminaemia → OEDEMA + fatty liver', emphasis: 'key' },
      { id: 's4', label: 'Assess: BMI, MUAC, weight-for-height, albumin/prealbumin' },
      { id: 's5', label: 'Refeeding syndrome: insulin → ↓PO₄/K⁺/Mg²⁺ → arrhythmia (feed slowly + thiamine)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Severe muscle + fat wasting, no oedema, preserved albumin', mechanism: 'Marasmus (total energy deficiency)', significance: 'key' },
    { sign: 'Oedema/ascites + fatty liver + skin/hair changes', mechanism: 'Kwashiorkor (protein deficiency, hypoalbuminaemia)', significance: 'key' },
    { sign: 'Hypophosphataemia + arrhythmia after starting feeding', mechanism: 'Refeeding syndrome', significance: 'key' },
    { sign: 'Impaired wound healing and infection in a malnourished patient', mechanism: 'PEM impairs immunity and repair', significance: 'supportive' },
    { sign: 'Low mid-upper-arm circumference in a child', mechanism: 'Anthropometric marker of malnutrition', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The energy yields of carbohydrate, protein and fat', meaning: '~4, ~4 and ~9 kcal/g respectively' },
    { clue: 'The PEM form with wasting but no oedema', meaning: 'Marasmus (energy deficiency)' },
    { clue: 'The PEM form with oedema and hypoalbuminaemia', meaning: 'Kwashiorkor (protein deficiency)' },
    { clue: 'The electrolyte that falls dangerously in refeeding syndrome', meaning: 'Phosphate (also K⁺ and Mg²⁺)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Malnutrition impairs immunity, healing and growth; refeeding must be cautious (slow calories, replace phosphate/potassium/magnesium, give thiamine). It coexists with micronutrient deficiencies ([[fat-soluble-vitamins]], [[water-soluble-vitamins-trace-elements]]) and can complicate chronic disease (e.g. malabsorption in [[acute-chronic-pancreatitis]] and Crohn — [[inflammatory-bowel-disease]]). It is the counterpoint to over-nutrition ([[obesity-pathophysiology]]).' },
  ],

  mnemonics: [
    { hook: 'Marasmus vs Kwashiorkor: "Marasmus = Muscle wasting (no oedema); Kwashiorkor = swollen (protein/oedema)"', expansion: ['Marasmus = total calories', 'Kwashiorkor = protein → low albumin → oedema + fatty liver'] },
    { hook: 'Refeeding = "insulin pushes PO₄/K/Mg into cells" (feed slow + thiamine)', expansion: ['Hypophosphataemia → arrhythmia', 'Give thiamine first'] },
  ],

  traps: [
    {
      questionCategory: 'Distinguishing kwashiorkor from marasmus',
      wrongInstinct: 'A malnourished child with a near-normal weight cannot be severely malnourished',
      rightAnswer: 'KWASHIORKOR (protein deficiency) causes OEDEMA that can mask weight loss, so the weight may look deceptively normal despite severe malnutrition; MARASMUS (energy deficiency) instead causes obvious wasting without oedema',
      why: 'The oedema of hypoalbuminaemia adds fluid weight, hiding tissue loss; relying on weight alone misses kwashiorkor — the oedema and low albumin are the giveaways.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A weaned child has generalised oedema, a distended fatty liver, skin and hair changes, and hypoalbuminaemia, with a deceptively near-normal weight. This is:',
      options: [
        { id: 'a', text: 'Marasmus' },
        { id: 'b', text: 'Kwashiorkor' },
        { id: 'c', text: 'Obesity' },
        { id: 'd', text: 'Refeeding syndrome' },
      ],
      answerId: 'b',
      explanation: 'Kwashiorkor is predominantly protein deficiency: hypoalbuminaemia causes oedema (and ascites), with fatty liver and skin/hair changes. The oedema can mask weight loss. Marasmus is total energy deficiency with wasting and no oedema.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Refeeding syndrome in a severely malnourished patient is characterised by which dangerous electrolyte shift after feeding is started?',
      options: [
        { id: 'a', text: 'Hyperphosphataemia' },
        { id: 'b', text: 'Insulin-driven intracellular shift of phosphate, potassium and magnesium (hypophosphataemia)' },
        { id: 'c', text: 'Hypernatraemia' },
        { id: 'd', text: 'Hypercalcaemia' },
      ],
      answerId: 'b',
      explanation: 'Refeeding triggers an insulin surge that drives phosphate, potassium and magnesium into cells, causing life-threatening hypophosphataemia (and arrhythmias); thiamine demand also rises. Feed slowly and replace electrolytes and thiamine.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default nutritionEnergyProteinMalnutrition;
