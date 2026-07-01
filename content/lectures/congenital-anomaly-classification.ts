import type { Lecture } from '../../lib/types';

export const congenitalAnomalyClassification: Lecture = {
  id: 'congenital-anomaly-classification',
  title: 'Classifying Congenital Anomalies',
  system: 'repro',
  source: 'L4 — Congenital Anomalies & Teratology',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Development' },
    { kind: 'lecture', label: 'HGD L4' },
    { kind: 'disease', label: 'Congenital anomaly' },
    { kind: 'mechanism', label: 'Malformation vs disruption vs deformation' },
    { kind: 'exam', label: 'Sequence / syndrome / association' },
  ],
  highYield: [
    'Congenital anomalies can be structural, functional, or behavioral. **Major structural anomalies arise most readily during organogenesis (weeks 3-8)**.',
    '**Malformation** is an intrinsic error of formation; **disruption** is extrinsic destruction of tissue that initially developed normally; **deformation** is altered form from mechanical force; **dysplasia** is abnormal cellular organization within a tissue.',
    'Morphologic patterns include agenesis/aplasia, hypoplasia, hyperplasia/hypertrophy, failure of fusion or canalization, persistence of temporary structures, supernumerary parts, ectopia/heterotopia, and embryonic neoplasms.',
    'A **sequence** is a cascade from one initiating defect (e.g. low fluid causing Potter sequence); a **syndrome** is a recognizable set caused by one defined etiology; an **association** is a nonrandom cluster whose single cause is unknown.',
    'Balanced terminology describes pathogenesis, not merely appearance: spina bifida is a failure of closure, syndactyly can reflect failed separation, and ectopia cordis is abnormal location.',
  ],
  mechanism: {
    title: 'Name the anomaly by how it arose',
    steps: [
      { id: 's1', label: 'Intrinsic developmental program fails -> malformation' },
      { id: 's2', label: 'External insult destroys normal tissue -> disruption' },
      { id: 's3', label: 'Mechanical force alters shape -> deformation' },
      { id: 's4', label: 'Cellular organization is abnormal -> dysplasia', emphasis: 'key' },
    ],
  },
  examFindings: [
    { sign: 'Amniotic band removes part of a previously formed limb', mechanism: 'Disruption', significance: 'key' },
    { sign: 'Potter facies and limb positioning after oligohydramnios', mechanism: 'Mechanical deformation sequence', significance: 'key' },
    { sign: 'Multiple findings linked to trisomy 21', mechanism: 'Syndrome with a defined chromosomal cause', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Detailed prenatal ultrasound and postnatal examination', meaning: 'Define the structural pattern' },
    { clue: 'Karyotype/microarray or gene testing', meaning: 'Identify intrinsic genetic malformation causes' },
    { clue: 'Exposure, fluid, and mechanical history', meaning: 'Distinguish disruption or deformation' },
  ],
  treatment: [
    { logic: 'Classify mechanism before naming the pattern', detail: 'The category guides recurrence risk and counseling.' },
    { logic: 'Search for a unifying sequence, syndrome, or association', detail: 'Multiple anomalies may share one initiating event.' },
  ],
  mnemonics: [
    { hook: 'Malformation made wrong; disruption damaged; deformation distorted; dysplasia disorganized', expansion: ['Four mechanisms'] },
    { hook: 'Sequence = dominoes; syndrome = one cause; association = cluster, cause unknown', expansion: ['Patterns of multiple anomalies'] },
  ],
  traps: [
    {
      questionCategory: 'Malformation versus disruption',
      wrongInstinct: 'Every congenital structural defect is a malformation',
      rightAnswer: 'A disruption is extrinsic damage to tissue that had begun normal development',
      why: 'The same final missing structure can arise from failure to form or later destruction.',
    },
  ],
  quiz: [
    {
      id: 'q1',
      stem: 'A limb forms normally and is later damaged by an amniotic band. This anomaly is classified as:',
      options: [
        { id: 'a', text: 'Malformation' },
        { id: 'b', text: 'Disruption' },
        { id: 'c', text: 'Deformation' },
        { id: 'd', text: 'Dysplasia' },
      ],
      answerId: 'b',
      explanation: 'Disruption is extrinsic destruction of a structure that was initially developing normally.',
      tests: 'exam',
    },
  ],
};

export default congenitalAnomalyClassification;
