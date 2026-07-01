import type { Lecture } from '../../lib/types';

export const bCellDevelopmentTolerance: Lecture = {
  id: 'b-cell-development-tolerance',
  title: 'B-Cell Development & Central Tolerance',
  system: 'immune',
  source: 'L7 — Lymphocyte Development',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Immunology' },
    { kind: 'lecture', label: 'L7 Lymphocyte Development' },
    { kind: 'mechanism', label: 'V(D)J · tolerance' },
    { kind: 'exam', label: 'B-cell checkpoints' },
  ],

  highYield: [
    '**B cells develop in the bone marrow** (antigen-independent), progressing **pro-B → pre-B → immature B → mature B**. The goal is to build a functional, self-tolerant **B-cell receptor (surface Ig)** by rearranging antibody genes.',
    '**V(D)J recombination builds the receptor.** The **heavy-chain locus rearranges first** (D-J then V-DJ; **RAG1/RAG2** enzymes) → paired with a **surrogate light chain** to form the **pre-BCR** (a checkpoint that the heavy chain is functional). Then the **light chain (κ, then λ)** rearranges → complete **IgM** on the immature B cell. **Allelic exclusion** ensures one specificity per cell.',
    '**Central tolerance (in the marrow):** immature B cells strongly reactive to **self-antigen** are removed by **clonal deletion (apoptosis)** or rescued by **receptor editing** (further light-chain rearrangement to change specificity). Weakly self-reactive cells may become **anergic**.',
    '**Mature naïve B cells co-express surface IgM and IgD** and leave for secondary lymphoid organs. On encountering antigen (+ T-cell help from **Tfh**), they enter germinal centres for **class switching and somatic hypermutation (affinity maturation)** → become **plasma cells** (antibody factories) or **memory B cells**.',
    '**Peripheral tolerance** catches self-reactive B cells that escape the marrow: lack of T-cell help, anergy, and deletion. Failure of B-cell tolerance contributes to **autoantibody-mediated autoimmunity** (e.g. SLE).',
  ],

  mechanism: {
    title: 'Rearrange receptor → test → purge self-reactive',
    steps: [
      { id: 's1', label: 'Bone marrow: pro-B → pre-B → immature → mature', emphasis: 'key' },
      { id: 's2', label: 'Heavy chain V(D)J first (RAG) → pre-BCR checkpoint', emphasis: 'key' },
      { id: 's3', label: 'Light chain rearranges → surface IgM (allelic exclusion)' },
      { id: 's4', label: 'Central tolerance: deletion / receptor editing / anergy', emphasis: 'key' },
      { id: 's5', label: 'Periphery: antigen + Tfh → class switch, affinity maturation' },
    ],
  },

  examFindings: [
    { sign: 'Heavy chain rearranges before light chain', mechanism: 'Ordered V(D)J; pre-BCR checkpoint', significance: 'key' },
    { sign: 'Immature B cell edits its receptor to lose self-reactivity', mechanism: 'Receptor editing (central tolerance)', significance: 'key' },
    { sign: 'One antibody specificity per B cell', mechanism: 'Allelic exclusion', significance: 'supportive' },
    { sign: 'Class switching + somatic hypermutation in germinal centre', mechanism: 'T-dependent affinity maturation (Tfh help)', significance: 'supportive' },
    { sign: 'Failed BTK signalling → arrest at pre-B stage', mechanism: 'X-linked agammaglobulinaemia (no mature B cells)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Enzymes mediating V(D)J recombination', meaning: 'RAG1 / RAG2' },
    { clue: 'How an immature autoreactive B cell avoids deletion', meaning: 'Receptor editing' },
    { clue: 'Where B cells complete antigen-independent maturation', meaning: 'Bone marrow' },
    { clue: 'Signalling molecule whose defect blocks B-cell maturation', meaning: 'BTK (Bruton tyrosine kinase)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'BTK failure → X-linked agammaglobulinaemia ([[primary-immunodeficiency-antibody-t]]); RAG defects → SCID; broken B-cell tolerance → autoimmunity (SLE). Diversity mechanism connects to [[antibody-structure]]; T-cell counterpart: [[t-cell-development-thymic-selection]].' },
  ],

  mnemonics: [
    { hook: 'Heavy before light; RAG does V(D)J', expansion: ['Pre-BCR checkpoint tests the heavy chain'] },
    { hook: 'Central B tolerance: "Delete, Edit, or Anergise"', expansion: ['In the bone marrow'] },
  ],

  traps: [
    {
      questionCategory: 'Order of chain rearrangement',
      wrongInstinct: 'The light chain rearranges before the heavy chain in B-cell development',
      rightAnswer: 'The HEAVY chain rearranges first (forming the pre-BCR checkpoint); the light chain follows',
      why: 'Heavy-chain success (pre-BCR) licenses progression before light-chain rearrangement completes the IgM BCR.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An immature B cell in the bone marrow that strongly binds a self-antigen can avoid deletion by further light-chain rearrangement. This process is called:',
      options: [
        { id: 'a', text: 'Somatic hypermutation' },
        { id: 'b', text: 'Class switching' },
        { id: 'c', text: 'Receptor editing' },
        { id: 'd', text: 'Allelic exclusion' },
      ],
      answerId: 'c',
      explanation: 'Receptor editing rearranges a new light chain to change the BCR specificity away from self — a central-tolerance mechanism. Somatic hypermutation/class switching occur later in germinal centres.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'During B-cell development, which event occurs first?',
      options: [
        { id: 'a', text: 'Light-chain V–J rearrangement' },
        { id: 'b', text: 'Heavy-chain V(D)J rearrangement forming the pre-BCR' },
        { id: 'c', text: 'Class switching to IgG' },
        { id: 'd', text: 'Somatic hypermutation' },
      ],
      answerId: 'b',
      explanation: 'The heavy chain rearranges first and pairs with a surrogate light chain to form the pre-BCR checkpoint, before light-chain rearrangement completes the IgM receptor.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default bCellDevelopmentTolerance;
