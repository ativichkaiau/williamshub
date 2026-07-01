import type { Lecture } from '../../lib/types';

export const brainstemSyndromes: Lecture = {
  id: 'brainstem-syndromes',
  title: 'Brainstem Syndromes',
  system: 'neuro',
  source: 'L1 — Clinical Neuroanatomy I',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L1 Clinical Neuroanatomy I' },
    { kind: 'disease', label: 'Alternating hemiplegia' },
    { kind: 'mechanism', label: 'Crossed signs' },
    { kind: 'exam', label: 'Wallenberg' },
  ],

  highYield: [
    '**Brainstem lesion = crossed (“alternating”) signs**: an **ipsilateral cranial-nerve deficit** with a **contralateral long-tract (motor or sensory) deficit**. This localizes the lesion to the side of the cranial-nerve palsy.',
    '**Medial syndromes (“2M” = Motor pathway + Motor cranial nucleus)** — alternating hemiplegia: **Weber** (midbrain, **CN III** + contralateral hemiplegia); **middle/pontine** (**CN VI**); **medial medullary** (**CN XII** — tongue deviates *to* the lesion + contralateral hemiplegia).',
    '**Lateral syndromes (“2S&M” = Spinothalamic + Spinal trigeminal + Motor cranial nucleus)**: **crossed sensory loss** — **pain/temp lost on the ipsilateral FACE and contralateral BODY**.',
    '**Wallenberg (lateral medullary, PICA)**: ipsilateral face + contralateral body pain/temp loss, **ipsilateral Horner**, hoarseness/dysphagia (**nucleus ambiguus**), vertigo/nystagmus, ipsilateral ataxia.',
    '**AICA (lateral pons)** adds **ipsilateral facial palsy (CN VII) and deafness**; CN III/VI palsies + gaze rules help pin the vertical level.',
  ],

  mechanism: {
    title: 'Cranial nerve tells the side; long tract tells it’s the brainstem',
    steps: [
      { id: 's1', label: 'Ipsilateral cranial-nerve deficit (nucleus/nerve)', emphasis: 'key' },
      { id: 's2', label: '+ Contralateral hemiplegia or hemianesthesia' },
      { id: 's3', label: 'Medial = motor (pyramid + motor CN); lateral = sensory (STT + spinal V + ambiguus)' },
      { id: 's4', label: 'CN level sets the height (III midbrain, VI/VII pons, IX–XII medulla)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Crossed pain/temp: ipsilateral face + contralateral body', mechanism: 'Spinal trigeminal (ipsi) + spinothalamic (contra) both hit', significance: 'key' },
    { sign: 'Tongue deviates toward the lesion + contralateral arm/leg weakness', mechanism: 'Medial medullary CN XII + pyramid', significance: 'key' },
    { sign: 'Ipsilateral Horner + hoarseness + vertigo (Wallenberg)', mechanism: 'Descending sympathetic, nucleus ambiguus, vestibular nuclei', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'MRI brainstem (DWI for infarct)', meaning: 'Confirms level & vascular territory' },
    { clue: 'Vertebrobasilar imaging (CTA/MRA)', meaning: 'PICA/AICA/basilar occlusion' },
    { clue: 'Which cranial nerve is out', meaning: 'Sets the rostro-caudal level' },
  ],

  treatment: [
    { logic: 'Manage as posterior-circulation stroke', detail: 'Vertebrobasilar territory; airway/swallow risk in Wallenberg.' },
    { logic: 'Aspiration precautions', detail: 'Nucleus ambiguus → dysphagia.' },
  ],

  mnemonics: [
    { hook: 'Medial = “2M” (Motor pathway + Motor cranial nucleus)', expansion: ['Weber III · pontine VI · medullary XII'] },
    { hook: 'Lateral = crossed face/body pain (2S&M)', expansion: ['Spinal trigeminal (face, ipsi) + spinothalamic (body, contra)'] },
  ],

  traps: [
    {
      questionCategory: 'Localizing a crossed deficit',
      wrongInstinct: 'Ipsilateral face numbness and contralateral body numbness means two separate lesions',
      rightAnswer: 'That crossed pattern is a single lateral brainstem (medullary) lesion',
      why: 'The spinal trigeminal tract carries ipsilateral facial pain/temp while the spinothalamic tract carries already-crossed body pain/temp — one lateral medullary lesion produces both, as in Wallenberg syndrome.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient has loss of pain and temperature on the right side of the face and the left side of the body, plus hoarseness, ipsilateral Horner syndrome, and vertigo. The lesion is:',
      options: [
        { id: 'a', text: 'Right lateral medulla (Wallenberg / PICA)' },
        { id: 'b', text: 'Left internal capsule' },
        { id: 'c', text: 'Right medial midbrain (Weber)' },
        { id: 'd', text: 'Left cervical spinal cord' },
      ],
      answerId: 'a',
      explanation: 'Crossed pain/temp loss (ipsilateral face, contralateral body) with Horner, dysphagia/hoarseness and vertigo is the lateral medullary (Wallenberg) syndrome from PICA/vertebral occlusion — on the side of the facial deficit.',
      tests: 'exam',
    },
  ],
};

export default brainstemSyndromes;
