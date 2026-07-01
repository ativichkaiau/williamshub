import type { Lecture } from '../../lib/types';

export const barbituratesAndAnxiolytics: Lecture = {
  id: 'barbiturates-and-anxiolytics',
  title: 'Barbiturates & Non-Benzodiazepine Anxiolytics',
  system: 'neuro',
  source: 'L14 — Sedatives & Hypnotics',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L14 Sedatives & Hypnotics' },
    { kind: 'disease', label: 'Barbiturates / buspirone' },
    { kind: 'mechanism', label: 'GABA_A / 5-HT1A' },
    { kind: 'exam', label: 'Therapeutic index' },
  ],

  highYield: [
    '**Barbiturates** increase the **duration** of GABA_A Cl⁻ opening and at **high dose open the channel directly** — so they have a **low therapeutic index** (steep dose-response → respiratory/cardiac depression, coma, death; historically used for suicide). **No antagonist (flumazenil does NOT reverse them).**',
    'Barbiturates are **potent CYP450 inducers** (many drug interactions) and are **contraindicated in acute intermittent porphyria** (induce ALA synthase → porphyrin precursors).',
    'Uses today: **phenobarbital** (anticonvulsant, refractory status epilepticus), **thiopental** (ultra-short IV anesthesia induction); phenobarbital also induces glucuronyl transferase (neonatal hyperbilirubinemia).',
    '**Benzodiazepines > barbiturates**: higher therapeutic index, flumazenil antidote, less enzyme induction, less dependence — hence benzodiazepines replaced barbiturates.',
    '**Buspirone** = a **5-HT1A partial agonist** for **generalized anxiety disorder**: **slow onset (2–4 weeks)**, **no sedation, no dependence, no additive CNS depression** — safe in the elderly and those with substance-use history. Class adverse effects of sedative-hypnotics: additive CNS/respiratory depression (esp. with alcohol/opioids), anterograde amnesia, tolerance/dependence, floppy-infant syndrome.',
  ],

  mechanism: {
    title: 'Deeper GABA action (barbiturates) vs non-GABA anxiolysis (buspirone)',
    steps: [
      { id: 's1', label: 'Barbiturate: ↑ duration, high dose opens Cl⁻ directly', emphasis: 'key' },
      { id: 's2', label: 'Low therapeutic index → respiratory depression, coma', emphasis: 'danger' },
      { id: 's3', label: 'CYP450 induction; contraindicated in porphyria' },
      { id: 's4', label: 'Buspirone: 5-HT1A partial agonist, non-sedating' },
    ],
  },

  examFindings: [
    { sign: 'Respiratory/cardiac depression from overdose, no reversal agent', mechanism: 'Barbiturate (low therapeutic index)', significance: 'key' },
    { sign: 'Acute porphyria attack triggered by a sedative', mechanism: 'Barbiturate induces ALA synthase', significance: 'key' },
    { sign: 'Anxiolysis over weeks without sedation/dependence', mechanism: 'Buspirone (5-HT1A)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Therapeutic index / response to flumazenil', meaning: 'Barbiturate (low, no reversal) vs benzodiazepine' },
    { clue: 'CYP450 interactions', meaning: 'Barbiturate enzyme induction' },
    { clue: 'Onset (immediate vs 2–4 weeks)', meaning: 'Benzodiazepine vs buspirone' },
  ],

  treatment: [
    { logic: 'Prefer benzodiazepines over barbiturates', detail: 'Safer therapeutic index; flumazenil antidote.' },
    { logic: 'Buspirone for chronic GAD, esp. dependence-prone patients', detail: 'No sedation/dependence.' },
    { logic: 'Overdose: ventilatory support; flumazenil only for benzodiazepines', detail: 'No barbiturate antidote.' },
  ],

  mnemonics: [
    { hook: 'Barbiturates = low therapeutic index, enzyme inducer, no antidote, porphyria', expansion: ['Replaced by benzodiazepines'] },
    { hook: 'Buspirone = 5-HT1A partial agonist, slow, non-sedating, non-addictive', expansion: ['GAD; safe in elderly/substance use'] },
  ],

  traps: [
    {
      questionCategory: 'Reversing sedative-hypnotic overdose',
      wrongInstinct: 'Flumazenil can reverse both benzodiazepine and barbiturate overdoses',
      rightAnswer: 'Flumazenil reverses benzodiazepines and Z-drugs only — there is NO antidote for barbiturates (supportive/ventilatory care)',
      why: 'Barbiturates act partly by directly opening the Cl⁻ channel independent of the benzodiazepine site, so flumazenil is ineffective; management of barbiturate overdose is supportive.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with generalized anxiety disorder and a history of alcohol dependence needs an anxiolytic with no sedation or dependence potential. The best choice is:',
      options: [
        { id: 'a', text: 'Diazepam' },
        { id: 'b', text: 'Phenobarbital' },
        { id: 'c', text: 'Buspirone' },
        { id: 'd', text: 'Zolpidem' },
      ],
      answerId: 'c',
      explanation: 'Buspirone, a 5-HT1A partial agonist, treats GAD without sedation, dependence, or additive CNS depression, making it well suited to patients with a substance-use history (though it takes 2–4 weeks to work).',
      tests: 'treatment',
    },
  ],
};

export default barbituratesAndAnxiolytics;
