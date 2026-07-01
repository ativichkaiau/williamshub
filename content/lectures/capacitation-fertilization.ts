import type { Lecture } from '../../lib/types';

export const capacitationFertilization: Lecture = {
  id: 'capacitation-fertilization',
  title: 'Capacitation & Fertilization',
  system: 'repro',
  source: 'L2 — Pre-embryonic Development',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'HGD L2' },
    { kind: 'mechanism', label: 'Gamete fusion' },
    { kind: 'exam', label: 'Acrosomal and cortical reactions' },
  ],
  highYield: [
    'Fertilization usually occurs in the **ampulla of the uterine tube**. The ovulated female gamete is a secondary oocyte surrounded by corona radiata cells and the zona pellucida.',
    '**Capacitation** occurs in the female tract and modifies sperm-surface coatings, making sperm competent to bind the zona pellucida and undergo the acrosomal reaction.',
    'Fertilization proceeds through three phases: passage through the **corona radiata**, penetration of the **zona pellucida** using acrosomal enzymes, then fusion of sperm and oocyte plasma membranes.',
    'Sperm-oocyte fusion triggers **cortical and zona reactions**, which alter the zona and prevent polyspermy. The oocyte completes meiosis II and forms the female pronucleus.',
    'The outcomes are restoration of the diploid chromosome number, determination of chromosomal sex, mixing of parental genomes, and metabolic activation of the zygote.',
  ],
  mechanism: {
    title: 'Prepare, penetrate, fuse, block polyspermy',
    steps: [
      { id: 's1', label: 'Capacitation in female reproductive tract', emphasis: 'key' },
      { id: 's2', label: 'Acrosomal reaction -> corona/zona penetration' },
      { id: 's3', label: 'Sperm-oocyte membrane fusion' },
      { id: 's4', label: 'Cortical/zona reaction -> polyspermy block', emphasis: 'danger' },
    ],
  },
  examFindings: [
    { sign: 'Sperm reaches the oocyte but cannot penetrate the zona', mechanism: 'Failed capacitation or acrosomal reaction', significance: 'key' },
    { sign: 'More than one sperm enters the oocyte', mechanism: 'Failure of cortical/zona polyspermy block', significance: 'key' },
    { sign: 'Completion of oocyte meiosis II after sperm entry', mechanism: 'Fertilization activates the secondary oocyte', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Semen and sperm-function testing', meaning: 'Assess count, motility, and fertilizing competence' },
    { clue: 'Fertilization check for male and female pronuclei', meaning: 'Confirm normal gamete fusion in assisted reproduction' },
    { clue: 'Preimplantation chromosome testing when indicated', meaning: 'Evaluate chromosomal complement after fertilization' },
  ],
  treatment: [
    { logic: 'Use IVF when fertilization must occur outside the tract', detail: 'Gametes are combined in vitro before embryo transfer.' },
    { logic: 'Use ICSI for selected severe sperm-factor infertility', detail: 'A sperm is injected directly into the oocyte cytoplasm.' },
  ],
  mnemonics: [
    { hook: 'Capacitate -> acrosome -> attach -> anti-polyspermy', expansion: ['Prepare', 'Penetrate', 'Fuse', 'Block'] },
    { hook: 'Ampulla is the usual arena', expansion: ['Normal fertilization site'] },
  ],
  traps: [
    {
      questionCategory: 'Function of the cortical reaction',
      wrongInstinct: 'The cortical reaction helps the first sperm digest the zona',
      rightAnswer: 'It modifies the zona after fusion to prevent additional sperm entry',
      why: 'Acrosomal enzymes aid penetration; cortical granules create the polyspermy block.',
    },
  ],
  quiz: [
    {
      id: 'q1',
      stem: 'Which event most directly prevents polyspermy after the first sperm fuses with the oocyte?',
      options: [
        { id: 'a', text: 'Capacitation' },
        { id: 'b', text: 'Cortical and zona reactions' },
        { id: 'c', text: 'Compaction' },
        { id: 'd', text: 'Hatching' },
      ],
      answerId: 'b',
      explanation: 'Cortical granule release modifies the zona pellucida and blocks further sperm penetration.',
      tests: 'mechanism',
    },
  ],
};

export default capacitationFertilization;
