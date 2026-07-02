import type { Lecture } from '../../lib/types';

export const skinImmuneSystemCells: Lecture = {
  id: 'skin-immune-system-cells',
  title: 'The Skin Immune System',
  system: 'derm',
  source: 'L4 — Cutaneous Immunology & Hypersensitivity',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Skin' },
    { kind: 'lecture', label: 'L4 Skin Immunity' },
    { kind: 'mechanism', label: 'Innate & adaptive cutaneous immunity' },
    { kind: 'exam', label: 'Langerhans cells; AMPs; SALT' },
  ],

  highYield: [
    '**The skin is a front-line immune organ ("skin-associated lymphoid tissue", SALT) combining a physical/chemical BARRIER with innate and adaptive immunity. INNATE defence: the stratum corneum barrier + acidic "acid mantle" + ANTIMICROBIAL PEPTIDES (defensins, cathelicidin), and pattern-recognition (Toll-like receptors) on keratinocytes that trigger cytokine release on danger.**',
    '**KERATINOCYTES are active immune participants — they sense pathogens and secrete cytokines (IL-1, TNF, chemokines) that recruit and instruct immune cells. LANGERHANS cells are the epidermal DENDRITIC (antigen-presenting) cells: they capture antigen, migrate to lymph nodes and prime T cells — central to allergic contact dermatitis and immune surveillance.**',
    '**Adaptive immunity: skin-resident and recruited T CELLS (including tissue-resident memory T cells) drive many inflammatory dermatoses — Th1/Th17 in psoriasis, Th2 in atopic dermatitis — which is why targeted BIOLOGICS (anti-TNF, anti-IL-17/23, anti-IL-4/13 dupilumab) work. Mast cells (urticaria), macrophages and the cutaneous vasculature complete the system.**',
    '**When these mechanisms MALFUNCTION they cause disease: barrier failure → infection/eczema; dysregulated T-cell responses → psoriasis/eczema; autoantibodies → blistering; hypersensitivity → contact dermatitis/drug reactions ([[cutaneous-hypersensitivity-reactions]]). The same cells are exploited therapeutically (topical immunomodulators, biologics).**',
    '**The take-home: skin immunity (SALT) = BARRIER + antimicrobial peptides + Toll-like receptors (innate) and KERATINOCYTE cytokines + LANGERHANS antigen presentation + T cells/mast cells (adaptive); Th17 → psoriasis, Th2 → atopic dermatitis (targets of biologics).** The hypersensitivity reactions are in [[cutaneous-hypersensitivity-reactions]]; the barrier in [[skin-barrier-function]]; the overview is [[cutaneous-immunology-hypersensitivity]].',
  ],

  mechanism: {
    title: 'SALT = barrier + AMPs + TLRs (innate) + keratinocyte cytokines + Langerhans antigen presentation + T cells (adaptive); Th17 psoriasis, Th2 eczema',
    steps: [
      { id: 's1', label: 'Innate: barrier + acid mantle + antimicrobial peptides + Toll-like receptors', emphasis: 'key' },
      { id: 's2', label: 'Keratinocytes secrete cytokines (IL-1/TNF/chemokines) — active immune cells', emphasis: 'key' },
      { id: 's3', label: 'Langerhans cells = epidermal dendritic antigen-presenting cells → prime T cells', emphasis: 'key' },
      { id: 's4', label: 'T cells drive dermatoses: Th17 (psoriasis), Th2 (atopic dermatitis)', emphasis: 'key' },
      { id: 's5', label: 'Dysregulation → eczema/psoriasis/blistering; targets of biologics' },
    ],
  },

  examFindings: [
    { sign: 'The epidermal antigen-presenting dendritic cell', mechanism: 'Langerhans cell', significance: 'key' },
    { sign: 'Keratinocytes releasing cytokines in response to a pathogen', mechanism: 'Innate immune sensing (TLRs)', significance: 'key' },
    { sign: 'Th17-driven inflammation responsive to anti-IL-17/23', mechanism: 'Psoriasis immunopathology', significance: 'key' },
    { sign: 'Th2-driven inflammation responsive to dupilumab (anti-IL-4/13)', mechanism: 'Atopic dermatitis immunopathology', significance: 'key' },
    { sign: 'Antimicrobial peptides limiting skin infection', mechanism: 'Innate cutaneous defence (defensins/cathelicidin)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The epidermal antigen-presenting cell', meaning: 'The Langerhans cell' },
    { clue: 'The innate antimicrobial molecules of skin', meaning: 'Antimicrobial peptides (defensins, cathelicidin)' },
    { clue: 'The T-helper subset dominant in psoriasis', meaning: 'Th17 (also Th1)' },
    { clue: 'The T-helper subset dominant in atopic dermatitis', meaning: 'Th2' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Understanding cutaneous immunity explains both defence and disease: barrier + antimicrobial peptides + Langerhans/T-cell responses protect the skin, but their dysregulation causes psoriasis (Th17), atopic dermatitis (Th2), contact dermatitis and blistering — and defines the targets of modern biologics (anti-TNF, anti-IL-17/23, dupilumab). The hypersensitivity mechanisms are in [[cutaneous-hypersensitivity-reactions]]; the barrier in [[skin-barrier-function]] and [[eczema-dermatitis]]; overview [[cutaneous-immunology-hypersensitivity]].' },
  ],

  mnemonics: [
    { hook: '"Skin immunity = Barrier + AMPs (innate) + Langerhans + T cells (adaptive)"', expansion: ['Keratinocytes = active immune cells', 'Langerhans = antigen presentation'] },
    { hook: '"Th17 → psoriasis; Th2 → atopic dermatitis (dupilumab)"', expansion: ['Biologics target cytokines', 'Barrier failure → eczema/infection'] },
  ],

  traps: [
    {
      questionCategory: 'Keratinocytes as immune cells',
      wrongInstinct: 'Keratinocytes are just passive structural/barrier cells with no immune role',
      rightAnswer: 'Keratinocytes are ACTIVE participants in cutaneous immunity — they express pattern-recognition receptors (Toll-like receptors), sense danger, and secrete CYTOKINES (IL-1, TNF, chemokines) and antimicrobial peptides that recruit and instruct immune cells, initiating and amplifying inflammatory responses (as in psoriasis)',
      why: 'Recognising keratinocytes as immune effectors (not just bricks) explains how skin initiates inflammation and why cytokine-targeted biologics are effective.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The principal antigen-presenting (dendritic) cell of the epidermis, central to sensitisation in allergic contact dermatitis, is the:',
      options: [
        { id: 'a', text: 'Merkel cell' },
        { id: 'b', text: 'Langerhans cell' },
        { id: 'c', text: 'Melanocyte' },
        { id: 'd', text: 'Mast cell' },
      ],
      answerId: 'b',
      explanation: 'Langerhans cells are the epidermal dendritic antigen-presenting cells; they capture antigen and migrate to lymph nodes to prime T cells, a key step in allergic contact dermatitis (Type IV) and immune surveillance.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Psoriasis is predominantly driven by which T-helper pathway, targeted by modern biologics?',
      options: [
        { id: 'a', text: 'Th2 (IL-4/13)' },
        { id: 'b', text: 'Th17 (IL-17/23)' },
        { id: 'c', text: 'Treg' },
        { id: 'd', text: 'None — it is purely genetic' },
      ],
      answerId: 'b',
      explanation: 'Psoriasis is driven largely by the Th17 (IL-17/IL-23) axis (with Th1), which is why anti-IL-17 and anti-IL-23 biologics are effective. Atopic dermatitis is Th2-driven (IL-4/IL-13), targeted by dupilumab.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default skinImmuneSystemCells;
