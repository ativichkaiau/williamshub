import type { Lecture } from '../../lib/types';

export const ghpReceptorAdaptationIntensity: Lecture = {
  id: 'ghp-receptor-adaptation-intensity',
  title: 'Receptor Adaptation & the Coding of Stimulus Intensity',
  system: 'neuro',
  source: 'Ch 46 — Sensory Receptors & Neuronal Circuits for Processing Information',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Neurophysiology' },
    { kind: 'lecture', label: 'Ch 46 Adaptation & Intensity' },
    { kind: 'mechanism', label: 'Viscoelastic capsule · accommodation' },
    { kind: 'exam', label: 'Tonic vs phasic · Weber-Fechner' },
  ],

  highYield: [
    '**Every receptor adapts; the rate of adaptation is the design decision.** The range runs from a Pacinian corpuscle that falls silent within a few hundredths of a second of a maintained indentation to a nociceptor or arterial chemoreceptor that barely adapts across hours. Fast-adapting equals **phasic** equals rate receptor; slow-adapting equals **tonic** equals status receptor. Naming which one a given ending is, and saying why that suits its job, is the whole exam question.',
    '**Tonic receptors report where you are, not what just changed.** They discharge for as long as the stimulus lasts — many for hours or days — and their output is a running readout of a regulated variable: muscle spindles and Golgi tendon organs for limb position and load, Merkel discs and Ruffini endings for sustained pressure and skin stretch, the maculae for head tilt, baroreceptors for arterial pressure, nociceptors for continuing injury. Anything the brain must hold at a set point needs a tonic sensor.',
    '**Phasic receptors report rate of change and are therefore predictive.** Pacinian corpuscles, Meissner corpuscles and hair-end organs fire a burst when the stimulus arrives, often a second burst when it is withdrawn (the **off response**), and are silent in between. Because the discharge is proportional to how fast things are changing, the CNS can extrapolate where a limb or an object will be a moment from now. A rate signal is a short-range prediction — which is why rapid movement is felt vividly while a motionless weight in the palm is barely noticed.',
    '**Pacinian adaptation has two mechanisms on two time scales, and the exam wants both.** The fast one is **mechanical**: the viscoelastic lamellated capsule redistributes its fluid within a few hundredths of a second so the deforming force is no longer applied asymmetrically to the core, and the receptor potential collapses even though the external compression is unchanged. The slow one is **electrical**: accommodation of the terminal membrane itself, essentially progressive Na⁺ channel inactivation, over seconds. Strip the capsule away and the fast component vanishes — the naked core fibre still adapts, but slowly.',
    '**Intensity is coded twice over: frequency within a fibre, and the number of fibres recruited.** A single fibre runs from a few impulses per second up to at most a few hundred (an absolute ceiling near a thousand), so frequency alone cannot carry the whole range. Stronger stimuli also spread across more endings and recruit parallel fibres — **spatial or multiple-fibre summation** — so the size of the responding population is itself a code for intensity. Temporal and spatial summation together carry the dynamic range.',
    '**The Weber-Fechner and power relations exist because the fibre bandwidth is small and the world is not.** The just-noticeable difference is roughly a constant fraction of the background, so interpreted intensity tracks the logarithm — more accurately a fractional power — of the physical stimulus. That compression is what lets one system span roughly **10¹² in sound energy** or of the order of **10¹⁰ in ambient light** using a firing rate that varies only a few hundredfold. The exception is diagnostic: **pain has an exponent greater than 1**, so it expands rather than compresses — a doubling of tissue damage must feel like more than a doubling.',
  ],

  mechanism: {
    title: 'Why a maintained stimulus fades, and how what remains is scaled',
    steps: [
      { id: 's1', label: 'Stimulus applied → receptor potential at peak → firing frequency maximal' },
      { id: 's2', label: 'Viscoelastic capsule redistributes fluid in hundredths of a second → core no longer distorted', emphasis: 'key' },
      { id: 's3', label: 'Terminal membrane accommodates over seconds via Na⁺ channel inactivation', emphasis: 'key' },
      { id: 's4', label: 'Phasic ending falls silent under a steady load; tonic ending settles to a plateau rate', emphasis: 'key' },
      { id: 's5', label: 'Intensity carried as frequency in each fibre plus the number of fibres recruited', emphasis: 'key' },
      { id: 's6', label: 'Log or power compression maps a vast stimulus range onto a narrow firing range' },
    ],
  },

  examFindings: [
    { sign: 'A watch strap is felt when it goes on and is unnoticed minutes later', mechanism: 'Rapidly adapting cutaneous mechanoreceptors stop firing under an unchanging indentation', significance: 'key' },
    { sign: 'Pain from an unrelieved pressure sore does not fade with time', mechanism: 'Nociceptors adapt very little — the alarm must persist while the threat persists', significance: 'key' },
    { sign: 'Joint position sense is preserved when a limb is held motionless for minutes', mechanism: 'Slowly adapting spindle and Ruffini endings keep discharging at a plateau rate', significance: 'key' },
    { sign: 'A decapsulated Pacinian corpuscle adapts over seconds instead of hundredths of a second', mechanism: 'The fast component is capsule viscoelasticity; only the slow membrane accommodation remains', significance: 'key' },
    { sign: 'A burst of impulses when a stimulus is removed as well as when it is applied', mechanism: 'The off response — the capsule springs back and transiently re-distorts the core fibre', significance: 'supportive' },
    { sign: 'A candle is obvious in a dark room and invisible in daylight', mechanism: 'The just-noticeable difference scales with the background — logarithmic compression of intensity', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Receptor that fires only while the stimulus is changing', meaning: 'Phasic (rapidly adapting) — a rate, movement or predictive receptor' },
    { clue: 'Receptor that keeps firing for hours at a rate set by the stimulus level', meaning: 'Tonic (slowly adapting) — spindle, Ruffini, macula, baroreceptor, nociceptor' },
    { clue: 'Structure responsible for the fastest phase of Pacinian adaptation', meaning: 'The viscoelastic lamellated capsule redistributing fluid off the core fibre' },
    { clue: 'Mechanism of the slow, capsule-independent phase of adaptation', meaning: 'Accommodation of the terminal membrane — progressive Na⁺ channel inactivation' },
    { clue: 'Second code for intensity once a single fibre approaches its rate ceiling', meaning: 'Spatial (multiple-fibre) summation — recruitment of more parallel fibres' },
    { clue: 'Modality whose power-function exponent exceeds 1', meaning: 'Pain — perceived intensity grows faster than the stimulus rather than being compressed' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Adaptation rate is the single best predictor of what a receptor is for, so the classification is a shortcut to function rather than a list to memorise. Anything feeding a homeostatic loop or a postural reflex must be tonic; anything reporting texture, vibration or flutter must be phasic. The transduction machinery that all of this modulates is set out in [[ghp-sensory-receptors-transduction]], and the tonic receptors that dominate the reflex loops are covered in [[proprioceptors-muscle-spindle-reflexes]].' },
    { logic: 'Where it is examined', detail: 'Expect a vignette that names an ending and asks whether the sensation would persist, or one that names a persisting sensation and asks which ending must be responsible. The stated exception is pain, which barely adapts and whose exponent exceeds 1 — see [[pain-nociception-modulation]]. Once the signal has been coded, the circuits that sharpen and prolong it are in [[ghp-neuronal-circuits-processing]].' },
  ],

  mnemonics: [
    {
      hook: 'TONIC = TONE = how things ARE; PHASIC = PHASE CHANGE = that things CHANGED',
      expansion: [
        'Tonic: spindle, Golgi tendon organ, Merkel, Ruffini, macula, baroreceptor, nociceptor',
        'Phasic: Pacinian, Meissner, hair-end organ',
        'Tonic answers where am I; phasic answers what just moved',
      ],
    },
    {
      hook: 'Two adaptations in the Pacinian: FLUID fast, MEMBRANE slow',
      expansion: [
        'Fluid — capsule viscoelasticity, hundredths of a second, abolished by decapsulation',
        'Membrane — accommodation and Na⁺ inactivation, seconds, survives decapsulation',
        'Removal of the stimulus lets the capsule rebound, giving the off response',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Why the Pacinian corpuscle stops firing under a maintained load',
      wrongInstinct: 'The fibre becomes refractory or exhausts its transmitter',
      rightAnswer: 'The viscoelastic capsule redistributes its fluid so the core is no longer asymmetrically deformed',
      why: 'The fast phase of adaptation is mechanical, not electrical — remove the capsule and it disappears while the naked core fibre still transduces perfectly well.',
    },
    {
      questionCategory: 'What the logarithmic relation buys you',
      wrongInstinct: 'Logarithmic coding is a limitation that makes the sensory system less accurate',
      rightAnswer: 'It is a deliberate trade of fine discrimination at high intensities for an enormous usable range',
      why: 'A fibre limited to a few hundred impulses per second cannot linearly encode a range of 10¹⁰ or more; compression is the only way to fit the world into the bandwidth available.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A Pacinian corpuscle is compressed and held. Firing ceases within a few hundredths of a second. The capsule is then dissected away and the bare core fibre is compressed and held directly. What happens?',
      options: [
        { id: 'a', text: 'No receptor potential at all, because the capsule performs transduction' },
        { id: 'b', text: 'A receptor potential that again disappears within hundredths of a second' },
        { id: 'c', text: 'A receptor potential that decays over several seconds rather than instantly' },
        { id: 'd', text: 'A receptor potential that no longer adapts at any time scale' },
      ],
      answerId: 'c',
      explanation: 'Adaptation here has two components. The very fast one is purely mechanical — the viscoelastic capsule shifts its fluid so the deforming force stops being applied asymmetrically to the core — and it is abolished by decapsulation. The slower one is accommodation of the terminal membrane itself, essentially progressive Na⁺ channel inactivation, and it takes seconds. The bare fibre still transduces, so option a is wrong, and it still adapts, so option d is wrong.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient stands still with eyes closed for two minutes and remains fully aware of the position of both knees, yet is entirely unaware of the socks on both feet. Which pairing explains this?',
      options: [
        { id: 'a', text: 'Both signals are carried by rapidly adapting receptors, but proprioception is amplified centrally' },
        { id: 'b', text: 'Slowly adapting spindle and joint receptors keep discharging, while rapidly adapting cutaneous receptors have fallen silent' },
        { id: 'c', text: 'Cutaneous receptors have a higher threshold than proprioceptors' },
        { id: 'd', text: 'Cutaneous receptors are inhibited by descending pathways during standing' },
      ],
      answerId: 'b',
      explanation: 'This is the tonic versus phasic distinction in one bedside observation. Muscle spindles and joint receptors are slowly adapting status receptors, so they continue to report a constant limb position indefinitely — position sense has to be continuously available. The mechanoreceptors detecting the light constant indentation of a sock are rapidly adapting rate receptors, so they signal the moment of contact and then stop. Threshold and descending inhibition are not the issue; adaptation rate is.',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'The Weber-Fechner relationship and the sensory power law describe which feature of sensory coding?',
      options: [
        { id: 'a', text: 'That perceived intensity is directly proportional to stimulus intensity across the whole range' },
        { id: 'b', text: 'That perceived intensity is compressed relative to stimulus intensity, letting a narrow firing range span a vast stimulus range' },
        { id: 'c', text: 'That receptors stop responding once a stimulus is maintained' },
        { id: 'd', text: 'That a stronger stimulus produces larger action potentials' },
      ],
      answerId: 'b',
      explanation: 'The just-noticeable difference is approximately a constant fraction of the prevailing background, so perception follows a logarithmic or fractional-power function of the physical stimulus. That compression is what allows a fibre whose firing rate varies only a few hundredfold to report sound energies spanning about 10¹² or light levels spanning around 10¹⁰. Option c describes adaptation, a separate property, and option d violates the all-or-none rule — intensity is never coded as spike amplitude. Note that pain is the standard exception, with an exponent above 1 that expands rather than compresses.',
      tests: 'lecture',
    },
  ],
};

export default ghpReceptorAdaptationIntensity;
