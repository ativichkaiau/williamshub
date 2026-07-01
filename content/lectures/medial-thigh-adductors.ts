import type { Lecture } from '../../lib/types';

export const medialThighAdductors: Lecture = {
  id: 'medial-thigh-adductors',
  title: 'Medial Thigh: Adductors & Obturator Nerve',
  system: 'msk',
  source: 'L19 — Lower Limb Bones & Anterior/Medial Thigh',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L19 Bones & Ant/Med Thigh' },
    { kind: 'disease', label: 'Adductor compartment' },
    { kind: 'mechanism', label: 'Obturator nerve' },
    { kind: 'exam', label: 'Adductor magnus / hiatus' },
  ],

  highYield: [
    'The **medial (adductor) compartment of the thigh** = **adductor longus, adductor brevis, adductor magnus, gracilis, pectineus, and obturator externus** — they **adduct the thigh** at the hip.',
    'The compartment is supplied by the **obturator nerve (L2–L4)** — which divides into an **anterior and posterior division around adductor brevis** (a landmark). Exceptions: **pectineus** is femoral-nerve (± obturator), and the **hamstring part of adductor magnus is tibial (sciatic)**.',
    '**Adductor magnus is a hybrid muscle**: its **adductor part** (obturator nerve) and its **hamstring part** (tibial nerve). Between its two attachments is the **adductor hiatus**, through which the **femoral vessels pass to become the popliteal artery/vein** in the popliteal fossa.',
    '**Gracilis** is the most superficial/medial and the only medial muscle crossing both hip and knee; it is commonly used as a **muscle/tendon graft**.',
    '**Obturator nerve injury** (e.g. pelvic surgery, obturator hernia) → **weak thigh adduction** and sensory loss over the **medial thigh**; a Howship–Romberg sign (medial-thigh pain) suggests an obturator hernia.',
  ],

  mechanism: {
    title: 'Adductors via the obturator nerve; magnus is a hybrid',
    steps: [
      { id: 's1', label: 'Adductor compartment = thigh adduction', emphasis: 'key' },
      { id: 's2', label: 'Obturator nerve (L2–L4); splits around adductor brevis' },
      { id: 's3', label: 'Adductor magnus: adductor (obturator) + hamstring (tibial) parts' },
      { id: 's4', label: 'Adductor hiatus → femoral vessels become popliteal', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Weak thigh adduction + medial-thigh numbness', mechanism: 'Obturator nerve lesion', significance: 'key' },
    { sign: 'Medial-thigh pain from an obturator hernia (Howship–Romberg)', mechanism: 'Obturator nerve compression', significance: 'supportive' },
    { sign: 'Femoral vessels traced through the adductor hiatus into the popliteal fossa', mechanism: 'Adductor magnus hiatus', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Test hip adduction against resistance', meaning: 'Obturator nerve / adductors' },
    { clue: 'Medial-thigh sensation', meaning: 'Obturator cutaneous territory' },
  ],

  treatment: [
    { logic: 'Protect the obturator nerve in pelvic surgery', detail: 'Runs on the lateral pelvic wall.' },
    { logic: 'Gracilis harvest for tendon/muscle grafts', detail: 'Expendable medial muscle.' },
  ],

  mnemonics: [
    { hook: 'Adductor magnus = 2 nerves: adductor part (obturator) + hamstring part (tibial)', expansion: ['Adductor hiatus'] },
    { hook: 'Adductor hiatus: femoral vessels → popliteal artery/vein', expansion: ['Entrance to the popliteal fossa'] },
  ],

  traps: [
    {
      questionCategory: 'Innervation of adductor magnus',
      wrongInstinct: 'Adductor magnus is supplied entirely by the obturator nerve',
      rightAnswer: 'It has DUAL innervation: the adductor part by the obturator nerve and the hamstring (ischiocondylar) part by the tibial division of the sciatic nerve',
      why: 'Its hamstring part behaves like the posterior-thigh muscles (hip extension), so it shares their tibial nerve supply.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The femoral artery becomes the popliteal artery as it passes through which structure?',
      options: [
        { id: 'a', text: 'The femoral canal' },
        { id: 'b', text: 'The adductor hiatus (in adductor magnus)' },
        { id: 'c', text: 'The obturator foramen' },
        { id: 'd', text: 'The greater sciatic foramen' },
      ],
      answerId: 'b',
      explanation: 'The femoral vessels pass from the adductor canal through the adductor hiatus (a gap in adductor magnus) to enter the popliteal fossa, where the femoral artery becomes the popliteal artery.',
      tests: 'exam',
    },
  ],
};

export default medialThighAdductors;
