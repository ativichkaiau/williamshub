import type { Lecture } from '../../lib/types';

export const alzheimerAndDementias: Lecture = {
  id: 'alzheimer-and-dementias',
  title: 'Alzheimer Disease & Dementia Subtypes',
  system: 'neuro',
  source: 'L12 — Cognition & Consciousness',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L12 Cognition & Consciousness' },
    { kind: 'disease', label: 'Alzheimer' },
    { kind: 'mechanism', label: 'Amyloid & tau' },
    { kind: 'exam', label: 'APOE4 / ChEI' },
  ],

  highYield: [
    '**Alzheimer disease (AD) = the most common degenerative dementia.** Pathology = **extracellular amyloid-β plaques** (APP cleaved by β-/γ-secretase) + **intracellular tau neurofibrillary tangles** → synaptic/neuronal loss.',
    'AD is a **proteinopathy**; other neurodegenerative dementias: **tauopathies (AD, FTD, PSP, CBD)** and **α-synucleinopathies (DLB, PDD, MSA)**. Non-AD dementias: **vascular (VaD, #2)**, frontotemporal (FTLD), Lewy body (DLB).',
    'AD presents with **early episodic memory loss** (medial temporal/hippocampal), then language, visuospatial, executive decline.',
    'Risk factors: **age (strongest)**; genetics — **early-onset (PSEN1, PSEN2, APP)**; late-onset **APOE4** (**homozygous ~10×, heterozygous ~2–3×** risk).',
    'Imaging: **hippocampal + temporoparietal atrophy**, sparing primary motor/sensory cortex. Treatment: **cholinesterase inhibitors (donepezil, rivastigmine, galantamine)** for mild–moderate; **NMDA antagonist (memantine)** for moderate–severe; plus vascular-risk & lifestyle management.',
  ],

  mechanism: {
    title: 'Amyloid + tau → neuronal loss → progressive dementia',
    steps: [
      { id: 's1', label: 'APP cleaved by β-/γ-secretase → amyloid-β plaques', emphasis: 'key' },
      { id: 's2', label: 'Tau hyperphosphorylation → neurofibrillary tangles' },
      { id: 's3', label: 'Synaptic dysfunction → hippocampal neuronal death' },
      { id: 's4', label: 'Episodic memory loss → global cognitive decline', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Early episodic (short-term) memory loss', mechanism: 'Hippocampal/medial temporal involvement', significance: 'key' },
    { sign: 'Symmetric hippocampal/temporoparietal atrophy on MRI', mechanism: 'AD neurodegeneration', significance: 'key' },
    { sign: 'Stepwise decline with vascular risk factors', mechanism: 'Vascular dementia (contrast)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'MRI (hippocampal atrophy)', meaning: 'Supports AD; excludes structural mimics' },
    { clue: 'Amyloid/tau biomarkers (CSF, PET)', meaning: 'AD pathology confirmation' },
    { clue: 'Pattern of decline (memory-first vs behavior-first)', meaning: 'AD vs FTD vs DLB' },
  ],

  treatment: [
    { logic: 'Cholinesterase inhibitors (donepezil etc.)', detail: 'Symptomatic; mild–moderate AD.' },
    { logic: 'Memantine (NMDA antagonist) for moderate–severe', detail: 'Reduces excitotoxicity.' },
    { logic: 'Control vascular risk + lifestyle', detail: 'Slows progression; treats mixed disease.' },
  ],

  mnemonics: [
    { hook: 'AD = Amyloid plaques + tau tangles; memory first (hippocampus)', expansion: ['APP → Aβ; APOE4 raises risk'] },
    { hook: 'Treat AD: ChEI (donepezil) + memantine', expansion: ['Symptomatic, not curative'] },
  ],

  traps: [
    {
      questionCategory: 'APOE4 and Alzheimer risk',
      wrongInstinct: 'Carrying an APOE4 allele means the patient will definitely develop Alzheimer disease',
      rightAnswer: 'APOE4 is a risk factor (heterozygous ~2–3×, homozygous ~10×), not a deterministic mutation; the deterministic genes are PSEN1/PSEN2/APP in early-onset AD',
      why: 'APOE4 raises probability of late-onset AD but many carriers never develop it and many patients lack it; only the autosomal-dominant early-onset genes are causative.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 72-year-old with progressive short-term memory loss has symmetric hippocampal and temporoparietal atrophy on MRI. First-line pharmacologic therapy is:',
      options: [
        { id: 'a', text: 'Levodopa' },
        { id: 'b', text: 'A cholinesterase inhibitor (e.g. donepezil)' },
        { id: 'c', text: 'A benzodiazepine' },
        { id: 'd', text: 'An SSRI' },
      ],
      answerId: 'b',
      explanation: 'This is Alzheimer disease; cholinesterase inhibitors (donepezil, rivastigmine, galantamine) are first-line symptomatic therapy, with memantine added in moderate–severe disease.',
      tests: 'treatment',
    },
  ],
};

export default alzheimerAndDementias;
