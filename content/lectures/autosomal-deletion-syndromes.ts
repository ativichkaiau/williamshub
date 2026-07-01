import type { Lecture } from '../../lib/types';

export const autosomalDeletionSyndromes: Lecture = {
  id: 'autosomal-deletion-syndromes',
  title: 'Autosomal Deletion Syndromes: Cri-du-chat & Wolf-Hirschhorn',
  system: 'molecular',
  source: 'L9 — Autosomal Chromosome Syndromes',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Genetics' },
    { kind: 'lecture', label: 'L9 Autosomal Syndromes' },
    { kind: 'disease', label: 'Deletion syndromes' },
    { kind: 'mechanism', label: 'Partial monosomy' },
    { kind: 'exam', label: '5p− / 4p−' },
  ],

  highYield: [
    '**Cri-du-chat syndrome = deletion of the short arm of chromosome 5 (5p−)**; critical region **5p15**. Most cases are sporadic; ~10–15% arise from a parental translocation.',
    '**Cri-du-chat hallmark = a high-pitched, cat-like ("mewing") cry** (abnormal laryngeal development), plus **microcephaly, hypertelorism, epicanthal folds, low-set ears, micrognathia, severe intellectual disability, and heart defects**. Deletion size correlates with severity.',
    '**Wolf-Hirschhorn syndrome = deletion of the short arm of chromosome 4 (4p−)**; critical region **4p16.3 (WHCR)**. Features: **"Greek-warrior-helmet" facies** (broad nasal bridge continuing to the forehead), microcephaly, growth retardation, severe intellectual disability, seizures.',
    'Both are **partial monosomies (contiguous gene deletions)**; ~45–50% of Wolf-Hirschhorn cases come from an **unbalanced translocation** — so parental karyotyping guides recurrence counseling.',
    'Remember the arm: **Cri-du-chat = 5p (cat)**, **Wolf-Hirschhorn = 4p** — both short-arm deletions with severe intellectual disability.',
  ],

  mechanism: {
    title: 'Loss of a short-arm segment → contiguous-gene syndrome',
    steps: [
      { id: 's1', label: '5p deletion (crit. 5p15) → cri-du-chat', emphasis: 'key' },
      { id: 's2', label: '4p deletion (crit. 4p16.3) → Wolf-Hirschhorn' },
      { id: 's3', label: 'Deletion size ∝ severity' },
      { id: 's4', label: 'Some arise from unbalanced parental translocation', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'High-pitched cat-like cry + microcephaly + hypertelorism', mechanism: 'Cri-du-chat (5p−)', significance: 'key' },
    { sign: '"Greek warrior helmet" facies + seizures + growth failure', mechanism: 'Wolf-Hirschhorn (4p−)', significance: 'key' },
    { sign: 'Recurrent deletion syndrome in a family', mechanism: 'Consider a balanced translocation carrier parent', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Karyotype / chromosomal microarray', meaning: 'Confirms and sizes the deletion' },
    { clue: 'Parental karyotype', meaning: 'Detect a balanced translocation carrier' },
  ],

  treatment: [
    { logic: 'Supportive, multidisciplinary care', detail: 'Developmental, cardiac, seizure management.' },
    { logic: 'Genetic counseling based on parental karyotype', detail: 'Recurrence differs sporadic vs translocation.' },
  ],

  mnemonics: [
    { hook: 'Cri-du-chat = Cat cry = 5p− (five → cat)', expansion: ['Critical region 5p15'] },
    { hook: 'Wolf-Hirschhorn = 4p−, Greek warrior helmet', expansion: ['Critical region 4p16.3'] },
  ],

  traps: [
    {
      questionCategory: 'Chromosome arm in cri-du-chat',
      wrongInstinct: 'Cri-du-chat is a deletion of the long arm of chromosome 5',
      rightAnswer: 'It is a deletion of the SHORT arm of chromosome 5 (5p−), critical region 5p15',
      why: 'Both classic deletion syndromes here (cri-du-chat 5p, Wolf-Hirschhorn 4p) involve the short (p) arm — a common point tested.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An infant has a distinctive high-pitched, cat-like cry, microcephaly, hypertelorism, and severe developmental delay. Which chromosomal abnormality is responsible?',
      options: [
        { id: 'a', text: 'Deletion of 4p (Wolf-Hirschhorn)' },
        { id: 'b', text: 'Deletion of 5p (cri-du-chat)' },
        { id: 'c', text: 'Trisomy 18' },
        { id: 'd', text: 'Deletion of 22q11' },
      ],
      answerId: 'b',
      explanation: 'The mewing cat-like cry with microcephaly and hypertelorism is cri-du-chat syndrome, a deletion of the short arm of chromosome 5 (5p−), critical region 5p15.',
      tests: 'exam',
    },
  ],
};

export default autosomalDeletionSyndromes;
