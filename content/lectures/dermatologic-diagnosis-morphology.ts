import type { Lecture } from '../../lib/types';

export const dermatologicDiagnosisMorphology: Lecture = {
  id: 'dermatologic-diagnosis-morphology',
  title: 'Dermatologic Diagnosis & Lesion Morphology',
  system: 'derm',
  source: 'L1 — Dermatologic Diagnosis',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L1 Derm Diagnosis' },
    { kind: 'mechanism', label: 'Primary vs secondary lesions' },
    { kind: 'exam', label: 'Describe: morphology, configuration, distribution' },
  ],

  highYield: [
    '**Dermatologic diagnosis starts with DESCRIBING the lesion by a fixed vocabulary: PRIMARY lesions (the initial change) vs SECONDARY changes (evolution/scratching), plus SHAPE/CONFIGURATION, and DISTRIBUTION. Getting the description right narrows the differential before any test.**',
    '**PRIMARY lesions by size and content: MACULE (flat, <1 cm, colour change) vs PATCH (flat, >1 cm); PAPULE (raised, <1 cm) vs PLAQUE (raised, flat-topped, >1 cm); NODULE (deeper, >1 cm); VESICLE (fluid, <1 cm) vs BULLA (fluid, >1 cm); PUSTULE (pus); WHEAL (transient oedematous papule/plaque — urticaria).**',
    '**SECONDARY changes: SCALE (excess stratum corneum), CRUST (dried exudate), EROSION (loss of epidermis — heals without scar) vs ULCER (loss into dermis — scars), EXCORIATION (scratch), LICHENIFICATION (thickened skin with accentuated markings from rubbing), ATROPHY, and FISSURE. The primary-vs-secondary distinction and the erosion-vs-ulcer depth distinction are heavily tested.**',
    '**CONFIGURATION (annular/ring, linear, grouped/herpetiform, target, reticular) and DISTRIBUTION (flexural, extensor, photo-distributed, dermatomal, acral, symmetric) give strong clues — e.g. grouped vesicles on an erythematous base = herpes; dermatomal vesicles = zoster; photo-distributed = drug/lupus; extensor plaques with silver scale = psoriasis. Colour, border and palpation complete the description.**',
    '**The take-home: describe every rash as PRIMARY lesion (macule/papule/plaque/vesicle/bulla/pustule/wheal/nodule) + SECONDARY change (scale/crust/erosion/ulcer/lichenification) + configuration + distribution — this structured morphology drives the differential.** The tissue basis of these lesions is the skin anatomy of [[skin-anatomy-histology]]; specific patterns recur in [[papulosquamous-diseases]] and [[vesiculobullous-diseases]].',
  ],

  mechanism: {
    title: 'Describe: primary lesion + secondary change + configuration + distribution → differential',
    steps: [
      { id: 's1', label: 'Primary lesion = the initial change; secondary = evolution/scratching', emphasis: 'key' },
      { id: 's2', label: 'Flat = macule (<1cm)/patch; raised = papule/plaque; fluid = vesicle/bulla; pus = pustule', emphasis: 'key' },
      { id: 's3', label: 'Secondary: scale, crust, erosion (no scar) vs ulcer (scars), lichenification', emphasis: 'key' },
      { id: 's4', label: 'Configuration (annular/linear/grouped/target) + distribution (flexural/extensor/photo/dermatomal)', emphasis: 'key' },
      { id: 's5', label: 'Pattern → differential (grouped vesicles=HSV; dermatomal=zoster; silver scale extensor=psoriasis)' },
    ],
  },

  examFindings: [
    { sign: 'Flat, non-palpable colour change <1 cm', mechanism: 'Macule (primary lesion)', significance: 'key' },
    { sign: 'Raised, flat-topped lesion >1 cm', mechanism: 'Plaque (e.g. psoriasis)', significance: 'key' },
    { sign: 'Loss of epidermis that heals without scarring', mechanism: 'Erosion (vs ulcer, which scars)', significance: 'key' },
    { sign: 'Thickened skin with exaggerated skin markings', mechanism: 'Lichenification (chronic rubbing)', significance: 'supportive' },
    { sign: 'Grouped vesicles on an erythematous base', mechanism: 'Herpetiform configuration (HSV)', significance: 'key' },
  ],

  investigations: [
    { clue: 'A flat lesion larger than 1 cm', meaning: 'A patch' },
    { clue: 'A fluid-filled lesion larger than 1 cm', meaning: 'A bulla' },
    { clue: 'The difference between erosion and ulcer', meaning: 'Erosion = epidermis only (no scar); ulcer = into dermis (scars)' },
    { clue: 'A transient oedematous papule/plaque of urticaria', meaning: 'A wheal' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'A precise morphologic description is the foundation of dermatologic diagnosis — the correct terms (primary vs secondary, erosion vs ulcer) plus configuration and distribution generate the differential before biopsy or culture. This vocabulary underlies every later topic; the lesions map onto the skin layers of [[skin-anatomy-histology]], and characteristic patterns define [[papulosquamous-diseases]], [[vesiculobullous-diseases]] and [[eczema-dermatitis]].' },
  ],

  mnemonics: [
    { hook: 'Size rule: "<1 cm small (macule/papule/vesicle), >1 cm big (patch/plaque/bulla)"', expansion: ['Flat=macule/patch', 'Raised=papule/plaque'] },
    { hook: '"Erosion Erases epidermis (no scar); Ulcer is Under into dermis (scars)"', expansion: ['Wheal = urticaria', 'Lichenification = chronic rubbing'] },
  ],

  traps: [
    {
      questionCategory: 'Erosion vs ulcer',
      wrongInstinct: 'Erosion and ulcer are interchangeable words for a break in the skin',
      rightAnswer: 'They differ by DEPTH: an EROSION is loss of the EPIDERMIS only and heals WITHOUT scarring, whereas an ULCER extends into the DERMIS (or deeper) and heals WITH a scar — the depth distinction changes the differential (e.g. ruptured vesicles erode; vasculitis/ischaemia ulcerate) and prognosis',
      why: 'Depth determines healing (scar vs none) and cause, so calling a scarring dermal ulcer an "erosion" misjudges both the underlying process and the expected outcome.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A raised, flat-topped skin lesion greater than 1 cm in diameter is best described as a:',
      options: [
        { id: 'a', text: 'Macule' },
        { id: 'b', text: 'Plaque' },
        { id: 'c', text: 'Vesicle' },
        { id: 'd', text: 'Nodule' },
      ],
      answerId: 'b',
      explanation: 'A plaque is a raised, flat-topped lesion larger than 1 cm (e.g. psoriasis). A macule is flat, a vesicle is fluid-filled and small, and a nodule is a deeper, larger solid lesion. Precise primary-lesion terminology is the basis of dermatologic description.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which secondary change heals without scarring because it involves loss of the epidermis only?',
      options: [
        { id: 'a', text: 'Ulcer' },
        { id: 'b', text: 'Erosion' },
        { id: 'c', text: 'Atrophy' },
        { id: 'd', text: 'Fissure' },
      ],
      answerId: 'b',
      explanation: 'An erosion is loss of the epidermis only and heals without a scar; an ulcer extends into the dermis and heals with scarring. This depth distinction is important for both differential diagnosis and prognosis.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default dermatologicDiagnosisMorphology;
