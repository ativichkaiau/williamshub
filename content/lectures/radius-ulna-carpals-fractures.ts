import type { Lecture } from '../../lib/types';

export const radiusUlnaCarpalsFractures: Lecture = {
  id: 'radius-ulna-carpals-fractures',
  title: 'Radius, Ulna, Carpal Bones & Fractures',
  system: 'msk',
  source: 'L3 — Forearm, Wrist Bones & Dorsum of Hand',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L3 Forearm & Hand Bones' },
    { kind: 'disease', label: 'Forearm/wrist fractures' },
    { kind: 'mechanism', label: 'Fall on outstretched hand' },
    { kind: 'exam', label: 'Colles / scaphoid' },
  ],

  highYield: [
    '**Radius (lateral) and ulna (medial)** articulate at the proximal + distal radioulnar joints for pronation/supination. Key landmarks: radial head/tuberosity/styloid; ulnar olecranon/coronoid/styloid. **8 carpal bones in 2 rows** ("**Some Lovers Try Positions That They Can\'t Handle**": Scaphoid, Lunate, Triquetrum, Pisiform / Trapezium, Trapezoid, Capitate, Hamate).',
    '**Colles fracture** = distal radius fracture with **DORSAL displacement** ("**dinner-fork deformity**") — the classic **fall on an outstretched hand (FOOSH)** in older/osteoporotic patients. **Smith fracture** = distal radius with **VOLAR displacement** ("reverse Colles," fall on flexed wrist).',
    '**Scaphoid fracture = the most common carpal fracture** (FOOSH) → **tenderness in the anatomical snuffbox**. Its blood supply enters distally, so a **waist/proximal fracture risks avascular necrosis and non-union**. May be radiographically occult early → treat/re-image on clinical suspicion.',
    '**Monteggia** = fracture of the **proximal ulna** + dislocation of the **radial head**. **Galeazzi** = fracture of the **distal radius** + dislocation of the **distal radioulnar joint**. ("**MUGR**": Monteggia-Ulna, Galeazzi-Radius.)',
    '**Anterior dislocation of the lunate** (FOOSH) can compress the median nerve → **acute carpal tunnel syndrome**.',
  ],

  mechanism: {
    title: 'FOOSH → which bone, which direction',
    steps: [
      { id: 's1', label: 'Distal radius, dorsal → Colles (dinner-fork)', emphasis: 'key' },
      { id: 's2', label: 'Distal radius, volar → Smith' },
      { id: 's3', label: 'Snuffbox tenderness → scaphoid (AVN risk)' },
      { id: 's4', label: 'Monteggia (ulna+radial head) / Galeazzi (radius+DRUJ)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Dinner-fork deformity after a fall on an outstretched hand', mechanism: 'Colles fracture (dorsally displaced distal radius)', significance: 'key' },
    { sign: 'Tenderness in the anatomical snuffbox', mechanism: 'Scaphoid fracture', significance: 'key' },
    { sign: 'Acute median nerve signs after wrist trauma', mechanism: 'Lunate dislocation compressing the median nerve', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Wrist radiograph (lateral shows displacement direction)', meaning: 'Colles vs Smith' },
    { clue: 'Scaphoid views; re-image or MRI if negative but tender', meaning: 'Occult scaphoid fracture' },
    { clue: 'Assess DRUJ / radial head in forearm fractures', meaning: 'Monteggia vs Galeazzi' },
  ],

  treatment: [
    { logic: 'Colles/Smith: reduction + cast (surgery if unstable)', detail: 'Restore alignment.' },
    { logic: 'Scaphoid: cast even if X-ray negative but tender', detail: 'Avoid missed AVN/non-union.' },
  ],

  mnemonics: [
    { hook: 'Colles = dorsal (dinner fork); Smith = volar (reverse Colles)', expansion: ['Both distal radius, FOOSH'] },
    { hook: 'Snuffbox tenderness = scaphoid = AVN risk', expansion: ['Blood supply enters distally'] },
  ],

  traps: [
    {
      questionCategory: 'Snuffbox tenderness with a "normal" X-ray',
      wrongInstinct: 'A normal initial wrist X-ray rules out a scaphoid fracture',
      rightAnswer: 'Scaphoid fractures are often radiographically occult early — with snuffbox tenderness, immobilize and re-image (or MRI) to avoid AVN/non-union',
      why: 'Missing a scaphoid fracture risks avascular necrosis of the proximal fragment because its blood supply runs distal-to-proximal.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A young adult falls on an outstretched hand and has tenderness in the anatomical snuffbox, but the initial wrist radiograph is normal. What is the best management?',
      options: [
        { id: 'a', text: 'Reassure and discharge — no fracture' },
        { id: 'b', text: 'Immobilize and re-image (or MRI) for a probable scaphoid fracture' },
        { id: 'c', text: 'Treat as a Colles fracture' },
        { id: 'd', text: 'Aspirate the wrist joint' },
      ],
      answerId: 'b',
      explanation: 'Snuffbox tenderness after a FOOSH indicates a scaphoid fracture even when early X-rays are negative; immobilize and re-image or obtain MRI, because a missed fracture risks avascular necrosis and non-union.',
      tests: 'exam',
    },
  ],
};

export default radiusUlnaCarpalsFractures;
