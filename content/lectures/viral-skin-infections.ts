import type { Lecture } from '../../lib/types';

export const viralSkinInfections: Lecture = {
  id: 'viral-skin-infections',
  title: 'Viral Skin Infections',
  system: 'derm',
  source: 'L7 — Skin Infections',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L7 Viral Skin' },
    { kind: 'mechanism', label: 'Herpes, HPV, poxvirus' },
    { kind: 'exam', label: 'HSV/VZV; warts; molluscum' },
  ],

  highYield: [
    '**HERPES SIMPLEX (HSV-1/2): recurrent GROUPED VESICLES on an erythematous base (orolabial "cold sores"/genital), latent in sensory ganglia and reactivated by stress/UV/immunosuppression; diagnosed clinically or by Tzanck/PCR; treated with aciclovir/valaciclovir. ECZEMA HERPETICUM = disseminated HSV over eczema (painful punched-out erosions + fever) — a DERMATOLOGICAL EMERGENCY needing systemic aciclovir.**',
    '**VARICELLA-ZOSTER (VZV): primary CHICKENPOX (generalised crops of "dew-drop" vesicles at different stages) → latent in dorsal root ganglia → ZOSTER (shingles: painful, DERMATOMAL vesicles, not crossing the midline; post-herpetic neuralgia; ophthalmic zoster threatens the eye). Early antivirals reduce severity/PHN; vaccine prevents zoster.**',
    '**HUMAN PAPILLOMAVIRUS (HPV): VERRUCAE (common/plantar/flat warts) and anogenital condylomata (types 6/11); high-risk types (16/18) cause dysplasia/cancer. Warts are often self-limiting; treatments include salicylic acid, cryotherapy, imiquimod. MOLLUSCUM CONTAGIOSUM (poxvirus): umbilicated pearly papules (children; extensive/persistent in HIV — a clue to immunosuppression).**',
    '**Other viral exanthems affect the skin (measles, rubella, parvovirus B19 "slapped cheek", hand-foot-and-mouth — coxsackie). Diagnosis is usually clinical (± Tzanck/PCR/serology); management is antiviral for HSV/VZV and largely supportive/destructive for warts/molluscum, with attention to immunosuppression (extensive molluscum/warts, severe zoster).**',
    '**The take-home: HSV (grouped vesicles, recurrent; eczema herpeticum = emergency; aciclovir), VZV (chickenpox → dermatomal zoster; early antivirals/vaccine), HPV (warts/condylomata; high-risk → cancer), MOLLUSCUM (umbilicated papules; extensive → suspect HIV). Antivirals for HSV/VZV; destructive/immune therapy for warts/molluscum.** The overview (with bacterial/fungal) is [[skin-infections-bacterial-fungal-viral]]; bacterial infections in [[bacterial-skin-infections]]; antiviral drugs are BCP ([[herpesvirus-cmv-antivirals]]).',
  ],

  mechanism: {
    title: 'HSV (grouped vesicles, eczema herpeticum emergency), VZV (chickenpox→dermatomal zoster), HPV (warts/cancer), molluscum (umbilicated; HIV clue)',
    steps: [
      { id: 's1', label: 'HSV: recurrent grouped vesicles; latent in ganglia; aciclovir', emphasis: 'key' },
      { id: 's2', label: 'Eczema herpeticum = disseminated HSV over eczema → emergency (systemic aciclovir)', emphasis: 'danger' },
      { id: 's3', label: 'VZV: chickenpox (dew-drop crops) → dermatomal zoster (PHN; ophthalmic threatens eye)', emphasis: 'key' },
      { id: 's4', label: 'HPV: warts/condylomata (6/11); high-risk 16/18 → dysplasia/cancer', emphasis: 'key' },
      { id: 's5', label: 'Molluscum (poxvirus) = umbilicated papules; extensive → suspect immunosuppression (HIV)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Recurrent grouped vesicles on the lip', mechanism: 'HSV reactivation (cold sore)', significance: 'key' },
    { sign: 'Painful punched-out erosions + fever over eczema', mechanism: 'Eczema herpeticum (disseminated HSV) — emergency', significance: 'key' },
    { sign: 'Painful dermatomal vesicles not crossing the midline', mechanism: 'Herpes zoster (VZV)', significance: 'key' },
    { sign: 'Umbilicated pearly papules, extensive in an HIV patient', mechanism: 'Molluscum contagiosum (immunosuppression clue)', significance: 'key' },
    { sign: 'Verrucous papules on hands/feet or anogenital condylomata', mechanism: 'HPV warts', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The virus causing recurrent grouped vesicles', meaning: 'Herpes simplex virus (HSV)' },
    { clue: 'The emergency of disseminated HSV over eczema', meaning: 'Eczema herpeticum (systemic aciclovir)' },
    { clue: 'The virus causing dermatomal shingles', meaning: 'Varicella-zoster virus (reactivation)' },
    { clue: 'The umbilicated-papule poxvirus infection', meaning: 'Molluscum contagiosum' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Viral skin infections range from self-limiting (warts, molluscum) to emergencies (eczema herpeticum, ophthalmic zoster). HSV/VZV are treated with aciclovir/valaciclovir (early for zoster to reduce post-herpetic neuralgia — [[herpesvirus-cmv-antivirals]]); warts/molluscum are treated destructively or with immune modifiers; and extensive molluscum/warts or severe zoster flag immunosuppression (HIV). The overview with bacterial/fungal is [[skin-infections-bacterial-fungal-viral]].' },
  ],

  mnemonics: [
    { hook: '"HSV = grouped vesicles (aciclovir); VZV = dermatomal zoster; molluscum = umbilicated"', expansion: ['Eczema herpeticum = emergency', 'HPV = warts/cancer'] },
    { hook: '"Extensive molluscum/warts or bad zoster → think HIV"', expansion: ['Ophthalmic zoster → eye risk', 'Early antivirals → ↓PHN'] },
  ],

  traps: [
    {
      questionCategory: 'Eczema herpeticum recognition',
      wrongInstinct: 'Rapidly worsening, painful eczema just needs stronger topical steroids',
      rightAnswer: 'Painful, monomorphic PUNCHED-OUT erosions/vesicles with fever over eczematous skin suggest ECZEMA HERPETICUM (disseminated herpes simplex) — a dermatological EMERGENCY needing systemic ACICLOVIR; escalating topical steroids alone can worsen it and allow HSV to disseminate',
      why: 'Missing eczema herpeticum and treating it as a steroid-responsive flare risks widespread HSV dissemination and serious complications; the painful punched-out lesions and systemic upset are the clues to give antivirals urgently.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A child with atopic eczema develops widespread painful, punched-out vesicles/erosions and fever. The most likely diagnosis is:',
      options: [
        { id: 'a', text: 'Impetigo' },
        { id: 'b', text: 'Eczema herpeticum (disseminated HSV) — needs systemic aciclovir' },
        { id: 'c', text: 'Molluscum contagiosum' },
        { id: 'd', text: 'Contact dermatitis' },
      ],
      answerId: 'b',
      explanation: 'Disseminated HSV over eczematous skin (eczema herpeticum) produces painful, monomorphic punched-out erosions with fever/malaise — a dermatological emergency requiring systemic aciclovir. It should not be mistaken for a simple eczema flare or impetigo.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Extensive or persistent molluscum contagiosum in an adult should prompt consideration of:',
      options: [
        { id: 'a', text: 'Underlying immunosuppression (e.g. HIV)' },
        { id: 'b', text: 'A fungal infection' },
        { id: 'c', text: 'A drug allergy' },
        { id: 'd', text: 'Vitamin deficiency' },
      ],
      answerId: 'a',
      explanation: 'Molluscum contagiosum (a poxvirus) causes umbilicated papules, usually self-limiting in children; extensive or persistent disease in an adult suggests immunosuppression such as HIV, warranting evaluation.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default viralSkinInfections;
