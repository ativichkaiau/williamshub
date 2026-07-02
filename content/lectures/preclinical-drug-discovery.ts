import type { Lecture } from '../../lib/types';

export const preclinicalDrugDiscovery: Lecture = {
  id: 'preclinical-drug-discovery',
  title: 'Drug Discovery & Preclinical Development',
  system: 'pharmacology',
  source: 'L1 — Introduction & Drug Development',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pharmacology' },
    { kind: 'lecture', label: 'L1 Drug Discovery' },
    { kind: 'mechanism', label: 'Target → lead → preclinical' },
    { kind: 'exam', label: 'IND; preclinical toxicology' },
  ],

  highYield: [
    '**Before a drug ever reaches humans it passes DISCOVERY and PRECLINICAL testing. Discovery: identify and VALIDATE a molecular TARGET (receptor/enzyme/channel), then find "hits" (high-throughput/rational/structure-based screening) → optimise to a LEAD compound with acceptable potency, selectivity and drug-like properties.**',
    '**PRECLINICAL testing (in-vitro + ANIMAL studies) characterises PHARMACOLOGY (efficacy, mechanism), PHARMACOKINETICS (ADME) and — critically — TOXICOLOGY (acute/chronic toxicity, genotoxicity, carcinogenicity, reproductive/teratogenicity) and safety pharmacology. This defines a safe STARTING DOSE and the therapeutic window before first-in-human dosing.**',
    '**Regulatory gateway: successful preclinical data support an INVESTIGATIONAL NEW DRUG (IND) application to begin human trials; after Phase I–III, a NEW DRUG APPLICATION (NDA)/marketing authorisation is filed. Only a tiny fraction of screened compounds ever reach the market — attrition is high and costly.**',
    '**Good Laboratory Practice (GLP) governs preclinical studies; drug-like properties (e.g. Lipinski\'s "rule of five" for oral absorption) and early ADME/tox screening ("fail early, fail cheap") reduce late-stage failure. Biologics have distinct discovery (e.g. antibody engineering) and immunogenicity considerations.**',
    '**The take-home: target validation → hit → LEAD optimisation → PRECLINICAL pharmacology/PK/TOXICOLOGY (in-vitro + animal) → IND → human trials → NDA. Preclinical toxicology sets the safe first-in-human starting dose; attrition is high.** The human phases follow in [[drug-development-bioequivalence]]; the ADME characterised here is in [[pharmacokinetics-adme]]; post-marketing safety is [[adverse-drug-reactions-allergy]].',
  ],

  mechanism: {
    title: 'Target validation → hit → lead optimisation → preclinical (pharmacology/PK/toxicology) → IND → trials → NDA',
    steps: [
      { id: 's1', label: 'Discovery: validate molecular target → screen hits → optimise LEAD', emphasis: 'key' },
      { id: 's2', label: 'Preclinical (in-vitro + animal): pharmacology, PK (ADME), safety pharmacology', emphasis: 'key' },
      { id: 's3', label: 'Toxicology: acute/chronic, genotoxicity, carcinogenicity, reproductive → safe starting dose', emphasis: 'key' },
      { id: 's4', label: 'IND application → human trials; then NDA/marketing authorisation', emphasis: 'key' },
      { id: 's5', label: 'GLP + drug-like rules; high attrition ("fail early, fail cheap")' },
    ],
  },

  examFindings: [
    { sign: 'Animal/in-vitro studies defining toxicity and a safe first dose', mechanism: 'Preclinical development', significance: 'key' },
    { sign: 'The regulatory step permitting first-in-human trials', mechanism: 'Investigational New Drug (IND) application', significance: 'key' },
    { sign: 'A lead compound optimised from screening hits', mechanism: 'Lead optimisation (potency/selectivity/drug-likeness)', significance: 'supportive' },
    { sign: 'Very high failure rate of candidate molecules', mechanism: 'Attrition through the development pipeline', significance: 'supportive' },
    { sign: 'Reproductive/teratogenicity testing before marketing', mechanism: 'Preclinical toxicology requirement', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The first step of drug discovery', meaning: 'Identifying and validating a molecular target' },
    { clue: 'The preclinical domain defining the safe starting dose', meaning: 'Toxicology' },
    { clue: 'The application filed to begin human trials', meaning: 'The Investigational New Drug (IND) application' },
    { clue: 'The application filed to market a drug', meaning: 'The New Drug Application (NDA)/marketing authorisation' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Preclinical pharmacology, PK and toxicology determine whether a candidate is safe enough to test in humans and set the first-in-human starting dose — the foundation on which the clinical phases of [[drug-development-bioequivalence]] are built. The ADME defined here is expanded in [[pharmacokinetics-adme]], and safety surveillance continues post-marketing ([[adverse-drug-reactions-allergy]]).' },
  ],

  mnemonics: [
    { hook: 'Pipeline: "Target → Hit → Lead → Preclinical (tox) → IND → trials → NDA"', expansion: ['Toxicology sets starting dose', 'Fail early, fail cheap'] },
    { hook: '"IND = INto humans; NDA = Now on the market"', expansion: ['GLP governs preclinical', 'High attrition'] },
  ],

  traps: [
    {
      questionCategory: 'Role of preclinical testing',
      wrongInstinct: 'Preclinical animal studies mainly prove that a drug works',
      rightAnswer: 'Preclinical studies primarily establish SAFETY (toxicology) and PK/mechanism to justify first-in-human dosing and set a safe STARTING DOSE — efficacy in humans is only established later in Phase II/III; animal efficacy is supportive but does not reliably predict clinical benefit',
      why: 'Over-reading preclinical efficacy leads to over-confidence; the essential output of preclinical work is a safety/PK package (and starting dose), with human efficacy still to be proven in trials.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The primary purpose of preclinical toxicology studies before first-in-human trials is to:',
      options: [
        { id: 'a', text: 'Prove the drug is effective in patients' },
        { id: 'b', text: 'Characterise toxicity and define a safe starting dose' },
        { id: 'c', text: 'Set the market price' },
        { id: 'd', text: 'Establish bioequivalence' },
      ],
      answerId: 'b',
      explanation: 'Preclinical (in-vitro and animal) toxicology characterises acute/chronic toxicity, genotoxicity, carcinogenicity and reproductive effects, defining the therapeutic window and a safe first-in-human starting dose. Efficacy in humans is established later in Phase II/III trials.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The regulatory application that must be approved before a candidate drug can first be given to humans is the:',
      options: [
        { id: 'a', text: 'New Drug Application (NDA)' },
        { id: 'b', text: 'Investigational New Drug (IND) application' },
        { id: 'c', text: 'Bioequivalence submission' },
        { id: 'd', text: 'Biosimilar application' },
      ],
      answerId: 'b',
      explanation: 'The Investigational New Drug (IND) application, supported by preclinical data, permits the start of human clinical trials. After successful Phase I–III trials, a New Drug Application (NDA)/marketing authorisation is submitted to market the drug.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default preclinicalDrugDiscovery;
