import type { Lecture } from '../../lib/types';

export const fractureClassification: Lecture = {
  id: 'fracture-classification',
  title: 'Fractures & Joint Injuries: Classification',
  system: 'msk',
  source: 'L6 — Fracture & Fracture Healing',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'MSK' },
    { kind: 'lecture', label: 'L6 Fracture & Healing' },
    { kind: 'mechanism', label: 'Fracture & joint types' },
    { kind: 'exam', label: 'Open vs closed · dislocation' },
  ],

  highYield: [
    '**A fracture is a break in the continuity of bone.** The first, most important split: **closed (simple)** — skin intact — vs **open (compound)** — the bone has broken through the skin, so there is a **high infection risk** and it needs urgent debridement/antibiotics.',
    '**By fracture pattern/completeness:** **complete** (both cortices) vs **incomplete**; **transverse, oblique, spiral** (twisting force), **comminuted** (≥3 fragments), and **greenstick** (incomplete, bends — typical of children\'s soft bone).',
    '**Special types:** **pathological** (through diseased/weakened bone — tumour, osteoporosis, metastasis — from trivial force), **stress/fatigue** (repetitive loading), **avulsion** (a tendon/ligament pulls off a bone fragment), and **displacement** descriptors (angulation, rotation, shortening).',
    '**Joint injuries.** **Dislocation** = **complete loss of contact** between the articular surfaces of a joint; **subluxation** = **partial** displacement (surfaces still partly in contact). **Sprain** = ligament injury; **strain** = muscle/tendon injury.',
    '**Joint (articulation) types by structure/mobility** (context for these injuries): **fibrous — synarthrosis (immovable**, e.g. skull sutures); **cartilaginous — amphiarthrosis (slightly movable**, e.g. pubic symphysis, intervertebral discs); **synovial — diarthrosis (freely movable**, e.g. knee, hip — most prone to dislocation).',
  ],

  mechanism: {
    title: 'Describe: skin → pattern → special → joint',
    steps: [
      { id: 's1', label: 'Closed (simple) vs open (compound → infection risk)', emphasis: 'key' },
      { id: 's2', label: 'Pattern: transverse/oblique/spiral/comminuted/greenstick', emphasis: 'key' },
      { id: 's3', label: 'Special: pathological, stress, avulsion' },
      { id: 's4', label: 'Dislocation = complete; subluxation = partial', emphasis: 'key' },
      { id: 's5', label: 'Joints: synarthrosis / amphiarthrosis / diarthrosis' },
    ],
  },

  examFindings: [
    { sign: 'Bone protruding through the skin', mechanism: 'Open (compound) fracture → infection risk', significance: 'key' },
    { sign: 'Incomplete bending fracture in a child', mechanism: 'Greenstick fracture (soft paediatric bone)', significance: 'key' },
    { sign: 'Fracture through bone with a lytic lesion after minor force', mechanism: 'Pathological fracture (tumour/osteoporosis)', significance: 'key' },
    { sign: 'Complete loss of joint surface contact', mechanism: 'Dislocation (subluxation = partial)', significance: 'key' },
    { sign: '≥3 bone fragments', mechanism: 'Comminuted fracture', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Fracture with the highest infection risk', meaning: 'Open (compound) fracture' },
    { clue: 'Incomplete fracture typical of children', meaning: 'Greenstick' },
    { clue: 'Fracture from trivial force through weakened bone', meaning: 'Pathological fracture' },
    { clue: 'Partial vs complete joint surface displacement', meaning: 'Subluxation vs dislocation' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Classification guides management: open fractures need urgent washout + antibiotics; pathological fractures need the underlying disease treated; displaced fractures need reduction. Healing then follows ([[fracture-healing]]). Bone/joint development: [[msk-embryo-limb-joints]].' },
  ],

  mnemonics: [
    { hook: 'Open = "bone Out, infection"; Closed = skin intact', expansion: ['Greenstick = kids; comminuted = ≥3 pieces'] },
    { hook: 'Dislocation = Done (complete); subluxation = Sort-of (partial)', expansion: ['Joint surface contact'] },
  ],

  traps: [
    {
      questionCategory: 'Dislocation vs subluxation',
      wrongInstinct: 'A subluxation and a dislocation mean the same degree of joint displacement',
      rightAnswer: 'A dislocation is COMPLETE loss of contact between the joint surfaces; a subluxation is PARTIAL displacement (surfaces still partly in contact)',
      why: 'Degree differs: complete (dislocation) vs partial (subluxation) — an easy exam distinction.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A fracture in which the overlying skin is broken and the bone is exposed to the environment is termed:',
      options: [
        { id: 'a', text: 'Closed (simple) fracture' },
        { id: 'b', text: 'Open (compound) fracture' },
        { id: 'c', text: 'Greenstick fracture' },
        { id: 'd', text: 'Stress fracture' },
      ],
      answerId: 'b',
      explanation: 'An open (compound) fracture breaches the skin, carrying a high infection risk and requiring urgent debridement and antibiotics. A closed fracture has intact skin.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Complete loss of contact between the articular surfaces of a joint is called:',
      options: [
        { id: 'a', text: 'Subluxation' },
        { id: 'b', text: 'Sprain' },
        { id: 'c', text: 'Dislocation' },
        { id: 'd', text: 'Strain' },
      ],
      answerId: 'c',
      explanation: 'A dislocation is complete displacement with no contact between the joint surfaces; a subluxation is partial. A sprain injures a ligament, a strain a muscle/tendon.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default fractureClassification;
