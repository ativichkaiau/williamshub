import type { Lecture } from '../../lib/types';
import { PRIMARY_SECONDARY_RESPONSE } from '../../lib/figures';

export const germinalCenterAntibodyResponse: Lecture = {
  id: 'germinal-center-antibody-response',
  title: 'Germinal Centre, Affinity Maturation & the Memory Response',
  system: 'immune',
  source: 'L9 — Humoral Immune Response',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Immunology' },
    { kind: 'lecture', label: 'L9 Humoral Response' },
    { kind: 'mechanism', label: 'GC reaction · memory' },
    { kind: 'exam', label: 'Primary vs secondary' },
  ],

  highYield: [
    '**The germinal centre (in secondary follicles) refines the antibody response.** Activated B cells (with Tfh help) undergo **somatic hypermutation** of the variable region → **affinity maturation** (selection of the highest-affinity clones by Tfh/follicular dendritic cells), and **class (isotype) switching** (changing the heavy-chain constant region, so function changes but specificity stays).',
    '**Class switching is directed by cytokines:** e.g. **IL-4 → IgE/IgG**, **TGF-β/APRIL → IgA**, **IFN-γ → IgG subclasses** — and requires **CD40L** and the enzyme **AID (activation-induced deaminase)** (defective in some hyper-IgM syndromes).',
    '**Germinal-centre output:** long-lived **plasma cells** (antibody factories, home to bone marrow) and **memory B cells** (persist, poised for rapid recall).',
    '**Primary response:** after first exposure there is a **lag (~1 week)**, then a **low, IgM-dominant** response. **Secondary response:** on re-exposure, memory cells give a **faster, larger, IgG-dominant, higher-affinity** response — the immunological basis of **vaccination and boosters**.',
    '**Monoclonal antibodies** are produced from a **single B-cell clone** (one specificity) — classically via hybridoma technology (fusing a B cell with a myeloma) — and are now central diagnostics and therapeutics (see [[immunotherapy-modulation]]).',
  ],

  mechanism: {
    title: 'Mutate → select → switch → remember',
    steps: [
      { id: 's1', label: 'Germinal centre: somatic hypermutation (AID)', emphasis: 'key' },
      { id: 's2', label: 'Affinity maturation: select highest-affinity clones', emphasis: 'key' },
      { id: 's3', label: 'Class switching (cytokine-directed; CD40L, AID)' },
      { id: 's4', label: 'Output: long-lived plasma cells + memory B cells', emphasis: 'key' },
      { id: 's5', label: 'Secondary response = faster, larger, IgG, higher-affinity' },
    ],
  },

  examFindings: [
    { sign: 'Rising affinity of antibody over weeks', mechanism: 'Somatic hypermutation + selection (affinity maturation)', significance: 'key' },
    { sign: 'IgM → IgG switch with same antigen specificity', mechanism: 'Class switching (constant region changes, not variable)', significance: 'key' },
    { sign: 'Rapid high IgG on second exposure', mechanism: 'Memory B-cell secondary response', significance: 'key' },
    { sign: 'High IgM, low IgG/A/E + no germinal centres', mechanism: 'Hyper-IgM (CD40L/AID defect → no switching)', significance: 'supportive' },
    { sign: 'IgM anti-X positive, IgG negative', mechanism: 'Acute/recent primary infection', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Enzyme required for class switching and somatic hypermutation', meaning: 'AID (activation-induced deaminase)' },
    { clue: 'Cell producing large amounts of antibody', meaning: 'Plasma cell (from germinal-centre B cell)' },
    { clue: 'Serology: IgM positive, IgG negative', meaning: 'Recent (primary) infection' },
    { clue: 'Antibody from a single clone with one specificity', meaning: 'Monoclonal antibody' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Boosters exploit the secondary response; IgM-vs-IgG serology dates infections; monoclonal antibodies are diagnostics and drugs. Class-switch defects → hyper-IgM ([[primary-immunodeficiency-antibody-t]]). Upstream B activation: [[humoral-response-b-activation]]; isotype functions: [[antibody-classes-functions]].' },
  ],

  mnemonics: [
    { hook: 'Germinal centre = "Switch, Mutate, Select, Remember"', expansion: ['Class switch + somatic hypermutation → affinity maturation + memory'] },
    { hook: 'Secondary = Faster, Fatter, Finer (IgG, high-affinity)', expansion: ['Memory B cells; basis of boosters'] },
  ],

  traps: [
    {
      questionCategory: 'What changes in class switching?',
      wrongInstinct: 'Class switching changes the antigen specificity of the antibody',
      rightAnswer: 'Class switching changes only the HEAVY-chain constant region (isotype/function); the variable region and specificity are unchanged',
      why: 'Switching alters effector class (IgM→IgG/A/E), not what the antibody binds. Affinity maturation refines binding via variable-region mutation.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Compared with the primary response, the secondary antibody response to the same antigen is:',
      options: [
        { id: 'a', text: 'Slower and dominated by IgM' },
        { id: 'b', text: 'Faster, larger, higher-affinity, and IgG-dominant' },
        { id: 'c', text: 'Identical in magnitude and timing' },
        { id: 'd', text: 'Absent because of tolerance' },
      ],
      answerId: 'b',
      explanation: 'Memory B cells produce a faster, larger, class-switched (IgG), higher-affinity secondary response — the basis of vaccination and boosters. The primary response is slow and IgM-dominant.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Affinity maturation of antibodies occurs in the germinal centre through:',
      options: [
        { id: 'a', text: 'V(D)J recombination in the bone marrow' },
        { id: 'b', text: 'Somatic hypermutation of the variable region followed by selection of high-affinity clones' },
        { id: 'c', text: 'Class switching of the heavy-chain constant region' },
        { id: 'd', text: 'Allelic exclusion' },
      ],
      answerId: 'b',
      explanation: 'Affinity maturation results from somatic hypermutation (AID) of the V region plus selection of the highest-affinity B cells by Tfh/follicular dendritic cells in the germinal centre.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Primary vs secondary response', svg: PRIMARY_SECONDARY_RESPONSE, caption: 'Primary: lag, low, IgM. Secondary (memory): faster, higher, IgG, high-affinity — the basis of vaccination.' },
  ],
};

export default germinalCenterAntibodyResponse;
