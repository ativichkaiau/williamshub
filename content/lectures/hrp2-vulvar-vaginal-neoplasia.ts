import type { Lecture } from '../../lib/types';

export const hrp2VulvarVaginalNeoplasia: Lecture = {
  id: 'hrp2-vulvar-vaginal-neoplasia',
  title: 'Vulvar & Vaginal Neoplasia',
  system: 'repro',
  source: 'L5 — Pathology of the Cervix, Vagina & Vulva',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'L5 Lower Genital Tract' },
    { kind: 'disease', label: 'VIN · vulvar SCC · Paget' },
    { kind: 'mechanism', label: 'HPV vs lichen sclerosus' },
    { kind: 'exam', label: 'Two carcinogenesis pathways' },
  ],

  highYield: [
    '**Vulvar squamous carcinoma has TWO pathways:** a **HPV-related** type in **younger** women (via **usual-type VIN**, HPV 16), and a **non-HPV** type in **older** women arising from **lichen sclerosus / differentiated VIN** (**p53**).',
    '**Lichen sclerosus** = thin, white, atrophic “parchment/cigarette-paper” vulvar skin, intense pruritus; a **non-neoplastic** dermatosis but with a **small risk of SCC** → needs follow-up. **Lichen simplex chronicus** = thickened skin from chronic scratching.',
    '**Extramammary Paget disease of the vulva** = intraepithelial adenocarcinoma (red, crusted, eczematous plaque; PAS-positive cells) — usually intraepidermal, occasionally with an underlying adenocarcinoma.',
    '**Vaginal:** **clear cell adenocarcinoma** linked to in-utero **DES** exposure (+ adenosis); most vaginal malignancy is **secondary** extension (from cervix). **VaIN** parallels CIN as an HPV-driven precursor.',
  ],

  mechanism: {
    title: 'HPV-driven (young) vs chronic dermatosis-driven (old)',
    steps: [
      { id: 's1', label: 'HPV 16 → usual VIN → SCC (younger women)', emphasis: 'key' },
      { id: 's2', label: 'Lichen sclerosus → differentiated VIN → SCC (older, p53)', emphasis: 'key' },
      { id: 's3', label: 'Paget = intraepithelial adenocarcinoma' },
      { id: 's4', label: 'Vaginal clear cell adenocarcinoma → DES exposure' },
    ],
  },

  examFindings: [
    { sign: 'White atrophic “parchment” vulvar skin + pruritus', mechanism: 'Lichen sclerosus (small SCC risk)', significance: 'key' },
    { sign: 'Two vulvar SCC pathways: HPV (young) vs non-HPV (old)', mechanism: 'Distinct carcinogenesis', significance: 'key' },
    { sign: 'Red eczematous vulvar plaque with PAS+ cells', mechanism: 'Extramammary Paget disease', significance: 'supportive' },
    { sign: 'Vaginal clear cell adenocarcinoma', mechanism: 'In-utero DES', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Older woman, chronic white pruritic vulva, new ulcer', meaning: 'Lichen sclerosus with possible SCC → biopsy' },
    { clue: 'Young woman, warty vulvar lesion, HPV-positive VIN', meaning: 'Usual-type VIN → HPV-related SCC risk' },
    { clue: 'Persistent eczematous nipple-like vulvar plaque', meaning: 'Extramammary Paget disease → biopsy' },
    { clue: 'Vaginal adenocarcinoma in a young woman', meaning: 'Ask about maternal DES exposure' },
  ],

  treatment: [
    { logic: 'Treat dermatoses, biopsy suspicious lesions', detail: 'Topical steroids for lichen sclerosus with surveillance; excise VIN/carcinoma; any non-healing vulvar lesion needs biopsy.' },
  ],

  mnemonics: [
    { hook: 'Vulvar SCC: HPV = young; Lichen sclerosus/p53 = old', expansion: ['Paget = intraepithelial adenocarcinoma', 'DES → vaginal clear cell'] },
  ],

  traps: [
    {
      questionCategory: 'Lichen sclerosus risk',
      wrongInstinct: 'Lichen sclerosus is a benign condition with no malignant potential',
      rightAnswer: 'Lichen sclerosus is non-neoplastic but carries a small risk of vulvar squamous carcinoma and needs follow-up',
      why: 'Although not itself a cancer, lichen sclerosus can give rise to differentiated VIN and SCC in older women.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 35-year-old with HPV-16-positive usual-type VIN is at risk of which vulvar malignancy?',
      options: [
        { id: 'a', text: 'Adenocarcinoma' },
        { id: 'b', text: 'HPV-related squamous cell carcinoma' },
        { id: 'c', text: 'Melanoma' },
        { id: 'd', text: 'Basal cell carcinoma' },
      ],
      answerId: 'b',
      explanation: 'Usual-type VIN is HPV-driven and progresses to HPV-related vulvar squamous cell carcinoma, typically in younger women.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'Vaginal clear cell adenocarcinoma in a young woman is classically associated with:',
      options: [
        { id: 'a', text: 'HPV 6 and 11' },
        { id: 'b', text: 'In-utero diethylstilbestrol (DES) exposure' },
        { id: 'c', text: 'Lichen sclerosus' },
        { id: 'd', text: 'Combined oral contraceptives' },
      ],
      answerId: 'b',
      explanation: 'In-utero DES exposure is the classic association of vaginal clear cell adenocarcinoma (and vaginal adenosis).',
      tests: 'exam',
    },
  ],
};

export default hrp2VulvarVaginalNeoplasia;
