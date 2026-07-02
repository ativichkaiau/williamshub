import type { Lecture } from '../../lib/types';

export const urineBiochemicalComposition: Lecture = {
  id: 'urine-biochemical-composition',
  title: 'Biochemistry of Normal & Abnormal Urine',
  system: 'renal',
  source: 'L9 — Biochemistry of Urine',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L9 Urine Biochemistry' },
    { kind: 'mechanism', label: 'Nitrogenous waste' },
    { kind: 'exam', label: 'Normal constituents' },
  ],

  highYield: [
    '**Normal urine is ~95% water plus dissolved solutes** — the kidney\'s way of excreting nitrogenous waste and surplus electrolytes while conserving what the body needs. The major organic solutes are **urea** (the main nitrogenous waste), **creatinine** and **uric acid**; the major inorganic solutes are **Na⁺, K⁺, Cl⁻, phosphate, sulfate, ammonium, Ca²⁺ and Mg²⁺**.',
    '**Urea is the principal nitrogenous end-product of protein/amino-acid metabolism** (made in the liver urea cycle from ammonia) and the largest solute by mass. **Creatinine** is a fairly constant product of muscle creatine breakdown, filtered and minimally reabsorbed — which is why it is used to estimate GFR and to "normalise" spot urine ratios (e.g. protein:creatinine). **Uric acid** is the end-product of purine catabolism.',
    '**Normal urine should NOT contain appreciable glucose, protein, ketones, blood, bilirubin or bacteria** — their presence defines abnormal ("pathological") constituents. **Proteinuria** signals glomerular or tubular disease; **glucosuria** signals plasma glucose above the renal threshold; **ketonuria** signals fat catabolism (DKA/starvation); **bilirubinuria** signals conjugated hyperbilirubinaemia (biliary obstruction).',
    '**24-hour excretion figures worth knowing (orders of magnitude):** urea is by far the largest (tens of grams), then NaCl and other electrolytes, with creatinine relatively fixed to muscle mass. Because volume varies, many analytes are expressed as a **ratio to creatinine** to correct for dilution in a spot sample.',
    '**Urine chemistry underpins the interpretation of the sediment.** Solute supersaturation determines which **crystals** form (urate in acid urine, calcium phosphate/struvite in alkaline urine), and **Tamm–Horsfall protein** secreted by the thick ascending limb forms the matrix of **casts**. So the biochemistry of what is dissolved directly predicts what is seen under the microscope.',
  ],

  mechanism: {
    title: 'Excrete nitrogenous waste + electrolytes; conserve nutrients',
    steps: [
      { id: 's1', label: '~95% water + solutes (urea, creatinine, urate, electrolytes)', emphasis: 'key' },
      { id: 's2', label: 'Urea = main nitrogenous waste (liver urea cycle)', emphasis: 'key' },
      { id: 's3', label: 'Creatinine = constant (muscle) → GFR marker & ratio denominator' },
      { id: 's4', label: 'Abnormal: glucose, protein, ketones, blood, bilirubin, bacteria', emphasis: 'key' },
      { id: 's5', label: 'Solute supersaturation + Tamm–Horsfall protein → crystals & casts' },
    ],
  },

  examFindings: [
    { sign: 'Urea is the largest solute in urine', mechanism: 'Main nitrogenous end-product of protein metabolism', significance: 'key' },
    { sign: 'Creatinine excretion is relatively constant', mechanism: 'Reflects muscle mass; basis of clearance and spot ratios', significance: 'key' },
    { sign: 'Proteinuria, glucosuria, ketonuria = abnormal constituents', mechanism: 'Normally absent from urine', significance: 'key' },
    { sign: 'Dark urine positive for bilirubin', mechanism: 'Conjugated hyperbilirubinaemia (biliary obstruction)', significance: 'supportive' },
    { sign: 'Uric acid crystals in acidic urine', mechanism: 'Purine catabolism product; supersaturation at low pH', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The main nitrogenous waste product in urine', meaning: 'Urea' },
    { clue: 'The solute used to normalise spot-urine measurements', meaning: 'Creatinine' },
    { clue: 'The protein forming the matrix of urinary casts', meaning: 'Tamm–Horsfall protein (uromodulin)' },
    { clue: 'The end-product of purine metabolism excreted in urine', meaning: 'Uric acid' },
  ],

  treatment: [
    { logic: 'Why urine biochemistry matters', detail: 'It defines "normal" so abnormal constituents stand out on the dipstick ([[urinalysis-physical-chemical]]) and predicts the crystals and casts of the sediment ([[urine-microscopy-sediment]]). Urea/creatinine handling ties to [[glomerular-filtration-gfr]] and [[urine-concentration-countercurrent]]; electrolyte excretion to [[renal-potassium-handling]] and [[renal-calcium-phosphate-handling]].' },
  ],

  mnemonics: [
    { hook: 'Normal urine solutes: "Urea, Uric acid, Creatinine + salts"', expansion: ['Urea = biggest (protein waste)', 'Creatinine = muscle, constant', 'Uric acid = purines'] },
    { hook: 'Abnormal = the dipstick "should-be-negatives": glucose, protein, ketones, blood, bilirubin', expansion: ['Each maps to a systemic cause', 'Bacteria/nitrite = infection'] },
  ],

  traps: [
    {
      questionCategory: 'Why creatinine is used to normalise spot urine tests',
      wrongInstinct: 'Creatinine is measured because it is a toxic waste that must be tracked',
      rightAnswer: 'Creatinine is used as a denominator (e.g. protein:creatinine ratio) because it is excreted at a fairly CONSTANT rate proportional to muscle mass, so it corrects a random sample for how dilute or concentrated it is',
      why: 'Its steady excretion, not its toxicity, makes it the reference; dividing an analyte by creatinine removes the effect of variable urine concentration in a spot sample.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The principal nitrogenous waste product excreted in normal human urine is:',
      options: [
        { id: 'a', text: 'Creatinine' },
        { id: 'b', text: 'Uric acid' },
        { id: 'c', text: 'Urea' },
        { id: 'd', text: 'Ammonia' },
      ],
      answerId: 'c',
      explanation: 'Urea, synthesised in the hepatic urea cycle from ammonia produced by amino-acid catabolism, is the main nitrogenous waste and the largest solute in urine by mass. Creatinine and uric acid are excreted in much smaller amounts.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which of the following would be considered an ABNORMAL (pathological) constituent of urine?',
      options: [
        { id: 'a', text: 'Urea' },
        { id: 'b', text: 'Creatinine' },
        { id: 'c', text: 'Glucose' },
        { id: 'd', text: 'Sodium' },
      ],
      answerId: 'c',
      explanation: 'Glucose should be fully reabsorbed and absent from normal urine; its appearance (glucosuria) indicates plasma glucose above the renal threshold. Urea, creatinine and sodium are normal constituents.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default urineBiochemicalComposition;
