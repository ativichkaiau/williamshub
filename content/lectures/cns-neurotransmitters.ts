import type { Lecture } from '../../lib/types';

export const cnsNeurotransmitters: Lecture = {
  id: 'cns-neurotransmitters',
  title: 'Central Neurotransmitters & Drug Targets',
  system: 'neuro',
  source: 'L7 — CNS Pharmacology & Stimulants',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L7 CNS Pharmacology' },
    { kind: 'disease', label: 'NT systems' },
    { kind: 'mechanism', label: 'Transmitter → disease → drug' },
    { kind: 'exam', label: 'Dopamine pathways' },
  ],

  highYield: [
    '**Excitatory** = glutamate (+ aspartate); **inhibitory** = **GABA & glycine**; **modulatory** = ACh, dopamine, 5-HT, NE. Balance glutamate↑/GABA↓ → **seizure**; GABA↑ → sedation/anesthesia.',
    '**ACh**: made by ChAT, broken by **AChE**; nicotinic (ionotropic) vs muscarinic (GPCR). **Alzheimer** (cholinergic loss) → **AChE inhibitors**. **GABA**: **GABA_A** (ionotropic Cl⁻; benzodiazepines, barbiturates, Z-drugs, alcohol) vs **GABA_B** (GPCR; baclofen).',
    '**Glutamate**: **NMDA** (needs glutamate + glycine + depolarization/Mg²⁺ removal; antagonists ketamine, memantine), AMPA (perampanel); excess → **excitotoxicity** (Ca²⁺ → cell death).',
    '**Dopamine — 3 pathways**: **nigrostriatal** (movement; ↓ = Parkinson; D2 block → EPS); **mesolimbic/mesocortical** (reward/cognition; schizophrenia); **tuberoinfundibular** (inhibits prolactin; D2 block → **hyperprolactinemia**). D1-like = Gs, D2-like = Gi.',
    '**Monoamine disease→drug**: depression (↓NE/5-HT → SSRIs/SNRIs); psychosis (block D2 & 5-HT2A); migraine (5-HT1B/1D agonists = triptans); **histamine** (posterior hypothalamus; H1 block → **sedation/antiemetic**, H3 block → wakefulness).',
  ],

  mechanism: {
    title: 'Transmitter imbalance → disease → the drug that corrects it',
    steps: [
      { id: 's1', label: 'Identify the transmitter system' },
      { id: 's2', label: 'Excess or deficit drives the disease', emphasis: 'key' },
      { id: 's3', label: 'Drug restores balance (agonist/antagonist/enzyme/reuptake)' },
      { id: 's4', label: 'Off-target receptor block → side effects (EPS, prolactin)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Extrapyramidal symptoms on an antipsychotic', mechanism: 'Nigrostriatal D2 blockade', significance: 'key' },
    { sign: 'Galactorrhea/amenorrhea on a D2 antagonist', mechanism: 'Tuberoinfundibular D2 block → hyperprolactinemia', significance: 'key' },
    { sign: 'Sedation with a first-generation antihistamine', mechanism: 'Central H1 blockade', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Which receptor/transporter a drug targets', meaning: 'Predicts effect & side effects' },
    { clue: 'Ionotropic (fast) vs GPCR (slow) transmitter', meaning: 'Time course of action' },
    { clue: 'Pathway involved (e.g. nigrostriatal)', meaning: 'Explains movement vs reward effects' },
  ],

  treatment: [
    { logic: 'AChE inhibitors raise ACh in Alzheimer', detail: 'Compensate cholinergic loss.' },
    { logic: 'GABA_A potentiation for anxiety/seizure/anesthesia', detail: 'Benzodiazepines, barbiturates.' },
    { logic: 'NMDA antagonism for anesthesia/refractory targets', detail: 'Ketamine, memantine.' },
  ],

  mnemonics: [
    { hook: 'GABA/glycine = inhibit; Glutamate = excite (seizure)', expansion: ['↑Glu/↓GABA tips toward seizure'] },
    { hook: 'DA pathways: Nigrostriatal (move), Mesolimbic (reward), Tuberoinfundibular (prolactin)', expansion: ['D2 block → EPS + hyperprolactinemia'] },
  ],

  traps: [
    {
      questionCategory: 'Antipsychotic side effects by pathway',
      wrongInstinct: 'A D2 blocker only affects the reward (mesolimbic) pathway targeted for psychosis',
      rightAnswer: 'D2 blockade also hits the nigrostriatal pathway (→ extrapyramidal symptoms) and tuberoinfundibular pathway (→ hyperprolactinemia)',
      why: 'Non-selective D2 antagonism affects all dopaminergic pathways, so blocking mesolimbic dopamine for psychosis unavoidably risks EPS and raised prolactin.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient on a typical antipsychotic develops a resting tremor and rigidity plus galactorrhea. These effects are explained by dopamine blockade in which pathways?',
      options: [
        { id: 'a', text: 'Mesolimbic and mesocortical' },
        { id: 'b', text: 'Nigrostriatal and tuberoinfundibular' },
        { id: 'c', text: 'Raphe and locus coeruleus' },
        { id: 'd', text: 'Corticospinal and dorsal column' },
      ],
      answerId: 'b',
      explanation: 'Nigrostriatal D2 blockade produces extrapyramidal (parkinsonian) symptoms, and tuberoinfundibular D2 blockade removes dopamine’s inhibition of prolactin, causing hyperprolactinemia (galactorrhea).',
      tests: 'exam',
    },
  ],
};

export default cnsNeurotransmitters;
