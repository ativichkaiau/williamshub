import type { Lecture } from '../../lib/types';
import { KARYOTYPE_NOTATION } from '../../lib/figures';

export const cytogeneticNomenclatureBasics: Lecture = {
  id: 'cytogenetic-nomenclature-basics',
  title: 'ISCN Nomenclature: Symbols & Numerical Karyotypes',
  system: 'molecular',
  source: 'L8 — Cytogenetic Nomenclature',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Genetics' },
    { kind: 'lecture', label: 'L8 Cytogenetic Nomenclature' },
    { kind: 'disease', label: 'ISCN karyotype' },
    { kind: 'mechanism', label: 'Reading a karyotype string' },
    { kind: 'exam', label: '47,XY,+21' },
  ],

  highYield: [
    '**A karyotype is written in a fixed order: (1) total chromosome number, (2) sex chromosomes, (3) abnormalities** — each separated by commas. Normal = **46,XX** (female) / **46,XY** (male).',
    '**Whole-chromosome gain/loss uses + / −** placed *before* the chromosome: **47,XY,+21** (trisomy 21), **45,XX,−7** (monosomy 7), **45,X** (Turner), **47,XXY** (Klinefelter).',
    '**Ordering rules**: sex chromosomes go **X before Y before autosomes**; **autosomes in ascending number**; **numerical changes before structural** ones. e.g. 47,XY,+7,inv(7)(p14q34).',
    '**Punctuation carries meaning**: **( )** surround an altered chromosome and its breakpoints; **;** separates chromosomes/breakpoints in rearrangements involving >1 chromosome; **[ ]** = number of cells; **/** separates clones; **.** denotes sub-bands (17p11.2); **?** = uncertain; **~** = a range.',
    '**Band designation**: **p = short arm, q = long arm**; the centromere = band 10 (**p10 / q10**); bands are numbered from the centromere outward toward the telomere (**pter / qter**).',
  ],

  mechanism: {
    title: 'Decode the string left to right',
    steps: [
      { id: 's1', label: 'Number first (46, 47, 45…)', emphasis: 'key' },
      { id: 's2', label: 'Then sex chromosomes (XX / XY / X / XXY)' },
      { id: 's3', label: 'Then abnormalities: +/− for whole chromosomes' },
      { id: 's4', label: 'Band = arm (p/q) + region + band + sub-band' },
    ],
  },

  examFindings: [
    { sign: '47,XY,+21', mechanism: 'Male with trisomy 21 (Down syndrome)', significance: 'key' },
    { sign: '45,X', mechanism: 'Monosomy X (Turner syndrome)', significance: 'key' },
    { sign: '47,XX,+21[10]/46,XX[5]', mechanism: 'Mosaic: trisomy 21 in 10 cells, normal in 5', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Total number then sex complement', meaning: 'Baseline ploidy and sex' },
    { clue: '+ or − before a chromosome', meaning: 'Whole-chromosome aneuploidy' },
    { clue: 'Brackets [n]', meaning: 'How many cells carried that karyotype (clone size)' },
  ],

  treatment: [
    { logic: 'Nomenclature guides counseling, not therapy', detail: 'A precise karyotype string communicates the abnormality unambiguously.' },
  ],

  mnemonics: [
    { hook: 'Number, sex, then abnormalities — X before Y before autosomes', expansion: ['Ascending autosome order'] },
    { hook: '+/− before the chromosome = whole-chromosome gain/loss', expansion: ['47,XY,+21 = trisomy 21'] },
  ],

  traps: [
    {
      questionCategory: 'Where the + or − sign goes',
      wrongInstinct: 'Trisomy 21 is written 47,XY,21+',
      rightAnswer: 'The sign precedes the chromosome for whole-chromosome changes: 47,XY,+21 (a trailing sign after a band would instead refer to arm gain/loss in older shorthand, which ISCN discourages)',
      why: 'ISCN puts +/− before the chromosome number for aneuploidy; "21q+" style shorthand is not used in a formal karyotype.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'What does the karyotype 47,XY,+21 describe?',
      options: [
        { id: 'a', text: 'A female with monosomy 21' },
        { id: 'b', text: 'A male with trisomy 21 (Down syndrome)' },
        { id: 'c', text: 'A male with a deletion of 21' },
        { id: 'd', text: 'A mosaic male' },
      ],
      answerId: 'b',
      explanation: '47 chromosomes, XY (male), +21 (an extra chromosome 21) = a male with trisomy 21, i.e. Down syndrome. The + precedes the gained chromosome.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Reading an ISCN karyotype', svg: KARYOTYPE_NOTATION, caption: 'Number → sex chromosomes → abnormality → chromosome → band (p = short arm). +/− marks whole-chromosome gain/loss.' },
  ],
};

export default cytogeneticNomenclatureBasics;
