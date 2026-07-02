import type { Lecture } from '../../lib/types';
import { CORTEX_AREAS } from '../../lib/figures';

export const cerebralCortexOrganization: Lecture = {
  id: 'cerebral-cortex-organization',
  title: 'Cerebral Cortex: Organisation',
  system: 'neuro',
  source: 'L3 — Cerebral Cortex',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L3 Cerebral Cortex' },
    { kind: 'mechanism', label: 'Layers, columns & maps' },
    { kind: 'exam', label: 'Primary vs association cortex' },
  ],

  highYield: [
    '**The cerebral cortex is the thin (~2–4 mm) sheet of grey matter folded into GYRI and SULCI to pack a large surface area into the skull. Most of it is NEOCORTEX with SIX LAYERS (I–VI); its neurons are ~80% excitatory PYRAMIDAL cells (glutamate) and ~20% inhibitory INTERNEURONS (GABA).** Layer IV receives thalamic input; layer V pyramidal cells send the main output (e.g. corticospinal).',
    '**The cortex is organised functionally into PRIMARY areas (dedicated sensory or motor maps) and ASSOCIATION areas (integrative). Key primaries: PRIMARY MOTOR (precentral gyrus, frontal), PRIMARY SOMATOSENSORY (postcentral gyrus, parietal), PRIMARY VISUAL (occipital/calcarine), PRIMARY AUDITORY (superior temporal/Heschl).** Each carries a topographic MAP (motor/sensory homunculus, retinotopy, tonotopy).',
    '**The homunculus is DISTORTED — body parts with fine control/dense innervation (hands, lips, face) occupy disproportionately large cortical territory, coarse regions (trunk, leg) small territory.** The cortex is further built of vertical FUNCTIONAL COLUMNS (e.g. ocular-dominance/orientation columns in V1) — the repeating processing unit of neocortex.',
    '**Beyond the primaries, ASSOCIATION cortex integrates: PREFRONTAL (executive function, personality, working memory), parietal association (spatial attention/body schema), and temporal association (recognition, memory).** The two hemispheres are LATERALISED — language usually left, visuospatial usually right — and connected by the CORPUS CALLOSUM ([[cerebrum-lobes-white-matter]]).',
    '**The take-home: 6-layered neocortex of pyramidal (excitatory) + interneuron (inhibitory) cells, organised into primary sensory/motor maps (distorted homunculus, columns) and integrative association areas.** The language/motor-speech maps and their lesions are in [[cortical-areas-language]]; blood supply to these areas is in [[cerebral-blood-supply]].',
  ],

  mechanism: {
    title: '6-layer neocortex (pyramidal + interneurons) → primary maps + association areas; columns; distorted homunculus',
    steps: [
      { id: 's1', label: 'Cortex = 6-layer neocortex; pyramidal (glutamate) + interneurons (GABA)', emphasis: 'key' },
      { id: 's2', label: 'Layer IV = thalamic input; layer V = main output (e.g. corticospinal)' },
      { id: 's3', label: 'Primary areas: motor (precentral), somatosensory (postcentral), visual, auditory', emphasis: 'key' },
      { id: 's4', label: 'Topographic maps (homunculus, retinotopy, tonotopy); functional columns', emphasis: 'key' },
      { id: 's5', label: 'Association cortex (prefrontal/parietal/temporal) integrates; lateralised hemispheres', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Voluntary movement map on the precentral gyrus', mechanism: 'Primary motor cortex (with motor homunculus)', significance: 'key' },
    { sign: 'Body sensation map on the postcentral gyrus', mechanism: 'Primary somatosensory cortex (sensory homunculus)', significance: 'key' },
    { sign: 'Disproportionately large hand/face cortical area', mechanism: 'Distorted homunculus (cortical magnification of fine-control regions)', significance: 'key' },
    { sign: 'Executive dysfunction, disinhibition, personality change', mechanism: 'Prefrontal (association) cortex lesion', significance: 'supportive' },
    { sign: 'Repeating vertical processing units in cortex', mechanism: 'Functional (e.g. ocular-dominance) columns', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The number of layers in neocortex', meaning: 'Six (I–VI)' },
    { clue: 'The main excitatory cell type of the cortex', meaning: 'The pyramidal cell (glutamatergic)' },
    { clue: 'The gyrus containing the primary motor cortex', meaning: 'The precentral gyrus (frontal lobe)' },
    { clue: 'Why the hand occupies a large cortical area', meaning: 'Cortical magnification of finely controlled/densely innervated parts (distorted homunculus)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Cortical organisation underlies localisation — a focal deficit maps to a primary area (motor/sensory/visual/auditory) or an association area (prefrontal, parietal neglect). The homunculus explains the distribution of stroke weakness ([[cerebral-blood-supply]], [[cortex-and-stroke]]). Language maps and aphasias are in [[cortical-areas-language]]; the lobes and connecting white matter in [[cerebrum-lobes-white-matter]].' },
  ],

  mnemonics: [
    { hook: 'Primaries: "Motor precentral, Sensory postcentral, Vision occipital, Hearing temporal"', expansion: ['6 layers; IV in, V out', 'Homunculus = distorted map'] },
    { hook: 'Cells: "Pyramidal excite (glutamate), interneurons inhibit (GABA)"', expansion: ['Columns = processing unit', 'Association = integration'] },
  ],

  traps: [
    {
      questionCategory: 'Why the homunculus is distorted',
      wrongInstinct: 'The size of a body part in the cortex reflects the physical size of that body part',
      rightAnswer: 'Cortical representation is proportional to the DENSITY of innervation and the FINENESS of control, NOT to physical size — so the hands, lips and face occupy huge territories while the trunk and legs occupy little; this cortical magnification is why the homunculus looks grotesquely distorted',
      why: 'The distortion reflects functional importance (dexterity and sensory acuity), which is why hand and face lesions cause prominent deficits and why fine-movement regions dominate the map.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The primary somatosensory cortex, which contains the sensory homunculus, is located in the:',
      options: [
        { id: 'a', text: 'Precentral gyrus (frontal lobe)' },
        { id: 'b', text: 'Postcentral gyrus (parietal lobe)' },
        { id: 'c', text: 'Calcarine sulcus (occipital lobe)' },
        { id: 'd', text: 'Superior temporal gyrus' },
      ],
      answerId: 'b',
      explanation: 'The primary somatosensory cortex lies in the postcentral gyrus of the parietal lobe and carries the sensory homunculus; the primary motor cortex is in the precentral gyrus (frontal), primary visual in the occipital calcarine cortex, and primary auditory in the superior temporal gyrus.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The principal excitatory projection neuron of the cerebral cortex is the:',
      options: [
        { id: 'a', text: 'GABAergic interneuron' },
        { id: 'b', text: 'Glutamatergic pyramidal cell' },
        { id: 'c', text: 'Astrocyte' },
        { id: 'd', text: 'Purkinje cell' },
      ],
      answerId: 'b',
      explanation: 'Pyramidal cells (glutamatergic, ~80% of cortical neurons) are the main excitatory output neurons — layer V pyramidal cells give rise to the corticospinal tract, for example. The remaining ~20% are mostly inhibitory GABAergic interneurons. Purkinje cells belong to the cerebellum.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Cortical areas', svg: CORTEX_AREAS, caption: 'Primary motor and sensory strips, visual and auditory cortex, language areas, and prefrontal association cortex on the lateral hemisphere.' },
  ],
};

export default cerebralCortexOrganization;
