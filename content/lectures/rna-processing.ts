import type { Lecture } from '../../lib/types';

export const rnaProcessing: Lecture = {
  id: 'rna-processing',
  title: 'RNA Processing & Splicing',
  system: 'molecular',
  source: 'L7 — Transcription & RNA Processing',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Molecular' },
    { kind: 'lecture', label: 'L7 Transcription' },
    { kind: 'disease', label: 'RNA processing' },
    { kind: 'mechanism', label: 'Cap · splice · poly-A' },
    { kind: 'exam', label: 'Splicing defects' },
  ],

  highYield: [
    'Eukaryotic pre-mRNA (**hnRNA**) is modified in the nucleus by three steps: **5′ capping, splicing, and 3′ polyadenylation** (prokaryotes do none of these).',
    '**5′ cap** = a **7-methylguanosine** added via a 5′→5′ triphosphate linkage → **permits translation initiation and stabilizes** the mRNA.',
    '**Splicing** removes **introns** (non-coding) and joins **exons**, performed by the **spliceosome (snRNPs U1, U2, U4, U5, U6)** recognizing consensus sequences at intron ends.',
    '**Polyadenylation**: after cleavage at the **AAUAAA signal**, a **poly-A tail (40–200 A)** is added by poly-A polymerase → **stabilizes mRNA and aids nuclear export**.',
    'Splicing defects cause disease: **β-thalassemia** (mutations disrupting β-globin splicing) and **hemoglobin E** (a β26 G→A point mutation creates a **cryptic splice site** → reduced normal β-globin); **spinal muscular atrophy** is treated by **nusinersen**, an antisense oligonucleotide that redirects SMN2 splicing.',
  ],

  mechanism: {
    title: 'hnRNA → mature mRNA via three modifications',
    steps: [
      { id: 's1', label: 'Add 5′ 7-methylguanosine cap', emphasis: 'key' },
      { id: 's2', label: 'Spliceosome removes introns, joins exons' },
      { id: 's3', label: 'Cleave at AAUAAA + add poly-A tail' },
      { id: 's4', label: 'Export stable mature mRNA to cytosol' },
    ],
  },

  examFindings: [
    { sign: 'Reduced β-globin from a mutation creating an extra splice site', mechanism: 'HbE / β-thalassemia (aberrant splicing)', significance: 'key' },
    { sign: 'mRNA degraded rapidly when uncapped/short poly-A', mechanism: 'Cap & poly-A confer stability', significance: 'supportive' },
    { sign: 'Disease corrected by altering splicing (nusinersen in SMA)', mechanism: 'Antisense oligonucleotide redirects SMN2 splicing', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Cap / poly-A status', meaning: 'mRNA stability & translatability' },
    { clue: 'Splice-site mutation analysis', meaning: 'β-thalassemia / HbE mechanism' },
    { clue: 'Exon vs intron location of a mutation', meaning: 'Effect on splicing/protein' },
  ],

  treatment: [
    { logic: 'Antisense oligonucleotides modulate splicing', detail: 'Nusinersen for spinal muscular atrophy.' },
    { logic: 'mRNA-based therapies exploit capping/modification', detail: 'e.g. modified mRNA vaccines.' },
  ],

  mnemonics: [
    { hook: 'Processing = Cap + Splice + Tail (poly-A)', expansion: ['All three only in eukaryotes'] },
    { hook: 'Spliceosome = snRNPs U1/U2/U4/U5/U6', expansion: ['Remove introns, keep exons'] },
  ],

  traps: [
    {
      questionCategory: 'What splicing removes',
      wrongInstinct: 'Splicing removes exons and keeps introns in the mature mRNA',
      rightAnswer: 'Splicing removes INTRONS (intervening, non-coding) and joins the EXONS (expressed sequences)',
      why: 'Only exons remain in the mature mRNA; a mutation that creates or destroys a splice site (as in HbE/β-thalassemia) disrupts this and alters the protein produced.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which structure carries out the removal of introns from eukaryotic pre-mRNA?',
      options: [
        { id: 'a', text: 'The ribosome' },
        { id: 'b', text: 'The spliceosome (snRNPs)' },
        { id: 'c', text: 'RNA polymerase I' },
        { id: 'd', text: 'Poly-A polymerase' },
      ],
      answerId: 'b',
      explanation: 'The spliceosome, composed of small nuclear ribonucleoproteins (U1, U2, U4, U5, U6), recognizes consensus sequences at intron boundaries and excises introns while joining exons.',
      tests: 'exam',
    },
  ],
};

export default rnaProcessing;
