import type { Lecture } from '../../lib/types';

export const ossification: Lecture = {
  id: 'ossification',
  title: 'Ossification: Intramembranous vs Endochondral',
  system: 'histology',
  source: 'L6 — Cartilage & Bone',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Histology' },
    { kind: 'lecture', label: 'L6 Cartilage & Bone' },
    { kind: 'mechanism', label: 'Two bone-forming routes' },
    { kind: 'exam', label: 'Growth-plate zones' },
  ],

  highYield: [
    '**Two ways bone forms.** **Intramembranous ossification** — bone forms **directly from mesenchyme** (no cartilage model); osteoblasts lay down bone in sheets. Makes the **flat bones of the skull, most of the clavicle, and the mandible**.',
    '**Endochondral ossification** — bone replaces a **hyaline cartilage model**. Makes **long bones and the base of the skull**, and drives their **length growth**. A **primary ossification centre** appears in the diaphysis; **secondary centres** appear in the epiphyses.',
    '**Length grows at the epiphyseal (growth) plate** — a zone of hyaline cartilage between epiphysis and metaphysis, with ordered zones (epiphysis → diaphysis): **Reserve → Proliferation → Hypertrophy → Calcification → Ossification**. Cartilage is continually made on the epiphyseal side and replaced by bone on the diaphyseal side.',
    '**Width (appositional) growth** occurs at the **periosteum** (osteoblasts add bone to the surface) while osteoclasts resorb the endosteal surface — thickening the shaft.',
    '**Clinical anchors.** The growth plate **fuses after puberty** (driven by oestrogen) → growth stops. **Achondroplasia** = **FGFR3 gain-of-function** impairing proliferation-zone cartilage → short limbs. Bone remodelling continues lifelong via the osteoblast/osteoclast balance ([[bone-tissue-cells-osteon]]).',
  ],

  mechanism: {
    title: 'Mesenchyme direct vs cartilage-template',
    steps: [
      { id: 's1', label: 'Intramembranous: mesenchyme → bone (flat/skull bones)', emphasis: 'key' },
      { id: 's2', label: 'Endochondral: hyaline cartilage model → bone (long bones)', emphasis: 'key' },
      { id: 's3', label: 'Primary centre (diaphysis) + secondary (epiphyses)' },
      { id: 's4', label: 'Growth plate zones: Reserve→Proliferation→Hypertrophy→Calcification→Ossification', emphasis: 'key' },
      { id: 's5', label: 'Width via periosteal appositional growth; plate fuses post-puberty' },
    ],
  },

  examFindings: [
    { sign: 'Skull/flat bone forming without a cartilage precursor', mechanism: 'Intramembranous ossification', significance: 'key' },
    { sign: 'Long bone lengthening at a cartilage plate', mechanism: 'Endochondral ossification (growth plate)', significance: 'key' },
    { sign: 'Ordered columns of proliferating then hypertrophic chondrocytes', mechanism: 'Growth-plate zones', significance: 'supportive' },
    { sign: 'Short-limbed dwarfism with a normal-sized trunk/head', mechanism: 'Achondroplasia (FGFR3) — endochondral defect', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'How the frontal and parietal bones form', meaning: 'Intramembranous ossification' },
    { clue: 'How the femur elongates during childhood', meaning: 'Endochondral ossification at the epiphyseal plate' },
    { clue: 'Zone where chondrocytes rapidly divide in columns', meaning: 'Proliferative zone of the growth plate' },
    { clue: 'Growth stops in adolescence because…', meaning: 'Epiphyseal plate fusion (oestrogen-driven)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Growth-plate biology explains paediatric growth, Salter-Harris fractures, and skeletal dysplasias (achondroplasia = FGFR3). Rickets/osteomalacia = defective mineralisation of osteoid. Ossification links cartilage ([[cartilage-types]]) to mature bone ([[bone-tissue-cells-osteon]]).' },
  ],

  mnemonics: [
    { hook: 'Growth plate zones: "Reserve Proliferating Hypertrophic Cells Ossify"', expansion: ['Epiphysis → diaphysis order'] },
    { hook: 'Intramembranous = flat skull; Endochondral = long bones (cartilage first)', expansion: ['Length = plate; width = periosteum'] },
  ],

  traps: [
    {
      questionCategory: 'Which ossification makes flat skull bones?',
      wrongInstinct: 'All bones form by replacing a cartilage model (endochondral)',
      rightAnswer: 'Flat skull bones (and the clavicle, mandible) form by INTRAMEMBRANOUS ossification — directly from mesenchyme, no cartilage template',
      why: 'Endochondral (cartilage-model) makes long bones and the skull base; intramembranous makes the flat cranial vault.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The flat bones of the cranial vault form by:',
      options: [
        { id: 'a', text: 'Endochondral ossification' },
        { id: 'b', text: 'Intramembranous ossification' },
        { id: 'c', text: 'Appositional cartilage growth' },
        { id: 'd', text: 'Interstitial growth' },
      ],
      answerId: 'b',
      explanation: 'Cranial vault (and clavicle/mandible) bone forms directly from mesenchyme = intramembranous ossification. Long bones use endochondral ossification (cartilage model).',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Achondroplasia, the commonest form of short-limbed dwarfism, results from a gain-of-function mutation affecting:',
      options: [
        { id: 'a', text: 'Type I collagen synthesis' },
        { id: 'b', text: 'FGFR3, impairing growth-plate chondrocyte proliferation' },
        { id: 'c', text: 'Osteoclast function' },
        { id: 'd', text: 'Intramembranous ossification of the skull' },
      ],
      answerId: 'b',
      explanation: 'Constitutively active FGFR3 suppresses proliferation-zone chondrocytes at the growth plate → reduced endochondral bone lengthening → short limbs with a relatively normal trunk.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default ossification;
