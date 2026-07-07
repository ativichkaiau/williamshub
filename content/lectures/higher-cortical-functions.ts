import type { Lecture } from '../../lib/types';

export const higherCorticalFunctions: Lecture = {
  id: 'higher-cortical-functions',
  title: 'Higher Cortical & Integrative Functions',
  system: 'neuro',
  source: 'L23 — Integrative Functions of the Brain',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L23 Integrative Functions' },
    { kind: 'mechanism', label: 'Association cortex & lateralisation' },
    { kind: 'exam', label: 'Neglect, agnosia, apraxia' },
  ],

  highYield: [
    '**Beyond the primary sensory/motor maps, ASSOCIATION cortex performs the "higher" integrative functions — attention, recognition, praxis, language and executive control — by binding information across regions.** These functions are LATERALISED and localise to specific association areas, so their loss produces characteristic named syndromes.',
    '**HEMISPHERIC LATERALISATION: the DOMINANT (usually LEFT) hemisphere handles LANGUAGE, calculation and skilled praxis; the NON-DOMINANT (usually RIGHT) hemisphere handles VISUOSPATIAL processing, attention to the whole environment, and prosody/emotion.** This is why LEFT lesions cause aphasia and right-sided deficits, while RIGHT parietal lesions cause left-sided NEGLECT.',
    'Classic association-cortex syndromes: NEGLECT (usually right parietal → ignoring the left side of space/body); AGNOSIA (inability to recognise despite intact primary sensation — e.g. visual agnosia, prosopagnosia = face blindness); APRAXIA (inability to perform learned skilled movements despite intact power/coordination — e.g. left parietal lesion); and the APHASIAS ([[cortical-areas-language]]).',
    '**The PREFRONTAL cortex is the seat of EXECUTIVE FUNCTION — planning, working memory, judgement, impulse control and personality; damage causes disinhibition or apathy, poor planning and personality change (the "frontal lobe syndrome", classically Phineas Gage).** The parietal association cortex builds the body schema and spatial map; the temporal association cortex underlies recognition and, with the hippocampus, memory ([[limbic-system-emotion-memory]]).',
    '**The take-home: association cortex integrates — left (dominant) = language/praxis/calculation, right = visuospatial/attention; lesions give neglect (right parietal), agnosia (recognition), apraxia (skilled movement) and executive/personality change (prefrontal).** Consciousness and attention networks are in [[consciousness-attention]]; memory in [[limbic-system-emotion-memory]]; cortical layout in [[cerebral-cortex-organization]].',
  ],

  mechanism: {
    title: 'Association cortex integrates; lateralised (L language/praxis, R visuospatial); lesions → neglect/agnosia/apraxia/executive loss',
    steps: [
      { id: 's1', label: 'Association cortex binds information for higher functions', emphasis: 'key' },
      { id: 's2', label: 'Dominant (L) = language, calculation, praxis; non-dominant (R) = visuospatial/attention', emphasis: 'key' },
      { id: 's3', label: 'Right parietal lesion → NEGLECT of the left side', emphasis: 'key' },
      { id: 's4', label: 'Agnosia = failed recognition; apraxia = failed skilled movement (power intact)', emphasis: 'key' },
      { id: 's5', label: 'Prefrontal cortex = executive function/personality (frontal lobe syndrome)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Ignoring the left half of space, food, or body', mechanism: 'Hemispatial neglect (right parietal association cortex)', significance: 'key' },
    { sign: 'Inability to recognise faces despite intact vision', mechanism: 'Prosopagnosia (visual association cortex agnosia)', significance: 'key' },
    { sign: 'Cannot mime a learned action despite normal power', mechanism: 'Apraxia (usually left parietal)', significance: 'key' },
    { sign: 'Disinhibition, poor planning, personality change', mechanism: 'Prefrontal (executive) cortex lesion', significance: 'key' },
    { sign: 'Aphasia with right-sided weakness', mechanism: 'Dominant (left) hemisphere lesion', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The syndrome of ignoring one side of space (usually left)', meaning: 'Hemispatial neglect (right parietal)' },
    { clue: 'Failure to recognise despite intact primary sensation', meaning: 'Agnosia' },
    { clue: 'Failure to perform learned movements with intact power', meaning: 'Apraxia' },
    { clue: 'The cortex responsible for executive function and personality', meaning: 'The prefrontal cortex' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Higher-function syndromes localise lesions where basic power/sensation are intact — neglect (right parietal), agnosia (recognition cortex), apraxia (left parietal), executive/personality change (prefrontal). Lateralisation predicts which hemisphere is affected (aphasia = left). These build on the primary maps of [[cerebral-cortex-organization]] and connect to memory ([[limbic-system-emotion-memory]]), language ([[cortical-areas-language]]) and the attention/consciousness networks of [[consciousness-attention]].' },
  ],

  mnemonics: [
    { hook: 'Lateralise: "Left = Language/Logic; Right = Recognition of space (neglect)"', expansion: ['Right parietal → left neglect', 'Left → aphasia + right weakness'] },
    { hook: '"AGnosia = can\'t recognise; APraxia = can\'t perform" (both with intact primary function)', expansion: ['Prosopagnosia = faces', 'Prefrontal = executive/personality'] },
  ],

  traps: [
    {
      questionCategory: 'Apraxia and agnosia vs primary deficits',
      wrongInstinct: 'A patient who cannot recognise an object or carry out an action must have a sensory or motor (power) deficit',
      rightAnswer: 'AGNOSIA (failed recognition) and APRAXIA (failed skilled movement) occur DESPITE intact primary sensation, power and coordination — they are disorders of higher cortical INTEGRATION in association cortex, not of the primary sensory or motor systems',
      why: 'These deficits localise to association cortex specifically because the primary pathways work; mistaking them for weakness or sensory loss misses the higher-order lesion and mislocalises it.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient consistently ignores objects and people on their left side and fails to eat food on the left of the plate, despite intact vision. This is most likely due to a lesion of the:',
      options: [
        { id: 'a', text: 'Left occipital cortex' },
        { id: 'b', text: 'Right parietal (association) cortex' },
        { id: 'c', text: 'Left frontal cortex' },
        { id: 'd', text: 'Cerebellum' },
      ],
      answerId: 'b',
      explanation: 'Hemispatial neglect of the left side classically follows a right (non-dominant) parietal association cortex lesion, which normally directs attention to the whole environment. Primary vision is intact — the deficit is one of attention/integration, not of the visual pathway.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Apraxia is best defined as:',
      options: [
        { id: 'a', text: 'Weakness of a limb from a corticospinal lesion' },
        { id: 'b', text: 'Inability to perform learned, skilled movements despite intact power, sensation and coordination' },
        { id: 'c', text: 'Loss of the ability to recognise objects' },
        { id: 'd', text: 'Involuntary flinging movements' },
      ],
      answerId: 'b',
      explanation: 'Apraxia is a disorder of higher motor integration — the inability to carry out learned, purposeful movements despite intact power, sensation and coordination (often from a left parietal lesion). Failure of recognition is agnosia; weakness is a primary corticospinal deficit.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default higherCorticalFunctions;
