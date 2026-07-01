import type { Lecture } from '../../lib/types';
import { HAND_NERVE_LESIONS } from '../../lib/figures';

export const handNerveLesions: Lecture = {
  id: 'hand-nerve-lesions',
  title: 'Hand Nerve Lesions: Median, Ulnar & Radial',
  system: 'msk',
  source: 'L4 — Palm of Hand & Joints of Upper Limb',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L4 Palm & UL Joints' },
    { kind: 'disease', label: 'Peripheral nerve palsy' },
    { kind: 'mechanism', label: 'Entrapment sites' },
    { kind: 'exam', label: 'Carpal tunnel / claw hand' },
  ],

  highYield: [
    '**Median nerve at the wrist (carpal tunnel syndrome)** = the commonest entrapment: numbness/tingling of the **lateral 3½ digits (palmar)**, worse at night, **thenar wasting**, weak thumb opposition; **Tinel/Phalen positive**. A proximal median lesion gives the **"hand of benediction"** on trying to make a fist (**"ape/simian hand"** at rest from thenar wasting).',
    '**Ulnar nerve at the wrist (Guyon canal) or elbow** → **"claw hand"** (hyperextended MCP, flexed IP of the 4th/5th fingers), loss of finger ab/adduction (interossei), **positive Froment sign** (uses FPL to grip paper because adductor pollicis is weak), hypothenar wasting; sensory loss over the **medial 1½ digits**.',
    '**Ulnar paradox**: a **more PROXIMAL (elbow)** ulnar lesion causes **LESS visible clawing** than a distal (wrist) one — because the proximal lesion also paralyzes the medial FDP, so the ring/little fingers flex less at the IP joints.',
    '**Radial nerve** → **wrist drop** (loss of wrist/finger extension); a lesion above the triceps branches also weakens elbow extension; sensory loss over the **dorsal snuffbox/web** (superficial radial). "Saturday-night palsy" (compression in the radial groove) is classic.',
    '**Carpal tunnel contents**: the tunnel (under the **flexor retinaculum**) transmits the **median nerve + 9 flexor tendons (4 FDS, 4 FDP, FPL)**; the **ulnar nerve and artery run OUTSIDE it in Guyon canal** — which is why carpal tunnel release spares the ulnar nerve.',
  ],

  mechanism: {
    title: 'Localize by the deformity and the sensory territory',
    steps: [
      { id: 's1', label: 'Median (carpal tunnel): lateral 3½ numb, thenar wasting', emphasis: 'key' },
      { id: 's2', label: 'Ulnar (Guyon/elbow): claw hand, Froment +, medial 1½' },
      { id: 's3', label: 'Radial (groove): wrist drop, dorsal web sensory' },
      { id: 's4', label: 'Ulnar paradox: proximal lesion → less clawing', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Night-time numbness of thumb–middle finger, thenar wasting', mechanism: 'Carpal tunnel syndrome (median)', significance: 'key' },
    { sign: 'Claw hand + positive Froment sign', mechanism: 'Ulnar nerve palsy', significance: 'key' },
    { sign: 'Wrist drop after arm compression over a chair', mechanism: 'Radial nerve (Saturday-night palsy)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Tinel / Phalen tests', meaning: 'Median at the carpal tunnel' },
    { clue: 'Froment sign; test interossei', meaning: 'Ulnar nerve' },
    { clue: 'Nerve conduction studies', meaning: 'Localize and grade the entrapment' },
  ],

  treatment: [
    { logic: 'Carpal tunnel: splint/steroid → flexor retinaculum release', detail: 'Spares the ulnar nerve (Guyon canal is separate).' },
    { logic: 'Ulnar/radial: decompression, splinting, observe', detail: 'Many compressive palsies recover.' },
  ],

  mnemonics: [
    { hook: 'Median = ape hand + lateral 3½; Ulnar = claw hand + medial 1½; Radial = wrist drop', expansion: ['Match deformity to nerve'] },
    { hook: 'Froment sign = weak adductor pollicis → thumb flexes (FPL) to hold paper', expansion: ['Ulnar'] },
  ],

  traps: [
    {
      questionCategory: 'The ulnar paradox',
      wrongInstinct: 'A higher (elbow-level) ulnar nerve injury produces more severe clawing than a wrist injury',
      rightAnswer: 'The opposite — a proximal ulnar lesion also denervates the medial FDP, so the 4th/5th fingers flex less and the claw is LESS pronounced ("ulnar paradox")',
      why: 'Clawing reflects unopposed long-flexor pull; losing that flexor proximally reduces the visible deformity even though the lesion is worse.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient has nocturnal numbness of the thumb, index, and middle fingers, wasting of the thenar eminence, and a positive Phalen test. Which nerve is compressed and where?',
      options: [
        { id: 'a', text: 'Ulnar nerve at Guyon canal' },
        { id: 'b', text: 'Median nerve in the carpal tunnel' },
        { id: 'c', text: 'Radial nerve in the radial groove' },
        { id: 'd', text: 'Anterior interosseous nerve' },
      ],
      answerId: 'b',
      explanation: 'Carpal tunnel syndrome compresses the median nerve under the flexor retinaculum: lateral 3½-digit sensory symptoms (worse at night), thenar wasting, and positive Tinel/Phalen. The ulnar nerve runs separately in Guyon canal.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Median vs ulnar vs radial hand lesions', svg: HAND_NERVE_LESIONS, caption: 'Median → ape hand/carpal tunnel; ulnar → claw hand/Froment/Guyon; radial → wrist drop.' },
  ],
};

export default handNerveLesions;
