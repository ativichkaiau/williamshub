import type { Lecture } from '../../lib/types';

export const fcp1PediatricSeizures: Lecture = {
  id: 'fcp1-pediatric-seizures',
  title: 'Paediatric Seizures & Febrile Seizures',
  system: 'clinical',
  source: 'L26 — Seizures & Abnormal Movements',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L26 Seizures' },
    { kind: 'disease', label: 'Febrile seizure · West syndrome' },
    { kind: 'mechanism', label: 'Immature cortex + fever' },
    { kind: 'investigation', label: 'When to LP / EEG' },
  ],

  highYield: [
    'A **febrile seizure** is a seizure with **fever (≥38°C)** in a child **6 months–5 years** with **no CNS infection**, no metabolic cause and **no prior afebrile seizure**. It reflects a susceptible **immature brain**, not epilepsy. Always apply the general seizure framework of [[fcp1-seizure-classification]] and exclude the mimics in [[fcp1-seizure-vs-mimics]].',
    '**Simple** febrile seizure = **generalised, <15 min, once in 24 h**, with full recovery — **benign**: no routine LP, EEG or imaging; **reassure** the family. **Complex** febrile seizure = **focal, ≥15 min, OR recurring within 24 h** — warrants closer evaluation.',
    '**Exclude meningitis / encephalitis** in any febrile child who seizes and looks unwell: **meningism, a toxic or drowsy child, not returning to baseline, a bulging fontanelle, petechiae, or age <12 months** lower the threshold for a **lumbar puncture**. Antibiotic pre-treatment can mask meningism — stay suspicious. Fever from an underlying infection ties into [[fcp1-fever-approach-differential]].',
    '**Age-specific epilepsies** matter: **infantile spasms (West syndrome)** — clusters of flexor/extensor spasms at 3–8 months with **developmental regression** and **hypsarrhythmia** on EEG — is a **red flag** needing urgent referral; also neonatal seizures (often subtle), childhood **absence** epilepsy, benign rolandic epilepsy, and **juvenile myoclonic** epilepsy (early-morning jerks).',
    '**Acute management:** ABC, recovery position, protect from injury, **check glucose**, and give a **benzodiazepine if the seizure lasts >5 min** (status epilepticus). Treat the source of fever, but **antipyretics do NOT prevent recurrence** — do not over-promise this to parents.',
  ],

  mechanism: {
    title: 'Fever + a developing brain → seizure, then triage',
    steps: [
      { id: 's1', label: 'Rapid fever in a genetically susceptible immature cortex lowers seizure threshold', emphasis: 'key' },
      { id: 's2', label: 'Simple (generalised, brief, once) vs complex (focal, long, or repeated)', emphasis: 'key' },
      { id: 's3', label: 'Simple febrile seizure → reassure, no routine LP / EEG / imaging', emphasis: 'normal' },
      { id: 's4', label: 'Toxic child, meningism, or age <12 mo → exclude CNS infection (LP)', emphasis: 'danger' },
      { id: 's5', label: 'Seizure >5 min = status → benzodiazepine, glucose, ABC', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Fever with a brief generalised convulsion, child back to baseline', mechanism: 'Simple febrile seizure — reassuring pattern', significance: 'key' },
    { sign: 'Focal features, duration ≥15 min, or a second fit in 24 h', mechanism: 'Complex febrile seizure — needs fuller evaluation', significance: 'key' },
    { sign: 'Neck stiffness, bulging fontanelle, or a non-blanching (petechial) rash', mechanism: 'Points to meningitis / meningococcaemia, not a simple febrile seizure', significance: 'key' },
    { sign: 'Clusters of head-nodding / flexor spasms with loss of milestones', mechanism: 'Infantile spasms (West syndrome) — urgent referral', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Capillary glucose in any seizing child', meaning: 'Hypoglycaemia is a fast, reversible provoked cause' },
    { clue: 'Lumbar puncture when meningitis is possible (unwell, <12 mo, complex, not recovering)', meaning: 'Detects CNS infection; do not rely on absence of neck stiffness in infants' },
    { clue: 'EEG (hypsarrhythmia)', meaning: 'Confirms infantile spasms; also used for suspected epilepsy syndromes, not for simple febrile seizures' },
    { clue: 'Focused sepsis screen for the fever source', meaning: 'Identifies the driving infection (urine, chest, ears) once CNS infection is excluded' },
  ],

  treatment: [
    { logic: 'Terminate a prolonged seizure and support the airway', detail: 'ABC, oxygen, recovery position, check glucose; benzodiazepine (buccal midazolam or rectal diazepam) if it lasts beyond 5 minutes.' },
    { logic: 'Reassure and safety-net after a simple febrile seizure', detail: 'Explain the benign nature and the roughly 1 in 3 recurrence risk, teach first-aid and when to return; antipyretics treat discomfort but do not prevent recurrence.' },
    { logic: 'Refer urgently for red-flag patterns', detail: 'Infantile spasms, focal deficit, or suspected CNS infection go to paediatric neurology / acute care.' },
  ],

  mnemonics: [
    { hook: 'Simple = Short, Single, Sudden-general (and Six months to five years)', expansion: ['Generalised and <15 min', 'Once in 24 h', 'Complex breaks any of these rules'] },
  ],

  traps: [
    {
      questionCategory: 'Preventing recurrence',
      wrongInstinct: 'Aggressive antipyretics will stop the child having another febrile seizure',
      rightAnswer: 'Antipyretics improve comfort but do NOT prevent febrile seizure recurrence — counsel parents honestly and focus on first-aid and safety-netting',
      why: 'Trials show scheduled antipyretics do not reduce recurrence; over-promising causes guilt and unnecessary medication.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An 18-month-old, previously well and fully immunised, has a single 2-minute generalised convulsion during a viral fever, then returns to normal behaviour and is playing and alert on review. The most appropriate management is:',
      options: [
        { id: 'a', text: 'Lumbar puncture and CT brain' },
        { id: 'b', text: 'Reassurance, treat the fever source, and safety-netting' },
        { id: 'c', text: 'Start long-term anti-seizure medication' },
        { id: 'd', text: 'Urgent EEG before discharge' },
      ],
      answerId: 'b',
      explanation: 'This is a simple febrile seizure in a well, fully immunised child who has returned to baseline. It needs reassurance, treatment of the underlying fever and first-aid advice; routine LP, imaging, EEG and prophylactic drugs are not indicated.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'A 5-month-old presents with several weeks of clusters of sudden flexion of the head, trunk and limbs, and has stopped smiling and reaching as before. The investigation most likely to confirm the diagnosis is:',
      options: [
        { id: 'a', text: 'Lumbar puncture for meningitis' },
        { id: 'b', text: 'Serum electrolytes and calcium' },
        { id: 'c', text: 'EEG showing hypsarrhythmia' },
        { id: 'd', text: 'Blood culture' },
      ],
      answerId: 'c',
      explanation: 'Clusters of spasms with developmental regression suggest infantile spasms (West syndrome). The characteristic EEG finding is hypsarrhythmia, and the child needs urgent referral because early treatment protects development.',
      tests: 'investigation',
    },
  ],
};

export default fcp1PediatricSeizures;
