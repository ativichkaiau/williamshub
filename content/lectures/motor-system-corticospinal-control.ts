import type { Lecture } from '../../lib/types';
import { MOTOR_PATHWAYS } from '../../lib/figures';

export const motorSystemCorticospinalControl: Lecture = {
  id: 'motor-system-corticospinal-control',
  title: 'The Motor System & Corticospinal Tract',
  system: 'neuro',
  source: 'L9 — Motor System',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L9 Motor System' },
    { kind: 'mechanism', label: 'UMN & LMN' },
    { kind: 'exam', label: 'Corticospinal decussation' },
  ],

  highYield: [
    '**Voluntary movement is executed by a TWO-NEURON chain: an UPPER motor neuron (UMN) from the motor cortex to the spinal cord, synapsing on a LOWER motor neuron (LMN) that runs from the cord to the muscle.** The main pathway is the CORTICOSPINAL (pyramidal) tract, which carries fine, skilled, voluntary movement — especially of the distal limbs.',
    '**The corticospinal tract: primary motor cortex (precentral gyrus, motor homunculus) → internal capsule → cerebral peduncle → brainstem → at the MEDULLARY PYRAMIDS ~85% of fibres DECUSSATE (cross) to form the LATERAL corticospinal tract → descend to synapse on LMNs in the ventral horn.** Because it crosses in the medulla, a lesion above the decussation causes CONTRALATERAL weakness.',
    '**The UMN/LMN distinction is one of the most used in clinical neurology. UMN LESION → SPASTICITY, HYPER-reflexia, clonus, an up-going plantar (Babinski) and NO wasting. LMN LESION → FLACCIDITY, HYPO-/areflexia, muscle WASTING and FASCICULATIONS.** The pattern localises the lesion above vs below the anterior horn cell.',
    'Movement is a team effort: the motor cortex/corticospinal tract EXECUTES, the BASAL GANGLIA select and scale it ([[basal-ganglia-circuitry]]), the CEREBELLUM coordinates and times it ([[cerebellum-anatomy-function]]), and the brainstem tracts set posture/tone ([[brainstem-descending-motor-tracts]]). Sensory feedback and reflexes (from EHP — [[reflex-types-clinical-testing]]) complete the loop.',
    '**High-yield: corticospinal = fine voluntary movement, crosses at the medullary pyramids (lesion above → contralateral weakness); UMN (spastic, hyper-reflexic, Babinski) vs LMN (flaccid, wasting, fasciculations).** Clinical motor syndromes are in HNS-2 ([[cortex-and-stroke]], [[spinal-cord-syndromes]]).',
  ],

  mechanism: {
    title: 'Cortex → corticospinal (crosses at pyramids) → LMN → muscle; UMN vs LMN patterns',
    steps: [
      { id: 's1', label: 'Two-neuron chain: UMN (cortex→cord) → LMN (cord→muscle)', emphasis: 'key' },
      { id: 's2', label: 'Corticospinal = fine voluntary movement (distal limbs); motor homunculus', emphasis: 'key' },
      { id: 's3', label: '~85% DECUSSATE at the medullary pyramids → lateral corticospinal tract', emphasis: 'key' },
      { id: 's4', label: 'UMN lesion: spastic, hyper-reflexia, Babinski, no wasting', emphasis: 'key' },
      { id: 's5', label: 'LMN lesion: flaccid, areflexia, wasting, fasciculations', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Spasticity, hyper-reflexia, clonus, up-going plantar', mechanism: 'Upper motor neuron lesion', significance: 'key' },
    { sign: 'Flaccidity, areflexia, wasting, fasciculations', mechanism: 'Lower motor neuron lesion', significance: 'key' },
    { sign: 'Contralateral weakness from a cortical/internal-capsule lesion', mechanism: 'Corticospinal tract crosses in the medulla (below the lesion)', significance: 'key' },
    { sign: 'Both UMN and LMN signs (e.g. in ALS)', mechanism: 'Combined motor neuron degeneration', significance: 'supportive' },
    { sign: 'Weakness worst in the distal fine movements', mechanism: 'Corticospinal specialisation for skilled distal movement', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The main pathway for fine voluntary movement', meaning: 'The corticospinal (pyramidal) tract' },
    { clue: 'Where the corticospinal tract decussates', meaning: 'The medullary pyramids (~85% of fibres)' },
    { clue: 'The signs of an upper motor neuron lesion', meaning: 'Spasticity, hyper-reflexia, clonus, Babinski (no wasting)' },
    { clue: 'The signs of a lower motor neuron lesion', meaning: 'Flaccidity, areflexia, wasting, fasciculations' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The corticospinal tract and UMN/LMN distinction localise weakness (contralateral from a cortical/capsular lesion because it crosses in the medulla) — the basis of stroke and cord syndromes in HNS-2 ([[cortex-and-stroke]], [[spinal-cord-syndromes]]). It executes movement that the basal ganglia scale ([[basal-ganglia-circuitry]]), the cerebellum coordinates ([[cerebellum-anatomy-function]]) and the brainstem tracts posturally support ([[brainstem-descending-motor-tracts]]).' },
  ],

  mnemonics: [
    { hook: 'Corticospinal "crosses at the pyramids" → lesion above = contralateral weakness', expansion: ['Lateral CST = limbs', 'Motor homunculus on precentral gyrus'] },
    { hook: 'UMN = "everything Up" (tone, reflexes, toe); LMN = "everything down + wasting/fasciculations"', expansion: ['UMN: spastic, Babinski', 'LMN: flaccid, atrophy'] },
  ],

  traps: [
    {
      questionCategory: 'Localising weakness by UMN vs LMN signs',
      wrongInstinct: 'Weakness with brisk reflexes and weakness with absent reflexes indicate the same kind of lesion',
      rightAnswer: 'UMN lesions give SPASTIC weakness with HYPER-reflexia, clonus and a Babinski sign (no wasting), whereas LMN lesions give FLACCID weakness with areflexia, WASTING and fasciculations — the reflex/tone pattern localises the lesion above vs below the anterior horn cell',
      why: 'Both cause weakness, but the accompanying tone, reflexes and wasting distinguish an upper- from a lower-motor-neuron lesion, which changes the localisation and differential entirely.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A lesion of the left motor cortex causes weakness of the right side of the body because the corticospinal tract:',
      options: [
        { id: 'a', text: 'Does not cross' },
        { id: 'b', text: 'Decussates in the medullary pyramids (below the cortex)' },
        { id: 'c', text: 'Crosses in the spinal cord' },
        { id: 'd', text: 'Crosses in the midbrain' },
      ],
      answerId: 'b',
      explanation: 'Most corticospinal fibres cross at the medullary pyramids, so a lesion above this point (e.g. the motor cortex or internal capsule) produces weakness on the opposite (contralateral) side of the body.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Spasticity, hyper-reflexia and an extensor plantar (Babinski) response with no muscle wasting indicate:',
      options: [
        { id: 'a', text: 'A lower motor neuron lesion' },
        { id: 'b', text: 'An upper motor neuron lesion' },
        { id: 'c', text: 'A cerebellar lesion' },
        { id: 'd', text: 'A sensory lesion' },
      ],
      answerId: 'b',
      explanation: 'Increased tone (spasticity), hyper-reflexia, clonus and a Babinski sign, without wasting, are the signs of an upper motor neuron (corticospinal) lesion. Lower motor neuron lesions cause flaccidity, areflexia, wasting and fasciculations.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Descending motor control', svg: MOTOR_PATHWAYS, caption: 'Corticospinal tract (crosses at the pyramids), brainstem tracts, and the UMN vs LMN lesion patterns.' },
  ],
};

export default motorSystemCorticospinalControl;
