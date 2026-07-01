import type { Lecture } from '../../lib/types';
import { TLR_PRR } from '../../lib/figures';

export const innateBarriersPrr: Lecture = {
  id: 'innate-barriers-prr',
  title: 'Innate Immunity: Barriers, PRRs & Inflammation',
  system: 'immune',
  source: 'L2 — Innate Immunity',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Immunology' },
    { kind: 'lecture', label: 'L2 Innate Immunity' },
    { kind: 'mechanism', label: 'PRR → PAMP sensing' },
    { kind: 'exam', label: 'TLR locations' },
  ],

  highYield: [
    '**First line = barriers.** Physical/chemical/microbial: intact **skin/mucosa**, cilia + mucus, low stomach **pH**, lysozyme, antimicrobial peptides (defensins), and the commensal **microbiota** competing out pathogens.',
    '**Pattern-recognition receptors (PRRs)** are **germline-encoded** and recognise conserved microbial molecules — **PAMPs** (pathogen-associated, e.g. LPS, flagellin, viral nucleic acid) — and host **DAMPs** (damage signals). Because patterns are shared, one PRR covers many microbes (broad but not specific).',
    '**Toll-like receptors (TLRs) — know surface vs endosomal.** **Cell-surface TLRs** sense extracellular microbial components: **TLR4 = LPS** (Gram-negative), **TLR5 = flagellin**, **TLR2 (with 1/6) = lipopeptide/peptidoglycan**. **Endosomal TLRs** sense nucleic acids: **TLR3 = dsRNA, TLR7/8 = ssRNA, TLR9 = unmethylated CpG DNA** (viral/bacterial).',
    '**Signalling outcome:** PRR engagement activates **NF-κB → inflammatory cytokines (TNF, IL-1, IL-6)** and (especially endosomal TLRs) **type I interferons**; it boosts **phagocytosis**, recruits neutrophils, and **matures dendritic cells** to prime adaptive immunity.',
    '**Acute inflammation** = the innate effector response: vasodilation + increased permeability (redness, heat, swelling), neutrophil recruitment (selectins → integrins → diapedesis, guided by chemokines/C5a), phagocytosis, and — systemically — **fever and the acute-phase response** (CRP, complement) driven by IL-1/IL-6/TNF.',
  ],

  mechanism: {
    title: 'Sense the pattern → inflame → recruit → prime',
    steps: [
      { id: 's1', label: 'Barriers block entry (skin, mucus, pH, microbiota)' },
      { id: 's2', label: 'PRRs (germline) detect PAMPs/DAMPs', emphasis: 'key' },
      { id: 's3', label: 'Surface TLRs = microbial coats; endosomal TLRs = nucleic acids', emphasis: 'key' },
      { id: 's4', label: 'NF-κB → TNF/IL-1/IL-6; type I IFN; phagocytosis' },
      { id: 's5', label: 'Inflammation + dendritic maturation → prime adaptive', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'TLR4 recognising bacterial LPS', mechanism: 'Surface PRR for Gram-negative endotoxin', significance: 'key' },
    { sign: 'TLR9 recognising CpG DNA in an endosome', mechanism: 'Endosomal nucleic-acid sensing (viral/bacterial)', significance: 'key' },
    { sign: 'Fever, ↑CRP, neutrophilia', mechanism: 'Acute-phase response (IL-1/IL-6/TNF)', significance: 'supportive' },
    { sign: 'Redness, heat, swelling, pain', mechanism: 'Vasodilation + permeability of acute inflammation', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Receptor sensing double-stranded viral RNA', meaning: 'TLR3 (endosomal)' },
    { clue: 'Receptor for bacterial flagellin', meaning: 'TLR5 (surface)' },
    { clue: 'Cytokines causing fever and acute-phase proteins', meaning: 'IL-1, IL-6, TNF' },
    { clue: 'Broadly conserved microbial molecule triggering innate sensors', meaning: 'A PAMP (e.g. LPS)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'PRR/TNF biology underlies sepsis (LPS→TLR4→cytokine storm) and anti-TNF/IL-1/IL-6 biologic drugs; TLR agonists are vaccine adjuvants. Innate sensing licenses dendritic cells to start adaptive immunity ([[immune-system-overview-cells]]). NK/interferon effectors: [[innate-nk-interferon]].' },
  ],

  mnemonics: [
    { hook: 'Endosomal TLRs 3-7-8-9 = "nucleic acids inside"; surface 2-4-5 = "outside coats"', expansion: ['TLR4 LPS, TLR5 flagellin, TLR9 CpG'] },
    { hook: 'PAMP = Pathogen pattern; PRR = Pattern receptor (germline)', expansion: ['Broad, not clonal'] },
  ],

  traps: [
    {
      questionCategory: 'Are PRRs specific/clonal like antibodies?',
      wrongInstinct: 'Each PRR is clonally rearranged to recognise one unique antigen',
      rightAnswer: 'PRRs are germline-encoded and recognise conserved shared PATTERNS (PAMPs) — not somatically rearranged like BCR/TCR',
      why: 'Innate receptors are fixed and pattern-based; only adaptive receptors (Ig/TCR) are diverse and antigen-specific via V(D)J recombination.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which Toll-like receptor recognises lipopolysaccharide (LPS) of Gram-negative bacteria?',
      options: [
        { id: 'a', text: 'TLR3' },
        { id: 'b', text: 'TLR4' },
        { id: 'c', text: 'TLR9' },
        { id: 'd', text: 'TLR7' },
      ],
      answerId: 'b',
      explanation: 'TLR4 (cell surface) recognises LPS; TLR3 = dsRNA, TLR7 = ssRNA, TLR9 = CpG DNA (all endosomal nucleic-acid sensors).',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Pattern-recognition receptors differ from antibodies and T-cell receptors in that they are:',
      options: [
        { id: 'a', text: 'Somatically rearranged and clonally distributed' },
        { id: 'b', text: 'Germline-encoded and recognise conserved microbial patterns' },
        { id: 'c', text: 'Specific for a single unique epitope' },
        { id: 'd', text: 'Only found on B cells' },
      ],
      answerId: 'b',
      explanation: 'PRRs are germline-encoded, non-clonal, and recognise conserved PAMPs/DAMPs. Antigen-specific diversity via somatic recombination is unique to the adaptive BCR/TCR.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'PRRs sensing PAMPs', svg: TLR_PRR, caption: 'Surface TLRs (4=LPS, 5=flagellin, 2=lipopeptide) vs endosomal TLRs (3=dsRNA, 7/8=ssRNA, 9=CpG) → NF-κB cytokines + type I IFN.' },
  ],
};

export default innateBarriersPrr;
