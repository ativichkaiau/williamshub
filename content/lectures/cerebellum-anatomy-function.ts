import type { Lecture } from '../../lib/types';
import { CEREBELLUM_ZONES } from '../../lib/figures';

export const cerebellumAnatomyFunction: Lecture = {
  id: 'cerebellum-anatomy-function',
  title: 'The Cerebellum',
  system: 'neuro',
  source: 'L3 — Cerebellum',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L3 Cerebellum' },
    { kind: 'mechanism', label: 'Coordination' },
    { kind: 'exam', label: 'Ipsilateral signs' },
  ],

  highYield: [
    '**The cerebellum COORDINATES and TIMES movement (comparing the intended movement with what actually happened and correcting errors) — it does NOT initiate movement or directly drive muscles.** It also regulates balance, posture, muscle tone and motor learning. Damage causes clumsy, uncoordinated movement (ataxia), not paralysis.',
    '**Three functional zones map to three jobs. VESTIBULOCEREBELLUM (flocculonodular lobe) → balance and eye movements (lesion: truncal ataxia, nystagmus). SPINOCEREBELLUM (vermis/paravermis) → posture, gait and tone (lesion: gait ataxia). CEREBROCEREBELLUM (lateral hemispheres) → planning and coordination of skilled limb movement (lesion: limb ataxia, dysmetria, intention tremor).**',
    '**Cerebellar signs are IPSILATERAL to the lesion** — because the cerebellar output crosses to the opposite cortex and the corticospinal tract crosses again ("double cross"), so the net effect is on the same side. This is a critical localising rule (contrast the contralateral signs of most cortical/corticospinal lesions).',
    '**The classic cerebellar signs = "DANISH": Dysdiadochokinesia (impaired rapid alternating movements), Ataxia, Nystagmus, Intention tremor (worsens toward a target), Slurred/Scanning speech, Hypotonia** — plus dysmetria (past-pointing) and a broad-based unsteady gait. Circuitry: input via inferior/middle peduncles, output (dentate → thalamus → cortex) via the superior peduncle.',
    '**Common causes: alcohol (vermian degeneration → gait ataxia), stroke, tumour (e.g. medulloblastoma in children), multiple sclerosis, and hereditary ataxias.** The take-home: the cerebellum makes movement SMOOTH and ACCURATE; its lesions cause ipsilateral ataxia/incoordination (clinical detail in HNS-2 — [[basal-ganglia-cerebellum]]).',
  ],

  mechanism: {
    title: 'Coordinates/times movement (not initiation); 3 zones; ipsilateral signs',
    steps: [
      { id: 's1', label: 'Cerebellum coordinates/times movement (compares intended vs actual)', emphasis: 'key' },
      { id: 's2', label: 'Vestibulocerebellum = balance/eye (truncal ataxia, nystagmus)', emphasis: 'key' },
      { id: 's3', label: 'Spinocerebellum = posture/gait/tone (gait ataxia)', emphasis: 'key' },
      { id: 's4', label: 'Cerebrocerebellum = skilled limb movement (dysmetria, intention tremor)', emphasis: 'key' },
      { id: 's5', label: 'Signs are IPSILATERAL (output double-crosses)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Intention tremor (worsening toward a target) + dysmetria', mechanism: 'Cerebrocerebellar (lateral hemisphere) lesion', significance: 'key' },
    { sign: 'Broad-based gait ataxia', mechanism: 'Spinocerebellar (vermis) lesion (e.g. alcohol)', significance: 'key' },
    { sign: 'Truncal ataxia + nystagmus', mechanism: 'Vestibulocerebellar (flocculonodular) lesion', significance: 'key' },
    { sign: 'Signs on the same side as the lesion', mechanism: 'Cerebellar output double-crosses (ipsilateral)', significance: 'key' },
    { sign: 'Dysdiadochokinesia and scanning speech', mechanism: 'Cerebellar incoordination (DANISH signs)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The core function of the cerebellum', meaning: 'Coordinating and timing movement (not initiating it)' },
    { clue: 'The side of cerebellar signs relative to the lesion', meaning: 'Ipsilateral (same side)' },
    { clue: 'The zone whose lesion causes gait ataxia', meaning: 'Spinocerebellum (vermis)' },
    { clue: 'The mnemonic for cerebellar signs', meaning: 'DANISH (dysdiadochokinesia, ataxia, nystagmus, intention tremor, slurred speech, hypotonia)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Cerebellar lesions cause ipsilateral ataxia/incoordination (not weakness) — a key localising contrast with corticospinal ([[motor-system-corticospinal-control]]) and basal-ganglia ([[basal-ganglia-circuitry]]) disorders. It coordinates the movement those systems drive; clinical cerebellar disease is in HNS-2 ([[basal-ganglia-cerebellum]]). Vermian gait ataxia is a classic alcohol effect.' },
  ],

  mnemonics: [
    { hook: 'Cerebellar signs "DANISH": Dysdiadochokinesia, Ataxia, Nystagmus, Intention tremor, Slurred speech, Hypotonia', expansion: ['Plus dysmetria (past-pointing)', 'IPSILATERAL signs'] },
    { hook: 'Zones: "Vestibulo = balance, Spino = gait, Cerebro = skilled limbs"', expansion: ['Vermis = midline/gait', 'Hemispheres = limb coordination'] },
  ],

  traps: [
    {
      questionCategory: 'Laterality of cerebellar signs',
      wrongInstinct: 'A cerebellar lesion causes signs on the opposite side of the body, like a cortical lesion',
      rightAnswer: 'Cerebellar signs are IPSILATERAL (same side as the lesion) because the cerebellar output crosses to the contralateral cortex and the corticospinal tract crosses again — the double crossing nets out to the same side',
      why: 'The "double cross" is what makes cerebellar localisation different from most cortical/corticospinal lesions; expecting contralateral signs mislocalises the lesion to the wrong hemisphere.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient has an intention tremor, dysmetria (past-pointing) and dysdiadochokinesia of the right arm. The lesion is in the:',
      options: [
        { id: 'a', text: 'Left cerebellar hemisphere' },
        { id: 'b', text: 'Right cerebellar hemisphere' },
        { id: 'c', text: 'Right motor cortex' },
        { id: 'd', text: 'Left basal ganglia' },
      ],
      answerId: 'b',
      explanation: 'Cerebellar signs are ipsilateral to the lesion, so right-arm incoordination (intention tremor, dysmetria, dysdiadochokinesia) localises to the right cerebellar hemisphere (cerebrocerebellum).',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The primary role of the cerebellum in movement is to:',
      options: [
        { id: 'a', text: 'Initiate voluntary movement' },
        { id: 'b', text: 'Coordinate and time movement, correcting errors (making it smooth and accurate)' },
        { id: 'c', text: 'Directly drive muscle contraction' },
        { id: 'd', text: 'Select which movement to make' },
      ],
      answerId: 'b',
      explanation: 'The cerebellum compares intended with actual movement and corrects errors, coordinating timing, balance and skilled movement; it does not initiate movement (cortex/basal ganglia) or directly drive muscles (corticospinal tract → LMN).',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Cerebellum — functional zones', svg: CEREBELLUM_ZONES, caption: 'Vestibulo-/spino-/cerebro-cerebellum, their lesions, the DANISH signs and ipsilateral rule.' },
  ],
};

export default cerebellumAnatomyFunction;
