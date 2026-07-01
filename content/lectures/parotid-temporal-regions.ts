import type { Lecture } from '../../lib/types';

export const parotidTemporalRegions: Lecture = {
  id: 'parotid-temporal-regions',
  title: 'Parotid & Temporal Regions',
  system: 'msk',
  source: 'L6 — Face, Scalp, Parotid & Temporal Regions',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L6 Face, Scalp & Parotid' },
    { kind: 'disease', label: 'Parotid / temporal fossa' },
    { kind: 'mechanism', label: 'Structures within the gland' },
    { kind: 'exam', label: 'Bell palsy / pterion' },
  ],

  highYield: [
    'The **parotid gland** (largest salivary gland) is drained by the **parotid (Stensen) duct**, which opens into the oral vestibule **opposite the 2nd maxillary molar**. Three structures run through the gland (superficial → deep): **facial nerve (CN VII) plexus, retromandibular vein, external carotid artery**.',
    '**The facial nerve is the most superficial structure in the parotid** — so a **parotid tumor or parotidectomy can injure CN VII → facial palsy**. Its branches: **Temporal, Zygomatic, Buccal, Marginal mandibular, Cervical** ("**To Zanzibar By Motor Car**").',
    '**Bell palsy = lower-motor-neuron facial nerve palsy** → unilateral drooping of the whole side of the face **including the forehead** (unlike an upper-motor-neuron/stroke lesion, which spares the forehead). Often idiopathic (± HSV-1).',
    '**Parotid autonomic supply**: secretomotor (parasympathetic) fibers arise from the **glossopharyngeal nerve (CN IX)** → **otic ganglion** → hitch-hike on the **auriculotemporal nerve (V3)** to the gland. Sensory to the gland = auriculotemporal + great auricular (C2,3).',
    '**Temporal region**: the **pterion** (junction of frontal, parietal, temporal, sphenoid bones) is the **thinnest part of the skull** and overlies the **middle meningeal artery** → a fracture here causes an **epidural (extradural) hematoma**. Muscles of mastication (**temporalis, masseter**) are supplied by the **mandibular nerve (V3)**.',
  ],

  mechanism: {
    title: 'Know what runs through the parotid and what lies under the pterion',
    steps: [
      { id: 's1', label: 'Parotid contents: CN VII → retromandibular v. → ECA', emphasis: 'key' },
      { id: 's2', label: 'CN VII is most superficial → palsy with tumor/surgery' },
      { id: 's3', label: 'Secretomotor: CN IX → otic ganglion → auriculotemporal' },
      { id: 's4', label: 'Pterion overlies middle meningeal a. → epidural hematoma', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Whole-side facial droop including the forehead', mechanism: 'LMN facial (Bell) palsy', significance: 'key' },
    { sign: 'Lucid interval then deterioration after a temporal blow', mechanism: 'Middle meningeal artery bleed (epidural hematoma) at the pterion', significance: 'key' },
    { sign: 'Facial weakness with a parotid mass', mechanism: 'Tumor invading the intraparotid facial nerve', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Forehead sparing (UMN) vs involvement (LMN)', meaning: 'Localizes the facial palsy' },
    { clue: 'CT head after temporal trauma', meaning: 'Lens-shaped epidural hematoma' },
    { clue: 'Imaging of a parotid mass + facial nerve function', meaning: 'Tumor relation to CN VII' },
  ],

  treatment: [
    { logic: 'Bell palsy: corticosteroids ± antivirals, eye protection', detail: 'Most recover.' },
    { logic: 'Epidural hematoma: urgent surgical evacuation', detail: 'Neurosurgical emergency.' },
  ],

  mnemonics: [
    { hook: 'Facial nerve branches: "To Zanzibar By Motor Car" (Temporal, Zygomatic, Buccal, Marginal mandibular, Cervical)', expansion: ['CN VII in parotid'] },
    { hook: 'Parotid secretomotor = CN IX → otic ganglion → auriculotemporal (V3)', expansion: ['Hitch-hiking fibers'] },
  ],

  traps: [
    {
      questionCategory: 'UMN vs LMN facial palsy',
      wrongInstinct: 'Any facial droop that includes the forehead is a stroke',
      rightAnswer: 'Forehead INVOLVEMENT indicates a lower-motor-neuron (peripheral CN VII / Bell) palsy; an upper-motor-neuron lesion (stroke) SPARES the forehead (bilateral cortical input to the upper face)',
      why: 'The frontalis receives bilateral UMN innervation, so a cortical lesion spares it — forehead sparing points to a central cause.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which three major structures pass through the parotid gland, from superficial to deep?',
      options: [
        { id: 'a', text: 'External carotid artery, retromandibular vein, facial nerve' },
        { id: 'b', text: 'Facial nerve, retromandibular vein, external carotid artery' },
        { id: 'c', text: 'Facial nerve, external carotid artery, retromandibular vein' },
        { id: 'd', text: 'Retromandibular vein, facial nerve, external carotid artery' },
      ],
      answerId: 'b',
      explanation: 'From superficial to deep the parotid transmits the facial nerve (CN VII), the retromandibular vein, and the external carotid artery — the superficial facial nerve is at risk in parotid tumors and surgery.',
      tests: 'exam',
    },
  ],
};

export default parotidTemporalRegions;
