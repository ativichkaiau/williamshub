import type { Lecture } from '../../lib/types';

export const skinBarrierFunction: Lecture = {
  id: 'skin-barrier-function',
  title: 'The Skin Barrier',
  system: 'derm',
  source: 'L5 — Physiology of Skin & Thermoregulation',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L5 Skin Barrier' },
    { kind: 'mechanism', label: 'Brick-and-mortar; filaggrin' },
    { kind: 'exam', label: 'TEWL; barrier repair' },
  ],

  highYield: [
    '**The permeability barrier is the STRATUM CORNEUM, built like "BRICKS AND MORTAR": corneocytes (bricks, rich in keratin and the breakdown products of FILAGGRIN) embedded in intercellular LIPID lamellae (mortar — ceramides, cholesterol, free fatty acids from lamellar bodies). This limits water loss (TRANSEPIDERMAL WATER LOSS, TEWL) and keeps out microbes, allergens and irritants.**',
    '**FILAGGRIN aggregates keratin filaments and its breakdown yields NATURAL MOISTURISING FACTOR (hygroscopic amino acids that retain water); loss-of-function FILAGGRIN mutations cause a defective, dry barrier → ICHTHYOSIS VULGARIS and predispose to ATOPIC DERMATITIS (and the atopic march). An intact acid mantle (low pH) supports barrier enzymes and antimicrobial defence.**',
    '**A DEFECTIVE barrier raises TEWL (dry skin) and lets in allergens/microbes → itch, eczema, sensitisation and infection. This is why EMOLLIENTS (occlusives + humectants + lipids) are the FOUNDATION of eczema care — they repair the barrier, reduce water loss and reduce flares/steroid need.** Harsh soaps, over-washing, low humidity and irritants damage the barrier.',
    '**Beyond permeability, the skin barrier is also MICROBIAL (commensal microbiome + antimicrobial peptides), IMMUNOLOGICAL ([[skin-immune-system-cells]]), and protective against UV (melanin) and mechanical stress. Barrier physiology underlies both disease (eczema, ichthyosis, infection) and drug delivery (transdermal absorption depends on breaching the stratum corneum).**',
    '**The take-home: the barrier = stratum corneum "bricks (corneocytes/filaggrin) and mortar (ceramide lipids)"; FILAGGRIN loss → dry, leaky barrier → ichthyosis vulgaris + atopic dermatitis; a defective barrier ↑TEWL and lets in allergens/microbes → EMOLLIENTS are foundational to repair it.** The broader physiology/thermoregulation is in [[skin-physiology-thermoregulation]]; eczema in [[eczema-dermatitis]] and [[atopic-dermatitis-clinical]].',
  ],

  mechanism: {
    title: 'Stratum corneum barrier = corneocytes/filaggrin (bricks) + ceramide lipids (mortar); filaggrin loss → leaky/dry → atopic dermatitis; emollients repair',
    steps: [
      { id: 's1', label: 'Barrier = stratum corneum "brick (corneocyte/filaggrin) + mortar (ceramide/cholesterol/FFA)"', emphasis: 'key' },
      { id: 's2', label: 'Filaggrin → natural moisturising factor (retains water); low-pH acid mantle', emphasis: 'key' },
      { id: 's3', label: 'Filaggrin loss-of-function → ichthyosis vulgaris + atopic dermatitis (barrier defect)', emphasis: 'key' },
      { id: 's4', label: 'Defective barrier → ↑TEWL (dry) + allergen/microbe entry → itch/eczema/sensitisation', emphasis: 'danger' },
      { id: 's5', label: 'Emollients (occlusive+humectant+lipid) repair the barrier — foundation of eczema care' },
    ],
  },

  examFindings: [
    { sign: 'Dry skin with increased transepidermal water loss', mechanism: 'Barrier (stratum corneum) dysfunction', significance: 'key' },
    { sign: 'Ichthyosis vulgaris and atopic dermatitis in the same patient', mechanism: 'Filaggrin loss-of-function mutation', significance: 'key' },
    { sign: 'Reduced eczema flares/steroid need with regular emollients', mechanism: 'Barrier repair (occlusive/humectant/lipids)', significance: 'key' },
    { sign: 'Worsening dryness with harsh soaps and over-washing', mechanism: 'Barrier/lipid disruption', significance: 'supportive' },
    { sign: 'Transdermal drug absorption through the skin', mechanism: 'Crossing the stratum-corneum barrier', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The "bricks and mortar" of the barrier', meaning: 'Corneocytes (bricks) in ceramide-rich lipid lamellae (mortar)' },
    { clue: 'The protein whose loss causes a defective barrier + atopic dermatitis', meaning: 'Filaggrin' },
    { clue: 'The measure of barrier permeability', meaning: 'Transepidermal water loss (TEWL)' },
    { clue: 'The foundation treatment for barrier repair in eczema', meaning: 'Emollients/moisturisers' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Barrier physiology is the basis of eczema care: filaggrin-related barrier defects raise water loss and admit allergens/microbes, so liberal emollients (barrier repair) are the foundation of atopic dermatitis management, reducing flares and steroid requirement ([[eczema-dermatitis]], [[atopic-dermatitis-clinical]]). It also governs transdermal drug delivery and links to skin immunity ([[skin-immune-system-cells]]) within the physiology of [[skin-physiology-thermoregulation]].' },
  ],

  mnemonics: [
    { hook: 'Barrier = "bricks (corneocytes/filaggrin) + mortar (ceramide lipids)"', expansion: ['Filaggrin loss → dry + atopic', 'TEWL = leakiness'] },
    { hook: '"Leaky barrier → itch + allergens in → eczema; emollients repair (foundation)"', expansion: ['Avoid harsh soaps', 'Natural moisturising factor from filaggrin'] },
  ],

  traps: [
    {
      questionCategory: 'Barrier defect as cause vs consequence in eczema',
      wrongInstinct: 'Dry, cracked skin in eczema is only a result of the inflammation, so treating inflammation alone is enough',
      rightAnswer: 'A BARRIER DEFECT (e.g. filaggrin loss) is a PRIMARY driver of atopic dermatitis — the leaky barrier lets in allergens/microbes that trigger inflammation and itch — so EMOLLIENT-based barrier repair is FOUNDATIONAL, used continuously alongside anti-inflammatory therapy (not just steroids for flares); ignoring the barrier leads to relapse',
      why: 'Because the barrier defect both causes and perpetuates eczema, continuous emollient use (not just treating inflammation during flares) is essential to control disease and reduce steroid need.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Loss-of-function mutations in which protein impair the skin barrier and predispose to ichthyosis vulgaris and atopic dermatitis?',
      options: [
        { id: 'a', text: 'Collagen VII' },
        { id: 'b', text: 'Filaggrin' },
        { id: 'c', text: 'Desmoglein 3' },
        { id: 'd', text: 'Keratin 5' },
      ],
      answerId: 'b',
      explanation: 'Filaggrin aggregates keratin and yields natural moisturising factor; loss-of-function mutations produce a dry, defective barrier causing ichthyosis vulgaris and strongly predisposing to atopic dermatitis (and the atopic march). Emollient barrier repair is foundational.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The permeability barrier of the skin is provided mainly by:',
      options: [
        { id: 'a', text: 'The dermis' },
        { id: 'b', text: 'The stratum corneum (corneocytes in intercellular lipid lamellae)' },
        { id: 'c', text: 'The basal layer' },
        { id: 'd', text: 'Melanocytes' },
      ],
      answerId: 'b',
      explanation: 'The stratum corneum forms the permeability barrier as a "brick and mortar" structure — corneocytes (bricks) embedded in ceramide-rich intercellular lipid lamellae (mortar) — limiting transepidermal water loss and excluding microbes/allergens.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default skinBarrierFunction;
