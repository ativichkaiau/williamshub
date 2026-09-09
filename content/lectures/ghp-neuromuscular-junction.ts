import type { Lecture } from '../../lib/types';

export const ghpNeuromuscularJunction: Lecture = {
  id: 'ghp-neuromuscular-junction',
  title: 'The Neuromuscular Junction',
  system: 'msk',
  source: 'Ch 7 — Neuromuscular Transmission & Excitation–Contraction Coupling',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'MSK' },
    { kind: 'lecture', label: 'Ch 7 Neuromuscular Transmission' },
    { kind: 'mechanism', label: 'ACh release → end-plate potential' },
    { kind: 'exam', label: 'Safety factor · myasthenia · curare' },
  ],

  highYield: [
    '**The NMJ is a chemical synapse engineered for guaranteed transmission.** The myelinated motor axon sheds its sheath and branches onto the **motor end plate**, sinking into a **synaptic gutter** whose floor is folded into **subneural clefts** that multiply receptor area. The gap is only **20–30 nm**, and its basal lamina is studded with **acetylcholinesterase**.',
    '**Release is quantal exocytosis, and it is absolutely Ca²⁺-dependent.** The nerve action potential opens **voltage-gated Ca²⁺ channels** at the active zones → **Ca²⁺ enters the terminal** → SNARE-mediated fusion of roughly **125 vesicles**, each carrying about **10 000 ACh molecules**. Remove extracellular Ca²⁺ (or raise Mg²⁺) and transmission fails even though the axon conducts perfectly — this is the one indispensable step.',
    '**The postsynaptic receptor is a ligand-gated ion channel, not a G-protein receptor.** Two ACh molecules bind the **nicotinic (NM) pentamer** → the pore opens to **cations, with Na⁺ influx dominating** → a **local, graded, non-propagated, non-refractory** depolarisation: the **end-plate potential (EPP)**.',
    '**The safety factor is the whole exam idea.** The EPP is normally **3–4× larger than the threshold it must reach**, so every nerve impulse produces exactly **one** muscle action potential (1:1, never fails). A disease must strip out a large fraction of receptors before any weakness shows — which is why **myasthenia gravis** appears as **fatigable** weakness (ptosis, diplopia, worse by evening) rather than fixed paralysis.',
    '**ACh is destroyed within ~1 ms by acetylcholinesterase**, and choline is recaptured by the terminal — so one impulse means one twitch, not a sustained depolarisation. Poison the esterase (**organophosphates**, nerve agents) → ACh accumulates → fasciculations then a **depolarising block**, with muscarinic overflow (miosis, salivation, bronchorrhoea, bradycardia).',
    '**Learn the junction by where each toxin breaks it.** **Botulinum toxin** cleaves SNARE proteins → **no ACh release** (presynaptic; descending flaccid paralysis). **Curare (d-tubocurarine)** is a **competitive nicotinic antagonist** → the EPP drops below threshold (reversed by **neostigmine**). **Succinylcholine** is a **persistent agonist** → depolarising block (not reversed by neostigmine). **Myasthenia gravis** = **antibodies against the nicotinic receptor** → the safety factor is spent.',
  ],

  mechanism: {
    title: 'Nerve AP → Ca²⁺ → ACh → EPP → muscle AP, with a 3–4× margin',
    steps: [
      { id: 's1', label: 'Nerve AP opens voltage-gated Ca²⁺ channels in the terminal', emphasis: 'key' },
      { id: 's2', label: 'Ca²⁺ influx fuses ACh vesicles (quantal release)', emphasis: 'key' },
      { id: 's3', label: 'ACh crosses the 20–30 nm cleft to nicotinic receptors' },
      { id: 's4', label: 'Cation channel opens → Na⁺ enters → end-plate potential', emphasis: 'key' },
      { id: 's5', label: 'EPP exceeds threshold 3–4 times over → muscle AP fires 1:1', emphasis: 'key' },
      { id: 's6', label: 'AChE clears ACh in ~1 ms; block any step → paralysis', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Fatigable ptosis and diplopia, mild on waking and marked by evening', mechanism: 'Anti-AChR antibodies cut receptor numbers → safety factor lost', significance: 'key' },
    { sign: 'Weakness reverses within seconds of edrophonium, or on pyridostigmine', mechanism: 'AChE inhibition raises cleft ACh → EPP back above threshold', significance: 'key' },
    { sign: 'Flaccid paralysis with fully preserved consciousness and sensation', mechanism: 'Curare blocks only the postsynaptic nicotinic receptor; the NMJ is purely motor', significance: 'key' },
    { sign: 'Descending flaccid paralysis with dilated pupils and dry mouth after home-canned food', mechanism: 'Botulinum cleaves SNAREs → ACh release fails at nicotinic and muscarinic terminals', significance: 'supportive' },
    { sign: 'Fasciculations then paralysis, with miosis and salivation, after insecticide exposure', mechanism: 'Organophosphate inhibits AChE → ACh accumulates → depolarising block', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Ion whose entry into the nerve terminal is indispensable for transmitter release', meaning: 'Calcium' },
    { clue: 'Enzyme in the cleft basal lamina that terminates the end-plate signal', meaning: 'Acetylcholinesterase' },
    { clue: 'Local, graded, non-propagated depolarisation of the motor end plate', meaning: 'End-plate potential (EPP)' },
    { clue: 'The margin by which the EPP overshoots threshold', meaning: 'Safety factor (normally three to four times)' },
    { clue: 'Antibody target in the commonest form of myasthenia gravis', meaning: 'Postsynaptic nicotinic ACh receptor' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The NMJ is the handover point: everything upstream of it is nerve, everything downstream is muscle, and localising weakness to one side of it is the commonest neuro question there is. It also underwrites every neuromuscular blocking agent in anaesthesia and the whole picture of organophosphate poisoning. The muscle AP it generates is the trigger for Ca²⁺ release: [[ghp-excitation-contraction-coupling-skeletal]]. Upstream spike genesis: [[ghp-nerve-action-potential]]. The MedCMU treatment of the same downstream step: [[excitation-contraction-coupling]].' },
    { logic: 'Localise the block by site', detail: '**Presynaptic:** botulinum (SNARE cleavage, no release), Lambert–Eaton antibodies (voltage-gated Ca²⁺ channels), aminoglycosides and hypocalcaemia (reduced release). **Postsynaptic:** curare (competitive, reversed by **neostigmine**), succinylcholine (depolarising, **not reversed** by neostigmine), myasthenic antibodies (receptor loss). **In the cleft:** organophosphates and anticholinesterases (ACh excess, depolarising block).' },
  ],

  mnemonics: [
    { hook: 'No calcium, no release: Ca²⁺ in → ACh out → Na⁺ in → EPP → AP', expansion: ['AChE clears the cleft in about one millisecond', 'One impulse in, one twitch out'] },
    { hook: 'Three sites, three toxins: BOTulinum acts BEFORE, CUrare sits on the CUp, ORganophosphate OVERLOADS', expansion: ['Myasthenia gravis groups with curare: postsynaptic receptor loss', 'Lambert-Eaton groups with botulinum: presynaptic release failure'] },
  ],

  traps: [
    {
      questionCategory: 'Localising the lesion in fatigable weakness',
      wrongInstinct: 'Weakness that worsens with use and improves with rest must be Lambert-Eaton syndrome',
      rightAnswer: 'That pattern is myasthenia gravis — postsynaptic AChR antibodies, with a decremental response on repetitive stimulation',
      why: 'Lambert-Eaton is presynaptic (Ca²⁺-channel antibodies) and strength briefly INCREASES after brief exercise, giving an incremental response.',
    },
    {
      questionCategory: 'Why neuromuscular transmission normally never fails',
      wrongInstinct: 'Each impulse releases just enough ACh to bring the end plate exactly to threshold',
      rightAnswer: 'The EPP is three to four times larger than needed — the safety factor',
      why: 'That margin is why myasthenia can destroy most receptors before a single symptom appears, and why weakness then arrives abruptly.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A nerve-muscle preparation is bathed in a Ca²⁺-free solution. Supramaximal stimulation produces a normal action potential that reaches the nerve terminal, but the muscle does not contract. The block is at:',
      options: [
        { id: 'a', text: 'Conduction of the impulse along the axon' },
        { id: 'b', text: 'Exocytosis of ACh from the nerve terminal' },
        { id: 'c', text: 'Binding of ACh to the nicotinic receptor' },
        { id: 'd', text: 'Ca²⁺ release from the sarcoplasmic reticulum' },
      ],
      answerId: 'b',
      explanation: 'Transmitter release is Ca²⁺-triggered exocytosis: entry of extracellular Ca²⁺ through voltage-gated channels is what fuses the vesicles. The axonal AP is intact (it was recorded), the receptors are untouched, and skeletal SR release needs no extracellular Ca²⁺ at all — so the only step that can fail is release.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A 32-year-old woman has ptosis and diplopia that are mild on waking and marked by evening, improving after rest. Repetitive nerve stimulation shows a decremental response. The underlying lesion is:',
      options: [
        { id: 'a', text: 'Loss of postsynaptic nicotinic ACh receptors' },
        { id: 'b', text: 'Antibodies against presynaptic voltage-gated Ca²⁺ channels' },
        { id: 'c', text: 'Cleavage of SNARE proteins in the nerve terminal' },
        { id: 'd', text: 'Irreversible inhibition of acetylcholinesterase' },
      ],
      answerId: 'a',
      explanation: 'Fatigable, rest-relieved weakness with a decrement is myasthenia gravis: antibodies destroy postsynaptic receptors, the EPP loses its safety factor, and transmission fails as vesicle stores fall with repeated use. Presynaptic Ca²⁺-channel antibodies (Lambert-Eaton) give the opposite, incremental pattern; SNARE cleavage (botulism) gives acute descending paralysis with autonomic features; anticholinesterase poisoning causes ACh excess, not fatigability.',
      tests: 'disease',
    },
    {
      id: 'q3',
      stem: 'Neostigmine restores strength in a patient over-paralysed with d-tubocurarine, but fails to reverse (or deepens) a phase I succinylcholine block. Why?',
      options: [
        { id: 'a', text: 'Neostigmine blocks the nicotinic receptor directly' },
        { id: 'b', text: 'Neostigmine raises cleft ACh, which can outcompete a competitive antagonist but only adds to a depolarising block' },
        { id: 'c', text: 'Succinylcholine is destroyed by end-plate acetylcholinesterase' },
        { id: 'd', text: 'Curare acts presynaptically while succinylcholine acts postsynaptically' },
      ],
      answerId: 'b',
      explanation: 'Anticholinesterases work only by raising ACh concentration. Against a competitive antagonist such as curare, more ACh wins the competition and the EPP recovers. Succinylcholine is a persistent agonist holding the end plate depolarised and inactivated, so extra ACh worsens it. Succinylcholine is hydrolysed by plasma pseudocholinesterase, not by end-plate AChE, and both drugs act at the same postsynaptic receptor.',
      tests: 'treatment',
    },
  ],
};

export default ghpNeuromuscularJunction;
