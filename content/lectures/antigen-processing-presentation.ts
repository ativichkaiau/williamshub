import type { Lecture } from '../../lib/types';
import { MHC_PROCESSING } from '../../lib/figures';

export const antigenProcessingPresentation: Lecture = {
  id: 'antigen-processing-presentation',
  title: 'Antigen Processing & Presentation Pathways',
  system: 'immune',
  source: 'L6 — MHC & Antigen Presentation',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Immunology' },
    { kind: 'lecture', label: 'L6 MHC' },
    { kind: 'mechanism', label: 'Endogenous vs exogenous' },
    { kind: 'exam', label: 'Proteasome/TAP · cross-present' },
  ],

  highYield: [
    '**Two routes match antigen location to the right T cell.** **Endogenous (cytosolic) antigen → MHC class I → CD8** (kill the cell). **Exogenous (extracellular) antigen → MHC class II → CD4** (coordinate the response). This ensures cells making foreign protein internally are killed, while engulfed microbes trigger help.',
    '**MHC I pathway (endogenous):** cytosolic proteins (viral/tumour/self) are degraded by the **proteasome** → peptides pumped into the ER by **TAP (transporter associated with antigen processing)** → loaded onto **MHC I** → surface → recognised by **CD8** T cells.',
    '**MHC II pathway (exogenous):** extracellular antigen is **phagocytosed/endocytosed** → degraded in **endosomes/lysosomes**. MHC II is made in the ER with an **invariant chain** (blocking its groove); in the endosome the invariant chain is degraded to **CLIP**, which is exchanged (via **HLA-DM**) for antigenic peptide → surface → recognised by **CD4** T cells.',
    '**Cross-presentation** — specialised **dendritic cells** can load **exogenous** antigen onto **MHC I** to prime **CD8** T cells against viruses/tumours that don\'t infect the DC directly. This bridges the two pathways for effective CTL priming.',
    '**Consequences.** Viruses that block **TAP or MHC I** evade CTLs — but then lose MHC I and become NK targets (**"missing self"**, see [[innate-nk-interferon]]). **Defective MHC I** expression = **bare lymphocyte syndrome type I** (low CD8); **defective MHC II** = **type II** (low CD4, severe combined-like).',
  ],

  mechanism: {
    title: 'Location of antigen → class → T cell',
    steps: [
      { id: 's1', label: 'Endogenous → proteasome → TAP → MHC I → CD8', emphasis: 'key' },
      { id: 's2', label: 'Exogenous → endosome → MHC II (invariant chain/CLIP) → CD4', emphasis: 'key' },
      { id: 's3', label: 'HLA-DM swaps CLIP for antigenic peptide (MHC II)' },
      { id: 's4', label: 'Cross-presentation: DC puts exogenous Ag on MHC I → CD8', emphasis: 'key' },
      { id: 's5', label: 'Blocking MHC I → CTL evasion but NK "missing self"' },
    ],
  },

  examFindings: [
    { sign: 'Proteasome + TAP loading peptide onto MHC I', mechanism: 'Endogenous (cytosolic) pathway → CD8', significance: 'key' },
    { sign: 'Invariant chain / CLIP on MHC II', mechanism: 'Prevents premature loading until the endosome', significance: 'key' },
    { sign: 'Dendritic cell presenting engulfed virus on MHC I', mechanism: 'Cross-presentation → primes CD8', significance: 'key' },
    { sign: 'Absent MHC II expression, low CD4 counts', mechanism: 'Bare lymphocyte syndrome type II', significance: 'supportive' },
    { sign: 'Viral TAP inhibitor', mechanism: 'Blocks MHC I loading → CTL evasion (→ NK target)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Transporter delivering peptides to MHC I in the ER', meaning: 'TAP' },
    { clue: 'Protein occupying the MHC II groove until the endosome', meaning: 'Invariant chain (→ CLIP)' },
    { clue: 'How a DC primes CD8 against a virus it is not infected by', meaning: 'Cross-presentation' },
    { clue: 'Pathway presenting cytosolic viral protein', meaning: 'MHC class I (endogenous)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Processing pathways explain vaccine design (getting antigen onto MHC I for CTLs), viral immune evasion, and bare-lymphocyte syndromes ([[primary-immunodeficiency-antibody-t]]). The class presented dictates CTL vs helper responses ([[cd8-ctl-nk-effectors]], [[cd4-helper-subsets]]).' },
  ],

  mnemonics: [
    { hook: '"Endogenous = Inside = MHC I = CD8"; "Exogenous = Outside = MHC II = CD4"', expansion: ['Proteasome/TAP for I; endosome/CLIP for II'] },
    { hook: 'Cross-presentation = DC "crosses" exogenous Ag onto MHC I', expansion: ['Primes CD8 CTLs'] },
  ],

  traps: [
    {
      questionCategory: 'Which pathway presents cytosolic viral protein?',
      wrongInstinct: 'Viral proteins made inside the cell are presented on MHC class II to CD4 cells',
      rightAnswer: 'Endogenous (cytosolic) antigen → proteasome/TAP → MHC class I → CD8 T cells',
      why: 'Internally synthesised (endogenous) antigen goes on MHC I. MHC II handles engulfed (exogenous) antigen. Cross-presentation is the special DC exception.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A viral protein synthesised in the cytosol of an infected cell is presented to T cells via:',
      options: [
        { id: 'a', text: 'MHC class II to CD4⁺ T cells' },
        { id: 'b', text: 'The proteasome/TAP pathway on MHC class I to CD8⁺ T cells' },
        { id: 'c', text: 'Secretion as free antigen' },
        { id: 'd', text: 'The invariant chain pathway to CD4⁺ T cells' },
      ],
      answerId: 'b',
      explanation: 'Endogenous cytosolic antigen is degraded by the proteasome, transported by TAP into the ER, loaded on MHC I, and presented to CD8⁺ cytotoxic T cells.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Cross-presentation by dendritic cells refers to:',
      options: [
        { id: 'a', text: 'Presenting endogenous antigen on MHC II' },
        { id: 'b', text: 'Loading exogenous (engulfed) antigen onto MHC I to prime CD8⁺ T cells' },
        { id: 'c', text: 'Swapping CLIP for antigenic peptide' },
        { id: 'd', text: 'NK-cell killing of MHC-I-low targets' },
      ],
      answerId: 'b',
      explanation: 'Cross-presentation lets dendritic cells place exogenous antigen onto MHC I to prime CD8⁺ CTLs against pathogens/tumours that do not directly infect the DC.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'MHC I vs II processing', svg: MHC_PROCESSING, caption: 'Endogenous→proteasome/TAP→MHC I→CD8; exogenous→endosome/CLIP→MHC II→CD4; cross-presentation loads exogenous antigen on MHC I.' },
  ],
};

export default antigenProcessingPresentation;
