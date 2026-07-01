import type { Lecture } from '../../lib/types';

export const notochordNeurulationNeuralCrest: Lecture = {
  id: 'notochord-neurulation-neural-crest',
  title: 'Notochord, Neurulation & Neural Crest',
  system: 'repro',
  source: 'L3 — Third Week & Germ Layer Derivatives',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Development' },
    { kind: 'lecture', label: 'HGD L3' },
    { kind: 'mechanism', label: 'Neural induction' },
    { kind: 'exam', label: 'Neural crest derivatives' },
  ],
  highYield: [
    'Cells migrating cranially from the primitive node form the notochordal process and then the **notochord**, the axial organizer of the embryo.',
    'The notochord induces overlying ectoderm to become **neuroectoderm**: neural plate -> neural groove and folds -> closed **neural tube**.',
    'Neural-fold fusion begins near the future cervical region and proceeds cranially and caudally. The cranial and caudal neuropores close last; failure produces neural-tube defects.',
    'The notochord largely regresses but persists as the **nucleus pulposus** of the intervertebral disc; surrounding sclerotome forms the annulus/vertebral structures.',
    '**Neural crest cells** detach and migrate widely, forming peripheral/autonomic ganglia, Schwann cells, melanocytes, adrenal-medulla chromaffin cells, craniofacial mesenchyme, and important cardiac outflow structures.',
  ],
  mechanism: {
    title: 'Axial organizer to neural tube and migrating crest',
    steps: [
      { id: 's1', label: 'Primitive node -> notochordal process -> notochord' },
      { id: 's2', label: 'Notochord induces neural plate', emphasis: 'key' },
      { id: 's3', label: 'Neural folds fuse -> neural tube' },
      { id: 's4', label: 'Neural crest delaminates -> peripheral derivatives' },
    ],
  },
  examFindings: [
    { sign: 'Nucleus pulposus in an intervertebral disc', mechanism: 'Persistent notochord remnant', significance: 'key' },
    { sign: 'Absent dorsal neural-tube closure', mechanism: 'Failed caudal neuropore closure', significance: 'key' },
    { sign: 'Pigment, peripheral ganglion, and adrenal-medulla defects together', mechanism: 'Shared neural-crest origin', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Maternal serum AFP and prenatal ultrasound', meaning: 'Screen for open neural-tube defects' },
    { clue: 'Fetal MRI when indicated', meaning: 'Define CNS and spinal anatomy' },
    { clue: 'Pattern of neural-crest derivatives affected', meaning: 'Recognize a neurocristopathy' },
  ],
  treatment: [
    { logic: 'Use periconceptional folate to reduce neural-tube-defect risk', detail: 'Prevention must begin before neural-tube closure.' },
    { logic: 'Evaluate associated neural-crest systems', detail: 'One crest-related defect can signal others in enteric, cardiac, pigment, or peripheral-neural tissues.' },
  ],
  mnemonics: [
    { hook: 'Notochord nudges neural ectoderm', expansion: ['Induction of the neural plate'] },
    { hook: 'Crest travels; tube stays central', expansion: ['Peripheral/autonomic structures versus CNS'] },
  ],
  traps: [
    {
      questionCategory: 'Embryologic origin of the nucleus pulposus',
      wrongInstinct: 'It comes from sclerotome like the rest of the vertebral column',
      rightAnswer: 'The nucleus pulposus is a notochord remnant',
      why: 'Sclerotome surrounds the notochord, but the central gelatinous nucleus retains notochordal origin.',
    },
  ],
  quiz: [
    {
      id: 'q1',
      stem: 'Which adult structure is derived from the notochord?',
      options: [
        { id: 'a', text: 'Nucleus pulposus' },
        { id: 'b', text: 'Annulus fibrosus' },
        { id: 'c', text: 'Dorsal root ganglion' },
        { id: 'd', text: 'Epidermis' },
      ],
      answerId: 'a',
      explanation: 'The notochord regresses except for remnants within the nucleus pulposus.',
      tests: 'exam',
    },
  ],
};

export default notochordNeurulationNeuralCrest;
