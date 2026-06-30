import type { Lecture } from '../../lib/types';

export const aorticAneurysm: Lecture = {
  id: 'aortic-aneurysm',
  title: 'Aortic Aneurysm (TAA & AAA)',
  system: 'cardiovascular',
  source: 'L5 — Vascular Disorders',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L5 Vascular Disorders' },
    { kind: 'disease', label: 'Aortic aneurysm' },
    { kind: 'mechanism', label: 'Medial weakening' },
    { kind: 'exam', label: 'Pulsatile mass' },
  ],

  highYield: [
    'Aneurysm = **localized abnormal dilatation** of a vessel/cardiac wall.',
    '**AAA (abdominal)**: **atherosclerosis = most common cause**, **infrarenal**, palpable **pulsatile mass**; loss of tunica media is the key finding.',
    '**TAA (thoracic)**: **HTN + connective-tissue defects** (Marfan/fibrillin), bicuspid aortic valve, aortitis (syphilis, Takayasu, giant cell).',
    'TAA pathology: **medial degeneration** — mucoid ECM accumulation + elastic-fiber fragmentation (cystic medial degeneration).',
    'Complications: **rupture**, dissection, branch obstruction, embolism, compression.',
  ],

  mechanism: {
    title: 'Medial weakening → dilatation → rupture',
    steps: [
      { id: 's1', label: 'Wall injury (HTN / medial degeneration / atherosclerosis)' },
      { id: 's2', label: '↓ medial elastin & smooth muscle', emphasis: 'key' },
      { id: 's3', label: 'Wall weakening' },
      { id: 's4', label: 'Progressive dilatation (aneurysm)' },
    ],
    branches: [
      {
        fromId: 's4',
        title: 'Lethal',
        steps: [{ id: 'r1', label: 'Rupture → massive hemorrhage', emphasis: 'danger' }],
      },
      {
        fromId: 's4',
        title: 'Embolic',
        steps: [{ id: 'e1', label: 'Mural thrombus → embolism' }],
      },
    ],
  },

  examFindings: [
    { sign: 'Pulsatile abdominal mass (AAA)', mechanism: 'Dilated infrarenal aorta', significance: 'key' },
    { sign: 'Sudden severe pain + hypotension', mechanism: 'Rupture — surgical emergency', significance: 'key' },
    { sign: 'Back/chest pain, cough, hoarseness, dyspnea (TAA)', mechanism: 'Compression of adjacent structures / recurrent laryngeal nerve', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Ultrasound', meaning: 'AAA screening & size monitoring' },
    { clue: 'CT angiography', meaning: 'Extent, rupture, surgical planning' },
    { clue: 'Echo / CT for TAA', meaning: 'Root size, valve, dissection' },
  ],

  treatment: [
    { logic: 'Risk-factor control + size surveillance', detail: 'BP control, smoking cessation.' },
    { logic: 'Repair (open or endovascular) at threshold size or if symptomatic / rapidly expanding', detail: 'Elective repair prevents rupture.' },
  ],

  mnemonics: [
    { hook: 'AAA = Atherosclerosis, Abdominal, infrArenal', expansion: ['Most common cause = atherosclerosis', 'Usually infrarenal', 'Palpable pulsatile mass'] },
    { hook: 'TAA = Tissue defect + Tension', expansion: ['Connective tissue (Marfan, bicuspid valve)', 'Hypertension; cystic medial degeneration'] },
  ],

  traps: [
    {
      questionCategory: 'Cause by location',
      wrongInstinct: 'All aortic aneurysms are atherosclerotic',
      rightAnswer: 'AAA = atherosclerosis; TAA = HTN + connective-tissue / medial degeneration',
      why: 'Location predicts cause: abdominal (infrarenal) is classically atherosclerotic; thoracic is HTN with cystic medial degeneration (Marfan, bicuspid valve, aortitis).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 70-year-old smoker has a pulsatile periumbilical mass. The most likely cause of this infrarenal aneurysm?',
      options: [
        { id: 'a', text: 'Marfan syndrome' },
        { id: 'b', text: 'Atherosclerosis' },
        { id: 'c', text: 'Syphilitic aortitis' },
        { id: 'd', text: 'Takayasu arteritis' },
      ],
      answerId: 'b',
      explanation: 'Abdominal aortic aneurysms are most commonly atherosclerotic and infrarenal, presenting as a pulsatile mass in an older smoker. Marfan/connective-tissue and aortitis classically cause thoracic aneurysms.',
      tests: 'mechanism',
    },
  ],
};

export default aorticAneurysm;
