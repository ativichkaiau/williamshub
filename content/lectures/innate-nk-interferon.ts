import type { Lecture } from '../../lib/types';
import { NK_CELL } from '../../lib/figures';

export const innateNkInterferon: Lecture = {
  id: 'innate-nk-interferon',
  title: 'NK Cells, Interferons & Innate Effectors',
  system: 'immune',
  source: 'L2 — Innate Immunity',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Immunology' },
    { kind: 'lecture', label: 'L2 Innate Immunity' },
    { kind: 'mechanism', label: 'Missing-self · IFN' },
    { kind: 'exam', label: 'NK killing · ADCC' },
  ],

  highYield: [
    '**NK cells = innate lymphocytes that kill without prior sensitisation.** They integrate **activating vs inhibitory receptor** signals. **Inhibitory receptors (KIRs) sense self-MHC class I**; healthy cells display MHC I → NK inhibited. Virus-infected/tumour cells often **down-regulate MHC I → "missing self" → NK killing** (perforin/granzyme).',
    '**This is the elegant complement to CTLs:** cytotoxic T cells *need* MHC I to kill, so viruses evade them by lowering MHC I — but that same loss unleashes NK cells. Between them, infected cells cannot win by either keeping or losing MHC I.',
    '**NK cells also perform ADCC.** Their **CD16 (FcγRIII)** binds the Fc of **IgG-coated** target cells → antibody-dependent cell-mediated cytotoxicity. NK cells are activated by **IL-12/IL-15** and, once active, secrete **IFN-γ** to boost macrophages and Th1 responses.',
    '**Type I interferons (IFN-α/β)** are the key **antiviral** cytokines: made by virus-infected cells (and plasmacytoid DCs via endosomal TLRs), they induce an **antiviral state** in neighbouring cells (degrade viral RNA, block translation) and enhance MHC I + NK activity. (Distinguish from **IFN-γ = type II**, a macrophage-activating Th1/NK cytokine.)',
    '**Other innate effectors:** phagocytosis + respiratory burst, **complement** (opsonisation/lysis — see [[complement-pathways]]), inflammatory cytokines **TNF/IL-1/IL-6**, chemokines, and the **acute-phase response** (CRP, MBL). Eosinophils/mast cells handle parasites and allergy.',
  ],

  mechanism: {
    title: 'Kill "missing self", flag antiviral state',
    steps: [
      { id: 's1', label: 'NK balances activating vs inhibitory (KIR sees MHC I)', emphasis: 'key' },
      { id: 's2', label: 'MHC I lost (virus/tumour) → NK killing (perforin/granzyme)', emphasis: 'key' },
      { id: 's3', label: 'CD16 binds IgG-Fc → ADCC' },
      { id: 's4', label: 'IL-12/IL-15 activate NK → NK makes IFN-γ' },
      { id: 's5', label: 'Type I IFN (α/β) = antiviral state in neighbours', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'NK kills a cell that has lost MHC class I', mechanism: '"Missing self" removes inhibitory signal', significance: 'key' },
    { sign: 'NK kills an IgG-coated target via CD16', mechanism: 'ADCC (FcγRIII)', significance: 'key' },
    { sign: 'Type I IFN (α/β) induced by a virus', mechanism: 'Antiviral state in neighbouring cells', significance: 'key' },
    { sign: 'IFN-γ activating macrophages', mechanism: 'Type II IFN (Th1/NK) — distinct from antiviral IFN-α/β', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Innate cell that kills virus-infected cells with LOW MHC I', meaning: 'NK cell (missing-self)' },
    { clue: 'Cytokine giving cells an antiviral state', meaning: 'Type I interferon (IFN-α/β)' },
    { clue: 'Mechanism: antibody-coated target killed by an NK cell', meaning: 'ADCC via CD16 (FcγRIII)' },
    { clue: 'Cytokines that activate NK cells', meaning: 'IL-12 and IL-15' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Type I IFN is used therapeutically (hepatitis, MS); NK/ADCC underlies some monoclonal-antibody drugs (e.g. rituximab). NK "missing self" fills the gap left when viruses evade CTLs by lowering MHC I ([[antigen-processing-presentation]]).' },
  ],

  mnemonics: [
    { hook: 'NK kills "missing self" (no MHC I) — opposite of what CTLs need', expansion: ['CD16 = ADCC (IgG Fc)'] },
    { hook: 'IFN-α/β = antiviral (type I); IFN-γ = macrophage activator (type II)', expansion: ['α/β from infected cells; γ from Th1/NK'] },
  ],

  traps: [
    {
      questionCategory: 'NK cell target recognition',
      wrongInstinct: 'NK cells kill cells that display high levels of MHC class I',
      rightAnswer: 'NK cells kill cells that LOSE/down-regulate MHC I ("missing self"); MHC I on healthy cells INHIBITS them',
      why: 'This is the mirror image of CTLs (which require MHC I) — NK cells cover the viral immune-evasion escape route.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A virus down-regulates MHC class I on infected cells to evade cytotoxic T cells. Which innate cell is specifically triggered to kill these cells?',
      options: [
        { id: 'a', text: 'Neutrophil' },
        { id: 'b', text: 'NK cell' },
        { id: 'c', text: 'Plasma cell' },
        { id: 'd', text: 'Eosinophil' },
      ],
      answerId: 'b',
      explanation: 'Loss of MHC I removes the inhibitory signal to NK cells ("missing self"), triggering NK killing via perforin/granzyme — complementing CTLs, which require MHC I.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which cytokines are the principal ANTIVIRAL interferons that induce an antiviral state in neighbouring cells?',
      options: [
        { id: 'a', text: 'IFN-γ (type II)' },
        { id: 'b', text: 'Type I interferons (IFN-α and IFN-β)' },
        { id: 'c', text: 'IL-4 and IL-5' },
        { id: 'd', text: 'TGF-β' },
      ],
      answerId: 'b',
      explanation: 'Type I interferons (α/β) are produced by virus-infected cells and induce an antiviral state. IFN-γ (type II) mainly activates macrophages and is made by Th1/NK cells.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'NK cell recognition', svg: NK_CELL, caption: 'Healthy (MHC I) → NK inhibited; infected/tumour (MHC I lost) → killed; IgG-coated → ADCC via CD16.' },
  ],
};

export default innateNkInterferon;
