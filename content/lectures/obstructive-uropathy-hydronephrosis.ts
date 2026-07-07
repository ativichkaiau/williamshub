import type { Lecture } from '../../lib/types';

export const obstructiveUropathyHydronephrosis: Lecture = {
  id: 'obstructive-uropathy-hydronephrosis',
  title: 'Obstructive Uropathy & Hydronephrosis',
  system: 'renal',
  source: 'L7 — Interstitial & Mechanical Renal Disease',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L7 Obstruction' },
    { kind: 'mechanism', label: 'Back-pressure; post-obstructive diuresis' },
    { kind: 'exam', label: 'Bilateral obstruction; relieve to preserve function' },
  ],

  highYield: [
    'OBSTRUCTION to urine flow raises pressure back to the nephron (HYDRONEPHROSIS = dilated pelvis/calyces; hydroureter), impairing filtration and, if prolonged, causing tubular atrophy and permanent damage. Causes are grouped by level: LUMINAL (stone, clot, sloughed papilla), MURAL (stricture, tumour, PUJ obstruction), and EXTRINSIC (prostate/BPH, pelvic tumour, retroperitoneal fibrosis, pregnancy).',
    'Whether obstruction causes AKI depends on LATERALITY: UNILATERAL obstruction with a normal contralateral kidney may not raise creatinine (the other kidney compensates) but silently damages the blocked one, whereas BILATERAL obstruction (or obstruction of a SINGLE functioning kidney), e.g. bladder outlet obstruction from BPH or a pelvic tumour, causes POSTRENAL AKI. Presentation ranges from colic (acute stone) to painless progressive renal failure (slow extrinsic obstruction).',
    'Diagnosis: ULTRASOUND is first-line (shows hydronephrosis; a palpable bladder/high residual points to outlet obstruction), with CT to define the cause. Bladder catheterisation both relieves outlet obstruction and measures residual volume. The urgent priority is to RELIEVE the obstruction (catheter for outlet obstruction; ureteric stent or nephrostomy for upper-tract obstruction) — the sooner relieved, the more function recovers.',
    'After relief of bilateral/high-grade obstruction, watch for POST-OBSTRUCTIVE DIURESIS — a large diuresis from accumulated solute/urea, tubular dysfunction and volume overload — which can cause dehydration and electrolyte disturbance and needs monitoring and fluid/electrolyte replacement. An obstructed, INFECTED system (fever) is an emergency needing urgent decompression.',
    '**The take-home: obstruction → back-pressure → hydronephrosis → (post)renal AKI if BILATERAL or single kidney (unilateral may be silent but damaging); ultrasound diagnoses; RELIEVE promptly (catheter/stent/nephrostomy) to preserve function; watch POST-OBSTRUCTIVE DIURESIS; obstructed+infected = emergency.** Interstitial nephritis is [[acute-interstitial-nephritis]]; stones are [[nephrolithiasis-urolithiasis]]; the overview is [[interstitial-nephritis-obstruction]].',
  ],

  mechanism: {
    title: 'Obstruction → back-pressure/hydronephrosis → postrenal AKI if bilateral/single kidney; ultrasound diagnoses; relieve promptly to preserve function; watch post-obstructive diuresis',
    steps: [
      { id: 's1', label: 'Obstruction raises intraluminal pressure → hydronephrosis → ↓GFR', emphasis: 'key' },
      { id: 's2', label: 'Unilateral (normal other kidney) may not raise creatinine but damages blocked side', emphasis: 'key' },
      { id: 's3', label: 'Bilateral / single-kidney obstruction → postrenal AKI', emphasis: 'danger' },
      { id: 's4', label: 'Ultrasound first-line; relieve (catheter/stent/nephrostomy) promptly', emphasis: 'key' },
      { id: 's5', label: 'After relief: post-obstructive diuresis → monitor fluids/electrolytes', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Dilated renal pelvis and calyces on ultrasound', mechanism: 'Hydronephrosis from obstruction', significance: 'key' },
    { sign: 'Rising creatinine with a palpable bladder in a man with BPH', mechanism: 'Bladder outlet obstruction → postrenal AKI', significance: 'key' },
    { sign: 'Normal creatinine despite a unilateral obstructing stone', mechanism: 'Contralateral kidney compensates (silent damage)', significance: 'key' },
    { sign: 'Large diuresis with volume depletion after relieving obstruction', mechanism: 'Post-obstructive diuresis', significance: 'key' },
    { sign: 'Fever with an obstructed collecting system', mechanism: 'Obstructed infected system — emergency decompression', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The first-line imaging for suspected obstruction', meaning: 'Ultrasound (hydronephrosis)' },
    { clue: 'The obstruction pattern that causes postrenal AKI', meaning: 'Bilateral (or single functioning kidney)' },
    { clue: 'The immediate treatment of bladder outlet obstruction', meaning: 'Urethral (or suprapubic) catheter' },
    { clue: 'The complication to monitor after relieving obstruction', meaning: 'Post-obstructive diuresis' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Obstruction is a reversible cause of renal failure, so recognising it (hydronephrosis on ultrasound, palpable bladder, postrenal AKI) and relieving it promptly (catheter for outlet obstruction; stent/nephrostomy for upper-tract) preserves function — the longer the delay, the more permanent the damage. Bilateral or single-kidney obstruction causes AKI, while unilateral obstruction can be creatinine-silent yet damaging. After relief, post-obstructive diuresis needs fluid/electrolyte monitoring, and an obstructed infected system is an emergency. Stones are [[nephrolithiasis-urolithiasis]]; interstitial nephritis is [[acute-interstitial-nephritis]]; AKI is [[aki-prerenal-intrinsic-postrenal]].' },
  ],

  mnemonics: [
    { hook: 'Obstruction levels: "Luminal, Mural, Extrinsic" (stone / stricture-tumour / BPH-pelvic)', expansion: ['Ultrasound = hydronephrosis', 'Bilateral → postrenal AKI'] },
    { hook: '"Relieve fast, then watch post-obstructive diuresis"', expansion: ['Catheter/stent/nephrostomy', 'Obstructed+infected = emergency'] },
  ],

  traps: [
    {
      questionCategory: 'Unilateral obstruction with normal creatinine',
      wrongInstinct: 'If the creatinine is normal, significant urinary obstruction can be ruled out',
      rightAnswer: 'A normal creatinine does NOT exclude obstruction: with UNILATERAL obstruction a normal CONTRALATERAL kidney maintains overall function so creatinine can stay normal, while the obstructed kidney is silently damaged and can be lost; only BILATERAL obstruction (or obstruction of a single functioning kidney) reliably raises creatinine — so imaging (ultrasound), not creatinine alone, is needed to detect and relieve obstruction in time',
      why: 'Relying on creatinine misses unilateral obstruction that can progressively and irreversibly destroy the affected kidney; ultrasound detects the hydronephrosis so the obstruction can be relieved before function is lost.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which obstruction pattern most reliably causes postrenal acute kidney injury (a rise in creatinine)?',
      options: [
        { id: 'a', text: 'Unilateral ureteric obstruction with a normal opposite kidney' },
        { id: 'b', text: 'Bilateral obstruction, or obstruction of a single functioning kidney' },
        { id: 'c', text: 'A small non-obstructing renal cyst' },
        { id: 'd', text: 'Microscopic haematuria alone' },
      ],
      answerId: 'b',
      explanation: 'Unilateral obstruction with a normal contralateral kidney may not raise creatinine (though it silently damages the blocked kidney), whereas bilateral obstruction or obstruction of a single functioning kidney reduces total GFR and causes postrenal AKI — commonly bladder outlet obstruction from BPH.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'After relieving high-grade bilateral obstruction, a large urine output with hypovolaemia and electrolyte disturbance develops. This is:',
      options: [
        { id: 'a', text: 'Post-obstructive diuresis, requiring fluid/electrolyte monitoring and replacement' },
        { id: 'b', text: 'A sign the obstruction was not truly relieved' },
        { id: 'c', text: 'Always harmless and needs no monitoring' },
        { id: 'd', text: 'Evidence of new glomerulonephritis' },
      ],
      answerId: 'a',
      explanation: 'Post-obstructive diuresis follows relief of bilateral/high-grade obstruction, from accumulated solute/urea, tubular dysfunction and volume overload; it can cause dehydration and electrolyte disturbance, so urine output, volume status and electrolytes must be monitored and replaced.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default obstructiveUropathyHydronephrosis;
