import type { Lecture } from '../../lib/types';

export const dermatologicTherapy: Lecture = {
  id: 'dermatologic-therapy',
  title: 'Dermatologic Therapy',
  system: 'derm',
  source: 'L19 — Dermatologic Therapy',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L19 Derm Therapy' },
    { kind: 'mechanism', label: 'Vehicles & topical steroid potency' },
    { kind: 'exam', label: 'Steroid potency by site; systemics' },
  ],

  highYield: [
    'Topical therapy has two parts: the ACTIVE drug and the VEHICLE, which matters as much as the drug. Rule of thumb: "if it\'s WET, dry it (use creams/lotions); if it\'s DRY, wet it (use ointments)." OINTMENTS (greasy, occlusive) are most potent/hydrating for dry, lichenified, chronic lesions; CREAMS suit weepy/flexural areas; LOTIONS/GELS/SOLUTIONS suit hairy or acute weepy areas. Occlusion increases potency and absorption.',
    'TOPICAL CORTICOSTEROIDS are graded by POTENCY (mild → moderate → potent → very potent). Match potency to SITE and SEVERITY: use MILD steroids (hydrocortisone) on the FACE, flexures and in children; POTENT steroids for thick skin (palms/soles) or resistant plaques. Absorption is highest where skin is thin (face, genitals, flexures) and under occlusion — so higher-potency steroids there risk side-effects.',
    'Topical corticosteroid SIDE-EFFECTS (mainly from prolonged/potent use on thin skin): skin ATROPHY, striae, telangiectasia, easy bruising, perioral dermatitis/steroid rosacea, hypopigmentation, and (rarely, over large areas) systemic absorption/HPA suppression. Use the lowest effective potency for the shortest time; the "fingertip unit" guides quantity. Steroid-sparing options include topical calcineurin inhibitors (face/flexures) and vitamin D analogues (psoriasis).',
    'Beyond topicals: PHOTOTHERAPY (narrowband UVB, PUVA) for psoriasis/eczema/vitiligo; SYSTEMIC agents for severe disease — methotrexate, ciclosporin, acitretin (retinoid), oral isotretinoin (acne — teratogen), and BIOLOGICS (anti-TNF, anti-IL-17/23, dupilumab) for psoriasis/atopic dermatitis. Other topicals: retinoids (acne/photoaging), antimicrobials, keratolytics (salicylic acid), calcipotriol, and antihistamines for itch.',
    '**The take-home: choose the VEHICLE ("wet→dry, dry→wet"; ointments most potent/occlusive) AND the topical steroid POTENCY by SITE (mild on face/flexures/children, potent on thick skin) — watch for atrophy/striae with overuse; escalate to phototherapy, systemics (methotrexate/ciclosporin/retinoids) and biologics for severe disease.** This ties together the treatment of eczema ([[eczema-dermatitis]]), psoriasis ([[papulosquamous-diseases]]), acne ([[acne-vulgaris]]) and autoimmune blistering ([[vesiculobullous-diseases]]); systemic immunomodulators are in BCP ([[immunomodulating-agents]]).',
  ],

  mechanism: {
    title: 'Vehicle (wet→dry/dry→wet; ointments most potent) + steroid potency by site (mild face/flexures, potent thick skin); escalate to systemics/biologics',
    steps: [
      { id: 's1', label: 'Vehicle matters: "wet → dry (cream/lotion); dry → wet (ointment, most occlusive/potent)"', emphasis: 'key' },
      { id: 's2', label: 'Topical steroid potency graded mild → very potent', emphasis: 'key' },
      { id: 's3', label: 'Match potency to site: MILD on face/flexures/children; POTENT on thick skin (palms/soles)', emphasis: 'key' },
      { id: 's4', label: 'Overuse → atrophy, striae, telangiectasia, perioral dermatitis, HPA suppression', emphasis: 'danger' },
      { id: 's5', label: 'Escalate: phototherapy → systemics (methotrexate/ciclosporin/retinoids) → biologics', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Skin thinning, striae and telangiectasia after prolonged potent steroid use', mechanism: 'Topical corticosteroid atrophy (side-effect)', significance: 'key' },
    { sign: 'Choice of a greasy ointment for a dry, lichenified plaque', mechanism: 'Vehicle selection ("dry → wet"; occlusion ↑ potency)', significance: 'key' },
    { sign: 'Use of mild hydrocortisone rather than a potent steroid on the face', mechanism: 'Thin facial skin → high absorption → lower potency', significance: 'key' },
    { sign: 'Narrowband UVB used for extensive psoriasis', mechanism: 'Phototherapy for moderate–severe disease', significance: 'supportive' },
    { sign: 'Biologic (anti-IL-17/dupilumab) for refractory psoriasis/eczema', mechanism: 'Systemic targeted therapy for severe disease', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The most occlusive, potent topical vehicle for dry skin', meaning: 'Ointment' },
    { clue: 'The steroid potency appropriate for the face and flexures', meaning: 'Mild (e.g. hydrocortisone)' },
    { clue: 'The main local side-effect of prolonged potent topical steroids', meaning: 'Skin atrophy (± striae, telangiectasia)' },
    { clue: 'The escalation options for severe skin disease', meaning: 'Phototherapy, systemic agents (methotrexate/ciclosporin/retinoids), biologics' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Rational dermatologic prescribing means choosing the right vehicle (wet→dry, dry→wet) and the right steroid potency for the site (mild on thin face/flexural skin, potent on thick skin) to maximise effect while avoiding atrophy and systemic absorption, then escalating to phototherapy, systemic immunomodulators and biologics for severe disease. It underlies the management of eczema ([[eczema-dermatitis]]), psoriasis ([[papulosquamous-diseases]]), acne ([[acne-vulgaris]]) and blistering disease ([[vesiculobullous-diseases]]); the systemic immunosuppressants are detailed in BCP ([[immunomodulating-agents]]).' },
  ],

  mnemonics: [
    { hook: 'Vehicle: "Wet → dry (cream/lotion); Dry → wet (ointment)"; ointment = most potent', expansion: ['Occlusion ↑ potency/absorption', 'Fingertip unit = quantity'] },
    { hook: 'Steroid potency by site: "Mild on Face/flexures/kids; Potent on thick skin"', expansion: ['Overuse → atrophy/striae', 'Steroid-sparing: calcineurin inhibitors'] },
  ],

  traps: [
    {
      questionCategory: 'Matching topical steroid potency to body site',
      wrongInstinct: 'A potent topical steroid is fine to use anywhere, including the face, as long as it clears the rash',
      rightAnswer: 'Steroid potency must be MATCHED to the SITE: skin is THIN and highly absorptive on the FACE, flexures and genitals, so only MILD steroids should be used there (potent ones cause atrophy, striae, telangiectasia, perioral dermatitis and even systemic absorption), whereas thick skin (palms/soles) tolerates and needs POTENT steroids',
      why: 'Because absorption and atrophy risk depend on skin thickness, using a potent steroid on the face or flexures causes disfiguring local side-effects and possible HPA suppression — site-appropriate potency is essential to safe topical steroid use.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which topical corticosteroid potency is most appropriate for treating an inflammatory rash on the face?',
      options: [
        { id: 'a', text: 'Very potent' },
        { id: 'b', text: 'Mild (e.g. hydrocortisone)' },
        { id: 'c', text: 'Potent' },
        { id: 'd', text: 'It does not matter which potency' },
      ],
      answerId: 'b',
      explanation: 'Facial skin is thin and highly absorptive, so only mild topical corticosteroids should be used there to avoid atrophy, striae, telangiectasia, perioral dermatitis and systemic absorption. Potent steroids are reserved for thick skin (e.g. palms/soles) or resistant plaques, for the shortest effective duration.',
      tests: 'treatment',
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
      explanation: 'Following the "if it\'s dry, wet it" principle, greasy occlusive ointments are the most hydrating and potent vehicle for dry, lichenified lesions, increasing drug penetration. Lotions, gels and solutions suit weepy or hairy areas ("if it\'s wet, dry it").',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default dermatologicTherapy;
