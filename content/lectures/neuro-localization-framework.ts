import type { Lecture } from '../../lib/types';

export const neuroLocalizationFramework: Lecture = {
  id: 'neuro-localization-framework',
  title: 'Neuro Localization Framework',
  system: 'neuro',
  source: 'L1 — Clinical Neuroanatomy I',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L1 Clinical Neuroanatomy I' },
    { kind: 'mechanism', label: 'Where is the lesion' },
    { kind: 'exam', label: 'UMN vs LMN' },
  ],

  highYield: [
    'Neuro reasoning = **“where is the lesion, then what is the lesion.”** Localize first (history + exam), then apply causes (**C-T-TIIM**: Congenital, Trauma, Tumor, Infection, Inflammation, Metabolic/vascular).',
    '**One symptom → think one focal structure; >1 symptom with long-tract signs → a lesion high enough to catch multiple tracts** (brainstem/cord/cortex).',
    'Four levels to place a lesion: **cortex · brainstem · spinal cord · peripheral (nerve/root/NMJ/muscle)**.',
    '**UMN (pyramidal/corticospinal)**: spastic weakness, **hyperreflexia, hypertonia, Babinski +, clasp-knife**, no wasting/fasciculation.',
    '**LMN (anterior horn / cranial-motor nucleus / peripheral nerve)**: **flaccid weakness, hyporeflexia, atrophy, fasciculation, hypotonia**.',
  ],

  mechanism: {
    title: 'Count the signs → pick the level → assign a cause',
    steps: [
      { id: 's1', label: 'Chief complaint + exam findings' },
      { id: 's2', label: 'One deficit vs many (long-tract signs?)', emphasis: 'key' },
      { id: 's3', label: 'Localize: cortex / brainstem / cord / peripheral' },
      { id: 's4', label: 'UMN vs LMN pattern narrows the level' },
      { id: 's5', label: 'Apply C-T-TIIM causes' },
    ],
  },

  examFindings: [
    { sign: 'Babinski sign, clonus, hyperreflexia, spasticity', mechanism: 'Corticospinal (UMN) lesion', significance: 'key' },
    { sign: 'Fasciculations, atrophy, areflexia, flaccidity', mechanism: 'Anterior horn / peripheral (LMN) lesion', significance: 'key' },
    { sign: 'Crossed signs (ipsilateral cranial + contralateral body)', mechanism: 'Brainstem lesion', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Level of sensory/motor loss (dermatome/myotome)', meaning: 'Spinal segment localization' },
    { clue: 'Neuroimaging (CT/MRI) guided by localization', meaning: 'Confirms site + reveals the lesion' },
    { clue: 'Pattern: focal vs diffuse, symmetric vs crossed', meaning: 'Cortex vs brainstem vs cord vs PNS' },
  ],

  treatment: [
    { logic: 'Localization drives the workup, not the reverse', detail: 'Examine, localize, then image the right place.' },
    { logic: 'Treat the underlying cause once localized', detail: 'C-T-TIIM differential.' },
  ],

  mnemonics: [
    { hook: 'UMN = “everything UP” (tone, reflexes, toes/Babinski)', expansion: ['LMN = everything down + atrophy + fasciculation'] },
    { hook: 'Where is it? → What is it? (C-T-TIIM)', expansion: ['Localize before you differentiate'] },
  ],

  traps: [
    {
      questionCategory: 'UMN vs LMN weakness',
      wrongInstinct: 'Weakness + reduced reflexes must be an UMN (brain/cord) lesion',
      rightAnswer: 'Flaccid weakness with areflexia, atrophy and fasciculations is an LMN lesion',
      why: 'UMN lesions give spasticity, hyperreflexia and an up-going toe; LMN lesions give flaccidity, areflexia, wasting and fasciculation — the reflex/tone pattern separates them.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient has leg weakness with increased tone, brisk knee jerks, ankle clonus, and an up-going plantar response. This pattern indicates:',
      options: [
        { id: 'a', text: 'Lower motor neuron lesion' },
        { id: 'b', text: 'Upper motor neuron (corticospinal) lesion' },
        { id: 'c', text: 'Primary muscle disease' },
        { id: 'd', text: 'Neuromuscular junction disorder' },
      ],
      answerId: 'b',
      explanation: 'Spasticity, hyperreflexia, clonus, and a Babinski sign are the hallmarks of an upper motor neuron (corticospinal) lesion. LMN, muscle, and NMJ disorders give flaccid weakness with normal or reduced reflexes.',
      tests: 'exam',
    },
  ],
};

export default neuroLocalizationFramework;
