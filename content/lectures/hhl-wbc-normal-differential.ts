import type { Lecture } from '../../lib/types';

export const hhlWbcNormalDifferential: Lecture = {
  id: 'hhl-wbc-normal-differential',
  title: 'Normal Leukocytes & the Differential',
  system: 'heme',
  source: 'L4 — White Blood Cells: Morphology & Non-neoplastic',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L4 WBC non-neoplastic' },
    { kind: 'investigation', label: 'The differential count' },
    { kind: 'mechanism', label: 'Segmented vs band' },
    { kind: 'exam', label: 'Leukocyte morphology' },
  ],

  highYield: [
    'Adult differential in descending order: **Neutrophils (~40–75%) > Lymphocytes (~20–45%) > Monocytes (~2–10%) > Eosinophils (~1–6%) > Basophils (<1–2%)** — "**Never Let Monkeys Eat Bananas**".',
    '**Neutrophil** = multilobed nucleus + fine granules, the **first responder to bacteria**; **segmented (mature)** vs **band (immature "stab" cell)**.',
    '**Lymphocyte** = round dense nucleus, thin cytoplasm (adaptive immunity, **predominant in young children**); **monocyte** = largest, horseshoe nucleus → tissue macrophage.',
    '**Eosinophil** = bilobed, orange-red granules (parasites/allergy); **basophil** = dark granules obscuring the nucleus (**histamine/heparin**).',
    '**"Left shift" = increased immature neutrophils (bands, metamyelocytes)** released by the marrow in **acute bacterial infection** — always interpret using **absolute counts, not percentages**.',
  ],

  mechanism: {
    title: 'Read the differential: proportions, maturity, meaning',
    steps: [
      { id: 's1', label: 'Order N > L > M > E > B ("Never Let Monkeys Eat Bananas")', emphasis: 'key' },
      { id: 's2', label: 'Neutrophil = segmented (mature) vs band (immature)' },
      { id: 's3', label: 'Left shift = more bands/immature forms → acute bacterial demand', emphasis: 'key' },
      { id: 's4', label: 'Lymphocyte (adaptive), monocyte → macrophage, eosinophil (parasite/allergy), basophil (histamine)' },
    ],
  },

  examFindings: [
    { sign: 'Neutrophils forming the majority (40–75%) in an adult', mechanism: 'Normal differential', significance: 'supportive' },
    { sign: 'Band forms/metamyelocytes in blood (left shift)', mechanism: 'Marrow releasing immature neutrophils in acute bacterial infection', significance: 'key' },
    { sign: 'Lymphocyte predominance in a young child', mechanism: 'Physiological childhood differential', significance: 'supportive' },
    { sign: 'Bilobed cell with orange granules', mechanism: 'Eosinophil (parasite/allergy)', significance: 'supportive' },
    { sign: 'Cell with dark granules obscuring the nucleus', mechanism: 'Basophil (histamine/heparin)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Increased immature neutrophils (bands) — "left shift"', meaning: 'Marrow responding to acute bacterial infection' },
    { clue: 'Absolute count = WBC × (percentage ÷ 100)', meaning: 'Gives the count that actually matters clinically' },
    { clue: 'Lymphocyte-predominant differential in a 2-year-old', meaning: 'Physiological, not pathological' },
    { clue: 'Largest leucocyte with a horseshoe nucleus + vacuoles', meaning: 'Monocyte' },
  ],

  treatment: [
    { logic: 'Interpret with absolute counts and the patient\'s age', detail: 'Convert percentages to absolute counts; remember children are lymphocyte-predominant; a left shift signals bacterial infection but is not itself "treated".' },
  ],

  mnemonics: [
    { hook: 'Never Let Monkeys Eat Bananas — Neutrophils, Lymphocytes, Monocytes, Eosinophils, Basophils (most → least)', expansion: ['Neutrophils 40–75% (most abundant)', 'Basophils <1–2% (rarest)', 'Bands = immature neutrophils = left shift'] },
  ],

  traps: [
    {
      questionCategory: 'Percentage vs absolute count',
      wrongInstinct: 'A low neutrophil percentage always means neutropenia',
      rightAnswer: 'What matters is the ABSOLUTE neutrophil count (WBC × %/100), not the percentage',
      why: 'A low percentage with a high total WBC can still be a normal or raised absolute count — always calculate the absolute value.',
    },
    {
      questionCategory: 'Meaning of "left shift"',
      wrongInstinct: 'A left shift means a shift toward lymphocytes',
      rightAnswer: 'Left shift = increased IMMATURE neutrophils (bands/metamyelocytes) released by the marrow',
      why: 'It reflects accelerated granulopoiesis in acute bacterial infection, not any change in lymphocytes.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'In a healthy adult, the most numerous circulating white cell is the:',
      options: [
        { id: 'a', text: 'Lymphocyte' },
        { id: 'b', text: 'Neutrophil' },
        { id: 'c', text: 'Monocyte' },
        { id: 'd', text: 'Eosinophil' },
      ],
      answerId: 'b',
      explanation: 'Neutrophils make up ~40–75% of adult leucocytes (the largest fraction); the descending order is Neutrophils > Lymphocytes > Monocytes > Eosinophils > Basophils.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A patient with acute appendicitis has many band forms on the blood film. This "left shift" indicates:',
      options: [
        { id: 'a', text: 'Release of immature neutrophils by the marrow' },
        { id: 'b', text: 'A shift toward lymphocyte production' },
        { id: 'c', text: 'Increased eosinophils' },
        { id: 'd', text: 'Megaloblastic change' },
      ],
      answerId: 'a',
      explanation: 'A left shift is the appearance of immature neutrophils (bands, metamyelocytes) as the marrow accelerates granulopoiesis in response to acute bacterial infection.',
      tests: 'mechanism',
    },
  ],
};

export default hhlWbcNormalDifferential;
