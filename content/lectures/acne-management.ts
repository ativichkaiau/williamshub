import type { Lecture } from '../../lib/types';

export const acneManagement: Lecture = {
  id: 'acne-management',
  title: 'Acne: Treatment Ladder',
  system: 'derm',
  source: 'L17 — Acne',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L17 Acne Treatment' },
    { kind: 'mechanism', label: 'Target the 4 factors by severity' },
    { kind: 'exam', label: 'Retinoids; isotretinoin; hormonal' },
  ],

  highYield: [
    '**Acne treatment TARGETS THE FOUR pathogenic factors (excess sebum, follicular keratin plugging/comedones, Cutibacterium acnes, inflammation) and is chosen by SEVERITY, aiming to prevent SCARRING and psychological harm — so treat EARLY and give agents time (weeks–months).**',
    '**MILD (comedonal): TOPICAL RETINOIDS (adapalene/tretinoin — comedolytic, normalise keratinisation; also maintenance) ± BENZOYL PEROXIDE (antibacterial, no resistance). MILD-MODERATE inflammatory: add a TOPICAL ANTIBIOTIC (clindamycin) — ALWAYS combined with benzoyl peroxide to limit resistance. Topical combinations are first-line for most acne.**',
    '**MODERATE-SEVERE: add ORAL ANTIBIOTICS (doxycycline/lymecycline — anti-inflammatory, for a limited course with a topical retinoid + benzoyl peroxide, never as monotherapy) or, in women, HORMONAL therapy (combined oral contraceptive, spironolactone — anti-androgen). SEVERE/nodulocystic or scarring/treatment-resistant acne → ORAL ISOTRETINOIN.**',
    '**ISOTRETINOIN (oral retinoid) is highly effective but a potent TERATOGEN → mandatory pregnancy-prevention programme (reliable contraception + pregnancy testing); monitor lipids/LFTs; side-effects include dry skin/lips and mood concerns. General rules: AVOID antibiotic MONOTHERAPY (resistance), continue a topical retinoid for maintenance, and manage post-inflammatory hyperpigmentation/scarring.**',
    '**The take-home: acne ladder by severity — mild: topical retinoid ± benzoyl peroxide; mild-moderate: + topical antibiotic (with benzoyl peroxide); moderate-severe: oral antibiotic (limited, + topical) or hormonal (women); SEVERE/scarring: oral ISOTRETINOIN (teratogen — contraception). Treat early to prevent scarring; no antibiotic monotherapy.** The pathogenesis/overview is [[acne-vulgaris]]; retinoid/isotretinoin pharmacology recurs in dermatologic therapy.',
  ],

  mechanism: {
    title: 'By severity: topical retinoid ± benzoyl peroxide → topical antibiotic (with BPO) → oral antibiotic/hormonal → oral isotretinoin (teratogen); treat early',
    steps: [
      { id: 's1', label: 'Mild comedonal: topical retinoid (adapalene/tretinoin) ± benzoyl peroxide', emphasis: 'key' },
      { id: 's2', label: 'Mild-moderate inflammatory: add topical antibiotic (ALWAYS with benzoyl peroxide)', emphasis: 'key' },
      { id: 's3', label: 'Moderate-severe: oral antibiotic (limited, +topical) or hormonal (OCP/spironolactone) in women', emphasis: 'key' },
      { id: 's4', label: 'Severe/nodulocystic/scarring: oral ISOTRETINOIN', emphasis: 'key' },
      { id: 's5', label: 'Isotretinoin = teratogen (contraception, monitor lipids/LFTs); no antibiotic monotherapy', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'First-line comedolytic topical agent for acne', mechanism: 'Topical retinoid (adapalene/tretinoin)', significance: 'key' },
    { sign: 'Topical/oral antibiotic combined with benzoyl peroxide', mechanism: 'Limiting C. acnes antibiotic resistance', significance: 'key' },
    { sign: 'Hormonal therapy for acne in a woman', mechanism: 'Combined OCP / spironolactone (anti-androgen)', significance: 'supportive' },
    { sign: 'Severe nodulocystic/scarring acne requiring an oral retinoid', mechanism: 'Isotretinoin (teratogenic — contraception)', significance: 'key' },
    { sign: 'Acne relapse after stopping antibiotics but continuing a retinoid', mechanism: 'Topical retinoid maintenance', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The first-line topical class for comedonal acne', meaning: 'Topical retinoids' },
    { clue: 'Why topical/oral antibiotics are combined with benzoyl peroxide', meaning: 'To limit C. acnes resistance' },
    { clue: 'The therapy for severe scarring acne', meaning: 'Oral isotretinoin' },
    { clue: 'The mandatory precaution with isotretinoin', meaning: 'Pregnancy prevention (teratogen)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Matching therapy to severity and targeting the four factors prevents scarring and psychological harm: topical retinoids ± benzoyl peroxide for mild/comedonal, adding antibiotics (always with benzoyl peroxide) or hormonal therapy for moderate, and oral isotretinoin for severe/scarring disease. Avoiding antibiotic monotherapy limits resistance, and isotretinoin demands a pregnancy-prevention programme. The pathogenesis/overview is [[acne-vulgaris]]; topical vehicles/potency in [[topical-dermatologic-therapy]].' },
  ],

  mnemonics: [
    { hook: 'Ladder: "Retinoid ± benzoyl peroxide → +antibiotic (with BPO) → oral antibiotic/hormonal → Isotretinoin"', expansion: ['No antibiotic monotherapy', 'Treat early → prevent scars'] },
    { hook: '"Isotretinoin = severe/scarring but Teratogen (contraception + monitor lipids/LFTs)"', expansion: ['Topical retinoid = maintenance', 'Hormonal in women'] },
  ],

  traps: [
    {
      questionCategory: 'Antibiotic use in acne',
      wrongInstinct: 'Long-term antibiotics alone are a good way to keep acne under control',
      rightAnswer: 'Antibiotics (topical or oral) should NOT be used as MONOTHERAPY or long-term alone in acne — this drives C. acnes RESISTANCE; they are combined with BENZOYL PEROXIDE (± a topical retinoid), used for a LIMITED course, with a topical retinoid continued for maintenance; persistent/severe acne is better served by isotretinoin or hormonal therapy',
      why: 'Antibiotic monotherapy breeds resistance and gives poorer long-term control; combining with benzoyl peroxide/retinoids and limiting duration is the resistance-conscious, more effective approach.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'To limit Cutibacterium acnes resistance, antibiotics in acne should be:',
      options: [
        { id: 'a', text: 'Used alone for long periods' },
        { id: 'b', text: 'Combined with benzoyl peroxide and used for a limited course (not as monotherapy)' },
        { id: 'c', text: 'Given only intravenously' },
        { id: 'd', text: 'Avoided entirely in all patients' },
      ],
      answerId: 'b',
      explanation: 'Antibiotics for acne should be combined with benzoyl peroxide (which reduces resistance) and a topical retinoid, and used for a limited duration rather than as long-term monotherapy. First-line therapy centres on topical retinoids plus benzoyl peroxide, escalating by severity.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Severe nodulocystic or scarring acne unresponsive to other treatments is best managed with:',
      options: [
        { id: 'a', text: 'Long-term topical antibiotic alone' },
        { id: 'b', text: 'Oral isotretinoin (within a pregnancy-prevention programme)' },
        { id: 'c', text: 'Benzoyl peroxide only' },
        { id: 'd', text: 'Emollients' },
      ],
      answerId: 'b',
      explanation: 'Severe nodulocystic or scarring/treatment-resistant acne is treated with oral isotretinoin, which is highly effective but teratogenic — requiring a strict pregnancy-prevention programme and monitoring of lipids/liver function.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default acneManagement;
