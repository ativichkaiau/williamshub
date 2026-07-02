import type { Lecture } from '../../lib/types';
import { NMJ_TRANSMISSION } from '../../lib/figures';

export const neuromuscularJunctionTransmission: Lecture = {
  id: 'neuromuscular-junction-transmission',
  title: 'The Neuromuscular Junction',
  system: 'physiology',
  source: 'L6 — Neurotransmitters & Neuromodulators',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'L6 Neurotransmitters' },
    { kind: 'mechanism', label: 'ACh & end-plate potential' },
    { kind: 'disease', label: 'Myasthenia gravis' },
  ],

  highYield: [
    '**The neuromuscular junction (NMJ) is the model chemical synapse: a motor-neuron terminal, a synaptic cleft, and the muscle motor end-plate.** Its transmitter is **ACETYLCHOLINE (ACh)** acting on **nicotinic receptors** (ligand-gated cation channels). It converts a nerve action potential into a muscle action potential with a high "safety factor."',
    '**The transmission sequence: (1) nerve action potential reaches the terminal; (2) voltage-gated Ca²⁺ channels open and Ca²⁺ enters; (3) Ca²⁺ triggers vesicle fusion and ACh release; (4) ACh binds nicotinic receptors → Na⁺ influx → the END-PLATE POTENTIAL (EPP); (5) the EPP fires a muscle action potential; (6) ACETYLCHOLINESTERASE degrades ACh to end the signal.**',
    '**Ca²⁺ entry is the essential trigger for transmitter release — no Ca²⁺, no release.** The EPP is a large, graded depolarisation that is normally always suprathreshold (unlike small CNS EPSPs), giving the NMJ its reliability. This is why the NMJ almost never "fails" to transmit under normal conditions.',
    '**Clinical correlations map onto the steps: Myasthenia gravis = autoantibodies against the postsynaptic nicotinic ACh RECEPTOR → fatigable weakness (improves with acetylcholinesterase inhibitors); Lambert–Eaton = antibodies to presynaptic voltage-gated Ca²⁺ channels → weakness that improves with use (often with small-cell lung cancer).**',
    '**Toxins/drugs target each step: botulinum toxin BLOCKS ACh release (flaccid paralysis); curare/neuromuscular blockers block the receptor; organophosphates/nerve agents INHIBIT acetylcholinesterase → ACh excess (cholinergic crisis).** The NMJ is thus both the archetype of synaptic transmission and a rich source of pharmacology and disease.',
  ],

  mechanism: {
    title: 'AP → Ca²⁺ in → ACh release → nicotinic EPP → muscle AP → AChE ends it',
    steps: [
      { id: 's1', label: 'Nerve AP → voltage-gated Ca²⁺ channels open (Ca²⁺ = release trigger)', emphasis: 'key' },
      { id: 's2', label: 'ACh released → binds nicotinic receptors (ligand-gated cation channels)', emphasis: 'key' },
      { id: 's3', label: 'Na⁺ influx → END-PLATE POTENTIAL (large, suprathreshold)', emphasis: 'key' },
      { id: 's4', label: 'EPP → muscle action potential → contraction' },
      { id: 's5', label: 'Acetylcholinesterase degrades ACh → signal terminates', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Fatigable weakness improving with an anticholinesterase', mechanism: 'Myasthenia gravis (anti-nicotinic-receptor antibodies)', significance: 'key' },
    { sign: 'Weakness that improves with repeated use', mechanism: 'Lambert–Eaton (anti-presynaptic Ca²⁺ channel)', significance: 'key' },
    { sign: 'Flaccid paralysis after botulinum toxin', mechanism: 'Blocked ACh release', significance: 'supportive' },
    { sign: 'Cholinergic crisis with organophosphate exposure', mechanism: 'Acetylcholinesterase inhibition (ACh excess)', significance: 'supportive' },
    { sign: 'A reliably suprathreshold end-plate potential', mechanism: 'High safety factor of the NMJ', significance: 'key' },
  ],

  investigations: [
    { clue: 'The neurotransmitter and receptor at the NMJ', meaning: 'Acetylcholine acting on nicotinic receptors' },
    { clue: 'The ion whose entry triggers transmitter release', meaning: 'Calcium (voltage-gated Ca²⁺ channels)' },
    { clue: 'The enzyme that terminates NMJ signalling', meaning: 'Acetylcholinesterase' },
    { clue: 'The target of the antibodies in myasthenia gravis', meaning: 'The postsynaptic nicotinic ACh receptor' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The NMJ is the archetype for the synaptic transmission of [[synaptic-transmission-epsp-ipsp]] and uses ligand-gated channels from [[ion-channels-structure-gating]]; ACh is one of the transmitters catalogued in [[neurotransmitter-systems-catalog]]. Its steps map onto myasthenia, Lambert–Eaton, and the pharmacology of neuromuscular blockers and anticholinesterases — high-yield across physiology and clinical medicine.' },
  ],

  mnemonics: [
    { hook: 'NMJ steps: "AP → Ca²⁺ in → ACh out → nicotinic EPP → muscle AP → AChE off"', expansion: ['Ca²⁺ = the release trigger', 'EPP always suprathreshold (safety factor)'] },
    { hook: 'MG vs LEMS: "MG = receptor (postsynaptic, fatigues); LEMS = Ca²⁺ channel (presynaptic, improves with use)"', expansion: ['Botulinum blocks release', 'Organophosphates block AChE'] },
  ],

  traps: [
    {
      questionCategory: 'Reliability of neuromuscular transmission',
      wrongInstinct: 'Like small central synapses, the neuromuscular junction often needs summation of several inputs to fire the muscle',
      rightAnswer: 'The NMJ end-plate potential is normally LARGE and always SUPRATHRESHOLD (a high safety factor), so a single nerve impulse reliably triggers a muscle action potential — it does not depend on summation like small CNS EPSPs',
      why: 'The NMJ is built for reliability (one-to-one transmission); confusing it with the graded, summating synapses of the CNS misses why neuromuscular transmission normally never fails and why disease (myasthenia) is needed to make it fail.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Release of acetylcholine from the motor nerve terminal is directly triggered by:',
      options: [
        { id: 'a', text: 'Sodium influx into the terminal' },
        { id: 'b', text: 'Calcium influx through voltage-gated calcium channels' },
        { id: 'c', text: 'Potassium efflux' },
        { id: 'd', text: 'Acetylcholinesterase activity' },
      ],
      answerId: 'b',
      explanation: 'The arriving action potential opens voltage-gated calcium channels; the resulting calcium influx triggers vesicle fusion and acetylcholine release. Without calcium entry, no transmitter is released.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Fatigable muscle weakness that improves with an acetylcholinesterase inhibitor, caused by antibodies against the postsynaptic receptor, is characteristic of:',
      options: [
        { id: 'a', text: 'Lambert–Eaton myasthenic syndrome' },
        { id: 'b', text: 'Myasthenia gravis' },
        { id: 'c', text: 'Botulism' },
        { id: 'd', text: 'Organophosphate poisoning' },
      ],
      answerId: 'b',
      explanation: 'Myasthenia gravis is caused by autoantibodies against the postsynaptic nicotinic acetylcholine receptor, producing fatigable weakness that improves when acetylcholinesterase inhibitors raise synaptic ACh. Lambert–Eaton instead targets presynaptic calcium channels.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'The neuromuscular junction', svg: NMJ_TRANSMISSION, caption: 'The transmission sequence (Ca²⁺ → ACh → nicotinic EPP → muscle AP → AChE) and its clinical/pharmacological targets.' },
  ],
};

export default neuromuscularJunctionTransmission;
