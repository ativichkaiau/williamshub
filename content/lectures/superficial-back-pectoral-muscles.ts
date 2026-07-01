import type { Lecture } from '../../lib/types';

export const superficialBackPectoralMuscles: Lecture = {
  id: 'superficial-back-pectoral-muscles',
  title: 'Superficial Back & Pectoral Muscles',
  system: 'msk',
  source: 'L1 — Pectoral Girdle, Superficial Back & Axilla',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L1 Pectoral Girdle & Axilla' },
    { kind: 'disease', label: 'Scapular muscles' },
    { kind: 'mechanism', label: 'Move & anchor the scapula' },
    { kind: 'exam', label: 'Winged scapula' },
  ],

  highYield: [
    '**Superficial (extrinsic) back muscles move the upper limb, not the spine**: **trapezius** (elevates/retracts/rotates scapula — **spinal accessory nerve CN XI**), **latissimus dorsi** (adducts/extends/medially rotates arm — **thoracodorsal nerve**), **levator scapulae + rhomboids** (elevate/retract scapula — **dorsal scapular nerve**).',
    '**Serratus anterior** protracts the scapula and holds it against the thorax; it **rotates the scapula upward** to allow abduction above 90°. **Nerve: long thoracic nerve (C5–C7).**',
    '**Long thoracic nerve injury → "winged scapula"** (medial border lifts off the thorax; the patient cannot abduct the arm fully or push against a wall). **CN XI injury** → trapezius weakness with drooping shoulder and difficulty elevating the arm.',
    '**Pectoral region**: **pectoralis major** (adducts/medially rotates/flexes arm — medial & lateral pectoral nerves) and **pectoralis minor** (stabilizes/depresses scapula), which lies under the **clavipectoral fascia**.',
    '**Scapular movements** (elevation/depression, protraction/retraction, upward/downward rotation) depend on balanced action of trapezius, serratus anterior, rhomboids, and levator scapulae — the "scapular force couple."',
  ],

  mechanism: {
    title: 'Extrinsic muscles position and rotate the scapula',
    steps: [
      { id: 's1', label: 'Trapezius (CN XI) elevates/retracts/rotates scapula', emphasis: 'key' },
      { id: 's2', label: 'Serratus anterior (long thoracic) protracts + upward-rotates' },
      { id: 's3', label: 'Rhomboids/levator (dorsal scapular) retract/elevate' },
      { id: 's4', label: 'Long thoracic injury → winged scapula', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Medial scapular border lifts off the back when pushing a wall', mechanism: 'Serratus anterior palsy (long thoracic nerve)', significance: 'key' },
    { sign: 'Drooping shoulder + weak arm elevation above horizontal', mechanism: 'Trapezius weakness (CN XI)', significance: 'key' },
    { sign: 'Cannot abduct arm past 90° despite intact deltoid', mechanism: 'Loss of scapular upward rotation (serratus)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Wall-push test', meaning: 'Reveals scapular winging (serratus anterior)' },
    { clue: 'Shoulder shrug against resistance', meaning: 'Tests trapezius / CN XI' },
  ],

  treatment: [
    { logic: 'Protect the nerve; physiotherapy', detail: 'Long thoracic and CN XI are vulnerable during axillary/neck surgery.' },
  ],

  mnemonics: [
    { hook: 'Serratus anterior = "boxer\'s muscle"; long thoracic C5-6-7 keeps the scapula on the thorax', expansion: ['"wings of heaven" C5,6,7'] },
    { hook: 'Trapezius = CN XI; Rhomboids/levator = dorsal scapular n', expansion: ['Lat dorsi = thoracodorsal'] },
  ],

  traps: [
    {
      questionCategory: 'Cause of a winged scapula',
      wrongInstinct: 'Winged scapula results from trapezius (CN XI) injury',
      rightAnswer: 'Classic winging is from serratus anterior weakness (long thoracic nerve) — the medial border lifts off the chest wall; CN XI injury droops the shoulder instead',
      why: 'Serratus anterior anchors the scapula to the thorax and rotates it upward; losing it lets the medial border wing out.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'After an axillary lymph node dissection, a patient cannot fully abduct the arm and the medial border of the scapula protrudes when she pushes against a wall. Which nerve was injured?',
      options: [
        { id: 'a', text: 'Spinal accessory (CN XI)' },
        { id: 'b', text: 'Long thoracic nerve' },
        { id: 'c', text: 'Dorsal scapular nerve' },
        { id: 'd', text: 'Thoracodorsal nerve' },
      ],
      answerId: 'b',
      explanation: 'The long thoracic nerve (C5–C7) supplies serratus anterior; injury causes a winged scapula and inability to abduct the arm above horizontal (loss of upward scapular rotation). It is vulnerable during axillary surgery.',
      tests: 'exam',
    },
  ],
};

export default superficialBackPectoralMuscles;
