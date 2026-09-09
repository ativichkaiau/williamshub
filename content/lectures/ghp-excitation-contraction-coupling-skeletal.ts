import type { Lecture } from '../../lib/types';

export const ghpExcitationContractionCouplingSkeletal: Lecture = {
  id: 'ghp-excitation-contraction-coupling-skeletal',
  title: 'Excitation–Contraction Coupling in Skeletal Muscle',
  system: 'msk',
  source: 'Ch 7 — Neuromuscular Transmission & Excitation–Contraction Coupling',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'MSK' },
    { kind: 'lecture', label: 'Ch 7 Excitation-Contraction Coupling' },
    { kind: 'mechanism', label: 'T-tubule → DHPR → RyR1 → Ca²⁺' },
    { kind: 'exam', label: 'Malignant hyperthermia · dantrolene' },
  ],

  highYield: [
    '**E-C coupling is the translation of a membrane event into a mechanical one.** The muscle action potential runs along the sarcolemma and dives inward down the **transverse (T) tubules** — invaginations of the surface membrane whose lumen is **extracellular fluid** — so every myofibril in the fibre core is activated simultaneously. Each T-tubule flanked by two SR **terminal cisternae** forms a **triad**, sited at the **A–I junctions** (two per sarcomere in mammals).',
    '**The latent period is ~2 ms**: the delay between the muscle AP and the first rise in tension, spent on T-tubule spread, channel opening, Ca²⁺ diffusion and troponin binding. The AP lasts only 1–5 ms while the twitch it triggers lasts far longer (**~20–200 ms** by fibre type) — which is precisely why **summation and tetanus are possible** in the mechanical response but never in the electrical one.',
    '**Skeletal coupling is MECHANICAL, not chemical.** The T-tubule **dihydropyridine receptor (DHPR — an L-type Ca²⁺ channel used as a voltage sensor)** is physically tethered to the SR **ryanodine receptor (RyR1)**. Depolarisation changes DHPR conformation → the foot process pulls RyR1 open → SR Ca²⁺ pours into the cytosol. **No Ca²⁺ needs to enter from outside the cell** — the sharp contrast with cardiac muscle, where Ca²⁺-induced Ca²⁺ release is obligatory.',
    '**Ca²⁺ is the switch and troponin C is the lock.** Cytosolic Ca²⁺ rises about **100-fold (roughly 10⁻⁷ → 10⁻⁵ M)** → binds **troponin C** → the troponin–tropomyosin complex rotates → **tropomyosin uncovers the myosin-binding sites on actin** → cross-bridges cycle. At resting Ca²⁺ the sites stay covered, so **relaxation is the default state** and contraction is the actively signalled one.',
    '**Relaxation costs ATP too.** **SERCA** in the longitudinal SR pumps Ca²⁺ back (2 Ca²⁺ per ATP) and **calsequestrin** buffers it inside the cisternae, letting the SR hold far more Ca²⁺ than free solution could. Cytosolic Ca²⁺ falls, tropomyosin re-covers actin, the fibre relaxes. **No ATP → SERCA stalls and myosin cannot detach → rigor mortis** (stiff, not limp).',
    '**Clinical anchor — malignant hyperthermia.** A gain-of-function **RYR1** (occasionally CACNA1S) mutation; **volatile anaesthetics or succinylcholine** trigger uncontrolled SR Ca²⁺ release → masseter spasm and generalised rigidity, futile cross-bridge and SERCA cycling → **rising end-tidal CO₂**, hyperthermia, acidosis, rhabdomyolysis and hyperkalaemia. **Dantrolene blocks RyR1** and is the only specific antidote.',
  ],

  mechanism: {
    title: 'AP → T-tubule → DHPR pulls RyR1 → SR Ca²⁺ → troponin C → force',
    steps: [
      { id: 's1', label: 'Muscle AP spreads along the sarcolemma and into the T-tubules', emphasis: 'key' },
      { id: 's2', label: 'At the triad, the T-tubule DHPR senses depolarisation', emphasis: 'key' },
      { id: 's3', label: 'DHPR foot process mechanically opens RyR1 (no Ca²⁺ entry needed)', emphasis: 'key' },
      { id: 's4', label: 'SR Ca²⁺ floods out; cytosolic Ca²⁺ rises ~100-fold onto troponin C', emphasis: 'key' },
      { id: 's5', label: 'Tropomyosin uncovers actin → cross-bridge cycling → tension' },
      { id: 's6', label: 'RYR1 stuck open → uncontrolled release → malignant hyperthermia', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Latent period of about 2 ms between the muscle AP and the first tension', mechanism: 'Time for T-tubule spread, RyR1 opening, Ca²⁺ diffusion and troponin binding', significance: 'key' },
    { sign: 'A skeletal fibre still twitches in a Ca²⁺-free bath, while cardiac muscle stops', mechanism: 'Skeletal coupling is mechanical DHPR-to-RyR1; cardiac needs Ca²⁺-induced Ca²⁺ release', significance: 'key' },
    { sign: 'Masseter spasm, generalised rigidity and a climbing end-tidal CO2 under halothane', mechanism: 'RYR1 gain of function → uncontrolled SR Ca²⁺ → futile ATP burn and heat', significance: 'key' },
    { sign: 'Dantrolene aborts the crisis while deepening anaesthesia does not', mechanism: 'The fault lies downstream of nerve and end plate — in the SR release channel itself', significance: 'supportive' },
    { sign: 'Rigor mortis: stiff, unrelaxable muscle after death', mechanism: 'ATP exhausted → SERCA fails and myosin heads cannot detach', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Invagination of the surface membrane carrying the AP into the fibre core', meaning: 'Transverse (T) tubule, lumen continuous with ECF' },
    { clue: 'Voltage sensor of the T-tubule membrane', meaning: 'Dihydropyridine receptor (L-type Ca²⁺ channel, CACNA1S)' },
    { clue: 'SR channel pulled open by the DHPR foot process', meaning: 'Ryanodine receptor type 1 (RyR1)' },
    { clue: 'Ca²⁺-binding buffer inside the SR lumen', meaning: 'Calsequestrin' },
    { clue: 'Gene most often mutated in malignant hyperthermia', meaning: 'RYR1' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'E-C coupling is the point where an electrical signal becomes force — and where anaesthesia can kill. **Malignant hyperthermia** is a pure E-C coupling disease, treated by shutting RyR1 with **dantrolene**, and it explains why relaxation, not only contraction, consumes ATP. Upstream trigger: [[ghp-neuromuscular-junction]]. The machinery it switches on: [[ghp-sarcomere-sliding-filament]]. Fuel supply and fatigue: [[ghp-muscle-energetics-fibre-types]].' },
    { logic: 'The three muscle types compared', detail: '**Skeletal:** all activator Ca²⁺ from SR, mechanical DHPR–RyR1 coupling, troponin C, fast twitch, no gap junctions. **Cardiac:** Ca²⁺ entry triggers Ca²⁺-induced Ca²⁺ release, troponin C, long plateau ([[cardiac-action-potential]]). **Smooth:** largely extracellular Ca²⁺ and **no troponin at all** — calmodulin and MLCK instead ([[ghp-smooth-muscle-contraction]]). The MedCMU version of this same chain: [[excitation-contraction-coupling]].' },
  ],

  mnemonics: [
    { hook: 'T-tubule → DHPR → RyR1 → Ca²⁺ → troponin C → contract; SERCA → relax', expansion: ['Skeletal pulls the SR gate open mechanically', 'Cardiac needs calcium to trigger calcium'] },
    { hook: 'MH = Muscle Heats: RYR1 stuck open, Dantrolene shuts it', expansion: ['Triggers: volatile anaesthetics and succinylcholine', 'First signs: masseter spasm and a rising end-tidal CO2'] },
  ],

  traps: [
    {
      questionCategory: 'Source of activator Ca²⁺',
      wrongInstinct: 'Like cardiac muscle, skeletal muscle needs Ca²⁺ entry from the extracellular fluid to contract',
      rightAnswer: 'Skeletal muscle takes all of its activator Ca²⁺ from the SR, through direct mechanical DHPR-to-RyR1 coupling',
      why: 'Remove extracellular Ca²⁺ and skeletal twitches persist while cardiac muscle stops within a few beats.',
    },
    {
      questionCategory: 'What fails first when ATP runs out',
      wrongInstinct: 'Without ATP the muscle goes limp, because cross-bridges can no longer form',
      rightAnswer: 'Without ATP the muscle goes stiff — myosin cannot detach and SERCA cannot clear cytosolic Ca²⁺',
      why: 'ATP binding is what releases the cross-bridge, so contraction needs ATP to end, not only to begin.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Ryanodine, which locks the RyR1 channel, is applied to an isolated skeletal muscle fibre. Nerve stimulation now produces a normal muscle action potential but no contraction. The step that has been blocked is:',
      options: [
        { id: 'a', text: 'ACh release at the motor end plate' },
        { id: 'b', text: 'Propagation of the action potential down the T-tubule' },
        { id: 'c', text: 'Ca²⁺ release from the sarcoplasmic reticulum' },
        { id: 'd', text: 'ATP binding to the myosin head' },
      ],
      answerId: 'c',
      explanation: 'A normal recorded muscle AP proves the nerve, end plate and sarcolemma are all intact, and the T-tubule is simply continuous with that sarcolemma. Ryanodine acts on the SR release channel itself, so the DHPR still moves but no Ca²⁺ reaches troponin C. This is electromechanical uncoupling: excitation without contraction.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Twenty minutes into a halothane anaesthetic with succinylcholine, a teenager develops masseter rigidity, generalised stiffness, tachycardia, an end-tidal CO2 of 70 mmHg and a rising core temperature. The specific antidote works by:',
      options: [
        { id: 'a', text: 'Blocking the nicotinic receptor at the motor end plate' },
        { id: 'b', text: 'Inhibiting the ryanodine receptor and stopping SR Ca²⁺ release' },
        { id: 'c', text: 'Inhibiting SERCA so that Ca²⁺ is trapped inside the SR' },
        { id: 'd', text: 'Blocking L-type Ca²⁺ channels to prevent Ca²⁺ entry' },
      ],
      answerId: 'b',
      explanation: 'This is malignant hyperthermia: a RYR1 channel held open floods the cytosol with SR Ca²⁺, so cross-bridges and SERCA cycle without pause, burning ATP and generating heat and CO2. Dantrolene blocks RyR1. Neuromuscular blockers cannot help because the fault is downstream of the end plate; inhibiting SERCA would raise cytosolic Ca²⁺ further; and skeletal coupling needs no Ca²⁺ entry, so Ca²⁺-channel blockers are useless here.',
      tests: 'treatment',
    },
    {
      id: 'q3',
      stem: 'The transverse tubules of skeletal muscle are best described as:',
      options: [
        { id: 'a', text: 'Closed intracellular stores continuous with the lumen of the sarcoplasmic reticulum' },
        { id: 'b', text: 'Invaginations of the surface membrane whose lumen is continuous with extracellular fluid' },
        { id: 'c', text: 'Gap junctions linking adjacent fibres into a functional syncytium' },
        { id: 'd', text: 'Longitudinal channels that pump Ca²⁺ back after contraction' },
      ],
      answerId: 'b',
      explanation: 'T-tubules are infoldings of the sarcolemma, so their contents are extracellular; that is how a surface action potential reaches the fibre core and activates every myofibril at once. Closed intracellular stores are the SR terminal cisternae, gap junctions belong to cardiac and unitary smooth muscle, and Ca²⁺ re-uptake is performed by SERCA in the longitudinal SR.',
      tests: 'exam',
    },
  ],
};

export default ghpExcitationContractionCouplingSkeletal;
