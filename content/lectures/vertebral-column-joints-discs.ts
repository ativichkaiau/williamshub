import type { Lecture } from '../../lib/types';
import { VERTEBRAL_LIGAMENTS } from '../../lib/figures';

export const vertebralColumnJointsDiscs: Lecture = {
  id: 'vertebral-column-joints-discs',
  title: 'Joints of the Vertebral Column & Disc Herniation',
  system: 'msk',
  source: 'L5 — Deep Back & Joints of Vertebral Column',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L5 Deep Back & Spine' },
    { kind: 'disease', label: 'Vertebral joints' },
    { kind: 'mechanism', label: 'Disc & ligaments' },
    { kind: 'exam', label: 'Disc herniation' },
  ],

  highYield: [
    '**Vertebrae articulate at two joint types**: **intervertebral (IV) discs** between vertebral bodies (secondary cartilaginous / symphysis) and **zygapophyseal (facet) joints** between articular processes (plane synovial) — the facets guide the direction of movement at each level.',
    '**IV disc** = outer **annulus fibrosus** (concentric collagen lamellae) + inner gelatinous **nucleus pulposus** (shock absorber, remnant of the notochord). With age the nucleus dehydrates and the annulus weakens.',
    '**Disc herniation is usually POSTERO-LATERAL** — the strong anterior longitudinal ligament and the (posteriorly placed but **narrow**) posterior longitudinal ligament leave the postero-lateral annulus weakest. The herniated nucleus compresses the **nerve root**, not usually the cord (below L1/L2).',
    '**Common levels: L4–L5 and L5–S1** (lumbar, → sciatica) and **C5–C6** (cervical). A herniation typically hits the nerve root **numbered for the vertebra below** the disc (e.g. an L4–L5 disc compresses the L5 root).',
    '**Ligaments**: **anterior longitudinal (ALL)** resists extension; **posterior longitudinal (PLL)** resists flexion (narrow → weak); **ligamentum flavum** (elastic, connects laminae); **interspinous/supraspinous/nuchal** ligaments. **Craniovertebral joints**: **atlanto-occipital = "yes" nodding (flexion/extension); atlanto-axial = "no" rotation** (the **dens/odontoid** held by the transverse ligament of the atlas).',
  ],

  mechanism: {
    title: 'Disc + facets move the spine; weak spots herniate postero-laterally',
    steps: [
      { id: 's1', label: 'Nucleus pulposus (shock absorber) inside annulus fibrosus', emphasis: 'key' },
      { id: 's2', label: 'Weakest postero-laterally → herniation there' },
      { id: 's3', label: 'Compresses the nerve root (L4-5, L5-S1, C5-6)' },
      { id: 's4', label: 'Atlanto-occipital "yes", atlanto-axial "no" (dens)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Low-back pain radiating down the leg (sciatica) with a dermatomal deficit', mechanism: 'Postero-lateral lumbar disc herniation compressing a root', significance: 'key' },
    { sign: 'An L4–L5 disc compressing the L5 nerve root', mechanism: 'Herniation hits the root numbered for the vertebra below', significance: 'key' },
    { sign: 'Dens (odontoid) held by the transverse ligament of the atlas', mechanism: 'Atlanto-axial stability (rotation)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'MRI of the spine', meaning: 'Level and side of disc herniation / root compression' },
    { clue: 'Straight-leg-raise test', meaning: 'Lumbar nerve-root irritation' },
    { clue: 'Dermatome/myotome exam', meaning: 'Localizes the affected root' },
  ],

  treatment: [
    { logic: 'Most disc herniations: conservative (analgesia, physio)', detail: 'Surgery for progressive deficit / cauda equina.' },
    { logic: 'Cauda equina syndrome = emergency', detail: 'Saddle anesthesia, bladder/bowel dysfunction → urgent decompression.' },
  ],

  mnemonics: [
    { hook: 'Disc herniates postero-laterally (PLL is narrow/weak) → hits the root below', expansion: ['L4-5 → L5 root'] },
    { hook: 'Atlanto-occipital = "yes"; atlanto-axial = "no" (dens + transverse lig.)', expansion: ['Nod vs rotate'] },
  ],

  traps: [
    {
      questionCategory: 'Which nerve root a lumbar disc compresses',
      wrongInstinct: 'An L4–L5 disc herniation compresses the L4 nerve root',
      rightAnswer: 'In the lumbar spine a postero-lateral herniation typically compresses the TRAVERSING root numbered for the vertebra below — an L4–L5 disc usually affects the L5 root',
      why: 'The exiting L4 root has already left above the disc; the descending L5 root is the one crossing the postero-lateral herniation.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient has sciatica and weakness of great-toe dorsiflexion; MRI shows a postero-lateral disc herniation. Which disc level and nerve root are most likely involved?',
      options: [
        { id: 'a', text: 'L2–L3 disc, L2 root' },
        { id: 'b', text: 'L4–L5 disc, L5 root' },
        { id: 'c', text: 'T12–L1 disc, T12 root' },
        { id: 'd', text: 'C5–C6 disc, C6 root' },
      ],
      answerId: 'b',
      explanation: 'A postero-lateral L4–L5 disc herniation typically compresses the traversing L5 root, producing sciatica and weak great-toe dorsiflexion (extensor hallucis longus). Lumbar herniations usually affect the root numbered for the vertebra below the disc.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Disc & vertebral ligaments', svg: VERTEBRAL_LIGAMENTS, caption: 'Nucleus pulposus in annulus fibrosus; postero-lateral herniation (PLL is weak) compresses the nerve root.' },
  ],
};

export default vertebralColumnJointsDiscs;
