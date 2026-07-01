import type { Lecture } from '../../lib/types';

export const pectoralGirdleBones: Lecture = {
  id: 'pectoral-girdle-bones',
  title: 'Pectoral Girdle: Clavicle & Scapula',
  system: 'msk',
  source: 'L1 — Pectoral Girdle, Superficial Back & Axilla',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L1 Pectoral Girdle & Axilla' },
    { kind: 'disease', label: 'Clavicle / scapula' },
    { kind: 'mechanism', label: 'Bony landmarks' },
    { kind: 'exam', label: 'Clavicle fracture' },
  ],

  highYield: [
    'The **pectoral (shoulder) girdle = clavicle + scapula**, connecting the upper limb to the axial skeleton at the single bony joint, the **sternoclavicular joint**.',
    'The **clavicle is S-shaped** (convex medially, concave laterally), the **first bone to ossify** and the **last to fuse**. It transmits force from the limb to the trunk and is the **most commonly fractured bone**.',
    '**Clavicle fractures occur at the junction of the middle and lateral thirds** (its weakest point). The **medial fragment is pulled UP** by sternocleidomastoid, the **lateral fragment DOWN** by the weight of the limb (and adducted by pectoralis major).',
    '**Scapula landmarks**: spine, **acromion** (forms the point of the shoulder), **coracoid process**, **glenoid cavity** (shallow → mobile but unstable), supra-/infraspinous fossae, subscapular fossa, and the superior/lateral/medial borders with superior/inferior angles.',
    'The scapula is held to the thorax only by muscles (the "**scapulothoracic joint**" is a physiological, not synovial, articulation) — so scapular position depends on muscle balance (e.g. serratus anterior).',
  ],

  mechanism: {
    title: 'Clavicle + scapula suspend the limb; landmarks anchor muscles',
    steps: [
      { id: 's1', label: 'Clavicle = only bony link limb ↔ axial skeleton', emphasis: 'key' },
      { id: 's2', label: 'Fracture at middle/lateral third junction' },
      { id: 's3', label: 'SCM lifts medial fragment; limb weight drops lateral' },
      { id: 's4', label: 'Scapula held by muscles (scapulothoracic)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Fall on shoulder → bump at the middle-third clavicle, arm supported by other hand', mechanism: 'Clavicle fracture (commonest site)', significance: 'key' },
    { sign: 'Point of the shoulder = acromion', mechanism: 'Scapular landmark', significance: 'supportive' },
    { sign: 'Shallow glenoid cavity', mechanism: 'Explains shoulder mobility + instability', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'AP shoulder radiograph', meaning: 'Clavicle fracture site and displacement' },
    { clue: 'Palpate acromion, coracoid, spine of scapula', meaning: 'Surface landmarks' },
  ],

  treatment: [
    { logic: 'Most clavicle fractures: sling / figure-of-8, heal well', detail: 'Surgery if severely displaced/neurovascular injury.' },
  ],

  mnemonics: [
    { hook: 'Clavicle = 1st to ossify, most commonly fractured, breaks at mid/lateral third', expansion: ['S-shaped'] },
    { hook: 'Medial fragment UP (SCM), lateral fragment DOWN (gravity)', expansion: ['Displacement pattern'] },
  ],

  traps: [
    {
      questionCategory: 'Clavicle fracture site',
      wrongInstinct: 'The clavicle usually breaks at its sternal (medial) end',
      rightAnswer: 'It fractures at the junction of the middle and lateral thirds — the weakest point and transition of its two curves',
      why: 'This is the classic exam site; the medial fragment elevates (SCM) while the lateral drops with the limb.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A child falls onto an outstretched hand and presents supporting the affected arm; a bump is felt over the clavicle. Where does this bone most commonly fracture?',
      options: [
        { id: 'a', text: 'At the sternal (medial) end' },
        { id: 'b', text: 'At the junction of the middle and lateral thirds' },
        { id: 'c', text: 'At the acromial end' },
        { id: 'd', text: 'Through the coracoid process' },
      ],
      answerId: 'b',
      explanation: 'The clavicle most commonly fractures at the junction of its middle and lateral thirds; the medial fragment is elevated by sternocleidomastoid and the lateral fragment is depressed by the weight of the limb.',
      tests: 'exam',
    },
  ],
};

export default pectoralGirdleBones;
