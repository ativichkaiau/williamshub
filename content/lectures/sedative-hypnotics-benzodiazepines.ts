import type { Lecture } from '../../lib/types';

export const sedativeHypnoticsBenzodiazepines: Lecture = {
  id: 'sedative-hypnotics-benzodiazepines',
  title: 'Sedative-Hypnotics & Benzodiazepines',
  system: 'neuro',
  source: 'L14 — Sedatives & Hypnotics',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L14 Sedatives & Hypnotics' },
    { kind: 'disease', label: 'Anxiety / insomnia' },
    { kind: 'mechanism', label: 'GABA_A modulation' },
    { kind: 'exam', label: 'Flumazenil' },
  ],

  highYield: [
    'All classic sedative-hypnotics act on the **GABA_A receptor Cl⁻ channel** → hyperpolarization → CNS inhibition. **Benzodiazepines increase the FREQUENCY** of Cl⁻ channel opening; **barbiturates increase the DURATION**.',
    '**Sedative (anxiolytic)** = calming at therapeutic dose (limbic; flat dose-response) vs **hypnotic** = induces sleep (steep dose-response). Benzodiazepines serve both.',
    'Benzodiazepine effects: **anxiolysis, sedation/sleep, anticonvulsant, muscle relaxation, anterograde amnesia**. **Antagonist = flumazenil**.',
    'Benzodiazepine PK: hepatic **CYP** phase-1 oxidation often yields **active metabolites → cumulative drowsiness**; **“LEO” (lorazepam, estazolam, oxazepam)** have **no active metabolites** → safer in the **elderly and liver disease**.',
    '**Z-drugs (zolpidem, zaleplon)** bind the same site but selectively at **α1-GABA_A** → hypnotic for insomnia with fewer side effects/dependence; still reversed by **flumazenil**; no anticonvulsant/muscle-relaxant effect.',
  ],

  mechanism: {
    title: 'Enhance GABA inhibition → sedation',
    steps: [
      { id: 's1', label: 'GABA binds GABA_A → Cl⁻ influx → hyperpolarization' },
      { id: 's2', label: 'Benzodiazepine ↑ opening FREQUENCY (needs GABA)', emphasis: 'key' },
      { id: 's3', label: 'CNS inhibition → anxiolysis/sleep/anticonvulsant' },
      { id: 's4', label: 'Flumazenil reverses benzodiazepines & Z-drugs' },
    ],
  },

  examFindings: [
    { sign: 'Sedation + anterograde amnesia after a benzodiazepine', mechanism: 'GABA_A potentiation', significance: 'key' },
    { sign: 'Reversal of benzodiazepine sedation by flumazenil', mechanism: 'Competitive GABA_A benzodiazepine-site antagonist', significance: 'key' },
    { sign: 'Excess drowsiness in the elderly on diazepam', mechanism: 'Active metabolites accumulate', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Active vs no-active metabolites (LEO)', meaning: 'Choice in elderly/hepatic impairment' },
    { clue: 'Frequency (benzo) vs duration (barbiturate) of Cl⁻ opening', meaning: 'Mechanism distinction' },
    { clue: 'Response to flumazenil', meaning: 'Benzodiazepine/Z-drug effect' },
  ],

  treatment: [
    { logic: 'Benzodiazepines for acute anxiety, status epilepticus, alcohol withdrawal', detail: 'Short-term; risk of dependence.' },
    { logic: 'Z-drugs for short-term insomnia', detail: 'α1-selective, fewer effects.' },
    { logic: 'Flumazenil for benzodiazepine overdose (with caution)', detail: 'Can precipitate seizures in dependent patients.' },
  ],

  mnemonics: [
    { hook: 'Benzos ↑ Frequency; Barbiturates ↑ Duration of Cl⁻ opening', expansion: ['Both need/act on GABA_A'] },
    { hook: 'LEO (Lorazepam, Estazolam, Oxazepam) = no active metabolites → safe in elderly/liver disease', expansion: ['Phase-2 conjugation only'] },
  ],

  traps: [
    {
      questionCategory: 'Benzodiazepine choice in liver disease/elderly',
      wrongInstinct: 'Any benzodiazepine is equally safe in an elderly patient with hepatic impairment',
      rightAnswer: 'Prefer lorazepam, oxazepam, or estazolam (LEO) — they undergo only glucuronidation with no active metabolites, so they don’t accumulate',
      why: 'Benzodiazepines metabolized by CYP oxidation to long-acting active metabolites accumulate in the elderly and in liver disease, causing excessive sedation; LEO agents avoid this.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Benzodiazepines and barbiturates both act at the GABA_A receptor. The key mechanistic difference is that benzodiazepines increase the ____ of chloride channel opening, whereas barbiturates increase the ____.',
      options: [
        { id: 'a', text: 'duration; frequency' },
        { id: 'b', text: 'frequency; duration' },
        { id: 'c', text: 'amplitude; frequency' },
        { id: 'd', text: 'frequency; amplitude' },
      ],
      answerId: 'b',
      explanation: 'Benzodiazepines increase the frequency of GABA-mediated Cl⁻ channel opening, while barbiturates increase the duration of opening (and at high doses can open the channel directly).',
      tests: 'exam',
    },
  ],
};

export default sedativeHypnoticsBenzodiazepines;
