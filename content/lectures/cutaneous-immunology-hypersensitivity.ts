import type { Lecture } from '../../lib/types';

export const cutaneousImmunologyHypersensitivity: Lecture = {
  id: 'cutaneous-immunology-hypersensitivity',
  title: 'Cutaneous Immunology & Hypersensitivity',
  system: 'derm',
  source: 'L4 — Cutaneous Immunology & Hypersensitivity',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L4 Cutaneous Immunology' },
    { kind: 'mechanism', label: 'Skin immune system; Gell-Coombs' },
    { kind: 'exam', label: 'Type I vs Type IV in skin' },
  ],

  highYield: [
    '**The skin is an active immune organ ("skin-associated lymphoid tissue"): KERATINOCYTES sense danger and release cytokines; LANGERHANS cells (epidermal dendritic cells) capture antigen and present it in lymph nodes; T cells, mast cells, and the physical/chemical BARRIER (stratum corneum, low pH, antimicrobial peptides) all defend the skin. Many skin diseases are immune reactions classified by the GELL-COOMBS scheme.**',
    '**TYPE I (IMMEDIATE, IgE/mast-cell): URTICARIA (wheals — transient <24 h), angioedema and anaphylaxis; histamine-driven, treated with antihistamines (± adrenaline for anaphylaxis). TYPE IV (DELAYED, T-cell, 48–72 h) is the key cutaneous mechanism — ALLERGIC CONTACT DERMATITIS (nickel, poison ivy, fragrances) diagnosed by PATCH TESTING, and it also underlies most morbilliform drug eruptions and the severe cutaneous reactions.**',
    '**Type II (cytotoxic antibody) and Type III (immune-complex) also affect skin: Type II includes autoimmune blistering (pemphigus/pemphigoid antibodies against adhesion molecules); Type III includes leukocytoclastic VASCULITIS and serum sickness (palpable purpura from immune-complex deposition). Diagnosis uses direct/indirect IMMUNOFLUORESCENCE and patch testing.**',
    '**Contact dermatitis has two forms to distinguish: IRRITANT contact dermatitis (non-immune, direct chemical/physical damage — commonest, e.g. soaps/detergents, anyone with enough exposure) vs ALLERGIC contact dermatitis (Type IV, needs prior sensitisation, patch-test positive). Atopic dermatitis reflects a Th2-skewed, barrier-defective immune state (filaggrin mutations).**',
    '**The take-home: skin is an immune organ (keratinocytes, Langerhans cells, barrier); Type I (IgE) = urticaria/anaphylaxis (immediate, antihistamine), Type IV (T-cell) = allergic contact dermatitis + drug eruptions (delayed, patch test); Type II = autoimmune blistering, Type III = vasculitis/immune complexes.** These mechanisms recur across [[eczema-dermatitis]], [[cutaneous-drug-reactions]], [[vesiculobullous-diseases]] and [[panniculitis-vasculitis-skin]]; the general allergy framework is in BCP ([[adverse-drug-reactions-allergy]]).',
  ],

  mechanism: {
    title: 'Skin immune organ; Gell-Coombs I (urticaria) / IV (contact dermatitis, drug) / II (blistering) / III (vasculitis)',
    steps: [
      { id: 's1', label: 'Skin immunity: keratinocytes (cytokines), Langerhans (antigen), barrier/AMPs', emphasis: 'key' },
      { id: 's2', label: 'Type I (IgE/mast cell) = urticaria, angioedema, anaphylaxis (immediate)', emphasis: 'key' },
      { id: 's3', label: 'Type IV (T-cell, delayed) = allergic contact dermatitis (patch test) + drug eruptions', emphasis: 'key' },
      { id: 's4', label: 'Type II = autoimmune blistering; Type III = leukocytoclastic vasculitis (palpable purpura)', emphasis: 'key' },
      { id: 's5', label: 'Irritant (non-immune, common) vs allergic (Type IV, sensitised) contact dermatitis' },
    ],
  },

  examFindings: [
    { sign: 'Transient wheals resolving within 24 hours', mechanism: 'Type I urticaria (IgE/mast-cell, histamine)', significance: 'key' },
    { sign: 'Itchy dermatitis at a nickel-contact site, patch-test positive', mechanism: 'Type IV allergic contact dermatitis (delayed, T-cell)', significance: 'key' },
    { sign: 'Palpable purpura on the lower legs', mechanism: 'Type III leukocytoclastic vasculitis (immune complexes)', significance: 'key' },
    { sign: 'Blisters from antibodies against adhesion molecules', mechanism: 'Type II autoimmune blistering (pemphigus/pemphigoid)', significance: 'key' },
    { sign: 'Hand dermatitis in a cleaner from detergents, no sensitisation', mechanism: 'Irritant contact dermatitis (non-immune)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The epidermal antigen-presenting cell', meaning: 'The Langerhans cell' },
    { clue: 'The hypersensitivity type of urticaria', meaning: 'Type I (IgE/mast cell)' },
    { clue: 'The test for allergic contact dermatitis', meaning: 'Patch testing (Type IV)' },
    { clue: 'The hypersensitivity type of leukocytoclastic vasculitis', meaning: 'Type III (immune complex)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Classifying a skin reaction by Gell-Coombs type directs work-up and treatment: Type I urticaria → antihistamines (adrenaline if anaphylaxis), Type IV allergic contact dermatitis → identify/avoid the allergen (patch test), Type II blistering → immunofluorescence/immunosuppression, Type III vasculitis → find the trigger. These mechanisms recur in eczema ([[eczema-dermatitis]]), drug reactions ([[cutaneous-drug-reactions]]) and vasculitis ([[panniculitis-vasculitis-skin]]); the systemic allergy framework is BCP ([[adverse-drug-reactions-allergy]]).' },
  ],

  mnemonics: [
    { hook: 'Skin hypersensitivity: "I = urticaria (Immediate/IgE); IV = contact dermatitis (delayed T-cell, patch test)"', expansion: ['II = autoimmune blistering', 'III = vasculitis/immune complex'] },
    { hook: '"Irritant = anyone (non-immune); Allergic = sensitised (Type IV, patch+)"', expansion: ['Langerhans = antigen presentation', 'Barrier + AMPs = innate defence'] },
  ],

  traps: [
    {
      questionCategory: 'Irritant vs allergic contact dermatitis',
      wrongInstinct: 'All contact dermatitis is an allergy to the substance touched',
      rightAnswer: 'Most contact dermatitis is IRRITANT (a NON-immune, direct chemical/physical injury that can affect ANYONE given enough exposure, e.g. detergents), NOT allergy; ALLERGIC contact dermatitis is a Type IV (delayed T-cell) reaction requiring prior SENSITISATION and confirmed by PATCH testing — distinguishing them changes management (barrier/avoidance vs allergen identification)',
      why: 'Labelling irritant dermatitis as "allergy" leads to unnecessary allergy testing and misses the real fix (reducing irritant exposure/barrier repair); only allergic contact dermatitis is immune-mediated and patch-test positive.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Allergic contact dermatitis (e.g. to nickel or poison ivy) is mediated by which hypersensitivity mechanism?',
      options: [
        { id: 'a', text: 'Type I (IgE, immediate)' },
        { id: 'b', text: 'Type IV (delayed, T-cell)' },
        { id: 'c', text: 'Type II (cytotoxic antibody)' },
        { id: 'd', text: 'Type III (immune complex)' },
      ],
      answerId: 'b',
      explanation: 'Allergic contact dermatitis is a Type IV delayed (T-cell-mediated) hypersensitivity appearing 48–72 h after re-exposure in a sensitised person, diagnosed by patch testing. Type I (IgE) mediates the immediate urticaria/anaphylaxis reactions.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient develops transient itchy wheals that each fade within a day. This urticaria is a:',
      options: [
        { id: 'a', text: 'Type IV delayed reaction' },
        { id: 'b', text: 'Type I (IgE/mast-cell, histamine-mediated) reaction' },
        { id: 'c', text: 'Type II cytotoxic reaction' },
        { id: 'd', text: 'Non-immune process only' },
      ],
      answerId: 'b',
      explanation: 'Urticaria (wheals) is typically a Type I, IgE/mast-cell-mediated reaction releasing histamine; individual wheals are transient (<24 h). It is treated with antihistamines, with adrenaline reserved for associated anaphylaxis/angioedema of the airway.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default cutaneousImmunologyHypersensitivity;
