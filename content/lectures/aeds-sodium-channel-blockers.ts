import type { Lecture } from '../../lib/types';

export const aedsSodiumChannelBlockers: Lecture = {
  id: 'aeds-sodium-channel-blockers',
  title: 'AEDs — Sodium Channel Blockers',
  system: 'neuro',
  source: 'L8 — Antiepileptic Drugs',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L8 Antiepileptic Drugs' },
    { kind: 'disease', label: 'Focal / tonic-clonic' },
    { kind: 'mechanism', label: 'Na⁺ channel inactivation' },
    { kind: 'exam', label: 'Phenytoin / carbamazepine' },
  ],

  highYield: [
    'These enhance **Na⁺-channel inactivation** → block high-frequency firing. Use for **focal and tonic-clonic** seizures; several **worsen absence**.',
    '**Phenytoin (fosphenytoin)**: **zero-order (nonlinear) kinetics** at high dose, ~90% albumin-bound. Toxicities: **gingival hyperplasia, hirsutism, megaloblastic anemia (folate), purple glove syndrome, arrhythmia with rapid IV, enzyme inducer**; worsens absence.',
    '**Carbamazepine / oxcarbazepine**: also for **trigeminal neuralgia & bipolar disorder**. Toxicities: **hyponatremia (SIADH), aplastic anemia/agranulocytosis, diplopia/ataxia**, and **SJS/TEN linked to HLA-B*1502** (screen Asians); enzyme inducer; worsens absence.',
    '**Lamotrigine**: blocks Na⁺ + ↓ glutamate release; broad use incl. **bipolar disorder**; key risk = **serious rash / SJS** (titrate slowly).',
    '**Lacosamide**: enhances **slow** Na⁺-channel inactivation; add-on/monotherapy for focal seizures; well tolerated.',
  ],

  mechanism: {
    title: 'Stabilize inactivated Na⁺ channels → suppress rapid firing',
    steps: [
      { id: 's1', label: 'Na⁺ channel held in inactivated state', emphasis: 'key' },
      { id: 's2', label: 'Fewer sustained high-frequency discharges' },
      { id: 's3', label: 'Controls focal & tonic-clonic seizures' },
      { id: 's4', label: 'Enzyme induction / rash / marrow toxicity', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Gingival hyperplasia + hirsutism', mechanism: 'Chronic phenytoin', significance: 'key' },
    { sign: 'Hyponatremia + rash in an Asian patient on carbamazepine', mechanism: 'SIADH; HLA-B*1502 SJS risk', significance: 'key' },
    { sign: 'Nystagmus, diplopia, ataxia', mechanism: 'Na⁺-blocker toxicity (dose-related)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'HLA-B*1502 screening before carbamazepine (Asians)', meaning: 'Reduces SJS/TEN risk' },
    { clue: 'Phenytoin level (watch nonlinear kinetics; correct for albumin)', meaning: 'Small dose change → big level change' },
    { clue: 'CBC / sodium on carbamazepine', meaning: 'Marrow suppression; hyponatremia' },
  ],

  treatment: [
    { logic: 'Load fosphenytoin/phenytoin after benzodiazepines in status', detail: 'Rapid IV phenytoin risks arrhythmia/purple glove.' },
    { logic: 'Titrate lamotrigine slowly', detail: 'Minimizes serious rash.' },
  ],

  mnemonics: [
    { hook: 'Phenytoin: Gums, Hair, Folate, Purple glove, Zero-order', expansion: ['Gingival hyperplasia, hirsutism, megaloblastic anemia'] },
    { hook: 'Carbamazepine: HLA-B*1502 SJS + hyponatremia + aplastic anemia', expansion: ['Also trigeminal neuralgia & bipolar'] },
  ],

  traps: [
    {
      questionCategory: 'Phenytoin dosing kinetics',
      wrongInstinct: 'Doubling the phenytoin dose will roughly double the serum level',
      rightAnswer: 'Phenytoin shows zero-order (saturable) kinetics at therapeutic doses — small dose increases can cause disproportionately large level rises and toxicity',
      why: 'Once the metabolizing enzymes saturate, phenytoin clearance becomes constant, so level rises nonlinearly — a classic cause of unexpected toxicity.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Before starting carbamazepine in a Thai patient, which test best reduces the risk of a life-threatening cutaneous reaction?',
      options: [
        { id: 'a', text: 'G6PD level' },
        { id: 'b', text: 'HLA-B*1502 genotyping' },
        { id: 'c', text: 'Serum phenytoin level' },
        { id: 'd', text: 'Thyroid function tests' },
      ],
      answerId: 'b',
      explanation: 'HLA-B*1502 (common in Southeast Asians) strongly predicts carbamazepine-induced Stevens-Johnson syndrome/TEN, so screening is recommended before starting the drug.',
      tests: 'investigation',
    },
  ],
};

export default aedsSodiumChannelBlockers;
