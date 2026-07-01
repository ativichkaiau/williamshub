import type { Lecture } from '../../lib/types';

export const epigeneticsTranscriptionalControl: Lecture = {
  id: 'epigenetics-transcriptional-control',
  title: 'Epigenetics & Transcriptional Control',
  system: 'molecular',
  source: 'L9 — Control of Gene Expression',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Molecular' },
    { kind: 'lecture', label: 'L9 Gene Expression' },
    { kind: 'disease', label: 'Gene regulation' },
    { kind: 'mechanism', label: 'Methylation & acetylation' },
    { kind: 'exam', label: 'Epigenetics' },
  ],

  highYield: [
    '**Epigenetics** = **heritable, reversible** changes in gene expression **not involving the DNA sequence**; modulated by environment/lifestyle.',
    '**DNA methylation** (DNMT adds methyl to cytosine at **CpG islands**) **silences transcription** — a hypermethylated promoter → **heterochromatin** (via MeCP + HDAC).',
    '**Histone acetylation (HAT)** loosens chromatin → **active transcription** (euchromatin); **histone deacetylation (HDAC)** condenses chromatin → **silencing**. So: unmethylated promoter + acetylated histones = active; hypermethylated + hypoacetylated = silenced.',
    '**Transcriptional control via signaling**: **steroid (lipid-soluble) hormones** cross the membrane to **intracellular receptors** → act directly as transcription factors; **peptide/nonsteroid hormones (e.g. insulin)** bind **membrane receptors** → phosphorylation cascades that activate TFs.',
    'Epigenetic changes are drug targets (e.g. **HDAC inhibitors**, DNA methyltransferase inhibitors) — restoring normal expression in cancer.',
  ],

  mechanism: {
    title: 'Open or close chromatin to switch genes on/off',
    steps: [
      { id: 's1', label: 'DNA methylation (CpG) → silence', emphasis: 'key' },
      { id: 's2', label: 'Histone acetylation (HAT) → active (euchromatin)' },
      { id: 's3', label: 'HDAC / methylation → condensed (heterochromatin)' },
      { id: 's4', label: 'Signals (steroid/peptide) tune transcription factors' },
    ],
  },

  examFindings: [
    { sign: 'Gene silenced by promoter CpG hypermethylation', mechanism: 'DNA methylation → heterochromatin', significance: 'key' },
    { sign: 'Reactivation of expression by an HDAC inhibitor', mechanism: 'Histone acetylation opens chromatin', significance: 'key' },
    { sign: 'Direct nuclear action of a steroid hormone', mechanism: 'Intracellular receptor as transcription factor', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Promoter methylation status', meaning: 'Active vs silenced gene' },
    { clue: 'Histone acetylation state', meaning: 'Euchromatin vs heterochromatin' },
    { clue: 'Hormone type (steroid vs peptide)', meaning: 'Intracellular vs membrane-receptor signaling' },
  ],

  treatment: [
    { logic: 'HDAC and DNMT inhibitors in oncology', detail: 'Reverse aberrant silencing/activation.' },
    { logic: 'Epigenetics is reversible', detail: 'Distinguishes it from mutation.' },
  ],

  mnemonics: [
    { hook: 'Methylation Mutes; Acetylation Activates', expansion: ['CpG methylation silences; HAT opens chromatin'] },
    { hook: 'Steroid → intracellular receptor; Peptide → membrane receptor', expansion: ['Lipid-soluble vs water-soluble hormones'] },
  ],

  traps: [
    {
      questionCategory: 'Epigenetic vs genetic change',
      wrongInstinct: 'Epigenetic gene silencing requires a change in the underlying DNA base sequence',
      rightAnswer: 'Epigenetic regulation (methylation, histone modification) is reversible and does NOT alter the DNA sequence',
      why: 'Unlike a mutation, epigenetic marks change gene accessibility without editing the code, which is why they are heritable yet reversible and influenced by environment/diet.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which of the following best describes epigenetic regulation of gene expression?',
      options: [
        { id: 'a', text: 'It requires editing of the DNA base sequence' },
        { id: 'b', text: 'It is reversible and can be influenced by environmental factors such as diet' },
        { id: 'c', text: 'It occurs only during embryonic development' },
        { id: 'd', text: 'It affects only translation, not transcription' },
      ],
      answerId: 'b',
      explanation: 'Epigenetic mechanisms (DNA methylation, histone modification) are heritable but reversible changes in expression that do not alter the DNA sequence and can be modulated by the environment.',
      tests: 'exam',
    },
  ],
};

export default epigeneticsTranscriptionalControl;
