import type { Lecture } from '../../lib/types';
import { FEMORAL_TRIANGLE } from '../../lib/figures';

export const femoralTriangleAnteriorThigh: Lecture = {
  id: 'femoral-triangle-anterior-thigh',
  title: 'Femoral Triangle & Anterior Thigh',
  system: 'msk',
  source: 'L19 — Lower Limb Bones & Anterior/Medial Thigh',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L19 Bones & Ant/Med Thigh' },
    { kind: 'disease', label: 'Femoral triangle' },
    { kind: 'mechanism', label: 'NAVEL contents' },
    { kind: 'exam', label: 'Femoral hernia / quadriceps' },
  ],

  highYield: [
    'The **femoral triangle** is bounded by the **inguinal ligament (superior), sartorius (lateral), and adductor longus (medial)**. Its contents, **lateral → medial = "NAVEL": femoral Nerve, femoral Artery, femoral Vein, Empty space (femoral canal), Lymphatics**.',
    'The **femoral sheath** (from transversalis + iliac fascia) wraps the **artery, vein, and femoral canal but NOT the femoral nerve** (which lies outside it, laterally). The **femoral canal** (medial compartment, containing a lymph node) is the potential space for a **femoral hernia**.',
    '**Femoral hernia** passes **BELOW and lateral to the pubic tubercle** (through the femoral ring/canal), is **more common in women**, and has a **high risk of strangulation** (narrow, rigid ring). An **inguinal hernia** lies **above and medial to the pubic tubercle**.',
    'The **anterior thigh muscles are femoral-nerve territory**: the **quadriceps femoris** (rectus femoris + 3 vasti) **extend the knee** (patellar tendon/reflex); **sartorius** flexes/laterally rotates the hip and flexes the knee; **iliopsoas** flexes the hip.',
    'The **adductor (subsartorial/Hunter) canal** runs from the apex of the femoral triangle to the adductor hiatus, transmitting the **femoral artery/vein and the saphenous nerve** (the artery becomes the popliteal after the hiatus). The **femoral pulse** is at the **mid-inguinal point**.',
  ],

  mechanism: {
    title: 'NAVEL in the triangle; femoral nerve powers knee extension',
    steps: [
      { id: 's1', label: 'Borders: inguinal lig, sartorius, adductor longus', emphasis: 'key' },
      { id: 's2', label: 'Contents lateral→medial: NAVEL' },
      { id: 's3', label: 'Femoral canal (medial) → femoral hernia' },
      { id: 's4', label: 'Femoral nerve → quadriceps (knee extension)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Groin lump BELOW & lateral to the pubic tubercle, often strangulating', mechanism: 'Femoral hernia (femoral canal)', significance: 'key' },
    { sign: 'Weak knee extension + absent patellar reflex', mechanism: 'Femoral nerve lesion (quadriceps)', significance: 'key' },
    { sign: 'Femoral pulse at the mid-inguinal point', mechanism: 'Femoral artery in the triangle', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Lump relation to the pubic tubercle', meaning: 'Femoral (below/lateral) vs inguinal (above/medial)' },
    { clue: 'Test knee extension + patellar reflex', meaning: 'Femoral nerve' },
  ],

  treatment: [
    { logic: 'Femoral hernia: prompt repair (high strangulation risk)', detail: 'Narrow rigid femoral ring.' },
    { logic: 'Femoral vessels: access point for angiography/catheters', detail: 'Mid-inguinal point.' },
  ],

  mnemonics: [
    { hook: 'Femoral triangle contents lateral→medial = NAVEL (Nerve, Artery, Vein, Empty space, Lymphatics)', expansion: ['Nerve is OUTSIDE the sheath'] },
    { hook: 'Femoral hernia = below & lateral to pubic tubercle; inguinal = above & medial', expansion: ['Femoral more common in women'] },
  ],

  traps: [
    {
      questionCategory: 'Femoral vs inguinal hernia location',
      wrongInstinct: 'A femoral hernia lies above and medial to the pubic tubercle',
      rightAnswer: 'A FEMORAL hernia is BELOW and LATERAL to the pubic tubercle (through the femoral canal); an INGUINAL hernia is above and medial to it',
      why: 'The pubic tubercle is the reference: femoral hernias emerge below the inguinal ligament through the narrow femoral ring, which is why they strangulate readily.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Listed from lateral to medial, what are the contents of the femoral triangle?',
      options: [
        { id: 'a', text: 'Femoral vein, artery, nerve' },
        { id: 'b', text: 'Femoral Nerve, Artery, Vein, Empty space (canal), Lymphatics' },
        { id: 'c', text: 'Femoral artery, vein, nerve, lymphatics' },
        { id: 'd', text: 'Lymphatics, vein, artery, nerve' },
      ],
      answerId: 'b',
      explanation: 'From lateral to medial the femoral triangle contains the femoral Nerve, Artery, Vein, Empty space (femoral canal), and Lymphatics ("NAVEL"). The femoral nerve lies outside the femoral sheath.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Femoral triangle contents', svg: FEMORAL_TRIANGLE, caption: 'NAVEL lateral→medial; the femoral canal (medial) is the site of a femoral hernia.' },
  ],
};

export default femoralTriangleAnteriorThigh;
