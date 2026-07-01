import type { Lecture } from '../../lib/types';

export const lowerLimbBonesHipJoint: Lecture = {
  id: 'lower-limb-bones-hip-joint',
  title: 'Lower Limb Bones & Hip Joint',
  system: 'msk',
  source: 'L19 — Lower Limb Bones & Anterior/Medial Thigh',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L19 Bones & Ant/Med Thigh' },
    { kind: 'disease', label: 'Femur / hip joint' },
    { kind: 'mechanism', label: 'Bony landmarks' },
    { kind: 'exam', label: 'Femoral neck fracture / AVN' },
  ],

  highYield: [
    'The **hip bone = ilium + ischium + pubis**, fused at the **acetabulum**. Landmarks: ASIS/iliac crest, ischial tuberosity (sitting), ischial spine, pubic tubercle. The **femur** has a head, neck, greater + lesser trochanters, and the linea aspera; the **patella** is the largest sesamoid.',
    'The **hip joint = a ball-and-socket** between the femoral head and the **acetabulum** (deepened by the labrum) — very **stable** (bony + strong iliofemoral/pubofemoral/ischiofemoral ligaments), unlike the mobile-but-unstable shoulder.',
    'The **femoral head is supplied mainly by the medial circumflex femoral artery** (retinacular vessels along the neck) + a small artery of the ligamentum teres. An **intracapsular (femoral neck) fracture disrupts this supply → avascular necrosis** of the head — a classic elderly osteoporotic fall injury.',
    'The **tibia** is the weight-bearing bone (medial malleolus at the ankle); the **fibula** is non-weight-bearing (lateral malleolus, muscle attachment). Together with the interosseous membrane they stabilize the ankle mortise.',
    '**Hip dislocation is usually posterior** (dashboard injury with the hip flexed/adducted) → the limb is shortened, flexed, adducted, internally rotated, and the **sciatic nerve is at risk**.',
  ],

  mechanism: {
    title: 'A stable hip with a vulnerable femoral-head blood supply',
    steps: [
      { id: 's1', label: 'Hip bone (ilium/ischium/pubis) + acetabulum', emphasis: 'key' },
      { id: 's2', label: 'Hip = ball-and-socket, very stable' },
      { id: 's3', label: 'Medial circumflex femoral a. feeds the femoral head' },
      { id: 's4', label: 'Neck fracture → avascular necrosis', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Elderly fall: leg shortened + externally rotated, unable to weight-bear', mechanism: 'Femoral neck fracture', significance: 'key' },
    { sign: 'AVN of the femoral head after an intracapsular fracture', mechanism: 'Disrupted medial circumflex femoral supply', significance: 'key' },
    { sign: 'Shortened, flexed, adducted, internally rotated limb after a dashboard injury', mechanism: 'Posterior hip dislocation (sciatic nerve at risk)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Hip radiograph (Garden classification)', meaning: 'Femoral neck fracture / displacement' },
    { clue: 'Assess sciatic nerve after hip dislocation', meaning: 'Common associated injury' },
  ],

  treatment: [
    { logic: 'Displaced intracapsular fracture: arthroplasty (replace head)', detail: 'AVN risk makes fixation unreliable.' },
    { logic: 'Extracapsular fracture: internal fixation', detail: 'Blood supply preserved.' },
  ],

  mnemonics: [
    { hook: 'Femoral head supplied mainly by the medial circumflex femoral artery', expansion: ['Neck fracture → AVN'] },
    { hook: 'Tibia = weight-bearing (medial malleolus); fibula = non-weight-bearing (lateral malleolus)', expansion: ['Ankle mortise'] },
  ],

  traps: [
    {
      questionCategory: 'Blood supply of the femoral head',
      wrongInstinct: 'The artery of the ligamentum teres is the main supply to the femoral head in adults',
      rightAnswer: 'In adults the MEDIAL CIRCUMFLEX FEMORAL artery (via retinacular vessels) is the dominant supply; the ligamentum teres artery is minor — hence a neck fracture risks avascular necrosis',
      why: 'The retinacular branches run along the neck, so an intracapsular fracture cuts off the head\'s main blood supply.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Why does an intracapsular femoral neck fracture in an elderly patient carry a high risk of avascular necrosis of the femoral head?',
      options: [
        { id: 'a', text: 'It disrupts the artery of the ligamentum teres, the main adult supply' },
        { id: 'b', text: 'It disrupts the retinacular branches of the medial circumflex femoral artery, the dominant supply' },
        { id: 'c', text: 'The femoral head has no arterial supply' },
        { id: 'd', text: 'It compresses the femoral nerve' },
      ],
      answerId: 'b',
      explanation: 'The femoral head is supplied mainly by retinacular branches of the medial circumflex femoral artery running along the neck; an intracapsular neck fracture tears these vessels, risking avascular necrosis.',
      tests: 'exam',
    },
  ],
};

export default lowerLimbBonesHipJoint;
