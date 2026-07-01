import type { Lecture } from '../../lib/types';

export const osteomyelitisAvnPaget: Lecture = {
  id: 'osteomyelitis-avn-paget',
  title: 'Osteomyelitis, AVN & Paget Disease',
  system: 'msk',
  source: 'L1 — Diseases of Bone',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'MSK' },
    { kind: 'lecture', label: 'L1 Diseases of Bone' },
    { kind: 'disease', label: 'Bone infection / Paget' },
    { kind: 'mechanism', label: 'Infection & remodeling' },
    { kind: 'exam', label: 'Sequestrum / mosaic bone' },
  ],

  highYield: [
    '**Pyogenic osteomyelitis**: **Staphylococcus aureus** (80–90%); **Salmonella in sickle-cell disease**. Children → **long-bone metaphysis**; adults → **vertebrae**. Morphology: **sequestrum** (dead bone), **involucrum** (new bone around it), **Brodie abscess** (subacute intraosseous abscess).',
    '**Mycobacterial (tuberculous) osteomyelitis**: chronic **granulomatous inflammation with caseous necrosis**; spine involvement = **Pott disease**.',
    '**Avascular necrosis (osteonecrosis)** = bone infarction. Causes: trauma, **corticosteroids, sickle cell, alcohol, dysbarism (caisson disease), Gaucher**. Histology = **empty lacunae** (dead osteocytes); subchondral collapse → secondary osteoarthritis.',
    '**Paget disease (osteitis deformans)**: dysregulated remodeling (SQSTM1, ↑ RANK/NF-κB) in **three stages — osteolytic → mixed → osteosclerotic** → thick disordered bone with a **“mosaic” (jigsaw) lamellar pattern**.',
    'Paget clinical: older adults, **enlarged skull (“cotton-wool” on X-ray), cranial-nerve compression, bowed legs, high alkaline phosphatase**; risk of **osteosarcoma**. Treat with **bisphosphonates / calcitonin**.',
  ],

  mechanism: {
    title: 'Infection, infarction, or remodeling gone wrong',
    steps: [
      { id: 's1', label: 'Bacteria → suppuration → sequestrum/involucrum', emphasis: 'key' },
      { id: 's2', label: 'Vascular interruption → osteonecrosis (empty lacunae)' },
      { id: 's3', label: 'Paget: overactive osteoclasts → chaotic remodeling' },
      { id: 's4', label: 'Paget mosaic bone; osteosarcoma risk', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Sequestrum + involucrum on imaging/histology', mechanism: 'Chronic pyogenic osteomyelitis', significance: 'key' },
    { sign: 'Empty osteocyte lacunae', mechanism: 'Avascular necrosis (dead bone)', significance: 'key' },
    { sign: 'Enlarging skull, deafness, high ALP', mechanism: 'Paget disease', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Blood/bone cultures; MRI', meaning: 'Osteomyelitis organism & extent' },
    { clue: 'MRI for early AVN', meaning: 'Before subchondral collapse' },
    { clue: 'Alkaline phosphatase + radiographs', meaning: 'Paget (mosaic/cotton-wool)' },
  ],

  treatment: [
    { logic: 'Osteomyelitis: prolonged antibiotics ± surgical debridement', detail: 'Remove sequestrum.' },
    { logic: 'Paget: bisphosphonates (calcitonin)', detail: 'Reduce osteoclast overactivity.' },
    { logic: 'AVN: relieve cause; joint-preserving surgery', detail: 'Prevent/limit collapse.' },
  ],

  mnemonics: [
    { hook: 'Osteomyelitis: S. aureus usually; Salmonella in Sickle cell', expansion: ['Sequestrum (dead), involucrum (new bone)'] },
    { hook: 'Paget: 3 stages, Mosaic bone, ↑ALP, cotton-wool skull, osteosarcoma risk', expansion: ['Bisphosphonates'] },
  ],

  traps: [
    {
      questionCategory: 'Osteomyelitis organism in sickle cell disease',
      wrongInstinct: 'Osteomyelitis in a sickle-cell patient is caused by Staphylococcus aureus like most cases',
      rightAnswer: 'While S. aureus is the overall most common cause, Salmonella is characteristically associated with osteomyelitis in sickle-cell disease',
      why: 'Sickle-cell patients have a distinctive predisposition to Salmonella osteomyelitis — a classic exam association even though S. aureus dominates in the general population.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An older patient has an enlarging skull, progressive hearing loss, bowed legs, and a markedly elevated alkaline phosphatase with normal calcium. Bone shows a mosaic lamellar pattern. The diagnosis is:',
      options: [
        { id: 'a', text: 'Osteoporosis' },
        { id: 'b', text: 'Paget disease of bone' },
        { id: 'c', text: 'Osteomalacia' },
        { id: 'd', text: 'Osteomyelitis' },
      ],
      answerId: 'b',
      explanation: 'Paget disease (osteitis deformans) produces disordered high-turnover bone (mosaic lamellar pattern), enlarged skull with cotton-wool appearance, cranial-nerve compression, and a very high alkaline phosphatase with normal calcium.',
      tests: 'exam',
    },
  ],
};

export default osteomyelitisAvnPaget;
