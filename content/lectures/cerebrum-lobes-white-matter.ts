import type { Lecture } from '../../lib/types';

export const cerebrumLobesWhiteMatter: Lecture = {
  id: 'cerebrum-lobes-white-matter',
  title: 'Cerebral Lobes & White Matter',
  system: 'neuro',
  source: 'L4 — Forebrain: Cerebrum',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L4 Cerebrum' },
    { kind: 'mechanism', label: 'Lobes & tract types' },
    { kind: 'exam', label: 'Internal capsule / corpus callosum' },
  ],

  highYield: [
    '**The cerebrum has FOUR lobes, each with characteristic functions: FRONTAL (motor, executive function, personality, Broca\'s speech), PARIETAL (somatosensory, spatial awareness), TEMPORAL (hearing, memory, Wernicke\'s comprehension) and OCCIPITAL (vision).** The central sulcus separates frontal from parietal; the lateral (Sylvian) fissure marks off the temporal lobe.',
    '**Beneath the cortex is WHITE MATTER (myelinated axons) organised into THREE tract types: ASSOCIATION fibres connect areas WITHIN one hemisphere (e.g. arcuate fasciculus); COMMISSURAL fibres connect the TWO hemispheres (the CORPUS CALLOSUM is the largest); PROJECTION fibres connect cortex with lower structures (ascending/descending, e.g. the internal capsule).**',
    '**The INTERNAL CAPSULE is the compact projection highway between cortex and brainstem/cord, carrying the corticospinal, corticobulbar and thalamocortical fibres in a small area — so a tiny (lacunar) lesion here causes a dense contralateral hemiparesis/hemisensory loss out of proportion to its size.** It has an anterior limb, GENU and posterior limb (motor fibres in the posterior limb/genu), supplied by lenticulostriate branches ([[cerebral-blood-supply]]).',
    '**The CORPUS CALLOSUM connects the hemispheres; its section (or agenesis) produces DISCONNECTION ("split-brain") syndromes.** The basal ganglia (caudate, putamen, globus pallidus — [[basal-ganglia-circuitry]]) are deep grey masses embedded in this white matter, related to the internal capsule and lateral ventricles.',
    '**The take-home: 4 lobes (frontal executive/motor, parietal sensory, temporal auditory/memory, occipital vision); white matter = association (within), commissural (between, corpus callosum), projection (cortex↔below, internal capsule).** The internal capsule concentrates the motor/sensory tracts (lacunar strokes); the deeper diencephalon is in [[diencephalon-thalamus-hypothalamus]].',
  ],

  mechanism: {
    title: '4 lobes + 3 white-matter tract types (association/commissural/projection); internal capsule concentrates tracts',
    steps: [
      { id: 's1', label: 'Frontal (motor/executive), parietal (sensory), temporal (hearing/memory), occipital (vision)', emphasis: 'key' },
      { id: 's2', label: 'Association fibres = within a hemisphere (e.g. arcuate fasciculus)' },
      { id: 's3', label: 'Commissural fibres = between hemispheres (CORPUS CALLOSUM, largest)', emphasis: 'key' },
      { id: 's4', label: 'Projection fibres = cortex ↔ brainstem/cord (INTERNAL CAPSULE)', emphasis: 'key' },
      { id: 's5', label: 'Internal capsule concentrates motor/sensory tracts → small lesion, big deficit', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Personality change, disinhibition, executive dysfunction', mechanism: 'Frontal lobe lesion', significance: 'key' },
    { sign: 'Contralateral neglect, apraxia, spatial disorientation', mechanism: 'Parietal lobe lesion (esp. non-dominant)', significance: 'key' },
    { sign: 'Dense contralateral hemiparesis from a tiny deep lesion', mechanism: 'Internal capsule (concentrated projection fibres) lacunar stroke', significance: 'key' },
    { sign: 'Disconnection ("split-brain") syndrome', mechanism: 'Corpus callosum section/agenesis (commissural fibres)', significance: 'supportive' },
    { sign: 'Contralateral homonymous visual field loss', mechanism: 'Occipital lobe / optic radiation lesion', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The lobe for executive function and personality', meaning: 'The frontal lobe' },
    { clue: 'The three types of cerebral white-matter fibres', meaning: 'Association (within), commissural (between), projection (cortex↔below)' },
    { clue: 'The largest commissure', meaning: 'The corpus callosum' },
    { clue: 'The compact tract whose small lesion causes a dense hemiparesis', meaning: 'The internal capsule (projection fibres)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Lobar function localises deficits (frontal executive, parietal neglect, temporal memory/language, occipital vision), and the white-matter scheme explains why an internal-capsule lacune causes a dense hemiparesis while a callosal lesion disconnects the hemispheres. The internal capsule is fed by lenticulostriate branches ([[cerebral-blood-supply]]); language tracts are in [[cortical-areas-language]]; the deep diencephalon in [[diencephalon-thalamus-hypothalamus]].' },
  ],

  mnemonics: [
    { hook: 'Lobes: "Frontal = do/decide, Parietal = feel/where, Temporal = hear/remember, Occipital = see"', expansion: ['Central sulcus splits frontal/parietal', 'Sylvian fissure = temporal'] },
    { hook: 'White matter: "Association (within), Commissural (across = callosum), Projection (up/down = capsule)"', expansion: ['Internal capsule = small lesion, big deficit', 'Motor fibres in posterior limb'] },
  ],

  traps: [
    {
      questionCategory: 'Why an internal capsule lacune is so disabling',
      wrongInstinct: 'A very small deep stroke should cause only a minor deficit',
      rightAnswer: 'The INTERNAL CAPSULE packs the entire corticospinal, corticobulbar and thalamocortical projection into a tiny cross-section, so a small (lacunar) lesion there can produce a DENSE contralateral hemiparesis and/or hemisensory loss — the deficit is out of all proportion to the lesion size',
      why: 'Because projection fibres are concentrated in the capsule (unlike the spread-out cortex), a minute lesion interrupts a huge fraction of descending/ascending traffic — hence classic pure motor/sensory lacunar syndromes.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Fibres of the corpus callosum are an example of which type of cerebral white matter?',
      options: [
        { id: 'a', text: 'Association fibres' },
        { id: 'b', text: 'Commissural fibres' },
        { id: 'c', text: 'Projection fibres' },
        { id: 'd', text: 'Lenticulostriate fibres' },
      ],
      answerId: 'b',
      explanation: 'Commissural fibres connect the two hemispheres — the corpus callosum is the largest. Association fibres connect areas within one hemisphere (e.g. the arcuate fasciculus), and projection fibres connect the cortex with lower structures (e.g. the internal capsule).',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A small lacunar infarct in the posterior limb of the internal capsule characteristically produces:',
      options: [
        { id: 'a', text: 'A mild transient sensory tingle only' },
        { id: 'b', text: 'A dense contralateral hemiparesis out of proportion to the lesion size' },
        { id: 'c', text: 'A fluent aphasia' },
        { id: 'd', text: 'Bilateral leg weakness' },
      ],
      answerId: 'b',
      explanation: 'The internal capsule concentrates the corticospinal and thalamocortical fibres into a small area, so even a tiny (lacunar) lesion interrupts a large volume of traffic and causes a dense contralateral hemiparesis (pure motor stroke) — a deficit disproportionate to the lesion size.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default cerebrumLobesWhiteMatter;
