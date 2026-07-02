import type { Lecture } from '../../lib/types';

export const pigmentaryDisorders: Lecture = {
  id: 'pigmentary-disorders',
  title: 'Pigmentary Disorders',
  system: 'derm',
  source: 'L15 — Pigmentary Disorders',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L15 Pigmentary Disorders' },
    { kind: 'mechanism', label: 'Hypo- vs hyperpigmentation' },
    { kind: 'exam', label: 'Vitiligo, melasma, albinism' },
  ],

  highYield: [
    '**Pigmentary disorders result from changes in MELANOCYTE number or MELANIN production, divided into HYPOpigmentation (too little) and HYPERpigmentation (too much). Melanin (made in melanocytes, transferred to keratinocytes) protects DNA from UV; its loss increases skin-cancer/sunburn risk, and its excess is mainly a cosmetic/psychosocial concern.**',
    '**HYPOPIGMENTATION: VITILIGO = autoimmune DESTRUCTION of melanocytes → sharply demarcated, symmetric, completely DEPIGMENTED (milky-white) macules/patches (Wood\'s lamp accentuates); associated with other autoimmune disease (thyroid). ALBINISM = genetic defect in melanin SYNTHESIS (melanocytes present but non-functional — e.g. tyrosinase) → generalised hypopigmentation with ocular involvement and high skin-cancer risk. PITYRIASIS ALBA (hypopigmented patches in atopic children) and post-inflammatory hypopigmentation are common.**',
    '**HYPERPIGMENTATION: MELASMA = symmetric brown facial patches (cheeks/forehead/upper lip), driven by UV + hormones (pregnancy "mask", OCP) — commoner in women/darker skin; POST-INFLAMMATORY HYPERPIGMENTATION follows any inflammation (acne, eczema) especially in darker skin. Lentigines/ephelides (freckles) are UV-related. Diffuse hyperpigmentation can be systemic (Addison\'s, haemochromatosis, drugs).**',
    '**Pityriasis (tinea) VERSICOLOR (Malassezia) causes hypo- OR hyper-pigmented finely scaly macules (a fungal cause of dyspigmentation — KOH positive). Management: PHOTOPROTECTION is central (both to prevent worsening of melasma/PIH and to protect depigmented skin in vitiligo/albinism); vitiligo → topical steroids/calcineurin inhibitors, phototherapy; melasma → sun protection, topical lightening (hydroquinone, retinoid). Reassurance for benign causes.**',
    '**The take-home: HYPOpigmentation — vitiligo (autoimmune melanocyte loss, depigmented, autoimmune associations), albinism (melanin synthesis defect, ocular, cancer risk); HYPERpigmentation — melasma (UV + hormones, facial), post-inflammatory hyperpigmentation (darker skin); pityriasis versicolor (Malassezia, KOH+). Photoprotection is key throughout.** Melanocyte biology is from [[skin-anatomy-histology]]; UV/skin-cancer risk links to [[skin-aging]] and [[skin-neoplasms]].',
  ],

  mechanism: {
    title: 'Hypopigmentation (vitiligo = melanocyte loss; albinism = synthesis defect) vs hyperpigmentation (melasma UV+hormones; PIH); photoprotect',
    steps: [
      { id: 's1', label: 'Melanocyte number/melanin production changes → hypo- or hyper-pigmentation', emphasis: 'key' },
      { id: 's2', label: 'Vitiligo = autoimmune melanocyte destruction → depigmented macules (autoimmune assoc.)', emphasis: 'key' },
      { id: 's3', label: 'Albinism = melanin SYNTHESIS defect (tyrosinase); ocular + high cancer risk', emphasis: 'key' },
      { id: 's4', label: 'Melasma = UV + hormones (facial); post-inflammatory hyperpigmentation (darker skin)', emphasis: 'key' },
      { id: 's5', label: 'Pityriasis versicolor (Malassezia, KOH+); photoprotection central to management', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Sharply demarcated, symmetric, milky-white depigmented patches', mechanism: 'Vitiligo (autoimmune melanocyte loss)', significance: 'key' },
    { sign: 'Generalised hypopigmentation with ocular signs and high sunburn/cancer risk', mechanism: 'Albinism (melanin synthesis defect)', significance: 'key' },
    { sign: 'Symmetric brown patches on the cheeks/forehead, worse with sun/pregnancy', mechanism: 'Melasma (UV + hormones)', significance: 'key' },
    { sign: 'Brown discolouration at sites of resolved acne/eczema in darker skin', mechanism: 'Post-inflammatory hyperpigmentation', significance: 'supportive' },
    { sign: 'Finely scaly hypo/hyperpigmented macules, KOH positive', mechanism: 'Pityriasis versicolor (Malassezia)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The pigmentary disease from autoimmune melanocyte destruction', meaning: 'Vitiligo' },
    { clue: 'The disorder from a genetic melanin-synthesis defect', meaning: 'Albinism' },
    { clue: 'The facial hyperpigmentation driven by UV and hormones', meaning: 'Melasma' },
    { clue: 'The single most important management step across pigmentary disorders', meaning: 'Photoprotection' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Distinguishing melanocyte LOSS (vitiligo — autoimmune, screen for thyroid disease) from a synthesis DEFECT (albinism — lifelong sun/cancer protection and eye care) and from excess pigment (melasma/PIH) directs treatment. Photoprotection is central everywhere — protecting depigmented skin from burns/cancer and preventing worsening of melasma/PIH ([[skin-aging]], [[skin-neoplasms]]). Vitiligo uses topical immunomodulators/phototherapy; melasma uses sun protection and topical lightening; the melanocyte biology is in [[skin-anatomy-histology]].' },
  ],

  mnemonics: [
    { hook: '"Vitiligo = lose melanocytes (autoimmune, depigmented); Albinism = can\'t make melanin (present but broken)"', expansion: ['Melasma = UV + hormones (facial)', 'PIH after inflammation (darker skin)'] },
    { hook: 'Photoprotection helps ALL: protects depigmented skin + prevents melasma/PIH worsening', expansion: ['Versicolor = Malassezia/KOH+', 'Vitiligo → thyroid check'] },
  ],

  traps: [
    {
      questionCategory: 'Vitiligo vs albinism',
      wrongInstinct: 'Vitiligo and albinism are both just an absence of skin colour, so they are essentially the same',
      rightAnswer: 'They differ mechanistically: VITILIGO is ACQUIRED autoimmune DESTRUCTION of melanocytes (melanocytes are ABSENT in patches, often with autoimmune associations), whereas ALBINISM is an INHERITED defect in melanin SYNTHESIS (melanocytes are PRESENT but cannot make pigment, e.g. tyrosinase deficiency, with ocular involvement) — one loses the cells, the other keeps them but cannot produce pigment',
      why: 'The mechanism changes everything: vitiligo is patchy, acquired and autoimmune (screen for thyroid disease, may repigment with immunotherapy), while albinism is generalised, congenital and needs lifelong sun/eye protection and cancer surveillance.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Sharply demarcated, symmetric, completely depigmented (milky-white) macules due to autoimmune destruction of melanocytes describe:',
      options: [
        { id: 'a', text: 'Albinism' },
        { id: 'b', text: 'Vitiligo' },
        { id: 'c', text: 'Melasma' },
        { id: 'd', text: 'Pityriasis versicolor' },
      ],
      answerId: 'b',
      explanation: 'Vitiligo is acquired autoimmune destruction of melanocytes producing well-demarcated depigmented patches (accentuated under Wood\'s lamp), often associated with other autoimmune disease such as thyroid disease. Albinism, by contrast, is a congenital defect of melanin synthesis with melanocytes present.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Symmetric brown patches on the cheeks and forehead of a pregnant woman, worsened by sun exposure, are characteristic of:',
      options: [
        { id: 'a', text: 'Vitiligo' },
        { id: 'b', text: 'Melasma' },
        { id: 'c', text: 'Albinism' },
        { id: 'd', text: 'Post-inflammatory hypopigmentation' },
      ],
      answerId: 'b',
      explanation: 'Melasma is a hyperpigmentation driven by ultraviolet light and hormones (pregnancy, oral contraceptives), producing symmetric brown facial patches, more common in women and darker skin types. Management centres on strict photoprotection plus topical lightening agents (e.g. hydroquinone, retinoids).',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default pigmentaryDisorders;
