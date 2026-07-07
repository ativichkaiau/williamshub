import type { Lecture } from '../../lib/types';

export const melanomaClinical: Lecture = {
  id: 'melanoma-clinical',
  title: 'Melanoma: Diagnosis & Staging',
  system: 'derm',
  source: 'L18 — Skin Neoplasms',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L18 Melanoma' },
    { kind: 'mechanism', label: 'Subtypes; Breslow; ABCDE' },
    { kind: 'exam', label: 'Evolution; excisional biopsy' },
  ],

  highYield: [
    'MELANOMA is the malignancy of MELANOCYTES — less common than keratinocyte cancers but responsible for most skin-cancer DEATHS because it metastasises. Suspect it in any pigmented lesion with the ABCDE features: ASYMMETRY, BORDER irregularity, COLOUR variation, DIAMETER >6 mm, and EVOLUTION/change — the last (a new or changing lesion) is the MOST important. The "ugly duckling" (a mole unlike the others) is another clue.',
    'SUBTYPES: SUPERFICIAL SPREADING (commonest; horizontal growth phase); NODULAR (aggressive, early vertical growth); LENTIGO MALIGNA (elderly, chronically sun-damaged face; slow); ACRAL LENTIGINOUS (palms/soles/nail beds — the commonest in DARKER skin and Asians, NOT sun-related — a subungual streak or heel lesion). Amelanotic melanoma (pink, no pigment) is easily missed.',
    'PROGNOSIS is set principally by BRESLOW THICKNESS (depth of invasion in mm), plus ulceration and mitotic rate — so a suspected melanoma is removed by EXCISIONAL biopsy (full thickness) to measure it accurately (a shave biopsy can transect the lesion and prevent staging). Sentinel lymph node biopsy stages intermediate/thick lesions.',
    'MANAGEMENT: wide local EXCISION (margin scaled to Breslow depth); regional nodal assessment; and for advanced/metastatic disease, systemic IMMUNOTHERAPY (checkpoint inhibitors — anti-PD-1/CTLA-4) and TARGETED therapy (BRAF/MEK inhibitors if BRAF-mutant) have transformed outcomes. Early, thin melanoma is CURABLE by excision — hence the emphasis on early detection and photoprotection.',
    '**The take-home: melanoma (melanocyte cancer, the skin-cancer killer) — ABCDE (Evolution most important), "ugly duckling"; subtypes (superficial spreading commonest; nodular aggressive; lentigo maligna; ACRAL in darker skin); prognosis by BRESLOW depth → EXCISIONAL biopsy; treat by wide excision ± immunotherapy/targeted therapy; early = curable.** The keratinocyte cancers are in [[keratinocyte-carcinomas]]; the overview is [[skin-neoplasms]]; prevention is [[photoaging-photoprotection]].',
  ],

  mechanism: {
    title: 'Melanocyte cancer (metastasises); ABCDE (Evolution key); subtypes (superficial/nodular/lentigo maligna/acral); prognosis by Breslow → excisional biopsy',
    steps: [
      { id: 's1', label: 'ABCDE (Asymmetry, Border, Colour, Diameter, Evolution — Evolution most important); ugly duckling', emphasis: 'key' },
      { id: 's2', label: 'Subtypes: superficial spreading (commonest), nodular (aggressive), lentigo maligna, acral (darker skin)', emphasis: 'key' },
      { id: 's3', label: 'Prognosis = Breslow thickness (+ ulceration/mitoses)', emphasis: 'danger' },
      { id: 's4', label: 'Excisional biopsy (full thickness) to measure Breslow; sentinel node for staging', emphasis: 'key' },
      { id: 's5', label: 'Wide excision (margin by depth) ± immunotherapy (anti-PD-1/CTLA-4) / BRAF-MEK targeted', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'A pigmented lesion that is asymmetric, irregular, multicoloured and changing', mechanism: 'Melanoma (ABCDE)', significance: 'key' },
    { sign: 'A mole that looks different from all the others', mechanism: '"Ugly duckling" sign of melanoma', significance: 'key' },
    { sign: 'A pigmented streak under a nail or a sole lesion in a darker-skinned patient', mechanism: 'Acral lentiginous melanoma', significance: 'key' },
    { sign: 'A rapidly growing nodule with early vertical growth', mechanism: 'Nodular melanoma (aggressive)', significance: 'key' },
    { sign: 'Prognosis determined by the depth of invasion', mechanism: 'Breslow thickness', significance: 'key' },
  ],

  investigations: [
    { clue: 'The mnemonic for suspicious pigmented lesions', meaning: 'ABCDE (Asymmetry, Border, Colour, Diameter, Evolution)' },
    { clue: 'The strongest prognostic factor', meaning: 'Breslow thickness (depth)' },
    { clue: 'The biopsy technique for a suspected melanoma', meaning: 'Excisional biopsy (full thickness)' },
    { clue: 'The melanoma subtype commonest in darker skin', meaning: 'Acral lentiginous melanoma' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Melanoma kills through metastasis, so early recognition (ABCDE, especially evolution; ugly duckling; acral lesions in darker skin) and excisional biopsy for accurate Breslow depth are crucial — thin melanoma is curable by wide excision. Advanced disease now responds to checkpoint immunotherapy and BRAF/MEK targeted therapy. Prevention is photoprotection ([[photoaging-photoprotection]]). The keratinocyte cancers are in [[keratinocyte-carcinomas]]; overview [[skin-neoplasms]].' },
  ],

  mnemonics: [
    { hook: 'Melanoma "ABCDE" — Evolution is key; + ugly duckling', expansion: ['Prognosis = Breslow depth', 'Excisional biopsy (not shave)'] },
    { hook: 'Subtypes: "Superficial spreading commonest; Nodular aggressive; Acral = darker skin/nails"', expansion: ['Amelanotic = missed', 'Immunotherapy/BRAF for advanced'] },
  ],

  traps: [
    {
      questionCategory: 'Melanoma in darker skin',
      wrongInstinct: 'People with darker skin do not really get melanoma, so acral lesions can be ignored',
      rightAnswer: 'Although melanoma is less common in darker skin, ACRAL LENTIGINOUS melanoma (palms, soles, nail beds — NOT sun-related) is the COMMONEST subtype in darker-skinned and Asian patients and is often diagnosed LATE (worse prognosis) — so pigmented acral/subungual lesions (a nail streak, a sole lesion) must be examined and biopsied, not dismissed',
      why: 'Assuming darker skin is protected leads to missed, late-stage acral melanoma; awareness that acral lentiginous melanoma predominates in these groups prompts timely evaluation.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The single most important prognostic factor for a primary cutaneous melanoma is:',
      options: [
        { id: 'a', text: 'The colour of the lesion' },
        { id: 'b', text: 'Breslow thickness (depth of invasion)' },
        { id: 'c', text: 'The patient\'s age' },
        { id: 'd', text: 'The diameter alone' },
      ],
      answerId: 'b',
      explanation: 'Breslow thickness — the depth of tumour invasion measured histologically — is the strongest prognostic factor and guides excision margins and staging, so a suspected melanoma is removed by excisional (full-thickness) biopsy to measure it accurately.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The commonest subtype of melanoma in darker-skinned and Asian patients, occurring on palms/soles/nail beds and unrelated to sun exposure, is:',
      options: [
        { id: 'a', text: 'Superficial spreading melanoma' },
        { id: 'b', text: 'Acral lentiginous melanoma' },
        { id: 'c', text: 'Lentigo maligna melanoma' },
        { id: 'd', text: 'Nodular melanoma' },
      ],
      answerId: 'b',
      explanation: 'Acral lentiginous melanoma arises on palms, soles and nail beds, is not sun-related, and is the commonest melanoma subtype in darker-skinned and Asian populations; it is often diagnosed late, so pigmented acral/subungual lesions warrant careful evaluation.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default melanomaClinical;
