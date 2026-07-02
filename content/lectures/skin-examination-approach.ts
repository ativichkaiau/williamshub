import type { Lecture } from '../../lib/types';

export const skinExaminationApproach: Lecture = {
  id: 'skin-examination-approach',
  title: 'Approach to the Dermatological Examination',
  system: 'derm',
  source: 'L1 — Dermatologic Diagnosis',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L1 Skin Examination' },
    { kind: 'mechanism', label: 'Systematic inspection' },
    { kind: 'exam', label: 'Distribution & special sites' },
  ],

  highYield: [
    '**A systematic dermatological examination inspects the WHOLE skin surface in good light — not just the lesion the patient points to — plus the "special sites": SCALP/hair, NAILS, MUCOSAE (mouth, genitals, conjunctivae) and PALMS/SOLES, which harbour diagnostic clues (e.g. nail pitting in psoriasis, oral erosions in pemphigus/lichen planus).**',
    '**Describe each eruption by MORPHOLOGY (primary/secondary lesion), then CONFIGURATION (annular, linear, grouped, target) and DISTRIBUTION — the pattern across the body is a powerful clue: FLEXURAL (atopic eczema), EXTENSOR (psoriasis), PHOTO-distributed (drug/lupus), DERMATOMAL (zoster), ACRAL (hand-foot-mouth), symmetrical (endogenous) vs asymmetrical (exogenous/infective).**',
    '**PALPATION adds information texture can\'t be seen — is a purpuric lesion PALPABLE (vasculitis) or flat (thrombocytopenic)? Is a lesion indurated, warm, tender, fixed? BLANCHING with pressure (diascopy) distinguishes erythema (blanches) from purpura (does not). Assess the lesion\'s surface (scale, crust), colour, and whether it is solitary or multiple.**',
    '**Always take a focused HISTORY (onset, evolution, itch/pain, triggers, drugs, systemic symptoms, occupation, travel, family/atopy) and examine for SYSTEMIC clues — many skin signs flag internal disease. Consider the patient\'s SKIN TYPE (Fitzpatrick) as erythema and pigmentation appear differently in darker skin.**',
    '**The take-home: examine ALL the skin + special sites (scalp, nails, mucosae, palms/soles) in good light; describe morphology + configuration + DISTRIBUTION (flexural eczema vs extensor psoriasis vs photo/dermatomal); palpate and use diascopy (erythema blanches, purpura does not); take a targeted history and look for systemic clues.** The lesion vocabulary is in [[dermatologic-diagnosis-morphology]]; investigations in [[dermatologic-investigations]]; systemic associations in [[skin-signs-systemic-disease]].',
  ],

  mechanism: {
    title: 'Examine all skin + special sites; morphology + configuration + distribution; palpate/diascopy; history + systemic clues',
    steps: [
      { id: 's1', label: 'Inspect the WHOLE skin in good light + special sites (scalp, nails, mucosae, palms/soles)', emphasis: 'key' },
      { id: 's2', label: 'Describe morphology → configuration → DISTRIBUTION (pattern = clue)', emphasis: 'key' },
      { id: 's3', label: 'Flexural (eczema) vs extensor (psoriasis) vs photo/dermatomal/acral', emphasis: 'key' },
      { id: 's4', label: 'Palpate; diascopy: erythema blanches, purpura does not; palpable purpura = vasculitis', emphasis: 'key' },
      { id: 's5', label: 'Targeted history (drugs, triggers, atopy, travel) + look for systemic disease' },
    ],
  },

  examFindings: [
    { sign: 'Nail pitting/onycholysis found on examining the nails', mechanism: 'Psoriasis clue (special-site examination)', significance: 'key' },
    { sign: 'Purpura that does not blanch on diascopy', mechanism: 'Extravasated blood (purpura) vs blanching erythema', significance: 'key' },
    { sign: 'Flexural distribution of an itchy dermatitis', mechanism: 'Atopic eczema pattern', significance: 'key' },
    { sign: 'Photo-distributed rash sparing shaded areas', mechanism: 'Drug photosensitivity or lupus', significance: 'supportive' },
    { sign: 'Oral mucosal erosions', mechanism: 'Pemphigus/lichen planus clue (examine mucosae)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The special sites always examined', meaning: 'Scalp/hair, nails, mucosae, palms/soles' },
    { clue: 'The three descriptors of an eruption', meaning: 'Morphology, configuration, distribution' },
    { clue: 'The test distinguishing erythema from purpura', meaning: 'Diascopy (erythema blanches, purpura does not)' },
    { clue: 'The distribution of psoriasis vs atopic eczema', meaning: 'Extensor (psoriasis) vs flexural (eczema)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'A structured, whole-skin examination (with special sites, palpation and diascopy) plus a targeted history is what converts a rash into a diagnosis and flags systemic disease — the foundation before any test. It applies the morphology vocabulary of [[dermatologic-diagnosis-morphology]], leads into the bedside tests of [[dermatologic-investigations]], and prompts the systemic associations of [[skin-signs-systemic-disease]].' },
  ],

  mnemonics: [
    { hook: 'Special sites: "Scalp, Nails, Mucosae, Palms/soles" — always check', expansion: ['Nail pitting = psoriasis', 'Oral erosions = pemphigus/LP'] },
    { hook: 'Diascopy: "erythema blanches; purpura stays" (+ palpable purpura = vasculitis)', expansion: ['Flexural = eczema', 'Extensor = psoriasis'] },
  ],

  traps: [
    {
      questionCategory: 'Examining beyond the presenting lesion',
      wrongInstinct: 'It is enough to examine only the lesion the patient is worried about',
      rightAnswer: 'A proper dermatological examination inspects the WHOLE skin surface and the SPECIAL SITES (scalp, nails, mucosae, palms/soles) — diagnostic clues (nail pitting, oral erosions, subtle distribution) are frequently found AWAY from the presenting lesion, and hidden lesions (e.g. a melanoma on the back) can be missed if only the complaint is examined',
      why: 'Limiting the exam to the presenting complaint misses distribution patterns and special-site signs that make the diagnosis, and risks overlooking dangerous incidental lesions.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'On examining a rash, applying pressure with a glass slide (diascopy) causes the redness to blanch. This indicates:',
      options: [
        { id: 'a', text: 'Purpura (extravasated blood)' },
        { id: 'b', text: 'Erythema (dilated blood vessels)' },
        { id: 'c', text: 'Hyperpigmentation' },
        { id: 'd', text: 'Scale' },
      ],
      answerId: 'b',
      explanation: 'Erythema is due to dilated dermal vessels and blanches on pressure (diascopy) as blood is pushed out; purpura is extravasated blood and does NOT blanch. Palpable non-blanching purpura specifically suggests vasculitis.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'An itchy dermatitis distributed in the antecubital and popliteal flexures is most consistent with:',
      options: [
        { id: 'a', text: 'Psoriasis' },
        { id: 'b', text: 'Atopic eczema' },
        { id: 'c', text: 'Herpes zoster' },
        { id: 'd', text: 'Tinea' },
      ],
      answerId: 'b',
      explanation: 'A flexural distribution (antecubital/popliteal fossae) is characteristic of atopic eczema, whereas psoriasis favours extensor surfaces. Recognising distribution patterns is a key part of the systematic dermatological examination.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default skinExaminationApproach;
