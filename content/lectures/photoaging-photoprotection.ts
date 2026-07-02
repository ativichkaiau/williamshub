import type { Lecture } from '../../lib/types';

export const photoagingPhotoprotection: Lecture = {
  id: 'photoaging-photoprotection',
  title: 'Photoaging & Photoprotection',
  system: 'derm',
  source: 'L3 — Skin Aging',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L3 Photoprotection' },
    { kind: 'mechanism', label: 'UV damage & prevention' },
    { kind: 'exam', label: 'Sunscreen; Fitzpatrick; retinoids' },
  ],

  highYield: [
    '**UV drives both photoaging and skin cancer, so PHOTOPROTECTION is the single most effective preventive and anti-ageing measure. UVA (longer, penetrates to the dermis → collagen/elastin damage, tanning, "Aging") vs UVB (shorter, epidermal DNA damage → sunburn, "Burning", the main carcinogen). A broad-spectrum sunscreen must cover BOTH.**',
    '**SUNSCREENS are ORGANIC/chemical (absorb UV) or INORGANIC/physical (zinc oxide, titanium dioxide — reflect/scatter, broad-spectrum, good for sensitive/paediatric skin). SPF measures UVB protection (SPF 30 blocks ~97%); apply generously and reapply. Photoprotection also includes clothing, hats, shade and sun avoidance — behaviour matters as much as product.**',
    '**FITZPATRICK skin phototypes (I–VI) grade the tendency to burn vs tan and predict UV risk: lower types (I–II, always burn) have the highest sunburn and skin-cancer risk; higher types tan more but still need protection and are prone to dyspigmentation (melasma, post-inflammatory hyperpigmentation). This individualises advice.**',
    '**TREATMENT of established photodamage: topical RETINOIDS (tretinoin) increase collagen and reduce fine wrinkles/dyspigmentation; antioxidants; and procedures (chemical peels, lasers). Treating premalignant ACTINIC KERATOSES (cryotherapy, topical 5-FU/imiquimod) prevents progression to SCC. Smoking cessation helps. The message is prevention-first.**',
    '**The take-home: UVA ages (dermis/collagen), UVB burns/causes cancer (epidermal DNA) — use BROAD-SPECTRUM sunscreen (organic-absorb vs inorganic-reflect; SPF = UVB) plus clothing/shade; Fitzpatrick type predicts risk (I–II highest); retinoids treat photodamage; treat actinic keratoses to prevent SCC.** The ageing overview is [[skin-aging]]; UV carcinogenesis leads to [[skin-neoplasms]] and [[keratinocyte-carcinomas]].',
  ],

  mechanism: {
    title: 'UVA ages (dermis), UVB burns/cancer (DNA); broad-spectrum sunscreen + behaviour; Fitzpatrick predicts risk; retinoids treat; treat actinic keratoses',
    steps: [
      { id: 's1', label: 'UVA = Aging (deep dermis, collagen/elastin); UVB = Burning/DNA (cancer)', emphasis: 'key' },
      { id: 's2', label: 'Broad-spectrum sunscreen covers both; organic (absorb) vs inorganic (reflect)', emphasis: 'key' },
      { id: 's3', label: 'SPF = UVB protection (SPF30 ≈ 97%); apply generously + clothing/shade', emphasis: 'key' },
      { id: 's4', label: 'Fitzpatrick I–VI: lower types burn → highest cancer risk', emphasis: 'key' },
      { id: 's5', label: 'Retinoids treat photodamage; treat actinic keratoses (cryo/5-FU/imiquimod) → prevent SCC', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Deep dermal collagen/elastin damage from long-wavelength UV', mechanism: 'UVA (aging)', significance: 'key' },
    { sign: 'Sunburn and epidermal DNA damage from shorter-wavelength UV', mechanism: 'UVB (burning/carcinogenesis)', significance: 'key' },
    { sign: 'Highest sunburn/skin-cancer risk in a fair patient who always burns', mechanism: 'Fitzpatrick type I–II', significance: 'key' },
    { sign: 'Improved fine wrinkles and dyspigmentation with a topical drug', mechanism: 'Retinoid (tretinoin) stimulating collagen', significance: 'supportive' },
    { sign: 'Scaly premalignant lesions treated to prevent cancer', mechanism: 'Actinic keratoses → SCC prevention', significance: 'key' },
  ],

  investigations: [
    { clue: 'The UV band causing dermal ageing', meaning: 'UVA' },
    { clue: 'The UV band causing sunburn and skin cancer', meaning: 'UVB' },
    { clue: 'What SPF measures', meaning: 'UVB protection (need broad-spectrum for UVA too)' },
    { clue: 'The scale of skin phototype/UV risk', meaning: 'Fitzpatrick I–VI' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Photoprotection is the highest-yield intervention in dermatology — it prevents both photoaging and skin cancer, and prevents worsening of pigmentary disorders. Broad-spectrum sunscreen (UVA+UVB) plus behaviour, individualised by Fitzpatrick type, is the core; retinoids reverse some photodamage; and treating actinic keratoses prevents SCC. It operationalises the ageing overview of [[skin-aging]] and the cancer risk of [[skin-neoplasms]]/[[keratinocyte-carcinomas]].' },
  ],

  mnemonics: [
    { hook: '"UVA Ages (deep); UVB Burns/cancer (DNA)" — need broad-spectrum', expansion: ['SPF = UVB', 'Inorganic = zinc/titanium (reflect)'] },
    { hook: 'Fitzpatrick "lower type = burns = highest cancer risk"', expansion: ['Retinoids treat photodamage', 'Treat actinic keratoses'] },
  ],

  traps: [
    {
      questionCategory: 'What SPF covers',
      wrongInstinct: 'A high SPF alone gives complete protection against all UV-related damage',
      rightAnswer: 'SPF measures protection against UVB (sunburn) only — a high SPF that is NOT broad-spectrum leaves UVA (dermal ageing, some carcinogenesis) largely uncovered; effective photoprotection needs a BROAD-SPECTRUM product (UVA+UVB), applied generously and reapplied, PLUS clothing/shade/avoidance',
      why: 'Relying on SPF number alone (UVB) misses UVA damage; broad-spectrum coverage and behaviour are essential for genuine protection against ageing and cancer.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The sun protection factor (SPF) of a sunscreen primarily quantifies protection against:',
      options: [
        { id: 'a', text: 'UVA' },
        { id: 'b', text: 'UVB' },
        { id: 'c', text: 'Infrared radiation' },
        { id: 'd', text: 'Visible light' },
      ],
      answerId: 'b',
      explanation: 'SPF measures protection against UVB (the sunburn/DNA-damaging band). Because UVA drives dermal ageing and contributes to carcinogenesis, a "broad-spectrum" sunscreen covering both UVA and UVB is needed, applied generously with reapplication.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which patient has the highest risk of sunburn and skin cancer and needs the most emphatic photoprotection advice?',
      options: [
        { id: 'a', text: 'A Fitzpatrick type VI patient who never burns' },
        { id: 'b', text: 'A Fitzpatrick type I–II patient who always burns and rarely tans' },
        { id: 'c', text: 'Anyone regardless of skin type equally' },
        { id: 'd', text: 'A patient who already uses sunscreen' },
      ],
      answerId: 'b',
      explanation: 'Fitzpatrick types I–II (fair skin that always burns, rarely tans) have the least melanin protection and the highest risk of sunburn and skin cancer, so they warrant the strongest photoprotection counselling — though all skin types benefit from protection.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default photoagingPhotoprotection;
