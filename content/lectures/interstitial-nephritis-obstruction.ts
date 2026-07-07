import type { Lecture } from '../../lib/types';

export const interstitialNephritisObstruction: Lecture = {
  id: 'interstitial-nephritis-obstruction',
  title: 'Interstitial Nephritis & Obstructive Uropathy',
  system: 'renal',
  source: 'L7 — Interstitial & Mechanical Renal Disease',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L7 Interstitial & Mechanical' },
    { kind: 'mechanism', label: 'Tubulointerstitial vs obstructive' },
    { kind: 'exam', label: 'AIN (drugs); post-renal AKI' },
  ],

  highYield: [
    'Tubulointerstitial disease affects the tubules/interstitium rather than glomeruli. ACUTE INTERSTITIAL NEPHRITIS (AIN) is a hypersensitivity reaction, usually to DRUGS (antibiotics — penicillins/cephalosporins, NSAIDs, PPIs, diuretics), presenting as AKI with the classic (but often absent) triad of FEVER, RASH and EOSINOPHILIA, plus WHITE-CELL casts and sterile pyuria/EOSINOPHILURIA — treated by STOPPING the culprit drug (± steroids).',
    'CHRONIC tubulointerstitial nephritis results from prolonged insults: chronic obstruction, reflux nephropathy, ANALGESIC nephropathy (chronic NSAID/phenacetin → papillary necrosis), lithium, heavy metals, and chronic pyelonephritis — causing slowly progressive CKD with modest proteinuria and tubular dysfunction. ACUTE TUBULAR NECROSIS (ischaemic or nephrotoxic) is the commonest intrinsic AKI (muddy-brown casts).',
    'MECHANICAL/OBSTRUCTIVE uropathy = "POST-RENAL" AKI: obstruction (stones, BPH, tumour, retroperitoneal fibrosis, clot) → back-pressure → hydronephrosis → falling GFR. BILATERAL (or single-kidney) obstruction is needed to cause significant AKI. It is a REVERSIBLE cause if relieved promptly; look for it in every AKI (bladder scan for retention, ultrasound for hydronephrosis).',
    'Relief of obstruction can be followed by POST-OBSTRUCTIVE DIURESIS (large urine output as retained solute/urea and downregulated concentrating ability wash out) — monitor for volume depletion and electrolyte loss. PAPILLARY NECROSIS (diabetes, sickle cell, analgesics, pyelonephritis, obstruction — "DSAPO") sloughs papillae → haematuria/colic.',
    '**The take-home: ACUTE interstitial nephritis = drug hypersensitivity AKI (fever/rash/eosinophilia, WBC casts, eosinophiluria → STOP the drug); chronic interstitial disease (obstruction/reflux/analgesics/lithium → CKD); OBSTRUCTIVE (post-renal) AKI needs bilateral obstruction, is REVERSIBLE, and can cause post-obstructive diuresis.** ATN/pre-/post-renal AKI is expanded in [[acute-kidney-injury]]; obstruction causes/stones are in [[urinary-tract-pathology]]; offending drugs link to BCP ([[antibacterial-cell-wall-agents]]).',
  ],

  mechanism: {
    title: 'Acute interstitial nephritis (drug hypersensitivity → stop drug) / chronic TIN / obstructive (post-renal, reversible) AKI + post-obstructive diuresis',
    steps: [
      { id: 's1', label: 'AIN = drug hypersensitivity AKI (antibiotics/NSAIDs/PPIs); fever/rash/eosinophilia, WBC casts', emphasis: 'key' },
      { id: 's2', label: 'Treat AIN by STOPPING the culprit drug (± steroids)', emphasis: 'key' },
      { id: 's3', label: 'Chronic TIN: obstruction, reflux, analgesic (papillary necrosis), lithium → CKD', emphasis: 'key' },
      { id: 's4', label: 'Obstructive (post-renal) AKI: needs bilateral/single-kidney obstruction; REVERSIBLE if relieved', emphasis: 'key' },
      { id: 's5', label: 'Post-obstructive diuresis after relief → monitor volume/electrolytes', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'AKI with fever, rash, eosinophilia and eosinophiluria after a new drug', mechanism: 'Acute interstitial nephritis (drug hypersensitivity)', significance: 'key' },
    { sign: 'AKI with a palpable bladder / bilateral hydronephrosis', mechanism: 'Obstructive (post-renal) AKI — reversible', significance: 'key' },
    { sign: 'Large diuresis after relieving obstruction', mechanism: 'Post-obstructive diuresis (monitor volume/electrolytes)', significance: 'key' },
    { sign: 'Papillary necrosis with haematuria in a diabetic/analgesic user', mechanism: 'Chronic tubulointerstitial injury', significance: 'supportive' },
    { sign: 'Slowly progressive CKD with modest proteinuria and tubular defects', mechanism: 'Chronic tubulointerstitial nephritis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The classic (often incomplete) triad of acute interstitial nephritis', meaning: 'Fever, rash and eosinophilia' },
    { clue: 'The first treatment step in drug-induced AIN', meaning: 'Stop the culprit drug (± steroids)' },
    { clue: 'The AKI category caused by obstruction', meaning: 'Post-renal (obstructive) AKI' },
    { clue: 'The diuresis that can follow relief of obstruction', meaning: 'Post-obstructive diuresis' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Both interstitial nephritis and obstruction are potentially REVERSIBLE causes of kidney injury: AIN resolves on stopping the offending drug (± steroids), and post-renal AKI recovers with prompt relief of obstruction (then watch for post-obstructive diuresis). Missing them wastes a chance to recover renal function. ATN and the pre-/post-renal AKI framework are in [[acute-kidney-injury]]; obstruction/stones in [[urinary-tract-pathology]]; culprit antibiotics in BCP ([[antibacterial-cell-wall-agents]]).' },
  ],

  mnemonics: [
    { hook: 'AIN = "drug allergy of the kidney" (fever/rash/eosinophils, WBC casts) → stop the drug', expansion: ['Culprits: antibiotics, NSAIDs, PPIs', 'Eosinophiluria'] },
    { hook: 'Papillary necrosis "DSAPO": Diabetes, Sickle cell, Analgesics, Pyelonephritis, Obstruction', expansion: ['Post-renal AKI = reversible', 'Post-obstructive diuresis → monitor'] },
  ],

  traps: [
    {
      questionCategory: 'Obstruction as a reversible cause of AKI',
      wrongInstinct: 'Acute kidney injury is a parenchymal (intrinsic) problem, so imaging for obstruction is unnecessary',
      rightAnswer: 'Every AKI work-up must EXCLUDE post-renal OBSTRUCTION (bladder scan for retention, ultrasound for hydronephrosis), because obstructive AKI is REVERSIBLE if relieved promptly — and although each kidney can compensate, obstruction causing significant AKI usually means BILATERAL (or single-functioning-kidney) blockage; missing it risks permanent loss',
      why: 'Obstruction is a readily reversible cause of AKI that is easy to overlook and simple to treat (catheter/nephrostomy), so ruling it out early prevents avoidable permanent kidney damage.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient develops acute kidney injury with fever, a rash, eosinophilia and white-cell casts one week after starting an antibiotic. The most likely diagnosis and management are:',
      options: [
        { id: 'a', text: 'Acute tubular necrosis — give more of the drug' },
        { id: 'b', text: 'Acute interstitial nephritis — stop the offending drug (± steroids)' },
        { id: 'c', text: 'Post-streptococcal GN — penicillin' },
        { id: 'd', text: 'Minimal change disease — steroids only' },
      ],
      answerId: 'b',
      explanation: 'Drug-induced acute interstitial nephritis is a hypersensitivity reaction causing AKI with fever, rash, eosinophilia and eosinophiluria/white-cell casts. The mainstay is prompt withdrawal of the culprit drug (antibiotics, NSAIDs, PPIs), sometimes with corticosteroids, and it is usually reversible.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'Why must obstruction be excluded in every case of acute kidney injury?',
      options: [
        { id: 'a', text: 'It is never treatable' },
        { id: 'b', text: 'Post-renal (obstructive) AKI is reversible if the obstruction is relieved promptly' },
        { id: 'c', text: 'It only affects children' },
        { id: 'd', text: 'It always requires dialysis' },
      ],
      answerId: 'b',
      explanation: 'Obstruction is a readily reversible cause of AKI — relief (catheter, stent or nephrostomy) can restore function if done before permanent damage. Evaluation includes a bladder scan (for retention) and ultrasound (for hydronephrosis); recovery may be followed by a post-obstructive diuresis.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default interstitialNephritisObstruction;
