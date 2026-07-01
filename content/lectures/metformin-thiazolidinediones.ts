import type { Lecture } from '../../lib/types';

export const metforminThiazolidinediones: Lecture = {
  id: 'metformin-thiazolidinediones',
  title: 'Insulin Sensitizers: Metformin & TZDs',
  system: 'endocrine',
  source: 'L12 — Drugs Used in Diabetes',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L12 Diabetes Drugs' },
    { kind: 'treatment', label: 'Metformin / thiazolidinediones' },
    { kind: 'mechanism', label: 'Reduced gluconeogenesis / PPAR-gamma' },
    { kind: 'exam', label: 'Lactic acidosis and heart failure' },
  ],

  highYield: [
    '**Metformin** inhibits hepatic gluconeogenesis and activates AMPK, lowering hepatic glucose production while improving insulin sensitivity and skeletal-muscle glucose uptake.',
    'Metformin is used for **T2DM** and can help prevent progression in high-risk prediabetes. It is weight neutral and has little intrinsic hypoglycemia when used alone.',
    'Common toxicity is **GI upset**. Long-term use can cause **vitamin B12 deficiency** with anemia or neuropathy; lactic acidosis is rare but dangerous.',
    'Avoid metformin at **eGFR <30 mL/min/1.73 m2** and use caution when hypoxia or impaired lactate clearance is likely, including significant hepatic/cardiorespiratory failure, alcoholism, or acidosis.',
    '**Thiazolidinediones (TZDs: pioglitazone, rosiglitazone)** activate nuclear **PPAR-gamma**, altering transcription to improve insulin sensitivity. They cause **fluid retention, edema, weight gain, and fractures**; avoid in heart failure and use caution in active liver disease or bladder-cancer history. Pioglitazone can be useful when MASLD/MASH is a priority.',
  ],

  mechanism: {
    title: 'Lower hepatic output or rewrite insulin-response genes',
    steps: [
      { id: 's1', label: 'Metformin -> AMPK + reduced hepatic gluconeogenesis', emphasis: 'key' },
      { id: 's2', label: 'Improved muscle insulin sensitivity -> glucose uptake' },
      { id: 's3', label: 'TZD -> PPAR-gamma transcription -> improved insulin sensitivity' },
      { id: 's4', label: 'TZD sodium/fluid retention -> edema and HF risk', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Diarrhea and abdominal cramping after starting first-line oral therapy', mechanism: 'Common metformin GI effect', significance: 'supportive' },
    { sign: 'Neuropathy with macrocytic anemia on long-term metformin', mechanism: 'Vitamin B12 deficiency', significance: 'key' },
    { sign: 'Edema and heart-failure worsening after pioglitazone', mechanism: 'TZD-associated fluid retention', significance: 'key' },
  ],

  investigations: [
    { clue: 'eGFR before and during metformin therapy', meaning: 'Prevent accumulation and lactic-acidosis risk' },
    { clue: 'Vitamin B12 when anemia or neuropathy develops', meaning: 'Detect long-term metformin toxicity' },
    { clue: 'Weight, edema, liver status, and HF history before TZD', meaning: 'Screen for major TZD harms' },
  ],

  treatment: [
    { logic: 'Use metformin to reduce hepatic glucose output when not contraindicated', detail: 'Titrate to reduce GI intolerance.' },
    { logic: 'Stop/avoid metformin in severe renal failure or active acidosis/hypoxia', detail: 'These settings increase lactic-acidosis risk.' },
    { logic: 'Use a TZD only after checking HF, edema, fracture, liver, and bladder risks', detail: 'Insulin sensitization comes with fluid and skeletal tradeoffs.' },
  ],

  mnemonics: [
    { hook: 'Metformin: gut, B12, lactate', expansion: ['GI upset', 'B12 deficiency', 'Rare lactic acidosis'] },
    { hook: 'TZD makes Tissue sensitive but Traps fluid', expansion: ['PPAR-gamma', 'Edema/HF', 'Weight gain'] },
  ],

  traps: [
    {
      questionCategory: 'Choosing a sensitizer in heart failure',
      wrongInstinct: 'Pioglitazone is safe because it does not directly depress contractility',
      rightAnswer: 'Avoid TZDs in heart failure because fluid retention can precipitate or worsen congestion',
      why: 'The relevant toxicity is volume retention, not negative inotropy.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with T2DM and symptomatic heart failure should generally avoid which insulin-sensitizing class?',
      options: [
        { id: 'a', text: 'Thiazolidinediones' },
        { id: 'b', text: 'DPP-4 inhibitors' },
        { id: 'c', text: 'Alpha-glucosidase inhibitors' },
        { id: 'd', text: 'Meglitinides' },
      ],
      answerId: 'a',
      explanation: 'TZDs activate PPAR-gamma but cause sodium/fluid retention, edema, weight gain, and can worsen heart failure.',
      tests: 'treatment',
    },
  ],
};

export default metforminThiazolidinediones;
