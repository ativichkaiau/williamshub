import type { Lecture } from '../../lib/types';
import { TH_SUBSETS } from '../../lib/figures';

export const cd4HelperSubsets: Lecture = {
  id: 'cd4-helper-subsets',
  title: 'CD4⁺ Helper T-Cell Subsets',
  system: 'immune',
  source: 'L5 — Cell-Mediated Immunity',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Immunology' },
    { kind: 'lecture', label: 'L5 Cell-Mediated Immunity' },
    { kind: 'mechanism', label: 'Cytokine polarisation' },
    { kind: 'exam', label: 'Subset ↔ cytokine/role' },
  ],

  highYield: [
    '**The cytokine environment at priming polarises naïve CD4 cells into functional subsets**, each with a master transcription factor, signature cytokines, and a defence specialty.',
    '**Th1** — driven by **IL-12/IFN-γ** (TF **T-bet**); secretes **IFN-γ** to **activate macrophages** and support CD8 CTLs → defence against **intracellular** microbes (mycobacteria, viruses); central to granuloma formation and delayed-type hypersensitivity.',
    '**Th2** — driven by **IL-4** (TF **GATA3**); secretes **IL-4/IL-5/IL-13** → **B-cell help for IgE, eosinophil recruitment** → defence against **helminths** and the driver of **allergy/asthma**.',
    '**Th17** — driven by **IL-6 + TGF-β** (TF **RORγt**); secretes **IL-17** → recruits **neutrophils** against **extracellular bacteria and fungi** (e.g. mucocutaneous candidiasis); implicated in autoimmunity (psoriasis, IBD).',
    '**Tfh** — **follicular helper** (TF Bcl-6, IL-21) that helps B cells in **germinal centres** (class switching, affinity maturation). **Treg** — **FoxP3⁺CD4⁺CD25⁺** cells that **suppress** responses (IL-10, TGF-β) to maintain **self-tolerance**; FoxP3 loss → **IPEX** (severe autoimmunity).',
  ],

  mechanism: {
    title: 'Cytokines at priming decide the subset',
    steps: [
      { id: 's1', label: 'Th1 (IL-12→T-bet→IFN-γ): activate macrophages/CTL', emphasis: 'key' },
      { id: 's2', label: 'Th2 (IL-4→GATA3): IgE, eosinophils, antihelminth/allergy', emphasis: 'key' },
      { id: 's3', label: 'Th17 (IL-6/TGF-β→RORγt→IL-17): neutrophils, fungi/bacteria', emphasis: 'key' },
      { id: 's4', label: 'Tfh (IL-21): germinal-centre B-cell help' },
      { id: 's5', label: 'Treg (FoxP3): suppression / self-tolerance' },
    ],
  },

  examFindings: [
    { sign: 'IFN-γ activating macrophages', mechanism: 'Th1 (intracellular defence, granulomas)', significance: 'key' },
    { sign: 'IL-4/5/13 driving IgE + eosinophils', mechanism: 'Th2 (helminths, allergy)', significance: 'key' },
    { sign: 'IL-17 recruiting neutrophils', mechanism: 'Th17 (extracellular bacteria/fungi)', significance: 'key' },
    { sign: 'FoxP3⁺CD4⁺CD25⁺ suppressor cell', mechanism: 'Regulatory T cell (self-tolerance)', significance: 'key' },
    { sign: 'Chronic mucocutaneous candidiasis', mechanism: 'Th17/IL-17 axis defect', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Subset defending against tuberculosis via macrophage activation', meaning: 'Th1 (IFN-γ)' },
    { clue: 'Subset driving allergic asthma and antiparasite IgE', meaning: 'Th2' },
    { clue: 'Subset whose loss (FoxP3 mutation) causes IPEX', meaning: 'Treg' },
    { clue: 'Subset helping B cells in germinal centres', meaning: 'Tfh (follicular helper)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Subset biology targets modern biologics: anti-IL-17/IL-23 (psoriasis), anti-IL-4/5/13 (asthma/eczema). Th1/IFN-γ defects → mycobacterial disease; Treg loss → autoimmunity. CTL/macrophage effector arm: [[cd8-ctl-nk-effectors]].' },
  ],

  mnemonics: [
    { hook: 'Th1 = "one" intracellular (IFN-γ, macrophage); Th2 = "too" much allergy (IL-4/5, IgE/eos); Th17 = neutrophils', expansion: ['Treg = FoxP3 brake'] },
    { hook: 'Master TFs: T-bet(Th1), GATA3(Th2), RORγt(Th17), FoxP3(Treg)', expansion: ['One TF per subset'] },
  ],

  traps: [
    {
      questionCategory: 'Th1 vs Th2 target',
      wrongInstinct: 'Th2 cells are the main defence against intracellular bacteria like TB',
      rightAnswer: 'Th1 (IFN-γ, macrophage activation) handles intracellular microbes; Th2 handles helminths/allergy (IgE, eosinophils)',
      why: 'Th1 = intracellular + macrophages; Th2 = parasites/allergy. Swapping them is a classic error.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which CD4⁺ subset secretes IFN-γ to activate macrophages for defence against intracellular pathogens such as Mycobacterium tuberculosis?',
      options: [
        { id: 'a', text: 'Th2' },
        { id: 'b', text: 'Th17' },
        { id: 'c', text: 'Th1' },
        { id: 'd', text: 'Treg' },
      ],
      answerId: 'c',
      explanation: 'Th1 cells (driven by IL-12, master TF T-bet) secrete IFN-γ to activate macrophages and support CD8 CTLs — the arm against intracellular microbes and the basis of granuloma formation.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A mutation in FoxP3 causes severe multi-organ autoimmunity (IPEX) because it impairs which cell?',
      options: [
        { id: 'a', text: 'Th17 cells' },
        { id: 'b', text: 'Regulatory T cells' },
        { id: 'c', text: 'Cytotoxic T cells' },
        { id: 'd', text: 'Plasma cells' },
      ],
      answerId: 'b',
      explanation: 'FoxP3 is the master transcription factor of regulatory T cells; its loss abolishes Treg-mediated suppression → the fatal autoimmune syndrome IPEX.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'CD4⁺ helper subsets', svg: TH_SUBSETS, caption: 'Th1 (IFN-γ/macrophage), Th2 (IL-4/IgE/eosinophil), Th17 (IL-17/neutrophil), Tfh (B-cell help), Treg (FoxP3 suppression).' },
  ],
};

export default cd4HelperSubsets;
