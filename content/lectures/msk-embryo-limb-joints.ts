import type { Lecture } from '../../lib/types';

export const mskEmbryoLimbJoints: Lecture = {
  id: 'msk-embryo-limb-joints',
  title: 'MSK Embryology: Limb Development, Ossification & Joints',
  system: 'msk',
  source: 'L1 — Embryonic Development of the MSK System',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'MSK' },
    { kind: 'lecture', label: 'L1 MSK Embryology' },
    { kind: 'mechanism', label: 'Limb axes · joint types' },
    { kind: 'exam', label: 'AER/ZPA · ossification' },
  ],

  highYield: [
    '**The limbs grow from limb buds** (lateral body wall) — a core of **lateral plate mesoderm** (→ bones, cartilage, tendons) covered by ectoderm, with migrating **somite-derived myoblasts** forming the muscles. Three signalling centres pattern the three axes.',
    '**Limb signalling centres (high-yield).** **Apical ectodermal ridge (AER)** → drives **proximodistal** outgrowth (via FGFs) over the underlying **progress zone**. **Zone of polarizing activity (ZPA)** → sets the **anteroposterior** axis (thumb↔little finger) via **Sonic hedgehog (SHH)**. **Wnt/dorsal ectoderm** → **dorsoventral** axis. Loss of the AER → truncated limb; extra ZPA/SHH → **mirror-image polydactyly**.',
    '**Most limb and axial bones form by endochondral ossification** — a **hyaline cartilage model** is laid down, then replaced by bone (primary centre in the diaphysis, secondary centres in the epiphyses; lengthening at the growth plate). **Flat skull bones form by intramembranous ossification** (directly from mesenchyme).',
    '**Joints form where a mesenchymal "interzone" appears** between two cartilage models. Its fate defines the joint type: **fibrous (synarthrosis, immovable — skull sutures)**, **cartilaginous (amphiarthrosis, slightly movable — pubic symphysis, IV discs)**, or **synovial (diarthrosis, freely movable — the interzone cavitates to form the joint cavity)**.',
    '**Apoptosis sculpts the limb:** programmed cell death removes the tissue **between the digital rays** to separate the fingers/toes; failure → **syndactyly** (webbed digits). The limbs also **rotate** during development (upper limb laterally, lower limb medially), explaining the adult positions of flexor/extensor compartments and the dermatome spiral.',
  ],

  mechanism: {
    title: 'Bud → pattern (AER/ZPA) → ossify → carve joints',
    steps: [
      { id: 's1', label: 'Limb bud: mesoderm core (bone) + migrating myoblasts (muscle)', emphasis: 'key' },
      { id: 's2', label: 'AER → proximodistal; ZPA/SHH → anteroposterior; Wnt → dorsoventral', emphasis: 'key' },
      { id: 's3', label: 'Endochondral ossification (limbs); intramembranous (flat skull)', emphasis: 'key' },
      { id: 's4', label: 'Interzone → fibrous / cartilaginous / synovial joint' },
      { id: 's5', label: 'Apoptosis separates digits (fail → syndactyly); limbs rotate' },
    ],
  },

  examFindings: [
    { sign: 'AER drives proximodistal limb outgrowth', mechanism: 'FGF signalling over the progress zone', significance: 'key' },
    { sign: 'ZPA (SHH) sets the anteroposterior axis', mechanism: 'Ectopic ZPA → mirror-image polydactyly', significance: 'key' },
    { sign: 'Long bones form via a cartilage model', mechanism: 'Endochondral ossification', significance: 'key' },
    { sign: 'Webbed fingers (syndactyly)', mechanism: 'Failure of interdigital apoptosis', significance: 'supportive' },
    { sign: 'Freely movable joint develops a cavity', mechanism: 'Interzone cavitation → synovial joint', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Signalling centre for limb-length (proximodistal) growth', meaning: 'Apical ectodermal ridge (AER)' },
    { clue: 'Signalling centre/molecule for the thumb-to-pinky axis', meaning: 'ZPA / Sonic hedgehog (SHH)' },
    { clue: 'Joint that is freely movable', meaning: 'Synovial (diarthrosis)' },
    { clue: 'Cause of syndactyly', meaning: 'Failed interdigital apoptosis' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Limb signalling explains congenital limb malformations (amelia, polydactyly, syndactyly); teratogens acting in weeks 4–8 (e.g. thalidomide) cause limb-reduction defects. Ossification detail: [[ossification]]; joint/cartilage histology: [[cartilage-types]]. Axial skeleton: [[msk-embryo-somites]].' },
  ],

  mnemonics: [
    { hook: 'AER = length (proximodistal); ZPA = SHH = thumb↔pinky (anteroposterior); Wnt = dorsoventral', expansion: ['3 axes, 3 centres'] },
    { hook: 'Joints: Fibrous (synarthrosis) → Cartilaginous (amphiarthrosis) → Synovial (diarthrosis)', expansion: ['Immovable → slightly → freely'] },
  ],

  traps: [
    {
      questionCategory: 'AER vs ZPA function',
      wrongInstinct: 'The apical ectodermal ridge determines the anteroposterior (thumb-to-little-finger) axis',
      rightAnswer: 'The AER drives PROXIMODISTAL outgrowth (limb length); the ZPA (via SHH) sets the ANTEROPOSTERIOR axis',
      why: 'Two different centres, two different axes — AER = out/length, ZPA = front-to-back digit identity.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The zone of polarizing activity (ZPA) patterns which limb axis, and via which signalling molecule?',
      options: [
        { id: 'a', text: 'Proximodistal, via FGF' },
        { id: 'b', text: 'Anteroposterior (thumb-to-little-finger), via Sonic hedgehog (SHH)' },
        { id: 'c', text: 'Dorsoventral, via Wnt' },
        { id: 'd', text: 'Left-right, via nodal' },
      ],
      answerId: 'b',
      explanation: 'The ZPA secretes SHH to establish the anteroposterior axis; an ectopic ZPA causes mirror-image polydactyly. The AER (FGF) drives proximodistal outgrowth; dorsal ectoderm (Wnt) sets the dorsoventral axis.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A freely movable (synovial) joint develops when the mesenchymal interzone between two cartilage models:',
      options: [
        { id: 'a', text: 'Ossifies into solid bone' },
        { id: 'b', text: 'Cavitates to form a joint cavity' },
        { id: 'c', text: 'Persists as dense fibrous tissue' },
        { id: 'd', text: 'Is removed by the AER' },
      ],
      answerId: 'b',
      explanation: 'In synovial (diarthrosis) joints the interzone cavitates to form the joint cavity lined by synovium. If it becomes fibrous → synarthrosis; cartilaginous → amphiarthrosis.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default mskEmbryoLimbJoints;
