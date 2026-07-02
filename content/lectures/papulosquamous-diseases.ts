import type { Lecture } from '../../lib/types';

export const papulosquamousDiseases: Lecture = {
  id: 'papulosquamous-diseases',
  title: 'Papulosquamous Diseases',
  system: 'derm',
  source: 'L9 — Papulosquamous & Vesiculobullous Diseases',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L9 Papulosquamous' },
    { kind: 'mechanism', label: 'Scaly papules & plaques' },
    { kind: 'exam', label: 'Psoriasis, lichen planus, pityriasis rosea' },
  ],

  highYield: [
    '**Papulosquamous diseases = scaly papules and plaques. PSORIASIS is a chronic, immune-mediated (Th17/TNF) disease of ACCELERATED keratinocyte turnover: sharply demarcated erythematous plaques with SILVERY scale on EXTENSOR surfaces (elbows/knees), scalp and lumbosacral area; AUSPITZ sign (pinpoint bleeding on scale removal), KOEBNER phenomenon (lesions at trauma sites), nail pitting/onycholysis, and psoriatic ARTHRITIS. Variants: guttate (post-streptococcal, small drops), pustular, erythrodermic (emergency).**',
    '**LICHEN PLANUS: the "6 P\'s" — Purple, Polygonal, Pruritic, Planar (flat-topped) Papules and Plaques, with lacy white WICKHAM striae; on flexor wrists, ankles, oral mucosa (reticular white lines); associated with hepatitis C; Koebnerises. PITYRIASIS ROSEA: a self-limited eruption — a HERALD PATCH followed by smaller oval plaques along skin lines in a "CHRISTMAS-TREE" pattern on the trunk (possibly HHV-6/7).**',
    '**Distinguishing features on exam: psoriasis = extensor, silvery scale, Auspitz/Koebner, nail changes; lichen planus = flexor, violaceous flat papules + Wickham striae + oral involvement; pityriasis rosea = herald patch + Christmas-tree, self-limited. Other scaly conditions: seborrhoeic dermatitis (greasy scale, Malassezia — see eczema) and tinea (KOH-positive — must be excluded).**',
    '**TREATMENT: psoriasis → topical corticosteroids + vitamin D analogues (calcipotriol), then phototherapy and systemic/biologic agents (methotrexate, anti-TNF/anti-IL-17/23) for extensive disease; lichen planus → topical steroids (self-limited but chronic); pityriasis rosea → reassurance ± symptomatic care (resolves in 6–8 weeks). Erythrodermic/pustular psoriasis needs urgent systemic therapy.**',
    '**The take-home: PSORIASIS (extensor silvery plaques, Auspitz/Koebner, nail pits, arthritis; Th17/turnover) vs LICHEN PLANUS (6 P\'s + Wickham striae, flexor/oral, HCV) vs PITYRIASIS ROSEA (herald patch → Christmas-tree, self-limited). Exclude tinea (KOH).** These use the topical/systemic ladder of [[dermatologic-therapy]]; the autoimmune blistering group is in [[vesiculobullous-diseases]]; scaly eczema in [[eczema-dermatitis]].',
  ],

  mechanism: {
    title: 'Psoriasis (extensor silvery, turnover/Th17) vs lichen planus (6 P\'s + Wickham) vs pityriasis rosea (herald → Christmas-tree)',
    steps: [
      { id: 's1', label: 'Psoriasis: accelerated keratinocyte turnover (Th17/TNF); extensor silvery plaques', emphasis: 'key' },
      { id: 's2', label: 'Psoriasis signs: Auspitz, Koebner, nail pitting/onycholysis, psoriatic arthritis', emphasis: 'key' },
      { id: 's3', label: 'Lichen planus = 6 P\'s (purple polygonal pruritic planar papules) + Wickham striae; flexor/oral; HCV', emphasis: 'key' },
      { id: 's4', label: 'Pityriasis rosea = herald patch → Christmas-tree, self-limited (6–8 wks)', emphasis: 'key' },
      { id: 's5', label: 'Treat psoriasis: topical steroid + vitamin D → phototherapy → systemic/biologic; exclude tinea (KOH)' },
    ],
  },

  examFindings: [
    { sign: 'Silvery-scaled plaques on elbows/knees with pinpoint bleeding on scale removal', mechanism: 'Psoriasis (Auspitz sign)', significance: 'key' },
    { sign: 'New psoriatic lesions along a scratch/scar', mechanism: 'Koebner phenomenon', significance: 'supportive' },
    { sign: 'Violaceous flat-topped papules with lacy white lines, on flexor wrists/oral mucosa', mechanism: 'Lichen planus (Wickham striae)', significance: 'key' },
    { sign: 'A single large scaly patch followed by a Christmas-tree trunk eruption', mechanism: 'Pityriasis rosea (herald patch)', significance: 'key' },
    { sign: 'Nail pitting and onycholysis with arthritis', mechanism: 'Psoriasis with psoriatic arthritis', significance: 'key' },
  ],

  investigations: [
    { clue: 'The scale colour and distribution of psoriasis', meaning: 'Silvery scale on extensor surfaces' },
    { clue: 'The "6 P\'s" disease with Wickham striae', meaning: 'Lichen planus' },
    { clue: 'The self-limited eruption with a herald patch', meaning: 'Pityriasis rosea' },
    { clue: 'The condition that must be excluded in any scaly plaque', meaning: 'Tinea (KOH microscopy)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Recognising the pattern directs very different management: psoriasis is chronic and may need the full ladder (topical steroid + vitamin D analogue → phototherapy → methotrexate/biologics) plus screening for psoriatic arthritis; lichen planus is treated with topical steroids and prompts HCV consideration; pityriasis rosea needs only reassurance. Erythrodermic/pustular psoriasis is an emergency. These rely on the therapy principles of [[dermatologic-therapy]] and immunology of [[cutaneous-immunology-hypersensitivity]].' },
  ],

  mnemonics: [
    { hook: 'Psoriasis: "extensor, silvery, Auspitz + Koebner, nails, arthritis"', expansion: ['Guttate = post-strep', 'Erythrodermic = emergency'] },
    { hook: 'Lichen planus "6 P\'s" + Wickham; Pityriasis rosea = "herald → Christmas tree"', expansion: ['LP: flexor + oral + HCV', 'PR: self-limited 6–8 wks'] },
  ],

  traps: [
    {
      questionCategory: 'Psoriasis vs eczema distribution',
      wrongInstinct: 'Scaly itchy plaques in the elbow and knee region are most likely eczema',
      rightAnswer: 'Distribution helps distinguish them: PSORIASIS classically affects the EXTENSOR surfaces (elbows, KNEES), scalp and lumbosacral area with sharply demarcated SILVERY plaques (Auspitz/Koebner, nail pitting), whereas atopic ECZEMA favours the FLEXURES (antecubital/popliteal fossae) with ill-defined, weepy/lichenified dermatitis — extensor-silvery vs flexural-eczematous',
      why: 'The extensor vs flexural pattern (plus scale character and nail/joint clues) separates psoriasis from eczema, which have different treatments and associations (psoriatic arthritis vs atopy).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Sharply demarcated erythematous plaques with silvery scale on the elbows and knees, with pinpoint bleeding when the scale is removed, indicate:',
      options: [
        { id: 'a', text: 'Lichen planus' },
        { id: 'b', text: 'Psoriasis (Auspitz sign)' },
        { id: 'c', text: 'Pityriasis rosea' },
        { id: 'd', text: 'Atopic dermatitis' },
      ],
      answerId: 'b',
      explanation: 'Psoriasis produces well-demarcated silvery-scaled plaques on extensor surfaces; removing the scale causes pinpoint bleeding (Auspitz sign) from the dilated dermal papillary capillaries. Koebner phenomenon, nail pitting and psoriatic arthritis support the diagnosis.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The "6 P\'s" (purple, polygonal, pruritic, planar papules/plaques) with lacy white Wickham striae describe:',
      options: [
        { id: 'a', text: 'Psoriasis' },
        { id: 'b', text: 'Lichen planus' },
        { id: 'c', text: 'Pityriasis rosea' },
        { id: 'd', text: 'Tinea corporis' },
      ],
      answerId: 'b',
      explanation: 'Lichen planus presents as purple, polygonal, pruritic, planar (flat-topped) papules and plaques with lacy white Wickham striae, favouring the flexor wrists, ankles and oral mucosa; it is associated with hepatitis C. It is treated with topical corticosteroids.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default papulosquamousDiseases;
