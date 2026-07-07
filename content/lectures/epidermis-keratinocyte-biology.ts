import type { Lecture } from '../../lib/types';

export const epidermisKeratinocyteBiology: Lecture = {
  id: 'epidermis-keratinocyte-biology',
  title: 'Epidermis & Keratinocyte Biology',
  system: 'derm',
  source: 'L2 — Skin Anatomy & Histology',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L2 Epidermis' },
    { kind: 'mechanism', label: 'Keratinisation & epidermal cells' },
    { kind: 'exam', label: 'Layers; melanocytes; turnover' },
  ],

  highYield: [
    'The epidermis is a keratinised stratified squamous epithelium renewed by KERATINOCYTES that migrate upward from the basal layer, differentiating and finally dying into the barrier. The layers (deep→superficial): STRATUM BASALE (dividing stem cells on the basement membrane), SPINOSUM (desmosome "prickle" cells), GRANULOSUM (keratohyalin + lamellar granules that extrude barrier lipids), (LUCIDUM in palms/soles), and CORNEUM (flat, dead, anucleate corneocytes in a lipid matrix).',
    'KERATINISATION (cornification) is the programmed transformation of a living basal cell into a dead corneocyte over ~28 days; it is ACCELERATED in psoriasis (→ scale, retained nuclei = parakeratosis) and disordered in the ICHTHYOSES (e.g. filaggrin/transglutaminase defects). KERATINS are the intermediate-filament proteins; mutations cause blistering (e.g. epidermolysis bullosa simplex).',
    'Non-keratinocyte epidermal cells: MELANOCYTES (neural-crest, in the basal layer) make melanin in MELANOSOMES and transfer it to keratinocytes to shield DNA from UV (one melanocyte serves ~36 keratinocytes = the "epidermal melanin unit"); LANGERHANS cells (dendritic antigen-presenting cells); and MERKEL cells (touch mechanoreceptors).',
    'Cell junctions hold it together: DESMOSOMES link keratinocytes (target of PEMPHIGUS — intra-epidermal split), HEMIDESMOSOMES anchor basal cells to the basement membrane (target of bullous PEMPHIGOID — subepidermal split), and tight junctions in the granular layer add a barrier. Loss/attack of these adhesions produces the blistering diseases.',
    '**The take-home: keratinocytes differentiate basale→spinosum→granulosum→corneum over ~28 days (keratinisation; sped up in psoriasis); melanocytes (basal, neural-crest) transfer melanin to protect DNA; desmosomes (pemphigus) vs hemidesmosomes (pemphigoid) set the blister level.** The dermis/appendages are in [[dermis-appendages-glands]]; the overview is [[skin-anatomy-histology]]; blistering diseases in [[vesiculobullous-diseases]].',
  ],

  mechanism: {
    title: 'Keratinocytes differentiate basale→corneum (~28d keratinisation); melanocytes transfer melanin; desmosome (pemphigus) vs hemidesmosome (pemphigoid)',
    steps: [
      { id: 's1', label: 'Layers: basale (stem) → spinosum → granulosum → (lucidum) → corneum (barrier)', emphasis: 'key' },
      { id: 's2', label: 'Keratinisation ~28 days; accelerated in psoriasis (parakeratosis)', emphasis: 'key' },
      { id: 's3', label: 'Melanocytes (basal, neural-crest) → melanin in melanosomes → keratinocytes (UV shield)', emphasis: 'key' },
      { id: 's4', label: 'Langerhans (antigen), Merkel (touch) cells', emphasis: 'key' },
      { id: 's5', label: 'Desmosomes (pemphigus, intra-epidermal) vs hemidesmosomes (pemphigoid, subepidermal)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Retained nuclei in the stratum corneum (parakeratosis)', mechanism: 'Accelerated keratinocyte turnover (psoriasis)', significance: 'key' },
    { sign: 'The proliferating basal layer on the basement membrane', mechanism: 'Stratum basale (epidermal stem cells)', significance: 'key' },
    { sign: 'Melanin transferred from one cell to ~36 keratinocytes', mechanism: 'Epidermal melanin unit (melanocyte)', significance: 'supportive' },
    { sign: 'Intra-epidermal blister from loss of keratinocyte adhesion', mechanism: 'Desmosome target (pemphigus)', significance: 'key' },
    { sign: 'Generalised scaling from disordered cornification', mechanism: 'Ichthyosis (e.g. filaggrin defect)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The proliferating epidermal layer', meaning: 'Stratum basale' },
    { clue: 'The approximate epidermal turnover time', meaning: '~28 days (accelerated in psoriasis)' },
    { clue: 'The cell that makes and transfers melanin', meaning: 'The melanocyte (neural-crest, basal layer)' },
    { clue: 'The junctions targeted in pemphigus vs pemphigoid', meaning: 'Desmosomes (pemphigus) vs hemidesmosomes (pemphigoid)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Keratinocyte biology explains scaling disorders (psoriasis = accelerated turnover; ichthyosis = disordered cornification), the melanocyte\'s UV-protective role (pigmentary disease and skin cancer), and the adhesion targets that define autoimmune blistering (desmosome/pemphigus vs hemidesmosome/pemphigoid — [[vesiculobullous-diseases]]). It complements the dermis/appendages of [[dermis-appendages-glands]] within the overview [[skin-anatomy-histology]].' },
  ],

  mnemonics: [
    { hook: 'Layers "Come Let\'s Get Sun Burnt" (Corneum, Lucidum, Granulosum, Spinosum, Basale)', expansion: ['Turnover ~28 days', 'Psoriasis = faster + parakeratosis'] },
    { hook: '"Melanocyte serves ~36 keratinocytes (melanin unit) → UV/DNA shield"', expansion: ['Desmosome = pemphigus', 'Hemidesmosome = pemphigoid'] },
  ],

  traps: [
    {
      questionCategory: 'Where melanin ends up',
      wrongInstinct: 'Skin colour comes from melanin stored inside melanocytes',
      rightAnswer: 'Melanocytes SYNTHESISE melanin (in melanosomes) but TRANSFER it to surrounding KERATINOCYTES, where it forms a supranuclear "cap" shielding keratinocyte DNA from UV — so most epidermal pigment resides in keratinocytes, not melanocytes; skin-colour differences reflect melanin amount/type and distribution, not melanocyte number',
      why: 'Understanding melanin transfer explains why pigment protects keratinocyte DNA (and why melanocyte number is similar across skin colours), underpinning pigmentary disorders and photoprotection.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The epidermal layer responsible for ongoing renewal, containing dividing stem cells on the basement membrane, is the:',
      options: [
        { id: 'a', text: 'Stratum corneum' },
        { id: 'b', text: 'Stratum basale' },
        { id: 'c', text: 'Stratum granulosum' },
        { id: 'd', text: 'Stratum lucidum' },
      ],
      answerId: 'b',
      explanation: 'The stratum basale (basal layer) sits on the basement membrane and contains the dividing keratinocyte stem cells and melanocytes; daughter cells migrate upward, differentiating through the spinosum and granulosum into the dead corneocytes of the stratum corneum over roughly 28 days.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Melanocytes protect the skin from ultraviolet damage by:',
      options: [
        { id: 'a', text: 'Storing all melanin within themselves' },
        { id: 'b', text: 'Transferring melanin to keratinocytes, where it caps and shields the nucleus' },
        { id: 'c', text: 'Thickening the stratum corneum' },
        { id: 'd', text: 'Producing keratin' },
      ],
      answerId: 'b',
      explanation: 'Melanocytes make melanin in melanosomes and transfer it to neighbouring keratinocytes, where it forms a supranuclear cap that absorbs UV and protects keratinocyte DNA. One melanocyte supplies about 36 keratinocytes (the epidermal melanin unit).',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default epidermisKeratinocyteBiology;
