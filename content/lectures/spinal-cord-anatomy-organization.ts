import type { Lecture } from '../../lib/types';

export const spinalCordAnatomyOrganization: Lecture = {
  id: 'spinal-cord-anatomy-organization',
  title: 'Spinal Cord Anatomy & Organisation',
  system: 'neuro',
  source: 'L15 — Spinal Cord',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L15 Spinal Cord' },
    { kind: 'mechanism', label: 'Grey/white matter & roots' },
    { kind: 'exam', label: 'Conus, cauda equina, tracts' },
  ],

  highYield: [
    '**The spinal cord runs from the medulla to about L1/L2 in the adult (it ends higher than the vertebral column because the cord grows less than the spine), tapering as the CONUS MEDULLARIS; below it the lumbosacral roots form the CAUDA EQUINA.** It gives 31 pairs of spinal nerves and has cervical and lumbar ENLARGEMENTS for the limbs.',
    '**In cross-section, GREY matter is central (butterfly/H-shaped) and WHITE matter peripheral — the OPPOSITE arrangement to the cerebrum. The grey matter has a DORSAL (posterior) horn = SENSORY (alar-plate derived), a VENTRAL (anterior) horn = MOTOR (basal-plate derived, the lower motor neurons), and a LATERAL horn = SYMPATHETIC (autonomic) at T1–L2.**',
    '**Each segment connects via a DORSAL ROOT (sensory, with the dorsal root GANGLION holding the cell bodies) and a VENTRAL ROOT (motor) — the BELL-MAGENDIE law (dorsal = sensory in, ventral = motor out).** The white matter is arranged in columns carrying the ascending (dorsal columns, spinothalamic) and descending (corticospinal) tracts covered elsewhere ([[somatosensory-ascending-pathways]], [[motor-system-corticospinal-control]]).',
    '**Two ends-of-cord syndromes to distinguish: CONUS MEDULLARIS (cord tip, mixed UMN+LMN, early symmetric saddle anaesthesia and bladder/bowel involvement) vs CAUDA EQUINA (nerve roots, LMN only, asymmetric radicular leg pain, later/variable sphincter loss).** The cord is supplied by the single anterior spinal artery (anterior 2/3) and paired posterior spinal arteries (dorsal columns) — anterior spinal artery infarction spares proprioception.',
    '**The take-home: cord ends ~L1 (conus → cauda equina); grey matter central (dorsal horn sensory, ventral horn motor LMNs, lateral horn sympathetic); dorsal root = sensory in (DRG), ventral root = motor out; conus vs cauda equina syndromes.** Clinical cord syndromes (Brown-Séquard, ASA, syringomyelia) are in HNS-2 ([[spinal-cord-syndromes]]).',
  ],

  mechanism: {
    title: 'Cord ends ~L1 (conus→cauda equina); grey central (dorsal=sensory/ventral=motor/lateral=sympathetic); roots per Bell-Magendie',
    steps: [
      { id: 's1', label: 'Cord ends ~L1/L2 → conus medullaris → cauda equina (lumbosacral roots)', emphasis: 'key' },
      { id: 's2', label: 'Grey matter CENTRAL (opposite of cerebrum); white matter peripheral', emphasis: 'key' },
      { id: 's3', label: 'Dorsal horn = sensory; ventral horn = motor (LMNs); lateral horn = sympathetic (T1–L2)', emphasis: 'key' },
      { id: 's4', label: 'Dorsal root = sensory in (DRG); ventral root = motor out (Bell-Magendie)', emphasis: 'key' },
      { id: 's5', label: 'Conus (mixed UMN/LMN, early sphincter) vs cauda equina (LMN, radicular)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Cord tapering to a tip at ~L1', mechanism: 'Conus medullaris (cord terminates above the vertebral end)', significance: 'key' },
    { sign: 'Lower motor neurons of the ventral horn', mechanism: 'Anterior horn (basal plate) — final common pathway to muscle', significance: 'key' },
    { sign: 'Sympathetic outflow from T1–L2', mechanism: 'Lateral horn (intermediolateral cell column)', significance: 'supportive' },
    { sign: 'Early symmetric saddle anaesthesia + bladder/bowel loss', mechanism: 'Conus medullaris syndrome', significance: 'key' },
    { sign: 'Asymmetric radicular leg pain with variable sphincter loss', mechanism: 'Cauda equina syndrome (nerve roots)', significance: 'key' },
  ],

  investigations: [
    { clue: 'The vertebral level where the adult cord ends', meaning: 'About L1/L2 (conus medullaris)' },
    { clue: 'The horn containing lower motor neurons', meaning: 'The ventral (anterior) horn' },
    { clue: 'The rule that dorsal roots are sensory and ventral roots motor', meaning: 'The Bell-Magendie law' },
    { clue: 'The root bundle below the conus', meaning: 'The cauda equina' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Cord organisation is the framework for every cord syndrome — grey-matter horns (ventral LMNs, lateral sympathetic), the tract columns, and the conus/cauda equina distinction (a surgical emergency). The tracts running in the white matter are the ascending ([[somatosensory-ascending-pathways]]) and descending ([[motor-system-corticospinal-control]]) systems; clinical cord syndromes and their vascular/compressive causes are in HNS-2 ([[spinal-cord-syndromes]]). Developmental alar/basal plan from [[brain-vesicles-neural-crest]].' },
  ],

  mnemonics: [
    { hook: 'Cord: "grey inside, white outside" (opposite of brain); dorsal in, ventral out', expansion: ['Dorsal horn = sensory', 'Ventral horn = motor LMNs'] },
    { hook: '"Conus = cord (mixed UMN/LMN, early bladder); Cauda = roots (LMN, radicular)"', expansion: ['Cord ends ~L1', 'Lateral horn = sympathetic T1–L2'] },
  ],

  traps: [
    {
      questionCategory: 'Conus medullaris vs cauda equina syndrome',
      wrongInstinct: 'A lesion low in the spinal canal must be a pure lower-motor-neuron (cauda equina) problem',
      rightAnswer: 'The CONUS MEDULLARIS (cord tip, ~L1) still contains cord, so its syndrome is MIXED UMN+LMN with EARLY, SYMMETRIC saddle anaesthesia and bladder/bowel loss; the CAUDA EQUINA (roots below the conus) is pure LMN with ASYMMETRIC radicular pain and later, variable sphincter involvement — location relative to the conus decides the picture',
      why: 'Distinguishing conus from cauda equina changes the expected signs and urgency; both threaten sphincter function, but the level (cord tip vs roots) determines whether UMN signs and early symmetric sphincter loss appear.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'In the spinal cord, the lower motor neurons that innervate skeletal muscle are located in the:',
      options: [
        { id: 'a', text: 'Dorsal (posterior) horn' },
        { id: 'b', text: 'Ventral (anterior) horn' },
        { id: 'c', text: 'Lateral horn' },
        { id: 'd', text: 'Dorsal root ganglion' },
      ],
      answerId: 'b',
      explanation: 'The ventral (anterior) horn, derived from the basal plate, contains the lower motor neurons — the final common pathway to skeletal muscle. The dorsal horn is sensory, the lateral horn (T1–L2) is sympathetic, and the dorsal root ganglion holds sensory cell bodies outside the cord.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'In the adult, the spinal cord typically terminates (as the conus medullaris) at approximately which vertebral level?',
      options: [
        { id: 'a', text: 'T6' },
        { id: 'b', text: 'L1–L2' },
        { id: 'c', text: 'L4–L5' },
        { id: 'd', text: 'S2' },
      ],
      answerId: 'b',
      explanation: 'The cord grows less than the vertebral column, so in the adult it ends as the conus medullaris at about L1–L2; below this the lumbosacral roots continue as the cauda equina. This is why a lumbar puncture is performed at L3/4 or below, avoiding the cord.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default spinalCordAnatomyOrganization;
