import type { Lecture } from '../../lib/types';

export const urineDipstickChemistry: Lecture = {
  id: 'urine-dipstick-chemistry',
  title: 'Urine Dipstick Chemistry & Interpretation',
  system: 'renal',
  source: 'L3 — Urine Collection & Examination',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L3 Dipstick' },
    { kind: 'mechanism', label: 'Pads: blood, protein, LE, nitrite, glucose' },
    { kind: 'exam', label: 'Nitrite+LE for UTI; false results' },
  ],

  highYield: [
    'The dipstick is a rapid semi-quantitative screen; each pad has caveats. BLOOD pad detects haem PEROXIDASE, so it is positive with RBCs, free HAEMOGLOBIN and MYOGLOBIN — a positive blood pad with NO red cells on microscopy suggests haemoglobinuria/MYOGLOBINURIA (rhabdomyolysis). PROTEIN pad mainly detects ALBUMIN and is insensitive to light chains/Bence-Jones — so a normal protein pad does NOT exclude myeloma (use sulfosalicylic acid / send for light chains).',
    'For UTI: LEUKOCYTE ESTERASE (from neutrophils) indicates PYURIA, and NITRITE indicates Enterobacterales that reduce dietary nitrate to nitrite (E. coli, Proteus, Klebsiella). NITRITE is specific but INSENSITIVE — it needs adequate bladder dwell time and nitrate, and is NEGATIVE with non-nitrate-reducers (Enterococcus, Staph. saprophyticus, Pseudomonas). LE + nitrite together strongly support UTI; both negative make it less likely.',
    'GLUCOSE appears when the filtered load exceeds tubular reabsorption (plasma glucose ≳10 mmol/L) — hyperglycaemia (diabetes) or a low renal threshold (SGLT2 inhibitors, pregnancy, Fanconi). KETONES (starvation, DKA, alcohol) and specific gravity/pH (stone risk, RTA) complete the panel. Bilirubin/urobilinogen screen for liver/haemolytic disease.',
    'Key FALSE results: blood pad positive without RBCs → myo/haemoglobinuria; protein pad misses light chains; nitrite false-negative with non-reducers or dilute/short-dwell urine; ascorbic acid (vitamin C) causes false-negative blood/glucose; very alkaline or contaminated urine causes false-positive protein. Always correlate the dipstick with microscopy and the clinical picture.',
    '**The take-home: dipstick pads — blood (haem peroxidase → also myo/Hb), protein (albumin, misses light chains), LE (pyuria) + nitrite (Enterobacterales; specific but insensitive, negative with Enterococcus/Staph. saprophyticus), glucose (exceeds tubular threshold). Know the false results and confirm with microscopy.** The sediment/microscopy is [[urine-microscopy-casts-crystals]]; the overview is [[urinalysis-urine-examination]].',
  ],

  mechanism: {
    title: 'Dipstick pads and pitfalls: blood (haem peroxidase→also myo/Hb), protein (albumin, misses light chains), LE+nitrite (UTI; nitrite specific/insensitive), glucose (>threshold)',
    steps: [
      { id: 's1', label: 'Blood pad = haem peroxidase → positive with RBC, Hb, myoglobin', emphasis: 'key' },
      { id: 's2', label: 'Protein pad ≈ albumin only → misses Bence-Jones/light chains', emphasis: 'danger' },
      { id: 's3', label: 'Leukocyte esterase = pyuria; nitrite = nitrate-reducing Enterobacterales', emphasis: 'key' },
      { id: 's4', label: 'Nitrite specific but insensitive (neg: Enterococcus, S. saprophyticus, dilute urine)', emphasis: 'key' },
      { id: 's5', label: 'Glucose = filtered load exceeds tubular reabsorption; confirm with microscopy', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Dipstick blood positive but no red cells on microscopy', mechanism: 'Haemoglobinuria/myoglobinuria (e.g. rhabdomyolysis)', significance: 'key' },
    { sign: 'Normal protein pad in a patient with suspected myeloma', mechanism: 'Dipstick misses light chains (Bence-Jones)', significance: 'key' },
    { sign: 'Positive leukocyte esterase and nitrite with dysuria', mechanism: 'UTI with a nitrate-reducing organism', significance: 'key' },
    { sign: 'Enterococcal UTI with a negative nitrite test', mechanism: 'Enterococcus does not reduce nitrate (false-negative)', significance: 'supportive' },
    { sign: 'Glycosuria with normal blood glucose on an SGLT2 inhibitor', mechanism: 'Lowered renal glucose threshold', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A positive blood pad with no RBCs', meaning: 'Myoglobinuria or haemoglobinuria' },
    { clue: 'The protein the dipstick misses', meaning: 'Immunoglobulin light chains (Bence-Jones)' },
    { clue: 'The two UTI pads', meaning: 'Leukocyte esterase (pyuria) + nitrite (Enterobacterales)' },
    { clue: 'Organisms giving a false-negative nitrite', meaning: 'Enterococcus, Staph. saprophyticus, Pseudomonas' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The dipstick is fast but each pad has pitfalls that change interpretation: a positive blood pad without RBCs signals rhabdomyolysis/haemolysis (check CK, protect the kidney), a normal protein pad does not exclude myeloma (send light chains), nitrite negativity does not exclude UTI with non-reducing organisms, and glycosuria may reflect a lowered threshold rather than hyperglycaemia. Correlating dipstick with microscopy ([[urine-microscopy-casts-crystals]]) and the clinical picture prevents error. The overview is [[urinalysis-urine-examination]].' },
  ],

  mnemonics: [
    { hook: 'Blood pad = "haem peroxidase" → RBC, Hb, Myoglobin', expansion: ['No RBC + positive = myo/Hb', 'Check CK for rhabdomyolysis'] },
    { hook: 'UTI = "LE + Nitrite"; nitrite specific but insensitive', expansion: ['Neg nitrite: Enterococcus/S. saprophyticus', 'Protein pad misses light chains'] },
  ],

  traps: [
    {
      questionCategory: 'Blood pad positive but no red cells',
      wrongInstinct: 'A positive dipstick for blood always means bleeding (haematuria) into the urine',
      rightAnswer: 'The blood pad detects haem PEROXIDASE activity, so it is also positive with free HAEMOGLOBIN and MYOGLOBIN — a positive blood pad with NO red cells on microscopy indicates haemoglobinuria or MYOGLOBINURIA (e.g. rhabdomyolysis), not haematuria; this should prompt checking creatine kinase and protecting the kidney, not a urological haematuria work-up',
      why: 'Misreading myoglobinuria as haematuria delays recognition of rhabdomyolysis (a cause of pigment-induced AKI) and sends the work-up down the wrong path; the RBC-negative microscopy is the key discriminator.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A urine dipstick is strongly positive for blood, but microscopy shows no red blood cells. This most likely indicates:',
      options: [
        { id: 'a', text: 'Bladder cancer' },
        { id: 'b', text: 'Haemoglobinuria or myoglobinuria (e.g. rhabdomyolysis)' },
        { id: 'c', text: 'A glomerular bleed' },
        { id: 'd', text: 'A false-positive that can be ignored' },
      ],
      answerId: 'b',
      explanation: 'The blood pad detects haem peroxidase activity, so free haemoglobin and myoglobin also turn it positive. A positive blood pad without red cells on microscopy suggests haemoglobinuria or myoglobinuria (rhabdomyolysis) — check creatine kinase and guard against pigment-induced AKI.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A patient with clinical cystitis has a negative urine nitrite test. The best interpretation is:',
      options: [
        { id: 'a', text: 'UTI is excluded' },
        { id: 'b', text: 'UTI is still possible; nitrite is insensitive and negative with non-nitrate-reducers (e.g. Enterococcus)' },
        { id: 'c', text: 'The specimen must be contaminated' },
        { id: 'd', text: 'The organism must be E. coli' },
      ],
      answerId: 'b',
      explanation: 'Nitrite is specific but insensitive: it requires nitrate-reducing Enterobacterales and adequate bladder dwell time, and is negative with organisms that do not reduce nitrate (Enterococcus, Staph. saprophyticus, Pseudomonas) or with dilute/short-dwell urine. A negative nitrite does not exclude UTI.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default urineDipstickChemistry;
