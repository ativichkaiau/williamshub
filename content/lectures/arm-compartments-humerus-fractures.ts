import type { Lecture } from '../../lib/types';
import { HUMERUS_NERVE_INJURY } from '../../lib/figures';

export const armCompartmentsHumerusFractures: Lecture = {
  id: 'arm-compartments-humerus-fractures',
  title: 'Arm Compartments & Humerus Fractures',
  system: 'msk',
  source: 'L2 — Humerus, Shoulder Region & Cubital Fossa',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L2 Shoulder & Arm' },
    { kind: 'disease', label: 'Arm muscles / humerus' },
    { kind: 'mechanism', label: 'Fracture site → nerve' },
    { kind: 'exam', label: 'Radial nerve / wrist drop' },
  ],

  highYield: [
    'The **arm has two compartments** divided by medial/lateral intermuscular septa. **Anterior (flexor) = biceps brachii, brachialis, coracobrachialis → musculocutaneous nerve; blood = brachial artery.** **Posterior (extensor) = triceps brachii (+ anconeus) → radial nerve; blood = profunda brachii.**',
    '**Brachialis is the main forearm flexor** (works in all positions); **biceps** flexes and is the **powerful supinator** (and crosses 3 joints). **Musculocutaneous nerve** pierces coracobrachialis and continues as the **lateral cutaneous nerve of the forearm**.',
    '**Humerus landmarks that matter clinically**: surgical neck, **radial (spiral) groove**, medial & lateral epicondyles, intertubercular (bicipital) groove.',
    '**Fracture → nerve rule**: **surgical neck → axillary nerve** (+ posterior circumflex humeral a.); **midshaft / radial groove → radial nerve** (→ **wrist drop**, + profunda brachii a.); **supracondylar → median nerve + brachial artery** (risk of Volkmann ischemic contracture); **medial epicondyle → ulnar nerve**.',
    'The **brachial artery** (continuation of the axillary at the lower border of teres major) runs medially, gives the profunda brachii, and **bifurcates into radial and ulnar arteries in the cubital fossa**.',
  ],

  mechanism: {
    title: 'Compartment → nerve; fracture site → nerve at risk',
    steps: [
      { id: 's1', label: 'Anterior (flexors) → musculocutaneous n.', emphasis: 'key' },
      { id: 's2', label: 'Posterior (triceps) → radial n.' },
      { id: 's3', label: 'Radial groove fracture → wrist drop' },
      { id: 's4', label: 'Supracondylar → median n. + brachial artery', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Wrist drop + numb dorsal web space after a midshaft humeral fracture', mechanism: 'Radial nerve injury (radial groove)', significance: 'key' },
    { sign: 'Absent radial pulse + pain after a supracondylar fracture', mechanism: 'Brachial artery injury → Volkmann contracture risk', significance: 'key' },
    { sign: 'Weak forearm flexion with intact brachioradialis', mechanism: 'Musculocutaneous nerve lesion (biceps/brachialis)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Test wrist/finger extension after humeral fracture', meaning: 'Radial nerve integrity' },
    { clue: 'Radial pulse + capillary refill in supracondylar fracture', meaning: 'Brachial artery' },
    { clue: 'Radiograph of the humerus', meaning: 'Fracture site' },
  ],

  treatment: [
    { logic: 'Most radial-nerve palsies with closed fractures recover', detail: 'Splint the wrist; observe.' },
    { logic: 'Supracondylar: urgent reduction, check perfusion', detail: 'Prevent compartment syndrome / Volkmann.' },
  ],

  mnemonics: [
    { hook: 'Radial groove = Radial nerve = wRist drop', expansion: ['Midshaft humerus'] },
    { hook: 'Surgical neck→axillary, midshaft→radial, supracondylar→median, medial epicondyle→ulnar', expansion: ['Fracture-to-nerve map'] },
  ],

  traps: [
    {
      questionCategory: 'Nerve injured by a midshaft humeral fracture',
      wrongInstinct: 'A midshaft humeral fracture injures the axillary nerve',
      rightAnswer: 'Midshaft (radial groove) fractures injure the RADIAL nerve → wrist drop; the axillary nerve is injured at the SURGICAL NECK',
      why: 'The radial nerve lies in the spiral groove against the midshaft, so that is the fracture level that threatens it.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A midshaft humeral fracture is complicated by inability to extend the wrist and fingers and numbness over the dorsal first web space. Which nerve is injured?',
      options: [
        { id: 'a', text: 'Axillary nerve' },
        { id: 'b', text: 'Radial nerve' },
        { id: 'c', text: 'Ulnar nerve' },
        { id: 'd', text: 'Median nerve' },
      ],
      answerId: 'b',
      explanation: 'The radial nerve runs in the spiral (radial) groove against the humeral midshaft; injury there causes wrist drop (loss of wrist/finger extension) and sensory loss over the dorsal web space.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Humerus fractures → nerve at risk', svg: HUMERUS_NERVE_INJURY, caption: 'Surgical neck → axillary; radial groove → radial (wrist drop); supracondylar → median + brachial artery; medial epicondyle → ulnar.' },
  ],
};

export default armCompartmentsHumerusFractures;
