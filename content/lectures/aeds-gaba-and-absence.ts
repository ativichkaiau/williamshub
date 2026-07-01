import type { Lecture } from '../../lib/types';

export const aedsGabaAndAbsence: Lecture = {
  id: 'aeds-gaba-and-absence',
  title: 'AEDs — GABA Enhancers & Absence Drugs',
  system: 'neuro',
  source: 'L8 — Antiepileptic Drugs',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L8 Antiepileptic Drugs' },
    { kind: 'disease', label: 'Absence / status' },
    { kind: 'mechanism', label: 'GABA & Ca²⁺ channels' },
    { kind: 'exam', label: 'Ethosuximide' },
  ],

  highYield: [
    '**Ethosuximide** blocks **T-type Ca²⁺ channels** in thalamic neurons → the drug for **absence seizures only** (no hepatic/renal toxicity; classic GI upset).',
    '**Phenobarbital** (barbiturate) enhances **GABA_A** → all seizure types **except absence**; key effect = **sedation**.',
    '**Benzodiazepines** (lorazepam, diazepam, midazolam) enhance GABA_A → **first-line for status epilepticus**; tolerance limits chronic use. **Clobazam** for Lennox-Gastaut; **clonazepam** for myoclonic/absence. Abrupt withdrawal can precipitate status.',
    '**Vigabatrin** (irreversible **GABA-transaminase** inhibitor): infantile spasms/focal — but **peripheral visual field constriction (30–50%)** and psychosis. **Tiagabine** (GAT-1 uptake inhibitor): adjunct focal; contraindicated in absence.',
    '**Gabapentin & pregabalin**: GABA analogs that actually act at the **α2δ subunit of voltage-gated Ca²⁺ channels** (no GABA-receptor action); renally excreted, minimal interactions; big role in **neuropathic pain**. Can worsen absence.',
  ],

  mechanism: {
    title: 'Boost inhibition or block thalamic Ca²⁺ → stop the seizure',
    steps: [
      { id: 's1', label: 'Ethosuximide: block thalamic T-type Ca²⁺ → absence', emphasis: 'key' },
      { id: 's2', label: 'Phenobarbital/benzodiazepines: ↑ GABA_A Cl⁻ influx' },
      { id: 's3', label: 'Vigabatrin/tiagabine: raise synaptic GABA' },
      { id: 's4', label: 'Gabapentin/pregabalin: α2δ Ca²⁺ block (neuropathic pain)' },
    ],
  },

  examFindings: [
    { sign: 'Absence controlled by ethosuximide', mechanism: 'T-type Ca²⁺ channel block', significance: 'key' },
    { sign: 'Peripheral visual field constriction on an AED', mechanism: 'Vigabatrin', significance: 'key' },
    { sign: 'Sedation with phenobarbital / benzodiazepines', mechanism: 'GABA_A enhancement', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Visual field testing on vigabatrin', meaning: 'Monitor for irreversible constriction' },
    { clue: 'Renal function for gabapentin/pregabalin dosing', meaning: 'Renally cleared' },
    { clue: 'Seizure type before choosing', meaning: 'Ethosuximide only helps absence' },
  ],

  treatment: [
    { logic: 'Benzodiazepine first for status epilepticus', detail: 'Then a longer-acting AED.' },
    { logic: 'Gabapentin/pregabalin for neuropathic pain', detail: 'Diabetic neuropathy, post-herpetic neuralgia.' },
  ],

  mnemonics: [
    { hook: 'Ethosuximide = absence, T-type Ca²⁺', expansion: ['“Sux to have absence” → ethoSUXimide'] },
    { hook: 'Vigabatrin = Visual field loss (GABA-transaminase inhibitor)', expansion: ['Also psychosis'] },
  ],

  traps: [
    {
      questionCategory: 'Gabapentin mechanism',
      wrongInstinct: 'Gabapentin, being a GABA analog, works by activating GABA receptors',
      rightAnswer: 'Gabapentin/pregabalin act on the α2δ subunit of voltage-gated calcium channels, NOT on GABA receptors',
      why: 'Despite the name and structure, they do not bind GABA receptors — their anticonvulsant and analgesic effects come from reducing Ca²⁺-dependent neurotransmitter release via α2δ.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A child with pure absence epilepsy is best treated first-line with a drug that blocks thalamic T-type calcium channels, namely:',
      options: [
        { id: 'a', text: 'Carbamazepine' },
        { id: 'b', text: 'Ethosuximide' },
        { id: 'c', text: 'Phenytoin' },
        { id: 'd', text: 'Vigabatrin' },
      ],
      answerId: 'b',
      explanation: 'Ethosuximide blocks T-type calcium channels in thalamic neurons and is the classic drug for absence seizures; carbamazepine, phenytoin, and vigabatrin can worsen absence.',
      tests: 'treatment',
    },
  ],
};

export default aedsGabaAndAbsence;
