import type { Lecture } from '../../lib/types';

export const bilaminarDiscWeekTwo: Lecture = {
  id: 'bilaminar-disc-week-two',
  title: 'Second Week: Bilaminar Disc & Cavities',
  system: 'repro',
  source: 'L2 — Pre-embryonic Development',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Development' },
    { kind: 'lecture', label: 'HGD L2' },
    { kind: 'mechanism', label: 'Week-two remodeling' },
    { kind: 'exam', label: 'Epiblast / hypoblast' },
  ],
  highYield: [
    'During week 2, trophoblast differentiates into **cytotrophoblast** (cellular, mitotically active) and **syncytiotrophoblast** (multinucleated invasive layer that creates lacunae and secretes hCG).',
    'The inner cell mass becomes a **bilaminar embryonic disc**: columnar **epiblast** dorsally and cuboidal **hypoblast** ventrally.',
    'Two new spaces appear: the **amniotic cavity** above the epiblast and the yolk-sac/exocoelomic cavity below the hypoblast. Amnioblasts line the amniotic cavity; hypoblast contributes Heuser membrane.',
    '**Extraembryonic mesoderm** forms and splits into somatic and splanchnic layers, opening the extraembryonic coelom or **chorionic cavity**.',
    'The primary yolk sac is remodeled into the secondary/definitive yolk sac. The **connecting stalk** is the only bridge across the chorionic cavity and later contributes to the umbilical cord; early chorionic villi begin to form.',
  ],
  mechanism: {
    title: 'The week of twos',
    steps: [
      { id: 's1', label: 'Trophoblast -> cytotrophoblast + syncytiotrophoblast' },
      { id: 's2', label: 'Embryoblast -> epiblast + hypoblast', emphasis: 'key' },
      { id: 's3', label: 'Amniotic cavity + yolk sac form' },
      { id: 's4', label: 'Extraembryonic mesoderm splits -> chorionic cavity' },
    ],
  },
  examFindings: [
    { sign: 'Multinucleated invasive trophoblast without cell boundaries', mechanism: 'Syncytiotrophoblast', significance: 'key' },
    { sign: 'Mitotically active mononuclear trophoblast layer', mechanism: 'Cytotrophoblast supplies cells to the syncytium', significance: 'key' },
    { sign: 'Embryo suspended in chorionic cavity by one bridge', mechanism: 'Connecting stalk', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Beta-hCG', meaning: 'Reflect syncytiotrophoblast activity' },
    { clue: 'Early ultrasound landmarks', meaning: 'Assess gestational sac, yolk sac, and embryo in chronological order' },
    { clue: 'Placental histology', meaning: 'Distinguish trophoblast layers and villous development' },
  ],
  treatment: [
    { logic: 'Use the week-two sequence to date early findings', detail: 'Unexpected order suggests abnormal development or incorrect dating.' },
    { logic: 'Interpret beta-hCG as a trophoblast marker', detail: 'Its source is syncytiotrophoblast, not the embryonic disc.' },
  ],
  mnemonics: [
    { hook: 'Week two = two trophoblasts, two disc layers, two main cavities', expansion: ['Cyto/syncytio', 'Epi/hypo', 'Amnion/yolk sac'] },
    { hook: 'EPI is up; HYPO is below', expansion: ['Dorsal epiblast', 'Ventral hypoblast'] },
  ],
  traps: [
    {
      questionCategory: 'Origin of the bilaminar disc',
      wrongInstinct: 'Cytotrophoblast and syncytiotrophoblast form the embryonic disc',
      rightAnswer: 'Epiblast and hypoblast form the bilaminar disc; cyto- and syncytiotrophoblast are trophoblast layers',
      why: 'Embryoblast and trophoblast undergo separate week-two differentiations.',
    },
  ],
  quiz: [
    {
      id: 'q1',
      stem: 'Which week-two cell layer is the invasive, multinucleated source of hCG?',
      options: [
        { id: 'a', text: 'Epiblast' },
        { id: 'b', text: 'Hypoblast' },
        { id: 'c', text: 'Cytotrophoblast' },
        { id: 'd', text: 'Syncytiotrophoblast' },
      ],
      answerId: 'd',
      explanation: 'Syncytiotrophoblast invades the endometrium, opens lacunae, and secretes hCG.',
      tests: 'exam',
    },
  ],
};

export default bilaminarDiscWeekTwo;
