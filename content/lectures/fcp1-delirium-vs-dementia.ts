import type { Lecture } from '../../lib/types';

export const fcp1DeliriumVsDementia: Lecture = {
  id: 'fcp1-delirium-vs-dementia',
  title: 'Delirium vs Dementia',
  system: 'clinical',
  source: 'L28 — Cognitive Impairment & Disorders of Consciousness',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L28 Consciousness' },
    { kind: 'disease', label: 'Delirium · dementia' },
    { kind: 'mechanism', label: 'Acute reversible vs chronic' },
    { kind: 'investigation', label: 'CAM · reversible-cause screen' },
  ],

  highYield: [
    '**Delirium** is an **acute (hours–days)**, **fluctuating** disturbance whose **core feature is inattention**, with altered arousal, disorganised thinking and often perceptual disturbance. **Dementia** is a **chronic (months–years)**, **progressive** decline in memory and other domains with **clear consciousness and relatively preserved attention** early on. Formal cognitive testing is covered in [[fcp1-cognitive-assessment]].',
    '**Time course and attention are the discriminators.** Delirium: **acute + fluctuating + inattentive ± drowsy or hyperalert**. Dementia: **insidious + steadily progressive + alert + attentive** (until late). The two coexist — **dementia is the biggest risk factor for delirium**, and delirium is easily superimposed on it.',
    'Use the **Confusion Assessment Method (CAM)**: **(1) acute onset and fluctuating course** AND **(2) inattention**, PLUS either **(3) disorganised thinking** OR **(4) altered level of consciousness**. **Hypoactive** delirium (quiet, withdrawn) is the most **commonly missed** and carries the **worst** prognosis.',
    '**Delirium is a medical emergency — hunt the reversible cause.** Common triggers by DELIRIUM / drugs: **D**rugs (**anticholinergics**, opioids, sedatives, benzodiazepines), **E**lectrolytes/dehydration, **I**nfection (**UTI, pneumonia**), **R**etention (urine or stool), hypox**I**a, metabolic (glucose, Na, liver, thyroid), **U**nderlying pain, and **withdrawal** (alcohol / benzodiazepine). A deep, unrousable patient shifts you toward [[fcp1-consciousness-coma-approach]].',
    '**Approach:** screen for the trigger — glucose, FBC, U&E, calcium, CRP, **urinalysis and culture**, CXR, ECG and a **medication review**, plus CT head if there is head injury, a focal deficit or no cause is found. **Manage the cause**, add non-drug supportive care (reorientation, sleep, hydration, early mobilisation, avoid restraints), and reserve antipsychotics for severe agitation — **use benzodiazepines, not antipsychotics, for alcohol-withdrawal delirium**.',
  ],

  mechanism: {
    title: 'Separate acute-reversible from chronic-progressive',
    steps: [
      { id: 's1', label: 'Establish the time course from a collateral history (baseline vs now)', emphasis: 'key' },
      { id: 's2', label: 'Test attention; inattention + fluctuation = delirium until proven otherwise', emphasis: 'key' },
      { id: 's3', label: 'Alert, attentive, slowly progressive amnesia → dementia', emphasis: 'normal' },
      { id: 's4', label: 'Delirium → search drugs, infection, metabolic, retention, hypoxia, withdrawal', emphasis: 'danger' },
      { id: 's5', label: 'Treat the cause + supportive care; sedate only for danger', emphasis: 'normal' },
    ],
  },

  examFindings: [
    { sign: 'Fluctuating alertness with poor attention (e.g. fails months-of-year backwards)', mechanism: 'Inattention is the core deficit of delirium', significance: 'key' },
    { sign: 'Acute change from a clearly stated baseline, per a collateral historian', mechanism: 'Acute onset separates delirium from the insidious course of dementia', significance: 'key' },
    { sign: 'Quiet, withdrawn, hypoalert but disoriented patient', mechanism: 'Hypoactive delirium — easily mistaken for depression or fatigue and often missed', significance: 'supportive' },
    { sign: 'Preserved attention with progressive memory loss and clear consciousness', mechanism: 'Pattern of dementia rather than delirium', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'CAM applied at the bedside', meaning: 'Structured, rapid confirmation that acute confusion is delirium' },
    { clue: 'Urinalysis/culture, CXR, FBC, CRP', meaning: 'Finds infection (UTI, pneumonia), a leading trigger in older patients' },
    { clue: 'Glucose, U&E, calcium, LFTs, TFTs, oxygen saturation', meaning: 'Screens metabolic, electrolyte, hepatic, thyroid and hypoxic causes' },
    { clue: 'Medication review and CT head when focal signs or head injury', meaning: 'Deprescribes deliriogenic drugs; excludes a structural cause when indicated' },
  ],

  treatment: [
    { logic: 'Treat delirium by treating its cause', detail: 'Correct infection, hypoxia, electrolytes, glucose, pain and retention, and stop deliriogenic drugs — this is the definitive management.' },
    { logic: 'Provide non-pharmacological supportive care', detail: 'Reorientation, familiar faces, glasses/hearing aids, daylight and sleep hygiene, hydration, early mobilisation and avoiding restraints and catheters.' },
    { logic: 'Use sedation sparingly and correctly', detail: 'Low-dose antipsychotic only for severe agitation or risk to safety; for alcohol-withdrawal delirium use benzodiazepines, not antipsychotics.' },
  ],

  mnemonics: [
    { hook: 'Delirium is Acute, Attention-poor, Alterable; Dementia is Chronic, Clear, Constant-progression', expansion: ['A-words = delirium', 'C-words = dementia', 'Both together is common — screen for reversible causes'] },
  ],

  traps: [
    {
      questionCategory: 'Hypoactive delirium',
      wrongInstinct: 'A quiet, drowsy, withdrawn elderly inpatient is just tired, depressed, or has known dementia',
      rightAnswer: 'Quiet confusion is often hypoactive delirium — screen for infection, drugs and metabolic causes rather than dismissing it',
      why: 'Hypoactive delirium is the commonest and most missed form and signals serious, treatable underlying illness with high mortality.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A daughter says her 80-year-old mother, previously sharp, has over 2 days become confused, drowsy at times and agitated at others, and cannot follow a conversation. Consciousness and attention fluctuate hourly. The most likely diagnosis is:',
      options: [
        { id: 'a', text: 'Alzheimer dementia' },
        { id: 'b', text: 'Delirium' },
        { id: 'c', text: 'Major depression' },
        { id: 'd', text: 'Normal ageing' },
      ],
      answerId: 'b',
      explanation: 'Acute onset over days, a fluctuating course, inattention and altered consciousness meet the Confusion Assessment Method for delirium. Dementia is chronic and progressive with preserved attention early, and the tempo here is far too fast for that.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'A 78-year-old man develops acute confusion three days after hip surgery, with fluctuating attention. He is afebrile but has not passed urine for hours and is on regular oxycodone. The most appropriate next step is:',
      options: [
        { id: 'a', text: 'Start a cholinesterase inhibitor for dementia' },
        { id: 'b', text: 'Screen for reversible causes (bladder scan, review opioids, infection/metabolic work-up)' },
        { id: 'c', text: 'Give a long-acting benzodiazepine for sedation' },
        { id: 'd', text: 'Reassure that post-operative confusion needs no work-up' },
      ],
      answerId: 'b',
      explanation: 'Post-operative delirium demands a search for reversible triggers — here urinary retention and opioids are prime suspects, alongside infection and metabolic causes. Definitive management is treating the cause, not sedation or an anti-dementia drug.',
      tests: 'treatment',
    },
  ],
};

export default fcp1DeliriumVsDementia;
