import type { Lecture } from '../../lib/types';

export const mhcStructureGenetics: Lecture = {
  id: 'mhc-structure-genetics',
  title: 'MHC / HLA: Structure & Genetics',
  system: 'immune',
  source: 'L6 — MHC & Antigen Presentation',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Immunology' },
    { kind: 'lecture', label: 'L6 MHC' },
    { kind: 'mechanism', label: 'MHC I vs II' },
    { kind: 'exam', label: 'HLA loci · disease links' },
  ],

  highYield: [
    '**MHC (in humans, HLA) molecules display peptides for T cells.** **MHC class I** = a single **α chain + β2-microglobulin**, with a **closed groove** binding **short peptides (~8–10 aa)**; expressed on **all nucleated cells**. **MHC class II** = **two chains (α + β)**, an **open groove** binding **longer peptides (~13–25 aa)**; expressed only on **professional APCs** (dendritic cells, macrophages, B cells).',
    '**HLA gene loci.** **Class I: HLA-A, -B, -C.** **Class II: HLA-DR, -DQ, -DP.** They lie on chromosome 6.',
    '**HLA genes are the most polymorphic in the genome** and are **codominantly** expressed (both parental alleles) and **polygenic** (several loci) → each person expresses many different MHC molecules, maximising the range of peptides presentable. This diversity underlies **transplant matching**.',
    '**T cells are MHC-restricted:** a TCR only recognises its peptide **when presented by the individual\'s own MHC** (self-MHC). **CD8 binds MHC I; CD4 binds MHC II** ("rule of 8": CD8×I=8, CD4×II=8).',
    '**HLA–disease associations (classic exam links).** **HLA-B27** → ankylosing spondylitis, reactive arthritis; **HLA-DQ2/DQ8** → coeliac disease; **HLA-DR3/DR4** → type 1 diabetes; **HLA-B*57:01** → abacavir hypersensitivity. Also drives **graft rejection** (mismatched HLA) and susceptibility to some autoimmune diseases.',
  ],

  mechanism: {
    title: 'Two MHC classes, wide diversity, self-restriction',
    steps: [
      { id: 's1', label: 'MHC I: α + β2-microglobulin, closed groove, all nucleated cells', emphasis: 'key' },
      { id: 's2', label: 'MHC II: α + β, open groove, APCs only', emphasis: 'key' },
      { id: 's3', label: 'Loci: I = A/B/C; II = DR/DQ/DP' },
      { id: 's4', label: 'Codominant + polygenic + polymorphic → diverse presentation', emphasis: 'key' },
      { id: 's5', label: 'MHC restriction: CD8→I, CD4→II; drives transplant matching' },
    ],
  },

  examFindings: [
    { sign: 'MHC I associates with β2-microglobulin', mechanism: 'Structural requirement for surface expression', significance: 'key' },
    { sign: 'MHC II expressed only on APCs', mechanism: 'Dendritic cells, macrophages, B cells', significance: 'key' },
    { sign: 'HLA-B27 positive', mechanism: 'Ankylosing spondylitis / reactive arthritis link', significance: 'supportive' },
    { sign: 'HLA-DQ2/DQ8', mechanism: 'Coeliac disease association', significance: 'supportive' },
    { sign: 'Both parental HLA alleles expressed', mechanism: 'Codominant expression', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Which MHC class needs β2-microglobulin', meaning: 'MHC class I' },
    { clue: 'HLA loci encoding class II', meaning: 'HLA-DR, -DQ, -DP' },
    { clue: 'HLA allele screened before abacavir', meaning: 'HLA-B*57:01' },
    { clue: 'Why unrelated transplants are rejected', meaning: 'HLA (MHC) polymorphism/mismatch' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'HLA typing guides transplantation and drug-hypersensitivity screening (B*57:01, B*15:02); HLA associations aid autoimmune diagnosis. The class determines which T cell responds ([[antigen-processing-presentation]]) and is central to [[t-cell-development-thymic-selection]].' },
  ],

  mnemonics: [
    { hook: 'MHC I = 1 chain + β2m, everywhere, CD8; MHC II = 2 chains, APCs, CD4', expansion: ['Rule of 8'] },
    { hook: 'Loci: "I have A B C; DR DQ DP are class II"', expansion: ['Chromosome 6'] },
  ],

  traps: [
    {
      questionCategory: 'Where is MHC II expressed?',
      wrongInstinct: 'MHC class II is expressed on all nucleated cells like MHC I',
      rightAnswer: 'MHC II is restricted to professional APCs (dendritic cells, macrophages, B cells); MHC I is on all nucleated cells',
      why: 'Only APCs present exogenous antigen to CD4 helpers on MHC II; MHC I surveillance covers every nucleated cell.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'MHC class II molecules are expressed on:',
      options: [
        { id: 'a', text: 'All nucleated cells' },
        { id: 'b', text: 'Only professional antigen-presenting cells (dendritic cells, macrophages, B cells)' },
        { id: 'c', text: 'Red blood cells' },
        { id: 'd', text: 'Only cytotoxic T cells' },
      ],
      answerId: 'b',
      explanation: 'MHC II is limited to professional APCs and presents exogenous antigen to CD4⁺ T cells. MHC I (with β2-microglobulin) is on all nucleated cells and presents to CD8⁺ T cells.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which HLA allele is most classically associated with ankylosing spondylitis?',
      options: [
        { id: 'a', text: 'HLA-DQ2' },
        { id: 'b', text: 'HLA-DR3' },
        { id: 'c', text: 'HLA-B27' },
        { id: 'd', text: 'HLA-B*57:01' },
      ],
      answerId: 'c',
      explanation: 'HLA-B27 is strongly associated with ankylosing spondylitis and other seronegative spondyloarthropathies. DQ2/DQ8 → coeliac; B*57:01 → abacavir hypersensitivity.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default mhcStructureGenetics;
