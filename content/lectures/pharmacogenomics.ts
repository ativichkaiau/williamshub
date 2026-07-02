import type { Lecture } from '../../lib/types';

export const pharmacogenomics: Lecture = {
  id: 'pharmacogenomics',
  title: 'Pharmacogenomics',
  system: 'pharmacology',
  source: 'L14 — Pharmacogenomics',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pharmacology' },
    { kind: 'lecture', label: 'L14 Pharmacogenomics' },
    { kind: 'mechanism', label: 'Genetic variation in PK/PD' },
    { kind: 'exam', label: 'CYP2D6; HLA screening' },
  ],

  highYield: [
    '**Pharmacogenomics studies how INHERITED genetic variation alters drug response — explaining why the same dose can be ineffective or toxic in different people. Variation affects PHARMACOKINETICS (metabolising enzymes/transporters) and PHARMACODYNAMICS (drug targets), and underlies "personalised/precision" dosing.**',
    '**METABOLISER phenotypes (esp. CYP2D6, CYP2C19, CYP2C9): POOR metabolisers accumulate the parent drug (toxicity) but fail to activate PRODRUGS; ULTRARAPID metabolisers clear active drug fast (failure) but over-activate prodrugs. Key examples: CODEINE/tramadol are prodrugs activated by CYP2D6 → ultrarapid metabolisers get dangerous opioid effects (respiratory depression, esp. in children/breastfed infants), poor metabolisers get no analgesia; CLOPIDOGREL is a prodrug needing CYP2C19 → poor metabolisers have reduced antiplatelet effect; WARFARIN dose depends on CYP2C9 + VKORC1.**',
    '**PHASE II / other enzymes: TPMT (or NUDT15) deficiency → severe AZATHIOPRINE/6-mercaptopurine myelosuppression (test before use); DPYD deficiency → severe 5-FLUOROURACIL/capecitabine toxicity; UGT1A1 → irinotecan toxicity; slow ACETYLATORS (NAT2) → isoniazid/hydralazine adverse effects; G6PD deficiency → haemolysis with oxidant drugs (primaquine, dapsone, sulfa, nitrofurantoin).**',
    '**HLA-linked SEVERE HYPERSENSITIVITY (immunologic PD variation) — screen high-risk populations: HLA-B*15:02 → carbamazepine Stevens-Johnson syndrome/TEN (esp. Southeast Asians — screen before carbamazepine); HLA-B*57:01 → abacavir hypersensitivity (screen before use); HLA-B*58:01 → allopurinol SCARs. These prevent fatal skin reactions by pre-prescription genotyping.**',
    '**The take-home: genes change drug PK (CYP2D6/2C19/2C9, TPMT, DPYD, NAT2, G6PD) and PD (HLA, VKORC1). Poor vs ultrarapid metabolisers flip prodrug vs active-drug risk (codeine, clopidogrel); test TPMT before azathioprine and DPYD before 5-FU; screen HLA-B*15:02 (carbamazepine), B*57:01 (abacavir), B*58:01 (allopurinol).** These variants drive interindividual differences layered on the PK of [[pharmacokinetics-adme]] and the interactions of [[drug-interactions-mechanisms]]; HLA reactions overlap severe drug allergy ([[adverse-drug-reactions-allergy]], HSC [[cutaneous-drug-reactions]]).',
  ],

  mechanism: {
    title: 'Genetic variation in PK enzymes (CYP/TPMT/DPYD/G6PD) & PD targets (HLA/VKORC1) → altered efficacy/toxicity',
    steps: [
      { id: 's1', label: 'Variation alters PK (enzymes/transporters) and PD (targets) → personalised dosing', emphasis: 'key' },
      { id: 's2', label: 'Poor metaboliser → ↑parent drug (toxic) but ↓prodrug activation; ultrarapid = opposite', emphasis: 'key' },
      { id: 's3', label: 'Codeine/clopidogrel (prodrugs); warfarin (CYP2C9+VKORC1)', emphasis: 'key' },
      { id: 's4', label: 'TPMT→azathioprine, DPYD→5-FU, NAT2→isoniazid, G6PD→oxidant haemolysis', emphasis: 'key' },
      { id: 's5', label: 'HLA screening: B*15:02 (carbamazepine SJS), B*57:01 (abacavir), B*58:01 (allopurinol)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Opioid toxicity in a child given codeine', mechanism: 'CYP2D6 ultrarapid metaboliser (excess morphine from prodrug)', significance: 'key' },
    { sign: 'Reduced antiplatelet effect of clopidogrel', mechanism: 'CYP2C19 poor metaboliser (prodrug under-activated)', significance: 'key' },
    { sign: 'Severe myelosuppression on azathioprine', mechanism: 'TPMT (or NUDT15) deficiency', significance: 'key' },
    { sign: 'Stevens-Johnson syndrome from carbamazepine in a Southeast Asian patient', mechanism: 'HLA-B*15:02 (screen before prescribing)', significance: 'key' },
    { sign: 'Haemolysis after primaquine/dapsone/sulfa', mechanism: 'G6PD deficiency (oxidant stress)', significance: 'key' },
  ],

  investigations: [
    { clue: 'The enzyme activating codeine and clopidogrel (prodrugs)', meaning: 'CYP2D6 (codeine) / CYP2C19 (clopidogrel)' },
    { clue: 'The test before azathioprine to avoid marrow toxicity', meaning: 'TPMT (and NUDT15) activity/genotype' },
    { clue: 'The allele screened before carbamazepine (SJS/TEN)', meaning: 'HLA-B*15:02' },
    { clue: 'The deficiency causing haemolysis with oxidant drugs', meaning: 'G6PD deficiency' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Pharmacogenomics enables safer, individualised prescribing: metaboliser status flips prodrug vs active-drug risk (codeine, clopidogrel), enzyme deficiencies mandate pre-treatment testing (TPMT→azathioprine, DPYD→5-FU, G6PD→oxidants), and HLA screening prevents fatal skin reactions (B*15:02→carbamazepine, B*57:01→abacavir, B*58:01→allopurinol). It layers genetic variability onto standard PK ([[pharmacokinetics-adme]]) and interactions ([[drug-interactions-mechanisms]]); HLA-mediated reactions are the severe end of drug allergy ([[adverse-drug-reactions-allergy]], HSC [[cutaneous-drug-reactions]]).' },
  ],

  mnemonics: [
    { hook: 'Metaboliser flip: "Poor → toxic (active drug) but useless (prodrug); Ultrarapid → opposite"', expansion: ['Codeine = CYP2D6 prodrug', 'Clopidogrel = CYP2C19 prodrug'] },
    { hook: 'HLA screens: "B*15:02→Carbamazepine, B*57:01→Abacavir, B*58:01→Allopurinol"', expansion: ['TPMT → azathioprine', 'DPYD → 5-FU'] },
  ],

  traps: [
    {
      questionCategory: 'Poor vs ultrarapid metaboliser with a prodrug',
      wrongInstinct: 'A "poor metaboliser" is always at higher risk of drug toxicity',
      rightAnswer: 'It depends on whether the drug is ACTIVE or a PRODRUG: for an ACTIVE drug, a poor metaboliser accumulates it (toxicity); but for a PRODRUG (e.g. codeine → morphine, clopidogrel → active metabolite), the poor metaboliser UNDER-activates it (treatment failure), while the ULTRARAPID metaboliser over-activates it (toxicity — e.g. codeine-induced respiratory depression)',
      why: 'The prodrug/active-drug distinction inverts the risk of each metaboliser phenotype, so predicting toxicity vs failure requires knowing whether metabolism activates or inactivates the drug.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Why can codeine cause dangerous opioid toxicity in a CYP2D6 "ultrarapid metaboliser"?',
      options: [
        { id: 'a', text: 'Codeine is cleared too slowly' },
        { id: 'b', text: 'Codeine is a prodrug converted by CYP2D6 to morphine, so ultrarapid metabolism produces excess morphine' },
        { id: 'c', text: 'Codeine blocks CYP2D6' },
        { id: 'd', text: 'Ultrarapid metabolisers cannot excrete morphine' },
      ],
      answerId: 'b',
      explanation: 'Codeine is a prodrug activated by CYP2D6 to morphine. Ultrarapid metabolisers convert more codeine to morphine, risking respiratory depression (notably in children and breastfed infants), whereas poor metabolisers get little analgesia. The prodrug relationship reverses the usual metaboliser–risk logic.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Screening for HLA-B*15:02 before prescribing carbamazepine (especially in Southeast Asian patients) reduces the risk of:',
      options: [
        { id: 'a', text: 'Hepatotoxicity' },
        { id: 'b', text: 'Stevens-Johnson syndrome / toxic epidermal necrolysis' },
        { id: 'c', text: 'Nephrotoxicity' },
        { id: 'd', text: 'Haemolysis' },
      ],
      answerId: 'b',
      explanation: 'HLA-B*15:02 strongly predisposes to carbamazepine-induced Stevens-Johnson syndrome/toxic epidermal necrolysis, particularly in Southeast Asian populations, so genotyping before prescribing prevents these life-threatening severe cutaneous adverse reactions. (HLA-B*57:01→abacavir, HLA-B*58:01→allopurinol are analogous.)',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default pharmacogenomics;
