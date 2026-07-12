import type { Lecture } from '../../lib/types';

export const fcp1WeaknessLocalization: Lecture = {
  id: 'fcp1-weakness-localization',
  title: 'Weakness — Localising the Lesion',
  system: 'clinical',
  source: 'L25 — Weakness & Numbness',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L25 Weakness & Numbness' },
    { kind: 'disease', label: 'Stroke · myelopathy · neuropathy · myopathy' },
    { kind: 'mechanism', label: 'Neuraxis localisation' },
    { kind: 'exam', label: 'Weakness pattern' },
  ],

  highYield: [
    '**Localise before you differentiate:** the lesion sits at cortex, internal capsule, brainstem, spinal cord, anterior horn, root/plexus, peripheral nerve, neuromuscular junction or muscle; the **pattern of weakness plus tone and reflexes** points to the level → **UMN vs LMN** [[fcp1-weakness-umn-lmn]].',
    '**Cortical/hemispheric:** contralateral **face + arm + leg** weakness ± cortical signs (aphasia, neglect, hemianopia). **Brainstem:** **crossed** signs (ipsilateral cranial nerve + contralateral limbs).',
    '**Cord (myelopathy):** a **sensory level**, bilateral leg weakness and sphincter involvement — cord compression is an emergency → [[fcp1-numbness-sensory]].',
    '**Peripheral nerve:** distal, length-dependent, glove-and-stocking; **root/plexus:** dermatomal/myotomal; **NMJ:** fatigable, fluctuating (ptosis, diplopia); **muscle:** symmetrical **proximal** weakness (rising from a chair, arms overhead).',
    'Distribution answers the question: **focal vs generalised, proximal vs distal, symmetric vs asymmetric** — reflexes and tone then pin the level.',
  ],

  mechanism: {
    title: 'Where along the neuraxis?',
    steps: [
      { id: 's1', label: 'Face + arm + leg one side ± cortical signs → cortex/capsule', emphasis: 'key' },
      { id: 's2', label: 'Crossed (ipsilateral CN + contralateral limb) → brainstem', emphasis: 'key' },
      { id: 's3', label: 'Sensory level + bilateral legs + sphincters → cord', emphasis: 'danger' },
      { id: 's4', label: 'Distal symmetric → nerve; proximal symmetric → muscle', emphasis: 'key' },
      { id: 's5', label: 'Fatigable, fluctuating → neuromuscular junction', emphasis: 'normal' },
    ],
  },

  examFindings: [
    { sign: 'Weakness of one arm + leg + lower face with aphasia or neglect', mechanism: 'Contralateral cortical/hemispheric lesion', significance: 'key' },
    { sign: 'Proximal symmetrical weakness (rising from a chair, arms overhead)', mechanism: 'Myopathy', significance: 'key' },
    { sign: 'Distal length-dependent weakness with loss of ankle jerks', mechanism: 'Polyneuropathy', significance: 'key' },
    { sign: 'Fatigable ptosis/diplopia worsening through the day', mechanism: 'Neuromuscular junction (myasthenia)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Sudden focal deficit localising to one arterial territory', meaning: 'Acute stroke pathway — urgent CT/MRI → [[fcp1-weakness-umn-lmn]]' },
    { clue: 'Bilateral leg weakness with a sensory level ± retention', meaning: 'Urgent spinal MRI for cord compression' },
    { clue: 'Proximal weakness with a raised creatine kinase', meaning: 'Myopathy — EMG, consider inflammatory myositis' },
    { clue: 'Length-dependent weakness and sensory loss', meaning: 'Nerve conduction studies for polyneuropathy' },
  ],

  treatment: [
    { logic: 'Localisation drives urgency and imaging', detail: 'Cortex/brainstem → stroke pathway; cord → emergency MRI and neurosurgery; nerve/muscle → electrodiagnostics and targeted therapy.' },
    { logic: 'Time-critical patterns bypass the clinic', detail: 'Acute focal (stroke) and cord-compression patterns are treated as emergencies, not investigated electively.' },
  ],

  mnemonics: [
    { hook: 'Pattern = Place: proximal→muscle, distal→nerve, level→cord, crossed→brainstem, hemi→cortex', expansion: ['Add tone and reflexes for UMN vs LMN', 'Fatigable → NMJ', 'Cord + sphincters = emergency'] },
  ],

  traps: [
    {
      questionCategory: 'Localisation',
      wrongInstinct: 'Bilateral leg weakness is a peripheral neuropathy',
      rightAnswer: 'Bilateral leg weakness with a sensory level and bladder involvement is a spinal cord lesion needing urgent MRI',
      why: 'A defined sensory level and sphincter signs localise to the cord, not peripheral nerves — and cord compression is an emergency.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 68-year-old develops sudden weakness of the right face, arm and leg with difficulty producing speech. The lesion localises to the:',
      options: [
        { id: 'a', text: 'Left cerebral hemisphere' },
        { id: 'b', text: 'Right peripheral nerve' },
        { id: 'c', text: 'Spinal cord' },
        { id: 'd', text: 'Muscle' },
      ],
      answerId: 'a',
      explanation: 'Contralateral face-arm-leg weakness with aphasia localises to the opposite (here left) cerebral hemisphere.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A 40-year-old woman has three months of difficulty climbing stairs and lifting her arms, with preserved sensation and normal reflexes; her creatine kinase is markedly raised. The pattern indicates:',
      options: [
        { id: 'a', text: 'Peripheral polyneuropathy' },
        { id: 'b', text: 'Proximal myopathy' },
        { id: 'c', text: 'Cortical stroke' },
        { id: 'd', text: 'Cord compression' },
      ],
      answerId: 'b',
      explanation: 'Symmetrical proximal weakness with intact sensation and a high creatine kinase indicates a myopathy.',
      tests: 'disease',
    },
  ],
};

export default fcp1WeaknessLocalization;
