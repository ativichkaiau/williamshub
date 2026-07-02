import type { Lecture } from '../../lib/types';

export const skinAging: Lecture = {
  id: 'skin-aging',
  title: 'Skin Aging',
  system: 'derm',
  source: 'L3 — Skin Aging',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L3 Skin Aging' },
    { kind: 'mechanism', label: 'Intrinsic vs photoaging' },
    { kind: 'exam', label: 'UV, collagen loss, prevention' },
  ],

  highYield: [
    '**Skin ageing has TWO overlapping processes. INTRINSIC (chronological) ageing is genetically programmed, time-dependent and affects all skin: thin, dry, finely wrinkled skin with reduced cell turnover, fewer melanocytes/Langerhans cells, flattening of the dermo-epidermal junction and gradual collagen loss. EXTRINSIC ageing is driven by environment — chiefly UV (PHOTOAGING), plus smoking and pollution.**',
    '**PHOTOAGING (UV-exposed sites: face, neck, dorsal hands) is the dominant, PREVENTABLE cause of visible ageing: UV generates reactive oxygen species and up-regulates MATRIX METALLOPROTEINASES that DEGRADE dermal COLLAGEN and cause abnormal ELASTIN accumulation (SOLAR ELASTOSIS) → coarse deep wrinkles, laxity, leathery/yellow skin, mottled dyspigmentation (lentigines), telangiectasia and actinic keratoses.**',
    '**UVB (shorter, "Burning") damages epidermal DNA (pyrimidine dimers) → sunburn and skin cancer; UVA (longer, "Aging") penetrates deeper into the dermis → collagen/elastin damage and tanning. Cumulative UV damage is the key link between photoaging and skin CANCER (actinic keratosis → SCC; melanoma). Fitzpatrick skin phototype predicts burn/cancer risk (lower types burn more).**',
    '**PREVENTION and treatment: PHOTOPROTECTION (broad-spectrum sunscreen, clothing, sun avoidance) is the single most effective anti-ageing intervention; RETINOIDS (tretinoin) increase collagen and reduce fine wrinkles; antioxidants, and procedural options (lasers, peels). Stopping smoking helps. The message is preventive — most photoaging (and much skin cancer) is avoidable.**',
    '**The take-home: INTRINSIC ageing = time/genetics (thin, fine wrinkles, all skin); EXTRINSIC/PHOTOAGING = UV-driven (MMP collagen breakdown + solar elastosis → coarse wrinkles, dyspigmentation, on sun-exposed sites) and PREVENTABLE by photoprotection; UVB burns/DNA, UVA ages; cumulative UV → skin cancer.** The dermal collagen/elastin affected is from [[skin-anatomy-histology]]; UV carcinogenesis leads to [[skin-neoplasms]].',
  ],

  mechanism: {
    title: 'Intrinsic (time/genetics, all skin) vs photoaging (UV → MMP collagen breakdown + solar elastosis, sun-exposed, preventable)',
    steps: [
      { id: 's1', label: 'Intrinsic ageing: time/genetics → thin, dry, fine wrinkles, ↓turnover (all skin)', emphasis: 'key' },
      { id: 's2', label: 'Photoaging (UV) = dominant extrinsic cause, on sun-exposed sites', emphasis: 'key' },
      { id: 's3', label: 'UV → ROS + matrix metalloproteinases → collagen breakdown + solar elastosis', emphasis: 'key' },
      { id: 's4', label: 'UVB = Burn/DNA damage (cancer); UVA = Aging (deep dermis)', emphasis: 'key' },
      { id: 's5', label: 'Prevent with photoprotection; retinoids treat; cumulative UV → skin cancer', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Coarse deep wrinkles, laxity and yellow leathery skin on the face/neck', mechanism: 'Photoaging (solar elastosis, collagen loss)', significance: 'key' },
    { sign: 'Thin, dry, finely wrinkled skin everywhere with age', mechanism: 'Intrinsic (chronological) ageing', significance: 'key' },
    { sign: 'Mottled pigmentation and lentigines on sun-exposed skin', mechanism: 'UV-induced dyspigmentation', significance: 'supportive' },
    { sign: 'Scaly pre-malignant lesions on chronically sun-damaged skin', mechanism: 'Actinic keratoses (→ risk of SCC)', significance: 'key' },
    { sign: 'Improved fine wrinkles with topical tretinoin', mechanism: 'Retinoid-induced collagen synthesis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The preventable, UV-driven form of skin ageing', meaning: 'Photoaging (extrinsic ageing)' },
    { clue: 'The enzymes that degrade dermal collagen in photoaging', meaning: 'Matrix metalloproteinases (induced by UV)' },
    { clue: 'The UV band that primarily damages DNA and causes sunburn', meaning: 'UVB ("Burning")' },
    { clue: 'The single most effective anti-ageing intervention', meaning: 'Photoprotection (sunscreen/sun avoidance)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Distinguishing intrinsic from photoaging matters because photoaging is preventable — photoprotection is both the best anti-ageing measure and a key skin-cancer preventive, given cumulative UV drives actinic keratoses/SCC and melanoma ([[skin-neoplasms]]). Retinoids reverse some photodamage by stimulating the dermal collagen described in [[skin-anatomy-histology]]. Counselling on sun protection and smoking cessation has the greatest impact.' },
  ],

  mnemonics: [
    { hook: '"UVA = Aging (deep dermis); UVB = Burning/DNA (cancer)"', expansion: ['Photoaging = MMP collagen loss + solar elastosis', 'Sun-exposed sites'] },
    { hook: '"Intrinsic = time (fine wrinkles, all over); Extrinsic = sun (coarse wrinkles, exposed)"', expansion: ['Photoprotection prevents', 'Retinoids treat'] },
  ],

  traps: [
    {
      questionCategory: 'Intrinsic vs extrinsic (photo) ageing',
      wrongInstinct: 'All skin wrinkling is an unavoidable consequence of getting older',
      rightAnswer: 'Only INTRINSIC (chronological) ageing is unavoidable (fine wrinkles, thinning, all skin); the MAJORITY of visible facial ageing — coarse wrinkles, laxity, dyspigmentation, solar elastosis on sun-exposed sites — is EXTRINSIC PHOTOAGING from cumulative UV and is largely PREVENTABLE with photoprotection',
      why: 'Recognising that most cosmetically significant ageing is UV-driven (not just time) reframes it as preventable and links it to skin-cancer prevention — the central public-health message.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Coarse wrinkling, laxity and solar elastosis on the face and dorsal hands are chiefly caused by:',
      options: [
        { id: 'a', text: 'Intrinsic chronological ageing alone' },
        { id: 'b', text: 'Cumulative UV exposure (photoaging), via matrix metalloproteinase-mediated collagen breakdown' },
        { id: 'c', text: 'Reduced sweat gland number' },
        { id: 'd', text: 'Vitamin D excess' },
      ],
      answerId: 'b',
      explanation: 'Photoaging from cumulative UV up-regulates matrix metalloproteinases that degrade dermal collagen and causes abnormal elastin (solar elastosis), producing coarse wrinkles, laxity and dyspigmentation on sun-exposed sites. It is largely preventable with photoprotection, unlike intrinsic (fine-wrinkle) ageing.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which ultraviolet band is most associated with direct epidermal DNA damage, sunburn and skin cancer?',
      options: [
        { id: 'a', text: 'UVA' },
        { id: 'b', text: 'UVB' },
        { id: 'c', text: 'Infrared' },
        { id: 'd', text: 'Visible light' },
      ],
      answerId: 'b',
      explanation: 'UVB ("Burning") is absorbed in the epidermis and causes pyrimidine-dimer DNA damage, sunburn and photocarcinogenesis, whereas UVA ("Aging") penetrates deeper into the dermis and drives collagen/elastin damage and tanning. Both contribute to photoaging and cancer risk.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default skinAging;
