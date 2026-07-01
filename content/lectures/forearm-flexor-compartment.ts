import type { Lecture } from '../../lib/types';

export const forearmFlexorCompartment: Lecture = {
  id: 'forearm-flexor-compartment',
  title: 'Anterior Forearm (Flexor Compartment)',
  system: 'msk',
  source: 'L3 — Forearm, Wrist Bones & Dorsum of Hand',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L3 Forearm & Hand Bones' },
    { kind: 'disease', label: 'Flexor-pronator group' },
    { kind: 'mechanism', label: 'Median vs ulnar supply' },
    { kind: 'exam', label: 'AIN / median nerve' },
  ],

  highYield: [
    'The **anterior (flexor-pronator) forearm** flexes the wrist/fingers and pronates. It is mostly **median-nerve territory**, with **two-and-a-half muscles supplied by the ulnar nerve**.',
    '**Superficial layer** (common flexor origin, medial epicondyle): pronator teres, flexor carpi radialis, palmaris longus, **flexor carpi ulnaris (ULNAR n)**. **Intermediate**: flexor digitorum superficialis. **Deep**: flexor digitorum profundus (**medial half = ULNAR**, lateral half = median/AIN), flexor pollicis longus (AIN), pronator quadratus (AIN).',
    '**Ulnar nerve supplies only flexor carpi ulnaris + the medial half of flexor digitorum profundus** in the forearm — everything else anterior is median (directly or via the **anterior interosseous nerve, AIN**).',
    '**Anterior interosseous nerve (AIN)** is a purely motor branch of the median nerve (FPL, lateral FDP, pronator quadratus). **AIN syndrome** → weak **"OK sign"** (loss of the FPL + FDP to the index → cannot flex the distal thumb/index tips) with **no sensory loss**.',
    'The **radial and ulnar arteries** (from the brachial bifurcation) supply the forearm; the **ulnar artery + ulnar nerve** run together medially, and the **radial artery** lies under brachioradialis (radial pulse at the distal lateral forearm).',
  ],

  mechanism: {
    title: 'Flexor-pronator group: median dominant, ulnar spares 2½',
    steps: [
      { id: 's1', label: 'Anterior compartment = flex wrist/fingers, pronate', emphasis: 'key' },
      { id: 's2', label: 'Median nerve supplies most; AIN = deep motor branch' },
      { id: 's3', label: 'Ulnar nerve: FCU + medial half of FDP only' },
      { id: 's4', label: 'AIN syndrome → weak OK-sign, no sensory loss', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Cannot make a rounded "OK" sign (flexes at wrong joints)', mechanism: 'AIN syndrome (FPL + index FDP weakness)', significance: 'key' },
    { sign: 'Weak wrist flexion with ulnar deviation lost', mechanism: 'Flexor carpi ulnaris (ulnar nerve)', significance: 'supportive' },
    { sign: 'Radial pulse under the distal brachioradialis', mechanism: 'Radial artery position', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'OK-sign / pinch test', meaning: 'AIN (FPL + FDP to index)' },
    { clue: 'Map median vs ulnar motor loss', meaning: 'FCU + medial FDP = ulnar' },
  ],

  treatment: [
    { logic: 'Nerve-specific rehab / decompression', detail: 'AIN syndrome often recovers.' },
  ],

  mnemonics: [
    { hook: 'Ulnar nerve in the forearm = FCU + medial ½ FDP (2½ muscles)', expansion: ['Rest of anterior = median/AIN'] },
    { hook: 'AIN = motor only → weak "OK" sign, NO sensory loss', expansion: ['FPL + index FDP + pronator quadratus'] },
  ],

  traps: [
    {
      questionCategory: 'AIN syndrome vs carpal tunnel',
      wrongInstinct: 'Weakness of thumb/index flexion with no numbness means carpal tunnel syndrome',
      rightAnswer: 'A pure MOTOR deficit (weak OK-sign) with NO sensory loss is anterior interosseous nerve syndrome, not carpal tunnel (which has median sensory symptoms)',
      why: 'The AIN is purely motor, so the absence of sensory findings localizes the lesion above the wrist to the AIN.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient cannot form a rounded circle when attempting the "OK" sign (the thumb and index tips will not flex), but sensation is completely normal. Which nerve is affected?',
      options: [
        { id: 'a', text: 'Ulnar nerve at Guyon canal' },
        { id: 'b', text: 'Anterior interosseous nerve (branch of median)' },
        { id: 'c', text: 'Superficial radial nerve' },
        { id: 'd', text: 'Median nerve at the carpal tunnel' },
      ],
      answerId: 'b',
      explanation: 'The anterior interosseous nerve is a pure motor branch of the median nerve supplying FPL, the lateral FDP (index), and pronator quadratus. Its lesion weakens the "OK" pinch with no sensory loss.',
      tests: 'exam',
    },
  ],
};

export default forearmFlexorCompartment;
