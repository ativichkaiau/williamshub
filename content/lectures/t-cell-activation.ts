import type { Lecture } from '../../lib/types';
import { T_CELL_ACTIVATION } from '../../lib/figures';

export const tCellActivation: Lecture = {
  id: 't-cell-activation',
  title: 'T-Cell Activation: The Two-Signal Rule',
  system: 'immune',
  source: 'L5 — Cell-Mediated Immunity',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Immunology' },
    { kind: 'lecture', label: 'L5 Cell-Mediated Immunity' },
    { kind: 'mechanism', label: 'Two signals + IL-2' },
    { kind: 'exam', label: 'Co-stimulation/anergy' },
  ],

  highYield: [
    '**A naïve T cell needs TWO signals to activate** (a safeguard against autoreactivity). **Signal 1 = antigen-specific:** the **TCR (with CD3)** recognises a **peptide presented on MHC** by an antigen-presenting cell (**CD4 with MHC II, CD8 with MHC I**).',
    '**Signal 2 = co-stimulation:** **CD28 on the T cell binds B7 (CD80/CD86)** on the APC. Only "licensed," mature APCs (activated via innate PRRs) express B7 — linking a genuine infection to T-cell activation.',
    '**Signal 1 without Signal 2 → anergy** (functional unresponsiveness) or tolerance — a key peripheral-tolerance mechanism preventing autoimmunity.',
    '**Signal 3 = cytokines** (notably **IL-2**, made by the activated T cell itself) drive **clonal proliferation and differentiation** into effector and memory cells. The cytokine milieu also steers CD4 cells into subsets (see [[cd4-helper-subsets]]).',
    '**Inhibitory checkpoints turn responses off.** **CTLA-4** (competes with CD28 for B7, higher affinity) and **PD-1** dampen T cells to prevent over-activation. **Checkpoint-inhibitor drugs** (anti-CTLA-4, anti-PD-1) release this brake to boost anti-tumour immunity.',
  ],

  mechanism: {
    title: 'Antigen + co-stimulation → proliferate',
    steps: [
      { id: 's1', label: 'Signal 1: TCR/CD3 sees peptide-MHC (CD4→II, CD8→I)', emphasis: 'key' },
      { id: 's2', label: 'Signal 2: CD28 binds B7 (co-stimulation)', emphasis: 'key' },
      { id: 's3', label: 'Signal 1 alone → ANERGY (tolerance)', emphasis: 'danger' },
      { id: 's4', label: 'Signal 3: IL-2 → clonal expansion + differentiation' },
      { id: 's5', label: 'Checkpoints CTLA-4 / PD-1 shut it down' },
    ],
  },

  examFindings: [
    { sign: 'CD28–B7 engagement', mechanism: 'Co-stimulation (signal 2) — required for full activation', significance: 'key' },
    { sign: 'IL-2 autocrine loop', mechanism: 'Drives T-cell clonal proliferation', significance: 'key' },
    { sign: 'TCR signal without co-stimulation', mechanism: 'Anergy (peripheral tolerance)', significance: 'key' },
    { sign: 'CTLA-4/PD-1 engagement', mechanism: 'Inhibitory checkpoint — dampens the response', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Molecule providing T-cell co-stimulation from the APC', meaning: 'B7 (CD80/CD86) → CD28' },
    { clue: 'Cytokine driving T-cell clonal expansion', meaning: 'IL-2' },
    { clue: 'Outcome of antigen recognition without co-stimulation', meaning: 'Anergy' },
    { clue: 'Target of anti-PD-1 cancer immunotherapy', meaning: 'The PD-1 inhibitory checkpoint' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Co-stimulation blockade (abatacept = CTLA-4-Ig) treats autoimmunity; checkpoint inhibitors (anti-PD-1/CTLA-4) transformed oncology. The two-signal rule is peripheral tolerance in action ([[t-cell-development-thymic-selection]]). Where antigen is presented: [[antigen-processing-presentation]].' },
  ],

  mnemonics: [
    { hook: 'Two signals: "Signal 1 = TCR sees MHC; Signal 2 = CD28-B7"', expansion: ['No signal 2 → anergy'] },
    { hook: 'IL-2 = "I Love 2 proliferate"', expansion: ['Autocrine T-cell growth factor'] },
  ],

  traps: [
    {
      questionCategory: 'Consequence of signal 1 alone',
      wrongInstinct: 'A T cell that recognises antigen (signal 1) is always fully activated',
      rightAnswer: 'Antigen recognition WITHOUT co-stimulation (signal 2) → anergy/tolerance, not activation',
      why: 'The two-signal requirement prevents activation against self-antigens presented in the absence of "danger"/co-stimulation.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Full activation of a naïve T cell requires TCR–peptide-MHC engagement plus a second signal delivered by:',
      options: [
        { id: 'a', text: 'CD28 binding B7 (CD80/CD86)' },
        { id: 'b', text: 'CD8 binding MHC I' },
        { id: 'c', text: 'IgM binding antigen' },
        { id: 'd', text: 'CTLA-4 binding B7' },
      ],
      answerId: 'a',
      explanation: 'Co-stimulation via CD28–B7 is signal 2. CTLA-4 binding B7 is inhibitory (a checkpoint), and CD8–MHC I is part of signal 1 for cytotoxic T cells.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A T cell receives antigen recognition (signal 1) but no co-stimulation. The likely outcome is:',
      options: [
        { id: 'a', text: 'Robust clonal expansion' },
        { id: 'b', text: 'Anergy (functional unresponsiveness)' },
        { id: 'c', text: 'Differentiation into a cytotoxic T cell' },
        { id: 'd', text: 'Antibody secretion' },
      ],
      answerId: 'b',
      explanation: 'Signal 1 without signal 2 induces anergy — a peripheral-tolerance mechanism that prevents responses to self-antigens presented without co-stimulation.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Two-signal T-cell activation', svg: T_CELL_ACTIVATION, caption: 'Signal 1 (TCR–peptide-MHC) + signal 2 (CD28–B7) + signal 3 (IL-2). Signal 1 alone → anergy; CTLA-4/PD-1 = brakes.' },
  ],
};

export default tCellActivation;
