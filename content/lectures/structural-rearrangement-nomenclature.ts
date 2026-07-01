import type { Lecture } from '../../lib/types';

export const structuralRearrangementNomenclature: Lecture = {
  id: 'structural-rearrangement-nomenclature',
  title: 'ISCN Nomenclature: Structural Rearrangements & Mosaicism',
  system: 'molecular',
  source: 'L8 — Cytogenetic Nomenclature',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Genetics' },
    { kind: 'lecture', label: 'L8 Cytogenetic Nomenclature' },
    { kind: 'disease', label: 'Structural rearrangements' },
    { kind: 'mechanism', label: 'del/dup/inv/t/rob/i/r' },
    { kind: 'exam', label: 'Robertsonian translocation' },
  ],

  highYield: [
    '**Structural abbreviations**: **del** deletion, **dup** duplication, **inv** inversion, **ins** insertion, **t** translocation, **rob** Robertsonian translocation, **i** isochromosome, **r** ring, **dic** dicentric, **der** derivative, **mar** marker. Breakpoints follow in a second set of parentheses.',
    '**Deletion**: terminal **46,XY,del(4)(p14)** (one breakpoint) or interstitial **46,XY,del(13)(q12q14)** (two breakpoints, segment between removed). "4p−"/"del(4p)" are text-only shorthand, not valid karyotypes.',
    '**Translocation**: reciprocal **46,XY,t(4;20)(q25;q11.2)** = segments distal to the breakpoints are exchanged. **Robertsonian (rob)** = fusion of two acrocentric long arms with loss of the short arms — e.g. **45,XY,der(14;21)(q10;q10)** (a balanced carrier has 45 chromosomes).',
    '**Isochromosome (i)** = mirror-image chromosome of one arm (loss of the other) — **46,X,i(X)(q10)** = one normal X plus an isochromosome of Xq (three copies Xq, one Xp). **Ring (r)** joins the two ends after terminal deletions: **46,XY,r(18)(p11.2q23)**. **Inversion (inv)** = paracentric (one arm) vs pericentric (spans centromere).',
    '**Mosaicism vs chimerism**: **mos** = ≥2 cell lines from ONE zygote (**mos 45,X[12]/46,XX[8]**); **chi** = cell lines from >1 zygote (**chi 46,XX[15]/46,XY[10]**). Write the abnormal (largest) clone first, normal clone last, with cell counts in brackets.',
  ],

  mechanism: {
    title: 'Abbreviation → the rearranged chromosome and its breakpoints',
    steps: [
      { id: 's1', label: 'del / dup / inv within a chromosome', emphasis: 'key' },
      { id: 's2', label: 't (;) between chromosomes; rob = acrocentric fusion' },
      { id: 's3', label: 'i = isochromosome (one arm ×2), r = ring' },
      { id: 's4', label: 'mos (one zygote) vs chi (two zygotes)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: '45,XY,der(14;21)(q10;q10)', mechanism: 'Balanced Robertsonian translocation carrier (14;21)', significance: 'key' },
    { sign: '46,X,i(X)(q10)', mechanism: 'Isochromosome Xq (a Turner variant)', significance: 'key' },
    { sign: 'mos 45,X[12]/46,XX[8]', mechanism: 'Mosaic Turner syndrome', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'One vs two breakpoints in del()', meaning: 'Terminal vs interstitial deletion' },
    { clue: 'der(14;21) with 45 total', meaning: 'Balanced Robertsonian carrier' },
    { clue: 'mos vs chi prefix', meaning: 'Same zygote vs fused zygotes' },
  ],

  treatment: [
    { logic: 'Balanced carriers are phenotypically normal but at reproductive risk', detail: 'Genetic counseling for translocation Down syndrome recurrence.' },
  ],

  mnemonics: [
    { hook: 'rob = Robertsonian = acrocentric fusion; carrier has only 45 chromosomes', expansion: ['Balanced but recurrence risk'] },
    { hook: 'mos = one zygote, chi = two zygotes (chimera)', expansion: ['Abnormal clone first, then normal'] },
  ],

  traps: [
    {
      questionCategory: 'Chromosome count of a balanced Robertsonian carrier',
      wrongInstinct: 'A translocation carrier must have 46 chromosomes',
      rightAnswer: 'A balanced Robertsonian carrier has 45 chromosomes — two acrocentrics fuse into one derivative, so the count drops by one while the genetic material is balanced',
      why: 'Robertsonian fusion physically merges two chromosomes into one, lowering the total count even though the carrier is phenotypically normal.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A phenotypically normal woman has the karyotype 45,XX,der(14;21)(q10;q10). What is she?',
      options: [
        { id: 'a', text: 'A person with Down syndrome' },
        { id: 'b', text: 'A balanced Robertsonian translocation carrier (14;21)' },
        { id: 'c', text: 'A person with monosomy 21' },
        { id: 'd', text: 'A mosaic' },
      ],
      answerId: 'b',
      explanation: 'A Robertsonian fusion of chromosomes 14 and 21 gives 45 total chromosomes with balanced material — a phenotypically normal carrier who has an increased risk of a child with translocation Down syndrome.',
      tests: 'exam',
    },
  ],
};

export default structuralRearrangementNomenclature;
