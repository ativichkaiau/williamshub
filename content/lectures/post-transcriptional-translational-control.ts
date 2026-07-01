import type { Lecture } from '../../lib/types';

export const postTranscriptionalTranslationalControl: Lecture = {
  id: 'post-transcriptional-translational-control',
  title: 'Post-transcriptional & Translational Control',
  system: 'molecular',
  source: 'L9 — Control of Gene Expression',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Molecular' },
    { kind: 'lecture', label: 'L9 Gene Expression' },
    { kind: 'disease', label: 'RNA-level control' },
    { kind: 'mechanism', label: 'Splicing · RNAi · IRE' },
    { kind: 'exam', label: 'miRNA vs siRNA' },
  ],

  highYield: [
    '**Alternative splicing** lets one gene make **multiple protein isoforms** in different tissues (e.g. tropomyosin); **alternative polyadenylation** (e.g. IgM membrane vs secreted form) and mRNA stability (UTR-binding) also regulate output.',
    '**RNA editing**: cytidine deaminase edits a **C→U** in intestinal apoB mRNA, creating a stop codon → **ApoB-48** (truncated); the liver keeps **ApoB-100** (full, binds LDL receptor).',
    '**RNA interference (RNAi)**: **miRNA** (partial complementarity → RISC represses/degrades many targets) and **siRNA** (100% complementarity → cleaves one specific mRNA) — sequence-specific gene silencing; both used therapeutically.',
    '**Translational control**: **phosphorylation of eIF-2 represses initiation** — the cell’s response to **stress (hypoxia, nutrient deprivation)**.',
    '**Iron regulation via iron-response elements (IRE)** bound by **aconitase (IRP)**: low iron → aconitase binds; on **ferritin mRNA (5′UTR)** this **blocks translation** (less storage), while on **transferrin-receptor mRNA (3′UTR)** it **stabilizes** the mRNA (more uptake). High iron reverses both.',
  ],

  mechanism: {
    title: 'Regulate output after transcription — RNA fate & translation',
    steps: [
      { id: 's1', label: 'Alternative splicing/polyadenylation → isoforms' },
      { id: 's2', label: 'RNAi (miRNA/siRNA) silences specific mRNAs', emphasis: 'key' },
      { id: 's3', label: 'eIF-2 phosphorylation halts initiation under stress' },
      { id: 's4', label: 'Iron/IRE tunes ferritin vs transferrin-receptor', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Tissue-specific protein isoforms from one gene', mechanism: 'Alternative splicing', significance: 'key' },
    { sign: 'Intestinal ApoB-48 vs hepatic ApoB-100', mechanism: 'RNA editing (cytidine deaminase)', significance: 'key' },
    { sign: 'Ferritin up / transferrin-receptor down when iron is high', mechanism: 'Aconitase releases IREs', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'miRNA vs siRNA complementarity', meaning: 'Partial (repress many) vs perfect (cleave one)' },
    { clue: 'eIF-2 phosphorylation status', meaning: 'Translational stress response' },
    { clue: 'IRE location (5′ vs 3′ UTR)', meaning: 'Translation block vs mRNA stabilization' },
  ],

  treatment: [
    { logic: 'RNAi-based drugs (siRNA/antisense) silence target genes', detail: 'Sequence-specific therapeutics.' },
    { logic: 'Iron handling is post-transcriptionally coordinated', detail: 'Ferritin (storage) vs transferrin receptor (uptake).' },
  ],

  mnemonics: [
    { hook: 'miRNA = many targets, partial match, represses; siRNA = single target, perfect match, cleaves', expansion: ['Both via RISC'] },
    { hook: 'Low iron: aconitase blocks ferritin (5′UTR), stabilizes TfR (3′UTR)', expansion: ['Make receptor, not storage'] },
  ],

  traps: [
    {
      questionCategory: 'miRNA vs siRNA',
      wrongInstinct: 'siRNA and miRNA both bind with partial complementarity and only repress translation',
      rightAnswer: 'siRNA has 100% complementarity and cleaves its single target mRNA; miRNA binds partially and represses/destabilizes multiple targets',
      why: 'The degree of base-pairing distinguishes them — perfect matching (siRNA) triggers cleavage with tight specificity, while partial matching (miRNA) lets one miRNA regulate many mRNAs.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'When cellular iron is low, aconitase (IRP) binds the iron-response element in the 5′UTR of ferritin mRNA. The effect on ferritin is to:',
      options: [
        { id: 'a', text: 'Increase ferritin translation' },
        { id: 'b', text: 'Block ferritin translation' },
        { id: 'c', text: 'Degrade ferritin mRNA' },
        { id: 'd', text: 'Add a poly-A tail' },
      ],
      answerId: 'b',
      explanation: 'Aconitase binding the 5′UTR IRE of ferritin mRNA blocks its translation, so less iron-storage protein is made when iron is scarce (while it stabilizes transferrin-receptor mRNA to boost uptake).',
      tests: 'exam',
    },
  ],
};

export default postTranscriptionalTranslationalControl;
