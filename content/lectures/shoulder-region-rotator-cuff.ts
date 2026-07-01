import type { Lecture } from '../../lib/types';

export const shoulderRegionRotatorCuff: Lecture = {
  id: 'shoulder-region-rotator-cuff',
  title: 'Shoulder Region & Rotator Cuff',
  system: 'msk',
  source: 'L2 — Humerus, Shoulder Region & Cubital Fossa',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L2 Shoulder & Arm' },
    { kind: 'disease', label: 'Rotator cuff' },
    { kind: 'mechanism', label: 'Cuff stabilizes the joint' },
    { kind: 'exam', label: 'SITS / axillary nerve' },
  ],

  highYield: [
    'The **6 scapulohumeral (intrinsic) muscles**: **deltoid** (main abductor 15–90°, axillary nerve), **teres major** (adducts/medially rotates, lower subscapular nerve), and the **4 rotator-cuff muscles**.',
    '**Rotator cuff = SITS: Supraspinatus (initiates abduction 0–15°; suprascapular n), Infraspinatus (lateral rotation; suprascapular n), Teres minor (lateral rotation; axillary n), Subscapularis (medial rotation; upper/lower subscapular n)** — they dynamically stabilize the humeral head in the shallow glenoid.',
    '**Supraspinatus is the most commonly torn/impinged tendon** (it passes under the coraco-acromial arch/subacromial bursa) → a **painful arc** (~60–120° abduction) and weak initiation of abduction.',
    '**Posterior shoulder spaces**: the **quadrangular space** (teres minor/major, long head triceps, surgical neck) transmits the **axillary nerve + posterior circumflex humeral vessels**; the **triangular space** transmits the **circumflex scapular vessels**; the **triangular interval** transmits the **radial nerve + profunda brachii**.',
    '**Axillary nerve injury** (surgical-neck fracture or anterior shoulder dislocation) → **deltoid paralysis** (loss of abduction, flattened shoulder contour) and **loss of sensation over the lower deltoid ("regimental badge" area)**.',
  ],

  mechanism: {
    title: 'Cuff muscles hold the head in the glenoid; deltoid powers abduction',
    steps: [
      { id: 's1', label: 'Supraspinatus initiates abduction (0–15°)', emphasis: 'key' },
      { id: 's2', label: 'Deltoid abducts 15–90°' },
      { id: 's3', label: 'Infraspinatus/teres minor laterally rotate; subscapularis medially' },
      { id: 's4', label: 'Axillary nerve injury → deltoid palsy + badge-area numbness', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Painful arc 60–120° of abduction', mechanism: 'Supraspinatus impingement/tear', significance: 'key' },
    { sign: 'Flattened shoulder + numb "regimental badge" area after dislocation', mechanism: 'Axillary nerve injury', significance: 'key' },
    { sign: 'Weak lateral rotation of the arm', mechanism: 'Infraspinatus/teres minor (cuff) weakness', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Empty-can (Jobe) test', meaning: 'Supraspinatus' },
    { clue: 'Sensation over the lower deltoid + deltoid power', meaning: 'Axillary nerve' },
    { clue: 'MRI / ultrasound of the cuff', meaning: 'Tendon tear' },
  ],

  treatment: [
    { logic: 'Cuff tendinopathy: physio, subacromial injection', detail: 'Repair for full-thickness tears.' },
    { logic: 'Reduce dislocation, check axillary nerve before & after', detail: 'Document deltoid/badge sensation.' },
  ],

  mnemonics: [
    { hook: 'Rotator cuff = SITS (Supraspinatus, Infraspinatus, Teres minor, Subscapularis)', expansion: ['Subscapularis is the only medial rotator + only anterior one'] },
    { hook: 'Supraspinatus starts abduction (0–15°), deltoid continues', expansion: ['Painful arc = supraspinatus'] },
  ],

  traps: [
    {
      questionCategory: 'Which muscle initiates abduction',
      wrongInstinct: 'The deltoid initiates arm abduction from 0°',
      rightAnswer: 'Supraspinatus initiates the first ~15°; the deltoid then abducts 15–90° — so a supraspinatus tear weakens the START of abduction',
      why: 'Deltoid has a poor mechanical angle at 0°, so the cuff (supraspinatus) begins the movement.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'After an anterior shoulder dislocation, a patient cannot abduct the arm and has numbness over the lateral aspect of the upper arm ("regimental badge"). Which nerve is injured?',
      options: [
        { id: 'a', text: 'Suprascapular nerve' },
        { id: 'b', text: 'Axillary nerve' },
        { id: 'c', text: 'Radial nerve' },
        { id: 'd', text: 'Musculocutaneous nerve' },
      ],
      answerId: 'b',
      explanation: 'The axillary nerve (posterior cord, C5–C6) runs through the quadrangular space and is injured by shoulder dislocation or surgical-neck fracture, paralyzing the deltoid and numbing the "regimental badge" area over the lower deltoid.',
      tests: 'exam',
    },
  ],
};

export default shoulderRegionRotatorCuff;
