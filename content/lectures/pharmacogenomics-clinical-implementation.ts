import type { Lecture } from '../../lib/types';

export const pharmacogenomicsClinicalImplementation: Lecture = {
  id: 'pharmacogenomics-clinical-implementation',
  title: 'Pharmacogenomics: Clinical Implementation',
  system: 'pharmacology',
  source: 'L14 — Pharmacogenomics',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pharmacology' },
    { kind: 'lecture', label: 'L14 PGx Implementation' },
    { kind: 'mechanism', label: 'Testing & dose individualisation' },
    { kind: 'exam', label: 'Pre-emptive vs reactive testing' },
  ],

  highYield: [
    'Pharmacogenomics is applied clinically to INDIVIDUALISE therapy — choosing the right drug and dose, and avoiding severe adverse reactions, based on a patient\'s genotype. Testing may be REACTIVE (before a specific high-risk drug) or PRE-EMPTIVE (panel testing stored for future prescribing). Guidelines (e.g. CPIC) translate genotype into prescribing actions.',
    'PREVENTING SEVERE REACTIONS by pre-prescription screening: HLA-B*15:02 → carbamazepine SJS/TEN (esp. Southeast Asians); HLA-B*57:01 → abacavir hypersensitivity; HLA-B*58:01 → allopurinol SCARs; DPYD deficiency → severe 5-fluorouracil/capecitabine toxicity; TPMT/NUDT15 → azathioprine/6-mercaptopurine myelosuppression; G6PD deficiency → haemolysis with oxidant drugs (primaquine, dapsone, rasburicase).',
    'DOSE/DRUG choice by METABOLISER status: CYP2D6 (codeine/tramadol prodrug activation — ultrarapid = toxicity, poor = no analgesia), CYP2C19 (clopidogrel activation — poor metabolisers under-respond → alternative antiplatelet), CYP2C9 + VKORC1 (warfarin dosing), CYP2D6/2C19 (many antidepressants/antipsychotics). Genotype predicts response and toxicity.',
    'Implementation challenges: cost/access, turnaround time (reactive testing may delay urgent therapy — favouring pre-emptive panels), interpreting phenotype from genotype (and gene–drug–environment interactions), and integrating results into prescribing systems with decision support. Pharmacogenomics complements, but does not replace, therapeutic drug monitoring and clinical judgement.',
    '**The take-home:** pharmacogenomics individualises prescribing — pre-emptive/reactive HLA screening prevents SCARs (B*15:02 carbamazepine, B*57:01 abacavir, B*58:01 allopurinol), enzyme testing prevents toxicity (DPYD→5-FU, TPMT→azathioprine, G6PD→oxidants), and metaboliser status guides drug/dose (codeine, clopidogrel, warfarin, psychotropics). The mechanistic basis is in [[pharmacogenomics]]; it layers on the PK of [[pharmacokinetics-adme]]/[[drug-metabolism-cyp450]] and the ADR framework of [[adverse-drug-reactions-allergy]].',
  ],

  mechanism: {
    title: 'Individualise prescribing: HLA screening (SCARs), enzyme testing (DPYD/TPMT/G6PD), metaboliser status (codeine/clopidogrel/warfarin); pre-emptive vs reactive',
    steps: [
      { id: 's1', label: 'Pharmacogenomics individualises drug/dose and prevents severe reactions', emphasis: 'key' },
      { id: 's2', label: 'HLA screening: B*15:02 (carbamazepine), B*57:01 (abacavir), B*58:01 (allopurinol)', emphasis: 'danger' },
      { id: 's3', label: 'Enzyme testing: DPYD→5-FU, TPMT/NUDT15→azathioprine, G6PD→oxidant haemolysis', emphasis: 'key' },
      { id: 's4', label: 'Metaboliser status guides drug/dose (codeine, clopidogrel, warfarin, psychotropics)', emphasis: 'key' },
      { id: 's5', label: 'Pre-emptive panel vs reactive testing; decision support; complements TDM/judgement' },
    ],
  },

  examFindings: [
    { sign: 'Genotyping before carbamazepine in a Southeast Asian patient', mechanism: 'HLA-B*15:02 screening (prevent SJS/TEN)', significance: 'key' },
    { sign: 'DPYD testing before 5-fluorouracil/capecitabine', mechanism: 'Prevent severe fluoropyrimidine toxicity', significance: 'key' },
    { sign: 'Choosing an alternative antiplatelet in a CYP2C19 poor metaboliser', mechanism: 'Reduced clopidogrel activation', significance: 'key' },
    { sign: 'Pre-emptive panel testing stored for future prescribing', mechanism: 'Pre-emptive pharmacogenomic implementation', significance: 'supportive' },
    { sign: 'Avoiding primaquine/dapsone in G6PD deficiency', mechanism: 'Oxidant-induced haemolysis risk', significance: 'key' },
  ],

  investigations: [
    { clue: 'The two timing strategies for pharmacogenomic testing', meaning: 'Reactive (before a specific drug) and pre-emptive (panel)' },
    { clue: 'The alleles screened to prevent severe cutaneous reactions', meaning: 'HLA-B*15:02, B*57:01, B*58:01' },
    { clue: 'The enzyme tested before fluoropyrimidines', meaning: 'DPYD' },
    { clue: 'The antiplatelet affected by CYP2C19 poor metabolism', meaning: 'Clopidogrel (a prodrug)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Clinical pharmacogenomics turns genotype into safer prescribing — HLA screening prevents fatal SCARs, enzyme testing (DPYD, TPMT, G6PD) prevents severe toxicity, and metaboliser status guides drug/dose selection (codeine, clopidogrel, warfarin, psychotropics). Pre-emptive panels overcome turnaround delays, and decision support integrates results. It applies the mechanisms of [[pharmacogenomics]] on top of the PK of [[drug-metabolism-cyp450]], and prevents the adverse reactions catalogued in [[adverse-drug-reactions-allergy]].' },
  ],

  mnemonics: [
    { hook: 'Screen before: "B*15:02 Carbamazepine, B*57:01 Abacavir, B*58:01 Allopurinol; DPYD 5-FU; TPMT azathioprine; G6PD oxidants"', expansion: ['Pre-emptive vs reactive', 'CPIC guidelines'] },
    { hook: 'Metaboliser status guides "codeine, clopidogrel, warfarin, psychotropics"', expansion: ['Poor vs ultrarapid', 'Prodrug flips the risk'] },
  ],

  traps: [
    {
      questionCategory: 'Reactive vs pre-emptive testing timing',
      wrongInstinct: 'Pharmacogenomic testing can always be ordered at the moment a high-risk drug is needed',
      rightAnswer: 'REACTIVE testing at the point of prescribing can DELAY urgent therapy while results return, so for time-critical or commonly-prescribed high-risk drugs a PRE-EMPTIVE (panel) approach — genotype stored in the record for future use — is often preferred; the choice of timing is itself an implementation decision, not a given',
      why: 'Turnaround time can make reactive testing impractical for urgent prescriptions; understanding pre-emptive vs reactive strategies is key to actually delivering pharmacogenomic benefit in practice.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Testing DPYD before starting 5-fluorouracil or capecitabine is done to avoid:',
      options: [
        { id: 'a', text: 'Stevens-Johnson syndrome' },
        { id: 'b', text: 'Severe (potentially fatal) fluoropyrimidine toxicity' },
        { id: 'c', text: 'Haemolysis' },
        { id: 'd', text: 'Reduced antiplatelet effect' },
      ],
      answerId: 'b',
      explanation: 'Dihydropyrimidine dehydrogenase (DPYD) metabolises fluoropyrimidines; deficiency leads to drug accumulation and severe, potentially fatal toxicity (mucositis, myelosuppression, diarrhoea), so DPYD testing guides dose reduction or avoidance.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A "pre-emptive" pharmacogenomic testing strategy means:',
      options: [
        { id: 'a', text: 'Testing only after an adverse reaction occurs' },
        { id: 'b', text: 'Panel testing done in advance and stored for future prescribing decisions' },
        { id: 'c', text: 'Never testing at all' },
        { id: 'd', text: 'Testing only the drug level, not the genotype' },
      ],
      answerId: 'b',
      explanation: 'Pre-emptive pharmacogenomics performs panel genotyping ahead of need and stores the results in the record, so relevant genotype information is immediately available when a high-risk drug is later prescribed — avoiding delays inherent in reactive, point-of-prescription testing.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default pharmacogenomicsClinicalImplementation;
