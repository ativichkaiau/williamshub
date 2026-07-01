import type { Lecture } from '../../lib/types';

export const gastrulationBodyAxis: Lecture = {
  id: 'gastrulation-body-axis',
  title: 'Gastrulation & Body-axis Formation',
  system: 'repro',
  source: 'L3 — Third Week & Germ Layer Derivatives',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Development' },
    { kind: 'lecture', label: 'HGD L3' },
    { kind: 'mechanism', label: 'Epiblast migration' },
    { kind: 'exam', label: 'Primitive streak and germ layers' },
  ],
  highYield: [
    '**Gastrulation in week 3 converts the bilaminar disc into a trilaminar disc** and establishes the cranial-caudal, dorsal-ventral, and left-right body axes.',
    'The primitive streak, primitive groove, primitive node, and primitive pit organize epiblast-cell migration. Invaginating cells undergo epithelial-to-mesenchymal transition.',
    'The first migrating epiblast cells replace hypoblast to form **definitive endoderm**; later cells spread between layers as **intraembryonic mesoderm**; epiblast cells remaining at the surface become **ectoderm**.',
    '**All three embryonic germ layers derive from epiblast.** Hypoblast contributes to extraembryonic lining but not the embryo proper.',
    'Mesoderm does not intervene at the **oropharyngeal membrane** or **cloacal membrane**, where ectoderm and endoderm remain directly apposed.',
  ],
  mechanism: {
    title: 'Epiblast makes all three germ layers',
    steps: [
      { id: 's1', label: 'Primitive streak establishes axes and migration route', emphasis: 'key' },
      { id: 's2', label: 'First invaginating cells replace hypoblast -> endoderm' },
      { id: 's3', label: 'Next cells spread between layers -> mesoderm' },
      { id: 's4', label: 'Remaining epiblast -> ectoderm' },
    ],
  },
  examFindings: [
    { sign: 'Trilaminar embryonic disc', mechanism: 'Completed gastrulation establishes ectoderm, mesoderm, and endoderm', significance: 'key' },
    { sign: 'No mesoderm at buccopharyngeal or cloacal membrane', mechanism: 'Ectoderm and endoderm remain apposed at future openings', significance: 'key' },
    { sign: 'Abnormal left-right organ arrangement', mechanism: 'Disrupted axis signaling during gastrulation', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Embryonic week and midline anatomy', meaning: 'Localize defects to gastrulation/axis formation' },
    { clue: 'Ultrasound or imaging of organ laterality', meaning: 'Characterize situs abnormality' },
    { clue: 'Molecular testing of laterality pathways when indicated', meaning: 'Assess NODAL/LEFTY/PITX2-related patterning' },
  ],
  treatment: [
    { logic: 'Trace third-week anomalies back to primitive-streak migration', detail: 'The affected germ layer predicts downstream organs.' },
    { logic: 'Assess the entire laterality pattern', detail: 'A single reversed organ may differ clinically from situs inversus totalis.' },
  ],
  mnemonics: [
    { hook: 'EPI makes Every layer', expansion: ['Endoderm first', 'Mesoderm next', 'Ectoderm remains'] },
    { hook: 'Streak sets the street map', expansion: ['Cranial-caudal', 'Dorsal-ventral', 'Left-right'] },
  ],
  traps: [
    {
      questionCategory: 'Origin of definitive endoderm',
      wrongInstinct: 'Hypoblast becomes the embryonic endoderm',
      rightAnswer: 'Epiblast cells replace hypoblast to form definitive endoderm',
      why: 'All three germ layers of the embryo proper originate from epiblast.',
    },
  ],
  quiz: [
    {
      id: 'q1',
      stem: 'Which embryonic cell population gives rise to all three primary germ layers?',
      options: [
        { id: 'a', text: 'Epiblast' },
        { id: 'b', text: 'Hypoblast' },
        { id: 'c', text: 'Cytotrophoblast' },
        { id: 'd', text: 'Syncytiotrophoblast' },
      ],
      answerId: 'a',
      explanation: 'During gastrulation, migrating and remaining epiblast cells generate endoderm, mesoderm, and ectoderm.',
      tests: 'mechanism',
    },
  ],
};

export default gastrulationBodyAxis;
