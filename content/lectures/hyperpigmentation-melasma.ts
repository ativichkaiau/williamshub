import type { Lecture } from '../../lib/types';

export const hyperpigmentationMelasma: Lecture = {
  id: 'hyperpigmentation-melasma',
  title: 'Hyperpigmentation & Melasma',
  system: 'derm',
  source: 'L15 — Pigmentary Disorders',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L15 Hyperpigmentation' },
    { kind: 'mechanism', label: 'Excess melanin; epidermal vs dermal' },
    { kind: 'exam', label: 'Melasma; PIH; systemic causes' },
  ],

  highYield: [
    'HYPERpigmentation = too much melanin (or, rarely, other pigment). It is EPIDERMAL (brown, accentuated under Wood\'s lamp, more responsive to treatment) or DERMAL (blue-grey, not accentuated, harder to treat). The commonest problems are melasma and post-inflammatory hyperpigmentation, driven by UV and inflammation — especially in darker skin (Fitzpatrick III–VI).',
    'MELASMA: symmetric brown patches on the face (cheeks, forehead, upper lip, chin), driven by UV + HORMONES (pregnancy "mask of pregnancy"/chloasma, OCP) and genetic predisposition; commoner in women and darker skin. POST-INFLAMMATORY HYPERPIGMENTATION (PIH) follows any skin inflammation (acne, eczema, injury), especially in darker skin — a major cosmetic/psychological burden that fades slowly.',
    'SYSTEMIC/other causes to recognise: diffuse hyperpigmentation of ADDISON disease (ACTH/MSH), haemochromatosis (bronze), and DRUG-induced pigmentation (minocycline, amiodarone, chemotherapy, antimalarials). Localised: lentigines/freckles (UV), café-au-lait (NF1), acanthosis nigricans (insulin resistance/paraneoplastic — [[skin-signs-systemic-disease]]).',
    'MANAGEMENT centres on PHOTOPROTECTION (essential — UV worsens all of these) plus topical LIGHTENING agents (HYDROQUINONE, retinoids, azelaic acid, "triple combination"), chemical peels and lasers (used cautiously in darker skin to avoid worsening PIH). Address the underlying cause (stop the drug, treat the inflammation, review hormones); results are gradual and recurrence is common.',
    '**The take-home: hyperpigmentation = excess melanin (epidermal brown/treatable vs dermal blue-grey/resistant); MELASMA (facial, UV + hormones, women/darker skin) and POST-INFLAMMATORY hyperpigmentation (after acne/eczema, darker skin); recognise systemic (Addison) and drug causes. PHOTOPROTECTION + topical lightening (hydroquinone/retinoid) + treat the cause.** The hypopigmentation/overview is [[pigmentary-disorders]]; photoprotection is [[photoaging-photoprotection]].',
  ],

  mechanism: {
    title: 'Excess melanin (epidermal brown/treatable vs dermal blue-grey); melasma (UV+hormones) & PIH (post-inflammatory, darker skin); photoprotection + lightening',
    steps: [
      { id: 's1', label: 'Hyperpigmentation = excess melanin; epidermal (brown, Wood\'s+) vs dermal (blue-grey)', emphasis: 'key' },
      { id: 's2', label: 'Melasma: facial symmetric brown, UV + hormones (pregnancy/OCP), women/darker skin', emphasis: 'key' },
      { id: 's3', label: 'Post-inflammatory hyperpigmentation after acne/eczema/injury (darker skin)', emphasis: 'key' },
      { id: 's4', label: 'Systemic/drug: Addison (diffuse), minocycline/amiodarone/antimalarials', emphasis: 'key' },
      { id: 's5', label: 'Photoprotection + topical lightening (hydroquinone/retinoid/azelaic) + treat cause; gradual/recurs', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Symmetric brown facial patches, worse with sun/pregnancy', mechanism: 'Melasma (UV + hormones)', significance: 'key' },
    { sign: 'Brown discolouration at sites of resolved acne in darker skin', mechanism: 'Post-inflammatory hyperpigmentation', significance: 'key' },
    { sign: 'Diffuse hyperpigmentation with fatigue and hypotension', mechanism: 'Addison disease (ACTH/MSH)', significance: 'key' },
    { sign: 'Slate-grey pigmentation on a long-term antibiotic', mechanism: 'Minocycline-induced pigmentation', significance: 'supportive' },
    { sign: 'Brown epidermal pigment accentuated by Wood\'s lamp', mechanism: 'Epidermal (more treatable) hyperpigmentation', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The facial hyperpigmentation driven by UV and hormones', meaning: 'Melasma' },
    { clue: 'The hyperpigmentation following skin inflammation', meaning: 'Post-inflammatory hyperpigmentation (PIH)' },
    { clue: 'The systemic cause of diffuse hyperpigmentation', meaning: 'Addison disease (± haemochromatosis, drugs)' },
    { clue: 'The essential first management step', meaning: 'Photoprotection' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Hyperpigmentation is common and psychologically significant, especially in darker skin. Management centres on photoprotection (UV worsens all forms), topical lightening (hydroquinone, retinoids, azelaic acid) and cautious procedures, plus addressing the cause (hormones in melasma, treating inflammation to prevent PIH, stopping culprit drugs). Recognising systemic causes (Addison) prompts endocrine work-up. The epidermal/dermal distinction predicts treatability. The hypopigmentation/overview is [[pigmentary-disorders]]; photoprotection is [[photoaging-photoprotection]].' },
  ],

  mnemonics: [
    { hook: '"Melasma = UV + hormones (facial, women/darker skin); PIH = after inflammation"', expansion: ['Epidermal = brown/treatable; dermal = blue-grey', 'Photoprotection first'] },
    { hook: '"Diffuse hyperpigmentation → think Addison/haemochromatosis/drugs"', expansion: ['Hydroquinone/retinoid lightening', 'Cautious lasers in darker skin'] },
  ],

  traps: [
    {
      questionCategory: 'Photoprotection in hyperpigmentation',
      wrongInstinct: 'Treating melasma/PIH is all about bleaching creams; sun exposure does not matter much',
      rightAnswer: 'UV is a PRIMARY driver of melasma and worsens post-inflammatory hyperpigmentation, so PHOTOPROTECTION (broad-spectrum sunscreen, avoidance) is the ESSENTIAL foundation — topical lightening agents fail or relapse without it; conversely, aggressive procedures without sun protection can worsen pigmentation, especially in darker skin',
      why: 'Because UV both causes and perpetuates these disorders, omitting photoprotection undermines every other treatment and can worsen pigmentation — it is the cornerstone, not an optional add-on.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Symmetric brown patches on the cheeks and forehead of a pregnant woman, worsened by sun exposure, are characteristic of:',
      options: [
        { id: 'a', text: 'Vitiligo' },
        { id: 'b', text: 'Melasma' },
        { id: 'c', text: 'Addison disease' },
        { id: 'd', text: 'Post-inflammatory hypopigmentation' },
      ],
      answerId: 'b',
      explanation: 'Melasma is driven by UV and hormones (pregnancy, oral contraceptives), producing symmetric brown facial patches, more common in women and darker skin. Management centres on strict photoprotection plus topical lightening agents (hydroquinone, retinoids).',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The single most important foundation of treatment for melasma and post-inflammatory hyperpigmentation is:',
      options: [
        { id: 'a', text: 'Laser therapy alone' },
        { id: 'b', text: 'Photoprotection (broad-spectrum sunscreen and sun avoidance)' },
        { id: 'c', text: 'Oral antibiotics' },
        { id: 'd', text: 'Systemic steroids' },
      ],
      answerId: 'b',
      explanation: 'Because UV drives and worsens both melasma and post-inflammatory hyperpigmentation, photoprotection is the essential foundation; topical lightening agents relapse without it, and procedures can worsen pigmentation (especially in darker skin) if sun exposure continues.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default hyperpigmentationMelasma;
