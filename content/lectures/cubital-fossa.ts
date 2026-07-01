import type { Lecture } from '../../lib/types';

export const cubitalFossa: Lecture = {
  id: 'cubital-fossa',
  title: 'Cubital Fossa',
  system: 'msk',
  source: 'L2 — Humerus, Shoulder Region & Cubital Fossa',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L2 Shoulder & Arm' },
    { kind: 'disease', label: 'Cubital fossa' },
    { kind: 'mechanism', label: 'Boundaries & contents' },
    { kind: 'exam', label: 'Venepuncture / brachial pulse' },
  ],

  highYield: [
    'The **cubital fossa** is the triangular hollow anterior to the elbow. **Boundaries: superior** = line between the epicondyles; **medial** = pronator teres; **lateral** = brachioradialis; **floor** = brachialis + supinator; **roof** = skin, fascia, and the **bicipital aponeurosis** (which protects deeper structures).',
    '**Contents, lateral → medial ("TAN"): biceps Tendon, brachial Artery, median Nerve.** The brachial artery **bifurcates into the radial and ulnar arteries** within (or at the apex of) the fossa. The **radial nerve** lies in the floor (between brachialis and brachioradialis), dividing into superficial and deep branches.',
    'In the **roof** run the superficial veins — the **median cubital vein** (connecting cephalic and basilic veins) is the classic site for **venepuncture**; the bicipital aponeurosis separates it from the underlying brachial artery and median nerve (protecting them).',
    'The **brachial pulse** is palpated **medial to the biceps tendon** in the fossa — the site for **blood-pressure auscultation** (over the artery, medial to the tendon).',
    'Clinically: the bicipital aponeurosis is a landmark and shield; misplaced injections/arterial puncture here can injure the median nerve or brachial artery deep to it.',
  ],

  mechanism: {
    title: 'A triangular hollow routing the biceps tendon, artery, and median nerve',
    steps: [
      { id: 's1', label: 'Borders: pronator teres (medial), brachioradialis (lateral)', emphasis: 'key' },
      { id: 's2', label: 'Contents lateral→medial: Tendon, Artery, Nerve (TAN)' },
      { id: 's3', label: 'Brachial artery bifurcates → radial + ulnar' },
      { id: 's4', label: 'Median cubital vein (roof) = venepuncture site' },
    ],
  },

  examFindings: [
    { sign: 'Brachial pulse medial to the biceps tendon', mechanism: 'Brachial artery position in the fossa', significance: 'key' },
    { sign: 'Blood drawn from the median cubital vein', mechanism: 'Superficial vein in the roof', significance: 'key' },
    { sign: 'BP cuff auscultation over the medial fossa', mechanism: 'Brachial artery under the bicipital aponeurosis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Palpate biceps tendon → move medially', meaning: 'Locate brachial artery/median nerve' },
    { clue: 'Median cubital vein for phlebotomy/IV', meaning: 'Roof of the fossa' },
  ],

  treatment: [
    { logic: 'Use the bicipital aponeurosis as a landmark', detail: 'It shields the artery and median nerve during venepuncture.' },
  ],

  mnemonics: [
    { hook: 'Cubital fossa contents lateral→medial = TAN: Tendon, Artery, Nerve', expansion: ['Biceps tendon, brachial artery, median nerve'] },
    { hook: 'Median cubital vein = the blood-draw vein; brachial pulse medial to biceps tendon', expansion: ['Bicipital aponeurosis protects deep structures'] },
  ],

  traps: [
    {
      questionCategory: 'Order of cubital fossa contents',
      wrongInstinct: 'The median nerve lies lateral to the brachial artery in the fossa',
      rightAnswer: 'From lateral to medial it is biceps Tendon, brachial Artery, median Nerve — the median nerve is the most MEDIAL of the three',
      why: 'The mnemonic TAN fixes the order; the artery lies between the tendon and the nerve.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which structures lie in the cubital fossa, listed from lateral to medial?',
      options: [
        { id: 'a', text: 'Median nerve, brachial artery, biceps tendon' },
        { id: 'b', text: 'Biceps tendon, brachial artery, median nerve' },
        { id: 'c', text: 'Brachial artery, biceps tendon, median nerve' },
        { id: 'd', text: 'Biceps tendon, median nerve, brachial artery' },
      ],
      answerId: 'b',
      explanation: 'From lateral to medial the cubital fossa contains the biceps Tendon, brachial Artery, and median Nerve ("TAN"). The brachial artery bifurcates here into the radial and ulnar arteries.',
      tests: 'exam',
    },
  ],
};

export default cubitalFossa;
