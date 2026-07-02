import type { Lecture } from '../../lib/types';

export const urinaryTractPathology: Lecture = {
  id: 'urinary-tract-pathology',
  title: 'Urinary Tract Pathology & Stones',
  system: 'renal',
  source: 'L4 — Urinary Tract Pathology',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L4 Urinary Tract Pathology' },
    { kind: 'mechanism', label: 'Obstruction & urolithiasis' },
    { kind: 'exam', label: 'Stone types; hydronephrosis' },
  ],

  highYield: [
    '**The lower urinary tract (ureters, bladder, urethra) is affected by OBSTRUCTION, STONES, INFLAMMATION and NEOPLASIA. OBSTRUCTION anywhere → back-pressure → HYDRONEPHROSIS (dilated pelvicalyceal system) → progressive parenchymal atrophy and, if bilateral/prolonged, renal failure. Common causes by age: children — congenital (PUJ obstruction, posterior urethral valves); adults — stones; older men — BENIGN PROSTATIC HYPERPLASIA; and pelvic tumours.**',
    '**UROLITHIASIS (stones): CALCIUM (oxalate/phosphate) stones are commonest (~80%, radio-opaque; hypercalciuria/hyperoxaluria); STRUVITE (magnesium-ammonium-phosphate) stones form in ALKALINE urine from UREASE-producing organisms (Proteus) → staghorn calculi; URIC ACID stones (radiolUCent, acidic urine, gout/high purine); CYSTINE stones (cystinuria, hexagonal crystals, children). Presentation: severe colicky loin-to-groin pain, haematuria.**',
    '**Stones cause pain and obstruction and predispose to infection; management depends on size/site — small stones pass with hydration/analgesia, larger/obstructing stones need lithotripsy or surgery, and an OBSTRUCTED, INFECTED kidney (fever + obstruction) is a urological EMERGENCY needing urgent drainage. Prevention: hydration and stone-specific measures (citrate, low sodium/oxalate; alkalinise for uric acid/cystine).**',
    '**Other pathology: CYSTITIS (inflammation — infective or, e.g., cyclophosphamide haemorrhagic cystitis), and structural anomalies. Bladder outlet obstruction (BPH) causes hesitancy, poor stream, incomplete emptying, retention and secondary UTI/stones. Neoplasms are covered separately, but chronic irritation/stones raise the risk of urothelial malignancy.**',
    '**The take-home: obstruction → hydronephrosis → renal atrophy (children congenital, adults stones, older men BPH); stones — CALCIUM commonest (radio-opaque), STRUVITE (Proteus/urease, alkaline, staghorn), URIC ACID (radiolucent, acidic), CYSTINE (children); obstructed + infected kidney = emergency drainage.** Urease/struvite links to [[uti-pathogenesis-microbiology]]; obstructive nephropathy detail is in [[interstitial-nephritis-obstruction]]; tumours in [[urinary-system-neoplasms]].',
  ],

  mechanism: {
    title: 'Obstruction → hydronephrosis → atrophy; stones (calcium/struvite/uric acid/cystine); obstructed+infected = emergency',
    steps: [
      { id: 's1', label: 'Obstruction → back-pressure → hydronephrosis → parenchymal atrophy/failure', emphasis: 'key' },
      { id: 's2', label: 'Causes: children congenital (PUJ/PUV), adults stones, older men BPH, pelvic tumour', emphasis: 'key' },
      { id: 's3', label: 'Stones: calcium commonest (radio-opaque); struvite (Proteus/alkaline/staghorn)', emphasis: 'key' },
      { id: 's4', label: 'Uric acid (radiolucent, acidic, gout); cystine (children, hexagonal)', emphasis: 'key' },
      { id: 's5', label: 'Obstructed + infected kidney = emergency drainage', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Dilated pelvicalyceal system on imaging', mechanism: 'Hydronephrosis from obstruction', significance: 'key' },
    { sign: 'Severe colicky loin-to-groin pain with haematuria', mechanism: 'Ureteric stone (renal colic)', significance: 'key' },
    { sign: 'Radiolucent stone in acidic urine, patient with gout', mechanism: 'Uric acid stone', significance: 'key' },
    { sign: 'Staghorn calculus in alkaline urine', mechanism: 'Struvite stone (Proteus/urease)', significance: 'key' },
    { sign: 'Fever with an obstructing stone', mechanism: 'Obstructed, infected kidney — urgent drainage', significance: 'key' },
  ],

  investigations: [
    { clue: 'The consequence of urinary tract obstruction', meaning: 'Hydronephrosis → renal atrophy/failure' },
    { clue: 'The commonest stone type', meaning: 'Calcium (oxalate/phosphate) — radio-opaque' },
    { clue: 'The radiolucent stone associated with acidic urine/gout', meaning: 'Uric acid stone' },
    { clue: 'The obstructed-kidney scenario that is an emergency', meaning: 'Obstruction plus infection (needs urgent drainage)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Obstruction is a reversible cause of renal failure if relieved promptly (hydronephrosis → atrophy otherwise), and stone type dictates prevention (hydration; citrate/low-oxalate for calcium; alkalinisation for uric acid/cystine; treat Proteus for struvite). The critical emergency is an obstructed, infected kidney requiring urgent drainage. Struvite ties to urease organisms ([[uti-pathogenesis-microbiology]]); obstructive nephropathy is expanded in [[interstitial-nephritis-obstruction]]; urothelial/renal tumours in [[urinary-system-neoplasms]].' },
  ],

  mnemonics: [
    { hook: 'Stones: "Calcium (common, opaque), Struvite (Proteus/staghorn), Uric acid (lUcent/acidic), Cystine (kids)"', expansion: ['Obstruction → hydronephrosis', 'Colic = loin to groin'] },
    { hook: '"Obstructed + infected kidney = drain NOW (emergency)"', expansion: ['Children: PUJ/PUV', 'Older men: BPH'] },
  ],

  traps: [
    {
      questionCategory: 'Obstructed infected kidney',
      wrongInstinct: 'A kidney stone with fever just needs antibiotics and analgesia',
      rightAnswer: 'An OBSTRUCTING stone WITH INFECTION (fever, systemic upset) is a urological EMERGENCY — antibiotics alone cannot sterilise an obstructed, pus-filled system; it requires URGENT DECOMPRESSION/DRAINAGE (nephrostomy or ureteric stent) to prevent pyonephrosis, sepsis and kidney loss',
      why: 'Infection behind an obstruction cannot drain or be cleared by antibiotics alone, so prompt drainage — not just medical therapy — is life- and kidney-saving; missing this leads to sepsis.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which urinary stone type is typically radiolucent and forms in acidic urine, classically in patients with gout or high purine turnover?',
      options: [
        { id: 'a', text: 'Calcium oxalate' },
        { id: 'b', text: 'Uric acid' },
        { id: 'c', text: 'Struvite' },
        { id: 'd', text: 'Cystine' },
      ],
      answerId: 'b',
      explanation: 'Uric acid stones are radiolucent (not seen on plain X-ray), form in acidic urine, and are associated with gout/hyperuricosuria; they may be dissolved by urinary alkalinisation. Calcium stones are radio-opaque and commonest, and struvite stones form in alkaline urine from urease-producing organisms.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Prolonged urinary tract obstruction leads to:',
      options: [
        { id: 'a', text: 'Hydronephrosis with progressive renal parenchymal atrophy' },
        { id: 'b', text: 'Increased glomerular filtration' },
        { id: 'c', text: 'Shrinkage of the renal pelvis' },
        { id: 'd', text: 'No effect if urine is sterile' },
      ],
      answerId: 'a',
      explanation: 'Obstruction raises pressure upstream, dilating the pelvicalyceal system (hydronephrosis) and, over time, compressing and atrophying the renal parenchyma — potentially causing renal failure if bilateral or prolonged. Prompt relief of obstruction can reverse early damage.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default urinaryTractPathology;
