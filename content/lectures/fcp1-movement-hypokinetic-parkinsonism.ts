import type { Lecture } from '../../lib/types';

export const fcp1MovementHypokineticParkinsonism: Lecture = {
  id: 'fcp1-movement-hypokinetic-parkinsonism',
  title: 'Parkinsonism & the Hypokinetic Approach',
  system: 'clinical',
  source: 'L27 — Movement Disorders',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L27 Movement Disorders' },
    { kind: 'disease', label: 'Parkinson · atypical · drug-induced' },
    { kind: 'mechanism', label: 'Nigrostriatal dopamine loss' },
    { kind: 'exam', label: 'Bradykinesia + rigidity' },
  ],

  highYield: [
    '**Parkinsonism** is a clinical syndrome = **bradykinesia PLUS** at least one of **rigidity** or a **rest tremor** (postural instability is a late feature). **Bradykinesia** — slowness **with decrement** (progressive loss of amplitude/speed on repetition) — is the **essential** sign. Its excess-movement counterpart is [[fcp1-movement-hyperkinetic]].',
    '**Idiopathic Parkinson disease** loses **nigrostriatal dopamine** and classically shows **asymmetric** onset, a **4–6 Hz pill-rolling rest** tremor, **cogwheel** rigidity, and a clear, sustained **response to levodopa**. **Non-motor** features (hyposmia, **REM sleep behaviour disorder**, constipation, depression) often precede the motor signs by years.',
    '**Red flags AGAINST idiopathic Parkinson disease** (suggest an atypical or secondary cause): **symmetric** onset, **early falls** with a **vertical gaze palsy** (progressive supranuclear palsy), **early autonomic failure** (multiple system atrophy), **early dementia with visual hallucinations and fluctuations** (dementia with Lewy bodies — see [[fcp1-delirium-vs-dementia]]), marked asymmetric apraxia, **rapid** progression and a **poor levodopa** response.',
    '**Always look for a secondary, reversible cause.** **Drug-induced parkinsonism** (dopamine antagonists — antipsychotics, **metoclopramide**) is the commonest reversible mimic and is typically **symmetric**. Also consider **vascular** parkinsonism, **normal-pressure hydrocephalus** (the triad of **gait apraxia, urinary incontinence and dementia**), and **Wilson** disease in the young.',
    '**Bedside signs:** masked facies, hypophonic monotonous speech, **micrographia**, reduced arm swing, a **stooped, shuffling, festinating** gait, en-bloc turning and a positive glabellar tap. Diagnosis is **clinical**; use MRI to exclude secondary causes and a DaT scan only when the diagnosis is genuinely uncertain.',
  ],

  mechanism: {
    title: 'Confirm parkinsonism, then separate PD from mimics',
    steps: [
      { id: 's1', label: 'Demonstrate bradykinesia with decrement (finger-tap, foot-tap)', emphasis: 'key' },
      { id: 's2', label: 'Add rigidity and/or rest tremor → parkinsonism syndrome', emphasis: 'key' },
      { id: 's3', label: 'Asymmetric + rest tremor + levodopa response → idiopathic Parkinson disease', emphasis: 'normal' },
      { id: 's4', label: 'Review drugs; symmetric drug-induced parkinsonism is reversible', emphasis: 'normal' },
      { id: 's5', label: 'Red flags (early falls, gaze palsy, autonomic/dementia) → atypical, refer', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Finger-tapping that gets slower and smaller as it continues', mechanism: 'Bradykinesia with decrement — the defining feature of parkinsonism', significance: 'key' },
    { sign: 'Asymmetric 4–6 Hz pill-rolling tremor present at rest', mechanism: 'Nigrostriatal dopamine deficiency; strongly suggests idiopathic PD', significance: 'key' },
    { sign: 'Cogwheel rigidity on passive movement', mechanism: 'Increased tone with superimposed tremor', significance: 'supportive' },
    { sign: 'Early recurrent falls with impaired vertical gaze', mechanism: 'Suggests progressive supranuclear palsy, not idiopathic PD', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Structured medication history for dopamine antagonists', meaning: 'Identifies reversible drug-induced parkinsonism (often symmetric)' },
    { clue: 'A clear, sustained response to a levodopa trial', meaning: 'Supports idiopathic Parkinson disease; poor response points to an atypical syndrome' },
    { clue: 'MRI brain', meaning: 'Excludes secondary causes (vascular disease, normal-pressure hydrocephalus, structural lesions)' },
    { clue: 'Caeruloplasmin / copper studies in a young patient', meaning: 'Screens for Wilson disease as a treatable cause' },
  ],

  treatment: [
    { logic: 'Withdraw the offending drug when parkinsonism is drug-induced', detail: 'Stop or switch the dopamine antagonist and allow time; symptoms are often reversible, avoiding a lifelong Parkinson label.' },
    { logic: 'Refer confirmed idiopathic PD for symptomatic dopaminergic therapy', detail: 'Levodopa is the most effective symptomatic treatment; the quality of response also supports the diagnosis.' },
    { logic: 'Recognise and redirect atypical / secondary parkinsonism', detail: 'Early falls, gaze palsy, early autonomic failure or early dementia warrant specialist assessment; normal-pressure hydrocephalus may respond to CSF diversion.' },
  ],

  mnemonics: [
    { hook: 'TRAP: Tremor (rest), Rigidity, Akinesia/bradykinesia, Postural instability', expansion: ['Bradykinesia is mandatory', 'Asymmetry + levodopa response favour PD', 'Symmetry + drugs favour a mimic'] },
  ],

  traps: [
    {
      questionCategory: 'Secondary parkinsonism',
      wrongInstinct: 'Any elderly patient with tremor and slowness has Parkinson disease and needs levodopa',
      rightAnswer: 'Check the drug chart first — symmetric parkinsonism in someone on an antipsychotic or metoclopramide is often drug-induced and reversible',
      why: 'Drug-induced parkinsonism is the commonest reversible cause; missing it leads to unnecessary lifelong therapy.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 72-year-old on long-term metoclopramide develops symmetric slowness, reduced facial expression and cogwheel rigidity over 6 weeks, with no tremor. The most likely explanation is:',
      options: [
        { id: 'a', text: 'Idiopathic Parkinson disease' },
        { id: 'b', text: 'Drug-induced parkinsonism' },
        { id: 'c', text: 'Essential tremor' },
        { id: 'd', text: 'Progressive supranuclear palsy' },
      ],
      answerId: 'b',
      explanation: 'Symmetric parkinsonism developing over weeks in a patient on a dopamine antagonist (metoclopramide) is typically drug-induced and often reversible on stopping the drug. Idiopathic PD is usually asymmetric with a rest tremor and a slower onset.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'Which feature in a patient with parkinsonism argues MOST against a diagnosis of idiopathic Parkinson disease?',
      options: [
        { id: 'a', text: 'Asymmetric rest tremor' },
        { id: 'b', text: 'A good sustained response to levodopa' },
        { id: 'c', text: 'Early recurrent falls with a vertical gaze palsy' },
        { id: 'd', text: 'Reduced sense of smell preceding motor signs' },
      ],
      answerId: 'c',
      explanation: 'Early falls with a vertical (supranuclear) gaze palsy suggest progressive supranuclear palsy, an atypical parkinsonism. Asymmetric rest tremor, a levodopa response and preceding hyposmia are all typical of idiopathic Parkinson disease.',
      tests: 'exam',
    },
  ],
};

export default fcp1MovementHypokineticParkinsonism;
