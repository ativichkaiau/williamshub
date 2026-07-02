import type { Lecture } from '../../lib/types';

export const acneVulgaris: Lecture = {
  id: 'acne-vulgaris',
  title: 'Acne Vulgaris',
  system: 'derm',
  source: 'L17 — Acne',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L17 Acne' },
    { kind: 'mechanism', label: 'Four pathogenic factors' },
    { kind: 'exam', label: 'Comedones; treatment ladder; isotretinoin' },
  ],

  highYield: [
    '**Acne is a disease of the PILOSEBACEOUS unit driven by FOUR interacting factors: (1) increased SEBUM production (androgen-driven — hence onset at puberty); (2) abnormal follicular KERATINISATION → plugging → COMEDONES; (3) colonisation by CUTIBACTERIUM (Propionibacterium) ACNES; and (4) INFLAMMATION. Lesions occur on sebaceous-rich sites (face, chest, back).**',
    '**Lesion types: NON-inflammatory COMEDONES — OPEN (blackheads, oxidised) and CLOSED (whiteheads) — and INFLAMMATORY lesions — papules, pustules, then NODULES and CYSTS (nodulocystic acne, which scars). Severity (mild comedonal → moderate papulopustular → severe nodulocystic) and scarring risk guide treatment intensity. Post-inflammatory hyperpigmentation is common, especially in darker skin.**',
    '**TREATMENT ladder matches severity and targets the four factors: TOPICAL RETINOIDS (adapalene/tretinoin — normalise keratinisation, comedolytic; first-line, also maintenance) ± BENZOYL PEROXIDE (antibacterial, no resistance) ± topical antibiotics (always WITH benzoyl peroxide to limit resistance); moderate → add ORAL ANTIBIOTICS (doxycycline) or, in women, hormonal therapy (combined OCP, spironolactone). SEVERE nodulocystic/scarring → ORAL ISOTRETINOIN.**',
    '**ISOTRETINOIN (oral retinoid) is highly effective for severe/scarring acne but is a potent TERATOGEN → mandatory contraception and pregnancy prevention programme; side-effects include dry skin/lips, deranged LFTs/lipids, and mood concerns. Avoid antibiotic MONOTHERAPY (resistance). Diet/hygiene are minor; squeezing worsens scarring. Manage early to prevent permanent scars and psychological impact.**',
    '**The take-home: acne = pilosebaceous disease from 4 factors (sebum/androgens, keratin plug → comedones, C. acnes, inflammation). Ladder: topical retinoid ± benzoyl peroxide → oral antibiotic/hormonal → ORAL ISOTRETINOIN for severe/scarring (teratogenic — contraception). Treat early to prevent scarring.** The pilosebaceous unit is from [[skin-anatomy-histology]]; retinoids/hormonal therapy connect to pharmacology; PIH follows in [[pigmentary-disorders]]; topical vehicles in [[dermatologic-therapy]].',
  ],

  mechanism: {
    title: '4 factors (sebum/androgen, keratin plug→comedone, C. acnes, inflammation); ladder topical retinoid → antibiotic/hormonal → isotretinoin',
    steps: [
      { id: 's1', label: '4 factors: ↑sebum (androgen), follicular keratin plug (comedones), C. acnes, inflammation', emphasis: 'key' },
      { id: 's2', label: 'Comedones (open=blackhead, closed=whitehead) → papules/pustules → nodules/cysts (scar)', emphasis: 'key' },
      { id: 's3', label: 'First-line topical retinoid ± benzoyl peroxide; topical antibiotic always WITH benzoyl peroxide', emphasis: 'key' },
      { id: 's4', label: 'Moderate: oral antibiotic (doxycycline) or hormonal (OCP/spironolactone) in women', emphasis: 'key' },
      { id: 's5', label: 'Severe/scarring: oral ISOTRETINOIN — teratogenic (contraception, monitor LFTs/lipids)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Open (blackhead) and closed (whitehead) comedones on the face', mechanism: 'Non-inflammatory acne (follicular plugging)', significance: 'key' },
    { sign: 'Deep painful nodules and cysts that scar', mechanism: 'Severe nodulocystic acne (isotretinoin candidate)', significance: 'key' },
    { sign: 'Acne flaring at puberty', mechanism: 'Androgen-driven sebum production', significance: 'supportive' },
    { sign: 'Brown marks after acne resolves in darker skin', mechanism: 'Post-inflammatory hyperpigmentation', significance: 'supportive' },
    { sign: 'Severe teratogenicity risk with an effective oral acne drug', mechanism: 'Isotretinoin (mandatory contraception)', significance: 'key' },
  ],

  investigations: [
    { clue: 'The skin structure affected in acne', meaning: 'The pilosebaceous unit' },
    { clue: 'The four pathogenic factors of acne', meaning: 'Sebum/androgens, keratin plugging (comedones), C. acnes, inflammation' },
    { clue: 'The first-line topical drug class (comedolytic)', meaning: 'Topical retinoids (adapalene/tretinoin)' },
    { clue: 'The oral drug for severe scarring acne (and its main hazard)', meaning: 'Isotretinoin (teratogenic — needs contraception)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Matching therapy to severity and targeting the four factors prevents permanent scarring and psychological harm: topical retinoids ± benzoyl peroxide for comedonal/mild, oral antibiotics or hormonal therapy for moderate, and oral isotretinoin for severe/scarring disease. Avoid antibiotic monotherapy (resistance), and isotretinoin demands a pregnancy-prevention programme (teratogen). The pilosebaceous target is from [[skin-anatomy-histology]]; post-inflammatory pigment change follows in [[pigmentary-disorders]].' },
  ],

  mnemonics: [
    { hook: 'Four factors: "Sebum, plug (comedone), C. acnes, inflammation"', expansion: ['Open = blackhead, closed = whitehead', 'Nodulocystic scars'] },
    { hook: 'Ladder: "Retinoid ± benzoyl peroxide → oral antibiotic/hormonal → Isotretinoin (severe, teratogen)"', expansion: ['Topical antibiotic always WITH benzoyl peroxide', 'Isotretinoin = contraception'] },
  ],

  traps: [
    {
      questionCategory: 'Isotretinoin and pregnancy',
      wrongInstinct: 'Isotretinoin is just a strong acne treatment that can be started like any other',
      rightAnswer: 'Oral ISOTRETINOIN is a potent TERATOGEN causing severe fetal malformations, so it can only be prescribed within a strict PREGNANCY-PREVENTION programme (reliable contraception before, during and for a period after treatment, with pregnancy testing) — alongside monitoring of LFTs/lipids and awareness of mood effects; it is never started casually in a person who could become pregnant',
      why: 'The teratogenicity is the single most important safety issue with isotretinoin, so mandatory contraception/pregnancy prevention (not just efficacy) governs its use — a high-yield prescribing safeguard.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which drug is reserved for severe, scarring nodulocystic acne and requires a pregnancy-prevention programme due to teratogenicity?',
      options: [
        { id: 'a', text: 'Topical benzoyl peroxide' },
        { id: 'b', text: 'Oral isotretinoin' },
        { id: 'c', text: 'Topical adapalene' },
        { id: 'd', text: 'Oral doxycycline' },
      ],
      answerId: 'b',
      explanation: 'Oral isotretinoin is highly effective for severe nodulocystic/scarring acne but is a potent teratogen, so it is used only within a strict pregnancy-prevention programme with monitoring of lipids and liver function. Milder acne is managed with topical retinoids/benzoyl peroxide and oral antibiotics or hormonal therapy.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'To limit antibiotic resistance, topical antibiotics for acne should be used:',
      options: [
        { id: 'a', text: 'As long-term monotherapy' },
        { id: 'b', text: 'Together with benzoyl peroxide' },
        { id: 'c', text: 'Only orally' },
        { id: 'd', text: 'Only with isotretinoin' },
      ],
      answerId: 'b',
      explanation: 'Topical (and oral) antibiotics in acne should be combined with benzoyl peroxide, which reduces the development of C. acnes resistance; antibiotic monotherapy is avoided. First-line therapy centres on topical retinoids plus benzoyl peroxide, escalating by severity.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default acneVulgaris;
