import type { Lecture } from '../../lib/types';

export const inheritanceModifiers: Lecture = {
  id: 'inheritance-modifiers',
  title: 'Complications of Single-Gene Inheritance',
  system: 'molecular',
  source: 'L11 — Mendelian, Multifactorial & Population Genetics',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Genetics' },
    { kind: 'lecture', label: 'L11 Genetic Diseases' },
    { kind: 'disease', label: 'Penetrance / expressivity' },
    { kind: 'mechanism', label: 'Modifiers of phenotype' },
    { kind: 'exam', label: 'Incomplete penetrance' },
  ],

  highYield: [
    '**Incomplete (reduced) penetrance** = some people with the disease genotype show **no phenotype**. Penetrance = (# affected) ÷ (# with the genotype). It must be factored into recurrence risk: e.g. risk 0.50 × penetrance 0.80 = **0.40**. Classic: an obligate carrier who is unaffected (nonpenetrance).',
    '**Variable expressivity** = the SAME mutation produces **different severity** among affected individuals (e.g. hemochromatosis, neurofibromatosis) — distinct from penetrance (all-or-none).',
    '**Delayed age of onset**: carriers do not manifest until later life — e.g. **Huntington disease**. **Pleiotropy** = one mutation affects **multiple organ systems** — e.g. **Marfan syndrome** (eye, skeleton, aorta).',
    '**Locus heterogeneity** = the same phenotype arises from mutations at **different loci** (e.g. osteogenesis imperfecta, retinitis pigmentosa). **Modifier loci** = other genes alter expression (e.g. the **Bombay (H) blood group** masks ABO expression).',
    '**Genomic imprinting** (parent-of-origin expression, e.g. Prader-Willi/Angelman) and **anticipation** (trinucleotide-repeat disorders worsen/earlier each generation, e.g. Huntington, myotonic dystrophy, fragile X) are non-classical single-gene phenomena that break simple Mendelian prediction.',
  ],

  mechanism: {
    title: 'Why single-gene diseases don’t always follow the textbook ratio',
    steps: [
      { id: 's1', label: 'Penetrance: genotype present, phenotype maybe absent', emphasis: 'key' },
      { id: 's2', label: 'Expressivity: same genotype, different severity' },
      { id: 's3', label: 'Pleiotropy (multi-organ) & locus heterogeneity' },
      { id: 's4', label: 'Imprinting + anticipation break Mendelian rules', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Unaffected obligate carrier between two affected relatives', mechanism: 'Incomplete penetrance (nonpenetrance)', significance: 'key' },
    { sign: 'One mutation → lens, skeleton, and aortic disease', mechanism: 'Pleiotropy (Marfan)', significance: 'key' },
    { sign: 'Earlier onset and worse disease each generation', mechanism: 'Anticipation (repeat expansion)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Calculate penetrance from family data', meaning: 'Adjust recurrence-risk estimates' },
    { clue: 'Consider locus heterogeneity before excluding a diagnosis', meaning: 'Different genes, same phenotype' },
    { clue: 'Trinucleotide-repeat sizing across generations', meaning: 'Documents anticipation' },
  ],

  treatment: [
    { logic: 'Counsel using penetrance-adjusted risk', detail: 'A "50%" dominant risk is lower if penetrance is incomplete.' },
  ],

  mnemonics: [
    { hook: 'Penetrance = IF you show it; Expressivity = HOW MUCH you show', expansion: ['All-or-none vs severity'] },
    { hook: 'Pleiotropy = one gene, many organs (Marfan)', expansion: ['Locus heterogeneity = many genes, one disease'] },
  ],

  traps: [
    {
      questionCategory: 'Penetrance vs expressivity',
      wrongInstinct: 'Incomplete penetrance and variable expressivity are the same thing',
      rightAnswer: 'Penetrance is whether the phenotype appears at all (all-or-none); expressivity is how severe it is when it does appear',
      why: 'They are separate modifiers — a mutation can be fully penetrant yet variably expressed, or incompletely penetrant.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'In a family with an autosomal dominant disease, one man clearly transmitted the mutant allele from his affected father to his affected son but shows no symptoms himself. This best illustrates:',
      options: [
        { id: 'a', text: 'Variable expressivity' },
        { id: 'b', text: 'Incomplete penetrance' },
        { id: 'c', text: 'Anticipation' },
        { id: 'd', text: 'Locus heterogeneity' },
      ],
      answerId: 'b',
      explanation: 'An obligate carrier who is phenotypically normal demonstrates incomplete (reduced) penetrance — the disease genotype is present but the phenotype is not expressed.',
      tests: 'exam',
    },
  ],
};

export default inheritanceModifiers;
