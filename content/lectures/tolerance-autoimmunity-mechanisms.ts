import type { Lecture } from '../../lib/types';
import { AUTOIMMUNITY_MECHANISMS } from '../../lib/figures';

export const toleranceAutoimmunityMechanisms: Lecture = {
  id: 'tolerance-autoimmunity-mechanisms',
  title: 'Self-Tolerance & Mechanisms of Autoimmunity',
  system: 'immune',
  source: 'L12 — Autoimmunity',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Immunology' },
    { kind: 'lecture', label: 'L12 Autoimmunity' },
    { kind: 'mechanism', label: 'Tolerance failure' },
    { kind: 'exam', label: 'Molecular mimicry · HLA' },
  ],

  highYield: [
    '**Autoimmunity = loss of self-tolerance** → immune attack on self-antigens by autoantibodies and/or self-reactive T cells. It requires **failure of the normal tolerance checkpoints**.',
    '**Two tiers of tolerance fail.** **Central tolerance** (thymus/marrow: deletion of self-reactive clones, needs **AIRE**; receptor editing) and **peripheral tolerance** (**anergy**, **Treg/FoxP3 suppression**, and inhibitory **checkpoints CTLA-4/PD-1**). Genetic defects here cause autoimmunity: **AIRE → APECED**, **FoxP3 → IPEX**, **CTLA-4 polymorphisms → susceptibility**.',
    '**Genetic predisposition — especially HLA.** Strong **HLA associations** (e.g. **B27** → ankylosing spondylitis; **DR3/DR4** → type 1 diabetes; **DQ2/DQ8** → coeliac) plus non-HLA genes and a **female predominance** (sex hormones) set the risk.',
    '**Environmental triggers.** **Molecular mimicry** — a microbial antigen resembles self, so anti-microbe immunity cross-reacts with tissue (**rheumatic fever**: group A *Streptococcus* M protein → heart; **Guillain-Barré**: *Campylobacter* → peripheral nerve). Also **epitope spreading**, **bystander activation**, and release of **cryptic/sequestered antigens** (e.g. after tissue injury).',
    '**Autoimmune diseases are effected through hypersensitivity mechanisms** — mainly **type II** (antibody vs cell/tissue: Graves, myasthenia), **type III** (immune complexes: SLE), and **type IV** (T cells: type 1 diabetes, MS) — the link to [[hypersensitivity-type-1-2]] and [[hypersensitivity-type-3-4]].',
  ],

  mechanism: {
    title: 'Break tolerance → attack self',
    steps: [
      { id: 's1', label: 'Central tolerance fails (AIRE; deletion/editing)', emphasis: 'key' },
      { id: 's2', label: 'Peripheral tolerance fails (anergy, Treg, CTLA-4/PD-1)', emphasis: 'key' },
      { id: 's3', label: 'Genetic risk: HLA (B27, DR3/4, DQ2/8), FoxP3, AIRE, CTLA-4' },
      { id: 's4', label: 'Trigger: molecular mimicry, epitope spreading, cryptic antigen', emphasis: 'key' },
      { id: 's5', label: 'Damage via hypersensitivity type II / III / IV' },
    ],
  },

  examFindings: [
    { sign: 'Rheumatic fever after strep pharyngitis', mechanism: 'Molecular mimicry (M protein ↔ cardiac antigen)', significance: 'key' },
    { sign: 'Guillain-Barré after Campylobacter', mechanism: 'Molecular mimicry (ganglioside cross-reactivity)', significance: 'supportive' },
    { sign: 'Multi-organ autoimmunity from AIRE mutation', mechanism: 'Central-tolerance failure (APECED)', significance: 'key' },
    { sign: 'Fatal early autoimmunity from FoxP3 mutation', mechanism: 'Treg failure (IPEX) — peripheral tolerance', significance: 'key' },
    { sign: 'Strong HLA-B27 / DR3-DR4 association', mechanism: 'Genetic predisposition to specific autoimmune disease', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Mechanism linking a prior infection to autoimmune disease', meaning: 'Molecular mimicry' },
    { clue: 'Gene whose loss causes IPEX (Treg failure)', meaning: 'FoxP3' },
    { clue: 'Checkpoints whose blockade can trigger autoimmunity', meaning: 'CTLA-4 and PD-1' },
    { clue: 'Genetic factor most strongly linked to many autoimmune diseases', meaning: 'HLA type' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Checkpoint-inhibitor cancer therapy can unleash autoimmunity (immune-related adverse events); understanding tolerance failure guides immunosuppression. Central/peripheral tolerance basics: [[t-cell-development-thymic-selection]], [[t-cell-activation]]. Specific diseases: [[autoimmune-disease-examples]].' },
  ],

  mnemonics: [
    { hook: 'Autoimmunity = genes (HLA/AIRE/FoxP3) + trigger (mimicry) + broken tolerance', expansion: ['Central + peripheral checkpoints fail'] },
    { hook: 'Molecular mimicry: Strep → rheumatic heart; Campylobacter → GBS', expansion: ['Anti-microbe cross-reacts with self'] },
  ],

  traps: [
    {
      questionCategory: 'Molecular mimicry',
      wrongInstinct: 'Rheumatic fever damages the heart by direct streptococcal infection of the myocardium',
      rightAnswer: 'It is molecular MIMICRY — antibodies/T cells against streptococcal M protein cross-react with cardiac antigens (immune-mediated, not direct infection)',
      why: 'The organism is cleared; the damage is autoimmune cross-reactivity, illustrating how infection triggers autoimmunity.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Rheumatic heart disease following group A streptococcal pharyngitis is a classic example of:',
      options: [
        { id: 'a', text: 'Direct bacterial invasion of the heart' },
        { id: 'b', text: 'Molecular mimicry (cross-reactive immunity against self)' },
        { id: 'c', text: 'IgE-mediated hypersensitivity' },
        { id: 'd', text: 'A complement deficiency' },
      ],
      answerId: 'b',
      explanation: 'Antibodies/T cells against streptococcal M protein cross-react with cardiac antigens (molecular mimicry), causing immune-mediated valvular damage after the organism is cleared.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which genetic defect causes fatal early-onset multi-organ autoimmunity (IPEX) by abolishing regulatory T-cell function?',
      options: [
        { id: 'a', text: 'AIRE mutation' },
        { id: 'b', text: 'FoxP3 mutation' },
        { id: 'c', text: 'BTK mutation' },
        { id: 'd', text: 'NADPH oxidase mutation' },
      ],
      answerId: 'b',
      explanation: 'FoxP3 is the master transcription factor of Tregs; its loss abolishes peripheral suppression → IPEX. AIRE loss (central tolerance) causes APECED.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Mechanisms of autoimmunity', svg: AUTOIMMUNITY_MECHANISMS, caption: 'Failed central + peripheral tolerance + genetic risk (HLA/AIRE/FoxP3) + triggers (molecular mimicry) → organ-specific or systemic autoimmunity.' },
  ],
};

export default toleranceAutoimmunityMechanisms;
