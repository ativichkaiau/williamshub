import type { Lecture } from '../../lib/types';

export const faceMusclesInnervation: Lecture = {
  id: 'face-muscles-innervation',
  title: 'Face: Muscles, Innervation & Danger Triangle',
  system: 'msk',
  source: 'L6 — Face, Scalp, Parotid & Temporal Regions',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L6 Face, Scalp & Parotid' },
    { kind: 'disease', label: 'Facial muscles/nerves' },
    { kind: 'mechanism', label: 'CN VII motor, CN V sensory' },
    { kind: 'exam', label: 'Trigeminal neuralgia / danger triangle' },
  ],

  highYield: [
    '**Muscles of facial expression** (oral, nasal, orbital, auricular, scalp, neck groups) develop from the **2nd pharyngeal arch** and are **ALL motor-supplied by the facial nerve (CN VII)**. They insert into skin (not just bone), so they move the face.',
    '**Sensory innervation of the face = trigeminal nerve (CN V)** in three territories: **V1 ophthalmic** (forehead/upper eyelid), **V2 maxillary** (cheek/upper lip), **V3 mandibular** (lower lip/jaw, but NOT the angle of the jaw — that is C2/C3 great auricular).',
    '**Trigeminal neuralgia (tic douloureux)** = paroxysmal, severe, lightning-like unilateral facial pain, usually in **V2/V3** (rarely V1); middle-aged/elderly; often from vascular compression of the CN V root. Bilateral disease suggests **multiple sclerosis**.',
    '**Arterial supply**: mainly the **facial artery** (a branch of the external carotid) + the superficial temporal and ophthalmic (internal carotid) — rich anastomoses, so facial wounds bleed briskly.',
    '**Danger triangle of the face** (nose to the corners of the mouth): infections here can spread via the **facial vein → superior/inferior ophthalmic veins → cavernous sinus** (valveless communications) → **cavernous sinus thrombosis**.',
  ],

  mechanism: {
    title: 'CN VII moves the face; CN V feels it; veins connect to the cavernous sinus',
    steps: [
      { id: 's1', label: 'Facial nerve (VII) → all muscles of facial expression', emphasis: 'key' },
      { id: 's2', label: 'Trigeminal (V1/V2/V3) → facial sensation' },
      { id: 's3', label: 'Facial artery (ECA) supplies the face' },
      { id: 's4', label: 'Danger triangle → cavernous sinus via ophthalmic veins', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Inability to wrinkle forehead, close eye, smile on one side', mechanism: 'Facial nerve (CN VII) motor loss', significance: 'key' },
    { sign: 'Paroxysmal lightning-like pain in the cheek/jaw', mechanism: 'Trigeminal neuralgia (V2/V3)', significance: 'key' },
    { sign: 'Spreading infection from an upper-lip/nose furuncle with orbital signs', mechanism: 'Cavernous sinus thrombosis (danger triangle)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Test facial expression symmetry', meaning: 'CN VII motor function' },
    { clue: 'Map facial sensory loss to V1/V2/V3', meaning: 'Trigeminal territory' },
    { clue: 'MRI for trigeminal root / cavernous sinus', meaning: 'Vascular compression or thrombosis' },
  ],

  treatment: [
    { logic: 'Trigeminal neuralgia: carbamazepine first-line', detail: 'Microvascular decompression if refractory.' },
    { logic: 'Danger-triangle infection: antibiotics, do not squeeze', detail: 'Prevent cavernous sinus spread.' },
  ],

  mnemonics: [
    { hook: 'Facial expression = CN VII (motor); facial sensation = CN V (V1/V2/V3)', expansion: ['2nd pharyngeal arch'] },
    { hook: 'Danger triangle → facial vein → ophthalmic veins → cavernous sinus', expansion: ['Valveless'] },
  ],

  traps: [
    {
      questionCategory: 'Motor vs sensory supply of the face',
      wrongInstinct: 'The trigeminal nerve supplies the muscles of facial expression',
      rightAnswer: 'The FACIAL nerve (CN VII) is motor to the muscles of facial expression; the trigeminal (CN V) is SENSORY to the face (and motor only to the muscles of mastication)',
      why: 'A classic mix-up — VII moves the face, V feels it (and chews via V3 to mastication muscles).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A furuncle on the upper lip is followed by fever, proptosis, and ophthalmoplegia. Through which route did the infection most likely spread?',
      options: [
        { id: 'a', text: 'Facial artery to the brain' },
        { id: 'b', text: 'Facial vein → ophthalmic veins → cavernous sinus' },
        { id: 'c', text: 'Parotid duct to the middle ear' },
        { id: 'd', text: 'Trigeminal nerve to the pons' },
      ],
      answerId: 'b',
      explanation: 'The "danger triangle" drains via the facial vein into the valveless superior/inferior ophthalmic veins to the cavernous sinus, so infection can cause cavernous sinus thrombosis.',
      tests: 'exam',
    },
  ],
};

export default faceMusclesInnervation;
