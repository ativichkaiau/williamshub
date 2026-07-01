import type { Lecture } from '../../lib/types';

export const meiosisRecombination: Lecture = {
  id: 'meiosis-recombination',
  title: 'Meiosis, Synapsis & Recombination',
  system: 'molecular',
  source: 'L6 — Cell Cycle & Human Chromosomes',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Genetics' },
    { kind: 'lecture', label: 'HGD L6' },
    { kind: 'mechanism', label: 'Reduction division and crossing over' },
    { kind: 'exam', label: 'Meiosis I vs II' },
  ],
  highYield: [
    '**Meiosis I is the reduction division**: homologous chromosomes pair, recombine, and separate, reducing diploid to haploid. **Meiosis II** separates sister chromatids without another S phase.',
    'Prophase I stages are leptotene, zygotene, pachytene, diplotene, and diakinesis. **Synapsis begins in zygotene; crossing over occurs in pachytene; chiasmata become visible in diplotene.**',
    'A paired homologous unit is a **bivalent** containing four chromatids (a tetrad). Crossing over occurs between nonsister chromatids and generates recombinant chromosomes.',
    'At anaphase I homologs disjoin; at anaphase II sister chromatids disjoin. A normal meiosis produces four genetically distinct haploid products.',
    'X and Y pair and recombine only in **pseudoautosomal regions**. Abnormal SRY exchange can produce an SRY-positive 46,XX male or SRY-negative 46,XY female.',
  ],
  mechanism: {
    title: 'Pair homologs, recombine, then separate twice',
    steps: [
      { id: 's1', label: 'Prophase I: homolog synapsis -> bivalent' },
      { id: 's2', label: 'Pachytene crossing over -> recombination', emphasis: 'key' },
      { id: 's3', label: 'Meiosis I separates homologous chromosomes' },
      { id: 's4', label: 'Meiosis II separates sister chromatids' },
    ],
  },
  examFindings: [
    { sign: 'Chiasmata visible between homologs', mechanism: 'Diplotene after pachytene crossing over', significance: 'key' },
    { sign: 'Homologs move apart but centromeres remain intact', mechanism: 'Anaphase I', significance: 'key' },
    { sign: 'SRY translocated to X chromosome', mechanism: 'Abnormal recombination near pseudoautosomal boundary', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Parental haplotype/recombination analysis', meaning: 'Map meiotic crossovers' },
    { clue: 'Karyotype/FISH for sex chromosomes and SRY', meaning: 'Evaluate discordant chromosomal and gonadal sex' },
    { clue: 'Gamete or conceptus chromosome analysis', meaning: 'Identify meiotic segregation errors' },
  ],
  treatment: [
    { logic: 'Ask what separates at each division', detail: 'Homologs in I; sister chromatids in II.' },
    { logic: 'Localize recombination to pachytene', detail: 'Synapsis precedes it, and visible chiasmata follow it.' },
  ],
  mnemonics: [
    { hook: 'Zips in zygotene, crosses in pachytene, chiasmata in diplotene', expansion: ['Prophase-I sequence'] },
    { hook: 'One splits homologs; two splits sisters', expansion: ['Meiosis I versus II'] },
  ],
  traps: [
    {
      questionCategory: 'What separates in meiosis I',
      wrongInstinct: 'Sister chromatids separate at anaphase I just as in mitosis',
      rightAnswer: 'Homologous chromosomes separate in anaphase I; sisters remain joined until meiosis II',
      why: 'This is what makes meiosis I the reduction division.',
    },
  ],
  quiz: [
    {
      id: 'q1',
      stem: 'During which prophase-I stage does crossing over primarily occur?',
      options: [
        { id: 'a', text: 'Leptotene' },
        { id: 'b', text: 'Zygotene' },
        { id: 'c', text: 'Pachytene' },
        { id: 'd', text: 'Diakinesis' },
      ],
      answerId: 'c',
      explanation: 'Homologs are fully synapsed in pachytene, allowing crossing over between nonsister chromatids.',
      tests: 'exam',
    },
  ],
};

export default meiosisRecombination;
