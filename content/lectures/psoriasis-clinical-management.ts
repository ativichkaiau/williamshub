import type { Lecture } from '../../lib/types';

export const psoriasisClinicalManagement: Lecture = {
  id: 'psoriasis-clinical-management',
  title: 'Psoriasis: Clinical Types & Management',
  system: 'derm',
  source: 'L9 — Papulosquamous & Vesiculobullous Diseases',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L9 Psoriasis' },
    { kind: 'mechanism', label: 'Th17 turnover; variants; ladder' },
    { kind: 'exam', label: 'Guttate/pustular/erythrodermic; comorbidity' },
  ],

  highYield: [
    'Psoriasis is a chronic, immune-mediated (Th17/IL-23, TNF) disease of ACCELERATED keratinocyte turnover. The commonest form is CHRONIC PLAQUE psoriasis: well-demarcated erythematous plaques with SILVERY scale on EXTENSOR surfaces (elbows/knees), scalp and lumbosacral area, with AUSPITZ sign, KOEBNER phenomenon and NAIL changes (pitting, onycholysis, oil-drop sign).',
    'Clinical VARIANTS: GUTTATE (small "drop-like" papules, often POST-STREPTOCOCCAL in young people); FLEXURAL/inverse (shiny, less scaly); PUSTULAR (sterile pustules — localised palmoplantar or generalised/von Zumbusch, which can be systemically unwell); and ERYTHRODERMIC psoriasis (>90% body surface erythema — a DERMATOLOGICAL EMERGENCY with fluid/temperature/infection risk).',
    'Psoriasis is a SYSTEMIC disease: up to ~30% develop PSORIATIC ARTHRITIS (screen for joint symptoms — can be destructive), and it is associated with metabolic syndrome, cardiovascular disease, IBD and depression. Triggers include streptococcal infection (guttate), drugs (β-blockers, lithium, antimalarials, steroid withdrawal), trauma (Koebner), stress and alcohol.',
    'TREATMENT LADDER by severity: MILD/localised → topical CORTICOSTEROIDS + VITAMIN D analogues (calcipotriol), coal tar, salicylic acid; MODERATE-SEVERE/extensive → PHOTOTHERAPY (narrowband UVB), then SYSTEMICS (methotrexate, ciclosporin, acitretin, apremilast) and BIOLOGICS (anti-TNF, anti-IL-17, anti-IL-23). Erythrodermic/generalised pustular psoriasis needs urgent systemic therapy and supportive care.',
    '**The take-home: plaque psoriasis (extensor silvery plaques, Auspitz/Koebner, nail changes; Th17/turnover) with variants — GUTTATE (post-strep), pustular, ERYTHRODERMIC (emergency); screen for PSORIATIC ARTHRITIS + cardiometabolic comorbidity; ladder = topical steroid+vitamin D → phototherapy → systemics/biologics.** The papulosquamous overview is [[papulosquamous-diseases]]; the therapy principles are [[dermatologic-therapy]] and [[systemic-dermatologic-therapy]].',
  ],

  mechanism: {
    title: 'Plaque psoriasis (Th17/turnover, extensor silvery, nail/arthritis) + variants (guttate/pustular/erythrodermic); ladder topical→phototherapy→systemic/biologic',
    steps: [
      { id: 's1', label: 'Plaque psoriasis: extensor silvery plaques, Auspitz/Koebner, nail pitting/onycholysis', emphasis: 'key' },
      { id: 's2', label: 'Variants: guttate (post-strep), flexural, pustular, erythrodermic (emergency)', emphasis: 'danger' },
      { id: 's3', label: 'Systemic disease: psoriatic arthritis (~30%), cardiometabolic, IBD, depression', emphasis: 'key' },
      { id: 's4', label: 'Triggers: strep (guttate), drugs (β-blocker/lithium/steroid withdrawal), Koebner, stress', emphasis: 'key' },
      { id: 's5', label: 'Ladder: topical steroid+vitamin D → phototherapy → methotrexate/ciclosporin/biologics', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Silvery-scaled extensor plaques with pinpoint bleeding on scale removal', mechanism: 'Plaque psoriasis (Auspitz sign)', significance: 'key' },
    { sign: 'Small drop-like papules after a sore throat in a young person', mechanism: 'Guttate psoriasis (post-streptococcal)', significance: 'key' },
    { sign: '>90% body-surface erythema with systemic upset', mechanism: 'Erythrodermic psoriasis (emergency)', significance: 'key' },
    { sign: 'Nail pitting, onycholysis and joint pain', mechanism: 'Psoriasis with psoriatic arthritis', significance: 'key' },
    { sign: 'Flare after starting a β-blocker or stopping systemic steroids', mechanism: 'Drug-triggered psoriasis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The variant that is post-streptococcal', meaning: 'Guttate psoriasis' },
    { clue: 'The psoriasis emergency', meaning: 'Erythrodermic (and generalised pustular) psoriasis' },
    { clue: 'The systemic association to screen for', meaning: 'Psoriatic arthritis (and cardiometabolic disease)' },
    { clue: 'First-line topical therapy for mild plaque psoriasis', meaning: 'Topical corticosteroid + vitamin D analogue' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Psoriasis is a systemic disease needing severity-based management and comorbidity screening: topical steroid + vitamin D analogue for mild disease, phototherapy then systemics/biologics for moderate-severe, and urgent systemic therapy for erythrodermic/generalised pustular psoriasis. Screening for psoriatic arthritis (to prevent joint destruction) and cardiometabolic risk is essential. The papulosquamous overview is [[papulosquamous-diseases]]; therapy detail in [[dermatologic-therapy]] and [[systemic-dermatologic-therapy]].' },
  ],

  mnemonics: [
    { hook: 'Variants: "Plaque, Guttate (post-strep), Flexural, Pustular, Erythrodermic (emergency)"', expansion: ['Auspitz/Koebner/nails', 'Screen psoriatic arthritis'] },
    { hook: 'Ladder: "topical steroid + vitamin D → phototherapy → systemic/biologic"', expansion: ['Triggers: strep, β-blocker, lithium, steroid withdrawal', 'Th17/IL-23'] },
  ],

  traps: [
    {
      questionCategory: 'Psoriasis as systemic disease',
      wrongInstinct: 'Psoriasis is purely a skin problem treatable with creams',
      rightAnswer: 'Psoriasis is a SYSTEMIC inflammatory disease: up to ~30% develop PSORIATIC ARTHRITIS (potentially destructive — screen for joint symptoms), and it carries increased cardiometabolic and psychological morbidity — so management includes comorbidity screening and, for moderate-severe disease, systemic/biologic therapy, not just topical creams',
      why: 'Treating psoriasis as skin-only misses joint destruction and cardiovascular risk; recognising it as systemic changes screening and escalates therapy appropriately.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A young patient develops crops of small, drop-like scaly papules over the trunk about two weeks after a sore throat. This is:',
      options: [
        { id: 'a', text: 'Erythrodermic psoriasis' },
        { id: 'b', text: 'Guttate psoriasis (often post-streptococcal)' },
        { id: 'c', text: 'Pustular psoriasis' },
        { id: 'd', text: 'Flexural psoriasis' },
      ],
      answerId: 'b',
      explanation: 'Guttate psoriasis presents as small "drop-like" papules, classically after a streptococcal throat infection in a young person. It may resolve or evolve into chronic plaque psoriasis, and treatment includes topical therapy/phototherapy.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which systemic complication should be actively screened for in patients with psoriasis?',
      options: [
        { id: 'a', text: 'Psoriatic arthritis' },
        { id: 'b', text: 'Peptic ulcer disease' },
        { id: 'c', text: 'Cataracts' },
        { id: 'd', text: 'Gallstones' },
      ],
      answerId: 'a',
      explanation: 'Up to about 30% of psoriasis patients develop psoriatic arthritis, which can be destructive if untreated, so joint symptoms should be screened for. Psoriasis is also associated with metabolic syndrome and cardiovascular disease, warranting cardiometabolic risk assessment.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default psoriasisClinicalManagement;
