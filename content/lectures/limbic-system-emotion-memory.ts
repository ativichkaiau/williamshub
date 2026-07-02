import type { Lecture } from '../../lib/types';

export const limbicSystemEmotionMemory: Lecture = {
  id: 'limbic-system-emotion-memory',
  title: 'Limbic System: Emotion & Memory',
  system: 'neuro',
  source: 'L18 — Limbic System',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L18 Limbic System' },
    { kind: 'mechanism', label: 'Hippocampus & amygdala' },
    { kind: 'exam', label: 'Memory & emotion lesions' },
  ],

  highYield: [
    '**The LIMBIC SYSTEM is a ring of structures on the medial temporal/deep brain that mediates EMOTION, MEMORY, motivation and autonomic/behavioural responses. Core members: the HIPPOCAMPUS, AMYGDALA, cingulate gyrus, fornix, mammillary bodies and parts of the hypothalamus/thalamus.** It links the cortex (thought) with the hypothalamus (autonomic/endocrine drive).',
    '**The HIPPOCAMPUS is essential for forming NEW DECLARATIVE (explicit) memories — consolidating short-term into long-term memory. Bilateral hippocampal damage causes ANTEROGRADE AMNESIA (cannot form new memories) while OLD memories and skills are relatively spared** (the classic patient H.M.). Long-term potentiation (LTP) here is the cellular basis of learning.',
    '**The AMYGDALA attaches EMOTIONAL significance (especially FEAR) to stimuli and drives the autonomic/behavioural fear response; bilateral damage blunts fear and emotional recognition (Klüver-Bucy: placidity, hyperorality, hypersexuality).** The PAPEZ CIRCUIT (hippocampus → fornix → mammillary bodies → anterior thalamus → cingulate → back to hippocampus) is the classic memory/emotion loop.',
    '**Clinically important: THIAMINE (B1) deficiency damages the MAMMILLARY BODIES → Wernicke-Korsakoff syndrome (confusion, ophthalmoplegia, ataxia → then dense amnesia with confabulation); the medial temporal lobe/hippocampus is an early target in ALZHEIMER disease and a common focus for temporal lobe seizures.** Olfaction feeds directly into the limbic system (no thalamic relay), explaining smell-evoked memory/emotion.',
    '**The take-home: limbic system = emotion + memory; HIPPOCAMPUS forms new declarative memories (bilateral loss → anterograde amnesia), AMYGDALA processes fear/emotion (Klüver-Bucy if lost), Papez circuit links them, mammillary bodies fail in thiamine deficiency (Korsakoff).** Higher cognition builds on this ([[higher-cortical-functions]]); the hypothalamic drive is in [[diencephalon-thalamus-hypothalamus]].',
  ],

  mechanism: {
    title: 'Limbic ring: hippocampus (new memory) + amygdala (fear/emotion) via Papez circuit; hypothalamic drive',
    steps: [
      { id: 's1', label: 'Limbic system = emotion + memory + motivation (links cortex ↔ hypothalamus)', emphasis: 'key' },
      { id: 's2', label: 'HIPPOCAMPUS forms new declarative memory (LTP = learning substrate)', emphasis: 'key' },
      { id: 's3', label: 'Bilateral hippocampal loss → ANTEROGRADE amnesia (old memory spared)', emphasis: 'danger' },
      { id: 's4', label: 'AMYGDALA = fear/emotional salience (bilateral loss → Klüver-Bucy)', emphasis: 'key' },
      { id: 's5', label: 'Papez circuit; mammillary bodies fail in thiamine deficiency (Korsakoff)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Inability to form new memories, old memories intact', mechanism: 'Bilateral hippocampal damage (anterograde amnesia)', significance: 'key' },
    { sign: 'Placidity, hyperorality, altered sexual behaviour, loss of fear', mechanism: 'Bilateral amygdala damage (Klüver-Bucy syndrome)', significance: 'key' },
    { sign: 'Confusion, ophthalmoplegia, ataxia → amnesia with confabulation', mechanism: 'Thiamine deficiency → mammillary bodies (Wernicke-Korsakoff)', significance: 'key' },
    { sign: 'Early memory loss in dementia', mechanism: 'Medial temporal/hippocampal degeneration (Alzheimer)', significance: 'key' },
    { sign: 'Smell strongly evoking memory/emotion', mechanism: 'Olfactory input direct to limbic system (no thalamic relay)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The structure essential for forming new declarative memories', meaning: 'The hippocampus' },
    { clue: 'The structure attaching fear/emotion to stimuli', meaning: 'The amygdala' },
    { clue: 'The classic limbic memory/emotion loop', meaning: 'The Papez circuit' },
    { clue: 'The limbic structure damaged in thiamine (B1) deficiency', meaning: 'The mammillary bodies (Wernicke-Korsakoff)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The limbic system explains the memory and emotional disorders seen clinically — anterograde amnesia (bilateral hippocampus), Klüver-Bucy (amygdala), and Wernicke-Korsakoff (thiamine deficiency → mammillary bodies) — and the medial temporal lobe is the early target in Alzheimer and temporal lobe epilepsy. It integrates with higher cognition ([[higher-cortical-functions]]) and the hypothalamic drive of [[diencephalon-thalamus-hypothalamus]]; thiamine links to nutrition ([[water-soluble-vitamins-trace-elements]]).' },
  ],

  mnemonics: [
    { hook: '"Hippocampus = memory (new); Amygdala = emotion (fear)"', expansion: ['Bilateral hippocampus → anterograde amnesia', 'Bilateral amygdala → Klüver-Bucy'] },
    { hook: 'Korsakoff = "mammillary bodies + thiamine" (amnesia + confabulation)', expansion: ['Papez circuit links memory/emotion', 'Give thiamine before glucose'] },
  ],

  traps: [
    {
      questionCategory: 'Anterograde amnesia after hippocampal damage',
      wrongInstinct: 'Damage to the hippocampus wipes out all of a person\'s memories, including old ones and skills',
      rightAnswer: 'Bilateral hippocampal damage mainly prevents FORMING NEW declarative memories (ANTEROGRADE amnesia) — already-consolidated OLD memories and PROCEDURAL (skill) memory are relatively PRESERVED, because the hippocampus is needed for encoding/consolidation, not for storing long-established memories',
      why: 'Recognising that the hippocampus consolidates new memories (rather than storing all memory) explains why patients like H.M. keep old memories and can still learn skills, yet cannot remember new events.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Bilateral damage to the hippocampus characteristically causes:',
      options: [
        { id: 'a', text: 'Loss of all previously stored memories only' },
        { id: 'b', text: 'Inability to form new declarative memories (anterograde amnesia), with old memories relatively spared' },
        { id: 'c', text: 'Loss of the ability to move' },
        { id: 'd', text: 'Complete loss of language' },
      ],
      answerId: 'b',
      explanation: 'The hippocampus is required to consolidate new declarative (explicit) memories, so bilateral damage causes anterograde amnesia — the inability to form new long-term memories — while older consolidated memories and procedural skills are relatively preserved (as in the patient H.M.).',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Confusion, ophthalmoplegia and ataxia progressing to a dense amnesia with confabulation in a person with chronic alcohol use points to damage of the mammillary bodies from a deficiency of:',
      options: [
        { id: 'a', text: 'Vitamin B12' },
        { id: 'b', text: 'Thiamine (vitamin B1)' },
        { id: 'c', text: 'Folate' },
        { id: 'd', text: 'Vitamin C' },
      ],
      answerId: 'b',
      explanation: 'Thiamine (B1) deficiency causes Wernicke encephalopathy (confusion, ophthalmoplegia, ataxia) and, if untreated, Korsakoff amnesia with confabulation, from damage to the mammillary bodies and medial thalamus. Thiamine must be given before glucose to avoid precipitating Wernicke encephalopathy.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default limbicSystemEmotionMemory;
