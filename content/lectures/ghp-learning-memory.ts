import type { Lecture } from '../../lib/types';

export const ghpLearningMemory: Lecture = {
  id: 'ghp-learning-memory',
  title: 'Learning and Memory: Consolidation, Amnesia and LTP',
  system: 'neuro',
  source: 'Ch 57 — Cerebral Cortex; Intellectual Functions, Learning & Memory',
  updated: '2026-09-10',
  tags: [
    { kind: 'system', label: 'Neuroscience' },
    { kind: 'lecture', label: 'Ch 57 Cerebral Cortex & Intellectual Function' },
    { kind: 'mechanism', label: 'Reverberation → consolidation → structural change' },
    { kind: 'exam', label: 'Anterograde vs retrograde · declarative vs skill' },
  ],

  highYield: [
    '**Memory comes in three time bands and each band has a different physical substrate — that is why one lesion can take one band and leave the others untouched.** **Short-term memory** holds about **seven items for seconds to minutes** as **reverberating activity in a closed neuronal circuit**, with **no structural change at all**, which is why it is wiped instantly by **concussion, deep anaesthesia or electroconvulsive therapy**. **Intermediate long-term memory** lasts **minutes to weeks** and rests on **reversible chemical changes in the presynaptic terminal**. **Long-term memory** is **structural** — more transmitter release sites, more vesicles, larger and more numerous terminals — and is essentially permanent.',
    '**Consolidation is the conversion step, it takes time, and anything that interrupts the brain during that window erases the trace.** Turning a labile short-term trace into a fixed one needs **5 to 10 minutes for a weak memory and an hour or more for a strong one**, and depends on **new protein synthesis and new synapse formation**. Two things accelerate it: **rehearsal**, which recycles the trace through the circuit, and **codification** — the item is **compared with and attached to memories already stored**, so meaningful material is filed by association while random detail is discarded. **A protein synthesis inhibitor given during the window blocks long-term memory while leaving short-term memory perfectly intact.**',
    '**The hippocampus consolidates; it does not store — which is the whole basis of the amnesia question.** Bilateral hippocampal loss produces **dense anterograde amnesia for declarative memory**: the patient **converses normally, repeats a seven-digit number** (short-term intact) and **recalls childhood in detail** (old cortical stores intact), but **cannot lay down anything new**. **Retrograde amnesia** is the opposite failure — **retrieval of what was already stored** — and characteristically shows a **temporal gradient**, with **recent memories lost and remote ones preserved**, because the older traces have had longer to become independent of the medial temporal lobe. The **diencephalic limb of the same circuit (mammillary bodies and dorsomedial thalamus)** produces the identical amnesia in **thiamine deficiency**, with confabulation.',
    '**Declarative and skill memory run on different hardware, and the dissociation is the exam point.** **Declarative memory** — facts, events, the surrounding context — depends on the **hippocampus and the medial temporal lobe**. **Skill or procedural memory** — mirror drawing, riding a bicycle, a surgical knot — is laid down in the **cerebellum, basal ganglia and motor cortex**, none of which needs the hippocampus. So a densely amnesic patient will **improve measurably at a motor task day after day while sincerely denying ever having performed it**: the skill is stored, the episode of practising it is not.',
    '**The two simplest forms of learning are presynaptic, and they are the model for everything above them.** In **habituation**, a repeated harmless stimulus progressively **closes calcium channels in the sensory terminal**, so less transmitter is released and the response fades — the brain discarding what does not matter. In **sensitisation**, a **facilitator interneurone releasing serotonin onto that same terminal** raises **cAMP**, activates **protein kinase A**, **closes potassium channels**, **prolongs the action potential**, lets **more calcium enter** and so **increases transmitter release** — presynaptic facilitation. Note the direction: **both act on the transmitting terminal, not on the postsynaptic cell**.',
    '**Long-term potentiation is the synaptic mechanism of declarative memory, and the NMDA receptor is the coincidence detector that makes it associative.** Glutamate alone cannot open the **NMDA channel** because it is **plugged by magnesium at rest**; the block is expelled only when the **postsynaptic membrane is already depolarised**. So **calcium enters only when presynaptic firing and postsynaptic depolarisation happen together** — the molecular statement of the rule that cells which fire together wire together. Calcium activates **CaMKII**, which **phosphorylates and inserts AMPA receptors** for **early LTP lasting minutes to hours**; **late LTP** requires **cAMP, CREB, gene transcription and protein synthesis** and grows **new dendritic spines and terminals**, which is the same structural change that defines long-term memory.',
  ],

  mechanism: {
    title: 'From a passing signal to a permanent synapse',
    steps: [
      { id: 's1', label: 'Input is held as reverberating circuit activity — short-term memory, seconds to minutes' },
      { id: 's2', label: 'Rehearsal and reinforcement gate entry; unreinforced input habituates and is discarded', emphasis: 'key' },
      { id: 's3', label: 'Hippocampus codifies the item and binds it to memories already stored', emphasis: 'key' },
      { id: 's4', label: 'Paired pre- and postsynaptic firing expels the magnesium block and admits calcium through NMDA channels', emphasis: 'key' },
      { id: 's5', label: 'CaMKII inserts AMPA receptors — early LTP, minutes to hours', emphasis: 'key' },
      { id: 's6', label: 'CREB-driven transcription builds new spines and release sites; the trace ends up cortical and permanent' },
    ],
  },

  examFindings: [
    { sign: 'Converses normally and repeats a seven-digit number, but greets the examiner as a stranger five minutes after a full introduction', mechanism: 'Bilateral hippocampal loss: anterograde declarative amnesia with short-term memory intact', significance: 'key' },
    { sign: 'The same patient traces a mirror-image star faster and more accurately every day while insisting he has never attempted the task', mechanism: 'Skill memory runs through cerebellum, basal ganglia and motor cortex and bypasses the hippocampus entirely', significance: 'key' },
    { sign: 'After a head injury the patient has lost the weeks before the accident but recalls childhood perfectly', mechanism: 'Retrograde amnesia with a temporal gradient — remote traces have become independent of the medial temporal lobe', significance: 'key' },
    { sign: 'Ophthalmoplegia and ataxia in an alcohol-dependent patient, followed by amnesia filled in with fluent invented detail', mechanism: 'Thiamine deficiency damaging mammillary bodies and dorsomedial thalamus — the diencephalic limb of the memory circuit', significance: 'key' },
    { sign: 'A startle response to a repeated harmless noise gets smaller with every repetition', mechanism: 'Habituation: progressive closure of presynaptic calcium channels reduces transmitter release', significance: 'supportive' },
    { sign: 'After one painful stimulus, a light touch that was previously ignored now provokes a vigorous response', mechanism: 'Sensitisation: a serotonergic facilitator interneurone raises cAMP, closes potassium channels and prolongs the presynaptic spike', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'About seven items held for seconds, with no structural synaptic change', meaning: 'Short-term memory as reverberating circuit activity' },
    { clue: 'Memory abolished by concussion, deep anaesthesia or electroconvulsive therapy while old memories survive', meaning: 'The labile pre-consolidation window — proof that consolidation is a separate physical step' },
    { clue: 'A protein synthesis inhibitor given shortly after training', meaning: 'Blocks late LTP and long-term memory; short-term memory and early LTP are unaffected' },
    { clue: 'The magnesium block of the NMDA channel relieved by postsynaptic depolarisation', meaning: 'Coincidence detection — the molecular reason LTP is associative rather than merely additive' },
    { clue: 'Bilateral medial temporal resection', meaning: 'Dense anterograde declarative amnesia with fully preserved skill learning' },
    { clue: 'Mammillary bodies and dorsomedial thalamic nucleus', meaning: 'Diencephalic memory circuit; thiamine deficiency here gives amnesia with confabulation' },
  ],

  treatment: [
    { logic: 'Why the time bands matter clinically', detail: 'The consolidation window is not a laboratory curiosity. It explains why a concussed player recalls the whole season but not the ten minutes before the tackle, why electroconvulsive therapy produces patchy loss for events immediately around the treatment, and why midazolam is given for procedures that a patient would rather not remember — none of these agents can touch a memory that has already been consolidated. The synaptic machinery in detail: [[synaptic-plasticity-ltp]]. The transmitter release step that habituation and sensitisation modulate: [[ghp-synaptic-transmission]].' },
    { logic: 'Where it is examined', detail: 'Nearly every question is one of three dissociations. Anterograde against retrograde: which direction in time is lost, and does the retrograde loss have a gradient. Declarative against skill: can the patient learn the task while denying the lessons. Short-term against long-term: can they hold a phone number while forgetting the conversation. Get the dissociation right and the anatomy follows. Why an unreinforced experience is never consolidated in the first place: [[ghp-reward-punishment-motivation]]. The limbic circuitry that surrounds the hippocampus: [[limbic-system-emotion-memory]].' },
  ],

  mnemonics: [
    { hook: 'Seconds reverberate, minutes chemical, weeks structural', expansion: ['Short-term: circuit activity, no anatomy changed, erased by concussion or anaesthesia', 'Intermediate: reversible presynaptic chemistry at the terminal', 'Long-term: new release sites, new spines, protein synthesis required'] },
    { hook: 'The hippocampus writes, the cortex keeps', expansion: ['Lose the hippocampus and you cannot write new declarative files', 'The old files are cortical and stay readable', 'Skills are filed elsewhere entirely — cerebellum, basal ganglia, motor cortex'] },
  ],

  traps: [
    {
      questionCategory: 'What hippocampal destruction actually costs',
      wrongInstinct: 'The hippocampus stores long-term memories, so destroying it wipes out the past',
      rightAnswer: 'It consolidates new declarative memory; bilateral loss gives dense anterograde amnesia while old memories and short-term memory remain intact',
      why: 'The store is neocortical and the hippocampus is the librarian, not the library — so the loss runs forward in time, not backward.',
    },
    {
      questionCategory: 'What an amnesic patient can still learn',
      wrongInstinct: 'A patient with dense amnesia cannot acquire anything new',
      rightAnswer: 'Procedural learning is fully preserved — the patient improves at a motor task session after session while denying ever having done it',
      why: 'Skill memory is built in cerebellum, basal ganglia and motor cortex, which need no hippocampal consolidation.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient who underwent bilateral medial temporal lobectomy is tested daily on mirror drawing. His completion time falls steadily across two weeks and his error rate drops, yet at every session he states that he has never seen the apparatus before. What does this dissociation demonstrate?',
      options: [
        { id: 'a', text: 'His short-term memory is abnormally prolonged' },
        { id: 'b', text: 'Skill memory is independent of the hippocampus, while declarative memory is not' },
        { id: 'c', text: 'He has retrograde rather than anterograde amnesia' },
        { id: 'd', text: 'Consolidation of the task occurred in the dorsomedial thalamus instead' },
      ],
      answerId: 'b',
      explanation: 'The performance curve proves that learning has occurred and been retained across days, so consolidation of some kind is working. What is missing is the declarative record of the episodes of practice, which is exactly what bilateral hippocampal loss removes. Skill memory is laid down in the cerebellum, basal ganglia and motor cortex and never passes through the hippocampus, so the two systems dissociate cleanly. The amnesia here runs forward from the surgery, which is anterograde by definition.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Glutamate is released onto a hippocampal synapse whose postsynaptic membrane is sitting at resting potential. AMPA receptors open but essentially no calcium enters through the NMDA receptor channels. What accounts for this?',
      options: [
        { id: 'a', text: 'NMDA receptors require glycine rather than glutamate as their agonist' },
        { id: 'b', text: 'The NMDA channel pore is blocked by magnesium until the membrane depolarises' },
        { id: 'c', text: 'CaMKII must phosphorylate the NMDA receptor before it can conduct' },
        { id: 'd', text: 'Calcium entry occurs only through voltage-gated channels in the dendritic spine' },
      ],
      answerId: 'b',
      explanation: 'The NMDA channel is plugged by magnesium in a voltage-dependent way, and the plug is expelled only when the postsynaptic membrane is already depolarised. The receptor therefore conducts only when transmitter release and postsynaptic depolarisation coincide, which makes it a coincidence detector and makes LTP associative rather than simply additive. Glycine is a required co-agonist but does not explain the block, and CaMKII acts downstream of calcium entry, inserting AMPA receptors to express early LTP.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'Rats learn a maze, then receive a protein synthesis inhibitor immediately afterward. Tested minutes later they perform normally; tested the next day they perform at chance. Which conclusion follows?',
      options: [
        { id: 'a', text: 'Short-term memory depends on new protein synthesis, long-term memory does not' },
        { id: 'b', text: 'Consolidation into long-term memory requires new protein synthesis, while short-term memory does not' },
        { id: 'c', text: 'The drug erased memories consolidated before the injection' },
        { id: 'd', text: 'Retrieval, not storage, was blocked by the drug' },
      ],
      answerId: 'b',
      explanation: 'Intact performance minutes after training shows that the labile short-term trace, which is reverberating circuit activity needing no structural change, was untouched. Failure the next day shows that the conversion step did not happen. Consolidation into long-term memory depends on transcription and translation building new receptors, terminals and spines, and a protein synthesis inhibitor given inside the window prevents exactly that. It cannot dismantle memories already consolidated before the injection, which is why the same drug given a day later has no effect.',
      tests: 'lecture',
    },
  ],
};

export default ghpLearningMemory;
