import type { Lecture } from '../../lib/types';

export const adverseDrugReactionsAllergy: Lecture = {
  id: 'adverse-drug-reactions-allergy',
  title: 'Adverse Drug Reactions & Drug Allergy',
  system: 'pharmacology',
  source: 'L15 — Drug Allergy & Adverse Drug Reactions',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pharmacology' },
    { kind: 'lecture', label: 'L15 ADR & Allergy' },
    { kind: 'mechanism', label: 'Type A/B; Gell-Coombs' },
    { kind: 'exam', label: 'Anaphylaxis; SCARs' },
  ],

  highYield: [
    '**An ADVERSE DRUG REACTION (ADR) is any harmful, unintended response at normal doses. The classic split: TYPE A ("Augmented") — DOSE-DEPENDENT, predictable extensions of the drug\'s pharmacology (common, e.g. bleeding on warfarin, hypoglycaemia on insulin, bradycardia on β-blocker); TYPE B ("Bizarre") — DOSE-INDEPENDENT, unpredictable, host-dependent (allergy, idiosyncrasy) — rarer but often severe. (Extended C–F: Chronic, Delayed, End-of-use/withdrawal, Failure.)**',
    '**True DRUG ALLERGY (immune-mediated hypersensitivity) follows the GELL-COOMBS types: TYPE I (IgE, immediate — urticaria, angioedema, ANAPHYLAXIS; e.g. penicillin); TYPE II (IgG cytotoxic — e.g. drug-induced haemolysis/thrombocytopenia); TYPE III (immune-complex — serum sickness, vasculitis); TYPE IV (T-cell, DELAYED — contact dermatitis, most maculopapular rashes, and the SEVERE cutaneous reactions).**',
    '**ANAPHYLAXIS (Type I) is a medical emergency — acute urticaria/angioedema, bronchospasm, hypotension — treated with intramuscular ADRENALINE (first-line), then airway/oxygen/fluids and adjunct antihistamine/steroid. Distinguish true allergy from predictable side-effects (e.g. GI upset) and pseudo-allergy (direct mast-cell release — vancomycin red-man, contrast, opioids) which is not IgE-mediated.**',
    '**SEVERE CUTANEOUS ADVERSE REACTIONS (SCARs, Type IV/T-cell, often delayed 1–8 weeks): STEVENS-JOHNSON SYNDROME/TOXIC EPIDERMAL NECROLYSIS (mucocutaneous blistering + skin detachment — SJS <10%, TEN >30% BSA; culprits: allopurinol, carbamazepine/anticonvulsants, sulfonamides, NSAIDs — HLA-linked); DRESS (drug reaction with eosinophilia & systemic symptoms — rash, fever, eosinophilia, organ involvement); AGEP. Stop the drug immediately; these can be fatal.**',
    '**The take-home: ADRs are Type A (dose-dependent, predictable, common) vs Type B (idiosyncratic/allergic, unpredictable); true allergy = Gell-Coombs I–IV (I = IgE/anaphylaxis → IM adrenaline; IV = delayed T-cell rashes and SCARs). Recognise and STOP the drug in SJS/TEN/DRESS; report ADRs (pharmacovigilance).** HLA-linked SCARs tie to [[pharmacogenomics]]; cutaneous drug eruptions are detailed in HSC ([[cutaneous-drug-reactions]]); anaphylaxis management uses [[adrenergic-drugs]].',
  ],

  mechanism: {
    title: 'Type A (dose-dependent) vs Type B (idiosyncratic/allergic); Gell-Coombs I–IV; anaphylaxis → adrenaline; SCARs → stop drug',
    steps: [
      { id: 's1', label: 'Type A = augmented/dose-dependent/predictable (common); Type B = bizarre/host-dependent (severe)', emphasis: 'key' },
      { id: 's2', label: 'Allergy = Gell-Coombs I (IgE), II (cytotoxic), III (immune complex), IV (T-cell delayed)', emphasis: 'key' },
      { id: 's3', label: 'Anaphylaxis (Type I) → IM ADRENALINE first-line', emphasis: 'danger' },
      { id: 's4', label: 'Pseudo-allergy (red-man, contrast, opioids) = direct mast-cell release, NOT IgE', emphasis: 'key' },
      { id: 's5', label: 'SCARs (SJS/TEN, DRESS) = delayed T-cell; stop drug immediately (HLA-linked)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Predictable, dose-related bleeding on warfarin', mechanism: 'Type A (augmented) ADR', significance: 'key' },
    { sign: 'Urticaria, angioedema, bronchospasm and hypotension minutes after a drug', mechanism: 'Type I (IgE) anaphylaxis → IM adrenaline', significance: 'key' },
    { sign: 'Mucocutaneous blistering with skin detachment weeks after allopurinol/carbamazepine', mechanism: 'SJS/TEN (Type IV SCAR) — stop the drug', significance: 'key' },
    { sign: 'Rash + fever + eosinophilia + hepatitis after an anticonvulsant', mechanism: 'DRESS syndrome', significance: 'key' },
    { sign: 'Flushing with vancomycin/contrast without IgE mechanism', mechanism: 'Pseudo-allergy (direct mast-cell degranulation)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The dose-dependent, predictable ADR category', meaning: 'Type A (augmented)' },
    { clue: 'The Gell-Coombs type causing anaphylaxis', meaning: 'Type I (IgE-mediated)' },
    { clue: 'The first-line treatment for anaphylaxis', meaning: 'Intramuscular adrenaline' },
    { clue: 'The delayed, life-threatening blistering reactions', meaning: 'SJS/TEN and DRESS (Type IV SCARs)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Classifying ADRs guides response: Type A reactions are managed by dose/monitoring, while Type B allergic reactions require recognition and drug avoidance. Anaphylaxis (Type I) is an emergency needing IM adrenaline ([[adrenergic-drugs]]); SCARs (SJS/TEN, DRESS) demand immediate drug cessation and are HLA-linked ([[pharmacogenomics]]). Distinguishing true allergy from pseudo-allergy and side-effects avoids mislabelling; cutaneous drug eruptions are catalogued in HSC ([[cutaneous-drug-reactions]]), and pharmacovigilance (Phase IV) captures rare ADRs ([[drug-development-bioequivalence]]).' },
  ],

  mnemonics: [
    { hook: '"Type A = Augmented (dose, predictable); Type B = Bizarre (allergy/idiosyncrasy)"', expansion: ['A common, B severe', 'Extended: C–F'] },
    { hook: 'Gell-Coombs "ACID": I Anaphylaxis(IgE), II Cytotoxic, III Immune complex, IV Delayed(T-cell)', expansion: ['Anaphylaxis → IM adrenaline', 'SCARs = Type IV, stop drug'] },
  ],

  traps: [
    {
      questionCategory: 'True allergy vs side-effect vs pseudo-allergy',
      wrongInstinct: 'Any unpleasant reaction to a drug is a drug "allergy" that permanently contraindicates it',
      rightAnswer: 'Only IMMUNE-mediated (Gell-Coombs) reactions are true allergy; predictable pharmacologic SIDE-EFFECTS (e.g. nausea, dose-related effects) and PSEUDO-ALLERGY (direct mast-cell release — vancomycin red-man, contrast, opioids; not IgE) are NOT true allergies — mislabelling them wrongly removes useful drugs, though genuine anaphylaxis and SCARs (SJS/TEN/DRESS) do mandate strict avoidance',
      why: 'Over-labelling side-effects/pseudo-allergy as allergy (e.g. "penicillin allergy") drives use of inferior, broader antibiotics; accurate classification preserves options while still protecting against genuine IgE anaphylaxis and life-threatening SCARs.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A dose-dependent, predictable adverse reaction that is an extension of a drug\'s known pharmacology (e.g. hypoglycaemia from insulin) is classified as:',
      options: [
        { id: 'a', text: 'Type B (bizarre/idiosyncratic)' },
        { id: 'b', text: 'Type A (augmented)' },
        { id: 'c', text: 'A Type I hypersensitivity' },
        { id: 'd', text: 'A SCAR' },
      ],
      answerId: 'b',
      explanation: 'Type A ("augmented") ADRs are dose-dependent, predictable extensions of the drug\'s pharmacological action (e.g. bleeding on warfarin, hypoglycaemia on insulin, bradycardia on β-blockers) and are common. Type B reactions are unpredictable, host-dependent (allergy/idiosyncrasy) and dose-independent.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The immediate first-line treatment for drug-induced anaphylaxis is:',
      options: [
        { id: 'a', text: 'Intravenous antihistamine' },
        { id: 'b', text: 'Intramuscular adrenaline (epinephrine)' },
        { id: 'c', text: 'Oral corticosteroid' },
        { id: 'd', text: 'Salbutamol nebuliser alone' },
      ],
      answerId: 'b',
      explanation: 'Anaphylaxis (Type I, IgE-mediated) is treated first with intramuscular adrenaline, which reverses vasodilation/hypotension (α1), bronchospasm (β2) and supports the heart (β1). Antihistamines and steroids are adjuncts, not substitutes, and must not delay adrenaline.',
      tests: 'treatment',
    },
  ],

  figures: [],
};

export default adverseDrugReactionsAllergy;
