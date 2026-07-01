import type { Lecture } from '../../lib/types';
import { INNATE_ADAPTIVE } from '../../lib/figures';

export const immuneSystemOverviewCells: Lecture = {
  id: 'immune-system-overview-cells',
  title: 'Overview: Innate vs Adaptive Immunity & Immune Cells',
  system: 'immune',
  source: 'L1 — Cells & Tissues of the Immune System',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Immunology' },
    { kind: 'lecture', label: 'L1 Cells & Tissues' },
    { kind: 'mechanism', label: 'Two arms of immunity' },
    { kind: 'exam', label: 'Cell ↔ marker/function' },
  ],

  highYield: [
    '**Two arms of immunity.** **Innate** = immediate (minutes–hours), **non-specific, germline-encoded, NO memory** — barriers, phagocytes, complement, NK cells; recognises broad microbial patterns. **Adaptive** = slower (days), **highly specific, clonal, and remembers** (faster/stronger on re-exposure) — B and T lymphocytes.',
    '**Myeloid cells (mostly innate).** **Neutrophils** = first responders, phagocytic (pus). **Monocytes → macrophages** = phagocytose, present antigen, secrete cytokines. **Dendritic cells** = the professional **antigen-presenting cell** that bridges innate → adaptive. **Mast cells/basophils/eosinophils** = allergy and antiparasitic defence.',
    '**Lymphoid cells (adaptive + NK).** **T cells** (thymus-derived, marker **CD3**): **CD4⁺ helper** (secrete cytokines, coordinate), **CD8⁺ cytotoxic** (kill infected cells), **regulatory T (CD4⁺CD25⁺FoxP3⁺)** (suppress/self-tolerance). **B cells** (CD19/20) → **plasma cells** → antibodies. **NK cells** (CD16/56) are innate lymphocytes.',
    '**The dendritic cell is the key bridge:** it captures antigen in tissues, matures, migrates to lymph nodes, and **presents antigen on MHC to naïve T cells** — linking the fast innate response to the specific adaptive one.',
    '**Humoral vs cell-mediated.** **Humoral immunity** = **B cells/antibodies** (against extracellular microbes/toxins). **Cell-mediated immunity** = **T cells** (against intracellular microbes and for helping other cells). Both require antigen and generate memory.',
  ],

  mechanism: {
    title: 'Fast generic defence → slow specific memory',
    steps: [
      { id: 's1', label: 'Innate: immediate, pattern-based, no memory', emphasis: 'key' },
      { id: 's2', label: 'Myeloid: neutrophil, macrophage, dendritic, mast/eos/baso' },
      { id: 's3', label: 'Dendritic cell presents antigen → bridges to adaptive', emphasis: 'key' },
      { id: 's4', label: 'Adaptive: B (antibody/humoral) + T (cell-mediated)', emphasis: 'key' },
      { id: 's5', label: 'T subsets: CD4 helper, CD8 cytotoxic, Treg' },
    ],
  },

  examFindings: [
    { sign: 'CD3 on a lymphocyte', mechanism: 'Pan-T-cell marker', significance: 'key' },
    { sign: 'CD4⁺CD25⁺FoxP3⁺ T cell', mechanism: 'Regulatory T cell (self-tolerance)', significance: 'key' },
    { sign: 'First cell to arrive at acute bacterial infection', mechanism: 'Neutrophil', significance: 'supportive' },
    { sign: 'Most potent antigen-presenting cell', mechanism: 'Dendritic cell (bridges innate→adaptive)', significance: 'key' },
    { sign: 'Immunological memory present', mechanism: 'Adaptive (lymphocyte) response, not innate', significance: 'key' },
  ],

  investigations: [
    { clue: 'Immediate, non-specific defence with no memory', meaning: 'Innate immunity' },
    { clue: 'Cell that kills virally infected cells directly (CD8⁺)', meaning: 'Cytotoxic T cell' },
    { clue: 'Innate lymphocyte killing cells that lose MHC I', meaning: 'NK cell' },
    { clue: 'Cell producing antibodies', meaning: 'Plasma cell (from B lymphocyte)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'This map frames every later topic: which cell/arm fails determines the infection pattern ([[primary-immunodeficiency-antibody-t]] logic), and where antigen is presented determines the T-cell response. Organ locations: [[lymphoid-organs]].' },
  ],

  mnemonics: [
    { hook: 'Innate = "Immediate, Identical, no memory"; Adaptive = "delayed, specific, remembers"', expansion: ['Dendritic cell bridges the two'] },
    { hook: 'MHC×CD = 8: CD8 kills (cytotoxic), CD4 helps', expansion: ['Treg = CD4⁺CD25⁺FoxP3⁺'] },
  ],

  traps: [
    {
      questionCategory: 'Which arm has memory?',
      wrongInstinct: 'Innate immunity develops memory after repeated exposure',
      rightAnswer: 'Only ADAPTIVE immunity (lymphocytes) has classical memory; innate responds identically each time',
      why: 'Memory = faster/stronger secondary response, a defining feature of B/T lymphocytes, not neutrophils/macrophages.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which cell is the principal "bridge" that links the innate and adaptive immune responses by presenting antigen to naïve T cells?',
      options: [
        { id: 'a', text: 'Neutrophil' },
        { id: 'b', text: 'Dendritic cell' },
        { id: 'c', text: 'Plasma cell' },
        { id: 'd', text: 'NK cell' },
      ],
      answerId: 'b',
      explanation: 'Dendritic cells capture antigen, mature, migrate to lymph nodes, and present it on MHC to naïve T cells — bridging innate and adaptive immunity. They are the most potent antigen-presenting cells.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The surface phenotype CD4⁺CD25⁺FoxP3⁺ identifies which cell?',
      options: [
        { id: 'a', text: 'Cytotoxic T cell' },
        { id: 'b', text: 'Regulatory T cell' },
        { id: 'c', text: 'B cell' },
        { id: 'd', text: 'NK cell' },
      ],
      answerId: 'b',
      explanation: 'Regulatory T cells are CD4⁺CD25⁺ and express the master transcription factor FoxP3; they suppress immune responses and maintain self-tolerance.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Innate vs adaptive immunity', svg: INNATE_ADAPTIVE, caption: 'Innate = fast, non-specific, no memory (myeloid cells, complement, NK). Adaptive = specific, memory (B antibodies + T cells). Dendritic cell bridges them.' },
  ],
};

export default immuneSystemOverviewCells;
