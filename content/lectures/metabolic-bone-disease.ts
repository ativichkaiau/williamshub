import type { Lecture } from '../../lib/types';

export const metabolicBoneDisease: Lecture = {
  id: 'metabolic-bone-disease',
  title: 'Metabolic Bone Disease',
  system: 'msk',
  source: 'L1 — Diseases of Bone',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'MSK' },
    { kind: 'lecture', label: 'L1 Diseases of Bone' },
    { kind: 'disease', label: 'Osteoporosis / osteomalacia' },
    { kind: 'mechanism', label: 'Mineralization vs mass' },
    { kind: 'exam', label: 'Brown tumor' },
  ],

  highYield: [
    '**Osteoporosis** = **decreased bone MASS with NORMAL mineralization** (T-score ≤ −2.5) → fragility fractures (spine, hip, distal radius). Drivers: aging, **postmenopausal estrogen loss**, low peak bone mass. Treat: exercise, Ca/vitamin D, **bisphosphonates (osteoclast apoptosis), denosumab (anti-RANKL)**.',
    '**Osteomalacia/rickets** = **defective MINERALIZATION** (normal osteoid, too little mineral) from **vitamin D deficiency**. **Rickets** (children): thick growth plate, **bowed legs, rachitic rosary, frontal bossing**; **osteomalacia** (adults): soft bone, fractures.',
    '**Hyperparathyroidism**: ↑ PTH → unrestrained osteoclast activity → **osteitis fibrosa cystica, “brown tumors” (osteoclasts + fibrous tissue + hemosiderin), dissecting osteitis**. Primary (adenoma), secondary (↓ Ca — renal failure/vit D deficiency), tertiary (autonomous).',
    '**Renal osteodystrophy** = skeletal changes of **chronic kidney disease**: phosphate retention + ↓ active vitamin D → **secondary hyperparathyroidism + osteomalacia + osteoporosis**.',
    'Key distinction: **osteoporosis = too little (normally mineralized) bone; osteomalacia = poorly mineralized bone**.',
  ],

  mechanism: {
    title: 'Separate a mass problem from a mineralization problem',
    steps: [
      { id: 's1', label: 'Osteoporosis: ↓ mass, normal mineralization', emphasis: 'key' },
      { id: 's2', label: 'Osteomalacia/rickets: vitamin D deficiency → poor mineralization' },
      { id: 's3', label: 'HyperPTH: ↑ osteoclasts → brown tumor / osteitis fibrosa cystica' },
      { id: 's4', label: 'CKD: ↓ vit D + ↑ phosphate → renal osteodystrophy', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Fragility fracture with normal calcium/phosphate', mechanism: 'Osteoporosis', significance: 'key' },
    { sign: 'Bowed legs + rachitic rosary in a child', mechanism: 'Rickets (vitamin D deficiency)', significance: 'key' },
    { sign: 'Lytic “brown tumor” + high PTH/calcium', mechanism: 'Hyperparathyroidism (osteitis fibrosa cystica)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'DXA (T-score)', meaning: 'Osteoporosis diagnosis' },
    { clue: 'Vitamin D, Ca, PO₄, PTH, ALP', meaning: 'Osteomalacia vs hyperPTH vs renal osteodystrophy' },
    { clue: 'Renal function', meaning: 'Renal osteodystrophy' },
  ],

  treatment: [
    { logic: 'Osteoporosis: Ca/vit D + bisphosphonate/denosumab', detail: 'Reduce resorption (see bone-drug module).' },
    { logic: 'Osteomalacia/rickets: vitamin D + calcium/phosphate', detail: 'Restore mineralization.' },
    { logic: 'HyperPTH: correct the PTH source', detail: 'Parathyroidectomy / treat cause.' },
  ],

  mnemonics: [
    { hook: 'OsteoPOROSIS = POROUS (less bone, normal mineral); osteoMALacia = MALmineralized', expansion: ['Mass vs mineralization'] },
    { hook: 'HyperPTH bone: Brown tumor + osteitis fibrosa cystica', expansion: ['Osteoclast-driven'] },
  ],

  traps: [
    {
      questionCategory: 'Osteoporosis vs osteomalacia',
      wrongInstinct: 'Osteoporosis and osteomalacia both mean the bone is inadequately mineralized',
      rightAnswer: 'Osteoporosis is a reduction in the QUANTITY of normally mineralized bone; osteomalacia is normal-quantity bone that is inadequately MINERALIZED (usually vitamin D deficiency)',
      why: 'The two differ in mechanism — osteoporosis is a mass problem with normal mineral content, whereas osteomalacia/rickets is a mineralization defect — which changes the workup (DXA vs vitamin D/PTH).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A postmenopausal woman sustains a vertebral compression fracture; serum calcium, phosphate, PTH, and vitamin D are all normal, and DXA T-score is −3.0. The diagnosis is:',
      options: [
        { id: 'a', text: 'Osteomalacia' },
        { id: 'b', text: 'Osteoporosis' },
        { id: 'c', text: 'Primary hyperparathyroidism' },
        { id: 'd', text: 'Renal osteodystrophy' },
      ],
      answerId: 'b',
      explanation: 'Reduced bone mass (T-score ≤ −2.5) with normal mineral biochemistry and normal mineralization defines osteoporosis; osteomalacia would show vitamin D deficiency and abnormal mineralization.',
      tests: 'exam',
    },
  ],
};

export default metabolicBoneDisease;
