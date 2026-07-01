import type { Lecture } from '../../lib/types';

export const pediatricEmbryonalTumors: Lecture = {
  id: 'pediatric-embryonal-tumors',
  title: 'Medulloblastoma, Ganglioglioma & Choroid Plexus',
  system: 'neuro',
  source: 'L10 — CNS Neoplasms',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L10 CNS Neoplasms' },
    { kind: 'disease', label: 'Pediatric CNS tumors' },
    { kind: 'mechanism', label: 'Embryonal / neuronal' },
    { kind: 'exam', label: 'Drop metastases' },
  ],

  highYield: [
    '**Medulloblastoma** = malignant **embryonal** tumor, **WHO grade 4**, **children** (~20% of pediatric brain tumors), **exclusively in the cerebellum**.',
    'Medulloblastoma **spreads through CSF → “drop metastases”** to the cauda equina; histology = **small round blue cells** with **Homer-Wright rosettes**. Can herniate through the foramen magnum.',
    '**Ganglioglioma** (WHO grade 1) = most common **neuronal** CNS tumor; **temporal lobe** of children/young adults; presents with **chronic epilepsy** (resection often controls seizures); biphasic neuronal + glial, calcification.',
    '**Choroid plexus papilloma** (grade 1): intraventricular (lateral ventricle in children, 4th in adults) → **hydrocephalus** (obstruction + CSF overproduction); carcinoma (grade 3) is rare.',
    'Posterior-fossa masses in children → **obstructive hydrocephalus** (headache, vomiting, ataxia).',
  ],

  mechanism: {
    title: 'Primitive/neuronal cells → posterior-fossa masses in children',
    steps: [
      { id: 's1', label: 'Cerebellar embryonal tumor (medulloblastoma)', emphasis: 'key' },
      { id: 's2', label: 'Seeds CSF → drop metastases (cauda equina)', emphasis: 'danger' },
      { id: 's3', label: 'Ganglioglioma: temporal lobe → chronic seizures' },
      { id: 's4', label: 'Choroid plexus papilloma → hydrocephalus' },
    ],
  },

  examFindings: [
    { sign: 'Child with ataxia, morning headache, vomiting', mechanism: 'Cerebellar mass + obstructive hydrocephalus', significance: 'key' },
    { sign: 'Drug-resistant temporal-lobe epilepsy in a young patient', mechanism: 'Ganglioglioma', significance: 'key' },
    { sign: 'Hydrocephalus from an intraventricular papillary tumor', mechanism: 'Choroid plexus papilloma', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'MRI brain + whole-spine (drop metastases)', meaning: 'Stage medulloblastoma' },
    { clue: 'Histology (Homer-Wright rosettes; biphasic ganglion+glia)', meaning: 'Medulloblastoma vs ganglioglioma' },
    { clue: 'CSF cytology', meaning: 'Leptomeningeal spread' },
  ],

  treatment: [
    { logic: 'Medulloblastoma: resection + craniospinal radiation + chemo', detail: 'Radiosensitive; treat the whole neuraxis.' },
    { logic: 'Ganglioglioma: surgical resection', detail: 'Usually controls seizures (grade 1).' },
  ],

  mnemonics: [
    { hook: 'Medulloblastoma = cerebellum, kids, Homer-Wright rosettes, CSF drop mets', expansion: ['Small round blue cell, grade 4'] },
    { hook: 'Ganglioglioma = temporal lobe + chronic seizures (grade 1, neuronal)', expansion: ['Resection controls epilepsy'] },
  ],

  traps: [
    {
      questionCategory: 'Spread pattern of medulloblastoma',
      wrongInstinct: 'A malignant brain tumor in a child metastasizes hematogenously to the lungs',
      rightAnswer: 'Medulloblastoma disseminates via the CSF, producing “drop metastases” along the neuraxis (e.g. cauda equina)',
      why: 'CNS tumors rarely leave the neuraxis; medulloblastoma’s characteristic spread is through CSF pathways, so staging includes the whole spine and CSF cytology.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 7-year-old has ataxia and a cerebellar midline mass composed of small round blue cells with Homer-Wright rosettes; spinal MRI shows nodular deposits along the cauda equina. The diagnosis is:',
      options: [
        { id: 'a', text: 'Pilocytic astrocytoma' },
        { id: 'b', text: 'Medulloblastoma' },
        { id: 'c', text: 'Ependymoma' },
        { id: 'd', text: 'Ganglioglioma' },
      ],
      answerId: 'b',
      explanation: 'A cerebellar small-round-blue-cell tumor with Homer-Wright rosettes and CSF “drop metastases” to the cauda equina in a child is medulloblastoma (embryonal, WHO grade 4).',
      tests: 'exam',
    },
  ],
};

export default pediatricEmbryonalTumors;
