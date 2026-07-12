import type { Lecture } from '../../lib/types';

export const fcp1CognitiveAssessment: Lecture = {
  id: 'fcp1-cognitive-assessment',
  title: 'Cognitive Assessment & Dementia Workup',
  system: 'clinical',
  source: 'L28 — Cognitive Impairment & Disorders of Consciousness',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L28 Consciousness' },
    { kind: 'disease', label: 'Dementia subtypes · MCI' },
    { kind: 'mechanism', label: 'Cognitive domains' },
    { kind: 'investigation', label: 'MMSE · MoCA · reversible screen' },
  ],

  highYield: [
    'Assess cognition by **domain**: **memory** (episodic/working), **attention**, **language**, **executive function**, **visuospatial** ability and **social cognition**. Which domains fail, and in what order, points to the cause. First **exclude delirium** — you cannot validly test cognition in a fluctuating, inattentive patient (see [[fcp1-delirium-vs-dementia]]).',
    '**Bedside tools:** the **MMSE (/30)** is quick but **weak for executive/frontal function and insensitive to mild cognitive impairment**; the **MoCA (/30)** is **more sensitive to MCI**, executive and visuospatial deficits (clock-draw, trails). Quick screens include Mini-Cog and the AMT. Always factor **confounders**: delirium, **depression (pseudodementia)**, low education, and sensory/language barriers.',
    '**Dementia needs functional decline, not just a low score.** Confirm cognitive decline **PLUS impairment of daily function (ADL/IADL)** from an **informant** history. **Mild cognitive impairment (MCI)** = objective decline **without** functional impairment — it is not dementia. Deep unresponsiveness instead is a consciousness problem — see [[fcp1-consciousness-coma-approach]].',
    '**Pattern recognition of the common dementias:** **Alzheimer** — insidious **episodic memory** first; **vascular** — **stepwise** decline with executive/attention deficits and vascular risk; **dementia with Lewy bodies** — **fluctuation, visual hallucinations, parkinsonism, REM sleep behaviour disorder** (overlaps [[fcp1-movement-hypokinetic-parkinsonism]]); **frontotemporal** — **early personality/behaviour or language** change in a younger patient with relatively preserved early memory.',
    '**Workup:** screen for **reversible / contributory causes** with **TSH, B12, folate, calcium, glucose, U&E, LFTs** (± HIV/syphilis if indicated) and **structural imaging (CT or MRI)**, and treat depression. **Red flags for an atypical or secondary cause:** **young onset, rapid progression** (consider CJD or autoimmune), **early gait disturbance with incontinence (normal-pressure hydrocephalus)**, focal neurology, or prominent early behavioural change.',
  ],

  mechanism: {
    title: 'From bedside cognition to a dementia diagnosis',
    steps: [
      { id: 's1', label: 'Exclude delirium and depression before testing cognition', emphasis: 'key' },
      { id: 's2', label: 'Screen domains with MMSE / MoCA (MoCA more sensitive to MCI)', emphasis: 'normal' },
      { id: 's3', label: 'Add informant history of functional (ADL/IADL) decline', emphasis: 'key' },
      { id: 's4', label: 'Match the domain pattern to a dementia subtype', emphasis: 'normal' },
      { id: 's5', label: 'Screen reversible causes + image; flag young/rapid/focal presentations', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Early loss of recent (episodic) memory with preserved social manner', mechanism: 'Typical of Alzheimer disease', significance: 'key' },
    { sign: 'Abnormal clock-drawing and trail-making with a near-normal MMSE', mechanism: 'Executive/visuospatial deficit better captured by the MoCA than the MMSE', significance: 'key' },
    { sign: 'Fluctuating cognition with visual hallucinations and parkinsonism', mechanism: 'Suggests dementia with Lewy bodies', significance: 'supportive' },
    { sign: 'Early gait disturbance and urinary incontinence with cognitive decline', mechanism: 'Triad of normal-pressure hydrocephalus — a potentially reversible cause', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'MoCA rather than MMSE when mild cognitive impairment is suspected', meaning: 'MoCA is more sensitive to early and executive/visuospatial deficits' },
    { clue: 'TSH, B12, folate, calcium, glucose, U&E, LFTs', meaning: 'Screens for reversible / contributory metabolic and endocrine causes' },
    { clue: 'Structural imaging (CT or MRI brain)', meaning: 'Excludes tumour, subdural, vascular burden and normal-pressure hydrocephalus' },
    { clue: 'Informant questionnaire (e.g. IQCODE) and ADL/IADL review', meaning: 'Establishes the functional decline required to diagnose dementia' },
  ],

  treatment: [
    { logic: 'Treat what is reversible before labelling dementia', detail: 'Correct B12, thyroid, calcium and depression, and address normal-pressure hydrocephalus, which can improve with CSF diversion.' },
    { logic: 'Refer and support once dementia is confirmed', detail: 'Specialist assessment for subtype and appropriate therapy, plus carer support, safety and advance-care planning; note MCI needs monitoring, not dementia drugs.' },
  ],

  mnemonics: [
    { hook: 'MoCA catches Mild; MMSE Misses executive', expansion: ['Score + functional decline = dementia', 'Score without functional loss = MCI', 'Always exclude delirium and depression first'] },
  ],

  traps: [
    {
      questionCategory: 'Pseudodementia',
      wrongInstinct: 'A low cognitive score in a low-mood elderly patient confirms irreversible dementia',
      rightAnswer: 'Depression can mimic dementia (pseudodementia) and cognition may recover with treatment — screen for and treat depression before concluding dementia',
      why: 'Depression impairs attention and effort on testing; treating it can reverse the apparent cognitive decline.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 68-year-old with early word-finding trouble scores 28/30 on the MMSE, but relatives report he now gets lost and mismanages finances. The best next cognitive test to characterise the deficit is:',
      options: [
        { id: 'a', text: 'Repeat the same MMSE in one week' },
        { id: 'b', text: 'The MoCA, which is more sensitive to executive and visuospatial deficits' },
        { id: 'c', text: 'The Glasgow Coma Scale' },
        { id: 'd', text: 'No further testing is needed given the normal MMSE' },
      ],
      answerId: 'b',
      explanation: 'A near-normal MMSE can miss executive and visuospatial impairment. The MoCA is more sensitive to mild cognitive impairment and these domains (clock-draw, trails), matching the functional decline the family describes.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A 62-year-old has 6 months of progressive cognitive decline. Which finding most warrants investigation for a reversible or atypical cause rather than assuming Alzheimer disease?',
      options: [
        { id: 'a', text: 'Gradual short-term memory loss' },
        { id: 'b', text: 'Early gait disturbance with urinary incontinence' },
        { id: 'c', text: 'Preserved social behaviour' },
        { id: 'd', text: 'A family history of late-onset dementia' },
      ],
      answerId: 'b',
      explanation: 'Early gait disturbance with incontinence and cognitive decline is the triad of normal-pressure hydrocephalus, a potentially reversible cause that warrants imaging. Gradual memory loss with preserved manner is typical of Alzheimer disease.',
      tests: 'investigation',
    },
  ],
};

export default fcp1CognitiveAssessment;
