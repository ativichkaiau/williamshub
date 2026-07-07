import type { Lecture } from '../../lib/types';

export const skinAnatomyHistology: Lecture = {
  id: 'skin-anatomy-histology',
  title: 'Skin Anatomy & Histology',
  system: 'derm',
  source: 'L2 — Skin Anatomy & Histology',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L2 Skin Anatomy' },
    { kind: 'mechanism', label: 'Epidermis, dermis & appendages' },
    { kind: 'exam', label: 'Epidermal layers; DEJ' },
  ],

  highYield: [
    'Skin has three layers: EPIDERMIS (avascular, keratinised stratified squamous epithelium), DERMIS (connective tissue with vessels, nerves, appendages), and subcutaneous HYPODERMIS (fat). The epidermis is >90% KERATINOCYTES, which mature upward through layers, plus MELANOCYTES (pigment), LANGERHANS cells (antigen presentation) and MERKEL cells (touch).',
    'Epidermal layers (deep → superficial): STRATUM BASALE (single proliferating layer on the basement membrane — stem cells, melanocytes), STRATUM SPINOSUM ("prickle" — desmosomes), STRATUM GRANULOSUM (keratohyalin granules), (stratum lucidum — only in thick palm/sole skin), and STRATUM CORNEUM (dead, flattened, anucleate corneocytes in a lipid matrix — the BARRIER). Keratinocytes take ~28 days to transit (accelerated in psoriasis).',
    'The DERMO-EPIDERMAL JUNCTION (basement membrane zone) anchors epidermis to dermis; its components are the targets of blistering diseases — HEMIDESMOSOMES/BP antigens (bullous PEMPHIGOID = subepidermal split) vs intra-epidermal DESMOGLEINS (pemphigus = intra-epidermal split). The DERMIS has papillary (superficial, loose) and reticular (deep, dense collagen/elastin) layers with vessels, nerves and sensory corpuscles.',
    'APPENDAGES (adnexa) are epidermal downgrowths into the dermis: HAIR FOLLICLES (with sebaceous glands = pilosebaceous unit; arrector pili muscle), ECCRINE sweat glands (thermoregulation, everywhere), APOCRINE glands (axilla/groin — odour), and NAILS. Melanocytes (neural-crest derived) transfer melanin in melanosomes to keratinocytes to protect DNA from UV.',
    '**The take-home: epidermis (basale→spinosum→granulosum→corneum barrier; keratinocytes + melanocytes/Langerhans/Merkel), dermo-epidermal junction (pemphigoid subepidermal vs pemphigus intra-epidermal), dermis (papillary/reticular collagen), appendages (pilosebaceous, eccrine/apocrine, nails).** This scaffolding explains lesion morphology ([[dermatologic-diagnosis-morphology]]), the barrier/thermoregulation of [[skin-physiology-thermoregulation]], and the split levels in [[vesiculobullous-diseases]].',
  ],

  mechanism: {
    title: 'Epidermis (4–5 layers, keratinocytes+melanocytes) → DEJ → dermis (papillary/reticular) → appendages',
    steps: [
      { id: 's1', label: 'Epidermis: keratinised stratified squamous (>90% keratinocytes) — avascular', emphasis: 'key' },
      { id: 's2', label: 'Layers: basale (proliferate) → spinosum → granulosum → (lucidum) → corneum (barrier)', emphasis: 'key' },
      { id: 's3', label: 'Other cells: melanocytes (pigment), Langerhans (antigen), Merkel (touch)', emphasis: 'key' },
      { id: 's4', label: 'DEJ: pemphigoid (subepidermal, hemidesmosome) vs pemphigus (intra-epidermal, desmoglein)', emphasis: 'key' },
      { id: 's5', label: 'Dermis (papillary/reticular) + appendages (pilosebaceous, eccrine/apocrine, nails)' },
    ],
  },

  examFindings: [
    { sign: 'The dead, anucleate barrier layer of the epidermis', mechanism: 'Stratum corneum', significance: 'key' },
    { sign: 'The single proliferating epidermal layer with melanocytes', mechanism: 'Stratum basale (on the basement membrane)', significance: 'key' },
    { sign: 'Subepidermal blister (tense bullae)', mechanism: 'Bullous pemphigoid (hemidesmosome/BM zone target)', significance: 'key' },
    { sign: 'Intra-epidermal blister (flaccid bullae, positive Nikolsky)', mechanism: 'Pemphigus (desmoglein target)', significance: 'key' },
    { sign: 'Extra layer present only in palms/soles', mechanism: 'Stratum lucidum (thick skin)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The epidermal cell type that produces pigment', meaning: 'Melanocyte (neural-crest derived)' },
    { clue: 'The barrier layer of the skin', meaning: 'Stratum corneum' },
    { clue: 'The junction targeted by autoimmune blistering diseases', meaning: 'The dermo-epidermal junction (basement membrane zone)' },
    { clue: 'The gland responsible for thermoregulatory sweating', meaning: 'The eccrine sweat gland' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Skin histology underpins all of dermatology: the epidermal layers and turnover explain scaling and psoriasis, melanocytes explain pigmentary disease ([[pigmentary-disorders]]), and the level of adhesion targeted (intra-epidermal desmoglein vs subepidermal hemidesmosome) distinguishes pemphigus from pemphigoid ([[vesiculobullous-diseases]]). Appendages (pilosebaceous unit) are central to acne ([[acne-vulgaris]]) and hair disease ([[hair-diseases]]); the barrier and glands drive [[skin-physiology-thermoregulation]].' },
  ],

  mnemonics: [
    { hook: 'Layers "Come Let\'s Get Sun Burnt": Corneum, Lucidum, Granulosum, Spinosum, Basale (top→bottom)', expansion: ['Corneum = barrier', 'Basale = proliferation + melanocytes'] },
    { hook: '"PemphiGus = Glue between cells (desmoglein, intra-epidermal); pemphigOid = Outer/below (hemidesmosome, subepidermal)"', expansion: ['Pemphigus = flaccid, Nikolsky+', 'Pemphigoid = tense'] },
  ],

  traps: [
    {
      questionCategory: 'Pemphigus vs pemphigoid split level',
      wrongInstinct: 'Pemphigus and pemphigoid are essentially the same blistering disease',
      rightAnswer: 'They split at DIFFERENT levels: PEMPHIGUS targets intra-epidermal DESMOGLEINS (desmosomes), giving FLACCID intra-epidermal blisters with a positive Nikolsky sign; bullous PEMPHIGOID targets the DERMO-EPIDERMAL junction (hemidesmosomes/BP antigens), giving TENSE subepidermal blisters — the level of the split (and thus clinical fragility) is opposite',
      why: 'The adhesion molecule targeted sets the blister depth and clinical behaviour (flaccid, fragile pemphigus vs tense pemphigoid), which is central to diagnosis and immunofluorescence interpretation.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The outermost epidermal layer, composed of dead anucleate cells and forming the skin\'s permeability barrier, is the:',
      options: [
        { id: 'a', text: 'Stratum basale' },
        { id: 'b', text: 'Stratum corneum' },
        { id: 'c', text: 'Stratum spinosum' },
        { id: 'd', text: 'Papillary dermis' },
      ],
      answerId: 'b',
      explanation: 'The stratum corneum is the outermost layer of flattened, anucleate corneocytes in a lipid matrix, forming the permeability/barrier function of skin. The stratum basale (deepest) is the proliferating layer containing melanocytes.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Bullous pemphigoid produces tense subepidermal blisters because the autoantibodies target:',
      options: [
        { id: 'a', text: 'Desmogleins between keratinocytes (intra-epidermal)' },
        { id: 'b', text: 'Hemidesmosomes/antigens at the dermo-epidermal junction' },
        { id: 'c', text: 'Melanocytes' },
        { id: 'd', text: 'Eccrine glands' },
      ],
      answerId: 'b',
      explanation: 'Bullous pemphigoid antibodies target hemidesmosomal antigens (BP180/BP230) at the dermo-epidermal junction, so the split is subepidermal, producing tense bullae. Pemphigus targets intra-epidermal desmogleins, giving flaccid blisters and a positive Nikolsky sign.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default skinAnatomyHistology;
