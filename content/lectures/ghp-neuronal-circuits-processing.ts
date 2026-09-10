import type { Lecture } from '../../lib/types';

export const ghpNeuronalCircuitsProcessing: Lecture = {
  id: 'ghp-neuronal-circuits-processing',
  title: 'Nerve Fibre Types & Neuronal Circuits for Processing Information',
  system: 'neuro',
  source: 'Ch 46 — Sensory Receptors & Neuronal Circuits for Processing Information',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Neurophysiology' },
    { kind: 'lecture', label: 'Ch 46 Fibre Types & Circuits' },
    { kind: 'mechanism', label: 'Divergence · convergence · lateral inhibition' },
    { kind: 'exam', label: 'Aα Aβ Aγ Aδ C · afterdischarge' },
  ],

  highYield: [
    '**Diameter buys velocity, and velocity is bought for a reason.** Type A fibres are myelinated and graded **Aα > Aβ > Aγ > Aδ**; type C fibres are unmyelinated and slowest of all. For myelinated fibres a serviceable rule is that velocity in m/s is roughly **six times the diameter in µm**. The table worth owning: **Aα 13–20 µm, 70–120 m/s** · **Aβ 6–12 µm, 30–70 m/s** · **Aγ 3–6 µm, 15–30 m/s** · **Aδ 2–5 µm, 12–30 m/s** · **C 0.5–2 µm, 0.5–2 m/s**.',
    '**The numbers are useless without the modalities.** Aα carries spindle primary (Ia) and Golgi tendon (Ib) afferents plus the alpha motor outflow — the reflex arcs that must be fast. Aβ carries discriminative touch, vibration and pressure (group II). Aγ drives intrafusal fibres. Aδ (group III) carries **first, sharp, well-localised pain**, cold and crude touch. C (group IV) carries **second, burning, poorly localised pain**, warmth, itch and every postganglionic sympathetic axon. **Double pain after a stubbed toe is Aδ then C**, and the gap between the two is simply the difference in conduction velocity over the same distance.',
    '**A neuronal pool has a discharge zone and a subliminal fringe.** An incoming fibre arborises across a pool: at the centre it makes enough synaptic contacts to fire the neurons outright (**discharge or liminal zone**), at the periphery it delivers subthreshold excitation only (**facilitated zone or subliminal fringe**). Fringe neurons are not firing, but they are pre-loaded, so a second input that would otherwise be inadequate can now fire them. That is the physical substrate of spatial summation and of facilitation.',
    '**Divergence amplifies, convergence integrates.** Divergence lets one fibre excite an expanding number of outputs (amplifying divergence, as in the corticospinal system) or feed several separate tracts at once. Convergence brings many terminals onto one neuron, either from a single source or from many sources. The **anterior motor neuron is the classic convergence point** — cortex, cerebellum, basal ganglia, reticular formation and segmental afferents all land on one **final common pathway** that computes a single algebraic sum of EPSPs and IPSPs.',
    '**Lateral inhibition is how the nervous system sharpens an edge.** A strongly excited pathway drives inhibitory interneurons sideways onto its own neighbours, so the skirt of a signal is suppressed while the peak survives. The result is **contrast enhancement** — the blur is trimmed off, spatial resolution and two-point discrimination improve — and the trick is repeated at every relay: dorsal column nuclei, thalamus, cortex. Remove it and every sensation is smeared across its neighbours.',
    '**Reverberation prolongs the signal; synaptic fatigue terminates it.** A collateral feeding back onto its own pool creates a **reverberating circuit**, so output outlasts input. Afterdischarge runs on three time scales: **synaptic afterdischarge** from residual EPSPs (of the order of 15 ms), **parallel-circuit afterdischarge** from pathways of differing length (milliseconds to tens of milliseconds), and **reverberatory afterdischarge**, which can persist for seconds to minutes. The brake is **synaptic fatigue** — sustained high-frequency firing depletes vesicles faster than they can be refilled, output declines and the loop dies. This is the stabiliser that stops a seizure.',
  ],

  mechanism: {
    title: 'A signal enters a pool, is spread, summed, sharpened, prolonged, then self-limited',
    steps: [
      { id: 's1', label: 'Afferent arborises over a pool: discharge zone centrally, subliminal fringe peripherally' },
      { id: 's2', label: 'Divergence spreads and amplifies the signal across many second-order neurons', emphasis: 'key' },
      { id: 's3', label: 'Convergence sums EPSPs and IPSPs from many sources onto a final common pathway', emphasis: 'key' },
      { id: 's4', label: 'Inhibitory interneurons fire sideways → lateral inhibition trims the edges → contrast sharpened', emphasis: 'key' },
      { id: 's5', label: 'Recurrent collaterals re-excite the pool → reverberation → output outlasts the input', emphasis: 'key' },
      { id: 's6', label: 'Vesicle depletion → synaptic fatigue → reverberation decays and the circuit self-limits' },
    ],
  },

  examFindings: [
    { sign: 'Sharp pain, then a pause, then a burning ache after a stubbed toe', mechanism: 'Aδ at 12–30 m/s arrives first; C at 0.5–2 m/s covers the same distance far later', significance: 'key' },
    { sign: 'A limb that has gone to sleep loses touch and position first, pain and temperature last', mechanism: 'Large myelinated Aα and Aβ fibres are the most vulnerable to pressure ischaemia; small C fibres are the most resistant', significance: 'key' },
    { sign: 'Local anaesthetic abolishes pain before it abolishes touch and motor power', mechanism: 'Thin Aδ and unmyelinated C fibres are blocked at the lowest concentration — the reverse of the compression order', significance: 'key' },
    { sign: 'Two closely spaced points on a fingertip are still felt as two', mechanism: 'Lateral inhibition suppresses the excited neighbours between the peaks, preserving the trough that separates them', significance: 'key' },
    { sign: 'A flexor withdrawal outlasts the pinprick that provoked it', mechanism: 'Afterdischarge — residual EPSPs, parallel circuits and reverberation keep the pool firing after the input has stopped', significance: 'supportive' },
    { sign: 'A generalised seizure stops of its own accord after a minute or two', mechanism: 'Synaptic fatigue: transmitter vesicles are depleted faster than they can be replenished and the reverberation collapses', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Fastest fibre class, 13–20 µm, 70–120 m/s', meaning: 'Aα — Ia and Ib afferents plus alpha motor axons' },
    { clue: 'Fibre carrying first, sharp, well-localised pain and cold', meaning: 'Aδ (group III), 2–5 µm, 12–30 m/s' },
    { clue: 'Only unmyelinated class; burning pain, warmth, itch, postganglionic sympathetic outflow', meaning: 'Type C (group IV), 0.5–2 µm, 0.5–2 m/s' },
    { clue: 'Zone of a pool receiving subthreshold excitation only', meaning: 'Subliminal fringe (facilitated zone) — primed but not firing' },
    { clue: 'Circuit motif that suppresses neighbours to sharpen a spatial signal', meaning: 'Lateral (surround) inhibition, repeated at every sensory relay' },
    { clue: 'Property that limits runaway reverberation and terminates a seizure', meaning: 'Synaptic fatigue from transmitter vesicle depletion' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Fibre calibre predicts almost everything clinical about a peripheral nerve: which modality is lost first in a compression neuropathy, which is blocked first by a local anaesthetic, and which fibres a demyelinating process wrecks worst. The structural basis of calibre, myelination and saltatory conduction is in [[nerve-fiber-myelin-synapse]], and the receptors these fibres serve are in [[ghp-sensory-receptors-transduction]].' },
    { logic: 'Where it is examined', detail: 'Two stems recur. The first gives a conduction velocity or a modality and asks for the fibre class. The second gives a pattern of modality loss and asks whether the insult was compressive or pharmacological — the orders are opposite. Circuit questions favour lateral inhibition as the answer to any stem about contrast or two-point discrimination. The tracts these pools feed are in [[somatosensory-ascending-pathways]], and the pool arithmetic in action is in [[reflex-arc-stretch-withdrawal]].' },
  ],

  mnemonics: [
    {
      hook: 'Alpha, Beta, Gamma, Delta, then C — fat and fast down to thin and slow',
      expansion: [
        'Aα — Ia and Ib afferents, alpha motor, 70–120 m/s',
        'Aβ — discriminative touch, vibration, pressure, 30–70 m/s',
        'Aγ — intrafusal motor supply, 15–30 m/s',
        'Aδ — fast sharp pain, cold, crude touch, 12–30 m/s',
        'C — burning pain, warmth, itch, postganglionic sympathetic, 0.5–2 m/s',
      ],
    },
    {
      hook: 'Pressure kills the BIG fibres first; local anaesthetic kills the SMALL fibres first',
      expansion: [
        'Compression: touch, vibration and position go before pain and temperature',
        'Lidocaine: pain and temperature go before touch and motor power',
        'Same patient, opposite order — a favourite paired stem',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Order in which modalities are lost',
      wrongInstinct: 'Whatever blocks a nerve takes out pain first, because the pain fibres are thinnest and most fragile',
      rightAnswer: 'Compression takes out the large fibres first (touch, vibration, position); local anaesthetic takes out the small fibres first (pain, temperature)',
      why: 'Ischaemic compression injures fibres in proportion to metabolic demand and myelin bulk, so large goes first; drug block depends on diffusion distance and internodal length, so small goes first.',
    },
    {
      questionCategory: 'What lateral inhibition does to a signal',
      wrongInstinct: 'Lateral inhibition reduces overall signal strength and therefore blunts sensation',
      rightAnswer: 'It deletes the low-level spread at the edges of a signal and raises spatial contrast',
      why: 'It is a spatial high-pass filter — the peak is preserved while the skirt is removed, which is precisely why it improves two-point discrimination rather than degrading it.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient stubs a toe and describes a sharp stab, a brief pause, and then a spreading burning ache. What accounts for the delay between the two sensations?',
      options: [
        { id: 'a', text: 'Slow release of inflammatory mediators at the site of injury' },
        { id: 'b', text: 'The difference in conduction velocity between Aδ and C fibres over the same distance' },
        { id: 'c', text: 'Recruitment of a second cortical area after the first has adapted' },
        { id: 'd', text: 'Delayed opening of the descending inhibitory gate in the dorsal horn' },
      ],
      answerId: 'b',
      explanation: 'Both volleys leave the toe at the same instant. Aδ fibres are thin but myelinated and conduct at roughly 12–30 m/s, so the sharp, well-localised first pain arrives almost immediately. C fibres are unmyelinated and conduct at only 0.5–2 m/s, so the same distance takes them an order of magnitude longer, and their arrival is felt as the poorly localised burning second pain. Inflammatory mediators do sensitise the area but operate over minutes, not the second or so in question.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A man wakes with his arm draped over a chair back. He cannot feel light touch or tell where his fingers are, but pinprick and temperature are preserved. Which statement is correct?',
      options: [
        { id: 'a', text: 'Small unmyelinated fibres are the most susceptible to compression ischaemia' },
        { id: 'b', text: 'Large myelinated fibres are the most susceptible to compression, and the order would be reversed by a local anaesthetic' },
        { id: 'c', text: 'This pattern indicates a central rather than a peripheral lesion' },
        { id: 'd', text: 'Pain fibres have been selectively spared by descending inhibition' },
      ],
      answerId: 'b',
      explanation: 'Pressure and the ischaemia it causes hit the large myelinated Aα and Aβ fibres first, so touch, vibration and proprioception fail while the small Aδ and C fibres carrying pain and temperature keep working. The order is diagnostically useful precisely because it inverts under a local anaesthetic, where the thin fibres are blocked at the lowest concentration and pain disappears while touch and power persist. A dissociated sensory loss of this kind, confined to one nerve territory after prolonged pressure, is peripheral, not central.',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'A flexor withdrawal reflex continues for several hundred milliseconds after the noxious stimulus has been removed. Which mechanism is the principal explanation, and what normally brings it to an end?',
      options: [
        { id: 'a', text: 'Slow adaptation of the nociceptor, terminated by receptor accommodation' },
        { id: 'b', text: 'Reverberating circuits producing afterdischarge, terminated by synaptic fatigue' },
        { id: 'c', text: 'Lateral inhibition spreading through the pool, terminated by divergence' },
        { id: 'd', text: 'Persistent depolarisation of the anterior motor neuron by the final common pathway' },
      ],
      answerId: 'b',
      explanation: 'Output outlasts input because recurrent collaterals feed excitation back into the pool. Afterdischarge has several components — residual EPSPs lasting around 15 ms, parallel circuits of differing length, and reverberation that can run for seconds to minutes — but reverberation is what carries a discharge of this duration. It is self-limiting because sustained high-frequency transmission depletes vesicles faster than they can be refilled, so synaptic fatigue progressively weakens the loop until it fails. Lateral inhibition sharpens spatial contrast and does nothing to prolong a discharge, and divergence spreads a signal rather than stopping one.',
      tests: 'mechanism',
    },
  ],
};

export default ghpNeuronalCircuitsProcessing;
