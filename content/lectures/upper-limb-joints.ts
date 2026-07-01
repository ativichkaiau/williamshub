import type { Lecture } from '../../lib/types';

export const upperLimbJoints: Lecture = {
  id: 'upper-limb-joints',
  title: 'Joints of the Upper Limb',
  system: 'msk',
  source: 'L4 — Palm of Hand & Joints of Upper Limb',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L4 Palm & UL Joints' },
    { kind: 'disease', label: 'UL joints' },
    { kind: 'mechanism', label: 'Type & movement' },
    { kind: 'exam', label: 'Shoulder dislocation' },
  ],

  highYield: [
    '**Sternoclavicular (SC) joint** = the only bony joint between the upper limb and axial skeleton; a **saddle-type synovial joint** with a fibrocartilage **articular disc** (prevents medial clavicular displacement) — very stable, rarely dislocates. **Acromioclavicular (AC) joint** (plane synovial) is stabilized by coracoclavicular ligaments; **AC separation ("shoulder separation")** follows a fall on the shoulder.',
    '**Glenohumeral (shoulder) joint = ball-and-socket, the most mobile and most commonly dislocated joint.** Stability is chiefly **dynamic (rotator cuff)** rather than bony (shallow glenoid). **Dislocation is usually anterior/inferior** (weakest inferiorly, where the cuff is absent) → risk to the **axillary nerve**.',
    '**Elbow joint = hinge** (humero-ulnar + humero-radial), flexion/extension; stabilized by **medial (ulnar) and lateral (radial) collateral ligaments**; carrying angle. Posterior dislocation is common in children (FOOSH).',
    '**Radioulnar joints (proximal + distal) = pivot joints** producing **pronation/supination**; the radial head is held by the **anular ligament**. In young children the radial head can sublux from the anular ligament → **"nursemaid\'s elbow" (pulled elbow)**.',
    '**Wrist (radiocarpal) joint = ellipsoid (condyloid) synovial** between the radius (+ articular disc) and the proximal carpal row (scaphoid, lunate, triquetrum) → flexion/extension, ab/adduction; the ulna does NOT directly articulate with the carpus (an articular disc intervenes).',
  ],

  mechanism: {
    title: 'Match each joint to its type and characteristic movement',
    steps: [
      { id: 's1', label: 'Glenohumeral: ball-and-socket, cuff-stabilized', emphasis: 'key' },
      { id: 's2', label: 'Anterior/inferior dislocation → axillary nerve risk', emphasis: 'danger' },
      { id: 's3', label: 'Radioulnar pivot → pronation/supination (anular lig.)' },
      { id: 's4', label: 'Wrist = ellipsoid; SC = saddle with disc' },
    ],
  },

  examFindings: [
    { sign: 'Squared-off shoulder + arm held abducted after trauma', mechanism: 'Anterior glenohumeral dislocation', significance: 'key' },
    { sign: 'Toddler holds arm pronated and refuses to use it after a pull', mechanism: 'Nursemaid\'s elbow (radial head subluxation)', significance: 'key' },
    { sign: 'Step deformity over the AC joint after a fall on the shoulder', mechanism: 'Acromioclavicular separation', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Check axillary nerve before/after shoulder reduction', meaning: 'Dislocation risks the nerve' },
    { clue: 'Shoulder radiograph (AP + axillary/Y view)', meaning: 'Direction of dislocation' },
    { clue: 'Test pronation/supination', meaning: 'Radioulnar joint / anular ligament' },
  ],

  treatment: [
    { logic: 'Reduce dislocations; immobilize then rehab', detail: 'Assess neurovascular status each time.' },
    { logic: 'Nursemaid\'s elbow: supinate + flex to reduce', detail: 'Quick relief in children.' },
  ],

  mnemonics: [
    { hook: 'Shoulder = most mobile + most dislocated (usually anterior)', expansion: ['Cuff = dynamic stability'] },
    { hook: 'Radioulnar pivot + anular ligament → pronation/supination (nursemaid\'s elbow)', expansion: ['Wrist = ellipsoid'] },
  ],

  traps: [
    {
      questionCategory: 'Direction of shoulder dislocation',
      wrongInstinct: 'The shoulder usually dislocates posteriorly',
      rightAnswer: 'Most glenohumeral dislocations are ANTERIOR/inferior (the joint is least supported inferiorly); posterior dislocation is rare (seizures/electrocution)',
      why: 'The rotator cuff reinforces the joint everywhere except inferiorly, so the head escapes antero-inferiorly, threatening the axillary nerve.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which statement about the glenohumeral joint is correct?',
      options: [
        { id: 'a', text: 'It is the least mobile joint of the upper limb' },
        { id: 'b', text: 'It is a ball-and-socket joint stabilized mainly by the rotator cuff and most often dislocates anteriorly' },
        { id: 'c', text: 'Its stability is chiefly bony because of a deep glenoid' },
        { id: 'd', text: 'Posterior dislocation is the most common type' },
      ],
      answerId: 'b',
      explanation: 'The glenohumeral joint is a ball-and-socket joint with a shallow glenoid; dynamic rotator-cuff support gives most of its stability, and it most commonly dislocates anteriorly/inferiorly, risking the axillary nerve.',
      tests: 'exam',
    },
  ],
};

export default upperLimbJoints;
