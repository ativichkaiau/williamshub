import type { Lecture } from '../../lib/types';

export const drugHypersensitivityScars: Lecture = {
  id: 'drug-hypersensitivity-scars',
  title: 'Drug Hypersensitivity & Severe Reactions',
  system: 'pharmacology',
  source: 'L15 — Drug Allergy & Adverse Drug Reactions',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pharmacology' },
    { kind: 'lecture', label: 'L15 Drug Hypersensitivity' },
    { kind: 'mechanism', label: 'Gell-Coombs; SCARs' },
    { kind: 'exam', label: 'Anaphylaxis; SJS/TEN; DRESS' },
  ],

  highYield: [
    '**Drug hypersensitivity (immune-mediated Type B ADR) follows the GELL-COOMBS types. TYPE I (IgE, IMMEDIATE, minutes–1 h): urticaria, angioedema, bronchospasm, ANAPHYLAXIS — treat with intramuscular ADRENALINE first-line (β-lactams, NSAIDs, contrast/pseudo-allergy). TYPE II (IgG cytotoxic): drug-induced haemolytic anaemia, thrombocytopenia, neutropenia. TYPE III (immune complex): serum sickness, drug-induced vasculitis (delayed days).**',
    '**TYPE IV (T-cell, DELAYED, hours–days to weeks) is the commonest and includes the SEVERE reactions: maculopapular/morbilliform exanthems (common, benign), allergic contact dermatitis, and the SCARs. Distinguish true allergy from predictable side-effects and PSEUDO-ALLERGY (direct mast-cell degranulation — vancomycin red-man, opioids, contrast — not IgE).**',
    '**SEVERE CUTANEOUS ADVERSE REACTIONS (SCARs): STEVENS-JOHNSON SYNDROME/TOXIC EPIDERMAL NECROLYSIS (fever + MUCOSAL erosions + skin detachment, positive Nikolsky; culprits allopurinol, anticonvulsants, sulfonamides — HLA-linked); DRESS (rash + fever + facial oedema + EOSINOPHILIA + organ involvement, delayed 2–8 weeks); AGEP (acute sterile pustules). Management: STOP the drug immediately, supportive/burns-unit care.**',
    '**PREVENTION and de-labelling: HLA screening prevents some SCARs (B*15:02→carbamazepine, B*57:01→abacavir, B*58:01→allopurinol — [[pharmacogenomics]]); document the reaction accurately (avoid over-labelling a simple side-effect as "allergy", which drives inferior antibiotic use); consider β-lactam allergy de-labelling/testing. RED FLAGS mandating urgent action: mucosal involvement, skin pain/blistering, facial oedema, fever, eosinophilia, deranged LFTs.**',
    '**The take-home: drug hypersensitivity = Gell-Coombs I (IgE/anaphylaxis → IM adrenaline), II (cytotoxic cytopenias), III (immune complex/serum sickness/vasculitis), IV (delayed T-cell: exanthems + SCARs); recognise SCAR red flags (mucosa, pain, fever, eosinophilia) → STOP the drug; HLA screening prevents some; don\'t over-label.** Overlaps the ADR framework of [[adverse-drug-reactions-allergy]] and [[adr-classification-mechanisms]]; cutaneous detail is HSC ([[cutaneous-drug-reactions]]).',
  ],

  mechanism: {
    title: 'Gell-Coombs I (IgE/anaphylaxis) / II (cytotoxic) / III (immune complex) / IV (delayed T-cell: exanthems + SCARs); recognise red flags → stop drug',
    steps: [
      { id: 's1', label: 'Type I (IgE, immediate): urticaria/angioedema/anaphylaxis → IM adrenaline', emphasis: 'danger' },
      { id: 's2', label: 'Type II (cytotoxic: cytopenias); Type III (immune complex: serum sickness/vasculitis)', emphasis: 'key' },
      { id: 's3', label: 'Type IV (delayed T-cell): morbilliform exanthem (common) + SCARs', emphasis: 'key' },
      { id: 's4', label: 'SCARs: SJS/TEN (mucosa + detachment), DRESS (eosinophilia + organs), AGEP → STOP drug', emphasis: 'danger' },
      { id: 's5', label: 'HLA screening prevents some; distinguish pseudo-allergy; avoid over-labelling', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Urticaria, angioedema and hypotension minutes after a drug', mechanism: 'Type I (IgE) anaphylaxis → IM adrenaline', significance: 'key' },
    { sign: 'Drug-induced haemolytic anaemia or thrombocytopenia', mechanism: 'Type II (cytotoxic) hypersensitivity', significance: 'key' },
    { sign: 'Fever, mucosal erosions and skin detachment weeks after allopurinol', mechanism: 'SJS/TEN (Type IV SCAR) — stop the drug', significance: 'key' },
    { sign: 'Rash + fever + eosinophilia + hepatitis at 3–6 weeks', mechanism: 'DRESS syndrome', significance: 'key' },
    { sign: 'Flushing with vancomycin without an IgE mechanism', mechanism: 'Pseudo-allergy (direct mast-cell release)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The Gell-Coombs type causing anaphylaxis', meaning: 'Type I (IgE)' },
    { clue: 'The Gell-Coombs type of delayed drug rashes and SCARs', meaning: 'Type IV (T-cell mediated)' },
    { clue: 'The red flags of a severe cutaneous drug reaction', meaning: 'Mucosal involvement, skin pain/blistering, facial oedema, fever, eosinophilia' },
    { clue: 'HLA alleles screened to prevent SCARs', meaning: 'B*15:02 (carbamazepine), B*57:01 (abacavir), B*58:01 (allopurinol)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Classifying drug hypersensitivity by Gell-Coombs type directs treatment (IM adrenaline for Type I anaphylaxis; drug avoidance for cytopenias/vasculitis; immediate cessation and supportive care for Type IV SCARs). Recognising SCAR red flags (mucosa, pain, fever, eosinophilia) is life-saving, HLA screening prevents some reactions ([[pharmacogenomics]]), and accurate labelling/de-labelling preserves useful drugs. It expands the ADR framework of [[adverse-drug-reactions-allergy]] and [[adr-classification-mechanisms]]; cutaneous detail is HSC ([[cutaneous-drug-reactions]]).' },
  ],

  mnemonics: [
    { hook: 'Gell-Coombs "ACID": I Anaphylaxis (IgE), II Cytotoxic, III Immune complex, IV Delayed (T-cell)', expansion: ['Type I → IM adrenaline', 'Type IV → SCARs'] },
    { hook: 'SCAR red flags: "mucosa, skin pain/blister, facial oedema, fever, eosinophilia → STOP drug"', expansion: ['SJS/TEN, DRESS, AGEP', 'HLA screening prevents some'] },
  ],

  traps: [
    {
      questionCategory: 'Over-labelling drug allergy',
      wrongInstinct: 'Any adverse reaction to a drug should be recorded as an "allergy" to keep the patient safe',
      rightAnswer: 'Only genuine IMMUNE (Gell-Coombs) reactions are true allergy; recording predictable SIDE-EFFECTS (nausea) or PSEUDO-ALLERGY (vancomycin red-man, contrast) as "allergy" OVER-LABELS the patient — driving use of broader, inferior, more toxic alternatives (e.g. avoiding all β-lactams) — so reactions should be characterised accurately, with de-labelling/testing where appropriate, while still respecting genuine anaphylaxis and SCARs',
      why: 'Inaccurate "allergy" labels (especially penicillin) cause real harm by forcing worse antibiotic choices; distinguishing true allergy from side-effects/pseudo-allergy preserves options without endangering patients with genuine hypersensitivity.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A delayed drug reaction with widespread rash, fever, facial oedema, eosinophilia and hepatitis appearing weeks after an anticonvulsant is:',
      options: [
        { id: 'a', text: 'Type I anaphylaxis' },
        { id: 'b', text: 'DRESS (a severe Type IV cutaneous adverse reaction)' },
        { id: 'c', text: 'Urticaria' },
        { id: 'd', text: 'Serum sickness' },
      ],
      answerId: 'b',
      explanation: 'DRESS (drug reaction with eosinophilia and systemic symptoms) is a delayed (2–8 week) T-cell-mediated severe cutaneous adverse reaction with rash, fever, facial oedema, eosinophilia and internal organ involvement (often hepatitis). The drug must be stopped immediately, with supportive care.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Vancomycin "red-man" flushing and radiocontrast reactions are examples of:',
      options: [
        { id: 'a', text: 'IgE-mediated (Type I) allergy' },
        { id: 'b', text: 'Pseudo-allergy (direct mast-cell degranulation, not IgE-mediated)' },
        { id: 'c', text: 'Type IV delayed hypersensitivity' },
        { id: 'd', text: 'Serum sickness' },
      ],
      answerId: 'b',
      explanation: 'Red-man syndrome (rate-related) and many contrast/opioid reactions are pseudo-allergic — direct mast-cell degranulation without IgE — so they are managed differently (e.g. slowing the vancomycin infusion) and should not be mislabelled as true allergy that permanently contraindicates the drug.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default drugHypersensitivityScars;
