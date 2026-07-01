import type { Lecture } from '../../lib/types';
import { INHERITANCE_PATTERNS } from '../../lib/figures';

export const mendelianInheritancePatterns: Lecture = {
  id: 'mendelian-inheritance-patterns',
  title: 'Mendelian Inheritance Patterns',
  system: 'molecular',
  source: 'L11 — Mendelian, Multifactorial & Population Genetics',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Genetics' },
    { kind: 'lecture', label: 'L11 Genetic Diseases' },
    { kind: 'disease', label: 'Single-gene disorders' },
    { kind: 'mechanism', label: 'AD / AR / XLR / mito' },
    { kind: 'exam', label: 'Pedigree pattern' },
  ],

  highYield: [
    'Genetic disease falls into **single-gene (Mendelian), multifactorial, chromosomal, somatic (cancer), and mitochondrial** categories. Single-gene disorders are individually rare but follow a **clear inheritance pattern** with **high risk to relatives**. The **proband** is the first affected person identified; each pregnancy is **statistically independent** (recurrence risk does not change with prior outcomes).',
    '**Autosomal dominant**: one mutant allele suffices; affects **both sexes**, seen in **every generation (vertical)**, an affected heterozygote transmits to **½ of offspring**; unaffected people do not transmit. e.g. Huntington, Marfan, familial adenomatous polyposis.',
    '**Autosomal recessive**: **both alleles** must be mutant; healthy **carrier** parents → **25% recurrence**; often appears in a single sibship with **no prior family history**; **consanguinity increases risk** (the rarer the disease, the more likely related parents). e.g. cystic fibrosis, thalassemia.',
    '**X-linked recessive**: mutant gene on X → **mainly males affected**, transmitted through **carrier mothers** (½ sons affected, ½ daughters carriers). **Hallmark: NO male-to-male transmission**; an affected male passes it to **all daughters (obligate carriers), no sons**. e.g. hemophilia, G6PD deficiency, red-green colour blindness.',
    '**Mitochondrial inheritance**: **maternal only** — an affected mother passes it to **all** her children; **affected males never transmit** it (sperm mitochondria are not inherited).',
  ],

  mechanism: {
    title: 'Read the pedigree to name the pattern',
    steps: [
      { id: 's1', label: 'Vertical, both sexes, 50% → autosomal dominant', emphasis: 'key' },
      { id: 's2', label: 'Horizontal, carriers, 25%, consanguinity → recessive' },
      { id: 's3', label: 'Males affected, no male-to-male → X-linked recessive' },
      { id: 's4', label: 'Maternal line, all offspring → mitochondrial' },
    ],
  },

  examFindings: [
    { sign: 'Disease in every generation, both sexes, father→son transmission', mechanism: 'Autosomal dominant', significance: 'key' },
    { sign: 'Affected males linked through unaffected carrier females; no father→son', mechanism: 'X-linked recessive', significance: 'key' },
    { sign: 'Only affected mothers transmit to all children', mechanism: 'Mitochondrial inheritance', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Draw a pedigree; identify the proband', meaning: 'Establishes the transmission pattern' },
    { clue: 'Check for male-to-male transmission', meaning: 'Its presence rules OUT X-linked' },
    { clue: 'Consanguinity in the family', meaning: 'Supports autosomal recessive' },
  ],

  treatment: [
    { logic: 'Assign recurrence risk from the pattern', detail: 'AD 50%, AR 25%, XLR ½ of sons — guides counseling.' },
  ],

  mnemonics: [
    { hook: 'X-linked recessive: NO male-to-male transmission', expansion: ['Carrier mothers, affected sons'] },
    { hook: 'Mitochondrial = maternal; affected males don’t pass it on', expansion: ['All children of affected mother'] },
  ],

  traps: [
    {
      questionCategory: 'Distinguishing X-linked from autosomal dominant',
      wrongInstinct: 'A disease affecting mostly males in a family must be X-linked',
      rightAnswer: 'Look for male-to-male (father→son) transmission — its PRESENCE excludes X-linked inheritance (a father gives his son a Y, not his X)',
      why: 'Sex bias alone is not enough; father-to-son transmission is the decisive feature that rules out X-linkage.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A pedigree shows affected males in several generations, all connected through unaffected females, with no instance of an affected father having an affected son. What is the inheritance pattern?',
      options: [
        { id: 'a', text: 'Autosomal dominant' },
        { id: 'b', text: 'Autosomal recessive' },
        { id: 'c', text: 'X-linked recessive' },
        { id: 'd', text: 'Mitochondrial' },
      ],
      answerId: 'c',
      explanation: 'Affected males transmitted through carrier females with no male-to-male transmission is classic X-linked recessive inheritance (e.g. hemophilia, G6PD deficiency).',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Inheritance patterns', svg: INHERITANCE_PATTERNS, caption: 'AD (vertical), AR (carriers/consanguinity), XLR (no male-to-male), mitochondrial (maternal).' },
  ],
};

export default mendelianInheritancePatterns;
