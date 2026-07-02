import type { Lecture } from '../../lib/types';

export const contactDermatitisClinical: Lecture = {
  id: 'contact-dermatitis-clinical',
  title: 'Contact Dermatitis: Irritant vs Allergic',
  system: 'derm',
  source: 'L16 — Eczema & Dermatitis',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L16 Contact Dermatitis' },
    { kind: 'mechanism', label: 'Non-immune vs Type IV' },
    { kind: 'exam', label: 'Patch testing; distribution clues' },
  ],

  highYield: [
    '**Contact dermatitis is eczema caused by an external agent, in two forms. IRRITANT contact dermatitis (the COMMONEST) is a NON-immune, direct chemical/physical injury to the skin — it can affect ANYONE given enough exposure (no prior sensitisation), typically on the HANDS of wet-workers/cleaners (soaps, detergents, solvents, water); worse with cumulative exposure.**',
    '**ALLERGIC contact dermatitis is a TYPE IV delayed (T-cell) hypersensitivity requiring prior SENSITISATION — on RE-exposure it flares 48–72 hours later. Common allergens: NICKEL (jewellery, belt buckles), fragrances, preservatives, rubber (gloves), hair dye (PPD), topical antibiotics and plants (poison ivy/oak — often LINEAR streaks). Diagnosed by PATCH TESTING (read at 48–96 h).**',
    '**DISTRIBUTION is a powerful clue: the rash appears where the agent CONTACTS the skin — e.g. a rash under a watch/earlobes (nickel), around the eyes (cosmetics/nail contact), in a LINEAR pattern (plant), on the dorsal feet (shoe/rubber), or on exposed sites in an AIRBORNE/photocontact reaction. A well-demarcated dermatitis matching a contact area suggests contact dermatitis.**',
    '**MANAGEMENT: IDENTIFY and AVOID the cause (patch testing for allergic; reduce irritant exposure + barrier protection/gloves for irritant), plus emollients and topical corticosteroids for the dermatitis (± systemic steroids for severe acute reactions). Occupational contact dermatitis (hands) is a common cause of work-related skin disease.**',
    '**The take-home: IRRITANT contact dermatitis = non-immune, anyone, cumulative (hands of wet-workers) vs ALLERGIC contact dermatitis = Type IV delayed, needs sensitisation, patch-test positive (nickel, fragrances, plants); DISTRIBUTION points to the contactant; treat by AVOIDANCE + emollients/topical steroid.** The hypersensitivity mechanism is [[cutaneous-hypersensitivity-reactions]]; atopic eczema is [[atopic-dermatitis-clinical]]; overview [[eczema-dermatitis]].',
  ],

  mechanism: {
    title: 'Irritant (non-immune, anyone, cumulative, hands) vs allergic (Type IV delayed, sensitised, patch-test+, nickel/fragrance/plant); distribution clue; avoid',
    steps: [
      { id: 's1', label: 'Irritant contact dermatitis = non-immune direct injury; anyone (no sensitisation); hands/wet-work', emphasis: 'key' },
      { id: 's2', label: 'Allergic contact dermatitis = Type IV delayed (48–72h); needs prior sensitisation', emphasis: 'key' },
      { id: 's3', label: 'Common allergens: nickel, fragrances, preservatives, rubber, PPD, plants (linear)', emphasis: 'key' },
      { id: 's4', label: 'Distribution = where the agent contacts skin (watch, earlobe, linear plant streak)', emphasis: 'key' },
      { id: 's5', label: 'Manage: identify + avoid (patch test), barrier protection, emollients + topical steroid' },
    ],
  },

  examFindings: [
    { sign: 'Hand dermatitis in a cleaner with cumulative exposure, no sensitisation', mechanism: 'Irritant contact dermatitis (non-immune)', significance: 'key' },
    { sign: 'Itchy dermatitis under a nickel belt buckle, patch-test positive', mechanism: 'Allergic contact dermatitis (Type IV)', significance: 'key' },
    { sign: 'Linear streaks of vesicular dermatitis after gardening', mechanism: 'Plant (poison ivy) allergic contact dermatitis', significance: 'key' },
    { sign: 'Well-demarcated dermatitis matching a contact area', mechanism: 'Contact dermatitis (distribution clue)', significance: 'supportive' },
    { sign: 'Positive patch test read at 72–96 hours', mechanism: 'Allergic contact dermatitis confirmation', significance: 'key' },
  ],

  investigations: [
    { clue: 'The commonest form of contact dermatitis', meaning: 'Irritant (non-immune)' },
    { clue: 'The hypersensitivity type of allergic contact dermatitis', meaning: 'Type IV (delayed, T-cell)' },
    { clue: 'The test that identifies the allergen', meaning: 'Patch testing' },
    { clue: 'The best clue to the causative agent', meaning: 'The distribution (where the agent contacts skin)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The cornerstone is identifying and avoiding the cause — patch testing to find the allergen in allergic contact dermatitis, and reducing irritant exposure with barrier protection in irritant dermatitis — plus emollients and topical steroids to settle the eczema. Distribution guides the search for the contactant, and occupational hand dermatitis is a major work-related disease. The mechanism is [[cutaneous-hypersensitivity-reactions]]; atopic eczema is [[atopic-dermatitis-clinical]]; overview [[eczema-dermatitis]].' },
  ],

  mnemonics: [
    { hook: '"Irritant = anyone (non-immune, cumulative); Allergic = sensitised (Type IV, patch+)"', expansion: ['Nickel/fragrance/plant', 'Distribution = the clue'] },
    { hook: '"Linear streaks = plant; watch/earlobe = nickel"', expansion: ['Patch test read 48–96h', 'Avoid + emollient + steroid'] },
  ],

  traps: [
    {
      questionCategory: 'Irritant vs allergic contact dermatitis',
      wrongInstinct: 'A dermatitis from touching a substance is always an allergy to it',
      rightAnswer: 'Most contact dermatitis is IRRITANT — a NON-immune, direct chemical/physical injury that can affect ANYONE with enough exposure (no sensitisation, patch-test negative) — whereas ALLERGIC contact dermatitis is a Type IV reaction requiring prior SENSITISATION and confirmed by PATCH testing; distinguishing them changes management (reduce irritant exposure/barrier vs identify and avoid the specific allergen)',
      why: 'Labelling irritant dermatitis as allergy leads to unnecessary allergy testing and misses the real fix (reducing irritant exposure); only allergic contact dermatitis is immune-mediated and patch-test positive.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A well-demarcated itchy dermatitis appears under a patient\'s nickel watch strap and is patch-test positive to nickel. This is:',
      options: [
        { id: 'a', text: 'Irritant contact dermatitis' },
        { id: 'b', text: 'Allergic contact dermatitis (Type IV)' },
        { id: 'c', text: 'Atopic dermatitis' },
        { id: 'd', text: 'Urticaria' },
      ],
      answerId: 'b',
      explanation: 'A dermatitis localised to a nickel-contact site with a positive patch test is allergic contact dermatitis — a Type IV delayed hypersensitivity requiring prior sensitisation. Distribution (where the agent contacts skin) is a key diagnostic clue.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which statement about irritant contact dermatitis is correct?',
      options: [
        { id: 'a', text: 'It requires prior sensitisation and is patch-test positive' },
        { id: 'b', text: 'It is a non-immune reaction that can affect anyone with sufficient exposure' },
        { id: 'c', text: 'It is a Type I IgE reaction' },
        { id: 'd', text: 'It only occurs in atopic individuals' },
      ],
      answerId: 'b',
      explanation: 'Irritant contact dermatitis is a non-immune, direct chemical/physical injury to the skin that can affect anyone given enough cumulative exposure (e.g. wet-work hand dermatitis); it does not require sensitisation and is patch-test negative, unlike Type IV allergic contact dermatitis.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default contactDermatitisClinical;
