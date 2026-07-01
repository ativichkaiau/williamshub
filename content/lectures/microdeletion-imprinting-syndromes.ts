import type { Lecture } from '../../lib/types';

export const microdeletionImprintingSyndromes: Lecture = {
  id: 'microdeletion-imprinting-syndromes',
  title: 'Microdeletion & Imprinting Syndromes',
  system: 'molecular',
  source: 'L9 — Autosomal Chromosome Syndromes',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Genetics' },
    { kind: 'lecture', label: 'L9 Autosomal Syndromes' },
    { kind: 'disease', label: 'Microdeletions' },
    { kind: 'mechanism', label: 'Genomic imprinting' },
    { kind: 'exam', label: 'Prader-Willi vs Angelman' },
  ],

  highYield: [
    '**Microdeletion syndromes** are submicroscopic contiguous-gene deletions detected by **FISH or chromosomal microarray**: **Williams (7q11.23), Prader-Willi/Angelman (15q11.2-q13), Smith-Magenis (17p11.2), DiGeorge/velocardiofacial (22q11.2)**.',
    '**Genomic imprinting** = a gene is expressed from only ONE parental allele (the other is silenced by methylation). So the SAME 15q11-q13 deletion causes **different diseases depending on the parent of origin**.',
    '**Prader-Willi syndrome = loss of the PATERNAL 15q11-q13** (paternal deletion ~70%, **maternal uniparental disomy** ~25%, imprinting defect): **neonatal hypotonia & poor suck → later hyperphagia/obesity**, hypogonadism, short stature, small hands/feet, mild intellectual disability, almond-shaped eyes.',
    '**Angelman syndrome = loss of the MATERNAL 15q11-q13** (maternal deletion ~70%, **paternal UPD**, imprinting defect, or **UBE3A mutation**): **severe intellectual disability, ataxic "puppet" gait, seizures, absent speech, inappropriate laughter / happy demeanor**.',
    '**Williams (7q11.23, includes elastin)**: "elfin" facies, **supravalvular aortic stenosis**, hypercalcemia, and a friendly/loquacious personality. **DiGeorge (22q11.2)**: thymic + parathyroid hypoplasia (→ hypocalcemia), conotruncal cardiac defects — see the endocrine hypoparathyroidism lecture.',
  ],

  mechanism: {
    title: 'Same locus, opposite parent → opposite syndrome',
    steps: [
      { id: 's1', label: 'Imprinting: only one parental allele is expressed', emphasis: 'key' },
      { id: 's2', label: 'Lose PATERNAL 15q → Prader-Willi' },
      { id: 's3', label: 'Lose MATERNAL 15q → Angelman' },
      { id: 's4', label: 'Also caused by uniparental disomy / imprinting defects', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Neonatal hypotonia → childhood hyperphagia, obesity, hypogonadism', mechanism: 'Prader-Willi (paternal 15q loss)', significance: 'key' },
    { sign: 'Ataxic gait, seizures, absent speech, inappropriate laughter', mechanism: 'Angelman (maternal 15q loss)', significance: 'key' },
    { sign: 'Elfin facies + supravalvular aortic stenosis + hypercalcemia', mechanism: 'Williams syndrome (7q11.23)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'FISH / chromosomal microarray for the microdeletion', meaning: 'Beyond routine karyotype resolution' },
    { clue: 'Methylation studies (15q11-q13)', meaning: 'Distinguish deletion vs UPD vs imprinting defect' },
    { clue: '22q11.2 FISH if conotruncal heart + hypocalcemia', meaning: 'DiGeorge syndrome' },
  ],

  treatment: [
    { logic: 'Supportive + syndrome-specific care', detail: 'PWS: growth hormone + diet control; Williams: cardiac/calcium monitoring.' },
  ],

  mnemonics: [
    { hook: 'PRADER = Paternal deletion; angelMan = Maternal deletion', expansion: ['Same 15q11-q13, opposite parent'] },
    { hook: 'Angelman = "happy puppet" — ataxia, laughter, seizures, UBE3A', expansion: ['Maternal loss'] },
  ],

  traps: [
    {
      questionCategory: 'Prader-Willi vs Angelman',
      wrongInstinct: 'Prader-Willi and Angelman come from deletions on different chromosomes',
      rightAnswer: 'Both involve the SAME 15q11-q13 region — Prader-Willi is loss of the PATERNAL copy, Angelman is loss of the MATERNAL copy (genomic imprinting)',
      why: 'The parent of origin, not the location, decides the phenotype — the classic teaching example of imprinting.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A child with severe intellectual disability, an ataxic gait, seizures, absent speech, and frequent inappropriate laughter has a 15q11-q13 abnormality. What is the parent-of-origin mechanism?',
      options: [
        { id: 'a', text: 'Loss of the paternal 15q11-q13' },
        { id: 'b', text: 'Loss of the maternal 15q11-q13' },
        { id: 'c', text: 'Trisomy 15' },
        { id: 'd', text: 'Paternal duplication of 15q' },
      ],
      answerId: 'b',
      explanation: 'Angelman syndrome results from loss of the maternally expressed 15q11-q13 (deletion, paternal UPD, imprinting defect, or UBE3A mutation), giving the ataxic "happy puppet" phenotype. Loss of the paternal copy causes Prader-Willi.',
      tests: 'exam',
    },
  ],
};

export default microdeletionImprintingSyndromes;
