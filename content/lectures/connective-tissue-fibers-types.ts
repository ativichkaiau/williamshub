import type { Lecture } from '../../lib/types';

export const connectiveTissueFibersTypes: Lecture = {
  id: 'connective-tissue-fibers-types',
  title: 'Connective Tissue Fibres & Tissue Types',
  system: 'histology',
  source: 'L4 — Glands & Connective Tissue',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Histology' },
    { kind: 'lecture', label: 'L4 Glands & CT' },
    { kind: 'mechanism', label: 'Fibres + matrix' },
    { kind: 'exam', label: 'Loose vs dense' },
  ],

  highYield: [
    '**Three fibre types.** **Collagen fibres** = **type I**, thick, strong, eosinophilic (tendon, dermis, bone). **Reticular fibres** = **type III collagen**, fine branching mesh, **argyrophilic** (silver+, poorly stained by H&E) — form the **stroma** of lymphoid organs, liver, and bone marrow. **Elastic fibres** = **elastin core + fibrillin scaffold**, allow recoil (aorta, elastic arteries, skin, lung).',
    '**Ground substance = hydrated gel of GAGs/proteoglycans + adhesive glycoproteins** (fibronectin) that fills space, resists compression, and is the medium for diffusion. Together fibres + ground substance = the **ECM** (detailed molecularly in [[ecm-fibers-ground-substance]]).',
    '**Loose (areolar) connective tissue** — few fibres, abundant ground substance and cells → found in the **lamina propria**, around vessels; supports epithelia and hosts immune cells.',
    '**Dense connective tissue.** **Dense regular** = parallel type I collagen bundles for one-direction tension → **tendons, ligaments**. **Dense irregular** = interwoven collagen resisting multidirectional stress → **dermis (reticular layer), organ capsules**.',
    '**Special connective tissues.** **Adipose** (fat storage/insulation — unilocular white vs multilocular brown), **reticular** (type III mesh in lymphoid/marrow), and **mucoid/mucous** connective tissue (Wharton\'s jelly of the umbilical cord). Cartilage and bone are specialised CT covered separately ([[cartilage-types]], [[bone-tissue-cells-osteon]]).',
  ],

  mechanism: {
    title: 'Fibre mix + matrix → tissue mechanics',
    steps: [
      { id: 's1', label: 'Collagen I = tensile strength; reticular III = mesh; elastic = recoil', emphasis: 'key' },
      { id: 's2', label: 'Ground substance (GAGs) resists compression, allows diffusion' },
      { id: 's3', label: 'Loose (areolar) = support + immune cells (lamina propria)' },
      { id: 's4', label: 'Dense regular = tendon; dense irregular = dermis/capsule', emphasis: 'key' },
      { id: 's5', label: 'Special: adipose, reticular, mucoid (Wharton\'s jelly)' },
    ],
  },

  examFindings: [
    { sign: 'Thick eosinophilic parallel bundles in a tendon', mechanism: 'Dense regular type I collagen', significance: 'key' },
    { sign: 'Fine branching silver-stained mesh in a lymph node', mechanism: 'Reticular fibres (type III collagen)', significance: 'key' },
    { sign: 'Wavy fibres allowing arterial recoil', mechanism: 'Elastic fibres (elastin + fibrillin)', significance: 'supportive' },
    { sign: 'Interwoven collagen in the dermis', mechanism: 'Dense irregular CT', significance: 'supportive' },
    { sign: 'Loose tissue rich in cells beneath an epithelium', mechanism: 'Areolar CT (lamina propria)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Fibre needing a silver stain (argyrophilic), not seen well on H&E', meaning: 'Reticular fibre (type III collagen)' },
    { clue: 'Tissue with parallel collagen for unidirectional pull', meaning: 'Dense regular CT (tendon/ligament)' },
    { clue: 'Defective fibrillin causing tall stature + aortic dilatation', meaning: 'Marfan syndrome (elastic fibre scaffold)' },
    { clue: 'Gelatinous CT in the umbilical cord', meaning: 'Mucoid CT (Wharton\'s jelly)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Fibre defects cause disease: type I collagen → osteogenesis imperfecta/Ehlers-Danlos, fibrillin → Marfan, elastin loss → aneurysm/emphysema. Recognising CT type localises the tissue and its mechanical role.' },
  ],

  mnemonics: [
    { hook: 'Collagen "type by number": I bone/tendon, II cartilage, III reticular, IV basement membrane', expansion: ['1-2-3-4 → strong, cartilage, mesh, floor'] },
    { hook: 'Dense REGular = tendon (Regular Rope); Dense irregular = dermis', expansion: ['Parallel vs interwoven'] },
  ],

  traps: [
    {
      questionCategory: 'Reticular fibre composition',
      wrongInstinct: 'Reticular fibres are made of elastin',
      rightAnswer: 'Reticular fibres are type III COLLAGEN (argyrophilic mesh); elastic fibres are elastin + fibrillin',
      why: 'Reticular = collagen III (fine branching scaffold of lymphoid/marrow); do not confuse with elastic fibres.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The delicate branching fibres that form the supporting stroma of a lymph node and stain with silver but poorly with H&E are composed of:',
      options: [
        { id: 'a', text: 'Type I collagen' },
        { id: 'b', text: 'Type III collagen (reticular)' },
        { id: 'c', text: 'Elastin' },
        { id: 'd', text: 'Fibrillin' },
      ],
      answerId: 'b',
      explanation: 'Reticular fibres are type III collagen — fine, argyrophilic (silver-staining), forming the stroma of lymphoid organs, liver, and bone marrow.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A tendon, which must resist strong tension in one direction, is made of:',
      options: [
        { id: 'a', text: 'Loose areolar connective tissue' },
        { id: 'b', text: 'Dense regular connective tissue' },
        { id: 'c', text: 'Dense irregular connective tissue' },
        { id: 'd', text: 'Reticular connective tissue' },
      ],
      answerId: 'b',
      explanation: 'Tendons and ligaments are dense regular connective tissue — parallel type I collagen bundles aligned for unidirectional tensile strength. The dermis is dense irregular.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default connectiveTissueFibersTypes;
