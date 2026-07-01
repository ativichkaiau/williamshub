import type { Lecture } from '../../lib/types';

export const germLayerDerivativesFolding: Lecture = {
  id: 'germ-layer-derivatives-folding',
  title: 'Germ-layer Derivatives & Embryonic Folding',
  system: 'repro',
  source: 'L3 — Third Week & Germ Layer Derivatives',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Development' },
    { kind: 'lecture', label: 'HGD L3' },
    { kind: 'mechanism', label: 'Organogenesis and folding' },
    { kind: 'exam', label: 'Ectoderm / mesoderm / endoderm' },
  ],
  highYield: [
    '**Ectoderm** divides into surface ectoderm (epidermis, hair, nails, lens, enamel, anterior pituitary) and neuroectoderm (CNS, retina, posterior pituitary), with neural crest contributing peripheral and craniofacial structures.',
    '**Paraxial mesoderm** forms somites: sclerotome -> axial skeleton, myotome -> skeletal muscle, dermatome -> dermis. **Intermediate mesoderm** forms much of the urogenital system.',
    '**Lateral-plate mesoderm** splits into somatic and splanchnic layers around the intraembryonic coelom. It contributes body wall/limb connective tissues, heart and vessels, smooth muscle, and serous membranes.',
    '**Endoderm** forms the epithelial lining and glandular parenchyma of much of the gastrointestinal and respiratory tracts and related organs.',
    'Cranio-caudal and lateral folding convert the flat trilaminar disc into a cylindrical body, internalize endoderm as foregut/midgut/hindgut, reposition the cardiogenic field, and narrow the yolk-sac connection to the vitelline duct.',
  ],
  mechanism: {
    title: 'Three flat layers become a three-dimensional body',
    steps: [
      { id: 's1', label: 'Ectoderm -> covering and nervous system' },
      { id: 's2', label: 'Mesoderm -> support, muscle, vessels, urogenital structures' },
      { id: 's3', label: 'Endoderm -> internal epithelial tubes and glands' },
      { id: 's4', label: 'Head/tail/lateral folds -> cylindrical embryo', emphasis: 'key' },
    ],
  },
  examFindings: [
    { sign: 'Vertebral cartilage or skeletal muscle derivative', mechanism: 'Paraxial mesoderm / somite', significance: 'key' },
    { sign: 'Kidney and gonadal duct derivative', mechanism: 'Intermediate mesoderm', significance: 'key' },
    { sign: 'Respiratory epithelium with surrounding smooth muscle', mechanism: 'Endodermal lining plus mesodermal support', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Anatomic pattern of affected tissues', meaning: 'Infer the germ layer or mesoderm subdivision involved' },
    { clue: 'Cross-sectional embryonic anatomy', meaning: 'Understand somatic/splanchnic mesoderm and body cavities' },
    { clue: 'Prenatal ultrasound during organogenesis', meaning: 'Assess folding and emerging organ primordia' },
  ],
  treatment: [
    { logic: 'Assign each tissue by epithelium versus support', detail: 'Many organs combine endodermal epithelium with mesodermal stroma/muscle.' },
    { logic: 'Use folding to explain final relationships', detail: 'A flat-map view alone cannot explain gut, heart, and umbilical positions.' },
  ],
  mnemonics: [
    { hook: 'Ecto covers and connects; meso moves and supports; endo lines inside', expansion: ['Surface/CNS', 'Muscle/bone/vessels', 'Gut/respiratory epithelium'] },
    { hook: 'Somite: sclero skeleton, myo muscle, dermato dermis', expansion: ['Paraxial mesoderm'] },
  ],
  traps: [
    {
      questionCategory: 'Origin of a mixed organ',
      wrongInstinct: 'Every component of an endoderm-lined organ must be endodermal',
      rightAnswer: 'The epithelial lining may be endodermal while muscle, connective tissue, and vessels are mesodermal',
      why: 'Organogenesis combines tissues from different germ layers.',
    },
  ],
  quiz: [
    {
      id: 'q1',
      stem: 'Which mesodermal subdivision gives rise to most of the urogenital system?',
      options: [
        { id: 'a', text: 'Paraxial mesoderm' },
        { id: 'b', text: 'Intermediate mesoderm' },
        { id: 'c', text: 'Somatic lateral plate only' },
        { id: 'd', text: 'Notochord' },
      ],
      answerId: 'b',
      explanation: 'Intermediate mesoderm generates much of the urinary and genital systems.',
      tests: 'exam',
    },
  ],
};

export default germLayerDerivativesFolding;
