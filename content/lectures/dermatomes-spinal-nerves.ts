import type { Lecture } from '../../lib/types';

export const dermatomesSpinalNerves: Lecture = {
  id: 'dermatomes-spinal-nerves',
  title: 'Spinal Nerves & Dermatomes',
  system: 'neuro',
  source: 'L1 — Spinal Cord',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L1 Spinal Nerves' },
    { kind: 'mechanism', label: 'Roots, dermatomes & plexuses' },
    { kind: 'exam', label: 'Landmark dermatomes; radiculopathy' },
  ],

  highYield: [
    '**There are 31 pairs of SPINAL NERVES (8 cervical, 12 thoracic, 5 lumbar, 5 sacral, 1 coccygeal), each formed by a DORSAL (sensory) root and a VENTRAL (motor) root that unite at the intervertebral foramen** (Bell-Magendie — [[spinal-cord-anatomy-organization]]). Note there are 8 cervical nerves but only 7 cervical vertebrae (C1–C7 exit ABOVE their vertebra, C8 below C7, then each thoracic/lumbar nerve exits below its numbered vertebra).',
    'A DERMATOME is the strip of skin supplied by a SINGLE spinal (dorsal) root; a MYOTOME is the muscle group supplied by a single root. Because adjacent dermatomes OVERLAP, a single-root lesion gives only partial sensory loss, whereas a peripheral-nerve lesion gives a sharply demarcated deficit — the key distinction between a RADICULOPATHY and a peripheral neuropathy.',
    '**Landmark dermatomes worth memorising: C2 back of head; C6 THUMB; C7 middle finger; C8 little finger; T4 NIPPLE; T10 UMBILICUS; L1 groin; L4 medial shin/big toe; L5 dorsum of foot; S1 lateral foot/little toe; S2–4 perineum ("saddle").** These let you map a sensory level (e.g. a cord lesion) and identify the root in radiculopathy.',
    'Spinal nerve rami reorganise: at the limbs, ventral rami interweave into PLEXUSES (cervical, BRACHIAL for the arm, LUMBOSACRAL for the leg) so each peripheral nerve carries several roots — which is why a nerve-root (radicular) pattern differs from a peripheral-nerve pattern. A disc herniation compresses a root → dermatomal pain/sensory loss + myotomal weakness + a depressed reflex (radiculopathy).',
    '**The take-home: 31 spinal nerve pairs (dorsal sensory + ventral motor roots); DERMATOME = one root\'s skin (overlapping), MYOTOME = one root\'s muscles; know C6 thumb / T4 nipple / T10 umbilicus / L4 knee / S1 lateral foot / S2–4 saddle; plexuses mix roots into peripheral nerves → radiculopathy (root, dermatomal) vs neuropathy (nerve, sharp).** Cord segments and syndromes are in [[spinal-cord-anatomy-organization]] and HNS-2 ([[spinal-cord-syndromes]]).',
  ],

  mechanism: {
    title: '31 nerve pairs (dorsal + ventral roots); dermatome/myotome per root (overlap); plexuses mix roots → radiculopathy vs neuropathy',
    steps: [
      { id: 's1', label: '31 spinal nerve pairs; dorsal (sensory) + ventral (motor) roots unite at the foramen', emphasis: 'key' },
      { id: 's2', label: 'Dermatome = one root\'s skin (OVERLAP); myotome = one root\'s muscles', emphasis: 'key' },
      { id: 's3', label: 'Landmarks: C6 thumb, T4 nipple, T10 umbilicus, L4 knee, S1 lateral foot, S2–4 saddle', emphasis: 'key' },
      { id: 's4', label: 'Ventral rami form plexuses (brachial/lumbosacral) → peripheral nerves carry several roots' },
      { id: 's5', label: 'Root compression → radiculopathy (dermatomal pain + myotomal weakness + ↓reflex)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Sensory loss in a dermatomal strip with myotomal weakness', mechanism: 'Radiculopathy (single nerve-root compression, e.g. disc)', significance: 'key' },
    { sign: 'A sharply demarcated sensory deficit in a nerve territory', mechanism: 'Peripheral nerve lesion (not dermatomal — no overlap)', significance: 'key' },
    { sign: 'A sensory level at the umbilicus', mechanism: 'T10 dermatome (localises a cord/root level)', significance: 'key' },
    { sign: 'Saddle anaesthesia with sphincter loss', mechanism: 'S2–S4 roots (cauda equina/conus)', significance: 'key' },
    { sign: 'Only partial loss after a single-root lesion', mechanism: 'Dermatomal overlap from adjacent roots', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The number of spinal nerve pairs', meaning: '31 (8C, 12T, 5L, 5S, 1 coccygeal)' },
    { clue: 'The skin area supplied by a single dorsal root', meaning: 'A dermatome' },
    { clue: 'The dermatome at the nipple / umbilicus', meaning: 'T4 (nipple), T10 (umbilicus)' },
    { clue: 'Root compression producing dermatomal pain and weakness', meaning: 'Radiculopathy' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Dermatomes and myotomes let you localise a lesion to a nerve root or cord level and distinguish a radiculopathy (dermatomal, from disc/foraminal compression) from a peripheral neuropathy (sharp, single-nerve). Landmark dermatomes map a sensory level in cord disease ([[spinal-cord-anatomy-organization]], HNS-2 [[spinal-cord-syndromes]]); the roots arise from the cord\'s dorsal/ventral horns ([[somatosensory-ascending-pathways]], [[motor-system-corticospinal-control]]); saddle (S2–4) loss flags a cauda equina emergency.' },
  ],

  mnemonics: [
    { hook: 'Landmarks: "T4 at the Teat (nipple), T10 at the belly button (10 = navel)"', expansion: ['C6 thumb, C8 little finger', 'L4 knee, S1 lateral foot'] },
    { hook: '"Dermatome overlaps (root), peripheral nerve is sharp"', expansion: ['Radiculopathy = root/dermatomal', 'Neuropathy = nerve territory'] },
  ],

  traps: [
    {
      questionCategory: 'Radiculopathy vs peripheral neuropathy pattern',
      wrongInstinct: 'A single nerve-root lesion should cause complete numbness in its dermatome',
      rightAnswer: 'Because adjacent DERMATOMES OVERLAP, a single-root lesion causes only PARTIAL (often subtle) sensory loss in that dermatome, whereas a PERIPHERAL NERVE lesion causes a SHARPLY demarcated deficit in the nerve\'s territory — the pattern (dermatomal + overlapping vs nerve-territory + sharp) tells root from nerve',
      why: 'The overlap explains why radiculopathies present with pain/weakness more than dense numbness, and distinguishing dermatomal from peripheral-nerve patterns is central to localising the lesion (disc/root vs nerve).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A sensory level detected at the umbilicus corresponds to which dermatome?',
      options: [
        { id: 'a', text: 'T4' },
        { id: 'b', text: 'T10' },
        { id: 'c', text: 'L1' },
        { id: 'd', text: 'C8' },
      ],
      answerId: 'b',
      explanation: 'The umbilicus is the T10 dermatome (the nipple is T4, the groin ~L1). Landmark dermatomes let you map a sensory level to a spinal cord/root segment — a key part of localising a spinal lesion.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Compared with a single dermatome, the sensory loss from a single spinal nerve root lesion is often only partial because:',
      options: [
        { id: 'a', text: 'Roots do not carry sensation' },
        { id: 'b', text: 'Adjacent dermatomes overlap, so neighbouring roots still supply the area' },
        { id: 'c', text: 'The spinothalamic tract compensates instantly' },
        { id: 'd', text: 'Dermatomes are supplied by peripheral nerves, not roots' },
      ],
      answerId: 'b',
      explanation: 'Adjacent dermatomes overlap considerably, so a single-root lesion leaves the area partly innervated by neighbouring roots and produces only partial sensory loss. This overlap (absent in peripheral-nerve territories) helps distinguish a radiculopathy from a peripheral neuropathy.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default dermatomesSpinalNerves;
