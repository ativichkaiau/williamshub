import type { Lecture } from '../../lib/types';

export const diencephalonThalamusHypothalamus: Lecture = {
  id: 'diencephalon-thalamus-hypothalamus',
  title: 'Diencephalon: Thalamus & Hypothalamus',
  system: 'neuro',
  source: 'L13 — Forebrain: Diencephalon',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L13 Diencephalon' },
    { kind: 'mechanism', label: 'Relay & homeostasis' },
    { kind: 'exam', label: 'Thalamic nuclei; hypothalamic control' },
  ],

  highYield: [
    '**The DIENCEPHALON sits between the brainstem and cerebral hemispheres, around the third ventricle, and comprises the THALAMUS, HYPOTHALAMUS, epithalamus (pineal) and subthalamus.** The THALAMUS is the great SENSORY RELAY — almost all sensory information (except SMELL) is relayed through it to the cortex, and it also gates motor and limbic loops.',
    '**Key thalamic relay nuclei to know: VPL (body somatosensation — DCML/spinothalamic → sensory cortex); VPM (face + taste → sensory cortex); LGN (Lateral Geniculate → VISION → occipital cortex); MGN (Medial Geniculate → HEARING → auditory cortex); VA/VL (motor relay from basal ganglia/cerebellum → motor cortex).** The thalamus also has a role in consciousness and arousal.',
    '**The HYPOTHALAMUS is the master HOMEOSTATIC controller: it regulates TEMPERATURE, THIRST/water balance (osmoreceptors, ADH), HUNGER/satiety, the CIRCADIAN clock (suprachiasmatic nucleus), autonomic tone, and emotion — and it commands the ENDOCRINE system by controlling the PITUITARY.** "4 F\'s": Feeding, Fighting, Fleeing, and reproduction.',
    '**Hypothalamic–pituitary link: the hypothalamus releases hormones down the portal system to the ANTERIOR pituitary, and its neurons make OXYTOCIN and ADH (vasopressin) that are stored and released from the POSTERIOR pituitary.** This is the interface between the nervous and endocrine systems (clinical correlation in HNS-2 — [[limbic-hypothalamus]]).',
    '**The take-home: thalamus = sensory (and motor/limbic) RELAY to cortex (VPL body, VPM face, LGN vision, MGN hearing) — smell bypasses it; hypothalamus = homeostasis (temperature, thirst, hunger, circadian) + master control of the pituitary/autonomic system.** The thalamus receives all the ascending pathways ([[somatosensory-ascending-pathways]]); the SCN drives circadian rhythm ([[sleep-circadian-rhythms]]).',
  ],

  mechanism: {
    title: 'Thalamus = sensory/motor relay to cortex (VPL/VPM/LGN/MGN); hypothalamus = homeostasis + pituitary',
    steps: [
      { id: 's1', label: 'Thalamus relays nearly all sensation to cortex — EXCEPT smell', emphasis: 'key' },
      { id: 's2', label: 'VPL = body, VPM = face/taste, LGN = vision, MGN = hearing', emphasis: 'key' },
      { id: 's3', label: 'VA/VL relay basal-ganglia/cerebellar motor signals to motor cortex' },
      { id: 's4', label: 'Hypothalamus: temperature, thirst, hunger, circadian (SCN), autonomic, emotion', emphasis: 'key' },
      { id: 's5', label: 'Hypothalamus commands the pituitary (anterior via portal; posterior = ADH/oxytocin)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Contralateral loss of all sensory modalities + spontaneous pain', mechanism: 'Thalamic (VPL) lesion — Déjerine-Roussy syndrome', significance: 'key' },
    { sign: 'Visual relay to the occipital cortex', mechanism: 'Lateral geniculate nucleus (LGN)', significance: 'key' },
    { sign: 'Auditory relay to the temporal cortex', mechanism: 'Medial geniculate nucleus (MGN)', significance: 'supportive' },
    { sign: 'Disordered temperature/thirst/appetite, diabetes insipidus', mechanism: 'Hypothalamic dysfunction (± ADH failure)', significance: 'key' },
    { sign: 'Loss of circadian rhythm', mechanism: 'Suprachiasmatic nucleus (hypothalamic master clock)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The great sensory relay of the brain', meaning: 'The thalamus' },
    { clue: 'The one sense that does NOT relay through the thalamus', meaning: 'Smell (olfaction)' },
    { clue: 'The thalamic nucleus for vision', meaning: 'The lateral geniculate nucleus (LGN)' },
    { clue: 'The structure controlling temperature, thirst, hunger and the pituitary', meaning: 'The hypothalamus' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The thalamic relay nuclei (VPL body, VPM face, LGN vision, MGN hearing) are the last waystation before cortex — a thalamic stroke causes contralateral sensory loss ± central post-stroke pain. The hypothalamus is the nervous–endocrine interface (pituitary control; clinical correlation in HNS-2 — [[limbic-hypothalamus]]) and the homeostatic hub (thirst, temperature, the circadian SCN — [[sleep-circadian-rhythms]]). It receives the ascending pathways of [[somatosensory-ascending-pathways]].' },
  ],

  mnemonics: [
    { hook: 'Geniculates: "Lateral = Light (vision, LGN); Medial = Music (hearing, MGN)"', expansion: ['VPL = body, VPM = face', 'Smell skips the thalamus'] },
    { hook: 'Hypothalamus = "homeostasis HQ": temperature, thirst, hunger, hormones, circadian', expansion: ['SCN = master clock', 'Controls the pituitary'] },
  ],

  traps: [
    {
      questionCategory: 'The sense that bypasses the thalamus',
      wrongInstinct: 'All sensory information is relayed through the thalamus before reaching the cortex',
      rightAnswer: 'SMELL (olfaction) is the exception — olfactory input reaches the olfactory cortex DIRECTLY without a thalamic relay, whereas vision (LGN), hearing (MGN), body sensation (VPL) and taste/face (VPM) all relay through the thalamus',
      why: 'The olfactory system\'s direct cortical/limbic access (no thalamic gate) explains its strong, immediate links to memory and emotion and is a favourite exam distinction.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which sensory modality does NOT relay through the thalamus on its way to the cortex?',
      options: [
        { id: 'a', text: 'Vision' },
        { id: 'b', text: 'Hearing' },
        { id: 'c', text: 'Olfaction (smell)' },
        { id: 'd', text: 'Body somatosensation' },
      ],
      answerId: 'c',
      explanation: 'Olfaction is the exception — it projects directly to the olfactory/piriform cortex without a thalamic relay. Vision relays via the lateral geniculate, hearing via the medial geniculate, and body sensation via the VPL nucleus of the thalamus.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Regulation of body temperature, thirst, appetite and the circadian clock, together with control of the pituitary, is the role of the:',
      options: [
        { id: 'a', text: 'Thalamus' },
        { id: 'b', text: 'Hypothalamus' },
        { id: 'c', text: 'Cerebellum' },
        { id: 'd', text: 'Basal ganglia' },
      ],
      answerId: 'b',
      explanation: 'The hypothalamus is the master homeostatic centre — regulating temperature, thirst/water balance, hunger, circadian rhythm (suprachiasmatic nucleus) and autonomic tone — and it commands the endocrine system through its control of the anterior and posterior pituitary.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default diencephalonThalamusHypothalamus;
