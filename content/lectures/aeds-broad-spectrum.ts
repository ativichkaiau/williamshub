import type { Lecture } from '../../lib/types';

export const aedsBroadSpectrum: Lecture = {
  id: 'aeds-broad-spectrum',
  title: 'AEDs — Broad-Spectrum & Glutamate Agents',
  system: 'neuro',
  source: 'L8 — Antiepileptic Drugs',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L8 Antiepileptic Drugs' },
    { kind: 'disease', label: 'Generalized epilepsy' },
    { kind: 'mechanism', label: 'Multiple targets' },
    { kind: 'exam', label: 'Valproate' },
  ],

  highYield: [
    '**Valproate = broad-spectrum** (Na⁺ + Ca²⁺ block, ↑ GABA, ↓ NMDA): all seizure types incl. **absence, myoclonic, generalized**, plus **bipolar disorder & migraine prophylaxis**.',
    '**Valproate toxicity**: **hepatotoxicity (idiosyncratic), teratogenicity — neural tube defects (spina bifida), weight gain, alopecia, thrombocytopenia, tremor, pancreatitis** — avoid in pregnancy.',
    '**Topiramate**: Na⁺ block + ↑ GABA + ↓ glutamate + weak **carbonic anhydrase inhibition** → **urolithiasis, cognitive slowing (“dopa-max”), weight loss**; also migraine prophylaxis.',
    '**Levetiracetam / brivaracetam**: bind **synaptic vesicle protein SV2A**; minimal interactions, renally excreted; broad use (focal + generalized). Main issue = **mood/behavioral change, irritability**.',
    '**Glutamate modulators**: **perampanel** (AMPA antagonist — behavioral/psychiatric effects), **felbamate** (NMDA — reserved for refractory epilepsy due to **aplastic anemia & hepatic failure**).',
  ],

  mechanism: {
    title: 'Hit several targets at once → cover many seizure types',
    steps: [
      { id: 's1', label: 'Valproate: Na⁺/Ca²⁺ block + ↑GABA + ↓NMDA', emphasis: 'key' },
      { id: 's2', label: 'Broad efficacy: absence, myoclonic, generalized, focal' },
      { id: 's3', label: 'Levetiracetam: SV2A, clean interaction profile' },
      { id: 's4', label: 'Watch valproate hepatotoxicity & teratogenicity', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Weight gain, alopecia, tremor, high ammonia on an AED', mechanism: 'Valproate', significance: 'key' },
    { sign: 'Kidney stones + word-finding difficulty + weight loss', mechanism: 'Topiramate (carbonic anhydrase inhibition)', significance: 'key' },
    { sign: 'Irritability/mood change on a well-tolerated AED', mechanism: 'Levetiracetam behavioral effect', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'LFTs, ammonia, platelets on valproate', meaning: 'Hepatotoxicity, hyperammonemia, thrombocytopenia' },
    { clue: 'Pregnancy status before valproate', meaning: 'Neural tube defect risk' },
    { clue: 'CBC on felbamate', meaning: 'Aplastic anemia surveillance' },
  ],

  treatment: [
    { logic: 'Levetiracetam for clean interactions / IV loading', detail: 'Renally excreted; not CYP-metabolized.' },
    { logic: 'Avoid valproate in women of childbearing potential', detail: 'Prefer lamotrigine/levetiracetam if seizure type allows.' },
    { logic: 'Enzyme-inducing AEDs reduce OCP efficacy', detail: 'Phenytoin, carbamazepine, phenobarbital, oxcarbazepine, topiramate.' },
  ],

  mnemonics: [
    { hook: 'Valproate = broad but VALuable-toxic: hepato, teratogen (NTD), weight, hair, platelets', expansion: ['Also bipolar & migraine'] },
    { hook: 'Topiramate = “dopa-max”: stones, cognitive slowing, weight loss', expansion: ['Weak carbonic anhydrase inhibitor'] },
  ],

  traps: [
    {
      questionCategory: 'AED choice in a woman of childbearing age',
      wrongInstinct: 'Valproate is broad-spectrum, so it is the safe default for any young woman with generalized epilepsy',
      rightAnswer: 'Avoid valproate in women who may become pregnant — it is highly teratogenic (neural tube defects); prefer lamotrigine or levetiracetam',
      why: 'Valproate’s broad efficacy is offset by strong teratogenicity and hepatotoxicity, so safer alternatives are chosen when pregnancy is possible.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which antiepileptic drug is broad-spectrum (effective across absence, myoclonic, and generalized tonic-clonic seizures) but is strongly teratogenic and hepatotoxic?',
      options: [
        { id: 'a', text: 'Ethosuximide' },
        { id: 'b', text: 'Valproate' },
        { id: 'c', text: 'Gabapentin' },
        { id: 'd', text: 'Lacosamide' },
      ],
      answerId: 'b',
      explanation: 'Valproate acts at multiple targets and covers all major seizure types (plus bipolar disorder and migraine), but carries hepatotoxicity and teratogenicity (neural tube defects), so it is avoided in pregnancy.',
      tests: 'exam',
    },
  ],
};

export default aedsBroadSpectrum;
