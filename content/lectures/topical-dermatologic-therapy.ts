import type { Lecture } from '../../lib/types';

export const topicalDermatologicTherapy: Lecture = {
  id: 'topical-dermatologic-therapy',
  title: 'Topical Dermatologic Therapy',
  system: 'derm',
  source: 'L19 — Dermatologic Therapy',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L19 Topical Therapy' },
    { kind: 'mechanism', label: 'Vehicle & steroid potency' },
    { kind: 'exam', label: 'Potency by site; side-effects' },
  ],

  highYield: [
    'Topical treatment = the ACTIVE drug + the VEHICLE, and the vehicle matters as much as the drug. Rule: "if it\'s WET, dry it (creams/lotions); if it\'s DRY, wet it (ointments)." OINTMENTS are greasy, occlusive and most potent/hydrating (dry, lichenified, chronic lesions); CREAMS suit weepy/flexural areas; LOTIONS/GELS/SOLUTIONS suit hairy or acute weepy areas. Occlusion increases absorption/potency.',
    'TOPICAL CORTICOSTEROIDS are graded MILD → very potent; match potency to SITE and severity. Use MILD steroids (hydrocortisone) on the FACE, flexures, genitals and in CHILDREN (thin, highly absorptive skin); use POTENT steroids on THICK skin (palms/soles) and resistant plaques. Absorption is highest where skin is thin and under occlusion, increasing side-effect risk.',
    'Topical steroid SIDE-EFFECTS (from prolonged/potent use on thin skin): ATROPHY, striae, telangiectasia, easy bruising, perioral dermatitis/steroid rosacea, hypopigmentation, tachyphylaxis, and — over large areas — systemic absorption/HPA suppression. Use the lowest effective potency for the shortest time; the "fingertip unit" guides quantity. Steroid-sparing options: topical CALCINEURIN inhibitors (face/flexures) and vitamin D analogues (psoriasis).',
    'Other topicals by indication: RETINOIDS (acne/photoaging), calcipotriol (psoriasis), keratolytics (salicylic acid), antimicrobials (mupirocin, azoles), benzoyl peroxide (acne), and antipruritics. Choosing vehicle + potency + active agent to the site and disease maximises effect and minimises harm.',
    '**The take-home: choose the VEHICLE ("wet→dry, dry→wet"; ointments most potent/occlusive) AND the steroid POTENCY by SITE (mild on face/flexures/children; potent on thick skin) — watch atrophy/striae/HPA suppression with overuse; use steroid-sparing agents (calcineurin inhibitors, vitamin D analogues) where appropriate.** Systemic/phototherapy options are in [[systemic-dermatologic-therapy]]; the overview is [[dermatologic-therapy]].',
  ],

  mechanism: {
    title: 'Vehicle (wet→dry/dry→wet; ointment most potent) + steroid potency by site (mild face/flexures/children, potent thick skin); watch atrophy; steroid-sparing agents',
    steps: [
      { id: 's1', label: 'Vehicle: "wet → dry (cream/lotion); dry → wet (ointment, most occlusive/potent)"', emphasis: 'key' },
      { id: 's2', label: 'Topical steroid potency graded mild → very potent', emphasis: 'key' },
      { id: 's3', label: 'Match potency to site: MILD on face/flexures/genitals/children; POTENT on thick skin', emphasis: 'key' },
      { id: 's4', label: 'Overuse → atrophy, striae, telangiectasia, perioral dermatitis, HPA suppression', emphasis: 'danger' },
      { id: 's5', label: 'Steroid-sparing: calcineurin inhibitors (face/flexures), vitamin D analogues (psoriasis)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Skin thinning, striae and telangiectasia after prolonged potent steroid use', mechanism: 'Topical corticosteroid atrophy', significance: 'key' },
    { sign: 'A greasy ointment chosen for a dry, lichenified plaque', mechanism: 'Vehicle selection ("dry → wet"; occlusion ↑ potency)', significance: 'key' },
    { sign: 'Mild hydrocortisone used on facial dermatitis rather than a potent steroid', mechanism: 'Thin facial skin → high absorption → lower potency', significance: 'key' },
    { sign: 'A calcineurin inhibitor used on the face to spare steroids', mechanism: 'Steroid-sparing topical (tacrolimus/pimecrolimus)', significance: 'supportive' },
    { sign: 'Perioral dermatitis after facial potent steroid use', mechanism: 'Topical steroid side-effect', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The most occlusive, potent vehicle for dry skin', meaning: 'Ointment' },
    { clue: 'The steroid potency for the face/flexures/children', meaning: 'Mild (e.g. hydrocortisone)' },
    { clue: 'The main local side-effect of prolonged potent steroids', meaning: 'Skin atrophy (± striae, telangiectasia)' },
    { clue: 'Steroid-sparing topical options', meaning: 'Calcineurin inhibitors and vitamin D analogues' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Rational topical prescribing means choosing the right vehicle (wet→dry, dry→wet) and steroid potency for the site (mild on thin face/flexural skin, potent on thick skin) to maximise effect while avoiding atrophy and systemic absorption, and using steroid-sparing agents (calcineurin inhibitors, vitamin D analogues) where appropriate. It underlies eczema and psoriasis care; systemic/phototherapy escalation is in [[systemic-dermatologic-therapy]] within the overview [[dermatologic-therapy]].' },
  ],

  mnemonics: [
    { hook: 'Vehicle: "Wet → dry (cream/lotion); Dry → wet (ointment = most potent)"', expansion: ['Occlusion ↑ potency', 'Fingertip unit = quantity'] },
    { hook: 'Steroid potency: "Mild on Face/flexures/kids; Potent on thick skin"', expansion: ['Overuse → atrophy/striae', 'Calcineurin inhibitors spare steroids'] },
  ],

  traps: [
    {
      questionCategory: 'Matching steroid potency to site',
      wrongInstinct: 'A potent topical steroid is fine anywhere, including the face, if it clears the rash',
      rightAnswer: 'Steroid potency must be MATCHED to the SITE: the FACE, flexures and genitals have THIN, highly absorptive skin, so only MILD steroids should be used there (potent ones cause atrophy, striae, telangiectasia, perioral dermatitis, and possible systemic absorption), whereas thick skin (palms/soles) tolerates and needs POTENT steroids',
      why: 'Because absorption and atrophy risk depend on skin thickness, using a potent steroid on the face/flexures causes disfiguring local side-effects and possible HPA suppression — site-appropriate potency is essential.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which topical corticosteroid potency is most appropriate for an inflammatory rash on the face?',
      options: [
        { id: 'a', text: 'Very potent' },
        { id: 'b', text: 'Mild (e.g. hydrocortisone)' },
        { id: 'c', text: 'Potent' },
        { id: 'd', text: 'Potency does not matter' },
      ],
      answerId: 'b',
      explanation: 'Facial skin is thin and highly absorptive, so only mild topical steroids should be used there to avoid atrophy, striae, telangiectasia, perioral dermatitis and systemic absorption. Potent steroids are reserved for thick skin (e.g. palms/soles) or resistant plaques, for the shortest effective time.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'For a dry, thickened (lichenified) chronic plaque, the most suitable and potent topical vehicle is generally a(n):',
      options: [
        { id: 'a', text: 'Lotion' },
        { id: 'b', text: 'Ointment' },
        { id: 'c', text: 'Solution' },
        { id: 'd', text: 'Gel' },
      ],
      answerId: 'b',
      explanation: 'Following "if it\'s dry, wet it", greasy occlusive ointments are the most hydrating and potent vehicle for dry, lichenified lesions, increasing drug penetration. Lotions, gels and solutions suit weepy or hairy areas ("if it\'s wet, dry it").',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default topicalDermatologicTherapy;
