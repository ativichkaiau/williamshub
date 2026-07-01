import type { Lecture } from '../../lib/types';

export const cnsPharmacologyFoundations: Lecture = {
  id: 'cns-pharmacology-foundations',
  title: 'CNS Pharmacology Foundations',
  system: 'neuro',
  source: 'L7 — CNS Pharmacology & Stimulants',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L7 CNS Pharmacology' },
    { kind: 'disease', label: 'Drug targets' },
    { kind: 'mechanism', label: 'Receptors & synapse' },
    { kind: 'exam', label: 'Ionotropic vs metabotropic' },
  ],

  highYield: [
    '**BBB** (tight junctions + astrocyte end-feet) restricts drug entry — CNS drugs must be **lipophilic** or use a **transporter** (e.g. **L-DOPA** via the amino-acid transporter, since dopamine can’t cross).',
    'Three receptor/channel types: **voltage-gated channels** (Na⁺/K⁺/Ca²⁺ — action potentials); **ligand-gated/ionotropic** (fast, ms — nAChR, GABA_A, glutamate); **metabotropic GPCRs** (slow, seconds — muscarinic, dopamine, adrenergic, serotonin).',
    'Synaptic potentials: **excitatory (EPSP)** = depolarization (glutamate → Na⁺ in); **inhibitory (IPSP)** = hyperpolarization (**GABA/glycine → Cl⁻ in**). Summed EPSPs reaching threshold fire an all-or-none action potential.',
    '**Presynaptic drug targets**: synthesis, **storage (reserpine blocks VMAT)**, **release (amphetamine)**, **reuptake (cocaine)**, **metabolism (anticholinesterases)**.',
    '**Postsynaptic targets**: agonists (opioids mimic enkephalins) and **antagonists/modulators** (ketamine blocks NMDA; caffeine antagonizes adenosine).',
  ],

  mechanism: {
    title: 'Where a drug acts on the synapse → its CNS effect',
    steps: [
      { id: 's1', label: 'Cross BBB (lipophilic or transporter)', emphasis: 'key' },
      { id: 's2', label: 'Ionotropic (fast) vs metabotropic (slow) target' },
      { id: 's3', label: 'Presynaptic: synthesis/storage/release/reuptake/metabolism' },
      { id: 's4', label: 'Postsynaptic: agonist vs antagonist → EPSP or IPSP' },
    ],
  },

  examFindings: [
    { sign: 'Rapid (ms) inhibitory response = GABA_A opening Cl⁻ channels', mechanism: 'Ionotropic receptor (fast IPSP)', significance: 'key' },
    { sign: 'Slow, lasting modulation (seconds) via second messengers', mechanism: 'Metabotropic GPCR (cAMP/IP₃/DAG)', significance: 'key' },
    { sign: 'Poor CNS penetration of a hydrophilic drug', mechanism: 'Blood-brain barrier exclusion', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Drug lipophilicity / transporter use', meaning: 'Predicts CNS access' },
    { clue: 'Receptor class targeted', meaning: 'Fast (ionotropic) vs slow (metabotropic) effect' },
    { clue: 'Presynaptic vs postsynaptic site', meaning: 'Mechanism of a CNS drug' },
  ],

  treatment: [
    { logic: 'Match the target to the disease', detail: 'Excess excitation (seizure) vs deficient inhibition guide drug choice.' },
    { logic: 'Use transporters to deliver non-penetrant drugs', detail: 'L-DOPA prodrug strategy for dopamine.' },
  ],

  mnemonics: [
    { hook: 'Ionotropic = Instant (ms); Metabotropic = Measured (seconds, GPCR)', expansion: ['Fast channel vs slow second-messenger'] },
    { hook: 'EPSP = Na⁺ in (excite); IPSP = Cl⁻ in (inhibit, GABA/glycine)', expansion: ['Depolarize vs hyperpolarize'] },
  ],

  traps: [
    {
      questionCategory: 'Why give L-DOPA instead of dopamine',
      wrongInstinct: 'Just give dopamine to replace the deficient neurotransmitter in Parkinson disease',
      rightAnswer: 'Dopamine cannot cross the blood-brain barrier; its precursor L-DOPA uses the amino-acid transporter to enter the brain',
      why: 'The BBB excludes the polar dopamine molecule, so the lipophilic/transportable precursor L-DOPA is given and then decarboxylated to dopamine centrally.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A neurotransmitter binds a receptor that directly opens a chloride channel within milliseconds, hyperpolarizing the postsynaptic membrane. This is:',
      options: [
        { id: 'a', text: 'A metabotropic (GPCR) excitatory receptor' },
        { id: 'b', text: 'An ionotropic inhibitory receptor (e.g. GABA_A)' },
        { id: 'c', text: 'A voltage-gated sodium channel' },
        { id: 'd', text: 'A presynaptic reuptake transporter' },
      ],
      answerId: 'b',
      explanation: 'Direct, millisecond-scale opening of a Cl⁻ channel producing hyperpolarization (IPSP) is an ionotropic inhibitory receptor such as GABA_A — the target of benzodiazepines and barbiturates.',
      tests: 'exam',
    },
  ],
};

export default cnsPharmacologyFoundations;
