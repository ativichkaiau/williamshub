import type { Lecture } from '../../lib/types';

export const vesiculobullousDiseases: Lecture = {
  id: 'vesiculobullous-diseases',
  title: 'Vesiculobullous Diseases',
  system: 'derm',
  source: 'L9 — Papulosquamous & Vesiculobullous Diseases',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L9 Vesiculobullous' },
    { kind: 'mechanism', label: 'Autoimmune blistering levels' },
    { kind: 'exam', label: 'Pemphigus vs pemphigoid; DH' },
  ],

  highYield: [
    '**Autoimmune blistering diseases are defined by WHERE the skin splits and WHICH adhesion molecule the antibody targets. PEMPHIGUS VULGARIS: IgG against DESMOGLEIN 3 (±1) → loss of keratinocyte adhesion (acantholysis) → INTRA-epidermal split → FLACCID blisters that rupture into painful erosions, prominent ORAL involvement, and a POSITIVE NIKOLSKY sign (skin shears with lateral pressure). Potentially fatal; needs systemic steroids/immunosuppression.**',
    '**BULLOUS PEMPHIGOID: IgG against hemidesmosomal BP180/BP230 at the DERMO-EPIDERMAL junction → SUB-epidermal split → TENSE, intact blisters on an urticarial base in the ELDERLY, itchy, usually SPARING the mouth, Nikolsky NEGATIVE. Less dangerous than pemphigus; treated with topical/systemic steroids. The split level (intra- vs sub-epidermal) is the core distinction.**',
    '**DERMATITIS HERPETIFORMIS: intensely itchy GROUPED vesicles/papules on EXTENSOR surfaces (elbows, knees, buttocks), with granular IgA at dermal papillae; it is the cutaneous marker of COELIAC DISEASE (gluten sensitivity) → treat with a GLUTEN-FREE diet (and dapsone for rapid itch relief). "Herpetiform" describes the grouping, not a viral cause.**',
    '**Diagnosis uses biopsy for HISTOLOGY (split level, acantholysis) plus DIRECT IMMUNOFLUORESCENCE: pemphigus = intercellular "chicken-wire/fishnet" IgG; pemphigoid = LINEAR IgG/C3 along the basement membrane; dermatitis herpetiformis = GRANULAR IgA in dermal papillae. Other blistering: bullous impetigo, SJS/TEN (drug — a dermatologic emergency), and porphyria cutanea tarda.**',
    '**The take-home: PEMPHIGUS (desmoglein, intra-epidermal, flaccid, oral, Nikolsky+, dangerous; chicken-wire IgG) vs bullous PEMPHIGOID (BP180, subepidermal, tense, elderly, oral-sparing, Nikolsky−; linear IgG/C3) vs DERMATITIS HERPETIFORMIS (extensor grouped, granular IgA, coeliac, gluten-free + dapsone).** The adhesion levels come from [[skin-anatomy-histology]]; steroid/immunosuppressive therapy is in [[dermatologic-therapy]]; drug-induced SJS/TEN is in [[cutaneous-drug-reactions]].',
  ],

  mechanism: {
    title: 'Pemphigus (desmoglein, intra-epidermal, flaccid, Nikolsky+) vs pemphigoid (BP180, subepidermal, tense) vs DH (IgA, coeliac)',
    steps: [
      { id: 's1', label: 'Pemphigus vulgaris: anti-desmoglein → acantholysis → INTRA-epidermal FLACCID blisters, oral, Nikolsky+', emphasis: 'key' },
      { id: 's2', label: 'Pemphigus: chicken-wire intercellular IgG on DIF; dangerous → immunosuppression', emphasis: 'danger' },
      { id: 's3', label: 'Bullous pemphigoid: anti-BP180 → SUB-epidermal TENSE blisters, elderly, oral-sparing, Nikolsky−', emphasis: 'key' },
      { id: 's4', label: 'Pemphigoid DIF = linear IgG/C3 at basement membrane', emphasis: 'key' },
      { id: 's5', label: 'Dermatitis herpetiformis: extensor grouped vesicles, granular IgA, COELIAC → gluten-free + dapsone', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Flaccid blisters and painful oral erosions, skin shears with pressure', mechanism: 'Pemphigus vulgaris (Nikolsky positive, intra-epidermal)', significance: 'key' },
    { sign: 'Tense intact blisters on an urticarial base in an elderly patient, mouth spared', mechanism: 'Bullous pemphigoid (subepidermal)', significance: 'key' },
    { sign: 'Intensely itchy grouped vesicles on elbows/knees/buttocks', mechanism: 'Dermatitis herpetiformis (coeliac)', significance: 'key' },
    { sign: 'Intercellular "chicken-wire" IgG on immunofluorescence', mechanism: 'Pemphigus', significance: 'key' },
    { sign: 'Linear IgG/C3 along the basement membrane', mechanism: 'Bullous pemphigoid', significance: 'key' },
  ],

  investigations: [
    { clue: 'The target antigen and split level in pemphigus vulgaris', meaning: 'Desmoglein 3 (±1); intra-epidermal' },
    { clue: 'The target antigen and split level in bullous pemphigoid', meaning: 'BP180/BP230 (hemidesmosome); subepidermal' },
    { clue: 'The systemic disease associated with dermatitis herpetiformis', meaning: 'Coeliac disease (gluten sensitivity)' },
    { clue: 'The immunofluorescence pattern of pemphigus vs pemphigoid', meaning: 'Chicken-wire intercellular IgG vs linear basement-membrane IgG/C3' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Distinguishing these guides urgency and therapy: pemphigus vulgaris is potentially fatal (fluid/protein loss, sepsis) and needs systemic corticosteroids/immunosuppression, bullous pemphigoid is treated with topical/systemic steroids, and dermatitis herpetiformis responds to a gluten-free diet (± dapsone) with coeliac work-up. The split levels rest on the adhesion molecules of [[skin-anatomy-histology]]; immunosuppressive management is in [[dermatologic-therapy]]; drug-induced blistering (SJS/TEN) is separate ([[cutaneous-drug-reactions]]).' },
  ],

  mnemonics: [
    { hook: '"PemphiGus = Glue/desmoGlein, intra-epidermal, flaccid, Nikolsky+ (bad); pemphigOid = Outer/BM, subepidermal, tense (Old)"', expansion: ['Pemphigus = chicken-wire IgG', 'Pemphigoid = linear IgG/C3'] },
    { hook: '"Dermatitis Herpetiformis = gluten (coeliac), granular IgA, Dapsone"', expansion: ['Extensor grouped vesicles', 'Gluten-free diet is the cure'] },
  ],

  traps: [
    {
      questionCategory: 'Nikolsky sign and blister fragility',
      wrongInstinct: 'Tense, intact blisters are the more dangerous, aggressive autoimmune blistering disease',
      rightAnswer: 'It is the opposite: PEMPHIGUS (intra-epidermal, anti-desmoglein) produces FLACCID, fragile blisters that rupture easily with a POSITIVE Nikolsky sign and is the more DANGEROUS disease, whereas bullous PEMPHIGOID (subepidermal) produces TENSE, intact blisters with a NEGATIVE Nikolsky and is generally less severe — fragility (flaccid/Nikolsky+) signals the higher-level, more serious split',
      why: 'The more superficial (intra-epidermal) split of pemphigus makes blisters fragile and the disease life-threatening, so the flaccid/Nikolsky-positive picture — not the dramatic tense blisters of pemphigoid — is the red flag.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Flaccid blisters with painful oral erosions, a positive Nikolsky sign, and intercellular "chicken-wire" IgG on immunofluorescence indicate:',
      options: [
        { id: 'a', text: 'Bullous pemphigoid' },
        { id: 'b', text: 'Pemphigus vulgaris' },
        { id: 'c', text: 'Dermatitis herpetiformis' },
        { id: 'd', text: 'Contact dermatitis' },
      ],
      answerId: 'b',
      explanation: 'Pemphigus vulgaris is caused by IgG against desmoglein 3 (±1), producing intra-epidermal acantholysis with flaccid blisters, oral erosions, a positive Nikolsky sign and an intercellular ("chicken-wire") IgG pattern on direct immunofluorescence. It is potentially fatal and requires immunosuppression.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Dermatitis herpetiformis (itchy grouped vesicles on extensor surfaces, granular IgA) is the cutaneous manifestation of:',
      options: [
        { id: 'a', text: 'Hepatitis C' },
        { id: 'b', text: 'Coeliac disease (gluten sensitivity)' },
        { id: 'c', text: 'Herpes simplex infection' },
        { id: 'd', text: 'Diabetes mellitus' },
      ],
      answerId: 'b',
      explanation: 'Dermatitis herpetiformis is associated with coeliac disease; granular IgA is deposited at the dermal papillae. A gluten-free diet treats both the gut and skin disease, and dapsone gives rapid relief of the intense itch. The name reflects the herpetiform grouping, not a viral cause.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default vesiculobullousDiseases;
