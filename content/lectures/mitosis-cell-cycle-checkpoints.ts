import type { Lecture } from '../../lib/types';

export const mitosisCellCycleCheckpoints: Lecture = {
  id: 'mitosis-cell-cycle-checkpoints',
  title: 'Mitosis & Cell-cycle Checkpoints',
  system: 'molecular',
  source: 'L6 — Cell Cycle & Human Chromosomes',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Molecular' },
    { kind: 'lecture', label: 'HGD L6' },
    { kind: 'mechanism', label: 'G1-S-G2-M control' },
    { kind: 'exam', label: 'Checkpoint logic' },
  ],
  highYield: [
    'The somatic cell cycle is **G1 -> S -> G2 -> M**. G1 supports growth and preparation; S replicates DNA; G2 checks/prepares for division; M includes mitosis and cytokinesis.',
    'Cells can leave G1 for **G0**. Some differentiated cells remain permanently quiescent, while others such as hepatocytes can re-enter the cycle after injury.',
    'Mitosis proceeds through **prophase, prometaphase, metaphase, anaphase, and telophase**, then cytokinesis. It creates two daughter cells with the same chromosome complement as the parent.',
    'The **G1/S restriction checkpoint** evaluates size, nutrients, environment, and DNA integrity; the **G2/M checkpoint** verifies complete, intact replication; the spindle checkpoint verifies kinetochore attachment before anaphase.',
    'Cyclins and cyclin-dependent kinases drive phase transitions. Failed checkpoints permit mutation propagation or chromosome mis-segregation; irreparable damage should trigger arrest or apoptosis.',
  ],
  mechanism: {
    title: 'Replicate once, segregate once',
    steps: [
      { id: 's1', label: 'G1: grow and pass restriction checkpoint' },
      { id: 's2', label: 'S: replicate DNA -> sister chromatids', emphasis: 'key' },
      { id: 's3', label: 'G2: verify replication before mitosis' },
      { id: 's4', label: 'Spindle checkpoint -> anaphase -> two daughter cells' },
    ],
  },
  examFindings: [
    { sign: 'Chromosomes aligned at equatorial plate', mechanism: 'Metaphase', significance: 'key' },
    { sign: 'Sister chromatids moving to opposite poles', mechanism: 'Anaphase after centromere separation', significance: 'key' },
    { sign: 'Cell with incomplete DNA replication blocked before mitosis', mechanism: 'G2/M checkpoint', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Mitotic index / histology', meaning: 'Estimate proliferative activity' },
    { clue: 'Flow cytometric DNA content', meaning: 'Distinguish G1, S, and G2/M populations' },
    { clue: 'Metaphase chromosome spread', meaning: 'Analyze chromosome number and morphology' },
  ],
  treatment: [
    { logic: 'Target rapidly cycling cells at phase-specific vulnerabilities', detail: 'Many anticancer agents disrupt DNA synthesis or mitotic spindle function.' },
    { logic: 'Interpret arrest by the failed checkpoint', detail: 'DNA integrity, replication completion, and spindle attachment are separate gates.' },
  ],
  mnemonics: [
    { hook: 'G1 grow, S synthesize, G2 double-check, M move', expansion: ['Cell-cycle sequence'] },
    { hook: 'PMAT', expansion: ['Prophase', 'Metaphase', 'Anaphase', 'Telophase'] },
  ],
  traps: [
    {
      questionCategory: 'Spindle checkpoint',
      wrongInstinct: 'Anaphase begins as soon as one chromosome attaches to spindle fibers',
      rightAnswer: 'All chromosomes must be correctly attached before sister-chromatid separation',
      why: 'The metaphase checkpoint prevents unequal chromosome segregation.',
    },
  ],
  quiz: [
    {
      id: 'q1',
      stem: 'Which checkpoint prevents anaphase until every chromosome is properly attached to the mitotic spindle?',
      options: [
        { id: 'a', text: 'G1/S checkpoint' },
        { id: 'b', text: 'G2/M checkpoint' },
        { id: 'c', text: 'Spindle-assembly checkpoint' },
        { id: 'd', text: 'Telomere checkpoint' },
      ],
      answerId: 'c',
      explanation: 'The spindle-assembly checkpoint monitors kinetochore attachment and delays chromatid separation until alignment is safe.',
      tests: 'mechanism',
    },
  ],
};

export default mitosisCellCycleCheckpoints;
