import type { Lecture } from '../../lib/types';
import { URINALYSIS_DIPSTICK } from '../../lib/figures';

export const urinalysisPhysicalChemical: Lecture = {
  id: 'urinalysis-physical-chemical',
  title: 'Urinalysis I: Physical & Chemical Examination',
  system: 'renal',
  source: 'L8 — Urinalysis I: Physical & Chemical',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L8 Urinalysis I' },
    { kind: 'investigation', label: 'Dipstick' },
    { kind: 'exam', label: 'Specific gravity' },
  ],

  highYield: [
    '**Urinalysis has three parts: physical, chemical (dipstick) and microscopic.** It is a cheap, rapid window not only onto kidney disease but onto systemic conditions (diabetes, liver disease, haemolysis, infection). Use a **fresh, clean-catch, first-morning** sample where possible — the first void is most concentrated and cells/casts lyse within 1–3 hours at room temperature.',
    '**Physical examination:** note **volume, colour, clarity (turbidity), odour and specific gravity.** Normal urine is clear and pale-to-amber yellow (urochrome). Turbidity suggests cells, crystals or infection; red/brown suggests blood, myoglobin or bilirubin. **Specific gravity (~1.003–1.030)** reflects concentrating ability — high when dehydrated/ADH is high, fixed near 1.010 (isosthenuria) when the kidney cannot concentrate or dilute.',
    '**Chemical (dipstick) — normal urine has essentially NO glucose, protein, ketones, blood, bilirubin or nitrite.** Key pads: **protein** (glomerular disease), **glucose** (plasma glucose above the renal threshold — diabetes), **ketones** (DKA, starvation), **blood** (haematuria/haemoglobinuria/myoglobinuria), **leukocyte esterase + nitrite** (UTI; nitrite = Gram-negative bacteria reducing nitrate), **bilirubin/urobilinogen** (biliary obstruction vs haemolysis), plus **pH** and **specific gravity**.',
    '**Interpret discrepancies:** a positive "blood" pad with NO red cells on microscopy means **haemoglobin or myoglobin** (haemolysis or rhabdomyolysis), not bleeding. Dipstick protein mainly detects **albumin** and misses light chains — so it can be negative in myeloma (needs specific tests/urine protein electrophoresis). Very dilute urine can mask abnormalities.',
    '**pH and specific gravity add physiological context:** urine pH (~4.5–8) reflects acid–base status and stone risk (alkaline → struvite/calcium phosphate; acid → uric acid stones); specific gravity/osmolality assesses hydration and the concentrating axis. Together the physical and chemical screen guide whether microscopy and further tests are needed.',
  ],

  mechanism: {
    title: 'Physical → chemical (dipstick) → microscopy on a fresh sample',
    steps: [
      { id: 's1', label: 'Physical: colour, clarity, odour, volume, specific gravity', emphasis: 'key' },
      { id: 's2', label: 'Dipstick: protein, glucose, ketones, blood, LE/nitrite, bili, pH', emphasis: 'key' },
      { id: 's3', label: 'Normal urine has no glucose/protein/ketones/blood/nitrite', emphasis: 'key' },
      { id: 's4', label: 'Reconcile discrepancies (blood pad + no RBC = Hb/myoglobin)' },
      { id: 's5', label: 'Fresh first-morning sample; microscopy confirms the dipstick' },
    ],
  },

  examFindings: [
    { sign: 'Glucose on dipstick', mechanism: 'Plasma glucose exceeds the renal threshold (diabetes)', significance: 'key' },
    { sign: 'Positive nitrite + leukocyte esterase', mechanism: 'UTI (Gram-negative bacteria; pyuria)', significance: 'key' },
    { sign: 'Positive "blood" pad with no RBCs on microscopy', mechanism: 'Haemoglobinuria or myoglobinuria (haemolysis/rhabdomyolysis)', significance: 'key' },
    { sign: 'Specific gravity fixed at ~1.010 (isosthenuria)', mechanism: 'Loss of concentrating/diluting ability (CKD)', significance: 'supportive' },
    { sign: 'Ketonuria', mechanism: 'DKA, starvation or prolonged fasting', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The dipstick pads positive in a urinary tract infection', meaning: 'Leukocyte esterase and nitrite' },
    { clue: 'A positive blood pad but no red cells microscopically', meaning: 'Haemoglobinuria or myoglobinuria' },
    { clue: 'The physical measure of concentrating ability', meaning: 'Specific gravity (osmolality)' },
    { clue: 'Why dipstick can miss myeloma proteinuria', meaning: 'It detects albumin, not filtered light chains' },
  ],

  treatment: [
    { logic: 'Why urinalysis matters', detail: 'It is the first-line, whole-body screen — glucosuria reflects the Tm concept ([[tubular-reabsorption-secretion]]), proteinuria reflects barrier injury ([[nephron-kidney-histology]]), specific gravity reflects the concentrating axis ([[adh-water-regulation]]). Positive findings are confirmed on microscopy of the sediment ([[urine-microscopy-sediment]]); normal chemical constituents are detailed in [[urine-biochemical-composition]].' },
  ],

  mnemonics: [
    { hook: 'Normal urine dipstick = "all negative" for glucose, protein, ketones, blood, nitrite, bilirubin', expansion: ['Presence of any = investigate', 'pH and specific gravity are quantitative, not "positive/negative"'] },
    { hook: 'UTI pads: "Nitrite + Leukocytes"', expansion: ['Nitrite = Gram-negative (reduce nitrate)', 'Leukocyte esterase = pyuria/WBCs'] },
  ],

  traps: [
    {
      questionCategory: 'Interpreting a positive blood dipstick',
      wrongInstinct: 'A positive "blood" pad always means bleeding into the urinary tract',
      rightAnswer: 'The dipstick blood pad detects heme, so it is positive with red cells, free HAEMOGLOBIN (haemolysis) OR MYOGLOBIN (rhabdomyolysis); microscopy showing no red cells points to haemoglobinuria/myoglobinuria',
      why: 'The pad reacts to the peroxidase activity of heme regardless of source; you must correlate with microscopy to distinguish true haematuria from pigment, which have very different causes.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A urine dipstick is strongly positive for blood, but microscopy of the sediment shows no red blood cells. This most likely indicates:',
      options: [
        { id: 'a', text: 'Glomerulonephritis with red cell casts' },
        { id: 'b', text: 'Haemoglobinuria or myoglobinuria' },
        { id: 'c', text: 'A normal finding' },
        { id: 'd', text: 'Bladder stone' },
      ],
      answerId: 'b',
      explanation: 'The blood pad detects heme; a positive pad without red cells on microscopy indicates free haemoglobin (intravascular haemolysis) or myoglobin (rhabdomyolysis) rather than true haematuria.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A urine specific gravity fixed at about 1.010 regardless of hydration status (isosthenuria) suggests:',
      options: [
        { id: 'a', text: 'Normal concentrating ability' },
        { id: 'b', text: 'Loss of the ability to concentrate or dilute urine (e.g. chronic kidney disease)' },
        { id: 'c', text: 'Severe dehydration' },
        { id: 'd', text: 'Excess ADH secretion' },
      ],
      answerId: 'b',
      explanation: 'A specific gravity locked near that of plasma ultrafiltrate (~1.010) means the tubules can neither concentrate nor dilute — a sign of impaired renal function such as chronic kidney disease.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Urinalysis: physical, chemical & microscopic', svg: URINALYSIS_DIPSTICK, caption: 'The dipstick panel and what each positive pad signifies, plus physical and microscopic components.' },
  ],
};

export default urinalysisPhysicalChemical;
