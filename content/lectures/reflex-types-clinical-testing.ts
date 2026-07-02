import type { Lecture } from '../../lib/types';

export const reflexTypesClinicalTesting: Lecture = {
  id: 'reflex-types-clinical-testing',
  title: 'Reflex Types & Clinical Testing',
  system: 'physiology',
  source: 'L10 — Reflexes',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'L10 Reflexes' },
    { kind: 'mechanism', label: 'Reflex classification' },
    { kind: 'exam', label: 'UMN vs LMN' },
  ],

  highYield: [
    '**A reflex is an involuntary, stereotyped response to a stimulus, mediated by a reflex arc: receptor → afferent neuron → integrating centre → efferent neuron → effector.** Reflexes are classified by number of synapses (monosynaptic vs polysynaptic), by effector (somatic vs autonomic), and by whether they are innate or learned.',
    '**MONOSYNAPTIC reflexes have a single synapse (the stretch/deep tendon reflex — fast, precise); POLYSYNAPTIC reflexes involve interneurons (e.g. the flexor WITHDRAWAL reflex from a painful stimulus, which also produces the crossed-extensor reflex to support the opposite limb).** More synapses allow more complex, coordinated responses ([[reflex-arc-stretch-withdrawal]]).',
    '**Deep tendon (stretch) reflexes are graded clinically 0–4+: 0 = absent, 2+ = normal, 4+ = hyperactive with clonus.** They test the integrity of the reflex arc at specific spinal levels (e.g. biceps C5–6, triceps C7, knee L3–4, ankle S1) — a simple, powerful neurological screen.',
    '**The key clinical dichotomy: an UPPER MOTOR NEURON lesion causes HYPER-reflexia, increased tone (spasticity), clonus and an extensor plantar (Babinski) response; a LOWER MOTOR NEURON lesion causes HYPO-/areflexia, decreased tone (flaccidity), wasting and fasciculations.** The reflex findings localise the lesion above vs below the anterior horn cell.',
    '**Reflexes matter because they are objective, testable signs of nervous-system integrity — and their pattern localises disease.** The **Babinski sign (up-going great toe)** is normal in infants but pathological in adults (UMN lesion). From the physiology of proprioceptors ([[muscle-spindle-golgi-tendon-organ]]) to the bedside, reflex testing is where basic neurophysiology becomes clinical.',
  ],

  mechanism: {
    title: 'Reflex arc; mono- vs polysynaptic; reflex grading; UMN vs LMN patterns',
    steps: [
      { id: 's1', label: 'Arc: receptor → afferent → centre → efferent → effector', emphasis: 'key' },
      { id: 's2', label: 'Monosynaptic (stretch, fast) vs polysynaptic (withdrawal, interneurons)', emphasis: 'key' },
      { id: 's3', label: 'Deep tendon reflexes graded 0–4+; test specific spinal levels' },
      { id: 's4', label: 'UMN lesion: hyper-reflexia, spasticity, clonus, Babinski', emphasis: 'key' },
      { id: 's5', label: 'LMN lesion: hypo/areflexia, flaccidity, wasting, fasciculations', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Brisk (4+) reflexes with clonus and up-going plantar', mechanism: 'Upper motor neuron lesion', significance: 'key' },
    { sign: 'Absent reflexes with flaccid, wasted, fasciculating muscle', mechanism: 'Lower motor neuron lesion', significance: 'key' },
    { sign: 'Withdrawal from a painful stimulus + crossed extension', mechanism: 'Polysynaptic flexor-withdrawal reflex', significance: 'supportive' },
    { sign: 'Absent ankle jerk localising to S1', mechanism: 'Segmental testing of the reflex arc', significance: 'supportive' },
    { sign: 'Up-going great toe (Babinski) in an adult', mechanism: 'Pathological UMN sign (normal in infants)', significance: 'key' },
  ],

  investigations: [
    { clue: 'The components of a reflex arc', meaning: 'Receptor → afferent → centre → efferent → effector' },
    { clue: 'The reflex with only one synapse', meaning: 'The monosynaptic stretch (deep tendon) reflex' },
    { clue: 'The reflex pattern of an upper motor neuron lesion', meaning: 'Hyper-reflexia, spasticity, clonus, Babinski' },
    { clue: 'The reflex pattern of a lower motor neuron lesion', meaning: 'Hypo-/areflexia, flaccidity, wasting, fasciculations' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Reflex testing turns the proprioceptor physiology of [[muscle-spindle-golgi-tendon-organ]] and the reflex arc of [[reflex-arc-stretch-withdrawal]] into a bedside localisation tool. The UMN vs LMN pattern is one of the most used distinctions in clinical neurology; it also parallels the bladder patterns of neurogenic dysfunction seen elsewhere. Objective reflexes make the nervous-system exam reproducible.' },
  ],

  mnemonics: [
    { hook: 'UMN vs LMN: "UMN = Up (hyper-reflexia, up-going toe, spastic); LMN = Low (areflexia, flaccid, fasciculations)"', expansion: ['UMN: clonus, spasticity', 'LMN: wasting, fasciculations'] },
    { hook: 'Reflex levels: "Biceps C5-6, Triceps C7, Knee L3-4, Ankle S1"', expansion: ['Graded 0–4+ (2+ normal)', 'Babinski = UMN in adults'] },
  ],

  traps: [
    {
      questionCategory: 'Interpreting reflex changes',
      wrongInstinct: 'Weakness with absent reflexes and weakness with brisk reflexes point to the same kind of lesion',
      rightAnswer: 'ABSENT/reduced reflexes with flaccidity, wasting and fasciculations indicate a LOWER motor neuron lesion, whereas INCREASED reflexes with spasticity, clonus and a Babinski sign indicate an UPPER motor neuron lesion — the reflex pattern localises the lesion',
      why: 'Both cause weakness, but the reflex/tone pattern is what distinguishes an upper- from a lower-motor-neuron problem, directing the differential and localisation entirely differently.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Increased deep tendon reflexes, clonus, spasticity and an extensor plantar (Babinski) response indicate a lesion of the:',
      options: [
        { id: 'a', text: 'Lower motor neuron' },
        { id: 'b', text: 'Upper motor neuron' },
        { id: 'c', text: 'Muscle spindle only' },
        { id: 'd', text: 'Golgi tendon organ' },
      ],
      answerId: 'b',
      explanation: 'Loss of descending inhibition in an upper motor neuron lesion releases the stretch reflex, producing hyper-reflexia, clonus, spasticity and a Babinski sign. Lower motor neuron lesions cause the opposite (areflexia, flaccidity, wasting).',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The flexor withdrawal reflex differs from the knee-jerk reflex in that it is:',
      options: [
        { id: 'a', text: 'Monosynaptic' },
        { id: 'b', text: 'Polysynaptic, involving interneurons (and a crossed-extensor component)' },
        { id: 'c', text: 'Not a true reflex' },
        { id: 'd', text: 'Mediated by the Golgi tendon organ' },
      ],
      answerId: 'b',
      explanation: 'The withdrawal reflex is polysynaptic: nociceptor afferents act through interneurons to flex the stimulated limb and (via the crossed-extensor reflex) extend the opposite limb for support. The stretch reflex is monosynaptic.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default reflexTypesClinicalTesting;
