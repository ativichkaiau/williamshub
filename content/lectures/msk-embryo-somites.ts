import type { Lecture } from '../../lib/types';
import { SOMITE_DERIVATIVES } from '../../lib/figures';

export const mskEmbryoSomites: Lecture = {
  id: 'msk-embryo-somites',
  title: 'MSK Embryology: Somites & the Axial Skeleton',
  system: 'msk',
  source: 'L1 — Embryonic Development of the MSK System',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'MSK' },
    { kind: 'lecture', label: 'L1 MSK Embryology' },
    { kind: 'mechanism', label: 'Somite derivatives' },
    { kind: 'exam', label: 'Sclerotome/myotome/dermatome' },
  ],

  highYield: [
    '**The musculoskeletal system arises mainly from mesoderm.** The **paraxial mesoderm** (beside the neural tube) segments into paired blocks — **somites** — in a cranial-to-caudal sequence. Each somite differentiates into three parts that build the axial MSK system.',
    '**Somite derivatives (the classic exam triad):** **sclerotome → vertebrae and ribs** (axial skeleton, via endochondral ossification); **myotome → skeletal muscle**; **dermatome → dermis of the back**. (Myotome + dermatome start as a combined **dermomyotome**.)',
    '**Resegmentation builds the vertebrae:** the **caudal half of one sclerotome fuses with the cranial half of the next** somite → each vertebra forms from **two adjacent somites**. This offset lets a segmental (myotomal) muscle span an intervertebral joint, and lets a spinal nerve exit between vertebrae.',
    '**Myotome organisation:** each myotome splits into a dorsal **epimere** (→ deep back extensors, e.g. erector spinae; innervated by dorsal rami) and a ventral **hypomere** (→ limb and body-wall muscles; ventral rami). Muscle forms from **myoblasts → fusing into multinucleate myotubes → muscle fibres**.',
    '**Errors → congenital anomalies:** faulty sclerotome/resegmentation → **hemivertebra and scoliosis** (lateral/rotational spinal curvature); rib defects (absent/accessory ribs); the notochord persists as the **nucleus pulposus** of the intervertebral disc.',
  ],

  mechanism: {
    title: 'Paraxial mesoderm → somite → 3 fates',
    steps: [
      { id: 's1', label: 'Paraxial mesoderm segments into somites (cranial→caudal)', emphasis: 'key' },
      { id: 's2', label: 'Sclerotome → vertebrae + ribs (axial skeleton)', emphasis: 'key' },
      { id: 's3', label: 'Myotome → skeletal muscle; dermatome → back dermis' },
      { id: 's4', label: 'Resegmentation: caudal + next cranial sclerotome → one vertebra', emphasis: 'key' },
      { id: 's5', label: 'Errors → hemivertebra/scoliosis, rib anomalies' },
    ],
  },

  examFindings: [
    { sign: 'Sclerotome forms vertebrae and ribs', mechanism: 'Endochondral ossification of the axial skeleton', significance: 'key' },
    { sign: 'Myotome forms skeletal muscle', mechanism: 'Myoblasts fuse into myotubes → fibres', significance: 'key' },
    { sign: 'Each vertebra from two adjacent somites', mechanism: 'Resegmentation of sclerotomes', significance: 'key' },
    { sign: 'Nucleus pulposus of the disc', mechanism: 'Remnant of the notochord', significance: 'supportive' },
    { sign: 'Hemivertebra → congenital scoliosis', mechanism: 'Sclerotome/formation defect', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Somite part forming the vertebrae', meaning: 'Sclerotome' },
    { clue: 'Somite part forming skeletal muscle', meaning: 'Myotome' },
    { clue: 'Why each vertebra comes from two somites', meaning: 'Resegmentation (caudal + cranial sclerotome halves)' },
    { clue: 'Embryonic origin of the nucleus pulposus', meaning: 'Notochord' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Somite biology explains congenital spine/rib anomalies (hemivertebra, scoliosis) and the dermatomal map used clinically. Bone forms via endochondral ossification (see [[ossification]]); the limb skeleton and joints: [[msk-embryo-limb-joints]].' },
  ],

  mnemonics: [
    { hook: 'Somite → "SMD": Sclerotome (bone), Myotome (muscle), Dermatome (dermis)', expansion: ['Sclerotome = skeleton'] },
    { hook: 'Resegmentation: caudal + next cranial → one vertebra (from TWO somites)', expansion: ['Lets muscles bridge joints'] },
  ],

  traps: [
    {
      questionCategory: 'Which somite part makes bone?',
      wrongInstinct: 'The myotome forms the vertebrae',
      rightAnswer: 'The SCLEROTOME forms the vertebrae and ribs; the myotome forms skeletal muscle',
      why: '"Sclero" = hard/skeleton. Sclerotome → bone, myotome → muscle, dermatome → dermis — a guaranteed exam distinction.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The vertebrae and ribs of the axial skeleton develop from which part of the somite?',
      options: [
        { id: 'a', text: 'Dermatome' },
        { id: 'b', text: 'Myotome' },
        { id: 'c', text: 'Sclerotome' },
        { id: 'd', text: 'Neural crest' },
      ],
      answerId: 'c',
      explanation: 'The sclerotome gives rise to the vertebrae and ribs (axial skeleton) by endochondral ossification. The myotome forms skeletal muscle and the dermatome the dermis of the back.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Resegmentation during vertebral development refers to:',
      options: [
        { id: 'a', text: 'Fusion of the caudal half of one sclerotome with the cranial half of the next, so each vertebra derives from two somites' },
        { id: 'b', text: 'The splitting of a single somite into ten vertebrae' },
        { id: 'c', text: 'Migration of neural crest into the somite' },
        { id: 'd', text: 'The formation of ribs from the myotome' },
      ],
      answerId: 'a',
      explanation: 'Resegmentation joins the caudal half of one sclerotome to the cranial half of the adjacent one, so each vertebra forms from two somites — allowing segmental muscles and nerves to span the intervertebral joints.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Somite derivatives', svg: SOMITE_DERIVATIVES, caption: 'Paraxial mesoderm → somites → sclerotome (vertebrae/ribs), myotome (muscle), dermatome (back dermis); resegmentation builds vertebrae from two somites.' },
  ],
};

export default mskEmbryoSomites;
