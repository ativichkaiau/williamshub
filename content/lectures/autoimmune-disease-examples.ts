import type { Lecture } from '../../lib/types';

export const autoimmuneDiseaseExamples: Lecture = {
  id: 'autoimmune-disease-examples',
  title: 'Autoimmune Diseases: Organ-Specific vs Systemic',
  system: 'immune',
  source: 'L12 — Autoimmunity',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Immunology' },
    { kind: 'lecture', label: 'L12 Autoimmunity' },
    { kind: 'mechanism', label: 'Autoantibody targets' },
    { kind: 'exam', label: 'Disease ↔ autoantibody' },
  ],

  highYield: [
    '**Autoimmune diseases split into organ-specific and systemic.** **Organ-specific** = a single tissue/antigen targeted; **systemic** = widespread antigens (often nuclear) → multi-organ disease. Diagnosis leans heavily on **characteristic autoantibodies**.',
    '**Endocrine (organ-specific).** **Hashimoto thyroiditis** — anti-**TPO**/thyroglobulin → hypothyroidism (type IV + II). **Graves disease** — **stimulating anti-TSH-receptor** antibody → hyperthyroidism (**type II, activating**). **Type 1 diabetes** — T-cell (type IV) destruction of β cells (anti-GAD/islet antibodies).',
    '**Neuromuscular / other organ-specific.** **Myasthenia gravis** — **anti-acetylcholine-receptor** antibody blocks the NMJ (**type II, blocking**) → fatigable weakness. **Pernicious anaemia** — anti-intrinsic-factor/parietal cell. **Multiple sclerosis** — T-cell attack on CNS myelin (type IV). **Goodpasture** — anti-**GBM (type IV collagen)** → lung + kidney (type II).',
    '**Systemic.** **SLE** — **ANA**, **anti-dsDNA** (specific), anti-Sm; **immune-complex (type III)** disease → nephritis, rash, arthritis, cytopenias. **Rheumatoid arthritis** — **RF** and **anti-CCP** → symmetrical erosive polyarthritis. **Sjögren** (anti-Ro/La), **systemic sclerosis** (anti-Scl-70/centromere).',
    '**Autoantibodies both diagnose and mechanise disease** — some are directly pathogenic (anti-TSH-R, anti-AChR, anti-dsDNA), others are markers. The underlying tolerance failure is covered in [[tolerance-autoimmunity-mechanisms]].',
  ],

  mechanism: {
    title: 'Target antigen → clinical pattern',
    steps: [
      { id: 's1', label: 'Organ-specific: one tissue (thyroid, β cell, NMJ, myelin)', emphasis: 'key' },
      { id: 's2', label: 'Graves = activating anti-TSH-R; MG = blocking anti-AChR', emphasis: 'key' },
      { id: 's3', label: 'Systemic: nuclear antigens → multi-organ (SLE, RA)', emphasis: 'key' },
      { id: 's4', label: 'Diagnose via characteristic autoantibodies' },
      { id: 's5', label: 'Some autoantibodies are directly pathogenic' },
    ],
  },

  examFindings: [
    { sign: 'Anti-dsDNA / anti-Sm', mechanism: 'Specific for SLE (systemic, type III)', significance: 'key' },
    { sign: 'Stimulating anti-TSH-receptor antibody', mechanism: 'Graves disease (type II, activating) → hyperthyroidism', significance: 'key' },
    { sign: 'Anti-acetylcholine-receptor antibody', mechanism: 'Myasthenia gravis (type II, blocking) → fatigable weakness', significance: 'key' },
    { sign: 'Anti-CCP / rheumatoid factor', mechanism: 'Rheumatoid arthritis', significance: 'supportive' },
    { sign: 'Anti-GBM antibody (lung + kidney)', mechanism: 'Goodpasture syndrome (type II)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Most specific antibody for SLE', meaning: 'Anti-dsDNA (and anti-Sm)' },
    { clue: 'Antibody in Hashimoto thyroiditis', meaning: 'Anti-thyroid peroxidase (anti-TPO)' },
    { clue: 'Antibody causing fatigable muscle weakness', meaning: 'Anti-acetylcholine receptor (myasthenia gravis)' },
    { clue: 'Antibodies in rheumatoid arthritis', meaning: 'RF and anti-CCP' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Autoantibody panels drive diagnosis and monitoring (anti-dsDNA tracks SLE activity); therapy is immunosuppression/biologics (anti-CD20, anti-TNF, etc. — see [[immunotherapy-modulation]]). Hypersensitivity mechanisms: [[hypersensitivity-type-1-2]], [[hypersensitivity-type-3-4]].' },
  ],

  mnemonics: [
    { hook: 'Graves = "activating" TSH-R (hyper); Myasthenia = "blocking" AChR (weak)', expansion: ['Both type II'] },
    { hook: 'SLE = ANA screen, anti-dsDNA/anti-Sm specific (type III systemic)', expansion: ['RA = RF + anti-CCP'] },
  ],

  traps: [
    {
      questionCategory: 'Type II activating vs blocking',
      wrongInstinct: 'All type II antibody-mediated autoimmune diseases destroy the target cell',
      rightAnswer: 'Type II can also modulate receptors: Graves = STIMULATING anti-TSH-R (hyperfunction); myasthenia = BLOCKING anti-AChR (hypofunction) — no cell destruction required',
      why: 'Antibody against a receptor can activate or block it, not just trigger lysis — a favourite distinction (Graves vs MG).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Graves disease causes hyperthyroidism because the autoantibody:',
      options: [
        { id: 'a', text: 'Blocks the TSH receptor' },
        { id: 'b', text: 'Stimulates (activates) the TSH receptor' },
        { id: 'c', text: 'Destroys thyroid follicular cells by complement' },
        { id: 'd', text: 'Forms immune complexes in the thyroid' },
      ],
      answerId: 'b',
      explanation: 'Graves disease features a stimulating anti-TSH-receptor antibody (type II, activating) that drives thyroid hormone overproduction — contrast with the blocking anti-AChR antibody of myasthenia gravis.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which autoantibody is most specific for systemic lupus erythematosus?',
      options: [
        { id: 'a', text: 'Rheumatoid factor' },
        { id: 'b', text: 'Anti-double-stranded DNA' },
        { id: 'c', text: 'Anti-thyroid peroxidase' },
        { id: 'd', text: 'Anti-acetylcholine receptor' },
      ],
      answerId: 'b',
      explanation: 'Anti-dsDNA (and anti-Sm) are specific for SLE and anti-dsDNA correlates with disease activity/nephritis. ANA is sensitive but not specific.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default autoimmuneDiseaseExamples;
