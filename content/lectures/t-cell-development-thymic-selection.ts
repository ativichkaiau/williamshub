import type { Lecture } from '../../lib/types';
import { THYMIC_SELECTION } from '../../lib/figures';

export const tCellDevelopmentThymicSelection: Lecture = {
  id: 't-cell-development-thymic-selection',
  title: 'T-Cell Development & Thymic Selection',
  system: 'immune',
  source: 'L7 — Lymphocyte Development',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Immunology' },
    { kind: 'lecture', label: 'L7 Lymphocyte Development' },
    { kind: 'mechanism', label: 'Positive/negative selection' },
    { kind: 'exam', label: 'Thymic checkpoints · AIRE' },
  ],

  highYield: [
    '**T cells mature in the thymus.** Marrow-derived progenitors enter as **double-negative (CD4⁻CD8⁻)** thymocytes, rearrange the **TCR (V(D)J, RAG)**, become **double-positive (CD4⁺CD8⁺)**, and finish as **single-positive (CD4⁺ or CD8⁺)** cells that exit to the periphery.',
    '**Positive selection (thymic CORTEX):** thymocytes whose TCR can **weakly bind self-MHC** receive a survival signal; those that cannot bind die by **neglect**. This ensures the T-cell repertoire is **MHC-restricted** (useful) and commits cells to CD4 (if MHC II) or CD8 (if MHC I).',
    '**Negative selection (thymic MEDULLA):** thymocytes whose TCR binds **self-peptide too strongly** are **deleted by apoptosis** → **central tolerance**. **AIRE** (autoimmune regulator) drives medullary epithelial cells to express tissue-specific self-antigens for this test; **AIRE mutation → APECED/APS-1** autoimmunity.',
    '**Two-step rule:** keep cells that recognise self-**MHC** (positive), delete cells that react to self-**peptide** (negative). Only ~2% survive both. Some strongly self-reactive CD4 cells become **regulatory T cells** instead of being deleted.',
    '**Peripheral tolerance** backs up thymic selection for escapees: **anergy** (antigen without co-stimulation), **Treg suppression**, and **deletion**. Failure of central or peripheral T-cell tolerance underlies **T-cell-mediated autoimmunity**.',
  ],

  mechanism: {
    title: 'DN → DP → SP, filtered by two selections',
    steps: [
      { id: 's1', label: 'DN (CD4⁻8⁻) → DP (CD4⁺8⁺) → SP (CD4⁺ or CD8⁺)', emphasis: 'key' },
      { id: 's2', label: 'Positive selection (cortex): bind self-MHC weakly → survive', emphasis: 'key' },
      { id: 's3', label: 'No MHC binding → death by neglect' },
      { id: 's4', label: 'Negative selection (medulla): strong self-reactive → deleted (AIRE)', emphasis: 'key' },
      { id: 's5', label: 'Escapees → peripheral tolerance (anergy, Treg, deletion)' },
    ],
  },

  examFindings: [
    { sign: 'Thymocyte survives by binding self-MHC (cortex)', mechanism: 'Positive selection → MHC restriction', significance: 'key' },
    { sign: 'Thymocyte deleted for strong self-antigen reactivity (medulla)', mechanism: 'Negative selection → central tolerance', significance: 'key' },
    { sign: 'AIRE driving tissue-antigen expression in the thymus', mechanism: 'Enables negative selection to tissue-specific self', significance: 'key' },
    { sign: 'Multi-organ autoimmunity (APECED)', mechanism: 'AIRE mutation → failed negative selection', significance: 'supportive' },
    { sign: 'Absent thymus → very low T cells', mechanism: 'DiGeorge (22q11) — no site for T-cell maturation', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Selection ensuring TCRs recognise self-MHC', meaning: 'Positive selection (cortex)' },
    { clue: 'Selection deleting strongly self-reactive T cells', meaning: 'Negative selection (medulla)' },
    { clue: 'Gene enabling thymic display of tissue-specific antigens', meaning: 'AIRE' },
    { clue: 'Backup tolerance for self-reactive T cells in the periphery', meaning: 'Anergy, Treg suppression, deletion' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Thymic selection defines self vs non-self; its failure causes autoimmunity (AIRE→APECED, weak selection→autoreactivity). Thymic aplasia = DiGeorge ([[primary-immunodeficiency-antibody-t]]). Peripheral two-signal tolerance: [[t-cell-activation]]; B-cell counterpart: [[b-cell-development-tolerance]].' },
  ],

  mnemonics: [
    { hook: 'Positive = "can I see self-MHC?" (cortex, keep); Negative = "do I attack self?" (medulla, delete)', expansion: ['Positive = MHC, negative = peptide'] },
    { hook: 'AIRE lets the thymus "air out" tissue antigens for deletion', expansion: ['AIRE loss → APECED'] },
  ],

  traps: [
    {
      questionCategory: 'Positive vs negative selection',
      wrongInstinct: 'Positive selection deletes self-reactive T cells',
      rightAnswer: 'POSITIVE selection KEEPS cells that recognise self-MHC (cortex); NEGATIVE selection DELETES strongly self-reactive cells (medulla)',
      why: 'Positive = survival of MHC-restricted cells; negative = removal of autoreactive ones. Reversing them is a top exam trap.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Negative selection of thymocytes, occurring mainly in the thymic medulla, serves to:',
      options: [
        { id: 'a', text: 'Retain cells that can bind self-MHC' },
        { id: 'b', text: 'Delete thymocytes that bind self-antigen too strongly (central tolerance)' },
        { id: 'c', text: 'Rearrange the TCR genes' },
        { id: 'd', text: 'Convert CD8 cells to CD4 cells' },
      ],
      answerId: 'b',
      explanation: 'Negative selection deletes strongly self-reactive thymocytes (central tolerance), aided by AIRE-driven tissue-antigen expression. Positive selection (cortex) retains MHC-restricted cells.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Mutation of the AIRE gene causes multi-organ autoimmunity (APECED) because AIRE normally:',
      options: [
        { id: 'a', text: 'Rearranges antibody genes' },
        { id: 'b', text: 'Drives expression of tissue-specific self-antigens in the thymus for negative selection' },
        { id: 'c', text: 'Forms the membrane attack complex' },
        { id: 'd', text: 'Provides co-stimulation to T cells' },
      ],
      answerId: 'b',
      explanation: 'AIRE enables medullary thymic epithelial cells to express peripheral tissue antigens so that autoreactive T cells against them are deleted. Its loss lets self-reactive T cells escape → APECED/APS-1.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Thymic selection', svg: THYMIC_SELECTION, caption: 'DN→DP→SP; positive selection (cortex) keeps self-MHC binders; negative selection (medulla, AIRE) deletes strongly self-reactive cells.' },
  ],
};

export default tCellDevelopmentThymicSelection;
