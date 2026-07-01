import type { Lecture } from '../../lib/types';

export const dopamineAgonistsAntimuscarinics: Lecture = {
  id: 'dopamine-agonists-antimuscarinics',
  title: 'Dopamine Agonists, Amantadine & Antimuscarinics',
  system: 'neuro',
  source: 'L9 — Antiparkinson Agents',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L9 Antiparkinson Agents' },
    { kind: 'disease', label: "Parkinson's disease" },
    { kind: 'mechanism', label: 'Direct D-agonism / anti-ACh' },
    { kind: 'exam', label: 'Drug-induced parkinsonism' },
  ],

  highYield: [
    '**Non-ergot dopamine agonists** (pramipexole, ropinirole, rotigotine patch) act **directly at D2 receptors**, have a **longer half-life than levodopa**, and are used as **monotherapy in mild PD** or add-on in advanced disease. Distinctive risks: **“sleep attacks” and impulse-control disorders** (gambling, hypersexuality).',
    '**Apomorphine** = potent non-ergot agonist given **subcutaneously to rescue “off” periods** (avoid with ondansetron → severe hypotension).',
    '**Ergot agonists** (bromocriptine, pergolide) are largely abandoned — **valvular heart disease and fibrosis** (pleural/retroperitoneal).',
    '**Amantadine** (antiviral) mildly boosts dopamine + has anticholinergic/NMDA action → best for **levodopa-induced dyskinesia**; side effect **livedo reticularis**.',
    '**Central antimuscarinics** (trihexyphenidyl, benztropine) help **tremor** and are the **drug of choice for DRUG-INDUCED parkinsonism** (antipsychotics, metoclopramide); poorly tolerated in the elderly; contraindicated in **BPH and glaucoma**. **Deep brain stimulation** (STN/GPi) for advanced disease.',
  ],

  mechanism: {
    title: 'Stimulate dopamine receptors OR rebalance ACh',
    steps: [
      { id: 's1', label: 'Agonists directly stimulate D2 (bypass dying neurons)', emphasis: 'key' },
      { id: 's2', label: 'Amantadine ↑ dopamine + anti-NMDA → less dyskinesia' },
      { id: 's3', label: 'Antimuscarinics ↓ relative ACh overactivity (tremor)' },
      { id: 's4', label: 'Antimuscarinic = first choice in drug-induced parkinsonism' },
    ],
  },

  examFindings: [
    { sign: 'Sudden sleep attacks / new gambling on therapy', mechanism: 'Dopamine-agonist effect', significance: 'key' },
    { sign: 'Parkinsonism after starting an antipsychotic/metoclopramide', mechanism: 'Drug-induced (D2 blockade) — treat with antimuscarinic', significance: 'key' },
    { sign: 'Livedo reticularis', mechanism: 'Amantadine', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Medication review (antipsychotics, antiemetics)', meaning: 'Identifies drug-induced parkinsonism' },
    { clue: 'Impulse-control screening on agonists', meaning: 'Detect behavioral side effects' },
    { clue: 'Age & comorbidities (BPH, glaucoma, cognition)', meaning: 'Guides antimuscarinic use' },
  ],

  treatment: [
    { logic: 'Dopamine agonist monotherapy in younger/mild PD', detail: 'Delays levodopa/motor complications.' },
    { logic: 'Antimuscarinic for tremor & drug-induced parkinsonism', detail: 'Avoid in elderly, BPH, glaucoma.' },
    { logic: 'Amantadine for levodopa-induced dyskinesia; DBS for advanced disease', detail: 'Adjuncts to levodopa.' },
  ],

  mnemonics: [
    { hook: 'Agonists: sleep attacks + impulse control (gambling)', expansion: ['Pramipexole, ropinirole, rotigotine'] },
    { hook: 'Drug-induced parkinsonism → antimuscarinic (not levodopa)', expansion: ['Cause is D2 blockade'] },
  ],

  traps: [
    {
      questionCategory: 'Treating drug-induced parkinsonism',
      wrongInstinct: 'Add levodopa to treat parkinsonism caused by an antipsychotic',
      rightAnswer: 'Drug-induced parkinsonism is from D2 blockade — treat by stopping/reducing the offending drug and using a central antimuscarinic (e.g. benztropine), not levodopa',
      why: 'Because the receptors are blocked, adding levodopa is ineffective; antimuscarinics rebalance the ACh–dopamine ratio and relieve the parkinsonism.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient on haloperidol develops rigidity and bradykinesia. The most appropriate management is to reduce/stop the antipsychotic and add:',
      options: [
        { id: 'a', text: 'Levodopa/carbidopa' },
        { id: 'b', text: 'A central antimuscarinic (e.g. benztropine)' },
        { id: 'c', text: 'A COMT inhibitor' },
        { id: 'd', text: 'Apomorphine infusion' },
      ],
      answerId: 'b',
      explanation: 'Drug-induced parkinsonism results from dopamine (D2) receptor blockade; a central antimuscarinic such as benztropine is the treatment of choice, alongside reducing the causative drug. Levodopa is ineffective when receptors are blocked.',
      tests: 'treatment',
    },
  ],
};

export default dopamineAgonistsAntimuscarinics;
