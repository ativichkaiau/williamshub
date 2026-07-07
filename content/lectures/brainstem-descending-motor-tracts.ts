import type { Lecture } from '../../lib/types';

export const brainstemDescendingMotorTracts: Lecture = {
  id: 'brainstem-descending-motor-tracts',
  title: 'Brainstem Motor Centres & Descending Tracts',
  system: 'neuro',
  source: 'L11 — Brainstem Motor Centers',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L11 Brainstem Motor' },
    { kind: 'mechanism', label: 'Extrapyramidal tracts' },
    { kind: 'exam', label: 'Posture & tone' },
  ],

  highYield: [
    '**Alongside the corticospinal tract (fine voluntary movement), several BRAINSTEM ("extrapyramidal") descending tracts control POSTURE, TONE, balance and gross/automatic movements.** They act mainly on axial and proximal muscles and provide the postural background on which skilled limb movement is built.',
    'The four brainstem motor tracts to know: VESTIBULOSPINAL (from vestibular nuclei) → balance and antigravity EXTENSOR tone; RETICULOSPINAL (from the reticular formation) → posture, locomotion and modulation of tone; RUBROSPINAL (from the red nucleus) → flexor tone of the upper limbs; TECTOSPINAL (from the superior colliculus) → reflex head/eye turning to visual/auditory stimuli.',
    '**These tracts explain abnormal posturing in severe brain injury: DECORTICATE posturing (flexion of the arms — lesion ABOVE the red nucleus, rubrospinal flexor drive preserved) versus DECEREBRATE posturing (extension of the arms — lesion BELOW the red nucleus, unopposed vestibulospinal/reticulospinal extensor drive).** Decerebrate posturing is the more caudal (worse) lesion.',
    '**The reticular formation is also the source of the reticulospinal system and links to the ARAS (arousal — [[reticular-activating-system-consciousness]]).** The propriospinal system (short intersegmental spinal connections) coordinates activity between spinal segments (e.g. for locomotor pattern generation).',
    '**The take-home: the corticospinal tract does fine voluntary movement, while the brainstem tracts set POSTURE and TONE (vestibulospinal/reticulospinal = extensor/postural; rubrospinal = flexor; tectospinal = orienting reflexes).** Decorticate (flexor, higher lesion) vs decerebrate (extensor, lower lesion) posturing is the high-yield clinical correlate ([[motor-system-corticospinal-control]]).',
  ],

  mechanism: {
    title: 'Brainstem tracts set posture/tone (vestibulo/reticulo/rubro/tectospinal); posturing localises the lesion',
    steps: [
      { id: 's1', label: 'Brainstem (extrapyramidal) tracts control posture, tone, balance', emphasis: 'key' },
      { id: 's2', label: 'Vestibulospinal + reticulospinal → EXTENSOR/postural (antigravity) tone', emphasis: 'key' },
      { id: 's3', label: 'Rubrospinal → FLEXOR tone (upper limb); tectospinal → orienting reflexes', emphasis: 'key' },
      { id: 's4', label: 'Decorticate (arm flexion) = lesion ABOVE red nucleus', emphasis: 'danger' },
      { id: 's5', label: 'Decerebrate (arm extension) = lesion BELOW red nucleus (more caudal/worse)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Antigravity/extensor postural tone', mechanism: 'Vestibulospinal and reticulospinal tracts', significance: 'key' },
    { sign: 'Reflex head/eye turning toward a stimulus', mechanism: 'Tectospinal tract (superior colliculus)', significance: 'supportive' },
    { sign: 'Decorticate posturing (arm flexion)', mechanism: 'Lesion above the red nucleus (rubrospinal flexor preserved)', significance: 'key' },
    { sign: 'Decerebrate posturing (arm extension)', mechanism: 'Lesion below the red nucleus (unopposed extensor drive)', significance: 'key' },
    { sign: 'Coordination between spinal segments for locomotion', mechanism: 'Propriospinal system', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The tracts providing extensor/postural (antigravity) tone', meaning: 'Vestibulospinal and reticulospinal' },
    { clue: 'The tract for reflex orienting of the head/eyes', meaning: 'Tectospinal (from the superior colliculus)' },
    { clue: 'The posturing indicating a lesion above the red nucleus', meaning: 'Decorticate (arm flexion)' },
    { clue: 'The posturing indicating a lesion below the red nucleus', meaning: 'Decerebrate (arm extension) — more caudal/worse' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The brainstem motor tracts provide the postural/tone background for the fine voluntary movement of [[motor-system-corticospinal-control]]; decorticate vs decerebrate posturing localises the level of a severe brain injury (a coma exam point — [[reticular-activating-system-consciousness]]). The reticular formation links to arousal, and these tracts run through the brainstem anatomy of [[brainstem-anatomy-organization]].' },
  ],

  mnemonics: [
    { hook: 'Posturing: "decORticate = flexOR (above red nucleus); decErebratE = Extend (below, worsE)"', expansion: ['Decerebrate = more caudal lesion', 'Rubrospinal = flexor drive'] },
    { hook: 'Postural tracts: "Vestibulo + Reticulo = extend/posture; Rubro = flex; Tecto = turn"', expansion: ['Axial/proximal muscles', 'Corticospinal = fine voluntary'] },
  ],

  traps: [
    {
      questionCategory: 'Decorticate vs decerebrate posturing',
      wrongInstinct: 'Decerebrate (extensor) posturing indicates a less severe, higher lesion than decorticate posturing',
      rightAnswer: 'DECEREBRATE (arm EXTENSION) posturing reflects a MORE CAUDAL lesion (below the red nucleus) and is generally WORSE than DECORTICATE (arm FLEXION) posturing (lesion above the red nucleus); a change from decorticate to decerebrate signals deterioration',
      why: 'The level of the lesion determines which brainstem drives are unopposed; the more caudal decerebrate pattern (extensor) indicates deeper brainstem involvement and a poorer prognosis than decorticate.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Vestibulospinal and reticulospinal tracts predominantly influence:',
      options: [
        { id: 'a', text: 'Fine finger movements' },
        { id: 'b', text: 'Posture, balance and antigravity (extensor) muscle tone' },
        { id: 'c', text: 'Conscious sensation' },
        { id: 'd', text: 'Language production' },
      ],
      answerId: 'b',
      explanation: 'The brainstem (extrapyramidal) tracts — vestibulospinal and reticulospinal — control posture, balance and antigravity extensor tone in axial/proximal muscles, providing the background for the fine voluntary movement of the corticospinal tract.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Decerebrate (extensor) posturing, compared with decorticate (flexor) posturing, indicates a lesion that is:',
      options: [
        { id: 'a', text: 'Above the red nucleus and less severe' },
        { id: 'b', text: 'Below the red nucleus and generally more severe' },
        { id: 'c', text: 'In the cerebellum' },
        { id: 'd', text: 'In the spinal cord only' },
      ],
      answerId: 'b',
      explanation: 'Decorticate posturing (arm flexion) reflects a lesion above the red nucleus; decerebrate posturing (arm extension) reflects a more caudal lesion below the red nucleus with unopposed extensor drive, and is generally the more severe finding.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default brainstemDescendingMotorTracts;
