import type { Lecture } from '../../lib/types';

export const oralCavityLipsTeeth: Lecture = {
  id: 'oral-cavity-lips-teeth',
  title: 'Oral Cavity: Lips, Cheek, Gingiva & Teeth',
  system: 'msk',
  source: 'L15 — Mouth & Oral Cavity',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L15 Mouth & Oral Cavity' },
    { kind: 'disease', label: 'Lips / teeth' },
    { kind: 'mechanism', label: 'V2/V3 innervation' },
    { kind: 'exam', label: 'Dental innervation' },
  ],

  highYield: [
    'The oral cavity has two parts: the **oral vestibule** (between the lips/cheeks and the dental arches) and the **oral cavity proper** (inside the dental arches). Functions: mastication, deglutition, taste, and articulation.',
    '**Lips**: the muscle is **orbicularis oris (facial nerve, CN VII)**; blood supply = **superior/inferior labial branches of the facial artery**; sensation = **infraorbital nerve (V2)** for the upper lip and **mental nerve (V3)** for the lower lip. The **cheek** contains **buccinator (CN VII)**, supplied sensorily by the **buccal nerve (V3)**.',
    '**Teeth**: 4 types (incisor, canine, premolar, molar); **20 deciduous** (2-1-0-2 per quadrant) and **32 permanent** (2-1-2-3). Each tooth is anchored in its socket by a fibrous **gomphosis** (a peg-and-socket fibrous joint). Layers: enamel (hardest), dentin, pulp, cementum.',
    '**Dental/gingival innervation (key exam point)**: **maxillary (upper) teeth = superior alveolar nerves (branches of V2)**; **mandibular (lower) teeth = inferior alveolar nerve (branch of V3)**. This is the basis of dental anesthesia.',
    'Lymphatic drainage of the lips/teeth: mostly **submandibular nodes**, with the **medial lower lip → submental nodes**; all ultimately reach the deep cervical nodes.',
  ],

  mechanism: {
    title: 'Muscles = CN VII; sensation/teeth = trigeminal (V2 upper, V3 lower)',
    steps: [
      { id: 's1', label: 'Orbicularis oris + buccinator = facial nerve (VII)', emphasis: 'key' },
      { id: 's2', label: 'Upper lip/teeth sensation = V2; lower = V3' },
      { id: 's3', label: 'Teeth anchored by a gomphosis (fibrous joint)' },
      { id: 's4', label: 'Maxillary teeth → superior alveolar (V2); mandibular → inferior alveolar (V3)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Anesthetizing lower molars requires an inferior alveolar nerve block', mechanism: 'Mandibular teeth supplied by V3', significance: 'key' },
    { sign: 'Numb upper lip after an infraorbital nerve injury', mechanism: 'Upper lip sensation = V2 (infraorbital)', significance: 'key' },
    { sign: 'Cannot puff out the cheeks (buccinator weakness)', mechanism: 'Facial nerve (CN VII) lesion', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Map oral sensory loss to V2 vs V3', meaning: 'Localizes the trigeminal division' },
    { clue: 'Test lip/cheek movement', meaning: 'Facial nerve (motor)' },
  ],

  treatment: [
    { logic: 'Regional dental blocks target the alveolar nerves', detail: 'Inferior alveolar (V3) for lower teeth; superior alveolar (V2) for upper.' },
  ],

  mnemonics: [
    { hook: 'Upper teeth = V2 (superior alveolar); lower teeth = V3 (inferior alveolar)', expansion: ['Maxillary vs mandibular'] },
    { hook: 'Muscles of the lips/cheek = CN VII; sensation = CN V', expansion: ['Orbicularis oris, buccinator'] },
  ],

  traps: [
    {
      questionCategory: 'Innervation of lower teeth',
      wrongInstinct: 'The lower teeth are supplied by the maxillary nerve (V2)',
      rightAnswer: 'The mandibular (lower) teeth are supplied by the INFERIOR ALVEOLAR nerve, a branch of V3; V2 supplies the upper (maxillary) teeth',
      why: 'Getting the division right is essential for dental anesthesia — V3 for the lower arch, V2 for the upper.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A dentist needs to anesthetize the lower molar teeth. Which nerve should be blocked?',
      options: [
        { id: 'a', text: 'Superior alveolar nerve (V2)' },
        { id: 'b', text: 'Inferior alveolar nerve (V3)' },
        { id: 'c', text: 'Buccal nerve only' },
        { id: 'd', text: 'Facial nerve (VII)' },
      ],
      answerId: 'b',
      explanation: 'The mandibular (lower) teeth are innervated by the inferior alveolar nerve, a branch of the mandibular division (V3); an inferior alveolar nerve block anesthetizes them. The upper teeth are supplied by superior alveolar branches of V2.',
      tests: 'exam',
    },
  ],
};

export default oralCavityLipsTeeth;
