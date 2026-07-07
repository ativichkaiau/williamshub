import type { Lecture } from '../../lib/types';

export const hairDiseases: Lecture = {
  id: 'hair-diseases',
  title: 'Diseases of Hair',
  system: 'derm',
  source: 'L14 — Hair Diseases',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L14 Hair Diseases' },
    { kind: 'mechanism', label: 'Scarring vs non-scarring alopecia' },
    { kind: 'exam', label: 'Alopecia areata, androgenetic, telogen effluvium' },
  ],

  highYield: [
    'The hair cycle has ANAGEN (growth, ~years), CATAGEN (brief regression) and TELOGEN (rest/shedding); most scalp hairs are in anagen. The critical clinical division of ALOPECIA is NON-SCARRING (follicle preserved → potentially reversible) vs SCARRING/cicatricial (follicle destroyed → PERMANENT loss with loss of follicular openings). Recognising scarring early is vital because regrowth is impossible once follicles are gone.',
    'Common NON-SCARRING alopecias: ANDROGENETIC alopecia (male/female pattern — DHT-mediated follicular miniaturisation; bitemporal/vertex in men, crown widening with preserved frontal line in women; treat with minoxidil, finasteride); ALOPECIA AREATA (autoimmune, T-cell attack on the bulb → smooth round bald patches with "EXCLAMATION-MARK" hairs, may progress to totalis/universalis, associated with other autoimmune disease); TELOGEN EFFLUVIUM (diffuse shedding 2–3 months after a stressor — illness, childbirth, weight loss — self-recovering).',
    'TRACTION alopecia (tight hairstyles — reversible early, scarring if chronic) and TINEA CAPITIS (scaly patch with broken hairs + scale in children — needs ORAL antifungal) are important non-scarring/infectious causes. TRICHOTILLOMANIA is hair-pulling (irregular patches with broken hairs of varying length).',
    'SCARRING (cicatricial) alopecias — smooth patches with LOSS of follicular openings — include discoid lupus erythematosus, lichen planopilaris, and folliculitis decalvans; these need biopsy and prompt anti-inflammatory treatment to preserve remaining follicles. HIRSUTISM (excess terminal hair in a male pattern in women — e.g. PCOS, androgens) and hypertrichosis are the opposite (excess hair) problems.',
    '**The take-home: classify alopecia as NON-SCARRING (reversible — androgenetic/DHT [minoxidil, finasteride], alopecia areata [autoimmune, exclamation-mark hairs], telogen effluvium [diffuse post-stress shedding]) vs SCARRING (permanent — discoid lupus, lichen planopilaris; loss of follicular openings → biopsy + treat early). Tinea capitis needs oral antifungal.** The pilosebaceous unit is from [[skin-anatomy-histology]]; discoid lupus overlaps [[cutaneous-connective-tissue-diseases]]; tinea in [[skin-infections-bacterial-fungal-viral]].',
  ],

  mechanism: {
    title: 'Non-scarring (reversible: androgenetic/DHT, alopecia areata, telogen effluvium) vs scarring (permanent: lose follicular openings)',
    steps: [
      { id: 's1', label: 'Hair cycle: anagen (growth) → catagen → telogen (shed); classify alopecia by scarring or not', emphasis: 'key' },
      { id: 's2', label: 'Androgenetic: DHT miniaturisation (pattern loss); minoxidil, finasteride', emphasis: 'key' },
      { id: 's3', label: 'Alopecia areata: autoimmune bulb attack → round patches + exclamation-mark hairs', emphasis: 'key' },
      { id: 's4', label: 'Telogen effluvium: diffuse shedding 2–3 months after a stressor (reversible)', emphasis: 'key' },
      { id: 's5', label: 'Scarring (discoid lupus, lichen planopilaris) = lost follicular openings, PERMANENT → biopsy/treat early', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Bitemporal recession and vertex thinning in a man', mechanism: 'Androgenetic alopecia (DHT miniaturisation)', significance: 'key' },
    { sign: 'Smooth round bald patch with exclamation-mark hairs', mechanism: 'Alopecia areata (autoimmune)', significance: 'key' },
    { sign: 'Diffuse hair shedding 2–3 months after childbirth/illness', mechanism: 'Telogen effluvium (reversible)', significance: 'key' },
    { sign: 'Smooth scarred patch with loss of follicular openings', mechanism: 'Cicatricial (scarring) alopecia — permanent', significance: 'key' },
    { sign: 'Scaly scalp patch with broken hairs in a child', mechanism: 'Tinea capitis (oral antifungal)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The reversible category of hair loss (follicle preserved)', meaning: 'Non-scarring alopecia' },
    { clue: 'The hormone driving pattern (androgenetic) hair loss', meaning: 'Dihydrotestosterone (DHT)' },
    { clue: 'The autoimmune alopecia with exclamation-mark hairs', meaning: 'Alopecia areata' },
    { clue: 'The finding that marks scarring (permanent) alopecia', meaning: 'Loss of follicular openings' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The scarring/non-scarring split drives urgency: scarring alopecias destroy follicles permanently, so early biopsy and anti-inflammatory treatment preserve remaining hair, whereas non-scarring types (androgenetic → minoxidil/finasteride, alopecia areata, telogen effluvium) are potentially reversible. Tinea capitis needs oral antifungal ([[skin-infections-bacterial-fungal-viral]]); discoid lupus is a scarring cause overlapping [[cutaneous-connective-tissue-diseases]]; the follicle biology is in [[skin-anatomy-histology]].' },
  ],

  mnemonics: [
    { hook: '"Scarring = lose follicular openings = permanent (biopsy early); Non-scarring = openings preserved = reversible"', expansion: ['Androgenetic = DHT', 'Alopecia areata = exclamation-mark hairs'] },
    { hook: '"Telogen Effluvium = shedding 2–3 months after a Trigger"', expansion: ['Minoxidil + finasteride for androgenetic', 'Tinea capitis = oral antifungal'] },
  ],

  traps: [
    {
      questionCategory: 'Scarring vs non-scarring alopecia',
      wrongInstinct: 'All hair loss can eventually regrow with the right treatment',
      rightAnswer: 'SCARRING (cicatricial) alopecias DESTROY the follicle — shown by LOSS of follicular openings — so hair CANNOT regrow there; the goal is early biopsy and anti-inflammatory treatment to save the REMAINING follicles. Only NON-scarring alopecias (androgenetic, alopecia areata, telogen effluvium) preserve the follicle and can regrow',
      why: 'Because scarring alopecia causes irreversible follicle loss, recognising it early (loss of follicular openings) is time-critical to preserve unaffected hair — treating it like reversible hair loss wastes the window.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A smooth, round patch of complete hair loss with short "exclamation-mark" hairs at the margin, in an otherwise healthy scalp, is characteristic of:',
      options: [
        { id: 'a', text: 'Androgenetic alopecia' },
        { id: 'b', text: 'Alopecia areata' },
        { id: 'c', text: 'Discoid lupus (scarring)' },
        { id: 'd', text: 'Telogen effluvium' },
      ],
      answerId: 'b',
      explanation: 'Alopecia areata is an autoimmune, non-scarring alopecia causing smooth round patches of hair loss with pathognomonic exclamation-mark hairs; the follicles are preserved, so regrowth is possible. It may be associated with other autoimmune conditions.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The key feature distinguishing a scarring (cicatricial) alopecia from a non-scarring one on examination is:',
      options: [
        { id: 'a', text: 'The presence of itching' },
        { id: 'b', text: 'Loss of follicular openings (indicating permanent follicle destruction)' },
        { id: 'c', text: 'Diffuse rather than patchy loss' },
        { id: 'd', text: 'A positive family history' },
      ],
      answerId: 'b',
      explanation: 'Scarring alopecias destroy the hair follicle, so the scalp shows loss of follicular openings and permanent hair loss; non-scarring alopecias preserve the follicular openings and can regrow. Recognising loss of openings prompts biopsy and prompt treatment to save remaining follicles.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default hairDiseases;
