import type { Lecture } from '../../lib/types';
import { AED_TARGETS } from '../../lib/figures';

export const aedsPrinciplesTargets: Lecture = {
  id: 'aeds-principles-targets',
  title: 'Antiepileptic Drugs — Principles & Targets',
  system: 'neuro',
  source: 'L8 — Antiepileptic Drugs',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L8 Antiepileptic Drugs' },
    { kind: 'disease', label: 'Epilepsy' },
    { kind: 'mechanism', label: 'Reduce neuronal firing' },
    { kind: 'exam', label: 'Absence vs status' },
  ],

  highYield: [
    '**Seizure = a symptom; epilepsy = the chronic disease.** Hyperexcitability from **↑ Na⁺/Ca²⁺ influx, ↓ K⁺ efflux, ↓ Cl⁻ influx**.',
    'AEDs reduce firing by **(1) blocking voltage-gated ion channels, (2) suppressing excitatory (glutamate) transmission, (3) enhancing inhibitory (GABA) transmission**.',
    'Seizure types: **focal**; **generalized** — **absence (petit mal)** and **tonic-clonic (grand mal)**; **status epilepticus** (continuous — a medical emergency).',
    '**Status epilepticus first-line = benzodiazepine** (lorazepam/diazepam/midazolam), then load a long-acting agent (phenytoin/valproate/levetiracetam).',
    '**Absence seizures: use ethosuximide, valproate, lamotrigine, levetiracetam; AVOID (they worsen absence) carbamazepine, phenytoin, phenobarbital, vigabatrin, tiagabine, gabapentin, pregabalin.**',
  ],

  mechanism: {
    title: 'Dampen excitability at one of four synaptic targets',
    steps: [
      { id: 's1', label: 'Hyperexcitable neurons (↑Na/Ca, ↓K/Cl)' },
      { id: 's2', label: 'Block Na⁺ / Ca²⁺ channels → fewer action potentials', emphasis: 'key' },
      { id: 's3', label: '↓ Glutamate (AMPA/NMDA) OR ↑ GABA (Cl⁻)' },
      { id: 's4', label: 'Match drug to seizure type (esp. absence)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Brief staring spells with 3-Hz spike-wave', mechanism: 'Absence seizure (T-type Ca²⁺, thalamocortical)', significance: 'key' },
    { sign: 'Generalized convulsion >5 min or recurrent without recovery', mechanism: 'Status epilepticus', significance: 'key' },
    { sign: 'Focal motor/sensory onset', mechanism: 'Focal (partial) seizure', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'EEG (focal vs generalized; 3-Hz spike-wave in absence)', meaning: 'Classifies the epilepsy' },
    { clue: 'Identify provoked causes (glucose, electrolytes, drugs, mass)', meaning: 'No chronic AED for provoked seizures' },
    { clue: 'Seizure type', meaning: 'Selects the right drug class' },
  ],

  treatment: [
    { logic: 'Treat provoked seizures by fixing the cause', detail: 'Hypoglycemia, electrolytes, drugs (theophylline, cocaine), mass.' },
    { logic: 'Status epilepticus: benzodiazepine first', detail: 'Then long-acting AED load.' },
  ],

  mnemonics: [
    { hook: '4 AED targets: Na⁺, Ca²⁺, ↑GABA, ↓Glutamate', expansion: ['Some drugs hit several (broad-spectrum)'] },
    { hook: 'Status → benzo first', expansion: ['Lorazepam/diazepam/midazolam, then phenytoin/valproate/levetiracetam'] },
  ],

  traps: [
    {
      questionCategory: 'Drug choice in absence epilepsy',
      wrongInstinct: 'Carbamazepine is a good broad first choice for any seizure, including absence',
      rightAnswer: 'Carbamazepine (and phenytoin, gabapentin, etc.) WORSEN absence seizures — use ethosuximide or valproate',
      why: 'Sodium-channel/GABAergic agents like carbamazepine can aggravate absence seizures; ethosuximide (T-type Ca²⁺) and valproate are the appropriate choices.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient in status epilepticus is brought to the ED. The correct first-line pharmacologic treatment is:',
      options: [
        { id: 'a', text: 'IV carbamazepine' },
        { id: 'b', text: 'A benzodiazepine (e.g. IV lorazepam)' },
        { id: 'c', text: 'Oral ethosuximide' },
        { id: 'd', text: 'Gabapentin' },
      ],
      answerId: 'b',
      explanation: 'Status epilepticus is first treated with a benzodiazepine (lorazepam, diazepam, or midazolam) to abort the seizure, followed by a longer-acting agent (phenytoin, valproate, or levetiracetam).',
      tests: 'treatment',
    },
  ],

  figures: [
    { title: 'AED synaptic targets', svg: AED_TARGETS, caption: 'Four targets: block Na⁺/Ca²⁺ channels & SV2A, reduce glutamate (AMPA/NMDA), and enhance GABA_A (Cl⁻) inhibition.' },
  ],
};

export default aedsPrinciplesTargets;
