import type { Lecture } from '../../lib/types';

export const behPsychoticDisorders: Lecture = {
  id: 'beh-psychotic-disorders',
  title: 'Psychotic Disorders: Schizophrenia & Psychosis (DSM-5-TR)',
  system: 'community',
  source: 'L4 — Mental Disorders (DSM-5-TR)',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Behavioral Science' },
    { kind: 'lecture', label: 'L4 Mental Disorders (DSM-5-TR)' },
    { kind: 'disease', label: 'Schizophrenia · schizophreniform · brief psychotic' },
    { kind: 'exam', label: 'Positive vs negative · duration criteria' },
  ],

  highYield: [
    '**Schizophrenia (Criterion A): ≥2 of five symptoms**, each present a significant part of one month, with **at least one from the first three** — **delusions**, **hallucinations**, **disorganized speech**, grossly disorganized/catatonic behaviour, and **negative symptoms**. Disordered speech reflects the disordered thought seen on the [[beh-mental-status-exam]].',
    '**Duration is the pivot that names the diagnosis.** **Brief psychotic disorder** = ≥1 day but **<1 month** with full recovery; **schizophreniform disorder** = **1–6 months**; **schizophrenia** = **≥6 months** of continuous signs (including ≥1 month of active-phase Criterion A symptoms).',
    '**Positive vs negative symptoms.** **Positive** = added experiences (delusions, hallucinations, disorganized speech/behaviour) and respond better to dopamine-blocking antipsychotics. **Negative** = lost functions — the **5 A’s**: Affective flattening, Alogia, Anhedonia, Avolition, Asociality — respond poorly and drive long-term disability.',
    '**Dopamine underlies the positive symptoms** (mesolimbic overactivity), grounding the neurobiology in [[beh-neurobiology-behavior]]. Negative and cognitive symptoms track prefrontal (mesocortical) hypofunction and carry the worse prognosis.',
    '**Schizoaffective disorder needs ≥2 weeks of psychosis WITHOUT prominent mood symptoms** at some point, alongside a mood episode — this is what separates it from a mood disorder with psychotic features (see [[beh-mood-anxiety-disorders]]).',
  ],

  mechanism: {
    title: 'Criterion A symptoms → duration determines the diagnosis',
    steps: [
      { id: 's1', label: 'Criterion A: ≥2 symptoms, ≥1 of delusions/hallucinations/disorganized speech', emphasis: 'key' },
      { id: 's2', label: '<1 month, full recovery → brief psychotic disorder' },
      { id: 's3', label: '1–6 months → schizophreniform disorder' },
      { id: 's4', label: '≥6 months (incl. ≥1 month active) → schizophrenia', emphasis: 'key' },
      { id: 's5', label: 'Psychosis + mood episode → schizoaffective vs mood-with-psychosis', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Positive symptoms are added experiences; negative symptoms are lost functions', mechanism: 'Delusions and hallucinations are additions; the 5 A’s (avolition, alogia, etc.) are deficits', significance: 'key' },
    { sign: 'Duration separates brief psychotic (<1 mo), schizophreniform (1–6 mo), and schizophrenia (≥6 mo)', mechanism: 'Identical active-phase symptoms are classified by how long the illness persists', significance: 'key' },
    { sign: 'Criterion A needs ≥2 symptoms with at least one core positive symptom', mechanism: 'At least one of delusions, hallucinations, or disorganized speech must be present', significance: 'key' },
    { sign: 'Schizoaffective needs ≥2 weeks of psychosis without prominent mood symptoms', mechanism: 'This distinguishes it from a mood disorder with psychotic features', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Three weeks of delusions and hallucinations, then a full return to baseline', meaning: 'Brief psychotic disorder — under one month with recovery' },
    { clue: 'Two months of delusions and disorganized speech with impaired functioning', meaning: 'Schizophreniform disorder — the 1-to-6-month window' },
    { clue: 'Eight months of hallucinations with blunted affect, avolition, and social withdrawal', meaning: 'Schizophrenia — over six months, with both positive and negative symptoms' },
    { clue: 'Flat affect, poverty of speech, and no motivation with no added perceptions', meaning: 'A negative-symptom picture — the 5 A’s' },
  ],

  treatment: [
    { logic: 'Positive symptoms track dopamine; negative symptoms do not', detail: 'Positive symptoms respond to dopamine-blocking antipsychotics (mesolimbic overactivity), whereas negative and cognitive symptoms respond poorly and account for most long-term disability — mechanism in [[beh-neurobiology-behavior]].' },
  ],

  mnemonics: [
    { hook: 'Negative symptoms = 5 A’s: Affective flattening, Alogia, Anhedonia, Avolition, Asociality', expansion: ['All are losses of normal function', 'They drive the poorer long-term prognosis'] },
    { hook: 'Duration ladder: 1 day–1 month brief, 1–6 months form, ≥6 months schizophrenia', expansion: ['Same symptoms, different length', 'Six months is the schizophrenia threshold'] },
  ],

  traps: [
    {
      questionCategory: 'Schizophreniform vs schizophrenia',
      wrongInstinct: 'One month of active psychotic symptoms is enough to diagnose schizophrenia',
      rightAnswer: 'Schizophrenia requires ≥6 months of continuous signs; 1–6 months is schizophreniform, and under a month is brief psychotic disorder',
      why: 'The active-phase symptoms can be identical — total duration is what determines the diagnosis.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient has had delusions, auditory hallucinations, and disorganized speech with impaired functioning for the past 3 months. There is no prominent mood episode and no substance cause. Which diagnosis best fits?',
      options: [
        { id: 'a', text: 'Brief psychotic disorder' },
        { id: 'b', text: 'Schizophreniform disorder' },
        { id: 'c', text: 'Schizophrenia' },
        { id: 'd', text: 'Delusional disorder' },
      ],
      answerId: 'b',
      explanation: 'Criterion A symptoms lasting between 1 and 6 months define schizophreniform disorder. Under 1 month would be brief psychotic disorder, and 6 months or more would be schizophrenia.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'A patient with chronic schizophrenia shows a flat, unreactive affect, minimal speech, and a lack of motivation to engage in any activity. These features are best classified as:',
      options: [
        { id: 'a', text: 'Positive symptoms' },
        { id: 'b', text: 'Negative symptoms' },
        { id: 'c', text: 'Cognitive distortions' },
        { id: 'd', text: 'Delusions of control' },
      ],
      answerId: 'b',
      explanation: 'Affective flattening, alogia (poverty of speech), and avolition are negative symptoms — losses of normal function (the 5 A’s). Positive symptoms are added experiences such as delusions and hallucinations.',
      tests: 'exam',
    },
  ],
};

export default behPsychoticDisorders;
