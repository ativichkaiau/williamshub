import type { Lecture } from '../../lib/types';

export const cortexAndStroke: Lecture = {
  id: 'cortex-and-stroke',
  title: 'Cerebral Cortex & Stroke Syndromes',
  system: 'neuro',
  source: 'L1 — Clinical Neuroanatomy I',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L1 Clinical Neuroanatomy I' },
    { kind: 'disease', label: 'Cortical stroke' },
    { kind: 'mechanism', label: 'Brodmann areas' },
    { kind: 'exam', label: 'MCA vs ACA' },
  ],

  highYield: [
    '**Frontal**: spastic hemiplegia (**BA4**, precentral), apraxia (**BA6**), **Broca (expressive) aphasia** (BA44–45, dominant).',
    '**Parietal**: contralateral hemianesthesia (**BA3-1-2**), astereognosis (5-7), **neglect** (39-40, non-dominant).',
    '**Temporal**: **Wernicke (receptive) aphasia** (BA22, dominant), hearing (41-42); **Occipital**: **homonymous hemianopia** (BA17) ± visual agnosia (18-19).',
    'Vascular territory: **MCA → contralateral weakness/sensory loss of FACE & ARM > leg** (+ aphasia if dominant, neglect if non-dominant); **ACA → LEG > arm**; **PCA → homonymous hemianopia**.',
    '**Internal capsule (lacunar) → dense, equal contralateral face-arm-leg weakness** (pure motor), no cortical signs.',
  ],

  mechanism: {
    title: 'Deficit map → cortical area → arterial territory',
    steps: [
      { id: 's1', label: 'Cortical sign (aphasia / neglect / field cut)' },
      { id: 's2', label: 'Maps to a Brodmann area / lobe', emphasis: 'key' },
      { id: 's3', label: 'Weakness pattern: face-arm (MCA) vs leg (ACA)' },
      { id: 's4', label: 'Dominant (usually left) → language; non-dominant → neglect' },
    ],
  },

  examFindings: [
    { sign: 'Contralateral face + arm weakness with aphasia', mechanism: 'Dominant MCA territory', significance: 'key' },
    { sign: 'Contralateral leg weakness > arm', mechanism: 'ACA territory (medial motor strip)', significance: 'key' },
    { sign: 'Contralateral homonymous hemianopia', mechanism: 'PCA / occipital cortex (BA17)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Non-contrast CT then CTA/MRI', meaning: 'Ischemic vs hemorrhagic; vessel & territory' },
    { clue: 'Aphasia type (Broca vs Wernicke)', meaning: 'Frontal vs temporal, dominant hemisphere' },
    { clue: 'Weakness distribution (face-arm vs leg vs equal)', meaning: 'MCA vs ACA vs lacunar capsule' },
  ],

  treatment: [
    { logic: 'Acute ischemic stroke pathway (time-critical)', detail: 'Thrombolysis/thrombectomy per window; treat as territory suggests.' },
    { logic: 'Localize non-dominant neglect early', detail: 'Safety and rehab implications.' },
  ],

  mnemonics: [
    { hook: 'MCA = face + arm; ACA = leg', expansion: ['Homunculus: leg is on the medial (ACA) surface'] },
    { hook: 'Broca = Broken speech (frontal); Wernicke = Word salad (temporal)', expansion: ['Both dominant hemisphere'] },
  ],

  traps: [
    {
      questionCategory: 'MCA vs ACA weakness pattern',
      wrongInstinct: 'A dense hemiparesis affecting the leg most = MCA stroke',
      rightAnswer: 'Leg-predominant weakness points to the ACA (medial homunculus); MCA weakness is face/arm-predominant',
      why: 'The motor homunculus puts the leg on the medial surface (ACA territory) and the face/hand on the lateral surface (MCA territory) — the body part most affected tells you the artery.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A right-handed patient suddenly cannot produce fluent speech but comprehends well, and has right face and arm weakness. The lesion localizes to:',
      options: [
        { id: 'a', text: 'Right (non-dominant) parietal lobe' },
        { id: 'b', text: 'Left frontal cortex, dominant MCA territory' },
        { id: 'c', text: 'Left occipital lobe' },
        { id: 'd', text: 'Right ACA territory' },
      ],
      answerId: 'b',
      explanation: 'Non-fluent (Broca) aphasia with preserved comprehension plus contralateral face/arm weakness localizes to the dominant (left) frontal cortex in the MCA territory.',
      tests: 'exam',
    },
  ],
};

export default cortexAndStroke;
