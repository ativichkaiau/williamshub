import type { Lecture } from '../../lib/types';
import { ASCENDING_SENSORY_PATHWAYS } from '../../lib/figures';

export const somatosensoryAscendingPathways: Lecture = {
  id: 'somatosensory-ascending-pathways',
  title: 'Somatosensory Ascending Pathways',
  system: 'neuro',
  source: 'L10 — Ascending Sensory Pathways',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L10 Ascending Pathways' },
    { kind: 'mechanism', label: 'DCML vs spinothalamic' },
    { kind: 'exam', label: 'Where each tract crosses' },
  ],

  highYield: [
    '**Somatosensory information reaches the cortex by TWO main ascending systems, each a THREE-NEURON relay to the contralateral primary sensory cortex (postcentral gyrus) via the THALAMUS (VPL).** The two carry different modalities and CROSS at different levels — the single most examined fact in sensory neuroanatomy.',
    '**DORSAL COLUMN–MEDIAL LEMNISCUS (DCML) carries FINE (discriminative) touch, VIBRATION, and CONSCIOUS PROPRIOCEPTION. First-order neuron ascends IPSILATERALLY in the dorsal columns (gracile = legs, cuneate = arms) → synapses in the MEDULLA (dorsal column nuclei) → second-order neuron DECUSSATES in the medulla as the medial lemniscus → thalamus (VPL) → cortex.**',
    '**SPINOTHALAMIC (ANTEROLATERAL) tract carries PAIN, TEMPERATURE and CRUDE touch. First-order neuron synapses in the DORSAL HORN → second-order neuron DECUSSATES within one or two segments in the spinal cord (anterior white commissure) → ascends contralaterally → thalamus (VPL) → cortex.** So it crosses almost immediately at the cord, while DCML crosses high in the medulla.',
    '**This different crossing level explains cord syndromes. BROWN-SÉQUARD (hemisection): IPSILATERAL loss of fine touch/proprioception + IPSILATERAL motor loss (uncrossed at that level), but CONTRALATERAL loss of pain/temperature (spinothalamic already crossed).** Dissociated sensory loss localises the lesion. (Clinical detail in HNS-2 — [[spinal-cord-syndromes]].)',
    '**The take-home: DCML = fine touch/vibration/proprioception, crosses in the MEDULLA; spinothalamic = pain/temperature/crude touch, crosses at the CORD. Both are three-neuron relays through the VPL thalamus to the postcentral gyrus (sensory homunculus).** Nociceptive processing and pain modulation are in [[pain-nociception-modulation]]; the receptors that feed them are in [[sensory-receptors-transduction]].',
  ],

  mechanism: {
    title: 'DCML (fine touch, crosses in medulla) vs spinothalamic (pain/temp, crosses at cord) → VPL → cortex',
    steps: [
      { id: 's1', label: 'Both = 3-neuron relays → thalamus (VPL) → postcentral gyrus (contralateral)', emphasis: 'key' },
      { id: 's2', label: 'DCML: fine touch, vibration, proprioception; ascends ipsilaterally', emphasis: 'key' },
      { id: 's3', label: 'DCML DECUSSATES in the MEDULLA (as the medial lemniscus)', emphasis: 'key' },
      { id: 's4', label: 'Spinothalamic: pain, temperature, crude touch', emphasis: 'key' },
      { id: 's5', label: 'Spinothalamic DECUSSATES at the CORD (within 1–2 segments)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Loss of vibration and proprioception (positive Romberg)', mechanism: 'Dorsal column–medial lemniscus lesion', significance: 'key' },
    { sign: 'Loss of pain and temperature', mechanism: 'Spinothalamic (anterolateral) tract lesion', significance: 'key' },
    { sign: 'Ipsilateral touch/proprioceptive loss + contralateral pain/temp loss', mechanism: 'Brown-Séquard (cord hemisection) — tracts cross at different levels', significance: 'key' },
    { sign: 'Contralateral loss of all modalities of one side', mechanism: 'Thalamic (VPL) or cortical lesion (both tracts already crossed)', significance: 'supportive' },
    { sign: 'Sensory homunculus on the postcentral gyrus', mechanism: 'Somatotopic organisation of primary sensory cortex', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The tract for fine touch, vibration and proprioception', meaning: 'Dorsal column–medial lemniscus (DCML)' },
    { clue: 'The tract for pain, temperature and crude touch', meaning: 'Spinothalamic (anterolateral) tract' },
    { clue: 'Where the DCML crosses', meaning: 'In the medulla (as the medial lemniscus)' },
    { clue: 'Where the spinothalamic tract crosses', meaning: 'At the spinal cord, within 1–2 segments (anterior white commissure)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The different crossing levels of the two systems are the key to localising sensory loss — dissociated loss (e.g. Brown-Séquard, syringomyelia) pinpoints the lesion, detailed in HNS-2 ([[spinal-cord-syndromes]]). Both relay through the VPL thalamus to the postcentral gyrus ([[cerebral-cortex-organization]]). The pain limb of the spinothalamic system and its modulation are in [[pain-nociception-modulation]]; feeding receptors in [[sensory-receptors-transduction]].' },
  ],

  mnemonics: [
    { hook: '"Dorsal column crosses in the medulla; spinothalamic crosses at the cord"', expansion: ['DCML = fine touch/vibration/proprioception', 'Spinothalamic = pain/temperature'] },
    { hook: 'Brown-Séquard: "touch/power same side, pain/temp opposite side"', expansion: ['Because they cross at different levels', 'Dissociated sensory loss'] },
  ],

  traps: [
    {
      questionCategory: 'Level of decussation of the sensory tracts',
      wrongInstinct: 'Both major sensory pathways cross at the same level, so all sensory loss is contralateral to a cord lesion',
      rightAnswer: 'The DCML (fine touch, vibration, proprioception) crosses HIGH in the MEDULLA, while the spinothalamic tract (pain, temperature) crosses almost immediately at the CORD — so a cord hemisection causes IPSILATERAL touch/proprioception loss but CONTRALATERAL pain/temperature loss (Brown-Séquard)',
      why: 'Because the two systems decussate at different levels, a single cord lesion produces dissociated, split-sided sensory loss — the classic Brown-Séquard pattern that pinpoints the lesion; assuming a common crossing level gives the wrong side.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Vibration sense and conscious proprioception are carried by the dorsal column–medial lemniscus pathway, which decussates (crosses) in the:',
      options: [
        { id: 'a', text: 'Spinal cord, at the level of entry' },
        { id: 'b', text: 'Medulla (as the medial lemniscus)' },
        { id: 'c', text: 'Midbrain' },
        { id: 'd', text: 'Thalamus' },
      ],
      answerId: 'b',
      explanation: 'The DCML first-order neuron ascends ipsilaterally in the dorsal columns and synapses in the dorsal column nuclei of the medulla; the second-order neuron then decussates in the medulla as the medial lemniscus. The spinothalamic tract, in contrast, crosses at the cord.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A spinal cord hemisection (Brown-Séquard) produces loss of pain and temperature on which side, relative to the lesion?',
      options: [
        { id: 'a', text: 'The same (ipsilateral) side' },
        { id: 'b', text: 'The opposite (contralateral) side, beginning a segment or two below the lesion' },
        { id: 'c', text: 'Both sides equally' },
        { id: 'd', text: 'Neither side' },
      ],
      answerId: 'b',
      explanation: 'The spinothalamic tract crosses within one or two segments of entry, so at a hemisection the ascending crossed fibres are damaged — causing CONTRALATERAL loss of pain and temperature (with ipsilateral loss of fine touch/proprioception and power), the dissociated Brown-Séquard pattern.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Ascending sensory pathways', svg: ASCENDING_SENSORY_PATHWAYS, caption: 'DCML (fine touch/vibration/proprioception, crosses in the medulla) vs spinothalamic (pain/temperature, crosses at the cord), both relaying through the VPL thalamus to the postcentral gyrus.' },
  ],
};

export default somatosensoryAscendingPathways;
