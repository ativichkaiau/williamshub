import type { Lecture } from '../../lib/types';

export const translocationsInversions: Lecture = {
  id: 'translocations-inversions',
  title: 'Translocations, Insertions & Inversions',
  system: 'molecular',
  source: 'L7 — Chromosome Aberrations',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Genetics' },
    { kind: 'lecture', label: 'HGD L7' },
    { kind: 'mechanism', label: 'Balanced rearrangement and meiotic segregation' },
    { kind: 'exam', label: 'Robertsonian vs reciprocal' },
  ],
  highYield: [
    'A **reciprocal translocation** exchanges segments between nonhomologous chromosomes. A balanced carrier is often phenotypically normal but forms a meiotic quadrivalent and risks unbalanced gametes.',
    'In a reciprocal-translocation carrier, **alternate segregation** produces normal or balanced gametes; **adjacent-1 and adjacent-2 segregation** produce unbalanced partial monosomy/trisomy.',
    'A **Robertsonian translocation** fuses the long arms of two acrocentric chromosomes near the centromere; short arms are lost. A balanced carrier often has **45 chromosomes** but near-normal dosage of essential unique material.',
    'A rob(14;21) carrier can produce a conceptus with translocation Down syndrome. The extra long arm of chromosome 21, not the total chromosome count alone, determines trisomy-21 dosage.',
    'An **inversion** reverses a segment: paracentric excludes the centromere; pericentric includes it. Carriers may be balanced, but crossover inside the inversion loop can create unbalanced recombinant chromosomes. An insertion moves a segment into another site and requires multiple breaks.',
  ],
  mechanism: {
    title: 'Balanced carrier, unbalanced reproductive risk',
    steps: [
      { id: 's1', label: 'Chromosome segments rearrange without net loss/gain' },
      { id: 's2', label: 'Carrier is often phenotypically normal' },
      { id: 's3', label: 'Meiotic pairing requires quadrivalent or inversion loop', emphasis: 'key' },
      { id: 's4', label: 'Abnormal segregation/crossover -> duplication + deletion in gamete', emphasis: 'danger' },
    ],
  },
  examFindings: [
    { sign: 'Phenotypically normal adult with recurrent miscarriage', mechanism: 'Possible balanced translocation carrier producing unbalanced gametes', significance: 'key' },
    { sign: '45 chromosomes with fused 14q and 21q', mechanism: 'Balanced Robertsonian translocation', significance: 'key' },
    { sign: 'Inversion includes the centromere', mechanism: 'Pericentric inversion', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Parental karyotype after unbalanced fetal result', meaning: 'Identify a balanced carrier' },
    { clue: 'FISH or microarray in an affected conceptus', meaning: 'Define duplicated and deleted segments' },
    { clue: 'Preimplantation or prenatal diagnostic testing', meaning: 'Assess segregation outcome in carrier pregnancies' },
  ],
  treatment: [
    { logic: 'Counsel carriers by possible meiotic products', detail: 'Normal phenotype does not imply low reproductive risk.' },
    { logic: 'Distinguish carrier balance from offspring balance', detail: 'A balanced parent can generate unbalanced gametes.' },
  ],
  mnemonics: [
    { hook: 'Alternate = acceptable; adjacent = abnormal dosage', expansion: ['Reciprocal-translocation segregation'] },
    { hook: 'Robertsonian = long arms of acrocentrics reunite', expansion: ['Often 45 chromosomes in balanced carrier'] },
  ],
  traps: [
    {
      questionCategory: 'Balanced Robertsonian carrier',
      wrongInstinct: 'A person with 45 chromosomes must have monosomy and a severe phenotype',
      rightAnswer: 'A balanced Robertsonian carrier can be healthy because the fused long arms preserve essential unique material',
      why: 'Chromosome count and genetic dosage are related but not identical.',
    },
  ],
  quiz: [
    {
      id: 'q1',
      stem: 'Which segregation pattern in a reciprocal-translocation carrier can produce normal or balanced gametes?',
      options: [
        { id: 'a', text: 'Alternate segregation' },
        { id: 'b', text: 'Adjacent-1 segregation' },
        { id: 'c', text: 'Adjacent-2 segregation' },
        { id: 'd', text: 'Anaphase lag' },
      ],
      answerId: 'a',
      explanation: 'Alternate segregation sends the two normal chromosomes together and the two translocation derivatives together, preserving balance.',
      tests: 'mechanism',
    },
  ],
};

export default translocationsInversions;
