import type { Lecture } from '../../lib/types';
import { GENE_EXPRESSION_FLOW } from '../../lib/figures';

export const transcriptionMechanism: Lecture = {
  id: 'transcription-mechanism',
  title: 'Transcription Mechanism',
  system: 'molecular',
  source: 'L7 — Transcription & RNA Processing',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Molecular' },
    { kind: 'lecture', label: 'L7 Transcription' },
    { kind: 'disease', label: 'RNA synthesis' },
    { kind: 'mechanism', label: 'RNA polymerase' },
    { kind: 'exam', label: 'Template vs coding strand' },
  ],

  highYield: [
    'Transcription = **RNA polymerase** synthesizes RNA **5′→3′** from a DNA **template (antisense) strand**, so the RNA matches the **coding (sense/non-template) strand** (with U for T). No primer needed; uses NTPs.',
    'The **promoter** (on the coding strand) sets the start/direction: prokaryotes use the **−10 Pribnow box (TATAAT)** and **−35 (TTGACA)**.',
    'Eukaryotes use **three RNA polymerases: I = rRNA, II = mRNA, III = tRNA/5S rRNA/snRNA**, plus **general transcription factors** (TFIID/TBP binds the TATA box) and **enhancers** (bind activators; can act far away, on either strand).',
    'Inhibitors: **rifampin** blocks the **bacterial** RNA polymerase (β subunit — antibiotic); **α-amanitin** (death-cap mushroom) blocks eukaryotic **RNA polymerase II**.',
    'Prokaryotic mRNA is **polycistronic (operons)** with **no introns**; eukaryotic mRNA is monocistronic and requires processing (next module).',
  ],

  mechanism: {
    title: 'Promoter → RNA polymerase reads the template 5′→3′',
    steps: [
      { id: 's1', label: 'RNA pol binds the promoter' },
      { id: 's2', label: 'Reads template strand → RNA 5′→3′', emphasis: 'key' },
      { id: 's3', label: 'Elongation (helicase unwinds, polymerase adds NTPs)' },
      { id: 's4', label: 'Termination → RNA released' },
    ],
  },

  examFindings: [
    { sign: 'RNA sequence identical to the coding strand (with U)', mechanism: 'Template strand is copied; coding strand matches RNA', significance: 'key' },
    { sign: 'Rifampin stops bacterial (not human) transcription', mechanism: 'Bacterial RNA polymerase β subunit', significance: 'key' },
    { sign: 'α-amanitin poisoning blocks mRNA synthesis', mechanism: 'RNA polymerase II inhibition', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Which RNA polymerase (I/II/III)', meaning: 'rRNA vs mRNA vs tRNA/small RNA' },
    { clue: 'Promoter/enhancer elements', meaning: 'Where/whether a gene is transcribed' },
    { clue: 'Template vs coding strand', meaning: 'Predicts the RNA sequence' },
  ],

  treatment: [
    { logic: 'Rifampin exploits bacterial RNA polymerase', detail: 'Selective antibiotic target.' },
    { logic: 'Transcription factors decide gene expression', detail: 'Basis of regulated expression.' },
  ],

  mnemonics: [
    { hook: 'RNA pol I=rRNA, II=mRNA, III=tRNA (roman numerals ascending by RNA size role)', expansion: ['α-amanitin hits Pol II'] },
    { hook: 'Rifampin = bacterial RNA pol; α-amanitin = eukaryotic Pol II', expansion: ['Selective inhibitors'] },
  ],

  traps: [
    {
      questionCategory: 'Template vs coding strand',
      wrongInstinct: 'The RNA transcript has the same sequence as the template strand it is read from',
      rightAnswer: 'RNA is complementary to the TEMPLATE strand and therefore identical (with U for T) to the CODING (sense) strand',
      why: 'Because RNA polymerase base-pairs with the template, the product matches the opposite (coding) strand — a frequent source of confusion when writing an mRNA sequence.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A toxin from the death-cap mushroom (α-amanitin) blocks messenger RNA synthesis. Its target is:',
      options: [
        { id: 'a', text: 'Bacterial RNA polymerase' },
        { id: 'b', text: 'RNA polymerase II' },
        { id: 'c', text: 'RNA polymerase I' },
        { id: 'd', text: 'DNA polymerase' },
      ],
      answerId: 'b',
      explanation: 'α-amanitin inhibits RNA polymerase II, which transcribes mRNA (and RNA pol III at high concentrations), halting protein-coding gene expression.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Gene expression flow', svg: GENE_EXPRESSION_FLOW, caption: 'DNA → (transcription) pre-mRNA → (cap/splice/poly-A) mature mRNA → (translation) polypeptide → (PTM) functional protein.' },
  ],
};

export default transcriptionMechanism;
