import type { Lecture } from '../../lib/types';

export const drugDosingCkd: Lecture = {
  id: 'drug-dosing-ckd',
  title: 'Drug Dosing in Kidney Disease',
  system: 'renal',
  source: 'L13 — Drug Dosing in CKD',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L13 Drug Dosing in CKD' },
    { kind: 'mechanism', label: 'Renal clearance & adjustment' },
    { kind: 'exam', label: 'Nephrotoxins; dose reduction' },
  ],

  highYield: [
    '**The kidney eliminates many drugs (and active metabolites), so in reduced GFR renally-cleared drugs ACCUMULATE and cause toxicity unless the DOSE or INTERVAL is adjusted. Estimate renal function (eGFR/creatinine clearance) and consult renal dosing references; the more a drug (or its active metabolite) depends on renal excretion and the NARROWER its therapeutic index, the more critical the adjustment.**',
    '**Dose adjustment strategies: REDUCE the dose, EXTEND the interval, or both, to keep exposure safe while maintaining efficacy. LOADING doses are usually UNCHANGED (they depend on volume of distribution, not clearance); only the MAINTENANCE regimen is reduced. Therapeutic drug MONITORING (levels) guides narrow-index renally-cleared drugs (vancomycin, aminoglycosides, digoxin, lithium).**',
    '**Common drugs needing renal dose adjustment: many ANTIBIOTICS (aminoglycosides, vancomycin, β-lactams), DIGOXIN, LITHIUM, LMW HEPARIN, gabapentin/pregabalin, metformin, and DOACs. Some drugs are AVOIDED at low GFR: METFORMIN (lactic acidosis risk), NITROFURANTOIN (ineffective + toxicity), and normal-dose gadolinium (NSF risk).**',
    '**AVOID NEPHROTOXINS in kidney disease: NSAIDs (reduce renal perfusion/AIN), aminoglycosides, iodinated CONTRAST (contrast-associated AKI — hydrate, minimise), and combinations like the "TRIPLE WHAMMY" (ACEi/ARB + diuretic + NSAID). Watch for HYPERKALAEMIA-raising drugs (ACEi/ARB, K-sparing diuretics, trimethoprim) which are more dangerous in CKD.**',
    '**The take-home: in reduced GFR, renally-cleared/narrow-TI drugs accumulate → reduce dose and/or extend interval (LOADING dose usually unchanged), monitor levels (vancomycin/aminoglycosides/digoxin/lithium), AVOID nephrotoxins (NSAIDs, contrast, aminoglycosides, triple whammy) and certain drugs (metformin, nitrofurantoin) at low GFR.** This builds on the clearance/half-life of BCP ([[pharmacokinetics-adme]]) and interactions ([[drug-interactions-mechanisms]]); the disease context is [[chronic-kidney-disease]]; diuretic use is [[diuretics-pharmacology]].',
  ],

  mechanism: {
    title: 'Renally-cleared/narrow-TI drugs accumulate at low GFR → reduce dose/extend interval (loading unchanged), monitor levels, avoid nephrotoxins',
    steps: [
      { id: 's1', label: 'Reduced GFR → renally-cleared drugs (and active metabolites) accumulate → toxicity', emphasis: 'key' },
      { id: 's2', label: 'Adjust: reduce dose and/or extend interval; LOADING dose usually unchanged (depends on Vd)', emphasis: 'key' },
      { id: 's3', label: 'Monitor levels for narrow-TI renal drugs: vancomycin, aminoglycosides, digoxin, lithium', emphasis: 'key' },
      { id: 's4', label: 'Avoid at low GFR: metformin (lactic acidosis), nitrofurantoin; caution gadolinium (NSF)', emphasis: 'danger' },
      { id: 's5', label: 'Avoid nephrotoxins: NSAIDs, contrast, aminoglycosides, triple whammy; watch hyperkalaemia drugs', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Digoxin/aminoglycoside toxicity developing as renal function declines', mechanism: 'Accumulation of a renally-cleared drug (needs dose adjustment)', significance: 'key' },
    { sign: 'Lactic acidosis risk prompting metformin avoidance at low GFR', mechanism: 'Renally-cleared metformin accumulation', significance: 'key' },
    { sign: 'AKI after contrast in a patient with CKD', mechanism: 'Contrast-associated nephrotoxicity (hydrate/minimise)', significance: 'key' },
    { sign: 'Worsening renal function on ACEi + diuretic + NSAID', mechanism: '"Triple whammy" nephrotoxic combination', significance: 'key' },
    { sign: 'Unchanged loading dose but reduced maintenance dose in CKD', mechanism: 'Loading depends on Vd, maintenance on clearance', significance: 'key' },
  ],

  investigations: [
    { clue: 'What accumulates in reduced GFR', meaning: 'Renally-cleared drugs and their active metabolites' },
    { clue: 'The two ways to adjust a maintenance regimen', meaning: 'Reduce the dose and/or extend the dosing interval' },
    { clue: 'Why the loading dose is usually unchanged', meaning: 'It depends on volume of distribution, not clearance' },
    { clue: 'Drugs to avoid at low GFR', meaning: 'Metformin, nitrofurantoin, NSAIDs, nephrotoxins' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Reduced renal clearance turns standard doses into toxic ones, so dose/interval adjustment, level monitoring (vancomycin/aminoglycosides/digoxin/lithium) and avoidance of nephrotoxins/contraindicated drugs (metformin, nitrofurantoin) are essential safety steps in CKD/AKI. This applies the clearance and loading-vs-maintenance concepts of BCP ([[pharmacokinetics-adme]]) and the interaction/hyperkalaemia risks of [[drug-interactions-mechanisms]]; it is central to managing [[chronic-kidney-disease]] and using [[diuretics-pharmacology]] safely.' },
  ],

  mnemonics: [
    { hook: '"Low GFR → renal drugs pile up → reduce dose / extend interval (keep loading dose)"', expansion: ['Monitor: vanc/aminoglycoside/digoxin/lithium', 'Avoid metformin/nitrofurantoin low GFR'] },
    { hook: 'Avoid nephrotoxins: "NSAIDs, Contrast, Aminoglycosides, Triple whammy"', expansion: ['Watch K-raising drugs (ACEi, K-sparing, trimethoprim)', 'Contrast → hydrate'] },
  ],

  traps: [
    {
      questionCategory: 'Loading vs maintenance dose in renal impairment',
      wrongInstinct: 'In kidney disease you must reduce every dose of a renally-cleared drug, including the loading dose',
      rightAnswer: 'Usually only the MAINTENANCE regimen is reduced (dose down and/or interval extended), because maintenance dosing depends on CLEARANCE (impaired in CKD); the LOADING dose depends on the VOLUME OF DISTRIBUTION (largely unchanged), so it is generally given at the normal size to reach the target concentration promptly — under-loading delays effect',
      why: 'Confusing loading with maintenance leads to under-dosing (delayed therapeutic effect) or over-dosing (accumulation); separating Vd-driven loading from clearance-driven maintenance is the key pharmacokinetic principle for CKD dosing.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'In a patient with significantly reduced GFR, which adjustment is generally required for a renally-cleared drug?',
      options: [
        { id: 'a', text: 'Increase the maintenance dose' },
        { id: 'b', text: 'Reduce the maintenance dose and/or extend the dosing interval' },
        { id: 'c', text: 'Reduce the loading dose substantially' },
        { id: 'd', text: 'No change is ever needed' },
      ],
      answerId: 'b',
      explanation: 'Because renal clearance is reduced, the maintenance regimen of a renally-eliminated drug must be reduced (lower dose and/or longer interval) to prevent accumulation and toxicity. The loading dose usually stays the same because it depends on volume of distribution, not clearance.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which drug is generally avoided in significant chronic kidney disease due to the risk of lactic acidosis?',
      options: [
        { id: 'a', text: 'Metformin' },
        { id: 'b', text: 'Amlodipine' },
        { id: 'c', text: 'Atorvastatin' },
        { id: 'd', text: 'Paracetamol' },
      ],
      answerId: 'a',
      explanation: 'Metformin is renally cleared and accumulates in reduced GFR, raising the risk of lactic acidosis, so it is dose-limited or avoided in significant CKD. Nitrofurantoin is similarly avoided (ineffective and toxic at low GFR), and nephrotoxins such as NSAIDs and contrast should be minimised.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default drugDosingCkd;
