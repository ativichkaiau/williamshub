import type { Lecture } from '../../lib/types';

export const sensoryReceptorsTransduction: Lecture = {
  id: 'sensory-receptors-transduction',
  title: 'Sensory Receptors & Transduction',
  system: 'neuro',
  source: 'L7 — Sensory Receptors',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L7 Sensory Receptors' },
    { kind: 'mechanism', label: 'Transduction & coding' },
    { kind: 'exam', label: 'Adaptation & receptor types' },
  ],

  highYield: [
    '**Sensation begins when a RECEPTOR converts (TRANSDUCES) a stimulus into a receptor (generator) potential; if it reaches threshold, action potentials are fired along the sensory nerve.** Receptors are classified by STIMULUS: MECHANO-receptors (touch, pressure, stretch, sound), THERMO-receptors (temperature), NOCI-ceptors (pain/tissue damage), CHEMO-receptors (taste, smell, blood gases) and PHOTO-receptors (light).',
    '**A stimulus is coded by four attributes: MODALITY (which receptor/labelled line — the "adequate stimulus"), INTENSITY (frequency of firing + number of receptors recruited), DURATION (adaptation), and LOCATION (which receptive field, sharpened by lateral inhibition).** Each sensory pathway is a "labelled line" — activity in it is interpreted as its own modality regardless of how it is excited.',
    '**ADAPTATION distinguishes receptor behaviour. RAPIDLY (phasically) adapting receptors respond to CHANGE/movement and fall silent during a sustained stimulus (e.g. Meissner and Pacinian corpuscles — touch/vibration). SLOWLY (tonically) adapting receptors fire throughout a sustained stimulus, signalling steady intensity (e.g. Merkel discs, Ruffini endings, muscle spindles, nociceptors).**',
    '**RECEPTIVE FIELD size sets acuity: small fields + high receptor density (fingertips, lips) → fine two-point discrimination; large fields (back) → coarse. LATERAL INHIBITION sharpens contrast and localisation.** Cutaneous mechanoreceptors: Merkel (fine touch, slow), Meissner (light touch/flutter, fast), Pacinian (vibration/deep pressure, fast), Ruffini (skin stretch, slow).',
    '**The take-home: receptors transduce stimuli and code modality, intensity, duration and location; rapidly-adapting = change detectors, slowly-adapting = steady-intensity detectors.** These receptors feed the ascending somatosensory pathways ([[somatosensory-ascending-pathways]]); nociceptors begin the pain system ([[pain-nociception-modulation]]); the membrane biophysics of the generator potential is in EHP ([[resting-membrane-potential-nernst]]).',
  ],

  mechanism: {
    title: 'Stimulus → transduction → receptor potential → AP; codes modality/intensity/duration/location',
    steps: [
      { id: 's1', label: 'Receptor transduces stimulus → receptor (generator) potential → AP', emphasis: 'key' },
      { id: 's2', label: 'Classified by stimulus: mechano-, thermo-, noci-, chemo-, photoreceptors', emphasis: 'key' },
      { id: 's3', label: 'Coding: modality (labelled line), intensity (frequency), duration, location', emphasis: 'key' },
      { id: 's4', label: 'Rapidly adapting = change/movement; slowly adapting = steady intensity', emphasis: 'key' },
      { id: 's5', label: 'Small receptive fields + high density → fine acuity; lateral inhibition sharpens' },
    ],
  },

  examFindings: [
    { sign: 'A receptor that fires only when a stimulus changes', mechanism: 'Rapidly (phasically) adapting receptor (e.g. Pacinian corpuscle)', significance: 'key' },
    { sign: 'A receptor that fires throughout a sustained stimulus', mechanism: 'Slowly (tonically) adapting receptor (e.g. Merkel disc)', significance: 'key' },
    { sign: 'Fine two-point discrimination at the fingertips', mechanism: 'Small receptive fields + high receptor density', significance: 'key' },
    { sign: 'A modality perceived regardless of how the nerve is excited', mechanism: 'Labelled-line coding (adequate stimulus)', significance: 'supportive' },
    { sign: 'Sharpened localisation and contrast', mechanism: 'Lateral inhibition', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The conversion of a stimulus into a receptor potential', meaning: 'Sensory transduction' },
    { clue: 'The four coded attributes of a stimulus', meaning: 'Modality, intensity, duration, location' },
    { clue: 'The receptor type that detects change/movement', meaning: 'Rapidly (phasically) adapting receptors' },
    { clue: 'What determines two-point discrimination acuity', meaning: 'Receptive field size and receptor density' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Receptor physiology underlies the whole somatosensory examination — modality, adaptation and receptive fields explain vibration/light-touch testing and two-point discrimination. These receptors feed the dorsal-column and spinothalamic pathways ([[somatosensory-ascending-pathways]]); nociceptors begin pain ([[pain-nociception-modulation]]); the generator potential rests on membrane biophysics ([[resting-membrane-potential-nernst]]) and receptor histology is in [[inner-ear-hair-cell-histology]].' },
  ],

  mnemonics: [
    { hook: 'Adaptation: "Rapid = detects change; Slow = detects steady state"', expansion: ['Rapid: Meissner, Pacinian', 'Slow: Merkel, Ruffini, spindle, nociceptor'] },
    { hook: 'Coding: "MILD" — Modality, Intensity, Location, Duration', expansion: ['Modality = labelled line', 'Intensity = firing frequency'] },
  ],

  traps: [
    {
      questionCategory: 'Rapidly vs slowly adapting receptors',
      wrongInstinct: 'A rapidly adapting receptor responds faster or is more sensitive than a slowly adapting one',
      rightAnswer: '"Rapidly adapting" means the receptor STOPS firing during a SUSTAINED stimulus (it signals CHANGE/onset-offset), whereas "slowly adapting" means it KEEPS firing throughout a sustained stimulus (signalling steady intensity) — adaptation refers to the decline of the response over time, not to speed or sensitivity',
      why: 'Adaptation describes how the response changes during a maintained stimulus; rapidly adapting receptors (Pacinian, Meissner) are movement/vibration detectors, slowly adapting ones (Merkel, Ruffini) report ongoing pressure — confusing this misreads what each detects.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A Pacinian corpuscle fires briskly when pressure is first applied and when it is removed, but falls silent during steady pressure. This behaviour is:',
      options: [
        { id: 'a', text: 'Slow (tonic) adaptation' },
        { id: 'b', text: 'Rapid (phasic) adaptation' },
        { id: 'c', text: 'Lateral inhibition' },
        { id: 'd', text: 'Labelled-line coding' },
      ],
      answerId: 'b',
      explanation: 'Rapidly (phasically) adapting receptors such as Pacinian and Meissner corpuscles respond to CHANGE — the onset and offset of a stimulus — and stop firing during a sustained stimulus, making them detectors of vibration and movement.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'The intensity of a sensory stimulus is encoded principally by:',
      options: [
        { id: 'a', text: 'The amplitude (height) of the action potentials' },
        { id: 'b', text: 'The frequency of action potentials and the number of receptors recruited' },
        { id: 'c', text: 'The conduction velocity of the nerve' },
        { id: 'd', text: 'The receptor’s modality' },
      ],
      answerId: 'b',
      explanation: 'Action potentials are all-or-none (constant amplitude), so intensity is coded by how FAST a receptor fires (frequency) and how MANY receptors are recruited — not by spike height. Modality is set by the labelled line, and duration by adaptation.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default sensoryReceptorsTransduction;
