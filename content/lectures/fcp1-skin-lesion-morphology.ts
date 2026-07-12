import type { Lecture } from '../../lib/types';

export const fcp1SkinLesionMorphology: Lecture = {
  id: 'fcp1-skin-lesion-morphology',
  title: 'Describing Skin Lesions: Morphology',
  system: 'clinical',
  source: 'L31 — Skin Signs (Adult & Pediatric)',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L31 Skin Signs' },
    { kind: 'disease', label: 'Primary vs secondary lesions' },
    { kind: 'exam', label: 'Macule · papule · vesicle · plaque' },
    { kind: 'mechanism', label: 'Distribution & configuration' },
  ],

  highYield: [
    '**Primary lesions** arise de novo: **macule** (flat, under 1 cm) and **patch** (flat, over 1 cm); **papule** (raised, under 1 cm) and **plaque** (raised, flat-topped, over 1 cm); **nodule** (deeper, over 1 cm); **vesicle** (fluid, under 1 cm) and **bulla** (fluid, over 1 cm); **pustule** (pus); **wheal** (transient oedematous, urticaria).',
    '**Secondary lesions** evolve from primary ones or from scratching/healing: **scale, crust, erosion** (epidermal loss, heals without a scar), **ulcer** (into dermis, scars), excoriation, lichenification, fissure, atrophy and scar. Name the primary lesion first — it drives the differential.',
    '**Size and fluid define the term** — flat vs raised, and under vs over 1 cm (macule/patch, papule/plaque, vesicle/bulla). Getting these thresholds right is high-yield.',
    '**Distribution and configuration** narrow the cause: extensor vs flexural, photodistributed (sun-exposed), dermatomal (grouped vesicles = herpes zoster); configuration — annular (ring), grouped/herpetiform, linear (koebnerised) or target (erythema multiforme).',
    'This vocabulary lets you flag danger dermatoses and skin signs of systemic disease [[fcp1-skin-signs-systemic-disease]]. **Always test blanching:** a **non-blanching purpuric** lesion is blood in the skin, pointing to bleeding [[fcp1-bleeding-primary-vs-secondary]] and, with fever, meningococcaemia.',
  ],

  mechanism: {
    title: 'Describing a rash systematically',
    steps: [
      { id: 's1', label: 'Identify the primary lesion (flat/raised, fluid, size)', emphasis: 'key' },
      { id: 's2', label: 'Note secondary change (scale, crust, erosion, ulcer)', emphasis: 'key' },
      { id: 's3', label: 'Test blanching — non-blanching = purpura (danger)', emphasis: 'danger' },
      { id: 's4', label: 'Distribution (extensor/flexural/photo/dermatomal)', emphasis: 'normal' },
      { id: 's5', label: 'Configuration (annular, grouped, linear, target)', emphasis: 'normal' },
    ],
  },

  examFindings: [
    { sign: 'Non-blanching purpura that does not fade on pressure', mechanism: 'Blood in the skin, not vascular dilatation', significance: 'key' },
    { sign: 'Vesicles grouped within a single dermatome', mechanism: 'Herpes zoster reactivation', significance: 'key' },
    { sign: 'Silvery scale on erythematous plaques over extensor surfaces', mechanism: 'Psoriasis pattern', significance: 'supportive' },
    { sign: 'Transient wheals that appear and resolve within 24 hours', mechanism: 'Urticaria (dermal oedema)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Diascopy — lesion blanches on glass-slide pressure', meaning: 'Erythema (vasodilatation); if it does NOT blanch it is purpura (haemorrhage)' },
    { clue: 'Wheals that resolve within 24 hours and migrate', meaning: 'Urticaria (a fixed lesion should prompt biopsy for vasculitis)' },
    { clue: 'Positive Nikolsky sign (skin shears with lateral pressure)', meaning: 'Intraepidermal split (pemphigus, SJS/TEN)' },
    { clue: 'Skin scraping/KOH, swab or biopsy', meaning: 'Confirms an infective vs inflammatory cause' },
  ],

  treatment: [
    { logic: 'Describe precisely, then diagnose', detail: 'An accurate primary-lesion description (type, distribution, configuration) is what lets a clinician or teledermatology reach the diagnosis — do not jump to a label.' },
    { logic: 'Escalate danger patterns', detail: 'Non-blanching purpura with fever, mucosal involvement, skin pain or a positive Nikolsky sign → urgent referral (see [[fcp1-skin-signs-systemic-disease]]).' },
  ],

  mnemonics: [
    { hook: 'Flat, raised, fluid, pus', expansion: ['Flat = macule/patch', 'Raised = papule/plaque', 'Fluid = vesicle/bulla', 'Pus = pustule'] },
  ],

  traps: [
    {
      questionCategory: 'Purpura vs erythema',
      wrongInstinct: 'A red rash is just erythema or inflammation',
      rightAnswer: 'Always test blanching — a non-blanching red-purple lesion is purpura (bleeding into skin), a different and sometimes dangerous differential',
      why: 'Non-blanching purpura points to platelet/vessel disease or, with fever, meningococcaemia — not simple inflammation.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An examiner points to a 3 cm raised, flat-topped, well-demarcated scaly lesion over the elbow and asks for the primary-lesion term. The correct answer is:',
      options: [
        { id: 'a', text: 'Macule' },
        { id: 'b', text: 'Papule' },
        { id: 'c', text: 'Plaque' },
        { id: 'd', text: 'Wheal' },
      ],
      answerId: 'c',
      explanation: 'A raised, flat-topped lesion larger than 1 cm is a plaque; a papule would be under 1 cm and a macule would be flat.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A febrile child has scattered dark-red spots that do not fade when pressed with a glass slide. The best description and concern is:',
      options: [
        { id: 'a', text: 'Blanching macular erythema, likely a viral exanthem' },
        { id: 'b', text: 'Urticarial wheals' },
        { id: 'c', text: 'Non-blanching purpura — urgent concern for meningococcaemia' },
        { id: 'd', text: 'Vesicular rash of chickenpox' },
      ],
      answerId: 'c',
      explanation: 'Spots that do not blanch are purpura; in a febrile unwell child this raises meningococcaemia and demands immediate action.',
      tests: 'exam',
    },
  ],
};

export default fcp1SkinLesionMorphology;
