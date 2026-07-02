import type { Lecture } from '../../lib/types';

export const nephrotoxicDrugs: Lecture = {
  id: 'nephrotoxic-drugs',
  title: 'Nephrotoxic Drugs & Prescribing in Renal Impairment',
  system: 'renal',
  source: 'L13 — Drug Dosing in CKD',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L13 Nephrotoxins' },
    { kind: 'mechanism', label: 'Patterns of drug renal injury' },
    { kind: 'exam', label: 'NSAID/ACEi/contrast; aminoglycosides' },
  ],

  highYield: [
    '**Drugs injure the kidney by several PATTERNS, worth recognising because most are preventable. HAEMODYNAMIC: NSAIDs (block vasodilatory prostaglandins → afferent constriction) and ACE inhibitors/ARBs (efferent dilation) reduce GFR — dangerous together and in volume depletion ("triple whammy" = NSAID + ACEi/ARB + diuretic). Direct TUBULAR toxicity: AMINOGLYCOSIDES, AMPHOTERICIN B, cisplatin, and iodinated CONTRAST (contrast-associated AKI).**',
    '**Other patterns: acute INTERSTITIAL nephritis (hypersensitivity — antibiotics, NSAIDs, PPIs, checkpoint inhibitors), CRYSTAL nephropathy (aciclovir, sulfonamides, methotrexate, indinavir), OSMOTIC/tubular injury, RHABDOMYOLYSIS (statins), and thrombotic microangiopathy. Some drugs (e.g. trimethoprim, cimetidine) merely inhibit tubular CREATININE secretion, raising creatinine WITHOUT a true fall in GFR — a "pseudo-AKI".**',
    '**Because a failing kidney cannot clear renally-excreted drugs, DOSING must be adjusted in CKD/AKI: reduce dose or lengthen the interval for renally-cleared drugs with a narrow therapeutic index (AMINOGLYCOSIDES, VANCOMYCIN, DIGOXIN, many DOACs, gabapentin, opioids, metformin, LMWH), guided by eGFR and, where relevant, THERAPEUTIC DRUG MONITORING (levels). Some drugs are simply avoided at low GFR (metformin — lactic acidosis; nitrofurantoin — ineffective/toxic; gadolinium — nephrogenic systemic fibrosis).**',
    '**PREVENTION of drug-induced AKI: review the medication list, stop nephrotoxins during acute illness ("sick-day rules" for ACEi/ARB, NSAIDs, diuretics, metformin, SGLT2 inhibitors), maintain volume/perfusion, use the lowest effective dose, hydrate around contrast, and monitor renal function and drug levels. Always check renal function before and dose-adjust nephrotoxic or renally-cleared drugs.**',
    '**The take-home: drug renal injury patterns — HAEMODYNAMIC (NSAID + ACEi/ARB + diuretic "triple whammy"), TUBULAR (aminoglycosides, contrast, amphotericin), INTERSTITIAL (AIN), CRYSTAL (aciclovir/sulfa); some drugs raise creatinine without true AKI (trimethoprim). DOSE-ADJUST renally-cleared narrow-index drugs (aminoglycosides/vancomycin/digoxin/DOACs); avoid metformin/nitrofurantoin/gadolinium at low GFR.** AKI is [[aki-prerenal-intrinsic-postrenal]]; AIN is [[acute-interstitial-nephritis]]; drug dosing overview is [[drug-dosing-ckd]].',
  ],

  mechanism: {
    title: 'Drug injury patterns: haemodynamic (triple whammy), tubular (aminoglycoside/contrast), interstitial (AIN), crystal (aciclovir/sulfa); pseudo-AKI (trimethoprim); dose-adjust renally-cleared drugs',
    steps: [
      { id: 's1', label: 'Haemodynamic: NSAID (afferent) + ACEi/ARB (efferent) + diuretic = "triple whammy"', emphasis: 'danger' },
      { id: 's2', label: 'Direct tubular toxins: aminoglycosides, amphotericin B, cisplatin, contrast', emphasis: 'key' },
      { id: 's3', label: 'Interstitial (AIN) and crystal (aciclovir, sulfonamides, methotrexate) nephropathy', emphasis: 'key' },
      { id: 's4', label: 'Trimethoprim/cimetidine raise creatinine (block secretion) without true GFR fall', emphasis: 'key' },
      { id: 's5', label: 'Dose-adjust renally-cleared narrow-index drugs; avoid metformin/nitrofurantoin/gadolinium at low GFR', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'AKI after NSAID + ACE inhibitor + diuretic in a dehydrated patient', mechanism: 'Haemodynamic "triple whammy"', significance: 'key' },
    { sign: 'Non-oliguric AKI with tubular injury after aminoglycosides', mechanism: 'Direct tubular nephrotoxicity', significance: 'key' },
    { sign: 'AKI within 48 h of iodinated contrast', mechanism: 'Contrast-associated AKI', significance: 'key' },
    { sign: 'A rise in creatinine on trimethoprim with unchanged true GFR', mechanism: 'Inhibited tubular creatinine secretion (pseudo-AKI)', significance: 'supportive' },
    { sign: 'Lactic acidosis in a CKD patient continued on metformin', mechanism: 'Failure to withhold metformin at low GFR', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The "triple whammy" combination', meaning: 'NSAID + ACEi/ARB + diuretic' },
    { clue: 'A classic direct tubular nephrotoxin needing level monitoring', meaning: 'Aminoglycosides (also vancomycin)' },
    { clue: 'A drug that raises creatinine without true AKI', meaning: 'Trimethoprim (blocks creatinine secretion)' },
    { clue: 'Drugs to avoid at low GFR', meaning: 'Metformin, nitrofurantoin, gadolinium' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Drug-induced kidney injury is common and largely preventable, so recognising the patterns (haemodynamic "triple whammy", tubular toxins, interstitial and crystal nephropathy) and the pseudo-AKI of creatinine-secretion blockers guides prevention: review medications, apply sick-day rules, maintain perfusion, hydrate around contrast, and dose-adjust or avoid renally-cleared/nephrotoxic drugs by eGFR with therapeutic drug monitoring. This protects the kidney and avoids toxicity from drug accumulation. AKI is [[aki-prerenal-intrinsic-postrenal]]; AIN is [[acute-interstitial-nephritis]]; overview [[drug-dosing-ckd]].' },
  ],

  mnemonics: [
    { hook: '"Triple whammy" = NSAID + ACEi/ARB + Diuretic → AKI', expansion: ['Tubular: aminoglycoside/contrast/amphotericin', 'Crystal: aciclovir/sulfa/methotrexate'] },
    { hook: '"Dose-adjust the narrow-index renally-cleared drugs; avoid Metformin/Nitrofurantoin/Gadolinium low GFR"', expansion: ['Trimethoprim = pseudo-AKI', 'Monitor levels (aminoglycoside/vancomycin)'] },
  ],

  traps: [
    {
      questionCategory: 'Creatinine rise without true kidney injury',
      wrongInstinct: 'Any rise in serum creatinine after starting a drug means the drug has damaged the kidney',
      rightAnswer: 'Some drugs — notably TRIMETHOPRIM and CIMETIDINE — inhibit tubular SECRETION of creatinine, RAISING serum creatinine WITHOUT reducing the true GFR (a "pseudo-AKI"); the urea and actual filtration are unchanged, so this is a benign, reversible effect and should be distinguished from genuine nephrotoxicity to avoid stopping a needed drug unnecessarily',
      why: 'Misreading the creatinine bump from blocked tubular secretion as real AKI leads to needless drug discontinuation and investigation; recognising the mechanism (unchanged GFR/urea) avoids that error.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The "triple whammy" combination most likely to precipitate acute kidney injury is:',
      options: [
        { id: 'a', text: 'Paracetamol + amoxicillin + omeprazole' },
        { id: 'b', text: 'NSAID + ACE inhibitor/ARB + diuretic' },
        { id: 'c', text: 'Statin + aspirin + metformin' },
        { id: 'd', text: 'Inhaled steroid + salbutamol + montelukast' },
      ],
      answerId: 'b',
      explanation: 'NSAIDs constrict the afferent arteriole, ACEi/ARBs dilate the efferent, and diuretics deplete volume; together this "triple whammy" undermines the autoregulation maintaining GFR and commonly precipitates prerenal/haemodynamic AKI, especially in volume-depleted or elderly patients.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which drug should generally be withheld at low GFR because of the risk of lactic acidosis?',
      options: [
        { id: 'a', text: 'Metformin' },
        { id: 'b', text: 'Amlodipine' },
        { id: 'c', text: 'Paracetamol' },
        { id: 'd', text: 'Loratadine' },
      ],
      answerId: 'a',
      explanation: 'Metformin is renally cleared and accumulates in renal impairment, risking lactic acidosis, so it is dose-reduced or withheld at low GFR and during acute illness ("sick-day rules"). Nitrofurantoin (ineffective/toxic) and gadolinium (nephrogenic systemic fibrosis) are also avoided at low GFR.',
      tests: 'treatment',
    },
  ],

  figures: [],
};

export default nephrotoxicDrugs;
