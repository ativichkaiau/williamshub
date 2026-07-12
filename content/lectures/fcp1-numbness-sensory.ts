import type { Lecture } from '../../lib/types';

export const fcp1NumbnessSensory: Lecture = {
  id: 'fcp1-numbness-sensory',
  title: 'Numbness & Sensory Patterns',
  system: 'clinical',
  source: 'L25 — Weakness & Numbness',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L25 Weakness & Numbness' },
    { kind: 'disease', label: 'Neuropathy · radiculopathy · myelopathy' },
    { kind: 'mechanism', label: 'Sensory localisation' },
    { kind: 'exam', label: 'Sensory level · distribution' },
  ],

  highYield: [
    'The **distribution of sensory loss localises the lesion**, mirroring weakness → [[fcp1-weakness-localization]]: **glove-and-stocking** (polyneuropathy), **dermatomal** (radiculopathy), single-nerve territory (mononeuropathy), a **sensory level** on the trunk (cord) or **hemisensory** loss (thalamus/cortex).',
    'A **sensory level** (loss below a dermatome) with bilateral leg symptoms and bladder/bowel change = **spinal cord lesion**; cord compression is an emergency needing urgent MRI.',
    '**Cauda equina syndrome:** **saddle anaesthesia**, bilateral sciatica, **urinary retention/incontinence** and lax anal tone — a can’t-miss surgical emergency → overlaps [[fcp1-weakness-umn-lmn]].',
    '**Dissociated sensory loss** (loss of pain/temperature with preserved touch/proprioception, or vice-versa) points to a specific cord tract — Brown-Séquard, syringomyelia or anterior cord.',
    '**Polyneuropathy** is symmetrical and distal (commonly diabetic); positive symptoms (tingling, burning) and negative symptoms (numbness) coexist — find the treatable or urgent cause first.',
  ],

  mechanism: {
    title: 'Mapping the sensory loss',
    steps: [
      { id: 's1', label: 'Symmetric distal glove-and-stocking → polyneuropathy', emphasis: 'key' },
      { id: 's2', label: 'Dermatomal strip → nerve root (radiculopathy)', emphasis: 'key' },
      { id: 's3', label: 'Sensory level on trunk + legs + bladder → cord', emphasis: 'danger' },
      { id: 's4', label: 'Saddle anaesthesia + retention → cauda equina', emphasis: 'danger' },
      { id: 's5', label: 'Hemisensory loss → thalamus/cortex', emphasis: 'normal' },
    ],
  },

  examFindings: [
    { sign: 'Symmetrical distal loss to the mid-calf and fingertips', mechanism: 'Length-dependent polyneuropathy', significance: 'key' },
    { sign: 'A crisp sensory level across the trunk', mechanism: 'Spinal cord lesion at that segment', significance: 'key' },
    { sign: 'Saddle (perineal) anaesthesia with lax anal tone', mechanism: 'Cauda equina compression', significance: 'key' },
    { sign: 'Loss of pain/temperature with preserved proprioception', mechanism: 'Dissociated (spinothalamic) sensory loss', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Sensory level, bilateral leg signs, urinary retention', meaning: 'Emergency spinal MRI for cord compression' },
    { clue: 'Saddle anaesthesia + acute retention or incontinence', meaning: 'Urgent lumbosacral MRI for cauda equina — same-day surgery' },
    { clue: 'Symmetrical distal sensory loss', meaning: 'Screen for diabetes, B12 and alcohol; nerve conduction studies' },
    { clue: 'Dermatomal pain and numbness', meaning: 'Radiculopathy — MRI if red flags or a persistent deficit' },
  ],

  treatment: [
    { logic: 'Separate the emergency from the chronic', detail: 'Cord compression and cauda equina go to emergency MRI and neurosurgery; polyneuropathy is worked up and its cause treated.' },
    { logic: 'Treat the cause and protect the numb part', detail: 'Glycaemic control or B12 replacement; foot care and injury prevention where sensation is lost; neuropathic-pain agents for positive symptoms.' },
  ],

  mnemonics: [
    { hook: 'Distribution = Diagnosis: stocking→nerve, strip→root, level→cord, saddle→cauda equina', expansion: ['Level + bladder = emergency MRI', 'Saddle + retention = cauda equina', 'Hemisensory = brain'] },
  ],

  traps: [
    {
      questionCategory: 'Cauda equina',
      wrongInstinct: 'Bilateral sciatica with new urinary trouble can wait for an outpatient scan',
      rightAnswer: 'New urinary retention/incontinence with saddle anaesthesia is cauda equina syndrome — emergency MRI and decompression the same day',
      why: 'Delayed decompression risks permanent bladder, bowel and sexual dysfunction.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 55-year-old reports a band of numbness around the trunk at the umbilicus with numb, weak legs and difficulty passing urine. This pattern indicates a lesion of the:',
      options: [
        { id: 'a', text: 'Peripheral nerves' },
        { id: 'b', text: 'Spinal cord' },
        { id: 'c', text: 'Single nerve root' },
        { id: 'd', text: 'Cerebral cortex' },
      ],
      answerId: 'b',
      explanation: 'A sensory level on the trunk with bilateral leg signs and bladder involvement localises to the spinal cord and mandates urgent MRI.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A man with acute back pain now has numbness of the buttocks and inner thighs, cannot feel the urge to void and has reduced anal tone. The correct next step is:',
      options: [
        { id: 'a', text: 'Physiotherapy and outpatient review' },
        { id: 'b', text: 'Urgent MRI of the lumbosacral spine' },
        { id: 'c', text: 'Oral analgesia and reassurance' },
        { id: 'd', text: 'Nerve conduction studies in clinic' },
      ],
      answerId: 'b',
      explanation: 'Saddle anaesthesia, urinary dysfunction and reduced anal tone indicate cauda equina syndrome, an emergency requiring urgent MRI and decompression.',
      tests: 'investigation',
    },
  ],
};

export default fcp1NumbnessSensory;
