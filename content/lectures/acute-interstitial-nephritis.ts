import type { Lecture } from '../../lib/types';

export const acuteInterstitialNephritis: Lecture = {
  id: 'acute-interstitial-nephritis',
  title: 'Acute Interstitial Nephritis',
  system: 'renal',
  source: 'L7 — Interstitial & Mechanical Renal Disease',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L7 AIN' },
    { kind: 'mechanism', label: 'Drug hypersensitivity of interstitium' },
    { kind: 'exam', label: 'Drug + rash + eosinophils + AKI' },
  ],

  highYield: [
    '**ACUTE INTERSTITIAL NEPHRITIS (AIN) is a hypersensitivity inflammation of the renal INTERSTITIUM (not the glomeruli) causing AKI. Most cases are DRUG-induced: ANTIBIOTICS (penicillins/cephalosporins, sulfonamides, rifampicin), NSAIDs, PROTON-PUMP INHIBITORS, and — increasingly — immune CHECKPOINT INHIBITORS. Non-drug causes: infections and autoimmune disease (sarcoidosis, Sjögren, TINU). It is a T-cell-mediated delayed reaction, so it appears DAYS TO WEEKS after starting the drug.**',
    '**The classic (but often incomplete) triad is FEVER + RASH + EOSINOPHILIA, with AKI. Urine shows WHITE CELLS, WHITE-CELL CASTS and classically EOSINOPHILURIA, often with mild "tubular"-range proteinuria (heavy proteinuria is unusual except with NSAID-associated AIN, which can co-exist with minimal change disease). Only a minority show the full triad, so a high index of suspicion (new drug + AKI) is essential.**',
    '**Diagnosis is often clinical (temporal drug link + sterile pyuria/WBC casts/eosinophiluria + AKI), confirmed by BIOPSY (interstitial oedema and inflammatory infiltrate) when needed. The cornerstone of treatment is to STOP the OFFENDING DRUG promptly — most recover — with corticosteroids considered for severe or non-resolving cases. Delayed withdrawal risks progression to chronic interstitial fibrosis/CKD.**',
    '**CHRONIC interstitial nephritis (from chronic analgesic use, lithium, lead, obstruction, reflux) causes slowly progressive CKD with tubular dysfunction; analgesic nephropathy can cause PAPILLARY NECROSIS. Contrast AIN (interstitial, sterile pyuria/eosinophils, drug-linked) with acute tubular necrosis (muddy-brown casts) and glomerulonephritis (RBC casts, heavy proteinuria).**',
    '**The take-home: AIN = drug hypersensitivity of the interstitium → AKI days–weeks after a drug (antibiotics, NSAIDs, PPIs, checkpoint inhibitors); FEVER + RASH + EOSINOPHILIA (often incomplete) with sterile pyuria/WBC casts/eosinophiluria; treat by STOPPING the drug (± steroids). Delayed withdrawal → chronic fibrosis.** Obstruction is [[obstructive-uropathy-hydronephrosis]]; ATN/AKI is [[aki-prerenal-intrinsic-postrenal]]; the overview is [[interstitial-nephritis-obstruction]].',
  ],

  mechanism: {
    title: 'Drug hypersensitivity of interstitium → AKI days–weeks after drug; fever/rash/eosinophilia (often incomplete), sterile pyuria/WBC casts/eosinophiluria; stop the drug (± steroids)',
    steps: [
      { id: 's1', label: 'T-cell hypersensitivity inflames interstitium → AKI (days–weeks after drug)', emphasis: 'key' },
      { id: 's2', label: 'Culprits: antibiotics, NSAIDs, PPIs, checkpoint inhibitors', emphasis: 'key' },
      { id: 's3', label: 'Triad fever + rash + eosinophilia (often incomplete)', emphasis: 'key' },
      { id: 's4', label: 'Urine: sterile pyuria, WBC casts, eosinophiluria; mild proteinuria', emphasis: 'key' },
      { id: 's5', label: 'Stop the offending drug (± steroids); delay → chronic fibrosis/CKD', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'AKI with fever, rash and eosinophilia after a new antibiotic', mechanism: 'Acute interstitial nephritis', significance: 'key' },
    { sign: 'Sterile pyuria with white-cell casts and eosinophiluria', mechanism: 'Interstitial inflammation (AIN)', significance: 'key' },
    { sign: 'AKI weeks after starting a proton-pump inhibitor', mechanism: 'PPI-induced AIN', significance: 'key' },
    { sign: 'Recovery of renal function after stopping the drug', mechanism: 'Drug withdrawal is the key treatment', significance: 'supportive' },
    { sign: 'Papillary necrosis in a chronic analgesic user', mechanism: 'Chronic (analgesic) interstitial nephritis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The commonest category of AIN cause', meaning: 'Drugs (antibiotics, NSAIDs, PPIs, checkpoint inhibitors)' },
    { clue: 'The classic (often incomplete) triad', meaning: 'Fever, rash, eosinophilia' },
    { clue: 'The urinary finding suggesting AIN', meaning: 'Sterile pyuria/WBC casts ± eosinophiluria' },
    { clue: 'The cornerstone of treatment', meaning: 'Stop the offending drug (± corticosteroids)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'AIN is a common, reversible cause of drug-induced AKI, so the key skill is linking a new drug (antibiotic, NSAID, PPI, checkpoint inhibitor) to AKI with sterile pyuria/eosinophiluria and stopping it promptly — most recover, and corticosteroids are added for severe or non-resolving disease. Delayed withdrawal allows progression to chronic interstitial fibrosis and CKD. It is distinguished from ATN (muddy-brown casts) and glomerulonephritis (RBC casts, heavy proteinuria). Obstruction is [[obstructive-uropathy-hydronephrosis]]; AKI classification is [[aki-prerenal-intrinsic-postrenal]].' },
  ],

  mnemonics: [
    { hook: 'AIN triad: "Fever, Rash, Eosinophilia" + AKI (often incomplete)', expansion: ['Drugs: antibiotics/NSAIDs/PPIs', 'Sterile pyuria + WBC casts'] },
    { hook: '"Stop the drug" = the treatment (± steroids)', expansion: ['Days–weeks after starting', 'Delay → chronic fibrosis'] },
  ],

  traps: [
    {
      questionCategory: 'AIN without the full triad',
      wrongInstinct: 'Acute interstitial nephritis can be excluded if the patient has no rash or eosinophilia',
      rightAnswer: 'The classic triad of fever, rash and eosinophilia is present in only a MINORITY of AIN cases, so its ABSENCE does NOT exclude the diagnosis — AIN should be suspected in any AKI temporally linked to a culprit drug (antibiotic, NSAID, PPI, checkpoint inhibitor) with sterile pyuria/white-cell casts (± eosinophiluria); the key action is to stop the drug',
      why: 'Waiting for the full triad misses most cases and delays drug withdrawal, allowing progression to chronic interstitial fibrosis; the drug–AKI temporal link plus urinary findings, not the complete triad, drives the diagnosis.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient develops AKI with fever, a maculopapular rash, eosinophilia and sterile pyuria two weeks after starting a penicillin. The most likely diagnosis and treatment is:',
      options: [
        { id: 'a', text: 'Acute tubular necrosis; loop diuretics' },
        { id: 'b', text: 'Acute interstitial nephritis; stop the offending drug (± steroids)' },
        { id: 'c', text: 'Post-streptococcal GN; antibiotics' },
        { id: 'd', text: 'Prerenal AKI; fluid restriction' },
      ],
      answerId: 'b',
      explanation: 'Fever, rash, eosinophilia and sterile pyuria with AKI days–weeks after a drug indicate acute interstitial nephritis (a T-cell hypersensitivity reaction). The cornerstone of treatment is to stop the offending drug, with corticosteroids for severe or non-resolving disease.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which statement about the classic AIN triad (fever, rash, eosinophilia) is correct?',
      options: [
        { id: 'a', text: 'It is present in nearly all cases' },
        { id: 'b', text: 'It is often incomplete, so its absence does not exclude AIN' },
        { id: 'c', text: 'Its presence excludes a drug cause' },
        { id: 'd', text: 'It only occurs with glomerulonephritis' },
      ],
      answerId: 'b',
      explanation: 'Only a minority of AIN patients have the full triad, so it is neither sensitive nor required; AIN should be suspected whenever AKI is temporally linked to a culprit drug with sterile pyuria/WBC casts (± eosinophiluria), prompting drug withdrawal.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default acuteInterstitialNephritis;
