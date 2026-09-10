import type { Lecture } from '../../lib/types';

export const ghpMuscleSpindleStretchReflex: Lecture = {
  id: 'ghp-muscle-spindle-stretch-reflex',
  title: 'The Muscle Spindle, Gamma Coactivation and the Stretch Reflex',
  system: 'neuro',
  source: 'Ch 54 — Motor Functions of the Spinal Cord; the Cord Reflexes',
  updated: '2026-09-10',
  tags: [
    { kind: 'system', label: 'Neuroscience' },
    { kind: 'lecture', label: 'Ch 54 Motor Functions of the Cord' },
    { kind: 'mechanism', label: 'Ia → alpha motor neuron, monosynaptic' },
    { kind: 'exam', label: 'Tendon jerk · clonus · reflex level' },
  ],

  highYield: [
    '**The spindle is wired in parallel with the working muscle, and that one geometric fact decides everything it can sense.** Three to twelve **intrafusal fibres**, each **3–10 mm long**, are tied into the connective tissue alongside the **extrafusal** fibres that generate force. Because the two lie side by side, anything that changes muscle **length** changes spindle length — so the spindle is a **length and rate-of-change-of-length detector, blind to force**. The poles of the intrafusal fibre are contractile and take **gamma motor** innervation; the central region has no contractile filaments and is the **receptor zone**. Extrafusal fibres take **alpha motor** innervation and do the work.',
    '**Two intrafusal fibre types feed two afferents, and the pairing is what exams ask.** **Nuclear bag fibres (1–3 per spindle)** have their nuclei heaped in the central bag and carry the **dynamic** signal; **nuclear chain fibres (3–9, shorter and thinner)** have nuclei in a row and carry the **static** signal. The **primary (annulospiral) ending** wraps the central region of **both** types and sends the **type Ia axon — about 17 micrometres, 70–120 m/s**, the fastest in the body. The **secondary ending** sits mainly on **nuclear chain** fibres and sends the smaller **type II axon (about 8 micrometres)**. So: **Ia = bag plus chain = dynamic plus static; II = chain only = static only.**',
    '**Static and dynamic responses are two different measurements, not two intensities of one.** The **static response** is a **steady discharge proportional to the length held**, from primary and secondary endings together, and it lasts **for minutes** while the stretch is maintained. The **dynamic response** belongs to the **primary ending alone**: while the muscle is **lengthening** it fires **enormously**, in proportion to the **rate** of change, and then **dies away within a fraction of a second** once length stops changing even though the stretch persists. Shortening does the mirror opposite — firing is **switched off** while the muscle shortens. The dynamic channel therefore reports **error and its velocity**, which is what a fast corrective reflex needs.',
    '**Gamma coactivation exists to solve one problem: a contracting muscle would blind its own sensor.** When alpha motor neurons shorten the extrafusal fibres, the spindle lying in parallel goes **slack — it is unloaded — and falls silent exactly at the moment feedback is most needed**. The nervous system prevents this by firing **alpha and gamma motor neurons together**: about **half of all descending motor traffic excites gamma neurons at the same time as alpha neurons**, so the **contractile poles of the intrafusal fibre shorten in step with the muscle**, the receptor zone stays taut, and **spindle discharge is held in its sensitive mid-range throughout the contraction**. The consequence is a **length servo**: the gamma command sets a target length, and any **mismatch between intended and actual length** generates a spindle error signal that reflexly recruits more alpha motor neurons until the mismatch is closed. **Gamma-d fibres drive the nuclear bag (dynamic sensitivity), gamma-s fibres the nuclear chain (static sensitivity)**, and the bias comes from the **bulboreticular facilitatory region** under cerebellar, basal ganglia and cortical control.',
    '**The stretch reflex is monosynaptic, and it comes in a fast version and a slow version.** The **Ia axon enters the dorsal root and synapses directly on the alpha motor neuron of its own muscle** — **no interneuron, one synapse, latency of only a few milliseconds**. A **sudden** stretch triggers the **dynamic stretch reflex**: a huge Ia burst produces an immediate strong contraction that opposes the change, then fades. A **maintained** stretch leaves the weaker **static stretch reflex**, driven by primary and secondary endings, which sustains tone against a steady load. Two extra jobs matter: the reflex is also a **damping or smoothing device** that irons out the jerkiness of asynchronous motor unit firing, and it works in **both directions** — sudden shortening reflexly **inhibits** the muscle (the negative stretch reflex).',
    '**The tendon jerk is a bedside monosynaptic test, and it measures the cord rather than the muscle.** A tendon tap stretches the spindles in a **millisecond**, which is a pure dynamic stimulus, so the jerk tests **Ia afferent, dorsal root, one cord segment, anterior horn cell, motor nerve, neuromuscular junction and muscle**. **Loss or depression of a jerk localises to that arc**: root, plexus, peripheral nerve, anterior horn cell or the segment itself — hence the segmental table (**biceps C5–C6, brachioradialis C5–C6, triceps C7–C8, knee L3–L4, ankle S1–S2**). **A brisk jerk with spread to neighbouring muscles and sustained clonus localises above the arc**, because descending pathways normally hold the loop gain down; remove them and gain rises. The neat corollary is that **reflex amplitude reports the facilitation of the cord by higher centres**, which is why the **Jendrassik reinforcement manoeuvre** can conjure an apparently absent jerk out of nothing.',
  ],

  mechanism: {
    title: 'Length error to corrective contraction: the spindle loop',
    steps: [
      { id: 's1', label: 'Muscle lengthens; the spindle in parallel is stretched and its receptor zone deformed' },
      { id: 's2', label: 'Primary ending fires a Ia burst scaled to rate; secondary ending reports the held length', emphasis: 'key' },
      { id: 's3', label: 'Ia axon enters the dorsal root and synapses directly on the alpha motor neuron of the same muscle', emphasis: 'key' },
      { id: 's4', label: 'Alpha motor neuron discharges; extrafusal fibres contract and shorten the muscle' },
      { id: 's5', label: 'Shortening unloads the spindle, which would fall silent just when feedback is needed', emphasis: 'key' },
      { id: 's6', label: 'Gamma coactivation shortens the intrafusal poles in step, holding the sensor in its sensitive range', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Brisk knee jerk that also contracts the adductors, with four sustained beats of ankle clonus', mechanism: 'Loss of descending control raises stretch-reflex loop gain: spread and clonus mean the lesion is above the reflex arc', significance: 'key' },
    { sign: 'Absent ankle jerk with a preserved knee jerk in a patient with calf pain radiating to the sole', mechanism: 'The S1 arc is interrupted at root level while L3 to L4 is intact — the reflex table localises the segment', significance: 'key' },
    { sign: 'Symmetrically absent ankle jerks with vibration loss in both feet and normal power', mechanism: 'Large-fibre neuropathy destroys the 17 micrometre Ia afferent first, so the reflex goes before the strength does', significance: 'key' },
    { sign: 'Ankle jerk with a normal brisk contraction but a visibly slow, hung-up relaxation phase', mechanism: 'Delayed relaxation of hypothyroidism — a muscle-level abnormality of the effector, not of the reflex arc', significance: 'supportive' },
    { sign: 'An apparently absent knee jerk that appears when the patient hooks the fingers together and pulls hard', mechanism: 'Jendrassik reinforcement raises fusimotor and cord facilitation, proving the arc was intact but underfacilitated', significance: 'supportive' },
    { sign: 'Flaccid areflexic legs in the first days after a mid-thoracic cord injury', mechanism: 'Spinal shock: an upper motor neuron lesion that is temporarily hyporeflexic because tonic descending facilitation was abruptly withdrawn', significance: 'key' },
  ],

  investigations: [
    { clue: 'A receptor lying in parallel with the working fibres', meaning: 'Muscle spindle — measures length and rate of length change, and is blind to force' },
    { clue: 'Type Ia afferent, 17 micrometres, 70 to 120 m/s', meaning: 'Primary annulospiral ending on bag and chain fibres; carries both dynamic and static information' },
    { clue: 'Type II afferent, about 8 micrometres', meaning: 'Secondary ending, chiefly on nuclear chain fibres; static length signal only' },
    { clue: 'A huge discharge while the muscle is lengthening that decays within a fraction of a second', meaning: 'Dynamic response of the primary ending from nuclear bag fibres' },
    { clue: 'Gamma-d versus gamma-s efferents', meaning: 'Dynamic gamma fibres excite nuclear bag fibres; static gamma fibres excite nuclear chain fibres' },
    { clue: 'A tendon jerk latency of roughly 20 ms at the knee', meaning: 'Too short for an interneuron — the arc is monosynaptic, one Ia synapse onto the alpha motor neuron' },
  ],

  treatment: [
    { logic: 'Why gamma coactivation is the whole point', detail: 'If you remember one sentence from this chapter, make it this: **the spindle would go blind during contraction, and gamma coactivation keeps it sensitive**. Every downstream idea depends on it — muscle tone is the resting output of this loop, spasticity is the loop with its gain unclamped, and hypotonia is the loop with its afferent or efferent limb cut. It also explains why tone is testable at all: passively moving a limb interrogates a servo that is being biased from the brainstem. The receptor physiology in wider context: [[proprioceptors-muscle-spindle-reflexes]]. The tension sensor that answers the opposite question and its cord reflexes: [[ghp-golgi-tendon-organ-cord-reflexes]].' },
    { logic: 'How to use a reflex at the bedside', detail: 'Read every reflex as two separate questions. First, is the **arc** intact — that is a segmental, lower motor neuron question, answered by the reflex table. Second, is the arc being **restrained** — that is a descending, upper motor neuron question, answered by briskness, spread, clonus and the plantar response. A reflex can be depressed only by a break in its own arc, and exaggerated only by loss of control from above; in an acute cord or hemisphere lesion both may look depressed for days. Building the two-column table from mechanism: [[ghp-upper-vs-lower-motor-neuron]]. How reflexes are graded and elicited in practice: [[reflex-types-clinical-testing]].' },
  ],

  mnemonics: [
    { hook: 'Bag is dynamic, Chain is static', expansion: ['Nuclear bag fibres carry the rate signal through the primary ending and the Ia axon', 'Nuclear chain fibres carry the held-length signal through the secondary ending and the type II axon', 'Ia sees both; II sees chain only'] },
    { hook: 'Contract the muscle, contract the sensor', expansion: ['Alpha shortens extrafusal fibres and would leave the spindle slack', 'Gamma shortens the intrafusal poles at the same instant', 'Result: the spindle keeps reporting length error all the way through the contraction'] },
  ],

  traps: [
    {
      questionCategory: 'What the muscle spindle actually measures',
      wrongInstinct: 'The spindle reports how hard the muscle is pulling',
      rightAnswer: 'It reports muscle length and the rate at which length is changing; tension is measured by the Golgi tendon organ',
      why: 'The spindle lies in parallel with the working fibres so it follows length, while the tendon organ lies in series so it follows force.',
    },
    {
      questionCategory: 'Interpreting a depressed reflex',
      wrongInstinct: 'A flaccid, areflexic limb rules out a brain or spinal cord lesion',
      rightAnswer: 'An acute upper motor neuron lesion is flaccid and areflexic for days to weeks before hypertonia and hyperreflexia appear',
      why: 'The cord depends on tonic descending facilitation, so an abrupt disconnection first depresses the loop and only later leaves it disinhibited.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'During a voluntary elbow flexion, recordings from a Ia afferent of biceps show a maintained discharge throughout the contraction rather than the silence that pure muscle shortening would predict. What accounts for this?',
      options: [
        { id: 'a', text: 'Golgi tendon organ afferents take over the length signal once tension rises' },
        { id: 'b', text: 'Gamma motor neurons fire with the alpha motor neurons and contract the intrafusal poles' },
        { id: 'c', text: 'Renshaw cells recurrently inhibit the alpha motor neuron and lengthen the muscle again' },
        { id: 'd', text: 'The secondary ending switches from a static to a dynamic response pattern' },
      ],
      answerId: 'b',
      explanation: 'Because the spindle lies in parallel with the extrafusal fibres, extrafusal contraction unloads it and its discharge would collapse at the very moment length feedback matters most. Alpha and gamma motor neurons are coactivated by descending commands, so the contractile poles of the intrafusal fibres shorten in step, keeping the non-contractile receptor zone taut and the discharge in its sensitive range. Tendon organs measure tension, not length, and cannot substitute; Renshaw inhibition would reduce output rather than preserve the afferent signal; and the secondary ending has no dynamic response to switch into.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A tendon tap produces a burst of firing that is very large while the muscle is being lengthened but falls away within a fraction of a second even though the stretch is maintained. Which receptor element generates this component?',
      options: [
        { id: 'a', text: 'Secondary ending on nuclear chain fibres, carried by type II axons' },
        { id: 'b', text: 'Primary ending on nuclear bag fibres, carried by type Ia axons' },
        { id: 'c', text: 'Golgi tendon organ, carried by type Ib axons' },
        { id: 'd', text: 'Free nerve endings in the tendon sheath, carried by A-delta axons' },
      ],
      answerId: 'b',
      explanation: 'This is the dynamic response, and only the primary annulospiral ending produces it, driven principally by nuclear bag fibres. It is proportional to the rate of change of length and decays quickly once length stops changing, leaving behind the smaller static response. The secondary ending on chain fibres has only a static response that is maintained for as long as the stretch is held. Tendon organs report tension in series with the muscle and are not the receptor stimulated first by a brief tap, and free endings are nociceptive rather than proprioceptive.',
      tests: 'lecture',
    },
    {
      id: 'q3',
      stem: 'A 54-year-old has an absent right ankle jerk, a preserved right knee jerk, weak plantar flexion and reduced sensation over the lateral border of the foot. The left side is normal and both plantar responses are flexor. Where is the lesion?',
      options: [
        { id: 'a', text: 'Right corticospinal tract in the internal capsule' },
        { id: 'b', text: 'Right S1 nerve root' },
        { id: 'c', text: 'Right L4 nerve root' },
        { id: 'd', text: 'Bilateral distal sensorimotor polyneuropathy' },
      ],
      answerId: 'b',
      explanation: 'A depressed reflex means an interruption somewhere in its own arc, and the ankle jerk arc is S1 to S2. Weak plantar flexion and numbness over the lateral foot and sole belong to the same segment, so a single right S1 root lesion explains all three findings. An L4 lesion would knock out the knee jerk and cause weak dorsiflexion with medial calf numbness. A capsular corticospinal lesion is an upper motor neuron problem and would exaggerate the reflex and give an extensor plantar response, not abolish the jerk. A polyneuropathy would be bilateral and symmetric rather than confined to one segment on one side.',
      tests: 'exam',
    },
  ],
};

export default ghpMuscleSpindleStretchReflex;
