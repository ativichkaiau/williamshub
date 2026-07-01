import type { Lecture } from '../../lib/types';

export const numericalChromosomeAbnormalities: Lecture = {
  id: 'numerical-chromosome-abnormalities',
  title: 'Aneuploidy & Polyploidy',
  system: 'molecular',
  source: 'L7 — Chromosome Aberrations',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Genetics' },
    { kind: 'lecture', label: 'HGD L7' },
    { kind: 'disease', label: 'Trisomy / monosomy / polyploidy' },
    { kind: 'mechanism', label: 'Nondisjunction' },
    { kind: 'exam', label: 'Meiosis I vs II error' },
  ],
  highYield: [
    '**Aneuploidy** is gain or loss of individual chromosomes: trisomy has one extra copy (e.g. 47,XY,+21), while monosomy lacks one (e.g. 45,X).',
    '**Nondisjunction in meiosis I** sends both homologs to one gamete; abnormal gametes therefore contain both parental homologs or neither. **Meiosis-II nondisjunction** sends both sister chromatids together, producing two normal gametes plus one disomic and one nullisomic gamete.',
    'Premature sister-chromatid separation and anaphase lag are additional routes to aneuploidy. Postzygotic mitotic errors can generate mosaicism.',
    '**Polyploidy** is addition of complete haploid sets. Triploidy is 69 chromosomes, commonly from dispermy or a diploid gamete; paternal extra sets are associated with an abnormal/partial-molar placenta.',
    'Tetraploidy is 92 chromosomes and often results from failure of cytokinesis/early cleavage after DNA replication. Most autosomal monosomies and whole-genome polyploidies are not compatible with live birth.',
  ],
  mechanism: {
    title: 'Segregation error changes chromosome dosage',
    steps: [
      { id: 's1', label: 'Homolog or sister-chromatid disjunction fails', emphasis: 'key' },
      { id: 's2', label: 'Gamete becomes disomic or nullisomic' },
      { id: 's3', label: 'Fertilization -> trisomic or monosomic conceptus' },
      { id: 's4', label: 'Whole-set error -> triploidy or tetraploidy' },
    ],
  },
  examFindings: [
    { sign: '47,XY,+21', mechanism: 'Male with trisomy 21 (Down syndrome)', significance: 'key' },
    { sign: '45,X', mechanism: 'Monosomy X (Turner syndrome)', significance: 'key' },
    { sign: '69,XXY with partial molar placenta', mechanism: 'Triploidy, often diandric/dispermic', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Karyotype', meaning: 'Identify whole-chromosome and whole-set numerical abnormalities' },
    { clue: 'Rapid aneuploidy FISH/QF-PCR', meaning: 'Target common trisomies and sex chromosomes' },
    { clue: 'Parental-marker analysis', meaning: 'Distinguish meiotic stage and parental origin' },
  ],
  treatment: [
    { logic: 'Differentiate aneuploidy from polyploidy', detail: 'One chromosome versus an entire haploid set changes counseling and outcome.' },
    { logic: 'Use meiotic product pattern to locate nondisjunction', detail: 'Meiosis I yields no normal gametes; meiosis II leaves two normal gametes.' },
  ],
  mnemonics: [
    { hook: 'Aneu = one chromosome wrong; poly = whole sets wrong', expansion: ['Trisomy/monosomy versus 3n/4n'] },
    { hook: 'MI misses homologs; MII misses sisters', expansion: ['Nondisjunction stage'] },
  ],
  traps: [
    {
      questionCategory: 'Meiosis-I versus meiosis-II nondisjunction',
      wrongInstinct: 'Both errors produce the same four gametes',
      rightAnswer: 'Meiosis I produces two disomic and two nullisomic gametes; meiosis II produces two normal, one disomic, and one nullisomic',
      why: 'The first error affects homolog segregation; the second affects only one pair of sister chromatids.',
    },
  ],
  quiz: [
    {
      id: 'q1',
      stem: 'Which gamete pattern follows nondisjunction in meiosis II?',
      options: [
        { id: 'a', text: 'Two normal, one disomic, one nullisomic' },
        { id: 'b', text: 'Four normal gametes' },
        { id: 'c', text: 'Two disomic and two nullisomic only' },
        { id: 'd', text: 'Four diploid gametes' },
      ],
      answerId: 'a',
      explanation: 'Only the affected meiosis-II daughter mis-segregates sisters, leaving two normal products from the other meiosis-I daughter.',
      tests: 'mechanism',
    },
  ],
};

export default numericalChromosomeAbnormalities;
