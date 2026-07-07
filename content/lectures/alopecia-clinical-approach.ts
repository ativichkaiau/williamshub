import type { Lecture } from '../../lib/types';

export const alopeciaClinicalApproach: Lecture = {
  id: 'alopecia-clinical-approach',
  title: 'Clinical Approach to Alopecia',
  system: 'derm',
  source: 'L14 — Hair Diseases',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L14 Alopecia Approach' },
    { kind: 'mechanism', label: 'Scarring vs non-scarring; pattern' },
    { kind: 'exam', label: 'Diffuse vs patchy; hair-pull test' },
  ],

  highYield: [
    'The first, most important question in hair loss is: is it SCARRING (cicatricial) or NON-SCARRING? SCARRING alopecia shows LOSS of follicular openings and is PERMANENT (discoid lupus, lichen planopilaris, folliculitis decalvans) → needs prompt biopsy and anti-inflammatory treatment to save remaining follicles. NON-SCARRING alopecia preserves follicular openings and is potentially REVERSIBLE.',
    'Then characterise the PATTERN — DIFFUSE vs PATCHY/localised. DIFFUSE non-scarring: ANDROGENETIC alopecia (patterned miniaturisation — bitemporal/vertex in men, crown widening in women; DHT-driven; minoxidil ± finasteride) and TELOGEN EFFLUVIUM (diffuse shedding 2–3 months after a stressor — illness, childbirth, weight loss, drugs; reversible; positive hair-pull test).',
    'PATCHY non-scarring: ALOPECIA AREATA (autoimmune — smooth round bald patches with EXCLAMATION-MARK hairs; may progress to totalis/universalis; other autoimmune associations), TINEA CAPITIS (scaly patch with broken hairs + scale in children — needs ORAL antifungal + KOH/culture), TRACTION alopecia (tight styling — reversible early, scarring if chronic) and TRICHOTILLOMANIA (pulling — irregular, broken hairs of varying length).',
    'USEFUL BEDSIDE tests: examine for follicular openings (scarring?), a HAIR-PULL test (positive in telogen effluvium/active alopecia areata), dermoscopy (exclamation-mark hairs, yellow dots), and KOH/culture (tinea). Biopsy scarring alopecias early. History covers timing, stressors, drugs, styling, family history and systemic/autoimmune symptoms.',
    '**The take-home: classify alopecia as SCARRING (lost follicular openings → permanent → biopsy/treat early) vs NON-SCARRING (reversible); then pattern — DIFFUSE (androgenetic [DHT; minoxidil/finasteride], telogen effluvium [post-stressor]) vs PATCHY (alopecia areata [autoimmune, exclamation-mark hairs], tinea capitis [oral antifungal], traction, trichotillomania).** The hair-cycle/overview is [[hair-diseases]]; discoid lupus (scarring) links to [[cutaneous-lupus-dermatomyositis]].',
  ],

  mechanism: {
    title: 'Scarring (lost openings, permanent, biopsy) vs non-scarring (reversible); diffuse (androgenetic/telogen) vs patchy (alopecia areata/tinea/traction)',
    steps: [
      { id: 's1', label: 'First: scarring (lost follicular openings, permanent) vs non-scarring (reversible)', emphasis: 'key' },
      { id: 's2', label: 'Diffuse non-scarring: androgenetic (DHT; minoxidil/finasteride), telogen effluvium (post-stressor)', emphasis: 'key' },
      { id: 's3', label: 'Patchy non-scarring: alopecia areata (exclamation-mark hairs), tinea capitis (oral antifungal), traction, trichotillomania', emphasis: 'key' },
      { id: 's4', label: 'Bedside: follicular openings, hair-pull test, dermoscopy, KOH/culture', emphasis: 'key' },
      { id: 's5', label: 'Biopsy scarring alopecia EARLY to preserve remaining follicles', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Smooth scarred patch with loss of follicular openings', mechanism: 'Cicatricial (scarring) alopecia — permanent, biopsy', significance: 'key' },
    { sign: 'Diffuse shedding 2–3 months after childbirth/illness, positive hair-pull', mechanism: 'Telogen effluvium (reversible)', significance: 'key' },
    { sign: 'Bitemporal recession and vertex thinning in a man', mechanism: 'Androgenetic alopecia (DHT)', significance: 'key' },
    { sign: 'Round bald patch with exclamation-mark hairs', mechanism: 'Alopecia areata (autoimmune)', significance: 'key' },
    { sign: 'Scaly patch with broken hairs in a child', mechanism: 'Tinea capitis (oral antifungal)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The first classification in evaluating alopecia', meaning: 'Scarring vs non-scarring' },
    { clue: 'The reversible diffuse alopecia after a stressor', meaning: 'Telogen effluvium (positive hair-pull test)' },
    { clue: 'The autoimmune patchy alopecia sign', meaning: 'Exclamation-mark hairs (alopecia areata)' },
    { clue: 'The childhood patchy alopecia needing oral therapy', meaning: 'Tinea capitis' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'A structured approach (scarring vs non-scarring, then diffuse vs patchy) directs urgency and treatment: scarring alopecia needs early biopsy and anti-inflammatory therapy to preserve follicles, telogen effluvium reassurance/treat the trigger, androgenetic alopecia minoxidil/finasteride, alopecia areata immunomodulation, and tinea capitis oral antifungal. The hair-cycle biology/overview is [[hair-diseases]]; discoid lupus (a scarring cause) is in [[cutaneous-lupus-dermatomyositis]].' },
  ],

  mnemonics: [
    { hook: 'Step 1 "scarring or not?"; step 2 "diffuse or patchy?"', expansion: ['Scarring = lost openings (biopsy)', 'Diffuse = androgenetic/telogen'] },
    { hook: 'Patchy: "areata (exclamation hairs), tinea (kids, oral), traction, trichotillomania"', expansion: ['Hair-pull test', 'Tinea → KOH/culture'] },
  ],

  traps: [
    {
      questionCategory: 'Telogen effluvium timing',
      wrongInstinct: 'Diffuse hair shedding must be from something happening right now',
      rightAnswer: 'TELOGEN EFFLUVIUM is a DELAYED diffuse shedding that typically occurs 2–3 MONTHS AFTER a triggering stressor (severe illness, childbirth, surgery, rapid weight loss, certain drugs) — because the trigger pushed hairs into telogen (rest) which then shed months later — so the cause must be sought in the RECENT PAST, not only the present; it is reversible',
      why: 'The 2–3 month lag means the causative stressor is historical; looking only at current events misses the trigger, and understanding the delay reassures patients that regrowth follows.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The single most important initial distinction when assessing hair loss is whether it is:',
      options: [
        { id: 'a', text: 'Male or female' },
        { id: 'b', text: 'Scarring (cicatricial) or non-scarring' },
        { id: 'c', text: 'Itchy or not' },
        { id: 'd', text: 'Recent or long-standing only' },
      ],
      answerId: 'b',
      explanation: 'Scarring alopecia destroys follicles permanently (loss of follicular openings) and needs prompt biopsy/treatment to save remaining hair, whereas non-scarring alopecia is potentially reversible. This distinction drives urgency and management, before considering pattern.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Diffuse hair shedding beginning about 2–3 months after childbirth, with a positive hair-pull test and full recovery expected, is:',
      options: [
        { id: 'a', text: 'Androgenetic alopecia' },
        { id: 'b', text: 'Telogen effluvium' },
        { id: 'c', text: 'Alopecia areata' },
        { id: 'd', text: 'Scarring alopecia' },
      ],
      answerId: 'b',
      explanation: 'Telogen effluvium is a reversible, diffuse shedding occurring 2–3 months after a stressor (e.g. childbirth, illness, weight loss), as hairs pushed into telogen are shed. The hair-pull test is positive, and regrowth follows once the trigger resolves.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default alopeciaClinicalApproach;
