import type { Lecture } from '../../lib/types';

export const akiPrerenalIntrinsicPostrenal: Lecture = {
  id: 'aki-prerenal-intrinsic-postrenal',
  title: 'AKI: Prerenal, Intrinsic & Postrenal',
  system: 'renal',
  source: 'L11 — Acute Kidney Injury & CKD',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L11 AKI approach' },
    { kind: 'mechanism', label: 'Localise the cause' },
    { kind: 'exam', label: 'Prerenal vs ATN indices' },
  ],

  highYield: [
    '**A structured way to think about acute kidney injury is to localise the cause to PRERENAL, INTRINSIC (renal) or POSTRENAL. PRERENAL (the commonest) = reduced renal PERFUSION with structurally normal kidneys: hypovolaemia (bleeding, GI losses, diuretics), hypotension/sepsis, heart failure, and drugs that impair autoregulation (NSAIDs constrict the afferent, ACEi/ARB dilate the efferent). It is RAPIDLY REVERSIBLE if perfusion is restored — but prolonged prerenal ischaemia progresses to ATN.**',
    '**INTRINSIC AKI = damage to the tubules, interstitium, glomeruli or vessels: ACUTE TUBULAR NECROSIS (ATN — ischaemic or toxic, the commonest intrinsic cause; muddy-brown granular casts), acute INTERSTITIAL nephritis (drugs; WBC casts/eosinophils), glomerulonephritis (RBC casts, proteinuria) and vascular causes. POSTRENAL = OBSTRUCTION (stones, prostate, pelvic tumour) — reversible if relieved, needs bilateral/single-kidney obstruction to raise creatinine.**',
    '**Distinguishing PRERENAL from ATN: prerenal kidneys avidly reabsorb sodium and water, so URINE is CONCENTRATED with LOW sodium — FENa <1%, urine Na <20, high urine osmolality, BUN:creatinine >20, and a BLAND sediment (± hyaline casts); ATN loses this ability — FENa >2%, urine Na >40, isosthenuric urine, and MUDDY-BROWN granular casts. (FENa is unreliable with diuretics; use FEurea.)**',
    '**Assessment: history/drugs, volume status, urinalysis + microscopy, ultrasound (exclude obstruction/assess size), and bloods. Management targets the cause: restore perfusion (fluids, treat sepsis/heart failure, stop nephrotoxins) for prerenal; supportive care for ATN (avoid further insults, manage fluid/electrolytes, time to recover); relieve obstruction for postrenal. Watch for and treat the emergencies of AKI — HYPERKALAEMIA, acidosis, and fluid overload.**',
    '**The take-home: localise AKI — PRERENAL (hypoperfusion, reversible; FENa<1%, concentrated urine, bland sediment), INTRINSIC (ATN muddy-brown casts / AIN WBC casts / GN RBC casts), POSTRENAL (obstruction, relieve it). Treat the cause + the emergencies (hyperkalaemia/acidosis/overload). Prolonged prerenal → ATN.** CKD is [[chronic-kidney-disease]]; the AKI detail is [[acute-kidney-injury]]; obstruction is [[obstructive-uropathy-hydronephrosis]]; casts are [[urine-microscopy-casts-crystals]].',
  ],

  mechanism: {
    title: 'Localise AKI: prerenal (hypoperfusion, FENa<1%, reversible) / intrinsic (ATN muddy-brown, AIN WBC casts, GN RBC casts) / postrenal (obstruction); treat cause + hyperkalaemia/acidosis/overload',
    steps: [
      { id: 's1', label: 'Prerenal = ↓perfusion, normal kidneys; FENa<1%, concentrated urine, bland sediment', emphasis: 'key' },
      { id: 's2', label: 'NSAIDs (afferent constrict) + ACEi/ARB (efferent dilate) impair autoregulation', emphasis: 'key' },
      { id: 's3', label: 'Intrinsic: ATN (muddy-brown casts), AIN (WBC casts), GN (RBC casts)', emphasis: 'key' },
      { id: 's4', label: 'Postrenal = obstruction (relieve); prolonged prerenal ischaemia → ATN', emphasis: 'key' },
      { id: 's5', label: 'Treat cause + emergencies: hyperkalaemia, acidosis, fluid overload', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'AKI with FENa <1%, urine Na <20 and a bland sediment', mechanism: 'Prerenal azotaemia (reversible with perfusion)', significance: 'key' },
    { sign: 'AKI with FENa >2% and muddy-brown granular casts', mechanism: 'Acute tubular necrosis', significance: 'key' },
    { sign: 'AKI after NSAID + ACE inhibitor in a volume-depleted patient', mechanism: 'Loss of autoregulation (afferent/efferent)', significance: 'key' },
    { sign: 'Hydronephrosis on ultrasound with AKI', mechanism: 'Postrenal (obstructive) AKI', significance: 'key' },
    { sign: 'Peaked T-waves and a wide QRS in AKI', mechanism: 'Hyperkalaemia — an AKI emergency', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The three-way localisation of AKI', meaning: 'Prerenal / intrinsic / postrenal' },
    { clue: 'The FENa in prerenal AKI', meaning: '<1% (avid sodium reabsorption)' },
    { clue: 'The casts of acute tubular necrosis', meaning: 'Muddy-brown granular casts' },
    { clue: 'The imaging to exclude obstruction', meaning: 'Renal ultrasound' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Localising AKI directs treatment: prerenal AKI reverses with restored perfusion (fluids, treat sepsis/heart failure, stop NSAIDs/ACEi), ATN needs supportive care and avoidance of further insults, and postrenal AKI needs the obstruction relieved. Throughout, the life-threatening emergencies of AKI — hyperkalaemia, metabolic acidosis and fluid overload — must be identified and treated, with dialysis for refractory cases. Prolonged prerenal ischaemia becomes ATN, so early correction matters. CKD is [[chronic-kidney-disease]]; renal replacement is [[renal-replacement-therapy]]; casts are [[urine-microscopy-casts-crystals]].' },
  ],

  mnemonics: [
    { hook: 'AKI = "Pre / Intrinsic / Post" (perfusion / parenchyma / plumbing)', expansion: ['Prerenal FENa<1%, bland', 'ATN FENa>2%, muddy-brown'] },
    { hook: 'AKI emergencies "AEIOU-ish": Acidosis, Electrolytes (K+), Overload → dialysis if refractory', expansion: ['Restore perfusion (prerenal)', 'Relieve obstruction (postrenal)'] },
  ],

  traps: [
    {
      questionCategory: 'Prerenal AKI vs ATN',
      wrongInstinct: 'Prerenal AKI and acute tubular necrosis are the same thing and are managed identically',
      rightAnswer: 'They are a continuum but distinct: PRERENAL AKI has structurally intact tubules that avidly reabsorb sodium/water (FENa <1%, urine Na <20, concentrated urine, bland sediment) and reverses rapidly with restored PERFUSION, whereas ATN reflects established tubular injury (FENa >2%, urine Na >40, isosthenuria, MUDDY-BROWN casts) that does not immediately reverse with fluids and needs supportive care — and prolonged prerenal ischaemia progresses INTO ATN',
      why: 'Giving fluids reverses prerenal AKI but will not fix established ATN (and may cause overload); the urinary indices and sediment distinguish them and prevent both under-resuscitation and fluid overload.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A hypovolaemic patient has AKI with FENa <1%, urine sodium <20 mmol/L, high urine osmolality and a bland sediment. This indicates:',
      options: [
        { id: 'a', text: 'Acute tubular necrosis' },
        { id: 'b', text: 'Prerenal azotaemia' },
        { id: 'c', text: 'Acute interstitial nephritis' },
        { id: 'd', text: 'Postrenal obstruction' },
      ],
      answerId: 'b',
      explanation: 'Avid sodium and water reabsorption (FENa <1%, low urine Na, concentrated urine) with a bland sediment indicates prerenal AKI from hypoperfusion — reversible with restored perfusion. ATN, by contrast, shows FENa >2%, urine Na >40 and muddy-brown casts.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which combination of drugs most predisposes a volume-depleted patient to prerenal AKI by impairing glomerular autoregulation?',
      options: [
        { id: 'a', text: 'An NSAID (afferent constriction) plus an ACE inhibitor/ARB (efferent dilation)' },
        { id: 'b', text: 'Paracetamol plus vitamin C' },
        { id: 'c', text: 'A proton-pump inhibitor plus an antihistamine' },
        { id: 'd', text: 'Inhaled corticosteroids plus a bronchodilator' },
      ],
      answerId: 'a',
      explanation: 'NSAIDs constrict the afferent arteriole (blocking vasodilatory prostaglandins) while ACEi/ARBs dilate the efferent arteriole (blocking angiotensin II); together, in a volume-depleted patient, they undermine the autoregulation that maintains GFR, precipitating prerenal AKI.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default akiPrerenalIntrinsicPostrenal;
