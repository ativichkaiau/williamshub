import type { Lecture } from '../../lib/types';
import { GENE_EXPRESSION_FLOW } from '../../lib/figures';

export const ghpTranscriptionGeneticCode: Lecture = {
  id: 'ghp-transcription-genetic-code',
  title: 'Transcription & the Genetic Code',
  system: 'molecular',
  source: 'Ch 3 — Genetic Control of Protein Synthesis & Cell Reproduction',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Molecular' },
    { kind: 'lecture', label: 'Ch 3 Genetic Control' },
    { kind: 'mechanism', label: 'DNA → RNA' },
    { kind: 'mechanism', label: 'Codon triplets' },
    { kind: 'exam', label: 'Template vs coding strand' },
  ],

  highYield: [
    '**The gene is a blueprint that never leaves the nucleus.** DNA is transcribed into RNA, and RNA carries the message out to the ribosome. **RNA polymerase reads the template (antisense) strand 3′→5′ and builds RNA 5′→3′**, so the transcript is identical to the **coding (sense) strand** with **U replacing T**. No primer is needed, and RNA uses **ribose + uracil** instead of deoxyribose + thymine.',
    '**The promoter decides where and in which direction transcription starts** — it is the switch, not the message. Bacteria: the **σ factor** steers polymerase to the **−10 (TATAAT)** and **−35** boxes. Eukaryotes: **TFIID/TBP binds the TATA box (~−25)**, the pre-initiation complex assembles, and distant **enhancers** bound by activators dial the rate up (silencers down). Regulation is overwhelmingly at initiation — cells differ in which genes they read, not in which genes they own.',
    '**Three eukaryotic polymerases split the work: Pol I = rRNA, Pol II = mRNA, Pol III = tRNA and 5S rRNA.** Only **Pol II** makes protein-coding message, which is why **α-amanitin** (death-cap) is lethal and **rifampin** (bacterial polymerase β subunit) is a safe antibiotic.',
    '**The genetic code is read in triplets: 64 codons = 61 sense + 3 stop (UAA, UAG, UGA); AUG is both "start" and methionine.** It is **degenerate** (most amino acids have several codons, differing at the wobbly **third base**), **non-overlapping**, **comma-free** and **near-universal**. Degeneracy is protective: many third-base substitutions are **silent**.',
    '**Eukaryotic pre-mRNA must be processed before it can be used: 5′ 7-methylguanosine cap, 3′ poly-A tail, and splicing.** The **spliceosome (snRNPs)** excises introns at **GU…AG** boundaries and joins exons; **alternative splicing** lets one gene yield several proteins. Cap and tail protect the transcript and license export and ribosome loading. Prokaryotes skip all of this — no nucleus, no introns, **polycistronic operons**, transcription and translation coupled.',
    '**Clinical anchor: mutations outside the coding sequence still cause disease.** A **splice-site point mutation** in the β-globin gene causes **β-thalassaemia** despite normal exons; **anti-Sm antibodies in SLE** are directed at spliceosomal snRNPs. Promoter and splice machinery are as pathogenic as the codons themselves.',
  ],

  mechanism: {
    title: 'Promoter → RNA polymerase → pre-mRNA → processed message',
    steps: [
      { id: 's1', label: 'Promoter recognised (σ factor / TFIID-TBP at TATA)' },
      { id: 's2', label: 'Helix unwinds; template strand read 3′→5′', emphasis: 'key' },
      { id: 's3', label: 'RNA built 5′→3′ from NTPs → pre-mRNA (hnRNA)' },
      { id: 's4', label: 'Cap + poly-A added; introns spliced out', emphasis: 'key' },
      { id: 's5', label: 'Mature mRNA exported through the nuclear pore' },
      { id: 's6', label: 'Message now readable as codon triplets', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Transcript sequence matches the coding strand, with U for T', mechanism: 'Polymerase base-pairs with the template, so the product mirrors the opposite strand', significance: 'key' },
    { sign: 'One gene produces several protein isoforms', mechanism: 'Alternative splicing of the same pre-mRNA', significance: 'key' },
    { sign: 'β-thalassaemia with a normal coding sequence', mechanism: 'Splice-site mutation → intron retained → unusable message', significance: 'key' },
    { sign: 'Rifampin stops bacterial but not human RNA synthesis', mechanism: 'Bacterial RNA polymerase β subunit is structurally distinct', significance: 'supportive' },
    { sign: 'Anti-Sm antibodies are highly specific for SLE', mechanism: 'Autoantibodies against spliceosomal snRNP proteins', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Three consecutive mRNA bases read as one unit', meaning: 'A codon — 64 exist (61 sense, 3 stop)' },
    { clue: 'AUG at the start of the reading frame', meaning: 'Start codon; also encodes methionine' },
    { clue: 'UAA, UAG or UGA', meaning: 'Stop codons — no tRNA reads them; release factors bind instead' },
    { clue: 'Several codons encoding one amino acid', meaning: 'Degeneracy, usually at the third (wobble) base — third-base changes are often silent' },
    { clue: 'A segment present in the gene but absent from mature mRNA', meaning: 'An intron (exons are expressed and retained)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Transcription is the main control point of the whole cell: every cell holds the same genome, so identity, differentiation and hormone responses all come down to which promoters are switched on. The processed message is then handed straight to the ribosome — see [[ghp-translation-ribosomes]] — and the nuclear/nucleolar machinery that performs it is covered in [[ghp-cell-organelles-functions]].' },
    { logic: 'Drug and disease leverage', detail: 'Selective toxicity is possible because bacterial and human polymerases differ (**rifampin** vs **α-amanitin**), and errors in DNA copied for the next generation feed straight into [[ghp-cell-cycle-mitosis-apoptosis]]. Steroid and thyroid hormones act by binding nuclear receptors that behave as transcription factors — endocrine signalling is transcriptional control.' },
  ],

  mnemonics: [
    { hook: 'Pol I = rRNA, Pol II = mRNA, Pol III = tRNA — count up as the product gets smaller', expansion: ['α-amanitin hits Pol II (mRNA) → death-cap poisoning', 'Rifampin hits the bacterial polymerase → antibiotic'] },
    { hook: 'UGA, UAA, UAG = U Go Away, U Are Away, U Are Gone', expansion: ['The three stop codons', 'AUG = start = methionine'] },
  ],

  traps: [
    {
      questionCategory: 'Template vs coding strand',
      wrongInstinct: 'The mRNA has the same sequence as the strand the polymerase reads',
      rightAnswer: 'mRNA is complementary to the TEMPLATE strand and therefore identical (U for T) to the CODING strand',
      why: 'Polymerase base-pairs with the template, so the product copies the other strand — write out the coding strand and just swap T for U.',
    },
    {
      questionCategory: 'Where a mutation does its damage',
      wrongInstinct: 'A base change that does not alter an amino acid is harmless',
      rightAnswer: 'A silent change at a splice junction, promoter or Kozak sequence can abolish the protein entirely',
      why: 'The code is only part of the message — processing signals are sequence too, as β-thalassaemia splice mutations show.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A DNA template strand reads 3′-TAC-GGA-TTA-5′. What is the corresponding mRNA?',
      options: [
        { id: 'a', text: '5′-AUG-CCU-AAU-3′' },
        { id: 'b', text: '5′-TAC-GGA-TTA-3′' },
        { id: 'c', text: '5′-UAC-GGA-UUA-3′' },
        { id: 'd', text: '3′-AUG-CCU-AAU-5′' },
      ],
      answerId: 'a',
      explanation: 'RNA is complementary and antiparallel to the template, and uses U for T: TAC→AUG, GGA→CCU, TTA→AAU, written 5′→3′. Option c copies the template instead of complementing it; b keeps thymine; d has the polarity reversed.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A child has severe β-thalassaemia, yet sequencing of the β-globin exons is entirely normal. The most likely explanation is:',
      options: [
        { id: 'a', text: 'A nonsense mutation in exon 2' },
        { id: 'b', text: 'A mutation at an intron–exon splice site' },
        { id: 'c', text: 'A frameshift in exon 1' },
        { id: 'd', text: 'A defect in the aminoacyl-tRNA synthetase' },
      ],
      answerId: 'b',
      explanation: 'Splice-site mutations leave the coding sequence intact but prevent correct intron removal, so no functional β-globin message is produced. Options a and c would appear as exon abnormalities on sequencing; d would impair all proteins, not one.',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'Which property of the genetic code explains why many third-base substitutions cause no change in the protein?',
      options: [
        { id: 'a', text: 'The code is overlapping' },
        { id: 'b', text: 'The code is degenerate, with wobble at the third position' },
        { id: 'c', text: 'The code contains three stop codons' },
        { id: 'd', text: 'The code is universal across species' },
      ],
      answerId: 'b',
      explanation: 'Degeneracy means most amino acids are specified by several codons that differ at the third base, so many such substitutions are silent. The code is explicitly non-overlapping; stop codons and universality are true but irrelevant here.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Gene expression flow', svg: GENE_EXPRESSION_FLOW, caption: 'DNA → (transcription) pre-mRNA → (cap, splice, poly-A) mature mRNA → (translation) polypeptide → functional protein. Prokaryotes skip processing and couple the two steps.' },
  ],
};

export default ghpTranscriptionGeneticCode;
