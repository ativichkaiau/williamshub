import type { Lecture } from '../../lib/types';

export const nutritionalAssessmentSupport: Lecture = {
  id: 'nutritional-assessment-support',
  title: 'Nutritional Assessment & Support',
  system: 'gi',
  source: 'L7 — Nutrition & Malnutrition',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'L7 Nutrition' },
    { kind: 'treatment', label: 'Enteral vs parenteral' },
    { kind: 'exam', label: 'Nutritional assessment' },
  ],

  highYield: [
    '**Nutritional assessment identifies patients who are malnourished or at risk, so support can be started before complications (poor healing, infection, muscle loss) develop.** Assessment combines HISTORY (intake, weight change, GI symptoms), ANTHROPOMETRY (BMI, unintentional weight loss %, mid-upper-arm circumference), and BIOCHEMISTRY (albumin/prealbumin as supportive markers).',
    '**Key thresholds worth knowing: a BMI <18.5 kg/m² or unintentional weight loss >10% suggests significant malnutrition; screening tools (e.g. MUST) combine BMI, weight loss and acute-illness effect on intake.** Illness increases requirements (catabolic stress), so hospitalised and post-operative patients are especially at risk.',
    '**Energy and protein needs: roughly ~25–30 kcal/kg/day and ~1.0–1.5 g protein/kg/day (higher in catabolic states), with attention to fluids, electrolytes and micronutrients.** The goal is to meet requirements by the safest effective route.',
    '**Choosing the route follows a simple rule: "if the gut works, use it." ENTERAL nutrition (oral supplements, or tube feeding — nasogastric/PEG) is preferred because it maintains gut integrity, is cheaper and has fewer complications; PARENTERAL (intravenous) nutrition is reserved for a non-functioning or inaccessible gut** (e.g. intestinal failure, obstruction, high-output fistula).',
    'The major hazard of re-feeding a severely malnourished patient is REFEEDING SYNDROME — the insulin surge drives phosphate, potassium and magnesium into cells → dangerous hypophosphataemia and arrhythmia; feed slowly, replace electrolytes, and give thiamine ([[nutrition-energy-protein-malnutrition]]). Nutritional support underpins recovery across surgery, cancer, and chronic GI disease.',
  ],

  mechanism: {
    title: 'Assess (history/anthropometry/biochem) → meet needs by safest route (enteral > parenteral)',
    steps: [
      { id: 's1', label: 'Assess: intake/weight history, BMI/weight-loss%, MUAC, albumin (supportive)', emphasis: 'key' },
      { id: 's2', label: 'Risk: BMI <18.5 or >10% unintentional weight loss; illness ↑needs', emphasis: 'key' },
      { id: 's3', label: 'Targets ~25–30 kcal/kg + ~1–1.5 g protein/kg/day' },
      { id: 's4', label: '"If the gut works, use it": enteral preferred over parenteral', emphasis: 'key' },
      { id: 's5', label: 'Refeeding syndrome risk: feed slowly, replace PO₄/K/Mg + thiamine', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'BMI <18.5 or unintentional weight loss >10%', mechanism: 'Significant malnutrition (needs support)', significance: 'key' },
    { sign: 'Enteral feeding chosen when the gut is functional', mechanism: '"If the gut works, use it" — maintains gut integrity', significance: 'key' },
    { sign: 'Parenteral nutrition used for intestinal failure/obstruction', mechanism: 'Non-functioning or inaccessible gut', significance: 'key' },
    { sign: 'Hypophosphataemia after starting feeding', mechanism: 'Refeeding syndrome', significance: 'key' },
    { sign: 'Low albumin/prealbumin in a sick patient', mechanism: 'Supportive marker (affected by inflammation, not diagnostic alone)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The components of nutritional assessment', meaning: 'History, anthropometry (BMI/weight loss), biochemistry' },
    { clue: 'The BMI threshold suggesting malnutrition', meaning: '<18.5 kg/m² (or >10% unintentional weight loss)' },
    { clue: 'The preferred route of nutritional support', meaning: 'Enteral ("if the gut works, use it")' },
    { clue: 'The dangerous complication of aggressive refeeding', meaning: 'Refeeding syndrome (hypophosphataemia)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Identifying and feeding at-risk patients prevents the complications of malnutrition ([[nutrition-energy-protein-malnutrition]]); the enteral-first rule and cautious refeeding are core safety principles. It applies across GI disease — malabsorption (Crohn — [[inflammatory-bowel-disease]]; pancreatic insufficiency — [[acute-chronic-pancreatitis]]) and eating disorders ([[eating-disorders]]) — and requires micronutrient attention ([[fat-soluble-vitamins]]).' },
  ],

  mnemonics: [
    { hook: 'Route rule: "If the gut works, use it" (enteral > parenteral)', expansion: ['Enteral = maintains gut, cheaper, safer', 'Parenteral = non-functioning/inaccessible gut'] },
    { hook: 'Assess: "BMI + weight-loss% + intake" (MUST tool)', expansion: ['BMI <18.5 or >10% loss = at risk', 'Refeed slowly (avoid refeeding syndrome)'] },
  ],

  traps: [
    {
      questionCategory: 'Choosing enteral vs parenteral nutrition',
      wrongInstinct: 'Intravenous (parenteral) nutrition is the best, most reliable way to feed a malnourished patient',
      rightAnswer: 'ENTERAL nutrition is preferred whenever the gut works ("if the gut works, use it") — it maintains gut integrity and has fewer complications and lower cost; PARENTERAL nutrition is reserved for a non-functioning or inaccessible gut and carries more risks (line sepsis, metabolic complications)',
      why: 'Defaulting to parenteral nutrition exposes patients to avoidable line infections and metabolic problems and lets the gut atrophy; the functional gut should be used whenever possible.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'When a malnourished patient has a functioning gastrointestinal tract, the preferred route of nutritional support is:',
      options: [
        { id: 'a', text: 'Parenteral (intravenous) nutrition' },
        { id: 'b', text: 'Enteral nutrition (oral or tube feeding)' },
        { id: 'c', text: 'Subcutaneous nutrition' },
        { id: 'd', text: 'No support is needed' },
      ],
      answerId: 'b',
      explanation: 'The principle is "if the gut works, use it": enteral nutrition maintains gut integrity, is cheaper and has fewer complications than parenteral nutrition, which is reserved for a non-functioning or inaccessible gut.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'Which finding indicates significant malnutrition warranting nutritional support?',
      options: [
        { id: 'a', text: 'A BMI of 24 kg/m²' },
        { id: 'b', text: 'A BMI below 18.5 kg/m² or unintentional weight loss greater than 10%' },
        { id: 'c', text: 'A stable weight' },
        { id: 'd', text: 'A normal albumin' },
      ],
      answerId: 'b',
      explanation: 'A BMI under 18.5 kg/m² or unintentional weight loss over 10% indicates significant malnutrition and the need for nutritional support, especially in the setting of acute illness which raises requirements.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default nutritionalAssessmentSupport;
