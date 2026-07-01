import type { Lecture } from '../../lib/types';

export const poplitealFossa: Lecture = {
  id: 'popliteal-fossa',
  title: 'Popliteal Fossa',
  system: 'msk',
  source: 'L20 — Gluteal Region, Posterior Thigh & Popliteal Fossa',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L20 Gluteal & Popliteal' },
    { kind: 'disease', label: 'Popliteal fossa' },
    { kind: 'mechanism', label: 'Borders & contents' },
    { kind: 'exam', label: 'Popliteal aneurysm / pulse' },
  ],

  highYield: [
    'The **popliteal fossa** is the diamond-shaped hollow behind the knee. **Borders: superolateral = biceps femoris; superomedial = semimembranosus + semitendinosus; inferolateral & inferomedial = the two heads of gastrocnemius**. Floor = femur/knee-joint capsule/popliteus.',
    '**Contents, from superficial to deep: tibial nerve → popliteal vein → popliteal artery** (the artery is DEEPEST, against the joint capsule). The **common fibular nerve** runs along the medial border of the biceps tendon toward the fibular neck.',
    'Because the **popliteal artery is deepest and fixed**, it is **hard to palpate** (feel it with the knee slightly flexed) and is at **risk in knee dislocation / supracondylar femur fractures** — check distal pulses. **Popliteal aneurysm** is the commonest peripheral aneurysm and can compress the tibial nerve or thrombose.',
    'A **Baker (popliteal) cyst** = distension of the gastrocnemius–semimembranosus bursa, protruding into the fossa (associated with knee joint effusion/arthritis); it may rupture and mimic a DVT.',
    'The **small saphenous vein** drains into the popliteal vein in the fossa; the **popliteal artery** gives geniculate branches (knee anastomosis) before dividing (at the lower border of popliteus) into the **anterior and posterior tibial arteries**.',
  ],

  mechanism: {
    title: 'A diamond behind the knee: nerve superficial, artery deep',
    steps: [
      { id: 's1', label: 'Borders: biceps / semi- muscles / gastrocnemius heads', emphasis: 'key' },
      { id: 's2', label: 'Deep→superficial: artery, vein, tibial nerve' },
      { id: 's3', label: 'Common fibular nerve along biceps tendon → fibular neck' },
      { id: 's4', label: 'Knee dislocation → popliteal artery injury', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Absent distal pulses after a knee dislocation', mechanism: 'Popliteal artery injury (deepest, tethered)', significance: 'key' },
    { sign: 'Pulsatile mass behind the knee', mechanism: 'Popliteal artery aneurysm', significance: 'key' },
    { sign: 'Soft posterior-knee swelling with knee arthritis, mimicking DVT if ruptured', mechanism: 'Baker cyst', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Palpate the popliteal pulse (knee slightly flexed)', meaning: 'Deep popliteal artery' },
    { clue: 'Doppler/CT angiography after knee trauma', meaning: 'Popliteal artery integrity' },
  ],

  treatment: [
    { logic: 'Knee dislocation: vascular assessment + repair if needed', detail: 'Popliteal artery is at risk.' },
    { logic: 'Popliteal aneurysm: repair to prevent thrombosis/embolism', detail: 'Commonest peripheral aneurysm.' },
  ],

  mnemonics: [
    { hook: 'Popliteal contents deep→superficial: Artery, Vein, Nerve (tibial)', expansion: ['Artery deepest = hard to feel'] },
    { hook: 'Popliteal artery → anterior + posterior tibial arteries (at popliteus lower border)', expansion: ['Geniculate anastomosis'] },
  ],

  traps: [
    {
      questionCategory: 'Depth of the popliteal artery',
      wrongInstinct: 'The popliteal artery is the most superficial structure in the fossa, so it is easy to feel',
      rightAnswer: 'The popliteal artery is the DEEPEST structure (against the joint capsule) and is hard to palpate; the tibial nerve is most superficial',
      why: 'Its deep, tethered position explains both the difficulty palpating it and its vulnerability in knee dislocation.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'In the popliteal fossa, which structure lies deepest (against the joint capsule) and is therefore most at risk in a knee dislocation?',
      options: [
        { id: 'a', text: 'Tibial nerve' },
        { id: 'b', text: 'Popliteal vein' },
        { id: 'c', text: 'Popliteal artery' },
        { id: 'd', text: 'Common fibular nerve' },
      ],
      answerId: 'c',
      explanation: 'The popliteal artery is the deepest content, lying against the knee-joint capsule; its tethered deep position makes it vulnerable to injury in knee dislocations and supracondylar femoral fractures.',
      tests: 'exam',
    },
  ],
};

export default poplitealFossa;
