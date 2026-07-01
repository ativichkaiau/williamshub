import type { Lecture } from '../../lib/types';
import { BRACHIAL_PLEXUS } from '../../lib/figures';

export const axillaBrachialPlexus: Lecture = {
  id: 'axilla-brachial-plexus',
  title: 'Axilla & Brachial Plexus',
  system: 'msk',
  source: 'L1 — Pectoral Girdle, Superficial Back & Axilla',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L1 Pectoral Girdle & Axilla' },
    { kind: 'disease', label: 'Axilla / plexus' },
    { kind: 'mechanism', label: 'Roots→trunks→cords→branches' },
    { kind: 'exam', label: 'Erb / Klumpke palsy' },
  ],

  highYield: [
    'The **axilla** is the pyramidal space between the arm and thorax that transmits the neurovascular bundle to the limb. Its **anterior wall** = pectoralis major/minor, **posterior wall** = subscapularis/teres major/latissimus dorsi, **medial wall** = serratus anterior + ribs, **lateral wall** = intertubercular groove of the humerus. Contents: **axillary artery/vein, brachial plexus (cords), and axillary lymph nodes**.',
    'The **axillary artery** (continuation of the subclavian) is divided by pectoralis minor into **3 parts** (1 / 2 / 3 branches respectively); the surrounding **brachial plexus cords are named by their relation to its 2nd part** (lateral, posterior, medial).',
    '**Brachial plexus order: Roots (C5–T1) → Trunks (upper/middle/lower) → Divisions (anterior/posterior) → Cords (lateral/posterior/medial) → Branches** ("Real Texans Drink Cold Beer"). The **5 terminal branches**: musculocutaneous, axillary, radial, median, ulnar.',
    '**Erb-Duchenne palsy = upper trunk (C5–C6)** injury (excessive head–shoulder separation) → arm adducted, medially rotated, forearm pronated = **"waiter\'s tip"**. **Klumpke palsy = lower trunk (C8–T1)** (arm hyperabduction) → intrinsic hand muscle loss = **"claw hand"** ± Horner syndrome.',
    '**Axillary lymph nodes drain most of the breast** (≈75%) and the upper limb — so they are central to breast-cancer staging; dissection risks the **long thoracic** (winged scapula) and **thoracodorsal** nerves.',
  ],

  mechanism: {
    title: 'The axilla routes the plexus and vessels to the limb',
    steps: [
      { id: 's1', label: 'Axillary artery: 3 parts around pectoralis minor', emphasis: 'key' },
      { id: 's2', label: 'Cords named by relation to the 2nd part' },
      { id: 's3', label: 'Roots→Trunks→Divisions→Cords→Branches' },
      { id: 's4', label: 'Upper trunk = Erb; lower trunk = Klumpke', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Adducted, medially rotated arm, pronated forearm ("waiter\'s tip")', mechanism: 'Erb palsy (upper trunk C5-6)', significance: 'key' },
    { sign: 'Clawed hand + intrinsic muscle loss ± Horner', mechanism: 'Klumpke palsy (lower trunk C8-T1)', significance: 'key' },
    { sign: 'Arm lymphedema / winged scapula after axillary node clearance', mechanism: 'Lymphatic + long thoracic nerve disruption', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Localize the deficit to root/trunk/cord/branch', meaning: 'Maps the lesion along the plexus' },
    { clue: 'Sentinel node / axillary staging in breast cancer', meaning: 'Axilla drains ~75% of the breast' },
  ],

  treatment: [
    { logic: 'Protect long thoracic & thoracodorsal nerves in surgery', detail: 'And the plexus during clavicle/shoulder trauma.' },
  ],

  mnemonics: [
    { hook: 'Roots Trunks Divisions Cords Branches — "Real Texans Drink Cold Beer"', expansion: ['5 terminal branches'] },
    { hook: 'Erb = Up (upper trunk, waiter\'s tip); Klumpke = Klaw (lower trunk)', expansion: ['C5-6 vs C8-T1'] },
  ],

  traps: [
    {
      questionCategory: 'Erb vs Klumpke palsy',
      wrongInstinct: 'A "waiter\'s tip" posture comes from a lower trunk (C8–T1) lesion',
      rightAnswer: 'Waiter\'s tip is UPPER trunk (C5–C6) = Erb palsy; the lower trunk (C8–T1) lesion (Klumpke) causes a clawed hand from intrinsic muscle loss',
      why: 'Upper-trunk loss affects shoulder abductors/lateral rotators and elbow flexors; lower-trunk loss hits the small hand muscles.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A newborn delivered with shoulder dystocia holds the affected arm adducted and medially rotated with the forearm pronated ("waiter\'s tip"). Which part of the brachial plexus is injured?',
      options: [
        { id: 'a', text: 'Lower trunk (C8–T1)' },
        { id: 'b', text: 'Upper trunk (C5–C6)' },
        { id: 'c', text: 'Posterior cord' },
        { id: 'd', text: 'Medial cord' },
      ],
      answerId: 'b',
      explanation: 'Erb-Duchenne palsy from upper-trunk (C5–C6) injury gives the "waiter\'s tip" posture (loss of abduction, lateral rotation, and elbow flexion). Lower-trunk (C8–T1) injury is Klumpke palsy with a clawed hand.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Brachial plexus', svg: BRACHIAL_PLEXUS, caption: 'Roots → trunks → divisions → cords → branches; upper-trunk = Erb, lower-trunk = Klumpke.' },
  ],
};

export default axillaBrachialPlexus;
