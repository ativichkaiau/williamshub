import type { Lecture } from '../../lib/types';

export const opioidReceptorsMechanism: Lecture = {
  id: 'opioid-receptors-mechanism',
  title: 'Opioid Receptors & Mechanism',
  system: 'neuro',
  source: 'L15 — Opioid Analgesics',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L15 Opioid Analgesics' },
    { kind: 'disease', label: 'Analgesia' },
    { kind: 'mechanism', label: 'μ/δ/κ GPCRs' },
    { kind: 'exam', label: 'Mu receptor' },
  ],

  highYield: [
    'Opioid receptors — **μ (MOP), δ (DOP), κ (KOP), NOP** — are all **Gi/o-protein-coupled**: they **close presynaptic Ca²⁺ channels** (↓ neurotransmitter release, e.g. substance P/glutamate) and **open postsynaptic K⁺ channels** (hyperpolarization) → less pain signaling.',
    'The **μ receptor mediates most analgesia** — and also **euphoria, respiratory depression, physical dependence, miosis, and constipation**. κ gives analgesia but also **dysphoria/hallucination** (“feel Krappy”).',
    'Opioids act along the **pain pathway**: inhibit the **ascending** nociceptive transmission and **activate the descending** modulatory pathway (periaqueductal gray, locus coeruleus).',
    '**Morphine is the prototype/standard** against which all opioids are compared. Classes: **natural** (morphine, codeine), **semisynthetic/synthetic** (fentanyl, methadone), **endogenous peptides** (endorphins, enkephalins, dynorphins).',
    '**Buprenorphine = μ partial agonist** (ceiling effect, less respiratory depression, used for dependence); **methadone = long-acting μ agonist**. Giving a **partial agonist to a patient on a full agonist can precipitate withdrawal**.',
  ],

  mechanism: {
    title: 'Gi-coupled receptors → hyperpolarize → block pain transmission',
    steps: [
      { id: 's1', label: 'Opioid binds μ/δ/κ (Gi/o GPCR)', emphasis: 'key' },
      { id: 's2', label: 'Close Ca²⁺ (↓ NT release) + open K⁺ (hyperpolarize)' },
      { id: 's3', label: 'Inhibit ascending + activate descending pain pathways' },
      { id: 's4', label: 'μ effects: analgesia, but also respiratory depression', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Analgesia with euphoria, miosis, constipation', mechanism: 'μ-receptor activation', significance: 'key' },
    { sign: 'Dysphoria/hallucination with a κ-agonist', mechanism: 'κ-receptor activation', significance: 'supportive' },
    { sign: 'Withdrawal precipitated by adding buprenorphine to a full agonist', mechanism: 'Partial agonist displaces full agonist', significance: 'key' },
  ],

  investigations: [
    { clue: 'Which receptor a drug targets & efficacy (full/partial)', meaning: 'Predicts analgesia and side effects' },
    { clue: 'Pain pathway site (ascending vs descending)', meaning: 'Mechanism of analgesia' },
    { clue: 'Full agonist vs partial vs antagonist', meaning: 'Guides combination/withdrawal risk' },
  ],

  treatment: [
    { logic: 'μ agonists for moderate–severe pain', detail: 'Morphine, fentanyl.' },
    { logic: 'Buprenorphine/methadone for opioid-use disorder', detail: 'Partial/long-acting μ agonists.' },
    { logic: 'Avoid mixing partial + full agonists', detail: 'Precipitates withdrawal / reduces analgesia.' },
  ],

  mnemonics: [
    { hook: 'μ = analgesia + euphoria + respiratory depression + miosis', expansion: ['κ = analgesia + dysphoria ("Krappy")'] },
    { hook: 'All opioid receptors = Gi (↓cAMP, ↓Ca²⁺, ↑K⁺ → hyperpolarize)', expansion: ['Inhibit neurotransmission'] },
  ],

  traps: [
    {
      questionCategory: 'Adding a partial agonist to a full agonist',
      wrongInstinct: 'Adding buprenorphine to a patient already on a full μ agonist will boost analgesia',
      rightAnswer: 'A partial agonist (buprenorphine) can displace the full agonist and precipitate acute withdrawal / reduce analgesia',
      why: 'Because the partial agonist has high affinity but lower efficacy, it competes off the full agonist and drops net receptor activation — triggering withdrawal in a dependent patient.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which opioid receptor is responsible for most of the analgesic effect as well as respiratory depression and physical dependence?',
      options: [
        { id: 'a', text: 'δ (delta)' },
        { id: 'b', text: 'μ (mu)' },
        { id: 'c', text: 'κ (kappa)' },
        { id: 'd', text: 'NOP' },
      ],
      answerId: 'b',
      explanation: 'The μ (mu) receptor mediates most analgesia along with euphoria, respiratory depression, miosis, constipation, and physical dependence.',
      tests: 'exam',
    },
  ],
};

export default opioidReceptorsMechanism;
