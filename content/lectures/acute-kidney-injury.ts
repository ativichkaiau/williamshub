import type { Lecture } from '../../lib/types';

export const acuteKidneyInjury: Lecture = {
  id: 'acute-kidney-injury',
  title: 'Acute Kidney Injury',
  system: 'renal',
  source: 'L11 — Acute Kidney Injury & CKD',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L11 AKI' },
    { kind: 'mechanism', label: 'Pre-renal / intrinsic / post-renal' },
    { kind: 'exam', label: 'Prerenal vs ATN; hyperkalaemia' },
  ],

  highYield: [
    'ACUTE KIDNEY INJURY (AKI) = an abrupt fall in GFR (rise in creatinine and/or fall in urine output over hours–days, staged by KDIGO). Classify by SITE: PRE-RENAL (hypoperfusion — commonest), INTRINSIC (renal parenchymal), and POST-RENAL (obstruction — [[interstitial-nephritis-obstruction]]). This anatomical framework drives the entire work-up and management.',
    'PRE-RENAL AKI: reduced perfusion (hypovolaemia, hypotension/sepsis, heart failure, NSAIDs/ACEi altering glomerular haemodynamics) with STRUCTURALLY INTACT tubules → the kidney AVIDLY reabsorbs sodium and water: URINE Na LOW (<20), FE_Na <1%, HIGH urine osmolality, high BUN:creatinine ratio (>20:1), bland sediment. It is REVERSIBLE with prompt restoration of perfusion — but prolonged pre-renal ischaemia progresses to ATN.',
    'INTRINSIC AKI is most often ACUTE TUBULAR NECROSIS (ischaemic or nephrotoxic — aminoglycosides, contrast, myoglobin/rhabdomyolysis): tubules are damaged so they CANNOT reabsorb sodium → URINE Na HIGH (>40), FE_Na >2%, isosthenuria, MUDDY-BROWN granular casts. Other intrinsic causes: acute interstitial nephritis, glomerulonephritis, and vascular (TMA).',
    'Consequences/emergencies of AKI ("AEIOU" dialysis indications): severe HYPERKALAEMIA (ECG changes → cardiac arrest), metabolic ACIDOSIS, fluid OVERLOAD/pulmonary oedema, URAEMIA (encephalopathy, pericarditis), and some intoxications. Management: treat the cause, restore perfusion, stop nephrotoxins, correct hyperkalaemia/fluid/acid-base, and dialyse for refractory complications.',
    '**The take-home: AKI = abrupt ↓GFR — PRE-renal (hypoperfusion; low urine Na, FE_Na <1%, BUN:Cr >20, reversible) vs ATN (tubular damage; high urine Na, FE_Na >2%, muddy-brown casts) vs POST-renal (obstruction). Emergencies = hyperkalaemia, acidosis, fluid overload, uraemia (dialysis: AEIOU).** Casts localise via [[urinalysis-urine-examination]]; progression/persistence leads to [[chronic-kidney-disease]]; nephrotoxic drugs link to BCP.',
  ],

  mechanism: {
    title: 'Pre-renal (hypoperfusion, low urine Na, reversible) vs ATN (tubular damage, high urine Na, muddy-brown casts) vs post-renal (obstruction)',
    steps: [
      { id: 's1', label: 'AKI = abrupt ↓GFR; classify pre-renal / intrinsic / post-renal', emphasis: 'key' },
      { id: 's2', label: 'Pre-renal: hypoperfusion; avid Na reabsorption → urine Na <20, FE_Na <1%, BUN:Cr >20 (reversible)', emphasis: 'key' },
      { id: 's3', label: 'ATN (intrinsic): tubular damage → urine Na >40, FE_Na >2%, muddy-brown casts', emphasis: 'key' },
      { id: 's4', label: 'Nephrotoxic ATN: aminoglycosides, contrast, myoglobin (rhabdomyolysis)', emphasis: 'key' },
      { id: 's5', label: 'Emergencies (dialysis AEIOU): hyperkalaemia, Acidosis, Overload, Uraemia, intoxication', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'AKI with urine Na <20, FE_Na <1%, BUN:creatinine >20, bland sediment', mechanism: 'Pre-renal AKI (hypoperfusion, reversible)', significance: 'key' },
    { sign: 'AKI with urine Na >40, FE_Na >2% and muddy-brown granular casts', mechanism: 'Acute tubular necrosis (intrinsic)', significance: 'key' },
    { sign: 'AKI after aminoglycosides, contrast or rhabdomyolysis', mechanism: 'Nephrotoxic acute tubular necrosis', significance: 'key' },
    { sign: 'Peaked T waves / arrhythmia in AKI', mechanism: 'Hyperkalaemia — emergency (dialysis indication)', significance: 'key' },
    { sign: 'Pulmonary oedema and uraemic pericarditis refractory to therapy', mechanism: 'AKI complications requiring dialysis', significance: 'key' },
  ],

  investigations: [
    { clue: 'The three anatomical categories of AKI', meaning: 'Pre-renal, intrinsic, post-renal' },
    { clue: 'The FE_Na and urine Na of pre-renal AKI', meaning: 'FE_Na <1%, urine Na <20 (avid reabsorption)' },
    { clue: 'The urinary hallmark of acute tubular necrosis', meaning: 'Muddy-brown granular casts (FE_Na >2%)' },
    { clue: 'The dialysis indications in AKI', meaning: 'Acidosis, Electrolytes (hyperkalaemia), Intoxication, Overload, Uraemia (AEIOU)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The pre-renal/intrinsic/post-renal framework directs management: pre-renal AKI reverses with perfusion (fluids/treat sepsis, stop NSAIDs/ACEi), ATN is supported while it recovers (stop nephrotoxins), and post-renal AKI is relieved by decompression. The urine indices (FE_Na, urine Na, BUN:Cr) and casts separate pre-renal from ATN. The life-threatening complications (hyperkalaemia, acidosis, overload, uraemia) may need dialysis. Casts via [[urinalysis-urine-examination]]; unresolved AKI → [[chronic-kidney-disease]].' },
  ],

  mnemonics: [
    { hook: 'Pre-renal vs ATN: "Pre-renal saves sodium (FE_Na <1%, BUN:Cr >20); ATN wastes it (FE_Na >2%, muddy-brown casts)"', expansion: ['Pre-renal reversible', 'ATN = tubular damage'] },
    { hook: 'Dialysis "AEIOU": Acidosis, Electrolytes (K⁺), Intoxication, Overload, Uraemia', expansion: ['Hyperkalaemia = ECG emergency', 'Post-renal = obstruction'] },
  ],

  traps: [
    {
      questionCategory: 'Pre-renal AKI vs ATN',
      wrongInstinct: 'Pre-renal AKI and acute tubular necrosis are managed the same way because both raise creatinine',
      rightAnswer: 'They are opposite in mechanism and urine chemistry: PRE-RENAL AKI has intact tubules avidly reabsorbing sodium (urine Na <20, FE_Na <1%, BUN:Cr >20, bland urine) and REVERSES with restored perfusion, whereas ATN has DAMAGED tubules that cannot reabsorb sodium (urine Na >40, FE_Na >2%, muddy-brown casts) and needs supportive care while it recovers — fluids help pre-renal but won\'t "fix" established ATN',
      why: 'Distinguishing them (mainly by FE_Na/urine indices and sediment) determines whether aggressive volume repletion will reverse the AKI (pre-renal) or whether the priority is supportive management and avoiding further injury (ATN).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A hypovolaemic patient has AKI with a fractional excretion of sodium (FE_Na) of 0.5%, urine sodium of 12 mmol/L and a BUN:creatinine ratio of 25:1. This indicates:',
      options: [
        { id: 'a', text: 'Acute tubular necrosis' },
        { id: 'b', text: 'Pre-renal acute kidney injury' },
        { id: 'c', text: 'Post-renal obstruction' },
        { id: 'd', text: 'Glomerulonephritis' },
      ],
      answerId: 'b',
      explanation: 'A low FE_Na (<1%), low urine sodium (<20) and high BUN:creatinine ratio (>20:1) with a bland sediment indicate pre-renal AKI — intact tubules avidly reabsorbing sodium/water in response to hypoperfusion. It is reversible with prompt restoration of perfusion.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which is an indication for urgent dialysis in acute kidney injury?',
      options: [
        { id: 'a', text: 'A mildly raised creatinine alone' },
        { id: 'b', text: 'Refractory hyperkalaemia with ECG changes' },
        { id: 'c', text: 'Low urine sodium' },
        { id: 'd', text: 'A single episode of vomiting' },
      ],
      answerId: 'b',
      explanation: 'Dialysis indications in AKI (AEIOU) include refractory hyperkalaemia (electrolytes) with ECG changes, severe metabolic acidosis, certain intoxications, refractory fluid overload/pulmonary oedema, and symptomatic uraemia (encephalopathy, pericarditis). A modest creatinine rise alone is not an indication.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default acuteKidneyInjury;
