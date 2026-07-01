import type { Lecture } from '../../lib/types';

export const cloningPcrSequencing: Lecture = {
  id: 'cloning-pcr-sequencing',
  title: 'Cloning, PCR & Sequencing',
  system: 'molecular',
  source: 'L10 — Molecular Techniques',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Molecular' },
    { kind: 'lecture', label: 'L10 Molecular Techniques' },
    { kind: 'disease', label: 'Lab techniques' },
    { kind: 'mechanism', label: 'Amplify & read DNA' },
    { kind: 'exam', label: 'PCR / qPCR / RT-PCR' },
  ],

  highYield: [
    '**DNA cloning**: cut DNA + vector with a **restriction enzyme** (type II — palindromic recognition sites), join with **DNA ligase** → **recombinant DNA**, transform into host, amplify, and select clones. **Expression vectors** produce recombinant proteins (**insulin, erythropoietin, growth hormone, hepatitis B vaccine**).',
    '**PCR** amplifies a DNA segment to millions of copies using **two primers, dNTPs, and heat-stable Taq polymerase** through repeated **denaturation → annealing → extension** cycles.',
    '**Real-time (quantitative) PCR (qPCR)** adds **fluorescent detection each cycle** to **quantify** template (cycle threshold, Ct); **RT-PCR** first makes **cDNA from RNA (reverse transcriptase)** — used for **gene-expression analysis and RNA-virus detection (e.g. COVID RT-PCR)**.',
    '**Sanger sequencing** uses **chain-terminating dideoxynucleotides** (dye-terminator + capillary electrophoresis in the automated version). **Next-generation sequencing (NGS)** massively parallelizes reads (Illumina sequencing-by-synthesis); third-generation (**PacBio, Oxford Nanopore**) reads single molecules.',
    '**STR (short tandem repeat) analysis** for **DNA profiling/forensics**: multiplex PCR of variable microsatellite loci → an electropherogram unique to each individual.',
  ],

  mechanism: {
    title: 'Copy, amplify, quantify, and read DNA',
    steps: [
      { id: 's1', label: 'Restriction enzyme + ligase → recombinant DNA' },
      { id: 's2', label: 'PCR amplifies via denature/anneal/extend', emphasis: 'key' },
      { id: 's3', label: 'qPCR quantifies; RT-PCR reads RNA (cDNA)' },
      { id: 's4', label: 'Sanger/NGS determine the sequence' },
    ],
  },

  examFindings: [
    { sign: 'Millions of DNA copies from a tiny sample in hours', mechanism: 'PCR amplification', significance: 'key' },
    { sign: 'Viral load reported as a cycle threshold (Ct)', mechanism: 'Real-time RT-PCR', significance: 'key' },
    { sign: 'Individual-specific DNA profile', mechanism: 'STR (microsatellite) analysis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'DNA vs RNA starting material', meaning: 'PCR vs RT-PCR (needs reverse transcription)' },
    { clue: 'End-point vs real-time detection', meaning: 'Qualitative PCR vs quantitative qPCR' },
    { clue: 'Restriction site / vector choice', meaning: 'Cloning strategy' },
  ],

  treatment: [
    { logic: 'Recombinant proteins are made by expression cloning', detail: 'Insulin, EPO, clotting factors, vaccines.' },
    { logic: 'RT-PCR underpins infectious-disease diagnostics', detail: 'e.g. SARS-CoV-2.' },
  ],

  mnemonics: [
    { hook: 'PCR cycle: Denature → Anneal → Extend', expansion: ['Taq polymerase, two primers'] },
    { hook: 'RT-PCR: Reverse-Transcribe RNA → cDNA → PCR', expansion: ['For RNA/gene expression'] },
  ],

  traps: [
    {
      questionCategory: 'Detecting RNA by PCR',
      wrongInstinct: 'Standard PCR can directly amplify an RNA virus genome',
      rightAnswer: 'RNA must first be reverse-transcribed into cDNA (RT-PCR); standard PCR only amplifies DNA',
      why: 'DNA polymerase used in PCR needs a DNA template, so detecting RNA (e.g. SARS-CoV-2) requires reverse transcriptase to make cDNA before amplification.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which technique is required to detect and quantify an RNA virus such as SARS-CoV-2 from a swab?',
      options: [
        { id: 'a', text: 'Standard (DNA) PCR' },
        { id: 'b', text: 'Real-time RT-PCR' },
        { id: 'c', text: 'Sanger sequencing only' },
        { id: 'd', text: 'Restriction digestion' },
      ],
      answerId: 'b',
      explanation: 'Real-time RT-PCR reverse-transcribes the viral RNA into cDNA and then amplifies it with fluorescent detection each cycle, allowing quantification (Ct value).',
      tests: 'exam',
    },
  ],
};

export default cloningPcrSequencing;
