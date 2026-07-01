import type { Lecture } from '../../lib/types';

export const posteriorThighSciatic: Lecture = {
  id: 'posterior-thigh-sciatic',
  title: 'Posterior Thigh: Hamstrings & Sciatic Nerve',
  system: 'msk',
  source: 'L20 — Gluteal Region, Posterior Thigh & Popliteal Fossa',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L20 Gluteal & Popliteal' },
    { kind: 'disease', label: 'Hamstrings / sciatic' },
    { kind: 'mechanism', label: 'Two sciatic divisions' },
    { kind: 'exam', label: 'Sciatic nerve injury' },
  ],

  highYield: [
    'The **hamstrings** (posterior thigh) = **semitendinosus, semimembranosus, and the long head of biceps femoris** (the short head is the exception). They **extend the hip and flex the knee**, arise from the **ischial tuberosity**, and are supplied by the **tibial division of the sciatic nerve** (short head of biceps = common fibular division).',
    'The **sciatic nerve (L4–S3)** is the largest nerve in the body; it is really **two nerves in one sheath — the tibial division and the common fibular (peroneal) division** — which usually separate at the apex of the popliteal fossa.',
    '**Complete sciatic nerve injury** → paralysis of the hamstrings + all muscles below the knee → **foot drop, inability to flex the knee**, and sensory loss over most of the leg/foot (sparing the medial leg = saphenous/femoral).',
    'The **common fibular (peroneal) part is the more commonly injured** — its superficial position at the **neck of the fibula** makes it vulnerable (fracture, tight cast, crossed legs) → **foot drop** with a high-stepping gait.',
    '**Hamstring "pull" (strain)** and avulsion at the ischial tuberosity are common sports injuries; the ischial tuberosity is also where you sit (with the overlying ischial bursa).',
  ],

  mechanism: {
    title: 'Ischial-tuberosity hamstrings; sciatic = tibial + common fibular',
    steps: [
      { id: 's1', label: 'Hamstrings extend hip + flex knee (tibial division)', emphasis: 'key' },
      { id: 's2', label: 'Sciatic = tibial + common fibular in one sheath' },
      { id: 's3', label: 'Divisions separate at the popliteal fossa apex' },
      { id: 's4', label: 'Common fibular vulnerable at the fibular neck → foot drop', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Foot drop after a fibular-neck injury or tight cast', mechanism: 'Common fibular (peroneal) nerve palsy', significance: 'key' },
    { sign: 'Weak knee flexion + hip extension + sensory loss below the knee', mechanism: 'Complete sciatic nerve lesion', significance: 'key' },
    { sign: 'Acute posterior-thigh "pop" and bruising in a sprinter', mechanism: 'Hamstring strain/avulsion (ischial tuberosity)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Test knee flexion + ankle/foot movement', meaning: 'Sciatic and its divisions' },
    { clue: 'Map sensory loss (spared medial leg = saphenous)', meaning: 'Sciatic vs femoral territory' },
  ],

  treatment: [
    { logic: 'Protect the common fibular nerve at the fibular neck', detail: 'Casts, positioning, surgery.' },
    { logic: 'Hamstring strain: rest, rehab; avulsion may need repair', detail: 'Ischial tuberosity origin.' },
  ],

  mnemonics: [
    { hook: 'Hamstrings = semitendinosus, semimembranosus, biceps femoris (long head) — tibial division', expansion: ['Short head of biceps = common fibular'] },
    { hook: 'Sciatic = tibial + common fibular; the fibular part drops the foot', expansion: ['Vulnerable at the fibular neck'] },
  ],

  traps: [
    {
      questionCategory: 'Which sciatic division is more often injured',
      wrongInstinct: 'The tibial division is the part usually damaged in the leg',
      rightAnswer: 'The COMMON FIBULAR (peroneal) division is more commonly injured because it wraps superficially around the neck of the fibula → foot drop',
      why: 'Its exposed position at the fibular neck makes it vulnerable to fractures, casts, and compression.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which nerve supplies the three "true" hamstring muscles (semitendinosus, semimembranosus, long head of biceps femoris)?',
      options: [
        { id: 'a', text: 'Common fibular division of the sciatic nerve' },
        { id: 'b', text: 'Tibial division of the sciatic nerve' },
        { id: 'c', text: 'Femoral nerve' },
        { id: 'd', text: 'Obturator nerve' },
      ],
      answerId: 'b',
      explanation: 'The hamstrings are supplied by the tibial division of the sciatic nerve; only the short head of biceps femoris is supplied by the common fibular division.',
      tests: 'exam',
    },
  ],
};

export default posteriorThighSciatic;
