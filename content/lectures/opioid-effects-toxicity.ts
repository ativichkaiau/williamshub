import type { Lecture } from '../../lib/types';

export const opioidEffectsToxicity: Lecture = {
  id: 'opioid-effects-toxicity',
  title: 'Opioid Effects, Toxicity & Uses',
  system: 'neuro',
  source: 'L15 — Opioid Analgesics',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L15 Opioid Analgesics' },
    { kind: 'disease', label: 'Opioid toxicity' },
    { kind: 'mechanism', label: 'CNS & peripheral effects' },
    { kind: 'exam', label: 'Overdose triad / naloxone' },
  ],

  highYield: [
    'CNS effects: analgesia, euphoria, sedation, **cough suppression**, nausea/vomiting, and **miosis** (a key diagnostic clue). **Respiratory depression is the most dangerous effect.**',
    '**Opioid overdose triad = respiratory depression + pinpoint miosis + coma**; antidote = **naloxone** (a competitive antagonist).',
    'Peripheral effects: **constipation** (tolerance does NOT develop), biliary spasm (sphincter of Oddi), urinary retention, **bradycardia (except meperidine → tachycardia)**, histamine release (pruritus), **↑ICP (contraindicated in head injury)**.',
    'PK pearls: **codeine is a prodrug activated by CYP2D6 to morphine** (genetic variation → variable response); avoid morphine in neonates (immature conjugation + BBB). GI-selective opioids (**loperamide, diphenoxylate**) treat diarrhea; **dextromethorphan** is a non-opioid antitussive.',
    '**Tolerance** develops to most effects (via MOR desensitization) but **NOT to miosis or constipation**. **Dependence** → withdrawal (mydriasis, piloerection, diarrhea, yawning); manage with **methadone, buprenorphine, or clonidine**.',
  ],

  mechanism: {
    title: 'Broad μ effects → analgesia but dangerous depression',
    steps: [
      { id: 's1', label: 'μ activation across CNS & periphery' },
      { id: 's2', label: 'Analgesia + euphoria + miosis + constipation', emphasis: 'key' },
      { id: 's3', label: 'Respiratory depression → overdose triad', emphasis: 'danger' },
      { id: 's4', label: 'Naloxone reverses; tolerance/dependence with chronic use' },
    ],
  },

  examFindings: [
    { sign: 'Pinpoint pupils + slow shallow breathing + coma', mechanism: 'Opioid overdose triad', significance: 'key' },
    { sign: 'Constipation persisting despite chronic use', mechanism: 'No tolerance to GI effect', significance: 'key' },
    { sign: 'Mydriasis, piloerection, diarrhea, yawning', mechanism: 'Opioid withdrawal', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Pupil size + respiratory rate', meaning: 'Opioid toxicity vs withdrawal' },
    { clue: 'CYP2D6 status (codeine → morphine)', meaning: 'Variable analgesia/toxicity' },
    { clue: 'Renal function', meaning: 'Active metabolites accumulate (morphine)' },
  ],

  treatment: [
    { logic: 'Overdose: airway support + naloxone', detail: 'Short half-life — may need repeat dosing.' },
    { logic: 'Constipation prophylaxis with chronic opioids', detail: 'Laxatives (tolerance never develops).' },
    { logic: 'Withdrawal: methadone/buprenorphine/clonidine', detail: 'Manage dependence.' },
  ],

  mnemonics: [
    { hook: 'Overdose triad: respiratory depression + miosis + coma → naloxone', expansion: ['Naloxone half-life is short — redose'] },
    { hook: 'No tolerance to Miosis or Constipation ("MC")', expansion: ['Tolerance develops to most other effects'] },
  ],

  traps: [
    {
      questionCategory: 'Tolerance to opioid side effects',
      wrongInstinct: 'With chronic use, patients become tolerant to all opioid effects including constipation',
      rightAnswer: 'Tolerance develops to analgesia, euphoria, and respiratory depression, but NOT to miosis or constipation',
      why: 'Constipation persists throughout therapy (so a bowel regimen is always needed), and miosis remains — which is why these are reliable clinical markers of opioid effect even in chronic users.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An unresponsive patient has pinpoint pupils and a respiratory rate of 4/min. The immediate antidote is:',
      options: [
        { id: 'a', text: 'Flumazenil' },
        { id: 'b', text: 'Naloxone' },
        { id: 'c', text: 'Atropine' },
        { id: 'd', text: 'Physostigmine' },
      ],
      answerId: 'b',
      explanation: 'The opioid overdose triad (respiratory depression, pinpoint miosis, coma) is reversed with naloxone, a competitive opioid antagonist; because naloxone is short-acting, repeat dosing may be required.',
      tests: 'treatment',
    },
  ],
};

export default opioidEffectsToxicity;
