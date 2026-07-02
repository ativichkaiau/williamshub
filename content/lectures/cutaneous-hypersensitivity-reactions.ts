import type { Lecture } from '../../lib/types';

export const cutaneousHypersensitivityReactions: Lecture = {
  id: 'cutaneous-hypersensitivity-reactions',
  title: 'Cutaneous Hypersensitivity Reactions',
  system: 'derm',
  source: 'L4 — Cutaneous Immunology & Hypersensitivity',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L4 Hypersensitivity' },
    { kind: 'mechanism', label: 'Gell-Coombs in the skin' },
    { kind: 'exam', label: 'Urticaria vs contact dermatitis' },
  ],

  highYield: [
    '**Skin hypersensitivity follows the four GELL-COOMBS types. TYPE I (IgE/mast-cell, IMMEDIATE, minutes): URTICARIA (transient wheals <24 h), angioedema and anaphylaxis; histamine-driven → treat with ANTIHISTAMINES (± adrenaline for airway/anaphylaxis). Acute vs chronic urticaria (>6 weeks, often idiopathic/autoimmune).**',
    '**TYPE IV (T-cell, DELAYED, 48–72 h) is the dominant cutaneous mechanism: ALLERGIC CONTACT DERMATITIS (nickel, fragrances, poison ivy) — requires prior SENSITISATION and is diagnosed by PATCH TESTING — plus most morbilliform drug eruptions and the severe cutaneous drug reactions. Contrast with IRRITANT contact dermatitis (non-immune, commonest, no sensitisation).**',
    '**TYPE II (cytotoxic antibody) includes the autoimmune BLISTERING diseases (antibodies against desmoglein/hemidesmosome adhesion molecules → pemphigus/pemphigoid). TYPE III (immune complex) includes leukocytoclastic VASCULITIS (palpable purpura) and serum sickness. Direct/indirect IMMUNOFLUORESCENCE and patch testing are the confirmatory tests.**',
    '**Recognising the type directs management: Type I urticaria → antihistamines/avoidance (adrenaline if anaphylaxis); Type IV contact dermatitis → identify and avoid the allergen (patch test) ± topical steroid; Type II blistering → immunosuppression; Type III vasculitis → find the trigger. Distinguish true allergy from pseudo-allergy (direct mast-cell release — not IgE).**',
    '**The take-home: cutaneous hypersensitivity = Type I (IgE urticaria/anaphylaxis → antihistamine/adrenaline), Type IV (delayed T-cell allergic contact dermatitis + drug eruptions → patch test/avoid), Type II (autoimmune blistering), Type III (vasculitis/immune complex). Irritant contact dermatitis is non-immune.** The cellular immunity is in [[skin-immune-system-cells]]; contact/atopic eczema in [[contact-dermatitis-clinical]] and [[eczema-dermatitis]]; drug reactions in [[cutaneous-drug-reactions]].',
  ],

  mechanism: {
    title: 'Gell-Coombs: I (IgE urticaria) / IV (delayed contact dermatitis, drug) / II (blistering) / III (vasculitis); recognise type → treat',
    steps: [
      { id: 's1', label: 'Type I (IgE/mast cell, immediate): urticaria/angioedema/anaphylaxis → antihistamine (± adrenaline)', emphasis: 'key' },
      { id: 's2', label: 'Type IV (T-cell, delayed 48–72h): allergic contact dermatitis (patch test) + drug eruptions', emphasis: 'key' },
      { id: 's3', label: 'Type II = autoimmune blistering (desmoglein/hemidesmosome antibodies)', emphasis: 'key' },
      { id: 's4', label: 'Type III = leukocytoclastic vasculitis (palpable purpura), serum sickness', emphasis: 'key' },
      { id: 's5', label: 'Distinguish true allergy from pseudo-allergy (direct mast-cell release, not IgE)' },
    ],
  },

  examFindings: [
    { sign: 'Transient itchy wheals resolving within 24 h', mechanism: 'Type I urticaria (IgE/mast-cell)', significance: 'key' },
    { sign: 'Itchy dermatitis at a nickel-contact site, patch-test positive', mechanism: 'Type IV allergic contact dermatitis', significance: 'key' },
    { sign: 'Palpable purpura on the lower legs', mechanism: 'Type III leukocytoclastic vasculitis', significance: 'key' },
    { sign: 'Blisters from antibodies to keratinocyte adhesion molecules', mechanism: 'Type II autoimmune blistering (pemphigus/pemphigoid)', significance: 'key' },
    { sign: 'Hand dermatitis in a cleaner with no sensitisation', mechanism: 'Irritant contact dermatitis (non-immune)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The hypersensitivity type of urticaria', meaning: 'Type I (IgE/mast cell)' },
    { clue: 'The test for allergic contact dermatitis', meaning: 'Patch testing (Type IV)' },
    { clue: 'The hypersensitivity type of leukocytoclastic vasculitis', meaning: 'Type III (immune complex)' },
    { clue: 'The reaction that is NOT immune-mediated', meaning: 'Irritant contact dermatitis' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Classifying a cutaneous reaction by Gell-Coombs type directs work-up and treatment: Type I urticaria → antihistamines (adrenaline if anaphylaxis), Type IV allergic contact dermatitis → patch test and allergen avoidance, Type II blistering → immunofluorescence/immunosuppression, Type III vasculitis → trigger search. Distinguishing true allergy from irritant/pseudo-allergic reactions prevents mislabelling. Builds on [[skin-immune-system-cells]]; overlaps [[contact-dermatitis-clinical]], [[eczema-dermatitis]] and [[cutaneous-drug-reactions]].' },
  ],

  mnemonics: [
    { hook: 'Gell-Coombs "ACID": I Anaphylaxis/urticaria, II Cytotoxic (blistering), III Immune complex (vasculitis), IV Delayed (contact)', expansion: ['I = antihistamine', 'IV = patch test'] },
    { hook: '"Urticaria = immediate (IgE); contact dermatitis = delayed (T-cell, patch+)"', expansion: ['Irritant = non-immune', 'Pseudo-allergy ≠ IgE'] },
  ],

  traps: [
    {
      questionCategory: 'Urticaria vs contact dermatitis timing',
      wrongInstinct: 'All allergic skin reactions appear immediately after exposure',
      rightAnswer: 'Timing separates the mechanisms: TYPE I urticaria is IMMEDIATE (minutes, IgE/mast-cell, transient wheals), whereas TYPE IV allergic contact dermatitis is DELAYED (48–72 hours, T-cell) — so a rash appearing days after contact points to a delayed T-cell reaction (patch-test positive), not an immediate IgE allergy',
      why: 'The immediate-vs-delayed distinction changes the mechanism, diagnostic test (prick vs patch) and treatment; assuming all reactions are immediate misclassifies delayed contact dermatitis.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient develops itchy dermatitis 2–3 days after their skin contacts a nickel belt buckle, with a positive patch test. This is which hypersensitivity type?',
      options: [
        { id: 'a', text: 'Type I (immediate, IgE)' },
        { id: 'b', text: 'Type IV (delayed, T-cell)' },
        { id: 'c', text: 'Type II (cytotoxic)' },
        { id: 'd', text: 'Type III (immune complex)' },
      ],
      answerId: 'b',
      explanation: 'Allergic contact dermatitis is a Type IV delayed (T-cell-mediated) hypersensitivity, appearing 48–72 h after re-exposure in a sensitised person and diagnosed by patch testing. Type I (IgE) reactions such as urticaria are immediate.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Transient itchy wheals that each resolve within 24 hours (urticaria) are typically mediated by:',
      options: [
        { id: 'a', text: 'T cells (Type IV)' },
        { id: 'b', text: 'IgE and mast-cell histamine release (Type I)' },
        { id: 'c', text: 'Immune complexes (Type III)' },
        { id: 'd', text: 'Cytotoxic antibody (Type II)' },
      ],
      answerId: 'b',
      explanation: 'Urticaria is usually a Type I, IgE/mast-cell-mediated reaction releasing histamine, with transient individual wheals (<24 h). It is treated with antihistamines, reserving adrenaline for anaphylaxis/airway angioedema.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default cutaneousHypersensitivityReactions;
