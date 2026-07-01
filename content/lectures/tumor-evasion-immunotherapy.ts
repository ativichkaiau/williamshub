import type { Lecture } from '../../lib/types';

export const tumorEvasionImmunotherapy: Lecture = {
  id: 'tumor-evasion-immunotherapy',
  title: 'Tumour Immune Evasion & Cancer Immunotherapy',
  system: 'immune',
  source: 'L16 — Tumor Immunology',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Immunology' },
    { kind: 'lecture', label: 'L16 Tumor Immunology' },
    { kind: 'mechanism', label: 'Escape → therapy' },
    { kind: 'exam', label: 'Checkpoint · CAR-T' },
  ],

  highYield: [
    '**Tumours escape immunity by many routes:** **down-regulating MHC I** (evade CTLs — but risk NK killing), **losing/altering antigens** (antigen loss variants), expressing **checkpoint ligands (PD-L1)** to switch off T cells, recruiting **Tregs and myeloid-derived suppressor cells**, secreting immunosuppressive cytokines (**TGF-β, IL-10**), and creating a hostile metabolic microenvironment.',
    '**Immune-checkpoint blockade** is the breakthrough: tumours exploit inhibitory checkpoints (**PD-1/PD-L1, CTLA-4**) to restrain T cells. **Antibodies blocking them "release the brake"** → **anti-PD-1 (pembrolizumab/nivolumab), anti-PD-L1, anti-CTLA-4 (ipilimumab)** restore anti-tumour T-cell activity (Nobel Prize 2018).',
    '**Adoptive cell therapy:** **CAR-T cells** = a patient\'s T cells engineered with a **chimeric antigen receptor** targeting a tumour antigen (e.g. **CD19** in B-cell leukaemia/lymphoma) → potent killing (risk: **cytokine release syndrome**). Also TIL therapy and engineered TCRs.',
    '**Antibody-based therapy:** **monoclonal antibodies against tumour antigens** (e.g. **rituximab/anti-CD20, trastuzumab/anti-HER2**) work by ADCC, complement, blocking growth signals, or delivering drugs/radioisotopes (antibody–drug conjugates).',
    '**Vaccines & cytokines:** **prophylactic** vaccines prevent virus-driven cancers (HPV, HBV); **therapeutic** cancer vaccines (including **dendritic-cell** and **mRNA/neoantigen** vaccines) aim to boost anti-tumour T cells; cytokines (IFN, IL-2) have older roles. This toolkit overlaps [[immunotherapy-modulation]].',
  ],

  mechanism: {
    title: 'Tumour hides → therapy re-exposes/attacks it',
    steps: [
      { id: 's1', label: 'Evasion: ↓MHC I, antigen loss, PD-L1, Tregs/MDSC, TGF-β', emphasis: 'key' },
      { id: 's2', label: 'Checkpoint blockade: anti-PD-1/PD-L1/CTLA-4 releases T cells', emphasis: 'key' },
      { id: 's3', label: 'CAR-T: engineered TCR/receptor (anti-CD19)', emphasis: 'key' },
      { id: 's4', label: 'Tumour-antigen monoclonal antibodies (ADCC/blockade)' },
      { id: 's5', label: 'Vaccines (prophylactic HPV/HBV; therapeutic DC/mRNA)' },
    ],
  },

  examFindings: [
    { sign: 'Tumour expressing PD-L1', mechanism: 'Engages PD-1 → switches off T cells (evasion)', significance: 'key' },
    { sign: 'Response to anti-PD-1 (pembrolizumab)', mechanism: 'Checkpoint blockade releases exhausted T cells', significance: 'key' },
    { sign: 'Anti-CD19 CAR-T for B-cell leukaemia', mechanism: 'Engineered T cells target tumour antigen', significance: 'key' },
    { sign: 'Cytokine release syndrome after CAR-T', mechanism: 'Massive T-cell activation → IL-6 surge', significance: 'supportive' },
    { sign: 'Immune-related adverse events on checkpoint therapy', mechanism: 'Loss of tolerance → autoimmunity-like toxicity', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Tumour ligand that shuts off T cells', meaning: 'PD-L1 (binds PD-1)' },
    { clue: 'Therapy engineering a patient\'s T cells against CD19', meaning: 'CAR-T cell therapy' },
    { clue: 'Antibody drug targeting CD20 on B-cell lymphoma', meaning: 'Rituximab' },
    { clue: 'Toxicity of checkpoint inhibitors', meaning: 'Immune-related adverse events (autoimmune-like)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Checkpoint inhibitors and CAR-T transformed oncology; understanding evasion guides combination therapy. Checkpoint biology traces back to [[t-cell-activation]] (CTLA-4/PD-1) and their toxicity to [[tolerance-autoimmunity-mechanisms]]. Broader manipulation toolkit: [[immunotherapy-modulation]].' },
  ],

  mnemonics: [
    { hook: 'Checkpoint blockade "releases the brake" (anti-PD-1/PD-L1/CTLA-4)', expansion: ['Tumour PD-L1 exploits the PD-1 brake'] },
    { hook: 'CAR-T = "Chimeric Antigen Receptor T cell" (anti-CD19); watch cytokine release syndrome', expansion: ['Adoptive cell therapy'] },
  ],

  traps: [
    {
      questionCategory: 'How checkpoint inhibitors work',
      wrongInstinct: 'Checkpoint inhibitors directly kill tumour cells like chemotherapy',
      rightAnswer: 'They BLOCK inhibitory checkpoints (PD-1/PD-L1, CTLA-4) to "release the brake" on the patient\'s own T cells, which then attack the tumour',
      why: 'Checkpoint inhibitors work indirectly by reactivating T cells, not by direct cytotoxicity — hence their autoimmune-type side effects.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Pembrolizumab, an anti-PD-1 monoclonal antibody, treats cancer by:',
      options: [
        { id: 'a', text: 'Directly lysing tumour cells' },
        { id: 'b', text: 'Blocking the PD-1/PD-L1 inhibitory checkpoint to reactivate anti-tumour T cells' },
        { id: 'c', text: 'Depleting all B cells' },
        { id: 'd', text: 'Inhibiting calcineurin' },
      ],
      answerId: 'b',
      explanation: 'Anti-PD-1 blocks the PD-1/PD-L1 brake that tumours use to switch off T cells, restoring T-cell-mediated tumour killing — a checkpoint-blockade immunotherapy.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'CAR-T cell therapy for B-cell malignancies most commonly targets which antigen?',
      options: [
        { id: 'a', text: 'CD3' },
        { id: 'b', text: 'CD19' },
        { id: 'c', text: 'PD-L1' },
        { id: 'd', text: 'HER2' },
      ],
      answerId: 'b',
      explanation: 'CAR-T cells for B-cell leukaemia/lymphoma are typically engineered to target CD19; a major toxicity is cytokine release syndrome from massive T-cell activation.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default tumorEvasionImmunotherapy;
