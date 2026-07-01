import type { Lecture } from '../../lib/types';

export const atypicalAntipsychoticAgents: Lecture = {
  id: 'atypical-antipsychotic-agents',
  title: 'Antipsychotic Agents & Their Profiles',
  system: 'neuro',
  source: 'L16 — Antipsychotics',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L16 Antipsychotics' },
    { kind: 'disease', label: 'Schizophrenia' },
    { kind: 'mechanism', label: 'Agent selection' },
    { kind: 'exam', label: 'Clozapine' },
  ],

  highYield: [
    '**Typicals**: high-potency (**haloperidol, fluphenazine**) → **more EPS/prolactin, less sedation**; low-potency (**chlorpromazine, thioridazine**) → **more sedation, orthostatic hypotension, anticholinergic** effects (H1/α1/M blockade).',
    '**Clozapine** = for **treatment-resistant schizophrenia** and reduces suicide; minimal EPS — but **agranulocytosis (mandatory CBC monitoring), seizures, myocarditis, severe weight gain**.',
    '**Olanzapine** — high efficacy but **marked weight gain/metabolic syndrome**; **quetiapine** — very low EPS, sedating (bipolar depression/insomnia); **risperidone** — potent but **dose-dependent EPS & hyperprolactinemia**.',
    '**Ziprasidone** — weight-neutral but **QT prolongation**; **aripiprazole** — a **D2 partial agonist**, minimal weight gain, lowers prolactin (but akathisia).',
    'Practice: **atypicals are first-line** for most new starts (fewer EPS, broader coverage); choose the agent by comorbidity/side-effect profile; use **long-acting injectables** for poor adherence.',
  ],

  mechanism: {
    title: 'Balance efficacy against the side-effect profile',
    steps: [
      { id: 's1', label: 'Atypical (5-HT2A > D2) first-line', emphasis: 'key' },
      { id: 's2', label: 'Metabolic risk (olanzapine/clozapine) vs QT (ziprasidone)' },
      { id: 's3', label: 'Clozapine for treatment-resistant (with monitoring)', emphasis: 'danger' },
      { id: 's4', label: 'Individualize by comorbidity; LAI for adherence' },
    ],
  },

  examFindings: [
    { sign: 'Improvement in treatment-resistant psychosis + neutropenia', mechanism: 'Clozapine (agranulocytosis risk)', significance: 'key' },
    { sign: 'Weight gain, hyperglycemia, dyslipidemia', mechanism: 'Olanzapine/clozapine metabolic effects', significance: 'key' },
    { sign: 'QT prolongation on ECG', mechanism: 'Ziprasidone', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Regular CBC on clozapine', meaning: 'Agranulocytosis surveillance' },
    { clue: 'Weight, glucose, lipids on atypicals', meaning: 'Metabolic monitoring' },
    { clue: 'Baseline/serial ECG (ziprasidone)', meaning: 'QT monitoring' },
  ],

  treatment: [
    { logic: 'Reserve clozapine for treatment-resistant disease', detail: 'Superior efficacy but strict monitoring.' },
    { logic: 'Choose weight-neutral agent if metabolic risk', detail: 'e.g. ziprasidone, aripiprazole.' },
    { logic: 'Long-acting injectable for adherence problems', detail: 'Prevents relapse.' },
  ],

  mnemonics: [
    { hook: 'Clozapine = treatment-resistant + ↓suicide, but agranulocytosis (monitor CBC)', expansion: ['Also seizures, myocarditis, weight gain'] },
    { hook: 'Olanzapine = obese (metabolic); Ziprasidone = QT; Aripiprazole = D2 partial agonist', expansion: ['Match agent to patient'] },
  ],

  traps: [
    {
      questionCategory: 'Clozapine monitoring',
      wrongInstinct: 'Clozapine is a safe first-line antipsychotic since it has minimal EPS',
      rightAnswer: 'Clozapine is reserved for treatment-resistant schizophrenia and requires regular CBC monitoring because of the risk of agranulocytosis (plus seizures, myocarditis, metabolic effects)',
      why: 'Despite superior efficacy and minimal EPS, clozapine’s potentially fatal agranulocytosis mandates blood-count monitoring and restricts it to refractory cases.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with schizophrenia refractory to two adequate antipsychotic trials is started on clozapine. Which monitoring is mandatory because of a potentially fatal adverse effect?',
      options: [
        { id: 'a', text: 'Serial visual field testing' },
        { id: 'b', text: 'Regular complete blood counts (for agranulocytosis)' },
        { id: 'c', text: 'Thyroid function tests' },
        { id: 'd', text: 'Serum calcium' },
      ],
      answerId: 'b',
      explanation: 'Clozapine is used for treatment-resistant schizophrenia but can cause agranulocytosis, so regular CBC monitoring is mandatory (it also carries risks of seizures, myocarditis, and metabolic effects).',
      tests: 'investigation',
    },
  ],
};

export default atypicalAntipsychoticAgents;
