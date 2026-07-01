import type { Lecture } from '../../lib/types';

export const palmIntrinsicMuscles: Lecture = {
  id: 'palm-intrinsic-muscles',
  title: 'Palm: Intrinsic Muscles & Palmar Structures',
  system: 'msk',
  source: 'L4 — Palm of Hand & Joints of Upper Limb',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L4 Palm & UL Joints' },
    { kind: 'disease', label: 'Intrinsic hand muscles' },
    { kind: 'mechanism', label: 'Median vs ulnar supply' },
    { kind: 'exam', label: 'Interossei / lumbricals' },
  ],

  highYield: [
    '**Intrinsic hand muscles are almost all ulnar-nerve (deep branch) territory — the exceptions are median.** Median supplies the **thenar muscles** (via the **recurrent branch**) and the **1st + 2nd lumbricals**; the **deep branch of the ulnar nerve** supplies everything else.',
    '**Thenar muscles** (recurrent median n): **abductor pollicis brevis, flexor pollicis brevis (superficial head), opponens pollicis** (deep head of FPB is ulnar). **Hypothenar muscles** (deep ulnar n): abductor/flexor/opponens digiti minimi. **Palmaris brevis** = superficial branch of ulnar nerve.',
    '**Interossei**: **Dorsal ABduct, Palmar ADduct (DAB/PAD)** — all deep ulnar nerve. **Lumbricals** flex the MCP and extend the IP joints (**1st/2nd = median, 3rd/4th = ulnar**). **Adductor pollicis** = deep ulnar nerve (tested by Froment sign).',
    '**Palmar aponeurosis** anchors the skin; its progressive fibrous thickening → **Dupuytren contracture** (fixed flexion of the **4th and 5th digits**, often bilateral/hereditary).',
    '**Flexor sheaths**: the **fibrous digital sheath forms pulleys** preventing bowstringing; the **synovial sheaths** are the **ulnar bursa (FDS/FDP)** and **radial bursa (FPL)**. **Tenosynovitis** of a sheath causes **trigger finger**. Palmar blood supply: **superficial palmar arch (mainly ulnar a.)** and **deep palmar arch (mainly radial a.)**.',
  ],

  mechanism: {
    title: 'Ulnar runs the hand; median keeps the thumb (+ radial lumbricals)',
    steps: [
      { id: 's1', label: 'Deep ulnar n → interossei, hypothenar, adductor pollicis, 3rd/4th lumbricals', emphasis: 'key' },
      { id: 's2', label: 'Recurrent median n → thenar (LOAF)' },
      { id: 's3', label: '1st/2nd lumbricals = median; DAB/PAD interossei' },
      { id: 's4', label: 'Palmar aponeurosis fibrosis → Dupuytren (4th/5th)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Fixed flexion of the ring and little fingers with a palmar cord', mechanism: 'Dupuytren contracture (palmar aponeurosis)', significance: 'key' },
    { sign: 'Finger catches/locks then releases with a snap', mechanism: 'Trigger finger (flexor tenosynovitis)', significance: 'key' },
    { sign: 'Cannot spread/close fingers against resistance', mechanism: 'Interossei (deep ulnar nerve)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Test thumb opposition/abduction', meaning: 'Median (recurrent) thenar function' },
    { clue: 'Finger ab/adduction (interossei)', meaning: 'Deep ulnar nerve' },
    { clue: 'Allen test', meaning: 'Patency of the superficial/deep palmar arches' },
  ],

  treatment: [
    { logic: 'Dupuytren: needle aponeurotomy/collagenase/fasciectomy', detail: 'For functional flexion contracture.' },
    { logic: 'Trigger finger: splint/steroid injection, A1 pulley release', detail: 'Refractory cases.' },
  ],

  mnemonics: [
    { hook: 'Median in the hand = LOAF (Lumbricals 1&2, Opponens pollicis, Abductor pollicis brevis, Flexor pollicis brevis)', expansion: ['Everything else = deep ulnar'] },
    { hook: 'DAB = Dorsal ABduct, PAD = Palmar ADduct', expansion: ['All interossei = ulnar'] },
  ],

  traps: [
    {
      questionCategory: 'Nerve supply of the intrinsic hand muscles',
      wrongInstinct: 'The median nerve supplies most intrinsic hand muscles',
      rightAnswer: 'The deep branch of the ULNAR nerve supplies most intrinsic muscles; the median supplies only the thenar group (recurrent branch) and the 1st/2nd lumbricals (LOAF)',
      why: 'This is why ulnar lesions devastate hand fine-motor function while median lesions mainly hit the thumb.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which muscles of the hand are supplied by the median nerve?',
      options: [
        { id: 'a', text: 'All interossei and the hypothenar muscles' },
        { id: 'b', text: 'The thenar muscles (LOAF: opponens, abductor, flexor pollicis brevis) and the 1st/2nd lumbricals' },
        { id: 'c', text: 'Adductor pollicis and all lumbricals' },
        { id: 'd', text: 'Only palmaris brevis' },
      ],
      answerId: 'b',
      explanation: 'The median nerve supplies the LOAF muscles — lumbricals 1 & 2, opponens pollicis, abductor pollicis brevis, and flexor pollicis brevis (superficial head) — via its recurrent branch; the deep ulnar nerve supplies the rest.',
      tests: 'exam',
    },
  ],
};

export default palmIntrinsicMuscles;
