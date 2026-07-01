import type { Lecture } from '../../lib/types';
import { HUMORAL_RESPONSE } from '../../lib/figures';

export const humoralResponseBActivation: Lecture = {
  id: 'humoral-response-b-activation',
  title: 'Humoral Response: B-Cell Activation (T-dependent vs T-independent)',
  system: 'immune',
  source: 'L9 — Humoral Immune Response',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Immunology' },
    { kind: 'lecture', label: 'L9 Humoral Response' },
    { kind: 'mechanism', label: 'BCR + T help' },
    { kind: 'exam', label: 'T-dep vs T-indep' },
  ],

  highYield: [
    '**Humoral immunity = antibody made by B cells/plasma cells** against extracellular microbes and toxins. It begins when antigen binds the **B-cell receptor (surface Ig + Igα/Igβ signalling complex)** in secondary lymphoid organs.',
    '**T-dependent responses (protein antigens).** The B cell internalises antigen, presents peptide on **MHC II**, and receives help from a **follicular helper T (Tfh) cell** via **CD40L–CD40 + cytokines**. This "two-signal" activation drives the **germinal centre reaction** → **class switching, somatic hypermutation (affinity maturation), high-affinity IgG/A/E, and memory** (see [[germinal-center-antibody-response]]).',
    '**Linked recognition:** the B cell and the helper T cell must recognise **the same antigen** (different epitopes) — the basis of **conjugate vaccines**, which attach a weak polysaccharide to a protein carrier so it can recruit T-cell help.',
    '**T-independent responses (non-protein antigens).** **Repetitive antigens** (bacterial **polysaccharide capsules, LPS**) cross-link many BCRs and activate B cells **without T-cell help** → mostly **low-affinity IgM, little class switching, and weak/no memory**.',
    '**Why this matters clinically:** plain **polysaccharide vaccines are T-independent → poorly immunogenic in infants** (immature marginal-zone B cells); **conjugating** them to protein converts the response to T-dependent, generating memory (Hib, pneumococcal, meningococcal conjugate vaccines).',
  ],

  mechanism: {
    title: 'Antigen → BCR → (T help?) → antibody',
    steps: [
      { id: 's1', label: 'Antigen binds BCR in secondary lymphoid organ', emphasis: 'key' },
      { id: 's2', label: 'T-dependent: present on MHC II → Tfh help (CD40L)', emphasis: 'key' },
      { id: 's3', label: '→ germinal centre: class switch, affinity maturation, memory' },
      { id: 's4', label: 'T-independent: repetitive antigen cross-links BCRs, no T help', emphasis: 'key' },
      { id: 's5', label: '→ mostly IgM, low affinity, weak memory' },
    ],
  },

  examFindings: [
    { sign: 'Protein antigen → high-affinity IgG + memory', mechanism: 'T-dependent (Tfh help, germinal centre)', significance: 'key' },
    { sign: 'Polysaccharide antigen → mainly IgM, no memory', mechanism: 'T-independent (no T-cell help)', significance: 'key' },
    { sign: 'CD40L–CD40 engagement between T and B cell', mechanism: 'Signal 2 for T-dependent B activation', significance: 'key' },
    { sign: 'Conjugate vaccine works in infants; plain polysaccharide does not', mechanism: 'Protein carrier recruits T-cell help (linked recognition)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Molecule providing B cells with T-cell help', meaning: 'CD40L (on Tfh) → CD40 (on B cell)' },
    { clue: 'Antigen type that activates B cells without T cells', meaning: 'Repetitive polysaccharide/LPS (T-independent)' },
    { clue: 'Why Hib is conjugated to a protein', meaning: 'To make the polysaccharide response T-dependent (memory)' },
    { clue: 'Antibody isotype dominating a T-independent response', meaning: 'IgM' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Conjugate-vaccine design directly follows T-dependent biology; hyper-IgM syndrome (CD40L defect) blocks T-dependent switching ([[primary-immunodeficiency-antibody-t]]). The germinal-centre output is detailed in [[germinal-center-antibody-response]]; antibody functions in [[antibody-classes-functions]].' },
  ],

  mnemonics: [
    { hook: 'T-dependent = proteins → IgG + memory (needs CD40L); T-independent = polysaccharide → IgM only', expansion: ['Conjugate = polysaccharide + protein → T-dependent'] },
    { hook: 'Linked recognition: B and T see the SAME antigen', expansion: ['Basis of conjugate vaccines'] },
  ],

  traps: [
    {
      questionCategory: 'Why polysaccharide vaccines fail in infants',
      wrongInstinct: 'Infants fail to respond to polysaccharide vaccines because they cannot make any antibody',
      rightAnswer: 'Polysaccharides are T-INDEPENDENT antigens → poor, memory-less responses in infants; conjugating to protein makes them T-dependent',
      why: 'The problem is lack of T-cell help/memory for polysaccharides, solved by protein conjugation — not a global inability to make antibody.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A vaccine made of pure bacterial capsular polysaccharide induces mainly low-affinity IgM with poor memory, especially in infants. This is because the antigen is:',
      options: [
        { id: 'a', text: 'T-dependent' },
        { id: 'b', text: 'T-independent' },
        { id: 'c', text: 'A superantigen' },
        { id: 'd', text: 'A hapten with no carrier' },
      ],
      answerId: 'b',
      explanation: 'Polysaccharides are T-independent antigens: they cross-link BCRs but recruit no T-cell help, so the response is IgM-dominant with little class switching or memory. Conjugation to a protein makes it T-dependent.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'In a T-dependent antibody response, the critical "second signal" delivered from the follicular helper T cell to the B cell is:',
      options: [
        { id: 'a', text: 'CD28–B7' },
        { id: 'b', text: 'CD40L–CD40' },
        { id: 'c', text: 'MHC I–CD8' },
        { id: 'd', text: 'Fas–FasL' },
      ],
      answerId: 'b',
      explanation: 'Tfh cells deliver help via CD40L–CD40 (plus cytokines), licensing the germinal-centre reaction. CD28–B7 co-stimulates the T cell itself; Fas–FasL is a cytotoxic pathway.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'T-dependent vs T-independent B activation', svg: HUMORAL_RESPONSE, caption: 'T-dependent (protein → Tfh help/CD40L → germinal centre → IgG + memory) vs T-independent (polysaccharide → IgM, no memory).' },
  ],
};

export default humoralResponseBActivation;
