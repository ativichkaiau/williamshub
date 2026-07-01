import type { Lecture } from '../../lib/types';

export const cognitiveDomainsDementiaWorkup: Lecture = {
  id: 'cognitive-domains-dementia-workup',
  title: 'Cognitive Domains & Dementia Workup',
  system: 'neuro',
  source: 'L12 — Cognition & Consciousness',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L12 Cognition & Consciousness' },
    { kind: 'disease', label: 'Dementia' },
    { kind: 'mechanism', label: 'Cognitive staging' },
    { kind: 'exam', label: 'Delirium vs dementia' },
  ],

  highYield: [
    'Cognitive domains: **memory, language, attention, visuospatial, executive function, behavior**. Working memory = **prefrontal cortex**; episodic memory = **medial temporal lobe** (hippocampus — first hit in Alzheimer).',
    'Neurocognitive staging: **Subjective cognitive decline (normal tests & ADLs) → Mild cognitive impairment (abnormal tests, NORMAL ADLs) → Dementia (impaired ADLs)**. Screen with **TMSE / MoCA**.',
    'Before diagnosing dementia, **always exclude the “2 Ds” — Delirium and Depression**. **Delirium = acute, fluctuating, inattention with altered consciousness** (vs the chronic, alert course of dementia).',
    'Dementia is **reversible or non-reversible**. Reversible/treatable (mnemonic **“DEMENTIA”**): **Drugs (anticholinergics), Emotional (depression), Metabolic/endocrine (thyroid, B12), Eyes/ears, Nutritional/NPH, Tumor/Trauma, Infection (HIV, syphilis), Alcohol**.',
    '**Rapidly progressive dementia** (<6 months) — mnemonic **VITAMINS** (Vascular, Infection [prion, syphilis], Toxic-metabolic, Autoimmune, Malignancy, Iatrogenic, Neurodegenerative, Systemic) — is often treatable, so work it up urgently.',
  ],

  mechanism: {
    title: 'Screen, stage, and exclude reversible mimics',
    steps: [
      { id: 's1', label: 'Cognitive complaint (patient/family/clinician)' },
      { id: 's2', label: 'Exclude delirium & depression (2 Ds)', emphasis: 'key' },
      { id: 's3', label: 'Stage: SCD → MCI (ADL normal) → dementia (ADL impaired)' },
      { id: 's4', label: 'Hunt reversible causes (DEMENTIA / VITAMINS)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Acute, fluctuating inattention with clouded consciousness', mechanism: 'Delirium (not dementia)', significance: 'key' },
    { sign: 'Impaired instrumental ADLs (finances, medications)', mechanism: 'Progression from MCI to dementia', significance: 'key' },
    { sign: 'Episodic memory loss', mechanism: 'Medial temporal (hippocampal) dysfunction', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'TMSE / MoCA + ADL/IADL assessment', meaning: 'Stages cognition & function' },
    { clue: 'B12, thyroid, metabolic panel, HIV/syphilis, neuroimaging', meaning: 'Reversible-dementia screen' },
    { clue: 'Onset speed (<6 months)', meaning: 'Rapidly progressive dementia workup' },
  ],

  treatment: [
    { logic: 'Treat any reversible cause found', detail: 'B12, thyroid, NPH shunt, stop offending drug.' },
    { logic: 'Manage delirium/depression before labeling dementia', detail: 'They mimic and worsen cognition.' },
  ],

  mnemonics: [
    { hook: 'Exclude the 2 Ds: Delirium & Depression', expansion: ['Both mimic dementia and are treatable'] },
    { hook: 'MCI = impaired cognition but PRESERVED ADLs; dementia = ADLs impaired', expansion: ['1/3 of MCI progress, 1/3 stay, 1/3 revert'] },
  ],

  traps: [
    {
      questionCategory: 'MCI vs dementia',
      wrongInstinct: 'Any objective cognitive impairment on testing means dementia',
      rightAnswer: 'Mild cognitive impairment has measurable cognitive decline but PRESERVED activities of daily living; dementia requires functional (ADL) impairment',
      why: 'The defining line between MCI and dementia is functional independence — MCI patients still manage daily activities, whereas dementia impairs them.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 78-year-old develops acute confusion that fluctuates over hours, with marked inattention and drowsiness, two days after surgery. The most likely diagnosis is:',
      options: [
        { id: 'a', text: 'Alzheimer dementia' },
        { id: 'b', text: 'Delirium' },
        { id: 'c', text: 'Mild cognitive impairment' },
        { id: 'd', text: 'Vascular dementia' },
      ],
      answerId: 'b',
      explanation: 'Acute-onset, fluctuating inattention with altered consciousness — especially post-operatively — is delirium, a reversible condition that must be excluded before diagnosing dementia.',
      tests: 'exam',
    },
  ],
};

export default cognitiveDomainsDementiaWorkup;
